import mysql, { type Pool, type RowDataPacket } from "mysql2/promise";

import type { CityLandingPageRecord, CityLandingPageSummary } from "@/types/city-pages";

type CityPageRow = RowDataPacket & {
  id?: number;
  updated_at?: string | Date | null;
  city: string | null;
  area: string | null;
  slug: string | null;
  hero_image_url?: string | null;
  page_title: string | null;
  meta_desc: string | null;
  hero_promo: string | null;
  hero_h1: string | null;
  hero_p: string | null;
  faq_q1: string | null;
  faq_a1: string | null;
  faq_q2: string | null;
  faq_a2: string | null;
  faq_q3: string | null;
  faq_a3: string | null;
};

type CityPageQueryOptions = {
  host?: string | string[];
};

type ColumnDefinitionRow = RowDataPacket & {
  Field: string;
};

let pool: Pool | null = null;
let pagesTableColumnsPromise: Promise<Set<string>> | null = null;
let databaseInitializationPromise: Promise<Pool> | null = null;

const HERO_IMAGE_COLUMN_CANDIDATES = [
  "hero_image",
  "service_image",
  "image_url",
  "banner_image",
  "featured_image",
] as const;

function env(name: string) {
  return process.env[name]?.toString().trim() || "";
}

function getDatabaseConfig() {
  const host = env("MYSQL_HOST");
  const user = env("MYSQL_USER");
  const database = env("MYSQL_DATABASE");
  const port = Number(env("MYSQL_PORT") || "3306");
  const connectionLimit = Number(env("MYSQL_CONNECTION_LIMIT") || "10");

  return {
    host,
    user,
    database,
    port,
    connectionLimit,
    hasPassword: Boolean(env("MYSQL_PASSWORD")),
  };
}

function createPool() {
  if (pool) {
    return pool;
  }

  const config = getDatabaseConfig();

  if (!config.host || !config.user || !config.database) {
    throw new Error(
      "MySQL is not configured. Set MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, and MYSQL_DATABASE.",
    );
  }

  pool = mysql.createPool({
    host: config.host,
    port: config.port,
    user: config.user,
    password: env("MYSQL_PASSWORD"),
    database: config.database,
    waitForConnections: true,
    connectionLimit: config.connectionLimit,
    charset: "utf8mb4",
    ssl: {
      rejectUnauthorized: false
    }
  });

  return pool;
}

function logDatabaseStatus(
  status: "initializing" | "connected" | "failed" | "not-configured",
  details: Record<string, unknown>,
) {
  const message = `[db:city-pages] ${status}`;

  if (status === "failed" || status === "not-configured") {
    console.error(message, details);
    return;
  }

  console.info(message, details);
}

async function initializeDatabaseConnection() {
  if (databaseInitializationPromise) {
    return databaseInitializationPromise;
  }

  databaseInitializationPromise = (async () => {
    const config = getDatabaseConfig();

    if (!config.host || !config.user || !config.database) {
      throw new Error(
        "MySQL is not configured. Set MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, and MYSQL_DATABASE.",
      );
    }

    const startedAt = Date.now();
    const currentPool = createPool();

    logDatabaseStatus("initializing", {
      status: "initializing",
      host: config.host,
      user: config.user,
      database: config.database,
      port: config.port,
      connectionLimit: config.connectionLimit,
      waitForConnections: true,
      charset: "utf8mb4",
      hasPassword: config.hasPassword,
      timestamp: new Date().toISOString(),
    });

    const connection = await currentPool.getConnection();
    const threadId = connection.threadId;

    try {
      await connection.ping();
    } finally {
      connection.release();
    }

    logDatabaseStatus("connected", {
      status: "connected",
      host: config.host,
      user: config.user,
      database: config.database,
      port: config.port,
      connectionLimit: config.connectionLimit,
      waitForConnections: true,
      charset: "utf8mb4",
      threadId,
      elapsedMs: Date.now() - startedAt,
      timestamp: new Date().toISOString(),
    });

    return currentPool;
  })().catch((error) => {
    databaseInitializationPromise = null;

    const config = getDatabaseConfig();
    const isNotConfigured =
      error instanceof Error &&
      error.message ===
        "MySQL is not configured. Set MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, and MYSQL_DATABASE.";

    logDatabaseStatus(isNotConfigured ? "not-configured" : "failed", {
      status: isNotConfigured ? "not-configured" : "failed",
      host: config.host || null,
      user: config.user || null,
      database: config.database || null,
      port: config.port,
      connectionLimit: config.connectionLimit,
      waitForConnections: true,
      charset: "utf8mb4",
      hasPassword: config.hasPassword,
      timestamp: new Date().toISOString(),
      errorName: error instanceof Error ? error.name : "Error",
      errorMessage: error instanceof Error ? error.message : String(error),
    });

    throw error;
  });

  return databaseInitializationPromise;
}

async function queryCityPages<T extends RowDataPacket>(query: string, values: unknown[] = []) {
  const dbPool = await initializeDatabaseConnection();
  const [rows] = await dbPool.query<T[]>(query, values);
  return rows;
}

async function getPagesTableColumns() {
  if (!pagesTableColumnsPromise) {
    pagesTableColumnsPromise = queryCityPages<ColumnDefinitionRow>("SHOW COLUMNS FROM pages")
      .then((rows) => new Set(rows.map((row) => row.Field.toLowerCase())))
      .catch((error) => {
        pagesTableColumnsPromise = null;
        throw error;
      });
  }

  return pagesTableColumnsPromise;
}

function buildHeroImageSelectClause(columns: Set<string>) {
  const imageColumn = HERO_IMAGE_COLUMN_CANDIDATES.find((candidate) => columns.has(candidate));

  if (!imageColumn) {
    return "NULL AS hero_image_url";
  }

  return `pages.\`${imageColumn}\` AS hero_image_url`;
}

function cleanText(value: string | null | undefined) {
  return value?.trim() || "";
}

function numberEnv(name: string) {
  const rawValue = env(name);

  if (!rawValue) {
    return null;
  }

  const value = Number.parseInt(rawValue, 10);
  return Number.isFinite(value) ? value : null;
}

function normalizeDomain(value: string | string[] | undefined) {
  const rawValue = Array.isArray(value) ? value[0] : value;

  if (!rawValue) {
    return "";
  }

  return rawValue.trim().toLowerCase().replace(/^https?:\/\//, "").split(":")[0] || "";
}

function getPageQueryFilters(options: CityPageQueryOptions = {}) {
  const websiteId = numberEnv("CITY_PAGES_WEBSITE_ID");
  const languageCode = env("CITY_PAGES_LANGUAGE_CODE");
  const configuredDomain = normalizeDomain(env("CITY_PAGES_WEBSITE_DOMAIN"));
  const requestDomain = normalizeDomain(options.host);
  const websiteDomain =
    configuredDomain || (requestDomain && requestDomain !== "localhost" ? requestDomain : "");

  return {
    websiteId,
    languageCode,
    websiteDomain,
  };
}

function buildPageScopeClause(options: CityPageQueryOptions = {}) {
  const filters = getPageQueryFilters(options);
  const clauses: string[] = [];
  const values: unknown[] = [];
  let join = "";

  if (filters.websiteDomain) {
    join = "INNER JOIN websites ON websites.id = pages.website_id";
    clauses.push("LOWER(websites.domain) = ?");
    values.push(filters.websiteDomain);
  }

  if (filters.websiteId !== null) {
    clauses.push("pages.website_id = ?");
    values.push(filters.websiteId);
  }

  if (filters.languageCode) {
    clauses.push("pages.language_code = ?");
    values.push(filters.languageCode);
  }

  return {
    join,
    where: clauses.length ? ` AND ${clauses.join(" AND ")}` : "",
    values,
  };
}

function mapCityPage(row: CityPageRow): CityLandingPageRecord {
  return {
    id: typeof row.id === "number" ? row.id : undefined,
    updated_at: row.updated_at ? new Date(row.updated_at).toISOString() : null,
    city: cleanText(row.city),
    area: cleanText(row.area),
    slug: cleanText(row.slug),
    hero_image_url: cleanText(row.hero_image_url),
    page_title: cleanText(row.page_title),
    meta_desc: cleanText(row.meta_desc),
    hero_promo: cleanText(row.hero_promo),
    hero_h1: cleanText(row.hero_h1),
    hero_p: cleanText(row.hero_p),
    faq_q1: cleanText(row.faq_q1),
    faq_a1: cleanText(row.faq_a1),
    faq_q2: cleanText(row.faq_q2),
    faq_a2: cleanText(row.faq_a2),
    faq_q3: cleanText(row.faq_q3),
    faq_a3: cleanText(row.faq_a3),
  };
}

export async function getCityPageBySlug(
  slug: string,
  options: CityPageQueryOptions = {},
): Promise<CityLandingPageRecord | null> {
  const normalizedSlug = slug.trim();

  if (!normalizedSlug) {
    return null;
  }

  const scope = buildPageScopeClause(options);
  const pagesTableColumns = await getPagesTableColumns();
  const heroImageSelectClause = buildHeroImageSelectClause(pagesTableColumns);

  const rows = await queryCityPages<CityPageRow>(
    `
      SELECT
        pages.id,
        pages.city,
        pages.area,
        pages.slug,
        ${heroImageSelectClause},
        pages.page_title,
        pages.meta_desc,
        pages.hero_promo,
        pages.hero_h1,
        pages.hero_p,
        pages.faq_q1,
        pages.faq_a1,
        pages.faq_q2,
        pages.faq_a2,
        pages.faq_q3,
        pages.faq_a3,
        pages.updated_at
      FROM pages
      ${scope.join}
      WHERE pages.slug = ?${scope.where}
      ORDER BY pages.updated_at DESC, pages.id DESC
      LIMIT 1
    `,
    [normalizedSlug, ...scope.values],
  );

  return rows[0] ? mapCityPage(rows[0]) : null;
}

function normalizePathSegment(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function getCityPageByRoute(params: { city?: string; slug: string; host?: string | string[] }) {
  const page = await getCityPageBySlug(params.slug, { host: params.host });

  if (!page) {
    return null;
  }

  if (params.city && normalizePathSegment(params.city) !== normalizePathSegment(page.city)) {
    return null;
  }

  return page;
}

export async function getCityPageSummaries(
  limit = 24,
  options: CityPageQueryOptions = {},
): Promise<CityLandingPageSummary[]> {
  const sanitizedLimit = Number.isFinite(limit) ? Math.max(1, Math.min(1000, Math.floor(limit))) : 24;
  const scope = buildPageScopeClause(options);
  const rows = await queryCityPages<CityPageRow>(
    `
      SELECT
        pages.city,
        pages.area,
        pages.slug,
        pages.page_title,
        pages.meta_desc
      FROM pages
      ${scope.join}
      WHERE 1 = 1${scope.where}
      ORDER BY pages.city ASC, pages.area ASC, pages.slug ASC, pages.updated_at DESC
      LIMIT ?
    `,
    [...scope.values, sanitizedLimit],
  );

  return rows.map((row) => ({
    city: cleanText(row.city),
    area: cleanText(row.area),
    slug: cleanText(row.slug),
    page_title: cleanText(row.page_title),
    meta_desc: cleanText(row.meta_desc),
  }));
}

export async function testDatabaseConnection() {
  await initializeDatabaseConnection();
  return true;
}

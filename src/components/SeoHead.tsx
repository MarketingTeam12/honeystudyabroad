import Head from "next/head";
import Script from "next/script";

type StructuredData = Record<string, unknown>;

type SeoHeadProps = {
  title: string;
  description: string;
  path: string;
  siteUrl: string;
  imagePath?: string;
  keywords?: string[];
  noIndex?: boolean;
  structuredData?: StructuredData[];
};

type ResolveSiteUrlOptions = {
  host?: string | string[];
  protocol?: string | string[];
};

const DEFAULT_SITE_URL = "http://localhost:3000";
const DEFAULT_OG_IMAGE_PATH = "/logos/logo.avif";
const BRAND_NAME = "Honey Study Abroad";
const TITLE_PREFIX = "Honey Study Abroad";

function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

function sanitizeProtocol(value: string | string[] | undefined) {
  const protocol = Array.isArray(value) ? value[0] : value;
  return protocol?.split(",")[0]?.trim().replace(/:$/, "") || "https";
}

function sanitizeHost(value: string | string[] | undefined) {
  const host = Array.isArray(value) ? value[0] : value;
  return host?.split(",")[0]?.trim() || "";
}

export function resolveSiteUrl(options: ResolveSiteUrlOptions = {}) {
  const configuredSiteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.SITE_URL?.trim() ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");

  if (configuredSiteUrl) {
    return trimTrailingSlash(configuredSiteUrl);
  }

  const host = sanitizeHost(options.host);
  if (host) {
    return `${sanitizeProtocol(options.protocol)}://${host}`;
  }

  return DEFAULT_SITE_URL;
}

export function buildAbsoluteUrl(siteUrl: string, path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${trimTrailingSlash(siteUrl)}${normalizedPath}`;
}

export function buildOrganizationSchema(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: BRAND_NAME,
    url: siteUrl,
    email: "salesteam@honeytranslations.com",
    telephone: "+91 7299005577",
    areaServed: "Worldwide",
    sameAs: [
      "https://www.facebook.com/honeytranslationservices/",
      "https://www.instagram.com/honey_translation_services_",
      "https://www.linkedin.com/company/honey-translation-services",
    ],
  };
}

export function buildWebsiteSchema(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND_NAME,
    url: siteUrl,
  };
}

export function buildBreadcrumbSchema(
  siteUrl: string,
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildAbsoluteUrl(siteUrl, item.path),
    })),
  };
}

export function buildFaqSchema(
  items: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function SeoHead({
  title,
  description,
  path,
  siteUrl,
  imagePath = DEFAULT_OG_IMAGE_PATH,
  keywords = [],
  noIndex = false,
  structuredData = [],
}: SeoHeadProps) {
  const finalTitle = title
    ? title.startsWith(`${TITLE_PREFIX} -`) || title === TITLE_PREFIX
      ? title
      : `${TITLE_PREFIX} - ${title}`
    : TITLE_PREFIX;
  const canonicalUrl = buildAbsoluteUrl(siteUrl, path);
  const imageUrl = imagePath.startsWith("http")
    ? imagePath
    : buildAbsoluteUrl(siteUrl, imagePath);
  const robotsContent = noIndex ? "noindex,nofollow" : "index,follow,max-image-preview:large";

  return (
    <>
    <Head>
      <title>{finalTitle}</title>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content={robotsContent} />
      {keywords.length > 0 ? <meta name="keywords" content={keywords.join(", ")} /> : null}
      <meta name="theme-color" content="#2b2d72" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={BRAND_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {structuredData.map((entry, index) => (
        <script
          key={`${canonicalUrl}-jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </Head>

    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-F62WCKN2YQ"
      strategy="afterInteractive"
    />

    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-F62WCKN2YQ');
      `}
    </Script>
  </>
  );
}

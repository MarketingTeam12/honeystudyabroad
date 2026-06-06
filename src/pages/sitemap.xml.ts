import type { GetServerSideProps } from "next";

import { buildAbsoluteUrl, resolveSiteUrl } from "@/components/SeoHead";
import { getCityPageSummaries } from "@/lib/city-pages";
import { MARKETING_PAGES } from "@/lib/marketing-pages";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const siteUrl = resolveSiteUrl({
    host: req.headers.host,
    protocol: req.headers["x-forwarded-proto"],
  });

  let cityPages: Array<{ slug: string }> = [];

  try {
    cityPages = await getCityPageSummaries(1000, { host: req.headers.host });
  } catch {
    cityPages = [];
  }

  const urls = [
    buildAbsoluteUrl(siteUrl, "/"),
    ...MARKETING_PAGES.map((page) => buildAbsoluteUrl(siteUrl, page.path)),
    ...cityPages
      .filter((page) => page.slug.trim())
      .map((page) => buildAbsoluteUrl(siteUrl, `/${page.slug.trim()}`)),
  ];

  const uniqueUrls = Array.from(new Set(urls));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url)}</loc>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.write(xml);
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}

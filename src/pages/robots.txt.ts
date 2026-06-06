import type { GetServerSideProps } from "next";

import { buildAbsoluteUrl, resolveSiteUrl } from "@/components/SeoHead";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const siteUrl = resolveSiteUrl({
    host: req.headers.host,
    protocol: req.headers["x-forwarded-proto"],
  });

  const robots = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${buildAbsoluteUrl(siteUrl, "/sitemap.xml")}
`;

  res.setHeader("Content-Type", "text/plain");
  res.write(robots);
  res.end();

  return {
    props: {},
  };
};

export default function Robots() {
  return null;
}

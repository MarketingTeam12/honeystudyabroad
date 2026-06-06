import type { NextApiRequest, NextApiResponse } from "next";

import { getCityPageBySlug } from "@/lib/city-pages";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const rawSlug = req.query.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;

  if (!slug?.trim()) {
    return res.status(400).json({ error: "Slug is required." });
  }

  try {
    const page = await getCityPageBySlug(slug, { host: req.headers.host });

    if (!page) {
      return res.status(404).json({ error: "Page not found." });
    }

    res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
    return res.status(200).json({ page });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected server error.";
    return res.status(500).json({ error: message });
  }
}

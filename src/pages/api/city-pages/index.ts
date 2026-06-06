import type { NextApiRequest, NextApiResponse } from "next";

import { getCityPageSummaries } from "@/lib/city-pages";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const rawLimit = Array.isArray(req.query.limit) ? req.query.limit[0] : req.query.limit;
  const parsedLimit = rawLimit ? Number.parseInt(rawLimit, 10) : 24;

  try {
    const pages = await getCityPageSummaries(parsedLimit, { host: req.headers.host });
    res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
    return res.status(200).json({ pages });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected server error.";
    return res.status(500).json({ error: message });
  }
}

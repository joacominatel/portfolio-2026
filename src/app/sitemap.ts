import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://fronterait.tech";
  const now = new Date().toISOString();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
  { url: `${base}/work/restful-apis`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];
}

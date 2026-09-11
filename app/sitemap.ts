import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hocaid.org";

  return [
    {
      url: base,
      lastModified: new Date("2026-09-11"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/about`,
      lastModified: new Date("2026-09-11"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/programmes`,
      lastModified: new Date("2026-09-11"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/donate`,
      lastModified: new Date("2026-09-11"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date("2026-09-11"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/careers`,
      lastModified: new Date("2026-09-11"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}

import type { MetadataRoute } from "next";

const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/menu", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/logo", changeFrequency: "yearly", priority: 0.6 },
  { path: "/experiments", changeFrequency: "weekly", priority: 0.5 }
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-30");

  return routes.map((route) => ({
    url: `https://elementalutopia.com${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}

import type { MetadataRoute } from "next";
import { getExperiments } from "../lib/experiments/getExperiments";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://elementalutopia.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/experiments`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/logo`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const experimentRoutes: MetadataRoute.Sitemap =
    getExperiments().map((experiment) => ({
      url: `${baseUrl}/experiments/${experiment.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: experiment.status === "Complete" ? 0.7 : 0.6,
    }));

  return [...staticRoutes, ...experimentRoutes];
}
import type { MetadataRoute } from "next";
import { siteConfig } from "@/app/lib/site";
import { projects } from "@/app/project/[id]/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((project) => ({
    url: `${siteConfig.url}/project/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/project`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectUrls,
  ];
}

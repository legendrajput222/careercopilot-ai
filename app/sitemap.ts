import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://careercopilot-ai-beta.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/signup`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/analyze-resume`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ats-checker`,
      lastModified: new Date(),
    },
  ];
}
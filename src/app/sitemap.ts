import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nexagent.in';
  const currentDate = new Date().toISOString();

  const routes = [
    // Tier 1 — Homepage (priority 1.0)
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    // Tier 2 — High-value product pages (priority 0.9)
    // /products/hms is the most commercially important page
    {
      url: `${baseUrl}/products/hms`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/hospitality`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    // Tier 3 — Solutions and industry pages (priority 0.8)
    {
      url: `${baseUrl}/solutions/workflow-automation`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/industries/healthcare`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    // Solution Architect / Setup
    {
      url: `${baseUrl}/setup`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Tier 4 — Informational / trust pages (priority 0.7)
    {
      url: `${baseUrl}/technology`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    // GEO citation pages (priority 0.75 - 0.7)
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  return routes;
}

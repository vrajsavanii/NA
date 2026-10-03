import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://nexagent.in';

  return {
    rules: [
      // Allow all crawlers for all main pages
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/static/', '/admin/', '/_next/image/'],
      },
      // Google — prioritise all content pages
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/static/', '/admin/'],
      },
      // Bing / Microsoft Copilot
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/static/', '/admin/'],
      },
      // Perplexity AI crawler
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // Anthropic Claude crawler
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      // OpenAI / ChatGPT crawler
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

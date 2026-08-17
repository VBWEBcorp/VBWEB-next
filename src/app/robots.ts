import type { MetadataRoute } from 'next'

import { siteConfig } from '@/lib/seo'

// /propositions/ : documents commerciaux prives, partages par lien direct au client.
// Hors sitemap et hors index — les pages portent aussi robots: noindex.
const DISALLOW = ['/admin/', '/api/', '/propositions/']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'Bytespider',
        allow: '/',
        disallow: DISALLOW,
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}

import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VBWEB | Consultant SEO Rennes',
    short_name: 'VBWEB',
    description: 'Consultant SEO et développeur web à Rennes. Référencement naturel, création de sites et applications web.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F1C2E',
    theme_color: '#1A2C45',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}

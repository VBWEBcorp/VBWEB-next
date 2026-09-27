import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VBWEB - Agence web & SEO',
    short_name: 'VBWEB',
    description: 'Agence web. Création de sites internet, référencement naturel et applications web sur mesure.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F1C2E',
    theme_color: '#1A2C45',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}

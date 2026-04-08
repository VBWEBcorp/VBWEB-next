import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // Supprime les console.* en production (sauf error/warn)
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? { exclude: ['error', 'warn'] }
        : false,
  },

  // Optimisations expérimentales
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      'date-fns',
      '@radix-ui/react-slot',
    ],
    // optimizeCss desactive : casse Tailwind v4 (issue connue avec beasties)
    // optimizeCss: true,
  },

  images: {
    // Formats modernes (AVIF en priorite, fallback WebP)
    formats: ['image/avif', 'image/webp'],
    // Tailles d'ecran prises en charge pour le srcset
    // Ajout 480/576 pour servir les portraits cercles type Victor
    // (224*2=448, 256*2=512, 288*2=576) sans tomber sur 640
    deviceSizes: [480, 576, 640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 an
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '*.r2.dev' },
      { protocol: 'https', hostname: 'i.ibb.co' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },
}

export default nextConfig

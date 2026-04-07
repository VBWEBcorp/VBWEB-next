export const siteConfig = {
  name: 'Consultant SEO Rennes - VBWEB',
  shortName: 'VBWEB',
  legalName: 'Victor Béasse',
  url: 'https://www.consultant-seo-rennes.fr',
  locale: 'fr_FR',
  description:
    'Consultant SEO à Rennes : plus de clients grâce à Google. Référencement naturel, création de sites internet et applications web pour PME, artisans et commerces en Bretagne.',
  ogImage: 'https://www.consultant-seo-rennes.fr/og.png',
  twitterHandle: '@vbweb',
  themeColor: '#1B2D46',
  phone: '+33 6 27 30 17 88',
  email: 'contact@consultant-seo-rennes.fr',
  founder: 'Victor Béasse',
  address: {
    street: 'Rennes',
    city: 'Rennes',
    postalCode: '35000',
    region: 'Bretagne',
    country: 'FR',
  },
  geo: {
    latitude: 48.1173,
    longitude: -1.6778,
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  socialProfiles: [
    'https://www.linkedin.com/in/victor-b%C3%A9asse/',
    'https://www.youtube.com/channel/UCvj9BhySNWseJidqjHPm2aA',
    'https://www.instagram.com/vbweb_/',
    'https://share.google/RdtyxDLN4e3KEx2eO',
    'https://www.facebook.com/p/VBWEB-61559475364461/',
  ],
} as const

export type SeoMeta = {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noindex?: boolean
  jsonLd?: Record<string, unknown>
}

export function buildTitle(page?: string) {
  if (!page) return siteConfig.name
  return `${page} | ${siteConfig.name}`
}

export const routes = [
  '/',
  '/a-propos',
  '/services',
  '/contact',
  '/referencement-seo-rennes',
  '/referencement-local-rennes',
  '/creation-site-internet-rennes',
  '/creation-site-internet-plombier-rennes',
  '/creation-site-internet-artisan-rennes',
  '/plan-du-site',
  '/audit-seo-gratuit',
  '/mentions-legales',
  '/politique-de-confidentialite',
  '/conditions-generales',
  '/politique-cookies',
  '/etudes-de-cas',
  '/etudes-de-cas/sites-internet',
  '/etudes-de-cas/referencement',
  '/etudes-de-cas/applications-web',
] as const

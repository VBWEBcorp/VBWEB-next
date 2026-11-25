export const siteConfig = {
  name: 'VBWEB',
  shortName: 'VBWEB',
  tagline: 'Agence web & SEO',
  fullName: 'VBWEB - Agence web & SEO',
  legalName: 'Victor Béasse',
  url: 'https://vbweb.fr',
  locale: 'fr_FR',
  description:
    'VBWEB - Création de sites internet, référencement naturel et applications web sur mesure. Stratégie digitale pour entreprises ambitieuses.',
  ogImage: 'https://vbweb.fr/og-vbweb.png',
  twitterHandle: '@vbweb',
  themeColor: '#1B2D46',
  phone: '+33 6 27 30 17 88',
  email: 'contact@vbweb.fr',
  founder: 'Victor Béasse',
  // Société éditrice du site (pages légales). L'adresse locale des données
  // structurées reste celle de la fiche Google, plus bas.
  company: {
    name: 'VBWEB LLC',
    form: 'société à responsabilité limitée (Limited Liability Company) de droit de l’État du Nouveau-Mexique, États-Unis',
    address: '412 W 7th St, Clovis, NM 88101, États-Unis',
  },
  address: {
    street: 'Rennes',
    city: 'Rennes',
    postalCode: '35000',
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
  '/referencement-seo',
  '/creation-site-internet',
  '/ia-entreprise',
  '/freelance-seo',
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
  '/guide-ia',
  '/referencement-ia-geo',
  '/referencement-local',
  '/refonte-site-internet',
  '/consultant-seo-rennes',
  '/creation-site-internet-rennes',
  '/creation-site-internet-artisan',
  '/creation-site-internet-bien-etre',
  '/creation-site-internet-avocat',
] as const

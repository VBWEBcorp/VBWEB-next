import type { Metadata } from 'next'

import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'
import { SitesInternetContent } from './sites-content'

const description =
  'Portfolio de sites internet créés à Rennes : vitrines, e-commerce et sites sur mesure pour PME, artisans et commerces. Design moderne et expérience utilisateur soignée.'

export const metadata: Metadata = {
  title: 'Réalisations Sites Internet à Rennes | Portfolio Web',
  description,
  alternates: { canonical: '/etudes-de-cas/sites-internet' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd(
      'Réalisations Sites Internet',
      description,
      '/etudes-de-cas/sites-internet',
      ['h1', '.hero-description']
    ),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Études de cas', path: '/etudes-de-cas' },
      { name: 'Sites internet', path: '/etudes-de-cas/sites-internet' },
    ]),
  ],
}

export default function SitesInternetCasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SitesInternetContent />
    </>
  )
}

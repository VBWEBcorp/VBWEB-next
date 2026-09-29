import type { Metadata } from 'next'

import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'
import { webProjects } from '@/lib/projects'
import { SitesInternetContent } from './sites-content'

// Compte tiré de la liste, comme le h1 : le titre et la description suivent
// désormais chaque ajout de réalisation sans retouche.
const count = webProjects.length

const description =
  `${count} sites internet créés à Rennes et partout en France : vitrines, e-commerce et sites sur mesure pour PME, artisans et commerces. Tous en ligne et visitables.`

export const metadata: Metadata = {
  title: `${count} Réalisations Sites Internet à Rennes | Portfolio Web`,
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

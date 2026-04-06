import type { Metadata } from 'next'

import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'
import { ReferencementContent } from './referencement-content'

const description =
  'Résultats SEO concrets pour nos clients à Rennes : positions Google, trafic organique et génération de clients qualifiés. Études de cas référencement naturel et local pour PME et commerces.'

export const metadata: Metadata = {
  title: 'Résultats SEO à Rennes | Études de Cas Référencement',
  description,
  alternates: { canonical: '/etudes-de-cas/referencement' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd(
      'Études de cas Référencement',
      description,
      '/etudes-de-cas/referencement',
      ['h1', '.hero-description']
    ),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Études de cas', path: '/etudes-de-cas' },
      { name: 'Référencement', path: '/etudes-de-cas/referencement' },
    ]),
  ],
}

export default function ReferencementCasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReferencementContent />
    </>
  )
}

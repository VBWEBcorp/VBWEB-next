import type { Metadata } from 'next'

import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'
import { ApplicationsWebContent } from './applications-content'

const description =
  'Applications web sur mesure développées à Rennes : CRM, logiciels de gestion, plateformes métier. Études de cas développement web pour entreprises en Bretagne.'

export const metadata: Metadata = {
  title: 'Développement Applications Web à Rennes | Études de Cas',
  description,
  alternates: { canonical: '/etudes-de-cas/applications-web' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd(
      'Études de cas Applications Web',
      description,
      '/etudes-de-cas/applications-web',
      ['h1', '.hero-description']
    ),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Études de cas', path: '/etudes-de-cas' },
      { name: 'Applications web', path: '/etudes-de-cas/applications-web' },
    ]),
  ],
}

export default function ApplicationsWebCasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ApplicationsWebContent />
    </>
  )
}

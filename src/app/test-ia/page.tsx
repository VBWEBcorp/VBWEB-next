import type { Metadata } from 'next'

import { TestIaContent } from './test-ia-content'
import { breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from '@/components/seo/json-ld'
import { siteConfig } from '@/lib/seo'

const titre = 'ChatGPT recommande-t-il votre entreprise ?'
const description =
  'Test gratuit : nous posons à ChatGPT la question de vos clients et vous voyez en 30 secondes si votre entreprise fait partie des noms qu’il recommande.'

export const metadata: Metadata = {
  title: 'Test gratuit : ChatGPT recommande-t-il votre entreprise ?',
  description,
  alternates: { canonical: '/test-ia' },
  openGraph: {
    title: titre,
    description,
    url: `${siteConfig.url}/test-ia`,
    type: 'website',
  },
}

const faqs = [
  {
    question: 'Comment fonctionne le test ?',
    answer:
      'Nous posons à ChatGPT, avec sa recherche web activée sur votre ville, la question qu’un client pose vraiment : qui il conseille pour votre métier, cinq noms à l’appui. Puis nous regardons si votre entreprise fait partie de la réponse.',
  },
  {
    question: 'Pourquoi le résultat change-t-il d’un jour à l’autre ?',
    answer:
      'ChatGPT refait sa recherche à chaque question et ne formule jamais deux fois la même réponse. Une entreprise bien installée revient souvent ; une entreprise absente n’apparaît presque jamais.',
  },
  {
    question: 'Comment apparaître dans les réponses de ChatGPT ?',
    answer:
      'ChatGPT recommande les entreprises dont il trouve des informations claires et concordantes : un site qui répond aux questions des clients, une fiche Google à jour, des mentions dans les annuaires et des avis. C’est ce que nous travaillons avec nos clients.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd(titre, description, '/test-ia', ['h1', '.test-chapeau']),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Test IA', path: '/test-ia' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function TestIaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <TestIaContent titre={titre} faqs={faqs} />
    </>
  )
}

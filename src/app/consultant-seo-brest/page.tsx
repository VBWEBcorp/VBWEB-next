import type { Metadata } from 'next'

import { ConsultantSeoBrestContent } from './consultant-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Consultant SEO à Brest : j\'aide les entreprises du Finistère à se positionner durablement sur Google. Audit gratuit, approche sur mesure. 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Consultant SEO à Brest | Expert Référencement - VBWEB',
  description,
  alternates: { canonical: '/consultant-seo-brest' },
}

const faqs = [
  {
    question: 'Que fait concrètement un consultant SEO pour mon entreprise à Brest ?',
    answer: 'J\'analyse votre site, j\'identifie les mots-clés que vos clients tapent sur Google, et je mets en place les optimisations techniques et éditoriales pour que vous remontiez dans les résultats. L\'objectif est simple : que les Brestois qui cherchent vos services vous trouvent avant vos concurrents.',
  },
  {
    question: 'Êtes-vous basé à Brest ou intervenez-vous à distance ?',
    answer: 'Je suis basé à Rennes, mais j\'accompagne plusieurs clients dans le Finistère. Le SEO se gère très bien à distance : analyses, optimisations, reporting mensuel en visio. Et la proximité bretonne permet de se voir facilement quand c\'est utile, notamment à Brest.',
  },
  {
    question: 'Quel budget prévoir pour du consulting SEO à Brest ?',
    answer: 'Un accompagnement SEO mensuel commence à 500 euros par mois. Le montant exact dépend de la taille de votre site, du nombre de pages à optimiser et du niveau de concurrence sur vos mots-clés. Certains secteurs brestois comme le naval sont très disputés, d\'autres offrent des opportunités rapides.',
  },
  {
    question: 'En combien de temps le SEO donne-t-il des résultats à Brest ?',
    answer: 'Comptez entre 3 et 6 mois pour observer les premiers gains concrets en trafic et en positionnement. La bonne nouvelle, c\'est que la concurrence SEO à Brest reste modérée par rapport aux grandes métropoles françaises. Les résultats arrivent souvent plus vite qu\'à Paris ou Lyon.',
  },
  {
    question: 'Quelle est la différence entre un consultant SEO et une agence web ?',
    answer: 'Avec un consultant, vous travaillez directement avec la personne qui pilote votre stratégie. Pas de commercial, pas de chef de projet intermédiaire. Les décisions sont plus rapides, le suivi plus fin, et le budget est concentré sur le travail effectif plutôt que sur la structure.',
  },
  {
    question: 'Travaillez-vous aussi le référencement local à Brest ?',
    answer: 'Oui, c\'est même un axe prioritaire pour beaucoup de mes clients brestois. Fiche Google Business, avis clients, citations locales, contenu géolocalisé : tout est mis en place pour que vous apparaissiez dans les recherches de proximité sur Brest, Guipavas, Plouzané et les communes voisines.',
  },
  {
    question: 'Comment suivre les résultats de votre travail SEO ?',
    answer: 'Chaque mois, vous recevez un rapport clair avec l\'évolution de vos positions Google, votre trafic organique et les conversions générées. On fait le point ensemble en visio pour analyser les chiffres et ajuster la stratégie si besoin. Pas de jargon, que des données concrètes.',
  },
  {
    question: 'Pouvez-vous intervenir sur un site existant ou faut-il tout refaire ?',
    answer: 'Dans la grande majorité des cas, on travaille sur votre site existant. L\'audit initial permet de repérer ce qui bloque et ce qui peut être amélioré sans tout reconstruire. Si votre site a des problèmes techniques profonds, je vous le dis franchement et on trouve la meilleure solution.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Consultant SEO à Brest', description, '/consultant-seo-brest', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Consultant SEO à Brest', description, '/consultant-seo-brest', [
      { '@type': 'City', name: 'Brest' },
      { '@type': 'AdministrativeArea', name: 'Finistère' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Consultant SEO Brest', path: '/consultant-seo-brest' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function ConsultantSeoBrestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ConsultantSeoBrestContent faqs={faqs} />
    </>
  )
}

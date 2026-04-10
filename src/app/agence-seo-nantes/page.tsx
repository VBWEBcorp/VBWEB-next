import type { Metadata } from 'next'

import { AgenceSeoNantesContent } from './agence-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Agence SEO à Nantes : un expert référencement indépendant pour développer votre visibilité Google dans le Grand Ouest. Relation directe, résultats concrets. Audit gratuit.'

export const metadata: Metadata = {
  title: 'Agence SEO à Nantes | Expert Référencement Naturel - VBWEB',
  description,
  alternates: { canonical: '/agence-seo-nantes' },
}

const faqs = [
  {
    question: 'Pourquoi choisir un expert SEO indépendant plutôt qu\'une agence SEO à Nantes ?',
    answer: 'Nantes compte beaucoup d\'agences digitales. La différence avec un expert indépendant : vous travaillez directement avec la personne qui optimise votre site. Pas de commercial, pas de junior qui apprend sur votre budget. La relation est directe et la stratégie cohérente.',
  },
  {
    question: 'Quel est le coût d\'un accompagnement SEO à Nantes ?',
    answer: 'L\'accompagnement mensuel démarre à 500 euros par mois. À Nantes, la concurrence en ligne est plus forte qu\'en Bretagne rurale, donc certains projets nécessitent un investissement plus important. L\'audit gratuit permet de cadrer le budget.',
  },
  {
    question: 'Quels secteurs d\'activité nantais accompagnez-vous ?',
    answer: 'J\'interviens pour des entreprises tech, des commerces, des startups, des professions libérales et des acteurs du tourisme dans la métropole nantaise. Nantes est un bassin économique dynamique avec des opportunités SEO dans tous les secteurs.',
  },
  {
    question: 'Vous n\'êtes pas basé à Nantes, est-ce un problème ?',
    answer: 'Pas du tout. Je suis basé à Rennes, à 1h30 de Nantes. Je me déplace pour les rendez-vous importants et le reste se fait en visio. Le SEO est un métier qui se pratique à distance : ce qui compte, c\'est la compétence et la réactivité, pas l\'adresse du bureau.',
  },
  {
    question: 'Le SEO est-il rentable pour une entreprise nantaise ?',
    answer: 'Le bassin de recherche nantais est très large : plus de 650 000 habitants dans la métropole. Les volumes de recherche locales sont importants et le retour sur investissement du SEO est souvent supérieur à celui de la publicité payante sur le moyen terme.',
  },
  {
    question: 'Intervenez-vous aussi à Saint-Herblain, Rezé et Saint-Nazaire ?',
    answer: 'Oui, j\'accompagne des entreprises sur toute la métropole nantaise et le Grand Ouest : Saint-Herblain, Rezé, Orvault, Carquefou et jusqu\'à Saint-Nazaire. Le SEO local permet de cibler précisément les zones qui vous intéressent.',
  },
  {
    question: 'Combien de temps pour se positionner sur Google à Nantes ?',
    answer: 'Comptez 3 à 6 mois pour les premiers résultats. La concurrence est plus intense à Nantes qu\'en ville moyenne, certains mots-clés demandent plus de temps. Mais une stratégie bien menée produit des résultats durables qui s\'accumulent.',
  },
  {
    question: 'Proposez-vous un audit SEO gratuit pour les entreprises nantaises ?',
    answer: 'Oui, l\'audit est gratuit et sans engagement. Il analyse la technique, le contenu et la popularité de votre site. Vous recevez un diagnostic clair avec des recommandations priorisées. C\'est le meilleur point de départ pour un projet SEO.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence SEO à Nantes', description, '/agence-seo-nantes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence SEO à Nantes', description, '/agence-seo-nantes', [
      { '@type': 'City', name: 'Nantes' },
      { '@type': 'AdministrativeArea', name: 'Loire-Atlantique' },
      { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence SEO Nantes', path: '/agence-seo-nantes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceSeoNantesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceSeoNantesContent faqs={faqs} />
    </>
  )
}

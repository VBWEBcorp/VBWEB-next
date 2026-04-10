import type { Metadata } from 'next'

import { AgenceSeoQuimperContent } from './agence-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Vous recherchez une agence SEO à Quimper ? Un expert référencement indépendant vous accompagne pour développer votre visibilité sur Google en Cornouaille. Audit gratuit.'

export const metadata: Metadata = {
  title: 'Agence SEO à Quimper | Expert Référencement Naturel - VBWEB',
  description,
  alternates: { canonical: '/agence-seo-quimper' },
}

const faqs = [
  {
    question: 'Faut-il passer par une agence SEO pour être visible à Quimper ?',
    answer: 'Pas nécessairement. Un expert SEO indépendant peut tout à fait prendre en charge votre référencement avec la même rigueur qu\'une agence, mais avec plus de souplesse. Vous échangez directement avec la personne qui travaille sur votre site, sans couche intermédiaire.',
  },
  {
    question: 'Combien coûte le référencement naturel à Quimper ?',
    answer: 'L\'accompagnement mensuel démarre à 500 euros par mois. Le tarif dépend de vos objectifs, de la concurrence dans votre secteur et de l\'état de votre site. L\'audit gratuit permet de poser un diagnostic et de chiffrer le projet.',
  },
  {
    question: 'Quels secteurs quimpérois accompagnez-vous ?',
    answer: 'J\'interviens pour des entreprises de tous secteurs à Quimper et en Cornouaille : agroalimentaire, commerce, artisanat, tourisme, services aux particuliers. Chaque marché a ses mots-clés et ses opportunités spécifiques.',
  },
  {
    question: 'Le SEO fonctionne-t-il pour une petite entreprise à Quimper ?',
    answer: 'C\'est même souvent plus rentable pour les petites structures. À Quimper, la concurrence en ligne est moins féroce qu\'à Paris ou Lyon. Une stratégie SEO bien menée peut vous positionner devant des concurrents plus gros qui négligent leur référencement.',
  },
  {
    question: 'Comment mesurez-vous les résultats du SEO ?',
    answer: 'Positions sur Google, trafic organique, nombre de demandes de contact ou d\'appels reçus. Tout est suivi dans un espace dédié avec des données concrètes. Pas de jargon, que des chiffres que vous pouvez vérifier.',
  },
  {
    question: 'Intervenez-vous aussi à Concarneau, Fouesnant et Bénodet ?',
    answer: 'Oui, mon accompagnement couvre toute la Cornouaille : Ergué-Gabéric, Pluguffan, Fouesnant, Bénodet, Concarneau et au-delà. Le SEO local permet de cibler précisément votre zone de chalandise.',
  },
  {
    question: 'En combien de temps les résultats SEO arrivent-ils ?',
    answer: 'Comptez 3 à 6 mois pour les premières améliorations significatives. Sur un marché comme Quimper, les résultats peuvent arriver plus vite que dans les grandes métropoles grâce à une concurrence en ligne plus modérée.',
  },
  {
    question: 'Peut-on démarrer par un audit avant de s\'engager ?',
    answer: 'C\'est exactement comme ça que je fonctionne. L\'audit est gratuit et sans engagement. Il vous donne une vision claire de votre situation sur Google et des leviers d\'amélioration. Vous décidez ensuite en connaissance de cause.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence SEO à Quimper', description, '/agence-seo-quimper', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence SEO à Quimper', description, '/agence-seo-quimper', [
      { '@type': 'City', name: 'Quimper' },
      { '@type': 'AdministrativeArea', name: 'Finistère' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence SEO Quimper', path: '/agence-seo-quimper' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceSeoQuimperPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceSeoQuimperContent faqs={faqs} />
    </>
  )
}

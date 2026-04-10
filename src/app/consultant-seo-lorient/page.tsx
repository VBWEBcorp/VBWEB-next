import type { Metadata } from 'next'

import { ConsultantSeoLorientContent } from './consultant-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Consultant SEO à Lorient : plus de visibilité sur Google pour votre entreprise. Audit gratuit, stratégie sur mesure, résultats mesurables. Victor Béasse, 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Consultant SEO à Lorient | Expert Référencement - VBWEB',
  description,
  alternates: { canonical: '/consultant-seo-lorient' },
}

const faqs = [
  {
    question: 'Pourquoi faire appel à un consultant SEO pour votre entreprise à Lorient ?',
    answer: 'Un consultant SEO analyse votre positionnement sur Google, identifie les recherches de vos futurs clients à Lorient et optimise votre site pour capter ce trafic. C\'est un investissement rentable : contrairement à la publicité, les résultats du référencement naturel perdurent dans le temps.',
  },
  {
    question: 'Combien coûte un consultant SEO à Lorient ?',
    answer: 'Un accompagnement SEO mensuel démarre à partir de 500 euros par mois. Le tarif dépend de la taille de votre site, du nombre de mots-clés visés et du niveau de concurrence sur votre marché. Je propose un audit gratuit pour évaluer vos besoins et vous remettre un devis clair, sans engagement.',
  },
  {
    question: 'Êtes-vous basé à Lorient ?',
    answer: 'Je suis basé à Rennes et j\'interviens dans tout le Morbihan, y compris à Lorient, Lanester, Hennebont et Vannes. La majorité du travail SEO se fait à distance, avec des points réguliers en visio. Je me déplace à Lorient lorsque le projet le justifie.',
  },
  {
    question: 'Quelle est la différence entre un consultant SEO et une agence ?',
    answer: 'Avec un consultant SEO, vous travaillez directement avec la personne qui gère votre dossier. Pas d\'intermédiaire, pas de commercial. La communication est plus fluide, les décisions plus rapides, et les tarifs souvent plus accessibles qu\'en agence.',
  },
  {
    question: 'En combien de temps vais-je voir des résultats ?',
    answer: 'Les premiers résultats apparaissent en général entre 3 et 6 mois. Le SEO est un travail de fond qui s\'accélère avec le temps. Par exemple, pour un de mes clients, les premiers appels sont arrivés au bout de 4 mois, et le trafic a été multiplié par 10 en un an.',
  },
  {
    question: 'Quels types d\'entreprises accompagnez-vous à Lorient ?',
    answer: 'J\'accompagne des PME, artisans, commerces et professions libérales sur tout le bassin lorientais. Que vous soyez restaurateur à Lorient, artisan à Lanester ou commerçant à Hennebont, je construis une stratégie adaptée à votre secteur et à votre zone de chalandise.',
  },
  {
    question: 'Le SEO est-il vraiment utile pour une entreprise locale à Lorient ?',
    answer: 'Absolument. Quand un habitant de Lorient cherche un artisan, un restaurant ou un prestataire, il passe par Google. Si votre site n\'apparaît pas dans les premiers résultats, ce sont vos concurrents qui captent ces clients. Le SEO local est le levier le plus rentable pour une entreprise de proximité.',
  },
  {
    question: 'Comment se déroule un accompagnement SEO avec vous ?',
    answer: 'On commence par un échange pour comprendre votre activité et vos objectifs. Je réalise ensuite un audit complet de votre site. Les optimisations sont déployées mois après mois, et vous suivez les résultats dans un espace de suivi dédié avec un point mensuel.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Consultant SEO à Lorient', description, '/consultant-seo-lorient', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Consultant SEO à Lorient', description, '/consultant-seo-lorient', [
      { '@type': 'City', name: 'Lorient' },
      { '@type': 'AdministrativeArea', name: 'Morbihan' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Consultant SEO Lorient', path: '/consultant-seo-lorient' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function ConsultantSeoLorientPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ConsultantSeoLorientContent faqs={faqs} />
    </>
  )
}

import type { Metadata } from 'next'

import { ConsultantSeoNantesContent } from './consultant-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Consultant SEO à Nantes : audit gratuit, stratégie de référencement sur mesure et résultats mesurables. Victor Béasse, expert SEO basé à Rennes, accompagne les entreprises nantaises. 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Consultant SEO à Nantes | Expert Référencement - VBWEB',
  description,
  alternates: { canonical: '/consultant-seo-nantes' },
}

const faqs = [
  {
    question: 'Pourquoi choisir un consultant SEO pour votre entreprise à Nantes ?',
    answer: 'Un consultant SEO vous apporte une expertise pointue en référencement naturel, avec un regard extérieur sur votre marché. Contrairement à une agence, vous travaillez directement avec la personne qui pilote votre stratégie. C\'est un gain de temps, de clarté et souvent de budget.',
  },
  {
    question: 'Vous êtes basé à Rennes : comment accompagnez-vous des clients à Nantes ?',
    answer: 'Nantes est à 1h10 de Rennes en TGV. Je me déplace régulièrement pour rencontrer mes clients nantais en personne. Le reste du temps, nous travaillons en visio et via un espace de suivi dédié. Plusieurs de mes clients à Nantes fonctionnent ainsi depuis plus d\'un an.',
  },
  {
    question: 'Combien coûte un consultant SEO à Nantes ?',
    answer: 'Un accompagnement SEO mensuel démarre à partir de 500 euros par mois. Le tarif dépend de la taille de votre site et de la concurrence sur vos mots-clés. Je vous propose un audit gratuit pour évaluer vos besoins et vous remettre un devis détaillé.',
  },
  {
    question: 'En combien de temps vais-je voir des résultats SEO ?',
    answer: 'Les premiers résultats apparaissent en général entre 3 et 6 mois. Le référencement naturel est un travail de fond dont l\'effet s\'accélère avec le temps. Pour EPICU par exemple, la croissance a été progressive sur 3 ans pour atteindre 5 000 visites par mois.',
  },
  {
    question: 'Quelle est la différence entre un consultant SEO et une agence SEO à Nantes ?',
    answer: 'Avec un consultant SEO, vous avez un interlocuteur unique qui connaît votre dossier de A à Z. Pas de commercial, pas de turnover. La communication est directe, les décisions rapides, et les tarifs généralement plus compétitifs qu\'en agence.',
  },
  {
    question: 'Quels types d\'entreprises accompagnez-vous à Nantes ?',
    answer: 'J\'accompagne des PME, des commerces, des startups et des artisans dans le Grand Ouest. À Nantes et en Loire-Atlantique, je travaille aussi bien avec des entreprises du numérique sur l\'Île de Nantes que des commerces de proximité à Saint-Herblain ou Rezé.',
  },
  {
    question: 'Que comprend un audit SEO de mon site ?',
    answer: 'L\'audit couvre trois volets : la technique (vitesse, structure, indexation), le contenu (pertinence des pages, mots-clés ciblés) et la notoriété (liens entrants, autorité du domaine). Vous recevez un rapport clair avec un plan d\'action priorisé.',
  },
  {
    question: 'Proposez-vous aussi du référencement local pour Nantes ?',
    answer: 'Oui, le SEO local est l\'un de mes points forts. J\'optimise votre fiche Google Business Profile, je travaille vos citations locales et je cible les recherches géolocalisées comme "votre métier + Nantes". C\'est ce qui a permis à Rennes Pneus de recevoir 500 appels par mois.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Consultant SEO à Nantes', description, '/consultant-seo-nantes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Consultant SEO à Nantes', description, '/consultant-seo-nantes', [
      { '@type': 'City', name: 'Nantes' },
      { '@type': 'AdministrativeArea', name: 'Loire-Atlantique' },
      { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Consultant SEO Nantes', path: '/consultant-seo-nantes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function ConsultantSeoNantesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ConsultantSeoNantesContent faqs={faqs} />
    </>
  )
}

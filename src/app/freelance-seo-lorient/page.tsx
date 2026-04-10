import type { Metadata } from 'next'

import { FreelanceSeoLorientContent } from './freelance-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Freelance SEO à Lorient : j\'accompagne les entreprises du pays de Lorient pour gagner en visibilité sur Google. Audit gratuit, stratégie sur mesure, résultats concrets. 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Freelance SEO à Lorient | Référencement Naturel - VBWEB',
  description,
  alternates: { canonical: '/freelance-seo-lorient' },
}

const faqs = [
  {
    question: 'Pourquoi faire appel à un freelance SEO pour mon entreprise à Lorient ?',
    answer: 'Lorient a un tissu économique dense entre le port de pêche de Keroman, les chantiers navals et le commerce du centre-ville reconstruit. Un freelance SEO qui connaît ce terrain peut cibler les bonnes requêtes locales et vous positionner devant vos concurrents sur Google.',
  },
  {
    question: 'Combien coûte un accompagnement SEO à Lorient ?',
    answer: 'Un accompagnement mensuel démarre à partir de 500 euros par mois. Le tarif dépend de la taille de votre site et de la concurrence sur vos mots-clés. Je propose un audit gratuit pour évaluer vos besoins et vous remettre un devis clair, sans engagement.',
  },
  {
    question: 'En combien de temps vais-je voir des résultats sur Google ?',
    answer: 'Comptez entre 3 et 6 mois pour les premiers résultats visibles. Le SEO est un travail de fond : les positions gagnées se renforcent avec le temps. Pour certains clients, les premiers appels sont arrivés dès le 4e mois.',
  },
  {
    question: 'Travaillez-vous avec des entreprises du secteur maritime à Lorient ?',
    answer: 'Oui, le secteur maritime est au coeur de Lorient. Que vous soyez dans la pêche, la réparation navale, le nautisme ou le tourisme lié à la Cité de la Voile Éric Tabarly, je peux adapter la stratégie SEO aux spécificités de votre activité et aux requêtes de vos clients.',
  },
  {
    question: 'Quelle est la différence entre un freelance SEO et une agence à Lorient ?',
    answer: 'Avec un freelance, vous travaillez directement avec la personne qui gère votre dossier. Pas de commercial, pas d\'interlocuteur qui change. La relation est plus directe, les tarifs souvent plus accessibles, et les résultats arrivent plus vite.',
  },
  {
    question: 'Comment le SEO peut aider un commerce du centre-ville de Lorient ?',
    answer: 'Beaucoup de Lorientais cherchent des commerces sur Google avant de se déplacer. En étant bien positionné sur des requêtes comme "restaurant Lorient port" ou "boutique centre-ville Lorient", vous captez ces clients au moment où ils sont prêts à acheter.',
  },
  {
    question: 'Intervenez-vous aussi sur la côte morbihannaise autour de Lorient ?',
    answer: 'Bien sûr. J\'accompagne des entreprises à Lanester, Hennebont, Ploemeur, Larmor-Plage, Quéven, et jusqu\'à l\'Île de Groix. Le SEO local permet de couvrir tout le pays de Lorient et d\'attirer des clients de toute la côte du Morbihan.',
  },
  {
    question: 'Le SEO est-il utile pour les entreprises touristiques de Lorient ?',
    answer: 'Absolument. Entre la Cité de la Voile, le port de Keroman, l\'Île de Groix et les plages de Larmor, Lorient attire des visiteurs toute l\'année. Le référencement naturel permet aux hébergements, restaurants et activités touristiques de capter ce trafic directement depuis Google.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Freelance SEO à Lorient', description, '/freelance-seo-lorient', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Freelance SEO à Lorient', description, '/freelance-seo-lorient', [
      { '@type': 'City', name: 'Lorient' },
      { '@type': 'AdministrativeArea', name: 'Morbihan' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Freelance SEO Lorient', path: '/freelance-seo-lorient' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function FreelanceSeoLorientPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FreelanceSeoLorientContent faqs={faqs} />
    </>
  )
}

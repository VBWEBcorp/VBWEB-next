import type { Metadata } from 'next'

import { FreelanceSeoContent } from './freelance-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Freelance SEO : je vous aide à attirer plus de clients grâce à Google, partout en France. Audit gratuit, stratégie sur mesure, résultats mesurables. 80+ avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Freelance SEO | Référencement Naturel - VBWEB',
  description,
  alternates: { canonical: '/freelance-seo' },
}

const faqs = [
  {
    question: 'Quelle est la différence entre un freelance SEO et une agence SEO ?',
    answer: 'Avec un freelance SEO, vous travaillez avec la personne qui connaît votre dossier. Pas de commercial, pas de chargé de compte qui change tous les 3 mois. La relation est directe, et les tarifs sont souvent plus accessibles qu\'en agence.',
  },
  {
    question: 'Pourquoi faire appel à un freelance SEO ?',
    answer: 'Un freelance SEO connaît votre marché, les habitudes de recherche de vos clients et vos concurrents directs. Vous travaillez en direct avec la personne qui pilote votre dossier. Cette approche a fait la différence pour Rennes Pneus : de 30 à 3 600 visites par mois grâce au référencement.',
  },
  {
    question: 'Combien coûte un freelance SEO ?',
    answer: 'Un accompagnement SEO mensuel démarre à partir de 500 euros par mois. Le tarif varie selon la taille de votre site et la concurrence sur vos mots-clés. Je propose un audit gratuit pour évaluer vos besoins et vous remettre un devis clair.',
  },
  {
    question: 'Quels résultats concrets est-ce que je peux attendre ?',
    answer: 'Quelques exemples récents : EPICU est passé de 100 à 5 000 visites par mois, Rennes Pneus de 30 à 3 600 avec 500 appels mensuels, Jumelles.com a gagné +33% de trafic organique. Chaque projet est différent, mais les résultats sont toujours mesurables.',
  },
  {
    question: 'Concrètement, que fait un freelance SEO sur votre site ?',
    answer: 'J\'analyse votre positionnement sur Google, j\'identifie les mots-clés recherchés par vos clients, et j\'optimise votre site pour que vous apparaissiez dans les premiers résultats. Le travail porte sur la technique (vitesse, structure), le contenu (pages optimisées) et la notoriété (liens de qualité vers votre site).',
  },
  {
    question: 'Comment se déroule l\'accompagnement SEO au quotidien ?',
    answer: 'Vous disposez d\'un espace de suivi dédié avec l\'avancement de votre projet et des synthèses régulières. Nous faisons un point chaque mois, en visio ou en personne. Entre les points, vous pouvez me contacter par message à tout moment.',
  },
  {
    question: 'Travaillez-vous partout en France ?',
    answer: 'Oui, j\'accompagne des clients partout en France. La majorité du travail se fait à distance, avec des rendez-vous en personne lorsque c\'est pertinent.',
  },
  {
    question: 'En combien de temps je vais voir des résultats ?',
    answer: 'En général entre 3 et 6 mois pour les premiers résultats. Le SEO c\'est un travail de fond qui s\'accélère avec le temps. Pour Rennes Pneus, les premiers appels sont arrivés au bout de 4 mois. Pour EPICU, la croissance a été progressive sur 3 ans.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Freelance SEO', description, '/freelance-seo', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Freelance SEO', description, '/freelance-seo'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Freelance SEO', path: '/freelance-seo' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function FreelanceSeoRennesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FreelanceSeoContent faqs={faqs} />
    </>
  )
}

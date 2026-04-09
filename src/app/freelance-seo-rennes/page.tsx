import type { Metadata } from 'next'

import { FreelanceSeoContent } from './freelance-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Freelance SEO à Rennes : accompagnement en référencement naturel pour PME, artisans et commerces bretons. Plus de 200 campagnes SEO menées, 150 sites créés, 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Freelance SEO à Rennes | Référencement Naturel en Bretagne - VBWEB',
  description,
  alternates: { canonical: '/freelance-seo-rennes' },
}

const faqs = [
  {
    question: 'Quelle est la différence entre un freelance SEO et une agence SEO à Rennes ?',
    answer: 'Avec un freelance SEO, vous travaillez avec la personne qui connaît votre dossier. Pas de commercial, pas de chargé de compte qui change tous les 3 mois. La relation est directe, et les tarifs sont souvent plus accessibles qu\'en agence.',
  },
  {
    question: 'Pourquoi faire appel à un freelance SEO basé à Rennes ?',
    answer: 'Un freelance SEO local connaît le marché rennais, les habitudes de recherche des Bretons et vos concurrents directs. C\'est aussi la possibilité de se rencontrer en personne. Cette proximité a fait la différence pour Rennes Pneus : de 30 à 3 600 visites par mois grâce au référencement local.',
  },
  {
    question: 'Combien coûte un freelance SEO à Rennes ?',
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
    answer: 'Vous disposez d\'un espace de suivi dédié avec l\'avancement de votre projet et des synthèses régulières. Nous faisons un point chaque mois, en visio ou en personne à Rennes. Entre les points, vous pouvez me contacter par message à tout moment.',
  },
  {
    question: 'Travaillez-vous aussi en dehors de Rennes ?',
    answer: 'Oui, je suis basé à Rennes mais j\'accompagne des clients dans toute la Bretagne et en région parisienne. La majorité du travail se fait à distance, avec des rendez-vous en personne lorsque c\'est pertinent.',
  },
  {
    question: 'En combien de temps je vais voir des résultats ?',
    answer: 'En général entre 3 et 6 mois pour les premiers résultats. Le SEO c\'est un travail de fond qui s\'accélère avec le temps. Pour Rennes Pneus, les premiers appels sont arrivés au bout de 4 mois. Pour EPICU, la croissance a été progressive sur 3 ans.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Freelance SEO à Rennes', description, '/freelance-seo-rennes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Freelance SEO à Rennes', description, '/freelance-seo-rennes'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Freelance SEO Rennes', path: '/freelance-seo-rennes' },
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

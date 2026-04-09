import type { Metadata } from 'next'

import { FreelanceSeoContent } from './freelance-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Freelance SEO à Rennes : un expert indépendant pour votre référencement naturel. Accompagnement direct, sans intermédiaire. Résultats concrets pour PME et artisans en Bretagne.'

export const metadata: Metadata = {
  title: 'Freelance SEO Rennes | Expert Référencement Indépendant',
  description,
  alternates: { canonical: '/freelance-seo-rennes' },
}

const faqs = [
  {
    question: 'Quelle est la différence entre un freelance SEO et une agence SEO ?',
    answer: 'Un freelance SEO travaille en direct avec vous, sans intermédiaire ni chef de projet. Vous échangez directement avec la personne qui optimise votre site. Plus de réactivité, un interlocuteur unique qui connaît votre dossier, et des tarifs souvent plus accessibles qu\'en agence.',
  },
  {
    question: 'Pourquoi choisir un freelance SEO basé à Rennes ?',
    answer: 'Un freelance local connaît le tissu économique rennais, les habitudes de recherche des Bretons et vos concurrents directs. On peut se rencontrer en personne, visiter votre entreprise et comprendre votre métier. C\'est cette proximité qui a permis d\'accompagner Rennes Pneus de 30 à 3 600 visites par mois.',
  },
  {
    question: 'Combien coûte un freelance SEO à Rennes ?',
    answer: 'Un accompagnement SEO mensuel démarre à partir de 500 euros par mois. Le tarif dépend de la taille de votre site, de votre secteur et de la concurrence sur vos mots-clés. On propose un audit gratuit pour évaluer vos besoins et vous donner un devis transparent avant tout engagement.',
  },
  {
    question: 'Quels résultats concrets peut apporter un freelance SEO ?',
    answer: 'Sur mes 3 dernières études de cas : EPICU est passé de 100 à 5 000 visites/mois, Rennes Pneus de 30 à 3 600 visites/mois avec 500 appels mensuels, et Jumelles.com a gagné +33% de trafic organique. Chaque projet est différent, mais les résultats sont toujours mesurables.',
  },
  {
    question: 'Comment travaillez-vous au quotidien avec vos clients ?',
    answer: 'On fonctionne en accompagnement mensuel : un point régulier (visio ou en personne à Rennes), un rapport de positionnement, et des optimisations continues. Vous avez un accès direct par téléphone et email, sans ticket support.',
  },
  {
    question: 'Travaillez-vous uniquement à Rennes ?',
    answer: 'Basé à Rennes, mais on accompagne des clients dans toute la Bretagne et au-delà. La majorité du travail se fait à distance, avec des rendez-vous en personne quand c\'est pertinent. On a des clients à Rennes, Saint-Malo, Brest et en région parisienne.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Freelance SEO Rennes', description, '/freelance-seo-rennes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Freelance SEO', description, '/freelance-seo-rennes'),
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

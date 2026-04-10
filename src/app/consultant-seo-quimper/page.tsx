import type { Metadata } from 'next'

import { ConsultantSeoQuimperContent } from './consultant-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Consultant SEO à Quimper : audit gratuit, stratégie de référencement sur mesure et résultats mesurables pour les entreprises du Finistère. Victor Béasse, 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Consultant SEO à Quimper | Expert Référencement - VBWEB',
  description,
  alternates: { canonical: '/consultant-seo-quimper' },
}

const faqs = [
  {
    question: 'Pourquoi faire appel à un consultant SEO pour votre entreprise à Quimper ?',
    answer: 'Un consultant SEO vous aide à apparaître dans les premiers résultats Google quand vos clients recherchent vos services à Quimper et en Cornouaille. C\'est un investissement rentable : contrairement à la publicité, le référencement naturel génère du trafic durable sans payer chaque clic.',
  },
  {
    question: 'Comment travaillez-vous avec des entreprises basées à Quimper depuis Rennes ?',
    answer: 'La majorité du travail SEO se fait à distance : audit technique, recherche de mots-clés, optimisation de contenu, suivi de positionnement. Nous échangeons en visio chaque mois, et je me déplace à Quimper quand c\'est nécessaire. Plusieurs de mes clients sont dans le Finistère et cette organisation fonctionne très bien.',
  },
  {
    question: 'Combien coûte un consultant SEO à Quimper ?',
    answer: 'Un accompagnement SEO mensuel démarre à partir de 500 euros par mois. Le tarif dépend de la taille de votre site, de la concurrence sur vos mots-clés et de vos objectifs. Je propose un audit gratuit pour évaluer vos besoins et vous remettre un devis clair, sans engagement.',
  },
  {
    question: 'Quels résultats concrets peut-on attendre d\'un consultant SEO ?',
    answer: 'Quelques exemples récents : EPICU est passé de 100 à 5 000 visites par mois, Rennes Pneus de 30 à 3 600 avec 500 appels mensuels, Jumelles.com a gagné +33 % de trafic organique. Chaque projet est différent, mais les résultats sont toujours mesurables et documentés.',
  },
  {
    question: 'Quelle est la différence entre un consultant SEO et une agence SEO ?',
    answer: 'Avec un consultant SEO, vous travaillez directement avec la personne qui gère votre dossier. Pas de commercial, pas d\'interlocuteur qui change tous les trimestres. La relation est plus directe, la réactivité meilleure, et les tarifs souvent plus compétitifs qu\'en agence.',
  },
  {
    question: 'En combien de temps voit-on les premiers résultats SEO ?',
    answer: 'En général entre 3 et 6 mois pour les premiers résultats significatifs. Le SEO est un travail de fond qui s\'accélère avec le temps. Pour Rennes Pneus, les premiers appels sont arrivés au bout de 4 mois. La progression est régulière et durable.',
  },
  {
    question: 'Proposez-vous un accompagnement SEO local pour Quimper et le Finistère ?',
    answer: 'Oui, le référencement local est l\'un de mes domaines de prédilection. Je travaille votre fiche Google Business Profile, j\'optimise votre site pour les recherches géolocalisées à Quimper, Fouesnant, Concarneau ou Douarnenez, et je mets en place une stratégie d\'avis clients.',
  },
  {
    question: 'Quels types d\'entreprises accompagnez-vous à Quimper ?',
    answer: 'J\'accompagne des PME, artisans, commerces et entreprises de services dans le Finistère. Que vous soyez dans l\'agroalimentaire, le tourisme, l\'artisanat ou les services aux particuliers, le SEO s\'adapte à votre secteur et à vos objectifs de croissance.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Consultant SEO à Quimper', description, '/consultant-seo-quimper', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Consultant SEO à Quimper', description, '/consultant-seo-quimper', [
      { '@type': 'City', name: 'Quimper' },
      { '@type': 'AdministrativeArea', name: 'Finistère' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Consultant SEO Quimper', path: '/consultant-seo-quimper' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function ConsultantSeoQuimperPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ConsultantSeoQuimperContent faqs={faqs} />
    </>
  )
}

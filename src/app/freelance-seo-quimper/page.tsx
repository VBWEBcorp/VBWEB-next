import type { Metadata } from 'next'

import { FreelanceSeoQuimperContent } from './freelance-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Freelance SEO à Quimper : consultant en référencement naturel pour les entreprises du Finistère sud. Audit gratuit, stratégie sur mesure, résultats mesurables. 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Freelance SEO à Quimper | Référencement Naturel - VBWEB',
  description,
  alternates: { canonical: '/freelance-seo-quimper' },
}

const faqs = [
  {
    question: 'Pourquoi faire appel à un freelance SEO pour mon entreprise à Quimper ?',
    answer: 'Un freelance SEO vous apporte un interlocuteur unique qui connaît votre dossier de A à Z. Pour une entreprise quimpéroise, c\'est aussi une stratégie calibrée sur votre marché local : les recherches des habitants de Cornouaille ne sont pas les mêmes qu\'à Rennes ou Paris. Je travaille avec vous directement, sans commercial ni intermédiaire.',
  },
  {
    question: 'Comment travaillez-vous avec des clients à Quimper depuis Rennes ?',
    answer: 'Le référencement naturel se fait principalement à distance : audits, optimisations, reporting. On se retrouve en visio chaque mois, et je me déplace à Quimper quand c\'est utile. La Bretagne, c\'est 2h30 de route. Plusieurs de mes clients sont dans le Finistère et la collaboration fonctionne très bien.',
  },
  {
    question: 'Combien coûte un freelance SEO à Quimper ?',
    answer: 'Un accompagnement SEO mensuel démarre à partir de 500 euros par mois. Le tarif dépend de la taille du site, de la concurrence sur vos mots-clés et de vos objectifs. Je propose un audit gratuit pour évaluer vos besoins avant de vous remettre un devis clair.',
  },
  {
    question: 'Le SEO peut-il aider les entreprises agroalimentaires du pays de Quimper ?',
    answer: 'Absolument. L\'agroalimentaire est un pilier du Finistère sud avec des acteurs comme Hénaff ou Chancerelle. Que vous soyez producteur, transformateur ou distributeur, vos clients et partenaires recherchent vos produits sur Google. Le SEO vous positionne sur ces requêtes précises pour générer des contacts qualifiés.',
  },
  {
    question: 'Quels résultats concrets attendre d\'un freelance SEO ?',
    answer: 'Quelques exemples : Rennes Pneus est passé de 30 à 3 600 visites par mois, EPICU de 100 à 5 000 visites, Jumelles.com a gagné +33% de trafic organique. Chaque projet est différent, mais les résultats sont toujours mesurables : positions Google, trafic, appels, demandes de devis.',
  },
  {
    question: 'Est-ce que le SEO fonctionne pour les commerces et artisans de Quimper ?',
    answer: 'C\'est justement là que le SEO local est le plus efficace. Un artisan faïencier, un restaurant près de la cathédrale Saint-Corentin ou un commerce du centre-ville : vos clients cherchent sur Google avant de se déplacer. Apparaître dans les premiers résultats, c\'est capter cette intention d\'achat au bon moment.',
  },
  {
    question: 'Le SEO peut-il aider les acteurs culturels et touristiques de Cornouaille ?',
    answer: 'Oui. Quimper attire des visiteurs grâce à son patrimoine : la faïencerie, le Festival de Cornouaille, les bords de l\'Odet. Les acteurs du tourisme, les hébergeurs et les organisateurs d\'événements ont tout intérêt à être visibles sur Google quand les gens préparent leur séjour en Finistère.',
  },
  {
    question: 'En combien de temps vais-je voir des résultats SEO à Quimper ?',
    answer: 'En général entre 3 et 6 mois pour les premiers résultats visibles. Le SEO est un travail de fond : les positions se construisent mois après mois et la progression s\'accélère avec le temps. Sur un marché local comme Quimper, les gains peuvent arriver plus vite que sur des marchés très concurrentiels.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Freelance SEO à Quimper', description, '/freelance-seo-quimper', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Freelance SEO à Quimper', description, '/freelance-seo-quimper', [
      { '@type': 'City', name: 'Quimper' },
      { '@type': 'AdministrativeArea', name: 'Finistère' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Freelance SEO Quimper', path: '/freelance-seo-quimper' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function FreelanceSeoQuimperPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FreelanceSeoQuimperContent faqs={faqs} />
    </>
  )
}

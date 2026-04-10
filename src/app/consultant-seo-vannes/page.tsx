import type { Metadata } from 'next'

import { ConsultantSeoVannesContent } from './consultant-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Consultant SEO à Vannes : audit, stratégie et optimisation Google pour les entreprises du Morbihan. Expertise technique et éditoriale. 75 avis 5 étoiles sur Google.'

export const metadata: Metadata = {
  title: 'Consultant SEO à Vannes | Expert Référencement - VBWEB',
  description,
  alternates: { canonical: '/consultant-seo-vannes' },
}

const faqs = [
  {
    question: 'Quel est le rôle d\'un consultant SEO à Vannes ?',
    answer: 'Un consultant SEO analyse votre présence sur Google, identifie les freins techniques et éditoriaux, puis met en place une stratégie pour améliorer vos positions. À Vannes, cela passe par une connaissance fine du marché local : tourisme, nautisme, commerce de centre-ville. Mon rôle est de vous rendre visible là où vos clients vous cherchent.',
  },
  {
    question: 'Comment se déroule un audit SEO pour un site vannetais ?',
    answer: 'L\'audit couvre trois volets : technique (vitesse, structure, indexation), contenu (pertinence des pages, mots-clés ciblés) et popularité (liens entrants, citations locales). Pour une entreprise vannetaise, j\'intègre aussi l\'analyse de votre fiche Google Business Profile et votre positionnement sur les requêtes du Golfe du Morbihan.',
  },
  {
    question: 'Quelle est la différence entre un consultant SEO et une agence web ?',
    answer: 'Le consultant SEO est un expert dédié au référencement naturel. Contrairement à une agence généraliste qui propose du SEO parmi d\'autres services, je me concentre exclusivement sur votre visibilité Google. Vous avez un interlocuteur unique, une stratégie sur mesure et un suivi plus réactif.',
  },
  {
    question: 'Quel budget prévoir pour une prestation de consultant SEO à Vannes ?',
    answer: 'Un accompagnement SEO mensuel commence à 500 euros. Le tarif varie selon la complexité de votre site, le nombre de pages à optimiser et le niveau de concurrence sur vos mots-clés. L\'audit initial est gratuit : il me permet de vous proposer un plan adapté à votre budget et vos objectifs.',
  },
  {
    question: 'Le SEO fonctionne-t-il pour les commerces saisonniers du Golfe du Morbihan ?',
    answer: 'C\'est justement là que le SEO prend tout son sens. En préparant votre référencement en basse saison, vous êtes positionné quand les recherches explosent au printemps et en été. Les requêtes comme "croisière Golfe du Morbihan" ou "restaurant vue mer Vannes" ont des pics prévisibles : il faut anticiper.',
  },
  {
    question: 'Comment mesurez-vous les résultats d\'une stratégie SEO ?',
    answer: 'Je suis les positions Google sur vos mots-clés cibles, le trafic organique mensuel, le nombre de demandes entrantes et le taux de conversion. Vous recevez un rapport chaque mois avec l\'évolution de ces indicateurs. Pas de jargon, des chiffres concrets et des recommandations pour le mois suivant.',
  },
  {
    question: 'Travaillez-vous uniquement avec des entreprises basées à Vannes ?',
    answer: 'Non, j\'accompagne aussi des entreprises à Auray, Lorient, Sarzeau, Arradon, Séné et dans tout le Morbihan. Basé à Rennes, je couvre toute la Bretagne. Le travail se fait principalement à distance, avec des rencontres en personne quand c\'est utile.',
  },
  {
    question: 'Peut-on combiner SEO et Google Ads pour une entreprise à Vannes ?',
    answer: 'Les deux sont complémentaires. Google Ads vous apporte du trafic immédiat sur des requêtes ciblées, tandis que le SEO construit une visibilité durable. Pour les entreprises vannetaises avec une forte saisonnalité, je recommande souvent de lancer des campagnes Ads en haute saison et de travailler le SEO en parallèle pour réduire la dépendance publicitaire.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Consultant SEO à Vannes', description, '/consultant-seo-vannes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Consultant SEO à Vannes', description, '/consultant-seo-vannes', [
      { '@type': 'City', name: 'Vannes' },
      { '@type': 'AdministrativeArea', name: 'Morbihan' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Consultant SEO Vannes', path: '/consultant-seo-vannes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function ConsultantSeoVannesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ConsultantSeoVannesContent faqs={faqs} />
    </>
  )
}

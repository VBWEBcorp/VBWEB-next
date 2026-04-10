import type { Metadata } from 'next'

import { AgenceReferencementNantesContent } from './agence-referencement-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Vous cherchez une agence de référencement à Nantes ? Expert SEO dans le Grand Ouest, j\'accompagne les entreprises nantaises pour se positionner sur Google. Audit gratuit, 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Agence de Référencement à Nantes | Expert SEO - VBWEB',
  description,
  alternates: { canonical: '/agence-referencement-nantes' },
}

const faqs = [
  {
    question: 'Pourquoi faire appel à une agence de référencement à Nantes ?',
    answer: 'Nantes est un marché dynamique avec une forte concurrence en ligne. Le référencement naturel permet à votre site de se positionner sur les recherches Google de vos clients nantais. C\'est un canal d\'acquisition durable qui travaille pour vous en continu, jour et nuit.',
  },
  {
    question: 'Quelle différence entre un expert SEO et une agence de référencement à Nantes ?',
    answer: 'Un expert indépendant vous offre un interlocuteur unique, celui qui fait réellement le travail. Pas de commercial, pas de turnover, pas de dossier qui change de mains. La stratégie reste cohérente et les échanges sont directs.',
  },
  {
    question: 'Quel est le prix d\'un accompagnement en référencement à Nantes ?',
    answer: 'Un accompagnement mensuel démarre à 500 euros par mois. Le montant varie selon la concurrence dans votre secteur, la taille de votre site et les objectifs fixés. L\'audit gratuit sert à cadrer le projet et à vous remettre un devis précis.',
  },
  {
    question: 'Vous êtes basé à Rennes, comment accompagnez-vous des entreprises à Nantes ?',
    answer: 'Le référencement se fait principalement à distance : analyses, optimisations, suivi en ligne. Rennes et Nantes sont à 1h15 de train, je me déplace pour les rendez-vous stratégiques. Et je travaille déjà avec plusieurs entreprises de la métropole nantaise.',
  },
  {
    question: 'Combien de temps faut-il pour voir des résultats en référencement à Nantes ?',
    answer: 'Les premières progressions apparaissent entre 3 et 6 mois. Nantes étant une grande métropole, la concurrence en ligne peut être plus forte que dans des villes moyennes. Mais cela signifie aussi un volume de recherche plus important et donc un potentiel de croissance élevé.',
  },
  {
    question: 'Le référencement local est-il important à Nantes ?',
    answer: 'Très important. Les recherches géolocalisées comme "restaurant Nantes centre" ou "plombier Nantes" représentent un volume énorme. J\'optimise votre fiche Google Business Profile et vos pages pour ces recherches locales. L\'objectif : apparaître sur Google et Google Maps quand vos clients sont à proximité.',
  },
  {
    question: 'Le référencement fonctionne-t-il pour les startups nantaises ?',
    answer: 'Oui, et c\'est souvent un levier sous-estimé par les startups qui se concentrent sur la publicité payante. Le référencement construit une visibilité pérenne qui réduit votre coût d\'acquisition de clients sur le long terme. Plus tôt vous commencez, mieux c\'est.',
  },
  {
    question: 'Pouvez-vous reprendre le SEO d\'un site nantais déjà travaillé par une agence ?',
    answer: 'Bien sûr, c\'est un cas de figure fréquent. L\'audit initial permet de faire le bilan de ce qui a été fait, d\'identifier les acquis à conserver et les axes d\'amélioration. La transition se fait en douceur, sans perdre le travail existant.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence de Référencement à Nantes', description, '/agence-referencement-nantes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence de Référencement à Nantes', description, '/agence-referencement-nantes', [
      { '@type': 'City', name: 'Nantes' },
      { '@type': 'AdministrativeArea', name: 'Loire-Atlantique' },
      { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence Référencement Nantes', path: '/agence-referencement-nantes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceReferencementNantesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceReferencementNantesContent faqs={faqs} />
    </>
  )
}

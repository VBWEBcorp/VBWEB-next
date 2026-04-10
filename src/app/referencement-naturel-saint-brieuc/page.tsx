import type { Metadata } from 'next'

import { ReferencementNaturelSaintBrieucContent } from './referencement-naturel-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Référencement naturel à Saint-Brieuc : améliorez votre classement Google et développez votre activité dans les Côtes-d\'Armor. Audit gratuit, suivi mensuel. 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Référencement Naturel à Saint-Brieuc | Expert SEO - VBWEB',
  description,
  alternates: { canonical: '/referencement-naturel-saint-brieuc' },
}

const faqs = [
  {
    question: 'Le référencement naturel, c\'est quoi concrètement pour une entreprise à Saint-Brieuc ?',
    answer: 'Le référencement naturel regroupe toutes les actions qui permettent à votre site d\'apparaître dans les premiers résultats Google, sans publicité payante. Pour une entreprise briochine, c\'est la manière la plus efficace de capter les clients qui cherchent vos services en ligne.',
  },
  {
    question: 'Combien coûte le référencement naturel à Saint-Brieuc ?',
    answer: 'Un accompagnement mensuel commence à 500 euros. Le montant varie selon la concurrence dans votre secteur et l\'ampleur du travail à réaliser. Je propose un audit gratuit pour évaluer votre situation et vous remettre un devis détaillé.',
  },
  {
    question: 'Ma fiche Google est déjà bien optimisée, ai-je quand même besoin de référencement naturel ?',
    answer: 'La fiche Google Business Profile et le référencement naturel sont complémentaires. Votre fiche vous rend visible sur Google Maps, le référencement naturel positionne votre site dans les résultats classiques. Les deux ensemble, c\'est la meilleure couverture possible sur Google.',
  },
  {
    question: 'Quand est-ce que je vais voir mon site remonter sur Google ?',
    answer: 'Les premiers mouvements se produisent entre 3 et 6 mois. Sur des requêtes locales comme "coiffeur Saint-Brieuc" ou "comptable Côtes-d\'Armor", la progression est souvent plus rapide car la concurrence en ligne est moindre que dans les grandes métropoles.',
  },
  {
    question: 'Le référencement naturel fonctionne-t-il pour les commerces de centre-ville à Saint-Brieuc ?',
    answer: 'Les commerces de centre-ville ont tout à gagner avec le référencement naturel. Les recherches "près de moi" et les recherches locales sur Google ont explosé ces dernières années. Un fleuriste, un opticien ou une boutique de vêtements bien référencé attire des clients qui sont déjà dans le quartier.',
  },
  {
    question: 'Quelle différence entre le référencement naturel et les annonces Google ?',
    answer: 'Les annonces Google (Ads) fonctionnent comme un panneau publicitaire payant : vous êtes visible tant que vous payez. Le référencement naturel, c\'est votre emplacement propre sur Google. Il se construit dans le temps et ne disparaît pas quand vous arrêtez d\'investir.',
  },
  {
    question: 'Comment suivre les résultats de mon référencement naturel ?',
    answer: 'Vous disposez d\'un espace de suivi avec vos positions Google, le trafic de votre site et les demandes de contact reçues. On fait le point ensemble chaque mois. Tout est transparent : vous voyez ce qui progresse et ce qu\'il reste à travailler.',
  },
  {
    question: 'Travaillez-vous avec des entreprises des Côtes-d\'Armor en dehors de Saint-Brieuc ?',
    answer: 'J\'accompagne des entreprises à Plérin, Langueux, Trégueux, Lamballe, Ploufragan et plus largement dans les Côtes-d\'Armor. Je travaille aussi avec des clients à Rennes, Saint-Malo et Brest. Le référencement naturel s\'adapte parfaitement au travail à distance.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Référencement Naturel à Saint-Brieuc', description, '/referencement-naturel-saint-brieuc', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Référencement Naturel à Saint-Brieuc', description, '/referencement-naturel-saint-brieuc', [
      { '@type': 'City', name: 'Saint-Brieuc' },
      { '@type': 'AdministrativeArea', name: 'Côtes-d\'Armor' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Référencement Naturel Saint-Brieuc', path: '/referencement-naturel-saint-brieuc' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function ReferencementNaturelSaintBrieucPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReferencementNaturelSaintBrieucContent faqs={faqs} />
    </>
  )
}

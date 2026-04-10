import type { Metadata } from 'next'

import { AgenceSeoVannesContent } from './agence-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Vous cherchez une agence SEO à Vannes ? Découvrez pourquoi travailler avec un expert SEO indépendant vous apporte plus de résultats, plus vite. Audit gratuit, 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Agence SEO à Vannes | Expert Référencement Naturel - VBWEB',
  description,
  alternates: { canonical: '/agence-seo-vannes' },
}

const faqs = [
  {
    question: 'Pourquoi choisir un expert SEO plutôt qu\'une agence SEO à Vannes ?',
    answer: 'Avec un expert indépendant, vous avez un seul interlocuteur qui connaît votre dossier de A à Z. Pas de turnover, pas de commercial entre vous et la personne qui travaille sur votre site. Les décisions sont plus rapides et la stratégie reste cohérente dans le temps.',
  },
  {
    question: 'Combien coûte un accompagnement SEO à Vannes ?',
    answer: 'Un accompagnement SEO mensuel démarre à 500 euros par mois. Le tarif dépend de la taille de votre site, de la concurrence sur vos mots-clés et de vos objectifs. Je propose un audit gratuit pour évaluer vos besoins et vous remettre un devis détaillé.',
  },
  {
    question: 'Quels types d\'entreprises vannetaises accompagnez-vous en SEO ?',
    answer: 'J\'accompagne des PME, commerces, artisans et professions libérales à Vannes et dans le Morbihan. Tourisme, nautisme, restauration, immobilier, santé... chaque secteur a ses spécificités en termes de mots-clés et de concurrence locale.',
  },
  {
    question: 'Comment se passe le suivi SEO au quotidien ?',
    answer: 'Vous avez accès à un espace de suivi dédié avec l\'évolution de vos positions, votre trafic et les actions réalisées. On fait un point chaque mois en visio ou en personne. Entre les points, vous pouvez me joindre par message à tout moment.',
  },
  {
    question: 'En combien de temps vais-je voir des résultats SEO à Vannes ?',
    answer: 'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Le référencement est un travail de fond qui s\'accélère avec le temps. Sur un marché comme Vannes, la concurrence est souvent moins forte qu\'à Rennes ou Nantes, ce qui permet d\'obtenir des résultats plus rapidement.',
  },
  {
    question: 'Travaillez-vous aussi le référencement local pour le Golfe du Morbihan ?',
    answer: 'Oui, le SEO local est au coeur de mon accompagnement à Vannes. Fiche Google Business Profile, requêtes géolocalisées, citations locales... je travaille votre visibilité pour que les habitants et touristes du Golfe du Morbihan vous trouvent facilement.',
  },
  {
    question: 'Quelle est votre méthode pour référencer un site vannetais ?',
    answer: 'Je commence par un audit complet : technique, contenu et popularité. Ensuite, je construis une stratégie adaptée à votre marché local. Le travail se fait mois après mois avec des optimisations techniques, de la création de contenu ciblé et du netlinking de qualité.',
  },
  {
    question: 'Pouvez-vous reprendre le SEO d\'un site déjà travaillé par une agence ?',
    answer: 'Bien sûr. Je reprends régulièrement des projets après un passage en agence. L\'audit initial permet de voir ce qui a été fait, ce qui manque et ce qui peut être amélioré. La transition se fait en douceur, sans perdre les acquis.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence SEO à Vannes', description, '/agence-seo-vannes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence SEO à Vannes', description, '/agence-seo-vannes', [
      { '@type': 'City', name: 'Vannes' },
      { '@type': 'AdministrativeArea', name: 'Morbihan' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence SEO Vannes', path: '/agence-seo-vannes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceSeoVannesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceSeoVannesContent faqs={faqs} />
    </>
  )
}

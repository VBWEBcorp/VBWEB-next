import type { Metadata } from 'next'

import { FreelanceSeoSaintMaloContent } from './freelance-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Freelance SEO à Saint-Malo : boostez votre visibilité sur Google dans la cité corsaire. Audit gratuit, stratégie adaptée au tourisme et au commerce local. 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Freelance SEO à Saint-Malo | Référencement Naturel - VBWEB',
  description,
  alternates: { canonical: '/freelance-seo-saint-malo' },
}

const faqs = [
  {
    question: 'Pourquoi faire appel à un freelance SEO pour mon activité à Saint-Malo ?',
    answer: 'Saint-Malo attire plus de 3 millions de visiteurs par an. La plupart d\'entre eux recherchent un hôtel, un restaurant ou une activité sur Google avant de venir. Un freelance SEO vous aide à capter cette demande en plaçant votre site dans les premiers résultats sur les requêtes qui comptent pour votre activité.',
  },
  {
    question: 'Comment le SEO peut aider un hôtel ou un restaurant saisonnier à Saint-Malo ?',
    answer: 'Le SEO se prépare en amont de la saison. Si vous lancez votre référencement en janvier, vous serez bien positionné quand les touristes commenceront à planifier leurs vacances en mars-avril. C\'est un levier qui travaille pour vous même quand la saison est finie, en captant les réservations anticipées.',
  },
  {
    question: 'Quels types de mots-clés ciblez-vous pour les entreprises malouines ?',
    answer: 'Tout dépend de votre activité. Pour un restaurant, ce serait "restaurant fruits de mer Saint-Malo" ou "crêperie intra-muros". Pour un hôtel, "hôtel vue mer Saint-Malo" ou "chambre d\'hôtes proche plage du Sillon". Je cible les requêtes que vos clients tapent réellement sur Google.',
  },
  {
    question: 'En combien de temps vais-je voir des résultats SEO à Saint-Malo ?',
    answer: 'Entre 3 et 6 mois pour les premières positions. La concurrence est forte sur certaines requêtes touristiques, mais les niches locales offrent des opportunités rapides. Par exemple, se positionner sur "thalasso Saint-Malo avis" ou "location voilier Saint-Malo" peut aller plus vite que sur des termes génériques.',
  },
  {
    question: 'Combien coûte un accompagnement SEO pour une entreprise à Saint-Malo ?',
    answer: 'Un accompagnement mensuel démarre à 500 euros par mois. Le tarif dépend de la taille de votre site, de la concurrence sur vos mots-clés et de vos objectifs. Je vous propose un audit gratuit pour évaluer vos besoins et établir un devis clair, sans engagement.',
  },
  {
    question: 'Êtes-vous basé à Saint-Malo ou travaillez-vous à distance ?',
    answer: 'Je suis basé à Rennes, à 45 minutes de Saint-Malo. Je me déplace régulièrement sur la Côte d\'Émeraude pour rencontrer mes clients. La majorité du travail se fait à distance, mais on peut se voir en personne quand c\'est utile, que ce soit à Saint-Malo intra-muros ou à votre bureau.',
  },
  {
    question: 'Mon commerce intra-muros a peu de concurrence en ligne, le SEO est-il quand même utile ?',
    answer: 'Justement, c\'est le meilleur moment pour prendre position. Si vos concurrents ne font pas de SEO, vous pouvez occuper les premières places sur Google rapidement et à moindre coût. Les touristes qui cherchent "boutique intra-muros Saint-Malo" ou "galerie art Saint-Malo" tomberont sur vous en premier.',
  },
  {
    question: 'Quelle différence entre un freelance SEO et une agence pour mon projet à Saint-Malo ?',
    answer: 'Avec un freelance, vous avez un interlocuteur unique qui connaît votre dossier. Pas de turnover, pas de commercial qui disparaît après la signature. Je connais le tissu économique breton, les spécificités du tourisme malouin et la saisonnalité de votre activité. Et mes tarifs sont plus accessibles qu\'en agence.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Freelance SEO à Saint-Malo', description, '/freelance-seo-saint-malo', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Freelance SEO à Saint-Malo', description, '/freelance-seo-saint-malo', [
      { '@type': 'City', name: 'Saint-Malo' },
      { '@type': 'AdministrativeArea', name: 'Ille-et-Vilaine' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Freelance SEO Saint-Malo', path: '/freelance-seo-saint-malo' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function FreelanceSeoSaintMaloPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FreelanceSeoSaintMaloContent faqs={faqs} />
    </>
  )
}

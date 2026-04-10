import type { Metadata } from 'next'

import { FreelanceSeoBrestContent } from './freelance-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Freelance SEO à Brest : je vous aide à gagner en visibilité sur Google dans le Finistère. Audit gratuit, stratégie adaptée à votre marché local. 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Freelance SEO à Brest | Référencement Naturel - VBWEB',
  description,
  alternates: { canonical: '/freelance-seo-brest' },
}

const faqs = [
  {
    question: 'Pourquoi travailler avec un freelance SEO pour mon entreprise à Brest ?',
    answer: 'Un freelance SEO vous offre un interlocuteur unique qui connaît votre dossier. Pas de turnover, pas de commercial intermédiaire. Pour une entreprise brestoise, c\'est aussi l\'assurance d\'une stratégie calibrée sur le marché local du Finistère, pas un plan générique appliqué à toutes les villes.',
  },
  {
    question: 'Vous êtes basé à Rennes, comment ça se passe pour travailler avec des clients à Brest ?',
    answer: 'Le SEO se fait à 95% à distance : analyses, optimisations, reporting. On se voit en visio chaque mois, et je me déplace à Brest quand c\'est pertinent. Plusieurs de mes clients sont dans le Finistère et ça fonctionne très bien. La proximité géographique en Bretagne facilite les rencontres en personne.',
  },
  {
    question: 'Combien coûte un accompagnement SEO pour une entreprise brestoise ?',
    answer: 'Un accompagnement SEO mensuel démarre à 500 euros par mois. Le tarif dépend de la taille du site et de la concurrence sur vos mots-clés. À Brest, certains secteurs comme le naval ou le tourisme sont très disputés, d\'autres beaucoup moins. L\'audit gratuit permet de poser un chiffre précis.',
  },
  {
    question: 'Quels types d\'entreprises à Brest accompagnez-vous en SEO ?',
    answer: 'Des profils très variés : sous-traitants du naval et de la défense qui veulent être trouvés par les donneurs d\'ordres, commerces de la rue de Siam qui cherchent plus de passage, startups du Technopôle Brest-Iroise, restaurants du port, professionnels de santé, artisans du bâtiment dans le Finistère.',
  },
  {
    question: 'Le SEO local fonctionne-t-il vraiment pour une ville comme Brest ?',
    answer: 'Oui, et c\'est même un levier sous-exploité. Brest est la deuxième ville de Bretagne avec un bassin économique dense. Beaucoup d\'entreprises brestoises n\'ont pas de stratégie SEO, ce qui laisse des opportunités réelles pour ceux qui s\'y mettent sérieusement.',
  },
  {
    question: 'En combien de temps vais-je voir des résultats SEO à Brest ?',
    answer: 'Entre 3 et 6 mois pour les premiers résultats visibles. La concurrence à Brest est souvent moins féroce que dans les grandes métropoles, ce qui peut accélérer les choses sur certains mots-clés. Mais le SEO reste un travail de fond : les gains s\'accumulent mois après mois.',
  },
  {
    question: 'Pouvez-vous aussi travailler sur ma fiche Google Business à Brest ?',
    answer: 'Oui, c\'est souvent la première chose que je regarde. Pour un commerce ou un prestataire de services à Brest, la fiche Google Business est cruciale pour apparaître dans les résultats locaux et sur Google Maps. Je l\'optimise en même temps que le site.',
  },
  {
    question: 'Quelle différence entre le SEO et la publicité Google pour mon activité à Brest ?',
    answer: 'La publicité Google (SEA) vous donne de la visibilité immédiate mais elle s\'arrête quand vous coupez le budget. Le SEO construit une visibilité durable : une fois bien positionné, votre site continue d\'attirer des clients sans coût par clic. Pour la plupart des entreprises brestoises, les deux sont complémentaires, mais le SEO est le socle.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Freelance SEO à Brest', description, '/freelance-seo-brest', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Freelance SEO à Brest', description, '/freelance-seo-brest', [
      { '@type': 'City', name: 'Brest' },
      { '@type': 'AdministrativeArea', name: 'Finistère' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Freelance SEO Brest', path: '/freelance-seo-brest' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function FreelanceSeoBrestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FreelanceSeoBrestContent faqs={faqs} />
    </>
  )
}

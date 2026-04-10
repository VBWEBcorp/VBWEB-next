import type { Metadata } from 'next'

import { FreelanceSeoVannesContent } from './freelance-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Freelance SEO à Vannes : j\'améliore votre visibilité sur Google pour attirer plus de clients dans le Morbihan. Audit gratuit, stratégie adaptée au marché local. 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Freelance SEO à Vannes | Référencement Naturel - VBWEB',
  description,
  alternates: { canonical: '/freelance-seo-vannes' },
}

const faqs = [
  {
    question: 'Pourquoi faire appel à un freelance SEO pour mon entreprise à Vannes ?',
    answer: 'Vannes est une ville touristique avec une forte saisonnalité. Un freelance SEO vous aide à capter les recherches Google toute l\'année, pas uniquement en été. Que vous soyez restaurateur dans le centre historique ou prestataire nautique sur le Golfe, le SEO vous apporte des clients au bon moment.',
  },
  {
    question: 'Vous êtes basé à Rennes, comment ça se passe pour travailler avec des clients vannetais ?',
    answer: 'Le SEO se fait principalement à distance : analyses, optimisations, reporting. Mais je me déplace régulièrement à Vannes pour les rendez-vous en personne. Et surtout, je connais bien le Morbihan et ses spécificités économiques, ce qui fait la différence dans la stratégie.',
  },
  {
    question: 'Combien coûte un accompagnement SEO à Vannes ?',
    answer: 'Un accompagnement mensuel démarre à 500 euros par mois. Le tarif dépend de la taille de votre site et du niveau de concurrence sur vos mots-clés. Je vous propose un audit gratuit pour évaluer vos besoins avant tout engagement.',
  },
  {
    question: 'Le SEO est-il pertinent pour les activités saisonnières du Golfe du Morbihan ?',
    answer: 'Absolument. Le SEO prend du temps à porter ses fruits, donc il faut s\'y prendre en avance. Si vous préparez votre référencement en hiver, vous serez bien positionné quand les touristes commenceront à chercher "location bateau Golfe du Morbihan" ou "hôtel Vannes centre" au printemps.',
  },
  {
    question: 'Quels types d\'entreprises vannetaises accompagnez-vous ?',
    answer: 'J\'accompagne des profils très variés : commerces du centre-ville, restaurants, hôtels, activités nautiques, artisans, professions libérales, PME du bassin vannetais. Chaque projet est différent, mais l\'objectif est toujours le même : plus de visibilité sur Google, plus de clients.',
  },
  {
    question: 'En combien de temps vais-je voir des résultats sur Google depuis Vannes ?',
    answer: 'Comptez entre 3 et 6 mois pour les premiers résultats concrets. Sur des requêtes locales comme "dentiste Vannes" ou "plombier Morbihan", ça peut aller plus vite car la concurrence est souvent moins forte qu\'à Paris. Mais le SEO reste un travail de fond qui s\'accélère avec le temps.',
  },
  {
    question: 'Quelle différence entre SEO local et SEO classique pour une entreprise à Vannes ?',
    answer: 'Le SEO local cible les recherches géolocalisées : "restaurant Vannes", "garagiste près de moi". Il inclut l\'optimisation de votre fiche Google Business Profile et le référencement sur Google Maps. Le SEO classique vise un positionnement plus large, sur des requêtes nationales. Les deux sont complémentaires.',
  },
  {
    question: 'Est-ce que vous travaillez aussi avec des entreprises en dehors de Vannes dans le Morbihan ?',
    answer: 'Oui, j\'accompagne des entreprises à Auray, Lorient, Séné, Arradon, Sarzeau et dans tout le Morbihan. Je travaille aussi avec des clients à Rennes, Saint-Malo et dans toute la Bretagne. La majorité du travail se fait à distance, avec des points réguliers en visio ou en personne.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Freelance SEO à Vannes', description, '/freelance-seo-vannes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Freelance SEO à Vannes', description, '/freelance-seo-vannes', [
      { '@type': 'City', name: 'Vannes' },
      { '@type': 'AdministrativeArea', name: 'Morbihan' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Freelance SEO Vannes', path: '/freelance-seo-vannes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function FreelanceSeoVannesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FreelanceSeoVannesContent faqs={faqs} />
    </>
  )
}

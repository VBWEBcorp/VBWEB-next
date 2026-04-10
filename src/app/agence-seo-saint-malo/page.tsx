import type { Metadata } from 'next'

import { AgenceSeoSaintMaloContent } from './agence-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Agence SEO à Saint-Malo : travaillez directement avec un expert SEO pour gagner en visibilité sur Google. Stratégie adaptée au tourisme et au commerce malouin. Audit gratuit.'

export const metadata: Metadata = {
  title: 'Agence SEO à Saint-Malo | Expert Référencement Naturel - VBWEB',
  description,
  alternates: { canonical: '/agence-seo-saint-malo' },
}

const faqs = [
  {
    question: 'Pourquoi un expert SEO plutôt qu\'une agence SEO à Saint-Malo ?',
    answer: 'Saint-Malo a un marché très saisonnier avec 3 millions de visiteurs par an. Un expert SEO indépendant adapte votre stratégie au rythme de votre activité, sans process lourd ni intermédiaire. Les ajustements sont rapides et la relation reste simple.',
  },
  {
    question: 'Quel budget SEO pour une entreprise malouine ?',
    answer: 'L\'accompagnement mensuel commence à 500 euros par mois. Pour une activité touristique ou saisonnière, on peut adapter le rythme et l\'intensité des prestations selon les périodes. L\'audit gratuit permet de cadrer précisément votre projet.',
  },
  {
    question: 'Le SEO est-il pertinent pour le tourisme à Saint-Malo ?',
    answer: 'C\'est même un levier majeur. Les touristes planifient leurs séjours sur Google : "restaurant Saint-Malo", "hôtel intra-muros", "activité Saint-Malo". Se positionner sur ces requêtes avant la saison, c\'est remplir votre carnet de réservations.',
  },
  {
    question: 'Comment gérez-vous la saisonnalité en SEO ?',
    answer: 'On anticipe. Le contenu saisonnier se prépare 3 à 4 mois en amont pour être bien positionné le jour J. En basse saison, on travaille le fond : technique, netlinking, contenu evergreen. Chaque période a son utilité.',
  },
  {
    question: 'Quels types de résultats puis-je espérer ?',
    answer: 'Parmi mes projets récents : un site passé de 100 à 5 000 visites mensuelles, un commerce local qui génère 500 appels par mois grâce au SEO. À Saint-Malo, le potentiel est fort grâce au volume de recherches touristiques.',
  },
  {
    question: 'Travaillez-vous aussi pour des entreprises à Dinard et Dinan ?',
    answer: 'Oui, j\'accompagne des entreprises sur toute la Côte d\'Émeraude et au-delà : Dinard, Dinan, Cancale, Dol-de-Bretagne, Saint-Lunaire. Le SEO local couvre l\'ensemble de votre zone de chalandise.',
  },
  {
    question: 'En combien de temps le SEO produit-il des effets ?',
    answer: 'Les premiers résultats se manifestent entre 3 et 6 mois. Pour une activité saisonnière, je recommande de démarrer en automne pour être bien positionné avant la haute saison estivale.',
  },
  {
    question: 'Proposez-vous aussi la création ou refonte de site web ?',
    answer: 'Oui, je peux concevoir votre site en intégrant le SEO dès la conception. C\'est la meilleure façon de partir sur de bonnes bases plutôt que de corriger après coup. Et si votre site existe déjà, on travaille avec l\'existant.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence SEO à Saint-Malo', description, '/agence-seo-saint-malo', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence SEO à Saint-Malo', description, '/agence-seo-saint-malo', [
      { '@type': 'City', name: 'Saint-Malo' },
      { '@type': 'AdministrativeArea', name: 'Ille-et-Vilaine' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence SEO Saint-Malo', path: '/agence-seo-saint-malo' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceSeoSaintMaloPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceSeoSaintMaloContent faqs={faqs} />
    </>
  )
}

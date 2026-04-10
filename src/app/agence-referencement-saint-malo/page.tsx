import type { Metadata } from 'next'

import { AgenceReferencementSaintMaloContent } from './agence-referencement-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Vous cherchez une agence de référencement à Saint-Malo ? Expert SEO en Bretagne, j\'accompagne les entreprises malouines pour gagner en visibilité sur Google. Audit gratuit, 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Agence de Référencement à Saint-Malo | Expert SEO - VBWEB',
  description,
  alternates: { canonical: '/agence-referencement-saint-malo' },
}

const faqs = [
  {
    question: 'Pourquoi investir dans le référencement pour une entreprise à Saint-Malo ?',
    answer: 'Saint-Malo attire chaque année des millions de visiteurs. Le référencement vous permet de capter cette audience au moment où elle cherche vos services sur Google. Que vous soyez dans la restauration, l\'hôtellerie ou les services, être visible en ligne fait toute la différence.',
  },
  {
    question: 'Quelle est la différence entre un expert et une agence de référencement à Saint-Malo ?',
    answer: 'Un expert indépendant, c\'est un interlocuteur unique qui gère votre dossier de bout en bout. Pas de turnover, pas de junior qui prend le relais après la signature. Je suis la personne qui analyse, qui optimise et qui vous présente les résultats.',
  },
  {
    question: 'Combien coûte le référencement d\'un site à Saint-Malo ?',
    answer: 'Un accompagnement mensuel démarre à 500 euros par mois. Le montant dépend de votre secteur, du nombre de pages à optimiser et de la concurrence sur vos mots-clés. L\'audit gratuit permet de définir un budget cohérent avec vos objectifs.',
  },
  {
    question: 'Le référencement peut-il aider les activités touristiques de Saint-Malo ?',
    answer: 'C\'est même l\'un des secteurs où le référencement est le plus rentable. Les touristes préparent leur séjour sur Google bien avant d\'arriver. Si votre restaurant, hôtel ou activité est bien positionné, vous captez des réservations toute l\'année.',
  },
  {
    question: 'En combien de temps mon site sera-t-il mieux référencé à Saint-Malo ?',
    answer: 'Les premières progressions sont visibles entre 3 et 6 mois. Pour les recherches touristiques saisonnières, il est important de préparer le référencement en amont de la haute saison. Le travail s\'inscrit dans la durée et les résultats se renforcent avec le temps.',
  },
  {
    question: 'Comment travaillez-vous avec des entreprises à Saint-Malo ?',
    answer: 'Le référencement se fait essentiellement à distance : analyses, optimisations, suivi en ligne. Je suis basé à Rennes, à 45 minutes de Saint-Malo, et je me déplace volontiers pour les rendez-vous en personne. Je connais bien le marché malouin et ses spécificités.',
  },
  {
    question: 'Travaillez-vous aussi le référencement sur Google Maps ?',
    answer: 'Oui, le référencement local est central pour une ville comme Saint-Malo. J\'optimise votre fiche Google Business Profile, vos citations locales et vos pages pour les recherches géolocalisées. L\'objectif : apparaître quand quelqu\'un cherche vos services à proximité.',
  },
  {
    question: 'Puis-je avoir un référencement efficace même avec un petit site ?',
    answer: 'Absolument. Un site de quelques pages bien optimisées peut se positionner très bien sur Google, surtout sur des requêtes locales. Ce n\'est pas la quantité de pages qui compte, c\'est leur qualité et leur pertinence par rapport aux recherches de vos clients.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence de Référencement à Saint-Malo', description, '/agence-referencement-saint-malo', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence de Référencement à Saint-Malo', description, '/agence-referencement-saint-malo', [
      { '@type': 'City', name: 'Saint-Malo' },
      { '@type': 'AdministrativeArea', name: 'Ille-et-Vilaine' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence Référencement Saint-Malo', path: '/agence-referencement-saint-malo' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceReferencementSaintMaloPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceReferencementSaintMaloContent faqs={faqs} />
    </>
  )
}

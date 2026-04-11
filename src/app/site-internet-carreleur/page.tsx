import type { Metadata } from 'next'

import { SiteInternetCarreleurContent } from './site-internet-carreleur-content'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Création de site internet carreleur partout en France. Un site qui met en avant vos poses de salle de bain, cuisine, terrasse et rénovation et qui remonte sur Google.'

export const metadata: Metadata = {
  title: 'Site Internet Carreleur | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-carreleur' },
}

const faqs = [
  {
    question: 'Pourquoi un carreleur a-t-il besoin d\'un site internet ?',
    answer: 'Parce que la pose de carrelage se choisit toujours sur photos. Un client qui refait sa salle de bain ou sa terrasse va taper "carreleur + sa ville" et regarder d\'abord les réalisations. Sans site, vous êtes invisible à ce moment clé, et vous laissez le chantier à celui qui a pris le temps de mettre ses poses en ligne.',
  },
  {
    question: 'Quelles photos faut-il absolument montrer ?',
    answer: 'Les poses terminées, bien sûr, mais aussi des photos en cours de chantier qui prouvent la qualité du travail : préparation du sol, calepinage, alignement des joints, coupes propres. Ces détails rassurent le client qui a peur de la pose bâclée et justifient une fourchette de prix plus haute qu\'un concurrent low cost.',
  },
  {
    question: 'Le site doit-il parler surtout de salle de bain ou aussi d\'autres poses ?',
    answer: 'Ça dépend de votre activité réelle. Pour la plupart des carreleurs, la salle de bain représente 60 à 70% des demandes, donc elle a sa page dédiée. Mais il faut aussi des pages pour la pose sol cuisine, la terrasse extérieure, la faïence et la mosaïque. Chaque page capte une recherche différente sur Google.',
  },
  {
    question: 'Combien coûte un site internet pour un carreleur ?',
    answer: 'Un site professionnel pour carreleur démarre autour de 1 200€. Le tarif comprend le design, la galerie de poses classée par pièce, les pages prestations, le formulaire de devis, l\'optimisation SEO et la configuration Google Business. Vous recevez un devis clair sous 24h.',
  },
  {
    question: 'Est-ce que le site peut me ramener des chantiers de rénovation complète ?',
    answer: 'Oui. Les recherches "rénovation salle de bain" sont plus larges que "carreleur", mais très qualifiées. Sur une page dédiée à la rénovation, on met en avant votre capacité à gérer le chantier de A à Z ou à travailler avec d\'autres artisans. C\'est un positionnement qui permet de sortir des petits chantiers pour viser des budgets plus gros.',
  },
  {
    question: 'Combien de temps avant de voir des résultats ?',
    answer: 'Le site est mis en ligne en 2 à 3 semaines. Les premières positions locales arrivent entre 1 et 3 mois. Pour être bien placé sur des requêtes concurrentielles comme "rénovation salle de bain + grande ville", il faut compter 4 à 6 mois de travail SEO suivi.',
  },
  {
    question: 'Vous créez des sites pour des carreleurs partout en France ?',
    answer: 'Oui. Je suis basé à Rennes mais j\'accompagne des carreleurs partout en France. Tout se fait à distance : visio pour le brief, envoi des photos de vos poses par lien, validation des maquettes en ligne. Aucune différence sur le résultat final entre un carreleur à Rennes et un carreleur à Nice.',
  },
  {
    question: 'Puis-je ajouter de nouvelles réalisations moi-même sur le site ?',
    answer: 'Oui. Chaque site est livré avec un accès simple pour ajouter vos derniers chantiers dans la galerie, modifier vos textes ou mettre à jour vos tarifs. Si vous préférez ne pas vous en occuper, je propose une formule maintenance où je m\'en charge chaque mois pour vous.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Carreleur', description, '/site-internet-carreleur', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Création de site internet pour carreleur', description, '/site-internet-carreleur'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Artisan', path: '/site-internet-artisan' },
      { name: 'Carreleur', path: '/site-internet-carreleur' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetCarreleurPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteInternetCarreleurContent faqs={faqs} />
    </>
  )
}

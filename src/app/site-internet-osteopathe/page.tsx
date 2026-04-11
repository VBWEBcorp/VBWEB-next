import type { Metadata } from 'next'

import { SiteInternetOsteopatheContent } from './site-internet-osteopathe-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Création de site internet ostéopathe, partout en France. Un site clair pour présenter vos spécialités (bébé, femme enceinte, sportif), faciliter la prise de rendez-vous et apparaître sur "ostéo près de chez moi". Victor Béasse, +150 sites créés.'

export const metadata: Metadata = {
  title: 'Site Internet Ostéopathe | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-osteopathe' },
}

const faqs = [
  {
    question: 'Pourquoi un site internet ostéopathe change vraiment la donne ?',
    answer: 'Les patients qui cherchent un ostéopathe passent quasi systématiquement par Google : "ostéo bébé", "ostéo femme enceinte", "ostéopathe près de chez moi". Sans site, vous êtes invisible sur ces recherches. Un site bien construit, c\'est des nouveaux patients qui arrivent chaque mois, et une charge mentale en moins.',
  },
  {
    question: 'Puis-je créer une page dédiée à l\'ostéopathie du nourrisson ?',
    answer: 'Oui, c\'est même fortement recommandé. C\'est l\'une des recherches les plus fréquentes en ostéopathie. Je crée une page spécifique qui explique votre approche pour les bébés (coliques, régurgitations, plagiocéphalie), avec un ton rassurant pour les jeunes parents. Même chose pour les femmes enceintes et les sportifs.',
  },
  {
    question: 'Quelles règles dois-je respecter en tant qu\'ostéopathe sur mon site ?',
    answer: 'L\'ostéopathie est une profession réglementée par décret. Le code de déontologie de votre registre impose une communication loyale, non comparative et non promotionnelle. Je connais ces règles : pas de promesse de guérison, pas de mention d\'efficacité absolue, présentation factuelle de votre pratique. Tout est validé avec vous.',
  },
  {
    question: 'Comment intégrer la prise de rendez-vous en ligne sur le site ?',
    answer: 'J\'intègre Doctolib, Crénolibre ou un autre outil de prise de rendez-vous directement dans votre site. Les patients réservent en quelques clics sans quitter votre page, et vous conservez l\'outil que vous utilisez déjà au quotidien. C\'est souvent l\'ajout qui change le plus la vie.',
  },
  {
    question: 'Combien coûte la création d\'un site internet ostéopathe ?',
    answer: 'Un site vitrine pour ostéopathe démarre autour de 1 500 euros, davantage pour un cabinet à plusieurs praticiens ou si vous souhaitez un blog d\'articles pédagogiques. Je propose toujours un devis clair et détaillé après un premier échange pour cerner vos besoins.',
  },
  {
    question: 'Est-ce que je peux afficher des avis Google sur mon site ?',
    answer: 'Les avis Google sont publics et vous pouvez généralement en faire référence, à condition de rester dans le cadre du code de déontologie. Les témoignages écrits directement sur votre site sont plus délicats. Je vous conseille ce qui est prudent pour votre registre et pour votre image.',
  },
  {
    question: 'Comment apparaître sur la recherche "ostéopathe près de chez moi" ?',
    answer: 'Le référencement local repose sur trois piliers : une fiche Google Business Profile optimisée et régulièrement alimentée, un site mentionnant clairement votre ville et vos spécialités, et des signaux de confiance (cohérence des infos entre annuaires, avis). J\'installe et pilote l\'ensemble pour vous.',
  },
  {
    question: 'Travaillez-vous avec des ostéopathes partout en France ?',
    answer: 'Oui, j\'accompagne des ostéopathes partout en France. Je suis basé à Rennes mais le travail se fait principalement à distance, avec des points réguliers en visio. Paris, Lyon, Marseille ou petite commune rurale : la distance n\'a aucune incidence sur la qualité du suivi.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Ostéopathe', description, '/site-internet-osteopathe', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Ostéopathe', description, '/site-internet-osteopathe'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Thérapeute', path: '/site-internet-therapeute' },
      { name: 'Site Internet Ostéopathe', path: '/site-internet-osteopathe' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetOsteopathePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteInternetOsteopatheContent faqs={faqs} />
    </>
  )
}

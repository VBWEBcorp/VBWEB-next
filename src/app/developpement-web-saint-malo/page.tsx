import type { Metadata } from 'next'

import { DeveloppementWebSaintMaloContent } from './developpement-web-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Développement web à Saint-Malo : sites Next.js et applications web sur mesure. Victor Béasse accompagne les entreprises malouines avec performance et SEO intégré.'

export const metadata: Metadata = {
  title: 'Développement Web à Saint-Malo | Sites & Applications - VBWEB',
  description,
  alternates: { canonical: '/developpement-web-saint-malo' },
}

const faqs = [
  {
    question: 'Pourquoi faire développer mon site à Saint-Malo par un freelance plutôt qu\'une agence ?',
    answer: 'Parce qu\'avec un freelance vous avez un interlocuteur unique qui connaît votre projet par cœur. Pas de filtre, pas de briefing perdu entre trois personnes. Et les tarifs sont plus raisonnables qu\'en agence, sans perte de qualité.',
  },
  {
    question: 'Travaillez-vous avec les hôtels et restaurants de Saint-Malo ?',
    answer: 'Oui, souvent. Saint-Malo vit du tourisme, et un site bien fait change tout pour un restaurant, un hôtel ou une location de vacances. J\'intègre des modules de réservation, des galeries photos, du contenu optimisé pour les recherches touristiques.',
  },
  {
    question: 'Combien coûte la création d\'un site web à Saint-Malo ?',
    answer: 'Un site vitrine démarre autour de 2 500 euros, un site plus élaboré avec plusieurs pages de contenu se situe entre 4 000 et 8 000 euros. Pour un projet plus complexe (application, e-commerce), je chiffre sur cahier des charges. Premier échange gratuit.',
  },
  {
    question: 'Qu\'est-ce que Next.js apporte à mon site par rapport à un WordPress ?',
    answer: 'Next.js est bien plus rapide que WordPress. C\'est le framework utilisé par Nike, TikTok ou Hulu. Pour un site vitrine ou e-commerce, cela veut dire des pages qui se chargent instantanément et un meilleur référencement Google. Un vrai avantage concurrentiel.',
  },
  {
    question: 'Est-ce que vous venez à Saint-Malo pour un rendez-vous en personne ?',
    answer: 'Oui, depuis Rennes, Saint-Malo est à une heure. Je me déplace volontiers pour la première rencontre ou pour des points de validation importants. Le reste du travail se fait à distance via visio et un espace de suivi dédié.',
  },
  {
    question: 'Pouvez-vous intégrer un système de réservation ou de paiement en ligne ?',
    answer: 'Oui, j\'intègre régulièrement Stripe pour les paiements, des moteurs de réservation comme Bookeo ou des modules sur mesure. Les intégrations sont adaptées à votre activité : hôtellerie, restauration, location, services.',
  },
  {
    question: 'Mon site sera-t-il bien référencé sur Saint-Malo et la côte d\'Émeraude ?',
    answer: 'Oui, c\'est inclus dès la conception. Je suis aussi consultant SEO, donc chaque site est pensé pour ranker sur des recherches locales : balises, structure, fiche Google Business Profile, contenus géolocalisés pour Saint-Malo, Dinan, Dinard, Cancale.',
  },
  {
    question: 'Que se passe-t-il après la mise en ligne du site ?',
    answer: 'Vous êtes propriétaire du code et des accès. Je propose un contrat de maintenance optionnel pour les mises à jour, les sauvegardes, les évolutions et le suivi des performances. Vous restez libre à tout moment.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Développement Web à Saint-Malo', description, '/developpement-web-saint-malo', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Développement Web à Saint-Malo', description, '/developpement-web-saint-malo', [
      { '@type': 'City', name: 'Saint-Malo' },
      { '@type': 'AdministrativeArea', name: 'Ille-et-Vilaine' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Développement Web Saint-Malo', path: '/developpement-web-saint-malo' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function DeveloppementWebSaintMaloPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DeveloppementWebSaintMaloContent faqs={faqs} />
    </>
  )
}

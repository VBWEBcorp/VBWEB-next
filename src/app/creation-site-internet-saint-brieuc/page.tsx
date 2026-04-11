import type { Metadata } from 'next'

import { CreationSiteInternetSaintBrieucContent } from './creation-site-internet-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Création site internet Saint-Brieuc : sites web sur mesure, rapides et optimisés SEO dès le premier jour. Un site qui fait venir vos clients via Google. Devis gratuit.'

export const metadata: Metadata = {
  title: 'Création Site Internet à Saint-Brieuc | Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/creation-site-internet-saint-brieuc' },
}

const faqs = [
  {
    question: 'Combien ça coûte de créer un site internet à Saint-Brieuc ?',
    answer: 'Un site vitrine professionnel démarre autour de 1 800 euros. Pour des projets plus larges (e-commerce, espace client, outils métier) on monte plutôt vers 4 500 à 9 000 euros. Le devis est détaillé et gratuit.',
  },
  {
    question: 'Quel est le délai moyen de création d\'un site à Saint-Brieuc ?',
    answer: 'Comptez 3 à 5 semaines pour un site vitrine complet. Un projet plus ambitieux avec des fonctionnalités métier demande 6 à 10 semaines. Je vous remets un planning clair dès la première réunion.',
  },
  {
    question: 'Le site sera-t-il optimisé pour les recherches dans les Côtes-d\'Armor ?',
    answer: 'Oui, c\'est un point central. Je prépare chaque site pour sortir sur les requêtes locales du département : "électricien Saint-Brieuc", "coiffeur Plérin", "garagiste Trégueux". Ces mots-clés représentent une grosse part des intentions d\'achat.',
  },
  {
    question: 'Travaillez-vous avec des entreprises hors Saint-Brieuc ?',
    answer: 'Oui, régulièrement. J\'accompagne des activités à Saint-Brieuc, Plérin, Langueux, Trégueux, Lamballe et Ploufragan. Les rendez-vous peuvent se faire en visio ou en présentiel selon ce qui vous arrange.',
  },
  {
    question: 'Je peux modifier le site moi-même après la livraison ?',
    answer: 'Oui. Je livre chaque site avec un back-office simple où vous pouvez ajouter des pages, des articles, des photos ou modifier vos textes sans toucher au code. Une session de formation est incluse dans la prestation.',
  },
  {
    question: 'Que se passe-t-il si j\'ai déjà un site qui ne marche pas ?',
    answer: 'Je fais un audit gratuit de votre site actuel. Si une refonte partielle suffit, tant mieux, on gagne du temps. Si la base est trop ancienne ou mal construite, on repart proprement. Je vous dis franchement ce qui est le plus rentable.',
  },
  {
    question: 'Vous proposez aussi l\'hébergement du site ?',
    answer: 'Oui, j\'héberge les sites sur une infrastructure rapide et surveillée 24/7. Vous n\'avez rien à gérer techniquement. Le forfait inclut les sauvegardes quotidiennes et les mises à jour de sécurité.',
  },
  {
    question: 'Le site sera-t-il compatible avec mon activité artisanale ou commerciale ?',
    answer: 'Absolument. J\'ai déjà conçu des sites pour artisans, commerçants, restaurants, PME industrielles et professions libérales. Chaque site est adapté à ce que votre activité demande concrètement à Saint-Brieuc.',
  },
]

const areaServed = [
  { '@type': 'City', name: 'Saint-Brieuc' },
  { '@type': 'AdministrativeArea', name: 'Côtes-d\'Armor' },
  { '@type': 'AdministrativeArea', name: 'Bretagne' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd(
      'Création Site Internet à Saint-Brieuc',
      description,
      '/creation-site-internet-saint-brieuc',
      ['h1', '.hero-description', '.faq-answer']
    ),
    serviceJsonLd(
      'Création de site internet à Saint-Brieuc',
      description,
      '/creation-site-internet-saint-brieuc',
      areaServed
    ),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Création Site Internet Saint-Brieuc', path: '/creation-site-internet-saint-brieuc' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function CreationSiteInternetSaintBrieucPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CreationSiteInternetSaintBrieucContent faqs={faqs} />
    </>
  )
}

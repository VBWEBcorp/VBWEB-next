import type { Metadata } from 'next'

import { CreationSiteInternetBrestContent } from './creation-site-internet-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Création site internet Brest : sites web rapides, optimisés SEO dès la première ligne de code. Je conçois des sites qui remontent sur Google et convertissent. Devis gratuit.'

export const metadata: Metadata = {
  title: 'Création Site Internet à Brest | Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/creation-site-internet-brest' },
}

const faqs = [
  {
    question: 'Quel budget prévoir pour la création d\'un site internet à Brest ?',
    answer: 'Un site vitrine sur mesure démarre autour de 1 800 euros. Pour un site e-commerce ou une application métier, on passe plutôt sur une fourchette de 4 000 à 10 000 euros. Je vous remets un devis chiffré et honnête sous 24h.',
  },
  {
    question: 'Combien de temps pour livrer un site web à Brest ?',
    answer: 'Trois à cinq semaines pour un site vitrine complet. Six à dix semaines si le projet inclut un catalogue, un paiement en ligne ou une partie sur mesure. Tout dépend de la rapidité avec laquelle vous validez les étapes.',
  },
  {
    question: 'Un site fait à Brest peut-il rivaliser avec les grandes agences ?',
    answer: 'Clairement oui. Travailler avec un freelance vous donne accès au même niveau technique qu\'une agence, mais sans les frais de structure. Mes sites tournent aussi bien que ceux de boîtes qui facturent trois fois plus.',
  },
  {
    question: 'Vous travaillez aussi sur le pays brestois ?',
    answer: 'Bien sûr. Je conçois des sites pour des entreprises à Brest, Guipavas, Plouzané, Le Relecq-Kerhuon, Plougastel-Daoulas et Landerneau. Les rendez-vous en visio permettent de travailler efficacement même à distance.',
  },
  {
    question: 'Pourquoi insister autant sur le SEO dès la création ?',
    answer: 'Parce que refaire un site à posteriori pour qu\'il sorte sur Google coûte deux fois plus cher. Intégrer le SEO dès la conception, c\'est gagner du temps et du budget. Votre site brestois commence à attirer du trafic dès ses premières semaines en ligne.',
  },
  {
    question: 'Quelle technologie utilisez-vous pour créer les sites ?',
    answer: 'Next.js et React pour la majorité des projets. Ce sont les technologies utilisées par les plus grands sites au monde. Elles offrent une vitesse inégalée et un SEO technique au top, ce qui fait toute la différence sur Brest et ses requêtes concurrentielles.',
  },
  {
    question: 'Je pourrai modifier mon site une fois livré ?',
    answer: 'Oui, je livre toujours avec un espace d\'édition simple pour que vous puissiez ajouter des pages, des photos ou des articles sans toucher au code. Je forme l\'équipe à l\'utilisation en fin de projet.',
  },
  {
    question: 'Proposez-vous l\'hébergement du site ?',
    answer: 'Oui, j\'héberge les sites sur une infrastructure rapide et sécurisée. Vous n\'avez rien à gérer techniquement. Le forfait inclut les sauvegardes, les mises à jour de sécurité et la surveillance de la disponibilité.',
  },
]

const areaServed = [
  { '@type': 'City', name: 'Brest' },
  { '@type': 'AdministrativeArea', name: 'Finistère' },
  { '@type': 'AdministrativeArea', name: 'Bretagne' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd(
      'Création Site Internet à Brest',
      description,
      '/creation-site-internet-brest',
      ['h1', '.hero-description', '.faq-answer']
    ),
    serviceJsonLd(
      'Création de site internet à Brest',
      description,
      '/creation-site-internet-brest',
      areaServed
    ),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Création Site Internet Brest', path: '/creation-site-internet-brest' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function CreationSiteInternetBrestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CreationSiteInternetBrestContent faqs={faqs} />
    </>
  )
}

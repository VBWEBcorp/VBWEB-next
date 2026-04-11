import type { Metadata } from 'next'

import { DeveloppementWebNantesContent } from './developpement-web-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Développement web à Nantes : sites Next.js, React et applications sur mesure. Victor Béasse code pour les entreprises nantaises avec performance et SEO intégré.'

export const metadata: Metadata = {
  title: 'Développement Web à Nantes | Sites & Applications - VBWEB',
  description,
  alternates: { canonical: '/developpement-web-nantes' },
}

const faqs = [
  {
    question: 'Pourquoi choisir un développeur web basé à Rennes pour un projet à Nantes ?',
    answer: 'Parce que Rennes et Nantes sont à 1h15 en voiture ou en TGV. C\'est comme travailler avec un prestataire nantais, mais avec plus de recul sur le marché. Je me déplace régulièrement à Nantes pour les rendez-vous importants, le reste se fait en visio.',
  },
  {
    question: 'Quel est le tarif d\'un site web à Nantes ?',
    answer: 'Un site vitrine démarre à 2 500 euros, un site plus élaboré entre 4 000 et 8 000 euros, et les applications web sur mesure sont chiffrées précisément sur cahier des charges. Le premier échange est gratuit et le devis toujours clair.',
  },
  {
    question: 'Pourquoi privilégier Next.js pour un site nantais ?',
    answer: 'Nantes est un écosystème tech mature et exigeant, avec une forte concurrence. Next.js permet de livrer des sites qui chargent instantanément, avec un SEO au top. Sur un marché aussi dense, cet avantage technique se traduit en résultats business réels.',
  },
  {
    question: 'Travaillez-vous avec les startups nantaises ?',
    answer: 'Oui, la scène startup nantaise est riche et j\'accompagne volontiers les jeunes pousses sur leur MVP, leur landing page, leur application web. Les technos modernes que j\'utilise (Next.js, React, TypeScript) sont parfaitement adaptées aux besoins rapides et évolutifs des startups.',
  },
  {
    question: 'Vous développez quel type de sites web à Nantes ?',
    answer: 'Tout : sites vitrines pour PME, boutiques e-commerce pour créateurs, applications métier pour entreprises, outils internes, espaces clients, plateformes de réservation. Tant que c\'est du web moderne, ça m\'intéresse et je sais faire.',
  },
  {
    question: 'Qui gère le SEO du site une fois développé ?',
    answer: 'C\'est moi, et c\'est intégré dès la conception. Je suis à la fois développeur et consultant SEO, donc le site est optimisé dès la première ligne de code : structure, balises, vitesse, schema.org, contenu géolocalisé pour Nantes.',
  },
  {
    question: 'En combien de temps le site est-il livré à Nantes ?',
    answer: 'Un site vitrine prend 4 à 6 semaines. Un site plus complet 8 à 10 semaines. Une application sur mesure 2 à 4 mois. Le planning est clair dès le devis, et chaque étape est validée ensemble.',
  },
  {
    question: 'Le site reste ma propriété après la livraison ?',
    answer: 'Oui, totalement. Code, nom de domaine, accès hébergement : tout est à votre nom. Vous pouvez travailler avec qui vous voulez ensuite. Je propose un contrat de maintenance optionnel, mais rien ne vous y oblige.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Développement Web à Nantes', description, '/developpement-web-nantes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Développement Web à Nantes', description, '/developpement-web-nantes', [
      { '@type': 'City', name: 'Nantes' },
      { '@type': 'AdministrativeArea', name: 'Loire-Atlantique' },
      { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Développement Web Nantes', path: '/developpement-web-nantes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function DeveloppementWebNantesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DeveloppementWebNantesContent faqs={faqs} />
    </>
  )
}

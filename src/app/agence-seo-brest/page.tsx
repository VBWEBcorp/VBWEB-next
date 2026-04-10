import type { Metadata } from 'next'

import { AgenceSeoBrestContent } from './agence-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Agence SEO à Brest ? Optez pour un expert SEO indépendant : relation directe, stratégie sur mesure et résultats concrets pour les entreprises du Finistère. Audit gratuit.'

export const metadata: Metadata = {
  title: 'Agence SEO à Brest | Expert Référencement Naturel - VBWEB',
  description,
  alternates: { canonical: '/agence-seo-brest' },
}

const faqs = [
  {
    question: 'Pourquoi préférer un expert SEO indépendant à une agence SEO à Brest ?',
    answer: 'Un expert indépendant vous offre une relation directe sans intermédiaire. Votre stratégie SEO est pensée et exécutée par la même personne, ce qui garantit une vraie cohérence. Les tarifs sont aussi plus accessibles qu\'en agence, sans sacrifier la qualité du travail.',
  },
  {
    question: 'Quel budget prévoir pour du SEO à Brest ?',
    answer: 'Un accompagnement SEO mensuel commence à partir de 500 euros par mois. Le montant varie selon la concurrence sur vos mots-clés et l\'état actuel de votre site. L\'audit gratuit que je propose permet de poser un diagnostic clair et de chiffrer précisément votre projet.',
  },
  {
    question: 'Quels secteurs d\'activité accompagnez-vous à Brest ?',
    answer: 'J\'interviens auprès de PME, startups, artisans et professions libérales à Brest et dans le Finistère. Le tissu économique brestois est varié : naval, tech, santé, commerce, tourisme. Chaque secteur a ses mots-clés et sa dynamique propre.',
  },
  {
    question: 'Comment suivez-vous l\'avancement du projet SEO ?',
    answer: 'Vous disposez d\'un espace de suivi en ligne avec vos positions Google, votre trafic et les actions réalisées chaque mois. Un point mensuel en visio permet de faire le bilan et d\'ajuster la stratégie si besoin.',
  },
  {
    question: 'Est-ce que le SEO fonctionne pour une entreprise locale à Brest ?',
    answer: 'Le SEO local est particulièrement efficace à Brest. Les recherches comme "restaurant Brest", "plombier Brest" ou "avocat Finistère" sont très fréquentes. Positionner votre site sur ces requêtes génère un flux régulier de prospects qualifiés.',
  },
  {
    question: 'Combien de temps faut-il pour voir des résultats SEO ?',
    answer: 'Comptez entre 3 et 6 mois pour les premiers résultats visibles. Le SEO est un investissement qui s\'accélère avec le temps : plus on travaille, plus le site gagne en autorité et plus les nouvelles pages se positionnent rapidement.',
  },
  {
    question: 'Vous déplacez-vous à Brest pour les rendez-vous ?',
    answer: 'Je suis basé à Rennes, mais je me déplace à Brest pour les points clés du projet. La majorité du travail se fait à distance, avec des visios régulières. La proximité bretonne facilite les rencontres en personne quand c\'est utile.',
  },
  {
    question: 'Peut-on combiner SEO et refonte de site web ?',
    answer: 'C\'est même recommandé. Une refonte sans SEO, c\'est prendre le risque de perdre vos positions actuelles. Je peux vous accompagner sur les deux volets pour que votre nouveau site soit performant dès sa mise en ligne.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence SEO à Brest', description, '/agence-seo-brest', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence SEO à Brest', description, '/agence-seo-brest', [
      { '@type': 'City', name: 'Brest' },
      { '@type': 'AdministrativeArea', name: 'Finistère' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence SEO Brest', path: '/agence-seo-brest' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceSeoBrestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceSeoBrestContent faqs={faqs} />
    </>
  )
}

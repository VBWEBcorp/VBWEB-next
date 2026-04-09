import type { Metadata } from 'next'

import { FreelanceSeoContent } from './freelance-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Freelance SEO à Rennes : accompagnement en référencement naturel pour PME, artisans et commerces bretons. Plus de 200 campagnes SEO menées, 150 sites créés, 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Freelance SEO à Rennes | Référencement Naturel en Bretagne - VBWEB',
  description,
  alternates: { canonical: '/freelance-seo-rennes' },
}

const faqs = [
  {
    question: 'Quelle est la différence entre un freelance SEO et une agence SEO à Rennes ?',
    answer: 'Avec un freelance SEO à Rennes, vous échangez directement avec le responsable de votre projet. Pas de chargé de compte intermédiaire. Chez VBWEB, une équipe dédiée assure l\'exécution au quotidien pendant que vous gardez un contact direct avec le fondateur. Les tarifs sont aussi souvent plus accessibles qu\'en agence, sans sacrifier la qualité.',
  },
  {
    question: 'Pourquoi faire appel à un freelance SEO basé à Rennes plutôt qu\'à Paris ?',
    answer: 'Un freelance SEO à Rennes connaît le tissu économique local, les habitudes de recherche des Bretons et vos concurrents directs sur le marché rennais. On peut se rencontrer en personne, visiter votre entreprise et comprendre votre métier sur le terrain. C\'est cette proximité qui a permis d\'accompagner Rennes Pneus de 30 à 3 600 visites par mois en SEO local.',
  },
  {
    question: 'Combien coûte un freelance SEO à Rennes ?',
    answer: 'Un accompagnement SEO mensuel avec un freelance à Rennes démarre à partir de 500 euros par mois. Le tarif dépend de la taille de votre site, de votre secteur et de la concurrence sur vos mots-clés. On propose un audit SEO gratuit pour évaluer vos besoins et vous donner un devis clair.',
  },
  {
    question: 'Quels résultats concrets obtiennent vos clients en référencement naturel ?',
    answer: 'Quelques exemples : EPICU est passé de 100 à 5 000 visites par mois en 3 ans, Rennes Pneus de 30 à 3 600 visites avec 500 appels mensuels, et Jumelles.com a gagné +33% de trafic organique et 1 280 mots-clés supplémentaires. Chaque projet est différent, mais on travaille toujours avec des objectifs mesurables.',
  },
  {
    question: 'Qu\'est-ce qu\'un freelance SEO fait concrètement au quotidien ?',
    answer: 'Un freelance SEO analyse votre positionnement sur Google, identifie les mots-clés sur lesquels vous devriez apparaître, optimise votre site (technique, contenu, maillage interne) et suit vos résultats mois après mois. Concrètement, c\'est du travail sur les balises de vos pages, la rédaction de contenus ciblés, l\'amélioration de la vitesse du site et la construction de liens vers votre domaine.',
  },
  {
    question: 'Comment se passe l\'accompagnement SEO avec VBWEB à Rennes ?',
    answer: 'Chaque client a accès à une application dédiée avec le suivi de son projet, des synthèses régulières et des ressources. On fait un point mensuel (visio ou en personne à Rennes), avec un rapport de positionnement et les prochaines actions prévues. Vous pouvez aussi échanger directement par message à tout moment.',
  },
  {
    question: 'Un freelance SEO à Rennes peut-il travailler avec des entreprises hors Bretagne ?',
    answer: 'Oui. VBWEB est basé à Rennes mais accompagne des clients dans toute la Bretagne (Saint-Malo, Brest, Vannes) et au-delà, y compris en région parisienne. La majorité du travail SEO se fait à distance, avec des rendez-vous en personne quand c\'est utile.',
  },
  {
    question: 'En combien de temps un freelance SEO obtient des résultats ?',
    answer: 'Les premiers résultats en référencement naturel apparaissent en général entre 3 et 6 mois. Le SEO est un investissement qui s\'accélère avec le temps. Pour Rennes Pneus, les premiers appels sont arrivés au bout de 4 mois. Pour EPICU, la croissance a été progressive sur 3 ans pour atteindre 5 000 visites mensuelles.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Freelance SEO à Rennes', description, '/freelance-seo-rennes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Freelance SEO à Rennes', description, '/freelance-seo-rennes'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Freelance SEO Rennes', path: '/freelance-seo-rennes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function FreelanceSeoRennesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FreelanceSeoContent faqs={faqs} />
    </>
  )
}

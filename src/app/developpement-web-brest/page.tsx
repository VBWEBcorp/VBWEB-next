import type { Metadata } from 'next'

import { DeveloppementWebBrestContent } from './developpement-web-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Développement web à Brest : création de sites Next.js et applications sur mesure. Victor Béasse code des sites rapides pour les entreprises du Finistère.'

export const metadata: Metadata = {
  title: 'Développement Web à Brest | Sites & Applications - VBWEB',
  description,
  alternates: { canonical: '/developpement-web-brest' },
}

const faqs = [
  {
    question: 'Faites-vous du développement web à distance pour les entreprises brestoises ?',
    answer: 'Oui, la majorité du travail se fait à distance grâce à des outils collaboratifs comme Figma, Notion et Slack. Cela n\'empêche pas les visios régulières et même des rendez-vous sur place à Brest quand le projet le justifie.',
  },
  {
    question: 'Pourquoi passer du WordPress à un site Next.js à Brest ?',
    answer: 'Parce qu\'un site Next.js se charge trois à cinq fois plus vite qu\'un WordPress classique. Pour une entreprise brestoise qui fait face à une concurrence nationale, cette vitesse est un avantage réel, pour les visiteurs comme pour Google.',
  },
  {
    question: 'Combien coûte un développement web à Brest ?',
    answer: 'Un site vitrine démarre autour de 2 500 euros. Un site de contenu plus volumineux se situe entre 4 000 et 8 000 euros. Les applications sur mesure dépendent du scope. Je vous remets un devis clair après un premier échange gratuit.',
  },
  {
    question: 'Travaillez-vous avec les startups brestoises de la tech ?',
    answer: 'Oui, Brest a un écosystème startup dynamique autour du numérique et de la mer. J\'accompagne volontiers les jeunes pousses sur leur MVP, leur landing page ou leur application web. Les technos modernes que j\'utilise sont parfaitement adaptées à ce type de projet.',
  },
  {
    question: 'Est-ce que le site sera bien référencé sur Google ?',
    answer: 'Oui, le SEO est intégré dès la conception. Je suis aussi consultant SEO, donc je construis le site avec les bons réflexes : balises, vitesse, structure des URL, schema.org, maillage interne. Pas besoin de tout refaire après coup.',
  },
  {
    question: 'Quels types de projets web avez-vous déjà livrés ?',
    answer: 'Plus de 150 sites depuis 2020 : restaurants, artisans, cabinets libéraux, e-commerces, plateformes de réservation, espaces clients, outils métier. Chaque projet est visible dans la section études de cas avec les résultats concrets.',
  },
  {
    question: 'Quelle est la durée d\'un projet de site à Brest ?',
    answer: 'Un site vitrine bien cadré prend 4 à 6 semaines. Un site de contenu avec une vingtaine de pages se termine en 8 à 10 semaines. Une application web sur mesure s\'étale sur 2 à 4 mois selon la complexité du cahier des charges.',
  },
  {
    question: 'Assurez-vous la maintenance du site après sa livraison ?',
    answer: 'Oui, via un contrat optionnel. Je prends en charge les mises à jour, les sauvegardes, la surveillance, les correctifs éventuels et les petites évolutions. Vous restez propriétaire du code et vous êtes libre de partir quand vous voulez.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Développement Web à Brest', description, '/developpement-web-brest', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Développement Web à Brest', description, '/developpement-web-brest', [
      { '@type': 'City', name: 'Brest' },
      { '@type': 'AdministrativeArea', name: 'Finistère' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Développement Web Brest', path: '/developpement-web-brest' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function DeveloppementWebBrestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DeveloppementWebBrestContent faqs={faqs} />
    </>
  )
}

import type { Metadata } from 'next'

import { DeveloppementWebSaintBrieucContent } from './developpement-web-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Développement web à Saint-Brieuc : sites Next.js, React et applications web sur mesure. Victor Béasse code pour les entreprises des Côtes-d\'Armor avec performance et SEO.'

export const metadata: Metadata = {
  title: 'Développement Web à Saint-Brieuc | Sites & Applications - VBWEB',
  description,
  alternates: { canonical: '/developpement-web-saint-brieuc' },
}

const faqs = [
  {
    question: 'Quelle est votre approche pour un site web à Saint-Brieuc ?',
    answer: 'Je démarre toujours par une vraie discussion sur votre activité. Je ne fais pas de devis à l\'aveugle. Une fois que j\'ai compris vos enjeux et votre public, je propose un périmètre clair, un design sur mesure et un développement en Next.js, le tout chiffré précisément.',
  },
  {
    question: 'Combien coûte un site web développé sur mesure à Saint-Brieuc ?',
    answer: 'Un site vitrine démarre à 2 500 euros, un site plus étoffé entre 4 000 et 8 000 euros, et les applications sur mesure sont chiffrées au cahier des charges. Le premier échange est toujours gratuit, et le devis remis est ferme.',
  },
  {
    question: 'Pourquoi choisir Next.js pour mon site briochin ?',
    answer: 'Next.js, c\'est la référence actuelle du développement web moderne. Vos pages se chargent en moins d\'une seconde, le SEO est excellent, et le site tient la route dans la durée. Face à un WordPress vieillissant, c\'est un saut qualitatif majeur.',
  },
  {
    question: 'Travaillez-vous avec les PME industrielles de la zone de Saint-Brieuc ?',
    answer: 'Oui. Saint-Brieuc a un tissu industriel et artisanal varié, et je développe régulièrement des sites et des outils métier pour des PME techniques. Le web moderne n\'est pas réservé aux startups : il apporte beaucoup aux entreprises traditionnelles.',
  },
  {
    question: 'Est-ce que je peux gérer moi-même le contenu de mon site après la livraison ?',
    answer: 'Oui, je peux intégrer un CMS headless (Sanity, Contentful, etc.) qui vous permet de modifier les textes, ajouter des pages, gérer les images sans toucher au code. L\'interface est simple et je vous forme à sa prise en main.',
  },
  {
    question: 'Le site sera-t-il visible sur Google Saint-Brieuc rapidement ?',
    answer: 'Le SEO technique est intégré dès la conception. Pour le référencement local à Saint-Brieuc, les premiers résultats arrivent en général entre 2 et 4 mois après la mise en ligne, avec un travail de contenu et de liens à côté.',
  },
  {
    question: 'Quelle est la durée moyenne d\'un projet de site à Saint-Brieuc ?',
    answer: 'Un site vitrine prend 4 à 6 semaines entre le cadrage et la mise en ligne. Un site de contenu plus volumineux 8 à 10 semaines. Une application web sur mesure 2 à 4 mois. Le planning est fixé dès le devis, je m\'y tiens.',
  },
  {
    question: 'Assurez-vous aussi la maintenance du site après la livraison ?',
    answer: 'Oui, via un contrat optionnel mensuel. Cela couvre les mises à jour, les sauvegardes, la surveillance, les correctifs, les petites évolutions. Vous restez propriétaire du code, libre de partir à tout moment si vous le souhaitez.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Développement Web à Saint-Brieuc', description, '/developpement-web-saint-brieuc', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Développement Web à Saint-Brieuc', description, '/developpement-web-saint-brieuc', [
      { '@type': 'City', name: 'Saint-Brieuc' },
      { '@type': 'AdministrativeArea', name: "Côtes-d'Armor" },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Développement Web Saint-Brieuc', path: '/developpement-web-saint-brieuc' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function DeveloppementWebSaintBrieucPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DeveloppementWebSaintBrieucContent faqs={faqs} />
    </>
  )
}

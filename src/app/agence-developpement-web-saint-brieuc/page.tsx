import type { Metadata } from 'next'

import { AgenceDeveloppementWebSaintBrieucContent } from './agence-developpement-web-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Agence développement web à Saint-Brieuc ? Un expert dédié qui conçoit et code votre site sans intermédiaires. Relation directe, audit gratuit.'

export const metadata: Metadata = {
  title: 'Agence Développement Web à Saint-Brieuc | Expert Web - VBWEB',
  description,
  alternates: { canonical: '/agence-developpement-web-saint-brieuc' },
}

const faqs = [
  {
    question: 'Pourquoi choisir un expert indépendant plutôt qu\'une agence développement web à Saint-Brieuc ?',
    answer: 'Saint-Brieuc est une ville à taille humaine où les entreprises ont souvent besoin de souplesse. Un expert indépendant offre cette souplesse : un seul interlocuteur, des décisions rapides, un budget ajusté au projet réel. Vous avez la qualité d\'exécution d\'une agence sans la lourdeur de la structure.',
  },
  {
    question: 'La distance Rennes-Saint-Brieuc est-elle un frein ?',
    answer: 'Non, c\'est 1h de route ou 45 minutes en train. Je me déplace à Saint-Brieuc quand les circonstances du projet le demandent, et le reste du travail se fait en visio et messagerie. De nombreux clients costarmoricains collaborent avec moi de cette manière et en sont satisfaits.',
  },
  {
    question: 'Quels projets web pouvez-vous développer pour une entreprise briochine ?',
    answer: 'Sites vitrines pour PME locales, e-commerces pour commerces et artisans, plateformes métier, espaces clients sécurisés, blogs structurés. Les entreprises costarmoricaines ont souvent des besoins pragmatiques : un outil qui marche, qui se positionne sur Google et qui amène du client. C\'est exactement ce que je livre.',
  },
  {
    question: 'Quel est le budget moyen pour un site web à Saint-Brieuc ?',
    answer: 'Un site vitrine démarre à 2 500 euros. Un e-commerce varie entre 5 000 et 15 000 euros selon la complexité. Un site métier sur mesure peut dépasser ces montants. Tout dépend du périmètre et des fonctionnalités nécessaires. Le devis est toujours détaillé, sans zone d\'ombre.',
  },
  {
    question: 'Combien de temps pour livrer un site à Saint-Brieuc ?',
    answer: 'Pour un site vitrine, comptez 4 à 8 semaines après la validation du cahier des charges. Pour un e-commerce ou une application, 2 à 4 mois. Un projet bien cadré au départ se livre toujours plus vite qu\'un projet flou qu\'il faut redéfinir en cours de route.',
  },
  {
    question: 'Le SEO est-il intégré dès la création du site ?',
    answer: 'Oui, systématiquement. Je suis consultant en référencement naturel avant d\'être développeur. Le SEO technique est dans chaque site que je livre : architecture optimisée, performance, balises, données structurées. Vos pages ont les meilleures chances de bien se positionner dès leur mise en ligne.',
  },
  {
    question: 'Intervenez-vous aussi à Plérin, Lamballe et dans les Côtes-d\'Armor ?',
    answer: 'Oui, toute l\'agglomération briochine et au-delà : Plérin, Langueux, Trégueux, Lamballe, Ploufragan. Le département a un tissu d\'entreprises varié et je travaille avec des clients situés sur l\'ensemble du territoire costarmoricain.',
  },
  {
    question: 'Après la livraison du site, quel est votre niveau d\'accompagnement ?',
    answer: 'Vous choisissez. Soit vous prenez un forfait mensuel de maintenance et d\'évolutions, soit vous êtes autonome via l\'interface d\'administration. Dans tous les cas, le site vous appartient entièrement et vous pouvez partir à tout moment. C\'est un engagement de ma part : pas de dépendance forcée.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence Développement Web à Saint-Brieuc', description, '/agence-developpement-web-saint-brieuc', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence Développement Web à Saint-Brieuc', description, '/agence-developpement-web-saint-brieuc', [
      { '@type': 'City', name: 'Saint-Brieuc' },
      { '@type': 'AdministrativeArea', name: 'Côtes-d\'Armor' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence Développement Web Saint-Brieuc', path: '/agence-developpement-web-saint-brieuc' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceDeveloppementWebSaintBrieucPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceDeveloppementWebSaintBrieucContent faqs={faqs} />
    </>
  )
}

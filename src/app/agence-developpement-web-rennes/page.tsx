import type { Metadata } from 'next'

import { AgenceDeveloppementWebRennesContent } from './agence-developpement-web-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Agence développement web à Rennes ? Voici une alternative directe : un expert dédié qui conçoit, code et optimise votre site. Devis clair, audit gratuit.'

export const metadata: Metadata = {
  title: 'Agence Développement Web à Rennes | Expert Web - VBWEB',
  description,
  alternates: { canonical: '/agence-developpement-web-rennes' },
}

const faqs = [
  {
    question: 'Pourquoi chercher une agence développement web à Rennes alors que vous êtes seul ?',
    answer: 'Vous cherchez probablement une équipe capable de livrer un site sérieux. C\'est exactement ce que je propose, mais sans la structure d\'agence : vous avez directement le développeur qui écrit le code. Pas de brief qui se perd entre un commercial, un chef de projet et un intégrateur. La compétence reste la même, le circuit est plus court.',
  },
  {
    question: 'Quels types de projets web pouvez-vous prendre en charge à Rennes ?',
    answer: 'Sites vitrines, sites e-commerce, applications sur mesure, refontes complètes, intégrations d\'API, espaces clients. J\'ai livré plus de 150 sites en Bretagne, du commerce de quartier à la plateforme métier pour PME. Si votre projet dépasse mon champ, je vous le dis franchement et j\'oriente vers quelqu\'un de confiance.',
  },
  {
    question: 'Quel est le délai pour un site web livré depuis Rennes ?',
    answer: 'Comptez 4 à 8 semaines pour un site vitrine optimisé, 2 à 4 mois pour un projet e-commerce ou une application sur mesure. Sans le goulet d\'étranglement d\'une agence à plusieurs niveaux de validation, les choses avancent vite. Vous validez les maquettes directement avec moi.',
  },
  {
    question: 'Quel budget prévoir pour un développement web à Rennes ?',
    answer: 'Un site vitrine professionnel démarre autour de 2 500 euros. Un e-commerce complet se situe entre 5 000 et 15 000 euros selon les fonctionnalités. Une application métier sur mesure peut aller plus loin. Je remets toujours un devis clair avec les postes détaillés, pas de forfait caché.',
  },
  {
    question: 'Travaillez-vous avec WordPress ou des technologies plus modernes ?',
    answer: 'Les deux, selon le besoin. WordPress reste pertinent pour un site vitrine éditable facilement. Pour les projets qui demandent de la performance ou des fonctionnalités spécifiques, je travaille avec Next.js et React. Le choix technique se fait en fonction de votre projet, pas d\'une préférence personnelle.',
  },
  {
    question: 'Que se passe-t-il après la livraison du site ?',
    answer: 'Je propose un suivi mensuel avec maintenance, mises à jour de sécurité et petites évolutions. Vous gardez la main sur votre contenu via l\'interface d\'administration. Si vous préférez tout gérer en interne, aucun problème : le site vous appartient totalement, sans enfermement.',
  },
  {
    question: 'Le développement du site inclut-il le référencement SEO ?',
    answer: 'Oui, c\'est même l\'un de mes points forts. Le SEO technique est intégré dès la conception : structure, vitesse, balises, données structurées. C\'est ce qui différencie un site qui attire du trafic d\'un site invisible sur Google. Mes clients rennais comme Rennes Pneus sont passés de 30 à 3 600 visites mensuelles grâce à cette approche combinée.',
  },
  {
    question: 'Travaillez-vous uniquement sur Rennes ou aussi en dehors ?',
    answer: 'Je suis basé à Rennes et je travaille dans toute la métropole : Cesson-Sévigné, Saint-Grégoire, Bruz, Chantepie, Pacé. J\'interviens aussi en région parisienne et dans toute la France. La majeure partie du travail se fait à distance, avec des rendez-vous physiques à Rennes quand le projet le justifie.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence Développement Web à Rennes', description, '/agence-developpement-web-rennes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence Développement Web à Rennes', description, '/agence-developpement-web-rennes'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence Développement Web Rennes', path: '/agence-developpement-web-rennes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceDeveloppementWebRennesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceDeveloppementWebRennesContent faqs={faqs} />
    </>
  )
}

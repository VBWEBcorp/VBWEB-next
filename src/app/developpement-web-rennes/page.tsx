import type { Metadata } from 'next'

import { DeveloppementWebRennesContent } from './developpement-web-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Développement web à Rennes : sites et applications modernes avec Next.js, React et TypeScript. Performance, SEO et design sur mesure par Victor Béasse.'

export const metadata: Metadata = {
  title: 'Développement Web à Rennes | Sites & Applications - VBWEB',
  description,
  alternates: { canonical: '/developpement-web-rennes' },
}

const faqs = [
  {
    question: 'Quelles technologies utilisez-vous pour le développement web à Rennes ?',
    answer: 'Je travaille principalement avec Next.js, React, TypeScript et Node.js. Ce sont des technologies modernes utilisées par les plus grands sites web. Elles garantissent des sites rapides, sécurisés et bien référencés sur Google.',
  },
  {
    question: 'Combien coûte un site web développé sur mesure à Rennes ?',
    answer: 'Un site vitrine démarre autour de 2 500 euros, un site plus complet avec plusieurs pages de contenu tourne entre 4 000 et 8 000 euros, et une application web sur mesure se calcule au cahier des charges. Je remets toujours un devis détaillé après un premier échange gratuit.',
  },
  {
    question: 'Pourquoi choisir Next.js pour développer un site à Rennes ?',
    answer: 'Next.js, c\'est ce qui permet à votre site de se charger en moins d\'une seconde et de bien ranker sur Google. C\'est le framework utilisé par Nike, TikTok ou Notion. Pour une PME rennaise qui veut être trouvée, c\'est un atout énorme face à des sites WordPress souvent lents.',
  },
  {
    question: 'Développez-vous aussi des applications web complexes ?',
    answer: 'Oui. Au-delà des sites vitrines, je conçois des applications web sur mesure : espaces clients, tableaux de bord, outils métier, plateformes de réservation. Tout ce qui demande de la logique custom et une interface soignée.',
  },
  {
    question: 'Combien de temps prend le développement d\'un site à Rennes ?',
    answer: 'Pour un site vitrine bien pensé, comptez 4 à 6 semaines entre le cadrage et la mise en ligne. Pour une application plus complexe, on part plutôt sur 2 à 4 mois. Je découpe toujours le projet en étapes pour que vous ayez de la visibilité.',
  },
  {
    question: 'Est-ce que vous gérez aussi le SEO du site que vous développez ?',
    answer: 'Oui, et c\'est justement ce qui fait la différence. Je suis développeur et consultant SEO. Le site est construit dès le départ pour être rapide, bien structuré et bien référencé. Rennes Pneus est passé de 30 à 3 600 visites par mois grâce à cette approche combinée.',
  },
  {
    question: 'Peut-on vous rencontrer à Rennes pour parler du projet ?',
    answer: 'Bien sûr. Je suis basé à Rennes et je propose des rendez-vous en personne dans la métropole. On peut se voir en café, dans vos locaux, ou en visio si c\'est plus pratique. La première rencontre est toujours offerte.',
  },
  {
    question: 'Que se passe-t-il après la livraison du site ?',
    answer: 'Je propose un contrat de maintenance optionnel pour garder le site à jour, faire des sauvegardes, corriger les bugs et ajouter de nouvelles fonctionnalités. Vous restez propriétaire du code et des accès, rien ne vous retient chez moi.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Développement Web à Rennes', description, '/developpement-web-rennes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Développement Web à Rennes', description, '/developpement-web-rennes'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Développement Web Rennes', path: '/developpement-web-rennes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function DeveloppementWebRennesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DeveloppementWebRennesContent faqs={faqs} />
    </>
  )
}

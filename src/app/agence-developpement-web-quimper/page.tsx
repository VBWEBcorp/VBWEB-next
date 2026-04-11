import type { Metadata } from 'next'

import { AgenceDeveloppementWebQuimperContent } from './agence-developpement-web-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Agence développement web à Quimper ? Un expert dédié qui code votre site de A à Z, avec SEO intégré. Contact direct, devis clair, audit gratuit.'

export const metadata: Metadata = {
  title: 'Agence Développement Web à Quimper | Expert Web - VBWEB',
  description,
  alternates: { canonical: '/agence-developpement-web-quimper' },
}

const faqs = [
  {
    question: 'Pourquoi préférer un expert indépendant à une agence développement web à Quimper ?',
    answer: 'La Cornouaille a un réseau d\'agences limité et les entreprises quimpéroises doivent souvent aller chercher ailleurs. Un expert indépendant, basé en Bretagne mais mobile, offre la souplesse d\'un petit cabinet avec les compétences d\'une agence. Vous gagnez sur la disponibilité, la relation et la réactivité.',
  },
  {
    question: 'Comment un développeur basé à Rennes peut-il servir un client quimpérois ?',
    answer: 'Via le web, essentiellement. Les visios, les outils collaboratifs et la messagerie rendent le travail fluide. Pour les moments importants du projet, je me déplace à Quimper. Sur les 150 sites que j\'ai livrés, beaucoup l\'ont été à distance avec succès. L\'important est d\'avoir un protocole de communication clair dès le départ.',
  },
  {
    question: 'Quels types de projets web peuvent être développés pour Quimper ?',
    answer: 'Tout ce qui constitue une présence web professionnelle : site vitrine, e-commerce, site métier, plateforme de réservation, espace client, blog structuré. Quimper a un tissu économique varié : faïencerie, artisanat, commerce, professions libérales, tourisme. Chaque activité a ses enjeux propres et je m\'adapte à votre réalité.',
  },
  {
    question: 'Quel budget prévoir pour un site professionnel à Quimper ?',
    answer: 'Comptez 2 500 euros minimum pour un site vitrine bien fait, 5 000 à 15 000 euros pour un e-commerce, plus au-delà selon la complexité. Ces fourchettes couvrent la grande majorité des besoins d\'une PME quimpéroise. Le devis précise chaque poste pour que vous voyiez exactement où va votre budget.',
  },
  {
    question: 'Quels sont les délais moyens d\'un projet web ?',
    answer: 'Pour un site vitrine, comptez 4 à 8 semaines entre la signature et la mise en ligne. Un e-commerce ou une application demande 2 à 4 mois. Plus le cahier des charges est précis au départ, plus la réalisation est rapide. Un temps bien investi au début économise beaucoup de temps ensuite.',
  },
  {
    question: 'Mon site sera-t-il trouvable sur Google après la mise en ligne ?',
    answer: 'Oui, le SEO est intégré dès la conception. Je suis consultant en référencement naturel en plus d\'être développeur, ce qui signifie que la performance Google n\'est pas une option ajoutée après coup : c\'est dans l\'ADN du site dès la première ligne de code. Mes clients remontent sur Google sans attendre.',
  },
  {
    question: 'Travaillez-vous aussi à Concarneau, Fouesnant, Bénodet ?',
    answer: 'Oui, toute la Cornouaille : Ergué-Gabéric, Pluguffan, Fouesnant, Bénodet, Concarneau. Le sud Finistère a des enjeux touristiques importants, notamment sur la côte, et j\'accompagne régulièrement des professionnels de cette zone sur leur présence web.',
  },
  {
    question: 'Et après la livraison, que se passe-t-il ?',
    answer: 'Vous avez deux options : prendre un forfait de maintenance mensuel pour les mises à jour et les évolutions, ou gérer vous-même via l\'interface d\'administration que je vous livre. Dans tous les cas, le site vous appartient à 100% et vous n\'êtes jamais dépendant de moi. C\'est une de mes règles.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence Développement Web à Quimper', description, '/agence-developpement-web-quimper', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence Développement Web à Quimper', description, '/agence-developpement-web-quimper', [
      { '@type': 'City', name: 'Quimper' },
      { '@type': 'AdministrativeArea', name: 'Finistère' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence Développement Web Quimper', path: '/agence-developpement-web-quimper' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceDeveloppementWebQuimperPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceDeveloppementWebQuimperContent faqs={faqs} />
    </>
  )
}

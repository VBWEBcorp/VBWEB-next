import type { Metadata } from 'next'

import { AgenceSeoRennesContent } from './agence-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Vous cherchez une agence SEO à Rennes ? Découvrez une alternative plus directe : un expert dédié à votre projet, sans intermédiaire. Audit gratuit, résultats mesurables.'

export const metadata: Metadata = {
  title: 'Agence SEO à Rennes | Expert Référencement Naturel - VBWEB',
  description,
  alternates: { canonical: '/agence-seo-rennes' },
}

const faqs = [
  {
    question: 'Quelle est la différence entre une agence SEO et un consultant SEO à Rennes ?',
    answer: 'Une agence SEO emploie plusieurs personnes : commerciaux, chefs de projet, consultants juniors. Votre dossier passe entre différentes mains. Avec un consultant SEO indépendant, vous travaillez directement avec la personne qui optimise votre site. Les décisions sont plus rapides et la relation plus fluide.',
  },
  {
    question: 'Pourquoi choisir un expert SEO plutôt qu\'une agence à Rennes ?',
    answer: 'L\'avantage principal, c\'est la continuité. En agence, votre interlocuteur peut changer tous les 6 mois. Ici, c\'est toujours la même personne qui connaît votre dossier, votre marché et vos objectifs. Et les tarifs sont souvent plus compétitifs à prestation égale.',
  },
  {
    question: 'Un consultant SEO seul peut-il rivaliser avec une agence SEO ?',
    answer: 'Oui, sans hésiter. Les outils utilisés sont les mêmes (Screaming Frog, Ahrefs, Search Console), les méthodes aussi. La différence, c\'est que vous n\'avez pas de couche intermédiaire. Pour preuve : EPICU est passé de 100 à 5 000 visites par mois, Rennes Pneus de 30 à 3 600 avec 500 appels mensuels.',
  },
  {
    question: 'Combien coûte un accompagnement SEO à Rennes ?',
    answer: 'Un accompagnement SEO mensuel démarre à partir de 500 euros par mois. Le tarif dépend de la taille de votre site et du niveau de concurrence sur vos mots-clés. Je propose un audit gratuit pour évaluer vos besoins et vous remettre un devis clair, sans surprise.',
  },
  {
    question: 'Comment se passe le suivi si je ne passe pas par une agence ?',
    answer: 'Vous disposez d\'un espace de suivi dédié avec l\'avancement de votre projet et des synthèses mensuelles. On fait un point chaque mois en visio ou en personne à Rennes. Entre les points, vous me contactez par message à tout moment. C\'est le même niveau de suivi qu\'en agence, mais sans le filtre.',
  },
  {
    question: 'Est-ce que vous travaillez uniquement avec des entreprises rennaises ?',
    answer: 'Je suis basé à Rennes et j\'accompagne beaucoup d\'entreprises de la métropole rennaise : Cesson-Sévigné, Saint-Grégoire, Bruz, Chantepie. Mais je travaille aussi avec des clients dans toute la Bretagne et en région parisienne. La majorité du travail se fait à distance.',
  },
  {
    question: 'En combien de temps vais-je voir des résultats SEO ?',
    answer: 'En général entre 3 et 6 mois pour les premiers résultats visibles. Le SEO est un travail de fond qui s\'accélère avec le temps. Pour Rennes Pneus, les premiers appels sont arrivés au bout de 4 mois. Que vous passiez par une agence ou un consultant, ce délai est le même : c\'est Google qui décide du rythme.',
  },
  {
    question: 'Proposez-vous les mêmes services qu\'une agence SEO à Rennes ?',
    answer: 'Oui : audit technique, recherche de mots-clés, optimisation de contenu, stratégie de netlinking, suivi de positionnement et reporting mensuel. La seule différence, c\'est que tout passe par un interlocuteur unique. Pas de réunion de cadrage à 5 personnes, pas de process rallongé.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence SEO à Rennes', description, '/agence-seo-rennes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence SEO à Rennes', description, '/agence-seo-rennes'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence SEO Rennes', path: '/agence-seo-rennes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceSeoRennesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceSeoRennesContent faqs={faqs} />
    </>
  )
}

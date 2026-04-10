import type { Metadata } from 'next'

import { AgenceReferencementRennesContent } from './agence-referencement-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Vous cherchez une agence de référencement à Rennes ? Travaillez directement avec un expert dédié, sans intermédiaire. Audit gratuit, stratégie complète, résultats mesurables.'

export const metadata: Metadata = {
  title: 'Agence de Référencement à Rennes | Expert SEO - VBWEB',
  description,
  alternates: { canonical: '/agence-referencement-rennes' },
}

const faqs = [
  {
    question: 'Que comprend une prestation de référencement à Rennes ?',
    answer: 'Une prestation complète couvre trois volets : le référencement technique (vitesse, structure, indexation), le référencement de contenu (pages optimisées sur vos mots-clés) et le référencement de notoriété (liens entrants de qualité). Chaque mois, vous recevez un rapport avec vos positions Google, votre trafic et les actions réalisées.',
  },
  {
    question: 'Pourquoi travailler avec un expert plutôt qu\'une agence de référencement ?',
    answer: 'Avec un expert indépendant, votre interlocuteur est la personne qui fait le travail. Pas de commercial, pas de chef de projet intermédiaire. Les décisions sont plus rapides, le suivi plus personnel, et les tarifs plus accessibles à prestation équivalente.',
  },
  {
    question: 'Quelle différence entre référencement naturel et référencement payant ?',
    answer: 'Le référencement naturel (SEO) consiste à positionner votre site dans les résultats organiques de Google, sans payer de publicité. Le référencement payant (Google Ads) vous place en haut de page contre un budget quotidien. Les deux sont complémentaires, mais le SEO génère des résultats durables dans le temps.',
  },
  {
    question: 'Combien de temps faut-il pour référencer un site sur Google ?',
    answer: 'Les premiers résultats apparaissent en général entre 3 et 6 mois. Le référencement est un travail progressif qui prend de la valeur avec le temps. Pour Rennes Pneus, les premiers appels clients sont arrivés au bout de 4 mois. Pour EPICU, la croissance s\'est construite sur 3 ans.',
  },
  {
    question: 'Comment savoir si mon site a besoin d\'un meilleur référencement ?',
    answer: 'Si vos clients potentiels ne vous trouvent pas quand ils tapent votre métier + votre ville sur Google, votre référencement peut être amélioré. Je propose un audit gratuit qui analyse votre positionnement actuel, vos concurrents et les opportunités que vous manquez.',
  },
  {
    question: 'Travaillez-vous le référencement local pour les entreprises rennaises ?',
    answer: 'Oui, le référencement local est au coeur de ma pratique. J\'optimise votre fiche Google Business Profile, vos citations locales et vos pages pour les recherches géolocalisées. J\'accompagne des entreprises à Rennes, Cesson-Sévigné, Saint-Grégoire, Bruz, Chantepie et Pacé.',
  },
  {
    question: 'Quel budget prévoir pour le référencement d\'un site à Rennes ?',
    answer: 'Un accompagnement mensuel en référencement démarre à partir de 500 euros par mois. Le tarif dépend de la taille de votre site, du nombre de mots-clés ciblés et de la concurrence dans votre secteur. L\'audit gratuit permet de définir un budget adapté à vos objectifs.',
  },
  {
    question: 'Le référencement fonctionne-t-il pour tous les types de sites ?',
    answer: 'Oui. Sites vitrine, e-commerce, sites de services, blogs professionnels. Les techniques diffèrent selon la nature du site, mais le principe reste le même : comprendre ce que vos clients recherchent sur Google et faire en sorte que votre site y réponde mieux que vos concurrents.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence de Référencement à Rennes', description, '/agence-referencement-rennes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence de Référencement à Rennes', description, '/agence-referencement-rennes'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence Référencement Rennes', path: '/agence-referencement-rennes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceReferencementRennesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceReferencementRennesContent faqs={faqs} />
    </>
  )
}

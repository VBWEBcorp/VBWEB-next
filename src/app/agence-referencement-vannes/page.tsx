import type { Metadata } from 'next'

import { AgenceReferencementVannesContent } from './agence-referencement-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Vous cherchez une agence de référencement à Vannes ? Travaillez avec un expert SEO dédié, sans intermédiaire. Stratégie sur mesure pour le Morbihan. Audit gratuit, 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Agence de Référencement à Vannes | Expert SEO - VBWEB',
  description,
  alternates: { canonical: '/agence-referencement-vannes' },
}

const faqs = [
  {
    question: 'Comment fonctionne une agence de référencement à Vannes ?',
    answer: 'Une agence de référencement analyse votre site, identifie les mots-clés pertinents pour votre activité dans le Morbihan, puis optimise vos pages pour que Google les positionne en haut des résultats. Le travail couvre la technique, le contenu et la notoriété de votre site.',
  },
  {
    question: 'Pourquoi travailler avec un expert plutôt qu\'une agence de référencement classique ?',
    answer: 'Avec un expert indépendant, vous échangez directement avec la personne qui travaille sur votre site. Pas de turnover, pas d\'intermédiaire commercial. Les décisions sont prises plus vite, la stratégie reste cohérente, et les tarifs sont plus justes.',
  },
  {
    question: 'Quel est le tarif d\'une prestation de référencement à Vannes ?',
    answer: 'Un accompagnement mensuel en référencement commence à 500 euros par mois. Le montant dépend de la taille de votre site, de la concurrence sur vos mots-clés et de vos objectifs de croissance. L\'audit gratuit permet de cadrer un budget réaliste.',
  },
  {
    question: 'Le référencement est-il adapté aux commerces du centre-ville de Vannes ?',
    answer: 'Tout à fait. Quand un habitant ou un touriste cherche "boulangerie Vannes" ou "boutique Golfe du Morbihan", c\'est le référencement qui détermine qui apparaît en premier sur Google et sur Google Maps. Les commerces de proximité ont tout à gagner à travailler leur visibilité en ligne.',
  },
  {
    question: 'En combien de temps le référencement donne-t-il des résultats à Vannes ?',
    answer: 'Comptez 3 à 6 mois pour constater les premières progressions concrètes. Sur un marché local comme Vannes, la concurrence est souvent moins féroce que dans les grandes métropoles, ce qui peut accélérer l\'obtention de résultats. Le travail s\'inscrit ensuite dans la durée.',
  },
  {
    question: 'Vous êtes à Rennes, comment travaillez-vous avec des entreprises vannetaises ?',
    answer: 'Le référencement se fait principalement à distance : analyses, optimisations, reporting en ligne. Je me déplace à Vannes pour les rendez-vous importants. Surtout, je connais bien le bassin vannetais et ses dynamiques économiques, ce qui fait la différence dans la stratégie.',
  },
  {
    question: 'Le référencement local fonctionne-t-il pour les activités saisonnières du Morbihan ?',
    answer: 'C\'est justement là que le référencement prend tout son sens. Si vous préparez votre visibilité en hiver, vous serez bien positionné au moment où les touristes lanceront leurs recherches au printemps. Location de bateaux, hébergements, restaurants : le SEO anticipe la demande.',
  },
  {
    question: 'Pouvez-vous reprendre le référencement d\'un site déjà travaillé par une autre agence ?',
    answer: 'Oui, c\'est un cas de figure fréquent. L\'audit initial permet de voir ce qui a été fait, les acquis à conserver et les axes d\'amélioration. La reprise se fait de façon progressive, sans perdre le travail déjà accompli.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence de Référencement à Vannes', description, '/agence-referencement-vannes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence de Référencement à Vannes', description, '/agence-referencement-vannes', [
      { '@type': 'City', name: 'Vannes' },
      { '@type': 'AdministrativeArea', name: 'Morbihan' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence Référencement Vannes', path: '/agence-referencement-vannes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceReferencementVannesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceReferencementVannesContent faqs={faqs} />
    </>
  )
}

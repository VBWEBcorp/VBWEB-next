import type { Metadata } from 'next'

import { SeoRennesContent } from './seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Consultant SEO à Rennes : référencement naturel pour PME, artisans et commerces. Audit gratuit, stratégie sur mesure, résultats mesurables. 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Consultant SEO Rennes | Référencement Naturel',
  description,
  alternates: { canonical: '/referencement-seo-rennes' },
}

const faqs = [
  {
    question: 'Combien coûte un consultant SEO à Rennes ?',
    answer: 'Le tarif dépend de la taille de votre site et de vos objectifs. Un accompagnement SEO mensuel démarre généralement à partir de 500€/mois. Je propose un audit gratuit pour évaluer vos besoins avant tout engagement.',
  },
  {
    question: 'Combien de temps faut-il pour voir des résultats en SEO ?',
    answer: 'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Le référencement naturel est un investissement à long terme qui s\'accélère avec le temps, contrairement à la publicité qui s\'arrête dès que vous arrêtez de payer.',
  },
  {
    question: 'Quelle est la différence entre SEO et SEA ?',
    answer: 'Le SEO (référencement naturel) vous positionne dans les résultats organiques de Google : c\'est gratuit et durable. Le SEA (Google Ads) est de la publicité payante, les résultats sont immédiats mais s\'arrêtent dès que le budget est épuisé.',
  },
  {
    question: 'Pourquoi choisir un consultant SEO local à Rennes ?',
    answer: 'Un consultant local comprend votre marché, vos concurrents et les spécificités de la recherche locale à Rennes et en Bretagne. Je peux aussi vous rencontrer en personne pour mieux comprendre votre activité.',
  },
  {
    question: 'Comment savoir si mon site est bien référencé sur Google ?',
    answer: 'Je propose un audit SEO gratuit qui analyse votre positionnement actuel, vos performances techniques et vos opportunités de croissance. Vous recevez un rapport complet avec des recommandations concrètes.',
  },
  {
    question: 'Le référencement naturel est-il adapté aux petites entreprises ?',
    answer: 'Absolument. Le SEO est souvent le canal le plus rentable pour les PME et artisans. Contrairement à la publicité, un bon référencement continue de vous apporter des clients pendant des années.',
  },
  {
    question: 'Qu\'est-ce qu\'un audit SEO et à quoi ça sert ?',
    answer: 'Un audit SEO analyse l\'état de santé de votre site : performance technique, contenu, mots-clés, concurrence. Il identifie exactement ce qui vous empêche d\'être visible sur Google et propose un plan d\'action priorisé.',
  },
  {
    question: 'Travaillez-vous aussi en dehors de Rennes ?',
    answer: 'Oui, j\'accompagne des clients dans toute la Bretagne et au-delà. Basé à Rennes, je travaille aussi à distance. La majorité de mes clients sont à Rennes, mais je suis flexible sur la localisation.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Consultant SEO Rennes', description, '/referencement-seo-rennes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Référencement naturel SEO', description, '/referencement-seo-rennes'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Référencement SEO Rennes', path: '/referencement-seo-rennes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SeoRennesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoRennesContent faqs={faqs} />
    </>
  )
}

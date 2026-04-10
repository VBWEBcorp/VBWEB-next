import type { Metadata } from 'next'

import { ReferencementNaturelSaintMaloContent } from './referencement-naturel-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Référencement naturel à Saint-Malo : positionnez votre site en tête de Google et captez plus de clients en Ille-et-Vilaine. Audit gratuit, accompagnement personnalisé. 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Référencement Naturel à Saint-Malo | Expert SEO - VBWEB',
  description,
  alternates: { canonical: '/referencement-naturel-saint-malo' },
}

const faqs = [
  {
    question: 'Pourquoi le référencement naturel est-il stratégique pour une entreprise à Saint-Malo ?',
    answer: 'Saint-Malo accueille des millions de visiteurs chaque année, et la majorité d\'entre eux préparent leur séjour sur Google. Le référencement naturel vous rend visible au moment où ces personnes cherchent un restaurant, un hôtel, une activité ou un service dans la cité corsaire.',
  },
  {
    question: 'En quoi consiste le référencement naturel pour un commerce malouin ?',
    answer: 'C\'est tout le travail qui fait que votre site remonte dans les résultats Google quand quelqu\'un cherche vos services. Concrètement, j\'optimise la technique de votre site, je crée du contenu qui répond aux recherches de vos clients, et je développe votre notoriété en ligne. Pas de publicité payante : c\'est du trafic gratuit et durable.',
  },
  {
    question: 'Le référencement naturel peut-il m\'aider à capter les touristes à Saint-Malo ?',
    answer: 'C\'est l\'un de ses plus grands atouts. Les touristes cherchent sur Google avant et pendant leur séjour. "Restaurant fruits de mer Saint-Malo", "activité famille intra-muros"... Le référencement naturel vous positionne sur ces recherches au bon moment, sans dépenser en publicité.',
  },
  {
    question: 'Combien de temps pour que mon site soit bien positionné sur Google à Saint-Malo ?',
    answer: 'Comptez 3 à 6 mois pour les premières remontées significatives. Sur les requêtes très locales comme "photographe Saint-Malo" ou "garage Dinard", les résultats arrivent souvent plus rapidement grâce à une concurrence plus faible.',
  },
  {
    question: 'Quel est le prix d\'un accompagnement en référencement naturel à Saint-Malo ?',
    answer: 'Les accompagnements démarrent à 500 euros par mois. Le montant exact dépend de votre secteur et de la concurrence sur vos mots-clés. Avant tout engagement, je réalise un audit gratuit pour vous donner une idée claire du travail nécessaire.',
  },
  {
    question: 'Quelle différence entre le référencement naturel et le référencement payant ?',
    answer: 'Le référencement payant (Google Ads) fonctionne comme une location : vous payez chaque mois et le trafic s\'arrête quand vous arrêtez de payer. Le référencement naturel, c\'est un investissement : le trafic qu\'il génère est gratuit et continue de croître même après la phase d\'optimisation.',
  },
  {
    question: 'Comment se passe le suivi de mon référencement naturel ?',
    answer: 'Vous avez accès à un espace de suivi avec vos positions Google, votre trafic et vos demandes de contact. On fait le point chaque mois en visio ou en personne. Entre les points, vous pouvez me contacter à tout moment.',
  },
  {
    question: 'Est-ce que vous travaillez avec des entreprises dans les environs de Saint-Malo ?',
    answer: 'J\'accompagne des entreprises à Dinard, Dinan, Cancale, Dol-de-Bretagne, Saint-Lunaire et plus largement en Ille-et-Vilaine. Basé à Rennes, je suis à 45 minutes de Saint-Malo, ce qui facilite les rendez-vous.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Référencement Naturel à Saint-Malo', description, '/referencement-naturel-saint-malo', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Référencement Naturel à Saint-Malo', description, '/referencement-naturel-saint-malo', [
      { '@type': 'City', name: 'Saint-Malo' },
      { '@type': 'AdministrativeArea', name: 'Ille-et-Vilaine' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Référencement Naturel Saint-Malo', path: '/referencement-naturel-saint-malo' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function ReferencementNaturelSaintMaloPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReferencementNaturelSaintMaloContent faqs={faqs} />
    </>
  )
}

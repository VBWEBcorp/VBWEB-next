import type { Metadata } from 'next'

import { ConsultantSeoSaintBrieucContent } from './consultant-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Consultant SEO a Saint-Brieuc : j\'accompagne les entreprises des Cotes-d\'Armor pour gagner en visibilite sur Google. Audit gratuit, strategie sur mesure, resultats mesurables. 75 avis 5 etoiles.'

export const metadata: Metadata = {
  title: 'Consultant SEO à Saint-Brieuc | Expert Référencement - VBWEB',
  description:
    'Consultant SEO à Saint-Brieuc : j\'accompagne les entreprises des Côtes-d\'Armor pour gagner en visibilité sur Google. Audit gratuit, stratégie sur mesure, résultats mesurables. 75 avis 5 étoiles.',
  alternates: { canonical: '/consultant-seo-saint-brieuc' },
}

const faqs = [
  {
    question: 'Pourquoi faire appel à un consultant SEO pour mon entreprise à Saint-Brieuc ?',
    answer: 'Un consultant SEO identifie les recherches que font vos clients potentiels sur Google et optimise votre site pour apparaître dans les premiers résultats. À Saint-Brieuc, la concurrence en ligne est encore modérée : c\'est le moment idéal pour prendre de l\'avance sur votre marché local.',
  },
  {
    question: 'Vous êtes basé à Rennes, comment accompagnez-vous des clients à Saint-Brieuc ?',
    answer: 'Je travaille avec des entreprises dans toute la Bretagne. Le référencement se fait principalement à distance, avec des rendez-vous en visio réguliers. Et Saint-Brieuc est à une heure de Rennes : je me déplace volontiers quand c\'est utile pour le projet.',
  },
  {
    question: 'Combien coûte un accompagnement SEO à Saint-Brieuc ?',
    answer: 'Un accompagnement SEO mensuel démarre à partir de 500 euros par mois. Le tarif dépend de la taille de votre site, de la concurrence sur vos mots-clés et de vos objectifs. Je propose un audit gratuit pour évaluer vos besoins et établir un devis adapté.',
  },
  {
    question: 'En combien de temps les résultats SEO apparaissent-ils ?',
    answer: 'En général entre 3 et 6 mois pour constater les premières améliorations. Le SEO est un travail de fond qui s\'amplifie avec le temps. Sur les marchés moins concurrentiels comme Saint-Brieuc, les résultats peuvent arriver plus rapidement qu\'en grande métropole.',
  },
  {
    question: 'Quelle est la différence entre un consultant SEO et une agence web ?',
    answer: 'Avec un consultant SEO, vous avez un interlocuteur unique qui connaît votre dossier de A à Z. Pas de turnover, pas de commercial entre vous et la personne qui travaille sur votre site. La relation est directe, les décisions sont rapides et les tarifs généralement plus accessibles.',
  },
  {
    question: 'Travaillez-vous aussi le référencement local pour Google Maps ?',
    answer: 'Oui, le référencement local fait partie intégrante de ma prestation. J\'optimise votre fiche Google Business Profile, je travaille les avis clients et je positionne votre site sur les recherches géolocalisées comme "artisan Saint-Brieuc" ou "restaurant Plérin".',
  },
  {
    question: 'Quels types d\'entreprises accompagnez-vous dans les Côtes-d\'Armor ?',
    answer: 'J\'accompagne des PME, artisans, commerces, professions libérales et restaurateurs. Que vous soyez basé à Saint-Brieuc, Plérin, Lamballe ou Paimpol, la démarche est la même : comprendre votre activité, identifier vos clients cibles et vous rendre visible sur Google.',
  },
  {
    question: 'Comment suivre l\'avancement de mon référencement ?',
    answer: 'Vous disposez d\'un espace de suivi dédié avec vos positions Google, votre trafic et les demandes générées. Nous faisons un point mensuel en visio pour analyser les résultats et ajuster la stratégie. Entre les points, vous pouvez me contacter à tout moment.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Consultant SEO à Saint-Brieuc', description, '/consultant-seo-saint-brieuc', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Consultant SEO à Saint-Brieuc', description, '/consultant-seo-saint-brieuc', [
      { '@type': 'City', name: 'Saint-Brieuc' },
      { '@type': 'AdministrativeArea', name: 'Côtes-d\'Armor' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Consultant SEO Saint-Brieuc', path: '/consultant-seo-saint-brieuc' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function ConsultantSeoSaintBrieucPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ConsultantSeoSaintBrieucContent faqs={faqs} />
    </>
  )
}

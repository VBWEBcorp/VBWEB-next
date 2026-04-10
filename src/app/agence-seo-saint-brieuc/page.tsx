import type { Metadata } from 'next'

import { AgenceSeoSaintBrieucContent } from './agence-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Agence SEO à Saint-Brieuc : un expert référencement indépendant pour booster votre visibilité Google dans les Côtes-d\'Armor. Stratégie sur mesure, audit gratuit, 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Agence SEO à Saint-Brieuc | Expert Référencement Naturel - VBWEB',
  description,
  alternates: { canonical: '/agence-seo-saint-brieuc' },
}

const faqs = [
  {
    question: 'Quel avantage à travailler avec un expert SEO plutôt qu\'une agence à Saint-Brieuc ?',
    answer: 'Vous avez un interlocuteur unique qui connaît votre projet dans le détail. Pas de rotation d\'équipe, pas de dossier qui passe de main en main. La communication est fluide et les décisions rapides. C\'est souvent ce que recherchent les dirigeants de PME.',
  },
  {
    question: 'Quel est le prix du référencement naturel à Saint-Brieuc ?',
    answer: 'L\'accompagnement mensuel commence à 500 euros par mois. Chaque projet est différent : le tarif dépend de la taille de votre site, de vos objectifs et de la concurrence locale. L\'audit gratuit permet de calibrer précisément la prestation.',
  },
  {
    question: 'Quelles entreprises briochines peuvent bénéficier du SEO ?',
    answer: 'Toutes les entreprises qui ont des clients locaux ou qui vendent en ligne. À Saint-Brieuc, j\'accompagne des commerces, des artisans, des entreprises agroalimentaires, des professions libérales. Dès que vos clients passent par Google, le SEO est un levier pertinent.',
  },
  {
    question: 'Comment se déroule un accompagnement SEO avec vous ?',
    answer: 'On démarre par un audit complet de votre site. Ensuite, je déploie les optimisations mois après mois : technique, contenu, netlinking. Vous suivez tout dans un espace dédié et on fait le point ensemble chaque mois.',
  },
  {
    question: 'Le SEO local est-il efficace dans les Côtes-d\'Armor ?',
    answer: 'Très efficace. Beaucoup d\'entreprises costarmoricaines n\'ont pas encore investi dans le SEO. C\'est une vraie opportunité : avec une stratégie bien menée, vous pouvez prendre l\'avantage sur des concurrents qui se reposent uniquement sur le bouche-à-oreille.',
  },
  {
    question: 'Travaillez-vous aussi à Plérin, Lamballe et Langueux ?',
    answer: 'Oui, j\'accompagne des entreprises sur l\'ensemble de l\'agglomération briochine et des Côtes-d\'Armor : Plérin, Langueux, Trégueux, Lamballe, Ploufragan. Le SEO local couvre votre zone de chalandise complète.',
  },
  {
    question: 'En combien de temps vais-je voir des résultats ?',
    answer: 'Entre 3 et 6 mois pour les premières améliorations. Saint-Brieuc n\'est pas Paris : la concurrence en ligne y est plus accessible, ce qui permet souvent d\'obtenir des résultats significatifs dès les premiers mois de travail.',
  },
  {
    question: 'L\'audit SEO est-il vraiment gratuit ?',
    answer: 'Oui, l\'audit est gratuit et sans engagement. Il couvre la technique, le contenu et la popularité de votre site. Vous repartez avec un diagnostic précis et des recommandations concrètes, que vous choisissiez ou non de travailler avec moi ensuite.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence SEO à Saint-Brieuc', description, '/agence-seo-saint-brieuc', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence SEO à Saint-Brieuc', description, '/agence-seo-saint-brieuc', [
      { '@type': 'City', name: 'Saint-Brieuc' },
      { '@type': 'AdministrativeArea', name: 'Côtes-d\'Armor' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence SEO Saint-Brieuc', path: '/agence-seo-saint-brieuc' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceSeoSaintBrieucPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceSeoSaintBrieucContent faqs={faqs} />
    </>
  )
}

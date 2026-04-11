import type { Metadata } from 'next'

import { SiteInternetSophrologueContent } from './site-internet-sophrologue-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Création de site internet sophrologue, partout en France. Un site pour expliquer la sophrologie, présenter vos thématiques (stress, sommeil, accouchement) et remplir votre agenda. Victor Béasse, +150 sites créés.'

export const metadata: Metadata = {
  title: 'Site Internet Sophrologue | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-sophrologue' },
}

const faqs = [
  {
    question: 'Pourquoi un site internet sophrologue est-il si utile ?',
    answer: 'La sophrologie reste souvent mal connue. Beaucoup de personnes ne savent pas précisément ce que c\'est ni à quoi ça sert. Un site bien construit fait un vrai travail pédagogique : il explique la méthode, donne envie d\'essayer, et convertit les curieux en premiers rendez-vous. C\'est souvent ce qui lance vraiment l\'activité.',
  },
  {
    question: 'Comment expliquer la sophrologie sur un site sans perdre les gens ?',
    answer: 'En partant des bénéfices concrets avant la méthode. Plutôt que de commencer par "la sophrologie est une méthode psycho-corporelle créée par Alfonso Caycedo", je préfère écrire "vous dormez mal, vous vous sentez sous pression, vous cherchez à mieux gérer vos émotions : la sophrologie peut vous aider". On explique le comment juste après.',
  },
  {
    question: 'Puis-je créer des pages par thématique (stress, sommeil, accouchement) ?',
    answer: 'Oui, et c\'est même la meilleure stratégie. Les recherches Google sont presque toujours précises : "sophrologue préparation accouchement", "sophrologue gestion du stress", "sophrologue sommeil". Une page par thématique vous fait apparaître sur chacune de ces recherches et montre votre expertise sur chaque sujet.',
  },
  {
    question: 'Comment intégrer la prise de rendez-vous sur mon site ?',
    answer: 'J\'intègre l\'outil de votre choix : Calendly, Crénolibre, Doctolib, ou un formulaire de contact simple si vous préférez gérer l\'agenda manuellement au début. Le tout se fait sans quitter votre site, avec une expérience fluide pour le visiteur.',
  },
  {
    question: 'La sophrologie n\'étant pas une profession réglementée, quelles sont les bonnes pratiques ?',
    answer: 'La sophrologie n\'est pas un métier protégé par la loi, mais les syndicats (SSP, Chambre Syndicale) recommandent une communication loyale, non comparative et sans promesse de résultat thérapeutique. Vous ne devez pas vous présenter comme soignant ni promettre une guérison. Je connais ces règles et je les applique strictement.',
  },
  {
    question: 'Combien coûte un site internet pour un sophrologue ?',
    answer: 'Un site vitrine démarre autour de 1 500 euros. Si vous souhaitez plusieurs pages thématiques ou un blog, le tarif monte un peu. Je propose un devis détaillé après un premier échange pour comprendre vos objectifs et le volume d\'activité que vous visez.',
  },
  {
    question: 'Puis-je proposer des séances en visio sur mon site ?',
    answer: 'Oui, de plus en plus de sophrologues proposent des séances à distance, et c\'est un vrai levier pour toucher un public plus large. J\'intègre directement l\'outil de visio de votre choix et je construis une page claire qui explique comment se déroule une séance en ligne.',
  },
  {
    question: 'Travaillez-vous avec des sophrologues partout en France ?',
    answer: 'Oui, j\'accompagne des sophrologues partout en France. Je suis basé à Rennes mais tout se déroule à distance avec des visios régulières. Que vous exerciez en région parisienne, dans le Sud ou dans un petit village, l\'accompagnement est identique et sans aucune contrainte géographique.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Sophrologue', description, '/site-internet-sophrologue', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Sophrologue', description, '/site-internet-sophrologue'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Thérapeute', path: '/site-internet-therapeute' },
      { name: 'Site Internet Sophrologue', path: '/site-internet-sophrologue' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetSophrologuePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteInternetSophrologueContent faqs={faqs} />
    </>
  )
}

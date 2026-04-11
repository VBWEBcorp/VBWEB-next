import type { Metadata } from 'next'

import { SiteInternetPsychologueContent } from './site-internet-psychologue-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Création de site internet psychologue, partout en France. Un site pédagogique et rassurant pour présenter votre approche, faciliter le premier rendez-vous et être trouvé sur Google. Victor Béasse, +150 sites créés.'

export const metadata: Metadata = {
  title: 'Site Internet Psychologue | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-psychologue' },
}

const faqs = [
  {
    question: 'Pourquoi un site internet psychologue est-il si important pour un premier rendez-vous ?',
    answer: 'Prendre rendez-vous avec un psychologue n\'est jamais anodin. Avant d\'appeler, la personne veut savoir à qui elle s\'adresse, comprendre votre approche et s\'assurer qu\'elle va se sentir en sécurité. Un site clair, pédagogique et chaleureux lève beaucoup des résistances et aide réellement la prise de décision.',
  },
  {
    question: 'Comment aborder la psychothérapie sur un site sans effrayer ?',
    answer: 'En parlant concrètement et simplement, sans jargon. Plutôt que d\'écrire "approche psychodynamique intégrative", je privilégie des phrases comme "je vous aide à mettre des mots sur ce qui vous traverse". Le but est de déstigmatiser et de rassurer, tout en restant fidèle à votre pratique réelle.',
  },
  {
    question: 'Le titre de psychologue est-il protégé ? Quelles mentions dois-je afficher ?',
    answer: 'Oui, le titre de psychologue est protégé par la loi. Vous devez afficher votre numéro ADELI ainsi que votre diplôme reconnu. J\'ajoute toujours ces mentions de façon visible sur le site, ce qui rassure aussi les patients qui veulent vérifier vos qualifications.',
  },
  {
    question: 'Puis-je proposer la téléconsultation sur mon site ?',
    answer: 'Oui, et beaucoup de psychologues le font désormais. J\'intègre la prise de rendez-vous en visio directement dans votre site, via l\'outil de votre choix (Doctolib, Tixeo, ou plateforme dédiée aux psychologues). C\'est un vrai plus pour les patients éloignés ou à mobilité réduite.',
  },
  {
    question: 'Combien coûte un site internet pour un psychologue ?',
    answer: 'Un site vitrine pour psychologue démarre autour de 1 500 euros. Le prix varie selon le nombre de pages, si vous souhaitez un blog ou une page dédiée par thématique (burn-out, anxiété, thérapie de couple). Je propose un devis transparent après un premier échange.',
  },
  {
    question: 'Puis-je afficher des témoignages de patients sur mon site ?',
    answer: 'Le Code de Déontologie des Psychologues est clair : le secret professionnel est absolu et les témoignages patients posent un vrai problème éthique. Je les évite systématiquement. À la place, je mets en avant votre formation, votre parcours, votre approche et des explications pédagogiques de vos méthodes.',
  },
  {
    question: 'Puis-je publier des articles de blog sur des sujets comme l\'anxiété ou le burn-out ?',
    answer: 'Oui, et c\'est même une excellente pratique. Les articles pédagogiques répondent à de vraies questions que se posent vos futurs patients, et ils aident Google à mieux vous référencer. Je peux vous aider à structurer votre rédaction ou vous guider pour écrire vous-même, selon ce que vous préférez.',
  },
  {
    question: 'Travaillez-vous avec des psychologues partout en France ?',
    answer: 'Oui, j\'accompagne des psychologues libéraux partout en France. Je suis basé à Rennes mais tout se fait à distance, avec des visios régulières et un espace de suivi en ligne. Qu\'importe votre ville d\'exercice, le suivi est aussi fluide.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Psychologue', description, '/site-internet-psychologue', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Psychologue', description, '/site-internet-psychologue'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Thérapeute', path: '/site-internet-therapeute' },
      { name: 'Site Internet Psychologue', path: '/site-internet-psychologue' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetPsychologuePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteInternetPsychologueContent faqs={faqs} />
    </>
  )
}

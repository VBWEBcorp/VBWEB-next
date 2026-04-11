import type { Metadata } from 'next'

import { SiteInternetHuissierContent } from './site-internet-huissier-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet huissier (commissaire de justice) : création de site web sérieux et moderne pour constat, recouvrement et signification. Partout en France.'

export const metadata: Metadata = {
  title: 'Site Internet Huissier | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-huissier' },
}

const faqs = [
  {
    question: 'Site internet huissier ou commissaire de justice, quelle différence ?',
    answer: 'Depuis juillet 2022, les huissiers de justice et les commissaires-priseurs judiciaires ont fusionné en une nouvelle profession : le commissaire de justice. Beaucoup de clients tapent encore "huissier" sur Google, c\'est pourquoi je travaille les deux mots-clés en parallèle sur votre site internet huissier.',
  },
  {
    question: 'Quelles règles encadrent le site internet d\'un commissaire de justice ?',
    answer: 'Le commissaire de justice est soumis à des règles déontologiques strictes définies par la Chambre nationale des commissaires de justice. Pas de publicité comparative, pas de démarchage agressif, information vérifiable et mentions obligatoires sur chaque page. Je connais ces contraintes et les applique dès la conception.',
  },
  {
    question: 'Pourquoi moderniser le site internet de mon étude ?',
    answer: 'Parce que les particuliers et les entreprises qui ont besoin d\'un constat, d\'une signification ou d\'un recouvrement commencent leur recherche sur Google. Un site internet huissier moderne, rapide et clair vous permet de capter ces demandes au lieu de les laisser à la concurrence, tout en gardant l\'image sérieuse attendue de la profession.',
  },
  {
    question: 'Mon site sera-t-il conforme au RGPD ?',
    answer: 'Oui. Un commissaire de justice traite des données sensibles (dossiers de recouvrement, pièces de constat, identités). Chaque site que je livre inclut un hébergement en Europe, un formulaire de contact sécurisé, une politique de confidentialité sur mesure et une gestion des cookies conforme aux recommandations CNIL.',
  },
  {
    question: 'Travaillez-vous avec des études partout en France ?',
    answer: 'Oui. Basé à Rennes, j\'accompagne des commissaires de justice partout en France, en distanciel. Les échanges se font en visioconférence, les livrables sont validés à votre rythme, et le suivi est totalement transparent, quel que soit votre ressort territorial.',
  },
  {
    question: 'Quel budget pour un site internet de commissaire de justice ?',
    answer: 'Un site d\'étude démarre autour de 2 800 euros. Le tarif varie selon le nombre de services à présenter (constat, recouvrement, signification, ventes aux enchères), l\'intégration d\'un formulaire de demande de devis et la présence d\'un espace client sécurisé. Devis gratuit après un premier échange.',
  },
  {
    question: 'Peut-on intégrer une demande de constat en ligne sur le site ?',
    answer: 'Oui. J\'ajoute un formulaire de demande de constat en ligne, avec champs adaptés à votre pratique (type de constat, urgence, pièces jointes). Les demandes arrivent directement dans votre boîte mail, sécurisées et prêtes à être traitées.',
  },
  {
    question: 'Le site peut-il aider à développer l\'activité de recouvrement ?',
    answer: 'Oui, clairement. J\'optimise votre site sur les requêtes liées au recouvrement amiable et judiciaire (recouvrement de créances, impayés, injonction de payer). Ces mots-clés sont tapés par des dirigeants d\'entreprise qui cherchent une solution rapide, et un bon référencement vous met en première ligne.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Huissier', description, '/site-internet-huissier', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Huissier', description, '/site-internet-huissier'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Avocat', path: '/site-internet-avocat' },
      { name: 'Site Internet Huissier', path: '/site-internet-huissier' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetHuissierPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteInternetHuissierContent faqs={faqs} />
    </>
  )
}

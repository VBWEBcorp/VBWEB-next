import type { Metadata } from 'next'

import { SiteInternetProfessionnelDeSanteContent } from './site-internet-professionnel-de-sante-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Création de site internet professionnel de santé, partout en France. Un site conforme au RGPD santé et au code de déontologie, optimisé SEO pour que vos patients vous trouvent. Victor Béasse, +150 sites créés.'

export const metadata: Metadata = {
  title: 'Site Internet Professionnel de Santé | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-professionnel-de-sante' },
}

const faqs = [
  {
    question: 'Un site internet est-il autorisé pour un professionnel de santé ?',
    answer: 'Oui, dans la majorité des cas. Depuis quelques années, les ordres professionnels (médecins, chirurgiens-dentistes, sages-femmes) autorisent la communication en ligne, à condition qu\'elle reste informative et non publicitaire. Je construis des sites qui respectent strictement ces règles : pas de comparatif, pas d\'allégation de supériorité, juste une présentation claire de votre cabinet.',
  },
  {
    question: 'Comment un site internet professionnel de santé respecte-t-il le RGPD ?',
    answer: 'Les données de santé sont considérées comme sensibles. Votre site doit donc proposer une bannière de consentement, une politique de confidentialité détaillée et, si vous recueillez des informations patients, un hébergement certifié HDS (Hébergeur de Données de Santé). Je vous accompagne sur ces points et je vous oriente vers les bons prestataires.',
  },
  {
    question: 'Combien coûte un site internet pour un cabinet médical ?',
    answer: 'Un site vitrine pour cabinet médical démarre autour de 1 800 euros. Le prix varie selon le nombre de praticiens, l\'intégration d\'un agenda en ligne et les contenus à rédiger. Je propose un devis transparent après un premier échange pour bien comprendre les besoins du cabinet.',
  },
  {
    question: 'Puis-je intégrer Doctolib ou Maiia sur mon site ?',
    answer: 'Oui, c\'est même recommandé. J\'intègre le bouton ou le widget de prise de rendez-vous directement dans votre site, de manière fluide. Les patients réservent en ligne sans quitter votre page, et vous gardez votre agenda centralisé sur l\'outil que vous utilisez déjà.',
  },
  {
    question: 'Comment apparaître dans les résultats "médecin près de chez moi" ?',
    answer: 'Le référencement local repose sur trois piliers : une fiche Google Business Profile bien optimisée, un site avec des mentions claires de votre ville et vos spécialités, et des liens depuis des annuaires professionnels reconnus. Je m\'occupe de l\'ensemble pour que votre cabinet remonte dans les recherches locales.',
  },
  {
    question: 'Que puis-je écrire sur mon site sans enfreindre le code de déontologie ?',
    answer: 'Vous pouvez présenter votre parcours, vos diplômes, vos domaines d\'activité, les modalités pratiques (horaires, accès, modes de paiement). Ce que vous ne pouvez pas faire : vous comparer à d\'autres confrères, laisser entendre une supériorité, promettre un résultat. Je rédige toujours en respectant ces limites, et tout est validé avec vous avant publication.',
  },
  {
    question: 'Puis-je mettre en avant des avis de patients ?',
    answer: 'Pour les professions réglementées, l\'affichage de témoignages patients est généralement proscrit par le code de déontologie. À la place, je mets en avant votre parcours, vos formations complémentaires, votre approche clinique. C\'est souvent ce qui rassure le plus les patients, et c\'est parfaitement conforme aux règles de l\'Ordre.',
  },
  {
    question: 'Travaillez-vous avec des cabinets médicaux partout en France ?',
    answer: 'Oui, j\'accompagne des cabinets médicaux, des maisons de santé et des praticiens libéraux partout en France. Je suis basé à Rennes mais la majorité du travail se fait à distance, avec des visios régulières et un espace de suivi en ligne. La distance n\'a jamais été un frein sur mes projets.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Professionnel de Santé', description, '/site-internet-professionnel-de-sante', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Professionnel de Santé', description, '/site-internet-professionnel-de-sante'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Thérapeute', path: '/site-internet-therapeute' },
      { name: 'Site Internet Professionnel de Santé', path: '/site-internet-professionnel-de-sante' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetProfessionnelDeSantePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteInternetProfessionnelDeSanteContent faqs={faqs} />
    </>
  )
}

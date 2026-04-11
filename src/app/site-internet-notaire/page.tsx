import type { Metadata } from 'next'

import { SiteInternetNotaireContent } from './site-internet-notaire-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet notaire : création de site web institutionnel, conforme, optimisé pour l\'immobilier, la succession et la donation. Intervention partout en France.'

export const metadata: Metadata = {
  title: 'Site Internet Notaire | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-notaire' },
}

const faqs = [
  {
    question: 'Un site internet notaire a-t-il des obligations spécifiques ?',
    answer: 'Oui. Le notaire est un officier public, et son site doit refléter cette qualité. Il est encadré par les règles du Conseil supérieur du notariat : pas de publicité comparative, pas de démarchage, information loyale et vérifiable. Je connais ces règles et je les applique dès la conception du site.',
  },
  {
    question: 'Pourquoi un notaire a-t-il besoin d\'un site internet aujourd\'hui ?',
    answer: 'Parce que les clients potentiels commencent leur recherche sur Google avant même de prendre contact avec une étude. Un site internet notaire bien référencé capte les recherches autour de l\'immobilier, de la succession, de la donation ou du contrat de mariage, et transforme ces visiteurs en rendez-vous à l\'étude.',
  },
  {
    question: 'Le site respectera-t-il la confidentialité et le RGPD ?',
    answer: 'Totalement. Un notaire traite des données patrimoniales extrêmement sensibles. Chaque site internet notaire que je livre inclut un hébergement en Europe, un formulaire de contact sécurisé, une politique de confidentialité détaillée, et une gestion des cookies conforme à la CNIL.',
  },
  {
    question: 'Travaillez-vous avec des études notariales partout en France ?',
    answer: 'Oui. Je suis basé à Rennes mais j\'accompagne des études partout en France, en distanciel. Les points d\'avancement se font en visioconférence, et les livrables sont validés à votre rythme. Paris, Lyon, Nantes, Bordeaux, Montpellier : la méthode est la même.',
  },
  {
    question: 'Quel budget prévoir pour un site internet d\'étude notariale ?',
    answer: 'Un site vitrine notarial démarre autour de 3 000 euros. Le tarif dépend du nombre de notaires associés à présenter, des outils intégrés (simulateur de frais, prise de rendez-vous) et de la présence ou non d\'un blog d\'actualités juridiques. Je vous remets un devis précis après un premier échange.',
  },
  {
    question: 'Peut-on intégrer un simulateur de frais de notaire sur le site ?',
    answer: 'Oui, c\'est même un très bon levier SEO. Un simulateur de frais de notaire attire énormément de recherches et retient les visiteurs sur votre site, ce qui améliore votre visibilité sur Google. Je peux l\'intégrer directement dans votre site, avec un design aux couleurs de l\'étude.',
  },
  {
    question: 'Comment présenter plusieurs notaires associés sur le site ?',
    answer: 'Chaque notaire associé dispose de sa propre fiche : photo professionnelle, parcours, domaines d\'intervention (immobilier, famille, entreprise). Cette organisation rassure les clients et permet à chaque notaire d\'être trouvé individuellement sur Google.',
  },
  {
    question: 'Le site peut-il mettre en valeur les biens immobiliers de l\'étude ?',
    answer: 'Oui. Si votre étude exerce la négociation immobilière, j\'intègre une section dédiée avec les biens à la vente, connectée à votre logiciel métier si besoin. C\'est un vrai canal d\'acquisition supplémentaire, en complément des portails classiques.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Notaire', description, '/site-internet-notaire', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Notaire', description, '/site-internet-notaire'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Avocat', path: '/site-internet-avocat' },
      { name: 'Site Internet Notaire', path: '/site-internet-notaire' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetNotairePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteInternetNotaireContent faqs={faqs} />
    </>
  )
}

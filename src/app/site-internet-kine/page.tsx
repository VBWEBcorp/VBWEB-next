import type { Metadata } from 'next'

import { SiteInternetKineContent } from './site-internet-kine-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Création de site internet kiné, partout en France. Un site clair pour présenter vos spécialités, faciliter la prise de rendez-vous et apparaître dans les recherches "kiné près de chez moi". Victor Béasse, +150 sites créés.'

export const metadata: Metadata = {
  title: 'Site Internet Kiné | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-kine' },
}

const faqs = [
  {
    question: 'Pourquoi un site internet kiné change-t-il vraiment quelque chose ?',
    answer: 'Aujourd\'hui, quand un patient cherche un kiné, il tape "kiné près de chez moi" ou "kinésithérapeute" suivi d\'une spécialité. S\'il ne trouve pas votre cabinet dans les premiers résultats, il prend rendez-vous ailleurs. Un site bien construit vous permet d\'apparaître, de présenter votre approche et d\'ouvrir vos créneaux en ligne.',
  },
  {
    question: 'Puis-je présenter mes spécialités (sport, périnée, respiratoire) sur le site ?',
    answer: 'Oui, et c\'est même recommandé. Préciser vos domaines d\'expertise (kiné du sport, rééducation périnéale, kinésithérapie respiratoire, méthode Mézières) permet aux patients de savoir si vous correspondez à leurs besoins. Cela améliore aussi votre référencement sur des recherches plus précises comme "kiné périnée" dans votre ville.',
  },
  {
    question: 'Comment faire apparaître mon cabinet dans les résultats "kiné près de chez moi" ?',
    answer: 'Le référencement local repose sur trois leviers : une fiche Google Business Profile bien optimisée, un site mentionnant clairement votre ville et vos spécialités, et des signaux de confiance (cohérence des informations entre annuaires, avis Google maîtrisés). Je m\'occupe de l\'ensemble, quel que soit l\'endroit où vous exercez en France.',
  },
  {
    question: 'Peut-on intégrer Doctolib ou Maiia pour la prise de rendez-vous ?',
    answer: 'Oui, bien sûr. J\'intègre directement le widget ou le lien de prise de rendez-vous dans votre site, sans rupture de parcours. Vous gardez votre agenda Doctolib ou Maiia comme outil principal, et le site joue son rôle de vitrine professionnelle.',
  },
  {
    question: 'Combien coûte un site internet pour un cabinet de kinésithérapie ?',
    answer: 'Un site vitrine pour kiné démarre autour de 1 500 euros, un peu plus pour un cabinet à plusieurs praticiens. Le prix dépend du nombre de pages, du travail de rédaction et de l\'intégration des outils métier. Je propose toujours un devis transparent après un premier échange.',
  },
  {
    question: 'Mon site respectera-t-il les règles de l\'Ordre des kinés ?',
    answer: 'Oui. L\'Ordre National des Masseurs-Kinésithérapeutes autorise la communication en ligne à condition qu\'elle reste informative, loyale et sans caractère commercial. Je connais bien ces règles : pas de promesse de guérison, pas de comparaison avec d\'autres confrères, présentation factuelle de votre parcours.',
  },
  {
    question: 'Puis-je ajouter un blog ou des conseils santé sur mon site ?',
    answer: 'Oui, et c\'est un excellent moyen d\'être mieux référencé. Vous pouvez publier des articles sur des sujets comme "que faire en cas de torticolis" ou "comment prévenir les douleurs de dos". C\'est utile pour vos patients et Google apprécie les contenus qui répondent à de vraies questions.',
  },
  {
    question: 'Travaillez-vous avec des kinés partout en France ?',
    answer: 'Oui, j\'accompagne des cabinets de kinésithérapie partout en France. Je suis basé à Rennes, mais la majorité du travail se fait à distance avec des points visios réguliers. Que vous exerciez à Paris, Bordeaux, Lyon ou dans une petite commune rurale, le process reste le même.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Kiné', description, '/site-internet-kine', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Kiné', description, '/site-internet-kine'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Thérapeute', path: '/site-internet-therapeute' },
      { name: 'Site Internet Kiné', path: '/site-internet-kine' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetKinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteInternetKineContent faqs={faqs} />
    </>
  )
}

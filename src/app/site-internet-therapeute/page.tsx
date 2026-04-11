import type { Metadata } from 'next'

import { SiteInternetTherapeuteContent } from './site-internet-therapeute-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Création de site internet thérapeute, partout en France. Un site clair, rassurant et optimisé SEO pour présenter votre pratique et faciliter la prise de rendez-vous. Victor Béasse, +150 sites créés.'

export const metadata: Metadata = {
  title: 'Site Internet Thérapeute | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-therapeute' },
}

const faqs = [
  {
    question: 'Pourquoi un site internet thérapeute est-il devenu indispensable aujourd\'hui ?',
    answer: 'La grande majorité des personnes en recherche d\'un thérapeute passent d\'abord par Google. Avant même de prendre rendez-vous, elles veulent comprendre votre approche, lire votre parcours et se rassurer. Sans site internet, vous laissez ce premier contact à vos annuaires ou à vos confrères. Un site clair et professionnel vous permet de présenter votre pratique à votre manière, partout en France.',
  },
  {
    question: 'Combien coûte la création d\'un site internet pour thérapeute ?',
    answer: 'Un site vitrine pour thérapeute démarre autour de 1 500 euros. Le tarif dépend du nombre de pages, de l\'intégration d\'un module de prise de rendez-vous et du travail de rédaction. Je propose toujours un devis transparent après un premier échange pour bien comprendre votre pratique et vos besoins.',
  },
  {
    question: 'Peut-on intégrer Doctolib, Calendly ou un autre outil de prise de rendez-vous ?',
    answer: 'Oui, absolument. J\'intègre votre agenda existant (Doctolib, Crénolibre, Calendly, Google Agenda) directement dans votre site. Les patients prennent rendez-vous en quelques clics, sans quitter votre page. C\'est souvent l\'une des fonctionnalités qui fait le plus gagner de temps au quotidien.',
  },
  {
    question: 'Est-ce que mon site sera conforme au RGPD santé ?',
    answer: 'Oui. Je porte une attention particulière au RGPD, encore plus quand il touche au domaine de la santé. Mentions légales, politique de confidentialité, bannière de consentement, hébergement adapté aux données sensibles si nécessaire : tout est pris en charge. Vous restez serein sur le plan juridique.',
  },
  {
    question: 'Puis-je publier des témoignages de patients sur mon site ?',
    answer: 'C\'est un sujet sensible. Certaines professions réglementées l\'interdisent ou l\'encadrent strictement via leur code de déontologie. Pour d\'autres thérapeutes non réglementés, c\'est possible mais avec prudence. On en discute ensemble en fonction de votre profession, et je vous aide à trouver la bonne formule pour rassurer sans jamais enfreindre les règles.',
  },
  {
    question: 'Vais-je pouvoir modifier moi-même mon site après sa mise en ligne ?',
    answer: 'Oui. Je construis votre site sur une interface simple à prendre en main. Vous pouvez modifier vos textes, vos horaires, ajouter un article de blog ou mettre à jour vos tarifs sans toucher au code. Je vous forme en visio le jour de la livraison et je reste disponible pour toute question.',
  },
  {
    question: 'Combien de temps faut-il pour créer un site thérapeute de A à Z ?',
    answer: 'En général entre 3 et 6 semaines, selon la disponibilité de vos contenus (photos, textes, témoignages) et le nombre d\'allers-retours. Si vous êtes pressé, je peux parfois livrer plus vite. L\'important pour moi, c\'est que le site vous ressemble vraiment.',
  },
  {
    question: 'Travaillez-vous avec des thérapeutes partout en France ?',
    answer: 'Oui, j\'accompagne des thérapeutes dans toute la France. Je suis basé à Rennes, et la majorité des projets se déroule à distance : visios, partage d\'écran, espace de suivi en ligne. La proximité physique n\'est pas un prérequis, ce qui compte c\'est la qualité de l\'échange humain.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Thérapeute', description, '/site-internet-therapeute', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Thérapeute', description, '/site-internet-therapeute'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Thérapeute', path: '/site-internet-therapeute' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetTherapeutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteInternetTherapeuteContent faqs={faqs} />
    </>
  )
}

import type { Metadata } from 'next'

import { SiteInternetAvocatContent } from './site-internet-avocat-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet avocat : création de site web sérieux, conforme à la déontologie CNB et optimisé SEO. Intervention partout en France. 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Site Internet Avocat | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-avocat' },
}

const faqs = [
  {
    question: 'Un site internet avocat doit-il respecter des règles particulières ?',
    answer: 'Oui. La création d\'un site internet avocat est encadrée par le Règlement intérieur national du CNB (RIN). Le site doit rester sobre, véridique, ne contenir aucune mention comparative ni témoignage client nominatif, et afficher clairement les informations obligatoires (barreau, numéro de toque, assurance RCP). Je connais ces contraintes et je les intègre dès la maquette.',
  },
  {
    question: 'Comment un site internet peut-il apporter des clients à un avocat ?',
    answer: 'La majorité des justiciables cherchent aujourd\'hui un avocat sur Google avant de prendre rendez-vous. Un site bien référencé sur des requêtes comme "avocat divorce" ou "avocat droit du travail" génère des contacts qualifiés chaque semaine. Le rôle du site est de présenter vos domaines de compétence, de rassurer, et de faciliter la prise de contact.',
  },
  {
    question: 'Est-ce que mon site d\'avocat sera conforme au RGPD ?',
    answer: 'Oui, toujours. Chaque site internet d\'avocat que je livre inclut une bannière cookies conforme, une politique de confidentialité adaptée à votre cabinet, un formulaire de contact sécurisé, et un hébergement en Europe. C\'est non négociable, surtout pour une profession qui traite des données sensibles.',
  },
  {
    question: 'Intervenez-vous partout en France pour la création de sites d\'avocats ?',
    answer: 'Oui, j\'accompagne des avocats partout en France. Je suis basé à Rennes mais le travail se fait à distance, avec des points réguliers en visioconférence. Paris, Lyon, Bordeaux, Marseille, Lille, Nantes : la distance n\'est pas un frein, la méthode reste la même.',
  },
  {
    question: 'Combien coûte la création d\'un site internet pour un avocat ?',
    answer: 'Un site vitrine d\'avocat démarre à partir de 2 500 euros. Le tarif dépend du nombre de pages, des domaines de compétence à présenter, et de la présence ou non d\'un blog juridique. Je vous remets un devis détaillé après un premier échange gratuit.',
  },
  {
    question: 'Puis-je publier un blog juridique sur mon site d\'avocat ?',
    answer: 'Oui, et c\'est même fortement recommandé. Un blog juridique bien tenu (articles sur l\'actualité du droit, décryptages de réformes, réponses aux questions fréquentes) renforce votre expertise aux yeux de Google et des prospects. Je vous conseille sur les sujets qui attirent du trafic qualifié.',
  },
  {
    question: 'Mon image doit rester sérieuse, est-ce compatible avec un site moderne ?',
    answer: 'Tout à fait. Un site d\'avocat moderne n\'est pas un site tape-à-l\'œil. Typographie classique, palette sobre, photos professionnelles, structure claire : le résultat inspire confiance tout en étant agréable à consulter sur mobile. La sobriété n\'empêche pas la qualité technique.',
  },
  {
    question: 'Puis-je confier la prise de rendez-vous en ligne à mon site ?',
    answer: 'Oui. J\'intègre un module de prise de rendez-vous (Calendly, Doctolib Pro ou solution sur mesure) qui permet à vos clients de réserver un créneau sans vous appeler. Cela vous fait gagner du temps et évite les allers-retours téléphoniques.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Avocat', description, '/site-internet-avocat', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Avocat', description, '/site-internet-avocat'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Avocat', path: '/site-internet-avocat' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetAvocatPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteInternetAvocatContent faqs={faqs} />
    </>
  )
}

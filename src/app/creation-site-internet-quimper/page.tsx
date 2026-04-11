import type { Metadata } from 'next'

import { CreationSiteInternetQuimperContent } from './creation-site-internet-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Création site internet Quimper : sites web performants et optimisés SEO dès la conception. Un site pensé pour faire venir vos clients depuis Google. Devis gratuit.'

export const metadata: Metadata = {
  title: 'Création Site Internet à Quimper | Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/creation-site-internet-quimper' },
}

const faqs = [
  {
    question: 'Quel budget pour la création d\'un site internet à Quimper ?',
    answer: 'Pour un site vitrine à Quimper, le budget démarre autour de 1 800 euros. Pour un site plus large avec catalogue, réservation ou espace client, comptez entre 4 000 et 8 000 euros. Le devis est toujours détaillé et gratuit.',
  },
  {
    question: 'Combien de temps entre la signature et la mise en ligne ?',
    answer: 'Trois à cinq semaines pour un site vitrine complet. Les grandes étapes (cadrage, maquettes, développement, optimisation SEO) sont planifiées dès le départ pour que vous sachiez toujours où on en est.',
  },
  {
    question: 'Mon activité est très locale, pourquoi investir dans un site ?',
    answer: 'Parce que même les clients locaux tapent sur Google avant de vous appeler. À Quimper, une activité qui n\'apparaît pas dans les premiers résultats quand on cherche "électricien Quimper" ou "coiffeur Concarneau" passe à côté d\'une vraie demande.',
  },
  {
    question: 'Vous créez des sites pour des entreprises hors Quimper ville ?',
    answer: 'Oui, régulièrement. J\'accompagne des professionnels à Quimper, Ergué-Gabéric, Pluguffan, Fouesnant, Bénodet et Concarneau. La logique est la même : un site qui attire et qui convertit, quel que soit le point de départ.',
  },
  {
    question: 'Le site sera-t-il vraiment rapide sur mobile ?',
    answer: 'Oui. J\'utilise Next.js et des pratiques modernes pour que les pages se chargent en moins d\'une seconde, même en 4G. Dans une ville comme Quimper où la majorité des recherches se font depuis un téléphone, c\'est indispensable.',
  },
  {
    question: 'Est-ce que je peux voir des exemples de sites que vous avez déjà créés ?',
    answer: 'Bien sûr. Je vous envoie un portfolio adapté à votre secteur dès qu\'on se parle. Chaque projet est différent mais la logique reste la même : clarté, performance et SEO intégré.',
  },
  {
    question: 'Que se passe-t-il si je veux gérer mon site en autonomie après ?',
    answer: 'Tous les sites sont livrés avec un back-office simple. Vous pouvez publier, modifier, ajouter des pages ou des photos sans toucher au code. Je forme l\'équipe à l\'utilisation avant la mise en ligne.',
  },
  {
    question: 'Est-ce que vous gérez aussi la maintenance après ?',
    answer: 'Oui, je propose un forfait mensuel qui inclut sécurité, sauvegardes, mises à jour et petites modifications régulières. Vous n\'avez rien à gérer techniquement de votre côté.',
  },
]

const areaServed = [
  { '@type': 'City', name: 'Quimper' },
  { '@type': 'AdministrativeArea', name: 'Finistère' },
  { '@type': 'AdministrativeArea', name: 'Bretagne' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd(
      'Création Site Internet à Quimper',
      description,
      '/creation-site-internet-quimper',
      ['h1', '.hero-description', '.faq-answer']
    ),
    serviceJsonLd(
      'Création de site internet à Quimper',
      description,
      '/creation-site-internet-quimper',
      areaServed
    ),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Création Site Internet Quimper', path: '/creation-site-internet-quimper' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function CreationSiteInternetQuimperPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CreationSiteInternetQuimperContent faqs={faqs} />
    </>
  )
}

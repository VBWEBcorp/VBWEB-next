import type { Metadata } from 'next'

import { CreationSiteInternetNantesContent } from './creation-site-internet-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Création site internet Nantes : sites web performants, optimisés SEO dès la conception. Un site qui attire vos clients via Google dans le Grand Ouest. Devis gratuit.'

export const metadata: Metadata = {
  title: 'Création Site Internet à Nantes | Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/creation-site-internet-nantes' },
}

const faqs = [
  {
    question: 'Quel budget prévoir pour la création d\'un site internet à Nantes ?',
    answer: 'Un site vitrine sur mesure à Nantes démarre autour de 2 000 euros. Pour un site e-commerce, une application métier ou une plateforme plus complexe, comptez entre 5 000 et 12 000 euros. Le devis est chiffré, détaillé et gratuit.',
  },
  {
    question: 'Combien de temps pour avoir un site web en ligne à Nantes ?',
    answer: 'Trois à cinq semaines pour un site vitrine complet, six à douze semaines pour un projet plus ambitieux. Les étapes sont planifiées dès la première réunion pour que vous sachiez toujours où on en est.',
  },
  {
    question: 'Le marché nantais est compétitif, comment sortir du lot ?',
    answer: 'Justement en construisant un site pensé SEO dès la conception. Un site rapide, structuré, avec un contenu ciblé sur vos mots-clés, sort plus facilement sur "entreprise Nantes" ou "avocat Rezé" que la majorité des sites concurrents. La technique fait une vraie différence.',
  },
  {
    question: 'Vous intervenez aussi en périphérie nantaise ?',
    answer: 'Oui, souvent. J\'accompagne des entreprises à Nantes, Saint-Herblain, Rezé, Orvault, Carquefou et Saint-Nazaire. Les rendez-vous en visio permettent de travailler rapidement, avec des points physiques possibles quand le projet le mérite.',
  },
  {
    question: 'Mon site sera-t-il compatible avec tous les écrans ?',
    answer: 'Oui. Chaque site est développé mobile-first, puisque la majorité des visiteurs nantais arrivent depuis un smartphone. L\'affichage reste impeccable sur ordinateur, tablette et téléphone, sans concession sur la vitesse.',
  },
  {
    question: 'Puis-je garder la main sur le contenu de mon site après la livraison ?',
    answer: 'Bien sûr. Je livre chaque site avec un espace d\'édition simple où vous ajoutez des pages, modifiez vos textes, publiez des articles. Je forme votre équipe à l\'utilisation pour que vous soyez autonome dès le premier jour.',
  },
  {
    question: 'Est-ce que vous gérez aussi le référencement après la mise en ligne ?',
    answer: 'Oui. Après la livraison, je propose un accompagnement SEO mensuel pour continuer à faire progresser votre site. C\'est souvent le meilleur moyen de transformer l\'investissement initial en vraie acquisition client sur Google.',
  },
  {
    question: 'Vous utilisez quelle technologie pour développer les sites ?',
    answer: 'Next.js et React, pour la plupart des projets. Ces technologies offrent la meilleure combinaison vitesse, flexibilité et SEO technique. Ce sont celles utilisées par les plus grands sites au monde, et elles font vraiment la différence à Nantes sur des marchés concurrentiels.',
  },
]

const areaServed = [
  { '@type': 'City', name: 'Nantes' },
  { '@type': 'AdministrativeArea', name: 'Loire-Atlantique' },
  { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd(
      'Création Site Internet à Nantes',
      description,
      '/creation-site-internet-nantes',
      ['h1', '.hero-description', '.faq-answer']
    ),
    serviceJsonLd(
      'Création de site internet à Nantes',
      description,
      '/creation-site-internet-nantes',
      areaServed
    ),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Création Site Internet Nantes', path: '/creation-site-internet-nantes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function CreationSiteInternetNantesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CreationSiteInternetNantesContent faqs={faqs} />
    </>
  )
}

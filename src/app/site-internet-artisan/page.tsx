import type { Metadata } from 'next'

import { SiteInternetArtisanContent } from './site-internet-artisan-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet artisan : création de sites web optimisés SEO pour les artisans du bâtiment partout en France. Plus de clients grâce à Google, devis clairs, photos de chantiers mises en valeur.'

export const metadata: Metadata = {
  title: 'Site Internet Artisan | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-artisan' },
}

const faqs = [
  {
    question: 'Pourquoi un artisan a-t-il besoin d\'un site internet aujourd\'hui ?',
    answer: 'Parce que vos clients vous cherchent sur Google avant de vous appeler. Une personne qui a une fuite, un tableau électrique à refaire ou une toiture à reprendre tape le besoin sur son téléphone. Sans site internet bien référencé, vous êtes invisible au moment où le client est prêt à signer. Un site pensé pour votre métier, c\'est le moyen le plus simple de capter ces demandes partout en France.',
  },
  {
    question: 'Combien coûte un site internet pour artisan ?',
    answer: 'Un site vitrine complet pour artisan démarre autour de 1 500 euros, incluant la création, l\'hébergement la première année, les photos mises en valeur et l\'optimisation SEO de base. Chaque devis est clair, sans ligne cachée, et je vous explique ce que vous payez et pourquoi.',
  },
  {
    question: 'Mon site va-t-il apparaître sur Google ?',
    answer: 'Oui, c\'est le but. Je construis chaque site pour qu\'il soit trouvable sur Google dès la mise en ligne. Structure propre, textes pensés pour vos mots-clés, pages dédiées aux villes où vous intervenez, fiche Google Business Profile optimisée. Les premiers résultats arrivent généralement entre 2 et 4 mois pour les requêtes locales.',
  },
  {
    question: 'Je ne suis pas à Rennes, pouvez-vous travailler avec moi ?',
    answer: 'Oui, j\'accompagne des artisans partout en France. La majorité du travail se fait à distance : on échange par téléphone, en visio, par messages. Vous m\'envoyez vos photos de chantiers et les infos sur vos interventions, je m\'occupe du reste.',
  },
  {
    question: 'Je n\'ai pas de photos professionnelles, c\'est un problème ?',
    answer: 'Non. Vos photos de chantiers prises au smartphone font très bien l\'affaire, à condition qu\'on voie le travail. Je les retravaille, je les optimise pour le web et je les intègre de façon à mettre votre savoir-faire en valeur. Les clients veulent voir vos réalisations, pas des photos de stock.',
  },
  {
    question: 'Combien de pages doit avoir un site d\'artisan ?',
    answer: 'En général entre 6 et 15 pages : accueil, présentation, vos prestations détaillées une par une, réalisations, zone d\'intervention, contact, avis clients. Ce qui compte, c\'est qu\'il y ait une page par service important. Un plombier qui fait du dépannage et de la salle de bain doit avoir une page pour chaque, pas tout mélangé.',
  },
  {
    question: 'Est-ce que vous gérez la fiche Google Business Profile ?',
    answer: 'Oui, la fiche Google est indissociable du site pour un artisan. Je l\'optimise en même temps que la mise en ligne du site : catégories, zone d\'intervention, photos, horaires, appel à laisser des avis. C\'est souvent la fiche qui déclenche le premier appel, pas le site directement.',
  },
  {
    question: 'Et après la mise en ligne, je suis tout seul ?',
    answer: 'Non. Je propose un suivi mensuel si vous le souhaitez : mises à jour de contenu, nouvelles photos, suivi des positions Google, réponse aux avis. Sinon, vous gardez la main et vous me contactez ponctuellement quand vous avez besoin. Le site vous appartient, pas de location.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Artisan', description, '/site-internet-artisan', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Artisan', description, '/site-internet-artisan'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Artisan', path: '/site-internet-artisan' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetArtisanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteInternetArtisanContent faqs={faqs} />
    </>
  )
}

import type { Metadata } from 'next'

import { ReferencementNaturelQuimperContent } from './referencement-naturel-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Référencement naturel à Quimper : rendez votre site visible sur Google et générez plus de contacts dans le Finistère. Audit gratuit, accompagnement mensuel. 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Référencement Naturel à Quimper | Expert SEO - VBWEB',
  description,
  alternates: { canonical: '/referencement-naturel-quimper' },
}

const faqs = [
  {
    question: 'Qu\'apporte le référencement naturel à une entreprise basée à Quimper ?',
    answer: 'Le référencement naturel fait remonter votre site dans les résultats Google quand vos clients potentiels cherchent vos services. Pour une entreprise quimpéroise, c\'est la possibilité d\'être trouvée par des personnes prêtes à acheter ou à prendre contact, sans payer de publicité à chaque clic.',
  },
  {
    question: 'Combien faut-il investir par mois en référencement naturel à Quimper ?',
    answer: 'Un accompagnement mensuel commence à 500 euros par mois. Le budget dépend de votre secteur d\'activité et du niveau de concurrence sur vos mots-clés. L\'audit gratuit que je propose permet de calibrer précisément la prestation avant tout engagement.',
  },
  {
    question: 'Comment fonctionne le référencement naturel, en termes simples ?',
    answer: 'Quand vous cherchez quelque chose sur Google, les résultats affichés ne sont pas là par hasard. Google classe les sites selon leur pertinence, leur qualité technique et leur notoriété. Le référencement naturel, c\'est le travail qui améliore ces trois critères pour que votre site remonte dans le classement.',
  },
  {
    question: 'Le référencement naturel est-il utile pour les artisans du Finistère ?',
    answer: 'Les artisans sont parmi les profils qui en bénéficient le plus. Quand quelqu\'un tape "couvreur Quimper" ou "plombier Fouesnant" sur Google, il a un besoin immédiat. Le référencement naturel vous met devant ces demandes concrètes, sans budget publicitaire récurrent.',
  },
  {
    question: 'En combien de temps les premiers résultats sont-ils visibles ?',
    answer: 'Généralement entre 3 et 6 mois. Les requêtes locales comme "dentiste Quimper" ou "garage Concarneau" progressent souvent plus vite car la concurrence en ligne est plus modérée. Chaque mois de travail consolide les acquis du mois précédent.',
  },
  {
    question: 'Pourquoi choisir le référencement naturel plutôt que la publicité Google ?',
    answer: 'La publicité Google vous donne de la visibilité tant que vous payez. Le référencement naturel construit une visibilité pérenne : le trafic continue d\'arriver même quand vous n\'investissez plus activement. Sur 12 mois, le coût par client acquis est nettement inférieur avec le référencement naturel.',
  },
  {
    question: 'Comment se déroule un accompagnement en référencement naturel ?',
    answer: 'On commence par un audit complet de votre site et de votre positionnement. J\'établis un plan d\'action avec les priorités. Chaque mois, je travaille les optimisations prévues et vous recevez un rapport avec l\'évolution de vos positions, votre trafic et les contacts générés.',
  },
  {
    question: 'Intervenez-vous aussi autour de Quimper dans le Finistère ?',
    answer: 'J\'accompagne des entreprises à Ergué-Gabéric, Pluguffan, Fouesnant, Bénodet, Concarneau et dans tout le Finistère Sud. Je travaille aussi à Brest, Lorient et Rennes. Le référencement naturel se prête très bien au travail à distance, avec des points réguliers en visio.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Référencement Naturel à Quimper', description, '/referencement-naturel-quimper', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Référencement Naturel à Quimper', description, '/referencement-naturel-quimper', [
      { '@type': 'City', name: 'Quimper' },
      { '@type': 'AdministrativeArea', name: 'Finistère' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Référencement Naturel Quimper', path: '/referencement-naturel-quimper' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function ReferencementNaturelQuimperPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReferencementNaturelQuimperContent faqs={faqs} />
    </>
  )
}

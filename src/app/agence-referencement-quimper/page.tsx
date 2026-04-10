import type { Metadata } from 'next'

import { AgenceReferencementQuimperContent } from './agence-referencement-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Vous cherchez une agence de référencement à Quimper ? Expert SEO en Bretagne, j\'aide les entreprises du Finistère sud à se positionner sur Google. Audit gratuit, 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Agence de Référencement à Quimper | Expert SEO - VBWEB',
  description,
  alternates: { canonical: '/agence-referencement-quimper' },
}

const faqs = [
  {
    question: 'Qu\'est-ce que le référencement apporte concrètement à une entreprise quimpéroise ?',
    answer: 'Le référencement positionne votre site dans les résultats Google quand vos clients potentiels cherchent vos services. Pour une entreprise à Quimper, cela signifie être visible sur des recherches comme "plombier Quimper" ou "restaurant Quimper centre". Plus de visibilité, plus de clients.',
  },
  {
    question: 'Pourquoi un expert indépendant plutôt qu\'une agence de référencement à Quimper ?',
    answer: 'Un expert indépendant vous donne accès à une relation directe et un suivi personnalisé. C\'est moi qui travaille sur votre site, pas un junior ou un stagiaire. Les échanges sont plus fluides, les ajustements plus rapides et la stratégie reste cohérente dans le temps.',
  },
  {
    question: 'Quel budget prévoir pour le référencement d\'un site à Quimper ?',
    answer: 'Un accompagnement mensuel démarre à 500 euros par mois. Le montant varie selon la concurrence dans votre secteur, la taille de votre site et vos objectifs. Je propose un audit gratuit pour évaluer la situation et vous donner un chiffrage adapté.',
  },
  {
    question: 'Le référencement fonctionne-t-il pour les commerces de Quimper centre ?',
    answer: 'Très bien, même. Les commerces du centre-ville de Quimper sont recherchés en permanence sur Google, par les habitants comme par les visiteurs. Le référencement local permet d\'apparaître sur Google et Google Maps quand quelqu\'un cherche vos produits ou services à proximité.',
  },
  {
    question: 'Combien de temps pour obtenir des résultats en référencement à Quimper ?',
    answer: 'Les premières améliorations sont visibles entre 3 et 6 mois. Sur un marché local comme Quimper, la concurrence en ligne est souvent moins rude que dans les grandes villes, ce qui peut accélérer les choses. Le référencement se renforce ensuite avec le temps.',
  },
  {
    question: 'Comment travaillez-vous avec des entreprises à Quimper depuis Rennes ?',
    answer: 'Le référencement se gère à distance pour l\'essentiel : analyses, optimisations, reporting. Pour les échanges stratégiques, je me déplace à Quimper. Je connais bien le sud Finistère et ses dynamiques économiques, ce qui est important pour construire une bonne stratégie.',
  },
  {
    question: 'Le référencement est-il utile pour les entreprises de la faïence et de l\'artisanat à Quimper ?',
    answer: 'Absolument. L\'artisanat quimpérois a une notoriété qui dépasse la Bretagne. Le référencement permet de capter les recherches des acheteurs, qu\'ils soient locaux ou qu\'ils préparent une visite depuis Paris ou ailleurs. C\'est un levier de vente souvent sous-exploité.',
  },
  {
    question: 'Pouvez-vous prendre en charge le référencement d\'un site e-commerce basé à Quimper ?',
    answer: 'Oui, j\'accompagne des sites e-commerce en plus des sites vitrine. La logique est la même : identifier les requêtes de vos clients, optimiser vos pages produits et catégories, et construire votre notoriété en ligne. Les résultats se mesurent en trafic et en ventes.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence de Référencement à Quimper', description, '/agence-referencement-quimper', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence de Référencement à Quimper', description, '/agence-referencement-quimper', [
      { '@type': 'City', name: 'Quimper' },
      { '@type': 'AdministrativeArea', name: 'Finistère' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence Référencement Quimper', path: '/agence-referencement-quimper' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceReferencementQuimperPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceReferencementQuimperContent faqs={faqs} />
    </>
  )
}

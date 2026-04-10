import type { Metadata } from 'next'

import { AgenceReferencementSaintBrieucContent } from './agence-referencement-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Vous cherchez une agence de référencement à Saint-Brieuc ? Expert SEO en Bretagne, j\'accompagne les entreprises des Côtes-d\'Armor pour gagner en visibilité sur Google. Audit gratuit, 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Agence de Référencement à Saint-Brieuc | Expert SEO - VBWEB',
  description,
  alternates: { canonical: '/agence-referencement-saint-brieuc' },
}

const faqs = [
  {
    question: 'Que peut faire une agence de référencement pour mon entreprise à Saint-Brieuc ?',
    answer: 'Le référencement permet à votre site d\'apparaître dans les résultats Google quand vos clients potentiels cherchent vos services à Saint-Brieuc ou dans les Côtes-d\'Armor. Plus de visibilité signifie plus de visites, plus d\'appels et plus de ventes.',
  },
  {
    question: 'Quelle différence entre un expert SEO et une agence de référencement à Saint-Brieuc ?',
    answer: 'Avec un expert indépendant, vous avez un seul interlocuteur qui maîtrise votre dossier. C\'est moi qui analyse, optimise et rapporte les résultats. Les échanges sont directs, les décisions rapides, et il n\'y a pas de sous-traitance cachée.',
  },
  {
    question: 'Quel est le tarif d\'un accompagnement en référencement à Saint-Brieuc ?',
    answer: 'Un suivi mensuel démarre à 500 euros par mois. Le tarif varie en fonction de la taille de votre site, du nombre de mots-clés ciblés et de la concurrence dans votre secteur. L\'audit gratuit permet de cadrer le projet et de vous proposer un devis adapté.',
  },
  {
    question: 'Combien de temps pour voir des résultats en référencement à Saint-Brieuc ?',
    answer: 'Les premières améliorations sont visibles entre 3 et 6 mois. Saint-Brieuc est un marché local où la concurrence en ligne est encore gérable, ce qui permet souvent d\'obtenir des résultats significatifs rapidement. Le travail continue ensuite pour consolider les positions.',
  },
  {
    question: 'Le référencement fonctionne-t-il pour les services et commerces de la baie de Saint-Brieuc ?',
    answer: 'Oui, et c\'est même un terrain très favorable. Les habitants de l\'agglomération briochine cherchent régulièrement des commerces et services sur Google. Le référencement local vous place en tête de ces recherches, sur Google et sur Google Maps.',
  },
  {
    question: 'Comment se passe la collaboration à distance depuis Rennes ?',
    answer: 'Le référencement se gère à distance sans aucun souci : analyses, optimisations, reporting. Rennes est à une heure de Saint-Brieuc, je me déplace pour les rendez-vous en personne quand c\'est nécessaire. Je connais bien les Côtes-d\'Armor et leur tissu économique.',
  },
  {
    question: 'Le référencement naturel est-il compatible avec la publicité Google ?',
    answer: 'Les deux sont complémentaires. Le référencement naturel construit votre visibilité sur le long terme dans les résultats organiques. La publicité Google vous donne une visibilité immédiate mais temporaire. Idéalement, on combine les deux au démarrage puis on réduit progressivement la publicité à mesure que le SEO porte ses fruits.',
  },
  {
    question: 'Mon site est ancien et mal conçu, le référencement peut-il quand même aider ?',
    answer: 'Souvent oui, mais tout dépend de l\'état du site. L\'audit gratuit permet de faire le point. Parfois, quelques optimisations ciblées suffisent. Dans d\'autres cas, une refonte partielle est préférable. Je vous dis clairement ce qui est réaliste et ce qui ne l\'est pas.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence de Référencement à Saint-Brieuc', description, '/agence-referencement-saint-brieuc', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence de Référencement à Saint-Brieuc', description, '/agence-referencement-saint-brieuc', [
      { '@type': 'City', name: 'Saint-Brieuc' },
      { '@type': 'AdministrativeArea', name: 'Côtes-d\'Armor' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence Référencement Saint-Brieuc', path: '/agence-referencement-saint-brieuc' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceReferencementSaintBrieucPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceReferencementSaintBrieucContent faqs={faqs} />
    </>
  )
}

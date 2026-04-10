import type { Metadata } from 'next'

import { AgenceReferencementLorientContent } from './agence-referencement-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Vous cherchez une agence de référencement à Lorient ? Expert SEO en Bretagne, j\'accompagne les entreprises lorientaises pour se positionner sur Google. Audit gratuit, 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Agence de Référencement à Lorient | Expert SEO - VBWEB',
  description,
  alternates: { canonical: '/agence-referencement-lorient' },
}

const faqs = [
  {
    question: 'Que peut apporter une agence de référencement à une entreprise lorientaise ?',
    answer: 'Le référencement vous permet d\'apparaître en haut des résultats Google quand vos clients cherchent vos services à Lorient. Plus de visibilité signifie plus de visites sur votre site, plus d\'appels et plus de clients. C\'est un investissement qui travaille pour vous en continu.',
  },
  {
    question: 'Pourquoi un expert SEO plutôt qu\'une agence de référencement à Lorient ?',
    answer: 'Un expert indépendant vous offre une relation directe, sans intermédiaire. C\'est moi qui analyse votre site, qui définit la stratégie et qui déploie les optimisations. Le suivi est plus réactif, la stratégie plus cohérente, et les coûts sont maîtrisés.',
  },
  {
    question: 'Quel est le coût d\'un accompagnement en référencement à Lorient ?',
    answer: 'L\'accompagnement mensuel commence à 500 euros par mois. Le tarif varie selon la taille de votre site, la concurrence sur vos mots-clés et vos objectifs. Un audit gratuit permet de cadrer le projet et d\'établir un devis précis.',
  },
  {
    question: 'Combien de temps pour voir des résultats en référencement à Lorient ?',
    answer: 'Les premiers résultats se manifestent entre 3 et 6 mois. Le marché lorientais est moins concurrentiel en ligne que les grandes métropoles, ce qui joue en votre faveur. Le référencement est un travail de fond dont les effets se renforcent mois après mois.',
  },
  {
    question: 'Le référencement fonctionne-t-il pour les entreprises liées au nautisme à Lorient ?',
    answer: 'Tout à fait. Lorient a une identité maritime forte : course au large, réparation navale, tourisme portuaire. Ces recherches existent sur Google et le référencement permet de les capter. Que ce soit pour du B2B ou du B2C, la logique est la même.',
  },
  {
    question: 'Comment travaillez-vous avec des entreprises lorientaises depuis Rennes ?',
    answer: 'Le référencement se gère principalement à distance : analyses, optimisations, reporting en ligne. Pour les réunions stratégiques, je me déplace à Lorient. Et surtout, je connais le bassin lorientais et ses dynamiques économiques.',
  },
  {
    question: 'Quelle différence entre référencement naturel et publicité Google ?',
    answer: 'Le référencement naturel positionne votre site dans les résultats organiques de Google, sans payer de clic. La publicité Google (Ads) vous place en haut de page contre un budget quotidien. Le SEO génère des résultats durables, la publicité s\'arrête quand vous coupez le budget.',
  },
  {
    question: 'Mon site existe déjà mais il n\'apparaît pas sur Google, que faire ?',
    answer: 'C\'est un cas très courant. Un site peut être en ligne sans être bien référencé. L\'audit gratuit permet d\'identifier les blocages : problème technique, contenu insuffisant, manque de notoriété. Ensuite, on travaille les priorités pour améliorer votre positionnement.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence de Référencement à Lorient', description, '/agence-referencement-lorient', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence de Référencement à Lorient', description, '/agence-referencement-lorient', [
      { '@type': 'City', name: 'Lorient' },
      { '@type': 'AdministrativeArea', name: 'Morbihan' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence Référencement Lorient', path: '/agence-referencement-lorient' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceReferencementLorientPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceReferencementLorientContent faqs={faqs} />
    </>
  )
}

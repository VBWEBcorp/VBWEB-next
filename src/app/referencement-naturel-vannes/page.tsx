import type { Metadata } from 'next'

import { ReferencementNaturelVannesContent } from './referencement-naturel-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Référencement naturel à Vannes : améliorez votre positionnement sur Google et attirez plus de clients dans le Morbihan. Audit gratuit, accompagnement sur mesure. 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Référencement Naturel à Vannes | Expert SEO - VBWEB',
  description,
  alternates: { canonical: '/referencement-naturel-vannes' },
}

const faqs = [
  {
    question: 'Qu\'est-ce que le référencement naturel et pourquoi c\'est important pour une entreprise à Vannes ?',
    answer: 'Le référencement naturel, c\'est l\'ensemble des techniques qui permettent à votre site d\'apparaître dans les premiers résultats de Google sans payer de publicité. Pour une entreprise à Vannes, c\'est le moyen le plus rentable d\'attirer des clients qui cherchent vos services sur internet.',
  },
  {
    question: 'Combien de temps faut-il pour voir des résultats en référencement naturel à Vannes ?',
    answer: 'Comptez entre 3 et 6 mois pour observer les premiers résultats. Sur des recherches locales comme "ostéopathe Vannes" ou "restaurant Golfe du Morbihan", les résultats arrivent souvent plus vite car la concurrence est moins dense qu\'à Paris. Le référencement naturel est un investissement qui s\'accélère avec le temps.',
  },
  {
    question: 'Quelle différence entre référencement naturel et référencement payant pour une entreprise vannetaise ?',
    answer: 'Le référencement payant (Google Ads), c\'est de la publicité : vous payez chaque clic et le trafic s\'arrête dès que vous coupez le budget. Le référencement naturel, c\'est un travail de fond qui construit votre visibilité durablement. Une fois bien positionné, votre site continue d\'attirer des visiteurs sans coût par clic.',
  },
  {
    question: 'Combien coûte une prestation de référencement naturel à Vannes ?',
    answer: 'Un accompagnement en référencement naturel démarre à 500 euros par mois. Le tarif varie selon la taille de votre site, le nombre de mots-clés ciblés et le niveau de concurrence dans votre secteur. Je propose un audit gratuit pour évaluer vos besoins avant tout engagement.',
  },
  {
    question: 'Le référencement naturel est-il adapté aux commerces du centre-ville de Vannes ?',
    answer: 'C\'est même l\'un des leviers les plus efficaces. Quand un visiteur tape "boulangerie Vannes centre" ou "boutique décoration Vannes", il a une intention d\'achat forte. Le référencement naturel vous permet d\'apparaître au moment précis où ces personnes cherchent ce que vous proposez.',
  },
  {
    question: 'Comment le référencement naturel fonctionne-t-il pour les activités touristiques autour du Golfe du Morbihan ?',
    answer: 'Les activités touristiques ont un pic de recherches saisonnier. Le référencement naturel se prépare en amont : on optimise votre site en basse saison pour qu\'il soit bien positionné quand les touristes commencent à planifier leur séjour. C\'est comme planter des graines en hiver pour récolter au printemps.',
  },
  {
    question: 'Vous êtes basé à Rennes, comment accompagnez-vous des entreprises à Vannes ?',
    answer: 'Le référencement naturel se travaille principalement à distance : analyses, optimisations, suivi des positions. Je me déplace régulièrement dans le Morbihan pour les rendez-vous en personne. Et je connais bien le tissu économique vannetais, ce qui compte dans le choix des mots-clés et la stratégie.',
  },
  {
    question: 'Est-ce que le référencement naturel peut remplacer la publicité Google pour mon entreprise à Vannes ?',
    answer: 'Les deux sont complémentaires, mais le référencement naturel offre un bien meilleur retour sur investissement à moyen terme. La publicité donne des résultats immédiats mais temporaires. Le référencement naturel prend plus de temps à démarrer, mais chaque mois qui passe renforce votre positionnement sans augmenter vos dépenses.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Référencement Naturel à Vannes', description, '/referencement-naturel-vannes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Référencement Naturel à Vannes', description, '/referencement-naturel-vannes', [
      { '@type': 'City', name: 'Vannes' },
      { '@type': 'AdministrativeArea', name: 'Morbihan' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Référencement Naturel Vannes', path: '/referencement-naturel-vannes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function ReferencementNaturelVannesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReferencementNaturelVannesContent faqs={faqs} />
    </>
  )
}

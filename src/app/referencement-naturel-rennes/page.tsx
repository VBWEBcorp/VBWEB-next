import type { Metadata } from 'next'

import { ReferencementNaturelRennesContent } from './referencement-naturel-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Référencement naturel à Rennes : augmentez votre visibilité sur Google avec un expert SEO local. Audit gratuit, stratégie sur mesure et résultats mesurables. Plus de 200 projets menés.'

export const metadata: Metadata = {
  title: 'Référencement Naturel à Rennes | Expert SEO - VBWEB',
  description,
  alternates: { canonical: '/referencement-naturel-rennes' },
}

const faqs = [
  {
    question: 'Qu\'est-ce que le référencement naturel exactement ?',
    answer: 'Le référencement naturel, c\'est l\'ensemble des techniques qui permettent à votre site d\'apparaître dans les résultats de Google sans payer de publicité. On travaille sur la structure technique du site, le contenu des pages et la notoriété en ligne pour que Google vous considère comme la meilleure réponse aux recherches de vos futurs clients.',
  },
  {
    question: 'Pourquoi investir dans le référencement naturel plutôt que dans la publicité Google ?',
    answer: 'La publicité Google vous apporte du trafic tant que vous payez. Le référencement naturel construit une visibilité durable : une fois bien positionné, votre site continue d\'attirer des visiteurs sans budget publicitaire mensuel. Pour Rennes Pneus, le SEO génère aujourd\'hui 3 600 visites par mois, sans un euro de pub.',
  },
  {
    question: 'Combien de temps faut-il pour voir les premiers résultats en référencement naturel ?',
    answer: 'Comptez entre 3 et 6 mois pour observer les premières progressions. Le référencement naturel est un travail de fond qui s\'accélère avec le temps. Pour EPICU, la croissance a été progressive sur 3 ans, passant de 100 à 5 000 visites mensuelles.',
  },
  {
    question: 'Quel budget prévoir pour un accompagnement en référencement naturel à Rennes ?',
    answer: 'Un accompagnement SEO mensuel commence à partir de 500 euros par mois. Le tarif dépend de la taille de votre site, du nombre de mots-clés visés et du niveau de concurrence dans votre secteur. Je propose un audit gratuit pour estimer précisément vos besoins.',
  },
  {
    question: 'Comment se passe un projet de référencement naturel avec vous ?',
    answer: 'On commence par un échange de 30 minutes pour comprendre votre activité et vos objectifs. Ensuite, j\'analyse votre site en profondeur : technique, contenu, concurrence. Vous recevez un plan d\'action clair. Les optimisations sont déployées mois après mois, et vous suivez les résultats dans un espace dédié.',
  },
  {
    question: 'Travaillez-vous uniquement avec des entreprises de Rennes ?',
    answer: 'Je suis basé à Rennes et je connais bien le marché local, mais j\'accompagne aussi des clients à Cesson-Sévigné, Saint-Grégoire, Bruz, Chantepie, Pacé et dans toute la Bretagne. La majorité du travail se fait à distance, avec des rendez-vous en personne quand c\'est utile.',
  },
  {
    question: 'Est-ce que le référencement naturel fonctionne pour tous les secteurs d\'activité ?',
    answer: 'Oui, à condition que vos clients potentiels recherchent vos services sur Google. Un plombier, un restaurant, un e-commerce, un cabinet d\'avocats : chaque secteur a ses mots-clés et ses opportunités. L\'audit initial permet justement de mesurer le potentiel de votre marché.',
  },
  {
    question: 'Quelle est la différence entre référencement naturel et référencement local ?',
    answer: 'Le référencement naturel vise les résultats classiques de Google (les liens bleus). Le référencement local cible le pack Google Maps, avec la carte et les fiches d\'établissement. Les deux sont complémentaires : pour un commerce à Rennes, je travaille sur les deux leviers en parallèle.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Référencement Naturel à Rennes', description, '/referencement-naturel-rennes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Référencement Naturel à Rennes', description, '/referencement-naturel-rennes'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Référencement Naturel Rennes', path: '/referencement-naturel-rennes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function ReferencementNaturelRennesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReferencementNaturelRennesContent faqs={faqs} />
    </>
  )
}

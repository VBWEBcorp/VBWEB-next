import type { Metadata } from 'next'

import { ReferencementNaturelNantesContent } from './referencement-naturel-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Référencement naturel à Nantes : développez votre visibilité Google et attirez plus de clients en Loire-Atlantique. Audit gratuit, accompagnement sur mesure. 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Référencement Naturel à Nantes | Expert SEO - VBWEB',
  description,
  alternates: { canonical: '/referencement-naturel-nantes' },
}

const faqs = [
  {
    question: 'Pourquoi investir dans le référencement naturel quand on est une entreprise à Nantes ?',
    answer: 'Nantes est la sixième ville de France avec un tissu économique dense et une concurrence en ligne forte. Le référencement naturel vous permet de sortir du lot sur Google, d\'attirer des clients qualifiés et de réduire votre dépendance à la publicité payante. C\'est l\'investissement marketing le plus rentable sur le long terme.',
  },
  {
    question: 'Le référencement naturel, ça fonctionne comment ?',
    answer: 'Google classe les sites selon trois grands critères : la qualité technique, la pertinence du contenu et la notoriété en ligne. Le référencement naturel consiste à améliorer ces trois piliers pour que votre site apparaisse dans les premiers résultats quand vos clients potentiels font une recherche.',
  },
  {
    question: 'En combien de temps peut-on espérer des résultats à Nantes ?',
    answer: 'Les premiers résultats apparaissent entre 3 et 6 mois. La concurrence étant plus forte à Nantes que dans des villes plus petites, certains secteurs demandent un peu plus de patience. Mais le référencement naturel a un effet cumulatif : chaque mois de travail renforce le suivant.',
  },
  {
    question: 'Quel budget prévoir pour le référencement naturel à Nantes ?',
    answer: 'Un accompagnement mensuel démarre à 500 euros par mois. Le tarif s\'adapte à la taille de votre site, au nombre de mots-clés ciblés et au niveau de concurrence dans votre secteur. L\'audit gratuit permet de définir précisément le périmètre avant de s\'engager.',
  },
  {
    question: 'Pourquoi choisir un consultant basé à Rennes pour le référencement naturel à Nantes ?',
    answer: 'Rennes et Nantes sont à 1h30 l\'une de l\'autre. Je connais bien le marché du Grand Ouest et j\'accompagne déjà des entreprises nantaises. Le référencement naturel se travaille essentiellement à distance, et je me déplace à Nantes pour les rendez-vous importants.',
  },
  {
    question: 'Le référencement naturel peut-il remplacer Google Ads pour mon activité nantaise ?',
    answer: 'Les deux approches sont complémentaires. Google Ads donne des résultats immédiats mais coûte à chaque clic. Le référencement naturel prend plus de temps à démarrer, mais le trafic qu\'il génère est gratuit et durable. Sur 12 mois, le coût d\'acquisition client est généralement bien plus faible avec le référencement naturel.',
  },
  {
    question: 'Quels types d\'entreprises nantaises accompagnez-vous en référencement naturel ?',
    answer: 'J\'accompagne des profils variés : PME, commerces, professions libérales, startups, artisans dans la métropole nantaise. Chaque secteur a ses mots-clés, sa concurrence et ses opportunités. L\'important, c\'est que vos clients vous cherchent sur Google.',
  },
  {
    question: 'Intervenez-vous aussi dans la métropole nantaise et en Loire-Atlantique ?',
    answer: 'J\'accompagne des entreprises à Saint-Herblain, Rezé, Orvault, Carquefou, Saint-Nazaire et plus largement en Loire-Atlantique. Le travail se fait à distance avec des points réguliers, et je me déplace dans la métropole nantaise quand c\'est nécessaire.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Référencement Naturel à Nantes', description, '/referencement-naturel-nantes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Référencement Naturel à Nantes', description, '/referencement-naturel-nantes', [
      { '@type': 'City', name: 'Nantes' },
      { '@type': 'AdministrativeArea', name: 'Loire-Atlantique' },
      { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Référencement Naturel Nantes', path: '/referencement-naturel-nantes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function ReferencementNaturelNantesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReferencementNaturelNantesContent faqs={faqs} />
    </>
  )
}

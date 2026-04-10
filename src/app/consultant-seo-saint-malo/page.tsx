import type { Metadata } from 'next'

import { ConsultantSeoSaintMaloContent } from './consultant-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Consultant SEO à Saint-Malo : stratégie de référencement naturel pour hôtels, restaurants et commerces de la Côte d\'Émeraude. Audit gratuit, résultats mesurables. 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Consultant SEO à Saint-Malo | Expert Référencement - VBWEB',
  description,
  alternates: { canonical: '/consultant-seo-saint-malo' },
}

const faqs = [
  {
    question: 'Que fait un consultant SEO à Saint-Malo concrètement ?',
    answer: 'Un consultant SEO analyse la visibilité de votre site sur Google, identifie les mots-clés que vos clients recherchent et met en place les optimisations nécessaires pour améliorer vos positions. À Saint-Malo, cela implique de maîtriser les dynamiques du tourisme local, la saisonnalité des recherches et la concurrence entre établissements intra-muros.',
  },
  {
    question: 'Pourquoi le SEO est-il indispensable pour un commerce à Saint-Malo ?',
    answer: 'Saint-Malo accueille plus de 3 millions de visiteurs par an. La grande majorité prépare son séjour sur Google : "hôtel Saint-Malo vue mer", "restaurant fruits de mer intra-muros", "activité Saint-Malo pluie". Si vous n\'apparaissez pas dans ces résultats, ces clients réservent chez vos concurrents.',
  },
  {
    question: 'Comment gérer la saisonnalité touristique en SEO ?',
    answer: 'C\'est justement la spécialité d\'un consultant SEO qui connaît la Côte d\'Émeraude. On prépare le référencement en basse saison pour être positionné quand les recherches explosent au printemps et en été. Les pics sont prévisibles : il faut anticiper de 3 à 4 mois pour que Google indexe et positionne vos pages à temps.',
  },
  {
    question: 'Quel budget prévoir pour un consultant SEO à Saint-Malo ?',
    answer: 'Un accompagnement mensuel commence à 500 euros. Le tarif dépend de la taille de votre site, du nombre de pages à optimiser et du niveau de concurrence sur vos mots-clés. L\'audit initial est gratuit : il me permet d\'évaluer vos besoins et de vous proposer un plan adapté à votre budget.',
  },
  {
    question: 'Quelle différence entre un consultant SEO et une agence web ?',
    answer: 'Le consultant SEO se concentre exclusivement sur le référencement naturel. Contrairement à une agence généraliste qui propose du SEO parmi d\'autres services, vous avez un interlocuteur unique qui connaît votre dossier, une stratégie sur mesure et un suivi réactif. Pas de commercial, pas de turnover.',
  },
  {
    question: 'En combien de temps voit-on des résultats en SEO ?',
    answer: 'Les premiers résultats apparaissent en général entre 3 et 6 mois. Pour un hôtel ou un restaurant à Saint-Malo, on observe souvent une augmentation des réservations directes dès la première haute saison après le démarrage de l\'accompagnement. Le SEO s\'accélère avec le temps : les efforts se cumulent.',
  },
  {
    question: 'Travaillez-vous uniquement avec des entreprises à Saint-Malo ?',
    answer: 'Non, j\'accompagne aussi des entreprises à Dinard, Dinan, Cancale, Dol-de-Bretagne et Saint-Lunaire. Basé à Rennes, à 45 minutes de Saint-Malo, je couvre toute la Côte d\'Émeraude et la Bretagne. Le travail se fait principalement à distance, avec des rencontres en personne quand c\'est utile.',
  },
  {
    question: 'Le SEO local fonctionne-t-il pour les hôtels et restaurants de Saint-Malo ?',
    answer: 'C\'est même là qu\'il est le plus efficace. Les recherches locales comme "restaurant Saint-Malo", "hôtel Sillon" ou "crêperie intra-muros" ont des volumes très élevés et un taux de conversion fort. En combinant l\'optimisation de votre site et de votre fiche Google Business Profile, vous captez des clients prêts à réserver.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Consultant SEO à Saint-Malo', description, '/consultant-seo-saint-malo', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Consultant SEO à Saint-Malo', description, '/consultant-seo-saint-malo', [
      { '@type': 'City', name: 'Saint-Malo' },
      { '@type': 'AdministrativeArea', name: 'Ille-et-Vilaine' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Consultant SEO Saint-Malo', path: '/consultant-seo-saint-malo' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function ConsultantSeoSaintMaloPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ConsultantSeoSaintMaloContent faqs={faqs} />
    </>
  )
}

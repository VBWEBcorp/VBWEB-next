import type { Metadata } from 'next'

import { AgenceDeveloppementWebNantesContent } from './agence-developpement-web-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Agence développement web à Nantes ? Un expert indépendant qui conçoit et code votre site dans le Grand Ouest. Contact direct, devis clair, audit gratuit.'

export const metadata: Metadata = {
  title: 'Agence Développement Web à Nantes | Expert Web - VBWEB',
  description,
  alternates: { canonical: '/agence-developpement-web-nantes' },
}

const faqs = [
  {
    question: 'Pourquoi envisager un expert indépendant plutôt qu\'une agence développement web à Nantes ?',
    answer: 'Nantes compte un grand nombre d\'agences digitales de toutes tailles, ce qui crée beaucoup de bruit et parfois de la difficulté à comparer. Un expert indépendant offre un repère plus simple : une personne, une approche, un tarif. Pour un projet PME ou un site métier, c\'est souvent plus efficace qu\'une structure d\'agence avec ses strates.',
  },
  {
    question: 'Vous êtes basé à Rennes, est-ce adapté pour un projet nantais ?',
    answer: 'Absolument. Rennes et Nantes sont à 1h30 en voiture, moins d\'1h15 en TGV. Je me déplace facilement à Nantes pour les rendez-vous importants, et le reste du travail se fait à distance avec des outils modernes. Plusieurs clients nantais collaborent avec moi de cette façon sans aucun frein lié à la distance.',
  },
  {
    question: 'Quels types de projets web avez-vous livrés dans le Grand Ouest ?',
    answer: 'Sites vitrines pour PME, e-commerces pour commerces et marques, plateformes sur mesure pour acteurs tech et startups, sites pour professions libérales. Nantes a un écosystème tech très actif et j\'y interviens sur des projets allant du simple site de présentation à l\'application métier plus ambitieuse.',
  },
  {
    question: 'Quel budget pour un site internet professionnel à Nantes ?',
    answer: 'Un site vitrine démarre à 2 500 euros, un e-commerce varie entre 5 000 et 15 000 euros selon la complexité. Sur Nantes, la concurrence est plus forte et certains projets nécessitent une ambition visuelle supérieure, ce qui peut influencer le budget. Le devis détaille chaque poste pour que vous sachiez où va votre investissement.',
  },
  {
    question: 'Quelle différence avec une agence nantaise traditionnelle ?',
    answer: 'Une agence nantaise vous apporte la proximité physique, une équipe et une structure. Je vous apporte la proximité avec l\'expert qui code réellement votre site, une disponibilité supérieure et un tarif ajusté au travail réel. Les deux modèles sont valables, le bon choix dépend de la nature et de la taille de votre projet.',
  },
  {
    question: 'Quelles technologies utilisez-vous pour les projets nantais ?',
    answer: 'Selon les besoins. WordPress pour les sites éditoriaux et vitrine classiques, Next.js et React pour les projets qui demandent de la performance et des fonctionnalités modernes. Nantes étant un pôle tech actif, beaucoup de clients cherchent une stack moderne et c\'est exactement ce que je propose avec du Next.js sur les projets ambitieux.',
  },
  {
    question: 'Intervenez-vous aussi à Saint-Herblain, Rezé, Saint-Nazaire ?',
    answer: 'Oui, sur toute la métropole nantaise et au-delà : Saint-Herblain, Rezé, Orvault, Carquefou, jusqu\'à Saint-Nazaire. Le bassin économique du Grand Ouest est très dynamique et je travaille régulièrement avec des clients de toute la zone, sans problème de distance.',
  },
  {
    question: 'Le site sera-t-il optimisé SEO dès la mise en ligne ?',
    answer: 'Oui, complètement. Je suis consultant en référencement naturel avant d\'être développeur, donc le SEO technique est intégré à chaque site que je code. Pour une entreprise nantaise, où la concurrence en ligne est forte, c\'est un avantage considérable d\'avoir un site déjà optimisé Google dès la première journée.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence Développement Web à Nantes', description, '/agence-developpement-web-nantes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence Développement Web à Nantes', description, '/agence-developpement-web-nantes', [
      { '@type': 'City', name: 'Nantes' },
      { '@type': 'AdministrativeArea', name: 'Loire-Atlantique' },
      { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence Développement Web Nantes', path: '/agence-developpement-web-nantes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceDeveloppementWebNantesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceDeveloppementWebNantesContent faqs={faqs} />
    </>
  )
}

import type { Metadata } from 'next'

import { FreelanceSeoNantesContent } from './freelance-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Freelance SEO à Nantes : consultant référencement naturel pour PME, startups et commerces en Loire-Atlantique. Audit gratuit, stratégie sur mesure, résultats mesurables. 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Freelance SEO à Nantes | Référencement Naturel - VBWEB',
  description,
  alternates: { canonical: '/freelance-seo-nantes' },
}

const faqs = [
  {
    question: 'Pourquoi faire appel à un freelance SEO pour mon entreprise à Nantes ?',
    answer: 'Nantes est une métropole très dynamique avec un tissu économique dense : startups sur l\'Île de Nantes, commerces en centre-ville, PME dans les zones d\'activité de Saint-Herblain ou Carquefou. Un freelance SEO vous permet d\'apparaître devant vos concurrents locaux sur Google, avec une stratégie adaptée à votre marché nantais.',
  },
  {
    question: 'Vous êtes basé à Rennes : comment travaillez-vous avec des clients nantais ?',
    answer: 'Rennes et Nantes sont à 1h10 en TGV. Je me déplace régulièrement à Nantes pour rencontrer mes clients. Le reste du temps, on travaille en visio avec un espace de suivi dédié. Plusieurs de mes clients sont nantais et cette organisation fonctionne très bien.',
  },
  {
    question: 'Combien coûte un accompagnement SEO à Nantes ?',
    answer: 'Un accompagnement mensuel démarre à partir de 500 euros par mois. Le tarif dépend de la taille de votre site, de la concurrence sur vos mots-clés et de vos objectifs. Je propose un audit gratuit pour évaluer vos besoins et vous remettre un devis clair, sans engagement.',
  },
  {
    question: 'Le SEO local est-il pertinent pour une entreprise nantaise ?',
    answer: 'Absolument. Les recherches locales représentent près de 46% des requêtes Google. Si vous êtes restaurateur, artisan, cabinet ou commerce à Nantes, apparaître sur "votre métier + Nantes" et sur Google Maps est indispensable pour capter des clients qui cherchent activement vos services.',
  },
  {
    question: 'En combien de temps vais-je voir des résultats sur Google ?',
    answer: 'En général entre 3 et 6 mois pour les premiers résultats significatifs. Le SEO est un investissement progressif qui s\'accélère avec le temps. Pour certains de mes clients, les premiers appels sont arrivés dès le 4e mois.',
  },
  {
    question: 'Travaillez-vous avec des startups de l\'écosystème nantais ?',
    answer: 'Oui. Nantes est un pôle tech majeur dans le Grand Ouest avec des événements comme le Web2Day et un écosystème startup très actif sur l\'Île de Nantes. J\'accompagne des startups et scale-ups qui veulent faire du SEO un canal d\'acquisition durable, en complément du paid.',
  },
  {
    question: 'Quelle est la différence entre un freelance SEO et une agence SEO à Nantes ?',
    answer: 'Avec un freelance, vous travaillez directement avec la personne qui gère votre référencement. Pas de commercial, pas de turnover sur votre dossier. La relation est plus directe, les tarifs plus accessibles, et les décisions se prennent plus vite.',
  },
  {
    question: 'Intervenez-vous aussi dans les communes autour de Nantes ?',
    answer: 'Oui, j\'accompagne des entreprises dans toute la métropole nantaise : Saint-Herblain, Rezé, Orvault, Carquefou, mais aussi à Saint-Nazaire et La Baule. Le SEO local permet de cibler précisément la zone géographique de votre clientèle en Loire-Atlantique.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Freelance SEO à Nantes', description, '/freelance-seo-nantes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Freelance SEO à Nantes', description, '/freelance-seo-nantes', [
      { '@type': 'City', name: 'Nantes' },
      { '@type': 'AdministrativeArea', name: 'Loire-Atlantique' },
      { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Freelance SEO Nantes', path: '/freelance-seo-nantes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function FreelanceSeoNantesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FreelanceSeoNantesContent faqs={faqs} />
    </>
  )
}

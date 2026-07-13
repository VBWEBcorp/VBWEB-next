import type { Metadata } from 'next'

import { IaEntrepriseContent } from './ia-content'
import { PageHero } from '@/components/sections/page-hero'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'IA en entreprise : j’intègre l’intelligence artificielle et des outils sur-mesure dans votre PME. Automatisations, CRM et tableaux de bord pour gagner du temps.'

export const metadata: Metadata = {
  title: 'IA en Entreprise | Automatisations & Outils sur-mesure',
  description,
  alternates: { canonical: '/ia-entreprise' },
}

const faqs = [
  {
    question: 'Concrètement, qu’est-ce que l’IA peut m’apporter dans ma PME ?',
    answer: 'L’IA et l’automatisation vous font gagner du temps sur les tâches répétitives : relances, devis, saisie, reporting. Vous récupérez des heures chaque semaine pour vous concentrer sur votre métier et vos clients.',
  },
  {
    question: 'Faut-il changer tous mes outils actuels ?',
    answer: 'Non. La plupart du temps, on connecte et on automatise à partir de vos outils existants. Quand un logiciel du marché ne convient pas, je développe un outil sur-mesure adapté à vos process.',
  },
  {
    question: 'Combien ça coûte et combien de temps ça prend ?',
    answer: 'Chaque projet est différent. On commence toujours par un audit gratuit des tâches chronophages : je vous dis ce qui est automatisable, le temps que vous gagneriez et un budget clair avant tout engagement.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('IA en entreprise', description, '/ia-entreprise', ['h1', '.hero-description']),
    serviceJsonLd('IA en entreprise, automatisations et outils sur-mesure', description, '/ia-entreprise'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'IA en entreprise', path: '/ia-entreprise' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function IaEntreprisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="IA en entreprise"
        title="L’IA qui vous fait gagner du temps"
        description="J’intègre l’intelligence artificielle et des outils sur-mesure dans votre PME : moins de tâches répétitives, plus de temps pour votre métier."
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
        breadcrumb="IA en entreprise"
      />
      <IaEntrepriseContent />
    </>
  )
}

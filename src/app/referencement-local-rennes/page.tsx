import type { Metadata } from 'next'

import { LocalSeoContent } from './local-seo-content'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Référencement local à Rennes : dominez Google Maps et la recherche locale. Optimisation Google Business, SEO local et stratégie de citations pour PME et commerces en Bretagne.'

export const metadata: Metadata = {
  title: 'Référencement Local Rennes | Google Maps & SEO Local',
  description,
  alternates: { canonical: '/referencement-local-rennes' },
}

const faqs = [
  { question: 'C\'est quoi le référencement local ?', answer: 'Le référencement local optimise votre visibilité pour les recherches géolocalisées. Quand quelqu\'un tape "boulangerie Rennes" ou "plombier près de moi", le SEO local vous fait apparaître dans les résultats et sur Google Maps.' },
  { question: 'Comment apparaître sur Google Maps ?', answer: 'Il faut créer et optimiser votre fiche Google Business Profile avec des informations complètes, des photos, et encourager les avis clients. Je m\'occupe de tout pour vous.' },
  { question: 'Combien d\'avis Google faut-il pour bien se positionner ?', answer: 'Il n\'y a pas de nombre magique, mais plus vous avez d\'avis récents et positifs, mieux c\'est. La qualité et la régularité comptent plus que la quantité.' },
  { question: 'Le référencement local est-il adapté à mon activité ?', answer: 'Si vos clients sont dans votre zone géographique (commerce, artisan, restaurant, cabinet...), le SEO local est probablement votre meilleur investissement.' },
  { question: 'Quelle différence entre SEO classique et SEO local ?', answer: 'Le SEO classique vise le positionnement national. Le SEO local cible les recherches avec une intention géographique et optimise votre présence sur Google Maps.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Référencement Local Rennes', description, '/referencement-local-rennes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Référencement local', description, '/referencement-local-rennes'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Référencement Local Rennes', path: '/referencement-local-rennes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function LocalSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocalSeoContent faqs={faqs} />
    </>
  )
}

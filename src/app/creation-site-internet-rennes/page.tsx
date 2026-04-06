import type { Metadata } from 'next'

import { WebCreationContent } from './web-creation-content'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Création de site internet à Rennes : sites web performants, optimisés SEO dès la conception. Design moderne, responsive, pensé pour convertir. Devis gratuit.'

export const metadata: Metadata = {
  title: 'Création Site Internet Rennes | Sites Web Optimisés SEO',
  description,
  alternates: { canonical: '/creation-site-internet-rennes' },
}

const faqs = [
  { question: 'Combien coûte la création d\'un site internet à Rennes ?', answer: 'Un site vitrine professionnel démarre à partir de 1 500€. Le prix varie selon la complexité, le nombre de pages et les fonctionnalités. Je vous fais un devis gratuit et détaillé sous 24h.' },
  { question: 'Combien de temps pour créer un site internet ?', answer: 'Un site vitrine est livré en 2 à 4 semaines. Un site plus complexe (e-commerce, application) peut prendre 4 à 8 semaines. Chaque projet a son calendrier.' },
  { question: 'Mon site actuel peut-il être amélioré ou faut-il le refaire ?', answer: 'Ça dépend de la base technique. Souvent, une refonte est plus efficace qu\'un rafistolage. Mon audit gratuit vous dira exactement ce qu\'il faut faire.' },
  { question: 'Le site sera-t-il optimisé pour Google ?', answer: 'Absolument. Chaque site que je crée est optimisé SEO dès la conception : performance, structure, balisage, contenu. C\'est mon expertise principale.' },
  { question: 'Proposez-vous la maintenance après la création ?', answer: 'Oui, je propose un accompagnement mensuel : mises à jour, sécurité, optimisations SEO continues et support technique.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Création Site Internet Rennes', description, '/creation-site-internet-rennes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Création de site internet', description, '/creation-site-internet-rennes'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Création Site Internet Rennes', path: '/creation-site-internet-rennes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function WebCreationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WebCreationContent faqs={faqs} />
    </>
  )
}

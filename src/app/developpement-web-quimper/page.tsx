import type { Metadata } from 'next'

import { DeveloppementWebQuimperContent } from './developpement-web-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Développement web à Quimper : sites Next.js, React et applications sur mesure. Victor Béasse code pour les PME du Finistère sud avec performance et SEO intégré.'

export const metadata: Metadata = {
  title: 'Développement Web à Quimper | Sites & Applications - VBWEB',
  description,
  alternates: { canonical: '/developpement-web-quimper' },
}

const faqs = [
  {
    question: 'Un développeur web à distance peut-il vraiment accompagner une entreprise quimpéroise ?',
    answer: 'Oui, la majorité du travail se fait à distance aujourd\'hui, grâce à des outils collaboratifs modernes. Je fais des points en visio réguliers et je me déplace à Quimper pour les rendez-vous importants. Mes clients quimpérois sont aussi bien suivis que mes clients rennais.',
  },
  {
    question: 'Quel est le budget pour un site web à Quimper ?',
    answer: 'Pour un site vitrine moderne, comptez à partir de 2 500 euros. Un site plus complet avec une dizaine de pages de contenu se situe entre 4 000 et 8 000 euros. Les projets plus complexes (e-commerce, application) sont chiffrés au cahier des charges.',
  },
  {
    question: 'Pourquoi Next.js plutôt qu\'un CMS classique ?',
    answer: 'Next.js offre des performances incomparables et un contrôle total sur le résultat. Sur un CMS classique, on empile des plugins qui ralentissent tout et créent des failles. Avec Next.js, chaque ligne de code est utile et le site reste rapide, sécurisé, évolutif.',
  },
  {
    question: 'Est-ce que vous développez des sites pour les commerces du centre de Quimper ?',
    answer: 'Oui, et j\'y prends plaisir. Les commerces du cœur de Quimper ont besoin de sites qui valorisent leur identité, leur savoir-faire, leurs produits. Je développe des sites vitrines soignés, optimisés pour le mobile et le référencement local.',
  },
  {
    question: 'Comment se passe le référencement local après la livraison du site ?',
    answer: 'Le SEO est intégré dès la conception du site. Je paramètre votre fiche Google Business Profile, j\'optimise les balises locales, je structure le contenu pour ranker sur Quimper et le pays de Cornouaille. Vous partez avec un site déjà prêt à performer.',
  },
  {
    question: 'Développez-vous aussi des boutiques en ligne à Quimper ?',
    answer: 'Oui, avec Stripe pour les paiements ou des solutions headless selon les besoins. Les créateurs, artisans et producteurs locaux peuvent vendre en ligne avec une boutique moderne, rapide et bien intégrée à leur site vitrine.',
  },
  {
    question: 'Combien de temps pour créer un site web à Quimper ?',
    answer: 'Un site vitrine bien cadré prend 4 à 6 semaines. Un site plus ambitieux 8 à 10 semaines. Une application web ou un e-commerce 2 à 4 mois selon la complexité. Le planning est fixé dès le devis, et je m\'y tiens.',
  },
  {
    question: 'Qu\'est-ce qui différencie votre approche d\'une agence web classique ?',
    answer: 'Chez moi, pas d\'intermédiaire. Je suis à la fois le chef de projet, le développeur et le consultant SEO. Vous avez un interlocuteur unique qui comprend votre projet de A à Z. Résultat : les décisions sont rapides et la qualité reste au rendez-vous.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Développement Web à Quimper', description, '/developpement-web-quimper', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Développement Web à Quimper', description, '/developpement-web-quimper', [
      { '@type': 'City', name: 'Quimper' },
      { '@type': 'AdministrativeArea', name: 'Finistère' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Développement Web Quimper', path: '/developpement-web-quimper' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function DeveloppementWebQuimperPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DeveloppementWebQuimperContent faqs={faqs} />
    </>
  )
}

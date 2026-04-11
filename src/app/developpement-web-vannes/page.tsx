import type { Metadata } from 'next'

import { DeveloppementWebVannesContent } from './developpement-web-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Développement web à Vannes : sites Next.js, React et applications sur mesure. Victor Béasse code des sites rapides et bien référencés pour les PME du Morbihan.'

export const metadata: Metadata = {
  title: 'Développement Web à Vannes | Sites & Applications - VBWEB',
  description,
  alternates: { canonical: '/developpement-web-vannes' },
}

const faqs = [
  {
    question: 'Pourquoi faire appel à un développeur web pour Vannes plutôt qu\'à une agence lointaine ?',
    answer: 'Parce qu\'un développeur qui connaît le Golfe et le tissu local comprend vite vos enjeux. Je viens régulièrement à Vannes, je connais le marché des commerces du centre et des professionnels du tourisme. Ça évite les allers-retours inutiles et les briefs mal compris.',
  },
  {
    question: 'Quels types de sites développez-vous pour les entreprises de Vannes ?',
    answer: 'De tout : sites vitrines pour les artisans d\'Arradon, sites de réservation pour les hôtels du Golfe, boutiques e-commerce pour les créateurs locaux, applications métier pour les PME du parc d\'activités. Tant que c\'est du web moderne, ça m\'intéresse.',
  },
  {
    question: 'Quel est le prix d\'un site internet à Vannes ?',
    answer: 'Un site vitrine démarre à 2 500 euros, un site avec plusieurs pages de contenu tourne entre 4 000 et 8 000 euros. Une application sur mesure dépend du cahier des charges. Je donne toujours un tarif ferme après le premier échange.',
  },
  {
    question: 'Pourquoi utiliser Next.js plutôt que WordPress pour mon site vannetais ?',
    answer: 'Next.js offre une vitesse de chargement incomparable. Votre site se charge en moins d\'une seconde même sur une 4G moyenne. Pour un restaurant vannetais dont les clients cherchent sur mobile pendant leur promenade au port, c\'est un vrai avantage concurrentiel.',
  },
  {
    question: 'Est-ce que vous vous déplacez à Vannes pour un premier rendez-vous ?',
    answer: 'Oui, je me déplace régulièrement dans le Morbihan. Pour un projet qui le justifie, je viens volontiers à Vannes pour un rendez-vous en personne. Sinon, la première visio est offerte et souvent aussi efficace.',
  },
  {
    question: 'Développez-vous aussi des boutiques en ligne à Vannes ?',
    answer: 'Oui. Je code des e-commerces sur mesure avec Stripe pour les paiements, ou des solutions headless avec Shopify pour plus de flexibilité. Plusieurs créateurs et producteurs du Morbihan vendent déjà en ligne grâce aux sites que j\'ai développés.',
  },
  {
    question: 'Mon site sera-t-il optimisé pour le référencement local à Vannes ?',
    answer: 'Oui, et c\'est inclus dans le développement. Je suis aussi consultant SEO, donc le site est conçu dès le départ pour ranker à Vannes : balises locales, fiche Google Business Profile, contenus géolocalisés, schema.org. Pas besoin d\'un prestataire supplémentaire.',
  },
  {
    question: 'Que se passe-t-il une fois le site livré ?',
    answer: 'Vous êtes propriétaire de tout : code, nom de domaine, hébergement. Je propose un contrat de maintenance optionnel pour les mises à jour, les sauvegardes et les petites évolutions. Vous restez libre de travailler avec qui vous voulez après.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Développement Web à Vannes', description, '/developpement-web-vannes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Développement Web à Vannes', description, '/developpement-web-vannes', [
      { '@type': 'City', name: 'Vannes' },
      { '@type': 'AdministrativeArea', name: 'Morbihan' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Développement Web Vannes', path: '/developpement-web-vannes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function DeveloppementWebVannesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DeveloppementWebVannesContent faqs={faqs} />
    </>
  )
}

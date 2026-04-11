import type { Metadata } from 'next'

import { SiteInternetMenuisierContent } from './site-internet-menuisier-content'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Création de site internet menuisier partout en France. Un site à la hauteur de votre savoir-faire : cuisine sur mesure, dressing, parquet, escalier, agencement intérieur.'

export const metadata: Metadata = {
  title: 'Site Internet Menuisier | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-menuisier' },
}

const faqs = [
  {
    question: 'Pourquoi un menuisier a-t-il besoin d\'un site internet ?',
    answer: 'Un menuisier vend du sur-mesure, donc une histoire et une confiance. Sans site, vous dépendez uniquement du bouche-à-oreille. Avec un site qui met en scène votre savoir-faire, vous attirez des projets plus ambitieux, avec des clients déjà convaincus par la qualité qu\'ils ont vue en ligne.',
  },
  {
    question: 'Quel type de projets un site peut-il m\'apporter ?',
    answer: 'Tout dépend de votre positionnement. Pour un menuisier agenceur, le site ramène principalement des cuisines sur mesure, des dressings, des bibliothèques intégrées et des escaliers. Pour un menuisier poseur, c\'est plutôt des fenêtres, des portes et des parquets. Je structure le site autour de vos prestations phares pour éviter la dispersion.',
  },
  {
    question: 'Comment valoriser le savoir-faire sur un site ?',
    answer: 'Les photos de vos réalisations sont essentielles, mais ça ne suffit pas. J\'ajoute des zooms sur les détails qui font la différence : assemblage, essence de bois, finition, poignées, inserts. C\'est ce qui distingue un menuisier de l\'enseigne de cuisine équipée aux yeux d\'un client exigeant.',
  },
  {
    question: 'Combien coûte un site internet pour un menuisier ?',
    answer: 'Un site professionnel pour menuisier démarre autour de 1 200€. Ce tarif inclut le design, la galerie de réalisations, les pages prestations, le formulaire de devis, l\'optimisation SEO et la fiche Google Business. Pour un site avec plus de pages ou un configurateur, je vous fais un devis sur mesure en 24h.',
  },
  {
    question: 'Est-ce qu\'un site peut m\'aider à vendre plus de cuisines sur mesure ?',
    answer: 'Oui, clairement. Les recherches "cuisine sur mesure + ville" sont très qualifiées : ceux qui tapent ça ont généralement un budget et sont en phase de comparaison. Une page dédiée avec vos réalisations, vos essences de bois et un formulaire simple peut vous ramener plusieurs projets par an qui passaient avant chez Mobalpa ou Ixina.',
  },
  {
    question: 'Combien de temps pour voir des résultats sur Google ?',
    answer: 'Le site est livré en 2 à 3 semaines. Les premières positions arrivent entre 1 et 3 mois sur les requêtes locales. Sur des mots-clés plus concurrentiels comme "cuisine sur mesure + grande ville", il faut compter 4 à 6 mois de travail SEO régulier pour s\'installer en haut de page.',
  },
  {
    question: 'Vous travaillez avec des menuisiers partout en France ?',
    answer: 'Oui, je suis basé à Rennes mais j\'accompagne des menuisiers partout en France. Tout se fait à distance : visio pour le brief, envoi des photos de vos réalisations en ligne, validation des maquettes par lien partagé. Ça fonctionne aussi bien avec un ébéniste en Alsace qu\'un menuisier poseur en Provence.',
  },
  {
    question: 'Mes photos d\'atelier sont-elles utiles sur le site ?',
    answer: 'Oui, beaucoup plus qu\'on ne le pense. Les photos de l\'atelier, des machines, des copeaux, des essences brutes : tout ça prouve que vous fabriquez vraiment, à la main. C\'est exactement le détail qui rassure un client qui hésite entre un vrai menuisier et une enseigne de meuble industriel.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Menuisier', description, '/site-internet-menuisier', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Création de site internet pour menuisier', description, '/site-internet-menuisier'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Artisan', path: '/site-internet-artisan' },
      { name: 'Menuisier', path: '/site-internet-menuisier' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetMenuisierPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteInternetMenuisierContent faqs={faqs} />
    </>
  )
}

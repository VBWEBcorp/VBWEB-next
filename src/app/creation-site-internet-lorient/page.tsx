import type { Metadata } from 'next'

import { CreationSiteInternetLorientContent } from './creation-site-internet-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Création site internet Lorient : des sites web qui attirent vos clients via Google, pas juste des vitrines. Design sur mesure, SEO intégré, devis gratuit sous 24h.'

export const metadata: Metadata = {
  title: 'Création Site Internet à Lorient | Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/creation-site-internet-lorient' },
}

const faqs = [
  {
    question: 'Quel est le prix moyen d\'un site internet à Lorient ?',
    answer: 'Pour un site vitrine professionnel à Lorient, comptez 1 800 à 3 500 euros selon la taille et les fonctionnalités. Pour un site e-commerce, le budget démarre autour de 4 500 euros. Le devis est toujours gratuit et détaillé.',
  },
  {
    question: 'Combien de temps pour avoir un site en ligne à Lorient ?',
    answer: 'En moyenne 3 à 5 semaines entre le premier appel et la mise en ligne d\'un site vitrine. Les étapes sont découpées clairement et vous voyez le site évoluer en temps réel grâce à un lien de prévisualisation.',
  },
  {
    question: 'Vous créez des sites pour des commerces du port de Lorient ?',
    answer: 'Oui, j\'ai accompagné plusieurs commerces et artisans du bassin lorientais. Restaurants, boutiques, services maritimes, artisans du bâtiment. Les besoins sont différents mais la logique reste la même : un site qui attire et qui convertit.',
  },
  {
    question: 'Je suis basé à Lanester ou Hennebont, est-ce un souci ?',
    answer: 'Pas du tout. J\'accompagne régulièrement des entreprises sur tout le pays de Lorient : Lanester, Hennebont, Ploemeur, Larmor-Plage, Quéven. La proximité rend les échanges faciles, en visio ou en rendez-vous physique si besoin.',
  },
  {
    question: 'Mon site sera-t-il automatiquement bien classé sur Google ?',
    answer: 'Il sera préparé techniquement pour grimper. Mais le SEO demande du temps : 3 à 6 mois pour voir des résultats solides sur des requêtes comme "plombier Lorient" ou "boulangerie Lanester". La création du site est la base, le référencement continu la suite logique.',
  },
  {
    question: 'Puis-je ajouter un blog à mon site plus tard ?',
    answer: 'Bien sûr. Je prévois dès le départ une structure qui permet d\'ajouter articles, études de cas ou actualités. Le blog est d\'ailleurs un levier SEO puissant pour les entreprises lorientaises qui veulent grimper sur Google.',
  },
  {
    question: 'Est-ce que vous gérez aussi la rédaction des contenus ?',
    answer: 'Oui. Je propose la rédaction SEO des pages principales en option. Les textes sont écrits pour vos clients, pas pour Google, mais en intégrant les mots-clés qui comptent sur le marché lorientais.',
  },
  {
    question: 'Que se passe-t-il si je veux changer quelque chose après la livraison ?',
    answer: 'Des ajustements mineurs sont inclus dans les semaines qui suivent la mise en ligne. Pour des évolutions plus importantes, je propose un forfait maintenance mensuel qui couvre sécurité, mises à jour et petites modifications régulières.',
  },
]

const areaServed = [
  { '@type': 'City', name: 'Lorient' },
  { '@type': 'AdministrativeArea', name: 'Morbihan' },
  { '@type': 'AdministrativeArea', name: 'Bretagne' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd(
      'Création Site Internet à Lorient',
      description,
      '/creation-site-internet-lorient',
      ['h1', '.hero-description', '.faq-answer']
    ),
    serviceJsonLd(
      'Création de site internet à Lorient',
      description,
      '/creation-site-internet-lorient',
      areaServed
    ),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Création Site Internet Lorient', path: '/creation-site-internet-lorient' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function CreationSiteInternetLorientPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CreationSiteInternetLorientContent faqs={faqs} />
    </>
  )
}

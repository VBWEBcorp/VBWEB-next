import type { Metadata } from 'next'

import { SiteInternetMaconContent } from './site-internet-macon-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet maçon : création de site web optimisé SEO pour maçons partout en France. Extension, rénovation, terrasse, dalle béton, mur : plus de chantiers grâce à Google.'

export const metadata: Metadata = {
  title: 'Site Internet Maçon | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-macon' },
}

const faqs = [
  {
    question: 'Pourquoi un maçon a-t-il intérêt à avoir un site internet ?',
    answer: 'Parce qu\'un chantier de maçonnerie, ça représente souvent plusieurs dizaines de milliers d\'euros. Avant de signer, le client veut voir ce que vous savez faire, vos réalisations, vos délais, vos assurances. Un site internet maçon, c\'est votre book permanent, disponible 24h/24, qui transforme un visiteur curieux en demande de devis concrète.',
  },
  {
    question: 'Combien coûte un site internet pour maçon ?',
    answer: 'Un site vitrine professionnel pour maçon démarre à 1 500 euros. Il comprend les pages prestations (extension, rénovation, terrasse, dalle, mur, gros œuvre), un portfolio de chantiers, la fiche Google optimisée et le SEO de base. Devis clair, sans abonnement forcé.',
  },
  {
    question: 'Quelles prestations valoriser en priorité sur le site ?',
    answer: 'Extension de maison, rénovation complète, création de terrasse, dalle béton, construction de murs et clôtures, pose de parpaings, ravalement de façade, agrandissement, gros œuvre. Les extensions et les rénovations sont celles qui rapportent le plus, donc elles méritent des pages très travaillées avec photos avant/après et exemples concrets de budget.',
  },
  {
    question: 'Comment mettre en valeur mes chantiers passés ?',
    answer: 'Les photos avant/après sont votre meilleure arme. Une ruine transformée en maison, une terrasse flambant neuve, une extension réussie : ça parle directement au client qui a un projet. Je construis des galeries par type de chantier, avec une courte description et si possible le budget moyen. C\'est ce qui déclenche les appels.',
  },
  {
    question: 'Les recherches des clients sont-elles vraiment locales ?',
    answer: 'Oui, à 95%. Les gens tapent "maçon + ville" ou "extension maison + département". Ils ne veulent pas un maçon à 200 km. Je crée donc une page par zone d\'intervention importante, avec du contenu unique, pas du copier-coller. Google adore ça et vous remontez vite sur les requêtes locales, où que vous soyez en France.',
  },
  {
    question: 'Faut-il parler des matériaux et techniques sur le site ?',
    answer: 'Oui, les clients sérieux cherchent à comprendre avant de signer. Parpaing, brique, béton banché, pierre, chaux, enduit monocouche : expliquer simplement les choix possibles montre votre expertise et rassure. Je rédige ces contenus pour vous, en langage clair, sans jargon technique lourd.',
  },
  {
    question: 'Je suis maçon dans une zone rurale, ça peut marcher ?',
    answer: 'Parfaitement. En zone rurale, la concurrence est moins forte en ligne. Un site bien construit vous place facilement en tête sur les requêtes locales autour de votre bourg et des communes alentour. J\'accompagne des maçons partout en France, des grandes métropoles aux petites communes.',
  },
  {
    question: 'Je suis souvent sur chantier, je pourrai gérer mon site ?',
    answer: 'Justement, c\'est fait pour que vous n\'ayez rien à gérer. Je construis un site simple, qui ne demande aucune maintenance quotidienne. Les demandes de devis arrivent dans votre boîte mail ou par SMS, vous rappelez quand vous êtes descendu de l\'échafaudage. Si vous voulez ajouter un nouveau chantier à votre portfolio, vous m\'envoyez les photos et je m\'en occupe.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Maçon', description, '/site-internet-macon', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Maçon', description, '/site-internet-macon'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Maçon', path: '/site-internet-macon' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetMaconPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteInternetMaconContent faqs={faqs} />
    </>
  )
}

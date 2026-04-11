import type { Metadata } from 'next'

import { SiteInternetCouvreurContent } from './site-internet-couvreur-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet couvreur : création de site web optimisé SEO pour couvreurs et charpentiers partout en France. Toiture, charpente, isolation, urgences tempête : plus de devis grâce à Google.'

export const metadata: Metadata = {
  title: 'Site Internet Couvreur | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-couvreur' },
}

const faqs = [
  {
    question: 'Pourquoi un couvreur devrait-il avoir un site internet ?',
    answer: 'Parce qu\'une toiture, ça se décide rarement sur un coup de tête. Le client compare, regarde les réalisations, vérifie les avis avant d\'appeler. Sans site, vous êtes invisible pendant cette phase de réflexion. Un site internet couvreur bien construit, c\'est votre vitrine ouverte 24h/24, où vos photos de chantiers font le travail à votre place.',
  },
  {
    question: 'Combien coûte un site internet pour couvreur ?',
    answer: 'Un site vitrine complet pour couvreur démarre autour de 1 500 euros. Il comprend les pages de prestations (toiture neuve, rénovation, isolation, zinguerie), un portfolio de chantiers avant/après, l\'optimisation Google et la fiche Business Profile. Tout est clair dans le devis, rien d\'obligatoire par la suite.',
  },
  {
    question: 'Quelles prestations dois-je mettre en avant sur mon site ?',
    answer: 'Toiture neuve, rénovation de toiture, démoussage et nettoyage, isolation par l\'extérieur, charpente, zinguerie et gouttières, étanchéité, et les interventions d\'urgence après tempête. Chaque prestation mérite sa propre page, avec photos et explications simples. Les clients ne cherchent pas un couvreur, ils cherchent une solution à un problème précis.',
  },
  {
    question: 'Les photos avant/après, est-ce vraiment important ?',
    answer: 'C\'est même essentiel. Une toiture sale avant, propre et neuve après, ça vaut mille mots. Les particuliers jugent un couvreur sur ses réalisations. Je mets en place des galeries avant/après pour chaque type de chantier, avec une explication courte. C\'est ce qui déclenche la prise de contact dans 7 cas sur 10.',
  },
  {
    question: 'Comment capter les urgences après tempête ou intempéries ?',
    answer: 'Les recherches "couvreur urgence tempête", "tuiles arrachées" ou "bâchage toiture" explosent après chaque gros coup de vent. Je crée une page dédiée aux urgences, avec numéro direct, zones d\'intervention et délai de prise en charge. Sur mobile, cette page s\'affiche en priorité et le bouton appel est énorme.',
  },
  {
    question: 'Je suis couvreur dans une petite commune, ça marche aussi ?',
    answer: 'Oui, et c\'est même plus facile qu\'en ville où la concurrence est féroce. Dans une zone rurale ou un bourg, quelques pages bien optimisées sur les communes alentour vous placent en haut de Google en quelques mois. J\'accompagne des couvreurs partout en France, de la métropole à la campagne.',
  },
  {
    question: 'Faut-il parler des aides et primes sur le site ?',
    answer: 'Oui, c\'est un argument massue. MaPrimeRénov, CEE, TVA à 5,5% sur la rénovation énergétique : les clients ne connaissent pas toujours ces dispositifs. Une page qui explique simplement ce à quoi ils ont droit, ça déclenche beaucoup de demandes de devis. Je rédige ce contenu pour vous, à jour.',
  },
  {
    question: 'Est-ce que vous faites aussi les textes et les photos ?',
    answer: 'Je rédige 100% des textes, vous n\'avez rien à écrire. Pour les photos, je pars de celles que vous avez prises sur chantier avec votre smartphone. Je les retouche si besoin (exposition, recadrage) pour qu\'elles rendent bien sur le site. Si vous manquez vraiment de photos, je peux vous conseiller un photographe local ou utiliser des vues 3D temporaires.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Couvreur', description, '/site-internet-couvreur', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Couvreur', description, '/site-internet-couvreur'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Couvreur', path: '/site-internet-couvreur' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetCouvreurPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteInternetCouvreurContent faqs={faqs} />
    </>
  )
}

import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet climatisation : création de site web optimisé SEO. Installation clim réversible, monosplit, multisplit, entretien, dépannage, tertiaire — capter les chantiers via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Climatisation | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-climatisation' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'La climatisation devient-elle un vrai marché en France ?',
    answer: 'Oui, massivement. Avec le réchauffement climatique et les étés caniculaires répétés, l\'installation de climatisation domestique explose. Les requêtes "installation climatisation + ville", "clim réversible maison" ont plus que doublé en 5 ans. C\'est un marché porteur où les pros bien référencés signent 5 à 15 chantiers par mois en haute saison.',
  },
  {
    question: 'Monosplit, multisplit, gainable : quelle stratégie de pages ?',
    answer: 'Une page par technologie. Monosplit pour les petites surfaces (studio, chambre), multisplit pour les maisons (3-5 pièces), gainable pour le haut de gamme (invisible, silencieux). Chaque solution a son client et son budget. Une page par technologie = trois fois plus de captation SEO.',
  },
  {
    question: 'Le tertiaire est-il un levier B2B intéressant ?',
    answer: 'Énorme. Bureaux, commerces, cabinets médicaux, restaurants : tous ont besoin de climatisation. Le tertiaire apporte des contrats plus gros (10 à 100 k€) et des contrats d\'entretien récurrents. Une page "Climatisation tertiaire + votre ville" capte cette clientèle B2B qui ne cherche pas au même endroit que les particuliers.',
  },
  {
    question: 'L\'entretien obligatoire des clims est-il à mettre en avant ?',
    answer: 'Oui, c\'est une obligation légale pour les clims de plus de 4 kWe. Une page dédiée à l\'entretien annuel obligatoire capte les propriétaires qui doivent se mettre en règle. C\'est un levier de chiffre d\'affaires récurrent stable qui complète les chantiers d\'installation saisonniers.',
  },
]

const config: MetierConfig = {
  metier: 'Climatisation',
  metierLower: 'climatisation',
  heroKicker: 'Sites web pour installateur climatisation',
  heroHeadline: 'Site internet climatisation,',
  heroHeadlineItalic: 'un marché qui explose avec chaque canicule',
  heroDescription:
    'Je crée des sites internet pour les installateurs de climatisation partout en France. Monosplit, multisplit, gainable, entretien, tertiaire : chaque page capte les chantiers d\'un marché en forte croissance.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour climatisation',
  whatKicker: 'Sites web pour installateur clim',
  whatTitle: 'Un installateur clim',
  whatTitleItalic: 'qui profite de chaque vague de chaleur',
  whatPara1:
    'Chaque canicule booste massivement les recherches "installation climatisation + ville". Les particuliers qui ont souffert en été décident en septembre ou octobre d\'équiper leur maison avant la prochaine vague. Les entreprises équipent leurs bureaux. Le marché est en forte croissance et les installateurs bien référencés captent une part énorme de ces demandes.',
  whatPara2:
    'Je construis des sites climatisation qui captent les deux marchés : résidentiel (monosplit, multisplit, gainable) et tertiaire (bureaux, commerces, cabinets). Pages par technologie, pages par segment, entretien obligatoire mis en avant, contrats récurrents. Un site qui transforme chaque canicule en pipeline de chantiers.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1460925895917-afdab827c52f-w800.webp',
  whatImageAlt: 'Création site internet pour climatisation',
  pillars: [
    { icon: 'Target', title: 'Pages par technologie', desc: 'Monosplit, multisplit, gainable : chaque technologie a son budget et sa clientèle.' },
    { icon: 'FileSearch', title: 'Tertiaire B2B', desc: 'Bureaux, commerces, restaurants : contrats 10-100 k€ et entretien récurrent.' },
    { icon: 'TrendingUp', title: 'Entretien obligatoire', desc: 'Obligation légale au-delà de 4 kWe. Levier de chiffre d\'affaires stable.' },
  ],
  whatFooterText:
    'Un installateur clim bien référencé signe 8 à 20 chantiers par mois en haute saison (mai-septembre).',
  timelineSteps: [
    { number: '01', title: 'On cadre votre offre', description: 'Technologies installées, marques (Daikin, Mitsubishi, Toshiba, LG), certifications QualiPAC, RGE, zones, tertiaire ou résidentiel.' },
    { number: '02', title: 'Construction du site', description: 'Pages par technologie, tertiaire, entretien, marques, formulaire devis qualifié.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières demandes, suivi des pics saisonniers.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des chantiers clim',
  keywordsIntro:
    'Les requêtes climatisation explosent en saison et se divisent par technologie, par segment (résidentiel ou tertiaire) et par motif (installation, entretien, dépannage).',
  keywordCategories: [
    { icon: 'Target', title: 'Technologies', text: 'clim réversible, monosplit, multisplit, gainable, clim murale, clim cassette.' },
    { icon: 'Zap', title: 'Installation', text: 'installation climatisation, prix clim maison, devis climatisation, clim pour appartement.' },
    { icon: 'User', title: 'Tertiaire', text: 'climatisation bureaux, clim restaurant, clim commerce, clim cabinet médical, VRV bureaux.' },
    { icon: 'FileSearch', title: 'Entretien', text: 'entretien climatisation obligatoire, recharge gaz clim, nettoyage clim, contrat entretien clim.' },
  ],
  relatedTitle: 'Vous êtes un autre installateur chauffage-clim ?',
  relatedPara:
    'Les métiers chauffage-climatisation ont une logique proche : pages par technologie, certifications, aides. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet chauffagiste', href: '/site-internet-chauffagiste' },
    { label: 'Site internet pompe à chaleur', href: '/site-internet-pompe-a-chaleur' },
    { label: 'Site internet installateur chaudière', href: '/site-internet-installateur-chaudiere' },
    { label: 'Site internet plombier-chauffagiste', href: '/site-internet-plombier-chauffagiste' },
  ],
  miniCtaText: 'Envie de profiter de chaque canicule pour remplir votre carnet de commandes ?',
  caseStudiesKicker: 'Sites créés pour des artisans',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Climatisation', description, '/site-internet-climatisation', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Climatisation', description, '/site-internet-climatisation'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Climatisation', path: '/site-internet-climatisation' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetClimatisationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

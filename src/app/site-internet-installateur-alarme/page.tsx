import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet installateur alarme : création de site web optimisé SEO. Alarme maison, entreprise, vidéosurveillance, télésurveillance, domotique — capter les chantiers via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Installateur Alarme | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-installateur-alarme' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Pourquoi un installateur alarme a besoin d\'un site ?',
    answer: 'Parce que l\'installation d\'alarme est un achat très réfléchi : les clients comparent plusieurs devis, lisent sur les marques, les technologies, la télésurveillance. Ils tapent "installation alarme + ville", "devis alarme maison", "alarme entreprise". Sans site détaillé qui rassure et explique votre offre, vous êtes exclu des comparatifs.',
  },
  {
    question: 'Les marques installées sont-elles un argument à mettre en avant ?',
    answer: 'Oui, absolument. Verisure, Daitem, Hager, Somfy : les clients tapent parfois directement la marque ("installateur Verisure + ville") après avoir vu une pub. Une page par marque distribuée capte ces requêtes spécifiques et augmente votre visibilité sur des clients déjà convaincus d\'une technologie.',
  },
  {
    question: 'La télésurveillance peut-elle être valorisée ?',
    answer: 'Énormément. C\'est un revenu récurrent (30 à 60 euros par mois par abonné) qui dure des années. Une page dédiée "Télésurveillance + votre ville" qui explique le fonctionnement (centre de télésurveillance 24/7, intervention rapide, levée de doute) capte les clients qui veulent aller au-delà de la simple installation.',
  },
  {
    question: 'Les certifications APSAD sont-elles importantes ?',
    answer: 'Critiques pour le B2B. Les assureurs exigent souvent une certification APSAD pour couvrir les entreprises. Une mention claire de vos certifications (APSAD R81, P3, NF&A2P) rassure les acheteurs B2B et vous ouvre les marchés des entreprises, commerces, entrepôts. C\'est souvent là que se trouvent les plus gros contrats.',
  },
]

const config: MetierConfig = {
  metier: 'Installateur Alarme',
  metierLower: 'installateur alarme',
  heroKicker: 'Sites web pour installateur alarme',
  heroHeadline: 'Site internet installateur alarme,',
  heroHeadlineItalic: 'des devis qualifiés qui arrivent sans effort',
  heroDescription:
    'Je crée des sites internet pour les installateurs d\'alarme et de systèmes de sécurité partout en France. Alarme maison, entreprise, vidéosurveillance, télésurveillance, domotique : chaque page capte une requête avec des arguments qui convertissent.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour installateur alarme',
  whatKicker: 'Sites web pour installateur alarme',
  whatTitle: 'Un installateur alarme',
  whatTitleItalic: 'choisi avant même le premier rendez-vous',
  whatPara1:
    'L\'installation d\'alarme est un marché où les clients comparent 3 à 5 devis avant de signer. Ils tapent "installation alarme + ville", "alarme entreprise", "télésurveillance maison". Ils cherchent un installateur certifié, avec une offre claire, des marques fiables, et surtout une approche conseil plutôt que commerciale agressive. Votre site est votre premier filtre de qualification.',
  whatPara2:
    'Je construis des sites installateur alarme qui captent ces clients prêts à investir. Pages par type d\'installation, par marque, par segment (maison, entreprise, commerce), mise en avant des certifications APSAD, option télésurveillance. Un site qui fait la différence dans les comparatifs.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1558002038-1055907df827-w800.webp',
  whatImageAlt: 'Création site internet pour installateur alarme',
  pillars: [
    { icon: 'Target', title: 'Pages par segment', desc: 'Maison, entreprise, commerce : chaque segment a son approche et ses mots-clés.' },
    { icon: 'FileSearch', title: 'Certifications APSAD', desc: 'Mention claire des certifications. Obligatoire pour capter les contrats B2B assurés.' },
    { icon: 'TrendingUp', title: 'Télésurveillance récurrente', desc: 'Revenus mensuels qui durent des années. Page dédiée pour transformer l\'installation en abonnement.' },
  ],
  whatFooterText:
    'Un installateur alarme bien référencé signe en moyenne 6 à 15 installations par mois via les demandes entrantes.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre offre', description: 'Marques distribuées, certifications APSAD, types d\'installations, télésurveillance, zones couvertes, contrats d\'entretien.' },
    { number: '02', title: 'Construction du site', description: 'Pages par segment et par marque, certifications, télésurveillance, formulaire de devis qualifié.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premiers devis entrants, suivi des conversions et ajustements.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des devis alarme',
  keywordsIntro:
    'Les clients alarme ont des profils variés : particuliers sécurisant leur maison, commerçants, entreprises, gestionnaires de patrimoine. Chaque profil a ses requêtes.',
  keywordCategories: [
    { icon: 'User', title: 'Particuliers', text: 'installation alarme maison, alarme appartement, prix alarme, devis alarme maison.' },
    { icon: 'Target', title: 'Professionnels', text: 'alarme entreprise, alarme commerce, alarme entrepôt, APSAD installation, alarme bureau.' },
    { icon: 'FileSearch', title: 'Technologies', text: 'installateur Verisure, Daitem, Hager, alarme sans fil, alarme connectée.' },
    { icon: 'Zap', title: 'Services', text: 'télésurveillance, vidéosurveillance, caméra IP, domotique, contrôle d\'accès.' },
  ],
  relatedTitle: 'Vous proposez d\'autres services de sécurité ?',
  relatedPara:
    'Les métiers de la sécurité et de la serrurerie ont une logique proche : confiance, certifications, conseils. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet serrurier', href: '/site-internet-serrurier' },
    { label: 'Site internet dépannage serrurier', href: '/site-internet-depannage-serrurier' },
    { label: 'Site internet urgence serrurier', href: '/site-internet-urgence-serrurier' },
    { label: 'Site internet ouverture porte', href: '/site-internet-ouverture-porte' },
  ],
  miniCtaText: 'Envie de capter des devis alarme qualifiés sans prospecter ?',
  caseStudiesKicker: 'Sites créés pour des artisans',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Installateur Alarme', description, '/site-internet-installateur-alarme', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Installateur Alarme', description, '/site-internet-installateur-alarme'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Installateur Alarme', path: '/site-internet-installateur-alarme' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetInstallateurAlarmePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

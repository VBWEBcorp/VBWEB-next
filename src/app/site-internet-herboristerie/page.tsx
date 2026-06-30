import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet herboristerie : création de site web optimisé SEO. Plantes médicinales, tisanes, phytothérapie, gemmothérapie, conseils — capter les clients via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Herboristerie | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-herboristerie' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Une herboristerie a-t-elle besoin d\'un site internet ?',
    answer: 'Oui, car c\'est un métier de conseil et d\'expertise que le grand public cherche activement sur Google. Les requêtes "herboristerie + ville", "plantes + problème santé", "tisane sommeil", "phytothérapie + besoin" sont tapées par des clients motivés qui viennent vous voir en boutique après avoir lu votre site. Sans présence web, vous captez uniquement la clientèle de passage.',
  },
  {
    question: 'Peut-on parler des vertus des plantes sans problème réglementaire ?',
    answer: 'Oui, à condition de rester prudent dans la formulation. On peut parler d\'usages traditionnels, de réputation, d\'histoire de la plante, sans affirmer de propriétés thérapeutiques. Je connais la réglementation applicable aux herboristes et aux vendeurs de plantes, et je rédige chaque page dans le respect de ces règles tout en restant visible sur Google.',
  },
  {
    question: 'Le conseil personnalisé peut-il être valorisé via le site ?',
    answer: 'Absolument. C\'est votre principal différenciateur face aux sites e-commerce généralistes. Une page "Nos conseils" ou la possibilité de prendre rendez-vous pour une consultation conseil (parfois payante) positionne votre herboristerie comme un lieu d\'expertise, pas juste un magasin.',
  },
  {
    question: 'Dois-je vendre en ligne ?',
    answer: 'Pas nécessairement. Beaucoup d\'herboristeries fonctionnent très bien avec un site vitrine local qui amène les clients en boutique. Si vous voulez passer à la vente en ligne, c\'est faisable mais il faut respecter la réglementation applicable. Je peux intégrer une boutique si votre modèle économique le justifie.',
  },
]

const config: MetierConfig = {
  metier: 'Herboristerie',
  metierLower: 'herboristerie',
  heroKicker: 'Sites web pour herboristerie',
  heroHeadline: 'Site internet herboristerie,',
  heroHeadlineItalic: 'un savoir ancestral qui rencontre Google',
  heroDescription:
    'Je crée des sites internet pour les herboristeries partout en France. Plantes médicinales, tisanes, phytothérapie, conseils personnalisés : chaque page valorise votre expertise et capte une clientèle locale en recherche de produits naturels de qualité.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour herboristerie',
  whatKicker: 'Sites web pour herboristerie',
  whatTitle: 'Une herboristerie visible',
  whatTitleItalic: 'par des clients en quête de naturel',
  whatPara1:
    'L\'herboristerie revient en force depuis plusieurs années. Les consommateurs veulent comprendre ce qu\'ils consomment, privilégier les circuits courts, et trouver du conseil personnalisé qu\'ils ne trouvent pas sur les sites e-commerce généralistes. Ils cherchent "herboristerie + ville", "plantes sommeil", "phytothérapie digestion" — et vont dans la boutique qui leur inspire confiance dès le premier clic.',
  whatPara2:
    'Je construis des sites herboristerie qui valorisent votre expertise. Pages sur vos familles de produits, conseils organisés par besoin ou par plante, histoire et savoir-faire, possibilité de rendez-vous conseil. Respect strict de la réglementation applicable aux herboristes.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1471943311424-646960669fbc-w800.webp',
  whatImageAlt: 'Création site internet pour herboristerie',
  pillars: [
    { icon: 'User', title: 'Expertise valorisée', desc: 'Votre histoire, votre savoir-faire, votre formation. Ce qui fait la différence avec un e-commerce froid.' },
    { icon: 'FileSearch', title: 'Conseils organisés', desc: 'Par besoin ou par plante : le client trouve ce qu\'il cherche, vous ramenez du trafic qualifié.' },
    { icon: 'Target', title: 'Rendez-vous conseil', desc: 'Position premium d\'expert, avec possibilité de consultation personnalisée payante.' },
  ],
  whatFooterText:
    'Une herboristerie bien référencée capte 30 à 80 visites qualifiées par semaine après 3 mois en ligne.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre offre', description: 'Familles de produits, spécialités conseil, formation, histoire de la boutique, cibles (particuliers, pros, thérapeutes).' },
    { number: '02', title: 'Construction du site', description: 'Pages produits et conseils, histoire, rendez-vous, conformité réglementaire.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, suivi des visites entrantes, ajustement des pages.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des clients à une herboristerie',
  keywordsIntro:
    'Les clients d\'une herboristerie cherchent soit une famille de plantes, soit un problème à résoudre, soit simplement une boutique proche avec du conseil.',
  keywordCategories: [
    { icon: 'Target', title: 'Par besoin', text: 'plantes sommeil, plantes stress, plantes digestion, plantes immunité, plantes ménopause.' },
    { icon: 'FileSearch', title: 'Par forme', text: 'tisane bio, gélules plantes, gemmothérapie, élixir floral, huile essentielle.' },
    { icon: 'User', title: 'Conseil', text: 'herboriste conseil, phytothérapie + ville, herboristerie traditionnelle, conseil plantes.' },
    { icon: 'MapPin', title: 'Local', text: 'herboristerie + ville, herboriste proche, boutique bio plantes, magasin bio + ville.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel du bien-être ou du naturel ?',
  relatedPara:
    'Les métiers du bien-être et du naturel ont une logique SEO proche : expertise valorisée, conseils personnalisés, proximité locale. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet naturopathe', href: '/site-internet-naturopathe' },
    { label: 'Site internet pharmacie', href: '/site-internet-pharmacie' },
    { label: 'Site internet parapharmacie', href: '/site-internet-parapharmacie' },
    { label: 'Site internet producteur bio', href: '/site-internet-producteur-bio' },
  ],
  miniCtaText: 'Envie de faire vivre votre herboristerie auprès d\'une clientèle locale fidèle ?',
  caseStudiesKicker: 'Sites créés pour des commerces',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Herboristerie', description, '/site-internet-herboristerie', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Herboristerie', description, '/site-internet-herboristerie'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Herboristerie', path: '/site-internet-herboristerie' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetHerboristeriePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

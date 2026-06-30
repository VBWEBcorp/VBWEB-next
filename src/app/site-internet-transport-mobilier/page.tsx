import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet transport de mobilier : création de site web optimisé SEO. Transport meubles, piano, œuvre d\'art, objet lourd, livraison meuble — capter les clients via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Transport Mobilier | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-transport-mobilier' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Pourquoi une niche "transport de mobilier" ?',
    answer: 'Parce qu\'il y a de plus en plus de demandes qui ne sont pas vraiment des déménagements complets mais des transports ponctuels de meubles : livraison d\'un meuble acheté sur Leboncoin, transport d\'un canapé hérité, transfert d\'une commode entre deux appartements. Ces demandes sont mal servies par les gros déménageurs (trop cher) et inaccessibles aux particuliers (pas de camion). Un positionnement transport de mobilier capte cette niche.',
  },
  {
    question: 'Les pianos et objets lourds sont-ils un vrai levier ?',
    answer: 'Oui, ce sont des paniers premium. Transport d\'un piano droit = 300-500 €, piano à queue = 500-1 500 €, coffre-fort = 400-1 000 €. Une page dédiée "Transport piano + ville" capte une clientèle qui cherche absolument un spécialiste avec sangles, diable, compétence technique. Peu de concurrence, marges élevées.',
  },
  {
    question: 'Le transport d\'œuvres d\'art est-il accessible ?',
    answer: 'C\'est un marché de niche très rentable mais exigeant. Antiquaires, galeries, collectionneurs cherchent des transporteurs qui comprennent l\'emballage spécifique, l\'assurance valeur déclarée, la traçabilité. Si vous avez les compétences, une page dédiée à ce segment haut de gamme rapporte énormément par commande (200 à 2 000 €).',
  },
  {
    question: 'Comment tarifier ces interventions ponctuelles ?',
    answer: 'Par forfaits clairs selon le type d\'objet et la distance. "Forfait canapé sur 30 km : 150 €", "Forfait piano droit sur 20 km : 350 €". Cette transparence évite les négociations fastidieuses et convertit mieux que "devis sur mesure". Les clients veulent un prix affiché avant d\'appeler.',
  },
]

const config: MetierConfig = {
  metier: 'Transport Mobilier',
  metierLower: 'transport de mobilier',
  heroKicker: 'Sites web pour transport de mobilier',
  heroHeadline: 'Site internet transport de mobilier,',
  heroHeadlineItalic: 'une niche ponctuelle avec des paniers premium',
  heroDescription:
    'Je crée des sites internet pour les transporteurs spécialisés en mobilier partout en France. Meubles, piano, objets lourds, œuvres d\'art, livraison après achat : chaque page capte une niche ponctuelle avec des paniers moyens élevés.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour transport de mobilier',
  whatKicker: 'Sites web pour transport mobilier',
  whatTitle: 'Un transporteur de mobilier',
  whatTitleItalic: 'qui capte entre les déménagements complets',
  whatPara1:
    'De plus en plus de particuliers cherchent un prestataire pour transporter un meuble unique plutôt qu\'un déménagement complet : canapé acheté sur Leboncoin, commode héritée, piano transmis, œuvre d\'art achetée en galerie. Ils cherchent "transport meuble + ville", "transport piano + ville", "livraison meuble lourd". Ce sont des demandes ponctuelles mais rentables que les gros déménageurs traitent mal.',
  whatPara2:
    'Je construis des sites transport mobilier qui captent cette clientèle de niche. Pages par type de transport (meuble classique, piano, objet lourd, œuvre d\'art), forfaits clairs, assurances, équipement dédié. Un positionnement qui génère un flux de demandes ponctuelles rémunératrices sans ressembler à un déménageur classique.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1600585154340-be6161a56a0c-w800.webp',
  whatImageAlt: 'Création site internet pour transport de mobilier',
  pillars: [
    { icon: 'Target', title: 'Forfaits par objet', desc: 'Prix clairs par type de transport. Convertit mieux que "devis sur mesure".' },
    { icon: 'FileSearch', title: 'Pianos et lourds', desc: 'Niche premium rémunératrice : 300-1 500 € par intervention avec peu de concurrence.' },
    { icon: 'User', title: 'Œuvres d\'art', desc: 'Marché haut de gamme exigeant mais rentable pour les transporteurs spécialisés.' },
  ],
  whatFooterText:
    'Un transporteur mobilier bien référencé reçoit 15 à 40 demandes ponctuelles par mois via Google.',
  timelineSteps: [
    { number: '01', title: 'On cadre vos spécialités', description: 'Types de mobilier transportés, équipement spécifique (diable piano, sangles, emballages), assurances, zones, forfaits.' },
    { number: '02', title: 'Construction du site', description: 'Pages par type de transport, forfaits, assurances, équipement, formulaire de demande.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières demandes, suivi des conversions.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des transports ponctuels de mobilier',
  keywordsIntro:
    'Les requêtes de transport ponctuel sont variées selon le type d\'objet et la distance à parcourir.',
  keywordCategories: [
    { icon: 'Target', title: 'Meuble classique', text: 'transport meuble, livraison meuble, transport canapé, transport commode.' },
    { icon: 'Zap', title: 'Piano', text: 'transport piano, déménagement piano droit, déménagement piano queue, monteur piano.' },
    { icon: 'FileSearch', title: 'Lourd', text: 'transport coffre-fort, transport électroménager, transport matériel lourd, transport sculpture.' },
    { icon: 'User', title: 'Haut de gamme', text: 'transport œuvre d\'art, transport tableau, transport antiquité, transport galerie.' },
  ],
  relatedTitle: 'Vous proposez d\'autres services de transport ou déménagement ?',
  relatedPara:
    'Les métiers de transport et déménagement ont une logique proche : devis, forfaits, équipement. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet déménageur', href: '/site-internet-demenageur' },
    { label: 'Site internet entreprise de déménagement', href: '/site-internet-entreprise-demenagement' },
    { label: 'Site internet garde-meubles', href: '/site-internet-garde-meubles' },
    { label: 'Site internet déménagement international', href: '/site-internet-demenagement-international' },
  ],
  miniCtaText: 'Envie de capter les transports ponctuels de mobilier premium dans votre zone ?',
  caseStudiesKicker: 'Sites créés pour des prestataires',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Transport Mobilier', description, '/site-internet-transport-mobilier', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Transport Mobilier', description, '/site-internet-transport-mobilier'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Transport Mobilier', path: '/site-internet-transport-mobilier' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetTransportMobilierPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

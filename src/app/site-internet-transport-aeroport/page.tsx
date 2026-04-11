import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet transport aéroport : création de site web optimisé SEO. Navette aéroport, transfert, réservation, CDG, Orly, aéroport de province — capter les voyageurs via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Transport Aéroport | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-transport-aeroport' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Pourquoi "transport aéroport" plutôt que "taxi" ou "VTC" ?',
    answer: 'Parce que c\'est la requête la plus volumineuse et la plus rentable en transport de personnes. "Transport aéroport + ville", "navette aéroport + ville", "transfert aéroport" sont tapées 24-72 heures avant un vol par des clients qui veulent sécuriser leur transport à l\'avance. Paniers moyens 50-150 euros, paiement souvent immédiat, clients réguliers en voyage d\'affaires.',
  },
  {
    question: 'Comment capter les réservations à l\'avance plutôt qu\'en urgence ?',
    answer: 'Par un système de réservation en ligne simple. Le client indique son vol, son adresse, son nombre de passagers, ses bagages. Il reçoit une confirmation et paie (ou non) avant la course. Cette pré-qualification vous garantit la course et rassure le client qui ne dépend plus d\'un "oui/non" le jour J.',
  },
  {
    question: 'Les clients professionnels en voyage d\'affaires sont-ils un levier ?',
    answer: 'Énormément. Un voyageur d\'affaires fait 15-30 allers-retours aéroport par an, et une fois qu\'il a trouvé son chauffeur de confiance, il le garde. Une page "Transport aéroport professionnels" qui propose facturation pro, chauffeur attitré, flexibilité horaire fidélise ces clients récurrents qui valent 1 500-4 500 € par an chacun.',
  },
  {
    question: 'Faut-il se spécialiser sur un aéroport précis ?',
    answer: 'Oui, pour le SEO. "Transport CDG + votre ville", "transfert Orly + votre ville", "navette Beauvais", chaque aéroport a sa requête et sa clientèle. Si vous couvrez CDG, Orly et Beauvais depuis votre zone, trois pages dédiées multiplient vos captations. Chaque page vise une destination précise avec des informations utiles (temps de trajet, tarifs, vols desservis).',
  },
]

const config: MetierConfig = {
  metier: 'Transport Aéroport',
  metierLower: 'transport aéroport',
  heroKicker: 'Sites web pour transport aéroport',
  heroHeadline: 'Site internet transport aéroport,',
  heroHeadlineItalic: 'des transferts qui se réservent 48h à l\'avance',
  heroDescription:
    'Je crée des sites internet pour les chauffeurs et entreprises spécialisés en transport aéroport partout en France. CDG, Orly, aéroports de province, voyageurs affaires, familles : chaque page capte des réservations à forte valeur.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour transport aéroport',
  whatKicker: 'Sites web pour transport aéroport',
  whatTitle: 'Un transport aéroport',
  whatTitleItalic: 'réservé sans stress 48 heures avant le vol',
  whatPara1:
    'Les voyageurs qui prennent l\'avion cherchent un transport aéroport fiable à l\'avance. Ils ne veulent pas dépendre d\'une appli le jour J, ils veulent une confirmation. Les requêtes "transport aéroport + ville", "navette aéroport + ville", "transfert CDG + votre département" explosent en permanence et amènent des clients motivés, prêts à payer et souvent à fidéliser.',
  whatPara2:
    'Je construis des sites transport aéroport qui captent ces réservations anticipées. Pages par aéroport desservi, tarifs forfaitaires clairs, système de réservation en ligne, option professionnel avec facturation, avis clients récents. Un site qui vous remplit votre planning de transferts sans appeler personne.',
  whatImageUrl: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour transport aéroport',
  pillars: [
    { icon: 'Target', title: 'Pages par aéroport', desc: 'CDG, Orly, Beauvais : chaque aéroport a sa requête et ses clients spécifiques.' },
    { icon: 'FileSearch', title: 'Réservation en ligne', desc: 'Simple et rapide. Le client sécurise son transport sans appeler ni attendre.' },
    { icon: 'User', title: 'Option B2B', desc: 'Voyageurs d\'affaires fidèles : 15-30 courses/an/client, 1,5-4,5 k€ de récurrent chacun.' },
  ],
  whatFooterText:
    'Un transport aéroport bien référencé enregistre 30 à 80 réservations par mois en direct via Google.',
  timelineSteps: [
    { number: '01', title: 'On cadre vos destinations', description: 'Aéroports desservis, véhicule, tarifs forfaitaires, options (enfants, bagages, accessibilité), zones de prise en charge.' },
    { number: '02', title: 'Construction du site', description: 'Pages par aéroport, système de réservation, forfaits, option pro, avis clients.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières réservations en ligne, suivi des fidélisations B2B.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des réservations de transport aéroport',
  keywordsIntro:
    'Les voyageurs cherchent leur transport aéroport par destination précise et par type de service. Chaque requête correspond à un vol à venir.',
  keywordCategories: [
    { icon: 'Target', title: 'Grands aéroports', text: 'transport CDG, transfert Roissy, navette Orly, transport Beauvais, transfert Marignane.' },
    { icon: 'Zap', title: 'Province', text: 'transport aéroport Nantes, Bordeaux, Lyon, Toulouse, Marseille + ville d\'origine.' },
    { icon: 'User', title: 'Voyageurs', text: 'navette aéroport affaires, transport professionnel aéroport, chauffeur attitré aéroport.' },
    { icon: 'FileSearch', title: 'Option', text: 'transport aéroport famille, transport aéroport bagages, transport aéroport siège bébé.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel du transport ?',
  relatedPara:
    'Les métiers de transport de personnes ont une logique proche : réservation, confiance, fidélisation. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet taxi', href: '/site-internet-taxi' },
    { label: 'Site internet VTC', href: '/site-internet-vtc' },
    { label: 'Site internet chauffeur privé', href: '/site-internet-chauffeur-prive' },
    { label: 'Site internet taxi conventionné', href: '/site-internet-taxi-conventionne' },
  ],
  miniCtaText: 'Envie de remplir votre planning de transferts aéroport sans prospecter ?',
  caseStudiesKicker: 'Sites créés pour des prestataires',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Transport Aéroport', description, '/site-internet-transport-aeroport', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Transport Aéroport', description, '/site-internet-transport-aeroport'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Transport Aéroport', path: '/site-internet-transport-aeroport' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetTransportAeroportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

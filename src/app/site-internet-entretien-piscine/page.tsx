import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet entretien piscine : création de site web optimisé SEO. Hivernage, ouverture, contrat annuel, traitement eau, analyse, dépannage — capter le récurrent via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Entretien Piscine | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-entretien-piscine' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Pourquoi séparer entretien et construction sur deux pages ?',
    answer: 'Parce que ce sont deux marchés totalement différents. Les clients qui cherchent "entretien piscine + ville" ont déjà une piscine et veulent un prestataire régulier. Ceux qui cherchent "construction piscine" n\'en ont pas encore. Les deux audiences ne tapent pas les mêmes requêtes et une page unique dilue le message. Séparer les deux capte les deux clientèles simultanément.',
  },
  {
    question: 'Le contrat d\'entretien annuel est-il vraiment rentable ?',
    answer: 'C\'est votre meilleur revenu récurrent. Entre 600 et 1 500 euros par an et par piscine, avec peu de concurrence locale sérieuse. 30 contrats d\'entretien annuels représentent 25 à 45 k€ de chiffre d\'affaires stable chaque année. Une page dédiée aux contrats annuels, avec les prestations incluses, convertit mieux que la vente d\'interventions ponctuelles.',
  },
  {
    question: 'L\'ouverture et l\'hivernage doivent-ils avoir leurs propres pages ?',
    answer: 'Oui, car ce sont deux requêtes saisonnières très volumineuses. "Hivernage piscine + ville" explose en septembre-octobre, "ouverture piscine + ville" en avril-mai. Chaque saison a son pic et sa clientèle pressée. Une page dédiée à chacune capte ces recherches saisonnières, même si les clients ne cherchent pas un contrat annuel complet.',
  },
  {
    question: 'Le traitement de l\'eau peut-il être un levier ?',
    answer: 'Oui, très sous-estimé. Les clients cherchent "eau piscine verte", "eau piscine trouble", "analyse eau piscine" — ces requêtes amènent des clients paniqués qui veulent une intervention rapide. Une page "Problèmes d\'eau" qui explique les causes fréquentes et propose votre intervention génère des appels immédiats et peut conduire à signer des contrats annuels.',
  },
]

const config: MetierConfig = {
  metier: 'Entretien Piscine',
  metierLower: 'entretien piscine',
  heroKicker: 'Sites web pour entretien piscine',
  heroHeadline: 'Site internet entretien piscine,',
  heroHeadlineItalic: 'des contrats récurrents qui stabilisent l\'année',
  heroDescription:
    'Je crée des sites internet pour les entreprises d\'entretien piscine partout en France. Hivernage, ouverture, contrat annuel, traitement eau, dépannage : chaque page capte une clientèle de propriétaires qui veulent déléguer.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour entretien piscine',
  whatKicker: 'Sites web pour entretien piscine',
  whatTitle: 'Un entretien piscine',
  whatTitleItalic: 'qui transforme chaque piscine en contrat récurrent',
  whatPara1:
    'Les propriétaires de piscine sont de plus en plus nombreux à déléguer l\'entretien. Ils n\'ont plus le temps ou n\'ont plus envie de s\'en occuper. Ils cherchent "entretien piscine + leur ville", "contrat annuel piscine", "hivernage piscine" — et choisissent un prestataire qui inspire confiance et propose des forfaits clairs. Ce sont des contrats entre 600 et 1 500 euros par an et par piscine, très stables.',
  whatPara2:
    'Je construis des sites entretien piscine qui captent cette clientèle en recherche de délégation. Pages par saison (hivernage, ouverture), pages par problème (eau verte, trouble, panne), contrats annuels clairement présentés, zones d\'intervention. Un flux de contacts stable qui transforme votre activité en revenu récurrent.',
  whatImageUrl: 'https://images.unsplash.com/photo-1519821172144-4f87d85de2a6?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour entretien piscine',
  pillars: [
    { icon: 'TrendingUp', title: 'Contrat annuel mis en avant', desc: 'Votre meilleur revenu récurrent : 600-1 500 €/an par client sur plusieurs années.' },
    { icon: 'Target', title: 'Pages saisonnières', desc: 'Hivernage en automne, ouverture au printemps : deux pics de recherche à capter.' },
    { icon: 'Zap', title: 'Pages problèmes d\'eau', desc: 'Eau verte, trouble, analyse : clients paniqués qui appellent immédiatement.' },
  ],
  whatFooterText:
    'Un entretien piscine bien référencé signe 20 à 50 contrats annuels par saison, soit 15-30 k€ de récurrent stable.',
  timelineSteps: [
    { number: '01', title: 'On cadre vos offres', description: 'Contrats annuels, interventions ponctuelles, hivernage, ouverture, dépannage, analyses, zones couvertes, tarifs.' },
    { number: '02', title: 'Construction du site', description: 'Pages saisonnières, contrats annuels, problèmes d\'eau, formulaire de devis simple.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières demandes de contrat, suivi des conversions saisonnières.' },
  ],
  keywordsTitle: 'Les requêtes Google qui remplissent un carnet de contrats entretien piscine',
  keywordsIntro:
    'Les propriétaires de piscine cherchent selon la saison, le problème, ou le type de service. Chaque requête correspond à un moment du cycle annuel piscine.',
  keywordCategories: [
    { icon: 'TrendingUp', title: 'Contrats', text: 'contrat entretien piscine, entretien annuel piscine, forfait piscine, piscinier annuel.' },
    { icon: 'Target', title: 'Saisonnier', text: 'hivernage piscine, ouverture piscine, remise en service piscine, bâche hivernage.' },
    { icon: 'Zap', title: 'Problèmes eau', text: 'eau piscine verte, eau trouble piscine, algues piscine, analyse eau piscine.' },
    { icon: 'User', title: 'Équipements', text: 'dépannage pompe piscine, réparation filtre, changement liner, entretien robot piscine.' },
  ],
  relatedTitle: 'Vous proposez d\'autres services piscine ?',
  relatedPara:
    'Les métiers de la piscine ont une logique proche : récurrent, saisonnalité, problèmes. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet piscinier', href: '/site-internet-piscinier' },
    { label: 'Site internet constructeur piscine', href: '/site-internet-constructeur-piscine' },
    { label: 'Site internet spa jacuzzi', href: '/site-internet-spa-jacuzzi' },
    { label: 'Site internet pisciniste', href: '/site-internet-pisciniste' },
  ],
  miniCtaText: 'Envie d\'un carnet de contrats piscine stable et récurrent ?',
  caseStudiesKicker: 'Sites créés pour des artisans',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Entretien Piscine', description, '/site-internet-entretien-piscine', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Entretien Piscine', description, '/site-internet-entretien-piscine'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Entretien Piscine', path: '/site-internet-entretien-piscine' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetEntretienPiscinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet chauffeur privé : création de site web optimisé SEO. Berline haut de gamme, van, luxe, dirigeant, mariage, événementiel — capter la clientèle premium via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Chauffeur Privé | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-chauffeur-prive' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Quelle différence entre VTC et chauffeur privé sur le SEO ?',
    answer: 'Deux termes proches mais avec une connotation différente. "Chauffeur privé" est plus premium, évoque la berline haut de gamme, le service personnalisé, la discrétion. "VTC" est plus commercial, plus lié aux applis. Une page "Chauffeur privé + ville" attire une clientèle plus aisée prête à payer plus cher pour un vrai service sur-mesure.',
  },
  {
    question: 'La clientèle "chauffeur privé" cherche-t-elle vraiment sur Google ?',
    answer: 'Oui, pour les besoins récurrents et les événements spéciaux. Les dirigeants, cadres supérieurs, diplomates, avocats, notaires cherchent un chauffeur privé de confiance pour leurs déplacements hebdomadaires ou leurs événements clients. Ils veulent éviter Uber et ses chauffeurs aléatoires. Ils tapent "chauffeur privé + ville" et choisissent en fonction du sérieux du site.',
  },
  {
    question: 'Le véhicule et sa présentation sont-ils décisifs ?',
    answer: 'Absolument. Un chauffeur privé doit montrer son véhicule : berline Mercedes Classe E, Classe S, van Viano, Tesla Model S. Photos soignées, propreté irréprochable, équipements (wifi, bouteille d\'eau, prise USB) mis en avant. Un site qui ne montre pas le véhicule perd automatiquement la clientèle premium qui veut savoir où elle va rouler.',
  },
  {
    question: 'Mission longue distance ou journée à disposition, comment présenter ?',
    answer: 'Par des forfaits clairs. "Mise à disposition journée : X €", "Paris-Rouen aller-retour : X €", "Forfait mariage 12h : X €". Les clients haut de gamme veulent des prix nets, pas de calcul kilométrique aléatoire. Je crée une page "Tarifs et prestations" avec les forfaits les plus demandés pour qualifier les demandes avant même le premier appel.',
  },
]

const config: MetierConfig = {
  metier: 'Chauffeur Privé',
  metierLower: 'chauffeur privé',
  heroKicker: 'Sites web pour chauffeur privé',
  heroHeadline: 'Site internet chauffeur privé,',
  heroHeadlineItalic: 'une clientèle premium qui fidélise',
  heroDescription:
    'Je crée des sites internet pour les chauffeurs privés et entreprises VTC premium partout en France. Berline haut de gamme, dirigeants, événementiel, mission longue : chaque page capte une clientèle exigeante qui paie sans négocier.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour chauffeur privé',
  whatKicker: 'Sites web pour chauffeur privé',
  whatTitle: 'Un chauffeur privé choisi',
  whatTitleItalic: 'par des clients qui veulent éviter Uber',
  whatPara1:
    'La clientèle du chauffeur privé n\'est pas celle de l\'appli VTC. Ce sont des dirigeants, cadres, diplomates, clients haut de gamme qui veulent un service sur-mesure : chauffeur attitré, véhicule impeccable, ponctualité absolue, discrétion. Ils tapent "chauffeur privé + ville", lisent attentivement votre présentation et ne commandent jamais au premier venu. Le site est votre vitrine pour cette clientèle exigeante.',
  whatPara2:
    'Je construis des sites chauffeur privé qui parlent à cette audience premium. Présentation du chauffeur, photos soignées du véhicule, forfaits clairs, spécialisation (événementiel, mariage, dirigeant, longue distance), discrétion et ponctualité mises en avant. Un positionnement qui justifie des tarifs premium et fidélise sur la durée.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1555215695-3004980ad54e-w800.webp',
  whatImageAlt: 'Création site internet pour chauffeur privé',
  pillars: [
    { icon: 'User', title: 'Positionnement premium', desc: 'Différent d\'Uber. Clientèle qui paie pour la qualité et la discrétion.' },
    { icon: 'FileSearch', title: 'Véhicule valorisé', desc: 'Photos haute qualité, équipements, propreté. Premier critère de choix.' },
    { icon: 'Target', title: 'Forfaits clairs', desc: 'Prix nets par mission. Les clients haut de gamme détestent les calculs au km.' },
  ],
  whatFooterText:
    'Un chauffeur privé bien référencé fidélise 8-20 clients récurrents qui représentent 60-80 % du chiffre d\'affaires.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre service', description: 'Type de véhicule, langues parlées, spécialités, tarifs forfaitaires, zones, clientèle type (dirigeants, événements).' },
    { number: '02', title: 'Construction du site', description: 'Présentation premium, véhicule, forfaits, spécialités, témoignages anonymisés, formulaire de réservation.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières réservations premium, fidélisation des clients récurrents.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent une clientèle premium',
  keywordsIntro:
    'Les clients qui cherchent un chauffeur privé ont des exigences spécifiques : discrétion, qualité, disponibilité, image.',
  keywordCategories: [
    { icon: 'User', title: 'Premium', text: 'chauffeur privé, chauffeur privé Mercedes, chauffeur privé haut de gamme, service limousine.' },
    { icon: 'Target', title: 'Usages pro', text: 'chauffeur privé dirigeant, chauffeur entreprise, chauffeur client VIP, chauffeur congrès.' },
    { icon: 'Zap', title: 'Événementiel', text: 'chauffeur mariage, chauffeur privé cérémonie, chauffeur séminaire, chauffeur gala.' },
    { icon: 'FileSearch', title: 'Missions', text: 'mise à disposition chauffeur, chauffeur journée, chauffeur longue distance, chauffeur week-end.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel du transport ?',
  relatedPara:
    'Les métiers de transport de personnes ont une logique proche : confiance, paniers, récurrence. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet VTC', href: '/site-internet-vtc' },
    { label: 'Site internet taxi', href: '/site-internet-taxi' },
    { label: 'Site internet transport aéroport', href: '/site-internet-transport-aeroport' },
    { label: 'Site internet taxi conventionné', href: '/site-internet-taxi-conventionne' },
  ],
  miniCtaText: 'Envie d\'un site qui parle à une clientèle premium hors plateformes ?',
  caseStudiesKicker: 'Sites créés pour des prestataires',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Chauffeur Privé', description, '/site-internet-chauffeur-prive', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Chauffeur Privé', description, '/site-internet-chauffeur-prive'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Chauffeur Privé', path: '/site-internet-chauffeur-prive' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetChauffeurPrivePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

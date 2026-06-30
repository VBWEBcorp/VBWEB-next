import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet VTC : création de site web optimisé SEO. Chauffeur privé, aéroport, événementiel, mariage, tourisme — capter les courses directes sans commission.'

export const metadata: Metadata = {
  title: 'Site Internet VTC | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-vtc' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un VTC qui roule sur Uber ou Bolt gagne-t-il à avoir un site ?',
    answer: 'Énormément. Les plateformes prennent 25-30 % de commission sur chaque course et vous rendent remplaçable. Un site permet de capter des courses directes (aéroport, mariage, événementiel, longue distance) sans commission. 3-5 courses directes par semaine représentent 300-1 000 € supplémentaires chaque semaine, soit 15-50 k€ par an dans votre poche au lieu d\'être reversés à Uber.',
  },
  {
    question: 'Quel type de courses capter en direct plutôt que via plateforme ?',
    answer: 'Les courses prévisibles et rentables. Transfert aéroport réservé 48h à l\'avance, événementiel d\'entreprise, mariages, rallye touristique, longue distance, courses récurrentes pour dirigeants. Ces courses ont souvent des paniers de 80-400 € et les clients préfèrent traiter en direct avec un chauffeur qu\'ils connaissent plutôt que commander sur appli.',
  },
  {
    question: 'Comment se démarquer des autres VTC locaux ?',
    answer: 'Par le service premium et la spécialisation. Véhicule haut de gamme visible, présentation du chauffeur (expérience, anglais parlé, discrétion), spécialisation (événementiel, mariage, tourisme), tarifs forfaitaires clairs. Ces éléments justifient des tarifs premium et fidélisent une clientèle qui ne commande plus sur Uber.',
  },
  {
    question: 'Les entreprises comme clients récurrents, comment les capter ?',
    answer: 'Par une page B2B dédiée. Les PME et cabinets (avocats, notaires, cadres dirigeants) cherchent un VTC de confiance pour leurs déplacements et ceux de leurs clients. Tarif contractualisé, facturation mensuelle, chauffeur attitré : ces arguments font la différence face aux applis. Un contrat B2B VTC représente souvent 2 000-5 000 € par mois en chiffre d\'affaires récurrent.',
  },
]

const config: MetierConfig = {
  metier: 'VTC',
  metierLower: 'VTC',
  heroKicker: 'Sites web pour VTC',
  heroHeadline: 'Site internet VTC,',
  heroHeadlineItalic: 'reprendre la main sur sa clientèle premium',
  heroDescription:
    'Je crée des sites internet pour les chauffeurs VTC indépendants et entreprises VTC partout en France. Aéroport, événementiel, mariage, tourisme, entreprise : chaque page capte les courses directes sans commission plateforme.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour VTC',
  whatKicker: 'Sites web pour VTC indépendant',
  whatTitle: 'Un VTC choisi',
  whatTitleItalic: 'pour ne plus verser 30% à une plateforme',
  whatPara1:
    'Les applis VTC sont pratiques mais elles vous prennent 25-30 % de commission et vous empêchent de fidéliser votre clientèle. Parallèlement, des dizaines de clients cherchent chaque semaine un VTC en direct : "VTC aéroport + ville", "chauffeur privé mariage", "VTC événementiel + ville". Ces clients payent sans commission et deviennent fidèles si votre service est à la hauteur.',
  whatPara2:
    'Je construis des sites VTC qui captent cette clientèle directe. Pages par type de course (aéroport, événementiel, tourisme, entreprise), présentation du chauffeur et du véhicule, tarifs forfaitaires, système de réservation simple. Un site qui vous permet de reprendre la main sur votre chiffre d\'affaires et votre marge.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1460925895917-afdab827c52f-w800.webp',
  whatImageAlt: 'Création site internet pour VTC',
  pillars: [
    { icon: 'Target', title: 'Aéroport direct', desc: 'Transferts réservés à l\'avance. Courses à 80-150 € sans commission plateforme.' },
    { icon: 'User', title: 'Événementiel premium', desc: 'Mariages, séminaires, événements : paniers élevés et clientèle fidèle.' },
    { icon: 'FileSearch', title: 'Contrats B2B', desc: 'Pages dédiées PME et cabinets. Courses récurrentes 2-5 k€/mois par client.' },
  ],
  whatFooterText:
    'Un VTC bien référencé capte en moyenne 10-20 courses directes par semaine, soit 20-40 k€ par an de marge supplémentaire.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre offre', description: 'Type de véhicule, spécialités (aéroport, événementiel, tourisme), zones, tarifs forfaitaires, langues parlées.' },
    { number: '02', title: 'Construction du site', description: 'Pages par type de course, présentation chauffeur et véhicule, forfaits, formulaire de réservation, contrats B2B.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières réservations directes, suivi des conversions hors plateforme.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des courses directes VTC',
  keywordsIntro:
    'Les clients qui cherchent un VTC en direct ont souvent un événement prévu : vol, mariage, visite, déplacement pro. Ils préfèrent traiter en direct plutôt que via appli.',
  keywordCategories: [
    { icon: 'Target', title: 'Aéroport', text: 'VTC aéroport, chauffeur privé aéroport, transfert aéroport + ville, navette aéroport.' },
    { icon: 'Zap', title: 'Événementiel', text: 'VTC mariage, chauffeur mariage, VTC événementiel, navette séminaire, VTC incentive.' },
    { icon: 'User', title: 'Tourisme', text: 'VTC touristique, chauffeur-guide, visite + ville VTC, VTC château, circuit VTC.' },
    { icon: 'FileSearch', title: 'Entreprise', text: 'VTC entreprise, contrat VTC professionnel, chauffeur dirigeant, VTC comité d\'entreprise.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel du transport ?',
  relatedPara:
    'Les métiers de transport de personnes ont une logique proche : réservations, paniers, confiance. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet taxi', href: '/site-internet-taxi' },
    { label: 'Site internet chauffeur privé', href: '/site-internet-chauffeur-prive' },
    { label: 'Site internet transport aéroport', href: '/site-internet-transport-aeroport' },
    { label: 'Site internet taxi conventionné', href: '/site-internet-taxi-conventionne' },
  ],
  miniCtaText: 'Envie de doubler votre marge en captant des courses directes hors appli ?',
  caseStudiesKicker: 'Sites créés pour des prestataires',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet VTC', description, '/site-internet-vtc', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet VTC', description, '/site-internet-vtc'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet VTC', path: '/site-internet-vtc' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetVtcPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet implantologue : création de site web optimisé SEO pour chirurgiens-dentistes spécialisés en implantologie. Implant unitaire, All-on-4, greffe osseuse — capter les patients en recherche d\'expertise.'

export const metadata: Metadata = {
  title: 'Site Internet Implantologue | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-implantologue' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un implantologue a-t-il vraiment besoin d\'un site dédié à l\'implantologie ?',
    answer: 'Oui, c\'est même probablement le site le plus rentable à faire. Un implant unitaire vaut 1 500 à 2 500 euros, un All-on-4 vaut 12 000 à 25 000 euros. Les patients qui cherchent un implantologue passent des semaines à comparer les cabinets, lisent chaque page, vérifient les formations. Un site dédié qui valorise votre expertise capte ces patients avant qu\'ils aillent voir la concurrence.',
  },
  {
    question: 'Combien coûte un site pour implantologue ?',
    answer: 'Un site vitrine spécialisé démarre à 2 000 euros. Il inclut une page par type d\'implantologie (unitaire, multiple, All-on-4, All-on-6, greffe osseuse, sinus lift), votre parcours et formations en implantologie (DU, CES, masters), le plateau technique (scanner 3D, guidage chirurgical), et des études de cas anonymisées.',
  },
  {
    question: 'Comment présenter les cas cliniques sans enfreindre la déontologie ?',
    answer: 'C\'est possible en restant clinique et anonymisé. Je présente des cas en expliquant la problématique (ex : édentement total, échecs implantaires antérieurs, volume osseux insuffisant), la solution technique choisie, le résultat. Sans photos personnalisées du patient, sans nom, sans témoignage direct. C\'est factuel, clinique, et tout à fait conforme aux règles CNCD.',
  },
  {
    question: 'L\'All-on-4 est-il une vraie stratégie SEO ?',
    answer: 'C\'est une des requêtes les plus stratégiques en implantologie. "All-on-4 + ville" est tapé par des patients en phase de décision finale, avec des paniers moyens de 15 à 25 k€ par arcade. Je crée une page dédiée très détaillée qui aborde les questions clés (prix, durée de traitement, réhabilitation immédiate, durabilité, alternatives). Les conversions sont excellentes.',
  },
  {
    question: 'Les patients étrangers représentent une part de mon activité, le site peut-il les capter ?',
    answer: 'Oui, je peux créer une version anglaise et/ou espagnole du site pour capter les patients en tourisme dentaire (Royaume-Uni, Suisse, pays nordiques viennent en France pour les implants à prix plus accessibles). Cela ouvre un flux de patientèle à forte valeur qui complète votre patientèle locale.',
  },
]

const config: MetierConfig = {
  metier: 'Implantologue',
  metierLower: 'implantologue',
  heroKicker: 'Sites web pour implantologue',
  heroHeadline: 'Site internet implantologue,',
  heroHeadlineItalic: 'des patients qui cherchent l\'expert avant le prix',
  heroDescription:
    'Je crée des sites internet pour les chirurgiens-dentistes spécialisés en implantologie partout en France. Implant unitaire, All-on-4, greffe osseuse, sinus lift : chaque page met en valeur votre expertise et capte les patients en recherche d\'un vrai spécialiste.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour implantologue',
  whatKicker: 'Sites web pour implantologue',
  whatTitle: 'Une expertise implantaire',
  whatTitleItalic: 'qui justifie des paniers moyens à 5 chiffres',
  whatPara1:
    'L\'implantologie est l\'acte dentaire le plus rentable, mais c\'est aussi le plus scruté par les patients. Un All-on-4 à 20 000 euros ne se décide pas en 10 minutes : les patients comparent 3 à 5 cabinets, vérifient les formations universitaires, les DU et CES, regardent les cas cliniques anonymisés, lisent les avis. Ils cherchent un expert, pas un simple dentiste.',
  whatPara2:
    'Je construis des sites implantologues qui valorisent votre expertise scientifiquement. Pages par type d\'implant, études de cas cliniques anonymisées, parcours universitaire détaillé, plateau technique (scanner 3D, guides chirurgicaux), marques d\'implants utilisées. Tout en respectant la déontologie CNCD. L\'objectif : que le patient ait déjà choisi votre cabinet avant le premier appel.',
  whatImageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour implantologue',
  pillars: [
    { icon: 'Target', title: 'Page All-on-4 dédiée', desc: 'La requête la plus rentable en implantologie. Paniers à 15-25 k€ par arcade.' },
    { icon: 'FileSearch', title: 'Cas cliniques anonymisés', desc: 'Explication technique de vos traitements complexes. Preuve d\'expertise.' },
    { icon: 'User', title: 'Formations valorisées', desc: 'DU, CES, masters en implantologie : ce que les patients scrutent avant de choisir.' },
  ],
  whatFooterText:
    'Un implantologue bien référencé convertit en moyenne 3 à 10 cas complexes par mois avec des paniers de 5 à 25 k€.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre pratique implantaire', description: 'Types d\'implants posés, marques utilisées, formations, DU, cas emblématiques (anonymisés), plateau technique, patientèle (directe ou référée).' },
    { number: '02', title: 'Construction du site', description: 'Pages par type d\'acte, études de cas cliniques, parcours, plateau technique. Ton scientifique et clinique, déontologie respectée.' },
    { number: '03', title: 'Mise en ligne + suivi', description: 'Fiche Google optimisée, suivi des premières prises de rendez-vous en implantologie, ajustements selon les retours patients.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des cas d\'implantologie',
  keywordsIntro:
    'Les requêtes d\'implantologie se divisent en trois catégories de patients : le cas unitaire (édentement d\'une dent), le cas complexe (plusieurs dents), et le cas total (All-on-4, All-on-6). Chaque profil a son panier moyen et sa requête.',
  keywordCategories: [
    { icon: 'Target', title: 'Unitaire', text: 'implant dentaire, prix implant, implant unitaire, remplacement dent manquante.' },
    { icon: 'Zap', title: 'Multiple / Total', text: 'All-on-4, All-on-6, bridge sur implants, réhabilitation totale, édentement total.' },
    { icon: 'FileSearch', title: 'Pré-implantaire', text: 'greffe osseuse, sinus lift, comblement osseux, ROG, préservation alvéolaire.' },
    { icon: 'User', title: 'Confort', text: 'implant sous sédation, anesthésie générale implant, chirurgie guidée, implant immédiat.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel dentaire ?',
  relatedPara:
    'Les métiers dentaires spécialisés ont une logique SEO proche : valoriser l\'expertise, expliquer les actes techniques, respecter la déontologie. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet dentiste', href: '/site-internet-dentiste' },
    { label: 'Site internet chirurgien-dentiste', href: '/site-internet-chirurgien-dentiste' },
    { label: 'Site internet orthodontiste', href: '/site-internet-orthodontiste' },
    { label: 'Site internet cabinet dentaire', href: '/site-internet-cabinet-dentaire' },
  ],
  miniCtaText: 'Envie de capter les cas d\'implantologie complexe avant la concurrence ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Implantologue', description, '/site-internet-implantologue', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Implantologue', description, '/site-internet-implantologue'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Implantologue', path: '/site-internet-implantologue' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetImplantologuePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

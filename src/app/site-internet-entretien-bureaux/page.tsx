import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet entretien bureaux : création de site web optimisé SEO. Open space, TPE, PME, coworking, ménage tertiaire, contrat — capter les contrats B2B via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Entretien Bureaux | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-entretien-bureaux' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Pourquoi une page spécifique "entretien bureaux" ?',
    answer: 'Parce que c\'est une requête B2B très volumineuse tapée par les dirigeants de TPE et PME, les office managers, les responsables des services généraux. Ils cherchent "entretien bureaux + leur ville" quand leur contrat actuel touche à sa fin ou quand ils ne sont plus satisfaits. Une page dédiée capte ces acheteurs au moment où ils cherchent à changer de prestataire.',
  },
  {
    question: 'Quelle est la différence avec "nettoyage de bureaux" ?',
    answer: 'Deux requêtes quasi équivalentes mais utilisées par des profils légèrement différents. "Entretien" est plus souvent utilisé par des décideurs stratégiques, "nettoyage" par des opérationnels. Je cible les deux sur votre site pour ne passer à côté d\'aucune audience, avec une page principale "Entretien bureaux" et des mentions de "nettoyage bureaux" dans les titres et textes.',
  },
  {
    question: 'Les espaces de coworking sont-ils une niche à cibler ?',
    answer: 'Oui, en forte croissance. Les espaces de coworking cherchent des prestataires qui comprennent leurs contraintes (horaires atypiques, flexibilité, multi-sites, image propre 24/7). Une page "Entretien coworking + votre ville" capte ce marché spécifique avec peu de concurrence sérieuse.',
  },
  {
    question: 'Comment se démarquer des gros groupes de nettoyage ?',
    answer: 'Par la proximité, la réactivité et le sur-mesure. Les TPE et PME n\'ont pas envie d\'être un client anonyme dans un gros groupe. Ils veulent un interlocuteur unique, des équipes stables, une flexibilité sur les horaires et les demandes ponctuelles. Je mets ces atouts en avant sur votre site pour contrer les appels d\'offres menés par les grands acteurs nationaux.',
  },
]

const config: MetierConfig = {
  metier: 'Entretien Bureaux',
  metierLower: 'entretien bureaux',
  heroKicker: 'Sites web pour entretien bureaux',
  heroHeadline: 'Site internet entretien bureaux,',
  heroHeadlineItalic: 'des contrats TPE et PME qui arrivent par Google',
  heroDescription:
    'Je crée des sites internet pour les entreprises d\'entretien de bureaux partout en France. Open space, TPE, PME, coworking, contrats flexibles : chaque page capte des acheteurs B2B qui cherchent un prestataire plus proche qu\'un grand groupe.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour entretien bureaux',
  whatKicker: 'Sites web pour entretien bureaux',
  whatTitle: 'Un entretien bureaux',
  whatTitleItalic: 'choisi par des TPE fatiguées des gros groupes',
  whatPara1:
    'Les TPE et PME cherchent un prestataire d\'entretien bureaux qui leur corresponde : humain, flexible, réactif, stable dans ses équipes. Elles sont souvent déçues par les gros groupes (turnover, interlocuteurs changeants, qualité variable) et cherchent activement une alternative locale. Elles tapent "entretien bureaux + leur ville" et comparent 3 à 5 prestataires avant de choisir.',
  whatPara2:
    'Je construis des sites entretien bureaux qui valorisent votre proximité et votre sur-mesure. Pages par segment (open space, cabinet, coworking), équipe stable mise en avant, flexibilité horaire, réactivité, formulaire B2B qualifié. Un positionnement qui gagne face aux grands groupes sur les TPE-PME.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1497366216548-37526070297c-w800.webp',
  whatImageAlt: 'Création site internet pour entretien bureaux',
  pillars: [
    { icon: 'Target', title: 'Pages par segment', desc: 'Open space, cabinet, coworking : chaque type d\'espace a ses contraintes et ses requêtes.' },
    { icon: 'User', title: 'Équipe stable valorisée', desc: 'Argument différenciateur majeur face aux gros groupes à fort turnover.' },
    { icon: 'FileSearch', title: 'Flexibilité horaire', desc: 'Horaires atypiques, demandes ponctuelles, réactivité : atouts PME vs nationaux.' },
  ],
  whatFooterText:
    'Une entreprise d\'entretien bureaux bien référencée signe 8 à 20 nouveaux contrats TPE-PME par an via Google.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre offre', description: 'Segments ciblés, effectif, horaires proposés, zones, tarifs, spécificités qualité.' },
    { number: '02', title: 'Construction du site', description: 'Pages par segment, proximité, formulaire B2B, références anonymisées, ton professionnel.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google B2B optimisée, premières demandes de TPE-PME, suivi des conversions.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des contrats entretien bureaux',
  keywordsIntro:
    'Les acheteurs TPE-PME cherchent par type d\'espace, horaires, flexibilité et proximité. Chaque requête reflète un profil décideur précis.',
  keywordCategories: [
    { icon: 'Target', title: 'Types', text: 'entretien bureaux, nettoyage open space, ménage bureaux, entretien locaux.' },
    { icon: 'User', title: 'Structures', text: 'nettoyage TPE, entretien PME, ménage start-up, nettoyage cabinet professionnel.' },
    { icon: 'Zap', title: 'Coworking', text: 'entretien coworking, nettoyage espace coworking, ménage espace partagé.' },
    { icon: 'FileSearch', title: 'Services', text: 'contrat entretien bureaux, nettoyage soir bureaux, ménage quotidien entreprise.' },
  ],
  relatedTitle: 'Vous proposez d\'autres services de nettoyage ?',
  relatedPara:
    'Les métiers du nettoyage ont une logique proche : B2B, récurrent, qualité. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet entreprise de nettoyage', href: '/site-internet-entreprise-nettoyage' },
    { label: 'Site internet société de nettoyage', href: '/site-internet-societe-nettoyage' },
    { label: 'Site internet ménage professionnel', href: '/site-internet-menage-professionnel' },
    { label: 'Site internet nettoyage vitres', href: '/site-internet-nettoyage-vitres' },
  ],
  miniCtaText: 'Envie de capter les contrats TPE-PME qui en ont marre des gros groupes ?',
  caseStudiesKicker: 'Sites créés pour des prestataires',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Entretien Bureaux', description, '/site-internet-entretien-bureaux', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Entretien Bureaux', description, '/site-internet-entretien-bureaux'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Entretien Bureaux', path: '/site-internet-entretien-bureaux' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetEntretienBureauxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

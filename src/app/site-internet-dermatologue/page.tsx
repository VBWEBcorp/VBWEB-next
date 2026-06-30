import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet dermatologue : création de site web optimisé SEO. Dépistage mélanome, acné, psoriasis, esthétique, téléconsultation dermato — conforme CNOM.'

export const metadata: Metadata = {
  title: 'Site Internet Dermatologue | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-dermatologue' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Les dermatologues sont saturés, faut-il vraiment un site ?',
    answer: 'Oui, pour trier et orienter. Les délais de rendez-vous en dermatologie sont longs (3 à 9 mois). Un site clair qui explique votre politique d\'accueil (nouveaux patients ou non, urgences dermatologiques, téléconsultation) réduit drastiquement les appels au standard et oriente les patients vers les bons canaux.',
  },
  {
    question: 'La téléconsultation dermato est-elle un vrai levier ?',
    answer: 'Énorme. La dermatologie est la spécialité médicale la plus adaptée à la téléconsultation (beaucoup de diagnostics se font visuellement). Les requêtes "téléconsultation dermatologue", "dermatologue en ligne" sont en forte croissance. Une page dédiée peut capter des patients partout en France, très au-delà de votre zone physique.',
  },
  {
    question: 'Comment valoriser l\'esthétique médicale sans tomber dans le commercial ?',
    answer: 'En restant factuel et médical. Je rédige chaque page acte (botox, acide hyaluronique, laser, peeling) avec les indications, les modalités, les précautions. Pas de photos avant/après commerciales, pas de promesses. Le ton reste médical, conforme CNOM, mais remonte très bien sur les requêtes esthétiques.',
  },
  {
    question: 'Le dépistage mélanome est-il une requête à cibler ?',
    answer: 'Oui, c\'est même une des plus importantes. "Dépistage grain de beauté", "dermatologue mélanome + ville", "consultation grain de beauté" sont des patients motivés par l\'inquiétude d\'un grain qui change. Une page dédiée au dépistage et à la cartographie des grains de beauté convertit très bien.',
  },
]

const config: MetierConfig = {
  metier: 'Dermatologue',
  metierLower: 'dermatologue',
  heroKicker: 'Sites web pour dermatologue',
  heroHeadline: 'Site internet dermatologue,',
  heroHeadlineItalic: 'un standard désengorgé et des patients mieux orientés',
  heroDescription:
    'Je crée des sites internet pour les dermatologues partout en France. Dépistage, acné, psoriasis, esthétique médicale, téléconsultation : chaque page désengorge votre standard et oriente les patients vers les bons canaux, dans le respect de la déontologie CNOM.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour dermatologue',
  whatKicker: 'Sites web pour dermatologue',
  whatTitle: 'Un cabinet dermato',
  whatTitleItalic: 'avec un standard qui respire enfin',
  whatPara1:
    'Les dermatologues sont parmi les spécialistes les plus demandés : délais de plusieurs mois, standards saturés, patients en urgence qui s\'accumulent. Sans site clair, chaque question devient un appel : "vous prenez de nouveaux patients ?", "combien pour un botox ?", "je peux venir en urgence pour une tache ?". Un site bien construit répond à 70 % de ces questions et libère votre secrétariat.',
  whatPara2:
    'Je construis des sites dermato qui filtrent et orientent. Page accueil nouveaux patients, page téléconsultation pour capter hors zone, pages actes médicaux et esthétiques, page urgence dermato. Le tout dans le respect strict de la déontologie CNOM.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1579154204601-01588f351e67-w800.webp',
  whatImageAlt: 'Création site internet pour dermatologue',
  pillars: [
    { icon: 'FileSearch', title: 'Téléconsultation nationale', desc: 'Page dédiée pour capter des patients partout en France. Dermato est la spé la plus adaptée.' },
    { icon: 'Target', title: 'Dépistage mélanome', desc: 'Requête à fort volume et forte intention. Page dédiée qui convertit en direct.' },
    { icon: 'User', title: 'Esthétique médicale', desc: 'Botox, acide hyaluronique, laser : pages factuelles qui remontent sans sortir du cadre CNOM.' },
  ],
  whatFooterText:
    'Un dermatologue bien référencé réduit de 40 à 60 % les appels standards inutiles et capte une téléclientèle nationale.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre cabinet', description: 'Actes médicaux, actes esthétiques, téléconsultation, accueil nouveaux patients, urgences, zones de chalandise.' },
    { number: '02', title: 'Construction du site', description: 'Pages par acte, téléconsultation, dépistage, esthétique, urgences. Conformité CNOM stricte.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, suivi des appels et téléconsultations entrantes, ajustements.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des patients à un dermatologue',
  keywordsIntro:
    'Les requêtes dermatologiques vont du dépistage au traitement en passant par l\'esthétique médicale. Chaque requête correspond à un type de patient et un acte précis.',
  keywordCategories: [
    { icon: 'Target', title: 'Dépistage', text: 'dépistage grain de beauté, dermatologue mélanome, cartographie grains de beauté, consultation peau.' },
    { icon: 'FileSearch', title: 'Pathologies', text: 'dermatologue acné, psoriasis, eczéma, rosacée, urticaire, mycose, verrue.' },
    { icon: 'Zap', title: 'Esthétique', text: 'botox, acide hyaluronique, laser peau, peeling, taches pigmentaires, cicatrices acné.' },
    { icon: 'User', title: 'Consultation', text: 'téléconsultation dermatologue, dermatologue + ville, nouveau patient dermato, urgence peau.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel médical ?',
  relatedPara:
    'Les spécialistes médicaux ont une logique SEO proche : pages par acte, téléconsultation, respect déontologique. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet médecin', href: '/site-internet-medecin' },
    { label: 'Site internet cardiologue', href: '/site-internet-cardiologue' },
    { label: 'Site internet pédiatre', href: '/site-internet-pediatre' },
    { label: 'Site internet cabinet médical', href: '/site-internet-cabinet-medical' },
  ],
  miniCtaText: 'Envie de désengorger votre standard et capter une téléclientèle nationale ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Dermatologue', description, '/site-internet-dermatologue', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Dermatologue', description, '/site-internet-dermatologue'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Dermatologue', path: '/site-internet-dermatologue' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetDermatologuePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

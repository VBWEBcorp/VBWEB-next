import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet entreprise de déménagement : création de site web optimisé SEO. Devis, locaux, longue distance, entreprise, particulier — capter les demandes via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Entreprise de Déménagement | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-entreprise-demenagement' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Quelle différence entre "entreprise de déménagement" et "déménageur" ?',
    answer: 'Deux requêtes tapées par des profils différents. "Déménageur" est plus individuel, "entreprise de déménagement" est plus formel et souvent associé à des recherches pour des gros déménagements (entreprise, famille nombreuse, longue distance, international). Les deux requêtes méritent leur page sur votre site pour capter les deux profils.',
  },
  {
    question: 'Le devis en ligne est-il indispensable ?',
    answer: 'Oui, c\'est le premier critère de choix des clients. Ils veulent comparer rapidement 3 à 5 entreprises. Un formulaire de devis simple (volume, distance, options) ou un simulateur plus poussé augmente énormément les demandes entrantes. Sans devis en ligne, vous n\'êtes tout simplement pas dans le comparatif de la plupart des clients.',
  },
  {
    question: 'Les déménagements d\'entreprise sont-ils rentables ?',
    answer: 'Très rentables. Un déménagement d\'entreprise (bureaux, locaux commerciaux, archives) se monte souvent à 5-30 k€ contre 500-3 000 € pour un déménagement particulier. Une page "Déménagement d\'entreprise + votre ville" capte cette clientèle B2B et double souvent la marge annuelle d\'une entreprise de déménagement traditionnelle.',
  },
  {
    question: 'Comment rassurer sur les casse et pertes ?',
    answer: 'Par la transparence sur vos garanties et assurances. Dédommagement forfaitaire ou déclaration de valeur, contrat-type déménageur, responsabilité contractuelle, convention de déménagement : expliquer clairement ces éléments rassure les clients qui ont peur des mauvaises surprises. Une page "Garanties et assurances" dissipe les inquiétudes avant même le premier appel.',
  },
]

const config: MetierConfig = {
  metier: 'Entreprise de Déménagement',
  metierLower: 'entreprise de déménagement',
  heroKicker: 'Sites web pour entreprise de déménagement',
  heroHeadline: 'Site internet entreprise de déménagement,',
  heroHeadlineItalic: 'des devis qualifiés qui tombent chaque matin',
  heroDescription:
    'Je crée des sites internet pour les entreprises de déménagement partout en France. Particuliers, entreprises, longue distance, international, garde-meubles : chaque page capte des demandes de devis qualifiées avec un simulateur intégré.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour entreprise de déménagement',
  whatKicker: 'Sites web pour entreprise de déménagement',
  whatTitle: 'Une entreprise de déménagement',
  whatTitleItalic: 'dans le top 3 avant ses concurrents',
  whatPara1:
    'Le déménagement est un marché où chaque client compare plusieurs devis avant de choisir. La règle est simple : si vous n\'êtes pas dans le top 3 des résultats Google pour votre zone, vous n\'êtes pas dans la short list des clients. Les plateformes comparatives (Opleme, Bougeurs, Jaurai...) captent déjà une part du trafic, mais les clients préfèrent traiter en direct avec un déménageur sérieux dès qu\'ils en trouvent un.',
  whatPara2:
    'Je construis des sites entreprise de déménagement qui captent les demandes directes avant les plateformes. Simulateur de devis intégré, pages par type de déménagement (particulier, entreprise, longue distance, international), garanties claires, avis clients récents. Un site qui convertit 3 à 5 fois plus que les sites génériques de la concurrence.',
  whatImageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour entreprise de déménagement',
  pillars: [
    { icon: 'Target', title: 'Simulateur de devis', desc: 'Volume, distance, options : le client voit une estimation en temps réel. Conversion x3.' },
    { icon: 'FileSearch', title: 'Pages par type', desc: 'Particulier, entreprise, longue distance, international : chaque segment capte sa requête.' },
    { icon: 'User', title: 'Garanties expliquées', desc: 'Assurances, responsabilité, contrat : rassure les clients inquiets avant le premier appel.' },
  ],
  whatFooterText:
    'Une entreprise de déménagement bien référencée reçoit 20 à 50 demandes de devis qualifiées par mois via Google.',
  timelineSteps: [
    { number: '01', title: 'On cadre vos services', description: 'Types de déménagement (particulier, pro, international), zones, tarifs indicatifs, équipement, garanties, effectif.' },
    { number: '02', title: 'Construction du site', description: 'Simulateur, pages par type, garanties, avis clients, formulaire de devis qualifié.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières demandes de devis, suivi des conversions en déménagements signés.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des devis de déménagement',
  keywordsIntro:
    'Les clients déménagement cherchent selon leur situation : local, longue distance, international, particulier ou entreprise.',
  keywordCategories: [
    { icon: 'Target', title: 'Local', text: 'entreprise déménagement + ville, déménageur + ville, devis déménagement + ville.' },
    { icon: 'Zap', title: 'Distance', text: 'déménagement longue distance, déménagement France, déménagement Paris-province.' },
    { icon: 'User', title: 'Entreprise', text: 'déménagement entreprise, transfert bureaux, déménagement commercial, archives déménagement.' },
    { icon: 'FileSearch', title: 'Particulier', text: 'prix déménagement, devis déménagement T3, déménagement appartement, forfait déménagement.' },
  ],
  relatedTitle: 'Vous proposez d\'autres services de déménagement ?',
  relatedPara:
    'Les métiers du déménagement ont une logique proche : devis, garanties, avis. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet déménageur', href: '/site-internet-demenageur' },
    { label: 'Site internet garde-meubles', href: '/site-internet-garde-meubles' },
    { label: 'Site internet transport mobilier', href: '/site-internet-transport-mobilier' },
    { label: 'Site internet déménagement international', href: '/site-internet-demenagement-international' },
  ],
  miniCtaText: 'Envie d\'un site qui capte les demandes de devis avant les plateformes comparatives ?',
  caseStudiesKicker: 'Sites créés pour des prestataires',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Entreprise de Déménagement', description, '/site-internet-entreprise-demenagement', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Entreprise de Déménagement', description, '/site-internet-entreprise-demenagement'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Entreprise de Déménagement', path: '/site-internet-entreprise-demenagement' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetEntrepriseDemenagementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

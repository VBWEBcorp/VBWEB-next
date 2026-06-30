import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet micro-nutritionniste : création de site web optimisé SEO. Bilans micro-nutritionnels, fatigue, digestion, immunité, sport, compléments — capter une clientèle avertie.'

export const metadata: Metadata = {
  title: 'Site Internet Micro-Nutritionniste | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-micro-nutritionniste' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'La micro-nutrition est-elle assez connue pour justifier un site dédié ?',
    answer: 'Elle devient très recherchée depuis 2-3 ans. Les requêtes "micro-nutrition + ville", "micro-nutritionniste", "bilan micro-nutritionnel" explosent, portées par les sportifs, les femmes en fatigue chronique, les personnes avec troubles digestifs. Une page dédiée vous positionne sur une niche en forte croissance où peu de professionnels sont bien référencés.',
  },
  {
    question: 'Quels sont les motifs de consultation les plus recherchés ?',
    answer: 'Fatigue chronique, troubles digestifs (SIBO, intestin irritable), gestion du stress, immunité fragile, préparation sportive, troubles du sommeil, troubles hormonaux (SOPK, ménopause). Chaque motif mérite une page dédiée sur votre site pour capter les requêtes spécifiques comme "micro-nutrition fatigue" ou "micro-nutritionniste intestin".',
  },
  {
    question: 'Comment parler des compléments alimentaires sans enfreindre la réglementation ?',
    answer: 'En restant sur votre rôle de conseiller. Je rédige les pages en mentionnant les grandes familles (vitamines, minéraux, acides aminés, probiotiques) sans recommandation commerciale d\'une marque précise. Le ton reste clinique et personnalisé : chaque client a besoin de son bilan avant toute recommandation.',
  },
  {
    question: 'La consultation en visio est-elle adaptée à la micro-nutrition ?',
    answer: 'Parfaitement. Le bilan micro-nutritionnel se fait à 90 % par interrogatoire et analyse du mode de vie. La visio permet de capter des clients partout en France, notamment dans des zones où il n\'y a pas de micro-nutritionniste. C\'est un énorme levier que je mets en avant sur chaque site.',
  },
]

const config: MetierConfig = {
  metier: 'Micro-Nutritionniste',
  metierLower: 'micro-nutritionniste',
  heroKicker: 'Sites web pour micro-nutritionniste',
  heroHeadline: 'Site internet micro-nutritionniste,',
  heroHeadlineItalic: 'une niche en forte croissance qui vous cherche',
  heroDescription:
    'Je crée des sites internet pour les micro-nutritionnistes partout en France. Bilans, fatigue chronique, troubles digestifs, immunité, sport, visio : chaque page capte une clientèle avertie qui comprend l\'intérêt d\'un accompagnement spécialisé.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour micro-nutritionniste',
  whatKicker: 'Sites web pour micro-nutritionniste',
  whatTitle: 'Une niche en croissance',
  whatTitleItalic: 'avec peu de professionnels bien référencés',
  whatPara1:
    'La micro-nutrition est passée en quelques années d\'un terme confidentiel à une approche de plus en plus demandée. Les sportifs cherchent à optimiser leur récupération, les femmes en fatigue chronique cherchent des réponses que la médecine classique ne leur donne pas, les personnes avec troubles digestifs cherchent des solutions personnalisées. Les requêtes explosent et peu de sites y répondent correctement.',
  whatPara2:
    'Je construis des sites micro-nutritionniste qui captent cette niche en croissance. Pages par motif (fatigue, digestion, immunité, sport, hormones), approche basée sur les preuves, consultations en visio pour capter du national, explication claire de votre démarche. Une position d\'expert qui justifie des honoraires premium.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1559757148-5c350d0d3c56-w800.webp',
  whatImageAlt: 'Création site internet pour micro-nutritionniste',
  pillars: [
    { icon: 'Target', title: 'Page par motif', desc: 'Fatigue, digestion, immunité, sport : une page par problème = une requête captée.' },
    { icon: 'FileSearch', title: 'Position expert', desc: 'Approche basée sur les preuves, formation valorisée. Justifie des honoraires premium.' },
    { icon: 'User', title: 'Visio nationale', desc: 'La micro-nutrition se pratique à 90 % à distance. Clientèle nationale facile à capter.' },
  ],
  whatFooterText:
    'Un micro-nutritionniste bien référencé capte 8 à 18 bilans par mois, avec des paniers moyens de 80 à 150 €.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre pratique', description: 'Spécialités, formations (DU, DIU, instituts), approche, outils d\'analyse, bilans proposés, modalités.' },
    { number: '02', title: 'Construction du site', description: 'Pages par motif, explication de la méthode, bilans, visio, formations valorisées. Respect de la réglementation sur les compléments.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premiers bilans, ajustements selon les conversions.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des clients à un micro-nutritionniste',
  keywordsIntro:
    'Les clients d\'un micro-nutritionniste cherchent des réponses précises à des problèmes chroniques non résolus par la médecine classique.',
  keywordCategories: [
    { icon: 'Zap', title: 'Fatigue', text: 'micro-nutrition fatigue, fatigue chronique, burn-out nutrition, bilan fatigue.' },
    { icon: 'Target', title: 'Digestion', text: 'micro-nutrition intestin, SIBO, intestin irritable, candidose, ballonnements.' },
    { icon: 'User', title: 'Hormones / Femme', text: 'micro-nutrition ménopause, SOPK, cycle féminin, micro-nutrition grossesse.' },
    { icon: 'FileSearch', title: 'Sport', text: 'micro-nutrition sport, récupération trail, compléments sportifs, nutrition triathlon.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel de la nutrition ou du bien-être ?',
  relatedPara:
    'Les métiers de la nutrition et du bien-être ont une logique proche : niches, expertise, accompagnement personnalisé. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet nutritionniste', href: '/site-internet-nutritionniste' },
    { label: 'Site internet diététicien', href: '/site-internet-dieteticien' },
    { label: 'Site internet naturopathe', href: '/site-internet-naturopathe' },
    { label: 'Site internet thérapeute', href: '/site-internet-therapeute' },
  ],
  miniCtaText: 'Envie de capter une clientèle avertie sur une niche en forte croissance ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Micro-Nutritionniste', description, '/site-internet-micro-nutritionniste', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Micro-Nutritionniste', description, '/site-internet-micro-nutritionniste'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Micro-Nutritionniste', path: '/site-internet-micro-nutritionniste' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetMicroNutritionnistePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

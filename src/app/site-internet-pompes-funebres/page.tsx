import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet pompes funèbres : création de site web optimisé SEO pour entreprises funéraires. Obsèques, crémation, inhumation, marbrerie, contrats prévoyance — capter les familles avec dignité via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Pompes Funèbres | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-pompes-funebres' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Une entreprise de pompes funèbres a-t-elle besoin d\'un site internet ?',
    answer: 'Oui, et peut-être plus qu\'on ne l\'imagine. Les familles en deuil cherchent aujourd\'hui leurs pompes funèbres sur Google, souvent en urgence, souvent la nuit suivant le décès. Elles tapent "pompes funèbres + ville" ou "organisation obsèques + ville" et choisissent les 2-3 premières qui inspirent confiance. Sans site digne et rassurant, vous êtes absent au moment où les familles ont le plus besoin de vous.',
  },
  {
    question: 'Comment traiter un sujet aussi sensible sans être commercial ?',
    answer: 'C\'est toute la difficulté, et c\'est ce que je soigne particulièrement. Le site doit être sobre, rassurant, informatif. Pas de promos, pas de prix barrés, pas de ton commercial. Je privilégie des textes qui expliquent calmement les démarches (les premières heures, le transport du défunt, les choix à faire), les formules disponibles, vos valeurs. L\'objectif est d\'aider les familles à se repérer, pas de vendre.',
  },
  {
    question: 'Combien coûte un site pour entreprise de pompes funèbres ?',
    answer: 'Un site vitrine complet démarre à 1 800 euros. Il inclut une page par prestation (organisation obsèques, crémation, inhumation, marbrerie, contrats prévoyance), une page démarches administratives pour aider les familles, vos valeurs et votre histoire, les modalités de contact 24/7, les agences et chambres funéraires.',
  },
  {
    question: 'Peut-on afficher des tarifs indicatifs sur le site ?',
    answer: 'Oui, c\'est même devenu obligatoire depuis 2009 : les pompes funèbres doivent afficher publiquement une liste de prix. Je crée une page "Nos formules et tarifs" qui présente les options de manière claire et non commerciale. C\'est à la fois conforme à la loi et rassurant pour les familles qui ont peur d\'être dans l\'embarras financier.',
  },
  {
    question: 'Les contrats obsèques prévoyance sont un levier intéressant, comment le valoriser ?',
    answer: 'Les contrats de prévoyance obsèques sont un marché en forte croissance : les seniors cherchent activement à organiser leurs propres obsèques à l\'avance pour soulager leurs proches. Je crée une page dédiée qui explique les contrats (en capital, en prestations), les avantages, les modalités. Ces clients trouvent souvent votre site via des requêtes comme "contrat obsèques + ville" ou "prévoyance obsèques".',
  },
  {
    question: 'Comment être disponible 24/7 sur le site ?',
    answer: 'Par un numéro d\'urgence en gros dès l\'accueil, disponible tous les jours et toutes les nuits. Un formulaire de contact en ligne pour les demandes non urgentes (contrats prévoyance, questions). Une mention claire de vos horaires d\'agence pour les rendez-vous en journée. Google valorise aussi les entreprises qui affichent une disponibilité 24/7, ce qui améliore le référencement local.',
  },
  {
    question: 'Est-ce que je peux intégrer les avis de décès et les hommages en ligne ?',
    answer: 'Oui, c\'est un service très apprécié des familles. Je peux intégrer un espace "hommages en ligne" sécurisé où les proches laissent des messages, qui permet aux familles éloignées de participer. C\'est aussi un moyen pour elles de prolonger le souvenir. C\'est un vrai plus qui vous différencie et qui apporte de la valeur au-delà de la prestation principale.',
  },
]

const config: MetierConfig = {
  metier: 'Pompes Funèbres',
  metierLower: 'pompes funèbres',
  heroKicker: 'Sites web pour pompes funèbres',
  heroHeadline: 'Site internet pompes funèbres,',
  heroHeadlineItalic: 'une présence digne pour les familles',
  heroDescription:
    'Je crée des sites internet pour les entreprises de pompes funèbres partout en France. Organisation d\'obsèques, crémation, inhumation, marbrerie, contrats prévoyance : chaque page est rédigée avec sobriété et dignité pour accompagner les familles au moment où elles en ont le plus besoin.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour pompes funèbres',
  whatKicker: 'Sites web pour pompes funèbres',
  whatTitle: 'Une présence digne',
  whatTitleItalic: 'quand les familles en ont le plus besoin',
  whatPara1:
    'Quand une famille perd un proche, elle a souvent peu de temps pour choisir une entreprise de pompes funèbres. Les premières heures suivant le décès sont à la fois urgentes et désorientantes. La famille cherche sur Google, en pleine nuit parfois, "pompes funèbres + sa ville", "organisation obsèques + ville", et doit faire un choix important sans pouvoir vraiment comparer. Votre site est souvent son premier point de contact avec votre entreprise.',
  whatPara2:
    'Je construis des sites pompes funèbres qui accompagnent les familles avec dignité. Un ton sobre et informatif (jamais commercial), des explications claires sur les démarches, une transparence sur les formules et tarifs, et un numéro 24/7 toujours visible. L\'objectif n\'est pas de vendre, c\'est d\'aider les familles à se sentir en confiance avec vous dès les premières secondes sur le site.',
  whatImageUrl: 'https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour entreprise de pompes funèbres',
  pillars: [
    { icon: 'MessageCircle', title: 'Ton digne et rassurant', desc: 'Textes sobres qui accompagnent les familles plutôt que de vendre. C\'est ce qui inspire confiance.' },
    { icon: 'FileSearch', title: 'Démarches expliquées', desc: 'Page claire sur les formalités, les délais, les choix. Les familles ne sont plus perdues.' },
    { icon: 'User', title: 'Contact 24/7 visible', desc: 'Numéro d\'urgence toujours en haut de page. Disponibilité rassurante affichée clairement.' },
  ],
  whatFooterText:
    'Un site de pompes funèbres bien construit double en moyenne les prises de contact entrantes après 3 à 4 mois en ligne.',
  timelineSteps: [
    { number: '01', title: 'On parle de votre entreprise', description: 'Vos valeurs, votre histoire, vos agences, vos prestations (cérémonies civiles, religieuses, crémation, inhumation, marbrerie), vos partenariats avec les salles funéraires.' },
    { number: '02', title: 'Construction du site', description: 'Je rédige chaque page avec sobriété. Pages formules et tarifs conformes à la loi, page démarches, présentation de votre équipe, informations pratiques sur vos agences. Vous validez chaque mot.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Site en ligne, fiche Google Business optimisée avec horaires 24/7, premières prises de contact. On ajuste selon les retours des premières familles.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent les familles aux pompes funèbres',
  keywordsIntro:
    'Les recherches liées au deuil sont particulières : urgence absolue pour certaines, anticipation pour d\'autres. Je structure votre site pour capter les deux profils avec le même soin et la même dignité.',
  keywordCategories: [
    { icon: 'MapPin', title: 'Local urgence', text: 'pompes funèbres + ville, funérarium + ville, entreprise funéraire proche, obsèques + ville.' },
    { icon: 'Target', title: 'Prestations', text: 'organisation obsèques, crémation, inhumation, cérémonie civile, transport défunt.' },
    { icon: 'FileSearch', title: 'Marbrerie', text: 'monument funéraire, pierre tombale, plaque funéraire, gravure marbrerie, caveau.' },
    { icon: 'User', title: 'Prévoyance', text: 'contrat obsèques, prévoyance obsèques, assurance obsèques, organiser ses obsèques.' },
  ],
  relatedTitle: 'Vous êtes dans un autre métier lié aux seniors ou à la santé ?',
  relatedPara:
    'Les métiers qui touchent aux moments sensibles de la vie ont une logique SEO proche : rassurer, expliquer, être disponible. Voici les autres pages métiers disponibles.',
  relatedLinks: [
    { label: 'Site internet médecin', href: '/site-internet-medecin' },
    { label: 'Site internet aide à domicile', href: '/site-internet-aide-a-domicile' },
    { label: 'Site internet notaire', href: '/site-internet-notaire' },
    { label: 'Site internet avocat', href: '/site-internet-avocat' },
  ],
  miniCtaText: 'Envie d\'accompagner les familles avec un site digne et rassurant ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Pompes Funèbres', description, '/site-internet-pompes-funebres', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Pompes Funèbres', description, '/site-internet-pompes-funebres'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Pompes Funèbres', path: '/site-internet-pompes-funebres' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetPompesFunebresPage() {
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

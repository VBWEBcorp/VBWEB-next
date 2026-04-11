import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet marbrerie funéraire : création de site web optimisé SEO. Monument, caveau, gravure, rénovation pierre tombale, entretien — capter les familles avec dignité.'

export const metadata: Metadata = {
  title: 'Site Internet Marbrerie Funéraire | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-marbrerie-funeraire' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Une marbrerie funéraire a-t-elle besoin d\'un site internet ?',
    answer: 'Oui, et c\'est devenu indispensable. Les familles qui cherchent un monument funéraire, une gravure ou une rénovation de pierre tombale passent d\'abord par Google. Elles veulent voir des exemples, comparer, se renseigner sur les matériaux et les prix avant de contacter un marbrier. Sans site digne et rassurant, vous êtes invisible à ce moment délicat.',
  },
  {
    question: 'Quels modèles de monuments faut-il présenter ?',
    answer: 'Une sélection représentative de vos réalisations : monuments traditionnels, contemporains, en granit, marbre, pierre, cinéraires pour urnes. Des photos soignées avec fiches techniques (matériau, dimensions, options). Pas de prix affichés sur chaque modèle mais des fourchettes indicatives par gamme rassurent les familles.',
  },
  {
    question: 'La rénovation de pierre tombale est-elle un vrai levier ?',
    answer: 'Oui, un marché en croissance. Beaucoup de tombes anciennes nécessitent une rénovation : pierre fendue, gravure effacée, joint à refaire, redressement. Les familles cherchent "rénovation pierre tombale + ville", "nettoyage tombe", "gravure complémentaire". Une page dédiée à la rénovation capte cette clientèle souvent à l\'occasion d\'un décès récent dans la famille.',
  },
  {
    question: 'Comment gérer la dimension émotionnelle sur le site ?',
    answer: 'Par un ton sobre, respectueux, jamais commercial. Pas de promos, pas de "nos meilleurs prix". Je rédige avec bienveillance, en expliquant votre métier, votre savoir-faire, votre écoute des familles. Les photos sont soignées mais pas glaçantes. L\'objectif est d\'accompagner les familles, pas de vendre.',
  },
]

const config: MetierConfig = {
  metier: 'Marbrerie Funéraire',
  metierLower: 'marbrerie funéraire',
  heroKicker: 'Sites web pour marbrerie funéraire',
  heroHeadline: 'Site internet marbrerie funéraire,',
  heroHeadlineItalic: 'un savoir-faire au service des familles',
  heroDescription:
    'Je crée des sites internet pour les marbriers funéraires partout en France. Monuments, caveaux, gravure, rénovation, cinéraires, entretien : chaque page valorise votre savoir-faire avec sobriété pour accompagner les familles.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour marbrerie funéraire',
  whatKicker: 'Sites web pour marbrerie funéraire',
  whatTitle: 'Une marbrerie trouvée',
  whatTitleItalic: 'par des familles qui veulent honorer leurs proches',
  whatPara1:
    'Quand une famille doit choisir un monument funéraire, elle veut prendre son temps pour faire le bon choix. Elle cherche sur Google, regarde des photos, compare des styles, se renseigne sur les matériaux et les coûts. Votre site est souvent son premier contact avec votre savoir-faire. S\'il est digne et bien présenté, vous gagnez la confiance avant même le rendez-vous en atelier.',
  whatPara2:
    'Je construis des sites marbrerie funéraire qui valorisent votre savoir-faire avec sobriété. Galerie de monuments (granit, marbre, pierre), pages par type de prestation (création, gravure, rénovation, entretien), explications des matériaux, ton respectueux. Pas de commercial, que du sérieux et de l\'accompagnement.',
  whatImageUrl: 'https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour marbrerie funéraire',
  pillars: [
    { icon: 'FileSearch', title: 'Galerie sobre', desc: 'Photos soignées de vos monuments. Les familles comparent visuellement avant de choisir.' },
    { icon: 'Target', title: 'Pages rénovation', desc: 'Marché en croissance souvent sous-exploité par les concurrents. Fort levier.' },
    { icon: 'User', title: 'Ton respectueux', desc: 'Pas de commercial, jamais de promos. Accompagner les familles, pas vendre.' },
  ],
  whatFooterText:
    'Une marbrerie bien référencée reçoit 10 à 20 contacts de familles par mois avec des projets concrets.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre savoir-faire', description: 'Types de monuments, matériaux travaillés, gravure, rénovation, entretien, zones d\'intervention, cimetières desservis.' },
    { number: '02', title: 'Construction du site', description: 'Galerie, pages par prestation, matériaux, explications, ton sobre. Conforme à la sensibilité du métier.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières prises de contact, accompagnement des familles.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des familles à une marbrerie funéraire',
  keywordsIntro:
    'Les familles cherchent selon leur besoin précis : nouveau monument, rénovation, gravure complémentaire, entretien.',
  keywordCategories: [
    { icon: 'Target', title: 'Monument', text: 'monument funéraire, pierre tombale, tombe granit, caveau, sépulture.' },
    { icon: 'FileSearch', title: 'Gravure', text: 'gravure funéraire, plaque funéraire, épitaphe, médaillon photo tombe.' },
    { icon: 'Zap', title: 'Rénovation', text: 'rénovation pierre tombale, nettoyage tombe, redressement monument, réparation pierre tombale.' },
    { icon: 'User', title: 'Crémation', text: 'monument cinéraire, columbarium, stèle cinéraire, urne funéraire.' },
  ],
  relatedTitle: 'Vous êtes dans un autre métier lié au funéraire ?',
  relatedPara:
    'Les métiers funéraires ont une logique proche : dignité, accompagnement, savoir-faire. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet pompes funèbres', href: '/site-internet-pompes-funebres' },
    { label: 'Site internet crématorium', href: '/site-internet-crematorium' },
    { label: 'Site internet services funéraires', href: '/site-internet-services-funeraires' },
    { label: 'Site internet notaire', href: '/site-internet-notaire' },
  ],
  miniCtaText: 'Envie d\'un site marbrerie funéraire qui accompagne les familles avec dignité ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Marbrerie Funéraire', description, '/site-internet-marbrerie-funeraire', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Marbrerie Funéraire', description, '/site-internet-marbrerie-funeraire'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Marbrerie Funéraire', path: '/site-internet-marbrerie-funeraire' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetMarbrerieFunerairePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

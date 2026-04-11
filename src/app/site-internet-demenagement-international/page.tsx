import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet déménagement international : création de site web optimisé SEO. Conteneur, groupage, expatriation, douane, formalités — capter les expatriés via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Déménagement International | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-demenagement-international' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Pourquoi une page spécifique "déménagement international" ?',
    answer: 'Parce que c\'est une niche avec des paniers énormes (8-30 k€) et des recherches très spécifiques. Les expatriés cherchent "déménagement international + destination", "déménageur expatriation", "déménagement Europe". Une page dédiée à l\'international avec les démarches douanières, les modalités conteneur ou groupage capte cette clientèle à forte valeur.',
  },
  {
    question: 'Comment gérer les démarches douanières sur le site ?',
    answer: 'En les expliquant clairement. Les clients ont peur de la paperasse douanière et cherchent un prestataire qui prend tout en charge. Une page "Formalités douanières" qui explique votre accompagnement (déclaration, inventaire, valeur déclarée, liste des documents nécessaires) rassure énormément et positionne en expert qui soulage les clients de toute cette complexité.',
  },
  {
    question: 'Conteneur complet ou groupage : faut-il expliquer la différence ?',
    answer: 'Oui, c\'est une question fondamentale que tous les clients se posent. Conteneur complet (exclusif, plus cher, plus rapide) vs groupage (partagé, moins cher, plus lent). Une page qui compare clairement ces options aide les clients à choisir et les qualifie selon leur budget avant même le premier appel.',
  },
  {
    question: 'Les destinations méritent-elles des pages dédiées ?',
    answer: 'Oui, si vous avez une récurrence sur certaines. "Déménagement vers le Québec", "Déménagement vers Dubaï", "Déménagement Royaume-Uni post-Brexit" sont des requêtes avec des spécificités propres (douanes, documents, délais). Une page par destination fréquente capte des clients déjà positionnés sur leur projet précis.',
  },
]

const config: MetierConfig = {
  metier: 'Déménagement International',
  metierLower: 'déménagement international',
  heroKicker: 'Sites web pour déménagement international',
  heroHeadline: 'Site internet déménagement international,',
  heroHeadlineItalic: 'des expatriés qui signent pour 20 000 €',
  heroDescription:
    'Je crée des sites internet pour les déménageurs spécialisés en international partout en France. Conteneur, groupage, expatriation, formalités douanières : chaque page capte les expatriés avec des paniers moyens entre 8 et 30 k€.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour déménagement international',
  whatKicker: 'Sites web pour déménagement international',
  whatTitle: 'Un déménageur international',
  whatTitleItalic: 'choisi par des expatriés en plein stress',
  whatPara1:
    'Les expatriés qui préparent un déménagement international vivent une période très stressante : logement à quitter, logement à trouver, visa, école des enfants, déménagement de toute leur vie. Ils cherchent un professionnel qui prend en charge toute la complexité. Les requêtes "déménagement international", "déménagement expatriation", "déménageur conteneur" amènent des clients très motivés mais aussi très exigeants sur la qualité.',
  whatPara2:
    'Je construis des sites déménagement international qui rassurent ces clients stressés. Explication claire des modalités (conteneur, groupage), gestion complète des formalités douanières, assurances, pages par destination récurrente, témoignages d\'expatriés satisfaits. Un positionnement d\'expert qui convertit et justifie des paniers premium.',
  whatImageUrl: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour déménagement international',
  pillars: [
    { icon: 'Target', title: 'Conteneur vs groupage', desc: 'Comparaison claire des modalités. Aide les clients à choisir et qualifie les demandes.' },
    { icon: 'FileSearch', title: 'Douanes gérées', desc: 'Page dédiée aux formalités. Rassure les clients inquiets de la paperasse.' },
    { icon: 'User', title: 'Pages par destination', desc: 'Québec, Dubaï, Royaume-Uni : chaque destination a ses spécificités et sa page.' },
  ],
  whatFooterText:
    'Un déménageur international bien référencé signe en moyenne 15 à 30 dossiers par an avec des paniers de 8-25 k€.',
  timelineSteps: [
    { number: '01', title: 'On cadre vos destinations', description: 'Zones géographiques desservies, modalités (conteneur, groupage, avion), partenaires douaniers, assurances, inventaire.' },
    { number: '02', title: 'Construction du site', description: 'Pages par modalité, formalités douanières, destinations principales, témoignages, formulaire détaillé.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières demandes d\'expatriés, suivi des conversions en dossiers signés.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des expatriés en déménagement international',
  keywordsIntro:
    'Les expatriés cherchent selon la destination, la modalité et leur profil (retour en France, expatriation, mission pro).',
  keywordCategories: [
    { icon: 'Target', title: 'Général', text: 'déménagement international, déménagement expatriation, déménageur international, déménagement mondial.' },
    { icon: 'Zap', title: 'Destinations', text: 'déménagement Québec, déménagement Dubaï, déménagement Royaume-Uni, déménagement Suisse, déménagement USA.' },
    { icon: 'FileSearch', title: 'Modalités', text: 'déménagement conteneur, déménagement groupage, déménagement avion, garde-meubles international.' },
    { icon: 'User', title: 'Formalités', text: 'déménagement formalités douane, déménagement expatrié, retour en France, mission internationale.' },
  ],
  relatedTitle: 'Vous proposez d\'autres services de déménagement ?',
  relatedPara:
    'Les métiers du déménagement international ont une logique proche : expertise, réassurance, prix premium. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet déménageur', href: '/site-internet-demenageur' },
    { label: 'Site internet entreprise de déménagement', href: '/site-internet-entreprise-demenagement' },
    { label: 'Site internet garde-meubles', href: '/site-internet-garde-meubles' },
    { label: 'Site internet transport mobilier', href: '/site-internet-transport-mobilier' },
  ],
  miniCtaText: 'Envie de capter des dossiers d\'expatriation avec des paniers à 20 000 € ?',
  caseStudiesKicker: 'Sites créés pour des prestataires',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Déménagement International', description, '/site-internet-demenagement-international', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Déménagement International', description, '/site-internet-demenagement-international'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Déménagement International', path: '/site-internet-demenagement-international' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetDemenagementInternationalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet pompe à chaleur : création de site web optimisé SEO. Installation PAC air-eau, air-air, géothermie, aides MaPrimeRénov, RGE — capter les chantiers rentables via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Pompe à Chaleur | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-pompe-a-chaleur' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Pourquoi une page dédiée "pompe à chaleur" plutôt que "chauffagiste" ?',
    answer: 'Parce que "pompe à chaleur + ville" est aujourd\'hui une des requêtes les plus rentables du BTP. Les clients qui la tapent sont en recherche active avec des paniers moyens de 10 à 25 k€. Une page dédiée qui répond à toutes leurs questions (prix, aides, types, délais) les convertit en demandes de devis qualifiées mieux qu\'une page chauffagiste généraliste.',
  },
  {
    question: 'Quels types de pompes à chaleur faut-il présenter ?',
    answer: 'Les 4 principales : air-eau (la plus vendue, 60 % du marché), air-air (climatisation réversible, moins rentable), géothermie (haut de gamme, réservé aux grands terrains), et pompe à chaleur hybride (couplée à une chaudière). Chaque technologie a ses cibles et son discours : une page par type permet de répondre précisément aux recherches spécialisées.',
  },
  {
    question: 'Comment expliquer les aides sans faire peur avec la complexité ?',
    answer: 'Par un simulateur ou un tableau clair. MaPrimeRénov (selon revenus), CEE, éco-PTZ, TVA 5,5 % : chaque aide a ses conditions. Je peux créer un simulateur simple qui demande 4 questions (revenus, type de logement, PAC visée) et affiche une estimation des aides. C\'est très engageant et qualifie fortement les demandes de devis.',
  },
  {
    question: 'Le RGE est-il absolument obligatoire sur cette page ?',
    answer: 'Oui, c\'est un prérequis. Sans RGE, vos clients ne peuvent pas obtenir MaPrimeRénov ni les CEE. Je mets en avant votre certification RGE QualiPAC, les marques installées (Daikin, Mitsubishi, Atlantic, Viessmann) et les années d\'expérience sur la technologie. C\'est ce qui fait basculer les clients qui comparent 3 devis.',
  },
]

const config: MetierConfig = {
  metier: 'Pompe à Chaleur',
  metierLower: 'pompe à chaleur',
  heroKicker: 'Sites web pour installateur pompe à chaleur',
  heroHeadline: 'Site internet pompe à chaleur,',
  heroHeadlineItalic: 'la page qui ramène les chantiers à 15 000 euros',
  heroDescription:
    'Je crée des sites internet spécialisés pour les installateurs de pompes à chaleur RGE partout en France. PAC air-eau, air-air, géothermie, hybride, simulateur d\'aides : chaque page capte les chantiers les plus rentables du BTP actuel.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour pompe à chaleur',
  whatKicker: 'Sites web pour installateur PAC',
  whatTitle: 'Un installateur PAC',
  whatTitleItalic: 'choisi parmi trois devis comparés',
  whatPara1:
    'Les clients qui cherchent une pompe à chaleur passent en moyenne 3 à 6 semaines à comparer les solutions, les marques, les aides, les installateurs. Ils demandent 3 à 5 devis avant de signer. La seule question est : est-ce que votre site est assez clair, détaillé et rassurant pour qu\'ils vous placent dans leur short list ?',
  whatPara2:
    'Je construis des sites installateur PAC qui répondent à toutes les questions des clients : types de PAC, prix indicatifs, aides disponibles, étapes d\'installation, garanties, RGE, marques. Un simulateur d\'aides qui qualifie les demandes. Des études de cas chantiers avec photos. L\'objectif : que vos devis se signent plus facilement parce que votre site a déjà fait 80 % du travail de conviction.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1587293852726-70cdb56c2866-w800.webp',
  whatImageAlt: 'Création site internet pour installateur pompe à chaleur',
  pillars: [
    { icon: 'Target', title: 'Pages par type de PAC', desc: 'Air-eau, air-air, géothermie, hybride : chaque technologie a sa requête et sa page dédiée.' },
    { icon: 'FileSearch', title: 'Simulateur d\'aides', desc: 'MaPrimeRénov + CEE en 4 questions. Qualifie fortement les demandes entrantes.' },
    { icon: 'TrendingUp', title: 'RGE QualiPAC', desc: 'Indispensable pour les aides. Mis en avant systématiquement avec preuves.' },
  ],
  whatFooterText:
    'Un installateur PAC bien référencé signe en moyenne 4 à 10 chantiers PAC par mois, avec des paniers de 10 à 25 k€.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre offre PAC', description: 'Marques installées, types de PAC maîtrisées, RGE QualiPAC, chantiers emblématiques, zones, tarifs indicatifs, partenariats.' },
    { number: '02', title: 'Construction du site', description: 'Pages par type, simulateur d\'aides, études de cas, RGE, marques, formulaire de devis qualifié.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières demandes qualifiées, suivi des conversions en chantiers signés.' },
  ],
  keywordsTitle: 'Les requêtes Google qui ramènent les chantiers PAC les plus rentables',
  keywordsIntro:
    'Les requêtes PAC se divisent en trois grandes familles : par technologie, par aide recherchée, par prix/devis. Chaque famille correspond à une phase différente du parcours client.',
  keywordCategories: [
    { icon: 'Target', title: 'Par type', text: 'pompe à chaleur air-eau, PAC air-air, PAC géothermie, PAC hybride, pompe à chaleur réversible.' },
    { icon: 'FileSearch', title: 'Aides', text: 'MaPrimeRénov pompe à chaleur, CEE PAC, éco-PTZ, TVA réduite PAC, aides changement chauffage.' },
    { icon: 'Zap', title: 'Prix / Devis', text: 'prix pompe à chaleur, devis PAC, coût installation PAC, tarif pompe à chaleur.' },
    { icon: 'User', title: 'Marques', text: 'installateur Daikin, Mitsubishi, Atlantic, Viessmann, Panasonic + ville.' },
  ],
  relatedTitle: 'Vous êtes un autre spécialiste chauffage ou énergie ?',
  relatedPara:
    'Les métiers du chauffage et de la rénovation énergétique ont une logique proche. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet chauffagiste', href: '/site-internet-chauffagiste' },
    { label: 'Site internet plombier-chauffagiste', href: '/site-internet-plombier-chauffagiste' },
    { label: 'Site internet installateur chaudière', href: '/site-internet-installateur-chaudiere' },
    { label: 'Site internet climatisation', href: '/site-internet-climatisation' },
  ],
  miniCtaText: 'Envie de signer plus de chantiers PAC grâce à une page qui fait le travail ?',
  caseStudiesKicker: 'Sites créés pour des artisans',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Pompe à Chaleur', description, '/site-internet-pompe-a-chaleur', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Pompe à Chaleur', description, '/site-internet-pompe-a-chaleur'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Pompe à Chaleur', path: '/site-internet-pompe-a-chaleur' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetPompeAChaleurPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

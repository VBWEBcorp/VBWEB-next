import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet installateur chaudière : création de site web optimisé SEO. Chaudière gaz, condensation, fioul, biomasse, remplacement, aides — capter les chantiers via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Installateur Chaudière | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-installateur-chaudiere' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Pourquoi "installateur chaudière" spécifiquement ?',
    answer: 'Parce que malgré la montée en puissance de la PAC, le remplacement de chaudière reste un marché énorme : des millions de chaudières en fin de vie chaque année. Les requêtes "remplacement chaudière + ville", "installation chaudière gaz + ville" restent très volumineuses et rentables. Une page dédiée à l\'installation chaudière capte cette clientèle spécifique, en complément d\'une page PAC.',
  },
  {
    question: 'Gaz, fioul, biomasse : faut-il des pages séparées ?',
    answer: 'Oui, car les enjeux sont différents. Gaz = transition attendue vers la condensation. Fioul = interdiction nouvelle installation, donc seulement remplacement à l\'identique. Biomasse = alternative écologique avec aides spécifiques. Chaque énergie a son discours, ses aides, ses contraintes. Une page par énergie évite le fourre-tout et remonte mieux sur les requêtes précises.',
  },
  {
    question: 'Le remplacement fioul par PAC ou chaudière biomasse peut-il être valorisé ?',
    answer: 'C\'est un gros marché pour les années à venir. Des milliers de propriétaires doivent changer leur chaudière fioul vieillissante sans pouvoir remettre du fioul. Une page "Remplacer sa chaudière fioul" qui présente les alternatives (PAC, biomasse, hybride), les aides et les démarches convertit très bien cette clientèle contrainte.',
  },
  {
    question: 'Quelles marques mettre en avant ?',
    answer: 'Les grandes marques que les clients recherchent : Viessmann, De Dietrich, Saunier Duval, Atlantic, Chaffoteaux, Frisquet. Une page par marque installée capte les requêtes spécifiques ("installateur Viessmann + ville") qui correspondent à des clients déjà convaincus d\'une marque et qui cherchent juste un pro certifié.',
  },
]

const config: MetierConfig = {
  metier: 'Installateur Chaudière',
  metierLower: 'installateur chaudière',
  heroKicker: 'Sites web pour installateur chaudière',
  heroHeadline: 'Site internet installateur chaudière,',
  heroHeadlineItalic: 'des chantiers de remplacement qui arrivent par Google',
  heroDescription:
    'Je crée des sites internet pour les installateurs de chaudières partout en France. Gaz condensation, fioul, biomasse, remplacement, aides MaPrimeRénov : chaque page capte les propriétaires qui cherchent à changer leur chauffage.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour installateur chaudière',
  whatKicker: 'Sites web pour installateur chaudière',
  whatTitle: 'Un installateur de chaudières',
  whatTitleItalic: 'qui capte les remplacements avant les autres',
  whatPara1:
    'Des millions de chaudières françaises vont être remplacées ces prochaines années : vieillissement, interdiction du fioul neuf, montée en puissance des solutions plus efficaces. Les propriétaires cherchent activement sur Google "remplacement chaudière + ville", "installation chaudière gaz condensation", "chaudière biomasse aides". Chaque requête correspond à un chantier de 3 à 8 k€ signable rapidement.',
  whatPara2:
    'Je construis des sites installateur chaudière qui captent cette clientèle en recherche active. Pages par énergie (gaz, fioul, biomasse), pages par marque, aides MaPrimeRénov clarifiées, études de cas. L\'objectif : que vous soyez dans le top 3 des installateurs consultés par les propriétaires de votre zone.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1587293852726-70cdb56c2866-w800.webp',
  whatImageAlt: 'Création site internet pour installateur de chaudières',
  pillars: [
    { icon: 'Target', title: 'Page par énergie', desc: 'Gaz, fioul, biomasse : chaque énergie a son marché, son discours et son ensemble d\'aides.' },
    { icon: 'FileSearch', title: 'Remplacement fioul', desc: 'Gros marché contraint par l\'interdiction. Pages dédiées aux alternatives qui convertissent.' },
    { icon: 'User', title: 'Pages par marque', desc: 'Viessmann, De Dietrich, Atlantic : clients déjà convaincus qui cherchent juste un installateur.' },
  ],
  whatFooterText:
    'Un installateur chaudière bien référencé signe en moyenne 5 à 12 chantiers de remplacement par mois via Google.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre offre', description: 'Énergies installées, marques distribuées, RGE Qualigaz/QualiBois, chantiers emblématiques, zones, tarifs indicatifs.' },
    { number: '02', title: 'Construction du site', description: 'Pages par énergie, par marque, remplacement fioul, aides, certifications, études de cas.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières demandes qualifiées, suivi des conversions en chantiers signés.' },
  ],
  keywordsTitle: 'Les requêtes Google qui ramènent des chantiers de chaudière',
  keywordsIntro:
    'Les requêtes chaudière se divisent par énergie, par motif (installation/remplacement/dépannage), par marque. Chaque requête reflète un client précis avec un budget précis.',
  keywordCategories: [
    { icon: 'Target', title: 'Par énergie', text: 'chaudière gaz condensation, chaudière fioul, chaudière biomasse, chaudière granulés bois.' },
    { icon: 'Zap', title: 'Remplacement', text: 'remplacement chaudière, changer chaudière, chaudière fin de vie, remplacer chaudière fioul.' },
    { icon: 'FileSearch', title: 'Aides', text: 'MaPrimeRénov chaudière, CEE chaudière, éco-PTZ chauffage, prime chaudière biomasse.' },
    { icon: 'User', title: 'Marques', text: 'installateur Viessmann, De Dietrich, Atlantic, Saunier Duval, Frisquet, Chaffoteaux.' },
  ],
  relatedTitle: 'Vous êtes un autre installateur chauffage ?',
  relatedPara:
    'Les métiers du chauffage ont une logique proche : pages par énergie, aides, certifications. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet chauffagiste', href: '/site-internet-chauffagiste' },
    { label: 'Site internet pompe à chaleur', href: '/site-internet-pompe-a-chaleur' },
    { label: 'Site internet plombier-chauffagiste', href: '/site-internet-plombier-chauffagiste' },
    { label: 'Site internet ramoneur', href: '/site-internet-ramoneur' },
  ],
  miniCtaText: 'Envie de capter les chantiers de remplacement chaudière dans votre zone ?',
  caseStudiesKicker: 'Sites créés pour des artisans',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Installateur Chaudière', description, '/site-internet-installateur-chaudiere', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Installateur Chaudière', description, '/site-internet-installateur-chaudiere'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Installateur Chaudière', path: '/site-internet-installateur-chaudiere' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetInstallateurChaudierePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

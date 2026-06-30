import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet dépannage serrurier : création de site web optimisé SEO. Dépannage serrure 24h/24, cylindre, clé cassée, effraction, remplacement — capter les appels urgents via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Dépannage Serrurier | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-depannage-serrurier' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Pourquoi une page "dépannage serrurier" spécifique plutôt qu\'une page "serrurier" généraliste ?',
    answer: 'Parce que "dépannage serrurier" est une requête très précise tapée par des gens qui ont un problème et qui payent tout de suite. C\'est différent de "serrurier" ou "installateur serrure". Une page dédiée au dépannage, avec votre numéro en gros et une promesse de délai, convertit 3 à 4 fois mieux qu\'une page généraliste sur cette requête.',
  },
  {
    question: 'Quels types d\'interventions dépannage mettre en avant ?',
    answer: 'Les cinq plus recherchées : clé cassée dans la serrure, cylindre bloqué, serrure qui ne ferme plus, remplacement de cylindre après perte, dépannage après tentative d\'effraction. Chaque intervention a son vocabulaire que le client tape sur Google, et chaque sous-page peut remonter sur sa requête spécifique.',
  },
  {
    question: 'Comment éviter de passer pour un serrurier escroc ?',
    answer: 'Par la transparence totale. Tarifs affichés (frais de déplacement, intervention, majoration nuit et weekend), photo du serrurier, SIRET visible, avis Google récents, mention "pas de facturation surprise". C\'est exactement ce que cherchent les clients échaudés par les arnaques à la porte claquée — et c\'est votre meilleur argument face à la concurrence opaque.',
  },
  {
    question: 'Le dépannage sous garantie (assurances) est-il un levier ?',
    answer: 'Oui, moins médiatisé mais très rentable. De plus en plus d\'assurances habitation proposent des dépannages serrurerie pris en charge. Une page "Dépannage assurance" explique votre convention avec les principaux assureurs, la prise en charge, les démarches. Vous captez ainsi une clientèle qui ne regarde même pas le prix.',
  },
]

const config: MetierConfig = {
  metier: 'Dépannage Serrurier',
  metierLower: 'dépannage serrurier',
  heroKicker: 'Sites web pour dépannage serrurier',
  heroHeadline: 'Site internet dépannage serrurier,',
  heroHeadlineItalic: 'des appels d\'urgence qui rentrent sans stress',
  heroDescription:
    'Je crée des sites internet pour les serruriers spécialisés en dépannage partout en France. Clé cassée, cylindre bloqué, effraction, assurances habitation : chaque page capte une intervention précise avec des tarifs transparents qui rassurent les clients.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour dépannage serrurier',
  whatKicker: 'Sites web pour dépannage serrurier',
  whatTitle: 'Un dépannage serrurier',
  whatTitleItalic: 'choisi contre la concurrence opaque',
  whatPara1:
    'Le dépannage serrurerie a mauvaise presse à cause des faux serruriers qui facturent 800 euros une ouverture de porte à 2h du matin. Les vrais professionnels en pâtissent : les clients arrivent méfiants. Votre site est votre meilleur outil pour casser cette méfiance avant même le premier appel.',
  whatPara2:
    'Je construis des sites dépannage serrurerie qui se démarquent par la transparence : tarifs clairs, SIRET visible, photo du serrurier, avis Google récents, promesse de délai. Vous ne gagnez plus seulement sur Google, vous gagnez aussi la confiance du client dès qu\'il arrive sur le site.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1558002038-1055907df827-w800.webp',
  whatImageAlt: 'Création site internet pour dépannage serrurier',
  pillars: [
    { icon: 'Zap', title: 'Numéro toujours visible', desc: 'En gros, en haut, cliquable. Le client appelle sans chercher.' },
    { icon: 'FileSearch', title: 'Tarifs transparents', desc: 'Déplacement, intervention, nuit, férié. Ce qui rassure face aux arnaques.' },
    { icon: 'TrendingUp', title: 'Assurances habitation', desc: 'Page dédiée aux dépannages pris en charge. Clientèle premium qui ne regarde pas le prix.' },
  ],
  whatFooterText:
    'Un dépannage serrurier bien référencé reçoit en moyenne 15 à 40 appels qualifiés par semaine après 3 mois.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre activité', description: 'Types de dépannage, zones, tarifs, horaires de garde, conventions assurances, SIRET, certifications.' },
    { number: '02', title: 'Construction du site', description: 'Page d\'accueil dépannage, pages par intervention, tarifs, assurances, transparence.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google Business optimisée, premiers appels, suivi des conversions.' },
  ],
  keywordsTitle: 'Les requêtes Google qui font sonner le téléphone en urgence',
  keywordsIntro:
    'Les requêtes dépannage serrurerie sont toujours tapées dans l\'urgence par des clients prêts à payer immédiatement pour retrouver l\'accès à leur logement.',
  keywordCategories: [
    { icon: 'Zap', title: 'Urgences courantes', text: 'clé cassée serrure, cylindre bloqué, serrure grippée, porte ne ferme plus.' },
    { icon: 'Target', title: 'Remplacement', text: 'changement cylindre, remplacement serrure, serrure 3 points, cylindre perdu.' },
    { icon: 'FileSearch', title: 'Effraction', text: 'réparation après cambriolage, dépannage effraction, porte forcée, serrure forcée.' },
    { icon: 'User', title: 'Assurance', text: 'dépannage serrurier assurance, prise en charge serrurier, serrurier agréé assurance.' },
  ],
  relatedTitle: 'Vous proposez d\'autres services de serrurerie ?',
  relatedPara:
    'Les métiers de la serrurerie ont une logique proche : urgence, transparence, fiche Google optimisée. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet serrurier', href: '/site-internet-serrurier' },
    { label: 'Site internet urgence serrurier', href: '/site-internet-urgence-serrurier' },
    { label: 'Site internet ouverture porte', href: '/site-internet-ouverture-porte' },
    { label: 'Site internet installateur alarme', href: '/site-internet-installateur-alarme' },
  ],
  miniCtaText: 'Envie d\'un site dépannage serrurier qui convertit face aux concurrents opaques ?',
  caseStudiesKicker: 'Sites créés pour des artisans',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Dépannage Serrurier', description, '/site-internet-depannage-serrurier', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Dépannage Serrurier', description, '/site-internet-depannage-serrurier'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Dépannage Serrurier', path: '/site-internet-depannage-serrurier' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetDepannageSerrurierPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

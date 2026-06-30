import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet société de nettoyage : création de site web optimisé SEO. Prestations complètes, B2B, contrats, certifications, références — capter les appels d\'offres via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Société de Nettoyage | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-societe-nettoyage' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: '"Société de nettoyage" ou "entreprise de nettoyage" : quelle différence SEO ?',
    answer: 'Deux requêtes quasi équivalentes mais utilisées par des profils différents. "Société de nettoyage" est souvent tapée par des acheteurs plus formels (grands comptes, collectivités, marchés publics), "entreprise de nettoyage" par des PME plus petites. Cibler les deux expressions sur votre site maximise la captation sans diluer le message.',
  },
  {
    question: 'Comment se positionner face aux grands groupes comme Onet ou Elior Services ?',
    answer: 'En jouant la proximité et l\'adaptabilité. Les grands groupes gagnent les très gros marchés nationaux mais perdent souvent face à des sociétés locales sérieuses sur les marchés régionaux et les grandes PME. Je valorise votre ancrage local, votre stabilité d\'équipe, votre flexibilité, vos certifications équivalentes. Ce sont vos atouts différenciateurs réels.',
  },
  {
    question: 'Les appels d\'offres publics sont-ils accessibles via le site ?',
    answer: 'Oui, indirectement. Les acheteurs publics qui lancent un appel d\'offres regardent les sites des entreprises potentiellement candidates avant de lancer la consultation. Un site qui présente vos certifications (QUALIPROPRE, ISO, sociales), vos références, votre capacité financière rassure les acheteurs publics et augmente vos chances d\'être consulté.',
  },
  {
    question: 'Faut-il afficher les engagements RSE ?',
    answer: 'Oui, c\'est devenu un critère de choix majeur. Produits écolabellisés, insertion professionnelle, formation continue, sécurité au travail : ces engagements sont valorisés dans les appels d\'offres et dans les négociations B2B sérieuses. Une page "Nos engagements RSE" bien construite vous différencie et peut faire basculer un choix.',
  },
]

const config: MetierConfig = {
  metier: 'Société de Nettoyage',
  metierLower: 'société de nettoyage',
  heroKicker: 'Sites web pour société de nettoyage',
  heroHeadline: 'Site internet société de nettoyage,',
  heroHeadlineItalic: 'des appels d\'offres qui arrivent sans prospecter',
  heroDescription:
    'Je crée des sites internet pour les sociétés de nettoyage partout en France. Prestations complètes, certifications, références, engagements RSE : chaque page renforce votre crédibilité face aux grands groupes et aux acheteurs exigeants.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour société de nettoyage',
  whatKicker: 'Sites web pour société de nettoyage',
  whatTitle: 'Une société de nettoyage',
  whatTitleItalic: 'crédible même face à Onet ou Elior',
  whatPara1:
    'Les sociétés de nettoyage locales bien structurées peuvent rivaliser avec les grands groupes sur leurs marchés régionaux — à condition d\'avoir un site qui inspire la même confiance. Les acheteurs B2B exigeants (grands comptes, collectivités, établissements scolaires, hôpitaux privés) évaluent votre sérieux avant même de vous consulter : certifications, références, RSE, gouvernance.',
  whatPara2:
    'Je construis des sites société de nettoyage qui hissent votre crédibilité au niveau des grands groupes. Certifications mises en avant, références anonymisées ou avec accord, engagements RSE détaillés, ancrage local valorisé. Un site qui vous fait sortir du lot dans les short lists des acheteurs publics et privés.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1521791136064-7986c2920216-w800.webp',
  whatImageAlt: 'Création site internet pour société de nettoyage',
  pillars: [
    { icon: 'FileSearch', title: 'Certifications complètes', desc: 'QUALIPROPRE, ISO 9001/14001/45001, sociales : crédibilité face aux grands groupes.' },
    { icon: 'User', title: 'Références B2B', desc: 'Logos ou secteurs clients. Rassure les acheteurs avant qu\'ils vous consultent.' },
    { icon: 'Target', title: 'Engagements RSE', desc: 'Environnement, insertion, formation : critères de choix décisifs en 2026.' },
  ],
  whatFooterText:
    'Une société de nettoyage bien référencée reçoit 10 à 25 demandes de devis B2B qualifiées par mois.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre société', description: 'Effectif, certifications, références clients, secteurs couverts, engagements RSE, zones, appels d\'offres visés.' },
    { number: '02', title: 'Construction du site', description: 'Pages corporate, prestations, certifications, références, RSE, formulaire B2B qualifié.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google Business optimisée, premières consultations d\'acheteurs, suivi des appels d\'offres.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des consultations de société de nettoyage',
  keywordsIntro:
    'Les acheteurs B2B qui cherchent une société de nettoyage ont des critères précis : certifications, capacité, références, engagements.',
  keywordCategories: [
    { icon: 'Target', title: 'Corporate', text: 'société de nettoyage, entreprise de propreté, société propreté + ville.' },
    { icon: 'FileSearch', title: 'Certifications', text: 'société nettoyage certifiée, QUALIPROPRE, ISO 9001 nettoyage, nettoyage agréé.' },
    { icon: 'User', title: 'Secteurs', text: 'nettoyage santé, nettoyage collectivités, nettoyage scolaire, nettoyage médical.' },
    { icon: 'Zap', title: 'RSE', text: 'nettoyage écologique professionnel, société nettoyage responsable, nettoyage RSE.' },
  ],
  relatedTitle: 'Vous proposez d\'autres services de nettoyage ?',
  relatedPara:
    'Les métiers du nettoyage B2B ont une logique proche : crédibilité, certifications, références. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet entreprise de nettoyage', href: '/site-internet-entreprise-nettoyage' },
    { label: 'Site internet nettoyage industriel', href: '/site-internet-nettoyage-industriel' },
    { label: 'Site internet ménage professionnel', href: '/site-internet-menage-professionnel' },
    { label: 'Site internet entretien bureaux', href: '/site-internet-entretien-bureaux' },
  ],
  miniCtaText: 'Envie de gagner des appels d\'offres face aux grands groupes nationaux ?',
  caseStudiesKicker: 'Sites créés pour des prestataires',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Société de Nettoyage', description, '/site-internet-societe-nettoyage', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Société de Nettoyage', description, '/site-internet-societe-nettoyage'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Société de Nettoyage', path: '/site-internet-societe-nettoyage' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetSocieteNettoyagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

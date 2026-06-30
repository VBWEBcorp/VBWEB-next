import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet nettoyage industriel : création de site web optimisé SEO. Usines, entrepôts, agroalimentaire, logistique, après-chantier — capter les contrats B2B via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Nettoyage Industriel | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-nettoyage-industriel' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Pourquoi une page spécifique pour le nettoyage industriel ?',
    answer: 'Parce que le nettoyage industriel est un marché B2B à forte valeur, avec des contrats très différents du nettoyage de bureaux. Les acheteurs sont des responsables d\'usine, des directeurs de site logistique, des qualiticiens agroalimentaires. Ils cherchent "nettoyage industriel + ville", "nettoyage usine", "nettoyage entrepôt" — et ne sont pas les mêmes que les acheteurs de nettoyage tertiaire.',
  },
  {
    question: 'Les certifications sont-elles critiques ?',
    answer: 'Absolument. Pour l\'agroalimentaire : HACCP, ISO 22000, BRC. Pour l\'industriel : ISO 9001, ISO 14001, MASE (sécurité en sites industriels). Ces certifications sont souvent obligatoires dans les cahiers des charges des appels d\'offres. Une page dédiée à vos certifications avec les logos officiels rassure les acheteurs et vous permet de répondre aux appels d\'offres sérieux.',
  },
  {
    question: 'Le nettoyage après-chantier est-il un bon levier ?',
    answer: 'Oui, et peu concurrentiel. Les entreprises de BTP cherchent "nettoyage après chantier + ville", "nettoyage fin de chantier". Ce sont des prestations ponctuelles mais rentables, souvent en urgence avant la livraison d\'un bâtiment. Une page dédiée capte ce flux complémentaire au récurrent industriel.',
  },
  {
    question: 'Faut-il des références clients visibles ?',
    answer: 'Oui, si possible. Les décideurs B2B aiment voir que vous travaillez déjà avec des entreprises similaires à la leur. Je peux lister vos références, avec ou sans nommer précisément (logos avec accord, ou juste secteurs "un leader agroalimentaire en Bretagne"). Cela donne de la crédibilité et ouvre des conversations qualifiées.',
  },
]

const config: MetierConfig = {
  metier: 'Nettoyage Industriel',
  metierLower: 'nettoyage industriel',
  heroKicker: 'Sites web pour nettoyage industriel',
  heroHeadline: 'Site internet nettoyage industriel,',
  heroHeadlineItalic: 'des contrats B2B qualifiés qui arrivent sans appel d\'offres',
  heroDescription:
    'Je crée des sites internet pour les entreprises de nettoyage industriel partout en France. Usines, entrepôts, agroalimentaire, logistique, après-chantier : chaque page capte des acheteurs B2B avec certifications et références mises en avant.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour nettoyage industriel',
  whatKicker: 'Sites web pour nettoyage industriel',
  whatTitle: 'Un nettoyage industriel',
  whatTitleItalic: 'trouvé par les responsables site avant leur appel d\'offres',
  whatPara1:
    'Les contrats de nettoyage industriel se gagnent souvent bien avant l\'appel d\'offres officiel. Les responsables de site et directeurs industriels repèrent leurs prestataires potentiels en amont, sur Google. Ils cherchent "nettoyage usine agroalimentaire + région", "nettoyage industriel certifié MASE", "nettoyage entrepôt logistique". Si votre site est dans le top 3, vous êtes consulté. Sinon, vous n\'existez pas pour eux.',
  whatPara2:
    'Je construis des sites nettoyage industriel qui captent ces acheteurs avant leurs concurrents. Pages par secteur (agro, logistique, industrie lourde, BTP), certifications très visibles, références anonymisées ou avec accord, formulaire de contact B2B qualifié. L\'objectif : que votre entreprise soit dans les short lists des responsables qui lancent leurs consultations.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1581091226825-a6a2a5aee158-w800.webp',
  whatImageAlt: 'Création site internet pour nettoyage industriel',
  pillars: [
    { icon: 'FileSearch', title: 'Certifications visibles', desc: 'HACCP, MASE, ISO 9001/14001 : incontournables pour les appels d\'offres sérieux.' },
    { icon: 'Target', title: 'Pages par secteur', desc: 'Agroalimentaire, logistique, BTP, industrie lourde : chaque secteur a ses exigences.' },
    { icon: 'User', title: 'Références B2B', desc: 'Logos et secteurs clients. Rassure les décideurs qui cherchent une entreprise fiable.' },
  ],
  whatFooterText:
    'Une entreprise de nettoyage industriel bien référencée reçoit 5 à 15 demandes B2B qualifiées par mois.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre offre', description: 'Secteurs ciblés, certifications, effectif, zones, équipement, références clients, spécialités.' },
    { number: '02', title: 'Construction du site', description: 'Pages par secteur, certifications, références, formulaire B2B qualifié, ton professionnel.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google B2B optimisée, premières demandes qualifiées, suivi des réponses aux appels d\'offres.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des contrats de nettoyage industriel',
  keywordsIntro:
    'Les acheteurs B2B industriels cherchent par secteur d\'activité et par certification. Chaque requête correspond à un type de contrat précis.',
  keywordCategories: [
    { icon: 'Target', title: 'Agroalimentaire', text: 'nettoyage agroalimentaire, nettoyage HACCP, nettoyage usine, nettoyage laiterie.' },
    { icon: 'Zap', title: 'Logistique', text: 'nettoyage entrepôt, nettoyage plateforme logistique, nettoyage hangar industriel.' },
    { icon: 'User', title: 'Chantier', text: 'nettoyage fin de chantier, nettoyage après travaux, nettoyage livraison bâtiment.' },
    { icon: 'FileSearch', title: 'Technique', text: 'nettoyage haute pression, décapage, cristallisation, nettoyage machines, nettoyage cuves.' },
  ],
  relatedTitle: 'Vous proposez d\'autres services de nettoyage ?',
  relatedPara:
    'Les métiers du nettoyage ont une logique proche : B2B, certifications, contrats récurrents. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet entreprise de nettoyage', href: '/site-internet-entreprise-nettoyage' },
    { label: 'Site internet société de nettoyage', href: '/site-internet-societe-nettoyage' },
    { label: 'Site internet nettoyage vitres', href: '/site-internet-nettoyage-vitres' },
    { label: 'Site internet entretien bureaux', href: '/site-internet-entretien-bureaux' },
  ],
  miniCtaText: 'Envie d\'être dans les short lists des responsables de site avant leurs appels d\'offres ?',
  caseStudiesKicker: 'Sites créés pour des prestataires',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Nettoyage Industriel', description, '/site-internet-nettoyage-industriel', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Nettoyage Industriel', description, '/site-internet-nettoyage-industriel'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Nettoyage Industriel', path: '/site-internet-nettoyage-industriel' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetNettoyageIndustrielPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

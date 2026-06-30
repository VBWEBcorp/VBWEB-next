import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet infogérance : création de site web optimisé SEO. PME, TPE, serveurs, cloud, cybersécurité, supervision 24/7 — capter les contrats B2B récurrents.'

export const metadata: Metadata = {
  title: 'Site Internet Infogérance | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-infogerance' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'L\'infogérance est-elle un vrai marché SEO en B2B ?',
    answer: 'Oui, massif et très rentable. Un contrat d\'infogérance PME vaut 500-5 000 euros par mois sur plusieurs années. Les dirigeants de PME cherchent "infogérance + leur ville", "prestataire informatique PME", "contrat maintenance informatique entreprise". Un site qui inspire confiance et qui montre votre expertise capte 2-6 nouveaux contrats par mois, soit 15-60 k€ de chiffre d\'affaires annuel récurrent supplémentaire.',
  },
  {
    question: 'Comment se positionner face aux grands ESN ?',
    answer: 'Par la proximité, la réactivité et les tarifs. Les grandes ESN (Atos, Sopra, Capgemini) visent les grands comptes et laissent le marché TPE-PME à des acteurs locaux. Un positionnement clair sur ce segment PME, avec contact direct, équipe stable, tarifs transparents, bat systématiquement les grands ESN sur ce marché. Je mets ces atouts en avant.',
  },
  {
    question: 'La cybersécurité peut-elle être un gros différenciateur ?',
    answer: 'Absolument. Les cyberattaques explosent sur les PME. Les dirigeants sont inquiets mais mal informés. Une page dédiée "Cybersécurité PME" qui explique les risques (ransomware, phishing, fuite de données), votre accompagnement, les certifications (éventuellement HDS, SecNumCloud) rassure et convertit fortement. C\'est souvent l\'argument qui fait basculer un prospect.',
  },
  {
    question: 'Faut-il afficher les tarifs d\'infogérance ?',
    answer: 'Idéalement une fourchette par profil d\'entreprise. "TPE 5-15 postes : à partir de X €/mois", "PME 15-50 postes : à partir de Y €/mois". Cette transparence filtre les demandes et qualifie les prospects sérieux. Les grandes ESN cachent leurs tarifs, vous pouvez vous différencier en étant transparent tout en restant flexible sur l\'offre réelle.',
  },
]

const config: MetierConfig = {
  metier: 'Infogérance',
  metierLower: 'infogérance',
  heroKicker: 'Sites web pour prestataire infogérance',
  heroHeadline: 'Site internet infogérance,',
  heroHeadlineItalic: 'des contrats PME récurrents à 5 chiffres mensuels',
  heroDescription:
    'Je crée des sites internet pour les prestataires d\'infogérance PME-TPE partout en France. Serveurs, cloud, cybersécurité, supervision 24/7, contrats récurrents : chaque page capte des dirigeants qui cherchent à déléguer leur IT.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour infogérance',
  whatKicker: 'Sites web pour infogérance',
  whatTitle: 'Un prestataire infogérance',
  whatTitleItalic: 'choisi par des PME qui veulent dormir tranquilles',
  whatPara1:
    'Les dirigeants de PME sont fatigués de gérer leur IT : pannes imprévues, cybersécurité inquiétante, sauvegardes incertaines, équipes internes surchargées. Ils cherchent un prestataire de confiance qui prend tout en charge. Ils tapent "infogérance + leur ville", "maintenance informatique PME", "prestataire IT entreprise". Le choix du prestataire est critique : ils veulent un partenaire sur plusieurs années, pas un exécutant ponctuel.',
  whatPara2:
    'Je construis des sites infogérance qui inspirent cette confiance long terme. Positionnement expert PME, pages services détaillés (serveurs, cloud, cybersécurité, supervision), tarifs indicatifs transparents, étude de cas clients, équipe présentée. Un site qui vous place naturellement dans la short list des dirigeants qui cherchent à changer de prestataire.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1558494949-ef010cbdcc31-w800.webp',
  whatImageAlt: 'Création site internet pour infogérance',
  pillars: [
    { icon: 'Target', title: 'Positionnement PME', desc: 'Différent des grandes ESN. Expertise dédiée au segment TPE-PME avec contact direct.' },
    { icon: 'FileSearch', title: 'Cybersécurité valorisée', desc: 'Gros levier de conversion face à la peur grandissante des ransomwares.' },
    { icon: 'User', title: 'Tarifs transparents', desc: 'Fourchette par profil d\'entreprise. Filtre et qualifie les prospects sérieux.' },
  ],
  whatFooterText:
    'Un prestataire infogérance bien référencé signe 2-6 nouveaux contrats PME par mois, soit 15-60 k€ de récurrent annuel.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre offre', description: 'Services (serveurs, cloud, réseau, cybersécurité, supervision), tailles de clients visées, certifications, équipe, zones.' },
    { number: '02', title: 'Construction du site', description: 'Pages services, cybersécurité, études de cas, tarifs, équipe, formulaire B2B qualifié.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google B2B optimisée, premières demandes qualifiées, suivi des conversions en contrats.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des contrats d\'infogérance',
  keywordsIntro:
    'Les dirigeants PME cherchent par besoin précis : infogérance globale, cybersécurité, cloud, supervision. Chaque requête reflète une douleur business.',
  keywordCategories: [
    { icon: 'Target', title: 'Général', text: 'infogérance + ville, infogérance PME, prestataire informatique entreprise, maintenance IT.' },
    { icon: 'Zap', title: 'Cybersécurité', text: 'cybersécurité PME, audit sécurité informatique, protection ransomware, RGPD IT.' },
    { icon: 'FileSearch', title: 'Cloud', text: 'migration cloud PME, Microsoft 365 entreprise, sauvegarde cloud, infogérance Azure.' },
    { icon: 'User', title: 'Supervision', text: 'supervision serveurs 24/7, monitoring informatique, gestion parc informatique.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel informatique B2B ?',
  relatedPara:
    'Les métiers informatiques B2B ont une logique proche : confiance, récurrence, tarifs. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet dépannage informatique', href: '/site-internet-depannage-informatique' },
    { label: 'Site internet maintenance informatique', href: '/site-internet-maintenance-informatique' },
    { label: 'Site internet technicien informatique', href: '/site-internet-technicien-informatique' },
    { label: 'Site internet assistance informatique', href: '/site-internet-assistance-informatique' },
  ],
  miniCtaText: 'Envie de signer 3 contrats d\'infogérance récurrents de plus par mois ?',
  caseStudiesKicker: 'Sites créés pour des prestataires',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Infogérance', description, '/site-internet-infogerance', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Infogérance', description, '/site-internet-infogerance'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Infogérance', path: '/site-internet-infogerance' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetInfogerancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

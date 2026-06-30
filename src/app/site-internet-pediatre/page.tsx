import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet pédiatre : création de site web optimisé SEO. Suivi bébé, vaccination, allergie, enfant, adolescent, téléconsultation pédiatrique — conforme CNOM.'

export const metadata: Metadata = {
  title: 'Site Internet Pédiatre | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-pediatre' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un pédiatre libéral a-t-il intérêt à avoir un site internet ?',
    answer: 'Oui, énormément. Les jeunes parents sont la génération la plus numérique qui soit : ils cherchent un pédiatre sur Google avant même d\'en parler à leur entourage. Ils veulent voir le cabinet, lire la présentation, vérifier si vous acceptez de nouveaux patients et prendre rendez-vous en ligne. Sans site, vous captez uniquement le bouche-à-oreille classique.',
  },
  {
    question: 'Comment rassurer les parents sur le site ?',
    answer: 'Par un ton bienveillant, votre parcours valorisé, des photos du cabinet adapté (salle d\'attente enfants, salle de soin colorée), et une présentation claire de votre approche (première visite, écoute parentale, gestion de l\'anxiété enfant). Les parents choisissent un pédiatre aussi sur l\'ambiance qu\'ils perçoivent avant même de venir.',
  },
  {
    question: 'Les certificats de crèche et de sport sont-ils un levier SEO ?',
    answer: 'Oui, des petites requêtes à gros volume cumulé. "Certificat crèche", "certificat sport enfant", "certificat nourrice" sont tapés par des parents pressés. Une page dédiée explique votre politique (sur rendez-vous, en téléconsultation, tarifs) et vous place en haut des résultats locaux pour ces requêtes.',
  },
  {
    question: 'La téléconsultation pédiatrique a-t-elle du sens ?',
    answer: 'Pour certains motifs oui : renouvellement ordonnance, questions sur un traitement, suivi d\'un problème connu. C\'est un vrai confort pour les parents qui ont un enfant malade à la maison et qui hésitent à le sortir. Une page dédiée qui explique les cas où la téléconsultation est adaptée (et ceux où elle ne l\'est pas) capte une patientèle reconnaissante.',
  },
]

const config: MetierConfig = {
  metier: 'Pédiatre',
  metierLower: 'pédiatre',
  heroKicker: 'Sites web pour pédiatre',
  heroHeadline: 'Site internet pédiatre,',
  heroHeadlineItalic: 'des parents rassurés avant même le premier rendez-vous',
  heroDescription:
    'Je crée des sites internet pour les pédiatres libéraux partout en France. Suivi bébé, vaccination, allergie, téléconsultation, adolescent : chaque page rassure les parents et capte les familles qui cherchent un pédiatre accessible sur Google.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour pédiatre',
  whatKicker: 'Sites web pour pédiatre',
  whatTitle: 'Un pédiatre trouvé',
  whatTitleItalic: 'par des parents qui cherchent du rassurant',
  whatPara1:
    'Les jeunes parents choisissent leur pédiatre comme ils choisissent un lieu de confiance : ils cherchent sur Google, lisent attentivement, regardent les photos, vérifient les avis. Ils veulent un professionnel bienveillant, une communication claire, et idéalement une prise de rendez-vous en ligne pour les petits bobos qui n\'attendent pas.',
  whatPara2:
    'Je construis des sites pédiatres qui rassurent les parents dès la première seconde. Ton bienveillant, présentation du cabinet adapté, pages par tranche d\'âge (nourrisson, enfant, adolescent), téléconsultation pour les motifs adaptés. Respect strict de la déontologie CNOM.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1581594693702-fbdc51b2763b-w800.webp',
  whatImageAlt: 'Création site internet pour pédiatre',
  pillars: [
    { icon: 'User', title: 'Ton rassurant', desc: 'Le site donne l\'ambiance du cabinet. Les parents choisissent aussi sur cette impression initiale.' },
    { icon: 'FileSearch', title: 'Pages par tranche d\'âge', desc: 'Nourrisson, enfant, adolescent : chaque tranche a ses besoins et sa requête Google.' },
    { icon: 'Target', title: 'Certificats crèche/sport', desc: 'Petites requêtes à gros volume cumulé qui amènent un flux constant de parents.' },
  ],
  whatFooterText:
    'Un pédiatre bien référencé capte en moyenne 20 à 45 nouvelles familles par mois via Google après 3 mois.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre cabinet', description: 'Cabinet adapté, tranches d\'âge, spécialités (allergologie, adolescence, nourrisson), téléconsultation, accueil nouveaux patients, certificats.' },
    { number: '02', title: 'Construction du site', description: 'Ton bienveillant, pages par tranche d\'âge, présentation du cabinet, prise de rendez-vous, conformité CNOM.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières familles qui trouvent le cabinet, ajustements selon retours parents.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des familles à un pédiatre',
  keywordsIntro:
    'Les parents cherchent un pédiatre pour des raisons précises : premier rendez-vous bébé, suivi vaccinal, maladie enfant, certificat, allergie. Chaque besoin a sa requête Google.',
  keywordCategories: [
    { icon: 'User', title: 'Premier RDV', text: 'pédiatre nourrisson, premier rendez-vous bébé, pédiatre nouveau-né, bilan 9 mois.' },
    { icon: 'Target', title: 'Vaccinations', text: 'vaccination bébé, vaccination enfant, pédiatre vaccin, rattrapage vaccinal.' },
    { icon: 'FileSearch', title: 'Certificats', text: 'certificat crèche, certificat sport enfant, certificat colonie, certificat nourrice.' },
    { icon: 'Zap', title: 'Spécificités', text: 'pédiatre allergologue, pédiatre adolescent, téléconsultation pédiatre, pédiatre TDAH.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel de la santé pédiatrique ou familiale ?',
  relatedPara:
    'Les métiers de santé des enfants et familles ont une logique proche : rassurer les parents, être accessible, pages par tranche d\'âge. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet médecin', href: '/site-internet-medecin' },
    { label: 'Site internet dentiste pédiatrique', href: '/site-internet-dentiste-pediatrique' },
    { label: 'Site internet sage-femme', href: '/site-internet-sage-femme' },
    { label: 'Site internet orthodontiste', href: '/site-internet-orthodontiste' },
  ],
  miniCtaText: 'Envie d\'un site pédiatre qui rassure les parents dès le premier clic ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Pédiatre', description, '/site-internet-pediatre', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Pédiatre', description, '/site-internet-pediatre'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Pédiatre', path: '/site-internet-pediatre' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetPediatrePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

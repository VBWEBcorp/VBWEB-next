import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet cabinet dentaire : création de site web optimisé SEO pour cabinets dentaires pluri-praticiens. Équipe, spécialités, prise de rendez-vous, urgence — capter les patients via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Cabinet Dentaire | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-cabinet-dentaire' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Mon cabinet dentaire a plusieurs praticiens, comment structurer le site ?',
    answer: 'Un cabinet pluri-praticien mérite une structure pensée : une page d\'accueil qui présente l\'équipe collectivement, une page par praticien avec sa bio et ses spécialités, et une page par spécialité proposée (omnipratique, pédiatrie, parodontologie, implantologie). Cette structure permet à chaque patient de trouver l\'interlocuteur adapté et d\'être rassuré avant le premier rendez-vous.',
  },
  {
    question: 'Combien coûte un site pour cabinet dentaire pluri-praticien ?',
    answer: 'Un site vitrine démarre à 2 000 euros pour un cabinet avec 2 à 4 praticiens. Il inclut les pages équipe, les bios individuelles, les pages par spécialité, le module de prise de rendez-vous connecté à Doctolib, les informations pratiques et la conformité déontologique. Le prix évolue selon le nombre de praticiens.',
  },
  {
    question: 'Comment valoriser le plateau technique partagé ?',
    answer: 'Par une page dédiée "Notre plateau technique" qui présente les équipements (scanner 3D, caméra empreinte numérique, radiologie, stérilisation, climatisation des blocs). C\'est un argument fort qui rassure les patients et qui justifie parfois des tarifs légèrement supérieurs. Je rédige cette page de façon clinique, sans tomber dans le marketing pur.',
  },
  {
    question: 'La prise de rendez-vous en ligne est-elle indispensable ?',
    answer: 'Pour un cabinet pluri-praticien, oui. Sans module de prise de rendez-vous, votre secrétariat est débordé par les appels et les rappels. Avec Doctolib intégré, les patients choisissent le praticien et le créneau, confirment et reçoivent un rappel. Votre standard se concentre sur les vraies urgences et les cas complexes.',
  },
  {
    question: 'Comment gérer l\'accueil de nouveaux patients ?',
    answer: 'Beaucoup de cabinets n\'acceptent plus de nouveaux patients : c\'est précisément une information que les patients cherchent sur Google. Je crée une page claire "Accueil nouveaux patients" qui précise vos règles (avec ou sans ordonnance, délai d\'obtention du premier RDV, procédure). Cette transparence évite les appels inutiles et améliore l\'expérience.',
  },
]

const config: MetierConfig = {
  metier: 'Cabinet Dentaire',
  metierLower: 'cabinet dentaire',
  heroKicker: 'Sites web pour cabinet dentaire',
  heroHeadline: 'Site internet cabinet dentaire,',
  heroHeadlineItalic: 'une équipe pluri-praticiens qui se distingue',
  heroDescription:
    'Je crée des sites internet pour les cabinets dentaires pluri-praticiens partout en France. Équipe mise en valeur, pages par spécialité, prise de rendez-vous en ligne, urgence : chaque page amène les bons patients vers les bons praticiens.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour cabinet dentaire',
  whatKicker: 'Sites web pour cabinet dentaire',
  whatTitle: 'Un cabinet pluri-praticien',
  whatTitleItalic: 'qui se lit comme une vraie équipe',
  whatPara1:
    'Un cabinet dentaire pluri-praticien a souvent 3 à 6 praticiens avec des spécialités différentes : omnipraticien, parodontologue, implantologue, pédodontiste. Le défi est de structurer le site pour que chaque patient trouve le bon interlocuteur, tout en montrant la cohérence de l\'équipe. Une simple page "L\'équipe" avec quelques photos ne suffit plus : il faut expliquer qui fait quoi, comment les praticiens collaborent, et comment prendre rendez-vous.',
  whatPara2:
    'Je construis des sites pluri-praticiens qui mettent chaque praticien en valeur tout en renforçant l\'image collective du cabinet. Bios individuelles claires, pages par spécialité, plateau technique partagé, intégration Doctolib avec choix du praticien, conformité CNCD. Le patient sait exactement vers qui il va et pourquoi il choisit votre cabinet.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1629909613654-28e377c37b09-w800.webp',
  whatImageAlt: 'Création site internet pour cabinet dentaire pluri-praticiens',
  pillars: [
    { icon: 'User', title: 'Équipe valorisée', desc: 'Une bio par praticien avec photo, parcours et spécialités. Les patients choisissent en confiance.' },
    { icon: 'FileSearch', title: 'Pages par spécialité', desc: 'Omni, paro, implant, pédo : chaque spécialité a sa page pour remonter sur sa requête.' },
    { icon: 'TrendingUp', title: 'Doctolib pluri-praticiens', desc: 'Choix du praticien et du créneau directement en ligne. Standard allégé, RDV mieux répartis.' },
  ],
  whatFooterText:
    'Un cabinet dentaire pluri-praticien bien référencé attire 20 à 50 nouveaux patients par mois répartis entre les praticiens.',
  timelineSteps: [
    { number: '01', title: 'On cadre l\'équipe', description: 'Praticiens, spécialités, parcours, agendas, répartition des patientèles. Plateau technique, équipements partagés, valeurs communes. Je note tout ce qui fait votre cohésion.' },
    { number: '02', title: 'Construction du site', description: 'Accueil collectif, bios individuelles, pages par spécialité, plateau technique, intégration Doctolib avec choix du praticien. Conformité CNCD stricte.' },
    { number: '03', title: 'Mise en ligne + fiche Google', description: 'Site en ligne, fiche Google optimisée pour le cabinet, premières prises de rendez-vous. Ajustements selon les retours des praticiens et patients.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des patients à un cabinet dentaire',
  keywordsIntro:
    'Les patients d\'un cabinet dentaire pluri-praticien cherchent soit un praticien précis (recommandé), soit une spécialité, soit simplement un cabinet proche qui accepte de nouveaux patients.',
  keywordCategories: [
    { icon: 'MapPin', title: 'Local', text: 'cabinet dentaire + ville, dentiste + quartier, centre dentaire proche, dentiste nouveau patient.' },
    { icon: 'Target', title: 'Spécialités', text: 'cabinet implantologie, parodontologue + ville, pédodontiste + ville, orthodontie adulte.' },
    { icon: 'Zap', title: 'Urgence', text: 'urgence dentaire, dentiste dimanche, dentiste de garde, douleur dentaire intense.' },
    { icon: 'User', title: 'Parcours', text: 'prise de rendez-vous dentiste en ligne, premier rendez-vous dentaire, tarifs dentiste.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel dentaire ou médical ?',
  relatedPara:
    'Les métiers dentaires et médicaux ont une logique SEO proche : pages équipe, spécialités, prise de rendez-vous en ligne. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet dentiste', href: '/site-internet-dentiste' },
    { label: 'Site internet orthodontiste', href: '/site-internet-orthodontiste' },
    { label: 'Site internet chirurgien-dentiste', href: '/site-internet-chirurgien-dentiste' },
    { label: 'Site internet médecin', href: '/site-internet-medecin' },
  ],
  miniCtaText: 'Envie d\'un site cabinet dentaire qui met toute l\'équipe en valeur ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Cabinet Dentaire', description, '/site-internet-cabinet-dentaire', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Cabinet Dentaire', description, '/site-internet-cabinet-dentaire'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Cabinet Dentaire', path: '/site-internet-cabinet-dentaire' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetCabinetDentairePage() {
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

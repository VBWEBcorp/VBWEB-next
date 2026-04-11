import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet cabinet médical : création de site web optimisé SEO pour cabinets de groupe et MSP. Équipe, spécialités, téléconsultation, prise de rendez-vous Doctolib — conforme CNOM.'

export const metadata: Metadata = {
  title: 'Site Internet Cabinet Médical | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-cabinet-medical' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Mon cabinet regroupe plusieurs médecins, comment structurer le site ?',
    answer: 'Avec une page d\'accueil qui présente le cabinet collectivement, une bio par médecin avec ses spécialités et horaires, et des pages transverses (infos pratiques, téléconsultation, prise de rendez-vous). Les patients cherchent soit le cabinet dans son ensemble, soit un médecin précis : le site doit répondre aux deux cas.',
  },
  {
    question: 'Combien coûte un site pour cabinet médical de groupe ?',
    answer: 'Un site pour cabinet pluri-praticiens démarre à 2 000 euros. Le prix évolue avec le nombre de médecins et de spécialités. Il inclut les bios, les pages spécialités, l\'intégration Doctolib avec choix du praticien, les informations pratiques et la conformité CNOM.',
  },
  {
    question: 'Les patients peuvent-ils choisir leur médecin via le site ?',
    answer: 'Oui, via Doctolib intégré avec agenda commun ou agendas séparés. Le patient choisit son médecin (ou le premier disponible pour une urgence), visualise les créneaux, confirme en ligne. Le site affiche aussi clairement quel médecin accepte de nouveaux patients et lequel n\'en accepte plus.',
  },
  {
    question: 'Comment valoriser une MSP ou un cabinet pluri-professionnel ?',
    answer: 'Par une structure qui présente chaque profession (médecins, kinés, infirmières, sage-femme, psychologue) avec ses spécificités et sa prise de rendez-vous. La coordination des soins devient lisible, ce qui rassure les patients et valorise votre modèle.',
  },
]

const config: MetierConfig = {
  metier: 'Cabinet Médical',
  metierLower: 'cabinet médical',
  heroKicker: 'Sites web pour cabinet médical',
  heroHeadline: 'Site internet cabinet médical,',
  heroHeadlineItalic: 'une équipe qui se lit au premier coup d\'œil',
  heroDescription:
    'Je crée des sites internet pour les cabinets médicaux de groupe et MSP partout en France. Équipe, spécialités, téléconsultation, prise de rendez-vous : chaque patient trouve le bon praticien en quelques clics.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour cabinet médical',
  whatKicker: 'Sites web pour cabinet médical de groupe',
  whatTitle: 'Un cabinet pluri-praticiens',
  whatTitleItalic: 'qui oriente chaque patient vers le bon médecin',
  whatPara1:
    'Un cabinet médical de groupe ou une MSP accueille des patients avec des besoins très différents. Sans site bien structuré, le standard passe son temps à répondre aux mêmes questions : "quel médecin prend les nouveaux patients ?", "qui fait la pédiatrie ?", "qui propose la téléconsultation ?". Le site doit répondre à tout ça en 10 secondes.',
  whatPara2:
    'Je construis des sites pour cabinets de groupe qui mettent chaque praticien en valeur tout en renforçant la cohérence du cabinet. Bios, spécialités, agendas, plateau technique, intégration Doctolib avec choix du médecin. Dans le respect strict de la déontologie CNOM.',
  whatImageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour cabinet médical de groupe',
  pillars: [
    { icon: 'User', title: 'Bios par praticien', desc: 'Chaque médecin a sa page avec spécialité, parcours et agenda. Les patients choisissent en confiance.' },
    { icon: 'FileSearch', title: 'Pages par spécialité', desc: 'Médecine générale, pédiatrie, gynécologie : chaque spécialité cible sa requête Google.' },
    { icon: 'TrendingUp', title: 'Doctolib multi-praticiens', desc: 'Choix du médecin et du créneau directement en ligne. Standard libéré.' },
  ],
  whatFooterText:
    'Un cabinet médical bien référencé capte 25 à 60 nouveaux patients par mois répartis entre les praticiens.',
  timelineSteps: [
    { number: '01', title: 'On cadre l\'équipe', description: 'Médecins, spécialités, agendas Doctolib, MSP ou pas, plateau technique partagé, téléconsultation, répartition de la patientèle.' },
    { number: '02', title: 'Construction du site', description: 'Bios, pages spécialités, infos pratiques, intégration Doctolib, conformité CNOM. Rédaction neutre et claire.' },
    { number: '03', title: 'Mise en ligne et fiche Google', description: 'Fiche Google du cabinet, premiers rendez-vous entrants, ajustements selon les retours praticiens.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des patients à un cabinet médical',
  keywordsIntro:
    'Les patients d\'un cabinet de groupe cherchent soit une spécialité, soit un praticien précis, soit simplement un cabinet proche qui accepte de nouveaux patients.',
  keywordCategories: [
    { icon: 'MapPin', title: 'Local', text: 'cabinet médical + ville, maison de santé + ville, MSP + ville, centre de santé.' },
    { icon: 'Target', title: 'Spécialités', text: 'pédiatre + ville, gynécologue + ville, dermatologue + ville, cardiologue + ville.' },
    { icon: 'User', title: 'Parcours', text: 'nouveau patient médecin, prise de rendez-vous médecin en ligne, téléconsultation.' },
    { icon: 'Zap', title: 'Urgence', text: 'médecin de garde, consultation urgente, cabinet médical ouvert.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel de santé libéral ?',
  relatedPara:
    'Les métiers de santé en groupe ont une logique proche : bios claires, pages spécialités, prise de rendez-vous structurée. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet médecin', href: '/site-internet-medecin' },
    { label: 'Site internet médecin généraliste', href: '/site-internet-medecin-generaliste' },
    { label: 'Site internet pédiatre', href: '/site-internet-pediatre' },
    { label: 'Site internet sage-femme', href: '/site-internet-sage-femme' },
  ],
  miniCtaText: 'Envie d\'un site cabinet médical qui oriente les patients en quelques clics ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Cabinet Médical', description, '/site-internet-cabinet-medical', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Cabinet Médical', description, '/site-internet-cabinet-medical'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Cabinet Médical', path: '/site-internet-cabinet-medical' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetCabinetMedicalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

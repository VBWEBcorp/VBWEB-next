import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet cardiologue : création de site web optimisé SEO. ECG, échographie, holter, hypertension, bilan cardiovasculaire — conforme CNOM.'

export const metadata: Metadata = {
  title: 'Site Internet Cardiologue | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-cardiologue' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un cardiologue est-il intéressé par un site internet ?',
    answer: 'Oui, principalement pour deux raisons. D\'abord pour informer clairement les patients sur votre plateau technique (ECG, écho, holter, test d\'effort) et sur les indications de chaque examen. Ensuite pour gérer le flux de rendez-vous : avec des délais souvent longs, un site qui explique qui prend de nouveaux patients et comment désengorge le standard.',
  },
  {
    question: 'Comment expliquer les examens cardiologiques sans faire peur ?',
    answer: 'Par un ton factuel et rassurant. Je rédige chaque page examen (échographie cardiaque, Holter, MAPA, épreuve d\'effort) en expliquant la procédure, la durée, les indications, ce que ça révèle. Les patients inquiets qui cherchent "à quoi sert un holter" ou "épreuve d\'effort déroulement" arrivent sur votre site et deviennent des patients informés.',
  },
  {
    question: 'Le bilan cardiovasculaire est-il un levier SEO ?',
    answer: 'Oui, c\'est une des requêtes les plus volumineuses. "Bilan cardiovasculaire + ville", "consultation cardiologue préventif" touchent des patients en prévention (antécédents familiaux, sport, hypertension débutante). Une page dédiée avec les étapes du bilan et ses objectifs attire une patientèle motivée et souvent payante en direct.',
  },
  {
    question: 'Peut-on gérer les lettres de correspondance via le site ?',
    answer: 'Pas directement, mais je crée un espace "Correspondants" avec un formulaire sécurisé où le généraliste peut demander un rendez-vous en envoyant la lettre. Ça fluidifie le parcours patient et vous fait gagner du temps sur les courriers papier. C\'est également un levier de fidélisation auprès des généralistes référents.',
  },
]

const config: MetierConfig = {
  metier: 'Cardiologue',
  metierLower: 'cardiologue',
  heroKicker: 'Sites web pour cardiologue',
  heroHeadline: 'Site internet cardiologue,',
  heroHeadlineItalic: 'un cabinet clair pour une spécialité anxiogène',
  heroDescription:
    'Je crée des sites internet pour les cardiologues partout en France. Échographie, Holter, épreuve d\'effort, bilan cardiovasculaire : chaque page explique clairement les examens et oriente les patients dans le respect de la déontologie CNOM.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour cardiologue',
  whatKicker: 'Sites web pour cardiologue',
  whatTitle: 'Un cabinet cardio',
  whatTitleItalic: 'qui informe sans inquiéter',
  whatPara1:
    'Les patients adressés à un cardiologue sont souvent inquiets, mal informés sur les examens, et arrivent avec des questions que le standard n\'a pas le temps de traiter. Un site cardiologue bien pensé explique les examens, rassure, oriente, et filtre les demandes en amont. C\'est autant un outil patient qu\'un outil d\'organisation.',
  whatPara2:
    'Je construis des sites cardiologue qui expliquent chaque examen factuellement, valorisent votre plateau technique, gèrent le flux de correspondants généralistes, et respectent strictement la déontologie CNOM. Prise de rendez-vous connectée, infos pratiques claires, page urgence cardio si vous la proposez.',
  whatImageUrl: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour cardiologue',
  pillars: [
    { icon: 'FileSearch', title: 'Pages par examen', desc: 'Écho, Holter, MAPA, test d\'effort : chaque examen expliqué = une requête captée.' },
    { icon: 'Target', title: 'Bilan cardiovasculaire', desc: 'La requête préventive la plus volumineuse. Patients motivés et payants.' },
    { icon: 'User', title: 'Espace correspondants', desc: 'Formulaire pour généralistes référents. Fluidifie le parcours et fidélise.' },
  ],
  whatFooterText:
    'Un cardiologue bien référencé désengorge son standard de 30 à 50 % et capte de nouveaux patients informés.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre pratique', description: 'Types d\'examens proposés, plateau technique, partenariats généralistes, patientèle (référée ou directe), délais, urgences.' },
    { number: '02', title: 'Construction du site', description: 'Pages par examen, bilan, parcours patient, espace correspondants, conformité CNOM. Ton factuel et rassurant.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières prises de rendez-vous mieux orientées, ajustements.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des patients à un cardiologue',
  keywordsIntro:
    'Les patients cherchent un cardiologue pour des raisons précises : bilan préventif, symptômes, suivi post-cardio, examen demandé par un généraliste. Chaque requête reflète une intention différente.',
  keywordCategories: [
    { icon: 'FileSearch', title: 'Examens', text: 'échographie cardiaque, holter ecg, mapa tension, épreuve d\'effort, test d\'effort.' },
    { icon: 'Target', title: 'Bilans', text: 'bilan cardiovasculaire, consultation cardio préventive, bilan cardiaque sportif, check-up cœur.' },
    { icon: 'Zap', title: 'Symptômes', text: 'palpitations cardiologue, douleur thoracique, essoufflement effort, hypertension cardiologue.' },
    { icon: 'User', title: 'Suivi', text: 'suivi post-infarctus, suivi stent, rééducation cardiaque, cardiologue + ville.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel médical ?',
  relatedPara:
    'Les spécialistes médicaux ont une logique SEO proche : pages par examen/acte, parcours patient, respect déontologique. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet médecin', href: '/site-internet-medecin' },
    { label: 'Site internet dermatologue', href: '/site-internet-dermatologue' },
    { label: 'Site internet pédiatre', href: '/site-internet-pediatre' },
    { label: 'Site internet cabinet médical', href: '/site-internet-cabinet-medical' },
  ],
  miniCtaText: 'Envie d\'un site cardiologue qui désengorge votre standard ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Cardiologue', description, '/site-internet-cardiologue', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Cardiologue', description, '/site-internet-cardiologue'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Cardiologue', path: '/site-internet-cardiologue' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetCardiologuePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

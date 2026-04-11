import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet médecin généraliste : création de site web optimisé SEO. Téléconsultation, visites, urgences, nouveaux patients, prise de rendez-vous Doctolib — conforme CNOM.'

export const metadata: Metadata = {
  title: 'Site Internet Médecin Généraliste | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-medecin-generaliste' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un médecin généraliste a-t-il le droit d\'avoir un site internet ?',
    answer: 'Oui, depuis les recommandations CNOM de 2020, c\'est même encouragé. Le site doit rester strictement informatif : présentation du médecin, du cabinet, des horaires, des modalités de prise de rendez-vous, des consultations proposées. Sont interdits : la publicité comparative, les promesses de résultat, les témoignages patients. Je connais les règles et je construis votre site en toute conformité.',
  },
  {
    question: 'À quoi sert concrètement un site pour un généraliste déjà débordé ?',
    answer: 'À décharger votre secrétariat et à orienter les patients. Sans site, votre standard passe son temps à répondre aux mêmes questions : horaires, modalités, tarifs, vaccinations, téléconsultation. Avec un site clair, 70 % de ces appels disparaissent. Le secrétariat se concentre sur les vrais rendez-vous et urgences, et vous récupérez du temps médical.',
  },
  {
    question: 'Puis-je afficher que je prends ou ne prends pas de nouveaux patients ?',
    answer: 'Oui, c\'est même une information essentielle. Beaucoup de patients cherchent désespérément un médecin traitant. Une page claire "Accueil de nouveaux patients" qui précise votre politique (fermé, ouvert, critères) évite de faire perdre du temps aux patients et au secrétariat. C\'est aussi valorisé par Google qui remonte les cabinets transparents.',
  },
  {
    question: 'Doctolib est-il indispensable sur le site ?',
    answer: 'Pas indispensable, mais fortement recommandé. Doctolib intégré au site permet aux patients de prendre rendez-vous 24/7 sans passer par votre standard, de recevoir des rappels automatiques et de réduire les no-shows. Si vous préférez un autre système (Maiia, Keldoc, maison), je connecte ce que vous utilisez déjà.',
  },
  {
    question: 'La téléconsultation change-t-elle la structure du site ?',
    answer: 'Oui, si vous la pratiquez. Je crée une page dédiée "Téléconsultation" qui explique les indications (renouvellement, symptômes simples, suivi chronique), les modalités pratiques (outil utilisé, remboursement Assurance Maladie), les limites. C\'est une requête en forte croissance qui attire des patients qui ne peuvent pas se déplacer.',
  },
]

const config: MetierConfig = {
  metier: 'Médecin Généraliste',
  metierLower: 'médecin généraliste',
  heroKicker: 'Sites web pour médecin généraliste',
  heroHeadline: 'Site internet médecin généraliste,',
  heroHeadlineItalic: 'moins d\'appels, plus de temps médical',
  heroDescription:
    'Je crée des sites internet pour les médecins généralistes libéraux partout en France. Horaires, modalités, téléconsultation, prise de rendez-vous Doctolib : chaque information est claire pour désengorger votre secrétariat et capter de nouveaux patients dans le respect de la déontologie CNOM.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour médecin généraliste',
  whatKicker: 'Sites web pour généraliste libéral',
  whatTitle: 'Un cabinet clair',
  whatTitleItalic: 'pour des patients qui ne veulent plus appeler',
  whatPara1:
    'Les patients en 2026 cherchent d\'abord sur Google avant d\'appeler. Ils veulent connaître vos horaires, vérifier si vous acceptez de nouveaux patients, savoir si vous proposez la téléconsultation, et réserver en ligne si possible. Sans site, chaque question devient un appel à votre secrétariat saturé. Avec un site bien construit, l\'info est trouvable en quelques secondes et les appels baissent drastiquement.',
  whatPara2:
    'Je construis des sites médecin généraliste qui désengorgent votre pratique. Informations pratiques claires, intégration Doctolib, page téléconsultation, FAQ patients, respect strict des règles CNOM. Le patient trouve ce qu\'il cherche, votre secrétariat se concentre sur l\'essentiel, et vous récupérez du temps pour la consultation.',
  whatImageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour médecin généraliste',
  pillars: [
    { icon: 'User', title: 'Doctolib intégré', desc: 'Prise de rendez-vous 24/7 sans passer par le standard. Réduction nette des appels.' },
    { icon: 'FileSearch', title: 'Infos pratiques claires', desc: 'Horaires, nouveaux patients, téléconsultation, tarifs : tout ce que les patients cherchent.' },
    { icon: 'MapPin', title: 'SEO local', desc: 'Pack Google optimisé pour "médecin généraliste + ville" et requêtes associées.' },
  ],
  whatFooterText:
    'Un site médecin généraliste bien construit réduit de 40 à 60 % les appels au standard pour questions basiques.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre cabinet', description: 'Horaires, secrétariat, Doctolib ou autre, téléconsultation, conventionnement, accueil nouveaux patients, consultations particulières (pédiatrie, gynéco, gériatrie).' },
    { number: '02', title: 'Construction du site', description: 'Pages informations pratiques, téléconsultation, présentation, conformité CNOM. Rédaction claire et neutre, intégration du système de rendez-vous.' },
    { number: '03', title: 'Mise en ligne + Google', description: 'Fiche Google optimisée, premiers patients qui trouvent le cabinet, ajustements selon les retours secrétariat.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des patients à un généraliste',
  keywordsIntro:
    'Les patients d\'un généraliste cherchent des requêtes très locales, avec une intention de prise de rendez-vous rapide.',
  keywordCategories: [
    { icon: 'MapPin', title: 'Local', text: 'médecin généraliste + ville, généraliste + quartier, cabinet médical proche, nouveau patient médecin.' },
    { icon: 'User', title: 'Parcours', text: 'prise de rendez-vous médecin, consultation sans RDV, téléconsultation généraliste.' },
    { icon: 'Target', title: 'Consultations', text: 'renouvellement ordonnance, certificat médical sport, bilan santé, suivi chronique.' },
    { icon: 'Zap', title: 'Urgence', text: 'médecin de garde, consultation urgente, médecin dimanche + ville.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel de santé ?',
  relatedPara:
    'Les métiers de santé libérale ont une logique SEO proche : informations claires, prise de rendez-vous facilitée, respect déontologique. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet médecin', href: '/site-internet-medecin' },
    { label: 'Site internet cabinet médical', href: '/site-internet-cabinet-medical' },
    { label: 'Site internet pédiatre', href: '/site-internet-pediatre' },
    { label: 'Site internet dermatologue', href: '/site-internet-dermatologue' },
  ],
  miniCtaText: 'Envie de désengorger votre secrétariat grâce à un site clair ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Médecin Généraliste', description, '/site-internet-medecin-generaliste', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Médecin Généraliste', description, '/site-internet-medecin-generaliste'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Médecin Généraliste', path: '/site-internet-medecin-generaliste' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetMedecinGeneralistePage() {
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

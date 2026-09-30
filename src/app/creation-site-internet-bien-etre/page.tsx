import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const path = '/creation-site-internet-bien-etre'
const description =
  "Création de site internet bien-être pour sophrologues, thérapeutes, coachs et praticiens : un site apaisant, trouvé localement, avec prise de rendez-vous."

export const metadata: Metadata = {
  title: 'Site internet bien-être : thérapeutes et coachs',
  description,
  alternates: { canonical: path },
}

const faqs = [
  {
    question: 'Que doit contenir le site d’un praticien bien-être ?',
    answer:
      "Qui vous êtes et votre parcours, ce que vous proposez séance par séance, pour qui, comment se déroule un premier rendez-vous, où vous recevez (et si vous consultez à distance), vos tarifs si vous choisissez de les afficher, et un moyen simple de réserver. Une photo de vous et de votre cabinet compte beaucoup : on choisit un praticien avec qui l'on se sent en confiance.",
  },
  {
    question: 'Quelles règles respecter sur un site de thérapeute ?',
    answer:
      "La première est de ne jamais promettre de guérison ni présenter une pratique comme un traitement médical : c'est trompeur et contraire au droit de la consommation. Certains titres sont protégés (psychologue, psychothérapeute), d'autres non (sophrologue, coach, praticien en hypnose). J'écris vos pages en respectant ces limites, pour que votre site rassure sans jamais s'exposer.",
  },
  {
    question: 'Comment être trouvé par des clients près de chez moi ?',
    answer:
      "Par une fiche Google bien réglée (bonne catégorie, horaires, avis), et par un site qui dit clairement votre pratique et votre ville : « sophrologue Vannes », « hypnothérapeute Rennes », « coach de vie Nantes ». La plupart de vos clients viendront d'un rayon de quelques kilomètres, ou des séances à distance si vous en proposez.",
  },
  {
    question: 'Puis-je intégrer la prise de rendez-vous en ligne ?',
    answer:
      "Oui. Je relie le site à l'outil que vous utilisez déjà (Calendly, Doctolib, Resalib, Google Agenda…) ou j'en mets un en place. Vos clients réservent sans vous appeler, et vous gardez la main sur vos créneaux.",
  },
  {
    question: 'Avez-vous déjà créé des sites dans le bien-être ?',
    answer:
      "Oui : sophrologue et hypnothérapeute, coachs de vie, coach sportif, accompagnement autour de la maternité. Ces sites sont présentés dans les études de cas, avec leur démarche.",
  },
  {
    question: 'Pourrai-je publier des articles moi-même ?',
    answer:
      "Oui, depuis un espace d'administration simple. Des articles qui répondent aux questions que vos clients vous posent en séance sont un excellent moyen d'être trouvé sur Google, et d'être cité par les IA quand on leur demande conseil.",
  },
]

const config: MetierConfig = {
  metier: 'Bien-être',
  metierLower: 'bien-être',
  heroKicker: 'Site internet · Bien-être',
  heroHeadline: 'Création de site internet bien-être,',
  heroHeadlineItalic: 'qui donne envie de prendre rendez-vous',
  heroDescription:
    "Sophrologues, thérapeutes, coachs, praticiens : vos futurs clients vous choisissent sur un sentiment de confiance. Je crée des sites apaisants, clairs et trouvés près de chez vous, avec la prise de rendez-vous intégrée.",
  heroImageAlt: 'Victor Béasse, création de site internet pour le bien-être',
  whatKicker: 'Site pour praticiens',
  whatTitle: 'Un site qui vous ressemble,',
  whatTitleItalic: 'et qui remplit votre agenda',
  whatPara1:
    "Dans le bien-être, on ne compare pas des prix, on cherche une personne. Votre site doit transmettre votre façon de travailler, répondre aux questions qu'on n'ose pas poser, et rendre la première prise de contact facile. Le tout sans promesse excessive, parce que c'est à la fois ce qui rassure et ce que la loi exige.",
  whatPara2:
    "J'ai créé des sites pour une sophrologue et hypnothérapeute, plusieurs coachs, un coach sportif et un accompagnement autour de la maternité. Chaque fois, un site sobre, rapide, relié à la fiche Google et à l'agenda, et des pages écrites pour être trouvées sur « votre pratique + votre ville ».",
  whatImageUrl:
    'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1559136555-9303baea8ebd-w800.webp',
  whatImageAlt: 'Site internet de praticien bien-être',
  pillars: [
    { icon: 'User', title: 'Votre approche', desc: 'Votre parcours et votre façon de travailler, racontés simplement.' },
    { icon: 'MapPin', title: 'Trouvé localement', desc: 'Votre pratique et votre ville, sur Google et sur la carte.' },
    { icon: 'MessageCircle', title: 'Rendez-vous facile', desc: 'Réservation en ligne reliée à votre agenda.' },
  ],
  whatFooterText:
    "Aucune promesse de guérison, aucun titre protégé utilisé à tort : un site qui rassure parce qu'il reste juste.",
  timelineSteps: [
    {
      number: '01',
      title: 'Échange sur votre pratique',
      description:
        "Votre approche, votre public, votre lieu d'exercice et vos séances à distance. Je regarde qui apparaît aujourd'hui sur Google pour votre pratique dans votre ville.",
    },
    {
      number: '02',
      title: 'Textes, design et agenda',
      description:
        "Pages rédigées avec vous, dans le respect des règles de votre métier, design apaisant, intégration de la prise de rendez-vous et de votre fiche Google.",
    },
    {
      number: '03',
      title: 'Mise en ligne et visibilité',
      description:
        "Mise en ligne, indexation, demande d'avis auprès de vos clients, et prise en main de l'espace d'administration pour vos articles.",
    },
  ],
  keywordsTitle: 'Comment vos futurs clients vous cherchent',
  keywordsIntro:
    "On cherche rarement « bien-être » : on cherche une pratique, un problème ou une personne, près de chez soi.",
  keywordCategories: [
    { icon: 'MapPin', title: 'Pratique + ville', text: 'sophrologue Rennes, naturopathe Vannes, hypnose Lorient.' },
    { icon: 'Target', title: 'Besoin', text: 'gestion du stress, sommeil, confiance en soi, arrêt du tabac.' },
    { icon: 'FileSearch', title: 'Questions', text: 'comment se passe une séance, combien de séances, pour qui.' },
    { icon: 'MessageCircle', title: 'Confiance', text: 'avis, formation, expérience, première séance.' },
  ],
  relatedTitle: 'Autres pages utiles',
  relatedPara:
    "Pour un praticien, la fiche Google et les avis comptent autant que le site.",
  relatedLinks: [
    { label: 'Référencement local et fiche Google', href: '/referencement-local' },
    { label: 'Création de site internet', href: '/creation-site-internet' },
    { label: 'Études de cas : sites internet', href: '/etudes-de-cas/sites-internet' },
  ],
  miniCtaText: 'Envie d’un site qui vous ressemble et remplit votre agenda ?',
  caseStudiesKicker: 'Résultats de mes clients',
  faqTitlePrefix: 'Site internet bien-être',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Création de site internet bien-être', description, path, ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Création de site internet pour praticiens du bien-être', description, path),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Création de site internet bien-être', path },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function CreationSiteBienEtrePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

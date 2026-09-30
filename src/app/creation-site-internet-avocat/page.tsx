import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const path = '/creation-site-internet-avocat'
const description =
  "Création de site internet pour avocat : un site sobre, conforme aux règles de communication de la profession, trouvé sur vos domaines de compétence et votre barreau."

export const metadata: Metadata = {
  title: 'Création de site internet pour avocat',
  description,
  alternates: { canonical: path },
}

const faqs = [
  {
    question: 'Un avocat a-t-il le droit de faire de la publicité sur son site ?',
    answer:
      "Oui. Depuis la réforme de 2014, la publicité et la sollicitation personnalisée sont permises aux avocats, dans le cadre fixé par le Règlement intérieur national (RIN) de la profession : informations sincères, pas de mention comparative ni dénigrante, respect du secret professionnel. Un site bien conçu respecte ces règles sans pour autant être fade.",
  },
  {
    question: 'Quelles mentions doivent figurer sur le site d’un avocat ?',
    answer:
      "Les mentions légales habituelles (identité, barreau d'inscription, structure d'exercice, hébergeur), les domaines d'intervention présentés avec exactitude, et les informations sur les honoraires si vous les communiquez. Je prévois ces éléments dès la conception, et vous restez seul juge de leur conformité déontologique.",
  },
  {
    question: 'Comment être trouvé sur « avocat + domaine + ville » ?',
    answer:
      "En consacrant une page à chaque domaine où vous intervenez vraiment (droit de la famille, droit du travail, droit immobilier…), en la rattachant à votre ville et à votre barreau, et en travaillant votre fiche Google. Ces recherches sont très précises, et elles convertissent bien : la personne qui tape « avocat licenciement Rennes » a un besoin immédiat.",
  },
  {
    question: 'Un blog est-il utile pour un cabinet d’avocat ?',
    answer:
      "Oui, à condition de répondre aux vraies questions des justiciables, dans un langage clair : délais, étapes d'une procédure, ce qu'il faut préparer avant un rendez-vous. Ces articles sont trouvés sur Google et repris par les IA quand on leur pose une question juridique, ce qui fait connaître votre cabinet bien avant le premier contact.",
  },
  {
    question: 'Avez-vous déjà créé un site d’avocat ?',
    answer:
      "Oui, le site de Jérémy Simon, avocat, présenté dans les études de cas. Chaque cabinet est différent : je pars de vos domaines, de votre clientèle et de votre façon d'exercer.",
  },
  {
    question: 'Le site peut-il proposer la prise de rendez-vous en ligne ?',
    answer:
      "Oui, avec l'outil de votre choix, ou un simple formulaire de premier contact qui vous permet de qualifier la demande avant de rappeler. Rien n'est envoyé sans que la politique de confidentialité ne le précise.",
  },
]

const config: MetierConfig = {
  metier: 'Avocat',
  metierLower: 'avocat',
  heroKicker: 'Site internet · Avocats',
  heroHeadline: 'Création de site internet pour avocat,',
  heroHeadlineItalic: 'sobre, conforme et trouvé',
  heroDescription:
    "Vos futurs clients cherchent un avocat par domaine et par ville, souvent dans un moment difficile. Je crée des sites de cabinet clairs et rassurants, conformes aux règles de communication de la profession, et construits pour apparaître sur vos domaines de compétence.",
  heroImageAlt: 'Victor Béasse, création de site internet pour avocats',
  whatKicker: 'Site pour avocats',
  whatTitle: 'Un cabinet crédible en ligne,',
  whatTitleItalic: 'dès la première recherche',
  whatPara1:
    "Le choix d'un avocat se fait souvent en quelques minutes, sur la foi d'un site et d'avis Google. Le vôtre doit dire clairement ce que vous traitez, où, et comment se passe un premier rendez-vous, tout en respectant le cadre de la profession : pas de comparaison, pas de promesse de résultat, des informations exactes.",
  whatPara2:
    "Je construis une page par domaine d'intervention, reliée à votre ville et à votre barreau, une présentation du cabinet et de ses avocats, et un parcours simple jusqu'à la prise de contact. Le site est rapide, facile à mettre à jour, et relié à votre fiche Google.",
  whatImageUrl:
    'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1497366216548-37526070297c-w800.webp',
  whatImageAlt: 'Cabinet d’avocat et son site internet',
  pillars: [
    { icon: 'Target', title: 'Une page par domaine', desc: 'Chaque domaine d’intervention a sa page, reliée à votre ville.' },
    { icon: 'FileSearch', title: 'Cadre respecté', desc: 'Des textes exacts, sans comparaison ni promesse, dans l’esprit du RIN.' },
    { icon: 'MessageCircle', title: 'Premier contact simple', desc: 'Rendez-vous en ligne ou formulaire de qualification.' },
  ],
  whatFooterText:
    "Vous restez seul juge de la conformité déontologique de votre communication : je vous fournis un site pensé pour la faciliter.",
  timelineSteps: [
    {
      number: '01',
      title: 'Échange sur votre cabinet',
      description:
        "Vos domaines, votre clientèle, votre barreau, votre façon de recevoir. Je regarde quels cabinets apparaissent aujourd'hui sur vos recherches.",
    },
    {
      number: '02',
      title: 'Arborescence et rédaction',
      description:
        "Une page par domaine, présentation du cabinet, mentions obligatoires, textes relus avec vous avant la mise en ligne.",
    },
    {
      number: '03',
      title: 'Mise en ligne et visibilité',
      description:
        "Mise en ligne, indexation, fiche Google reliée, et si vous le souhaitez des articles réguliers sur les questions de vos clients.",
    },
  ],
  keywordsTitle: 'Comment on cherche un avocat',
  keywordsIntro:
    "On cherche presque toujours un domaine précis, dans une ville, avec une question en tête.",
  keywordCategories: [
    { icon: 'MapPin', title: 'Domaine + ville', text: 'avocat divorce Rennes, avocat droit du travail Nantes.' },
    { icon: 'Zap', title: 'Situation', text: 'licenciement, garde d’enfant, litige avec un voisin, succession.' },
    { icon: 'FileSearch', title: 'Questions', text: 'délais, étapes, que préparer, combien de temps.' },
    { icon: 'MessageCircle', title: 'Confiance', text: 'avis, expérience, premier rendez-vous.' },
  ],
  relatedTitle: 'Autres pages utiles',
  relatedPara:
    "Pour un cabinet, la fiche Google et la visibilité dans les IA complètent le site.",
  relatedLinks: [
    { label: 'Référencement local et fiche Google', href: '/referencement-local' },
    { label: 'Référencement IA (GEO)', href: '/referencement-ia-geo' },
    { label: 'Études de cas : sites internet', href: '/etudes-de-cas/sites-internet' },
  ],
  miniCtaText: 'Un projet de site pour votre cabinet ? Parlons-en.',
  caseStudiesKicker: 'Résultats de mes clients',
  faqTitlePrefix: 'Site internet avocat',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Création de site internet pour avocat', description, path, ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Création de site internet pour avocat', description, path),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Création de site internet pour avocat', path },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function CreationSiteAvocatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

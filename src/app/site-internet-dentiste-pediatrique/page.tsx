import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet dentiste pédiatrique : création de site web optimisé SEO pour pédodontistes. Soins enfants, anxiété, MEOPA, prévention, scellement sillons — capter les parents qui cherchent un dentiste adapté.'

export const metadata: Metadata = {
  title: 'Site Internet Dentiste Pédiatrique | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-dentiste-pediatrique' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Pourquoi un pédodontiste a-t-il besoin d\'un site différent d\'un dentiste généraliste ?',
    answer: 'Parce que les parents cherchent spécifiquement un dentiste adapté aux enfants, surtout pour les enfants anxieux ou avec des besoins particuliers. Ils tapent "dentiste enfant + ville", "pédodontiste + ville", "dentiste enfants peur". Un site généraliste qui se contente d\'une phrase "nous recevons aussi les enfants" ne remonte jamais sur ces requêtes. Un site dédié pédodontie capte toute cette patientèle.',
  },
  {
    question: 'Combien coûte un site pour cabinet de pédodontie ?',
    answer: 'Un site vitrine spécialisé démarre à 1 600 euros. Il inclut une page accueil rassurante pour parents et enfants, les soins proposés (caries, scellement sillons, urgence pédiatrique, orthodontie interceptive), la prise en charge des enfants anxieux (MEOPA, approche comportementale), et les modalités de rendez-vous adaptées.',
  },
  {
    question: 'Comment rassurer les parents sur un site ?',
    answer: 'Par un ton bienveillant, des photos du cabinet adapté (salle d\'attente ludique, matériel à hauteur d\'enfant, univers coloré), des explications claires sur votre approche (première visite, apprivoisement, écoute de l\'enfant). Les parents anxieux cherchent un cabinet où leur enfant se sentira en sécurité — votre site est leur premier indicateur.',
  },
  {
    question: 'Le MEOPA et la sédation sont-ils des leviers SEO ?',
    answer: 'Oui, ce sont des requêtes très recherchées par les parents d\'enfants anxieux ou avec troubles (TSA, handicap). "Dentiste pédiatrique MEOPA + ville" ou "dentiste enfant sédation" sont des requêtes moins concurrentielles avec une forte intention. Une page dédiée explique la technique, la sécurité, les indications, et capte ces parents souvent désespérés de trouver un praticien.',
  },
  {
    question: 'Dois-je présenter la salle de soin sur le site ?',
    answer: 'Absolument. Les parents veulent voir à quoi ressemble le cabinet où ira leur enfant. Photo de la salle de soin colorée, dessins au mur, peluches, siège adapté, matériel pédiatrique. Cela dédramatise l\'expérience avant même la première visite. C\'est souvent l\'élément qui convainc un parent hésitant entre votre cabinet et un autre.',
  },
]

const config: MetierConfig = {
  metier: 'Dentiste Pédiatrique',
  metierLower: 'dentiste pédiatrique',
  heroKicker: 'Sites web pour pédodontiste',
  heroHeadline: 'Site internet dentiste pédiatrique,',
  heroHeadlineItalic: 'des parents rassurés dès le premier clic',
  heroDescription:
    'Je crée des sites internet pour les pédodontistes et cabinets spécialisés en dentisterie pédiatrique partout en France. Approche rassurante, MEOPA, prévention, soins adaptés : chaque page est pensée pour capter les parents qui cherchent un dentiste dédié aux enfants.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour dentiste pédiatrique',
  whatKicker: 'Sites web pour pédodontiste',
  whatTitle: 'Un dentiste enfant trouvé',
  whatTitleItalic: 'par des parents qui veulent éviter les larmes',
  whatPara1:
    'Les parents qui cherchent un pédodontiste ont souvent un enfant anxieux, une mauvaise expérience précédente, ou un besoin spécifique (premier rendez-vous, enfant avec TSA, soin complexe). Ils ne cherchent pas un simple "dentiste", ils cherchent un praticien formé aux enfants, avec une approche bienveillante, un cabinet adapté, et parfois la sédation MEOPA. Si votre site ne reflète pas tout ça, vous passez à côté de cette patientèle.',
  whatPara2:
    'Je construis des sites pédodontie rassurants pour les parents. Photos du cabinet adapté, explication de votre approche, pages sur les soins spécifiques enfants (scellement sillons, caries du biberon, orthodontie interceptive), MEOPA si proposé, et prise de rendez-vous simple. L\'objectif : que les parents sentent dès les premières secondes qu\'ils sont au bon endroit.',
  whatImageUrl: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour dentiste pédiatrique',
  pillars: [
    { icon: 'User', title: 'Approche rassurante', desc: 'Photos du cabinet adapté, explication de votre approche. Ce qui dédramatise avant même le rendez-vous.' },
    { icon: 'FileSearch', title: 'MEOPA et sédation', desc: 'Page dédiée pour capter les parents d\'enfants très anxieux. Requête peu concurrentielle.' },
    { icon: 'Target', title: 'Prévention valorisée', desc: 'Scellement sillons, apprentissage brossage, alimentation. Ce que les parents cherchent.' },
  ],
  whatFooterText:
    'Un dentiste pédiatrique bien référencé attire 10 à 25 nouvelles familles par mois via Google après 3 à 4 mois.',
  timelineSteps: [
    { number: '01', title: 'On parle de votre approche', description: 'Votre formation en pédodontie, votre méthode (apprivoisement, distraction, MEOPA), le cabinet adapté, les soins spécifiques. Tout ce qui fait votre singularité.' },
    { number: '02', title: 'Construction du site', description: 'Pages rassurantes pour parents, photos du cabinet, présentation des soins, MEOPA si proposé, prise de rendez-vous. Ton bienveillant, conforme CNCD.' },
    { number: '03', title: 'Mise en ligne + Google', description: 'Fiche Google optimisée pour "dentiste enfant + ville", premières familles accueillies, ajustements selon les retours parents.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des familles à un pédodontiste',
  keywordsIntro:
    'Les parents qui cherchent un dentiste pour enfant ont des besoins variés : premier rendez-vous, soin classique, urgence, enfant anxieux, besoins spécifiques. Chaque requête reflète une inquiétude différente.',
  keywordCategories: [
    { icon: 'User', title: 'Premier RDV', text: 'première visite dentiste enfant, dentiste bébé, dentiste premier rdv, quel âge dentiste enfant.' },
    { icon: 'Target', title: 'Soins', text: 'caries enfant, scellement sillons, dent de lait, urgence dentaire enfant, dentiste 2 ans.' },
    { icon: 'Zap', title: 'Anxiété', text: 'dentiste enfant anxieux, dentiste enfants peur, MEOPA enfant, sédation dentaire enfant.' },
    { icon: 'FileSearch', title: 'Besoins spécifiques', text: 'dentiste enfant TSA, dentiste enfant handicap, dentiste enfant autiste.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel dentaire ou pédiatrique ?',
  relatedPara:
    'Les métiers qui touchent aux enfants ont une logique SEO proche : rassurer les parents, expliquer l\'approche, mettre en avant l\'adaptabilité. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet dentiste', href: '/site-internet-dentiste' },
    { label: 'Site internet orthodontiste', href: '/site-internet-orthodontiste' },
    { label: 'Site internet cabinet dentaire', href: '/site-internet-cabinet-dentaire' },
    { label: 'Site internet médecin', href: '/site-internet-medecin' },
  ],
  miniCtaText: 'Envie de rassurer les parents et capter les familles en recherche d\'un pédodontiste ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Dentiste Pédiatrique', description, '/site-internet-dentiste-pediatrique', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Dentiste Pédiatrique', description, '/site-internet-dentiste-pediatrique'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Dentiste Pédiatrique', path: '/site-internet-dentiste-pediatrique' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetDentistePediatriquePage() {
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

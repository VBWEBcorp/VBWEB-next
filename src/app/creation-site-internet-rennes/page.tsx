import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const path = '/creation-site-internet-rennes'
const description =
  "Création de site internet à Rennes : sites vitrines rapides, faciles à modifier et référencés dès la mise en ligne, pour les entreprises de Rennes et de Bretagne."

export const metadata: Metadata = {
  title: 'Création de site internet à Rennes',
  description,
  alternates: { canonical: path },
}

const zones = ['Rennes', 'Cesson-Sévigné', 'Acigné', 'Saint-Grégoire', 'Bruz', 'Vitré', 'Fougères', 'Saint-Malo', 'Vannes']

const faqs = [
  {
    question: 'Pourquoi faire créer son site par un développeur web à Rennes ?',
    answer:
      "Pour pouvoir se rencontrer, et surtout pour que le site parle aux clients de votre zone. Un site pour une entreprise rennaise doit être trouvé sur « votre métier + Rennes » et sur les communes que vous desservez. Je le construis dans ce but dès la première maquette, pas après coup.",
  },
  {
    question: 'Le référencement est-il inclus dans la création du site ?',
    answer:
      "La base l'est toujours : structure des pages, balises, vitesse, données structurées, sitemap, connexion à la Search Console et à votre fiche Google. Le référencement suivi dans le temps (contenus, articles, avis, positions) est un accompagnement à part, que vous choisissez ou non.",
  },
  {
    question: 'Combien de temps faut-il pour créer un site vitrine ?',
    answer:
      "Quelques semaines pour un site vitrine, selon le nombre de pages et la rapidité des validations. Le calendrier est fixé ensemble au départ, avec les dates où j'ai besoin de vos textes, photos et retours.",
  },
  {
    question: 'Pourrai-je modifier mon site moi-même ?',
    answer:
      "Oui. Chaque site est livré avec un espace d'administration simple pour changer vos textes, vos photos et publier des articles, sans toucher au code. Je vous montre comment faire à la livraison.",
  },
  {
    question: 'Qui est propriétaire du site une fois livré ?',
    answer:
      "Vous. Le nom de domaine, le contenu et le code vous appartiennent, et vous recevez tous les accès. Vous restez libre de changer de prestataire quand vous le voulez.",
  },
  {
    question: 'Travaillez-vous avec des entreprises hors de Rennes ?',
    answer:
      "Oui, dans toute la Bretagne et partout en France à distance. La page Création de site internet présente la démarche générale ; cette page s'adresse surtout aux entreprises de Rennes et d'Ille-et-Vilaine.",
  },
  {
    question: 'Que se passe-t-il après la mise en ligne ?',
    answer:
      "Je vérifie l'indexation, je surveille les erreurs et les premières positions, et je reste joignable pour les ajustements. Si vous le souhaitez, on enchaîne sur un suivi de référencement mensuel.",
  },
]

const config: MetierConfig = {
  metier: 'Création de site internet Rennes',
  metierLower: 'création de site internet à Rennes',
  heroKicker: 'Création de site · Rennes',
  heroHeadline: 'Création de site internet à Rennes,',
  heroHeadlineItalic: 'pensé pour être trouvé',
  heroDescription:
    "Un site vitrine rapide, clair et facile à modifier, construit pour apparaître sur les recherches de vos clients à Rennes et en Bretagne. Je le conçois, je le développe et je le référence : un seul interlocuteur, du premier appel à la mise en ligne.",
  heroImageAlt: 'Victor Béasse, création de site internet à Rennes',
  whatKicker: 'Site internet à Rennes',
  whatTitle: 'Un site qui amène',
  whatTitleItalic: 'des demandes, pas seulement des visites',
  whatPara1:
    "Beaucoup d'entreprises rennaises ont un site qui ne leur amène aucun client : joli, mais introuvable sur Google, lent sur mobile, et sans chemin clair jusqu'à la demande de devis. Je construis l'inverse : chaque page a un rôle, chaque visiteur sait quoi faire ensuite, et Google comprend ce que vous faites et où.",
  whatPara2:
    "Installé à Acigné, aux portes de Rennes, je conçois des sites vitrines et des applications sur mesure pour des artisans, des commerces, des professions libérales et des PME. Les études de cas publiées sur ce site montrent ces réalisations, et plus de 80 clients m'ont laissé un avis 5 étoiles sur Google.",
  whatImageUrl:
    'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1522071820081-009f0129c71c-w800.webp',
  whatImageAlt: 'Conception d’un site internet pour une entreprise de Rennes',
  pillars: [
    { icon: 'Zap', title: 'Rapide sur mobile', desc: 'Un site léger, pensé d’abord pour le téléphone de vos clients.' },
    { icon: 'Target', title: 'Parcours jusqu’au devis', desc: 'Une page, un objectif, et un bouton clair pour vous contacter.' },
    { icon: 'MapPin', title: 'Référencé à Rennes', desc: 'Structure, pages de zone et fiche Google reliées dès la mise en ligne.' },
  ],
  whatFooterText: `Je crée des sites pour des entreprises de ${zones.join(', ')} et de toute la Bretagne.`,
  timelineSteps: [
    {
      number: '01',
      title: 'Premier échange et cadrage',
      description:
        "Votre activité, vos clients, ce que le site doit produire. Je vous propose une arborescence et un calendrier, et je regarde déjà ce que vos concurrents rennais font sur Google.",
    },
    {
      number: '02',
      title: 'Maquette, contenus et développement',
      description:
        "Maquette validée avec vous, textes rédigés ou repris pour le référencement, développement d'un site rapide avec son espace d'administration.",
    },
    {
      number: '03',
      title: 'Mise en ligne et référencement',
      description:
        "Connexion à la Search Console et à votre fiche Google, contrôle de l'indexation, premières positions suivies. Vous êtes formé à la mise à jour du site.",
    },
  ],
  keywordsTitle: 'Ce que vos clients rennais tapent sur Google',
  keywordsIntro:
    "Un site bien construit vise les recherches de votre zone dès sa conception. Voici les familles de requêtes que je prévois dans l'arborescence.",
  keywordCategories: [
    { icon: 'MapPin', title: 'Métier + commune', text: 'votre métier + Rennes, Cesson-Sévigné, Bruz, Vitré.' },
    { icon: 'Target', title: 'Service précis', text: 'chaque prestation que vous vendez, avec sa propre page.' },
    { icon: 'Zap', title: 'Contact rapide', text: 'devis, rendez-vous, près de moi, disponible.' },
    { icon: 'MessageCircle', title: 'Réassurance', text: 'avis, réalisations, garanties, qui êtes-vous.' },
  ],
  relatedTitle: 'Pour aller plus loin',
  relatedPara:
    "Le site n'est que le début : sa visibilité se construit ensuite, sur Google comme sur la carte.",
  relatedLinks: [
    { label: 'Consultant SEO à Rennes', href: '/consultant-seo-rennes' },
    { label: 'Refonte de site internet', href: '/refonte-site-internet' },
    { label: 'Création de site internet', href: '/creation-site-internet' },
  ],
  miniCtaText: 'Un projet de site à Rennes ? Parlons-en 30 minutes.',
  caseStudiesKicker: 'Résultats de mes clients',
  faqTitlePrefix: 'Création de site à Rennes',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Création de site internet à Rennes', description, path, ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd(
      'Création de site internet à Rennes',
      description,
      path,
      [...zones.map((name) => ({ '@type': 'City', name })), { '@type': 'AdministrativeArea', name: 'Bretagne' }],
    ),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Création de site internet à Rennes', path },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function CreationSiteInternetRennesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

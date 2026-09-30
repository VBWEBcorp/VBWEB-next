import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const path = '/consultant-seo-rennes'
const description =
  "Consultant SEO à Rennes : référencement naturel, fiche Google et visibilité IA pour les entreprises de Rennes et de Bretagne. Plus de 80 avis 5 étoiles."

export const metadata: Metadata = {
  title: 'Consultant SEO à Rennes et en Bretagne',
  description,
  alternates: { canonical: path },
}

const zones = ['Rennes', 'Cesson-Sévigné', 'Acigné', 'Vitré', 'Fougères', 'Saint-Malo', 'Vannes', 'Lorient', 'Quimper', 'Brest', 'Saint-Brieuc']

const faqs = [
  {
    question: 'Pourquoi choisir un consultant SEO à Rennes plutôt qu’une agence parisienne ?',
    answer:
      "Parce que le référencement local se gagne sur le terrain que vous connaissez : les quartiers, les communes voisines, les concurrents que vos clients comparent. Je suis installé à Acigné, aux portes de Rennes, je connais le tissu d'entreprises bretonnes, et vous travaillez directement avec moi, sans chef de projet entre nous.",
  },
  {
    question: 'Quelle différence entre un consultant SEO et une agence SEO à Rennes ?',
    answer:
      "Une agence répartit votre dossier entre un commercial, un chef de projet et des exécutants. Un consultant fait le travail lui-même, de l'audit à la rédaction. Chez VBWEB, c'est le même interlocuteur qui conçoit le site et qui le référence : personne ne se renvoie la responsabilité quand les demandes n'arrivent pas.",
  },
  {
    question: 'Intervenez-vous ailleurs qu’à Rennes ?',
    answer:
      "Oui, dans toute la Bretagne (Vannes, Lorient, Quimper, Brest, Saint-Brieuc, Saint-Malo, Vitré, Fougères) et à Nantes. Je me déplace pour les rendez-vous importants ; le reste du suivi se fait en visio, avec un point mensuel.",
  },
  {
    question: 'Quels résultats avez-vous obtenus pour des entreprises de Rennes ?',
    answer:
      "Rennes Pneus est passé de 30 à 3 600 visites par mois grâce au référencement, avec environ 500 appels mensuels. Chaque marché est différent et aucun résultat n'est garanti à l'avance, mais les études de cas publiées sur ce site montrent ce qui a été fait et ce qui a été mesuré.",
  },
  {
    question: 'Comment apparaître dans Google Maps à Rennes ?',
    answer:
      "Sur les recherches comme « plombier Rennes » ou « avocat Rennes », les trois premières places sont une carte. Pour y entrer, il faut une fiche Google dans la bonne catégorie, des avis réguliers, une zone desservie juste et un site qui confirme tout cela. Je travaille les quatre ensemble.",
  },
  {
    question: 'Le SEO fonctionne-t-il pour une petite entreprise rennaise ?',
    answer:
      "Oui, et souvent mieux que pour une grande : sur une recherche locale, la concurrence se limite aux entreprises de votre zone, pas à toute la France. Un artisan, un cabinet ou un commerce bien référencé à Rennes peut dépasser des enseignes nationales sur sa ville.",
  },
  {
    question: 'Vous occupez-vous aussi de la visibilité sur ChatGPT ?',
    answer:
      "Oui. Quand on demande à une IA « un bon électricien à Rennes » ou « une agence web en Bretagne », elle s'appuie sur les fiches Google, les avis et les sites. Je mesure ce qu'elle répond sur votre métier et je travaille les signaux qui vous font citer.",
  },
  {
    question: 'Comment démarrer ?',
    answer:
      "Par un audit gratuit de votre site, ou un premier échange de 30 minutes. Vous repartez avec un diagnostic clair et les trois priorités qui comptent pour vous, même si nous ne travaillons pas ensemble ensuite.",
  },
]

const config: MetierConfig = {
  metier: 'Consultant SEO Rennes',
  metierLower: 'consultant SEO à Rennes',
  heroKicker: 'Consultant SEO · Rennes · Bretagne',
  heroHeadline: 'Consultant SEO à Rennes,',
  heroHeadlineItalic: 'pour les entreprises de Bretagne',
  heroDescription:
    "Je positionne les entreprises de Rennes et de Bretagne sur les recherches de leurs futurs clients : Google, la carte Google Maps et maintenant les réponses des IA. Un seul interlocuteur, du diagnostic au suivi mensuel.",
  heroImageAlt: 'Victor Béasse, consultant SEO à Rennes',
  whatKicker: 'SEO à Rennes',
  whatTitle: 'Un consultant SEO rennais,',
  whatTitleItalic: 'qui fait le travail lui-même',
  whatPara1:
    "Le référencement d'une entreprise locale se joue sur trois terrains à la fois : les résultats classiques de Google, la carte où s'affichent trois entreprises, et les réponses que donnent désormais ChatGPT ou Gemini. Je travaille les trois, parce qu'un client rennais qui cherche un prestataire passe de l'un à l'autre sans y penser.",
  whatPara2:
    "Installé à Acigné, aux portes de Rennes, j'accompagne des artisans, des commerces, des professions libérales et des PME de toute la Bretagne. J'audite votre site et votre fiche Google, je corrige ce qui vous freine, je crée les pages et les articles qui répondent à vos clients, et je vous montre chaque mois ce qui a bougé. Plus de 80 clients m'ont laissé un avis 5 étoiles sur Google.",
  whatImageUrl:
    'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1600880292203-757bb62b4baf-w720.webp',
  whatImageAlt: 'Rendez-vous de travail SEO avec une entreprise de Rennes',
  pillars: [
    { icon: 'MapPin', title: 'Visibilité locale', desc: 'Fiche Google, avis et pages de zone pour Rennes et les communes que vous desservez.' },
    { icon: 'Target', title: 'Requêtes qui vendent', desc: 'Les recherches de vos clients, pas des mots-clés qui flattent et ne rapportent rien.' },
    { icon: 'TrendingUp', title: 'Suivi mensuel clair', desc: 'Positions, appels et demandes : un point simple chaque mois.' },
  ],
  whatFooterText:
    `J'interviens à ${zones.join(', ')}, et partout ailleurs à distance.`,
  timelineTitle: 'Du premier échange',
  timelineTitleItalic: 'aux clients qui vous trouvent',
  timelineSteps: [
    {
      number: '01',
      title: 'Audit du site et de la fiche Google',
      description:
        "Positions actuelles, concurrents qui occupent la carte à Rennes, freins techniques, cohérence de votre fiche. Vous repartez avec les priorités, chiffrées et classées.",
    },
    {
      number: '02',
      title: 'Corrections et contenus',
      description:
        "Corrections techniques, pages de service et de zone, fiche Google reprise, demande d'avis mise en place, articles qui répondent aux questions de vos clients.",
    },
    {
      number: '03',
      title: 'Suivi et ajustements',
      description:
        "Point mensuel sur les positions, la carte, les appels et les citations par les IA. On ajuste la suite en fonction de ce qui marche.",
    },
  ],
  keywordsTitle: 'Les recherches rennaises qui comptent',
  keywordsIntro:
    "À Rennes comme ailleurs, vos clients tapent leur besoin suivi de leur ville ou de leur quartier. Ce sont ces recherches, et leurs variantes, que je vise.",
  keywordCategories: [
    { icon: 'MapPin', title: 'Métier + Rennes', text: 'votre métier + Rennes, Cesson-Sévigné, Saint-Grégoire, Bruz.' },
    { icon: 'Target', title: 'Bretagne', text: 'votre métier + Vannes, Saint-Malo, Brest, Lorient, Quimper.' },
    { icon: 'Zap', title: 'Besoin immédiat', text: 'urgence, près de moi, ouvert le samedi, devis rapide.' },
    { icon: 'MessageCircle', title: 'Confiance', text: 'avis, recommandé, meilleur, de confiance à Rennes.' },
  ],
  relatedTitle: 'Autres services pour les entreprises bretonnes',
  relatedPara:
    "Le référencement s'appuie sur un site solide et une fiche Google bien tenue.",
  relatedLinks: [
    { label: 'Création de site internet à Rennes', href: '/creation-site-internet-rennes' },
    { label: 'Référencement local et fiche Google', href: '/referencement-local' },
    { label: 'Référencement IA (GEO)', href: '/referencement-ia-geo' },
  ],
  miniCtaText: 'Envie de savoir où vous en êtes sur Google à Rennes ?',
  caseStudiesKicker: 'Résultats de mes clients',
  faqTitlePrefix: 'Consultant SEO à Rennes',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Consultant SEO à Rennes', description, path, ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd(
      'Référencement naturel à Rennes et en Bretagne',
      description,
      path,
      [...zones.map((name) => ({ '@type': 'City', name })), { '@type': 'AdministrativeArea', name: 'Bretagne' }],
    ),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Consultant SEO à Rennes', path },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function ConsultantSeoRennesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

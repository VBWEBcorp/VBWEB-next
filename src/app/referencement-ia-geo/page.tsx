import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const path = '/referencement-ia-geo'
const description =
  "Référencement IA (GEO) : faire citer votre entreprise par ChatGPT, Gemini, Perplexity et les AI Overviews de Google. Audit de visibilité IA offert."

export const metadata: Metadata = {
  title: 'Référencement IA (GEO) : être cité par ChatGPT',
  description,
  alternates: { canonical: path },
}

const faqs = [
  {
    question: "Qu'est-ce que le GEO (Generative Engine Optimization) ?",
    answer:
      "Le GEO, ou référencement IA, regroupe le travail qui rend une entreprise citable par les moteurs génératifs : ChatGPT, Gemini, Perplexity, Copilot et les AI Overviews de Google. Là où le SEO vise une position dans une liste de liens, le GEO vise une mention dans la réponse elle-même, avec un lien vers votre site quand le moteur en donne un.",
  },
  {
    question: 'Quelle différence entre SEO et GEO ?',
    answer:
      "Le SEO travaille le classement d'une page sur une requête. Le GEO travaille la probabilité qu'un modèle vous cite quand on lui pose une question sur votre métier. Les deux se recoupent largement : un site lent, mal structuré ou sans contenu utile n'est ni bien classé ni cité. Le GEO ajoute trois chantiers : une identité d'entreprise lisible par les machines, des contenus qui répondent en une phrase avant de développer, et des mentions de votre marque sur des sources tierces que les modèles lisent.",
  },
  {
    question: 'Comment savoir si ChatGPT cite déjà mon entreprise ?',
    answer:
      "On ne le devine pas, on le mesure. Je pose aux moteurs une liste de questions que vos clients tapent vraiment (« quel plombier à Rennes pour une fuite un dimanche ? », « quel logiciel pour gérer un cabinet ? ») et je relève qui est cité, avec quelle source. Cette liste devient le tableau de bord du suivi : on la relance chaque mois pour voir votre marque entrer, ou non, dans les réponses.",
  },
  {
    question: 'Le référencement IA remplace-t-il le SEO classique ?',
    answer:
      "Non. Les moteurs génératifs s'appuient en grande partie sur des pages déjà bien référencées pour construire leurs réponses, et Google continue d'afficher ses liens sous les AI Overviews. Abandonner le SEO pour le GEO reviendrait à retirer la matière que les IA lisent. Je traite les deux ensemble, sur le même site.",
  },
  {
    question: "Qu'est-ce que le fichier llms.txt ?",
    answer:
      "C'est un fichier texte placé à la racine du site, qui présente l'entreprise et ses pages clés dans un format simple, pensé pour les modèles de langage. Il ne garantit rien à lui seul, mais il fait partie des signaux qui aident un moteur à comprendre qui vous êtes et quelle page citer. Je le mets en place et je le tiens à jour à chaque nouvelle page.",
  },
  {
    question: 'En combien de temps voit-on des résultats en GEO ?',
    answer:
      "Aucun délai sérieux ne peut être promis : les moteurs changent leurs sources et leurs modèles en permanence. Ce qui se mesure en revanche, c'est l'évolution de vos citations sur la liste de questions suivies, mois après mois. Les corrections techniques (identité, données structurées, llms.txt) sont prises en compte plus vite que le travail de notoriété, qui demande du temps.",
  },
  {
    question: 'Le GEO est-il utile pour une petite entreprise locale ?',
    answer:
      "Oui, et c'est souvent là qu'il se gagne le plus facilement. Quand on demande à une IA « un bon consultant SEO en Bretagne » ou « un ostéopathe à Vannes », elle s'appuie sur la fiche Google, les avis, les annuaires et le site. Une petite entreprise bien identifiée sur ces sources a toutes ses chances face à un grand groupe mal décrit.",
  },
  {
    question: 'Travaillez-vous le GEO partout en France ?',
    answer:
      "Oui. Le travail se fait à distance, avec des points réguliers en visio. Je suis basé près de Rennes et je me déplace en Bretagne quand c'est utile, mais le référencement IA n'a pas de frontière : vos futurs clients posent leurs questions de partout.",
  },
]

const config: MetierConfig = {
  metier: 'Référencement IA',
  metierLower: 'référencement IA',
  heroKicker: 'GEO · Référencement IA',
  heroHeadline: 'Référencement IA (GEO),',
  heroHeadlineItalic: 'être la réponse que donne ChatGPT',
  heroDescription:
    "Vos clients ne cherchent plus seulement sur Google : ils demandent à ChatGPT, Gemini ou Perplexity quelle entreprise choisir. Je rends votre entreprise identifiable et citable par ces moteurs, et je mesure chaque mois si elle apparaît dans leurs réponses.",
  heroImageAlt: 'Victor Béasse, consultant en référencement IA et GEO',
  whatKicker: 'Generative Engine Optimization',
  whatTitle: 'Être cité,',
  whatTitleItalic: 'pas seulement classé',
  whatPara1:
    "Quand un moteur génératif répond à une question, il ne montre pas dix liens : il cite deux ou trois entreprises, parfois une seule. Être dans cette réponse dépend de ce que le modèle sait de vous, et de la confiance qu'il accorde aux sources qui parlent de vous. C'est un travail précis, qui se mesure question par question.",
  whatPara2:
    "Mon approche part de vos clients : je relève les questions qu'ils posent vraiment aux IA, je regarde qui est cité aujourd'hui et pourquoi, puis je corrige ce qui vous rend invisible. Identité d'entreprise cohérente partout (site, fiche Google, annuaires), données structurées, fichier llms.txt, pages qui répondent clairement avant de développer, et mentions sur les sources que les modèles lisent. Le SEO de votre site avance en même temps.",
  whatImageUrl:
    'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1551288049-bebda4e38f71-w800.webp',
  whatImageAlt: 'Suivi de la visibilité d’une entreprise dans les réponses des IA',
  pillars: [
    { icon: 'FileSearch', title: 'Audit de visibilité IA', desc: 'Les questions de vos clients posées aux moteurs, et qui est cité à votre place.' },
    { icon: 'Target', title: 'Contenus citables', desc: 'Des pages qui répondent en une phrase, puis prouvent : le format que les IA reprennent.' },
    { icon: 'TrendingUp', title: 'Suivi des citations', desc: 'La même liste de questions relancée chaque mois : vous voyez votre marque entrer dans les réponses.' },
  ],
  whatFooterText:
    "Le GEO ne remplace pas le référencement naturel : il s'appuie dessus. Les deux se travaillent ensemble, sur le même site.",
  timelineTitle: 'De la mesure',
  timelineTitleItalic: 'aux premières citations',
  timelineSteps: [
    {
      number: '01',
      title: 'Audit de visibilité IA',
      description:
        "Je pose aux moteurs génératifs les questions de vos clients et je relève les entreprises citées, leurs sources et la place de votre marque. Vous voyez exactement où vous en êtes, sans jargon.",
    },
    {
      number: '02',
      title: 'Identité et contenus',
      description:
        "Correction de ce qui brouille votre identité (nom, adresse, activité, profils), données structurées, llms.txt, puis pages et articles écrits pour être repris : réponse directe, chiffres sourcés, exemples concrets.",
    },
    {
      number: '03',
      title: 'Notoriété et suivi mensuel',
      description:
        "Mentions sur les sources qui comptent pour votre secteur (avis, annuaires, presse, partenaires) et relevé mensuel des citations sur la liste de questions. Chaque mois, vous savez ce qui a bougé.",
    },
  ],
  keywordsTitle: 'Les questions posées aux IA qui comptent pour vous',
  keywordsIntro:
    "Sur un moteur génératif, on ne tape pas des mots-clés : on pose une question complète, souvent avec un contexte. C'est cette formulation qu'il faut viser, et elle diffère d'un métier à l'autre.",
  keywordCategories: [
    { icon: 'Target', title: 'Recommandation', text: 'quel prestataire choisir, qui contacter, meilleure entreprise pour…' },
    { icon: 'MapPin', title: 'Local', text: 'votre métier + votre ville, près de chez moi, ouvert le dimanche.' },
    { icon: 'FileSearch', title: 'Comparaison', text: 'X ou Y, avantages et inconvénients, alternatives, avis.' },
    { icon: 'Zap', title: 'Problème à résoudre', text: 'comment faire, que faire si, combien de temps, par où commencer.' },
  ],
  relatedTitle: 'Le GEO se travaille avec le reste de votre visibilité',
  relatedPara:
    "Les moteurs génératifs lisent votre site, votre fiche Google et ce que les autres disent de vous. Ces pages détaillent chacun de ces leviers.",
  relatedLinks: [
    { label: 'Référencement SEO', href: '/referencement-seo' },
    { label: 'Référencement local et fiche Google', href: '/referencement-local' },
    { label: 'Audit SEO gratuit', href: '/audit-seo-gratuit' },
  ],
  miniCtaText: 'Envie de savoir ce que ChatGPT répond quand on cherche votre métier ?',
  caseStudiesKicker: 'Résultats de mes clients',
  faqTitlePrefix: 'Référencement IA',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Référencement IA (GEO)', description, path, ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Référencement IA (GEO)', description, path),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Référencement IA (GEO)', path },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function ReferencementIaGeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

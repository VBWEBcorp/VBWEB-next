import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const path = '/referencement-local'
const description =
  "Référencement local : optimisation de la fiche Google, avis clients et SEO local pour apparaître dans Google Maps et les 3 premiers résultats de votre ville."

export const metadata: Metadata = {
  title: 'Référencement local : fiche Google et SEO local',
  description,
  alternates: { canonical: path },
}

const faqs = [
  {
    question: "Qu'est-ce que le référencement local ?",
    answer:
      "C'est le travail qui fait apparaître une entreprise quand on cherche son métier dans une ville : « électricien Vannes », « agence immobilière Saint-Malo », « ostéopathe près de moi ». Sur ces recherches, Google affiche d'abord une carte avec trois entreprises, le « pack local », puis les résultats classiques. Le référencement local vise les deux.",
  },
  {
    question: 'Comment apparaître dans les 3 premiers résultats de Google Maps ?',
    answer:
      "Google classe les fiches selon trois critères qu'il a lui-même publiés : la pertinence (la fiche correspond-elle à la recherche ?), la distance et la notoriété (avis, mentions, qualité du site). Les leviers concrets sont une catégorie principale juste, une fiche complète et vivante, des avis réguliers auxquels vous répondez, et un site dont les pages confirment ce que dit la fiche.",
  },
  {
    question: 'La catégorie de ma fiche Google est-elle si importante ?',
    answer:
      "C'est souvent le réglage qui pèse le plus, et le plus souvent faux. Une fiche classée dans une catégorie voisine de votre métier ne remonte pas sur la recherche principale, même avec d'excellents avis. Je vérifie la catégorie principale et les catégories secondaires en regardant celles des fiches qui occupent déjà le haut de la carte dans votre ville.",
  },
  {
    question: 'Comment obtenir plus d’avis Google sans enfreindre les règles ?',
    answer:
      "En demandant, au bon moment, à tous vos clients satisfaits : juste après la prestation, avec un lien direct vers le formulaire d'avis (QR code en boutique, lien dans le mail de facture). Acheter des avis est une pratique commerciale trompeuse au sens du Code de la consommation, et Google interdit de trier à l'avance les clients à qui l'on demande un avis. Répondre à chaque avis, y compris aux critiques, compte autant que leur nombre.",
  },
  {
    question: 'Ma fiche Google a été suspendue, que faire ?',
    answer:
      "Une suspension vient presque toujours d'un écart avec les règles de Google : nom de fiche avec des mots-clés ajoutés, adresse qui n'accueille pas de clients, modification importante faite d'un coup. Il faut corriger la cause avant de demander le rétablissement, sinon la demande est refusée. Je fais le diagnostic et je prépare le dossier de réexamen avec vous.",
  },
  {
    question: 'Faut-il une page par ville sur mon site ?',
    answer:
      "Pas des dizaines de pages identiques où seul le nom de la ville change : Google les repère et ne les indexe pas. Une page par zone où vous intervenez vraiment, avec des informations propres à cette zone (réalisations, délais, accès, particularités), fonctionne en revanche très bien.",
  },
  {
    question: 'Le référencement local est-il utile si je travaille chez mes clients ?',
    answer:
      "Oui. Les entreprises qui se déplacent (artisans, dépanneurs, coachs à domicile, prestataires de services) peuvent masquer leur adresse et déclarer une zone desservie. Elles apparaissent alors sur les recherches locales de cette zone, à condition que la fiche et le site soient cohérents.",
  },
  {
    question: 'Travaillez-vous le référencement local ailleurs qu’en Bretagne ?',
    answer:
      "Oui. Je suis basé près de Rennes, mais le référencement local se pilote très bien à distance : la fiche, les avis et le site se travaillent de la même façon à Lyon ou à Bordeaux qu'à Vannes.",
  },
]

const config: MetierConfig = {
  metier: 'Référencement local',
  metierLower: 'référencement local',
  heroKicker: 'SEO local · Fiche Google',
  heroHeadline: 'Référencement local,',
  heroHeadlineItalic: 'être choisi par les clients de votre ville',
  heroDescription:
    "Sur « votre métier + votre ville », Google affiche trois entreprises sur une carte avant tout le reste. Je travaille votre fiche Google, vos avis et votre site pour que la vôtre en fasse partie.",
  heroImageAlt: 'Victor Béasse, consultant en référencement local',
  whatKicker: 'SEO local',
  whatTitle: 'La carte Google,',
  whatTitleItalic: 'votre première vitrine',
  whatPara1:
    "Pour une entreprise locale, les trois fiches affichées sur la carte captent l'essentiel des appels. Elles ne sont pas choisies au hasard : Google compare la pertinence de chaque fiche, sa distance à la personne qui cherche et sa notoriété. La plupart des fiches que j'audite perdent des places sur des réglages simples, à commencer par la catégorie principale.",
  whatPara2:
    "Je reprends votre fiche de bout en bout (catégories, zone desservie, services, photos, publications), je mets en place une demande d'avis qui s'intègre à votre façon de travailler, et j'aligne votre site sur la fiche pour que Google lise la même information partout. Les mêmes signaux servent aussi aux IA, qui s'appuient sur la fiche et les avis pour recommander une entreprise.",
  whatImageUrl:
    'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1524758631624-e2822e304c36-w720.webp',
  whatImageAlt: 'Commerce local visible sur Google Maps',
  pillars: [
    { icon: 'MapPin', title: 'Fiche Google optimisée', desc: 'Catégories, zone, services, photos et publications : une fiche complète et cohérente.' },
    { icon: 'MessageCircle', title: 'Avis clients', desc: 'Une demande d’avis simple, au bon moment, et une réponse à chaque avis.' },
    { icon: 'Target', title: 'Site aligné sur la fiche', desc: 'Des pages qui confirment votre métier et votre zone, pour Google comme pour les IA.' },
  ],
  whatFooterText:
    "Les avis, la fiche et le site se renforcent les uns les autres : travaillés séparément, ils plafonnent vite.",
  timelineTitle: 'De la fiche oubliée',
  timelineTitleItalic: 'aux appels de votre ville',
  timelineSteps: [
    {
      number: '01',
      title: 'Audit local',
      description:
        "Relevé des fiches qui occupent la carte sur vos recherches principales, comparaison avec la vôtre (catégories, avis, contenu), vérification de la cohérence nom, adresse, téléphone sur le web.",
    },
    {
      number: '02',
      title: 'Fiche, avis et site',
      description:
        "Correction de la fiche, mise en place de la demande d'avis, pages de service et de zone sur le site, données structurées de l'entreprise. Rien n'est modifié sans votre accord.",
    },
    {
      number: '03',
      title: 'Publications et suivi',
      description:
        "Publications régulières sur la fiche, réponses aux avis, suivi des positions sur la carte et des appels. Chaque mois, un point clair sur ce qui a bougé.",
    },
  ],
  keywordsTitle: 'Les recherches locales qui amènent des clients',
  keywordsIntro:
    "Une recherche locale traduit presque toujours un besoin immédiat. C'est pour cette raison qu'elle convertit mieux que n'importe quelle autre, à condition d'y être visible.",
  keywordCategories: [
    { icon: 'MapPin', title: 'Métier + ville', text: 'plombier Rennes, coiffeur Lorient, avocat Quimper.' },
    { icon: 'Zap', title: 'Proximité', text: 'près de moi, à proximité, ouvert maintenant, le dimanche.' },
    { icon: 'Target', title: 'Besoin précis', text: 'dépannage chaudière, pose de parquet, bilan comptable.' },
    { icon: 'MessageCircle', title: 'Réputation', text: 'avis, meilleur, recommandé, de confiance.' },
  ],
  relatedTitle: 'Aller plus loin que la carte',
  relatedPara:
    "Le référencement local est un des leviers de votre visibilité. Ces pages détaillent les autres.",
  relatedLinks: [
    { label: 'Référencement SEO', href: '/referencement-seo' },
    { label: 'Référencement IA (GEO)', href: '/referencement-ia-geo' },
    { label: 'Consultant SEO à Rennes', href: '/consultant-seo-rennes' },
  ],
  miniCtaText: 'Envie de savoir pourquoi votre fiche n’apparaît pas sur la carte ?',
  caseStudiesKicker: 'Résultats de mes clients',
  faqTitlePrefix: 'Référencement local',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Référencement local', description, path, ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Référencement local et fiche Google', description, path),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Référencement local', path },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function ReferencementLocalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

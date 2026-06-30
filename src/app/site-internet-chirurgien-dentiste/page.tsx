import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet chirurgien-dentiste : création de site web optimisé SEO. Chirurgie orale, extraction, implant, greffe osseuse, sédation — capter les patients qui cherchent un chirurgien sur Google.'

export const metadata: Metadata = {
  title: 'Site Internet Chirurgien-Dentiste | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-chirurgien-dentiste' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un chirurgien-dentiste a-t-il besoin d\'un site internet distinct de son cabinet ?',
    answer: 'Oui, car les recherches sont différentes. Un patient qui cherche un chirurgien-dentiste ne tape pas "dentiste" : il tape "chirurgie orale", "extraction dent de sagesse difficile", "implant dentaire + ville". Ce sont des patients référés qui veulent vérifier votre expertise avant de prendre rendez-vous. Un site dédié qui met en valeur votre pratique chirurgicale capte ces patients qui ont des paniers moyens élevés.',
  },
  {
    question: 'Combien coûte un site pour un chirurgien-dentiste ?',
    answer: 'Un site vitrine complet démarre à 1 800 euros. Il inclut une page par type de chirurgie (extraction, implantologie, greffe osseuse, chirurgie parodontale, sinus lift), votre parcours universitaire et vos formations, le plateau technique, les modalités de consultation et de chirurgie, et la conformité déontologique.',
  },
  {
    question: 'Comment valoriser le plateau technique sans tomber dans le commercial ?',
    answer: 'En restant factuel. On présente les équipements (scanner 3D, radiologie panoramique, sédation consciente, laser) avec leur utilité clinique : précision chirurgicale, réduction de la douleur, réduction du temps opératoire. Les patients en chirurgie orale cherchent justement des arguments cliniques, pas des photos lissées.',
  },
  {
    question: 'Est-ce que je peux mettre en avant la sédation consciente ?',
    answer: 'Oui, et c\'est un vrai différenciateur. Beaucoup de patients anxieux cherchent activement "chirurgien-dentiste sédation" ou "extraction dent de sagesse sédation". Une page dédiée explique le principe, la sécurité, les indications. C\'est une requête peu concurrentielle et très convertissante pour les gros actes chirurgicaux.',
  },
  {
    question: 'Comment gérer les pages post-opératoires ?',
    answer: 'Je crée des pages "conseils post-opératoires" par type de chirurgie. Elles ont un double intérêt : elles rassurent les patients (qui n\'hésitent plus à prendre rendez-vous) et elles ramènent du trafic SEO via des requêtes comme "douleur après extraction dent de sagesse" — des gens qui deviennent ensuite vos futurs patients.',
  },
]

const config: MetierConfig = {
  metier: 'Chirurgien-Dentiste',
  metierLower: 'chirurgien-dentiste',
  heroKicker: 'Sites web pour chirurgien-dentiste',
  heroHeadline: 'Site internet chirurgien-dentiste,',
  heroHeadlineItalic: 'une expertise clinique qui se voit au premier clic',
  heroDescription:
    'Je crée des sites internet pour les chirurgiens-dentistes partout en France. Extraction, implantologie, greffe osseuse, sédation consciente, parodontie chirurgicale : chaque page met en avant votre expertise et capte les patients qui cherchent un chirurgien pour des actes complexes.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour chirurgien-dentiste',
  whatKicker: 'Sites web pour chirurgien-dentiste',
  whatTitle: 'Une expertise chirurgicale',
  whatTitleItalic: 'mise en avant sans tomber dans le commercial',
  whatPara1:
    'Un patient qui cherche un chirurgien-dentiste a souvent un problème sérieux : dent de sagesse incluse, implant complexe, parodontite avancée, besoin d\'une greffe osseuse avant implant. Il ne cherche pas un "dentiste", il cherche un chirurgien avec des compétences précises. Il compare les parcours universitaires, les plateaux techniques, les techniques maîtrisées. Votre site doit répondre à ces critères factuellement.',
  whatPara2:
    'Je construis des sites chirurgiens-dentistes qui valorisent votre expertise dans le respect de la déontologie. Pages par acte chirurgical, parcours universitaire, plateau technique expliqué cliniquement, conseils post-opératoires, intégration Doctolib pour la prise de rendez-vous. L\'objectif : que le patient ait déjà confiance avant même le premier appel.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1588776814546-1ffcf47267a5-w800.webp',
  whatImageAlt: 'Création site internet pour chirurgien-dentiste',
  pillars: [
    { icon: 'Target', title: 'Page par acte chirurgical', desc: 'Extraction DDS, implant, greffe osseuse, sinus lift : chaque acte a sa requête précise.' },
    { icon: 'FileSearch', title: 'Plateau technique expliqué', desc: 'Scanner 3D, sédation, laser : arguments cliniques qui rassurent les patients anxieux.' },
    { icon: 'User', title: 'Parcours valorisé', desc: 'Formations, DU, certificats : ce que cherchent les patients référés pour vérifier votre expertise.' },
  ],
  whatFooterText:
    'Un chirurgien-dentiste bien référencé capte 5 à 15 nouveaux patients par mois sur des actes chirurgicaux complexes.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre pratique', description: 'Types de chirurgie maîtrisés, plateau technique, formations, DU, expérience, patientèle (référée ou directe). Je liste vos spécificités.' },
    { number: '02', title: 'Construction du site', description: 'Pages par acte, plateau technique, parcours, conseils post-op, prise de rendez-vous. Ton clinique et rassurant, conforme à la déontologie CNCD.' },
    { number: '03', title: 'Mise en ligne + suivi', description: 'Fiche Google optimisée, suivi des premières prises de rendez-vous chirurgicales, ajustements selon les retours patients.' },
  ],
  keywordsTitle: 'Les requêtes Google qui ramènent des patients à un chirurgien-dentiste',
  keywordsIntro:
    'Les patients en chirurgie orale cherchent des actes très précis avec des paniers moyens élevés. Chaque requête correspond à un type de patient référé ou en recherche directe d\'expertise.',
  keywordCategories: [
    { icon: 'Zap', title: 'Chirurgie courante', text: 'extraction dent sagesse, dent incluse, extraction chirurgicale, germectomie.' },
    { icon: 'Target', title: 'Implantologie', text: 'implant dentaire, implant complexe, greffe osseuse, sinus lift, all-on-4.' },
    { icon: 'User', title: 'Parodontologie', text: 'chirurgie parodontale, lambeau gingival, greffe gencive, traitement parodontite.' },
    { icon: 'FileSearch', title: 'Confort', text: 'chirurgien-dentiste sédation, extraction sous sédation, anxiété dentaire.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel dentaire ou de santé ?',
  relatedPara:
    'Les métiers dentaires ont une logique SEO proche : pages par acte, mise en avant de l\'expertise, respect de la déontologie. Voici les autres pages métiers disponibles.',
  relatedLinks: [
    { label: 'Site internet dentiste', href: '/site-internet-dentiste' },
    { label: 'Site internet orthodontiste', href: '/site-internet-orthodontiste' },
    { label: 'Site internet cabinet dentaire', href: '/site-internet-cabinet-dentaire' },
    { label: 'Site internet implantologue', href: '/site-internet-implantologue' },
  ],
  miniCtaText: 'Envie de valoriser votre expertise chirurgicale auprès des patients référés ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Chirurgien-Dentiste', description, '/site-internet-chirurgien-dentiste', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Chirurgien-Dentiste', description, '/site-internet-chirurgien-dentiste'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Chirurgien-Dentiste', path: '/site-internet-chirurgien-dentiste' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetChirurgienDentistePage() {
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

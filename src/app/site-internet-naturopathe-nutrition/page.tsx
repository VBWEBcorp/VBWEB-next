import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet naturopathe nutrition : création de site web optimisé SEO. Alimentation vivante, détox, jeûne, plantes, équilibre digestif, médecines douces — capter une clientèle naturelle.'

export const metadata: Metadata = {
  title: 'Site Internet Naturopathe Nutrition | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-naturopathe-nutrition' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Naturopathe orienté nutrition, quel positionnement sur le site ?',
    answer: 'C\'est une niche spécifique au croisement de la naturopathie et de la nutrition. Votre positionnement doit le refléter clairement : approche globale (alimentation, plantes, hygiène de vie), pas de diagnostic médical, complémentarité avec les professionnels de santé. Le site doit parler à une clientèle déjà sensibilisée aux approches naturelles.',
  },
  {
    question: 'Quelles sont les requêtes les plus rentables ?',
    answer: '"Naturopathe nutrition + ville", "alimentation vivante", "cure détox", "jeûne intermittent naturopathe", "alimentation anti-inflammatoire". Ces requêtes amènent des clients motivés qui comprennent déjà votre approche et cherchent un professionnel qui les accompagne dans cette vision. Ce sont souvent des clients fidèles sur plusieurs consultations.',
  },
  {
    question: 'Le jeûne et la détox peuvent-ils être présentés sans risque ?',
    answer: 'Oui, à condition de rester dans le cadre d\'accompagnement et de conseil en hygiène de vie, sans jamais remplacer un avis médical. Je rédige chaque page avec les précautions nécessaires, les contre-indications claires, et l\'invitation systématique à consulter un médecin en cas de pathologie. Ça protège juridiquement tout en restant efficace SEO.',
  },
  {
    question: 'La visio est-elle adaptée à cette pratique ?',
    answer: 'Oui, largement. Les consultations en naturopathie nutrition fonctionnent très bien en visio : interrogatoire, analyse des habitudes, recommandations. Une page dédiée à la visio capte une clientèle nationale et permet d\'organiser votre planning sans contrainte géographique.',
  },
]

const config: MetierConfig = {
  metier: 'Naturopathe Nutrition',
  metierLower: 'naturopathe nutrition',
  heroKicker: 'Sites web pour naturopathe nutrition',
  heroHeadline: 'Site internet naturopathe nutrition,',
  heroHeadlineItalic: 'un accompagnement naturel pour une clientèle motivée',
  heroDescription:
    'Je crée des sites internet pour les naturopathes orientés nutrition partout en France. Alimentation vivante, détox, jeûne, plantes, hygiène de vie : chaque page capte une clientèle sensibilisée aux approches naturelles et à la nutrition préventive.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour naturopathe nutrition',
  whatKicker: 'Sites web pour naturopathe nutrition',
  whatTitle: 'Une naturopathie nutritionnelle',
  whatTitleItalic: 'trouvée par des clients déjà convaincus',
  whatPara1:
    'Les clients qui cherchent un naturopathe orienté nutrition ne sont pas dans une démarche de curiosité : ils sont convaincus de l\'approche naturelle et cherchent un professionnel qui les accompagne. Ils tapent "naturopathe nutrition + ville", "cure détox accompagnée", "alimentation vivante + ville", "jeûne accompagné". Ce sont des clients fidèles avec des paniers de consultations récurrentes.',
  whatPara2:
    'Je construis des sites naturopathe nutrition qui captent cette clientèle motivée. Pages par approche (alimentation vivante, détox, jeûne, plantes), positionnement non-médical clair, visio pour capter du national, respect des précautions réglementaires. Un site qui convertit des visiteurs curieux en clients engagés.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1505740420928-5e560c06d30e-w800.webp',
  whatImageAlt: 'Création site internet pour naturopathe nutrition',
  pillars: [
    { icon: 'Target', title: 'Approches détaillées', desc: 'Alimentation vivante, détox, jeûne, plantes : chaque approche a sa page dédiée.' },
    { icon: 'User', title: 'Clientèle convaincue', desc: 'Ton qui parle aux personnes déjà sensibilisées, pas aux sceptiques. Conversions meilleures.' },
    { icon: 'FileSearch', title: 'Positionnement cadré', desc: 'Non-médical, complémentaire, précautions explicites. Protection juridique et crédibilité.' },
  ],
  whatFooterText:
    'Un naturopathe nutrition bien référencé signe en moyenne 8 à 18 nouveaux clients par mois, souvent en forfaits pluri-séances.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre pratique', description: 'Approches proposées, formation, positionnement, clientèle cible, modalités (cabinet, visio, domicile), forfaits.' },
    { number: '02', title: 'Construction du site', description: 'Pages par approche, positionnement non-médical, précautions, visio, forfaits. Ton cohérent avec votre univers.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières prises de rendez-vous, ajustements selon les retours clients.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des clients à un naturopathe nutrition',
  keywordsIntro:
    'Les clients cherchent des approches naturelles spécifiques : chaque approche correspond à un profil et une intention différente.',
  keywordCategories: [
    { icon: 'Target', title: 'Alimentation', text: 'alimentation vivante, alimentation anti-inflammatoire, régime paléo, alimentation cétogène naturopathie.' },
    { icon: 'Zap', title: 'Détox / Jeûne', text: 'cure détox, jeûne intermittent, jeûne accompagné, monodiète, cure hépatique.' },
    { icon: 'User', title: 'Plantes', text: 'phytothérapie nutrition, plantes digestion, plantes immunité, aromathérapie + nutrition.' },
    { icon: 'FileSearch', title: 'Motifs', text: 'digestion difficile, fatigue naturopathie, intolérances alimentaires, candidose, SIBO.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel du naturel ou de la nutrition ?',
  relatedPara:
    'Les métiers qui croisent nutrition et approches naturelles ont une logique proche. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet naturopathe', href: '/site-internet-naturopathe' },
    { label: 'Site internet diététicien', href: '/site-internet-dieteticien' },
    { label: 'Site internet nutritionniste', href: '/site-internet-nutritionniste' },
    { label: 'Site internet herboristerie', href: '/site-internet-herboristerie' },
  ],
  miniCtaText: 'Envie de capter une clientèle naturopathie nutrition déjà convaincue ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Naturopathe Nutrition', description, '/site-internet-naturopathe-nutrition', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Naturopathe Nutrition', description, '/site-internet-naturopathe-nutrition'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Naturopathe Nutrition', path: '/site-internet-naturopathe-nutrition' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetNaturopatheNutritionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

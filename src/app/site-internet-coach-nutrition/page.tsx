import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet coach nutrition : création de site web optimisé SEO. Accompagnement personnalisé, perte de poids, habitudes alimentaires, coaching à distance — capter les clients motivés.'

export const metadata: Metadata = {
  title: 'Site Internet Coach Nutrition | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-coach-nutrition' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Coach nutrition ou diététicien, quelle différence sur le site ?',
    answer: 'Coach nutrition n\'est pas un titre réglementé, c\'est un métier d\'accompagnement. Un coach ne pose pas de diagnostic, ne prescrit pas, mais aide à changer les habitudes alimentaires durablement. Le site doit clarifier ce positionnement : pas de langage médical, focus sur le coaching et la motivation, complémentarité assumée avec les professionnels de santé.',
  },
  {
    question: 'Quel type de clientèle cherche un coach nutrition ?',
    answer: 'Des personnes qui ont déjà essayé plusieurs régimes sans succès et qui cherchent un accompagnement humain plus qu\'une liste d\'aliments. Elles veulent comprendre leurs blocages, apprendre à manger mieux, être soutenues dans la durée. C\'est un positionnement très différent du diététicien et ça doit se refléter sur le site.',
  },
  {
    question: 'Le coaching à distance est-il un bon levier ?',
    answer: 'Énorme. Les programmes en ligne (webinaires, suivi WhatsApp, coaching hebdo en visio) explosent. Une page dédiée "Coaching nutrition en ligne" capte une clientèle nationale. Beaucoup de coachs en nutrition ont construit leur business à 80 % sur du distanciel grâce à un site bien positionné.',
  },
  {
    question: 'Les programmes en forfait sont-ils à mettre en avant ?',
    answer: 'Oui, c\'est souvent ce qui convertit le mieux. Un programme de 3 mois à 500 €, un accompagnement 6 mois à 900 € : le client achète un chemin, pas une séance. Je crée une page dédiée aux programmes avec le déroulé clair, les étapes, les résultats attendus. Ça convertit beaucoup mieux que "séance à 60 €".',
  },
]

const config: MetierConfig = {
  metier: 'Coach Nutrition',
  metierLower: 'coach nutrition',
  heroKicker: 'Sites web pour coach nutrition',
  heroHeadline: 'Site internet coach nutrition,',
  heroHeadlineItalic: 'un accompagnement qui change vraiment les habitudes',
  heroDescription:
    'Je crée des sites internet pour les coachs nutrition partout en France. Perte de poids, changement d\'habitudes, coaching en ligne, programmes personnalisés : chaque page capte une clientèle motivée par un vrai changement durable.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour coach nutrition',
  whatKicker: 'Sites web pour coach nutrition',
  whatTitle: 'Un coach nutrition choisi',
  whatTitleItalic: 'par des gens fatigués d\'essayer seuls',
  whatPara1:
    'Les clients d\'un coach nutrition ont souvent déjà tout essayé : régimes, apps, livres. Ils cherchent maintenant un accompagnement humain qui les aide à comprendre pourquoi ils échouent et à changer en profondeur. Les requêtes "coach nutrition", "accompagnement perte de poids", "coaching alimentaire" reflètent cette demande d\'un soutien qui va au-delà du simple conseil.',
  whatPara2:
    'Je construis des sites coach nutrition qui captent cette clientèle en recherche d\'accompagnement. Positionnement différencié du diététicien, programmes structurés (3 mois, 6 mois), coaching en ligne, témoignages anonymisés, méthode explicitée. L\'objectif : que les clients comprennent immédiatement qu\'ils sont au bon endroit.',
  whatImageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour coach nutrition',
  pillars: [
    { icon: 'User', title: 'Positionnement coach', desc: 'Différent du diététicien. Accompagnement humain, durable, basé sur les habitudes.' },
    { icon: 'Target', title: 'Programmes forfaits', desc: 'Vendre des programmes (3 mois, 6 mois) convertit mieux que vendre des séances isolées.' },
    { icon: 'TrendingUp', title: 'Coaching en ligne', desc: 'Clientèle nationale, marges meilleures, scalabilité. Le levier principal d\'un coach en 2026.' },
  ],
  whatFooterText:
    'Un coach nutrition bien référencé signe en moyenne 8 à 20 programmes par mois, dont une majorité en ligne.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre approche', description: 'Spécialités (perte de poids, sport, émotionnel, pathologies), programmes proposés, tarifs, modalités, formations.' },
    { number: '02', title: 'Construction du site', description: 'Positionnement coach, pages programmes, coaching en ligne, méthode, témoignages anonymisés.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières ventes de programmes, ajustements selon les conversions.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des clients à un coach nutrition',
  keywordsIntro:
    'Les clients d\'un coach nutrition cherchent un accompagnement humain plus qu\'un régime. Leurs requêtes reflètent ce besoin de soutien.',
  keywordCategories: [
    { icon: 'Target', title: 'Perte de poids', text: 'coach perte de poids, accompagnement perte de poids, coach minceur, programme perte de poids.' },
    { icon: 'User', title: 'Habitudes', text: 'changer ses habitudes alimentaires, rééquilibrage alimentaire, arrêter les régimes, alimentation intuitive.' },
    { icon: 'Zap', title: 'En ligne', text: 'coach nutrition en ligne, coaching alimentaire visio, programme nutrition internet.' },
    { icon: 'FileSearch', title: 'Émotionnel', text: 'coach alimentation émotionnelle, compulsion alimentaire, coach grignotage, stress alimentation.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel de la nutrition ?',
  relatedPara:
    'Les métiers autour de la nutrition ont une logique proche : accompagnement, méthode, résultats durables. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet nutritionniste', href: '/site-internet-nutritionniste' },
    { label: 'Site internet diététicien', href: '/site-internet-dieteticien' },
    { label: 'Site internet micro-nutritionniste', href: '/site-internet-micro-nutritionniste' },
    { label: 'Site internet coach sportif', href: '/site-internet-coach-sportif' },
  ],
  miniCtaText: 'Envie d\'un site coach nutrition qui vend des programmes à 500 € sans effort ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Coach Nutrition', description, '/site-internet-coach-nutrition', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Coach Nutrition', description, '/site-internet-coach-nutrition'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Coach Nutrition', path: '/site-internet-coach-nutrition' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetCoachNutritionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

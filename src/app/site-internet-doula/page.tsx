import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet doula : création de site web optimisé SEO. Accompagnement grossesse, accouchement, post-partum, deuil périnatal — capter les futures mamans en recherche.'

export const metadata: Metadata = {
  title: 'Site Internet Doula | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-doula' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Le métier de doula est méconnu, le site doit-il l\'expliquer ?',
    answer: 'Oui, c\'est même un des enjeux principaux. Beaucoup de femmes entendent parler des doulas via une amie ou un article, mais ne savent pas précisément ce que vous proposez. Une page claire qui explique la différence entre une doula, une sage-femme et une psychologue périnatale permet de lever les doutes et de capter des clientes qui hésitaient jusque-là.',
  },
  {
    question: 'Comment se positionner face aux professions médicales ?',
    answer: 'En étant complémentaire, pas concurrente. Une doula accompagne émotionnellement, pas médicalement. Je rédige vos pages en respectant cette distinction : vocabulaire non médical, référence aux sages-femmes et médecins pour le côté clinique, mise en avant de l\'accompagnement humain et émotionnel que seule une doula offre.',
  },
  {
    question: 'Les tarifs sont-ils à afficher ?',
    answer: 'Oui, c\'est un vrai levier de conversion. L\'accompagnement d\'une doula a un coût (souvent 400 à 1 500 €) que les clientes cherchent activement. Afficher des fourchettes de tarifs ou des forfaits clairs rassure et qualifie les demandes. Les clientes qui vous contactent connaissent déjà l\'ordre de prix et sont prêtes à payer.',
  },
  {
    question: 'Le post-partum et le deuil périnatal peuvent-ils être valorisés sur le même site ?',
    answer: 'Oui, avec des pages distinctes. Le post-partum concerne une clientèle différente (jeunes mamans en difficulté) que la préparation à l\'accouchement. Le deuil périnatal est un accompagnement très spécifique que peu de doulas proposent : si c\'est votre cas, une page dédiée vous différencie et capte une clientèle sensible peu adressée.',
  },
]

const config: MetierConfig = {
  metier: 'Doula',
  metierLower: 'doula',
  heroKicker: 'Sites web pour doula',
  heroHeadline: 'Site internet doula,',
  heroHeadlineItalic: 'un accompagnement humain qui trouve ses femmes',
  heroDescription:
    'Je crée des sites internet pour les doulas et accompagnantes périnatales partout en France. Grossesse, accouchement, post-partum, deuil périnatal : chaque page explique votre accompagnement et capte les femmes qui cherchent un soutien humain au-delà du médical.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour doula',
  whatKicker: 'Sites web pour doula',
  whatTitle: 'Une doula trouvée',
  whatTitleItalic: 'par les femmes qui cherchent plus qu\'un suivi médical',
  whatPara1:
    'Les futures mamans qui cherchent une doula ont souvent un besoin précis que le suivi médical classique ne comble pas : une présence humaine continue, une oreille attentive, un accompagnement émotionnel pendant la grossesse et l\'accouchement. Elles cherchent "doula + ville", "accompagnement grossesse", "doula post-partum". Si votre site n\'explique pas clairement ce que vous proposez, vous passez à côté de ces femmes.',
  whatPara2:
    'Je construis des sites doula qui expliquent votre accompagnement avec humanité. Différence claire avec les professions médicales, étapes d\'accompagnement, forfaits, témoignages (anonymisés), votre parcours. L\'objectif : que les futures mamans sachent immédiatement si vous êtes la personne qu\'elles cherchent.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1544829728-e5cb9eedc20e-w800.webp',
  whatImageAlt: 'Création site internet pour doula',
  pillars: [
    { icon: 'MessageCircle', title: 'Accompagnement expliqué', desc: 'Le métier est méconnu. Une page claire sur ce que vous faites lève les doutes et convertit.' },
    { icon: 'User', title: 'Complémentarité valorisée', desc: 'Positionnement humain, pas médical. Complémentaire aux sages-femmes et médecins.' },
    { icon: 'FileSearch', title: 'Forfaits clairs', desc: 'Tarifs et accompagnements présentés en forfaits. Les clientes savent à quoi s\'attendre.' },
  ],
  whatFooterText:
    'Une doula bien référencée signe en moyenne 3 à 8 nouveaux accompagnements par mois via Google.',
  timelineSteps: [
    { number: '01', title: 'On parle de votre approche', description: 'Votre formation, votre philosophie, vos accompagnements proposés (grossesse, accouchement, post-partum, deuil), votre zone, vos forfaits.' },
    { number: '02', title: 'Construction du site', description: 'Ton humain, pages d\'accompagnement, forfaits, parcours, positionnement clair. Respect du cadre non-médical.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières prises de contact, ajustements selon les retours clientes.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des femmes à une doula',
  keywordsIntro:
    'Les femmes qui cherchent une doula ont souvent un besoin précis : préparation à l\'accouchement, post-partum difficile, deuil périnatal. Chaque requête correspond à un moment de vie.',
  keywordCategories: [
    { icon: 'User', title: 'Grossesse', text: 'doula grossesse, accompagnement grossesse, doula préparation naissance, doula + ville.' },
    { icon: 'Target', title: 'Accouchement', text: 'doula accouchement, doula à la maternité, présence accouchement, accompagnement accouchement.' },
    { icon: 'MessageCircle', title: 'Post-partum', text: 'doula post-partum, accompagnement jeune maman, doula allaitement, baby blues.' },
    { icon: 'FileSearch', title: 'Spécifique', text: 'doula deuil périnatal, doula PMA, doula IVG, accompagnement IMG.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel de la périnatalité ?',
  relatedPara:
    'Les métiers de la périnatalité ont une logique proche : rassurer, expliquer, être présente. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet sage-femme', href: '/site-internet-sage-femme' },
    { label: 'Site internet conseillère lactation', href: '/site-internet-conseillere-lactation' },
    { label: 'Site internet préparation naissance', href: '/site-internet-preparation-naissance' },
    { label: 'Site internet psychologue', href: '/site-internet-psychologue' },
  ],
  miniCtaText: 'Envie que les futures mamans vous trouvent au moment où elles en ont besoin ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Doula', description, '/site-internet-doula', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Doula', description, '/site-internet-doula'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Doula', path: '/site-internet-doula' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetDoulaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

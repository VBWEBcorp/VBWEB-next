import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet nutritionniste : création de site web optimisé SEO. Perte de poids, rééquilibrage, téléconsultation, sportif, pathologies — capter les clients motivés via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Nutritionniste | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-nutritionniste' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un nutritionniste a-t-il besoin d\'un site internet dédié ?',
    answer: 'Oui, c\'est la première source de nouveaux clients pour un nutritionniste libéral. La plupart de vos clients vous choisissent activement (vous n\'êtes pas prescrit) et passent par Google avec des requêtes comme "nutritionniste + ville", "perte de poids + ville", "consultation nutrition". Un site bien référencé capte ces clients motivés avant vos concurrents.',
  },
  {
    question: 'Quelle différence avec un diététicien côté site ?',
    answer: 'Nutritionniste est un terme non réglementé, diététicien est un titre protégé. Les patients utilisent les deux indifféremment. Si vous êtes diététicien DE, je cible les deux requêtes (diététicien + nutritionniste) pour maximiser votre surface de visibilité. Si vous êtes médecin nutritionniste, on met en avant votre titre médical qui change la donne SEO.',
  },
  {
    question: 'La téléconsultation est-elle un vrai levier ?',
    answer: 'Oui, massivement. La nutrition se prête parfaitement à la téléconsultation (interrogatoire alimentaire, analyse du carnet, suivi à distance). Une page dédiée vous permet de capter des clients partout en France, pas seulement votre zone. Beaucoup de nutritionnistes doublent leur activité grâce à la téléconsultation valorisée sur leur site.',
  },
  {
    question: 'Comment éviter les promesses irréalistes sur la perte de poids ?',
    answer: 'En gardant un ton scientifique et basé sur les preuves. Pas d\'avant/après, pas de "perdez 10 kg en 2 mois", pas de régime miracle. Le ton sérieux convertit mieux auprès des gens fatigués des promesses. Les clients qui veulent du résultat durable cherchent justement des professionnels crédibles.',
  },
]

const config: MetierConfig = {
  metier: 'Nutritionniste',
  metierLower: 'nutritionniste',
  heroKicker: 'Sites web pour nutritionniste',
  heroHeadline: 'Site internet nutritionniste,',
  heroHeadlineItalic: 'un planning rempli de clients motivés',
  heroDescription:
    'Je crée des sites internet pour les nutritionnistes libéraux partout en France. Perte de poids, rééquilibrage alimentaire, nutrition sportive, téléconsultation, pathologies : chaque page capte une requête spécifique avec un ton sérieux et scientifique.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour nutritionniste',
  whatKicker: 'Sites web pour nutritionniste',
  whatTitle: 'Un nutritionniste trouvé',
  whatTitleItalic: 'par des clients lassés des régimes miracles',
  whatPara1:
    'Vos clients ne tombent pas par hasard sur vous : ils cherchent activement. Ils tapent "nutritionniste + leur ville", "perte de poids sérieuse", "rééquilibrage alimentaire", parfois après avoir essayé plusieurs régimes à la mode qui n\'ont pas marché. Ils veulent du professionnel, du scientifique, du durable. Le site qui leur plaît est celui qui parle un langage crédible, pas celui qui promet des miracles.',
  whatPara2:
    'Je construis des sites nutritionniste qui captent cette clientèle motivée. Pages par spécialité, approche basée sur les preuves, téléconsultation nationale, présentation de votre méthode. Le ton reste sérieux et professionnel, ce qui convertit mieux que les promesses creuses de la concurrence.',
  whatImageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour nutritionniste',
  pillars: [
    { icon: 'Target', title: 'Page par spécialité', desc: 'Perte de poids, sport, troubles alimentaires, pathologies : une requête = une page.' },
    { icon: 'FileSearch', title: 'Approche scientifique', desc: 'Ton sérieux, méthode explicitée, pas de promesses. Ce qui convertit auprès des clients mûrs.' },
    { icon: 'User', title: 'Téléconsultation nationale', desc: 'Page dédiée pour capter des clients hors zone. Doublement de l\'activité possible.' },
  ],
  whatFooterText:
    'Un nutritionniste bien référencé capte en moyenne 10 à 25 nouveaux clients par mois via Google après 3 mois.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre approche', description: 'Spécialités, méthode, tarifs, modalités (cabinet, visio, domicile), parcours, titre (DE ou médecin nutritionniste).' },
    { number: '02', title: 'Construction du site', description: 'Pages par spécialité, téléconsultation, approche scientifique, prise de rendez-vous intégrée.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premiers clients, ajustements selon les conversions observées.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des clients à un nutritionniste',
  keywordsIntro:
    'Les clients d\'un nutritionniste ont des objectifs variés : perdre du poids, reprendre le sport, gérer une pathologie, améliorer leur alimentation. Chaque objectif a sa requête.',
  keywordCategories: [
    { icon: 'Target', title: 'Poids', text: 'perdre du poids nutritionniste, rééquilibrage alimentaire, nutrition amaigrissement, maigrir durablement.' },
    { icon: 'Zap', title: 'Sport', text: 'nutrition sportive, nutritionniste trail, nutrition marathon, préparation compétition.' },
    { icon: 'User', title: 'Public', text: 'nutritionniste enfant, nutrition grossesse, nutrition ménopause, nutrition senior.' },
    { icon: 'FileSearch', title: 'Pathologies', text: 'nutrition diabète, cholestérol, intolérance gluten, SIBO, SOPK nutrition.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel de la nutrition ou du bien-être ?',
  relatedPara:
    'Les métiers autour de la nutrition ont une logique proche : sérieux, méthode, durabilité. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet diététicien', href: '/site-internet-dieteticien' },
    { label: 'Site internet coach nutrition', href: '/site-internet-coach-nutrition' },
    { label: 'Site internet micro-nutritionniste', href: '/site-internet-micro-nutritionniste' },
    { label: 'Site internet naturopathe', href: '/site-internet-naturopathe' },
  ],
  miniCtaText: 'Envie d\'un planning nutritionniste qui se remplit sans prospection ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Nutritionniste', description, '/site-internet-nutritionniste', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Nutritionniste', description, '/site-internet-nutritionniste'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Nutritionniste', path: '/site-internet-nutritionniste' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetNutritionnistePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

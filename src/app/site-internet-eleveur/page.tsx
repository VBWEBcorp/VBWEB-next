import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet éleveur : création de site web optimisé SEO. Viande bio, vente directe, colis, race, label, élevage respectueux — capter les amateurs de viande de qualité.'

export const metadata: Metadata = {
  title: 'Site Internet Éleveur | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-eleveur' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un éleveur peut-il vraiment vendre sa viande en direct via un site ?',
    answer: 'Oui, et de plus en plus. Les consommateurs veulent connaître l\'éleveur, comprendre comment la viande est produite, et éviter les intermédiaires. Ils cherchent "éleveur + ville", "viande producteur + région", "colis viande bœuf bio". Un site bien construit vous permet de vendre 50-90 % de votre production en direct, avec une marge doublée par rapport à la vente en coopérative.',
  },
  {
    question: 'Comment expliquer le système de colis de viande ?',
    answer: 'Par une page dédiée qui détaille tout : principe du colis (10 kg, 15 kg, 20 kg), répartition des morceaux (steaks, rôti, bourguignon, pot-au-feu), conditionnement (sous-vide, congelé), tarifs, modalités de retrait. Les nouveaux clients ont besoin de comprendre avant de réserver. Cette clarté débloque énormément de ventes.',
  },
  {
    question: 'La race et les labels sont-ils importants à valoriser ?',
    answer: 'Oui, c\'est souvent ce qui fait la différence. Limousine, Aubrac, Charolaise, Salers : chaque race a ses amateurs. Label Rouge, AOP, Bio : chaque label rassure. Une page dédiée à votre élevage, votre race, vos labels positionne votre production comme premium et justifie des tarifs supérieurs à ceux du supermarché.',
  },
  {
    question: 'Comment gérer la réservation à l\'avance ?',
    answer: 'Un colis de viande ne se vend pas comme un produit en stock : il faut réserver avant l\'abattage, parfois 2-3 mois à l\'avance. Une page "Réservation" qui explique le planning, les étapes, les délais permet aux clients de se positionner en avance. Vous pouvez aussi créer une liste d\'attente automatique pour les clients fidèles.',
  },
]

const config: MetierConfig = {
  metier: 'Éleveur',
  metierLower: 'éleveur',
  heroKicker: 'Sites web pour éleveur',
  heroHeadline: 'Site internet éleveur,',
  heroHeadlineItalic: 'une viande vendue au juste prix, directement du producteur',
  heroDescription:
    'Je crée des sites internet pour les éleveurs en vente directe partout en France. Viande bovine, ovine, porcine, labels, colis, bio : chaque page capte une clientèle qui veut connaître l\'éleveur et manger mieux.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour éleveur',
  whatKicker: 'Sites web pour éleveur',
  whatTitle: 'Un éleveur trouvé',
  whatTitleItalic: 'par des consommateurs exigeants sur la qualité',
  whatPara1:
    'Les consommateurs sont de plus en plus nombreux à vouloir connaître l\'origine de leur viande. Ils cherchent "éleveur + leur région", "viande producteur direct", "colis bœuf bio + département". Ils veulent voir les bêtes, comprendre l\'élevage, rencontrer l\'éleveur. Ils sont prêts à payer le juste prix pour de la qualité et de l\'éthique. Un site qui raconte votre travail les convertit en clients fidèles.',
  whatPara2:
    'Je construis des sites éleveur qui valorisent votre approche. Pages sur votre élevage (race, conduite, labels), système de colis expliqué, réservation en ligne, photos de la ferme, engagements bio ou Label Rouge. Un site authentique qui fidélise une clientèle qui commande à chaque abattage.',
  whatImageUrl: 'https://images.unsplash.com/photo-1526797138847-0b1adc5317b5?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour éleveur',
  pillars: [
    { icon: 'FileSearch', title: 'Colis expliqué', desc: 'Principe, morceaux, tarifs, conditionnement : clarté qui débloque les ventes.' },
    { icon: 'Target', title: 'Race et labels', desc: 'Limousine, Charolaise, Bio, Label Rouge : justifient les tarifs et fidélisent.' },
    { icon: 'User', title: 'Réservation avance', desc: 'Planning abattage, listes d\'attente : système qui organise la vente durable.' },
  ],
  whatFooterText:
    'Un éleveur bien référencé vend 50 à 90 % de sa production en direct, avec une marge doublée par rapport à la coopérative.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre élevage', description: 'Race, conduite d\'élevage, labels, bio, taille du cheptel, périodes d\'abattage, colis proposés, zones de livraison.' },
    { number: '02', title: 'Construction du site', description: 'Pages élevage, colis, labels, réservation, photos ferme. Ton authentique et engagé.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières réservations, fidélisation des clients.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des clients à un éleveur',
  keywordsIntro:
    'Les consommateurs cherchent par espèce, par label, par mode de production. Chaque requête reflète une exigence qualité.',
  keywordCategories: [
    { icon: 'Target', title: 'Général', text: 'éleveur + région, viande producteur, vente directe viande, éleveur bio + ville.' },
    { icon: 'FileSearch', title: 'Espèces', text: 'viande bœuf producteur, agneau producteur, porc fermier, veau producteur.' },
    { icon: 'Zap', title: 'Labels', text: 'viande Label Rouge, viande bio, viande AOP, viande Charolaise, viande Limousine.' },
    { icon: 'User', title: 'Format', text: 'colis viande bœuf, colis agneau, colis porc, demi-bête, quart arrière, réservation viande.' },
  ],
  relatedTitle: 'Vous êtes un autre producteur local ?',
  relatedPara:
    'Les métiers de producteurs locaux ont une logique proche : terroir, authenticité, vente directe. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet producteur', href: '/site-internet-producteur' },
    { label: 'Site internet producteur bio', href: '/site-internet-producteur-bio' },
    { label: 'Site internet maraîcher', href: '/site-internet-maraicher' },
    { label: 'Site internet ferme', href: '/site-internet-ferme' },
  ],
  miniCtaText: 'Envie de vendre votre viande en direct et doubler vos marges ?',
  caseStudiesKicker: 'Sites créés pour des producteurs',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Éleveur', description, '/site-internet-eleveur', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Éleveur', description, '/site-internet-eleveur'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Éleveur', path: '/site-internet-eleveur' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetEleveurPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

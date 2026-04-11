import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet nettoyage de vitres : création de site web optimisé SEO. Vitres particuliers, commerces, immeubles, nacelle, baies vitrées — capter les contrats via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Nettoyage de Vitres | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-nettoyage-vitres' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Le nettoyage de vitres est-il un marché viable en autonomie ?',
    answer: 'Oui, et de plus en plus de laveurs de vitres se spécialisent uniquement sur ce métier. Les paniers sont bons (120-400 euros par intervention selon la taille), les clients paient vite, et la concurrence locale est souvent faible sur ce créneau spécifique. Un site dédié "nettoyage de vitres + ville" capte une clientèle qui ne cherche pas une entreprise généraliste.',
  },
  {
    question: 'Particuliers ou professionnels, quelle priorité ?',
    answer: 'Les deux marchés sont complémentaires. Les particuliers (maisons avec baies vitrées) paient à l\'intervention ponctuelle. Les professionnels (commerces, bureaux, restaurants) paient à l\'abonnement mensuel ou hebdomadaire. Une page par segment permet de capter les deux clientèles sans dilution du message.',
  },
  {
    question: 'Les vitres en hauteur nécessitent-elles une page dédiée ?',
    answer: 'Oui, c\'est un vrai différenciateur. Les immeubles, les entreprises avec grandes baies, les bâtiments industriels ont besoin de nettoyage par nacelle, cordiste ou perche télescopique. Très peu d\'entreprises de nettoyage le proposent. Une page dédiée "Nettoyage vitres hauteur + votre zone" capte un marché premium peu concurrentiel.',
  },
  {
    question: 'Les contrats récurrents sont-ils à privilégier ?',
    answer: 'Oui, ce sont eux qui stabilisent l\'activité. Un restaurant qui signe un contrat mensuel à 150 € par mois représente 1 800 € par an de chiffre d\'affaires stable. Une page "Contrat régulier vitres" qui détaille les options de fréquence et les tarifs préférentiels transforme les visiteurs en abonnés plutôt qu\'en clients ponctuels.',
  },
]

const config: MetierConfig = {
  metier: 'Nettoyage de Vitres',
  metierLower: 'nettoyage de vitres',
  heroKicker: 'Sites web pour laveur de vitres',
  heroHeadline: 'Site internet nettoyage de vitres,',
  heroHeadlineItalic: 'un métier spécialisé, un marché à capter',
  heroDescription:
    'Je crée des sites internet pour les laveurs de vitres et entreprises spécialisées partout en France. Particuliers, commerces, immeubles, vitres en hauteur, contrats récurrents : chaque page capte les clients qui cherchent un spécialiste plutôt qu\'un généraliste.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour nettoyage de vitres',
  whatKicker: 'Sites web pour laveur de vitres',
  whatTitle: 'Un spécialiste vitres',
  whatTitleItalic: 'choisi avant l\'entreprise de nettoyage généraliste',
  whatPara1:
    'Les clients qui cherchent spécifiquement un nettoyeur de vitres savent ce qu\'ils veulent : un spécialiste formé, équipé (perche télescopique, perche à eau osmosée, nacelle si besoin), avec un vrai savoir-faire. Ils tapent "laveur de vitres + ville", "nettoyage vitres maison", "nettoyage vitres commerce". Ils préfèrent un vrai spécialiste à une entreprise de nettoyage généraliste qui fait ça à la marge.',
  whatPara2:
    'Je construis des sites laveur de vitres qui captent cette clientèle ciblée. Pages par segment (particuliers, commerces, immeubles, hauteur), contrats récurrents mis en avant, zones d\'intervention, photos de chantier. Un site qui positionne votre entreprise comme le référent local du métier.',
  whatImageUrl: 'https://images.unsplash.com/photo-1603712725140-51d3bab0bd57?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour nettoyage de vitres',
  pillars: [
    { icon: 'Target', title: 'Pages par segment', desc: 'Particuliers, commerces, immeubles : chaque clientèle a sa page et son approche.' },
    { icon: 'FileSearch', title: 'Vitres en hauteur', desc: 'Nacelle, cordiste, perche : marché premium peu concurrentiel à valoriser.' },
    { icon: 'TrendingUp', title: 'Contrats récurrents', desc: 'Mensuel pour commerces, trimestriel pour particuliers : chiffre d\'affaires stable.' },
  ],
  whatFooterText:
    'Un laveur de vitres bien référencé signe 10 à 25 contrats récurrents et capte 30-60 interventions par mois.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre offre', description: 'Segments ciblés (particulier, pro, hauteur), équipement, zones, tarifs, contrats proposés.' },
    { number: '02', title: 'Construction du site', description: 'Pages par segment, hauteur, contrats, tarifs, formulaire de demande simple.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières prises de contact, ajustements saisonniers.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des contrats nettoyage vitres',
  keywordsIntro:
    'Les clients de nettoyage de vitres cherchent selon leur profil (particulier ou pro), la hauteur, la fréquence souhaitée.',
  keywordCategories: [
    { icon: 'User', title: 'Particuliers', text: 'nettoyage vitres maison, laveur de vitres particulier, nettoyage baies vitrées.' },
    { icon: 'Target', title: 'Professionnels', text: 'nettoyage vitres commerce, nettoyage vitrine magasin, nettoyage vitres restaurant, bureaux.' },
    { icon: 'Zap', title: 'Hauteur', text: 'nettoyage vitres immeuble, nettoyage vitres hauteur, nacelle vitres, cordiste vitres.' },
    { icon: 'FileSearch', title: 'Contrat', text: 'contrat nettoyage vitres, abonnement nettoyage vitres, nettoyage régulier vitres.' },
  ],
  relatedTitle: 'Vous proposez d\'autres services de nettoyage ?',
  relatedPara:
    'Les métiers du nettoyage ont une logique proche : segments, récurrent, technique. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet entreprise de nettoyage', href: '/site-internet-entreprise-nettoyage' },
    { label: 'Site internet nettoyage industriel', href: '/site-internet-nettoyage-industriel' },
    { label: 'Site internet ménage professionnel', href: '/site-internet-menage-professionnel' },
    { label: 'Site internet entretien bureaux', href: '/site-internet-entretien-bureaux' },
  ],
  miniCtaText: 'Envie de capter les contrats vitres dans votre zone avant les généralistes ?',
  caseStudiesKicker: 'Sites créés pour des prestataires',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Nettoyage de Vitres', description, '/site-internet-nettoyage-vitres', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Nettoyage de Vitres', description, '/site-internet-nettoyage-vitres'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Nettoyage de Vitres', path: '/site-internet-nettoyage-vitres' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetNettoyageVitresPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

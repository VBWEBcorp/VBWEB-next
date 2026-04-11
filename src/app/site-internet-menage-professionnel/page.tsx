import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet ménage professionnel : création de site web optimisé SEO. Bureaux, cabinets, commerces, résidences, grand ménage, écologique — capter les contrats via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Ménage Professionnel | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-menage-professionnel' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Ménage professionnel ou entreprise de nettoyage ?',
    answer: 'Les deux termes désignent la même activité mais attirent des clientèles légèrement différentes. "Ménage professionnel" est plus souvent tapé par des petites structures (cabinet médical, cabinet d\'avocat, petit commerce) qui cherchent une prestation qualitative. "Entreprise de nettoyage" est plutôt cherché par des structures plus grandes. Une page dédiée à chaque terme capte les deux audiences.',
  },
  {
    question: 'Les cabinets médicaux et libéraux sont-ils une niche intéressante ?',
    answer: 'Énormément. Ils ont des exigences spécifiques (hygiène renforcée, discrétion, horaires hors consultation) et cherchent des prestataires spécialisés. "Ménage cabinet médical + ville", "nettoyage cabinet dentaire", "entretien cabinet d\'avocat" sont des requêtes qualifiées avec peu de concurrence. Ce sont des contrats fidèles sur plusieurs années.',
  },
  {
    question: 'Le ménage écologique est-il un vrai levier ?',
    answer: 'Oui, en forte croissance. Les entreprises responsables cherchent des prestataires qui utilisent des produits écolabellisés, de la microfibre, des dosages concentrés. Une page "Ménage écologique + votre zone" capte cette clientèle RSE et vous différencie des concurrents traditionnels.',
  },
  {
    question: 'Le grand ménage ponctuel est-il un bon levier ?',
    answer: 'Oui, et souvent sous-exploité. Fin de bail, déménagement, remise à neuf, préparation d\'une vente : les demandes de grand ménage sont ponctuelles mais très rémunératrices (300-800 € par intervention). Une page dédiée capte ces demandes urgentes qui complètent votre activité récurrente.',
  },
]

const config: MetierConfig = {
  metier: 'Ménage Professionnel',
  metierLower: 'ménage professionnel',
  heroKicker: 'Sites web pour ménage professionnel',
  heroHeadline: 'Site internet ménage professionnel,',
  heroHeadlineItalic: 'des contrats qualitatifs sur des niches rentables',
  heroDescription:
    'Je crée des sites internet pour les prestataires de ménage professionnel partout en France. Bureaux, cabinets médicaux, commerces, résidences, écologique : chaque page capte des contrats B2B qualitatifs.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour ménage professionnel',
  whatKicker: 'Sites web pour ménage professionnel',
  whatTitle: 'Un ménage professionnel',
  whatTitleItalic: 'choisi pour sa qualité, pas pour son prix',
  whatPara1:
    'Les prestataires de ménage professionnel qui gagnent ne sont pas ceux qui cassent les prix mais ceux qui valorisent leur qualité : formation du personnel, produits sélectionnés, discrétion, ponctualité, engagement environnemental. Les clients qui cherchent "ménage professionnel + leur ville" ne sont pas les mêmes que ceux qui cherchent juste le moins cher : ils veulent un partenaire fiable et professionnel.',
  whatPara2:
    'Je construis des sites ménage professionnel qui mettent en avant votre qualité. Pages par niche (cabinet médical, cabinet d\'avocat, commerce, résidence), ménage écologique, grand ménage ponctuel, engagements qualité. Un positionnement qui justifie des tarifs supérieurs et attire des clients fidèles.',
  whatImageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour ménage professionnel',
  pillars: [
    { icon: 'Target', title: 'Pages par niche', desc: 'Cabinets médicaux, libéraux, commerces : chaque niche a ses exigences et ses requêtes.' },
    { icon: 'FileSearch', title: 'Ménage écologique', desc: 'Levier RSE en forte croissance. Différenciation qui justifie un tarif premium.' },
    { icon: 'User', title: 'Grand ménage ponctuel', desc: 'Fin de bail, déménagement : interventions rémunératrices complémentaires.' },
  ],
  whatFooterText:
    'Un prestataire ménage professionnel bien référencé signe 10 à 25 contrats récurrents par an via Google.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre offre', description: 'Niches ciblées, engagements qualité (écologique, formation, produits), zones, tarifs, effectif.' },
    { number: '02', title: 'Construction du site', description: 'Pages par niche, écologique, grand ménage, certifications si existantes, formulaire de devis.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières demandes qualifiées, suivi des conversions.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des contrats ménage professionnel',
  keywordsIntro:
    'Les clients de ménage professionnel cherchent selon leur type d\'établissement et leurs exigences qualité.',
  keywordCategories: [
    { icon: 'Target', title: 'Niches', text: 'ménage cabinet médical, ménage cabinet avocat, ménage commerce, ménage boutique.' },
    { icon: 'User', title: 'Résidentiel', text: 'ménage résidence, ménage parties communes, ménage syndic, ménage copropriété.' },
    { icon: 'Zap', title: 'Ponctuel', text: 'grand ménage, ménage fin de bail, ménage déménagement, ménage exceptionnel.' },
    { icon: 'FileSearch', title: 'Qualité', text: 'ménage écologique, ménage bio, produits écolabellisés, nettoyage responsable.' },
  ],
  relatedTitle: 'Vous proposez d\'autres services de nettoyage ?',
  relatedPara:
    'Les métiers du nettoyage ont une logique proche : qualité, niches, récurrent. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet entreprise de nettoyage', href: '/site-internet-entreprise-nettoyage' },
    { label: 'Site internet nettoyage industriel', href: '/site-internet-nettoyage-industriel' },
    { label: 'Site internet nettoyage vitres', href: '/site-internet-nettoyage-vitres' },
    { label: 'Site internet entretien bureaux', href: '/site-internet-entretien-bureaux' },
  ],
  miniCtaText: 'Envie de vendre votre qualité plutôt que votre prix sur le marché ménage ?',
  caseStudiesKicker: 'Sites créés pour des prestataires',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Ménage Professionnel', description, '/site-internet-menage-professionnel', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Ménage Professionnel', description, '/site-internet-menage-professionnel'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Ménage Professionnel', path: '/site-internet-menage-professionnel' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetMenageProfessionnelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

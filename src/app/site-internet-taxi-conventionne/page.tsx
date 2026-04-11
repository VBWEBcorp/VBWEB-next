import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet taxi conventionné : création de site web optimisé SEO. Transport CPAM, dialyse, chimio, consultation, VSL — capter les patients et secrétariats médicaux.'

export const metadata: Metadata = {
  title: 'Site Internet Taxi Conventionné | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-taxi-conventionne' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Le taxi conventionné CPAM est-il un vrai marché récurrent ?',
    answer: 'Oui, probablement le plus stable du secteur taxi. Un patient en dialyse fait 3 aller-retours par semaine pendant des années. Un patient en chimio fait des cycles réguliers. Un transport conventionné vaut 25-60 euros par trajet, soit 1 000-4 000 euros par mois et par patient fidèle. Plusieurs patients fidèles remplissent votre planning sans publicité.',
  },
  {
    question: 'Comment capter les patients plutôt que les applis ?',
    answer: 'Par un site qui explique clairement le conventionnement et rassure. Les patients sont souvent âgés, fragiles, et ils veulent un chauffeur de confiance, pas un inconnu via appli. Une page qui explique votre approche humaine (aide à monter, attente pendant le rendez-vous, conversation, régularité) fait la différence.',
  },
  {
    question: 'Les secrétariats médicaux sont-ils aussi des cibles ?',
    answer: 'Oui, et souvent la cible la plus rentable. Les secrétariats de dialyse, oncologie, néphrologie organisent souvent les transports pour leurs patients. Une page B2B "Partenariat centres médicaux" qui explique votre fiabilité, votre disponibilité, votre système de facturation CPAM peut vous amener des contrats de plusieurs dizaines de patients d\'un coup.',
  },
  {
    question: 'VSL ou taxi conventionné : quelle différence ?',
    answer: 'Le VSL (Véhicule Sanitaire Léger) est un véhicule spécifiquement agréé pour le transport médical, avec des normes précises. Le taxi conventionné est un taxi classique qui a signé une convention CPAM. Les patients utilisent parfois les deux termes sans distinction. Je cible les deux requêtes sur votre site pour capter les deux audiences.',
  },
]

const config: MetierConfig = {
  metier: 'Taxi Conventionné',
  metierLower: 'taxi conventionné',
  heroKicker: 'Sites web pour taxi conventionné',
  heroHeadline: 'Site internet taxi conventionné,',
  heroHeadlineItalic: 'un planning rempli de patients fidèles',
  heroDescription:
    'Je crée des sites internet pour les taxis conventionnés CPAM partout en France. Dialyse, chimio, consultations, VSL, partenariats médicaux : chaque page capte patients et secrétariats pour un chiffre d\'affaires stable.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour taxi conventionné',
  whatKicker: 'Sites web pour taxi conventionné',
  whatTitle: 'Un taxi conventionné',
  whatTitleItalic: 'choisi pour sa fiabilité et son humanité',
  whatPara1:
    'Le transport médical conventionné est la partie la plus stable de l\'activité taxi. Les patients qui font des traitements réguliers (dialyse, chimio, rééducation) cherchent un chauffeur de confiance qu\'ils gardent des années. Ils tapent "taxi conventionné + ville", "taxi dialyse + ville", "VSL + ville" et choisissent celui qui inspire le plus confiance. Une fois choisis, vous êtes souvent leur chauffeur pour longtemps.',
  whatPara2:
    'Je construis des sites taxi conventionné qui captent ces patients et les secrétariats médicaux qui organisent leurs transports. Ton humain et rassurant, présentation du chauffeur, certifications CPAM mises en avant, partenariats centres médicaux, contact direct. Un site qui remplit votre planning avec des clients fidèles sur plusieurs années.',
  whatImageUrl: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour taxi conventionné',
  pillars: [
    { icon: 'User', title: 'Ton rassurant', desc: 'Les patients fragiles cherchent un chauffeur humain, pas une course anonyme.' },
    { icon: 'Target', title: 'Page secrétariats', desc: 'B2B médical : partenariats qui ramènent des dizaines de patients d\'un coup.' },
    { icon: 'FileSearch', title: 'Conventionnement CPAM', desc: 'Mise en avant claire pour capter les requêtes "conventionné" et rassurer.' },
  ],
  whatFooterText:
    'Un taxi conventionné bien référencé stabilise son activité avec 15-40 patients récurrents à long terme.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre activité', description: 'Types de transports médicaux (dialyse, chimio, consultation, hospitalisation), zones, conventions, partenariats existants, véhicule.' },
    { number: '02', title: 'Construction du site', description: 'Ton rassurant, page patients, page secrétariats, conventionnement, contact direct, témoignages anonymisés.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières prises de contact, fidélisation des patients récurrents.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des patients à un taxi conventionné',
  keywordsIntro:
    'Les patients et leurs familles cherchent selon la pathologie et le type de transport. Chaque requête correspond à un besoin médical précis.',
  keywordCategories: [
    { icon: 'FileSearch', title: 'Général', text: 'taxi conventionné + ville, taxi CPAM, transport médical, VSL + ville.' },
    { icon: 'Target', title: 'Pathologies', text: 'taxi dialyse, taxi chimio, taxi radiothérapie, taxi neurologie.' },
    { icon: 'User', title: 'Parcours', text: 'transport consultation, transport hospitalisation, taxi hospitalisation jour, retour domicile hôpital.' },
    { icon: 'Zap', title: 'Besoins', text: 'transport médical personnes âgées, taxi assis professionnel, VSL couché.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel du transport de personnes ?',
  relatedPara:
    'Les métiers de transport de personnes ont une logique proche : confiance, fidélisation, récurrence. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet taxi', href: '/site-internet-taxi' },
    { label: 'Site internet VTC', href: '/site-internet-vtc' },
    { label: 'Site internet chauffeur privé', href: '/site-internet-chauffeur-prive' },
    { label: 'Site internet transport aéroport', href: '/site-internet-transport-aeroport' },
  ],
  miniCtaText: 'Envie d\'un planning taxi stabilisé par des patients fidèles sur plusieurs années ?',
  caseStudiesKicker: 'Sites créés pour des prestataires',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Taxi Conventionné', description, '/site-internet-taxi-conventionne', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Taxi Conventionné', description, '/site-internet-taxi-conventionne'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Taxi Conventionné', path: '/site-internet-taxi-conventionne' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetTaxiConventionnePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

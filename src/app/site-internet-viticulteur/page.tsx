import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet viticulteur : création de site web optimisé SEO. Domaine, vente directe, cuvées, dégustation, œnotourisme, bio — capter amateurs et particuliers via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Viticulteur | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-viticulteur' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un viticulteur indépendant a-t-il besoin d\'un site ?',
    answer: 'Oui, massivement. La vente directe représente une part croissante du chiffre d\'affaires des domaines indépendants. Les amateurs cherchent activement "domaine + région", "acheter vin producteur", "dégustation vin + région", "œnotourisme". Ils veulent découvrir le domaine, comprendre la démarche, acheter directement. Sans site, vous dépendez uniquement des cavistes et des salons.',
  },
  {
    question: 'Cuvées, millésimes : comment présenter le catalogue ?',
    answer: 'Par une page par cuvée avec sa fiche complète : cépages, terroir, méthode, note de dégustation, accords mets-vins, millésimes disponibles. Les amateurs lisent attentivement ces fiches avant d\'acheter. Elles positionnent votre domaine comme sérieux et professionnel, et justifient les tarifs par la qualité de description.',
  },
  {
    question: 'L\'œnotourisme est-il un levier sérieux ?',
    answer: 'Énorme. Les visiteurs de vignobles, les amateurs qui viennent en week-end, les touristes qui veulent des expériences. Les requêtes "visite domaine + région", "dégustation vin + ville", "œnotourisme + région" sont en forte croissance. Une page œnotourisme avec réservation en ligne des visites peut générer des dizaines de réservations par mois, avec achat de vin à la clé.',
  },
  {
    question: 'Vendre en ligne avec expédition, c\'est compliqué ?',
    answer: 'Plus que pour d\'autres produits à cause des droits d\'accises, mais c\'est tout à fait faisable. Je peux intégrer une boutique avec gestion des accises pour la France et l\'export. Attention aux expéditions internationales qui demandent des autorisations spécifiques. Un site vitrine avec commande par email reste une option plus simple si la vente en ligne complète est trop lourde.',
  },
]

const config: MetierConfig = {
  metier: 'Viticulteur',
  metierLower: 'viticulteur',
  heroKicker: 'Sites web pour viticulteur',
  heroHeadline: 'Site internet viticulteur,',
  heroHeadlineItalic: 'des amateurs qui achètent directement au domaine',
  heroDescription:
    'Je crée des sites internet pour les viticulteurs et domaines indépendants partout en France. Cuvées, dégustations, œnotourisme, vente directe, bio : chaque page capte une clientèle d\'amateurs prête à acheter et visiter.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour viticulteur',
  whatKicker: 'Sites web pour viticulteur',
  whatTitle: 'Un domaine viticole',
  whatTitleItalic: 'qui se découvre et se visite en ligne',
  whatPara1:
    'Les amateurs de vin cherchent de plus en plus à acheter directement aux producteurs. Ils tapent "domaine + région", "viticulteur indépendant", "œnotourisme + région", "dégustation cave". Ils veulent connaître le domaine, comprendre la philosophie du vigneron, planifier une visite, acheter en direct. Un site qui raconte votre passion et votre terroir vous place en tête de leurs recherches.',
  whatPara2:
    'Je construis des sites viticulteur qui valorisent votre domaine avec élégance. Présentation du vigneron et de l\'histoire, pages par cuvée avec fiches techniques, œnotourisme avec réservation, engagements bio éventuels, boutique si vous le souhaitez. Un site qui transforme les amateurs en clients fidèles sur plusieurs années.',
  whatImageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour viticulteur',
  pillars: [
    { icon: 'FileSearch', title: 'Fiche par cuvée', desc: 'Cépages, terroir, dégustation, accords : positionnement premium qui justifie les tarifs.' },
    { icon: 'MapPin', title: 'Œnotourisme', desc: 'Visites, dégustations, réservation en ligne : source de visites et de ventes directes.' },
    { icon: 'User', title: 'Histoire du vigneron', desc: 'Votre parcours, votre philosophie, votre terroir : ce qui crée l\'attachement au domaine.' },
  ],
  whatFooterText:
    'Un viticulteur bien référencé double en moyenne sa vente directe et remplit ses visites œnotouristiques.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre domaine', description: 'Appellations, cuvées, millésimes, méthode (bio, biodynamie, conventionnel), œnotourisme, points de vente.' },
    { number: '02', title: 'Construction du site', description: 'Histoire, pages cuvées, œnotourisme, boutique éventuelle, photos du domaine, élégance graphique.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premiers visiteurs et acheteurs, fidélisation des amateurs.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des amateurs à un viticulteur',
  keywordsIntro:
    'Les amateurs cherchent selon l\'appellation, le type de vin, le mode de production, ou le projet (achat, visite).',
  keywordCategories: [
    { icon: 'Target', title: 'Domaine', text: 'domaine viticole + région, viticulteur indépendant, vigneron + appellation, cave particulière.' },
    { icon: 'FileSearch', title: 'Achat', text: 'acheter vin producteur, vin direct domaine, cave à vin + région, commander vin propriété.' },
    { icon: 'MapPin', title: 'Tourisme', text: 'visite domaine + région, dégustation vin + ville, œnotourisme, route des vins + région.' },
    { icon: 'User', title: 'Production', text: 'vin bio + région, vin biodynamie, vin nature, vin sans sulfites, vin artisan.' },
  ],
  relatedTitle: 'Vous êtes un autre producteur local ?',
  relatedPara:
    'Les métiers de producteurs locaux ont une logique proche : terroir, authenticité, vente directe. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet producteur', href: '/site-internet-producteur' },
    { label: 'Site internet producteur bio', href: '/site-internet-producteur-bio' },
    { label: 'Site internet maraîcher', href: '/site-internet-maraicher' },
    { label: 'Site internet apiculteur', href: '/site-internet-apiculteur' },
  ],
  miniCtaText: 'Envie de doubler votre vente directe et remplir vos visites de domaine ?',
  caseStudiesKicker: 'Sites créés pour des producteurs',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Viticulteur', description, '/site-internet-viticulteur', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Viticulteur', description, '/site-internet-viticulteur'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Viticulteur', path: '/site-internet-viticulteur' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetViticulteurPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

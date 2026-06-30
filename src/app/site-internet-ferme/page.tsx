import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet ferme : création de site web optimisé SEO. Vente à la ferme, produits fermiers, visite, agritourisme, ferme pédagogique — capter visiteurs et acheteurs via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Ferme | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-ferme' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Une ferme a-t-elle besoin d\'un site au-delà des produits vendus ?',
    answer: 'Oui, et pour plusieurs raisons. Au-delà de la vente directe (qui justifie déjà un site), une ferme peut proposer des visites, de la ferme pédagogique, des chambres d\'hôtes, du gîte rural, de l\'agritourisme. Toutes ces activités se cherchent sur Google : "visite ferme + région", "ferme pédagogique enfants", "chambre hôte à la ferme". Chaque activité est une page, chaque page est un flux de clients.',
  },
  {
    question: 'La ferme pédagogique est-elle un vrai marché ?',
    answer: 'Énorme. Les écoles, centres de loisirs, associations cherchent activement des fermes pédagogiques pour leurs sorties. Les familles cherchent aussi des activités week-end. Les requêtes "ferme pédagogique + département", "visite ferme enfants", "sortie scolaire ferme" sont massives. Une page dédiée peut générer 50-150 visites par an, avec des groupes payants (10-25 € par enfant).',
  },
  {
    question: 'L\'agritourisme est-il rentable ?',
    answer: 'Oui, notamment via les chambres d\'hôtes et gîtes à la ferme. Les touristes cherchent "gîte rural", "chambre hôte ferme", "séjour à la ferme". Ces hébergements génèrent des revenus complémentaires (80-200 € la nuit) et attirent une clientèle qui achète ensuite vos produits. Une page bien construite remplit la haute saison sans dépendre de Booking ou Airbnb.',
  },
  {
    question: 'Comment organiser toutes ces activités sur un seul site ?',
    answer: 'Avec une page d\'accueil claire qui présente la ferme et ses activités, puis une page par activité : vente directe, visite pédagogique, chambres d\'hôtes, gîte, événements, produits. Cette structure permet aux visiteurs de trouver ce qu\'ils cherchent et à Google de comprendre votre offre complète. Chaque page remonte sur ses requêtes.',
  },
]

const config: MetierConfig = {
  metier: 'Ferme',
  metierLower: 'ferme',
  heroKicker: 'Sites web pour ferme',
  heroHeadline: 'Site internet ferme,',
  heroHeadlineItalic: 'une vitrine complète pour toutes vos activités',
  heroDescription:
    'Je crée des sites internet pour les fermes partout en France. Vente directe, visites, ferme pédagogique, chambres d\'hôtes, gîte, agritourisme : chaque page capte une clientèle différente pour remplir toutes vos activités.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour ferme',
  whatKicker: 'Sites web pour ferme',
  whatTitle: 'Une ferme vivante',
  whatTitleItalic: 'qui fait vivre plusieurs activités à la fois',
  whatPara1:
    'Une ferme moderne ne se résume plus à la production : vente directe, visites, ferme pédagogique, chambres d\'hôtes, gîte, événements, animations. Chaque activité apporte son flux de revenus, et chaque activité a ses clients qui cherchent sur Google. Sans site qui couvre toutes ces dimensions, vous laissez passer des opportunités.',
  whatPara2:
    'Je construis des sites ferme qui valorisent toutes vos activités. Vente directe, visites pédagogiques, agritourisme, événements, produits : chaque activité a sa page dédiée pour remonter sur ses requêtes. Un site qui transforme votre ferme en destination locale plutôt qu\'un simple lieu de production.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1500382017468-9049fed747ef-w800.webp',
  whatImageAlt: 'Création site internet pour ferme',
  pillars: [
    { icon: 'Target', title: 'Page par activité', desc: 'Vente, visites, pédagogique, hébergement : chaque activité capte sa clientèle propre.' },
    { icon: 'User', title: 'Ferme pédagogique', desc: 'Écoles, familles, associations : flux constant de visites à 10-25 €/personne.' },
    { icon: 'MapPin', title: 'Agritourisme', desc: 'Chambres, gîtes : complément de revenus premium qui attire aussi les acheteurs.' },
  ],
  whatFooterText:
    'Une ferme bien référencée développe 2-4 nouvelles activités rentables en complément de la vente directe.',
  timelineSteps: [
    { number: '01', title: 'On cadre toutes vos activités', description: 'Production, vente directe, visites, pédagogique, hébergement, événements, histoire, zones.' },
    { number: '02', title: 'Construction du site', description: 'Pages par activité, photos, réservation des visites et hébergements, vente directe, histoire.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premiers visiteurs et clients, développement des activités complémentaires.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des visiteurs et clients à une ferme',
  keywordsIntro:
    'Les requêtes autour d\'une ferme sont variées selon l\'intention : acheter, visiter, loger, apprendre avec les enfants.',
  keywordCategories: [
    { icon: 'Target', title: 'Vente', text: 'ferme + ville, vente à la ferme, produits fermiers, produits ferme + région.' },
    { icon: 'User', title: 'Pédagogique', text: 'ferme pédagogique + département, visite ferme enfants, sortie scolaire ferme.' },
    { icon: 'MapPin', title: 'Tourisme', text: 'gîte rural + région, chambre d\'hôte à la ferme, séjour à la ferme, agritourisme.' },
    { icon: 'Zap', title: 'Événements', text: 'marché fermier, fête de la ferme, animations ferme, journées portes ouvertes.' },
  ],
  relatedTitle: 'Vous êtes un autre producteur ou acteur rural ?',
  relatedPara:
    'Les métiers ruraux ont une logique proche : authenticité, diversification, ancrage local. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet producteur', href: '/site-internet-producteur' },
    { label: 'Site internet producteur bio', href: '/site-internet-producteur-bio' },
    { label: 'Site internet maraîcher', href: '/site-internet-maraicher' },
    { label: 'Site internet éleveur', href: '/site-internet-eleveur' },
  ],
  miniCtaText: 'Envie de transformer votre ferme en destination pour visiteurs, acheteurs et familles ?',
  caseStudiesKicker: 'Sites créés pour des producteurs',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Ferme', description, '/site-internet-ferme', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Ferme', description, '/site-internet-ferme'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Ferme', path: '/site-internet-ferme' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetFermePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

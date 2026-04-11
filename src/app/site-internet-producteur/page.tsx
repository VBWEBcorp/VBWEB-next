import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet producteur : création de site web optimisé SEO pour producteurs locaux, maraîchers, apiculteurs, viticulteurs, éleveurs. Vente directe, marchés, panier, drive fermier — capter les clients via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Producteur | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-producteur' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un producteur local a-t-il vraiment besoin d\'un site internet ?',
    answer: 'Oui, et c\'est devenu un vrai levier de vente directe depuis quelques années. Les consommateurs cherchent activement des producteurs locaux sur Google : "producteur + ville", "maraîcher bio + département", "drive fermier", "panier légumes producteur". Un site bien construit vous amène une clientèle fidèle qui achète en direct à la ferme, sur les marchés ou via un drive fermier — et qui devient souvent une clientèle récurrente sur des années.',
  },
  {
    question: 'Combien coûte un site internet pour un producteur ou un maraîcher ?',
    answer: 'Un site vitrine complet démarre à 1 400 euros. Il inclut la présentation de votre ferme et votre histoire, une page par activité (légumes, fruits, miel, vin, œufs, viande, etc.), les points de vente (sur la ferme, marchés, AMAP, drive fermier), les horaires d\'ouverture saisonnière et une fiche Google Business optimisée pour le local.',
  },
  {
    question: 'Dois-je aussi vendre en ligne ou juste présenter la ferme ?',
    answer: 'Les deux sont possibles. Un site vitrine simple suffit pour beaucoup de producteurs : il amène des clients sur la ferme, aux marchés ou au drive fermier. Si vous souhaitez vendre en ligne avec paiement et livraison, je peux intégrer une boutique (WooCommerce par exemple) pour les paniers hebdomadaires ou les commandes ponctuelles. On peut commencer simple et faire évoluer plus tard si la demande est là.',
  },
  {
    question: 'Comment capter les clients qui cherchent "drive fermier" ou "panier producteur" ?',
    answer: 'Par une page dédiée avec votre point de retrait, vos horaires, le contenu des paniers disponibles, les modalités de commande. C\'est une requête très locale et très qualifiée : les gens qui la tapent sont prêts à venir chez vous la semaine même. Je structure votre site pour remonter sur "drive fermier + votre zone" et variantes, et je connecte éventuellement à une solution de réservation en ligne.',
  },
  {
    question: 'Les labels (bio, HVE, Label Rouge, AOP) sont-ils importants sur le site ?',
    answer: 'Absolument. Les labels sont un critère de choix majeur pour une clientèle sensibilisée. Je crée une page dédiée qui explique chacun de vos labels (ce qu\'ils signifient, pourquoi vous les avez obtenus, ce qu\'ils garantissent concrètement), avec les logos officiels. Cela rassure les clients et vous différencie des producteurs non labellisés, tout en aidant au référencement sur les requêtes "producteur bio + ville".',
  },
  {
    question: 'Je vends surtout sur les marchés, le site est-il vraiment utile ?',
    answer: 'Très utile. Un site bien référencé amène de nouveaux clients sur votre stand du marché : "quel maraîcher bio au marché de X ?", "producteur marché + ville" sont des recherches très fréquentes. Je mets en avant votre calendrier des marchés (jour, heure, emplacement exact) et vos spécialités. Beaucoup de producteurs voient leur stand se remplir de nouveaux visages après quelques mois de site en ligne.',
  },
  {
    question: 'Est-ce que vous gérez les photos de la ferme et des produits ?',
    answer: 'Je ne prends pas les photos moi-même, mais je vous guide sur comment les prendre avec un smartphone : lumière naturelle, angles qui mettent la production en valeur, photos de la ferme, portraits du producteur. Les clients adorent voir les coulisses. Je retravaille ensuite les photos pour qu\'elles soient optimisées pour le web et je les intègre de manière soignée.',
  },
]

const config: MetierConfig = {
  metier: 'Producteur',
  metierLower: 'producteur',
  heroKicker: 'Sites web pour producteur local',
  heroHeadline: 'Site internet producteur,',
  heroHeadlineItalic: 'une clientèle locale qui vient à la ferme',
  heroDescription:
    'Je crée des sites internet pour les producteurs locaux, maraîchers, apiculteurs, viticulteurs et éleveurs partout en France. Vente directe, marchés, drive fermier, paniers : chaque page capte une requête Google et amène des clients fidèles à votre ferme.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour producteur',
  whatKicker: 'Sites web pour producteur',
  whatTitle: 'Une ferme qu\'on trouve',
  whatTitleItalic: 'quand on cherche du vrai produit local',
  whatPara1:
    'Les consommateurs veulent manger local. Ils cherchent activement "producteur + leur ville", "maraîcher bio + département", "drive fermier proche", "panier légumes producteur". Ce sont des clients fidèles et motivés : une fois qu\'ils ont trouvé leur producteur, ils reviennent chaque semaine pendant des années. La seule question est : est-ce qu\'ils vous trouvent, ou est-ce qu\'ils trouvent un confrère mieux référencé ?',
  whatPara2:
    'Je construis des sites producteur qui captent cette clientèle locale. Une présentation authentique de votre ferme et votre histoire, une page par activité (maraîchage, élevage, apiculture, viticulture), les points de vente clairement indiqués (ferme, marchés, AMAP, drive), vos labels mis en avant, et une fiche Google Business optimisée pour remonter sur les requêtes locales. Le tout avec des textes qui racontent votre métier sans faire commercial.',
  whatImageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour producteur local',
  pillars: [
    { icon: 'MapPin', title: 'Points de vente clairs', desc: 'Ferme, marchés, AMAP, drive : chaque point avec horaires, adresse et accès. Le client vient directement.' },
    { icon: 'FileSearch', title: 'Labels valorisés', desc: 'Bio, HVE, AOP, Label Rouge : ce qui différencie et fait préférer votre production à celle du supermarché.' },
    { icon: 'User', title: 'Histoire authentique', desc: 'Ton humain, histoire de la ferme, photos du quotidien. C\'est ce qui crée l\'attachement client.' },
  ],
  whatFooterText:
    'Un producteur bien référencé capte en moyenne 20 à 60 nouveaux clients par saison via Google et voit son drive ou ses paniers remplis.',
  timelineSteps: [
    { number: '01', title: 'On parle de votre ferme', description: 'Votre production (légumes, fruits, miel, viande, vin, œufs), vos labels, vos points de vente, votre calendrier (saisonnalité, marchés), votre histoire. Je repère ce qui fait votre singularité.' },
    { number: '02', title: 'Construction du site', description: 'Présentation de la ferme, pages produits, points de vente, calendrier marchés, labels, photos. Rédaction authentique sans ton commercial. Vous validez chaque page.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Site en ligne, fiche Google Business optimisée avec horaires d\'ouverture à la ferme, premières visites et commandes. On suit les retours et on ajuste les pages produits qui attirent le moins.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des clients à la ferme',
  keywordsIntro:
    'Les requêtes des consommateurs locavores sont très précises : ils cherchent un type de produit, un label, un point de vente. Je structure votre site pour capter ces recherches qui convertissent en vraies visites à la ferme ou en commandes.',
  keywordCategories: [
    { icon: 'Target', title: 'Vente directe', text: 'vente directe producteur, producteur à la ferme, producteur local, producteur + ville.' },
    { icon: 'Zap', title: 'Drive / Panier', text: 'drive fermier, panier légumes producteur, panier bio, AMAP + ville, commande panier ferme.' },
    { icon: 'MapPin', title: 'Marchés', text: 'producteur marché + ville, maraîcher marché, stand marché producteur, jour marché + ville.' },
    { icon: 'User', title: 'Spécifique', text: 'producteur bio, maraîcher bio, miel producteur, œufs ferme, viande producteur, vin domaine.' },
  ],
  relatedTitle: 'Vous êtes un autre acteur du circuit court ou du commerce de bouche ?',
  relatedPara:
    'Les métiers du circuit court et du commerce local ont une logique SEO proche : valoriser le terroir, mettre en avant les labels, capter des clients fidèles via Google. Voici les autres pages métiers disponibles.',
  relatedLinks: [
    { label: 'Site internet boulanger', href: '/site-internet-boulanger' },
    { label: 'Site internet fleuriste', href: '/site-internet-fleuriste' },
    { label: 'Site internet restaurant', href: '/site-internet-restaurant' },
    { label: 'Site internet paysagiste', href: '/site-internet-paysagiste' },
  ],
  miniCtaText: 'Envie d\'une clientèle locale qui revient chaque semaine à la ferme ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Producteur', description, '/site-internet-producteur', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Producteur', description, '/site-internet-producteur'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Producteur', path: '/site-internet-producteur' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetProducteurPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

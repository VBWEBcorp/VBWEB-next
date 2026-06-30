import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet pisciniste : création de site web optimisé SEO. Conception, rénovation, équipement, étanchéité, sécurité piscine — capter les projets haut de gamme via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Pisciniste | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-pisciniste' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Pisciniste est-il différent de piscinier ou constructeur piscine ?',
    answer: 'Historiquement oui : le pisciniste est plus positionné sur l\'ensemble du métier (conception, construction, rénovation, équipement, entretien), là où "piscinier" est parfois plus associé à l\'entretien. En pratique les termes se mélangent. Sur le SEO, il faut cibler les deux pour ne pas passer à côté de clients qui utilisent l\'un ou l\'autre terme.',
  },
  {
    question: 'Pourquoi cibler le terme "pisciniste" ?',
    answer: 'Parce qu\'il est très utilisé dans certaines régions (Sud-Est, Sud-Ouest) et par une clientèle plus aisée qui associe ce terme à un savoir-faire global. "Pisciniste + ville" amène des clients qui cherchent un expert complet, pas juste un exécutant. Paniers moyens plus élevés, projets plus ambitieux.',
  },
  {
    question: 'La rénovation de piscine est-elle un gros marché ?',
    answer: 'Énorme et encore sous-exploité. Des millions de piscines construites dans les années 80-2000 arrivent en fin de vie : liner à changer, margelles à rénover, système de filtration obsolète, mise aux normes sécurité. Les requêtes "rénovation piscine + ville" génèrent des chantiers à 8-25 k€ moins concurrentiels que le neuf.',
  },
  {
    question: 'Sécurité piscine : une obligation à mettre en avant ?',
    answer: 'Oui, c\'est légal depuis 2004. Toute piscine enterrée doit être équipée d\'un dispositif de sécurité (barrière, alarme, couverture, abri). Une page dédiée "Mise aux normes sécurité piscine" capte les propriétaires en infraction qui cherchent à régulariser leur situation. C\'est un marché récurrent et rentable.',
  },
]

const config: MetierConfig = {
  metier: 'Pisciniste',
  metierLower: 'pisciniste',
  heroKicker: 'Sites web pour pisciniste',
  heroHeadline: 'Site internet pisciniste,',
  heroHeadlineItalic: 'un savoir-faire complet qui se vend à tarif premium',
  heroDescription:
    'Je crée des sites internet pour les pisciniste partout en France. Conception, construction, rénovation, équipement, sécurité, entretien : chaque page capte une clientèle qui cherche un expert global plutôt qu\'un simple prestataire.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour pisciniste',
  whatKicker: 'Sites web pour pisciniste',
  whatTitle: 'Un pisciniste expert',
  whatTitleItalic: 'choisi par une clientèle qui paye pour la qualité',
  whatPara1:
    'Le pisciniste se positionne au-delà du simple installateur : il maîtrise toute la chaîne, du projet initial à l\'entretien long terme. Les clients qui tapent "pisciniste + ville" cherchent précisément ce positionnement d\'expert global. Ils ont un budget, un projet ambitieux, et ils veulent un interlocuteur unique capable de tout gérer. Votre site doit refléter cette promesse.',
  whatPara2:
    'Je construis des sites pisciniste qui mettent en avant votre expertise complète. Conception sur mesure, construction, rénovation de piscines anciennes, équipements haut de gamme, mise aux normes sécurité, entretien premium. Un site qui positionne votre entreprise comme le référent local du projet piscine de A à Z.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1576013551627-0cc20b96c2a7-w800.webp',
  whatImageAlt: 'Création site internet pour pisciniste',
  pillars: [
    { icon: 'Target', title: 'Expertise globale', desc: 'Conception, construction, rénovation, équipement, entretien : tout en un.' },
    { icon: 'FileSearch', title: 'Rénovation', desc: 'Marché sous-exploité des piscines anciennes à rénover. Chantiers 8-25 k€.' },
    { icon: 'User', title: 'Sécurité obligatoire', desc: 'Page dédiée à la mise aux normes. Marché de propriétaires qui doivent se régulariser.' },
  ],
  whatFooterText:
    'Un pisciniste bien référencé signe en moyenne 20 à 40 projets par an via Google, dont 40 % de rénovation.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre expertise', description: 'Services (conception, neuf, rénovation, équipement, entretien), chantiers emblématiques, zones, clientèle type.' },
    { number: '02', title: 'Construction du site', description: 'Pages expertise globale, rénovation, sécurité, galerie, études de cas, formulaire de devis.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières demandes, suivi des conversions en chantiers.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des projets piscine premium',
  keywordsIntro:
    'Les clients qui utilisent le terme "pisciniste" cherchent un expert complet. Leurs requêtes reflètent des projets plus ambitieux qu\'une simple installation.',
  keywordCategories: [
    { icon: 'Target', title: 'Expert global', text: 'pisciniste + ville, expert piscine, piscine sur mesure, conception piscine.' },
    { icon: 'Zap', title: 'Rénovation', text: 'rénovation piscine, changement liner piscine, rénovation margelles, reprise carrelage piscine.' },
    { icon: 'User', title: 'Équipement', text: 'pompe à chaleur piscine, volet roulant piscine, éclairage piscine LED, abri piscine.' },
    { icon: 'FileSearch', title: 'Sécurité', text: 'mise aux normes piscine, barrière sécurité piscine, alarme piscine, couverture sécurité.' },
  ],
  relatedTitle: 'Vous proposez d\'autres services piscine ?',
  relatedPara:
    'Les métiers de la piscine ont une logique proche : expertise, galerie, récurrent. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet piscinier', href: '/site-internet-piscinier' },
    { label: 'Site internet constructeur piscine', href: '/site-internet-constructeur-piscine' },
    { label: 'Site internet entretien piscine', href: '/site-internet-entretien-piscine' },
    { label: 'Site internet spa jacuzzi', href: '/site-internet-spa-jacuzzi' },
  ],
  miniCtaText: 'Envie de positionner votre pisciniste en référent expert de votre région ?',
  caseStudiesKicker: 'Sites créés pour des artisans',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Pisciniste', description, '/site-internet-pisciniste', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Pisciniste', description, '/site-internet-pisciniste'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Pisciniste', path: '/site-internet-pisciniste' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetPiscinistePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

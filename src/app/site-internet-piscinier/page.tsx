import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet piscinier : création de site web optimisé SEO pour pisciniers, constructeurs et entretien piscine. Coque, traditionnelle, hors-sol, spa, entretien — capter les chantiers via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Piscinier | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-piscinier' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un piscinier a-t-il besoin d\'un site internet pour capter des chantiers ?',
    answer: 'Oui, clairement. Une piscine est un achat de 15 000 à 80 000 euros : les clients ne décident pas sur un coup de tête. Ils passent plusieurs semaines sur Google à comparer les types de piscines (coque, béton, liner, hors-sol), à chercher des photos de réalisations, à demander des devis à plusieurs pisciniers. Sans site bien construit, vous n\'êtes tout simplement pas dans leur short list.',
  },
  {
    question: 'Combien coûte un site internet pour piscinier ?',
    answer: 'Un site vitrine complet pour piscinier démarre à 1 800 euros. Il inclut une page par type de piscine (coque, béton traditionnelle, liner, couloir de nage, hors-sol, spa), une galerie de réalisations, une page entretien et contrats annuels, une page rénovation et une page contact avec demande de devis détaillée.',
  },
  {
    question: 'Les photos de réalisations sont-elles vraiment décisives ?',
    answer: 'Absolument. C\'est le premier critère de choix d\'un client qui compare trois pisciniers : il regarde les photos avant de lire les textes. Je crée une galerie soignée avec des photos haute qualité de vos chantiers (avant, pendant, après), des fiches techniques par projet et des études de cas. Si vous n\'avez pas encore de photos pros, je peux vous conseiller sur comment les prendre vous-même ou les obtenir.',
  },
  {
    question: 'Comment capter les chantiers de construction plutôt que juste l\'entretien ?',
    answer: 'En ayant une page très détaillée par type de construction. "Piscine coque prix", "piscine béton sur mesure", "couloir de nage extérieur" sont des requêtes de clients en phase de décision avec des paniers entre 15 et 80 k€. Je rédige chaque page pour répondre aux vraies questions (prix indicatifs, délais de construction, démarches administratives, garanties) afin que vous soyez perçu comme l\'expert qu\'ils appellent en premier.',
  },
  {
    question: 'L\'entretien de piscine peut-il être une activité récurrente via le site ?',
    answer: 'Oui, et c\'est souvent sous-exploité. Contrats d\'entretien annuels, ouverture et hivernage, traitement de l\'eau, réparation de pompe : ce sont des requêtes saisonnières qui rapportent un chiffre d\'affaires récurrent. Je crée des pages dédiées à l\'entretien et aux contrats pour capter cette clientèle qui finit souvent par devenir cliente pour des travaux plus gros.',
  },
  {
    question: 'Je fais aussi des spas et des jacuzzis, c\'est pertinent sur le site ?',
    answer: 'Oui, c\'est même un diversificateur intéressant. Le spa et le jacuzzi ont un cycle d\'achat plus court qu\'une piscine enterrée (quelques semaines au lieu de plusieurs mois) et des paniers de 4 000 à 15 000 €. Je crée une section dédiée qui peut vous apporter du chiffre d\'affaires en attendant que les gros chantiers piscine se concrétisent.',
  },
  {
    question: 'Combien de temps avant que le site amène des demandes de devis ?',
    answer: 'Les premières demandes de devis via le SEO local arrivent dans les 2 à 3 mois. Pour les gros chantiers (piscines enterrées), le cycle de décision du client est long : comptez 4 à 8 mois entre la première visite du site et la signature du devis. À l\'année, un piscinier bien référencé transforme 15 à 30 chantiers par an supplémentaires.',
  },
]

const config: MetierConfig = {
  metier: 'Piscinier',
  metierLower: 'piscinier',
  heroKicker: 'Sites web pour piscinier',
  heroHeadline: 'Site internet piscinier,',
  heroHeadlineItalic: 'des chantiers qui arrivent par Google',
  heroDescription:
    'Je crée des sites internet pour les pisciniers, constructeurs et entreprises d\'entretien piscine partout en France. Coque, béton, liner, spa, entretien, rénovation : chaque page capte une requête Google et met en valeur vos plus belles réalisations.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour piscinier',
  whatKicker: 'Sites web pour piscinier',
  whatTitle: 'Un piscinier qu\'on choisit',
  whatTitleItalic: 'après des semaines de comparaison Google',
  whatPara1:
    'Construire une piscine, c\'est un projet à 30 000 euros en moyenne. Les clients ne décident jamais sur un coup de tête : ils passent des semaines à comparer les types (coque, béton, liner), à regarder les réalisations des pisciniers locaux, à lire des avis, à demander plusieurs devis. Votre site est votre vitrine principale pendant cette phase de comparaison. Si elle est médiocre, vous êtes éliminé avant même la première prise de contact.',
  whatPara2:
    'Je construis des sites piscinier qui captent ces clients en pleine comparaison. Une galerie de réalisations soignée, une page par type de piscine avec les vraies infos que le client cherche (prix indicatifs, délais, démarches), une page entretien pour le récurrent, et une fiche Google Business optimisée pour dominer le local. Vos plus belles réalisations deviennent votre meilleur argument.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1460925895917-afdab827c52f-w800.webp',
  whatImageAlt: 'Création site internet pour piscinier constructeur',
  pillars: [
    { icon: 'FileSearch', title: 'Galerie qui convertit', desc: 'Vos plus belles piscines mises en valeur avec fiches techniques. C\'est votre meilleur argument de vente.' },
    { icon: 'Target', title: 'Page par type de piscine', desc: 'Coque, béton, liner, couloir de nage, spa : chaque type cible sa requête et son panier moyen.' },
    { icon: 'TrendingUp', title: 'Entretien récurrent', desc: 'Contrats annuels, hivernage, ouverture : un chiffre d\'affaires régulier qui lisse l\'activité.' },
  ],
  whatFooterText:
    'Un piscinier bien référencé transforme en moyenne 15 à 30 chantiers piscine supplémentaires par an via Google.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre activité', description: 'Types de piscines construites, marques de coques, chantiers emblématiques, zones d\'intervention, services d\'entretien. On regarde ensemble vos photos pour préparer la galerie.' },
    { number: '02', title: 'Construction du site', description: 'Une page par type de piscine, galerie soignée, études de cas chantiers, pages entretien et rénovation, formulaire de demande de devis détaillé. Vous validez avant publication.' },
    { number: '03', title: 'Mise en ligne et suivi des demandes', description: 'Site en ligne, fiche Google Business optimisée, premières demandes de devis. On suit les conversions et on ajuste les pages qui attirent le moins.' },
  ],
  keywordsTitle: 'Les requêtes Google qui rapportent à un piscinier',
  keywordsIntro:
    'Le piscinier capte des requêtes très variées : gros chantiers de construction avec paniers à 30 k€, spas à 10 k€, entretien annuel à 600 €. Chaque requête correspond à un type de client et un cycle de décision différent. Je structure votre site pour capter tous ces profils.',
  keywordCategories: [
    { icon: 'Target', title: 'Construction', text: 'piscine coque, piscine béton, piscine liner, couloir de nage, piscine sur mesure, prix piscine enterrée.' },
    { icon: 'Zap', title: 'Spa et jacuzzi', text: 'installation spa, jacuzzi extérieur, spa de nage, spa encastré, spa 4 places.' },
    { icon: 'User', title: 'Entretien', text: 'entretien piscine, contrat annuel piscine, hivernage, ouverture piscine, traitement eau.' },
    { icon: 'FileSearch', title: 'Rénovation', text: 'rénovation piscine, changement liner, carrelage piscine, réparation pompe piscine.' },
  ],
  relatedTitle: 'Vous êtes un autre artisan de l\'aménagement extérieur ?',
  relatedPara:
    'Les métiers du bâtiment et de l\'aménagement extérieur ont une logique SEO proche : galerie de réalisations soignée, pages par prestation, mise en avant des certifications et garanties. Voici les autres pages métiers disponibles.',
  relatedLinks: [
    { label: 'Site internet artisan', href: '/site-internet-artisan' },
    { label: 'Site internet paysagiste', href: '/site-internet-paysagiste' },
    { label: 'Site internet maçon', href: '/site-internet-macon' },
    { label: 'Site internet chauffagiste', href: '/site-internet-chauffagiste' },
  ],
  miniCtaText: 'Envie que votre carnet de commandes piscine soit plein tous les printemps ?',
  caseStudiesKicker: 'Sites créés pour des artisans',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Piscinier', description, '/site-internet-piscinier', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Piscinier', description, '/site-internet-piscinier'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Piscinier', path: '/site-internet-piscinier' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetPiscinierPage() {
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

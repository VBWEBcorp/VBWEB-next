import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet parapharmacie : création de site web optimisé SEO. Marques, soins visage, bébé, compléments, click and collect — capter les clients via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Parapharmacie | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-parapharmacie' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Une parapharmacie a-t-elle besoin d\'un site, les grandes enseignes dominent Google ?',
    answer: 'Justement. Les grandes enseignes dominent la vente en ligne, mais sur les requêtes locales "parapharmacie + votre ville" ou "parapharmacie + votre quartier", elles sont souvent battues par des acteurs indépendants bien référencés. Un site local qui valorise vos conseils, vos marques et votre click and collect capte une clientèle de proximité fidèle.',
  },
  {
    question: 'Dois-je vendre en ligne ou me contenter d\'un site vitrine ?',
    answer: 'Ça dépend de votre volonté et de votre logistique. Un site vitrine avec click and collect est souvent le meilleur compromis : il vous évite la logistique livraison tout en captant les clients qui veulent réserver avant de venir. Si vous voulez passer à la vente en ligne classique, je peux intégrer une boutique avec paiement et livraison.',
  },
  {
    question: 'Comment se démarquer sur "conseil parapharmacie" ?',
    answer: 'C\'est exactement le positionnement qu\'un site local doit tenir face aux géants sans vendeur. Page conseils (soins visage par type de peau, soins bébé, compléments alimentaires par besoin), vidéos courtes si possible, et la possibilité de prendre rendez-vous avec un conseiller. C\'est ce que les enseignes en ligne ne peuvent pas offrir.',
  },
  {
    question: 'Les requêtes par marque sont-elles un bon levier ?',
    answer: 'Énorme. "Avène + ville", "La Roche-Posay + ville", "Uriage + ville", "Caudalie + ville" sont tapées par des clients fidèles d\'une marque qui cherchent où l\'acheter près de chez eux. Je crée une page par marque distribuée pour capter ces clients à forte valeur.',
  },
]

const config: MetierConfig = {
  metier: 'Parapharmacie',
  metierLower: 'parapharmacie',
  heroKicker: 'Sites web pour parapharmacie',
  heroHeadline: 'Site internet parapharmacie,',
  heroHeadlineItalic: 'une proximité qui bat les géants du web',
  heroDescription:
    'Je crée des sites internet pour les parapharmacies partout en France. Marques distribuées, conseils personnalisés, click and collect, soins visage et bébé : chaque page capte une clientèle locale et fidèle face aux géants du e-commerce.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour parapharmacie',
  whatKicker: 'Sites web pour parapharmacie',
  whatTitle: 'Une parapharmacie locale',
  whatTitleItalic: 'qui domine sur ses requêtes de proximité',
  whatPara1:
    'Les grandes enseignes dominent la vente en ligne, mais sur les requêtes locales "parapharmacie + votre ville", "conseil soin visage + ville" ou "marque Avène proche", ce sont souvent les indépendants bien référencés qui ressortent. La clé : valoriser ce que les sites nationaux ne peuvent pas offrir — le conseil personnalisé, la connaissance client, le click and collect.',
  whatPara2:
    'Je construis des sites parapharmacie qui captent cette clientèle de proximité. Pages par marque distribuée, pages conseils par besoin (bébé, soin visage, solaire, compléments), click and collect, présentation de votre équipe conseil. La fiche Google Business est optimisée pour remonter dans le pack local.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1596436889106-be35e843f974-w800.webp',
  whatImageAlt: 'Création site internet pour parapharmacie',
  pillars: [
    { icon: 'Target', title: 'Page par marque', desc: 'Avène, La Roche-Posay, Uriage : chaque marque distribuée a sa page pour capter les fidèles.' },
    { icon: 'User', title: 'Conseils personnalisés', desc: 'Ce que les sites nationaux ne peuvent offrir. Votre atout différenciateur.' },
    { icon: 'TrendingUp', title: 'Click and collect', desc: 'Réserver en ligne, retirer en boutique. Meilleur compromis sans logistique livraison.' },
  ],
  whatFooterText:
    'Une parapharmacie bien référencée capte 80 à 150 visites supplémentaires par semaine via Google Maps.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre offre', description: 'Marques distribuées, spécialités conseil (bébé, homme, femme, sport), services (click and collect, rendez-vous conseil), positionnement.' },
    { number: '02', title: 'Construction du site', description: 'Pages par marque, pages conseils, click and collect, équipe conseil, fiche Google optimisée.' },
    { number: '03', title: 'Mise en ligne et Google Maps', description: 'Fiche Google optimisée, premières visites et click and collect, ajustement des pages peu performantes.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des clients à une parapharmacie',
  keywordsIntro:
    'Les clients parapharmacie cherchent soit une marque précise, soit un conseil pour un besoin, soit un produit spécifique. Chaque requête a une intention claire d\'achat.',
  keywordCategories: [
    { icon: 'Target', title: 'Marques', text: 'Avène, La Roche-Posay, Uriage, Caudalie, Nuxe, Vichy, SVR + votre ville.' },
    { icon: 'User', title: 'Besoins', text: 'soin visage peau sensible, soin bébé, compléments alimentaires, produits solaires.' },
    { icon: 'FileSearch', title: 'Conseils', text: 'conseil parapharmacie, conseil soin visage, routine visage, produit grossesse.' },
    { icon: 'MapPin', title: 'Local', text: 'parapharmacie + ville, parapharmacie proche, parapharmacie + quartier, click and collect.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel de la santé ou du bien-être ?',
  relatedPara:
    'Les métiers de la santé et du bien-être ont une logique SEO proche : conseils personnalisés, marques valorisées, proximité. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet pharmacie', href: '/site-internet-pharmacie' },
    { label: 'Site internet herboristerie', href: '/site-internet-herboristerie' },
    { label: 'Site internet naturopathe', href: '/site-internet-naturopathe' },
    { label: 'Site internet diététicien', href: '/site-internet-dieteticien' },
  ],
  miniCtaText: 'Envie de dominer votre pack Google local face aux géants du e-commerce ?',
  caseStudiesKicker: 'Sites créés pour des commerces',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Parapharmacie', description, '/site-internet-parapharmacie', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Parapharmacie', description, '/site-internet-parapharmacie'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Parapharmacie', path: '/site-internet-parapharmacie' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetParapharmaciePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

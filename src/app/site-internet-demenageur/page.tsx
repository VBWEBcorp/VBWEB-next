import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet déménageur : création de site web optimisé SEO pour déménageurs et entreprises de déménagement. National, international, garde-meubles, piano, particulier — capter les devis via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Déménageur | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-demenageur' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un déménageur a-t-il vraiment besoin d\'un site internet ?',
    answer: 'Oui, plus qu\'à peu près n\'importe quel autre métier. Un déménagement ne s\'improvise pas : les gens demandent systématiquement 3 à 5 devis avant de choisir, et ils commencent tous par une recherche Google "déménageur + leur ville de départ". Sans site sérieux, vous n\'êtes même pas dans la shortlist. Avec un site bien construit, vous multipliez par 3 à 5 le nombre de demandes de devis reçues chaque mois.',
  },
  {
    question: 'Combien coûte la création d\'un site pour entreprise de déménagement ?',
    answer: 'Un site vitrine complet démarre à 1 600 euros. Il inclut une page par prestation (déménagement particulier, entreprise, longue distance, international, garde-meubles, transport d\'objets lourds comme pianos ou coffres-forts), une page devis en ligne, vos garanties et assurances, vos zones couvertes et la fiche Google optimisée.',
  },
  {
    question: 'Peut-on intégrer un simulateur de devis directement sur le site ?',
    answer: 'Oui, c\'est même un excellent levier de conversion. Un simulateur qui demande volume (T1, T2, T3...), distance, étages, options (garde-meubles, emballage, démontage) et qui affiche une fourchette de prix en temps réel augmente énormément les demandes. Le client se projette, valide son budget, et vous contacte avec un dossier déjà pré-qualifié. Je peux le développer sur mesure ou intégrer une solution existante.',
  },
  {
    question: 'Comment capter les déménagements longue distance et pas seulement le local ?',
    answer: 'Par une page dédiée "Déménagement longue distance France entière" qui vise les requêtes nationales, en complément des pages locales sur votre ville de départ. Les longues distances ont des paniers moyens plus élevés et moins de concurrence locale, donc c\'est souvent là que se joue la rentabilité. Je crée aussi une page international si vous proposez ce service (démarches, conteneur, assurance transport).',
  },
  {
    question: 'Le garde-meubles est une vraie source de revenus récurrents, comment le valoriser ?',
    answer: 'Le garde-meubles est effectivement un bon levier car il génère du chiffre d\'affaires mensuel pendant des mois, voire des années. Je crée une page dédiée avec les tarifs indicatifs au m³, les conditions de stockage (sec, tempéré, surveillé), les durées possibles, l\'assurance. Cette page cible les requêtes "garde-meubles + ville", "stockage meubles + ville" qui sont moins concurrentielles que "déménagement".',
  },
  {
    question: 'Les avis clients sont-ils vraiment décisifs dans ce métier ?',
    answer: 'Totalement. Le déménagement est un métier de confiance (on confie toute sa vie à des inconnus) et les avis Google pèsent énormément dans la décision. Je mets en place un système pour récolter automatiquement les avis après chaque prestation terminée. Plus vous avez d\'avis récents et positifs, plus votre fiche Google remonte et plus les clients vous font confiance. C\'est souvent ce qui fait basculer le choix entre deux déménageurs.',
  },
  {
    question: 'Combien de temps avant que le site ramène des devis ?',
    answer: 'Les premières demandes via Google Business Profile arrivent dans les 2 à 4 semaines après optimisation. Le SEO pur prend 2 à 4 mois pour les requêtes locales. En cumulé, un déménageur bien référencé reçoit entre 15 et 40 demandes de devis qualifiées par mois après 4 mois en ligne.',
  },
]

const config: MetierConfig = {
  metier: 'Déménageur',
  metierLower: 'déménageur',
  heroKicker: 'Sites web pour déménageur',
  heroHeadline: 'Site internet déménageur,',
  heroHeadlineItalic: 'des devis qui tombent chaque matin',
  heroDescription:
    'Je crée des sites internet pour les déménageurs et entreprises de déménagement partout en France. Particulier, entreprise, longue distance, international, garde-meubles : chaque page est pensée pour capter les demandes de devis avec un simulateur intégré.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour déménageur',
  whatKicker: 'Sites web pour déménageur',
  whatTitle: 'Un déménageur qu\'on trouve',
  whatTitleItalic: 'dans le top 3 avant tous les autres',
  whatPara1:
    'Le déménagement est un métier où tout le monde demande plusieurs devis. Un client ne choisit jamais le premier qu\'il trouve : il en contacte 3 à 5, compare les prix, lit les avis, et choisit celui qui inspire le plus confiance. La seule question est : est-ce que vous êtes dans ces 3 à 5 déménageurs contactés ? Si vous n\'êtes pas dans le top 5 sur Google, la réponse est non, et vous n\'avez aucune chance de signer ce déménagement.',
  whatPara2:
    'Je construis des sites qui vous placent dans le top 3. Pages très détaillées par type de déménagement (particulier, entreprise, longue distance, international), simulateur de devis intégré qui convertit mieux qu\'un simple formulaire, garanties et assurances mises en avant, avis clients récents. L\'objectif : multiplier par 3 à 5 vos demandes de devis entrantes.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1600585154340-be6161a56a0c-w800.webp',
  whatImageAlt: 'Création site internet pour entreprise de déménagement',
  pillars: [
    { icon: 'Target', title: 'Simulateur de devis', desc: 'Le client saisit volume, distance, options et voit une fourchette de prix. Conversion x3.' },
    { icon: 'FileSearch', title: 'Pages spécialités', desc: 'Particulier, entreprise, international, garde-meubles : chaque type cible son panier moyen.' },
    { icon: 'TrendingUp', title: 'Avis Google automatisés', desc: 'Système de collecte après prestation. Plus d\'avis = plus haut dans Google.' },
  ],
  whatFooterText:
    'Un déménageur bien référencé reçoit en moyenne 15 à 40 demandes de devis qualifiées par mois après 4 mois en ligne.',
  timelineSteps: [
    { number: '01', title: 'On cadre vos prestations', description: 'Particulier ou entreprise, local ou longue distance, international, garde-meubles, transport objets lourds. Zones de départ, tarifs indicatifs, certifications. Je repère les requêtes à cibler.' },
    { number: '02', title: 'Construction du site', description: 'Une page par prestation, simulateur de devis, garanties et assurances, avis clients, zones desservies. Rédaction claire pour convaincre un client qui compare plusieurs devis.' },
    { number: '03', title: 'Mise en ligne et collecte d\'avis', description: 'Site en ligne, fiche Google optimisée, mise en place du système d\'avis automatisés. Premiers devis qualifiés dans 3 à 4 semaines.' },
  ],
  keywordsTitle: 'Les requêtes Google qui ramènent des devis à un déménageur',
  keywordsIntro:
    'Les requêtes du déménagement ont des paniers moyens très différents selon le type. Un T1 local vaut 400 €, un T5 longue distance peut valoir 4 000 €, un déménagement international 10 000 €. Je structure votre site pour capter en priorité les requêtes les plus rentables.',
  keywordCategories: [
    { icon: 'Target', title: 'Local', text: 'déménageur + ville, déménagement + ville, entreprise déménagement proche, devis déménagement.' },
    { icon: 'Zap', title: 'Longue distance', text: 'déménagement longue distance, déménagement France entière, déménagement Paris-province.' },
    { icon: 'User', title: 'International', text: 'déménagement international, déménagement Europe, conteneur déménagement, déménagement expatrié.' },
    { icon: 'FileSearch', title: 'Spécifique', text: 'garde-meubles, déménagement piano, déménagement coffre-fort, monte-meubles, emballage.' },
  ],
  relatedTitle: 'Vous êtes un autre prestataire de services ?',
  relatedPara:
    'Les métiers de services à domicile et aux entreprises ont une logique SEO proche : rassurer, qualifier les demandes, optimiser la fiche Google. Voici les autres pages métiers disponibles.',
  relatedLinks: [
    { label: 'Site internet entreprise de nettoyage', href: '/site-internet-entreprise-nettoyage' },
    { label: 'Site internet taxi', href: '/site-internet-taxi' },
    { label: 'Site internet artisan', href: '/site-internet-artisan' },
    { label: 'Site internet aide à domicile', href: '/site-internet-aide-a-domicile' },
  ],
  miniCtaText: 'Envie que votre carnet de déménagements se remplisse automatiquement ?',
  caseStudiesKicker: 'Sites créés pour des prestataires',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Déménageur', description, '/site-internet-demenageur', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Déménageur', description, '/site-internet-demenageur'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Déménageur', path: '/site-internet-demenageur' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetDemenageurPage() {
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

import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet entreprise de nettoyage : création de site web optimisé SEO pour sociétés de nettoyage professionnel. Bureaux, industriel, vitres, ménage, copropriété — capter les contrats B2B via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Entreprise de Nettoyage | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-entreprise-nettoyage' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Une entreprise de nettoyage a-t-elle vraiment besoin d\'un site internet ?',
    answer: 'Oui, et c\'est probablement votre meilleur canal d\'acquisition B2B. Les responsables des services généraux, les gérants d\'immeubles, les dirigeants de PME cherchent un prestataire de nettoyage sur Google quand leur contrat actuel arrive à terme. Ils tapent "entreprise de nettoyage + ville" ou "société de ménage bureaux" et contactent les 2-3 premiers résultats. Sans site sérieux, vous ne passez même pas ce premier filtre.',
  },
  {
    question: 'Combien coûte la création d\'un site pour une société de nettoyage ?',
    answer: 'Un site vitrine B2B complet pour entreprise de nettoyage démarre à 1 800 euros. Il inclut une page par prestation (bureaux, industriel, vitres, copropriété, fin de chantier), une page certifications (QUALIPROPRE, ISO, ECOCERT), une page références clients, une zone géographique couverte et un formulaire de demande de devis B2B.',
  },
  {
    question: 'Comment mettre en avant les certifications qualité ?',
    answer: 'Les certifications (QUALIPROPRE, ISO 9001, ISO 14001, ECOCERT) sont un critère de choix majeur pour les acheteurs B2B, surtout pour les gros contrats. Je crée une page dédiée avec les logos officiels, les numéros de certification, les engagements qualité, et je lie ces certifications à chaque page prestation concernée. C\'est ce qui fait la différence face à un concurrent non certifié.',
  },
  {
    question: 'Je cible surtout les bureaux et les copropriétés, comment le site reflète ça ?',
    answer: 'Par deux pages principales très détaillées. "Nettoyage de bureaux + votre zone" avec les types de prestations (quotidien, hebdomadaire, fin de bail, grand ménage), les horaires d\'intervention (hors bureaux, tôt le matin, tard le soir), les équipes dédiées. Et "Nettoyage copropriété + votre zone" avec les parties communes, les cages d\'escalier, les locaux poubelles, les paliers. Chaque page cible sa clientèle précise.',
  },
  {
    question: 'Peut-on mettre en avant nos engagements écologiques ?',
    answer: 'Oui, et c\'est de plus en plus un critère de choix. Produits écolabellisés, microfibre au lieu du jetable, dilution concentrée, optimisation des tournées, formation du personnel à l\'écogestion : je rédige une page dédiée qui valorise vos engagements concrets. Cela attire les clients soucieux de leur bilan RSE, notamment les grosses structures.',
  },
  {
    question: 'Comment générer des demandes de devis depuis le site ?',
    answer: 'Par un formulaire B2B adapté au secteur : type de locaux, surface approximative, fréquence souhaitée, contraintes d\'accès, délai de démarrage. Un formulaire bien pensé filtre les demandes sérieuses et me permet de vous envoyer des leads qualifiés. On peut aussi intégrer un bouton "Demander une visite gratuite" qui convertit mieux qu\'un simple formulaire générique.',
  },
  {
    question: 'Mon équipe est petite, est-ce que le site va m\'amener trop de demandes ?',
    answer: 'C\'est rarement un problème en pratique. On peut cibler précisément votre zone d\'intervention et le type de contrats que vous recherchez (bureaux de X à Y m², copropriétés de N lots). Cela filtre naturellement les demandes. Et si ça remonte trop, c\'est un bon problème : on peut ajuster le maillage pour prioriser les contrats les plus rentables.',
  },
]

const config: MetierConfig = {
  metier: 'Entreprise de Nettoyage',
  metierLower: 'entreprise de nettoyage',
  heroKicker: 'Sites web pour entreprise de nettoyage',
  heroHeadline: 'Site internet entreprise de nettoyage,',
  heroHeadlineItalic: 'des contrats B2B qui rentrent par Google',
  heroDescription:
    'Je crée des sites internet pour les sociétés de nettoyage professionnel partout en France. Bureaux, industriel, copropriété, vitres, fin de chantier : chaque page capte une requête B2B et met en avant vos certifications qualité pour convaincre les acheteurs.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour entreprise de nettoyage',
  whatKicker: 'Sites web pour société de nettoyage',
  whatTitle: 'Des contrats B2B',
  whatTitleItalic: 'qui arrivent depuis une recherche Google',
  whatPara1:
    'Les gros contrats de nettoyage ne se gagnent plus par démarchage terrain. Les responsables des services généraux, les syndics, les gérants de PME cherchent un nouveau prestataire sur Google quand leur contrat actuel touche à sa fin ou quand ils ne sont plus satisfaits. Ils tapent "entreprise de nettoyage + leur ville", ils regardent les 3 premiers résultats, ils demandent des devis. Si votre site n\'est pas dans ce top 3, vous n\'avez aucune chance d\'être consulté.',
  whatPara2:
    'Je construis des sites B2B qui captent ces acheteurs. Pages très détaillées par type de prestation (bureaux, industriel, copropriété, vitres), certifications mises en valeur, références clients rassurantes, formulaire de devis B2B qui qualifie les demandes. L\'objectif : que votre entreprise apparaisse dans le top 3 des résultats pour chaque requête B2B de votre zone.',
  whatImageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour entreprise de nettoyage professionnel',
  pillars: [
    { icon: 'Target', title: 'Pages B2B détaillées', desc: 'Bureaux, industriel, copropriété, vitres : chaque type de prestation cible ses acheteurs.' },
    { icon: 'FileSearch', title: 'Certifications valorisées', desc: 'QUALIPROPRE, ISO 9001, écolabels : ce qui rassure les acheteurs sur les gros contrats.' },
    { icon: 'TrendingUp', title: 'Leads qualifiés', desc: 'Formulaire B2B qui filtre automatiquement les demandes sérieuses. Moins de perte de temps.' },
  ],
  whatFooterText:
    'Une entreprise de nettoyage bien référencée reçoit en moyenne 8 à 20 demandes de devis B2B qualifiées par mois après 4 mois.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre cible B2B', description: 'Types de clients visés (bureaux, industriel, copropriété, santé), zone géographique, certifications, effectif, contrats emblématiques. Je repère les requêtes B2B à cibler en priorité.' },
    { number: '02', title: 'Construction du site', description: 'Une page par type de prestation, certifications, références clients anonymisées si besoin, formulaire de devis qualifié. Je rédige chaque page pour convaincre un acheteur B2B qui compare trois devis.' },
    { number: '03', title: 'Mise en ligne et suivi', description: 'Site en ligne, fiche Google Business optimisée, premières demandes qualifiées dans 2 à 3 mois. On ajuste les pages qui remontent moins vite et on suit les conversions.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des contrats B2B en nettoyage',
  keywordsIntro:
    'Les acheteurs B2B cherchent sur Google avec des intentions très claires : ils ont un budget, une zone, un type de locaux. Chaque requête correspond à un profil d\'acheteur précis. Je structure votre site pour capter les requêtes les plus rentables.',
  keywordCategories: [
    { icon: 'Target', title: 'Bureaux', text: 'nettoyage bureaux, entretien locaux, ménage bureau, entreprise propreté tertiaire.' },
    { icon: 'Zap', title: 'Industriel', text: 'nettoyage industriel, entretien usine, nettoyage entrepôt, nettoyage agroalimentaire.' },
    { icon: 'User', title: 'Copropriété', text: 'nettoyage copropriété, entretien immeuble, entreprise ménage résidence, sortie poubelles.' },
    { icon: 'FileSearch', title: 'Spécifique', text: 'nettoyage vitres, nettoyage fin chantier, désinfection, cristallisation marbre, karcher.' },
  ],
  relatedTitle: 'Vous êtes un autre prestataire de services aux entreprises ?',
  relatedPara:
    'Les métiers de services aux entreprises ont une logique SEO B2B proche : pages par prestation, mise en avant des certifications, formulaires de devis qualifiés. Voici les autres pages métiers disponibles.',
  relatedLinks: [
    { label: 'Site internet déménageur', href: '/site-internet-demenageur' },
    { label: 'Site internet dépannage informatique', href: '/site-internet-depannage-informatique' },
    { label: 'Site internet serrurier', href: '/site-internet-serrurier' },
    { label: 'Site internet artisan', href: '/site-internet-artisan' },
  ],
  miniCtaText: 'Envie de remplir votre carnet de contrats B2B sans prospection terrain ?',
  caseStudiesKicker: 'Sites créés pour des prestataires',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Entreprise de Nettoyage', description, '/site-internet-entreprise-nettoyage', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Entreprise de Nettoyage', description, '/site-internet-entreprise-nettoyage'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Entreprise de Nettoyage', path: '/site-internet-entreprise-nettoyage' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetEntrepriseNettoyagePage() {
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

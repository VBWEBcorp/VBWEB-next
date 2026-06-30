import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet chauffagiste : création de site web optimisé SEO pour chauffagistes. Pompe à chaleur, chaudière, ramonage, climatisation, MaPrimeRénov — capter les clients via Google sur les requêtes rentables.'

export const metadata: Metadata = {
  title: 'Site Internet Chauffagiste | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-chauffagiste' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Pourquoi un chauffagiste doit-il investir dans un site internet en 2026 ?',
    answer: 'Parce que les aides à la rénovation énergétique (MaPrimeRénov, CEE, éco-PTZ) transforment le marché. Les clients se renseignent énormément sur Google avant de contacter un pro, ils comparent les solutions (PAC, chaudière, pompe à chaleur air-eau, biomasse), vérifient votre certification RGE. Sans site clair, vous passez à côté de chantiers PAC à 15 000 euros et de contrats d\'entretien récurrents.',
  },
  {
    question: 'Combien coûte un site internet pour chauffagiste ?',
    answer: 'Un site vitrine complet pour chauffagiste démarre à 1 800 euros. Il inclut une page par prestation (installation pompe à chaleur, changement chaudière, ramonage, climatisation, entretien annuel), une page aides et certifications (RGE, MaPrimeRénov), des études de cas chantiers, vos zones d\'intervention et la fiche Google optimisée.',
  },
  {
    question: 'La certification RGE est-elle mise en avant sur le site ?',
    answer: 'Oui, c\'est un élément crucial du SEO chauffagiste. La mention RGE (logos, numéro, lien vers l\'annuaire officiel) rassure les clients et est obligatoire pour qu\'ils obtiennent les aides. Google valorise aussi les sites qui affichent clairement ces certifications. Je crée une page dédiée à votre RGE et je la lie à toutes les pages prestation concernées.',
  },
  {
    question: 'Comment capter les chantiers pompe à chaleur qui rapportent le plus ?',
    answer: 'Par une page dédiée "Installation pompe à chaleur + ville" très détaillée : types de PAC (air-eau, air-air, géothermie), critères de choix, aides disponibles, étapes d\'installation, entretien, FAQ spécifique. C\'est la page qui rapporte le plus en conversion pour un chauffagiste, avec des paniers moyens entre 10 et 25 k€.',
  },
  {
    question: 'Le site peut-il générer des demandes d\'entretien annuel récurrent ?',
    answer: 'Oui, et c\'est un levier souvent sous-exploité. Les clients cherchent "entretien chaudière + leur ville" en automne, "ramonage obligatoire" avant l\'hiver. Une page dédiée à l\'entretien annuel avec un formulaire de prise de contact simple peut vous remplir un carnet d\'entretien récurrent, qui est la meilleure récurrence de revenus pour un chauffagiste.',
  },
  {
    question: 'Je fais aussi de la climatisation, le site peut gérer les deux activités ?',
    answer: 'Bien sûr, et c\'est même recommandé. Le chauffage se vend en hiver, la climatisation en été : un site qui couvre les deux lisse votre activité sur toute l\'année. Je crée des pages distinctes (climatisation réversible, installation clim, entretien clim, dépannage clim) pour capter les requêtes estivales en plus des requêtes hivernales.',
  },
  {
    question: 'Combien de temps avant que le site ramène des chantiers ?',
    answer: 'Les premiers contacts qualifiés arrivent dans les 2 à 3 mois via le SEO local, et les chantiers PAC (cycles de décision plus longs) démarrent généralement au 3-4e mois. Un chauffagiste bien référencé transforme en moyenne 4 à 8 chantiers importants par mois après 6 mois en ligne.',
  },
  {
    question: 'Pouvez-vous intégrer un simulateur d\'aides MaPrimeRénov ?',
    answer: 'Oui, soit via un widget officiel, soit via un formulaire maison qui pose 4-5 questions et affiche une estimation. C\'est un outil qui augmente énormément le temps passé sur le site et la confiance. Les clients ont besoin de comprendre combien ils vont toucher avant de vous appeler — autant les aider à le faire sur votre site plutôt qu\'ailleurs.',
  },
]

const config: MetierConfig = {
  metier: 'Chauffagiste',
  metierLower: 'chauffagiste',
  heroKicker: 'Sites web pour chauffagiste',
  heroHeadline: 'Site internet chauffagiste,',
  heroHeadlineItalic: 'des chantiers PAC qui rentrent sans prospection',
  heroDescription:
    'Je crée des sites internet pour les chauffagistes et installateurs RGE partout en France. Pompe à chaleur, chaudière, ramonage, climatisation, aides MaPrimeRénov : chaque page est pensée pour capter les chantiers qui rapportent sur Google, sans prospection.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour chauffagiste',
  whatKicker: 'Sites web pour chauffagiste RGE',
  whatTitle: 'Un chauffagiste trouvé',
  whatTitleItalic: 'au moment où le client hésite entre trois devis',
  whatPara1:
    'Le chauffage a changé. Les clients ne décident plus en urgence : ils passent des semaines à comparer les solutions (pompe à chaleur air-eau, chaudière gaz à condensation, biomasse, géothermie), à estimer les aides (MaPrimeRénov, CEE, éco-PTZ) et à lire des avis. Ils tapent "pompe à chaleur + ville", "changer chaudière + ville", "chauffagiste RGE + ville" — des requêtes à haute valeur avec des paniers moyens entre 3 000 et 25 000 euros.',
  whatPara2:
    'Je construis des sites chauffagiste qui captent ces clients au moment de la décision. Pages prestation détaillées, mise en avant de la certification RGE, explication claire des aides, études de cas chantiers, formulaires de demande de devis fluides. Chaque page est pensée pour répondre aux questions que le client se pose avant de choisir entre trois professionnels.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1587293852726-70cdb56c2866-w800.webp',
  whatImageAlt: 'Création site internet pour chauffagiste RGE',
  pillars: [
    { icon: 'Target', title: 'Pages PAC détaillées', desc: 'Air-eau, air-air, géothermie, critères de choix, aides : la page qui convertit sur les chantiers à 15k€.' },
    { icon: 'FileSearch', title: 'RGE et aides mises en avant', desc: 'Logo RGE, simulateur MaPrimeRénov, explication CEE. Ce qui rassure le client avant de demander un devis.' },
    { icon: 'TrendingUp', title: 'Entretien récurrent', desc: 'Pages ramonage et entretien annuel qui remplissent votre carnet de rendez-vous récurrents.' },
  ],
  whatFooterText:
    'Un chauffagiste bien référencé transforme en moyenne 4 à 8 chantiers importants par mois après 6 mois en ligne.',
  timelineSteps: [
    { number: '01', title: 'On cadre vos spécialités', description: 'Types de chaudières posées, marques PAC, certifications RGE, zones d\'intervention, chantiers emblématiques. J\'identifie les requêtes à haute valeur où il faut se positionner en priorité.' },
    { number: '02', title: 'Construction du site', description: 'Une page par type d\'installation, pages aides et certifications, études de cas chantiers, simulateur ou formulaire devis. Je rédige chaque page pour convaincre un client qui compare trois devis.' },
    { number: '03', title: 'Mise en ligne et suivi', description: 'Le site passe en ligne, la fiche Google est optimisée, les premiers contacts arrivent. On suit les demandes entrantes et on ajuste les pages qui remontent moins vite.' },
  ],
  keywordsTitle: 'Les requêtes Google qui rapportent le plus à un chauffagiste',
  keywordsIntro:
    'Les requêtes à forte valeur d\'un chauffagiste tournent autour des gros chantiers (pompe à chaleur, changement chaudière) et de l\'entretien récurrent. Chaque requête correspond à un panier moyen précis, et je construis votre site pour capter celles qui rapportent le plus.',
  keywordCategories: [
    { icon: 'Target', title: 'Pompe à chaleur', text: 'installation pompe à chaleur, PAC air-eau, PAC air-air, géothermie, prix pompe à chaleur.' },
    { icon: 'Zap', title: 'Chaudière', text: 'changement chaudière, chaudière gaz condensation, chaudière biomasse, dépannage chaudière.' },
    { icon: 'User', title: 'Entretien', text: 'entretien chaudière annuel, ramonage, contrat entretien, vidange chaudière.' },
    { icon: 'FileSearch', title: 'Aides', text: 'MaPrimeRénov chauffage, CEE pompe à chaleur, éco-PTZ, aide changement chaudière.' },
  ],
  relatedTitle: 'Vous êtes un autre artisan du bâtiment ?',
  relatedPara:
    'Les métiers du bâtiment ont une logique SEO proche : pages par prestation, mise en avant des certifications, formulaires de demande de devis, fiche Google optimisée. Voici les autres pages métiers disponibles.',
  relatedLinks: [
    { label: 'Site internet artisan', href: '/site-internet-artisan' },
    { label: 'Site internet plombier', href: '/site-internet-plombier' },
    { label: 'Site internet électricien', href: '/site-internet-electricien' },
    { label: 'Site internet couvreur', href: '/site-internet-couvreur' },
  ],
  miniCtaText: 'Envie de capter les chantiers pompe à chaleur qui rentrent tous les mois ?',
  caseStudiesKicker: 'Sites créés pour des artisans',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Chauffagiste', description, '/site-internet-chauffagiste', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Chauffagiste', description, '/site-internet-chauffagiste'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Chauffagiste', path: '/site-internet-chauffagiste' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetChauffagistePage() {
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

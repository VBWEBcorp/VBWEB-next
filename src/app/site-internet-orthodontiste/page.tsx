import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet orthodontiste : création de site web optimisé SEO pour cabinets d\'orthodontie. Invisalign, bagues, enfant, adulte, contention — capter les patients qui cherchent un orthodontiste sur Google.'

export const metadata: Metadata = {
  title: 'Site Internet Orthodontiste | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-orthodontiste' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un orthodontiste doit-il vraiment investir dans un site internet ?',
    answer: 'Oui, c\'est devenu indispensable. L\'orthodontie adulte explose (gouttières transparentes Invisalign, traitements discrets) et ces patients ne passent pas par leur dentiste traitant : ils cherchent directement un orthodontiste sur Google, comparent plusieurs cabinets, regardent les avis et les photos. Sans site qui met en avant vos traitements adultes et vos équipements, vous captez uniquement les enfants prescrits par les dentistes.',
  },
  {
    question: 'Combien coûte un site pour cabinet d\'orthodontie ?',
    answer: 'Un site vitrine complet pour orthodontiste démarre à 1 800 euros. Il inclut une page par type de traitement (orthodontie enfant, adolescent, adulte, Invisalign, bagues linguales, contention), une page présentation du cabinet et de l\'équipe, un module de prise de rendez-vous connecté à Doctolib, et la conformité déontologique CNCD.',
  },
  {
    question: 'Comment attirer spécifiquement la patientèle adulte ?',
    answer: 'Par une page dédiée "Orthodontie adulte" très détaillée, qui aborde les freins que ressentent ces patients : discrétion (gouttières vs bagues), durée du traitement, coût, aspect pro. Je rédige des pages qui valorisent vos solutions transparentes (Invisalign, contention linguale) avec photos avant/après anonymisées et témoignages patients retravaillés. Cette cible est prête à payer entre 3 et 7 k€ pour un traitement.',
  },
  {
    question: 'Invisalign est-il un vrai levier SEO ?',
    answer: 'Énorme. "Invisalign + ville" est une des requêtes les plus rentables en orthodontie, avec des patients en phase de décision finale. Je crée une page dédiée qui explique la technologie, les étapes, les tarifs, les avantages face aux bagues classiques. Cela vous positionne comme un cabinet moderne et capte des patients qui paient en direct (souvent sans mutuelle complète).',
  },
  {
    question: 'Est-ce conforme aux règles du Conseil National de l\'Ordre des Chirurgiens-Dentistes ?',
    answer: 'Oui, je connais les règles CNCD : pas de publicité comparative, pas de promesse de résultat, pas de ton commercial. Le site doit rester informatif. Je rédige chaque page dans le respect strict de la déontologie tout en restant efficace sur Google. Les mentions légales, le numéro RPPS et les informations obligatoires sont bien présentes.',
  },
]

const config: MetierConfig = {
  metier: 'Orthodontiste',
  metierLower: 'orthodontiste',
  heroKicker: 'Sites web pour orthodontiste',
  heroHeadline: 'Site internet orthodontiste,',
  heroHeadlineItalic: 'des patients adultes qui vous trouvent en direct',
  heroDescription:
    'Je crée des sites internet pour les cabinets d\'orthodontie partout en France. Invisalign, bagues, orthodontie enfant et adulte, contention : chaque page capte une requête Google précise et amène des patients prêts à démarrer un traitement.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour orthodontiste',
  whatKicker: 'Sites web pour orthodontiste',
  whatTitle: 'Un orthodontiste trouvé',
  whatTitleItalic: 'par des adultes qui veulent du discret',
  whatPara1:
    'L\'orthodontie a changé. Les adultes représentent aujourd\'hui une part croissante des traitements, et ils ne passent pas par une prescription : ils cherchent directement sur Google "orthodontiste + ville", "Invisalign + ville", "gouttières transparentes". Ces patients paient souvent 5 000 à 7 000 euros en direct et choisissent le cabinet qui inspire le plus confiance en quelques minutes de navigation.',
  whatPara2:
    'Je construis des sites orthodontiste qui captent cette patientèle adulte tout en préservant la clientèle enfant. Pages spécialisées par type de traitement, présentation du cabinet et de l\'équipement moderne, intégration Doctolib, et une fiche Google optimisée pour le pack local. Le tout dans le respect strict de la déontologie CNCD.',
  whatImageUrl: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour cabinet d\'orthodontie',
  pillars: [
    { icon: 'Target', title: 'Page Invisalign dédiée', desc: 'La requête la plus rentable en orthodontie adulte. Traitements de 5 à 7 k€ en direct.' },
    { icon: 'User', title: 'Pages enfant / adulte séparées', desc: 'Deux patientèles, deux pages, deux ciblages SEO. Capter les deux au lieu d\'une.' },
    { icon: 'TrendingUp', title: 'Doctolib intégré', desc: 'Prise de rendez-vous directe pour première consultation. Moins d\'appels, plus de RDV.' },
  ],
  whatFooterText:
    'Un orthodontiste bien référencé attire en moyenne 8 à 20 nouveaux patients adultes par mois via Google.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre cabinet', description: 'Types de traitements proposés, équipements (scanner, caméra 3D, imprimante), positionnement sur l\'adulte ou pédiatrique, tarifs, praticiens, agenda Doctolib ou maison.' },
    { number: '02', title: 'Construction du site', description: 'Pages par traitement (Invisalign, bagues, enfant, adulte, contention), présentation du cabinet et de l\'équipement, intégration prise de rendez-vous. Déontologie respectée.' },
    { number: '03', title: 'Mise en ligne + Google', description: 'Fiche Google optimisée, suivi des premières prises de rendez-vous adultes, ajustements sur les pages qui remontent moins vite.' },
  ],
  keywordsTitle: 'Les requêtes Google qui ramènent des patients à un orthodontiste',
  keywordsIntro:
    'Les requêtes orthodontiques se concentrent sur des demandes spécifiques avec une forte intention de prise de rendez-vous. Chaque requête correspond à un profil de patient et un panier moyen précis.',
  keywordCategories: [
    { icon: 'Target', title: 'Adulte', text: 'orthodontiste adulte, Invisalign, gouttières transparentes, bagues discrètes, orthodontie linguale.' },
    { icon: 'User', title: 'Enfant', text: 'orthodontiste enfant, bagues enfant, orthodontie pédiatrique, correction dents enfant.' },
    { icon: 'FileSearch', title: 'Traitements', text: 'bagues métalliques, bagues céramique, contention, gouttière nuit, faux palais.' },
    { icon: 'MapPin', title: 'Local', text: 'orthodontiste + ville, cabinet orthodontie proche, orthodontiste + quartier.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel dentaire ou de santé ?',
  relatedPara:
    'Les métiers dentaires et médicaux ont une logique SEO proche : pages par spécialité, prise de rendez-vous en ligne, respect de la déontologie. Voici les autres pages métiers disponibles.',
  relatedLinks: [
    { label: 'Site internet dentiste', href: '/site-internet-dentiste' },
    { label: 'Site internet chirurgien-dentiste', href: '/site-internet-chirurgien-dentiste' },
    { label: 'Site internet cabinet dentaire', href: '/site-internet-cabinet-dentaire' },
    { label: 'Site internet médecin', href: '/site-internet-medecin' },
  ],
  miniCtaText: 'Envie d\'attirer une patientèle adulte pour vos traitements Invisalign ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Orthodontiste', description, '/site-internet-orthodontiste', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Orthodontiste', description, '/site-internet-orthodontiste'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Orthodontiste', path: '/site-internet-orthodontiste' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetOrthodontistePage() {
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

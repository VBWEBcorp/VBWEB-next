import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet assistance informatique : création de site web optimisé SEO. Aide à distance, hotline, seniors, particuliers, pro, abonnement — capter les contrats support via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Assistance Informatique | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-assistance-informatique' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Qu\'est-ce qui différencie "assistance" de "dépannage" ?',
    answer: '"Assistance informatique" évoque plus le conseil, l\'aide à distance, le support régulier, là où "dépannage" est plutôt de l\'intervention ponctuelle pour une panne. Les clients qui cherchent "assistance informatique" veulent souvent un abonnement support, un accompagnement régulier, quelqu\'un qu\'ils peuvent appeler. C\'est une clientèle fidèle qui a besoin d\'être rassurée dans la durée.',
  },
  {
    question: 'L\'assistance seniors est-elle un vrai créneau ?',
    answer: 'Énorme. Les seniors qui s\'équipent en numérique (smartphone, tablette, PC) ont besoin d\'aide régulière pour des choses simples : installer une appli, connecter une imprimante, sauvegarder des photos. Ils paient sans négocier pour avoir quelqu\'un de patient qui leur explique. Une page "Assistance seniors" peut générer 20-40 clients récurrents à 20-40 €/mois chacun.',
  },
  {
    question: 'L\'abonnement assistance est-il viable économiquement ?',
    answer: 'Très viable, et c\'est le modèle le plus rentable. Un abonnement assistance à 20-50 €/mois par client, avec hotline illimitée et aide à distance, génère un chiffre d\'affaires récurrent stable. 30 clients à 30 €/mois = 900 €/mois = 10 800 €/an de récurrent avec peu d\'intervention physique. Je valorise ce modèle sur votre site.',
  },
  {
    question: 'La prise en main à distance fait-elle peur aux clients ?',
    answer: 'Oui, parfois. Je rédige une page "Comment fonctionne l\'aide à distance" qui explique clairement : autorisation du client, outil utilisé (TeamViewer, AnyDesk, etc.), sécurité, durée, tarif. Cette transparence rassure et lève les freins. Beaucoup de clients acceptent la prise en main à distance après avoir lu cette page.',
  },
]

const config: MetierConfig = {
  metier: 'Assistance Informatique',
  metierLower: 'assistance informatique',
  heroKicker: 'Sites web pour assistance informatique',
  heroHeadline: 'Site internet assistance informatique,',
  heroHeadlineItalic: 'des clients qui vous appellent chaque semaine',
  heroDescription:
    'Je crée des sites internet pour les prestataires d\'assistance informatique partout en France. Hotline, aide à distance, seniors, abonnement, particuliers et pros : chaque page capte des clients qui veulent une aide récurrente.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour assistance informatique',
  whatKicker: 'Sites web pour assistance informatique',
  whatTitle: 'Une assistance informatique',
  whatTitleItalic: 'qui transforme chaque client en abonné',
  whatPara1:
    'Contrairement au dépannage ponctuel, l\'assistance informatique vit de la récurrence. Les clients qui cherchent "assistance informatique + leur ville" ou "aide informatique à distance" veulent souvent un service régulier, pas une intervention unique. Ils sont prêts à payer un abonnement mensuel pour avoir quelqu\'un qu\'ils peuvent appeler en cas de problème. C\'est un modèle économique ultra rentable.',
  whatPara2:
    'Je construis des sites assistance informatique qui promeuvent l\'abonnement plutôt que l\'intervention ponctuelle. Pages particuliers/pros/seniors distinctes, aide à distance expliquée clairement, tarifs par abonnement, témoignages anonymisés de clients fidèles. Un site qui transforme chaque visiteur en abonné récurrent.',
  whatImageUrl: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour assistance informatique',
  pillars: [
    { icon: 'TrendingUp', title: 'Modèle abonnement', desc: 'Tarif mensuel avec hotline illimitée. Récurrent stable et très rentable.' },
    { icon: 'User', title: 'Assistance seniors', desc: 'Clientèle fidèle qui paie sans négocier pour un vrai accompagnement patient.' },
    { icon: 'FileSearch', title: 'Aide à distance', desc: 'Page explicative qui lève les craintes et convertit les sceptiques.' },
  ],
  whatFooterText:
    'Un prestataire d\'assistance bien référencé signe en moyenne 15-40 abonnements par mois, soit 4-12 k€ de récurrent par mois.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre offre', description: 'Formules (unitaire, abonnement), cibles (particuliers, pros, seniors), outils (TeamViewer, AnyDesk), tarifs, zones.' },
    { number: '02', title: 'Construction du site', description: 'Pages par cible, abonnement, aide à distance, tarifs clairs, formulaire d\'abonnement simple.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premiers abonnements, fidélisation des clients récurrents.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des abonnements d\'assistance informatique',
  keywordsIntro:
    'Les clients cherchent selon leur profil et leur besoin. Chaque requête reflète un modèle de consommation différent.',
  keywordCategories: [
    { icon: 'User', title: 'Général', text: 'assistance informatique + ville, aide informatique, hotline informatique, support informatique.' },
    { icon: 'Target', title: 'Seniors', text: 'aide informatique seniors, cours informatique retraité, apprendre ordinateur, assistance tablette senior.' },
    { icon: 'FileSearch', title: 'Distance', text: 'aide informatique à distance, dépannage à distance, prise en main TeamViewer, support en ligne.' },
    { icon: 'Zap', title: 'Abonnement', text: 'abonnement assistance informatique, contrat support IT, maintenance annuelle PC.' },
  ],
  relatedTitle: 'Vous proposez d\'autres services informatiques ?',
  relatedPara:
    'Les métiers informatiques ont une logique proche : support, confiance, récurrence. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet dépannage informatique', href: '/site-internet-depannage-informatique' },
    { label: 'Site internet technicien informatique', href: '/site-internet-technicien-informatique' },
    { label: 'Site internet infogérance', href: '/site-internet-infogerance' },
    { label: 'Site internet maintenance informatique', href: '/site-internet-maintenance-informatique' },
  ],
  miniCtaText: 'Envie de transformer votre activité en récurrent rentable avec des abonnements ?',
  caseStudiesKicker: 'Sites créés pour des prestataires',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Assistance Informatique', description, '/site-internet-assistance-informatique', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Assistance Informatique', description, '/site-internet-assistance-informatique'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Assistance Informatique', path: '/site-internet-assistance-informatique' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetAssistanceInformatiquePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

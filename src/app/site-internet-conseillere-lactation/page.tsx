import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet conseillère en lactation : création de site web optimisé SEO. Allaitement maternel, IBCLC, tire-lait, sevrage, douleurs — capter les jeunes mamans en détresse.'

export const metadata: Metadata = {
  title: 'Site Internet Conseillère en Lactation | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-conseillere-lactation' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Une consultante en lactation a-t-elle besoin d\'un site dédié ?',
    answer: 'Oui, car les jeunes mamans qui ont un problème d\'allaitement cherchent souvent à 3h du matin, épuisées, avec un bébé qui pleure. Elles tapent "douleur allaitement", "bébé ne prend pas le sein", "lactation + ville". Ces femmes sont en détresse et prêtes à payer pour être aidées rapidement. Sans site, vous n\'existez pas à ce moment critique.',
  },
  {
    question: 'La certification IBCLC est-elle importante à mettre en avant ?',
    answer: 'Crucial. IBCLC est la certification internationale de référence en lactation. Les mamans informées la cherchent spécifiquement. Je crée une page dédiée qui explique ce qu\'est l\'IBCLC, votre parcours pour l\'obtenir, et les re-certifications régulières. Cela vous différencie des simples "conseils bénévoles" et justifie vos honoraires.',
  },
  {
    question: 'Les consultations à domicile et en visio sont-elles à valoriser ?',
    answer: 'Absolument. Le domicile est souvent essentiel dans le premier mois après la naissance (la maman ne veut pas sortir). La visio permet de capter des clientes partout en France pour les suivis. Je crée des pages distinctes pour ces deux modalités, chacune avec ses tarifs et conditions.',
  },
  {
    question: 'Quels types de problèmes doivent être abordés dans les pages ?',
    answer: 'Les problèmes les plus tapés sur Google : douleur allaitement, crevasses, canal lactifère bouché, mastite, refus du sein, freins restrictifs, insuffisance lactée, reprise du travail, sevrage. Chaque problème a sa requête et mérite une page dédiée. C\'est la meilleure façon de capter des mamans en recherche de solutions précises.',
  },
]

const config: MetierConfig = {
  metier: 'Conseillère en Lactation',
  metierLower: 'conseillère en lactation',
  heroKicker: 'Sites web pour conseillère en lactation',
  heroHeadline: 'Site internet conseillère en lactation,',
  heroHeadlineItalic: 'des mamans qui vous trouvent à 3h du matin',
  heroDescription:
    'Je crée des sites internet pour les consultantes en lactation IBCLC partout en France. Allaitement maternel, douleurs, tire-lait, sevrage, visio ou domicile : chaque page capte les jeunes mamans qui cherchent de l\'aide en urgence.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour conseillère en lactation',
  whatKicker: 'Sites web pour IBCLC',
  whatTitle: 'Une IBCLC trouvée',
  whatTitleItalic: 'par des mamans en pleurs à 3h du matin',
  whatPara1:
    'L\'allaitement est un sujet qui ne suit pas les horaires de bureau. Les difficultés apparaissent la nuit, les questions angoissent, et les mamans cherchent désespérément quelqu\'un qui puisse les aider concrètement. Elles tapent leur problème sur Google, souvent en pleurs, et appellent la première IBCLC qui leur inspire confiance et qui semble disponible rapidement.',
  whatPara2:
    'Je construis des sites conseillère en lactation qui captent ces mamans en détresse. Pages par problème (douleur, crevasses, refus du sein, canal bouché), page IBCLC pour valoriser votre certification, modalités visio et domicile, tarifs clairs. Un site rassurant et professionnel qui permet de prendre rendez-vous immédiatement.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1531722569936-825d3dd91b15-w800.webp',
  whatImageAlt: 'Création site internet pour conseillère en lactation',
  pillars: [
    { icon: 'Zap', title: 'Page par problème', desc: 'Douleur, crevasses, refus sein, mastite : chaque problème = une requête Google à capter.' },
    { icon: 'User', title: 'IBCLC valorisée', desc: 'La certification internationale qui vous différencie. À mettre en avant systématiquement.' },
    { icon: 'FileSearch', title: 'Visio + domicile', desc: 'Deux modalités, deux pages. Visio pour le national, domicile pour le local.' },
  ],
  whatFooterText:
    'Une IBCLC bien référencée capte 8 à 20 nouvelles mamans par mois, souvent en urgence.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre pratique', description: 'Certification IBCLC, approches, modalités (visio, domicile, cabinet), zones couvertes, tarifs, spécialités (prématurés, allaitement long, tandem).' },
    { number: '02', title: 'Construction du site', description: 'Pages par problème, certification IBCLC, modalités, tarifs, ton rassurant pour mamans en détresse.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières prises de rendez-vous, ajustements selon les retours mamans.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des mamans en lactation à vous trouver',
  keywordsIntro:
    'Les mamans qui ont un problème d\'allaitement cherchent très spécifiquement leur difficulté. Chaque requête reflète une urgence ou une inquiétude.',
  keywordCategories: [
    { icon: 'Zap', title: 'Douleurs', text: 'douleur allaitement, crevasses allaitement, mastite, canal lactifère bouché, vasospasme.' },
    { icon: 'User', title: 'Difficultés bébé', text: 'bébé refuse le sein, bébé pleure au sein, bébé ne grossit pas, succion inefficace.' },
    { icon: 'Target', title: 'Situations', text: 'reprise travail allaitement, tire-lait, sevrage en douceur, allaitement tandem.' },
    { icon: 'FileSearch', title: 'Expertise', text: 'IBCLC + ville, consultante lactation, conseillère allaitement, lactation en visio.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel de la périnatalité ?',
  relatedPara:
    'Les métiers autour de la naissance ont une logique proche : urgence, rassurer, expliquer. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet sage-femme', href: '/site-internet-sage-femme' },
    { label: 'Site internet doula', href: '/site-internet-doula' },
    { label: 'Site internet préparation naissance', href: '/site-internet-preparation-naissance' },
    { label: 'Site internet pédiatre', href: '/site-internet-pediatre' },
  ],
  miniCtaText: 'Envie de capter les mamans en urgence allaitement sur votre zone ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Conseillère en Lactation', description, '/site-internet-conseillere-lactation', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Conseillère en Lactation', description, '/site-internet-conseillere-lactation'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Conseillère en Lactation', path: '/site-internet-conseillere-lactation' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetConseillereLactationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

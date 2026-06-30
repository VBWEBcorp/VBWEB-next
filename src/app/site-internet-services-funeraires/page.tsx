import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet services funéraires : création de site web optimisé SEO. Démarches, accompagnement, formules, contrats obsèques, cérémonie — accompagner les familles avec humanité.'

export const metadata: Metadata = {
  title: 'Site Internet Services Funéraires | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-services-funeraires' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Services funéraires ou pompes funèbres, quelle différence ?',
    answer: '"Services funéraires" est un terme plus large qui englobe l\'ensemble des prestations (pompes funèbres, marbrerie, fleurs, obsèques, contrats prévoyance, accompagnement). Les familles qui tapent "services funéraires + ville" cherchent souvent un accompagnement complet d\'un seul prestataire. Une page dédiée à cette approche globale capte ces recherches transversales.',
  },
  {
    question: 'Comment présenter une offre complète sans paraître commercial ?',
    answer: 'En privilégiant l\'accompagnement et l\'information plutôt que la vente. Chaque prestation est expliquée pour ce qu\'elle apporte concrètement aux familles (soulagement logistique, démarches facilitées, cérémonie personnalisée). Le ton reste sobre et bienveillant. Les familles doivent sentir qu\'elles vont être prises en charge, pas vendues.',
  },
  {
    question: 'Les contrats obsèques prévoyance sont-ils un levier à part ?',
    answer: 'Oui, très important. Les seniors cherchent activement à organiser leurs obsèques à l\'avance pour soulager leurs proches. Les requêtes "contrat obsèques + ville", "prévoyance obsèques", "préparer ses obsèques" amènent une clientèle motivée. Une page dédiée qui explique les contrats (capital ou prestations) et les avantages fidélise cette clientèle sur le long terme.',
  },
  {
    question: 'Comment couvrir les démarches administratives ?',
    answer: 'Par une page "Démarches après un décès" très pratique : qui prévenir, quand, quels documents rassembler, quels délais respecter. Cette page rend service aux familles qui sont souvent perdues dans ce moment, et vous positionne comme un accompagnateur global. Elle génère aussi beaucoup de trafic SEO car ce sont des questions très tapées.',
  },
]

const config: MetierConfig = {
  metier: 'Services Funéraires',
  metierLower: 'services funéraires',
  heroKicker: 'Sites web pour services funéraires',
  heroHeadline: 'Site internet services funéraires,',
  heroHeadlineItalic: 'un accompagnement global pour soulager les familles',
  heroDescription:
    'Je crée des sites internet pour les prestataires de services funéraires partout en France. Obsèques, démarches, contrats prévoyance, cérémonie, marbrerie, accompagnement : chaque page soulage les familles à tous les moments du deuil.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour services funéraires',
  whatKicker: 'Sites web pour services funéraires',
  whatTitle: 'Des services funéraires',
  whatTitleItalic: 'qui accompagnent les familles de A à Z',
  whatPara1:
    'Les familles en deuil cherchent souvent un accompagnement complet : pompes funèbres, marbrerie, démarches administratives, cérémonie, contrats prévoyance. Plus vous couvrez ces prestations avec une seule équipe, plus vous soulagez les familles. Elles tapent "services funéraires + ville" pour trouver un interlocuteur unique qui prend tout en charge.',
  whatPara2:
    'Je construis des sites services funéraires qui montrent votre accompagnement global. Pages par prestation, démarches administratives expliquées, contrats prévoyance, équipe présentée avec humanité, ton bienveillant. Un site qui fait la différence pour les familles qui cherchent à ne pas s\'occuper de tout après un décès.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1518155317743-a8ff43ea6a5f-w800.webp',
  whatImageAlt: 'Création site internet pour services funéraires',
  pillars: [
    { icon: 'User', title: 'Accompagnement global', desc: 'De la démarche à la cérémonie, un seul interlocuteur. Levier différenciateur majeur.' },
    { icon: 'FileSearch', title: 'Démarches expliquées', desc: 'Page pratique qui rend service et génère du trafic SEO. Positionne en expert.' },
    { icon: 'Target', title: 'Prévoyance obsèques', desc: 'Clientèle sénior qui anticipe. Fidélisation long terme et nouveaux contrats.' },
  ],
  whatFooterText:
    'Un prestataire services funéraires bien référencé accompagne 20 à 50 familles par mois en phase de deuil ou de prévoyance.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre offre', description: 'Services proposés (pompes funèbres, marbrerie, fleurs, accompagnement), zones, équipe, partenariats, contrats prévoyance.' },
    { number: '02', title: 'Construction du site', description: 'Pages par prestation, démarches, prévoyance, équipe, ton sobre et bienveillant, contact 24/7.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières familles accompagnées, suivi des contrats prévoyance signés.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des familles à des services funéraires',
  keywordsIntro:
    'Les familles cherchent selon leur moment : obsèques en urgence, démarches administratives, prévoyance pour l\'avenir. Chaque besoin a ses requêtes.',
  keywordCategories: [
    { icon: 'Target', title: 'Global', text: 'services funéraires + ville, entreprise funéraire, organisation obsèques, funérarium + ville.' },
    { icon: 'FileSearch', title: 'Démarches', text: 'démarches après décès, déclaration de décès, succession décès, que faire après un décès.' },
    { icon: 'User', title: 'Prévoyance', text: 'contrat obsèques, prévoyance obsèques, organiser ses obsèques, assurance obsèques.' },
    { icon: 'Zap', title: 'Cérémonie', text: 'cérémonie civile, cérémonie laïque, personnalisation obsèques, musique obsèques.' },
  ],
  relatedTitle: 'Vous êtes dans un autre métier funéraire ?',
  relatedPara:
    'Les métiers funéraires ont une logique proche : dignité, accompagnement, sobriété. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet pompes funèbres', href: '/site-internet-pompes-funebres' },
    { label: 'Site internet marbrerie funéraire', href: '/site-internet-marbrerie-funeraire' },
    { label: 'Site internet crématorium', href: '/site-internet-crematorium' },
    { label: 'Site internet notaire', href: '/site-internet-notaire' },
  ],
  miniCtaText: 'Envie d\'un site qui accompagne les familles avec humanité de A à Z ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Services Funéraires', description, '/site-internet-services-funeraires', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Services Funéraires', description, '/site-internet-services-funeraires'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Services Funéraires', path: '/site-internet-services-funeraires' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetServicesFuneraresPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

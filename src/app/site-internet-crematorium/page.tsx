import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet crématorium : création de site web optimisé SEO. Cérémonie, crémation, hommage, urnes, columbarium — informer et accompagner les familles avec sobriété.'

export const metadata: Metadata = {
  title: 'Site Internet Crématorium | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-crematorium' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un crématorium a-t-il besoin d\'un site internet ?',
    answer: 'Oui, et c\'est devenu un outil essentiel pour les familles qui organisent des obsèques. La crémation représente désormais plus de 40 % des obsèques en France et continue de croître. Les familles cherchent "crématorium + leur ville", "cérémonie crémation", "déroulement crémation" pour s\'informer et préparer les obsèques. Un site clair et rassurant est un vrai accompagnement.',
  },
  {
    question: 'Quelles informations faut-il mettre en avant ?',
    answer: 'Le déroulé d\'une cérémonie de crémation, les salles disponibles (capacité, ambiance), les options (musique, projections, photos, intervenants), les horaires, les jardins du souvenir et columbariums. Les familles veulent comprendre ce qui va se passer pour se préparer émotionnellement et organiser les obsèques sereinement.',
  },
  {
    question: 'Peut-on présenter les tarifs sans paraître commercial ?',
    answer: 'Oui, à condition de rester sobre. Les tarifs crémation sont réglementés et les familles cherchent cette information. Je crée une page "Tarifs et prestations" qui présente les options de façon factuelle, avec les coûts par prestation (crémation, cérémonie, salle, urne). C\'est une information attendue qui évite les malentendus.',
  },
  {
    question: 'Le rôle du maître de cérémonie est-il à expliquer ?',
    answer: 'Oui, c\'est souvent méconnu des familles. Le maître de cérémonie accompagne, coordonne, personnalise, dirige le déroulé. Une page qui explique son rôle, les interventions possibles, la personnalisation de la cérémonie rassure les familles qui hésitent entre une cérémonie religieuse et civile, ou qui ne savent pas comment préparer cette étape.',
  },
]

const config: MetierConfig = {
  metier: 'Crématorium',
  metierLower: 'crématorium',
  heroKicker: 'Sites web pour crématorium',
  heroHeadline: 'Site internet crématorium,',
  heroHeadlineItalic: 'un accompagnement digne pour les familles',
  heroDescription:
    'Je crée des sites internet pour les crématoriums partout en France. Cérémonie, déroulement, salles, options de personnalisation, jardin du souvenir : chaque page accompagne les familles avec sobriété et respect.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour crématorium',
  whatKicker: 'Sites web pour crématorium',
  whatTitle: 'Un crématorium présenté',
  whatTitleItalic: 'pour rassurer les familles en amont',
  whatPara1:
    'Les familles qui choisissent la crémation pour un proche ont souvent peu de connaissances sur le déroulement. Elles se posent des questions sur la cérémonie, le temps disponible, les options de personnalisation, le devenir des cendres. Votre site est leur premier point d\'information. S\'il est clair, sobre, rassurant, vous accompagnez leur choix dans les meilleures conditions.',
  whatPara2:
    'Je construis des sites crématorium qui informent et rassurent avec dignité. Déroulement expliqué, salles présentées, options détaillées, jardins du souvenir, tarifs transparents, ton bienveillant. Un site qui donne aux familles les clés pour préparer sereinement cette étape difficile.',
  whatImageUrl: 'https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour crématorium',
  pillars: [
    { icon: 'FileSearch', title: 'Déroulement expliqué', desc: 'Cérémonie, temps, options : ce que les familles cherchent avant tout pour se préparer.' },
    { icon: 'User', title: 'Salles présentées', desc: 'Capacité, ambiance, équipements : aider les familles à choisir selon leur projet.' },
    { icon: 'Target', title: 'Ton digne', desc: 'Sobriété totale, accompagnement sans commercial. Protocole respectueux.' },
  ],
  whatFooterText:
    'Un crématorium bien référencé accompagne 30 à 80 familles par mois via les informations en ligne.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre établissement', description: 'Salles disponibles, capacité, options, jardins du souvenir, columbarium, tarifs, zone de rayonnement.' },
    { number: '02', title: 'Construction du site', description: 'Pages déroulement, salles, tarifs, options personnalisation, jardin du souvenir. Ton digne et informatif.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, accompagnement des familles en phase de préparation des obsèques.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des familles au crématorium',
  keywordsIntro:
    'Les familles en préparation d\'obsèques cherchent des informations précises sur la crémation, les options et le déroulé.',
  keywordCategories: [
    { icon: 'FileSearch', title: 'Info générale', text: 'crématorium + ville, cérémonie crémation, déroulement crémation, comment préparer crémation.' },
    { icon: 'Target', title: 'Options', text: 'cérémonie civile crémation, musique crémation, photos hommage, intervention famille.' },
    { icon: 'User', title: 'Devenir cendres', text: 'jardin du souvenir, columbarium, dispersion cendres, urne funéraire.' },
    { icon: 'Zap', title: 'Tarifs', text: 'prix crémation, tarif crématorium, coût cérémonie, tarif salle crémation.' },
  ],
  relatedTitle: 'Vous êtes dans un autre métier lié aux obsèques ?',
  relatedPara:
    'Les métiers funéraires ont une logique proche : dignité, information, accompagnement. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet pompes funèbres', href: '/site-internet-pompes-funebres' },
    { label: 'Site internet marbrerie funéraire', href: '/site-internet-marbrerie-funeraire' },
    { label: 'Site internet services funéraires', href: '/site-internet-services-funeraires' },
    { label: 'Site internet notaire', href: '/site-internet-notaire' },
  ],
  miniCtaText: 'Envie d\'un site crématorium qui accompagne les familles avec sobriété et clarté ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Crématorium', description, '/site-internet-crematorium', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Crématorium', description, '/site-internet-crematorium'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Crématorium', path: '/site-internet-crematorium' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetCrematoriumPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

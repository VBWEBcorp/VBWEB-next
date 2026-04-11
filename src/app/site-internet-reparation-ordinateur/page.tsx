import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet réparation ordinateur : création de site web optimisé SEO. PC, Mac, portable, écran, disque dur, batterie, devis — capter les urgences via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Réparation Ordinateur | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-reparation-ordinateur' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: '"Réparation ordinateur" est-elle une requête à cibler ?',
    answer: 'Oui, une des plus volumineuses en informatique. Contrairement à "dépannage" qui évoque une intervention à domicile, "réparation ordinateur" implique souvent qu\'on apporte le matériel en atelier. C\'est une clientèle différente : elle cherche un spécialiste qui change écran, clavier, batterie, disque, ventilateur. Une page dédiée à la réparation capte précisément ces clients avec des paniers 80-400 €.',
  },
  {
    question: 'Quels types de pannes faut-il mettre en avant ?',
    answer: 'Les plus tapées sur Google : écran cassé (PC portable et smartphone), batterie qui ne tient plus, disque dur défaillant, PC qui chauffe, ventilateur bruyant, liquide renversé, Mac qui ne démarre plus. Chaque panne a sa requête et sa tarification. Une page par panne majeure multiplie vos points d\'entrée sur Google.',
  },
  {
    question: 'Le devis gratuit est-il un levier de conversion ?',
    answer: 'Oui, énorme. Les clients ont peur de payer cher sans savoir ce qu\'ils vont payer. Proposer un devis gratuit (diagnostic offert avant engagement) élimine cette peur et augmente les entrées en atelier de 40 à 60 %. Je mets ce "devis gratuit" en avant sur le site avec un formulaire simple de prise de rendez-vous.',
  },
  {
    question: 'Mac et PC dans la même page ou séparés ?',
    answer: 'Séparés. Les utilisateurs Mac tapent très spécifiquement "réparation Mac + ville", "réparation MacBook", "Apple reparation" et ne se reconnaissent pas dans une offre PC généraliste. Une page "Réparation Mac" dédiée capte cette clientèle prête à payer plus cher pour un spécialiste, pendant qu\'une page "Réparation PC" couvre le gros du marché.',
  },
]

const config: MetierConfig = {
  metier: 'Réparation Ordinateur',
  metierLower: 'réparation ordinateur',
  heroKicker: 'Sites web pour réparation ordinateur',
  heroHeadline: 'Site internet réparation ordinateur,',
  heroHeadlineItalic: 'des clients qui apportent leur PC en atelier',
  heroDescription:
    'Je crée des sites internet pour les ateliers de réparation d\'ordinateurs partout en France. PC, Mac, portable, écran, disque, batterie, liquide : chaque page capte une panne précise avec tarif et devis gratuit pour rassurer.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour réparation ordinateur',
  whatKicker: 'Sites web pour réparation ordinateur',
  whatTitle: 'Une réparation ordinateur',
  whatTitleItalic: 'choisie pour sa transparence et son expertise',
  whatPara1:
    'Les clients qui cassent leur écran de portable ou qui ont un PC qui ne démarre plus ne veulent pas perdre leurs données. Ils cherchent "réparation PC + leur ville", "réparation MacBook écran cassé", "récupération données disque dur". Ils sont stressés et veulent un atelier qui les rassure : transparence sur les tarifs, devis gratuit, délai clair, garantie.',
  whatPara2:
    'Je construis des sites réparation ordinateur qui convertissent ces clients stressés. Pages par panne (écran, batterie, disque, clavier, liquide), pages distinctes Mac et PC, devis gratuit mis en avant, tarifs indicatifs, avis clients récents. Un site qui transforme les urgences Google en clients qui apportent leur matériel en atelier.',
  whatImageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour réparation ordinateur',
  pillars: [
    { icon: 'Target', title: 'Pages par panne', desc: 'Écran, batterie, disque, liquide : chaque panne capte sa requête spécifique.' },
    { icon: 'FileSearch', title: 'Devis gratuit', desc: 'Élimine la peur du prix inconnu. Augmente les entrées en atelier de 40 à 60%.' },
    { icon: 'User', title: 'Mac et PC séparés', desc: 'Deux clientèles, deux pages. La niche Mac paie souvent plus cher.' },
  ],
  whatFooterText:
    'Un atelier de réparation bien référencé reçoit 40 à 100 clients par mois via Google, avec des paniers 80-400 €.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre offre', description: 'Types de réparations, pièces détachées, délais, garanties, devis gratuit, zones couvertes, spécialités (Mac, PC, portable).' },
    { number: '02', title: 'Construction du site', description: 'Pages par panne et par marque, tarifs, devis gratuit, avis clients, formulaire de rendez-vous.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée avec horaires, premiers clients, suivi des conversions atelier.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des clients en réparation ordinateur',
  keywordsIntro:
    'Les clients cherchent leur panne précise ou leur marque. Chaque requête correspond à un problème concret et souvent urgent.',
  keywordCategories: [
    { icon: 'Target', title: 'PC général', text: 'réparation PC, réparation ordinateur, réparation portable, dépannage ordinateur.' },
    { icon: 'Zap', title: 'Mac', text: 'réparation Mac, réparation MacBook, réparation iMac, réparation écran MacBook.' },
    { icon: 'FileSearch', title: 'Pannes', text: 'écran PC cassé, batterie portable HS, disque dur mort, clavier cassé, liquide ordinateur.' },
    { icon: 'User', title: 'Données', text: 'récupération données disque dur, clé USB illisible, carte SD corrompue, récupération photos.' },
  ],
  relatedTitle: 'Vous proposez d\'autres services informatiques ?',
  relatedPara:
    'Les métiers informatiques ont une logique proche : urgence, tarifs, confiance. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet dépannage informatique', href: '/site-internet-depannage-informatique' },
    { label: 'Site internet technicien informatique', href: '/site-internet-technicien-informatique' },
    { label: 'Site internet infogérance', href: '/site-internet-infogerance' },
    { label: 'Site internet assistance informatique', href: '/site-internet-assistance-informatique' },
  ],
  miniCtaText: 'Envie d\'un atelier de réparation qui se remplit sans prospection ?',
  caseStudiesKicker: 'Sites créés pour des prestataires',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Réparation Ordinateur', description, '/site-internet-reparation-ordinateur', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Réparation Ordinateur', description, '/site-internet-reparation-ordinateur'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Réparation Ordinateur', path: '/site-internet-reparation-ordinateur' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetReparationOrdinateurPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

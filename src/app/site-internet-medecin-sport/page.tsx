import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet médecin du sport : création de site web optimisé SEO. Certificat aptitude, blessures, suivi sportif, préparation course, médecine de l\'effort — conforme CNOM.'

export const metadata: Metadata = {
  title: 'Site Internet Médecin du Sport | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-medecin-sport' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un médecin du sport gagne-t-il à avoir un site internet dédié ?',
    answer: 'Oui, la médecine du sport est une spécialité très recherchée sur Google. Les sportifs amateurs comme les licenciés cherchent un médecin spécifique pour les certificats d\'aptitude, le suivi de blessure, ou une préparation à une compétition. Sans site ciblé sur la médecine du sport, vous captez seulement les patients de bouche-à-oreille et les consultations mieux valorisées vous échappent.',
  },
  {
    question: 'Quelles sont les requêtes les plus rentables pour un médecin du sport ?',
    answer: '"Certificat médical sport + ville", "médecin du sport + ville", "bilan médecine du sport", "consultation reprise sport". Ces requêtes amènent des sportifs adultes prêts à payer en direct, souvent hors parcours de soin classique. Je crée une page par motif de consultation pour remonter sur chacune de ces requêtes.',
  },
  {
    question: 'La traumatologie sportive peut-elle être valorisée via le site ?',
    answer: 'C\'est un levier fort. Entorse de cheville, tendinite d\'Achille, pubalgie, lésion musculaire : les sportifs blessés cherchent un médecin qui comprend leur pratique et qui propose un protocole de reprise. Une page par blessure type, avec explications claires sur la prise en charge, vous positionne comme le référent local.',
  },
  {
    question: 'Est-ce que vous gérez l\'interface avec les clubs et les fédérations ?',
    answer: 'Oui, je peux intégrer une page "Partenariats clubs et fédérations" qui liste vos conventions, vos vacations dans les clubs, et qui devient un point d\'entrée pour les présidents de club cherchant un médecin référent. C\'est un levier B2B peu exploité qui peut ramener une patientèle stable.',
  },
]

const config: MetierConfig = {
  metier: 'Médecin du Sport',
  metierLower: 'médecin du sport',
  heroKicker: 'Sites web pour médecin du sport',
  heroHeadline: 'Site internet médecin du sport,',
  heroHeadlineItalic: 'une patientèle sportive qui vous trouve',
  heroDescription:
    'Je crée des sites internet pour les médecins du sport partout en France. Certificat d\'aptitude, suivi de blessure, médecine de l\'effort, préparation course : chaque page capte une requête spécifique de sportif en recherche active.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour médecin du sport',
  whatKicker: 'Sites web pour médecin du sport',
  whatTitle: 'Un médecin du sport',
  whatTitleItalic: 'trouvé par les sportifs qui en ont besoin',
  whatPara1:
    'Les sportifs ne se contentent pas d\'un médecin généraliste quand ils ont une blessure ou préparent une compétition. Ils cherchent activement un médecin du sport formé, qui comprend leur pratique et leurs exigences. Les requêtes "médecin du sport + ville", "bilan médecine du sport", "traumatologie sport + ville" sont très qualifiées, avec des patients prêts à consulter rapidement.',
  whatPara2:
    'Je construis des sites médecin du sport qui captent cette patientèle ciblée. Pages par motif de consultation, présentation de votre parcours et vos formations spécifiques (capacité, DESC, DU), partenariats clubs, liens avec kinés et préparateurs. Conforme à la déontologie CNOM.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1571019613454-1cb2f99b2d8b-w800.webp',
  whatImageAlt: 'Création site internet pour médecin du sport',
  pillars: [
    { icon: 'Target', title: 'Page certificat d\'aptitude', desc: 'La requête la plus volumineuse. Patients directs, consultation rapide, panier net.' },
    { icon: 'FileSearch', title: 'Traumatologie sportive', desc: 'Entorse, tendinite, lésion : une page par pathologie = une requête Google différente.' },
    { icon: 'User', title: 'Partenariats clubs', desc: 'Vacations, conventions, médecin référent. Levier B2B souvent sous-exploité.' },
  ],
  whatFooterText:
    'Un médecin du sport bien référencé capte 15 à 35 nouveaux sportifs par mois via Google après 3 mois.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre pratique', description: 'Capacité, DU, DESC, partenariats clubs, types de consultations (aptitude, suivi, traumato, reprise, préparation), zone d\'intervention.' },
    { number: '02', title: 'Construction du site', description: 'Pages par motif de consultation, parcours valorisé, partenariats, conformité CNOM. Intégration prise de rendez-vous.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée avec catégorie "médecin du sport", premiers sportifs qui trouvent le cabinet.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des sportifs à un médecin du sport',
  keywordsIntro:
    'Les sportifs ont des besoins précis et spécifiques qui ne correspondent pas à un généraliste. Chaque requête reflète un moment de leur parcours sportif.',
  keywordCategories: [
    { icon: 'FileSearch', title: 'Certificats', text: 'certificat médical sport, certificat compétition, visite no-contre-indication, certificat licence.' },
    { icon: 'Zap', title: 'Traumatologie', text: 'entorse cheville, tendinite achille, pubalgie, lésion musculaire, douleur genou sport.' },
    { icon: 'Target', title: 'Suivi', text: 'bilan médecine du sport, préparation marathon, suivi sportif, VO2max, test effort.' },
    { icon: 'User', title: 'Publics', text: 'médecin enfant sportif, médecin du sport femme, masters sport, médecin club.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel de santé du sport ?',
  relatedPara:
    'Les métiers autour de la santé sportive ont une logique SEO proche : public ciblé, pathologies spécifiques, ton expert. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet médecin', href: '/site-internet-medecin' },
    { label: 'Site internet kiné', href: '/site-internet-kine' },
    { label: 'Site internet ostéopathe', href: '/site-internet-osteopathe' },
    { label: 'Site internet coach sportif', href: '/site-internet-coach-sportif' },
  ],
  miniCtaText: 'Envie de capter une patientèle sportive ciblée et motivée ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Médecin du Sport', description, '/site-internet-medecin-sport', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Médecin du Sport', description, '/site-internet-medecin-sport'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Médecin du Sport', path: '/site-internet-medecin-sport' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetMedecinSportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

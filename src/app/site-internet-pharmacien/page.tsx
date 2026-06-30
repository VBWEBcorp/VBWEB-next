import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet pharmacien : création de site web optimisé SEO. Entretien pharmaceutique, vaccination, suivi traitement, conseils santé — conforme Code santé publique.'

export const metadata: Metadata = {
  title: 'Site Internet Pharmacien | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-pharmacien' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un pharmacien titulaire a-t-il besoin d\'un site internet personnel en plus de celui de la pharmacie ?',
    answer: 'Oui, si vous voulez valoriser votre expertise personnelle et vos nouvelles missions (vaccination, entretien pharmaceutique, suivi traitements chroniques, bilans de médication). Un site orienté "pharmacien" plutôt que "officine" met en avant vos compétences professionnelles et permet de capter les requêtes liées à ces nouveaux rôles du pharmacien.',
  },
  {
    question: 'Les nouvelles missions du pharmacien sont-elles des leviers SEO ?',
    answer: 'Énormément. Les patients cherchent "vaccination pharmacie + ville", "entretien pharmaceutique", "bilan médication + ville". Ce sont des services récents que peu d\'officines mettent encore en valeur sur leur site. Une page par mission vous positionne en avance sur la concurrence et vous amène une patientèle directement intéressée.',
  },
  {
    question: 'Peut-on proposer des conseils santé sans enfreindre les règles ?',
    answer: 'Oui, à condition de rester dans votre rôle d\'accompagnement et d\'information. Je rédige vos pages conseils dans le respect strict du Code de la santé publique : pas de diagnostic, pas de prescription, pas de promotion de médicaments. Conseils d\'hygiène de vie, explications sur les pathologies courantes, informations sur le bon usage des médicaments.',
  },
  {
    question: 'Mon rôle évolue vers la santé publique, comment le refléter ?',
    answer: 'Par des pages dédiées à vos engagements : accompagnement des patients chroniques, éducation thérapeutique, prévention, vaccination, dépistages en pharmacie. C\'est un positionnement d\'expert santé publique qui vous différencie des officines classiques focalisées sur la délivrance.',
  },
]

const config: MetierConfig = {
  metier: 'Pharmacien',
  metierLower: 'pharmacien',
  heroKicker: 'Sites web pour pharmacien',
  heroHeadline: 'Site internet pharmacien,',
  heroHeadlineItalic: 'un professionnel de santé au-delà de l\'officine',
  heroDescription:
    'Je crée des sites internet pour les pharmaciens titulaires et adjoints partout en France. Vaccination, entretien pharmaceutique, suivi chronique, conseils santé : chaque page valorise votre expertise professionnelle et vos nouvelles missions.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour pharmacien',
  whatKicker: 'Sites web pour pharmacien',
  whatTitle: 'Un pharmacien professionnel',
  whatTitleItalic: 'au-delà du comptoir',
  whatPara1:
    'Le métier de pharmacien a profondément évolué : vaccination, entretien pharmaceutique, bilan de médication, dépistages, accompagnement des patients chroniques. Ces nouvelles missions transforment votre rôle, mais peu d\'officines les valorisent correctement auprès du public. Les patients cherchent ces services sur Google sans savoir que vous les proposez.',
  whatPara2:
    'Je construis des sites pharmacien qui mettent en avant votre expertise professionnelle. Pages par mission, positionnement d\'expert santé publique, conseils conformes au Code de la santé publique, mise en avant de votre rôle de proximité. Ce qui vous différencie des sites d\'officine classiques orientés produit.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1587854692152-cbe660dbde88-w800.webp',
  whatImageAlt: 'Création site internet pour pharmacien',
  pillars: [
    { icon: 'Target', title: 'Missions valorisées', desc: 'Vaccination, entretien, bilan médication : chaque mission = une requête Google spécifique.' },
    { icon: 'User', title: 'Expert santé publique', desc: 'Positionnement professionnel qui vous différencie des officines focalisées produit.' },
    { icon: 'FileSearch', title: 'Conseils conformes', desc: 'Respect strict du Code santé publique tout en restant utile et visible.' },
  ],
  whatFooterText:
    'Un pharmacien qui valorise ses nouvelles missions capte 30 à 80 patients de plus par mois sur ces prestations.',
  timelineSteps: [
    { number: '01', title: 'On cadre vos missions', description: 'Vaccination, entretien pharmaceutique, bilan médication, dépistages, éducation thérapeutique, accompagnement chronique.' },
    { number: '02', title: 'Construction du site', description: 'Pages par mission, positionnement professionnel, conseils conformes, prise de rendez-vous.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée avec les nouvelles missions, premières prises de rendez-vous, ajustements.' },
  ],
  keywordsTitle: 'Les requêtes Google qui valorisent l\'expertise d\'un pharmacien',
  keywordsIntro:
    'Les patients cherchent de plus en plus des services spécifiques du pharmacien, au-delà de la simple délivrance de médicaments.',
  keywordCategories: [
    { icon: 'Target', title: 'Missions', text: 'vaccination pharmacie, entretien pharmaceutique, bilan médication, suivi asthme pharmacie.' },
    { icon: 'User', title: 'Accompagnement', text: 'accompagnement diabète, accompagnement anticoagulants, conseil traitement chronique.' },
    { icon: 'Zap', title: 'Dépistages', text: 'test antigénique, dépistage Covid, test cystite, test pharyngite.' },
    { icon: 'FileSearch', title: 'Conseil', text: 'conseil pharmacien, orientation médicament, interactions médicamenteuses.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel de santé ?',
  relatedPara:
    'Les métiers de santé libérale ont une logique SEO proche : valoriser les actes et missions, respecter la déontologie. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet pharmacie', href: '/site-internet-pharmacie' },
    { label: 'Site internet parapharmacie', href: '/site-internet-parapharmacie' },
    { label: 'Site internet médecin', href: '/site-internet-medecin' },
    { label: 'Site internet sage-femme', href: '/site-internet-sage-femme' },
  ],
  miniCtaText: 'Envie de valoriser vos nouvelles missions de pharmacien auprès des patients ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Pharmacien', description, '/site-internet-pharmacien', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Pharmacien', description, '/site-internet-pharmacien'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Pharmacien', path: '/site-internet-pharmacien' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetPharmacienPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet dentiste : création de site web optimisé SEO pour cabinets dentaires. Prise de rendez-vous en ligne, urgences dentaires, implantologie, orthodontie — capter les patients qui cherchent sur Google.'

export const metadata: Metadata = {
  title: 'Site Internet Dentiste | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-dentiste' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un dentiste a-t-il vraiment besoin d\'un site internet en 2026 ?',
    answer: 'Oui, plus que jamais. Un nouveau patient ne choisit plus son dentiste au hasard : il tape "dentiste + ville" sur Google, regarde les avis, consulte les photos du cabinet, et parfois prend rendez-vous en ligne sans même vous appeler. Sans site internet bien construit, vous perdez la main sur la première impression et vous laissez la place à la concurrence qui, elle, apparaît en haut des résultats.',
  },
  {
    question: 'Combien coûte la création d\'un site pour un cabinet dentaire ?',
    answer: 'Un site vitrine dentiste complet démarre autour de 1 800 euros. Il inclut une page par spécialité (soins généraux, implantologie, orthodontie, urgence dentaire), un module de prise de rendez-vous, la présentation de l\'équipe, les tarifs transparents et la conformité RGPD obligatoire pour les professionnels de santé.',
  },
  {
    question: 'Le site peut-il intégrer un module de prise de rendez-vous en ligne ?',
    answer: 'Oui, et c\'est même un des points les plus demandés par les patients aujourd\'hui. Je connecte votre site avec Doctolib, Maiia ou un système maison selon vos préférences, pour que les patients puissent réserver un créneau sans passer par votre secrétariat. Ça décharge votre standard et ça capte les rendez-vous hors horaires d\'ouverture.',
  },
  {
    question: 'Quelles pages doit contenir un site de dentiste pour bien remonter sur Google ?',
    answer: 'Au minimum : accueil, présentation du cabinet et de l\'équipe, une page par spécialité (omnipratique, implantologie, orthodontie, parodontologie, esthétique dentaire), une page urgence dentaire, une page premier rendez-vous, tarifs, avis patients et contact avec plan d\'accès. Chaque page doit cibler une requête précise comme "implant dentaire + ville" ou "urgence dentaire dimanche".',
  },
  {
    question: 'Est-ce conforme aux règles déontologiques de l\'Ordre des chirurgiens-dentistes ?',
    answer: 'Oui, je connais les règles. Pas de publicité comparative, pas de promesse de résultat, pas de tarifs promotionnels. Le site doit rester informatif : présenter vos compétences, vos équipements, votre cabinet, et faciliter la prise de contact. Je rédige chaque page en respectant strictement le Code de déontologie dentaire tout en restant efficace sur Google.',
  },
  {
    question: 'Comment attirer de nouveaux patients grâce au site ?',
    answer: 'Par trois leviers combinés. Un SEO local solide (fiche Google Business Profile optimisée, page par ville si vous avez plusieurs cabinets, avis patients récents), un contenu clair qui rassure (photos du cabinet, biographie des praticiens, explication des soins), et des appels à l\'action visibles (prise de rendez-vous, numéro cliquable). Les premiers nouveaux patients venant du site arrivent généralement en 2 à 4 mois.',
  },
  {
    question: 'Mon cabinet est dans une petite ville, est-ce que ça vaut le coup ?',
    answer: 'Encore plus. Dans une petite ville, vous avez souvent 1 à 3 concurrents au maximum. Un site bien construit vous place immédiatement en tête des résultats locaux. C\'est beaucoup plus facile et rentable que dans une métropole saturée. Beaucoup de mes clients dentistes sont en zone rurale ou péri-urbaine et leurs agendas se remplissent vite.',
  },
  {
    question: 'Et la maintenance après la mise en ligne ?',
    answer: 'Je propose un forfait maintenance mensuel qui couvre les mises à jour techniques, les sauvegardes, les petites modifications de contenu (nouveaux praticiens, changements d\'horaires, nouveaux soins proposés) et le suivi SEO. Vous ne touchez à rien, vous recevez juste un rapport de performance chaque mois.',
  },
]

const config: MetierConfig = {
  metier: 'Dentiste',
  metierLower: 'dentiste',
  heroKicker: 'Sites web pour dentiste',
  heroHeadline: 'Site internet dentiste,',
  heroHeadlineItalic: 'un agenda qui se remplit tout seul',
  heroDescription:
    'Je crée des sites internet pour les chirurgiens-dentistes et cabinets dentaires partout en France. Prise de rendez-vous en ligne, pages spécialités (implant, orthodontie, esthétique), urgences dentaires : chaque page est pensée pour apparaître quand un patient cherche un dentiste sur Google.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour dentiste',
  whatKicker: 'Sites web pour dentiste',
  whatTitle: 'Un cabinet dentaire qu\'on trouve',
  whatTitleItalic: 'avant même le bouche-à-oreille',
  whatPara1:
    'Un patient qui cherche un dentiste a souvent une raison précise : une douleur qui dure, une urgence, un déménagement, un besoin d\'implant ou d\'orthodontie. Il tape sur son téléphone "dentiste + sa ville" ou une requête plus spécifique comme "implant dentaire" ou "urgence dentaire weekend". Si votre cabinet n\'apparaît pas dans les trois premiers résultats, il va voir ailleurs — et la première impression est déjà perdue.',
  whatPara2:
    'Je construis des sites qui captent exactement ces moments. Une page par spécialité clairement expliquée, une prise de rendez-vous visible dès l\'accueil, des photos qui rassurent sur l\'hygiène et le matériel, les parcours des praticiens, et une fiche Google optimisée pour remonter sur la carte locale. Tout cela dans le respect strict des règles déontologiques de l\'Ordre.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1606811971618-4486d14f3f99-w800.webp',
  whatImageAlt: 'Création site internet pour cabinet dentaire',
  pillars: [
    { icon: 'User', title: 'RDV en ligne intégré', desc: 'Module Doctolib ou système maison connecté à votre agenda. Le patient réserve en un clic.' },
    { icon: 'FileSearch', title: 'Pages spécialités', desc: 'Implant, orthodontie, urgence, esthétique : une page par soin pour capter chaque requête.' },
    { icon: 'TrendingUp', title: 'Fiche Google patients', desc: 'Optimisée pour apparaître dans le pack local avec avis, horaires, photos, itinéraire.' },
  ],
  whatFooterText:
    'Un site dentiste bien référencé attire en moyenne entre 15 et 40 nouveaux patients par mois après 3 à 4 mois en ligne.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre cabinet', description: 'Au téléphone, on liste vos spécialités, votre équipe, votre zone de chalandise, vos outils (agenda, logiciel dentaire, téléconsultation). Je prends tout en note et j\'identifie les requêtes sur lesquelles il faut se positionner.' },
    { number: '02', title: 'Je construis le site', description: 'Je rédige chaque page spécialité dans le respect de la déontologie, j\'intègre vos photos du cabinet, je connecte le module de prise de rendez-vous, j\'optimise pour les requêtes locales. Vous validez avant la mise en ligne.' },
    { number: '03', title: 'Mise en ligne et suivi patients', description: 'Le site passe en ligne, la fiche Google Business Profile est optimisée, les premiers rendez-vous arrivent. On regarde ensemble les statistiques et on ajuste les pages qui remontent moins vite.' },
  ],
  keywordsTitle: 'Les requêtes Google qui remplissent un agenda de dentiste',
  keywordsIntro:
    'Toutes les recherches ne se valent pas. Un patient qui tape "blanchiment dents maison" veut un tuto gratuit. Un patient qui tape "implant dentaire + ville" ou "urgence dentaire dimanche" est prêt à prendre rendez-vous tout de suite. Je construis votre site autour de ces requêtes à fort potentiel de conversion.',
  keywordCategories: [
    { icon: 'Zap', title: 'Urgence', text: 'urgence dentaire, dentiste dimanche, douleur dentaire, dent cassée, abcès dentaire.' },
    { icon: 'Target', title: 'Spécialités', text: 'implant dentaire, orthodontie invisible, blanchiment dentaire, couronne céramique.' },
    { icon: 'User', title: 'Parcours patient', text: 'premier rendez-vous, dentiste enfant, téléconsultation, prise de rendez-vous en ligne.' },
    { icon: 'MapPin', title: 'Local', text: 'dentiste + nom de ville, cabinet dentaire + quartier, chirurgien-dentiste proche.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel de santé ?',
  relatedPara:
    'La méthode est la même pour chaque professionnel du secteur médical : rassurer, expliquer, faciliter le premier contact, tout en respectant les règles déontologiques. Si vous n\'êtes pas dentiste, j\'ai des pages dédiées à d\'autres métiers de santé.',
  relatedLinks: [
    { label: 'Site internet médecin', href: '/site-internet-medecin' },
    { label: 'Site internet pharmacie', href: '/site-internet-pharmacie' },
    { label: 'Site internet sage-femme', href: '/site-internet-sage-femme' },
    { label: 'Site internet diététicien', href: '/site-internet-dieteticien' },
  ],
  miniCtaText: 'Envie de remplir votre agenda dentaire grâce à Google ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Dentiste', description, '/site-internet-dentiste', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Dentiste', description, '/site-internet-dentiste'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Dentiste', path: '/site-internet-dentiste' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetDentistePage() {
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

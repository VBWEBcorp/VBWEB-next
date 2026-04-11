import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet sage-femme : création de site web optimisé SEO pour sages-femmes libérales. Préparation naissance, rééducation périnée, allaitement, consultations post-natales — capter les patientes via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Sage-Femme | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-sage-femme' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Une sage-femme libérale a-t-elle vraiment besoin d\'un site internet ?',
    answer: 'Oui, surtout en libéral. Vos patientes ne viennent pas par prescription : elles vous cherchent directement. Une femme enceinte qui commence ses cours de préparation, une jeune maman qui cherche une rééducation du périnée ou un suivi d\'allaitement — toutes passent par Google avant de prendre rendez-vous. Sans site, vous n\'existez pas à ce moment crucial où elles choisissent avec qui elles vont vivre une étape très intime.',
  },
  {
    question: 'Combien coûte la création d\'un site pour sage-femme ?',
    answer: 'Un site vitrine complet pour sage-femme libérale démarre à 1 400 euros. Cela inclut votre présentation et parcours, une page par acte (préparation naissance, rééducation périnée, consultations post-natales, suivi gynécologique de prévention, entretien prénatal précoce), les modalités de rendez-vous et le respect RGPD santé.',
  },
  {
    question: 'Dois-je faire une page par acte ou tout regrouper ?',
    answer: 'Une page par acte, toujours. Chaque prestation correspond à une recherche Google différente. "Préparation naissance + ville", "rééducation périnée + ville", "suivi allaitement + ville" sont trois requêtes distinctes avec trois intentions différentes. Si vous les mélangez sur une seule page "Mes consultations", vous ne remontez sur aucune. Une page par acte, c\'est trois fois plus de patientes captées.',
  },
  {
    question: 'Est-ce conforme aux règles déontologiques du Conseil National des Sages-Femmes ?',
    answer: 'Oui. Je connais les règles du CNOSF : pas de publicité comparative, pas de promesse de résultat, mention obligatoire de votre numéro RPPS et de votre ordre, respect de la confidentialité patiente. Le site présente vos compétences et facilite le premier contact, sans jamais basculer dans le commercial.',
  },
  {
    question: 'Comment attirer de nouvelles patientes grâce au site ?',
    answer: 'Par un SEO local fort sur les requêtes "sage-femme + ville" et "sage-femme libérale + ville", couplé à une fiche Google Business Profile optimisée. Les futures mamans cherchent en général dans un rayon de 5 à 10 km autour de chez elles, donc le local prime sur tout. Les premières nouvelles patientes arrivent entre 2 et 3 mois après la mise en ligne.',
  },
  {
    question: 'Est-ce que vous gérez la prise de rendez-vous en ligne ?',
    answer: 'Oui, j\'intègre le système de votre choix : Doctolib, Maiia, Keldoc, ou un formulaire maison envoyé vers votre email. Les patientes qui commencent une préparation à la naissance veulent souvent réserver plusieurs séances d\'affilée, donc un système qui gère les cycles de rendez-vous est précieux.',
  },
  {
    question: 'Mon activité est orientée périnatalité + gynéco, le site reflète bien les deux ?',
    answer: 'Oui, c\'est même important de bien distinguer les deux. Une page "Suivi gynécologique de prévention" (frottis, contraception, ménopause) à part de la page "Préparation à la naissance" ou "Post-partum". Beaucoup de femmes ne savent pas qu\'une sage-femme peut être leur référente gynécologique toute la vie : votre site peut le leur apprendre.',
  },
]

const config: MetierConfig = {
  metier: 'Sage-Femme',
  metierLower: 'sage-femme',
  heroKicker: 'Sites web pour sage-femme',
  heroHeadline: 'Site internet sage-femme,',
  heroHeadlineItalic: 'des patientes qui vous trouvent au bon moment',
  heroDescription:
    'Je crée des sites internet pour les sages-femmes libérales partout en France. Préparation naissance, rééducation périnée, suivi gynécologique, allaitement : chaque acte a sa page, et chaque page est pensée pour apparaître quand une femme en a besoin.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour sage-femme',
  whatKicker: 'Sites web pour sage-femme libérale',
  whatTitle: 'Une sage-femme qu\'on trouve',
  whatTitleItalic: 'quand on vient d\'apprendre qu\'on est enceinte',
  whatPara1:
    'Le parcours d\'une future maman commence presque toujours par une recherche Google. "Préparation naissance + ville", "entretien prénatal + ville", "sage-femme libérale + ville" : ce sont des requêtes avec une intention très forte, des femmes qui cherchent à prendre rendez-vous dans la semaine. Si vous n\'êtes pas visible, elles iront chez une consœur mieux référencée, et vous passez à côté d\'un suivi qui peut durer des mois.',
  whatPara2:
    'Je construis des sites sage-femme qui captent ces moments. Une page par acte (préparation naissance, périnée, allaitement, post-partum, gynécologie de prévention), une présentation de votre parcours et de votre approche, la prise de rendez-vous en ligne, et une fiche Google Business Profile optimisée pour remonter sur la carte locale. Le tout dans le respect total de la déontologie CNOSF.',
  whatImageUrl: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour sage-femme libérale',
  pillars: [
    { icon: 'User', title: 'Une page par acte', desc: 'Préparation, périnée, allaitement, gynéco : chaque acte a sa page, chaque page cible sa requête.' },
    { icon: 'MapPin', title: 'SEO local futures mamans', desc: 'Pack Google optimisé pour remonter sur "sage-femme + votre ville" et variantes.' },
    { icon: 'MessageCircle', title: 'Approche rassurante', desc: 'Textes humains, votre parcours, votre philosophie. Les patientes veulent connaître la personne.' },
  ],
  whatFooterText:
    'Un site sage-femme bien construit remplit les créneaux de préparation à la naissance en quelques semaines après la mise en ligne.',
  timelineSteps: [
    { number: '01', title: 'On parle de votre pratique', description: 'Au téléphone, on liste vos actes (préparation, périnée, post-partum, gynéco, consultations à domicile), votre zone, votre approche. Je repère ce qui vous différencie et comment le mettre en avant.' },
    { number: '02', title: 'Construction du site', description: 'Je rédige chaque page acte avec un ton humain, j\'intègre votre parcours, je connecte la prise de rendez-vous, j\'optimise pour le SEO local. Tout dans le respect de la déontologie CNOSF.' },
    { number: '03', title: 'Mise en ligne + Google', description: 'Le site passe en ligne, la fiche Google est optimisée, on regarde ensemble les premières prises de rendez-vous. J\'ajuste les pages qui remontent moins vite.' },
  ],
  keywordsTitle: 'Les requêtes Google qui remplissent un planning de sage-femme',
  keywordsIntro:
    'Les futures mamans et jeunes mères cherchent des requêtes très spécifiques, avec une intention de prise de rendez-vous immédiate. Je construis votre site autour de ces requêtes à forte conversion.',
  keywordCategories: [
    { icon: 'User', title: 'Périnatalité', text: 'préparation à la naissance, entretien prénatal, suivi grossesse, cours accouchement.' },
    { icon: 'Target', title: 'Post-partum', text: 'rééducation périnée, rééducation post-partum, consultation allaitement, pleurs bébé.' },
    { icon: 'FileSearch', title: 'Gynécologie', text: 'frottis sage-femme, contraception, suivi gynéco prévention, pose stérilet.' },
    { icon: 'MapPin', title: 'Local', text: 'sage-femme + ville, sage-femme libérale proche, sage-femme à domicile, sage-femme conventionnée.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel de santé féminine ?',
  relatedPara:
    'Les métiers du suivi féminin et de la petite enfance ont une logique SEO proche : requêtes locales, besoin de rassurer, approche humaine. Voici les autres pages métiers disponibles.',
  relatedLinks: [
    { label: 'Site internet médecin', href: '/site-internet-medecin' },
    { label: 'Site internet kiné', href: '/site-internet-kine' },
    { label: 'Site internet psychologue', href: '/site-internet-psychologue' },
    { label: 'Site internet diététicien', href: '/site-internet-dieteticien' },
  ],
  miniCtaText: 'Envie d\'un planning de sage-femme qui se remplit sans effort ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Sage-Femme', description, '/site-internet-sage-femme', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Sage-Femme', description, '/site-internet-sage-femme'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Sage-Femme', path: '/site-internet-sage-femme' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetSageFemmePage() {
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

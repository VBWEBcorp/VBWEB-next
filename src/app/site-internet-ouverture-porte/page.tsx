import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet ouverture de porte : création de site web optimisé SEO. Porte claquée, clé oubliée, serrurier non destructif, intervention rapide — capter les clients via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Ouverture de Porte | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-ouverture-porte' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Pourquoi une page dédiée à l\'ouverture de porte et pas juste "serrurier" ?',
    answer: 'Parce que "ouverture de porte" et "porte claquée" sont des requêtes distinctes avec un volume énorme et une intention très précise. Les gens qui tapent ça cherchent un intervenant qui ouvre une porte sans dégâts, pas un installateur. Une page dédiée capte cette intention spécifique et ressort mieux que vos concurrents généralistes.',
  },
  {
    question: 'L\'ouverture non destructive est-elle un argument fort ?',
    answer: 'C\'est LE argument. Les clients craignent qu\'un serrurier casse leur serrure (coût supplémentaire de remplacement à 200-400 euros). Une page qui explique clairement votre technique d\'ouverture non destructive (crochetage, bump, radio) rassure énormément et justifie votre tarif face aux autres qui cassent. C\'est aussi un différenciateur SEO puissant.',
  },
  {
    question: 'Faut-il expliquer le déroulé de l\'intervention ?',
    answer: 'Oui, pour casser la méfiance. "On arrive en 30 min, on identifie votre serrure, on ouvre en quelques minutes, on vous présente la facture, vous payez en carte ou espèces, on s\'en va." Ce déroulé rassurant évite les surprises et convertit les clients hésitants. C\'est aussi ce qui justifie des avis Google positifs après intervention.',
  },
  {
    question: 'Le prix d\'une ouverture de porte est-il à afficher ?',
    answer: 'Oui, une fourchette au minimum. "À partir de 90 € en journée, 150 € la nuit, 180 € le dimanche" donne un ancrage clair. Sans prix, les clients imaginent le pire (lié aux arnaques médiatisées) et ne vous appellent pas. Avec un prix clair, ils se sentent en sécurité et appellent sans crainte.',
  },
]

const config: MetierConfig = {
  metier: 'Ouverture de Porte',
  metierLower: 'ouverture de porte',
  heroKicker: 'Sites web pour ouverture de porte',
  heroHeadline: 'Site internet ouverture de porte,',
  heroHeadlineItalic: 'un spécialiste qui ouvre sans casser',
  heroDescription:
    'Je crée des sites internet pour les serruriers spécialisés en ouverture de porte partout en France. Porte claquée, clé oubliée, serrure bloquée : chaque page met en avant votre technique d\'ouverture non destructive et votre tarification transparente.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour ouverture de porte',
  whatKicker: 'Sites web pour ouverture de porte',
  whatTitle: 'Un ouvreur de porte',
  whatTitleItalic: 'choisi pour ne pas casser la serrure',
  whatPara1:
    'Les requêtes "porte claquée + ville" et "ouverture de porte + ville" sont parmi les plus recherchées en serrurerie. Elles reflètent une situation précise : un client dehors, une porte fermée à clé, un besoin d\'intervention immédiate. La différence entre un bon et un mauvais ouvreur de porte, c\'est de savoir ouvrir sans casser — et de le communiquer clairement sur son site.',
  whatPara2:
    'Je construis des sites ouverture de porte qui mettent en avant votre compétence non destructive. Page technique détaillée (crochetage, bump, radio), tarifs clairs, déroulé rassurant, avis Google, fiche Google Business Profile optimisée. Les clients comprennent pourquoi ils doivent vous choisir plutôt qu\'un apprenti qui casse tout.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1558002038-1055907df827-w800.webp',
  whatImageAlt: 'Création site internet pour ouverture de porte',
  pillars: [
    { icon: 'Target', title: 'Non destructif mis en avant', desc: 'Votre compétence technique qui justifie le tarif et évite la casse à 200-400 €.' },
    { icon: 'FileSearch', title: 'Tarifs clairs', desc: 'Fourchette par situation (jour, nuit, weekend). Le client sait ce qu\'il paie avant d\'appeler.' },
    { icon: 'Zap', title: 'Déroulé rassurant', desc: 'Étapes d\'intervention expliquées. Casse la méfiance liée aux arnaques médiatisées.' },
  ],
  whatFooterText:
    'Un site ouverture de porte bien référencé reçoit 15 à 35 appels qualifiés par semaine dans sa zone.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre technique', description: 'Techniques maîtrisées, types de serrures, zones, tarifs, délai d\'intervention, certifications.' },
    { number: '02', title: 'Construction du site', description: 'Page technique, tarifs, déroulé, avis Google, design mobile-first. Ton pro et rassurant.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google Business optimisée avec catégorie serrurier, premiers appels, suivi.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des appels d\'ouverture de porte',
  keywordsIntro:
    'Les requêtes ouverture de porte varient selon la situation du client, toujours avec une intention d\'intervention immédiate.',
  keywordCategories: [
    { icon: 'Zap', title: 'Urgence', text: 'porte claquée, porte bloquée, clé oubliée, clé cassée dans la serrure, clé perdue.' },
    { icon: 'Target', title: 'Technique', text: 'ouverture de porte sans casser, ouverture non destructive, crochetage serrure, ouverture porte blindée.' },
    { icon: 'User', title: 'Situations', text: 'porte claquée nuit, porte claquée weekend, serrure grippée, clé bloquée serrure.' },
    { icon: 'MapPin', title: 'Local', text: 'ouverture de porte + ville, ouverture porte claquée + quartier, serrurier rapide + ville.' },
  ],
  relatedTitle: 'Vous proposez d\'autres services de serrurerie ?',
  relatedPara:
    'Les métiers de la serrurerie ont une logique proche : transparence, rapidité, fiche Google optimisée. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet serrurier', href: '/site-internet-serrurier' },
    { label: 'Site internet dépannage serrurier', href: '/site-internet-depannage-serrurier' },
    { label: 'Site internet urgence serrurier', href: '/site-internet-urgence-serrurier' },
    { label: 'Site internet installateur alarme', href: '/site-internet-installateur-alarme' },
  ],
  miniCtaText: 'Envie de capter les portes claquées dans votre zone avant vos concurrents ?',
  caseStudiesKicker: 'Sites créés pour des artisans',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Ouverture de Porte', description, '/site-internet-ouverture-porte', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Ouverture de Porte', description, '/site-internet-ouverture-porte'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Ouverture de Porte', path: '/site-internet-ouverture-porte' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetOuverturePortePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

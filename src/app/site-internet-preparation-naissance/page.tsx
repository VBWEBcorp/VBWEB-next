import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet préparation à la naissance : création de site web optimisé SEO. Cours collectifs, individuels, hypnonaissance, yoga, haptonomie — capter les futures mamans via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Préparation Naissance | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-preparation-naissance' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Une préparation à la naissance se cherche-t-elle vraiment sur Google ?',
    answer: 'Oui, énormément. Les futures mamans comparent activement les approches (classique, sophrologie, hypnonaissance, yoga, haptonomie, piscine) et cherchent qui les propose dans leur zone. Une page claire qui explique votre méthode et son déroulé convertit très bien : ces femmes sont dans une phase active de recherche avec un besoin d\'accompagnement immédiat.',
  },
  {
    question: 'Faut-il une page par type de préparation ?',
    answer: 'Absolument. "Hypnonaissance + ville", "yoga prénatal + ville", "sophro-naissance" sont trois requêtes différentes avec trois intentions. Si vous proposez plusieurs approches, chacune mérite sa page. Les femmes qui choisissent l\'hypnonaissance savent déjà ce qu\'elles veulent : elles cherchent spécifiquement ce terme.',
  },
  {
    question: 'Comment expliquer le remboursement des 8 séances Sécu ?',
    answer: 'Par une page dédiée "Remboursement" qui clarifie : 8 séances prises en charge par l\'Assurance Maladie pour les sages-femmes, conditions, modalités. C\'est une question très fréquente et un site qui y répond clairement évite les appels au standard et rassure les futures mamans sur l\'aspect financier.',
  },
  {
    question: 'Les cours en visio ont-ils un intérêt ?',
    answer: 'Oui, surtout pour le suivi post-entretien prénatal précoce ou pour les futures mamans isolées géographiquement. Une page "Préparation en visio" étend votre zone de chalandise au national et permet à des femmes en zones rurales de vous trouver. C\'est un complément à votre activité locale, pas un remplacement.',
  },
]

const config: MetierConfig = {
  metier: 'Préparation à la Naissance',
  metierLower: 'préparation à la naissance',
  heroKicker: 'Sites web pour préparation naissance',
  heroHeadline: 'Site internet préparation à la naissance,',
  heroHeadlineItalic: 'des cours qui se remplissent avant le début',
  heroDescription:
    'Je crée des sites internet pour les sages-femmes et professionnelles qui proposent la préparation à la naissance partout en France. Classique, hypnonaissance, yoga, sophro, haptonomie : chaque approche a sa page pour capter les futures mamans en recherche active.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour préparation naissance',
  whatKicker: 'Sites web pour préparation naissance',
  whatTitle: 'Une préparation trouvée',
  whatTitleItalic: 'par des futures mamans déjà convaincues',
  whatPara1:
    'Les futures mamans qui cherchent une préparation à la naissance sont dans une phase active : elles ont déjà décidé de préparer l\'accouchement, il leur reste à choisir qui et comment. Elles comparent les approches (classique vs hypnonaissance vs yoga prénatal), lisent les présentations, vérifient les remboursements. Votre site est leur principal critère de décision.',
  whatPara2:
    'Je construis des sites préparation à la naissance qui captent ces futures mamans convaincues. Pages par approche, explication du déroulé, remboursement clarifié, tarifs, témoignages anonymisés, prise de rendez-vous en ligne. Vos sessions se remplissent avant même leur démarrage.',
  whatImageUrl: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour préparation à la naissance',
  pillars: [
    { icon: 'Target', title: 'Page par approche', desc: 'Classique, hypno, yoga, sophro, haptonomie : chaque approche a sa requête et sa page dédiée.' },
    { icon: 'FileSearch', title: 'Remboursement expliqué', desc: '8 séances Sécu, conditions, modalités : réponse claire qui rassure et convertit.' },
    { icon: 'User', title: 'Inscription en ligne', desc: 'Planning des sessions et inscription directe. Les cours se remplissent sans appels.' },
  ],
  whatFooterText:
    'Une préparation à la naissance bien référencée remplit ses sessions avec 15 à 30 futures mamans par trimestre.',
  timelineSteps: [
    { number: '01', title: 'On cadre vos cours', description: 'Approches proposées, format (collectif ou individuel), lieu ou visio, tarifs, partenariats maternités, public visé.' },
    { number: '02', title: 'Construction du site', description: 'Pages par approche, remboursement, inscriptions, planning sessions, présentation. Ton chaleureux et professionnel.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières inscriptions, ajustements selon les retours futures mamans.' },
  ],
  keywordsTitle: 'Les requêtes Google qui remplissent les cours de préparation à la naissance',
  keywordsIntro:
    'Les futures mamans cherchent une préparation spécifique à leur vision de l\'accouchement : douce, active, zen, sportive. Chaque approche a son public et sa requête.',
  keywordCategories: [
    { icon: 'User', title: 'Classique', text: 'préparation naissance + ville, cours accouchement, 8 séances préparation, cours prénataux.' },
    { icon: 'Target', title: 'Douce', text: 'hypnonaissance, sophrologie grossesse, haptonomie, yoga prénatal, chant prénatal.' },
    { icon: 'Zap', title: 'Active', text: 'préparation piscine, aquagym prénatal, préparation périnée, bola grossesse.' },
    { icon: 'FileSearch', title: 'Spécifique', text: 'préparation césarienne, préparation jumeaux, préparation VBAC, préparation accouchement à domicile.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel de la naissance ?',
  relatedPara:
    'Les métiers de la naissance ont une logique proche : expliquer l\'approche, rassurer, remplir des sessions. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet sage-femme', href: '/site-internet-sage-femme' },
    { label: 'Site internet doula', href: '/site-internet-doula' },
    { label: 'Site internet conseillère lactation', href: '/site-internet-conseillere-lactation' },
    { label: 'Site internet sophrologue', href: '/site-internet-sophrologue' },
  ],
  miniCtaText: 'Envie de remplir vos sessions de préparation avant même leur ouverture ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Préparation Naissance', description, '/site-internet-preparation-naissance', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Préparation Naissance', description, '/site-internet-preparation-naissance'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Préparation Naissance', path: '/site-internet-preparation-naissance' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetPreparationNaissancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

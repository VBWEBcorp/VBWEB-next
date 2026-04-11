import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet diététicien : création de site web optimisé SEO pour diététiciens et nutritionnistes. Consultations perte de poids, nutrition sportive, micro-nutrition, téléconsultation — remplir son planning grâce à Google.'

export const metadata: Metadata = {
  title: 'Site Internet Diététicien | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-dieteticien' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un diététicien a-t-il vraiment besoin d\'un site internet pour remplir son planning ?',
    answer: 'Oui, c\'est même le canal d\'acquisition numéro un pour un diététicien libéral. Contrairement à d\'autres professions de santé, vous n\'êtes pas prescrit : vos clients vous choisissent activement. Ils tapent "diététicien + leur ville", "perte de poids + nutritionniste", "consultation nutrition sportive". Sans site bien référencé, vous êtes invisible à ces moments précis où les gens sont motivés à prendre rendez-vous.',
  },
  {
    question: 'Combien coûte un site internet pour un diététicien libéral ?',
    answer: 'Un site vitrine complet démarre à 1 400 euros. Il inclut votre présentation et parcours, une page par spécialité (perte de poids, nutrition sportive, troubles alimentaires, pédiatrie, micro-nutrition), les modalités de consultation (cabinet, téléconsultation, à domicile), vos tarifs si vous souhaitez les afficher, et la prise de rendez-vous en ligne.',
  },
  {
    question: 'Quelle est la différence entre diététicien et nutritionniste en termes de site ?',
    answer: 'C\'est une question SEO clé. Diététicien est un titre réglementé (diplôme d\'État), nutritionniste est un terme non protégé. Les patients utilisent les deux sans faire la distinction. Je construis votre site pour capter les deux requêtes (diététicien + ville ET nutritionniste + ville), ce qui double votre surface de visibilité sur Google sans enfreindre la réglementation du titre.',
  },
  {
    question: 'Vaut-il mieux une page par spécialité ou une page "consultations" globale ?',
    answer: 'Une page par spécialité, sans hésitation. Perte de poids, nutrition sportive, troubles du comportement alimentaire, nutrition enfant, pathologies (diabète, cholestérol), micro-nutrition : chaque thème correspond à une requête Google différente et à un type de client différent. Une seule page "Consultations" ne remonte sur aucune requête. Une page par spécialité remonte sur toutes.',
  },
  {
    question: 'Je fais beaucoup de téléconsultation, le site peut-il en tirer parti ?',
    answer: 'C\'est un énorme avantage. La téléconsultation vous libère de la contrainte géographique : vous pouvez capter des clients partout en France. Je crée une page dédiée "Téléconsultation diététique" qui vise la requête nationale, en plus de vos pages locales. Beaucoup de diététiciens doublent leur activité en valorisant sérieusement la téléconsultation.',
  },
  {
    question: 'Comment attirer des clients sur la perte de poids sans tomber dans le piège du tape-à-l\'œil ?',
    answer: 'Justement en évitant le tape-à-l\'œil. Les avant/après, les promesses de résultat, les témoignages triés sont contreproductifs et en plus interdits pour un diététicien DE. Je rédige vos pages sur un ton professionnel : méthode basée sur les preuves, approche individualisée, suivi personnalisé. Ce ton sérieux convertit mieux auprès des gens qui en ont assez des régimes bidons.',
  },
  {
    question: 'Combien de temps avant que le site ramène des rendez-vous ?',
    answer: 'En général 2 à 3 mois pour les premiers rendez-vous venus du SEO local, et 4 à 6 mois pour atteindre un rythme stable de 5 à 15 nouveaux rendez-vous par mois via Google. La fiche Google Business Profile bien optimisée peut ramener des clients dès la première semaine sur les requêtes locales les plus directes.',
  },
]

const config: MetierConfig = {
  metier: 'Diététicien',
  metierLower: 'diététicien',
  heroKicker: 'Sites web pour diététicien',
  heroHeadline: 'Site internet diététicien,',
  heroHeadlineItalic: 'un planning qui se remplit sans y penser',
  heroDescription:
    'Je crée des sites internet pour les diététiciens et nutritionnistes libéraux partout en France. Perte de poids, nutrition sportive, micro-nutrition, téléconsultation : chaque spécialité a sa page, optimisée pour apparaître quand un client cherche un accompagnement sérieux sur Google.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour diététicien',
  whatKicker: 'Sites web pour diététicien libéral',
  whatTitle: 'Un diététicien trouvé',
  whatTitleItalic: 'par des clients motivés',
  whatPara1:
    'Un client qui cherche un diététicien est presque toujours un client motivé. Il a pris sa décision, il cherche juste le bon professionnel. Il tape "diététicien + sa ville", "nutritionniste perte de poids", "consultation nutrition sportive" ou "diététicien téléconsultation". C\'est une recherche active, avec une intention de prise de rendez-vous dans les jours qui suivent. La seule question est : est-ce que c\'est vous qu\'il va choisir, ou un confrère mieux référencé ?',
  whatPara2:
    'Je construis des sites diététicien qui captent ces clients motivés. Une page par spécialité pour remonter sur chaque requête, un ton professionnel basé sur les preuves (pas de promesses bidons), la téléconsultation bien mise en avant pour capter du national, et une fiche Google Business Profile optimisée pour dominer le local. Le tout dans le respect de la déontologie du titre DE.',
  whatImageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour diététicien nutritionniste',
  pillars: [
    { icon: 'FileSearch', title: 'Page par spécialité', desc: 'Perte de poids, sport, troubles alimentaires, pédiatrie : chaque page vise sa requête Google.' },
    { icon: 'User', title: 'Téléconsultation nationale', desc: 'Page dédiée pour capter des clients partout en France, pas seulement votre ville.' },
    { icon: 'TrendingUp', title: 'Approche sérieuse', desc: 'Ton basé sur les preuves, pas de promesses bidons. Ce qui convertit auprès des gens lassés des régimes.' },
  ],
  whatFooterText:
    'Un diététicien bien référencé capte en moyenne 10 à 20 nouveaux rendez-vous par mois via Google après 4 mois.',
  timelineSteps: [
    { number: '01', title: 'On définit votre positionnement', description: 'Perte de poids, sport, troubles alimentaires, pédiatrie, pathologies, micro-nutrition : on liste vos spécialités et votre approche. J\'identifie les requêtes à cibler en priorité selon votre zone.' },
    { number: '02', title: 'Construction du site', description: 'Une page par spécialité, un ton professionnel, votre parcours, les modalités de consultation (cabinet, télé, domicile), intégration de la prise de rendez-vous. Vous validez avant publication.' },
    { number: '03', title: 'Mise en ligne et suivi', description: 'Site en ligne, fiche Google Business Profile optimisée, premiers rendez-vous qui arrivent. On ajuste les pages qui remontent moins vite et on suit les conversions.' },
  ],
  keywordsTitle: 'Les requêtes Google qui remplissent un planning de diététicien',
  keywordsIntro:
    'Les clients d\'un diététicien ont des besoins très variés. Un sportif qui prépare un trail ne cherche pas la même chose qu\'un parent d\'enfant en surpoids ou qu\'un diabétique. Chaque profil a sa requête, et chaque requête doit avoir sa page sur votre site.',
  keywordCategories: [
    { icon: 'Target', title: 'Perte de poids', text: 'diététicien perte de poids, nutritionniste maigrir, consultation amaigrissement, rééquilibrage alimentaire.' },
    { icon: 'Zap', title: 'Sport', text: 'nutrition sportive, diététicien sportif, préparation trail, nutrition triathlon, marathonien.' },
    { icon: 'User', title: 'Publics spécifiques', text: 'diététicien enfant, nutritionniste grossesse, ménopause nutrition, diététicien senior.' },
    { icon: 'FileSearch', title: 'Pathologies', text: 'diabète nutrition, cholestérol, intolérance gluten, SIBO, troubles digestifs.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel du bien-être ?',
  relatedPara:
    'Les métiers du bien-être et de la santé préventive ont une logique SEO proche : expliquer la méthode, rassurer, capter des clients motivés via Google. Voici les autres pages métiers disponibles.',
  relatedLinks: [
    { label: 'Site internet coach sportif', href: '/site-internet-coach-sportif' },
    { label: 'Site internet naturopathe', href: '/site-internet-naturopathe' },
    { label: 'Site internet thérapeute', href: '/site-internet-therapeute' },
    { label: 'Site internet médecin', href: '/site-internet-medecin' },
  ],
  miniCtaText: 'Envie d\'un planning de diététicien qui se remplit automatiquement ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Diététicien', description, '/site-internet-dieteticien', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Diététicien', description, '/site-internet-dieteticien'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Diététicien', path: '/site-internet-dieteticien' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetDieteticienPage() {
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

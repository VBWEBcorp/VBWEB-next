import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet urgence serrurier : création de site web optimisé SEO. Serrurier 24h/24, nuit, dimanche, jour férié, intervention rapide — capter les appels les plus rentables.'

export const metadata: Metadata = {
  title: 'Site Internet Urgence Serrurier | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-urgence-serrurier' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Pourquoi cibler la requête "urgence serrurier" spécifiquement ?',
    answer: 'Parce que c\'est la requête avec la plus forte intention d\'achat immédiat. Un client qui tape "urgence serrurier + ville" à 2h du matin est prêt à payer 250-400 euros sans négocier pour retrouver l\'accès à son logement. Une page dédiée à l\'urgence, avec promesse de délai et numéro en gros, convertit 5 à 10 fois mieux qu\'une page serrurier généraliste.',
  },
  {
    question: 'Comment se différencier des grandes plateformes nationales sur l\'urgence ?',
    answer: 'Par le local et la transparence. Les plateformes nationales sous-traitent aux serruriers locaux en prenant une grosse commission et parfois en gonflant les prix. Un serrurier local bien référencé qui affiche ses tarifs et son délai réel d\'intervention bat les plateformes dans le pack Google local. Les clients préfèrent largement traiter en direct.',
  },
  {
    question: 'Faut-il afficher un délai d\'intervention sur le site ?',
    answer: 'Oui, c\'est un critère de choix majeur. "30 minutes maximum en intra-muros", "45 minutes en périphérie" : ces promesses chiffrées rassurent et convertissent. Attention à tenir la promesse : un client déçu laisse un avis Google négatif qui peut faire très mal. Je vous aide à trouver un délai réaliste et à le communiquer efficacement.',
  },
  {
    question: 'Comment organiser le site pour capter l\'appel en moins de 10 secondes ?',
    answer: 'Numéro en haut de page, en gros, cliquable depuis mobile. Promesse de délai juste en-dessous. Zone d\'intervention claire. Tarif indicatif pour rassurer. Tout le reste (présentation, formations, autres services) passe après. Sur un site urgence, le client ne veut pas lire, il veut appeler. Le design suit cette logique.',
  },
]

const config: MetierConfig = {
  metier: 'Urgence Serrurier',
  metierLower: 'urgence serrurier',
  heroKicker: 'Sites web pour urgence serrurier',
  heroHeadline: 'Site internet urgence serrurier,',
  heroHeadlineItalic: 'le premier appelé à 2h du matin',
  heroDescription:
    'Je crée des sites internet pour les serruriers qui interviennent en urgence 24h/24 partout en France. Porte claquée, effraction, clé coincée, nuit, weekend, férié : chaque page capte les appels les plus rentables avec un design qui convertit en 10 secondes.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour urgence serrurier',
  whatKicker: 'Sites web pour urgence serrurier',
  whatTitle: 'Un serrurier d\'urgence',
  whatTitleItalic: 'choisi en 10 secondes par un client paniqué',
  whatPara1:
    'La requête "urgence serrurier" est l\'une des plus rentables en serrurerie. Les clients qui la tapent sont prêts à payer 250 à 400 euros tout de suite pour retrouver l\'accès à leur logement. Ils ne comparent pas trois devis : ils appellent le premier qui inspire confiance et qui promet un délai rapide. La seule question est : est-ce que c\'est vous qu\'ils voient d\'abord ?',
  whatPara2:
    'Je construis des sites urgence serrurier conçus pour convertir en quelques secondes. Numéro en gros, délai d\'intervention affiché, tarifs indicatifs transparents, fiche Google Business optimisée pour le pack local 24/7. Le tout avec un design mobile-first car 90 % des appels d\'urgence viennent du téléphone.',
  whatImageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour urgence serrurier 24h/24',
  pillars: [
    { icon: 'Zap', title: 'Numéro + délai visibles', desc: 'Numéro en gros en haut, délai promis à côté. 10 secondes pour convaincre et convertir.' },
    { icon: 'MapPin', title: 'Pack Google 24/7', desc: 'Fiche Google optimisée avec horaires 24/7. Les clients appellent directement depuis Maps.' },
    { icon: 'FileSearch', title: 'Design mobile-first', desc: '90 % des appels urgence viennent du téléphone. Le site doit convertir sur petit écran.' },
  ],
  whatFooterText:
    'Une page urgence serrurier bien construite capte 20 à 50 appels qualifiés par semaine après 2 mois d\'optimisation.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre dispositif urgence', description: 'Zones couvertes 24/7, délai d\'intervention réel, tarifs de nuit et weekend, équipe disponible, horaires de garde.' },
    { number: '02', title: 'Construction du site', description: 'Design mobile-first, numéro en avant, délai affiché, tarifs transparents, fiche Google optimisée.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google Business en mode 24/7, premiers appels urgence, suivi et ajustements.' },
  ],
  keywordsTitle: 'Les requêtes Google qui tombent en urgence sur votre téléphone',
  keywordsIntro:
    'Les requêtes urgence serrurier varient selon le moment : nuit, weekend, férié. Chaque variante correspond à une intention d\'achat immédiat.',
  keywordCategories: [
    { icon: 'Zap', title: 'Jour', text: 'urgence serrurier, serrurier rapide, serrurier disponible, intervention immédiate.' },
    { icon: 'Target', title: 'Nuit / Weekend', text: 'serrurier nuit, serrurier dimanche, serrurier jour férié, serrurier 24/24.' },
    { icon: 'User', title: 'Situations', text: 'porte claquée, clé perdue, serrure bloquée, effraction, clé oubliée.' },
    { icon: 'MapPin', title: 'Local', text: 'urgence serrurier + ville, serrurier urgent + quartier, serrurier intervention rapide.' },
  ],
  relatedTitle: 'Vous proposez d\'autres services de serrurerie ?',
  relatedPara:
    'Les métiers de la serrurerie ont une logique proche : rapidité, transparence, fiche Google optimale. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet serrurier', href: '/site-internet-serrurier' },
    { label: 'Site internet dépannage serrurier', href: '/site-internet-depannage-serrurier' },
    { label: 'Site internet ouverture porte', href: '/site-internet-ouverture-porte' },
    { label: 'Site internet installateur alarme', href: '/site-internet-installateur-alarme' },
  ],
  miniCtaText: 'Envie d\'un site urgence serrurier qui convertit en 10 secondes sur mobile ?',
  caseStudiesKicker: 'Sites créés pour des artisans',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Urgence Serrurier', description, '/site-internet-urgence-serrurier', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Urgence Serrurier', description, '/site-internet-urgence-serrurier'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Urgence Serrurier', path: '/site-internet-urgence-serrurier' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetUrgenceSerrurierPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

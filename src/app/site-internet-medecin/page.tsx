import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet médecin : création de site web optimisé SEO pour médecins généralistes, spécialistes et cabinets médicaux. Patientèle renouvelée, nouveaux patients captés via Google, conforme CNOM.'

export const metadata: Metadata = {
  title: 'Site Internet Médecin | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-medecin' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un médecin peut-il avoir un site internet en respectant la déontologie ?',
    answer: 'Oui, c\'est même encouragé par le Conseil National de l\'Ordre des Médecins depuis 2020. Le site doit rester informatif : présentation du médecin, du cabinet, des spécialités, des horaires et modalités de prise de rendez-vous. Interdit : publicité comparative, témoignages patients, promesses de résultat. Je connais les règles CNOM et je construis votre site dans le respect strict du Code de déontologie.',
  },
  {
    question: 'Combien coûte un site internet pour un cabinet médical ?',
    answer: 'Un site vitrine médecin complet démarre à 1 600 euros. Cela inclut la présentation du ou des praticiens, une page par spécialité, les modalités de consultation (sur place, visite, téléconsultation), les informations pratiques et le respect RGPD spécifique santé. Le devis est clair, sans surprise.',
  },
  {
    question: 'Pourquoi un médecin généraliste aurait besoin d\'un site, il est déjà débordé ?',
    answer: 'Justement parce qu\'il est débordé. Un site bien fait réduit drastiquement les appels au secrétariat pour des questions de base (horaires, consultation sans RDV, modalités, adresse). Le patient trouve l\'info seul, réserve son créneau en ligne via Doctolib, et votre standard se concentre sur les vraies urgences. C\'est un outil de gain de temps, pas un outil marketing.',
  },
  {
    question: 'Peut-on intégrer Doctolib ou un autre système de prise de rendez-vous ?',
    answer: 'Oui, c\'est même le point central d\'un site médecin en 2026. Je connecte votre site à Doctolib, Maiia, Keldoc ou tout autre système déjà utilisé par votre cabinet. Le patient réserve en quelques secondes sans passer par le téléphone, et les créneaux libres sont synchronisés en temps réel avec votre agenda.',
  },
  {
    question: 'Comment mon cabinet va-t-il remonter sur Google ?',
    answer: 'Par la fiche Google Business Profile optimisée (catégorie médecin, horaires, photos du cabinet, itinéraire) et par un contenu local de qualité sur le site (page par ville si plusieurs cabinets, quartier, zone d\'intervention). Les requêtes "médecin + ville" ou "médecin généraliste + quartier" sont très locales, on peut remonter vite, en 2 à 3 mois en général.',
  },
  {
    question: 'Les nouveaux patients tapent vraiment leur médecin sur Google ?',
    answer: 'Oui, systématiquement. Quand quelqu\'un déménage ou change de médecin, il fait une recherche Google avant de prendre rendez-vous. Il veut voir à quoi ressemble le cabinet, qui est le médecin, comment prendre rendez-vous, et surtout si le cabinet accepte de nouveaux patients. Un site clair qui répond à ces questions convertit 3 à 4 fois mieux qu\'une fiche Doctolib seule.',
  },
  {
    question: 'Je suis plusieurs praticiens dans une MSP, c\'est adapté ?',
    answer: 'Parfaitement. Je crée des sites pour les Maisons de Santé Pluriprofessionnelles avec une page par praticien, une page par spécialité proposée (généraliste, kiné, infirmière, sage-femme, etc.) et une structure claire pour que chaque patient trouve le bon interlocuteur. C\'est souvent le type de projet où le site apporte le plus de valeur.',
  },
  {
    question: 'Est-ce que vous gérez aussi la partie RGPD spécifique aux données de santé ?',
    answer: 'Oui. Mentions légales conformes au Code de santé publique, politique de confidentialité adaptée aux professionnels de santé, hébergement français compatible HDS si besoin, bandeau cookies strictement nécessaires. Je livre un site conforme dès le premier jour, pas un site à corriger après un contrôle CNIL.',
  },
]

const config: MetierConfig = {
  metier: 'Médecin',
  metierLower: 'médecin',
  heroKicker: 'Sites web pour médecin',
  heroHeadline: 'Site internet médecin,',
  heroHeadlineItalic: 'un cabinet visible sans y passer ses soirées',
  heroDescription:
    'Je crée des sites internet pour les médecins généralistes, spécialistes et MSP partout en France. Prise de rendez-vous en ligne, pages spécialités, informations patients claires : chaque page respecte la déontologie CNOM tout en restant efficace sur Google.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour médecin',
  whatKicker: 'Sites web pour médecin',
  whatTitle: 'Un cabinet médical clair',
  whatTitleItalic: 'pour patients qui ne veulent pas appeler',
  whatPara1:
    'Les patients en 2026 cherchent d\'abord sur Google avant d\'appeler. Ils veulent savoir si vous acceptez de nouveaux patients, quelles sont vos spécialités, comment prendre rendez-vous, où se trouve le cabinet, si la téléconsultation est possible. Sans site, chaque question devient un appel à votre secrétariat — avec un site bien fait, l\'info est trouvable en 10 secondes.',
  whatPara2:
    'Je construis des sites médecin qui désengorgent votre standard. Présentation claire du praticien et des spécialités, intégration Doctolib, pages d\'informations pratiques (première consultation, certificats médicaux, tarifs, conventionnement), et fiche Google optimisée pour remonter sur la carte locale. Tout est conforme aux règles CNOM.',
  whatImageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour cabinet médical',
  pillars: [
    { icon: 'User', title: 'Doctolib intégré', desc: 'Prise de rendez-vous en ligne connectée à votre agenda. Moins d\'appels, plus de rendez-vous honorés.' },
    { icon: 'FileSearch', title: 'Informations claires', desc: 'Horaires, spécialités, conventionnement, accès : tout ce que le patient veut savoir avant l\'appel.' },
    { icon: 'TrendingUp', title: 'SEO local patients', desc: 'Pack Google optimisé pour remonter sur les requêtes "médecin + ville" et "médecin + spécialité".' },
  ],
  whatFooterText:
    'Un site médecin bien construit réduit de 30 à 50 % les appels au standard et capte 10 à 25 nouveaux patients par mois.',
  timelineSteps: [
    { number: '01', title: 'On fait le point sur votre cabinet', description: 'Au téléphone, on parle de votre organisation : secrétariat ou pas, logiciel médical, Doctolib ou autre, MSP ou cabinet seul, spécialités, téléconsultation. J\'identifie ce qui peut être automatisé via le site.' },
    { number: '02', title: 'Construction du site', description: 'Je rédige chaque page en respectant la déontologie CNOM, j\'intègre vos informations pratiques, je connecte le système de prise de rendez-vous, j\'optimise pour les requêtes locales. Vous validez chaque page avant la mise en ligne.' },
    { number: '03', title: 'Mise en ligne et ajustement', description: 'Le site passe en ligne, la fiche Google Business est optimisée, on regarde ensemble les premiers retours patients. Si des pages manquent ou si des infos changent, j\'ajuste rapidement.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des patients à un cabinet médical',
  keywordsIntro:
    'Toutes les recherches ne se valent pas. Un patient qui cherche "symptômes grippe" veut un article, pas un médecin. Mais "médecin généraliste + ville", "téléconsultation médecin", "nouveau patient médecin" sont des requêtes de patients prêts à prendre rendez-vous. Je structure votre site autour de ces requêtes de conversion.',
  keywordCategories: [
    { icon: 'MapPin', title: 'Local', text: 'médecin + ville, généraliste + quartier, cabinet médical proche, médecin nouveau patient.' },
    { icon: 'Target', title: 'Spécialités', text: 'dermatologue, cardiologue, pédiatre, gynécologue + nom de ville ou arrondissement.' },
    { icon: 'User', title: 'Parcours patient', text: 'prise de rendez-vous médecin, téléconsultation, certificat médical, consultation sans RDV.' },
    { icon: 'Zap', title: 'Urgence', text: 'médecin de garde, consultation urgente, médecin dimanche, SOS médecin alternative.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel de santé ?',
  relatedPara:
    'La logique d\'un site médical est proche quelle que soit la spécialité : rassurer, informer, faciliter la prise de rendez-vous tout en respectant les règles déontologiques. Voici les autres métiers de santé pour lesquels je construis des sites.',
  relatedLinks: [
    { label: 'Site internet dentiste', href: '/site-internet-dentiste' },
    { label: 'Site internet pharmacie', href: '/site-internet-pharmacie' },
    { label: 'Site internet sage-femme', href: '/site-internet-sage-femme' },
    { label: 'Site internet kiné', href: '/site-internet-kine' },
  ],
  miniCtaText: 'Envie d\'un cabinet médical visible et désengorgé ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Médecin', description, '/site-internet-medecin', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Médecin', description, '/site-internet-medecin'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Médecin', path: '/site-internet-medecin' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetMedecinPage() {
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

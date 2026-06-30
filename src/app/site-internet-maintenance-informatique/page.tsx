import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet maintenance informatique : création de site web optimisé SEO. Contrat, supervision, parc informatique, sauvegardes, préventive, curative — capter les contrats via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Maintenance Informatique | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-maintenance-informatique' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Maintenance informatique et infogérance : quelle différence SEO ?',
    answer: 'Les termes sont proches mais utilisés par des profils légèrement différents. "Maintenance informatique" est souvent tapé par des PME qui cherchent un prestataire pour maintenir leur parc existant sans tout déléguer. "Infogérance" évoque une externalisation plus large. Cibler les deux sur votre site capte les deux audiences sans dilution.',
  },
  {
    question: 'Préventif ou curatif : comment positionner ?',
    answer: 'La maintenance préventive (supervision, mises à jour, sauvegardes, vérifications régulières) est le positionnement premium : elle évite les pannes et vaut des contrats récurrents. La maintenance curative (intervention quand ça plante) est plus basique mais toujours demandée. Je crée deux pages distinctes pour capter les deux besoins, avec un argument fort : le préventif revient moins cher sur la durée.',
  },
  {
    question: 'Faut-il valoriser les outils de supervision utilisés ?',
    answer: 'Oui, ça rassure les acheteurs techniques. Nagios, Zabbix, Datto, N-able, Kaseya : les outils professionnels de supervision montrent votre sérieux. Les dirigeants ne comprennent pas toujours les noms, mais les DSI ou responsables IT internes les reconnaissent et les valorisent dans leur choix de prestataire.',
  },
  {
    question: 'Le parc hétérogène (Mac + PC + mobile) est-il un enjeu ?',
    answer: 'De plus en plus. Les PME modernes mélangent Mac (créatifs, direction), PC (équipes), iOS, Android, imprimantes, NAS, serveurs. Un prestataire qui maîtrise toute cette diversité gagne des contrats que les prestataires mono-plateforme perdent. Je valorise cette polyvalence sur votre site pour attirer ces entreprises mixtes.',
  },
]

const config: MetierConfig = {
  metier: 'Maintenance Informatique',
  metierLower: 'maintenance informatique',
  heroKicker: 'Sites web pour maintenance informatique',
  heroHeadline: 'Site internet maintenance informatique,',
  heroHeadlineItalic: 'des contrats récurrents qui stabilisent l\'activité',
  heroDescription:
    'Je crée des sites internet pour les prestataires de maintenance informatique partout en France. Préventive, curative, contrat, supervision, parc hétérogène : chaque page capte des PME qui veulent sécuriser leur IT sans tout externaliser.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour maintenance informatique',
  whatKicker: 'Sites web pour maintenance informatique',
  whatTitle: 'Une maintenance informatique',
  whatTitleItalic: 'qui évite les pannes au lieu de les subir',
  whatPara1:
    'Les dirigeants de PME ont tous vécu la panne qui bloque l\'entreprise pendant des heures. Ils cherchent désormais un prestataire qui prévient plutôt qu\'il soigne. Les requêtes "maintenance informatique + ville", "contrat maintenance entreprise", "supervision informatique PME" amènent ces décideurs qui veulent passer du curatif au préventif. Votre site doit montrer cette approche moderne.',
  whatPara2:
    'Je construis des sites maintenance informatique qui valorisent votre approche préventive. Pages par type de maintenance, outils de supervision valorisés, tarifs clairs, parc hétérogène Mac/PC/mobile mis en avant, contrats récurrents. Un site qui transforme votre entreprise en référent technique pour les PME de votre zone.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1518770660439-4636190af475-w800.webp',
  whatImageAlt: 'Création site internet pour maintenance informatique',
  pillars: [
    { icon: 'TrendingUp', title: 'Préventif valorisé', desc: 'Positionnement premium qui justifie des contrats récurrents mensuels.' },
    { icon: 'FileSearch', title: 'Outils pro affichés', desc: 'Nagios, Datto, Kaseya : rassure les acheteurs techniques et décideurs IT.' },
    { icon: 'Target', title: 'Parc hétérogène', desc: 'Mac + PC + mobile + serveurs : couvre toutes les PME modernes.' },
  ],
  whatFooterText:
    'Un prestataire maintenance bien référencé signe 3-8 contrats récurrents par mois, soit 30-80 k€/an stable.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre offre', description: 'Types de maintenance (préventive/curative), outils utilisés, parcs couverts, tarifs, zones, spécialités.' },
    { number: '02', title: 'Construction du site', description: 'Pages préventif/curatif, outils, parcs, tarifs contrat, études de cas, formulaire B2B.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google B2B optimisée, premières demandes PME, suivi des conversions en contrats.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des contrats de maintenance informatique',
  keywordsIntro:
    'Les PME cherchent une maintenance qui évite les pannes coûteuses. Chaque requête reflète un niveau de besoin différent.',
  keywordCategories: [
    { icon: 'Target', title: 'Général', text: 'maintenance informatique + ville, contrat maintenance PME, prestataire maintenance IT.' },
    { icon: 'TrendingUp', title: 'Préventif', text: 'supervision informatique, monitoring serveurs, sauvegarde automatique, mise à jour parc.' },
    { icon: 'Zap', title: 'Curatif', text: 'dépannage informatique entreprise, réparation rapide serveur, panne réseau pro.' },
    { icon: 'FileSearch', title: 'Spécifique', text: 'maintenance Mac PME, maintenance Windows Server, maintenance iOS entreprise, maintenance VPN.' },
  ],
  relatedTitle: 'Vous proposez d\'autres services informatiques ?',
  relatedPara:
    'Les métiers informatiques B2B ont une logique proche : récurrence, confiance, expertise. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet dépannage informatique', href: '/site-internet-depannage-informatique' },
    { label: 'Site internet infogérance', href: '/site-internet-infogerance' },
    { label: 'Site internet technicien informatique', href: '/site-internet-technicien-informatique' },
    { label: 'Site internet assistance informatique', href: '/site-internet-assistance-informatique' },
  ],
  miniCtaText: 'Envie de stabiliser votre activité avec des contrats maintenance récurrents ?',
  caseStudiesKicker: 'Sites créés pour des prestataires',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Maintenance Informatique', description, '/site-internet-maintenance-informatique', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Maintenance Informatique', description, '/site-internet-maintenance-informatique'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Maintenance Informatique', path: '/site-internet-maintenance-informatique' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetMaintenanceInformatiquePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

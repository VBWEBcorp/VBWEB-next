import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet ramoneur : création de site web optimisé SEO. Ramonage obligatoire, cheminée, poêle à bois, certificat, tarif — capter les clients saisonniers via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Ramoneur | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-ramoneur' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un ramoneur a-t-il vraiment besoin d\'un site internet ?',
    answer: 'Plus que vous ne le pensez. Le ramonage est une obligation légale annuelle : des millions de propriétaires cherchent chaque automne "ramoneur + leur ville" pour respecter la loi et leur assurance habitation. Ces clients sont prêts à payer tout de suite et ils appellent le premier qui apparaît sur Google. Sans site, vous captez uniquement le bouche-à-oreille.',
  },
  {
    question: 'Comment jouer sur la saisonnalité forte du métier ?',
    answer: 'Par du contenu qui rassure toute l\'année et qui explose en septembre-novembre. Je crée des pages qui rappellent l\'obligation légale, les risques d\'incendie sans ramonage, le refus d\'indemnisation assurance. Google remonte particulièrement ce type de contenu en saison. Résultat : vous êtes débordé d\'appels d\'octobre à décembre.',
  },
  {
    question: 'Le certificat de ramonage peut-il être présenté en ligne ?',
    answer: 'Oui, et c\'est un atout. Une page qui explique à quoi sert le certificat, ce qu\'il contient, et précisant que vous le remettez systématiquement après chaque intervention rassure énormément. Vous pouvez aussi proposer un envoi par email en plus du papier, ce qui simplifie la gestion pour les clients et les assurances.',
  },
  {
    question: 'Poêle à granulés, poêle à bois, cheminée : faut-il des pages différentes ?',
    answer: 'Oui, absolument. Ce sont trois clientèles avec trois inquiétudes différentes et trois requêtes Google distinctes. "Ramonage poêle à granulés + ville", "ramonage cheminée + ville", "ramonage poêle à bois + ville" : chaque page convertit ses clients spécifiques. C\'est beaucoup plus rentable que d\'avoir une seule page générique.',
  },
]

const config: MetierConfig = {
  metier: 'Ramoneur',
  metierLower: 'ramoneur',
  heroKicker: 'Sites web pour ramoneur',
  heroHeadline: 'Site internet ramoneur,',
  heroHeadlineItalic: 'un agenda plein à craquer dès l\'automne',
  heroDescription:
    'Je crée des sites internet pour les ramoneurs partout en France. Ramonage cheminée, poêle à bois, granulés, certificat, obligation annuelle : chaque page capte les clients saisonniers qui cherchent un ramoneur certifié.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour ramoneur',
  whatKicker: 'Sites web pour ramoneur',
  whatTitle: 'Un ramoneur trouvé',
  whatTitleItalic: 'par des propriétaires qui doivent se mettre en règle',
  whatPara1:
    'Le ramonage est obligatoire chaque année et beaucoup de propriétaires cherchent un ramoneur à la dernière minute, souvent en octobre ou novembre quand ils pensent à rallumer le feu. Ils tapent "ramoneur + ville" ou "ramonage poêle à bois + ville" et appellent les premiers résultats. Si votre site n\'est pas bien référencé, vous ratez toute une saison.',
  whatPara2:
    'Je construis des sites ramoneur qui captent cette demande saisonnière. Pages par type d\'appareil, explication de l\'obligation légale, tarifs clairs, certificat remis systématiquement, zone d\'intervention. Fiche Google Business optimisée pour remonter en top des résultats dès septembre.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1604881991720-f91add269bed-w800.webp',
  whatImageAlt: 'Création site internet pour ramoneur',
  pillars: [
    { icon: 'Target', title: 'Page par appareil', desc: 'Cheminée, poêle bois, granulés, insert : chaque requête a sa page dédiée.' },
    { icon: 'FileSearch', title: 'Obligation légale expliquée', desc: 'Rappel de la loi, risques, refus assurance : ce qui pousse les clients à appeler vite.' },
    { icon: 'TrendingUp', title: 'Certificat délivré', desc: 'Mention claire de la remise du certificat après ramonage. Un argument de sécurité fort.' },
  ],
  whatFooterText:
    'Un ramoneur bien référencé reçoit 30 à 80 appels par mois pendant la haute saison (octobre-janvier).',
  timelineSteps: [
    { number: '01', title: 'On cadre votre activité', description: 'Types d\'appareils ramonés, zone, tarifs, certification QUALIBAT/Qualifumiste, saison, disponibilités.' },
    { number: '02', title: 'Construction du site', description: 'Pages par appareil, obligation légale, tarifs, certificat, zone, design mobile.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, mise en ligne avant septembre pour profiter du pic saisonnier.' },
  ],
  keywordsTitle: 'Les requêtes Google qui remplissent l\'agenda d\'un ramoneur',
  keywordsIntro:
    'Les requêtes ramoneur sont très locales et très saisonnières, avec un pic d\'octobre à janvier. Chaque type d\'appareil a sa requête.',
  keywordCategories: [
    { icon: 'Target', title: 'Par appareil', text: 'ramonage cheminée, ramonage poêle à bois, ramonage granulés, ramonage insert.' },
    { icon: 'FileSearch', title: 'Obligation', text: 'ramonage obligatoire, certificat ramonage, ramonage assurance, entretien annuel cheminée.' },
    { icon: 'Zap', title: 'Tarif', text: 'prix ramonage, tarif ramoneur, coût ramonage cheminée, devis ramonage.' },
    { icon: 'MapPin', title: 'Local', text: 'ramoneur + ville, ramoneur proche, ramonage + département, ramoneur + quartier.' },
  ],
  relatedTitle: 'Vous êtes un autre artisan du chauffage ou de l\'entretien ?',
  relatedPara:
    'Les métiers d\'entretien saisonnier du chauffage ont une logique proche. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet chauffagiste', href: '/site-internet-chauffagiste' },
    { label: 'Site internet installateur chaudière', href: '/site-internet-installateur-chaudiere' },
    { label: 'Site internet couvreur', href: '/site-internet-couvreur' },
    { label: 'Site internet plombier-chauffagiste', href: '/site-internet-plombier-chauffagiste' },
  ],
  miniCtaText: 'Envie de remplir votre agenda ramonage dès le début de l\'automne ?',
  caseStudiesKicker: 'Sites créés pour des artisans',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Ramoneur', description, '/site-internet-ramoneur', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Ramoneur', description, '/site-internet-ramoneur'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Ramoneur', path: '/site-internet-ramoneur' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetRamoneurPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

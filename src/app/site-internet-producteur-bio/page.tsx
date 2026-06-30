import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet producteur bio : création de site web optimisé SEO. Certification AB, vente directe, engagements, traçabilité, saisonnalité — capter une clientèle bio exigeante.'

export const metadata: Metadata = {
  title: 'Site Internet Producteur Bio | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-producteur-bio' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Producteur bio, vraie niche ou simple label ?',
    answer: 'Vraie niche en très forte croissance. Les consommateurs qui cherchent spécifiquement "producteur bio + leur ville", "ferme bio + région", "légumes bio producteur" ne sont pas les mêmes que ceux qui cherchent "producteur + ville". Ils sont plus exigeants, plus engagés, et prêts à payer le juste prix pour une agriculture qui respecte leurs valeurs. Une page dédiée "bio" capte cette audience sensibilisée.',
  },
  {
    question: 'La certification AB est-elle indispensable à mettre en avant ?',
    answer: 'Oui, c\'est votre premier gage de crédibilité. Logo AB officiel, numéro de certification, organisme certificateur (Ecocert, Qualité France, etc.). Cette transparence rassure et différencie des faux bio qui polluent certaines communications. Je crée une page dédiée à vos certifications avec explications des labels et engagements.',
  },
  {
    question: 'Faut-il parler de sa démarche agroécologique ?',
    answer: 'C\'est un vrai plus. Beaucoup de producteurs bio vont au-delà du simple cahier des charges : permaculture, agroforesterie, semences paysannes, biodynamie, circuits courts, associations de cultures. Une page "Notre démarche" qui explique ces engagements va au-delà du label et fidélise les clients les plus engagés. Ils deviennent vos meilleurs ambassadeurs.',
  },
  {
    question: 'Comment gérer la saisonnalité sur un site bio ?',
    answer: 'Par un calendrier des produits disponibles mis à jour régulièrement. "Ce qui pousse en ce moment sur la ferme", avec photos et anecdotes. Cette transparence sur la saisonnalité est très valorisée par les clients bio qui refusent le hors-saison. Elle génère aussi du trafic SEO récurrent à chaque changement de saison.',
  },
]

const config: MetierConfig = {
  metier: 'Producteur Bio',
  metierLower: 'producteur bio',
  heroKicker: 'Sites web pour producteur bio',
  heroHeadline: 'Site internet producteur bio,',
  heroHeadlineItalic: 'une clientèle engagée qui paye le juste prix',
  heroDescription:
    'Je crée des sites internet pour les producteurs certifiés bio partout en France. Certification AB, engagements agroécologiques, vente directe, saisonnalité : chaque page capte une clientèle bio exigeante et fidèle.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour producteur bio',
  whatKicker: 'Sites web pour producteur bio',
  whatTitle: 'Un producteur bio trouvé',
  whatTitleItalic: 'par des clients qui refusent le greenwashing',
  whatPara1:
    'Les consommateurs de produits bio ne se contentent plus d\'un logo AB : ils veulent connaître le producteur, comprendre la démarche, voir la ferme. Ils tapent "producteur bio + leur ville", "ferme bio + région", "légumes bio producteur local". Ils sont lassés du faux bio des grandes surfaces et cherchent une relation directe. Votre site est votre premier argument de crédibilité face à cette exigence.',
  whatPara2:
    'Je construis des sites producteur bio qui racontent votre démarche avec authenticité. Certifications mises en avant, engagements agroécologiques, saisonnalité transparente, points de vente directs, histoire de la ferme. Un site qui fidélise une clientèle engagée qui devient vos meilleurs ambassadeurs.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1500937386664-56d1dfef3854-w800.webp',
  whatImageAlt: 'Création site internet pour producteur bio',
  pillars: [
    { icon: 'FileSearch', title: 'Certifications visibles', desc: 'AB, organisme, numéros : crédibilité immédiate face au greenwashing.' },
    { icon: 'Target', title: 'Démarche agroécologique', desc: 'Permaculture, agroforesterie, semences : ce qui va au-delà du label et fidélise.' },
    { icon: 'User', title: 'Saisonnalité assumée', desc: 'Calendrier des produits disponibles. Transparence qui crée la confiance.' },
  ],
  whatFooterText:
    'Un producteur bio bien référencé signe 50 à 120 nouveaux clients par saison, avec une fidélisation très forte.',
  timelineSteps: [
    { number: '01', title: 'On parle de votre ferme bio', description: 'Certification, organisme, engagements (permaculture, agroforesterie, biodynamie), points de vente, saisonnalité, histoire.' },
    { number: '02', title: 'Construction du site', description: 'Certifications, démarche, calendrier saisonnier, points de vente, histoire, photos ferme.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premiers clients bio engagés, fidélisation sur la durée.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent une clientèle bio exigeante',
  keywordsIntro:
    'Les clients cherchant du bio sont sensibilisés et cherchent des termes précis. Chaque requête reflète une exigence sur la production.',
  keywordCategories: [
    { icon: 'Target', title: 'Producteur bio', text: 'producteur bio + ville, ferme bio + région, maraîcher bio, éleveur bio, viticulteur bio.' },
    { icon: 'FileSearch', title: 'Certifications', text: 'label AB, bio Ecocert, bio certifié, demeter, nature et progrès, biodynamie.' },
    { icon: 'User', title: 'Démarche', text: 'permaculture, agroforesterie, agroécologie, semences paysannes, biodiversité.' },
    { icon: 'Zap', title: 'Vente', text: 'AMAP bio, panier bio producteur, drive fermier bio, légumes bio direct ferme.' },
  ],
  relatedTitle: 'Vous êtes un autre producteur local ?',
  relatedPara:
    'Les métiers de producteurs locaux ont une logique proche : authenticité, engagement, vente directe. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet producteur', href: '/site-internet-producteur' },
    { label: 'Site internet maraîcher', href: '/site-internet-maraicher' },
    { label: 'Site internet apiculteur', href: '/site-internet-apiculteur' },
    { label: 'Site internet éleveur', href: '/site-internet-eleveur' },
  ],
  miniCtaText: 'Envie de capter une clientèle bio engagée qui revient chaque semaine ?',
  caseStudiesKicker: 'Sites créés pour des producteurs',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Producteur Bio', description, '/site-internet-producteur-bio', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Producteur Bio', description, '/site-internet-producteur-bio'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Producteur Bio', path: '/site-internet-producteur-bio' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetProducteurBioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

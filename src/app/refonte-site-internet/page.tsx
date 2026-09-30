import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const path = '/refonte-site-internet'
const description =
  "Refonte de site internet sans perdre votre référencement : plan de redirections, contenus repris, site rapide et pensé pour convertir. Audit offert."

export const metadata: Metadata = {
  title: 'Refonte de site internet sans perdre son SEO',
  description,
  alternates: { canonical: path },
}

const faqs = [
  {
    question: 'Quand faut-il refaire son site internet ?',
    answer:
      "Quand il vous coûte des clients : il est lent sur mobile, vous ne pouvez plus le modifier, il ne ressemble plus à ce que vous vendez, ou il ne reçoit aucune demande malgré du trafic. L'âge du site n'est pas un critère en soi. Un site récent mal construit mérite une refonte avant un site ancien qui convertit.",
  },
  {
    question: 'Une refonte fait-elle perdre son référencement ?',
    answer:
      "Elle peut, et c'est le risque numéro un. Les pertes viennent presque toujours des mêmes causes : des adresses qui changent sans redirection, des pages qui disparaissent alors qu'elles recevaient des visites, des textes raccourcis ou des balises titre perdues. Un plan de redirection page par page, établi avant la mise en ligne, évite l'essentiel de ces pertes.",
  },
  {
    question: "Qu'est-ce qu'un plan de redirection 301 ?",
    answer:
      "C'est la table qui associe chaque ancienne adresse de votre site à sa nouvelle adresse. Une redirection 301 indique à Google que la page a déménagé pour de bon : il transfère l'essentiel de sa valeur vers la nouvelle. Je l'établis à partir de votre Search Console et d'un relevé complet du site existant, pour ne rien oublier, y compris les pages que personne ne se rappelle avoir créées.",
  },
  {
    question: 'Combien de temps dure une refonte de site ?',
    answer:
      "Cela dépend surtout du nombre de pages et de la rapidité des validations. Un site vitrine se refait en quelques semaines, un site avec un catalogue ou des fonctions sur mesure demande plus. Je vous donne un calendrier précis après l'audit, avec les dates où j'ai besoin de vous.",
  },
  {
    question: 'Faut-il quitter WordPress, Wix ou Shopify lors d’une refonte ?',
    answer:
      "Pas forcément. Je recommande l'outil qui correspond à votre usage : un site vitrine qu'on veut rapide et facile à tenir, une boutique qui doit gérer des stocks, une application métier. Quand un changement d'outil se justifie (lenteur, coût des extensions, limites de Wix), je prends en charge la migration complète, contenus et redirections compris.",
  },
  {
    question: 'Que devient mon contenu actuel ?',
    answer:
      "Tout ce qui vous apporte des visites ou des demandes est repris, amélioré si besoin, jamais supprimé à la légère. Les pages qui ne servent à rien sont fusionnées ou retirées proprement, avec une redirection. Vous validez la nouvelle arborescence avant que je commence.",
  },
  {
    question: 'Serai-je propriétaire de mon nouveau site ?',
    answer:
      "Oui. Le nom de domaine, le contenu et le code vous appartiennent. Vous recevez les accès, et vous pouvez modifier vos textes et vos images vous-même depuis un espace d'administration simple.",
  },
]

const config: MetierConfig = {
  metier: 'Refonte de site internet',
  metierLower: 'refonte de site internet',
  heroKicker: 'Refonte · Migration · SEO',
  heroHeadline: 'Refonte de site internet,',
  heroHeadlineItalic: 'sans repartir de zéro sur Google',
  heroDescription:
    "Refaire son site est l'occasion d'en faire un outil qui vend. C'est aussi le moment où l'on perd le plus facilement des années de référencement. Je conduis la refonte avec les deux objectifs en tête : un site plus clair et plus rapide, et des positions conservées.",
  heroImageAlt: 'Victor Béasse, refonte de site internet',
  whatKicker: 'Refonte de site',
  whatTitle: 'Un nouveau site,',
  whatTitleItalic: 'le référencement en plus, pas en moins',
  whatPara1:
    "La plupart des refontes sont pensées comme un chantier graphique. Le site est plus beau, puis les appels baissent pendant des mois, parce que des pages ont disparu ou changé d'adresse sans que personne ne le prévoie. Je commence donc par l'inverse : ce qui vous rapporte aujourd'hui, page par page, dans votre Search Console.",
  whatPara2:
    "À partir de là, je construis la nouvelle arborescence, je rédige ou reprends les contenus, je développe un site rapide que vous pouvez modifier vous-même, et je prépare le plan de redirection complet. La mise en ligne est suivie de près : indexation, erreurs, positions. Si une page décroche, on le voit dans la semaine, pas six mois plus tard.",
  whatImageUrl:
    'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1460925895917-afdab827c52f-w800.webp',
  whatImageAlt: 'Analyse des pages d’un site avant sa refonte',
  pillars: [
    { icon: 'FileSearch', title: 'Inventaire avant travaux', desc: 'Chaque page qui compte, relevée dans la Search Console avant de toucher à quoi que ce soit.' },
    { icon: 'Zap', title: 'Site rapide et clair', desc: 'Un parcours simple jusqu’à la demande de devis, sur mobile d’abord.' },
    { icon: 'TrendingUp', title: 'Migration suivie', desc: 'Plan de redirection complet et surveillance des positions après la mise en ligne.' },
  ],
  whatFooterText:
    "Une refonte réussie se juge trois mois après la mise en ligne, sur les demandes reçues, pas le jour du lancement.",
  timelineTitle: "De l'ancien site",
  timelineTitleItalic: 'au nouveau, sans trou d’air',
  timelineSteps: [
    {
      number: '01',
      title: 'Audit et inventaire',
      description:
        "Relevé complet du site existant, pages qui reçoivent des visites et des liens, freins techniques, parcours de conversion. Vous savez ce qu'il faut garder, améliorer ou retirer.",
    },
    {
      number: '02',
      title: 'Arborescence, contenus, développement',
      description:
        "Nouvelle structure validée avec vous, textes repris ou réécrits, développement du site et de son espace d'administration, plan de redirection page par page.",
    },
    {
      number: '03',
      title: 'Mise en ligne et suivi',
      description:
        "Bascule, contrôle des redirections et de l'indexation, suivi des positions et des demandes les semaines suivantes. Les corrections se font au fil de l'eau.",
    },
  ],
  keywordsTitle: 'Ce qui se perd le plus souvent pendant une refonte',
  keywordsIntro:
    "Les pertes de trafic après une refonte se ressemblent d'un site à l'autre. Les connaître à l'avance suffit à les éviter presque toutes.",
  keywordCategories: [
    { icon: 'Target', title: 'Adresses', text: 'pages renommées ou déplacées sans redirection 301.' },
    { icon: 'FileSearch', title: 'Contenus', text: 'textes raccourcis, pages fusionnées, balises titre perdues.' },
    { icon: 'Zap', title: 'Technique', text: 'site plus lent, pages bloquées aux robots, sitemap oublié.' },
    { icon: 'TrendingUp', title: 'Liens', text: 'liens d’autres sites qui pointent vers des pages disparues.' },
  ],
  relatedTitle: 'Autres services liés à votre site',
  relatedPara:
    "Une refonte touche à la fois au site, au référencement et parfois à vos outils internes.",
  relatedLinks: [
    { label: 'Création de site internet', href: '/creation-site-internet' },
    { label: 'Référencement SEO', href: '/referencement-seo' },
    { label: 'Audit SEO gratuit', href: '/audit-seo-gratuit' },
  ],
  miniCtaText: 'Votre site mérite une refonte ? Commençons par voir ce qui vous rapporte déjà.',
  caseStudiesKicker: 'Résultats de mes clients',
  faqTitlePrefix: 'Refonte de site',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Refonte de site internet', description, path, ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Refonte de site internet', description, path),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Refonte de site internet', path },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function RefonteSiteInternetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}

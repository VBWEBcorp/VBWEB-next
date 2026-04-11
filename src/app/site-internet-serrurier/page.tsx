import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet serrurier : création de site web optimisé SEO pour serruriers et dépannage serrurerie. Urgence, porte claquée, ouverture, installation, alarme — capter les appels urgents via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Serrurier | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-serrurier' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Pourquoi un serrurier a-t-il absolument besoin d\'un site internet ?',
    answer: 'Parce que 90% du métier est de l\'urgence. Une porte claquée à minuit, une clé cassée dans la serrure, un cambriolage à réparer. Dans ces moments-là, le client ne feuillette pas les Pages Jaunes : il tape "serrurier urgence + sa ville" sur son téléphone et appelle le premier qui remonte. Sans site et sans fiche Google, vous n\'existez pas dans ces instants où un appel vaut 150 à 400 euros.',
  },
  {
    question: 'Combien coûte la création d\'un site internet pour serrurier ?',
    answer: 'Un site vitrine complet pour serrurier démarre à 1 500 euros. Il inclut une page urgence très visible, les prestations (dépannage serrurerie, ouverture de porte, installation alarme, blindage, coffre-fort), vos zones d\'intervention, vos tarifs transparents et la fiche Google Business optimisée.',
  },
  {
    question: 'Comment éviter de passer pour une arnaque dans un métier qui en a mauvaise réputation ?',
    answer: 'C\'est une des clés du site que je vais construire. Tarifs affichés clairement (frais de déplacement, intervention de jour, de nuit, jour férié), photo et biographie du serrurier, numéro SIRET visible, mentions légales complètes, avis Google encouragés. Un site sérieux avec ces éléments se démarque immédiatement des faux serruriers qui polluent les résultats Google, et rassure le client qui sait qu\'il va payer le juste prix.',
  },
  {
    question: 'Peut-on vraiment remonter sur "serrurier urgence" face aux gros acteurs nationaux ?',
    answer: 'Sur la requête nationale, non. Mais sur les requêtes locales "serrurier + votre ville" ou "serrurier urgence + votre quartier", oui, et c\'est ce qui compte vraiment. Un client à Rennes ne va pas appeler un serrurier à Marseille : il veut quelqu\'un qui arrive en 30 minutes. Google l\'a compris et affiche le pack local avant les gros sites nationaux. C\'est sur ce pack local qu\'on travaille.',
  },
  {
    question: 'Quelles pages sont indispensables pour un site de serrurier ?',
    answer: 'Accueil avec numéro d\'urgence en gros, une page par prestation (dépannage, ouverture porte claquée, changement de serrure, blindage, alarme, coffre-fort, installation), une page zones d\'intervention, une page tarifs transparents, une page après-cambriolage, et contact. Chaque page vise une requête Google précise comme "changement serrure + ville".',
  },
  {
    question: 'Est-ce que vous gérez aussi la fiche Google Business Profile ?',
    answer: 'Oui, c\'est même 70% du résultat pour un serrurier. La fiche Google optimisée avec horaires 24/7, avis récents, photos d\'interventions, tarifs indicatifs et appels cliquables est ce qui fait basculer le choix du client à 2h du matin. Je la configure en même temps que la mise en ligne du site et je vous explique comment la maintenir à jour.',
  },
  {
    question: 'Je travaille de nuit, comment gérer les appels quand je dors ?',
    answer: 'On peut mettre en place un système qui bascule automatiquement les appels vers un confrère ou vers votre messagerie pro pendant vos créneaux de repos, avec un bouton "rappeler dès que possible" clairement visible. Le site peut aussi afficher vos horaires de garde en temps réel. L\'objectif est de ne jamais perdre un appel urgent tout en préservant votre équilibre.',
  },
  {
    question: 'Combien de temps avant que le site ramène des appels ?',
    answer: 'Les premiers appels via la fiche Google arrivent dans les 2 à 4 semaines après optimisation. Le SEO pur (site qui remonte sur Google sans la fiche) prend 2 à 4 mois. En cumulé, un serrurier bien outillé reçoit entre 10 et 30 appels qualifiés par semaine après 3 mois.',
  },
]

const config: MetierConfig = {
  metier: 'Serrurier',
  metierLower: 'serrurier',
  heroKicker: 'Sites web pour serrurier',
  heroHeadline: 'Site internet serrurier,',
  heroHeadlineItalic: 'le téléphone qui sonne à 2h du matin',
  heroDescription:
    'Je crée des sites internet pour les serruriers et entreprises de dépannage serrurerie partout en France. Urgence, ouverture de porte, blindage, alarme, coffre-fort : chaque page capte une requête Google, et chaque appel qualifié peut valoir plusieurs centaines d\'euros.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour serrurier',
  whatKicker: 'Sites web pour serrurier',
  whatTitle: 'Un serrurier trouvé',
  whatTitleItalic: 'par un client paniqué à minuit',
  whatPara1:
    'Dans la serrurerie, la grande majorité des demandes sont des urgences. Une porte claquée, une clé perdue, une serrure bloquée, un cambriolage à réparer. Le client tape son problème sur son téléphone — souvent à minuit, souvent en panique — et appelle le premier serrurier qui apparaît sérieux. Si vous n\'êtes pas dans les trois premiers résultats, vous n\'existez pas pour lui ce soir-là.',
  whatPara2:
    'Je construis des sites qui captent ces moments précis. Une page urgence avec numéro en gros, des tarifs affichés clairement pour se démarquer des faux serruriers, une fiche Google optimisée pour ressortir dans le pack local, et du contenu qui rassure (SIRET, photo, avis récents). L\'objectif : que votre téléphone sonne plus souvent, avec des clients qui savent déjà qu\'ils paient le juste prix.',
  whatImageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour serrurier dépannage',
  pillars: [
    { icon: 'Zap', title: 'Page urgence 24/7', desc: 'Numéro en gros, zone d\'intervention claire, promesse de temps d\'arrivée. Le bouton appel est toujours visible.' },
    { icon: 'FileSearch', title: 'Tarifs transparents', desc: 'Déplacement, intervention, nuit, férié. Le client sait ce qu\'il paie avant d\'appeler.' },
    { icon: 'TrendingUp', title: 'Pack Google local', desc: 'Fiche optimisée avec avis et photos. C\'est ce qui convertit à 2h du matin.' },
  ],
  whatFooterText:
    'Un serrurier bien référencé reçoit en moyenne entre 10 et 30 appels qualifiés par semaine après 3 mois en ligne.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre activité', description: 'Zones d\'intervention, prestations (dépannage, installation, blindage, alarme), tarifs, horaires de garde, photos de matériel et de chantiers. Je repère ce qui vous différencie des faux serruriers qui polluent Google.' },
    { number: '02', title: 'Je construis le site', description: 'Page urgence très visible, une page par prestation, tarifs transparents, zone d\'intervention. Je rédige les textes et j\'optimise chaque page pour les requêtes urgentes et locales.' },
    { number: '03', title: 'Google Business + mise en ligne', description: 'Le site passe en ligne et j\'optimise votre fiche Google Business Profile à fond. Premiers appels qualifiés dans les 2 à 4 semaines, suivi des conversions ensuite.' },
  ],
  keywordsTitle: 'Les requêtes Google qui font sonner le téléphone d\'un serrurier',
  keywordsIntro:
    'Toutes les recherches ne se valent pas. "Comment ouvrir une porte claquée" veut un tuto gratuit, pas un serrurier. Mais "serrurier urgence + ville", "porte claquée + ville", "changement serrure + ville" sont des clients prêts à payer dans l\'heure. Je structure votre site autour de ces requêtes à forte valeur.',
  keywordCategories: [
    { icon: 'Zap', title: 'Urgence', text: 'serrurier urgence, porte claquée, clé cassée, serrure bloquée, serrurier nuit, serrurier dimanche.' },
    { icon: 'Target', title: 'Installation', text: 'changement serrure, blindage porte, serrure 3 points, porte blindée, porte anti-effraction.' },
    { icon: 'User', title: 'Sécurité', text: 'installation alarme, coffre-fort, serrure connectée, contrôle accès, sécurité habitation.' },
    { icon: 'MapPin', title: 'Local', text: 'serrurier + ville, dépannage + quartier, artisan serrurier + département, serrurier proche.' },
  ],
  relatedTitle: 'Vous êtes un autre artisan du bâtiment ou de l\'urgence ?',
  relatedPara:
    'Les métiers d\'urgence et du bâtiment ont une logique SEO proche : capter l\'appel au moment où le client en a besoin, rassurer avec des tarifs clairs, optimiser la fiche Google. Voici les autres pages métiers disponibles.',
  relatedLinks: [
    { label: 'Site internet artisan', href: '/site-internet-artisan' },
    { label: 'Site internet plombier', href: '/site-internet-plombier' },
    { label: 'Site internet chauffagiste', href: '/site-internet-chauffagiste' },
    { label: 'Site internet électricien', href: '/site-internet-electricien' },
  ],
  miniCtaText: 'Envie que votre téléphone sonne dès la prochaine urgence serrurerie ?',
  caseStudiesKicker: 'Sites créés pour des artisans',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Serrurier', description, '/site-internet-serrurier', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Serrurier', description, '/site-internet-serrurier'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Serrurier', path: '/site-internet-serrurier' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetSerrurierPage() {
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

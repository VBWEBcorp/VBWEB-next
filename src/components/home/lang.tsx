'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { usePathname } from 'next/navigation'

export type Lang = 'fr' | 'en'

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'fr',
  setLang: () => {},
})

export function HomeLangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr')
  const pathname = usePathname()

  // Reset to FR when leaving the homepage — translation scope is homepage only
  useEffect(() => {
    if (pathname !== '/') setLang('fr')
  }, [pathname])

  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>
}

export function useHomeLang() {
  return useContext(LangCtx)
}

export const t = {
  hero: {
    eyebrow: { fr: 'Victor Béasse - Expert SEO/GEO', en: 'Victor Béasse - SEO/GEO Expert' },
    h1Part1: { fr: 'Plus de clients', en: 'More clients' },
    h1Part2: { fr: 'grâce à', en: 'thanks to' },
    h1Part3: { fr: "Google et l'IA", en: 'Google and AI' },
    subtitle: {
      fr: "Vos clients vous cherchent sur Google et l'IA. Je vous y rends visible et crédible. Plus de clients, plus de chiffre d'affaires.",
      en: 'Your clients search on Google and AI. I make you visible and credible there. More clients, more revenue.',
    },
    ctaPrimary: { fr: 'Recevez votre diagnostic gratuit', en: 'Get your free diagnostic' },
    ctaSecondary: { fr: 'ou prendre directement rendez-vous', en: 'or book a meeting directly' },
    reviews: { fr: '75 avis', en: '75 reviews' },
  },
  audiences: {
    fr: [
      'PME B2B (5-30 salariés)',
      "Cabinets d'avocats",
      'Notaires & Études',
      'Orthodontistes & Cabinets dentaires',
      'Vétérinaires premium',
      'Experts-comptables',
      "Architectes & Bureaux d'études",
      'Cabinets de conseil B2B',
      'Commissaires-priseurs',
      'Maisons de ventes',
    ],
    en: [
      'B2B SMBs (5-30 employees)',
      'Law firms',
      'Notaries',
      'Orthodontists & Dental practices',
      'Premium veterinarians',
      'Accounting firms',
      'Architects & Design studios',
      'B2B consulting firms',
      'Auctioneers',
      'Auction houses',
    ],
  },
  founder: {
    eyebrow: { fr: 'Votre expert SEO/GEO', en: 'Your SEO/GEO expert' },
    h2Part1: { fr: 'Un expert', en: 'One expert' },
    h2Part2: { fr: 'et son équipe dédiée à votre PME', en: 'and his team dedicated to your SMB' },
    resultLabel: { fr: 'Votre résultat', en: 'Your outcome' },
    resultTags: {
      fr: ['Avantage concurrentiel', 'Prospects qualifiés', 'Site internet solide et évolutif'],
      en: ['Competitive advantage', 'Qualified leads', 'Solid and scalable website'],
    },
    videoCaption: {
      fr: "2 minutes pour comprendre comment j'accompagne les dirigeants de PME.",
      en: '2 minutes to understand how I work with SMB leaders.',
    },
    learnMore: { fr: 'En savoir plus', en: 'Learn more' },
    seeServices: { fr: 'Voir les services', en: 'See services' },
  },
  problemStats: {
    eyebrow: { fr: 'Le constat pour les PME', en: 'The reality for SMBs' },
    h2Part1: { fr: 'Cette situation', en: 'Does this' },
    h2Part2: { fr: 'vous dit quelque chose', en: 'sound familiar' },
    stat1Label: { fr: 'des sites de PME dorment', en: 'of SMB websites are dormant' },
    stat1Title: {
      fr: 'Votre site est joli. Votre concurrence, elle, encaisse',
      en: 'Your site looks great. Meanwhile, your competition is cashing in',
    },
    stat1Desc: {
      fr: "Vos prospects tapent votre métier sur Google et dans l'IA — et atterrissent chez vos concurrents. Tous les jours.",
      en: 'Prospects type your business into Google and AI — and land on your competitors. Every day.',
    },
    stat2Label: {
      fr: 'des décisions B2B commencent en ligne',
      en: 'of B2B decisions start online',
    },
    stat2Title: {
      fr: 'Vos clients ne se contentent plus de Google. Ils demandent à ChatGPT',
      en: "Your clients don't stop at Google. They ask ChatGPT",
    },
    stat2Desc: {
      fr: "Google, ChatGPT, Claude, Perplexity : vos prospects vous comparent partout. Si l'IA ne vous cite pas, vous n'existez pas — vos concurrents, eux, sont déjà cités.",
      en: "Google, ChatGPT, Claude, Perplexity: prospects compare you everywhere. If AI doesn't cite you, you don't exist — your competitors already do.",
    },
  },
  method: {
    eyebrow: { fr: 'Ma méthode', en: 'My method' },
    h2Part1: { fr: "De l'invisible à", en: 'From invisible to' },
    h2Part2: { fr: 'générateur de clients', en: 'client generator' },
    subtitle: {
      fr: 'Une approche structurée pour rendre votre PME visible sur Google ET dans les réponses de ChatGPT, Claude, Perplexity.',
      en: 'A structured approach to make your SMB visible on Google AND in answers from ChatGPT, Claude, Perplexity.',
    },
    steps: {
      fr: [
        {
          title: 'Diagnostic complet (SEO + GEO)',
          description:
            "J'analyse votre site, votre position Google et votre présence dans ChatGPT, Claude, Perplexity. Vous repartez avec un plan d'action priorisé.",
        },
        {
          title: 'Site qui convertit + visibilité Google + IA',
          description:
            'Un site moderne, optimisé pour Google et structuré pour être cité par les IA. Vos concurrents paient de la pub ; vous récoltez du trafic qualifié.',
        },
        {
          title: 'Suivi mensuel et croissance',
          description:
            'Reporting clair, optimisations continues, suivi de votre présence sur Google et dans les IA. Vous gérez votre PME, je gère votre visibilité.',
        },
      ],
      en: [
        {
          title: 'Full diagnostic (SEO + GEO)',
          description:
            'I analyze your site, your Google ranking and your presence in ChatGPT, Claude, Perplexity. You leave with a prioritized action plan.',
        },
        {
          title: 'Converting website + Google + AI visibility',
          description:
            'A modern site, optimized for Google and structured to be cited by AI. Your competitors pay for ads; you harvest qualified traffic.',
        },
        {
          title: 'Monthly tracking and growth',
          description:
            'Clear reporting, continuous optimization, tracking your presence on Google and AI. You run your SMB, I handle visibility.',
        },
      ],
    },
    cta: { fr: 'Diagnostic gratuit', en: 'Free diagnostic' },
    bonusKicker: { fr: 'En bonus', en: 'Bonus' },
    bonusTitle: {
      fr: 'Des outils sur-mesure pour les dirigeants débordés',
      en: 'Custom tools for overworked leaders',
    },
    bonusDesc: {
      fr: "CRM, tableaux de bord, automatisations IA adaptés à votre PME. Vous arrêtez de perdre du temps sur l'administratif, vous le récupérez pour votre métier.",
      en: 'CRM, dashboards, AI automations tailored to your SMB. Stop wasting time on admin, get it back for your business.',
    },
  },
  results: {
    eyebrow: { fr: 'Avant / Après', en: 'Before / After' },
    h2Part1: { fr: "De l'invisible,", en: 'From invisible,' },
    h2Part2: { fr: 'au top 3 Google', en: 'to top 3 Google' },
    beforeTitle: { fr: 'Avant VBWEB', en: 'Before VBWEB' },
    afterTitle: { fr: 'Après VBWEB', en: 'After VBWEB' },
    beforeBullets: {
      fr: [
        '30 visites organiques par mois',
        '15 appels entrants par mois',
        '3 mots-clés en top 10',
        '1ère page Google : invisible',
      ],
      en: [
        '30 organic visits/month',
        '15 incoming calls/month',
        '3 keywords in top 10',
        'Google page 1: invisible',
      ],
    },
    afterBullets: {
      fr: [
        '3 600 visites organiques par mois',
        '~500 appels entrants par mois',
        '87 mots-clés en top 10',
        '1er sur "Pneus Rennes", "Pneus neufs à Rennes", +5 autres',
      ],
      en: [
        '3,600 organic visits/month',
        '~500 incoming calls/month',
        '87 keywords in top 10',
        '#1 on "Pneus Rennes", "Pneus neufs à Rennes", +5 more',
      ],
    },
    caseStudyLink: {
      fr: "accompagnement SEO sur 3 ans · Voir l'étude de cas",
      en: '3-year SEO partnership · See the case study',
    },
  },
  testimonials: {
    badge: { fr: '75 avis Google', en: '75 Google reviews' },
    h2Part1: { fr: 'Ils en parlent', en: 'They tell it' },
    h2Part2: { fr: 'mieux que moi', en: 'better than I do' },
    cta: { fr: 'Laissez un avis', en: 'Leave a review' },
  },
  caseStudies: {
    eyebrow: { fr: 'Portfolio', en: 'Portfolio' },
    h2Part1: { fr: 'Nos', en: 'Our' },
    h2Part2: { fr: 'réalisations', en: 'work' },
    subtitle: {
      fr: 'Trois disciplines, une obsession : transformer votre digital en levier de croissance.',
      en: 'Three disciplines, one obsession: turn your digital presence into a growth engine.',
    },
    categories: {
      fr: [
        {
          title: 'Sites Internet',
          description:
            'Vitrines, e-commerce et sites sur-mesure qui transforment vos visiteurs en clients.',
        },
        {
          title: 'Référencement SEO',
          description:
            'Stratégies de visibilité Google qui propulsent mes clients en première page.',
        },
        {
          title: 'Applications Web',
          description:
            'CRM, logiciels et dashboards sur-mesure pour automatiser et piloter votre activité.',
        },
      ],
      en: [
        {
          title: 'Websites',
          description:
            'Showcase sites, e-commerce and custom builds that turn visitors into clients.',
        },
        {
          title: 'SEO',
          description: 'Google visibility strategies that push my clients to page one.',
        },
        {
          title: 'Web Applications',
          description: 'CRMs, custom software and dashboards to automate and run your business.',
        },
      ],
    },
    seeAll: { fr: 'Voir les études de cas', en: 'See case studies' },
  },
  ctaGallery: {
    eyebrow: { fr: 'Diagnostic gratuit, sans engagement', en: 'Free diagnostic, no commitment' },
    h2: { fr: 'Recevez votre diagnostic SEO/GEO', en: 'Get your SEO/GEO diagnostic' },
    description: {
      fr: "Une analyse vidéo de 10 min sous 48h : où vous perdez des clients sur Google, où vous êtes invisible dans ChatGPT, Claude, Perplexity. Plan d'action concret pour votre PME.",
      en: "A 10-min video analysis within 48h: where you lose clients on Google, where you're invisible on ChatGPT, Claude, Perplexity. Concrete action plan for your SMB.",
    },
    ctaPrimary: { fr: 'Recevez votre diagnostic gratuit', en: 'Get your free diagnostic' },
    ctaSecondary: {
      fr: 'ou parlons directement de votre projet',
      en: "or let's talk about your project",
    },
  },
  navbar: {
    prendreRdv: { fr: 'Prendre RDV', en: 'Book a call' },
    services: { fr: 'Services', en: 'Services' },
    caseStudies: { fr: 'Études de cas', en: 'Case studies' },
    items: {
      fr: {
        about: { label: 'À propos', description: "L'histoire et la vision" },
        seo: { label: 'Référencement SEO', description: 'Optimisation technique et contenu' },
        localSeo: { label: 'Référencement local', description: 'Google Maps et SEO local' },
        webDesign: { label: 'Création de site', description: 'Sites vitrines & e-commerce' },
        diagnostic: { label: 'Diagnostic gratuit', description: 'Analyse complète sous 48h' },
        sites: { label: 'Sites internet', description: 'Vitrines, e-commerce, sur-mesure' },
        seoCase: { label: 'Référencement', description: 'Stratégies SEO et résultats' },
        apps: { label: 'Applications web', description: 'CRM, dashboards, automatisations' },
      },
      en: {
        about: { label: 'About', description: 'Story and vision' },
        seo: { label: 'SEO', description: 'Technical SEO & content' },
        localSeo: { label: 'Local SEO', description: 'Google Maps & local SEO' },
        webDesign: { label: 'Web design', description: 'Showcase & e-commerce sites' },
        diagnostic: { label: 'Free diagnostic', description: 'Full analysis within 48h' },
        sites: { label: 'Websites', description: 'Showcase, e-commerce, custom' },
        seoCase: { label: 'SEO', description: 'SEO strategies & results' },
        apps: { label: 'Web applications', description: 'CRMs, dashboards, automation' },
      },
    },
  },
  popup: {
    badge: { fr: '100 % gratuit · sans engagement', en: '100% free · no commitment' },
    title: { fr: 'Votre diagnostic SEO/GEO en vidéo', en: 'Your SEO/GEO video diagnostic' },
    subtitle: {
      fr: 'Analyse vidéo de 10 min de votre visibilité sur Google + IA. Sous 48h.',
      en: '10-min video analysis of your visibility on Google + AI. Within 48h.',
    },
    nameLabel: { fr: 'Votre nom', en: 'Your name' },
    emailLabel: { fr: 'Votre email', en: 'Your email' },
    urlLabel: { fr: 'URL de votre site', en: 'Your website URL' },
    budgetLabel: { fr: 'Budget mensuel envisagé', en: 'Monthly budget' },
    budgetPlaceholder: { fr: 'Sélectionnez votre budget…', en: 'Select your budget…' },
    budgetOptions: {
      fr: [
        '- de 1 500 €/mois',
        '1 500 € - 3 000 €/mois',
        '3 000 € - 5 000 €/mois',
        '+ de 5 000 €/mois',
        'Je préfère en discuter de vive voix',
      ],
      en: [
        '< 1,500 €/month',
        '1,500 € - 3,000 €/month',
        '3,000 € - 5,000 €/month',
        '> 5,000 €/month',
        "I'd rather discuss it in person",
      ],
    },
    submit: { fr: 'Recevoir mon diagnostic', en: 'Get my diagnostic' },
    submitting: { fr: 'Envoi en cours…', en: 'Sending…' },
    or: { fr: 'ou', en: 'or' },
    calendly: { fr: 'Prendre directement rendez-vous', en: 'Book a meeting directly' },
    successTitle: { fr: 'Demande envoyée !', en: 'Request sent!' },
    successMessage: {
      fr: 'Je vous envoie votre diagnostic vidéo sous 48h. Pensez à vérifier vos spams.',
      en: "I'll send you the video diagnostic within 48h. Check your spam folder just in case.",
    },
    close: { fr: 'Fermer', en: 'Close' },
    errorGeneric: {
      fr: 'Une erreur est survenue. Réessayez ou contactez-nous directement.',
      en: 'An error occurred. Please try again or contact us directly.',
    },
    errorNetwork: { fr: 'Erreur réseau. Vérifiez votre connexion.', en: 'Network error. Check your connection.' },
  },
  footer: {
    eyebrow: { fr: 'Discutons', en: "Let's talk" },
    h2Part1: { fr: 'Un projet en', en: 'Got a project' },
    h2Part2: { fr: 'tête', en: 'in mind' },
    subtitle: {
      fr: 'Réponse sous 24h. Échange sans engagement.',
      en: 'Reply within 24h. No commitment.',
    },
    cta: { fr: 'Parlez-moi de votre projet', en: 'Tell me about your project' },
    brandDesc: {
      fr: "VBWEB, fondée par Victor Béasse. J'accompagne les entreprises dans leur stratégie digitale : sites internet, référencement naturel, applications web sur mesure.",
      en: 'VBWEB, founded by Victor Béasse. I help businesses with their digital strategy: websites, SEO, custom web applications.',
    },
    navTitle: { fr: 'Navigation', en: 'Navigation' },
    servicesTitle: { fr: 'Services', en: 'Services' },
    legalTitle: { fr: 'Légal', en: 'Legal' },
    copyright: { fr: 'Tous droits réservés', en: 'All rights reserved' },
    subTagline: { fr: 'Expert SEO/GEO', en: 'SEO/GEO Expert' },
  },
} as const

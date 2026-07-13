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
    reviews: { fr: '80+ avis', en: '80+ reviews' },
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
    h2Part1: { fr: 'Ce que je crée', en: 'What I create' },
    h2Part2: { fr: 'pour votre PME', en: 'for your business' },
    resultLabel: { fr: 'Votre résultat', en: 'Your outcome' },
    resultTags: {
      fr: ['Plus de prospects qualifiés', 'Un avantage concurrentiel', 'Toujours à la page (Google + IA)'],
      en: ['More qualified leads', 'A competitive edge', 'Always up to date (Google + AI)'],
    },
    videoCaption: {
      fr: "2 minutes pour comprendre comment j'accompagne les dirigeants de PME.",
      en: '2 minutes to understand how I work with SMB leaders.',
    },
    learnMore: { fr: 'En savoir plus', en: 'Learn more' },
    seeServices: { fr: 'Voir les services', en: 'See services' },
    resultCta: { fr: 'Voir les études de cas', en: 'See case studies' },
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
          title: 'Audit de la situation',
          description: 'Où vous en êtes sur Google et dans l’IA, et ce qui vous freine aujourd’hui.',
        },
        {
          title: 'Amélioration ou création du site',
          description: 'On repart de l’existant, ou on crée un site neuf quand il le faut vraiment.',
        },
        {
          title: 'Lancement du référencement',
          description: 'Stratégie SEO & GEO pour être trouvé sur Google et cité par les IA.',
        },
        {
          title: 'Suivi & croissance',
          description: 'Reporting clair et optimisations continues. Vous restez sur votre métier.',
        },
      ],
      en: [
        {
          title: 'Audit of the situation',
          description: 'Where you stand on Google and in AI, and what’s holding you back today.',
        },
        {
          title: 'Improve or rebuild the site',
          description: 'We start from what exists, or build a new site when it’s truly needed.',
        },
        {
          title: 'Launch the SEO',
          description: 'SEO & GEO strategy to be found on Google and cited by AI.',
        },
        {
          title: 'Tracking & growth',
          description: 'Clear reporting and continuous optimization. You stay focused on your business.',
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
    eyebrow: { fr: 'Résultats clients', en: 'Client results' },
    h2Part1: { fr: 'Des résultats', en: 'Real results,' },
    h2Part2: { fr: 'concrets et mesurables', en: 'concrete and measurable' },
    cases: {
      fr: [
        { name: 'Rennes Pneus', type: 'Garage automobile', big: '3 600', unit: 'visites organiques / mois', support: 'Depuis 30 visites · ~500 appels/mois · 1ᵉʳ sur « Pneus Rennes »' },
        { name: 'EPICU', type: 'Marque de guides & expériences', big: '5 000', unit: 'visites organiques / mois', support: 'Depuis ~100 visites · +4 900 % de trafic organique' },
        { name: 'Jumelles.com', type: 'E-commerce, 800+ produits', big: '+33 %', unit: 'trafic organique en 12 mois', support: 'Taux de rebond réduit de 68 % à 41 %' },
      ],
      en: [
        { name: 'Rennes Pneus', type: 'Auto garage', big: '3,600', unit: 'organic visits / month', support: 'From 30 visits · ~500 calls/month · #1 on “Pneus Rennes”' },
        { name: 'EPICU', type: 'Guides & experiences brand', big: '5,000', unit: 'organic visits / month', support: 'From ~100 visits · +4,900% organic traffic' },
        { name: 'Jumelles.com', type: 'E-commerce, 800+ products', big: '+33%', unit: 'organic traffic in 12 months', support: 'Bounce rate cut from 68% to 41%' },
      ],
    },
    disclaimer: {
      fr: 'Chaque activité a ses spécificités, mais les fondamentaux du référencement sont les mêmes dans tous les secteurs. La vraie différence se joue sur des années d’expertise.',
      en: 'Every business has its specifics, but the fundamentals of SEO are the same across every industry. The real difference comes from years of expertise.',
    },
    caseStudyLink: {
      fr: 'Voir toutes les études de cas',
      en: 'See all case studies',
    },
  },
  testimonials: {
    badge: { fr: '80+ avis Google', en: '80+ Google reviews' },
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
  offers: {
    eyebrow: { fr: 'Ce que je fais', en: 'What I do' },
    title: { fr: 'Mon métier : vous rendre visible et générer des clients.', en: 'My job: make you visible and generate clients.' },
    intro: {
      fr: 'Je suis à la fois expert SEO/GEO et développeur web full-stack. Ce double profil, c’est votre avantage : je connecte le référencement, le site et la technique, j’interviens sur tout le process d’un seul coup et je repère les failles techniques que les autres laissent passer.',
      en: 'I’m both an SEO/GEO expert and a full-stack web developer. That dual profile is your advantage: I connect SEO, the site and the tech, act on the whole process at once, and spot the technical flaws others miss.',
    },
    items: {
      fr: [
        { label: 'Référencement SEO & GEO', tag: 'Cœur de métier', href: '/referencement-seo' },
        { label: 'Création de site internet', tag: 'Si besoin', href: '/creation-site-internet' },
        { label: 'IA en entreprise & automatisations', tag: 'Pour aller plus loin', href: '/ia-entreprise' },
      ],
      en: [
        { label: 'SEO & GEO', tag: 'Core service', href: '/referencement-seo' },
        { label: 'Website creation', tag: 'If needed', href: '/creation-site-internet' },
        { label: 'AI for business & automation', tag: 'To go further', href: '/ia-entreprise' },
      ],
    },
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
        webDesign: { label: 'Création de site internet', description: 'Sites vitrines & e-commerce' },
        ia: { label: 'IA en entreprise', description: 'Automatisations & outils sur-mesure' },
        diagnostic: { label: 'Diagnostic gratuit', description: 'Analyse complète sous 48h' },
        sites: { label: 'Site internet', description: 'Vitrines, e-commerce, sur-mesure' },
        seoCase: { label: 'Référencement', description: 'Stratégies SEO et résultats' },
        apps: { label: 'IA en entreprise', description: 'CRM, dashboards, automatisations' },
      },
      en: {
        about: { label: 'About', description: 'Story and vision' },
        seo: { label: 'SEO', description: 'Technical SEO & content' },
        localSeo: { label: 'Local SEO', description: 'Google Maps & local SEO' },
        webDesign: { label: 'Website creation', description: 'Showcase & e-commerce sites' },
        ia: { label: 'AI for business', description: 'Automation & custom tools' },
        diagnostic: { label: 'Free diagnostic', description: 'Full analysis within 48h' },
        sites: { label: 'Website', description: 'Showcase, e-commerce, custom' },
        seoCase: { label: 'SEO', description: 'SEO strategies & results' },
        apps: { label: 'AI for business', description: 'CRMs, dashboards, automation' },
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

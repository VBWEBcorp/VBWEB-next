import type { Metadata } from 'next'

import { AuditSeoContent } from './audit-seo-content'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Audit SEO gratuit : analysez la visibilité de votre site sur Google en 30 minutes. Rapport détaillé avec recommandations concrètes. Sans engagement.'

export const metadata: Metadata = {
  title: 'Audit SEO Gratuit | Analyse de Votre Visibilité Google',
  description,
  alternates: { canonical: '/audit-seo-gratuit' },
}

const faqs = [
  { question: 'L\'audit SEO est-il vraiment gratuit ?', answer: 'Oui, 100% gratuit et sans engagement. C\'est ma façon de vous montrer concrètement ce que le SEO peut apporter à votre entreprise.' },
  { question: 'Que contient l\'audit SEO ?', answer: 'L\'audit couvre votre positionnement actuel sur Google, la performance technique de votre site, l\'état de votre SEO on-page, votre profil de liens et une analyse de vos concurrents directs.' },
  { question: 'Combien de temps dure l\'audit ?', answer: 'L\'analyse prend environ 30 minutes. Vous recevez un rapport clair avec des recommandations concrètes et priorisées.' },
  { question: 'Faut-il me donner accès à mon site ?', answer: 'Non, l\'audit se base sur ce qui est visible publiquement. Je n\'ai besoin d\'aucun accès à votre site ou à vos outils.' },
  { question: 'Et après l\'audit, suis-je engagé ?', answer: 'Absolument pas. L\'audit est gratuit et sans engagement. Vous êtes libre de l\'utiliser comme vous le souhaitez, avec ou sans moi.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Audit SEO Gratuit', description, '/audit-seo-gratuit', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Audit SEO gratuit', description, '/audit-seo-gratuit'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Audit SEO Gratuit', path: '/audit-seo-gratuit' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AuditSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AuditSeoContent faqs={faqs} />
    </>
  )
}

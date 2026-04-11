import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

import { HeroSection } from '@/components/sections/hero-section'
import { AudiencesMarquee } from '@/components/sections/audiences-marquee'
import {
  localBusinessJsonLd,
  organizationJsonLd,
  personJsonLd,
  webPageJsonLd,
  webSiteJsonLd,
} from '@/components/seo/json-ld'
import { siteConfig } from '@/lib/seo'

// Sections sous le fold : code-split via next/dynamic.
// SSR reste actif (pas de ssr: false) -> le HTML est dans la reponse,
// mais le bundle JS est charge separement et n'entre pas dans le main chunk.
const FounderSection = dynamic(() =>
  import('@/components/sections/founder-section').then((m) => m.FounderSection),
)
const ProblemStatsSection = dynamic(() =>
  import('@/components/sections/problem-stats-section').then((m) => m.ProblemStatsSection),
)
const MethodSection = dynamic(() =>
  import('@/components/sections/method-section').then((m) => m.MethodSection),
)
const ResultsSection = dynamic(() =>
  import('@/components/sections/results-section').then((m) => m.ResultsSection),
)
const TestimonialsSection = dynamic(() =>
  import('@/components/sections/testimonials-section').then((m) => m.TestimonialsSection),
)
const CaseStudiesSection = dynamic(() =>
  import('@/components/sections/case-studies-section').then((m) => m.CaseStudiesSection),
)
const CtaGallerySection = dynamic(() =>
  import('@/components/sections/cta-gallery-section').then((m) => m.CtaGallerySection),
)

const description =
  'Consultant SEO à Rennes, je transforme votre site en générateur de clients qualifiés grâce au référencement naturel. Audit gratuit, 75 avis Google.'

export const metadata: Metadata = {
  title: 'Consultant SEO Rennes - VBWEB | Plus de Clients grâce à Google',
  description,
  alternates: { canonical: '/' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webSiteJsonLd(),
    organizationJsonLd(),
    localBusinessJsonLd(),
    personJsonLd(),
    webPageJsonLd('Consultant SEO Rennes - VBWEB', description, '/', ['h1', '.hero-description']),
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <AudiencesMarquee />
      <FounderSection />
      <ProblemStatsSection />
      <MethodSection />
      <ResultsSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <CtaGallerySection variant="homepage" />
    </>
  )
}

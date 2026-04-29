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
  'VBWEB, agence web indépendante. Création de sites internet, référencement naturel et applications web sur mesure pour PME et entreprises ambitieuses.'

export const metadata: Metadata = {
  title: { absolute: 'VBWEB - Agence web : sites internet, SEO et applications sur mesure' },
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
    webPageJsonLd('VBWEB - Agence web & SEO', description, '/', ['h1', '.hero-description']),
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

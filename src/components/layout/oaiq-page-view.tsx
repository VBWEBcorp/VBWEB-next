'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import { trackPageView } from '@/lib/openai-pixel'

// Une page vue par route pour le pixel OpenAI, navigation côté client comprise.
export function OaiqPageView() {
  const pathname = usePathname()
  useEffect(() => {
    trackPageView()
  }, [pathname])
  return null
}

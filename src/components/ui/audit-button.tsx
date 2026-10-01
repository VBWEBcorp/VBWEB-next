'use client'

import { ArrowRight } from 'lucide-react'

import { useHomeLang } from '@/components/home/lang'
import { useAudit } from './audit-provider'
import { Button } from './button'

// Tous les boutons d'action du site ouvrent la même popup : le formulaire de rappel.
export function AuditButton({ size = 'lg', className = '' }: { size?: 'lg' | 'default'; className?: string }) {
  const { openAudit } = useAudit()
  const { lang } = useHomeLang()

  return (
    <Button
      size={size}
      className={`group bg-primary text-primary-foreground hover:bg-primary/85 ${className}`}
      onClick={openAudit}
    >
      {lang === 'en' ? 'Get a call back' : 'Être rappelé sous 24 h'}
      <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
    </Button>
  )
}

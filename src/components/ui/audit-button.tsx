'use client'

import { ArrowRight } from 'lucide-react'

import { useHomeLang } from '@/components/home/lang'
import { useAudit } from './audit-provider'
import { Button } from './button'

export function AuditButton({ size = 'lg', className = '' }: { size?: 'lg' | 'default'; className?: string }) {
  const { openAudit } = useAudit()
  const { lang } = useHomeLang()

  return (
    <Button
      size={size}
      className={`group bg-primary text-primary-foreground hover:bg-primary/85 ${className}`}
      onClick={openAudit}
    >
      {lang === 'en' ? 'Free diagnostic' : 'Diagnostic gratuit'}
      <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
    </Button>
  )
}

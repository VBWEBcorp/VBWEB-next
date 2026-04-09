'use client'

import { ArrowRight } from 'lucide-react'

import { useAudit } from './audit-provider'
import { Button } from './button'

export function AuditButton({ size = 'lg', className = '' }: { size?: 'lg' | 'default'; className?: string }) {
  const { openAudit } = useAudit()

  return (
    <Button
      size={size}
      className={`group bg-primary text-primary-foreground hover:bg-primary/85 ${className}`}
      onClick={openAudit}
    >
      Audit SEO gratuit
      <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
    </Button>
  )
}

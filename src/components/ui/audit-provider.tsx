'use client'

import { createContext, useContext, useState } from 'react'
import dynamic from 'next/dynamic'

const AuditPopup = dynamic(() => import('./audit-popup').then((m) => m.AuditPopup), {
  ssr: false,
})

const AuditContext = createContext<{ openAudit: () => void }>({ openAudit: () => {} })

export function useAudit() {
  return useContext(AuditContext)
}

export function AuditProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const openAudit = () => {
    setMounted(true)
    setOpen(true)
  }

  return (
    <AuditContext.Provider value={{ openAudit }}>
      {children}
      {mounted && <AuditPopup open={open} onClose={() => setOpen(false)} />}
    </AuditContext.Provider>
  )
}

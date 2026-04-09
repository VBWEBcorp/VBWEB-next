'use client'

import { createContext, useContext, useState } from 'react'
import { AuditPopup } from './audit-popup'

const AuditContext = createContext<{ openAudit: () => void }>({ openAudit: () => {} })

export function useAudit() {
  return useContext(AuditContext)
}

export function AuditProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <AuditContext.Provider value={{ openAudit: () => setOpen(true) }}>
      {children}
      <AuditPopup open={open} onClose={() => setOpen(false)} />
    </AuditContext.Provider>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie } from 'lucide-react'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'refused')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-6 right-24 z-[100] w-[320px] max-w-[calc(100vw-7rem)]"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border bg-[#1a2c45] p-6 shadow-xl">
            {/* Rotating background cookie */}
            <motion.div
              className="absolute -top-6 -right-6 size-24 opacity-5"
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <Cookie className="size-full" />
            </motion.div>

            {/* Animated cookie icon */}
            <motion.div
              className="mb-4"
              initial={{ rotate: -30, scale: 0.5 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <Cookie className="size-10 text-primary" />
            </motion.div>

            {/* Close button */}
            <button
              type="button"
              onClick={handleDecline}
              aria-label="Fermer la bannière cookies"
              className="absolute top-4 right-4 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="size-5" aria-hidden />
            </button>

            <p className="mb-4 text-sm text-foreground/80">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant votre navigation, vous acceptez notre utilisation des cookies.
            </p>

            <div className="flex gap-3">
              <motion.button
                onClick={handleAccept}
                className="flex-1 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/90"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Accepter
              </motion.button>
              <motion.button
                onClick={handleDecline}
                className="rounded-lg border border-border bg-foreground/5 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Refuser
              </motion.button>
            </div>

            {/* Floating cookie particles */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{
                    x: Math.random() * 400 - 200,
                    y: Math.random() * 400 - 200,
                    opacity: 0.1,
                  }}
                  animate={{
                    x: Math.random() * 400 - 200,
                    y: Math.random() * 400 - 200,
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 10 + i * 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'linear',
                  }}
                >
                  <Cookie className="size-6 text-primary" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

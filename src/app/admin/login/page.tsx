'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Lock, Mail, Shield, Globe } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Identifiants invalides')
      }

      const data = await response.json()
      localStorage.setItem('authToken', data.token)
      localStorage.setItem('authUser', JSON.stringify(data.user))

      router.push('/admin/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur de connexion')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 bg-background">
      {/* Background effects */}
      <div aria-hidden className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-primary/[0.06] blur-[150px]" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/[0.03] blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="w-full max-w-[420px] relative z-10"
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-8">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Globe className="size-5" />
          </span>
          <span className="font-display text-xl font-bold text-foreground tracking-tight">VBWEB</span>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-border bg-background/80 backdrop-blur-xl shadow-2xl p-8">
          <div className="space-y-1.5 mb-6">
            <h1 className="text-xl font-bold text-foreground">Connexion</h1>
            <p className="text-sm text-muted-foreground/60">
              Accédez à votre espace d&apos;administration
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/40 pointer-events-none" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="admin@vbweb.fr"
                  className="w-full h-11 rounded-xl border border-border bg-foreground/5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/30 outline-none transition-colors focus:border-primary/50 focus:bg-foreground/8 focus:ring-1 focus:ring-primary/25"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/40 pointer-events-none" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full h-11 rounded-xl border border-border bg-foreground/5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/30 outline-none transition-colors focus:border-primary/50 focus:bg-foreground/8 focus:ring-1 focus:ring-primary/25"
                />
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm"
              >
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 rounded-xl bg-primary text-primary-foreground text-sm font-semibold transition-all hover:bg-primary/85 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin size-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                  Connexion...
                </span>
              ) : 'Se connecter'}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-border/50">
            <p className="text-sm text-muted-foreground/50 text-center">
              Pas encore de compte ?{' '}
              <Link href="/admin/register" className="text-primary hover:text-primary/85 transition-colors font-medium">
                Créer un compte
              </Link>
            </p>
          </div>
        </div>

        {/* Security footer */}
        <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground/40">
          <Shield className="size-3.5" />
          <p className="text-xs">
            Connexion sécurisée. Données chiffrées
          </p>
        </div>
      </motion.div>
    </div>
  )
}

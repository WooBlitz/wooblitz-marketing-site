'use client'

import { useState, useTransition } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import Link from 'next/link'

export function LoginForm() {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(formData: FormData) {
    setError(null)
    startTransition(async () => {
      const email = formData.get('email') as string
      const password = formData.get('password') as string
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Sign in failed')
        return
      }
      // Redirect to dashboard
      window.location.href = '/dashboard'
    })
  }

  return (
    <>
      {error && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}

      <form action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={isPending}
            className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
            placeholder="you@yourstore.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1.5">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            disabled={isPending}
            className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:opacity-90 disabled:opacity-50"
        >
          {isPending ? 'Signing in...' : 'Sign in'}
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">or</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <Link
        href="/login/magic"
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium hover:bg-muted"
      >
        <Mail className="h-4 w-4" />
        Email me a sign-in link
      </Link>
    </>
  )
}
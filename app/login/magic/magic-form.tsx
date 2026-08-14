'use client'

import { useState, useTransition } from 'react'
import { Mail, ArrowRight, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export function MagicLinkForm({ initialEmail }: { initialEmail?: string }) {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(formData: FormData) {
    setError(null)
    startTransition(async () => {
      const email = formData.get('email') as string
      const res = await fetch('/api/auth/magic', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Failed to send link')
        return
      }
      window.location.href = `/login/magic/check-email?email=${encodeURIComponent(email)}`
    })
  }

  return (
    <>
      <Link
        href="/login"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to sign in
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight">Email me a sign-in link</h1>
      <p className="mt-2 text-muted-foreground">
        We&apos;ll send a magic link to your inbox. No password needed.
      </p>

      {error && (
        <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}

      <form action={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            defaultValue={initialEmail}
            autoComplete="email"
            disabled={isPending}
            className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
            placeholder="you@yourstore.com"
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:opacity-90 disabled:opacity-50"
        >
          <Mail className="h-4 w-4" />
          {isPending ? 'Sending...' : 'Email me a sign-in link'}
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </>
  )
}
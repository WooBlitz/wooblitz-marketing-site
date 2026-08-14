'use client'

import { useState, useTransition } from 'react'
import { ArrowRight } from 'lucide-react'

export function SignupForm() {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(formData: FormData) {
    setError(null)
    startTransition(async () => {
      const res = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({
          email: formData.get('email'),
          business_name: formData.get('business_name'),
          password: formData.get('password'),
        }),
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Signup failed')
        return
      }
      // Redirect to check-email
      const email = formData.get('email') as string
      window.location.href = `/signup/check-email?email=${encodeURIComponent(email)}`
    })
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}

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
        <label htmlFor="business_name" className="block text-sm font-medium mb-1.5">
          What are you selling? (or your business name)
        </label>
        <input
          id="business_name"
          name="business_name"
          type="text"
          required
          disabled={isPending}
          className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="e.g. Modern coffee beans, or ACME Studio"
        />
        <p className="mt-1.5 text-xs text-muted-foreground">
          We will use this to set up your storefront.
        </p>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1.5">
          Create a password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={8}
          autoComplete="new-password"
          disabled={isPending}
          className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          placeholder="At least 8 characters"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:opacity-90 disabled:opacity-50"
      >
        {isPending ? 'Creating your account...' : 'Create my free store'}
        <ArrowRight className="h-4 w-4" />
      </button>

      <p className="text-xs text-muted-foreground text-center">
        By continuing, you agree to our Terms and Privacy Policy.
      </p>
    </form>
  )
}
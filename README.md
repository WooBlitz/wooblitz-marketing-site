# Wooblitz Marketing Site

The public marketing website for [wooblitz.com](https://wooblitz.com). Where merchants
land, learn about the product, and sign up.

## Stack

- **Next.js 15** (App Router, React 19)
- **TypeScript** + **Tailwind CSS**
- **Supabase** (auth + signups table)
- **Lucide React** icons
- Hosted on **Vercel**

## Architecture

This is a **standalone** Next.js app. It does **not** depend on the platform (Medusa +
Mastra) at runtime. The two are coupled only through the sign-up webhook:

```
Merchant signs up here  →  Supabase auth  →  Webhook creates tenant in platform
                                                        (future: a
                                                         Supabase edge function
                                                         that calls
                                                         wooblitz-medusa-web
                                                         /api/admin/tenants)
```

Once the merchant confirms their email and signs in, they are redirected to
`NEXT_PUBLIC_PLATFORM_URL` (the actual storefront builder).

## Develop

```sh
# 1. Install deps
pnpm install   # or npm install

# 2. Copy env
cp .env.example .env.local
# Edit .env.local with your Supabase URL and anon key

# 3. Run
pnpm dev
# -> http://localhost:3001
```

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. Run the SQL migration in `supabase/migrations/2026-08-14_signups.sql` in the Supabase
   SQL editor.
3. Copy the project URL and anon key to `.env.local`.
4. In Supabase Authentication &rarr; URL Configuration, set:
   - Site URL: `http://localhost:3001` (dev) or `https://wooblitz.com` (prod)
   - Redirect URLs: `http://localhost:3001/api/auth/callback` (and the prod equivalent)

## Deploy to Vercel

```sh
vercel link
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add NEXT_PUBLIC_SITE_URL  # your production URL
vercel env add NEXT_PUBLIC_PLATFORM_URL
vercel --prod
```

Then in Vercel, point `wooblitz.com` to the deployment. In Cloudflare, point
`wooblitz.com` CNAME to `cname.vercel-dns.com`.

## Signups table

Captures the marketing lead information. Schema is in
`supabase/migrations/2026-08-14_signups.sql`.

| Column | Type | Notes |
|---|---|---|
| id | uuid | PK |
| user_id | uuid | FK to `auth.users` |
| email | text | not null |
| business_name | text | not null |
| status | text | `pending_email_verification` &rarr; `verified` &rarr; `tenant_provisioned` |
| created_at | timestamptz | default `now()` |
| utm_source | text | optional, for marketing attribution |

## File map

```
app/
  page.tsx                       # landing
  layout.tsx                     # root layout
  globals.css                    # tailwind base
  signup/
    page.tsx                     # signup form
    actions.ts                   # server action (creates auth user + lead)
    check-email/page.tsx         # "check your email" landing
  login/
    page.tsx                     # email+password sign in
    magic/page.tsx               # request magic link
    magic/check-email/page.tsx
  pricing/page.tsx
  terms/page.tsx
  privacy/page.tsx
  api/
    auth/callback/route.ts       # exchanges code for session, redirects
    signup/route.ts              # JSON API for external integrators
  (marketing)/
    _components/                 # landing sections (header, hero, etc.)
      header.tsx
      hero.tsx
      how-it-works.tsx
      features.tsx
      use-cases.tsx
      pricing.tsx
      faq.tsx
      final-cta.tsx
      footer.tsx
lib/
  supabase.ts                    # browser client
  supabase-server.ts             # server client (RSC, route handlers, actions)
  utils.ts                       # cn() helper
```

## What this site is NOT

- This is **not** the merchant dashboard. Once authenticated, the user is redirected to
  `NEXT_PUBLIC_PLATFORM_URL`, which is the actual builder at `yaran8n.online` or
  `app.wooblitz.com`.
- This is **not** the storefront. Each merchant's storefront lives on the platform,
  not here.

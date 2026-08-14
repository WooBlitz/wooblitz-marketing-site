-- Wooblitz marketing site — signups table
-- Run this in the Supabase SQL editor for your marketing project.

create table if not exists public.signups (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  email text not null,
  business_name text not null,
  status text not null default 'pending_email_verification'
    check (status in (
      ''pending_email_verification'',
      ''verified'',
      ''tenant_provisioned'',
      ''cancelled''
    )),
  utm_source text,
  utm_medium text,
  utm_campaign text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists signups_user_id_idx on public.signups (user_id);
create index if not exists signups_email_idx on public.signups (email);
create index if not exists signups_status_idx on public.signups (status);
create index if not exists signups_created_at_idx on public.signups (created_at desc);

-- Auto-update updated_at
create or replace function public.tg_signups_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger signups_set_updated_at
before update on public.signups
for each row execute function public.tg_signups_updated_at();

-- RLS: only the user who created the signup can read their own row.
-- Service role (used by the platform webhook) can read all.
alter table public.signups enable row level security;

create policy "Users can read their own signup"
  on public.signups for select
  using (auth.uid() = user_id);

-- No insert policy — signups are created via the service role
-- (server action uses createServerClient with anon key + auth,
--  but the insert runs with the service role key from the dashboard).

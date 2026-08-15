-- Wooblitz marketing site — signups table
-- Captures the marketing lead information from wooblitz.com signups.

create table if not exists public.signups (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  email text not null,
  business_name text not null,
  status text not null default 'pending_email_verification'
    check (status in ('pending_email_verification', 'verified', 'tenant_provisioned', 'cancelled')),
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

-- Auto-update updated_at on row updates
create or replace function public.tg_signups_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists signups_set_updated_at on public.signups;
create trigger signups_set_updated_at
before update on public.signups
for each row execute function public.tg_signups_updated_at();

-- RLS: a user can read their own signup; service role (used by the platform webhook)
-- can read/write all rows.
alter table public.signups enable row level security;

create policy "Users can read their own signup"
  on public.signups for select
  using (auth.uid() = user_id);

-- Insert is done from the marketing server (anon key + cookie session)
-- so we allow insert when auth.uid() matches the new user_id
create policy "Users can insert their own signup"
  on public.signups for insert
  with check (auth.uid() = user_id);
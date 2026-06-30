# aaronsimo.com

Aaron Simo's personal portfolio and landing page — a single static page that
showcases selected projects and links to a downloadable resume.

**Live at [aaronsimo.com](https://aaronsimo.com).**

## What's here

- **Portfolio / landing page** — a dark-themed single page with a sticky nav,
  a short intro, and a list of selected projects (HomeForge, Argus, Sodly,
  gutter.guru, MiLa Test Station).
- **Resume** — a downloadable PDF (`AaronSimo_Resume.pdf`) linked from the page.
- **Lightweight analytics** — simple page-view and resume-download counters
  backed by a Supabase RPC (`bump_counter`).

## Tech stack

- A single static `index.html` — no build step, no framework.
- Hosted on **GitHub Pages** at the custom domain `aaronsimo.com` (see `CNAME`).
- Supabase RPC for the view/download counters.

> The Supabase key embedded in `index.html` is a public **anon / publishable**
> key, protected by Row-Level Security. Anon keys are meant to ship in
> client-side code, so this is normal and safe — it is not a confidential
> secret.

## Running locally

Just open the page in a browser:

```bash
open index.html
```

No dependencies or build tooling are required. To see the live site, visit
<https://aaronsimo.com>.

## Status

Live and maintained.

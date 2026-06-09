# Soonest Website — Operational Reference

Internal reference for anyone working on the site. For brand guidelines, design system, and code conventions, see `.claude/CLAUDE.md`.

---

## Infrastructure

| Item | Detail |
|------|--------|
| Repo | `kadejensen-soonest/soonest-web` on GitHub |
| Hosting | Vercel — auto-deploys on push to `main` |
| Live URL | www.soonest.io |
| Root redirect | soonest.io → www.soonest.io via IONOS Forward Domain |
| DNS | Managed at IONOS. `www` CNAME → Vercel |
| Email | Google Workspace — MX records live at IONOS |
| Stack | Static HTML/CSS/JS only. No framework. No build step. |

---

## Pages — Current Status

| File | Live URL | Status | Notes |
|------|----------|--------|-------|
| `index.html` | / | Live | Main homepage — primary conversion page |
| `scheduling.html` | /scheduling | Live | AI scheduling feature page |
| `pulse-ai.html` | /pulse-ai | Live | Pulse AI feature page (in-development feature) |
| `resources.html` | /resources | Live | Blog/resources listing |
| `demo.html` | /demo | Live | Book a demo page — primary CTA destination |
| `privacy.html` | /privacy | Live | Privacy policy |
| `terms.html` | /terms | Live | Terms of service |
| `blog-physician-burnout.html` | /blog-physician-burnout | Live | Blog post 1 |
| `blog-burnout-hidden-tax.html` | /blog-burnout-hidden-tax | Live | Blog post 2 |
| `cold-call-guide.html` | /cold-call-guide | Live (unlisted) | Internal sales tool — not linked publicly |
| `coaching.html` | /coaching | Not linked | Draft — do not promote |
| `coaching-ai.html` | /coaching-ai | Not linked | Draft — do not promote |
| `coaching-burnout.html` | /coaching-burnout | Not linked | Draft — do not promote |
| `coaching-team-dynamics.html` | /coaching-team-dynamics | Not linked | Draft — do not promote |
| `homepage-v2.html` through `homepage-v5.html` | — | Archive | Old versions — do not edit or link |

---

## Analytics & Tracking

| Tool | Status | Notes |
|------|--------|-------|
| Google Analytics 4 | Live | Set up and linked to site |
| Google Search Console | Live | Set up by Jason |
| Vercel Analytics | Available | Built into Vercel dashboard — basic traffic data |

**Next step:** Submit sitemap.xml to Google Search Console. Allow data to accumulate before drawing SEO conclusions.

---

## SEO — Current State

| Area | Status | Notes |
|------|--------|-------|
| Meta titles | Partial | Some pages missing or generic |
| Meta descriptions | Partial | Some pages missing |
| Heading structure | Partial | Not audited across all pages |
| Canonical tags | Not set | No canonicals in place |
| Sitemap | Live | sitemap.xml created — submit to Search Console |
| robots.txt | Live | Blocking draft pages and old homepage versions |
| Schema markup | Not implemented | Priority after basics are in place |
| Page speed | Unknown | Not formally audited |
| Core Web Vitals | Unknown | Not audited |
| Local SEO signals | Not implemented | NAP consistency, local schema |

**SEO advisor engaged** to own this work. See analytics/tracking setup as first priority.

---

## Known Issues / Backlog

- Coaching pages exist but are unlinked drafts — need decision: develop or delete
- sitemap.xml created — needs to be submitted in Google Search Console
- Meta tags inconsistent across pages — full audit needed (titles, descriptions, canonicals)
- Meta tags inconsistent across pages — full audit needed

---

## Deployment Process

1. Pull latest before any session: `git pull origin main`
2. Edit files locally
3. Stage: `git add <specific files>`
4. Commit: `git commit -m "short description"`
5. Push: `git push origin main`
6. Vercel deploys automatically (30–60 seconds)

**Important:** Both Kade and Jason push to this repo. Always pull first to avoid conflicts.

---

## Team Access

| Person | Role | Access |
|--------|------|--------|
| Kade Jensen | BDR/AE, website manager | GitHub, Vercel, IONOS, Claude Code |
| Jason (CEO) | Product direction | GitHub, Vercel |
| SEO Advisor | SEO and analytics | GitHub (collaborator), Vercel (team member) |

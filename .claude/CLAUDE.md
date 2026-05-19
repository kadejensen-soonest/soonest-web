# Soonest Website — Context for Claude

This file gives you everything you need to work on the Soonest website. Read it before making any changes.

---

## Company Overview

**Soonest** is a staff scheduling platform built specifically for emergency physician groups and urgent care clinics. The core mission is reducing burnout on both sides:

1. **Admin burnout** — dramatically cut the time spent building and managing schedules
2. **Staff burnout** — give employees a voice in their schedules, reduce resentment and churn

The key differentiator: other tools handle the calendar but leave admins doing heavy lifting before and after. Soonest automates the hard parts (schedule building, swaps, callouts) and keeps staff happier through preference-driven scheduling.

**Co-founder credibility anchor:** Todd Yeates is an emergency physician who builds the schedules for his own group (CarePoint). He built Soonest because he lived this problem firsthand.

---

## Product Features

### Live Features
- **Scheduling Solver** — employees submit preferences (days, locations, times, PTO); admin sets rules; AI auto-builds the schedule; admin reviews and approves
- **Post-Schedule Self-Service** — employees open shifts, request swaps, pick up open shifts without admin involvement
- **Built-in Messaging** — in-platform team communication
- **Time & Attendance** — geofenced clock-in/out via app, payroll export report
- **Views & Filtering** — sortable by location, role, or person
- **Google Calendar Integration** — schedules push to Google Calendar
- **Locum Tenens Integration** — "Need Staff" button connects to temp staffing partner
- **Mobile App** — releasing soon (all features available on web and app)

### In Development (do NOT promise to prospects)
- Payroll white-label partnership (not finalized)
- Pulse Check — end-of-shift employee wellness check-in, AI dashboard with recommendations
- Wellness resources partner add-on

---

## Brand Voice & Copy Guidelines

- **Tone:** Warm, direct, confident. Not corporate. Not overly clinical.
- **Lead with outcomes:** time saved, burnout reduced, staff happier — not feature lists
- **Avoid naming competitors** — bake in pain points without naming QGenda, ShiftAdmin, etc.
- **Burnout angle:** "giving staff a voice in their schedule" is a core message
- **Todd Yeates** as credibility anchor: co-founder, practicing EM physician, builds his own group's schedules
- **Free schedule offer** is the primary CTA hook — "We build a free sample schedule for your group before any commitment"
- **Em dashes** — use sparingly; prefer commas, periods, or restructured sentences

### Copy to Avoid
- Generic SaaS buzzwords ("synergy," "leverage," "robust," "seamless")
- Overpromising on in-development features
- Naming competitors directly
- Walls of text — short paragraphs, bullets where logical

---

## Target Market (ICP)

**Primary:**
- Emergency medicine physician groups (staffing hospital EDs)
- Independent and regional urgent care chains (2–10 locations)
- Multi-location physician groups with 5+ providers

**Avoid:**
- Large hospital systems (decisions too high-level)
- National chains (Concentra, CityMD, Kaiser)
- Solo practices
- Non-medical verticals (dental, vet, mental health only)

**Current customers/pilots:** Emergency medicine group (signed), hearing clinic (signed), University of Utah Urgent Cares (pilot), CarePoint/Todd Yeates' group (pilot)

---

## Design System

### Colors (CSS custom properties)
```css
--blue: #1186ED;
--blue-dark: #0d6ec0;
--navy: #1E284D;
--navy-deep: #101828;
--black: #0D0E11;
--gray-700: #475467;
--gray-600: #4B5371;
--gray-400: #98A2B3;
--gray-200: #E4E5F3;
--gray-100: #F2F4F7;
--off-white: #F9FAFB;
--white: #FFFFFF;
--green: #12B76A;
--amber: #F79009;
--red: #F04438;
--hero-grad: linear-gradient(150deg, #2a3a6e 0%, #1E284D 40%, #0D0E11 100%);
--cta-grad: linear-gradient(155deg, #2a3a6e 0%, #101828 100%);
```

### Fonts
- **Poppins** (400, 500, 600, 700, 800) — headings, UI labels, navigation
- **Figtree** (400, 500, 600, italic) — body copy
- Loaded from Google Fonts

### Radii / Shadows
```css
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--shadow-card: 0 1px 3px rgba(0,0,0,.1), 0 4px 16px rgba(0,0,0,.06);
--shadow-screenshot: 0 8px 40px rgba(0,0,0,.35);
```

### Key Design Patterns
- **Hero sections:** dark background using `--hero-grad` or `--navy-deep`
- **CTA sections (bottom of pages):** `--cta-grad` background, white button
- **Body/content sections:** `--off-white` or white background
- **Accent color for icons/highlights:** `--blue` (#1186ED) is the primary accent; `--green` (#12B76A) used sparingly

---

## Site Structure

All files are static HTML in the root of the repo. No framework, no build step.

| File | Purpose |
|------|---------|
| `index.html` | Main homepage (current live version) |
| `scheduling.html` | Scheduling feature page |
| `pulse-ai.html` | Pulse AI feature page |
| `resources.html` | Blog/resources listing page |
| `demo.html` | Book a demo page |
| `privacy.html` | Privacy policy |
| `terms.html` | Terms of service |
| `blog-physician-burnout.html` | Blog: "Physician Burnout: What's Actually Driving It and What Fixes It" |
| `blog-burnout-hidden-tax.html` | Blog: "Burnout Is a Hidden Tax on Healthcare Organizations" |
| `cold-call-guide.html` | Internal sales tool (not linked publicly) |
| `homepage-v2.html` through `homepage-v5.html` | Old versions — do not edit or link to |

### Images / Assets
- `logo-horizontal-light.svg` — white/light horizontal logo
- `icon-mark.png` — standalone icon mark
- `carepoint-logo.svg` — customer logo
- `platform-overview.svg` / `platform-diagram.png` — product diagram
- `preference.png`, `pulse-check-nobg.png`, `pulse-checkin-mockup.png`, `pulse-dashboard.png` — product screenshots

---

## Standard Footer

All pages use the same footer. Copy it exactly:

```html
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <img src="logo-horizontal-light.svg" alt="Soonest" class="footer-logo" />
      <p class="footer-tagline">Smarter scheduling for medical groups.</p>
    </div>
    <nav class="footer-nav">
      <div class="footer-col">
        <span class="footer-col-label">Solutions</span>
        <a href="scheduling.html">AI Schedule Building</a>
        <a href="pulse-ai.html">Pulse AI</a>
      </div>
      <div class="footer-col">
        <span class="footer-col-label">Company</span>
        <a href="index.html#built-different">About Us</a>
        <a href="resources.html">Resources</a>
        <a href="demo.html">Book a Demo</a>
      </div>
      <div class="footer-col">
        <span class="footer-col-label">Legal</span>
        <a href="privacy.html">Privacy Policy</a>
        <a href="terms.html">Terms of Service</a>
      </div>
      <div class="footer-col">
        <span class="footer-col-label">Contact</span>
        <a href="mailto:support@getsoonest.com">support@getsoonest.com</a>
        <a href="tel:3854755793">385-475-5793</a>
        <span class="footer-location">Salt Lake City, UT</span>
      </div>
    </nav>
  </div>
  <div class="footer-bottom">
    <span>© 2025 Soonest, Inc. All rights reserved.</span>
    <span class="footer-links">
      <a href="privacy.html">Privacy</a>
      <a href="terms.html">Terms</a>
    </span>
  </div>
</footer>
```

---

## Standard Navigation

All pages use the same nav. The logo links back to `index.html`.

```html
<nav class="navbar" id="navbar">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="logo-horizontal-light.svg" alt="Soonest" />
    </a>
    <ul class="nav-links">
      <li><a href="scheduling.html">Scheduling</a></li>
      <li><a href="pulse-ai.html">Pulse AI</a></li>
      <li><a href="resources.html">Resources</a></li>
    </ul>
    <div class="nav-cta">
      <a href="demo.html" class="btn btn-primary">Book a Demo</a>
    </div>
  </div>
</nav>
```

---

## Deployment

- **Repo:** `kadejensen-soonest/soonest-web` on GitHub
- **Hosting:** Vercel, auto-deploys on push to `main` branch
- **Live URL:** `www.soonest.io`
- **Root redirect:** `soonest.io` redirects to `www.soonest.io` via IONOS Forward Domain
- **DNS:** Managed at IONOS. `www` CNAME → Vercel. Google Workspace MX records in place.
- **No build step** — changes to HTML/CSS/JS go live as-is after git push

### To deploy a change:
1. Edit files locally
2. `git add <files>`
3. `git commit -m "description"`
4. `git push origin main`
5. Vercel deploys automatically (usually 30–60 seconds)

---

## Key Constraints

- **No framework, no build tool** — pure HTML, CSS, JavaScript only
- **No external CSS frameworks** (no Tailwind, no Bootstrap) — all styles are inline `<style>` blocks per page
- **Inline styles per page** — each HTML file contains its own `<style>` block; there is no shared stylesheet
- **Image paths are relative** — all assets are in the root directory alongside the HTML files
- **Keep pages self-contained** — don't introduce dependencies between pages (e.g., shared JS files) unless explicitly asked

---

## Team

- **Jason** — CEO and founder. Owns product direction and pricing.
- **Todd Yeates** — Co-founder, emergency physician. Builds schedules for CarePoint. Primary credibility anchor.
- **Kade Jensen** — BDR/AE. Owns all outbound, demos, and follow-up. Website contact: kade.jensen@getsoonest.com
- **Hugo** — Onboarding specialist.

---

## Competitive Landscape (for copy context)

**Primary competitors:** QGenda/ShiftAdmin, Intrigma, ByteBloc (all medical-specific)
**Secondary:** ADP/Paycom/Paylocity scheduling modules, When I Work, Sling (generic tools)

**Soonest's edge:**
1. Purpose-built for medical groups
2. Solver auto-builds schedules — others still require manual building
3. Self-service post-schedule management without admin involvement
4. Burnout reduction is the stated mission, not just a feature
5. Dedicated onboarding specialist reduces switching friction
6. Locum tenens integration for temp staffing
7. Time/attendance with geofencing + payroll export

**On the website:** don't name competitors. Speak to the pain ("the admin still does the heavy lifting") without pointing fingers.

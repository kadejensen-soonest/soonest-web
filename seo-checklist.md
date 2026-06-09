# SEO Checklist — New Page Standard

Apply this to every new page before it goes live. All tags go inside `<head>`, after `<meta name="viewport" .../>`.

---

## Required Tags (copy this block, fill in the blanks)

```html
<title>[Page Title — Soonest]</title>
<meta name="description" content="[150-160 character description.]" />
<link rel="canonical" href="https://www.soonest.io/[path]" />
<meta property="og:title" content="[Same as title, or shortened version]" />
<meta property="og:description" content="[Same as meta description]" />
<meta property="og:url" content="https://www.soonest.io/[path]" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Soonest" />
```

For blog posts, change `og:type` to `"article"`.

---

## Title Tag Rules

- **Length:** 50-60 characters. Google truncates at ~60.
- **Format:** Primary Keyword — Soonest (brand name at the end)
- **Be specific:** Target how people actually search, not your product name
  - Bad: `AI Scheduling — Soonest`
  - Good: `AI Schedule Builder for Emergency Medicine Groups — Soonest`
- **Unique per page:** No two pages should share a title

## Meta Description Rules

- **Length:** 150-160 characters. Google truncates beyond that.
- **Include the primary keyword** naturally in the first sentence
- **Lead with the value:** what does the visitor get or learn?
- **No keyword stuffing:** write for the human, not the algorithm
- **Unique per page:** duplicate descriptions hurt crawl efficiency

## Canonical Tag Rules

- Always point to the clean URL (no `.html`, no trailing slash except homepage)
- Homepage canonical: `https://www.soonest.io/`
- All other pages: `https://www.soonest.io/[slug]`
- This prevents duplicate content if Google indexes both `/scheduling` and `/scheduling.html`

## OG Tag Rules

- `og:title` — same as `<title>` or a slightly shorter version (fine to remove " — Soonest" if it's long)
- `og:description` — same as meta description
- `og:url` — same as canonical href
- `og:type` — `website` for standard pages, `article` for blog posts
- `og:site_name` — always `Soonest`
- These control how the page looks when shared on LinkedIn, Slack, iMessage, etc.

---

## robots.txt — Blocking Pages from Google

If a new page should NOT be indexed (internal tools, draft pages, old versions), add it to `robots.txt`:

```
Disallow: /your-page-slug
```

Do NOT add public-facing pages here. Only drafts, archives, and internal tools.

---

## sitemap.xml — Adding New Pages

When a new public page goes live, add it to `sitemap.xml`:

```xml
<url>
  <loc>https://www.soonest.io/[slug]</loc>
  <priority>[0.9 for feature/product pages, 0.7 for blog, 0.3 for legal]</priority>
  <changefreq>[weekly for frequently updated, monthly for stable pages]</changefreq>
</url>
```

After updating, submit the sitemap again in Google Search Console (Sitemaps section) so Google picks up the new page faster.

---

## Priority Reference

| Priority | Use for |
|----------|---------|
| 1.0 | Homepage |
| 0.9 | Core feature pages, demo page |
| 0.7 | Blog posts, resources |
| 0.3 | Privacy, terms, legal |

---

## Quick Checklist Before Publishing

- [ ] Title is 50-60 characters and keyword-specific
- [ ] Meta description is 150-160 characters
- [ ] Canonical tag points to the correct clean URL
- [ ] OG tags are filled in (title, description, url, type, site_name)
- [ ] Page is added to sitemap.xml (if public)
- [ ] Page is added to robots.txt Disallow (if internal/draft)
- [ ] Page is added to the status table in web.md

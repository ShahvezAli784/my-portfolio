# Shahvez Memon — Personal Portfolio

A premium, editorial-style personal site for an aspiring AI/ML engineer and
software developer. Built with Next.js 14 (App Router), TypeScript, Tailwind
CSS, and Framer Motion — inspired by the craft and storytelling of Josh W.
Comeau's site, without copying its design.

## Design direction

- **Palette:** warm paper background (`#FAFAF8` / `#101012` dark), ink text,
  a single deep-indigo accent (`#3730A9` / `#817AEB` in dark mode). No
  gradients-as-decoration, no neon, one accent color used consistently.
- **Type:** Space Grotesk for display/headlines, Source Serif 4 for reading
  copy, JetBrains Mono for labels, chips, and metadata — a deliberately
  flipped pairing (sans display + serif body) instead of the usual serif
  hero + sans body.
- **Signature element:** the "margin rail" — a running notebook-margin
  annotation column beside each project case study (see `MarginNote.tsx`),
  echoing the fact that most of this work starts life as a lab notebook.

## Content honesty

This project pulls **real data** from `api.github.com` for every project
case study (problem, approach, and stack are sourced from actual repo
descriptions and READMEs). LinkedIn could not be accessed (it sits behind a
login wall) and no resume/portfolio file was supplied, so the following are
**clearly labeled placeholders** you should replace:

| File | What to replace |
|---|---|
| `data/site.ts` | Bio paragraphs under `about.*`, email, resume link |
| `data/education.ts` | Institution, degree, coursework, achievements |
| `data/certifications.ts` | Real certifications (or leave the array empty to hide the section) |
| `data/experience.ts` | Hackathons, leadership, volunteer work |
| `data/projects.ts` | `challenges` / `lessons` fields (technical narrative is already real; personal reflection is left as `null`) |
| `public/resume.pdf` | Add your actual resume PDF here |

Search each file for the string `PLACEHOLDER` to find every spot that needs
your input.

## Tech stack

- **Framework:** Next.js 14 (App Router, React Server Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom design tokens (CSS variables for
  light/dark theming)
- **Animation:** Framer Motion (scroll reveals, page-load choreography,
  micro-interactions)
- **Icons:** lucide-react
- **Fonts:** next/font/google (Space Grotesk, Source Serif 4, JetBrains Mono)

## Folder structure

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout, fonts, theme provider, metadata
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Design tokens + base styles
│   ├── sitemap.ts / robots.ts   # SEO
│   ├── not-found.tsx
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── projects/[slug]/page.tsx # Case-study template
│   ├── resume/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/                  # Navbar, Footer, ThemeToggle
│   ├── ui/                      # Chip, SectionHeading, MarginNote, RevealOnScroll
│   └── sections/                # Hero, AboutTeaser, FeaturedProjects, GithubActivity, ContactCTA, ContactForm
├── data/                        # All content — projects, site copy, education, etc.
├── hooks/useTheme.tsx            # Light/dark mode context
├── lib/utils.ts
└── public/
```

## Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Deploy to [Vercel](https://vercel.com) (zero-config for Next.js):

```bash
npx vercel
```

Or build a production bundle yourself:

```bash
npm run build
npm run start
```

## Customization guide

1. **Replace placeholder content** — see the table above. Everything lives
   in `data/`, so no component code needs to change.
2. **Swap the accent color** — edit `--color-accent` / `--color-accent-soft`
   in `app/globals.css` (both light and dark blocks).
3. **Add a real contact backend** — `components/sections/ContactForm.tsx`
   currently falls back to `mailto:`. Swap the `handleSubmit` function for a
   POST to Formspree, Resend, or a Next.js API route.
4. **Add project screenshots** — drop images into `public/images/<slug>/`
   and reference them in `app/projects/[slug]/page.tsx` in place of the
   placeholder block.
5. **Contribution graph** — the homepage embeds a public GitHub contribution
   chart image keyed to `data/github.ts`'s `githubUsername`. Update that
   value if your GitHub handle changes.

## Performance & accessibility

- Semantic HTML throughout, visible focus rings, skip-to-content link
- `prefers-reduced-motion` respected globally
- Images use `next/image` where applicable; the contribution chart is a
  lazy-loaded external SVG
- Fonts loaded via `next/font` (self-hosted, no layout shift)
- Static generation for all project case-study pages via
  `generateStaticParams`

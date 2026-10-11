# GOVIND RAJ — PORTFOLIO

A cinematic portfolio for **Govind Raj**: Full-Stack Developer and AI & ML Enthusiast, studying Computer Science and Engineering at KIIT University.
The site presents Govind's education, projects, technical skills, certification, and leadership experience.

> The site keeps its cinematic visual style while presenting Govind's own education, projects, skills, and experience.

## Run it locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed as-is to Vercel, Netlify, GitHub Pages or any static host.

## Updating the content

**Portfolio content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts).** Components read profile, education, experience, project, skill, and certification details from this file.

| To change… | Edit |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub | `profile` |
| A project, or a new one | `projects` (add an object; it appears in Projects, the overlay, the resume sheet and the counts) |
| Achievements / certifications | `achievements`, `certifications` |
| Skills and their "where it's used" notes | `skillCategories`, `skillEvidence` |
| Education, projects, and career journey | `seasons` |
| Project and career highlights | `topPicks` |
| ▶ Intro highlight reel | `introSlides` |
| Profile order (Recruiter / Developer / Creative) | `viewerProfiles` |
| Opening studio card text | `profile.originalLabel` |

**Résumé:** add `public/assets/Govind_Raj_Resume.pdf` when the final résumé is ready. Add Govind's professional email to `profile.email` when available.

**Photo:** replace `pic1.jpeg` (high-res photo) and `pic.png` (background-removed cutout with the same framing), then run:

```bash
npm run images
```

This rebuilds the responsive WebP portraits and the social share image in `public/assets/`.

## What's inside

```
src/
  data/portfolio.ts        ← portfolio profile and project details
  App.tsx                  ← stages: opening → profile select → home; overlays
  components/
    OpeningSequence        ← black → studio card → GOVIND → PORTFOLIO → portrait → ▶ PLAY
    ProfileSelector        ← choose a portfolio view (changes section order)
    Navbar                 ← hide-on-scroll nav, profile switcher, mobile menu
    Hero                   ← billboard: parallax portrait, particles, light streaks, floating chips
    PlayIntro              ← ▶ Play Intro: zoom into portrait → highlight reel (pause, ← →, tap zones)
    ContinueWatching       ← section cards with reading progress bars
    About                  ← The Pilot
    Seasons / EpisodeCard  ← education, projects, and leadership chapters
    Originals / ProjectCard← pinned horizontal project sequence on desktop, swipe rail on touch
    ProjectModal           ← full-screen project overlay with a shared-element transition
    TopPicks               ← selected project and career highlights
    Skills                 ← skill genres; each card shows where the skill appears
    Achievements           ← award-poster cards + certification rail (links to credentials)
    ResumeViewer/ResumeModal ← designed resume sheet, PDF viewer, download
    FinalCTA               ← TO BE CONTINUED… + contact links
    CustomCursor, fx.tsx   ← cursor states, magnetic buttons, 3D tilt, text reveals, particles
  hooks/                   ← Lenis smooth scroll + scroll lock, media queries, section progress
scripts/build-images.mjs   ← portrait/share-image pipeline (sharp)
```

**Stack:** React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, Lenis.

## Accessibility and performance

- `prefers-reduced-motion` is respected: smooth scroll, the custom cursor, tilt, particles, grain and the pinned horizontal scroll turn off, and the opening jumps straight to its final frame.
- Hover effects only run on devices with a precise pointer. Touch devices get tap interactions and native swipe rails.
- The custom cursor appears only with a mouse or trackpad.
- Overlays close with Esc, and the highlight reel supports Space and the ← → keys.
- Portraits are responsive WebP files (25–90 KB). Overlays are code-split, and particles pause when they're off screen.

## Keyboard shortcuts

- **Opening:** Enter or Esc skips it.
- **Play Intro:** Space pauses, ← and → change slides, Esc closes.
- **Project and resume overlays:** Esc closes.

# MD Wahidul Islam — Portfolio

A personal portfolio site built with Next.js, TypeScript, and Tailwind CSS v4. It serves as a hybrid between a résumé, a project showcase, and a research archive.

**Live site:** [wahidihan.vercel.app](https://wahidihan.vercel.app)

---

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Project Structure](#project-structure)
5. [Known Issues](#known-issues)

---

## Overview

This portfolio was built from scratch without a template or component library. The design prioritizes readability, generous spacing, and a restrained two-theme color system. Content is data-driven: projects and interests are defined in `lib/data.ts` and rendered through dynamic routes.

The site includes:

- **Six main pages:** Home, About, Projects, Skills, Research, CV, Interests, Contact
- **Dynamic project detail pages** generated from a typed data array
- **A working contact form** powered by Web3Forms
- **Embedded PDF viewers** for the CV and undergraduate thesis, with lazy loading
- **A custom light and dark theme system** driven by CSS variables
- **A responsive header** with a mobile dropdown menu and a theme toggle
- **A scroll-to-top button** that appears after scrolling

---

## Tech Stack

| Layer     | Technology                                                | Purpose                                |
| --------- | --------------------------------------------------------- | -------------------------------------- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) | Routing, SSR, image optimization       |
| Language  | [TypeScript](https://www.typescriptlang.org/)             | Type safety across components and data |
| Styling   | [Tailwind CSS v4](https://tailwindcss.com/)               | Utility-first CSS with CSS variables   |
| Theme     | [next-themes](https://github.com/pacocoursey/next-themes) | Light/dark mode persistence            |
| Icons     | [lucide-react](https://lucide.dev/)                       | Menu, download, and arrow icons        |
| Animation | [Framer Motion](https://www.framer.com/motion/)           | Available for future use               |
| Form      | [Web3Forms](https://web3forms.com/)                       | Serverless contact form submissions    |
| PDF       | Native `<iframe>` viewer                                  | Embedded CV and thesis PDFs            |
| Hosting   | [Vercel](https://vercel.com/)                             | Automatic deploys from GitHub          |
| Fonts     | `geist` (sans/mono)                                       | Typography                             |

---

## Features

### Home

- Hero section with a serif headline and a short intro
- "Selected Work" section featuring two projects (DecaDome and Campfire)
- A research brief linking to the full thesis page
- Cards with hover states that fill with the accent color

### Projects

- Dynamic list of all projects from `lib/data.ts`
- Cards with hover fill, tags, and a link to the detail page
- Detail pages include:
  - Title, year, and long description (justified text)
  - Two screenshots side by side with captions
  - "Download & Play" / "View Live Site" and "View Source Code" buttons

### Research

- Thesis summary with three metric cards (speech accuracy, facial accuracy, fusion gain)
- Metadata block (datasets, stack, fusion strategy, status)
- Tags for technologies used
- A "Modernized Pipeline" section describing the rebuild
- Embedded thesis PDF with a "Load PDF Viewer" button to defer loading

### CV

- Header with a "Download PDF" button
- Embedded resume PDF behind a "Load PDF Viewer" button
- A4 aspect ratio for the PDF frame

### About

- Personal narrative in five paragraphs
- A real photo (not a corporate headshot) with a rounded border
- Two-column layout on desktop, stacked on mobile
- Sticky image column on desktop

### Skills

- Grouped skill categories: Languages, Fundamentals, Frontend, Backend & Security, Databases, AI/ML, Data & Domain Libraries, Tools & Deployment, Game Dev
- Pill-style tags with bottom borders between groups
- No "professional skills" fluff — only technical skills

### Interests

- Categorized interests (Gaming, Books, Anime, Manga, Philosophy, History, Astronomy, Politics)
- Cards with hover states matching the Projects page

### Contact

- Working form powered by Web3Forms
- Name, email, and message fields with length limits
- Honeypot field (`botcheck`) for spam protection
- Status messages for sending, success, and error states

### Global

- **Theme toggle:** Light mode (off-white and red) and dark mode (neutral gray and turquoise)
- **Theme persistence:** Uses `next-themes` with `localStorage`
- **Scroll-to-top button:** Appears after scrolling 300px, square shape with a bold arrow
- **Sticky header:** Glassmorphism with `backdrop-blur-md`
- **Mobile menu:** Left-aligned dropdown with slide-down animation and glass effect
- **Footer:** Links to Facebook, GitHub, LinkedIn, and Instagram, with a dynamic copyright year
- **Favicon and Apple touch icon:** Custom `app/icon.png` and `app/apple-icon.png`
- **OG image:** Terminal-style `app/opengraph-image.png` for social previews

---

## Project Structure

portfolio/
├── app/
│ ├── about/page.tsx
│ ├── contact/
│ │ ├── ContactForm.tsx
│ │ └── page.tsx
│ ├── cv/
│ │ ├── CVContent.tsx
│ │ ├── PDFViewer.tsx
│ │ └── page.tsx
│ ├── interests/page.tsx
│ ├── projects/
│ │ ├── [slug]/
│ │ │ ├── default.tsx
│ │ │ └── page.tsx
│ │ └── page.tsx
│ ├── research/
│ │ ├── PDFViewer.tsx
│ │ └── page.tsx
│ ├── skills/page.tsx
│ ├── apple-icon.png
│ ├── globals.css
│ ├── icon.png
│ ├── layout.tsx
│ ├── opengraph-image.png
│ └── page.tsx
├── components/
│ ├── layout/
│ │ ├── Footer.tsx
│ │ └── Header.tsx
│ ├── theme-provider.tsx
│ └── ui/
│ ├── Button.tsx
│ ├── ScrollToTop.tsx
│ └── Section.tsx
├── lib/
│ ├── data.ts
│ └── utils.ts
├── public/
│ ├── projects/
│ │ ├── decadome-gameplay.png
│ │ ├── decadome-leaderboard.png
│ │ ├── campfire-rooms.png
│ │ ├── campfire-chat.png
│ │ ├── lua-gameplay.png
│ │ ├── lua-gameover.png
│ │ ├── portfolio-light.png
│ │ └── portfolio-dark.png
│ ├── me.jpg
│ ├── resume.pdf
│ └── thesis.pdf
├── types/
│ ├── interest.ts
│ └── project.ts
├── next.config.ts
├── package.json
└── tsconfig.json

## Known Issues

Dynamic project pages 404 on Vercel with Cache Components enabled. This is a known Next.js 16 bug with cacheComponents: true and dynamic routes. A default.tsx file has been added to app/projects/[slug]/ as a workaround, but the issue may persist until the framework is updated.

Favicon caching. Browsers cache favicons aggressively. If you change app/icon.png, hard-refresh or open in incognito to see the change.

PDF viewer toolbar. The #toolbar=0 parameter is respected by some browsers but not all. Chrome and Firefox show their native PDF toolbar regardless.

Web3Forms free tier. 250 submissions per month. If the limit is exceeded, submissions will fail silently until the next month.

Vercel Hobby plan. The free tier is for non-commercial use only. If the site becomes commercial, upgrade to Pro ($20/month).

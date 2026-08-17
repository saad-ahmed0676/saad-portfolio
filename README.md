# Personal Portfolio — Saad Ahmed

My personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features a 3D animated blob using React Three Fiber, smooth section transitions powered by Framer Motion, and a scrolling tech marquee. All content is driven from a single `lib/data.ts` file making updates straightforward.

## Tech Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| 3D | React Three Fiber + Three.js |
| Animation | Framer Motion |

## Sections

- **Hero** — name, role, tagline, and animated 3D blob
- **Tech Marquee** — scrolling banner of technologies
- **About** — bio and location
- **Projects** — card grid of featured projects with tags and links
- **Experience** — timeline of roles and education
- **Testimonials** — client/peer quotes
- **Footer** — social links and contact

## Project Structure

```
saad-portfolio/
├── app/
│   ├── page.tsx          # Root page — composes all sections
│   ├── layout.tsx        # App shell, metadata, font setup
│   └── globals.css       # Global styles and CSS variables
├── components/
│   ├── Hero.tsx          # Hero section with 3D blob
│   ├── Blob3D.tsx        # React Three Fiber animated blob
│   ├── TechMarquee.tsx   # Scrolling tech banner
│   ├── About.tsx         # About section
│   ├── Projects.tsx      # Project cards grid
│   ├── Experience.tsx    # Experience and education timeline
│   ├── Testimonials.tsx  # Testimonial cards
│   ├── Navbar.tsx        # Navigation bar
│   └── Footer.tsx        # Footer with socials
├── lib/
│   └── data.ts           # All content — edit this to update the site
└── public/
    └── projects/         # Project screenshots (add your own here)
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Updating Content

All site content lives in `lib/data.ts` — no need to touch components for routine updates:

```ts
// Update your profile info
export const profile = { name, role, tagline, bio, ... }

// Add or edit projects
export const projects = [{ title, description, tags, link, image }]

// Update experience/education
export const experience = [{ period, role, org }]
```

To add project screenshots, drop images into `public/projects/` and reference them as `/projects/your-image.jpg` in `data.ts`.

## Deployment

The easiest way is [Vercel](https://vercel.com) — connect your GitHub repo and it deploys automatically on every push.

```bash
# Or build locally
npm run build
npm run start
```

## Author

**Saad Ahmed** — [saadahmed.0676@gmail.com](mailto:saadahmed.0676@gmail.com)

# Portfolio — M Hamza Javaid

Personal portfolio site: hero, four featured projects (pulled from real
GitHub repos, not placeholder text), about, and contact. Built with
Next.js (App Router) and Tailwind CSS, fully static — no backend, no
API keys, deployable anywhere that serves static files.

## Running locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Project structure

```
app/
  page.tsx              assembles the sections below
  layout.tsx             fonts, metadata
  icon.svg                favicon
  data/projects.ts        project content -- edit this to add/change a project
  components/
    Nav.tsx
    Hero.tsx
    Projects.tsx
    ProjectCard.tsx
    About.tsx
    Contact.tsx
```

To add a project, add an entry to `app/data/projects.ts` — nothing else
needs to change, `ProjectCard` renders whatever's there.

## Deploying

Fully static (`npm run build` produces prerendered pages, no server
needed). Deploys cleanly to Vercel, Netlify, or GitHub Pages. Vercel is
the path of least friction for a Next.js app specifically: import this
repo at vercel.com, no config needed.

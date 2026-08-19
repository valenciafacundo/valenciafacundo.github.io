# valenciafacundo.github.io

Personal portfolio of **Facundo Valencia** — Senior Frontend & Mobile Engineer.

Rebuilt as a modern single-page app with **React + Vite + Tailwind CSS v4**,
bilingual (ES/EN), with light/dark themes.

## Tech

- React 19 + Vite
- Tailwind CSS v4
- framer-motion (scroll reveals) · lucide-react (icons)

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Deploy (GitHub Pages)

Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`):
every push to `main` builds the site and publishes `dist/` to GitHub Pages.

One-time setup: in the repo **Settings → Pages → Build and deployment**,
set **Source** to **GitHub Actions**.

## Structure

```
public/            static assets (CV PDFs, images, tech icons)
src/
  data/content.js  all bilingual copy (ES/EN) in one place
  context/         language + theme providers
  components/      Navbar, Hero, About, Experience, Skills, Projects, Contact, Footer
```

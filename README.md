# Kamal Poshala — Portfolio

Personal portfolio site. Software engineer working across full-stack product,
backend systems, and applied machine learning.

**Live:** https://kamal-portfolio.vercel.app

## Stack

- [Next.js 16](https://nextjs.org) (App Router) · React 19 · TypeScript
- Tailwind CSS 4
- CSS scroll-driven animations (no animation library)
- Deployed on Vercel

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Structure

```
src/
  app/            # routes: / (single page) and /resume
  components/     # section components + Navbar / Footer / ThemeToggle
  data/           # experience, projects, skills content
```

Content lives in `src/data/*` — edit those files to update experience,
projects, and skills.

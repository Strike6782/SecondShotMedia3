# Second Shot Media

Website voor [Second Shot Media](https://secondshotmedia.nl) — content agency voor fotografie en videografie (leisure, events, gala's, zakelijke evenementen).

**Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript.

## Ontwikkeling

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Beschrijving |
|--------|--------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Start production server lokaal |
| `npm run gallery:optimize` | Optimaliseer foto's uit `gallery-incoming/` naar `public/gallery/` |
| `npm run reels:optimize` | Optimaliseer reels uit `reels-incoming/` |

## Deploy op Vercel

De site is bedoeld voor **Vercel** (Git-integratie, automatische builds).

1. Import deze repo in Vercel.
2. Koppel domein `secondshotmedia.nl`.

Zie [DEPLOYMENT.md](./DEPLOYMENT.md) voor DNS, CLI en checklist.

## Structuur

- `src/app/` — pagina's en routes
- `src/lib/branches.ts` — content per dienst/branche
- `src/lib/cities.ts` + `steden.txt` — SEO stadspagina's
- `public/gallery/` — geoptimaliseerde portfolio-afbeeldingen
- `gallery-incoming/` — staging voor nieuwe foto's (niet op Vercel)

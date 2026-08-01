# Deployment op Vercel

Second Shot Media is een Next.js 16 App Router site, geoptimaliseerd voor hosting op [Vercel](https://vercel.com).

## Eerste setup

1. **Import project** in Vercel: koppel de GitHub-repo `SecondShotMedia3`.
2. **Framework preset:** Next.js (automatisch gedetecteerd).
3. **Build settings** (defaults zijn goed):
   - Build command: `npm run build`
   - Output: standaard Next.js (geen static export)
4. **Environment variables** (Production + Preview):

   | Variable | Beschrijving |
   |----------|--------------|
   | `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Access key van [Web3Forms](https://web3forms.com) voor het contactformulier |

5. Deploy. Na de eerste succesvolle build krijg je een `*.vercel.app` preview-URL.

## Custom domain (secondshotmedia.nl)

1. Vercel → Project → **Settings** → **Domains** → voeg `secondshotmedia.nl` en `www.secondshotmedia.nl` toe.
2. Volg de DNS-instructies van Vercel (meestal:
   - `A` record naar Vercel IP, of
   - `CNAME` voor `www` naar `cname.vercel-dns.com`).
3. Wacht op DNS-propagatie; Vercel regelt HTTPS automatisch.
4. Zet `www` redirect naar apex (of vice versa) in Vercel domain settings naar voorkeur.

## Lokale ontwikkeling

```bash
npm install
cp .env.example .env.local   # vul Web3Forms key in
npm run dev
```

## CLI (optioneel)

```bash
npx vercel login
npx vercel link
npx vercel env pull .env.local   # pull env vars van Vercel naar lokaal
npx vercel --prod                # production deploy
```

## Na deploy controleren

- [ ] `/over-en-contact/` — contactformulier verstuurt (Web3Forms)
- [ ] `/sitemap.xml` en `/robots.txt` bereikbaar
- [ ] Oude URL's redirecten (zie `next.config.ts`)
- [ ] `https://secondshotmedia.nl/` canonical en OG-tags correct

## Gallery / reels bijwerken

Galerij en reels worden lokaal geoptimaliseerd en gecommit in `public/`:

```bash
npm run gallery:optimize
npm run reels:optimize
git add public/gallery public/reels
git commit && git push
```

Vercel bouwt automatisch opnieuw na push naar `main`.

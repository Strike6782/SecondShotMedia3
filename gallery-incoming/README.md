# Gallery incoming (staging)

Plaats hier je ruwe foto-selecties per album. Kopieer vanaf je computer naar de juiste submap:

- `events/` — evenementen en festivals
- `club/` — club en nightlife
- `corporate/` — zakelijke evenementen
- `students/` — gala en studentenverenigingen
- `theme-parks/` — attractieparken en leisure

Daarna in de projectroot:

```bash
npm run gallery:optimize
```

Het script verkleint de foto's, verwijdert oude bestanden in `public/gallery/<album>/` en zet de geoptimaliseerde versies daar neer.

Ondersteunde bronformaten: JPG, JPEG, PNG, WebP, AVIF, TIFF, HEIC.

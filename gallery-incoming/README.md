# Gallery incoming (staging)

Plaats hier nieuwe foto's per map. Daarna in de projectroot:

```bash
npm run gallery:optimize
```

Het script verkleint de foto's en zet ze in `public/gallery/<map>/`.
Let op: een map die hier foto's bevat, wordt in `public/gallery/` **helemaal vervangen**.
Zet dus alle foto's die je in die map wilt houden hier neer, niet alleen de nieuwe.
Lege mappen worden overgeslagen.

Welke map bij welke categorie hoort (zie `content/portfolio.json` → `galleries`):

- `corporate/` — zakelijke events (en de borrelfoto's bij bedrijfsfeesten)
- `students/` — bedrijfsfeesten en gala's
- `events/` — festivals en publieksevenementen
- `theme-parks/` — pretparken en dagjes uit
- `club/` — wordt niet meer getoond

Welke foto's op een pagina staan, en in welke volgorde, bepaal je in `content/portfolio.json`
met de `include`-lijst van een gallery. Zonder `include` wordt de hele map getoond.

Ondersteunde bronformaten: JPG, JPEG, PNG, WebP, AVIF, TIFF, HEIC.

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

- `zakelijk/` — zakelijke events
- `feesten/` — bedrijfsfeesten en gala's
- `festivals/` — festivals en publieksevenementen
- `pretparken/` — pretparken en dagjes uit

De homepage toont bij elk bezoek een willekeurige mix uit deze vier mappen.

Welke foto's op een pagina staan, en in welke volgorde, bepaal je in `content/portfolio.json`
met de `include`-lijst van een gallery. Zonder `include` wordt de hele map getoond.

Ondersteunde bronformaten: JPG, JPEG, PNG, WebP, AVIF, TIFF, HEIC.

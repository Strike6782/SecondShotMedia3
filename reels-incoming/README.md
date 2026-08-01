# Reels incoming (videobestanden)

Plaats hier je ruwe reel-videobestanden (`.mp4` of `.mov`).

**Alle metadata** (titel, opmerking, volgorde, branche) staat in **`content/portfolio.json`** onder `reels`.

## Stappen

1. Kopieer videobestanden naar deze map.
2. Pas het reel-item aan in `content/portfolio.json` (volgorde = volgorde op de website).
3. Draai in de projectroot:

```bash
npm run reels:optimize
```

Het script comprimeert de video's voor webgebruik, zet ze in `public/reels/` en werkt `content/leisure-reels.json` bij.

## Voorbeeld in content/portfolio.json

```json
"reels": [
  {
    "file": "halloween-vlaardingen.mp4",
    "title": "Halloween Vlaardingen",
    "note": "Alleen montage",
    "branches": ["leisure"]
  }
]
```

- `file` — bestandsnaam in deze map (exact zoals op schijf)
- `title` — titel in het showcase-overzicht
- `note` — optionele opmerking, bijv. "Alleen montage" of "Alleen camerawerk"
- `branches` — op welke branchepagina('s) de reel hoort

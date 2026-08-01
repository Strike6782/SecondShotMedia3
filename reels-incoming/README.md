# Reels incoming (staging)

Plaats hier je ruwe reel-videobestanden en geef ze een titel in `reels.json`.

## Stappen

1. Kopieer `.mp4` (of `.mov`) bestanden naar deze map.
2. Voeg per reel een item toe in `reels.json` (volgorde = volgorde op de website).
3. Draai in de projectroot:

```bash
npm run reels:optimize
```

Het script comprimeert de video's voor webgebruik, zet ze in `public/reels/` en werkt `content/leisure-reels.json` bij voor de themapark-pagina.

## reels.json voorbeeld

```json
[
  {
    "file": "halloween-vlaardingen.mp4",
    "title": "Halloween Vlaardingen",
    "note": "Alleen montage"
  }
]
```

- `file` — bestandsnaam in deze map (exact zoals op schijf)
- `title` — titel in het showcase-overzicht (verplicht vóór `npm run reels:optimize`)
- `note` — optionele opmerking onder de titel, bijv. "Alleen montage" of "Alleen camerawerk"

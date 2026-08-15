# How to refresh the war room

Data lives in `houses.js` as `window.WAR_ROOM`. Do not hand-edit `index.html` for listing changes.

Cadence: Hermes cron `d3b3b26d5849` runs daily at 18:00 Europe/Oslo. Scrape both belts, rewrite `houses.js`, commit, push. If nothing material changed, still bump `scrapedAt` only when you actually re-checked FINN.

## FINN searches

- Houses in Eiganes / Stokka / Sandal: https://www.finn.no/realestate/homes/search.html?location=2.20012.20196.20716&property_type=1&property_type=2&property_type=4&sort=PUBLISHED_DESC
- Houses in Våland / Bekkefaret: https://www.finn.no/realestate/homes/search.html?location=2.20012.20196.20729&property_type=1&property_type=2&property_type=4&sort=PUBLISHED_DESC

`property_type` 1 = enebolig, 2 = tomannsbolig, 4 = rekkehus. Never scrape apartments into this board.

## Keep

- `syrin` (Syrinveien 27) always, status `sold`, as the type specimen.
- Recently sold comps that still teach price (e.g. Øvre Stokkavei 82A) for a few weeks.
- Honest verdicts: `strong` | `watch` | `trap` | `dream` | `wrong` | `sold`.

## Scoring

family 35 / garden 20 / area 20 / risk 15 / forus 10.

Must-haves vs the brief: kid garden, 2 living zones, 4+ flexible bedrooms, 2+ baths, gym for rack + treadmill, Forus commute, ~11m reference, buy window Apr/May 2027.

## After editing `houses.js`

```sh
git add houses.js
git commit -m "Refresh FINN listings"
git push origin main
```

GitHub Pages usually updates within a minute or two.

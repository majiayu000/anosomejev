# GitHub Pages

The static website lives in `docs/`. Its selected resources are derived from the two hand-maintained READMEs; historical collections remain separate. Do not edit `docs/data/curated.json` by hand.

From the repository root:

```bash
python3 scripts/sync_catalog.py
python3 scripts/sync_catalog.py --check
python3 -m http.server 8000 --directory docs
```

Open `http://localhost:8000`. Check desktop/mobile layouts, keyboard navigation, resource language, category, search, empty results, and the failure fallback. Opening `index.html` directly with `file://` prevents the catalog fetch in many browsers.

After reviewing and merging the changes, publication can be configured under Settings → Pages → Deploy from a branch → `main` → `/docs`. The expected project-site URL is `https://majiayu000.github.io/awesome-jev/`; this document does not assert it is enabled. A PR preview is not a deployment. Publishing settings were not changed by the onboarding update.

The new landing page loads `css/learn.css`, `js/app.js`, and `data/curated.json`. Old CSS, radar pages and `data/entries.json` are historical assets, not the active shortlist. Their provenance is retained in `docs/archive/SOURCE-v2.md`.

# SOURCE — provenance for anosomejev Trust Map (v2)

## Positioning

**Jev 可信地图 / Trust Map for Jev · System One** — searchable directory with editorial trust labels, Must-30 curated layer, and weekly Chinese radar.

This is **not** a silent copy of [awesomejev.com](https://awesomejev.com/). We do **not** claim we invented the universe of Jev / System One projects.

## How entries were built

1. **Primary (github-primary):** GitHub discovery crawl saved at build time as `uploads/discovered_repos.json` (~567 repos). Fields we treat as ours to refresh: `fullName`, `description`, `language`, `stargazersCount`, `updatedAt`, `homepageUrl`, `url`, `topics` — obtained via GitHub Search / repo metadata APIs (snapshot **2026-09-19**).
2. **Must-30 overlay:** Parsed the Must-30 table from [`majiayu000/anosomejev` README_zh](https://raw.githubusercontent.com/majiayu000/anosomejev/main/README_zh.md). Editorial `trust_tags` + `why_signal` applied by exact repo / URL match. Non-repo official links (docs, manifesto, evals, gateway) added as `provenance: curated-must30`.
3. **Radar picks:** Tagged from the 2026-W38 radar narrative (`radar-pick`) for launch docs + Browser Use Ultrafast, etc.
4. **Optional seed overlap:** A local catalog derived from public directories (awesomejev.com / hellogumbo JSON) may have been consulted earlier for category ideas. **Seed overlap may exist with public directories**; entries in `docs/data/entries.json` are verified/enriched via **GitHub API fields we own**. We do not strip attribution for any mirrored text we keep, and we do not present this map as an uncredited awesomejev mirror.

## Provenance field

| Value | Meaning |
| --- | --- |
| `github-primary` | Row built from the GitHub discovery crawl (live stars / language / pushed time at crawl) |
| `curated-must30` | Official site / docs / evals / gateway URL required by Must-30 but not a GitHub repo |

## Trust tags (editorial, not certifications)

`vendor-official` · `vendor-claim` · `independent-eval` · `replica` · `structured-demo` · `star-inflation-host` · `needs-verify` · `chinese` · `radar-pick`

See on-site legend in `docs/index.html`. Labels are **not affiliated with TypeSafe**.

## Snapshot

| Field | Value |
| --- | --- |
| snapshot_date | 2026-09-19 (box-local / crawl day) |
| primary_crawl | `/workspace/uploads/discovered_repos.json` |
| must30_source | anosomejev README_zh Must-30 table |
| radar | `radar/2026-W38.md` |

## Disclaimer

- Not affiliated with TypeSafe AI or awesomejev.com.
- Stars go stale; re-crawl GitHub to refresh.
- Type safety ≠ factual correctness.

## Stars policy

- Prefer live `stargazersCount` from the GitHub discovery crawl (`github-primary`).
- Must-30 GitHub repos **absent from the crawl** keep `repo_url` and may carry stars from the Must-30 README snapshot (`stars_note: must30-readme-snapshot`); provenance is `curated-must30` until the next crawl includes them.
- `TheoLeeCJ/openjev` maps to crawl hit `TheoLeeCJ/SemIf` (same project line).

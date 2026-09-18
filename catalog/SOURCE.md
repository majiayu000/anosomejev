# SOURCE — catalog mirror notes

## How we mirrored

1. Fetched [https://awesomejev.com/](https://awesomejev.com/) (static HTML; build noted on page as refreshed around 2026-09-17).
2. Preferred structured data: the site footer points contributors to `data/projects.json` in [`hellogumbo/awesome-jev`](https://github.com/hellogumbo/awesome-jev).
3. Downloaded `https://raw.githubusercontent.com/hellogumbo/awesome-jev/main/data/projects.json` (`updated`: **2026-09-18**, **410** projects, **11** categories).
4. Mapped each project into the catalog schema below. No projects were invented; only source fields were transformed.

## Snapshot

| Field | Value |
| --- | --- |
| snapshot_date | 2026-09-18 |
| entry_count | 410 |
| source_page | https://awesomejev.com/ |
| source_json | https://github.com/hellogumbo/awesome-jev/blob/main/data/projects.json |
| HTML note | Page also advertised ~410 entries / refreshed 2026-09-17 (build `556472e`); JSON `updated` is 2026-09-18. |

## Section counts

| category_id | Section | Count |
| --- | --- | ---: |
| `official` | 01 · Official | 19 |
| `sdks` | 02 · SDKs & clients | 35 |
| `integrations` | 03 · Integrations | 22 |
| `agents` | 04 · Agent tooling | 61 |
| `browser` | 05 · Browser & computer use | 24 |
| `apps` | 06 · Applications | 34 |
| `games` | 07 · Games & simulations | 47 |
| `demos` | 08 · Demos & playgrounds | 46 |
| `research` | 09 · Benchmarks & research | 71 |
| `lists` | 10 · Other lists | 3 |
| `articles` | 11 · Articles & threads | 48 |
| | **Total** | **410** |

## Entry schema (`entries.json`)

| Field | Notes |
| --- | --- |
| `name` | Project / article title |
| `description` | From source |
| `lang` | Programming language or null |
| `stars` | GitHub stars from snapshot; **null** when there is no repo (sites/articles show "—" on the page) |
| `category` | Human section title (e.g. `Official`) |
| `category_id` | Stable id (e.g. `official`) |
| `repo_url` | `https://github.com/{owner}/{repo}` or null |
| `site_url` | Live site URL or null |
| `post_url` | Launch/post/thread URL (`post` or article `url`) or null |
| `source` | Always `"awesomejev.com"` |
| `snapshot_date` | `2026-09-18` |

## Disclaimer

- This folder is a **mirror of a public directory page / its public JSON**, for convenience inside [anosomejev](https://github.com/majiayu000/anosomejev).
- **Not affiliated** with TypeSafe AI or awesomejev.com.
- **Stars and metadata go stale** until the next refresh; live GitHub and the upstream site may differ.
- Do not treat this catalog as an endorsement of any listed project.

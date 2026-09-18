# Trust labels

Every curated entry in **anosomejev** should carry one or more labels so readers can tell vendor claims from independent evidence, demos from production patterns, and Jev-primary repos from star-inflated hosts.

This list is **not affiliated with TypeSafe**. Labels are editorial, not certifications.

## Core labels

| Label | Meaning | When to apply |
| --- | --- | --- |
| `official` | Published by TypeSafe (docs, SDKs, manifesto, evals, Discord) | Company org or typesafe.ai / docs.typesafe.ai |
| `community` | Third-party project or writing | Default for non-vendor entries |
| `★N@date` | Star count with snapshot date | Prefer awesomejev.com refresh date or live GitHub fetch date; never invent |
| `zh` | Chinese-language primary content | Longform ZH, ZH README, ZH threads |
| `independent-eval` | Methodology and/or raw results outside TypeSafe workflow evals | Benches, reports, Every-style smoke tests with disclosed method |
| `vendor-claim` | Speed, cost, or accuracy from TypeSafe marketing / evals | Always pair with caveats link when used for ranking |
| `structured-state-demo` | Game / CU / sim that feeds **structured** state (not pixels “yet”) | Doom, Mario, Wikiracing-style; cite launch-post nuance |
| `gateway-only` | Reachable via OpenRouter / Vercel / Cloudflare etc., not necessarily direct API | Integration surface entries |
| `star-inflation-host` | Large host repo where Jev is one feature, not the product | e.g. `vercel/eve` — do not use raw ★ to rank “top Jev projects” |
| `replica` | Open interface / training experiment **not** TypeSafe weights | jevlike, openjev, decider, PocketJev, etc. |
| `negative-result` | Independent result where Jev underperforms or fails a claim | Phishing bench (Haiku wins), finance “no alpha”, unreproduced wins |
| `needs-verify` | Listed elsewhere but not independently confirmed this research pass | e.g. HackSing/jev-report until live repo check |
| `single-run` | One-off demo metrics without multi-run methodology | Treat as anecdote |
| `schema-guarantee` | “0% type errors / no hallucinated schema” — mathematical typing | Never equate with task accuracy |
| `task-accuracy` | Correctness vs labels / ground truth / planted defects | Separate from schema-guarantee |
| `calibration` | Probabilities / confidence used as a control plane | Thresholds, selective automation, calibration curves |

## Red line (pin everywhere)

> **Type safety ≠ factual correctness.**  
> Schema-valid Choice / Score / Noul answers can still be **confidently wrong**. Vendor “0% hallucination” language refers to **not inventing out-of-schema text**, not semantic truth. Official jaggedness and HN thread [49717558](https://news.ycombinator.com/item?id=49717558) both emphasize this.

## Separation tags (use in critique / evals)

| Concern | Tag | Notes |
| --- | --- | --- |
| Typed output always matches schema | `schema-guarantee` | Mathematical for constrained output |
| Agreement with frontier averages on vendor workflows | `vendor-claim` + evals.typesafe.ai caveats | Not ground truth |
| Correctness on your labels | `task-accuracy` + `independent-eval` | Required before automation |
| Thresholding / escalate-on-low-confidence | `calibration` | Prefer production entries that show this |

## Star policy

1. Prefer **★ from [awesomejev.com](https://awesomejev.com/) refreshed 2026-09-17** when citing that snapshot; write `★N (awesomejev 2026-09-17)`.
2. Live GitHub may differ — if citing live, write `★N (GitHub YYYY-MM-DD)`.
3. **Exclude or asterisk** `star-inflation-host` entries from “most starred Jev-primary” rankings.
4. Do not invent metrics. If unknown, omit stars.

## How labels appear in lists

Example bullet:

```md
- [browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) — ★1,194 (awesomejev 2026-09-17) · `community` · `structured-state-demo` — Jev picks op+DOM; LLM only for TYPE_TEXT.
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for what a PR must include.

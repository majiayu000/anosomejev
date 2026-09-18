# 03 — Taxonomy blueprint + top 30 must-include

**Star counts:** Unless noted, ★ from **https://awesomejev.com/** snapshot refreshed **2026-09-17**. Live GitHub may differ. Do not treat as live.

---

## Recommended taxonomy for anosomejev

Mirror user request; extend with trust/meta sections competitors underweight.

### A. Official
- Company, manifesto, launch post, docs, jaggedness, evals, Discord, console, cookbooks, patterns, agent skill, SDKs, system-one-adapter

### B. SDKs & language clients
- Official JS/Python first  
- Community: Go, Rust, Elixir, Ruby, .NET, PHP/Laravel, Scala/ZIO, Zig, Swift, etc.  
- Label **unofficial**

### C. Integrations & gateways
- Vercel AI Gateway / AI SDK `evaluate`  
- Cloudflare Workers AI  
- Neon, n8n, LangGraph, Home Assistant, RubyLLM, agentgateway examples, pg extensions

### D. Agent tooling
- MCP servers, routers (Claude Code / Codex / Pi / Hermes), review bots, wardens/guards, skill routers, foreman loops

### E. Browser / computer use / mobile
- Jev Ultrafast, computer-use OCR loops, Playwright/MCP browsers, Android/mobile, extensions (unclutter, feed filters)

### F. Apps & production-shaped pipelines
- Trading, triage, logs, moderation, search, CV screening, DuckDB classifiers, etc.  
- Prefer entries with thresholds / policies / telemetry

### G. Games & simulations
- Official Doom/Wikiracing references + community Mario, chess, drones, RTS — **always note structured-state caveat**

### H. Demos & playgrounds
- Typewriter, Yes/No, Crowdcheck, kill-my-idea, etc.

### I. Benchmarks / open replicas / calibration
- jevlike, openjev, phishing/spam/rerank benches, calibre, HackSing report, behavior studies  
- Tag: `replica` | `vendor-eval` | `independent` | `negative-result`

### J. Writing / threads / press
- EN: Every, Flavio, Kingy, Register, Latent Space, DEV  
- ZH: orcarouter, remio, ourcoders, woshipm, agenccy, winzheng  
- JP: Zenn threads

### K. Chinese resources (first-class section)
- Longform + tools + bilingual lists + @dotey-style explainers

### L. Critique / known limits (first-class)
- Jaggedness, HN honesty themes, calibration how-to, “type safety ≠ truth”

### Meta labels (apply to every entry)

`official` · `community` · `★N@date` · `zh` · `independent-eval` · `vendor-claim` · `structured-state-demo` · `gateway-only` · `star-inflation-host`

---

## Top 30 must-include projects

Ordered by **ecosystem importance**, not pure stars. Why-lines are factual one-liners.

| # | Project | ★ (awesomejev 2026-09-17 unless noted) | Why include |
| --- | --- | --- | --- |
| 1 | [TypeSafe docs](https://docs.typesafe.ai/) | — | Canonical primitives, patterns, jaggedness, API |
| 2 | [Launch post](https://typesafe.ai/blog/introducing-system-one-models-and-jev) | — | RLCD thesis, pricing, demo nuances, FAQ |
| 3 | [Manifesto](https://typesafe.ai/manifesto) | — | “Build prod, not God” product philosophy |
| 4 | [Jaggedness jev-1.13](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md) | — | Official failure modes — required reading |
| 5 | [Workflow evals](https://evals.typesafe.ai/) | — | Vendor Pareto methodology (read caveats) |
| 6 | [typesafe-sdk-js](https://github.com/typesafe-ai/typesafe-sdk-js) | ★62 | Official TS client / inferred types |
| 7 | [typesafe-sdk-python](https://github.com/typesafe-ai/typesafe-sdk-python) | ★34 | Official Python sync/async client |
| 8 | [system-one-adapter-python](https://github.com/typesafe-ai/system-one-adapter-python) | ★67 | Compare Jev vs LLMs on same typed interface |
| 9 | [typesafe-ai/skills](https://github.com/typesafe-ai/skills) | ★60 | Official agent skill for Claude Code/Codex |
| 10 | [Jev on Vercel AI Gateway](https://vercel.com/ai-gateway/models/jev) | — | Waitlist bypass path; `typesafe-ai/jev` |
| 11 | [browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) | ★1,194 | Flagship CU pattern: Jev picks op+DOM; LLM only for TYPE_TEXT |
| 12 | [vinnylarouge/jevlike](https://github.com/vinnylarouge/jevlike) | ★548 | Open one-pass option scorer + demos (not TypeSafe weights) |
| 13 | [TheoLeeCJ/openjev](https://github.com/TheoLeeCJ/openjev) | ★463 | “Run something like Jev on a 3090” research |
| 14 | [jarrodwatts/jev-trader](https://github.com/jarrodwatts/jev-trader) | ★363 | High-visibility app: one decision per Monad block |
| 15 | [awlevin/typesafe-computer-use](https://github.com/awlevin/typesafe-computer-use) | ★145 | Cheap OCR→Jev→click computer-use (~$0.0002/step claimed) |
| 16 | [fhshaik/typesafe-mario](https://github.com/fhshaik/typesafe-mario) | ★165 | Structured-emulator-state game agent (compare vs Doom caveats) |
| 17 | [usenotra/notra](https://github.com/usenotra/notra) | ★170 | Production-shaped flag routing classifiers onto Jev Booleans |
| 18 | [vercel/eve](https://github.com/vercel/eve) | ★5,355 | Major framework; Jev default in experimental evaluate — **label star-inflation-host** |
| 19 | [vercel-labs/ai-cli](https://github.com/vercel-labs/ai-cli) | ★699 | CLI evaluate path using Jev |
| 20 | [devagrawal09/jev-review](https://github.com/devagrawal09/jev-review) | ★77 | Staged code-review workflow + dashboard |
| 21 | [thruwire/foreman](https://github.com/thruwire/foreman) | ★67 | Agent supervisor using Jev to keep coding agents on task |
| 22 | [NiazMorshed2007/jev-review](https://github.com/NiazMorshed2007/jev-review) | ★45 | Local-first MCP quality review plugin |
| 23 | [gargpratyush/jev-router](https://github.com/gargpratyush/jev-router) | ★44 | Route Claude Code tasks to cheapest capable model |
| 24 | [vlad-terin/jev-browser](https://github.com/vlad-terin/jev-browser) | ★31 | Element selection skill inside observe-act-verify loop |
| 25 | [jkudish/jev-mcp](https://github.com/jkudish/jev-mcp) | ★24 | Early MCP wrapping cookbook verify/screen/find |
| 26 | [AbdelStark/awesome-typesafe](https://github.com/AbdelStark/awesome-typesafe) | ★118 live GH / ★41 on awesomejev | Best caveat-aware awesome list |
| 27 | [yibie/awesome-jev](https://github.com/yibie/awesome-jev) | ★69 live GH | Practice taxonomy + discussions |
| 28 | [AnotiaWang/awesome-jev](https://github.com/AnotiaWang/awesome-jev) | ★39 live GH | Bilingual EN/ZH curated list |
| 29 | [anessbelbati/jev-rerank-bench](https://github.com/anessbelbati/jev-rerank-bench) | ★1 | Independent rerank vs Cohere/ZeroEntropy with raw responses |
| 30 | [HackSing/jev-report](https://github.com/HackSing/jev-report) | ★0 on awesomejev | ZH independent report pack (52p PDF + 50 repro + 143 tables) — **verify repo live before linking** |

### Strong runners-up (include in long list)

- `RomanSlack/jev-drone` ★36 — MuJoCo + Jev at 2.5 Hz  
- `kitze/unclutter` ★17 — clutter classification extension  
- `droidrun/mobile-jev` ★14 — Android agent  
- `DevMortimer/pi-warden` ★22 — Pi guardrails  
- `blakestone-x/jev-mcp` ★4 — Python MCP classify/score/check  
- `FirasSX914/calibre` ★0 — Banking77 calibration study (high editorial value)  
- `anisselbd/jev-phishing-bench` ★0 — Haiku can beat Jev on accuracy (negative-result value)  
- `Mapika/decider`, `NullPo-jp/PocketJev` — open replicas  
- Official cookbooks: parallel questions, guardrails, citation check, skill suggestion  

### Star inflation warning

When ranking “top starred Jev projects,” **exclude or asterisk** hosts like `vercel/eve` unless the entry is specifically about the Jev evaluate integration. Prefer browser-use / open replicas / apps for “built on Jev” narrative.

# anosomejev — Trust Map for Jev

> Searchable **Trust Map** for TypeSafe System One / Jev: directory + trust labels + Must-30 + weekly Chinese radar.  
> **Not affiliated with TypeSafe.** Primary data from our GitHub crawl ([SOURCE.md](SOURCE.md)) — not an uncredited awesomejev.com mirror.

[中文](README_zh.md) · **[Open Trust Map](docs/index.html)** · [This week radar](docs/radar.html) · [radar/](radar/README.md) · [Trust labels](TRUST_LABELS.md) · [SOURCE](SOURCE.md) · [CC0-1.0](LICENSE)

**GitHub Pages (after enable):** https://majiayu000.github.io/anosomejev/  
Enable: Settings → Pages → Deploy from branch → `main` → `/docs` (see [.github/PAGES.md](.github/PAGES.md))

### Three layers

| Layer | Path | Role |
| --- | --- | --- |
| **Trust directory (front)** | [`docs/`](docs/index.html) | Self-crawled GitHub index + search/filter/tags (~584 entries) |
| **Must-30** | below | Editorial high-signal picks |
| **Chinese radar** | [`radar/`](radar/README.md) | Weekly narrative |

Preview locally: `cd docs && python3 -m http.server 8080`

---

## 1. What Jev is

[Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev) is TypeSafe’s first **System One** model (launch ~2026-09-15): typed decisions for software, not chat.

| Primitive | Role |
| --- | --- |
| **Choice** | Pick from an enumerated set (+ probabilities / confidence) |
| **Score** | Ordered / leveled judgment |
| **Noul** | Yes/no-style probability |

- **API:** `POST https://api.typesafe.ai/v1/systemone` — `state` + typed `questions` → typed answers (+ probs/confidence). Aliases: `jev-latest` / `jev-preview` (e.g. `jev-1.13.0`).
- **Training claim:** RLCD (Reinforcement Learning for Calibrated Decisions) — architecture/weights unpublished.
- **Vendor pricing:** $0.042 / MTok input; **output free**. Latency claim: 70–500 ms E2E.
- **Thesis:** LLMs generate text for humans; System One evaluates typed questions against state so **code** can branch/sort/route — “no text generation, no parsing.”

**Start here**

- Docs: https://docs.typesafe.ai/ · [llms.txt](https://docs.typesafe.ai/llms.txt)
- Manifesto: https://typesafe.ai/manifesto — “Build Prod, Not God”
- **Required:** [Model jaggedness — jev-1.13](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md)

### Red line

> **Type safety ≠ factual correctness.** Schema-valid answers can still be confidently wrong. “0% hallucination” means no out-of-schema invention, not semantic truth.

---

## 2. Must-include 30

Ordered by **ecosystem importance**, not pure stars. Full table rationale: [research/03-taxonomy-and-must-include.md](research/03-taxonomy-and-must-include.md).

| # | Project | ★ | Why |
| --- | --- | --- | --- |
| 1 | [TypeSafe docs](https://docs.typesafe.ai/) | — | Canonical primitives, patterns, jaggedness, API |
| 2 | [Launch post](https://typesafe.ai/blog/introducing-system-one-models-and-jev) | — | RLCD thesis, pricing, demo nuances, FAQ |
| 3 | [Manifesto](https://typesafe.ai/manifesto) | — | Product philosophy |
| 4 | [Jaggedness jev-1.13](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md) | — | Official failure modes — required reading |
| 5 | [Workflow evals](https://evals.typesafe.ai/) | — | Vendor Pareto (read caveats) · `vendor-claim` |
| 6 | [typesafe-sdk-js](https://github.com/typesafe-ai/typesafe-sdk-js) | ★62 | Official TS client |
| 7 | [typesafe-sdk-python](https://github.com/typesafe-ai/typesafe-sdk-python) | ★34 | Official Python client |
| 8 | [system-one-adapter-python](https://github.com/typesafe-ai/system-one-adapter-python) | ★67 | Compare Jev vs LLMs on same typed interface |
| 9 | [typesafe-ai/skills](https://github.com/typesafe-ai/skills) | ★60 | Official agent skill |
| 10 | [Jev on Vercel AI Gateway](https://vercel.com/ai-gateway/models/jev) | — | `typesafe-ai/jev` · waitlist bypass path |
| 11 | [browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) | ★1,194 | Flagship CU: Jev picks op+DOM; LLM for TYPE_TEXT |
| 12 | [vinnylarouge/jevlike](https://github.com/vinnylarouge/jevlike) | ★548 | Open option scorer · `replica` (not TypeSafe weights) |
| 13 | [TheoLeeCJ/openjev](https://github.com/TheoLeeCJ/openjev) | ★463 | Open research replica · `replica` |
| 14 | [jarrodwatts/jev-trader](https://github.com/jarrodwatts/jev-trader) | ★363 | One decision per Monad block |
| 15 | [awlevin/typesafe-computer-use](https://github.com/awlevin/typesafe-computer-use) | ★145 | OCR→Jev→click CU |
| 16 | [fhshaik/typesafe-mario](https://github.com/fhshaik/typesafe-mario) | ★165 | Structured-emulator-state game agent |
| 17 | [usenotra/notra](https://github.com/usenotra/notra) | ★170 | Production-shaped flag routing |
| 18 | [vercel/eve](https://github.com/vercel/eve) | ★5,355 | Major framework; Jev in evaluate — **`star-inflation-host`** |
| 19 | [vercel-labs/ai-cli](https://github.com/vercel-labs/ai-cli) | ★699 | CLI evaluate path |
| 20 | [devagrawal09/jev-review](https://github.com/devagrawal09/jev-review) | ★77 | Staged code-review + dashboard |
| 21 | [thruwire/foreman](https://github.com/thruwire/foreman) | ★67 | Agent supervisor via Jev |
| 22 | [NiazMorshed2007/jev-review](https://github.com/NiazMorshed2007/jev-review) | ★45 | Local-first MCP review plugin |
| 23 | [gargpratyush/jev-router](https://github.com/gargpratyush/jev-router) | ★44 | Route Claude Code to cheapest capable model |
| 24 | [vlad-terin/jev-browser](https://github.com/vlad-terin/jev-browser) | ★31 | Element selection in observe-act-verify |
| 25 | [jkudish/jev-mcp](https://github.com/jkudish/jev-mcp) | ★24 | MCP verify/screen/find |
| 26 | [AbdelStark/awesome-typesafe](https://github.com/AbdelStark/awesome-typesafe) | ★118 live GH / ★41 on awesomejev | Caveat-aware awesome list |
| 27 | [yibie/awesome-jev](https://github.com/yibie/awesome-jev) | ★69 live GH | Practice taxonomy |
| 28 | [AnotiaWang/awesome-jev](https://github.com/AnotiaWang/awesome-jev) | ★39 live GH | Bilingual EN/ZH |
| 29 | [anessbelbati/jev-rerank-bench](https://github.com/anessbelbati/jev-rerank-bench) | ★1 | Independent rerank bench |
| 30 | [HackSing/jev-report](https://github.com/HackSing/jev-report) | ★0 on awesomejev | ZH report pack — **`needs-verify`** |

★ columns without “live GH” are **awesomejev 2026-09-17** unless noted.

**Gateways also essential:** [Cloudflare `typesafe/jev`](https://developers.cloudflare.com/ai/models/typesafe/jev/) · [OpenRouter beta](https://x.com/OpenRouter/status/2100744709589316009)

**Strong runners-up:** `RomanSlack/jev-drone`, `kitze/unclutter`, `droidrun/mobile-jev`, `DevMortimer/pi-warden`, `FirasSX914/calibre`, `anisselbd/jev-phishing-bench` (`negative-result`), Mapika/decider, NullPo-jp/PocketJev.

---

## 3. Critique & calibration (read before shipping)

Full page: [taxonomy/critique-limits.md](taxonomy/critique-limits.md)

1. Pin [jaggedness](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md) + launch-post nuance boxes.  
2. Pin HN **[49717558](https://news.ycombinator.com/item?id=49717558)** — read before believing “200×.” (Not [49716682](https://news.ycombinator.com/item?id=49716682).)  
3. Separate `schema-guarantee` / `task-accuracy` / `calibration`.  
4. Keep **negative results** (phishing Haiku win; unreproduced Pac-Man; weak invoices).  
5. Default independent smoke test: [Every / Mike Taylor](https://every.to/also-true-for-humans/mini-vibe-check-typesafe-s-jev-judged-everything-i-ve-written-in-0-7-seconds) — 777 judgments &lt;0.7s; planted defects **6/7**.  
6. Vendor workflow evals = agreement with frontier averages, **not** ground truth ([evals.typesafe.ai](https://evals.typesafe.ai/)).  
7. Homepage 193.6× / 444.6× are **higher-end** disclosed figures.

**Anti-patterns:** counting/date-math inside Jev; overstuffed state; equating free output with accuracy; ranking “top Jev” by `vercel/eve` stars; conflating replicas with TypeSafe weights.

---

## 4. 中文资源

Dedicated taxonomy: [taxonomy/chinese.md](taxonomy/chinese.md) · Full guide: [README_zh.md](README_zh.md)

| Kind | Links |
| --- | --- |
| Longform | [OrcaRouter](https://www.orcarouter.ai/zh-CN/blog/jev-typesafe-system-one-what-we-know) · [remio](https://www.remio.ai/zh/post/typesafe-jev-model-rejects-chatbots-for-programmatic-decisions-zh) · [OurCoders](https://ourcoders.com/tech/show/tech-20260916-001-07/) · [人人都是产品经理](https://www.woshipm.com/share/6465624.html) · [agenccy](https://agenccy.ai/zh/news/jevs-0-percent-hallucination-sits-beside-a-678-percent-accuracy-score/) · [winzheng](https://www.winzheng.com/article/jev-ai-decision-model-typesafe-diogo-almeida-system-one) |
| Lists / reports | [AnotiaWang README_zh](https://github.com/AnotiaWang/awesome-jev/blob/main/README_zh.md) · [HackSing/jev-report](https://github.com/HackSing/jev-report) (`needs-verify`) |
| Thread | [@dotey 中文解读](https://x.com/dotey/status/2100109937237987823) |

Shared ZH theme: **类型安全 ≠ 事实正确**; calibrate on your own labels; Jev decides, LLM writes.

---

## 5. Taxonomy indexes

### By artifact

| File | Scope |
| --- | --- |
| [taxonomy/official.md](taxonomy/official.md) | Company, docs, SDKs, jaggedness, Discord |
| [taxonomy/sdks.md](taxonomy/sdks.md) | Official + community clients |
| [taxonomy/integrations.md](taxonomy/integrations.md) | Vercel / Cloudflare / OpenRouter / eve |
| [taxonomy/agents.md](taxonomy/agents.md) | MCP, routers, review, wardens |
| [taxonomy/browser-cu.md](taxonomy/browser-cu.md) | Ultrafast, OCR CU, mobile |
| [taxonomy/apps.md](taxonomy/apps.md) | Trader, notra, DuckDB, … |
| [taxonomy/games.md](taxonomy/games.md) | Mario, drone, Doom caveats |
| [taxonomy/demos.md](taxonomy/demos.md) | Playgrounds & cookbooks |
| [taxonomy/benchmarks-replicas.md](taxonomy/benchmarks-replicas.md) | jevlike, openjev, benches |
| [taxonomy/writing.md](taxonomy/writing.md) | Press, HN, X, other awesomes |
| [taxonomy/chinese.md](taxonomy/chinese.md) | 中文 first-class |
| [taxonomy/critique-limits.md](taxonomy/critique-limits.md) | Limits & anti-patterns |

### By decision pattern

| File | Pattern |
| --- | --- |
| [patterns/routing.md](patterns/routing.md) | Route / classify / intent |
| [patterns/verification.md](patterns/verification.md) | Guardrails / handoff / safety |
| [patterns/scoring.md](patterns/scoring.md) | Rank / rerank / calibrate |
| [patterns/labeling.md](patterns/labeling.md) | Map-reduce labels |
| [patterns/realtime.md](patterns/realtime.md) | CU / games / sub-second loops |

Trust vocabulary: [TRUST_LABELS.md](TRUST_LABELS.md)

---

## 6. Full firehose

| Surface | URL | Role |
| --- | --- | --- |
| Awesome Jev (site) | https://awesomejev.com/ | ~410 entries · ~10,093★ aggregate (refreshed 2026-09-17) |
| jev.directory | https://jev.directory/ | Shareable primitives from repos/posts |
| Console | https://console.typesafe.ai/ | Keys & playground |
| Discord | https://discord.gg/typesafe | Show and Tell |
| HN launch | https://news.ycombinator.com/item?id=49717558 | Main discussion |

Research notes used to build this list: [research/](research/)

---

## X accounts to follow

From public web / [research/08-x-content-haul.md](research/08-x-content-haul.md):

| Group | Handles |
| --- | --- |
| Official | [@typesafeai](https://x.com/typesafeai), [@CompleteSkeptic](https://x.com/CompleteSkeptic) |
| Gateways | [@OpenRouter](https://x.com/OpenRouter), [@vercel_dev](https://x.com/vercel_dev), [@ritakozlov](https://x.com/ritakozlov) |
| Builders | [@gregpr07](https://x.com/gregpr07), [@browser_use](https://x.com/browser_use), [@stevekrouse](https://x.com/stevekrouse), [@hamiltonulmer](https://x.com/hamiltonulmer), [@ephraimduncan](https://x.com/ephraimduncan), [@rauchg](https://x.com/rauchg), [@fazxes](https://x.com/fazxes) |
| Skeptics | [@awlevin](https://x.com/awlevin), [@sebuzdugan](https://x.com/sebuzdugan), [@danshipper](https://x.com/danshipper) |
| 中文 | [@dotey](https://x.com/dotey) |
| Also cited | [@iamMrDuncan](https://x.com/iamMrDuncan), [@identityTorn](https://x.com/identityTorn), [@isNickMa](https://x.com/isNickMa), [@chetaslua](https://x.com/chetaslua), [@wmoto_ai](https://x.com/wmoto_ai), [@Kostastsale](https://x.com/Kostastsale), [@waynesutton](https://x.com/waynesutton), [@malekoo](https://x.com/malekoo), [@justALEXWORTEGA](https://x.com/justALEXWORTEGA), [@harshagundal](https://x.com/harshagundal) |

Launch thread: https://x.com/CompleteSkeptic/status/2099925682726002904

---

## Positioning

> **awesomejev.com** = encyclopedia of everything built in the first week.  
> **anosomejev** = curated map of what matters, what’s proven, what’s overclaimed — EN+ZH.

Contributions: [CONTRIBUTING.md](CONTRIBUTING.md). List license: [CC0-1.0](LICENSE). Linked projects keep their own licenses.

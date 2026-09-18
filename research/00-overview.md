# Anosomejev Research — Overview

**Research date:** 2026-09-18 (Asia/Shanghai)  
**Subject:** TypeSafe AI — System One / Jev ecosystem, for building **Awesome Jev (anosomejev)**  
**Method:** Public web only (WebSearch/WebFetch). No X MCP. GitHub REST API rate-limited during this pass; star counts below prefer **awesomejev.com snapshot refreshed 2026-09-17**, with live GitHub README fetches noted where available.

## Verified core facts (extended, not contradicted)

| Claim | Evidence |
| --- | --- |
| Jev = TypeSafe’s first System One model | https://typesafe.ai/blog/introducing-system-one-models-and-jev ; https://docs.typesafe.ai/introduction.md |
| Launch ~2026-09-15, early access | Launch post dated Sep 15, 2026; waitlist at typesafe.ai |
| Founder Diogo Almeida (@CompleteSkeptic) | Launch post byline; HN replies as CompleteSkeptic; X launch status cited across Chinese/EN coverage |
| Company handle @typesafeai | docs / awesome lists / typesafe.ai |
| Primitives: Choice / Score / Noul | https://docs.typesafe.ai/primitives.md (via llms.txt index) |
| Training: RLCD (Reinforcement Learning for Calibrated Decisions) | Launch post |
| Pricing: $0.042 / MTok input; output free | Launch post; Cloudflare AI docs; Vercel AI Gateway changelog |
| Latency: 70–500 ms E2E (vendor) | Launch post; jaggedness/docs echo |
| Sites: typesafe.ai, docs.typesafe.ai, awesomejev.com (~410 entries), jev.directory | Fetched live |
| HN main launch: item **49717558** (~1.8k points / ~480 comments per mirrors) | https://news.ycombinator.com/item?id=49717558 — note: user-known id 49716682 is a *different*, small tweet thread |
| GitHub lists: AbdelStark/awesome-typesafe, AnotiaWang/awesome-jev, yibie/awesome-jev | All three READMEs fetched |
| Chinese: orcarouter, remio, ourcoders, woshipm; HackSing/jev-report listed on awesomejev | Articles fetched; HackSing repo itself not independently resolved this pass |

## Ecosystem snapshot (awesomejev.com, refreshed 2026-09-17)

- **410 entries**, claimed **10,093** aggregate stars  
- Breakdown cited on site: **328** GitHub repos, **91** live sites, **48** articles/threads  
- Spec sheet on site matches vendor: `POST https://api.typesafe.ai/v1/systemone`, model `jev-latest` → versioned e.g. `jev-1.13.0`

## Adjacent discovery surfaces

| Surface | URL | Role |
| --- | --- | --- |
| Official docs | https://docs.typesafe.ai/ (index: `/llms.txt`) | Canonical API, patterns, cookbooks, jaggedness |
| Console / playground | https://console.typesafe.ai/ | Keys, playground, cookbooks |
| Workflow evals | https://evals.typesafe.ai/ | Vendor workflow Pareto charts |
| Awesome Jev (site) | https://awesomejev.com/ | Largest auto-refreshed directory |
| jev.directory | https://jev.directory/ | Shareable primitives / “systems” from repos & posts |
| Vercel Gateway | https://vercel.com/ai-gateway/models/jev | `typesafe-ai/jev`, bypass waitlist for some users |
| Cloudflare Workers AI | https://developers.cloudflare.com/ai/models/typesafe/jev/ | `typesafe/jev`, 32k context listed |
| Discord | https://discord.gg/typesafe | Show and Tell |

## File map (this folder)

| File | Contents |
| --- | --- |
| `00-overview.md` | This index |
| `01-official.md` | Docs structure, manifesto, FAQ/caveats, jaggedness |
| `02-awesome-competitors.md` | Compare awesomejev.com + three GitHub lists |
| `03-taxonomy-and-must-include.md` | Taxonomy + top-30 must-include |
| `04-chinese-coverage.md` | ZH articles, gaps, HackSing note |
| `05-hn-and-critique.md` | HN themes + independent critique |
| `06-blueprint.md` | Differentiation for **anosomejev** + X handles (public web) |

|| `07-x-public-browser.md` | Public X profile/status reconnaissance around the launch thread |
|| `08-x-content-haul-web.md` | 19 additional public X status URLs with summaries and curation notes |

## Confidence / caveats for parent agent

1. **Do not treat “0% hallucination” as 0% wrong answers** — schema guarantee ≠ semantic correctness (vendor + HN + ZH press agree).  
2. **Vendor speed/cost multiples** (e.g. 193.6× / 444.6×) are **high-end workflow-eval** figures with disclosed biases.  
3. **Architecture / RLCD internals / weights unpublished**; open replicas reproduce *interface*, not training.  
4. Star counts move daily; cite snapshot date when listing.  
5. Known id `49716682` ≠ main launch HN thread (`49717558`).

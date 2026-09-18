# Official

Canonical TypeSafe / System One / Jev surfaces. Labels: `official`.

## Company & philosophy

- [TypeSafe](https://typesafe.ai/) — waitlist / product home
- [Manifesto](https://typesafe.ai/manifesto) — “Composable AI: Build Prod, Not God”
- [Launch post: Introducing System One Models and Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev) — Diogo Almeida, Sep 15, 2026 · RLCD, pricing, demos, FAQ nuance boxes · `vendor-claim`
- [Bitterest Lesson](https://typesafe.ai/blog/bitterest-lesson) — founder writing
- Founder site: [completeskeptic.com](https://www.completeskeptic.com/)

## Docs & API

- [Docs home](https://docs.typesafe.ai/) · machine TOC: [llms.txt](https://docs.typesafe.ai/llms.txt)
- [Introduction](https://docs.typesafe.ai/introduction.md) · [Quick start](https://docs.typesafe.ai/introduction/quickstart.md)
- [System One concept](https://docs.typesafe.ai/concepts/system-one.md) · [State](https://docs.typesafe.ai/concepts/state.md) · [How to build](https://docs.typesafe.ai/concepts/how-to-build-with-system-one.md) · [Use-case map](https://docs.typesafe.ai/concepts/use-case-map.md)
- [Primitives](https://docs.typesafe.ai/primitives.md) — Choice / Score / Noul (+ [advanced](https://docs.typesafe.ai/primitives/advanced.md))
- [Confidence](https://docs.typesafe.ai/confidence.md)
- [Patterns hub](https://docs.typesafe.ai/patterns.md) — fan-out, confidence routing, composite scoring, intent routing
- [Models](https://docs.typesafe.ai/models.md) · [HTTP API](https://docs.typesafe.ai/api.md)
- **Endpoint:** `POST https://api.typesafe.ai/v1/systemone` · aliases `jev-latest` / `jev-preview` · versioned e.g. `jev-1.13.0`
- [Agent skill](https://docs.typesafe.ai/agent-skill.md) · [Legal](https://docs.typesafe.ai/legal.md)

## Required reading: jaggedness

- [Model jaggedness — jev-1.13](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md) — last reviewed 2026-09-17 · literalism, math, dates, indirection, context rot, adversarial, contradictory criteria, structural invariants, no generation

## Evals & console

- [Workflow evals](https://evals.typesafe.ai/) — vendor Pareto · agreement with frontier averages, not ground truth · `vendor-claim`
- [Console / playground](https://console.typesafe.ai/) — keys, cookbooks

## Official packages & repos

| Asset | Link | ★ (awesomejev 2026-09-17) |
| --- | --- | --- |
| JS/TS SDK | https://github.com/typesafe-ai/typesafe-sdk-js | ★62 |
| Python SDK | https://github.com/typesafe-ai/typesafe-sdk-python | ★34 |
| System One adapter (Python) | https://github.com/typesafe-ai/system-one-adapter-python | ★67 |
| Skills | https://github.com/typesafe-ai/skills | ★60 |
| Org | https://github.com/typesafe-ai | — |

Packages: `typesafe-sdk` (Python), `@typesafe-ai/sdk` (JS/TS).

## Community & social

- [Discord](https://discord.gg/typesafe)
- X: [@typesafeai](https://x.com/typesafeai) · founder [@CompleteSkeptic](https://x.com/CompleteSkeptic)
- [LinkedIn](https://www.linkedin.com/company/typesafe-ai/)
- Launch status: https://x.com/CompleteSkeptic/status/2099925682726002904

## Pricing (vendor)

- **$0.042 / MTok input; output free** (launch post; echoed by Cloudflare / Vercel / OpenRouter posts)
- Latency claim: **70–500 ms** E2E (vendor; West Coast measurement caveat in launch post)

See also [integrations](integrations.md) for gateway model IDs.

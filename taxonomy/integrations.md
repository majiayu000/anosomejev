# Integrations & gateways

Production distribution surfaces. Many are `gateway-only`.

## Major gateways

| Provider | Model id | Docs / announcement | Notes |
| --- | --- | --- | --- |
| TypeSafe direct | `jev-latest` / `jev-1.13.0` | https://docs.typesafe.ai/ | Waitlist / early access |
| Vercel AI Gateway | `typesafe-ai/jev` | https://vercel.com/ai-gateway/models/jev · [changelog](https://vercel.com/changelog/typesafe-ai-jev-now-available-on-ai-gateway) | AI SDK `experimental_evaluate` / `evaluate` · waitlist bypass for some users |
| Cloudflare Workers AI | `typesafe/jev` | https://developers.cloudflare.com/ai/models/typesafe/jev/ | Docs list **32,000** token context |
| OpenRouter | (beta) | https://x.com/OpenRouter/status/2100744709589316009 | Typed decision in; Noul/Choice/Score; no JSON parse · `gateway-only` |

X amplifiers (public): [@vercel_dev](https://x.com/vercel_dev/status/2100378959653507175), [@ritakozlov](https://x.com/ritakozlov/status/2100688919364845709) (Cloudflare AI Gateway), [@OpenRouter](https://x.com/OpenRouter/status/2100744709589316009).

## Framework / host integrations

| Project | Link | ★ (awesomejev 2026-09-17) | Labels |
| --- | --- | --- | --- |
| vercel/eve | https://github.com/vercel/eve | ★5,355 | `star-inflation-host` — large agent framework; Jev as evaluation path, not Jev-only |
| vercel-labs/ai-cli | https://github.com/vercel-labs/ai-cli | ★699 | CLI evaluate using Jev |

**Star policy:** do not rank “top Jev projects” by eve’s raw star count.

## Other integration shapes (firehose)

awesomejev.com lists Neon, n8n, LangGraph, Home Assistant, RubyLLM, agentgateway examples, pg extensions, etc. under Integrations (~22). Promote into this file when an entry shows thresholds / production wiring.

## Vercel field note

- [@rauchg](https://x.com/rauchg/status/2100307962262872105) — Vercel `fx` safety reviewer: Jev up to **18× faster at p95** and more accurate than GPT Luna in that report · treat as `vendor-claim` / author-reported unless full methodology published.

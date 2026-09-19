# 08 — X content haul: TypeSafe AI / Jev / System One

> Historical research notes from September 2026. Claims and counts below record what the cited sources reported at the time; they have not all been independently reproduced or rechecked. Current inclusion guidance is in [CONTRIBUTING.md](../CONTRIBUTING.md).

**Research date:** 2026-09-18 (UTC+8)
**Method:** public, unlogged box-browser pages only; no X plugin/API. Post text and visible metrics were transcribed from x.com pages. Google web search was attempted for `Jev TypeSafe site:x.com/*/status` but Google returned a reCAPTCHA “unusual traffic” page, so the haul uses public profile/tweet/reply pages and known public links instead.
**Metric order where shown:** replies · reposts · likes · bookmarks; views called out separately. Counts are snapshots and may change.

**Distinct post URLs in this file: 47.**

## Official

- https://x.com/typesafeai/status/2099944756931596454 — TypeSafe says it is “officially out of stealth” and invites people to get access to Jev; 501K views.
- https://x.com/typesafeai/status/2100747035746193598 — TypeSafe quote-posts OpenRouter’s beta launch; Jev is framed as a typed decision model rather than a text generator; 21 · 34 · 1K · 79K views.
- https://x.com/typesafeai/status/2100706455523561909 — behind-the-scenes launch-video clip, with chief of staff keeping Diogo on track; 14 · 5 · 260 · 32K views.
- https://x.com/typesafeai/status/2100700021700378803 — TypeSafe quote-posts Cloudflare/rita kozlov: Jev is live on Cloudflare AI Gateway; 22 · 39 · 1K · 56K views.
- https://x.com/typesafeai/status/2100382348844118434 — TypeSafe quote-posts Vercel’s AI Gateway integration for millisecond-scale agent decisions; 7 · 13 · 370 · 71K views.
- https://x.com/typesafeai/status/2099929926921290071 — official “hello world” launch post; 69 · 25 · 2.2K · 273K views.

## Launch thread + key replies

### @CompleteSkeptic launch thread

- https://x.com/CompleteSkeptic/status/2099925682726002904 — Diogo’s launch: RLCD/Jev, 20–200× faster, 40–400× cheaper, decision-focused rather than chat; 32.8M views · 3.5K replies · 7.1K reposts · 67K likes · 54K bookmarks.
- https://x.com/CompleteSkeptic/status/2099925684256899543 — important qualification: “The gains aren’t free: Jev can’t generate text”; compares the trade-off with LLMs; 1.9M views.
- https://x.com/CompleteSkeptic/status/2099925685720760404 — workflow-evals/cost post: $42 per billion input tokens, output free, and Jev named after Jevons; 729K views.
- https://x.com/CompleteSkeptic/status/2099925687465570372 — Doom demo: roughly 10 calls/second at about $7/hour; 1.1M views.
- https://x.com/CompleteSkeptic/status/2099925688925184171 — Wikipedia race through hundreds/thousands of links, emphasizing high-cardinality decisions and no hallucinated links; 581K views.
- https://x.com/CompleteSkeptic/status/2099925690682630371 — points readers to the technical release blog, waitlist, and Discord; 581K views.

The public page exposed the launch author’s six follow-on posts, but the “See all the replies” area itself was gated by X’s login overlay. The reply chains below were still visible on the individual public post pages.

### Replies / reactions to the launch and browser demo

- https://x.com/hamiltonulmer/status/2100297398996382047 — Hamilton: Jev addresses a pain point LLMs handle badly; calls the novelty both encouraging and an indictment of the industry’s lack of imagination; 2 · 3 · 56 · 2.7K views.
- https://x.com/dotey/status/2100109937237987823 — 宝玉’s detailed Chinese explainer: Jev is a typed “smart if” for routing/classification/scoring, with RLCD, parallelism, costs, demos, and caveats; 70.1K views.
- https://x.com/dotey/status/2100125076091760742 — 宝玉 asks for Chinese subtitles on the launch video; 1 · 14 · 6.1K views.
- https://x.com/Suyanzhenq/status/2100121219521544312 — Chinese reply jokes that the fast, non-chatty model is a “quant-trading holy body” for bots; 4 · 574 likes.

## Integrators

- https://x.com/OpenRouter/status/2100744709589316009 — OpenRouter announces Jev in beta: state + typed question in, typed decision + probability out, without JSON prompting/parsing; 212K views · 76 · 145 · 1.9K · 812.
- https://x.com/OpenRouter/status/2100744721689952710 — OpenRouter gives pricing/latency: $0.042 per million input tokens, free output, 70–500ms, and up to 190×/440× on TypeSafe’s published workflows; 5 · 2 · 115 · 12K views.
- https://x.com/OpenRouter/status/2100744733442404791 — concrete jobs: support routing, content-rule decisions, fraud flags, next-agent-step selection, and human escalation; 1 · 1 · 110 · 11K views.
- https://x.com/OpenRouter/status/2100744745085796745 — explains the three request shapes: Noul (yes/no probability), Choice, and Score; 6 · 6 · 220 · 64K views.
- https://x.com/OpenRouter/status/2100744756716581194 — confidence example (“billing 84%, technical 16%”) and several questions over one input; 2 · 45 · 15K views.
- https://x.com/OpenRouter/status/2100744768368287957 — invites Jev builds and offers $20 credits to the ten most creative projects; 1 · 4 · 65 · 15K views.
- https://x.com/ritakozlov/status/2100688919364845709 — Cloudflare’s Rita Kozlov confirms Jev is live on Cloudflare AI Gateway; 22 · 39 · 1K · 56K views.
- https://x.com/vercel_dev/status/2100378959653507175 — Vercel shows `await evaluate({ model: 'typesafe-ai/jev', state, questions })` for agents that decide, route, score, and stop; 7 · 13 · 370 · 71K views.

## Builders / demos

- https://x.com/gregpr07/status/2100411066966749359 — Browser Use + Jev flight-search demo: 7 seconds, $0.0039, DOM/action-space state, with a small LLM fallback; 2.1M views · 225 · 527 · 7.7K · 8.2K.
- https://x.com/gregpr07/status/2100411068426469552 — Gregor links the open-source `browser-use/jev-ultrafast` repository; 14 · 40 · 917 · 75K views.
- https://x.com/gregpr07/status/2100411547290046717 — short “How it works in a nutshell” follow-up to the browser agent; 7 · 10 · 425 · 59K views.
- https://x.com/browser_use/status/2100411935938552136 — Browser Use’s “holy cheap” reaction to the same demo; 133.7K views · 12 · 37 · 1.3K · 653.
- https://x.com/stevekrouse/status/2100321685081559542 — Steve Krouse calls the Jev + Kernel browser-use demo “pretty freaking cool” and “so fast”; 19 · 18 · 237 · 34K views.
- https://x.com/stevekrouse/status/2100306503412375687 — says browser use may be the first killer use-case for Jev, quoting an OpenCode testing demo; 7 · 12 · 320 · 53K views.
- https://x.com/Neriousy/status/2100287208166969746 — small demo: testing apps with Jev and OpenCode should be very fast.
- https://x.com/hamiltonulmer/status/2100370557405667768 — DuckDB extension uses Jev to classify rows in CSV/Parquet/table data: ~10 seconds for 1,000 rows and more ergonomic than an LLM classifier; 127K views.
- https://x.com/ephraimduncan/status/2100524915007144289 — Duncan uses Jev to steer Pac-Man from JSON maze state in real time; links a live demo; 7.9K views.
- https://x.com/ephraimduncan/status/2100548356296540397 — says Jev is impressive versus finetuning, Haiku, or Luna for this realtime classification-style task; 1 · 11 · 541.
- https://x.com/ephraimduncan/status/2100554620254752981 — follow-up: Jev beat Pac-Man once, but Duncan could not reproduce the win; useful non-marketing result.
- https://x.com/rauchg/status/2100307962262872105 — Guillermo Rauch reports Vercel’s `fx` safety reviewer: Jev was up to 18× faster at p95 and more accurate than GPT Luna, with a Vercel AI Gateway launch planned; 403K views.
- https://x.com/fazxes/status/2100300097695232164 — benchmark note for the `fx` auto-mode safety classifier: roughly 5–18× faster and more accurate than GPT-5.6 Luna.

## Critics / skeptical or corrective replies

- https://x.com/awlevin/status/2100427922205209012 — Aaron’s critique: it is absurd that flight-search APIs remain unavailable while agents can escape sandboxes; asks what the demo says about missing APIs; 22K views · 22 replies · 329 likes.
- https://x.com/codestirring/status/2100429278026313845 — explains flight APIs are brittle because each airline has a bespoke connector; a practical reply to the critique.
- https://x.com/easeev/status/2100434381701779937 — points to a Google Flights MCP/CLI/Python library as an alternative to computer use.
- https://x.com/thirk/status/2100445159720644898 — skeptical one-liner: lack of broad flight APIs may be intentional to preserve a moat.
- https://x.com/sebuzdugan/status/2100556671491723639 — asks to see success rate across flight sites, noting that 7 seconds matters less if small DOM changes break completion.
- https://x.com/ShittyTwittter/status/2100450857728786754 — asks whether Jev has OCR, exposing the boundary between structured DOM state and visual computer use.
- https://x.com/danshipper/status/2100251499443998766 — Dan’s skeptical framing: “LLMs are just autocomplete / jev is just a JSON classifier”; 17.5K views · 6 · 12 · 333 · 32.
- https://x.com/deanmckee757/status/2100259596262682866 — counters Dan with “Crazy lack of imagination on the timeline today”; 2 · 10 · 749.
- https://x.com/andr_ec_/status/2100462185256554908 — reply labels the idea “welcome back BERT,” a compact architecture-category critique.
- https://x.com/ItsCuthulhu/status/2100451965020864753 — sarcastic reply: “They live in a world Da Vinci would seppuku over.”

## Chinese if any

- https://x.com/dotey/status/2100109937237987823 — 中文长帖将 Jev 解释为代码里的“智能判断函数”，覆盖 RLCD、类型安全、校准概率、工作流评测、Doom/Wikipedia demos，并提醒极端加速倍数是最优情况。
- https://x.com/dotey/status/2100125076091760742 — 中文字幕请求，显示中文读者的本地化需求。
- https://x.com/Suyanzhenq/status/2100121219521544312 — 中文读者把 Jev 比作适合量化交易 bot 的“量化交易圣体”，偏正面、偏应用想象。

## Follow list for ongoing monitoring

- **@typesafeai / @CompleteSkeptic** — official release follow-ons, launch-video BTS, integrations, eval caveats.
- **@OpenRouter, @vercel_dev, @ritakozlov** — gateway availability, model docs, pricing, and provider-specific examples.
- **@gregpr07 / @browser_use** — open-source browser-use adapter, success-rate follow-ups, and additional action-space demos.
- **@stevekrouse, @hamiltonulmer, @ephraimduncan** — builders publishing browser, DuckDB/data, and game experiments.
- **@rauchg / @fazxes** — Vercel `fx` safety-reviewer benchmarks and gateway rollout.
- **@awlevin, @sebuzdugan, @danshipper** — useful skeptical checks: API availability, robustness across sites, and “classifier vs new category” framing.
- **@dotey** — Chinese-language explainers and follow-up discussion.

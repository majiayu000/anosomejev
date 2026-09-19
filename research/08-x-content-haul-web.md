# 08 — X content haul (WebSearch/WebFetch)

> Historical research notes from September 2026. Claims and counts below record what the cited sources reported at the time; they have not all been independently reproduced or rechecked. Current inclusion guidance is in [CONTRIBUTING.md](../CONTRIBUTING.md).

**Research date:** 2026-09-18 (Asia/Shanghai)
**Scope:** Public X status URLs about TypeSafe AI, System One, or Jev, excluding the known launch status `2099925682726002904`.
**Method:** WebSearch/WebFetch only. Direct `x.com` fetches returned 403 in this environment; where available, public indexed/unrollnow mirrors were used to read the status text, then the canonical `x.com/{handle}/status/{id}` URL is listed below.
**Result:** **19 unique status URLs** found beyond the known launch thread.

## Selected status URLs

| Canonical X status URL | Author | One-sentence summary | Why it matters for an Awesome Jev list |
|---|---|---|---|
| https://x.com/gregpr07/status/2100411066966749359 | @gregpr07 | Announces Browser Use + Jev Ultrafast: a DOM/indexed-action browser agent that searches Google Flights in about 7 seconds for roughly $0.0039. | Flagship open-source browser-agent showcase and a concrete latency/cost benchmark. |
| https://x.com/browser_use/status/2100411935938552136 | @browser_use | Amplifies the Jev Ultrafast result as an unusually cheap browser-use workflow. | First-party project amplification; useful entry for browser automation and reproducibility. |
| https://x.com/awlevin/status/2100427922205209012 | @awlevin | Questions the practical scope of agent demos, including whether browser agents can escape sandboxes and use real flight APIs. | Valuable skeptical/limitations entry that keeps the list from being praise-only. |
| https://x.com/vercel_dev/status/2100378959653507175 | @vercel_dev | Announces Jev support in Vercel AI Gateway for typed decide/route/score/stop-style evaluations. | Major production integration and a useful reference for the AI SDK evaluation path. |
| https://x.com/OpenRouter/status/2100744709589316009 | @OpenRouter | Announces Jev beta on OpenRouter, describing System One typed decisions, Noul/Choice/Score, probabilities, pricing, and use cases. | Important distribution/API entry with canonical model access and a clear explanation of the primitives. |
| https://x.com/ritakozlov/status/2100688919364845709 | @ritakozlov | Announces Jev availability through Cloudflare AI Gateway. | Adds a second major gateway/provider route and deployment-surface coverage. |
| https://x.com/danshipper/status/2100251499443998766 | @danshipper | Frames the skeptical objection that Jev may be “just a JSON classifier,” contrasting it with the product’s decision/probability pitch. | High-visibility critique and terminology reference for the list’s caveats section. |
| https://x.com/rauchg/status/2100307962262872105 | @rauchg | Reports Vercel’s fx safety reviewer benchmark: Jev was up to 18× faster at p95 and more accurate than GPT Luna, with likely default adoption. | Strong real-agent safety-review use case, while the list can label the figures as vendor-reported. |
| https://x.com/isNickMa/status/2100566407524344225 | @isNickMa | Reports using Jev as an agent safety monitor that filtered actions, caught attacks with few false blocks, and escalated suspicious cases to Gemini. | Direct safety-monitoring experiment showing the “cheap fast filter, expensive escalation” pattern. |
| https://x.com/testingcatalog/status/2099968075861008781 | @testingcatalog | Summarizes Jev as a no-text System One decision model for classification, routing, scoring, probabilities, and confidence. | Independent launch explainer suitable for a press/news subsection. |
| https://x.com/kylejeong/status/2100622054945095934 | @kylejeong | Demonstrates Jev + Stagehand browser control using accessibility-tree state and typed action questions, at about $0.001 per task. | Important alternative to Browser Use, showing the same primitives in the Stagehand ecosystem. |
| https://x.com/h_nilforoshan/status/2100409794276520341 | @h_nilforoshan | Shares a HiringCafe human-labeled resume/job relevance benchmark where Jev scored Spearman 0.79 at about $0.02 per evaluation. | Independent applied benchmark with a real product context; preserve the author’s methodology and avoid generalizing it. |
| https://x.com/VaibhavSisinty/status/2100619641827836222 | @VaibhavSisinty | Roundup of early Jev projects: browser search, 1,018-paper classification, email routing, trading, Pac-Man/Mario, FSD, and chess. | High-density ecosystem map for applications and follow-up project entries. |
| https://x.com/KevinMagnan/status/2100587055906443315 | @KevinMagnan | Surveys two days of Jev projects including trading, browsers, coding-agent monitoring, games, town simulation, X filtering, and resume matching. | Complementary community roundup that broadens the taxonomy beyond browser demos. |
| https://x.com/zxdubx/status/2100604919120121960 | @zxdubx | Presents Agent Handoff Gate, using Jev to verify worker evidence before lead-agent handoff and reporting about 60% lower lead-agent usage in early testing. | Distinct agent-orchestration/security pattern and a candidate project listing. |
| https://x.com/moritzkremb/status/2100577979021832365 | @moritzkremb | Shows voice-controlled real-time browser actions where Jev returns probabilities in roughly 300 ms at about $0.0002 per click decision. | Accessible computer-use demo connecting Jev to voice, browser control, and per-action economics. |
| https://x.com/trycua/status/2100649543079502213 | @trycua | Announces `jev-use` with Cua Driver for bounded cross-platform computer use, including a measured 2048 run reported as 5× faster and about 1,000× cheaper than Astra. | New cross-platform GUI/desktop integration; the post explicitly limits the comparison to that run. |
| https://x.com/rileybrown/status/2100404532119269426 | @rileybrown | Reports Jev classifying 500 emails in seconds for about 3.5 cents. | Simple, memorable batch-classification example for the routing/classification category; methodology is not supplied. |
| https://x.com/testingcatalog/status/2100140717058195825 | @testingcatalog | Daily AI brief notes Jev’s launch, approximately 150 ms latency, $42 per billion input tokens, and free output. | Useful secondary news mention, but should be marked as a brief rather than primary technical evidence. |

## Notes for curation

- The known launch status remains https://x.com/CompleteSkeptic/status/2099925682726002904 and is intentionally not counted above.
- Treat speed, price, accuracy, and “faster/cheaper” comparisons as author/vendor reports unless the linked project supplies reproducible measurements.
- The strongest Awesome Jev candidates are `gregpr07`, `kylejeong`, `h_nilforoshan`, `zxdubx`, `trycua`, `rauchg`, `OpenRouter`, and `vercel_dev`; retain `awlevin` and `danshipper` as critique/context.
- Search did not produce a substantiated public Jev status for @dotey, @stevekrouse, or an official @typesafeai status beyond the known launch thread during this pass.

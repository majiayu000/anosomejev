# Pattern: Routing & classification

**Idea:** Ask typed Choice / Noul questions over shared `state`; branch in code. Questions in one call run in parallel / isolation (docs).

## Official patterns

- [Intent routing](https://docs.typesafe.ai/patterns/intent-routing.md)
- [Confidence routing](https://docs.typesafe.ai/patterns/confidence-routing.md)
- [Fan-out](https://docs.typesafe.ai/patterns/fan-out.md)
- Primitives: [Choice](https://docs.typesafe.ai/primitives/choice.md) · [Noul](https://docs.typesafe.ai/primitives/noul.md)

## Exemplars

| Entry | Link | Notes |
| --- | --- | --- |
| gargpratyush/jev-router | https://github.com/gargpratyush/jev-router | Route Claude Code tasks to cheapest capable model · ★44 (awesomejev 2026-09-17) |
| usenotra/notra | https://github.com/usenotra/notra | Flag routing classifiers onto Jev Booleans · ★170 |
| OpenRouter use cases | https://x.com/OpenRouter/status/2100744733442404791 | Support routing, content rules, fraud flags, next-agent-step, human escalation |
| Vercel evaluate | https://x.com/vercel_dev/status/2100378959653507175 | decide / route / score / stop |
| Email batch note | https://x.com/rileybrown/status/2100404532119269426 | 500 emails · `single-run` |

## Practice tips

1. Keep questions **atomic**; put boundaries in criteria (jaggedness: literalism).  
2. Use **confidence thresholds** — automate high-p; escalate rest.  
3. Don’t hide multi-intent in one Choice.  
4. Pair with an LLM for generated replies after the route decision.

See also [verification](verification.md), [scoring](scoring.md).

# Pattern: Verification & guardrails

**Idea:** Cheap, fast typed checks on agent actions, citations, policies, or handoffs — escalate failures to humans or stronger models.

## Official

- Cookbooks: guardrails, citation check (via [llms.txt](https://docs.typesafe.ai/llms.txt))
- [Confidence](https://docs.typesafe.ai/confidence.md)
- [Patterns hub](https://docs.typesafe.ai/patterns.md)

## Exemplars

| Entry | Link | Notes |
| --- | --- | --- |
| typesafe-ai/skills | https://github.com/typesafe-ai/skills | Official skill · ★60 (awesomejev 2026-09-17) |
| thruwire/foreman | https://github.com/thruwire/foreman | Keep coding agents on task · ★67 |
| DevMortimer/pi-warden | https://github.com/DevMortimer/pi-warden | Pi guardrails · ★22 |
| jkudish/jev-mcp | https://github.com/jkudish/jev-mcp | MCP verify/screen/find · ★24 |
| Vercel fx safety reviewer | https://x.com/rauchg/status/2100307962262872105 | Up to 18× faster p95 vs GPT Luna in that report · author/vendor-reported |
| Agent safety monitor | https://x.com/isNickMa/status/2100566407524344225 | Filter + escalate to Gemini |
| Agent Handoff Gate | https://x.com/zxdubx/status/2100604919120121960 | Verify evidence before lead handoff · early metrics `single-run` |

## Practice tips

1. Verify **every step** becomes affordable at 70–500 ms / $0.042/MTok-in (vendor pricing) — still calibrate locally.  
2. Forced Choice/Noul cannot abstain — design an explicit “needs_human” path via confidence or a dedicated class.  
3. Red line: passing a schema check ≠ the citation is true.

See [critique-limits](../taxonomy/critique-limits.md).

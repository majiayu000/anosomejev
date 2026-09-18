# Agent tooling

MCP servers, routers, review bots, wardens, skill routers, foreman loops. Prefer entries that use Jev for a **concrete typed decision** (route / verify / stop / escalate).

## Must-include agents

| Project | Link | ★ (awesomejev 2026-09-17) | Why |
| --- | --- | --- | --- |
| typesafe-ai/skills | https://github.com/typesafe-ai/skills | ★60 | Official agent skill · `official` |
| devagrawal09/jev-review | https://github.com/devagrawal09/jev-review | ★77 | Staged code-review workflow + dashboard |
| thruwire/foreman | https://github.com/thruwire/foreman | ★67 | Supervisor keeps coding agents on task via Jev |
| NiazMorshed2007/jev-review | https://github.com/NiazMorshed2007/jev-review | ★45 | Local-first MCP quality review plugin |
| gargpratyush/jev-router | https://github.com/gargpratyush/jev-router | ★44 | Route Claude Code tasks to cheapest capable model |
| jkudish/jev-mcp | https://github.com/jkudish/jev-mcp | ★24 | Early MCP wrapping cookbook verify/screen/find |
| blakestone-x/jev-mcp | https://github.com/blakestone-x/jev-mcp | ★4 | Python MCP classify/score/check |
| DevMortimer/pi-warden | https://github.com/DevMortimer/pi-warden | ★22 | Pi guardrails |

## Patterns seen in the wild

- **Cheap filter → expensive escalate** — e.g. [@isNickMa](https://x.com/isNickMa/status/2100566407524344225) agent safety monitor (filter / escalate to Gemini)
- **Handoff gate** — [@zxdubx](https://x.com/zxdubx/status/2100604919120121960) Agent Handoff Gate (verify worker evidence before lead-agent handoff; early ~60% lower lead usage claimed · `single-run` until reproduced)
- **Model routing** — jev-router; [@ephraimduncan](https://x.com/ephraimduncan) demos cited in practice lists

## Firehose

awesomejev.com Agent tooling ~61 entries. Link out for toys; keep this page production-shaped.

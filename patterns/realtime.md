# Pattern: Realtime & computer use

**Idea:** Sub-second typed decisions over structured world state (DOM, a11y tree, emulator JSON, telemetry) for loops that LLMs make too slow/expensive.

## Caveat

Vendor: structured state, **not pixels “yet”**. Games/CU demos are `structured-state-demo`. Latency claims often West-Coast measured; treat clip economics as `single-run` until you reproduce.

## Flagship exemplars

| Entry | Link | Snapshot notes |
| --- | --- | --- |
| browser-use/jev-ultrafast | https://github.com/browser-use/jev-ultrafast | ★1,194 (awesomejev 2026-09-17) · Jev op+DOM; LLM TYPE_TEXT · ~7s / ~$0.0039 flights demo |
| awlevin/typesafe-computer-use | https://github.com/awlevin/typesafe-computer-use | ★145 · OCR→Jev→click |
| fhshaik/typesafe-mario | https://github.com/fhshaik/typesafe-mario | ★165 · emulator state |
| RomanSlack/jev-drone | https://github.com/RomanSlack/jev-drone | ★36 · MuJoCo 2.5 Hz |
| jarrodwatts/jev-trader | https://github.com/jarrodwatts/jev-trader | ★363 · one decision per block |
| Launch Doom | https://x.com/CompleteSkeptic/status/2099925687465570372 | ~10 calls/s · ~$7/h claimed |

## Other public demos

- Stagehand + a11y tree — https://x.com/kylejeong/status/2100622054945095934  
- Cua `jev-use` — https://x.com/trycua/status/2100649543079502213  
- Voice browser — https://x.com/moritzkremb/status/2100577979021832365  
- Pac-Man JSON maze — https://x.com/ephraimduncan/status/2100524915007144289 (win unreproduced later)

## Practice tips

1. Keep action space indexed; let code enforce illegal moves.  
2. Measure success rate across sites/versions, not one viral clip ([@awlevin](https://x.com/awlevin/status/2100427922205209012), [@sebuzdugan](https://x.com/sebuzdugan/status/2100556671491723639)).  
3. Official latency band: 70–500 ms E2E (vendor).  

See [taxonomy/browser-cu.md](../taxonomy/browser-cu.md), [taxonomy/games.md](../taxonomy/games.md).

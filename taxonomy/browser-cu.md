# Browser & computer use

Jev shines when **action space + DOM / accessibility / OCR text** is structured state; LLM used sparingly (e.g. TYPE_TEXT). Always label `structured-state-demo` where pixels are not the model input.

## Flagship

| Project | Link | ★ (awesomejev 2026-09-17) | Notes |
| --- | --- | --- | --- |
| browser-use/jev-ultrafast | https://github.com/browser-use/jev-ultrafast | ★1,194 | Flagship CU: Jev picks op+DOM; LLM only for TYPE_TEXT · demo ~7s / ~$0.0039 Google Flights ([@gregpr07](https://x.com/gregpr07/status/2100411066966749359)) |
| awlevin/typesafe-computer-use | https://github.com/awlevin/typesafe-computer-use | ★145 | OCR→Jev→click · ~$0.0002/step claimed · `vendor-claim`/`single-run` until you reproduce |
| vlad-terin/jev-browser | https://github.com/vlad-terin/jev-browser | ★31 | Element selection skill in observe-act-verify loop |
| droidrun/mobile-jev | https://github.com/droidrun/mobile-jev | ★14 | Android agent |
| kitze/unclutter | https://github.com/kitze/unclutter | ★17 | Clutter classification browser extension |

## Related demos / posts

- [@kylejeong](https://x.com/kylejeong/status/2100622054945095934) — Jev + Stagehand via accessibility-tree state · ~$0.001/task claimed
- [@trycua](https://x.com/trycua/status/2100649543079502213) — `jev-use` + Cua Driver; 2048 run claimed 5× faster / ~1000× cheaper than Astra **for that run only**
- [@moritzkremb](https://x.com/moritzkremb/status/2100577979021832365) — voice → browser; ~300 ms / ~$0.0002 per click decision claimed
- [@stevekrouse](https://x.com/stevekrouse) — Typewriter / browser-use reactions
- HN follow-on: https://news.ycombinator.com/item?id=49735979 (Ultrafast CU)

## Critique to keep honest

- [@awlevin](https://x.com/awlevin/status/2100427922205209012) — agents escape sandboxes while flight APIs remain fragmented; demo ≠ productized API access
- Robustness across sites / DOM drift matters more than a single 7s clip (`single-run` risk)
- OCR vs structured DOM is a hard boundary — Jev does not “see” pixels (vendor: structured state, not pixels “yet”)

See [patterns/realtime.md](../patterns/realtime.md).

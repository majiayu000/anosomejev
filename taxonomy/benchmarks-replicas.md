# Benchmarks, open replicas & calibration

Hard split: **TypeSafe Jev** (API / weights unpublished) vs open **interface replicas** (`replica`). Tag `independent-eval`, `vendor-claim`, `negative-result`, `needs-verify` as appropriate.

## Open replicas (not TypeSafe weights)

| Project | Link | ★ (awesomejev 2026-09-17) | Notes |
| --- | --- | --- | --- |
| vinnylarouge/jevlike | https://github.com/vinnylarouge/jevlike | ★548 | Open one-pass option scorer + demos · `replica` |
| TheoLeeCJ/openjev | https://github.com/TheoLeeCJ/openjev | ★463 | “Run something like Jev on a 3090” research · `replica` |
| Mapika/decider | (see awesomejev.com) | — | Open replica · `replica` |
| NullPo-jp/PocketJev | (see awesomejev.com) | — | Open replica · `replica` |

Architecture / RLCD / weights remain unpublished; replicas reproduce **interface**, not training.

## Independent benches & studies

| Project | Link | ★ (awesomejev 2026-09-17) | Labels |
| --- | --- | --- | --- |
| anessbelbati/jev-rerank-bench | https://github.com/anessbelbati/jev-rerank-bench | ★1 | Rerank vs Cohere/ZeroEntropy with raw responses · `independent-eval` |
| anisselbd/jev-phishing-bench | https://github.com/anisselbd/jev-phishing-bench | ★0 | Haiku can beat Jev on accuracy · `negative-result` · `independent-eval` |
| FirasSX914/calibre | https://github.com/FirasSX914/calibre | ★0 | Banking77 calibration study · high editorial value · `calibration` |
| HackSing/jev-report | https://github.com/HackSing/jev-report | ★0 on awesomejev | ZH independent report pack (52p PDF + 50 repro + 143 tables per awesomejev blurb) · **`needs-verify`** — re-check live repo before treating as confirmed |

## Vendor evals

- [evals.typesafe.ai](https://evals.typesafe.ai/) — workflow Pareto · reference probabilities from frontier averages (Astra / Fable), **not** ground truth · disclosed biases on launch post · `vendor-claim`

## Independent smoke test (widely cited)

[Every / Mike Taylor — mini vibe check](https://every.to/also-true-for-humans/mini-vibe-check-typesafe-s-jev-judged-everything-i-ve-written-in-0-7-seconds)

- 37 docs × 21 questions → **777** judgments in **&lt;0.7s**, ~¼ cent  
- Broader: **1,709** judgments / 11 experiments / **&lt;$0.01**  
- vs Fable 5.1 in that setup: ~**25×** faster median, ~**580×** cheaper  
- Planted defects: Jev **6/7**, Fable **7/7** — good but not perfect · `independent-eval` · `task-accuracy`

## Calibration how-to (editorial)

1. Build a **local labeled set**.  
2. Sweep confidence thresholds → selective-risk curve (“% automate at 90% accuracy?”).  
3. Automate high-confidence; escalate the rest (LLM or human).  
4. Never ship on vendor workflow % alone.

See [critique-limits](critique-limits.md) and [patterns/scoring.md](../patterns/scoring.md).

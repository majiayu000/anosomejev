# Pattern: Scoring, ranking & calibration

**Idea:** Score / composite scores for ranking, rerank, relevance; use probabilities as a **control plane**, not just labels.

## Official

- [Score primitive](https://docs.typesafe.ai/primitives/score.md)
- [Composite scoring](https://docs.typesafe.ai/patterns/composite-scoring.md)
- [Confidence](https://docs.typesafe.ai/confidence.md)
- Cookbooks: rerank, RAG classify, semantic find

## Exemplars

| Entry | Link | Notes |
| --- | --- | --- |
| anessbelbati/jev-rerank-bench | https://github.com/anessbelbati/jev-rerank-bench | Independent rerank vs Cohere/ZeroEntropy · ★1 (awesomejev 2026-09-17) · `independent-eval` |
| FirasSX914/calibre | https://github.com/FirasSX914/calibre | Banking77 calibration · ★0 · `calibration` |
| HiringCafe relevance | https://x.com/h_nilforoshan/status/2100409794276520341 | Spearman 0.79 · ~$0.02/eval · preserve methodology |
| system-one-adapter | https://github.com/typesafe-ai/system-one-adapter-python | Compare Jev vs LLMs on same typed interface · ★67 |
| Workflow evals | https://evals.typesafe.ai/ | Vendor · agreement ≠ GT · `vendor-claim` |

## Calibration recipe

1. Local labels → reliability diagram / selective-risk curve.  
2. Ask: “What % can we automate at 90% accuracy?”  
3. Jaggedness: Score levels **weak for interpolating magnitudes** between levels — prefer discrete levels you defined, compute in code when possible.  
4. Don’t assume P(noul) + P(¬) = 1 across differently worded questions.

## Every smoke numbers (independent)

777 judgments &lt;0.7s; planted defects 6/7 — https://every.to/also-true-for-humans/mini-vibe-check-typesafe-s-jev-judged-everything-i-ve-written-in-0-7-seconds

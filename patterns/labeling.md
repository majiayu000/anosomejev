# Pattern: Data labeling & curation

**Idea:** Map-reduce style labeling — many parallel typed questions over documents/rows at low cost; human review on low confidence.

## Why Jev fits

- Parallel questions on one state (docs)  
- Vendor pricing ($0.042/MTok in, output free) makes large sweeps cheap — still validate accuracy on your ontology  
- Confidence gating for review queues

## Exemplars / references

| Entry | Notes |
| --- | --- |
| Every mini vibe check | 37×21 → 777 judgments; 1,709 across 11 experiments &lt;$0.01 — https://every.to/also-true-for-humans/mini-vibe-check-typesafe-s-jev-judged-everything-i-ve-written-in-0-7-seconds |
| hamiltonulmer DuckDB | Classify rows in CSV/Parquet — https://x.com/hamiltonulmer/status/2100370557405667768 |
| Official cookbooks | hierarchical classification, entity alignment, date extraction — via https://docs.typesafe.ai/llms.txt |
| yibie taxonomy | “Data Labeling & Curation” practice category — https://github.com/yibie/awesome-jev |

## Practice tips

1. Define label ontology in code; Jev only judges against criteria text.  
2. Shadow mode: log Jev vs human before cutting over.  
3. Negative benches (phishing) show **task-accuracy** can lose to small LLMs — don’t assume win.  
4. Replicas (jevlike/openjev) are for interface experiments, not drop-in TypeSafe quality.

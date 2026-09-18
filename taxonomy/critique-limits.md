# Critique & known limits

**Read this before shipping.** anosomejev pins honesty themes that encyclopedias bury.

## Red line

> **Type safety ≠ factual correctness.**  
> Constrained Choice / Score / Noul cannot invent out-of-schema tokens; they **can** still be confidently wrong. Vendor “0% hallucination” / “0% type errors” is a **schema guarantee**, not task accuracy. Founder and HN commentators agree.

Tags: `schema-guarantee` vs `task-accuracy` vs `calibration` — see [TRUST_LABELS.md](../TRUST_LABELS.md).

## Official: jaggedness (jev-1.13)

Source: https://docs.typesafe.ai/model-jaggedness/jev-1.13.md (reviewed 2026-09-17)

| # | Mode | Guidance |
| --- | --- | --- |
| 1 | Literal reading | Exact conditions; boundaries in criteria; split intent |
| 2 | Math and numbers | Arithmetic in code; don’t count with the model |
| 3 | Date/time comparison | Extract parts as Choice; compare in code |
| 4 | Indirection | Reduce hops; name relevant state fields |
| 5 | Large irrelevant state | Filter first; context rot is real |
| 6 | Adversarial content | Precise criteria; edge-case test |
| 7 | Contradictory instructions | Align; avoid Noul where true means “no” |
| 8 | Structural invariants | Don’t assume P(noul)=P(choice yes) or P+¬P=1 across questions |
| 9 | Generation | Use a generative model |

**Avoid:** asking what code can compute exactly; hiding several judgments in one question; System Two / multi-hop; over-stuffing state.

## Launch-post nuance boxes (vendor honesty)

From https://typesafe.ai/blog/introducing-system-one-models-and-jev

1. Side-by-side demos use short dense state + readable question keys.  
2. Workflow evals: capability-team built → possible bias; not training set but not independent.  
3. LLM baseline uses System One LLM wrapper (structured + probs) — slower/costlier than unconstrained LLM.  
4. “0% type errors” is mathematical schema guarantee.  
5. Doom: **structured state text**, not pixels (“yet”).  
6. Wikiracing: opponents often non-reasoning modes; Choice cardinality up to 255 (higher via score-then-choice).  
7. Homepage 193.6× / 444.6× are **higher end** of gains.  
8. Speed measured from West Coast laptops.

## HN themes (main thread 49717558)

https://news.ycombinator.com/item?id=49717558

**Praise:** right abstraction for automation; speed/cost enable verify-every-step; confidence as control plane; pairs with LLMs; demos click; entity resolution / RAG ranking tractable.

**Critique:**

1. Misleading “frontier / 200×” marketing titles  
2. “Can’t hallucinate” semantic trap  
3. Apples-to-oranges speed baselines (CoT vs parallel numbers)  
4. Doom demos “cooked” (structured state)  
5. “Just a classifier / GLiNER / constrained decoding?” — architecture unpublished  
6. Open weights / privacy / gateway friction  
7. Accuracy evidence thin; agreement ≠ ground truth; selective-risk curves wanted  
8. Problem framing burden on developer  
9. Closed architecture skepticism  

Wrong primary id: **49716682** is a small related tweet thread — not the launch.

## Independent EN critique pointers

Kingy, Flavio, warmersun, agentjournal, Every — see [writing.md](writing.md).

## Negative results to keep

- Phishing bench: Haiku can beat Jev — `anisselbd/jev-phishing-bench` · `negative-result`  
- Pac-Man win unreproduced — [@ephraimduncan](https://x.com/ephraimduncan/status/2100554620254752981)  
- Invoice workflows weak vs comparators in vendor charts (Kingy / orcarouter echo)  
- “JSON classifier” framing — [@danshipper](https://x.com/danshipper/status/2100251499443998766)

## Anti-patterns (editorial)

- Shipping automation on vendor Pareto % alone  
- Counting, date math, or hex color proximity **inside** Jev  
- Equating free output pricing with unbounded accuracy  
- Ranking Jev ecosystem by `vercel/eve` stars (`star-inflation-host`)  
- Conflating jevlike/openjev with TypeSafe weights  

## Default independent smoke test

Every protocol: https://every.to/also-true-for-humans/mini-vibe-check-typesafe-s-jev-judged-everything-i-ve-written-in-0-7-seconds

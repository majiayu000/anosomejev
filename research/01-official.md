# 01 — Official docs, manifesto, FAQ caveats, jaggedness

> Historical research notes from September 2026. Claims and counts below record what the cited sources reported at the time; they have not all been independently reproduced or rechecked. Current inclusion guidance is in [CONTRIBUTING.md](../CONTRIBUTING.md).

## Docs site structure

**Index:** https://docs.typesafe.ai/llms.txt (machine-readable TOC; Mintlify serves pages as `.md`)

### Navigation map (from llms.txt, fetched 2026-09-18)

| Section | Key URLs |
| --- | --- |
| Intro | https://docs.typesafe.ai/introduction.md |
| Quick start | https://docs.typesafe.ai/introduction/quickstart.md |
| Concepts — System One | https://docs.typesafe.ai/concepts/system-one.md |
| Concepts — State | https://docs.typesafe.ai/concepts/state.md |
| Concepts — How to build | https://docs.typesafe.ai/concepts/how-to-build-with-system-one.md |
| Use-case map | https://docs.typesafe.ai/concepts/use-case-map.md |
| AI primer | https://docs.typesafe.ai/introduction/machine-learning-primer.md |
| Primitives hub | https://docs.typesafe.ai/primitives.md |
| Choice / Score / Noul | `.../primitives/choice.md`, `score.md`, `noul.md` |
| Advanced structure | https://docs.typesafe.ai/primitives/advanced.md |
| Confidence | https://docs.typesafe.ai/confidence.md |
| Patterns hub | https://docs.typesafe.ai/patterns.md |
| Fan-out / confidence routing / composite / intent | `patterns/fan-out.md`, `confidence-routing.md`, `composite-scoring.md`, `intent-routing.md` |
| Demos | https://docs.typesafe.ai/demos.md · smart-home: `demos/smart-home.md` |
| SDKs | https://docs.typesafe.ai/sdk.md · Python + JS trees under `sdk/` |
| Models | https://docs.typesafe.ai/models.md |
| HTTP API | https://docs.typesafe.ai/api.md |
| Agent skill | https://docs.typesafe.ai/agent-skill.md |
| Legal | https://docs.typesafe.ai/legal.md |
| **Jaggedness** | https://docs.typesafe.ai/model-jaggedness/jev-1.13.md |
| Cookbooks (many) | See llms.txt — parallel questions, rerank, semantic find, guardrails, citation check, RAG classify, function calling, skill suggestion, entity alignment, SDE cascade, date extraction, hierarchical classification, etc. |

### Core product contract (official)

- **Endpoint:** `POST https://api.typesafe.ai/v1/systemone`
- **Input:** `state` (string | object | array) + typed `questions`
- **Output:** typed answers + probabilities (+ confidence for Choice/Score)
- **Model aliases:** `jev-latest` (stable default), `jev-preview`; responses report versioned id e.g. `jev-1.13.0`
- **Official packages:** `typesafe-sdk` (Python), `@typesafe-ai/sdk` (JS/TS); org https://github.com/typesafe-ai
- **Also:** System One adapter (LLM-backed comparison client), agent skills repo

### Introduction thesis (docs)

LLMs generate text for humans; forcing structured decisions then parsing creates mismatch. System One evaluates typed questions against state and returns values code can branch/sort/route on — “no text generation, no parsing.” Questions in one call run **in parallel / in isolation** against the same state.

---

## Manifesto

**URL:** https://typesafe.ai/manifesto
**Tagline:** “Composable AI: Build Prod, Not God”

### Mission (paraphrase + cite)

Pave shortest path to an AI-based economic revolution by making intelligence **composable**, catalyzing a Cambrian explosion of intelligent software.

### Key arguments

1. **We already have enough general intelligence** — bottleneck is buildability / composability, not raw chat IQ.
2. **Horseless carriage metaphor** — chat AI is optimized for human preference (RLHF); software needs auditable branches, not assistants.
3. **Machine-native composable AI** — AI as semantic judgment primitive; code retains exact computation.
4. **Safe emergence** — reliability/trust required before burying deps five layers deep; inspect, test, constrain piece by piece.
5. **Three steps:** ship highest intelligence-per-dollar shape → reliability for real automation → higher-level stable abstractions.

Appendix footnotes reference: lack of automation as the missing piece; TFP growth definition; RLHF/RLVR vs preference; “smart if-statements” / neuro-symbolic dream.

---

## Launch post + FAQ caveats

**URL:** https://typesafe.ai/blog/introducing-system-one-models-and-jev
**Author:** Diogo Almeida, founder · **Date:** Sep 15, 2026

### Claims table (vendor)

| Dimension | LLMs (as framed) | System One / Jev |
| --- | --- | --- |
| Training | RLHF / RLVR | **RLCD** — calibrated decisions |
| Outputs | Strings (parse/validate) | Type-safe structured values + probs/confidence |
| Sampling | Sequential tokens | **Parallel** sampler |
| Cost | $0.20–$10 / MTok in; out ~5× | **$0.042 / MTok in; output FREE** |
| Speed | 3–329 s frontier (vendor table) | **70–500 ms** E2E |
| Use | Chat, copilots, verifiable generation | Smart if-statements, map-reduce, realtime, verify/guardrail |

### Naming FAQ (answered on page)

- **System One:** Kahneman *Thinking, Fast and Slow* — fast/intuitive vs System 2 deliberate. Company argues System One Models can be *more* reliable than the colloquial “System 1 = error-prone” implication (details “in the future”).
- **Jev:** William Stanley **Jevons** — efficiency → more demand (Jevons paradox applied to intelligence cost).

### FAQ headings present but body truncated in fetch

The page lists further FAQ headings (content may be accordion/JS-loaded; not fully captured in static fetch):

- Why was a new training algorithm needed?
- What use cases is Jev good for?
- Is Jev just a smaller LLM?
- How does Jev perform against public benchmarks?
- Where does our training data come from?
- These results are kinda crazy — how is it possible?

**Cross-source answer fragments:**

- FAQ “Is Jev just a smaller LLM?” → vendor answer cited on HN/docs: “Jev is neither small nor an LLM, hence being off the intelligence Pareto curve.” Architecture still unpublished.
- Public benchmarks: TypeSafe prefers **workflow evals** (https://evals.typesafe.ai/) over standard public leaderboards; methodology uses reference probabilities from frontier models (Astra / Fable averages), not ground truth — disclosed on launch post.

### Explicit launch-post **nuance** boxes (important for awesome list honesty)

1. Side-by-side demo uses short dense state + human-readable question keys (advantageous framing).
2. Workflow evals: made by capabilities team → possible bias; not training distribution but not independent either.
3. LLM baseline uses TypeSafe’s System One LLM wrapper (structured + probs) — slower/costlier than unconstrained LLM answers.
4. “0% type errors” is **mathematical** schema guarantee, not empirical accuracy.
5. Doom: **structured state text**, not pixels (“yet”).
6. Wikiracing: LLM opponents often non-reasoning modes for watchability; Choice cardinality up to **255**, higher via 2-stage score-then-choice.
7. Homepage 193.6× / 444.6× called **higher end** of real-world gains.
8. Speed measured from West Coast laptops (service location).

---

## Jaggedness notes (`jev-1.13`)

**URL:** https://docs.typesafe.ai/model-jaggedness/jev-1.13.md
**Applies to:** `jev-1.13` · **Last reviewed:** 2026-09-17

### Summary line

Fast, calibrated, good at common-sense judgment; struggles with **indirection**, **literalism**, **numeric precision**.

### Failure modes (table)

| # | Mode | Guidance |
| --- | --- | --- |
| 1 | Literal reading | Exact conditions; put boundaries in criteria; split intent |
| 2 | Math and numbers | Arithmetic in code; don’t count with the model |
| 3 | Date/time comparison | Extract parts as Choice; compare in code |
| 4 | Indirection | Reduce hops; name relevant state fields |
| 5 | Large irrelevant state | Filter first; context rot is real |
| 6 | Adversarial content | Precise criteria; edge-case test |
| 7 | Contradictory instructions/criteria | Align; avoid Noul where true means “no” |
| 8 | Structural invariants | Don’t assume P(noul)=P(choice yes) or P+¬P=1 across questions |
| 9 | Generation | Use a generative model |

### Concrete examples from page

- Counting: iterate + one Noul per item, sum in code.
- Hex/RGB color proximity unreliable; prefer named colors.
- Score levels **weak for interpolating magnitudes** between levels.
- Empirical inconsistency: same refund question as Noul vs yes/no Choice can disagree; Noul + negation need not sum to 1.
- “Pick a card from the deck” rule: candidates via regex/LLM, Jev chooses — don’t force character-level generation.

### Avoid list (docs)

- Asking what code can compute exactly
- Hiding several judgments in one question
- System Two / multi-hop tasks
- Over-stuffing state (context rot)

---

## Gateway / multi-cloud official-adjacent

| Provider | Model id | Notes |
| --- | --- | --- |
| TypeSafe direct | `jev-latest` / `jev-1.13.0` | Waitlist / early access |
| Vercel AI Gateway | `typesafe-ai/jev` | Changelog: https://vercel.com/changelog/typesafe-ai-jev-now-available-on-ai-gateway ; AI SDK `experimental_evaluate` |
| Cloudflare AI | `typesafe/jev` | Docs list 32,000 token context |

---

## Official repos / packages (for Official taxonomy)

| Asset | Link |
| --- | --- |
| JS SDK | https://github.com/typesafe-ai/typesafe-sdk-js |
| Python SDK | https://github.com/typesafe-ai/typesafe-sdk-python |
| System One adapter | https://github.com/typesafe-ai/system-one-adapter-python |
| Skills | https://github.com/typesafe-ai/skills |
| Org | https://github.com/typesafe-ai |
| Discord | https://discord.gg/typesafe |
| X | https://x.com/typesafeai |
| LinkedIn | https://www.linkedin.com/company/typesafe-ai/ |
| Founder writing | https://www.completeskeptic.com/ (cited from HN: “Bitterest Lesson”, jaggedness essay) |
| Related blog posts | https://typesafe.ai/blog/bitterest-lesson ; `ai-too-good-to-be-true-too-bad-to-be-useful-typesafe-ai` |

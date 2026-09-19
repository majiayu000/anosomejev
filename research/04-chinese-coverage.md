# 04 — Chinese / ZH coverage

> Historical research notes from September 2026. Claims and counts below record what the cited sources reported at the time; they have not all been independently reproduced or rechecked. Current inclusion guidance is in [CONTRIBUTING.md](../CONTRIBUTING.md).

Research date: 2026-09-18 (Asia/Shanghai). All URLs fetched or confirmed via search snippets.

---

## Articles found during research

| Source | URL | Date / author | Angle |
| --- | --- | --- | --- |
| **OrcaRouter** | https://www.orcarouter.ai/zh-CN/blog/jev-typesafe-system-one-what-we-know | 2026-09-16 · Magnus Corvin | Deep “what we know / don’t know”; separates vendor vs Every independent tests; calibration how-to; notes OrcaRouter does **not** host Jev |
| **OrcaRouter EN twin** | https://www.orcarouter.ai/blog/jev-typesafe-system-one-what-we-know | same | English counterpart |
| **remio** | https://www.remio.ai/zh/post/typesafe-jev-model-rejects-chatbots-for-programmatic-decisions-zh | ~2026-09-17 · Aisha Washington | Product thesis: programmatic decisions vs chatbots; schema≠truth; what to examine after launch |
| **OurCoders** | https://ourcoders.com/tech/show/tech-20260916-001-07/ | 2026-09-16 · 林岚 | Short skeptical editor take: “类型正确离判断正确还有多远” |
| **人人都是产品经理 / SenseAI** | https://www.woshipm.com/share/6465624.html | 2026-09-17 · 深思 SenseAI | Popular explainer: RLHF critique, Jevons naming, Every 777/0.7s, zero-hallucination misreading, official self-disclosed limits |
| **agenccy** | https://agenccy.ai/zh/news/jevs-0-percent-hallucination-sits-beside-a-678-percent-accuracy-score/ | search-hit | Frames “0% hallucination next to 67.8% accuracy” (vendor workflow score context) |
| **赢政天下 / winzheng** | https://www.winzheng.com/article/jev-ai-decision-model-typesafe-diogo-almeida-system-one | search-hit | News-style: ChatGPT co-inventor / cost claims |

### Shared ZH themes (across articles)

1. **Not a chat model** — Choice / Score / Noul only.
2. **Articles cite small-sample speed/cost reports; accuracy needs local testing** — Every’s 6/7 defects often cited.
3. **“零幻觉” = schema guarantee**, not semantic correctness.
4. **Vendor workflow accuracy** often summarized ~mid-60s% vs higher frontier agreement scores (orcarouter cites dashboard overall **67.8%** vs best comparator **74.1%** — treat as vendor-reported).
5. **Architecture / RLCD details unpublished**.
6. **Best use:** high-volume typed decisions + confidence gating + generative model for prose.

---

## Chinese-friendly awesome / tooling

| Item | URL | Notes |
| --- | --- | --- |
| AnotiaWang/awesome-jev **简体中文** | https://github.com/AnotiaWang/awesome-jev/blob/main/README_zh.md | Full ZH mirror of curated list — Chinese introduction |
| HackSing/jev-report | Listed on https://awesomejev.com/ as: “发明 RLHF 的人，这次做了个不会说话的模型：Jev 独立研究报告。52 页 PDF + 50 条中文实测复现包 + 143 条可回溯数据表” · repo path cited as `HackSing/jev-report` | Repository existence subsequently checked on 2026-09-19; report results not independently reproduced |
| X explainers (cited by yibie) | https://x.com/dotey/status/2100109937237987823 | “Jev 中文解读” — System One as typed decision layer for code |

---

## Gaps in current lists (ZH)

| Gap | Detail |
| --- | --- |
| Longform not in AnotiaWang Articles | orcarouter / remio / ourcoders / woshipm missing from fetched EN/ZH article sections |
| awesomejev.com | HackSing listed under benchmarks; no dedicated “中文资源” heading |
| yibie | ZH via X thread; no longform article category |
| AbdelStark | English-only; no ZH section |
| Independent Chinese evals | HackSing claims dense repro pack — if valid, unique asset; few other ZH benches indexed |
| Localization of jaggedness | No known full ZH translation of official jaggedness page in lists |

---

## Every numbers (widely cited in ZH)

Source: https://every.to/also-true-for-humans/mini-vibe-check-typesafe-s-jev-judged-everything-i-ve-written-in-0-7-seconds (Mike Taylor)

Repeated across orcarouter / woshipm:

- 37 docs × 21 questions → **777** judgments in **&lt;0.7s**, ~¼ cent
- Broader: **1,709** judgments across 11 experiments, **&lt;$0.01** total
- vs Fable 5.1: ~**25×** faster median (0.35s vs 8.83s), ~**580×** cheaper in that setup
- Defects planted: Jev **6/7**, Fable **7/7** — “good but not perfect”

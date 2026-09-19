# 02 — Existing awesome lists / directories compared

> Historical research notes from September 2026. Claims and counts below record what the cited sources reported at the time; they have not all been independently reproduced or rechecked. Current inclusion guidance is in [CONTRIBUTING.md](../CONTRIBUTING.md).

## Contenders

| Project | URL | Stars (source) | Update information |
| --- | --- | --- | --- |
| **Awesome Jev (site)** | https://awesomejev.com/ | Aggregates 410 entries / 10,093★ (site, refreshed **2026-09-17**) | Daily GitHub star refresh; largest inventory |
| **AbdelStark/awesome-typesafe** | https://github.com/AbdelStark/awesome-typesafe · Pages: https://abdelstark.github.io/awesome-typesafe/ | **118★** (GitHub page fetch 2026-09-18); awesomejev listed 41★ (stale vs live) | README “Last reviewed: 2026-09-17” |
| **AnotiaWang/awesome-jev** | https://github.com/AnotiaWang/awesome-jev | **39★** (GitHub fetch); awesomejev listed 3★ | Bilingual EN + **README_zh.md**; launch-era curation |
| **yibie/awesome-jev** | https://github.com/yibie/awesome-jev | **69★** (GitHub fetch); awesomejev listed 1★ | Practice-oriented categories; HN/X/Reddit “discussions” section |
| **jev.directory** | https://jev.directory/ | N/A (not a classic awesome list) | Live share feed of primitives from repos/posts |

> Note: Star mismatches between awesomejev.com and live GitHub are expected — cite date. Do not invent counts.

---

## awesomejev.com — coverage profile

**Positioning:** “Everything Built On Jev” — SDKs, integrations, demos, benchmarks; stars refreshed daily.

### Taxonomy on site (observed sections)

1. Official / docs / SDKs
2. SDKs & clients (~35)
3. Integrations (~22) — includes **vercel/eve** (★5,355 on site — note: eve is a large agent framework with Jev as *evaluation* path, not a Jev-only repo)
4. Agent tooling (~61)
5. Browser & computer use (~24)
6. Applications (~34)
7. Games & simulations (~47)
8. Demos & playgrounds (~46)
9. Benchmarks / open replicas (large)
10. Other curated lists
11. Writing / threads

### Strengths

- **Breadth:** closest to a complete inventory within ~48h of launch culture.
- **Operational metadata:** language, stars, short why, repo+site links.
- **Includes critique-shaped entries** (e.g. HackSing/jev-report description, phishing benches where Haiku wins, finance “no alpha” notes) — but buried among toys.
- Spec sheet + primitives primer on homepage — good onboarding.

### Limitations noted during research

- **Large inventory:** 410 entries include many demos; production readiness requires checking each project.
- **Chinese / ZH depth thin** in the main English wall of text (HackSing listed under benchmarks; little ZH editorial).
- **Critique section not first-class** — HN honesty themes underrepresented as a category.
- **Integration star inflation:** listing vercel/eve at 5k★ can dominate “most starred” narrative though Jev is one feature.
- **No bilingual UX** comparable to AnotiaWang.
- **No “source notes”** (private data / single-run / vendor-eval) as systematically as AbdelStark’s CONTRIBUTING ethos.

---

## AbdelStark/awesome-typesafe

**License:** MIT · **Stance:** Independent, not affiliated; community entries labeled.

### What it covers

- Strong **Start here** + official docs/SDK/patterns/cookbooks/research.
- Community: clients, agent tooling, browser agents, games/robotics, **evaluations and independent research**, showcases/field notes.
- Explicit evaluation caveats in many bullets (e.g. calibre thresholds don’t transfer; jev-axi benchmark notes).
- Points to independent walkthrough https://warmersun.com/jev/ (“Typed Decisions, Not Chat”).

### Strengths

- **Quality bar + limitation disclosure** culture.
- GitHub Pages site + CI checks badge.
- Good for engineers who want trustworthy links.

### Gaps

- Far fewer entries than awesomejev.com (by design).
- Less games/toys inventory.
- Chinese coverage not a first-class section.
- Taxonomy is English GitHub-README classic, not product-domain (routing vs games).

---

## AnotiaWang/awesome-jev

**License:** CC0 · **Unique:** **English + 简体中文** README pair.

### What it covers

Official, Community, SDKs, Applications, Demos & Games, Agent Tools, Research & Open Models, Cookbooks, Patterns, Articles.

### Strengths

- Best **ZH onboarding** among GitHub lists (full Chinese README).
- Clear primitive table; cookbooks/patterns mirrored from docs.
- Curated “useful” tone vs dump-everything.
- Articles section includes Every/Mike Taylor, Register, Zenn JP, agentjournal.

### Gaps

- Smaller absolute inventory than awesomejev.
- Articles section still light on Chinese press (orcarouter / remio / woshipm / ourcoders not listed in fetched README).
- Independent critique / calibration studies fewer than AbdelStark’s eval subsection.
- Stars growing but still mid-size.

---

## yibie/awesome-jev

**License:** MIT · **Unique:** **Practice / industry taxonomy** + Related Practices (HN, X, Reddit).

### Category counts (from README aggregate)

| Category | Entries |
| --- | --- |
| Classification & Routing | 9 |
| Verification & Guardrails | 4 |
| Scoring & Ranking | 4 |
| Agent Decisions | 7 |
| Data Labeling & Curation | 2 |
| Evaluation & Benchmarking | 4 |
| Calibration & Research | 3 |
| Infra / SDKs / Integrations | 9 |
| Game & Simulation | 3 |
| Compliance & Legal | 1 |
| Content Moderation | 2 |
| Related Practices / Discussions | 13 |
| Scientific Pipelines | 0 (open) |

### Strengths

- Best **“where is Jev making real decisions?”** framing.
- Strict inclusion: must use Jev for concrete typed decision; one category per entry.
- Captures social proof (HN 49717558, founder launch tweet, Chinese X @dotey thread).
- Selected field guide, not encyclopedia.

### Gaps

- Incomplete vs ecosystem size (intentionally).
- Games underweighted vs viral demos.
- Chinese *longform* articles still mostly absent; ZH presence via X thread.
- Less SDK exhaustiveness than AnotiaWang / awesomejev.

# 06 — Anosomejev blueprint: differentiation + accounts + build plan

## Differentiation angles vs awesomejev.com

awesomejev.com already owns **breadth + daily stars**. A new **anosomejev** wins by being the **high-signal field guide + ZH + critique layer**.

| Angle | What to do | Why it beats awesomejev |
| --- | --- | --- |
| **1. Editorial “Must 30”** | Pin the table in `03-taxonomy-and-must-include.md`; update weekly | Cuts through 410-entry noise |
| **2. Dual taxonomy** | Browse A: artifact type (SDK/Agent/CU…) · Browse B: decision pattern (route/verify/score/label/realtime) like yibie | awesomejev is artifact-first only |
| **3. Trust labels** | Every entry: `independent-eval` / `vendor-claim` / `structured-state-demo` / `star-inflation-host` / `single-run` | AbdelStark ethos, site-wide |
| **4. First-class Critique** | Jaggedness, HN 49717558 themes, calibration cookbook, negative benches | Missing as a top nav on awesomejev |
| **5. First-class 中文** | Longform ZH + AnotiaWang ZH + HackSing + @dotey; jaggedness ZH summary | Underserved relative to EN dump |
| **6. Anti-patterns page** | Literalism, counting, date math, overstuffed state, “zero hallucination” misuse | Unique teaching asset |
| **7. Replica clarity** | Hard split: TypeSafe Jev vs open *interface* replicas (jevlike/openjev/decider) | Prevents conflation |
| **8. Production patterns** | Prefer entries with thresholds, policies, telemetry, shadow mode | Filters toys |
| **9. Honest leaderboard** | “Most starred *Jev-primary*” excluding eve-scale hosts unless scoped | Avoid star theater |
| **10. Contribution gate** | Require: public URL + typed-decision sentence + caveat if private data | Quality over PR spam |
| **11. Sync, don’t scrape-compete** | Link out to awesomejev for “full inventory”; position as curated overlay | Sustainable |
| **12. Name/branding** | “anosomejev / Awesome Jev” — clarify *not* affiliated; complementary to awesomejev.com | Avoid confusion |

### Positioning one-liner

> **awesomejev.com** = encyclopedia of everything built in the first week.  
> **anosomejev** = curated map of what matters, what’s proven, what’s overclaimed — EN+ZH.

---

## X / Twitter handles to follow

**Rule:** Handles only from public web pages / articles / lists (no X MCP). Verify still active before featuring.

### Core

| Handle | Why |
| --- | --- |
| [@typesafeai](https://x.com/typesafeai) | Official product/research |
| [@CompleteSkeptic](https://x.com/CompleteSkeptic) | Diogo Almeida — launch threads, Doom, RLCD framing |

### Ecosystem builders (publicly cited)

| Handle | Why / citation trail |
| --- | --- |
| [@browser_use](https://x.com/browser_use) / Browser Use org | Jev Ultrafast; related posts cite gregpr07 |
| [@gregpr07](https://x.com/gregpr07) | Browser Use + Jev flight-search demo (AbdelStark showcase) |
| [@rauchg](https://x.com/rauchg) | Guillermo Rauch — Vercel fx / Jev safety reviewer thread cited publicly |
| [@danshipper](https://x.com/danshipper) | Every — early user experience cited in HN/founder replies |
| Mike Taylor / Every | Article: every.to mini-vibe-check (handle often @miketaylr or Every staff — **confirm live handle before listing**; cite article if unsure) |
| [@stevekrouse](https://x.com/stevekrouse) | TypeSafe Typewriter demo |
| [@ephraimduncan](https://x.com/ephraimduncan) | Model router demo (yibie Related Practices) |
| [@iamMrDuncan](https://x.com/iamMrDuncan) | Qwen-on-Cerebras comparison video |
| [@identityTorn](https://x.com/identityTorn) | Internal classifier field note |
| [@isNickMa](https://x.com/isNickMa) | Agent safety monitor report |
| [@dotey](https://x.com/dotey) | Chinese explainer thread |
| [@chetaslua](https://x.com/chetaslua) | jevmeter demo |
| [@hamiltonulmer](https://x.com/hamiltonulmer) | DuckDB Jev classifier (jev.directory) |
| [@wmoto_ai](https://x.com/wmoto_ai) | Local Jev-style experiment (JP) |
| [@Kostastsale](https://x.com/Kostastsale) | Security engineering reframing |
| [@waynesutton](https://x.com/waynesutton) | “Ask Jev anything” public demo |
| [@malekoo](https://x.com/malekoo) | Mac app first use case |
| [@justALEXWORTEGA](https://x.com/justALEXWORTEGA) | MLP-on-Qwen mimicking Jev |
| [@harshagundal](https://x.com/harshagundal) | Open RLCD/Qwen experiment cited on HN |

### Platforms / people adjacent (follow for integration news)

| Handle / org | Why |
| --- | --- |
| Vercel / AI SDK people around Gateway changelog | `typesafe-ai/jev` availability |
| Cloudflare AI docs authors | Workers AI model card |
| Latent Space / AINews roundups | Launch amplification |

> If a handle cannot be confirmed from a public non-X page in future passes, demote to “mentioned in article X” without asserting the handle.

---

## Suggested repo structure for anosomejev

```text
anosomejev/
  README.md              # EN curated home + Must 30
  README_zh.md           # ZH mirror
  taxonomy/
    official.md
    sdks.md
    integrations.md
    agents.md
    browser-cu.md
    apps.md
    games.md
    demos.md
    benchmarks-replicas.md
    writing.md
    chinese.md
    critique-limits.md
  patterns/              # yibie-style
    routing.md
    verification.md
    scoring.md
    labeling.md
    realtime.md
  CONTRIBUTING.md
  TRUST_LABELS.md
```

### Homepage sections (order)

1. What Jev is (3 primitives) + link jaggedness  
2. Must-include 30  
3. Critique & calibration (read this before shipping)  
4. 中文资源  
5. Taxonomy indexes  
6. “Full firehose → awesomejev.com / jev.directory”

---

## Near-term editorial backlog

1. Re-verify `HackSing/jev-report` GitHub presence + license.  
2. Re-pull live ★ for Must 30 when API quota available.  
3. Extract FAQ accordion bodies from launch post (JS) if missing.  
4. Add Cloudflare + Vercel cookbooks as Official-adjacent.  
5. Track open replica quality bar (jevlike vs marketing clones).  
6. Weekly delta vs awesomejev.com new entries — only promote high-signal.

---

## Success metrics for anosomejev (not vanity stars)

- Time-to-first-useful-link for a newcomer &lt; 2 minutes  
- % entries with trust labels  
- ZH article coverage completeness vs EN  
- Presence of ≥5 independent eval links with methodology notes  
- Explicit “do not use for X” page maintained against jaggedness

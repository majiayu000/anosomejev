# GitHub 项目与补充资源

从仓库已有的 [`docs/data/entries.json`](../docs/data/entries.json) 整理，共 **584 条资源**。原始快照日期字段为 2026-09-18；旧版来源说明记载采集于 2026-09-19，两者存在差异，不能当成当前实时数据。

保留原始描述、分类和链接以便找回收集内容。原分类可能不准确，内容尚未逐项复核；这里不展示旧版信任标签、固定排名或重复描述字段。缺少说明的条目明确标注。

[完整收集目录](README.md) · [另一批 410 条资源](FULL.md)

## 分类

- [Official（7 条）](#category-1)
- [Apps（203 条）](#category-2)
- [Integrations（99 条）](#category-3)
- [Browser（31 条）](#category-4)
- [Games（44 条）](#category-5)
- [Agents（74 条）](#category-6)
- [Lists（19 条）](#category-7)
- [Research（47 条）](#category-8)
- [SDKs（60 条）](#category-9)

<a id="category-1"></a>

## Official

| 项目或资源 | 原始说明 | 链接 |
| --- | --- | --- |
| TypeSafe 文档 | 原语、模式、jaggedness、API 正典 | [网站](https://docs.typesafe.ai/) |
| 发布博文 | RLCD、定价、演示 nuance、FAQ | [网站](https://typesafe.ai/blog/introducing-system-one-models-and-jev) |
| 宣言 | 产品哲学 | [网站](https://typesafe.ai/manifesto) |
| Jaggedness jev-1.13 | 官方失败模式 — 必读 | [网站](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md) |
| 工作流评测 | 厂商 Pareto（先读 caveat）· vendor-claim | [网站](https://evals.typesafe.ai/) |
| typesafe-ai/skills | Agent skills for building with TypeSafe's System One API | [仓库](https://github.com/typesafe-ai/skills) · [网站](https://typesafe.ai) |
| typesafe-ai/typesafe-ai.github.io | 原始数据未提供说明。 | [仓库](https://github.com/typesafe-ai/typesafe-ai.github.io) |

<a id="category-2"></a>

## Apps

| 项目或资源 | 原始说明 | 链接 |
| --- | --- | --- |
| typesafe-ai/typesafe-sdk-js | 官方 TS SDK | [仓库](https://github.com/typesafe-ai/typesafe-sdk-js) |
| typesafe-ai/typesafe-sdk-python | 官方 Python SDK | [仓库](https://github.com/typesafe-ai/typesafe-sdk-python) |
| typesafe-ai/system-one-adapter-python | 同一类型接口对比 Jev vs LLM | [仓库](https://github.com/typesafe-ai/system-one-adapter-python) |
| vinnylarouge/jevlike | 原始数据未提供说明。 | [仓库](https://github.com/vinnylarouge/jevlike) |
| TheoLeeCJ/SemIf | Semantic ifs from open models, on a 3090 at home. Independent; not affiliated with Jev or TypeSafe. | [仓库](https://github.com/TheoLeeCJ/SemIf) · [网站](https://openjev.com) |
| jarrodwatts/jev-trader | 每 Monad 区块一个决策 | [仓库](https://github.com/jarrodwatts/jev-trader) |
| awlevin/typesafe-computer-use | OCR→Jev→点击 | [仓库](https://github.com/awlevin/typesafe-computer-use) |
| usenotra/notra | 偏生产的 flag 路由到 Jev 布尔 | [仓库](https://github.com/usenotra/notra) |
| vercel/eve | 大框架；evaluate 默认路径 — **star-inflation-host** | [仓库](https://github.com/vercel/eve) |
| vercel-labs/ai-cli | CLI evaluate | [仓库](https://github.com/vercel-labs/ai-cli) |
| gargpratyush/jev-router | 把 Claude Code 任务路由到够用的最便宜模型 | [仓库](https://github.com/gargpratyush/jev-router) |
| vlad-terin/jev-browser | observe-act-verify 中的元素选择 | [仓库](https://github.com/vlad-terin/jev-browser) |
| anessbelbati/jev-rerank-bench | 独立 rerank 基准 | [仓库](https://github.com/anessbelbati/jev-rerank-bench) |
| realZachi/pg-jev | Ask your Postgres tables questions in plain language. A PostgreSQL extension powered by TypeSafe's Jev. | [仓库](https://github.com/realZachi/pg-jev) · [网站](https://pgjev.com) |
| ekzhang/openjev-sglang | Jev-compatible API endpoint based on open models (prefill-only) | [仓库](https://github.com/ekzhang/openjev-sglang) · [网站](https://ekzhang--openjev-sglang-openjev.us-west.modal.direct) |
| ChetasLua/jevmeter | Put a live Jev (TypeSafe) meter on any video: every sentence scored, rendered as a 16:9 edit | [仓库](https://github.com/ChetasLua/jevmeter) |
| realZachi/typesafe-adblock | 🧹 Fun project: a Chrome extension that asks a tiny AI decision model (TypeSafe Jev) "is this DOM element an ad?" and pops it off the page. BYOK, no backend, not a real ad blocker. | [仓库](https://github.com/realZachi/typesafe-adblock) |
| mrnugget/jev-shell-history | Fish-style zsh history autosuggestions ranked by Jev (TypeSafe) | [仓库](https://github.com/mrnugget/jev-shell-history) |
| bnsd55/jevmlx | Jev-style parallel constrained decisions for any MLX model on Apple Silicon. Typed, schema-valid JSON in one forward pass. | [仓库](https://github.com/bnsd55/jevmlx) · [网站](https://github.com/bnsd55/jevmlx#readme) |
| jexp/neo4jev | Typesafe.ai System One Model Jev navigating a Neo4j graph by using a classifier over neighbouring relationships | [仓库](https://github.com/jexp/neo4jev) |
| razorback16/openjev | Open, Jev-compatible System One decision server on DiffusionGemma | [仓库](https://github.com/razorback16/openjev) · [网站](https://codiv.ai) |
| sorrycc/typesafe-snake | Snake auto-played by TypeSafe's Jev model: one System One choice per tick, legal moves and facts generated in code | [仓库](https://github.com/sorrycc/typesafe-snake) |
| ellipsis-dev/blink | Codebase search powered by Jev from @typesafe-ai | [仓库](https://github.com/ellipsis-dev/blink) |
| RafalWilinski/vibecheck | Chrome extension: vibe-check your X posts with TypeSafe's Jev before you hit Post | [仓库](https://github.com/RafalWilinski/vibecheck) |
| phyous/tsai-sc | TypeSafe Jev controls original StarCraft shareware through keyboard and mouse with recorded action probabilities. | [仓库](https://github.com/phyous/tsai-sc) |
| dannote/jev | TypeSafe Jev for OTP: reply to Jev from a GenServer and pattern match on its answer | [仓库](https://github.com/dannote/jev) |
| compozy/yoshi | Context-pruning proxy for Claude Code and Codex: Jev judges which history is still needed, measured not claimed. POC here now, heading soon into https://github.com/compozy/compozy | [仓库](https://github.com/compozy/yoshi) |
| zadescoxp/Jev-Trades | Trading bot with the all new TypeSafe AI's first system one model named as Jev | [仓库](https://github.com/zadescoxp/Jev-Trades) · [网站](https://jevtrades.zadescoxp.com) |
| AboveColin/HA-Jev | Home Assistant integration for TypeSafe Jev. Ask a question about your house and get a probability, a choice or a score as an entity. | [仓库](https://github.com/AboveColin/HA-Jev) |
| stephanj/parallelConstraintDecoding | Parallel Constraint Decoding using Java and Llama.cpp compared to Python 🔥 | [仓库](https://github.com/stephanj/parallelConstraintDecoding) |
| AlbionaHoti/refgarden | A spatial reference explorer for creators. Local Jev query choices, metadata highlights and source-linked collections. | [仓库](https://github.com/AlbionaHoti/refgarden) |
| emrickgarrett/OneVOneJev | 1v1 Jev quickscope arena — Three.js + TypeSafe System One | [仓库](https://github.com/emrickgarrett/OneVOneJev) |
| giuliosmall/pg_typesafe | Pre-alpha PostgreSQL extension for TypeSafe AI (Jev) categorical classification | [仓库](https://github.com/giuliosmall/pg_typesafe) |
| Kevthetech143/super-jev | A small, extensible decision-to-action harness for TypeSafe Jev | [仓库](https://github.com/Kevthetech143/super-jev) |
| komorra/Eugeniusz | Local, typed AI decisions for C, C++, C#, Python, Unity and Unreal Engine. | [仓库](https://github.com/komorra/Eugeniusz) |
| sharziki/semdecide | Typed semantic decisions for Unix pipelines and CI, powered by TypeSafe AI Jev. | [仓库](https://github.com/sharziki/semdecide) |
| GiesN/typesafe-jev-workflow | 原始数据未提供说明。 | [仓库](https://github.com/GiesN/typesafe-jev-workflow) |
| manifoldor/xtags | 在 X 的时间线上，给每条帖子标出它想让你干什么。判断来自 Jev，一个只返回概率、不生成文本的模型。 | [仓库](https://github.com/manifoldor/xtags) |
| mithalouni/system-one-open | Open replica of TypeSafe's Jev: typed calibrated decisions in one forward pass, on Gemma 4 E2B / Gemma 3 270M (Modal) | [仓库](https://github.com/mithalouni/system-one-open) |
| scale-venture-partners/riff | A small, fast prose linter: ruff-style rule codes for writing, backed by TypeSafe's Jev model | [仓库](https://github.com/scale-venture-partners/riff) |
| y0usaf/typesafe-cli | Ask Jev typed questions from the shell: noul, choice, and score answers as numbers, not prose | [仓库](https://github.com/y0usaf/typesafe-cli) |
| arielweinberger/jev-autopilot | This demo uses Jev from TypeSafe AI to autonomously fly a drone in a random city from point A to point B, avoiding obstacles along the way. A trip costs $0.01. | [仓库](https://github.com/arielweinberger/jev-autopilot) |
| keeltrace/hermes-jev | Typed System One decisions, ranking, verification, and an opt-in Hermes tool gate using TypeSafe Jev. | [仓库](https://github.com/keeltrace/hermes-jev) |
| mateonunez/jod | Semantic schemas over TypeSafe's Jev — validate the state locally, then project typed answers. | [仓库](https://github.com/mateonunez/jod) · [网站](https://npmjs.com/package/@mateonunez/jod) |
| unicodeveloper/jevocks | Everyday Stocks Status with Jev | [仓库](https://github.com/unicodeveloper/jevocks) · [网站](https://jevinik.up.railway.app) |
| Bewinxed/jevgpt | A chatbot built on a model that cannot generate text (TypeSafe AI's Jev, driven autoregressively) | [仓库](https://github.com/Bewinxed/jevgpt) |
| Butochnikov/laravel-typesafe-jev | Unofficial Laravel integration for TypeSafe Jev AI with typed responses, async requests, scoped dependency injection, and testing fakes. | [仓库](https://github.com/Butochnikov/laravel-typesafe-jev) |
| DECRUX9812/openjev | Open, local, zero-cost reimplementation of the Jev decision layer for job postings | [仓库](https://github.com/DECRUX9812/openjev) |
| djangobeatty/textured | Textured — Sounds of words. A musical toy from Fluxus. | [仓库](https://github.com/djangobeatty/textured) · [网站](https://textured.fyi/) |
| EugeneBoondock/jevsql | SQL with natural-language predicates, powered by TypeSafe's Jev. Filter, rank, classify and score rows by meaning — batched, cached and cost-guarded. | [仓库](https://github.com/EugeneBoondock/jevsql) |
| Foadsf/jev-for-engineers | Eight minimal working examples of TypeSafe's Jev (a System One model) applied to mechanical and electrical engineering: CAD/CAE/CAM routing, FEM result triage, DFM screening, BOM alignment, hallucination-proof extraction. Zero dependencies. | [仓库](https://github.com/Foadsf/jev-for-engineers) |
| hellogumbo/should-ai-kill-us-all | We ask Jev, TypeSafe AI's System One model, whether AI should kill us all. Every ten minutes. Using the actual headlines. | [仓库](https://github.com/hellogumbo/should-ai-kill-us-all) · [网站](https://shouldaikillusall.com) |
| jamesward/zio-typesafe-ai | 原始数据未提供说明。 | [仓库](https://github.com/jamesward/zio-typesafe-ai) |
| justinhe16/trade-jev | Backtest Jev (TypeSafe) as a BUY/SELL/HOLD trader on NQ L10 order-book data | [仓库](https://github.com/justinhe16/trade-jev) |
| luantak/is-malicious | A codebase scanner that helps you to not run malicous code | [仓库](https://github.com/luantak/is-malicious) |
| maker-KK/todo-jev | ⚡ Ultra-fast, low-cost intelligent task classifier and 3-tier routing engine powered by TypeSafe Jev (System One) | [仓库](https://github.com/maker-KK/todo-jev) |
| reachjalil/jev-tree | Recursive Jev choice over a taxonomy. Select from more than 255 options without breaking TypeSafe Jev's choice cap. | [仓库](https://github.com/reachjalil/jev-tree) · [网站](https://reachjalil.github.io/jev-tree/) |
| reycn/smart-switch | Reimagined window switcher for macOS using frontier artificial intelligence. Predicted by TypeSafe's Jev model | [仓库](https://github.com/reycn/smart-switch) |
| sosopop/jev_stock | An experimental JEV-powered framework for forecasting short-term stock price direction from structured market data. | [仓库](https://github.com/sosopop/jev_stock) |
| sriganesh/jevibe-check | A live tone labeler for Bluesky posts and drafts, using TypeSafe's Jev API. | [仓库](https://github.com/sriganesh/jevibe-check) |
| tumf/jev-cli | Small dependency-free CLI for TypeSafe Jev | [仓库](https://github.com/tumf/jev-cli) · [网站](https://docs.typesafe.ai/introduction) |
| vmendes90/jev-shield | Privacy-first Chrome extension that semantically blocks native ads, sponsored feed cards, and video ads using TypeSafe Jev | [仓库](https://github.com/vmendes90/jev-shield) |
| wfzyx/von | The open-source System One decision model. Sub-15ms, non-autoregressive, local drop-in alternative to TypeSafe Jev. | [仓库](https://github.com/wfzyx/von) |
| anxkhn/JevPlaysPokemon | Jev plays Generation 3 Pokémon via Showdown and a real FireRed ROM. | [仓库](https://github.com/anxkhn/JevPlaysPokemon) |
| BunsDev/clarity-judge | Multi-axis writing quality checker powered by TypeSafe AI's Jev model. Separate named checks, each with its own verdict and confidence. | [仓库](https://github.com/BunsDev/clarity-judge) · [网站](https://judge.jev.works) |
| carlsonchik/judging-with-typesafe | Скилл для агентов Letta: суждения по критериям через TypeSafe System One (Jev) | [仓库](https://github.com/carlsonchik/judging-with-typesafe) |
| Charlyhno-eng/jev-document-classification | JEV Document Classification enables the rapid and cost-effective classification of text-based documents using AI, leveraging TypeSafe's "System One" model. | [仓库](https://github.com/Charlyhno-eng/jev-document-classification) |
| DeepBlueDynamics/typesafe-arena | A playground for TypeSafeAI's Jev Model | [仓库](https://github.com/DeepBlueDynamics/typesafe-arena) |
| erhanmeydan/jev2048 | TypeSafe'in Jev karar modeli gerçek bir online 2048 sitesinde oynuyor — hamle başına tek API çağrısı, tek anahtar. | [仓库](https://github.com/erhanmeydan/jev2048) |
| fernandoviac/judged | Focused terminal interface for typed judgments from TypeSafe System One. | [仓库](https://github.com/fernandoviac/judged) |
| franknoh/OpenJev | 原始数据未提供说明。 | [仓库](https://github.com/franknoh/OpenJev) |
| GenieRobot/typesafe-ai-rails | 原始数据未提供说明。 | [仓库](https://github.com/GenieRobot/typesafe-ai-rails) |
| gtaras7/typesafe-jev | Screen a folder of CVs with the TypeSafe Jev decision model: typed judgments, an editable policy, free re-scoring. | [仓库](https://github.com/gtaras7/typesafe-jev) |
| keltokhy/jlink | Record linkage for economists: write the match rule in plain English, get a probability per pair, audit it, cite it. Python, CLI, Stata and R. | [仓库](https://github.com/keltokhy/jlink) |
| kesku/jev-freeform | An observable raw-character chat experiment powered entirely by TypeSafe Jev Choice | [仓库](https://github.com/kesku/jev-freeform) |
| kitze/pagegrade | Grade page sections for clarity, writing and on-page SEO. WXT + TypeSafe AI Jev. | [仓库](https://github.com/kitze/pagegrade) |
| lbotinelly/jev-little-airways | A show-and-tell capability study for Jev, TypeSafe's System One decision model. | [仓库](https://github.com/lbotinelly/jev-little-airways) |
| Little-Planet-Labs/jev-playground | A small Next.js app for experimenting with TypeSafe AI's Jev model (System One) | [仓库](https://github.com/Little-Planet-Labs/jev-playground) · [网站](https://jev-playground-zeta.vercel.app) |
| markjaquith/typesafe-ai-playground | A playground for experiments around Jev, TypeSafe's System One model. | [仓库](https://github.com/markjaquith/typesafe-ai-playground) |
| Nasrallah-AL/jev-cli | Command-line tool for TypeSafe's Jev AI model | [仓库](https://github.com/Nasrallah-AL/jev-cli) · [网站](https://jevcli.vectorz.app/) |
| qddegtya/qualm | Typed decisions from a System One model. An uncertain answer is a different type from a confident one — and the compiler makes you handle it. | [仓库](https://github.com/qddegtya/qualm) · [网站](https://github.com/qddegtya/qualm#readme) |
| Red5d/jev-cvss | Fast CVSS scoring from vulnerability descriptions using Typesafe Jev | [仓库](https://github.com/Red5d/jev-cvss) |
| SamuelSacco/jev-exploration | Jev (TypeSafe) exploratory thread: claim audit, live demos, and runnable code | [仓库](https://github.com/SamuelSacco/jev-exploration) |
| soderlind/ai-provider-for-jev | Connect WordPress to TypeSafe's Jev System One model for structured decisions (choice, score, noul). | [仓库](https://github.com/soderlind/ai-provider-for-jev) |
| solhosty/last-train-jev | A small detective escape room built with TypeSafe Jev, React, and Express. | [仓库](https://github.com/solhosty/last-train-jev) |
| StefanoITA/ts-jev-cost-calculator | Unofficial CLI + Python estimator of tokens, cost and context limits for TypeSafe (System One / Jev) API requests. Not affiliated with TypeSafe. | [仓库](https://github.com/StefanoITA/ts-jev-cost-calculator) |
| tylerjharden/harden-jev-decides | JEV picks which stream idea becomes the live MVP. TypeSafe System One decision board. | [仓库](https://github.com/tylerjharden/harden-jev-decides) |
| youshinh/md-memo | A zero-latency, local-first Markdown scratchpad with offline AI (Ollama/vLLM) and autonomous IME control. Built with Go and OS-native webviews. | [仓库](https://github.com/youshinh/md-memo) · [网站](https://youshinh.github.io/md-memo/) |
| 0xnairb/jevpot | AI-powered jackpot number predictor and intelligence oracle built with TypeSafe System One (Jev) | [仓库](https://github.com/0xnairb/jevpot) |
| 0xSarnavo/potpie-doc-parser | Ask the Potpie docs a question, get the exact paragraph that answers it. Extractive search powered by Jev (TypeSafe System One) — no LLM, no embeddings, nothing generated. | [仓库](https://github.com/0xSarnavo/potpie-doc-parser) |
| afanjul/jev-llm | Fake autoregressive language model powered by TypeSafe Jev | [仓库](https://github.com/afanjul/jev-llm) |
| akash-kamat/system-one-gemma | Open-source Jev-style System One decision model. Gemma 3 270M with a scoring head — fast, calibrated decisions in a single forward pass. No text generation. Inspired by TypeSafe.ai's Jev. | [仓库](https://github.com/akash-kamat/system-one-gemma) |
| AkashPriyadarshii/jev-git | Sub-second Git pre-commit & pre-push semantic reflex gate powered by TypeSafe AI Jev | [仓库](https://github.com/AkashPriyadarshii/jev-git) · [网站](https://typesafe.ai) |
| allay-team/openjev | 原始数据未提供说明。 | [仓库](https://github.com/allay-team/openjev) |
| amithkk/jev-experiments | Experiments with Typesafe's Jev | [仓库](https://github.com/amithkk/jev-experiments) |
| aoi-yoneda/haikyuBattleJev | Jev (TypeSafe AI) が打者を判断する配球バトル野球シミュレーション — 9回制・パワプロ風 | [仓库](https://github.com/aoi-yoneda/haikyuBattleJev) |
| awun8191/jev-resume-analyzer | CV diagnostics and job alignment with TypeSafe Jev, React and FastAPI | [仓库](https://github.com/awun8191/jev-resume-analyzer) |
| Ayush0054/metis | Metis: automatic GitHub issue triage powered by TypeSafe AI Jev. A reusable GitHub Action. | [仓库](https://github.com/Ayush0054/metis) |
| BradMyrick/Jev-Rug-Checker | a multi-chain EVM token screener built on Jev by @TypeSafe AI | [仓库](https://github.com/BradMyrick/Jev-Rug-Checker) |
| Bud-ro/jev-demos | Demos to test the effectiveness of TypeSafe's "Jev" System One Model | [仓库](https://github.com/Bud-ro/jev-demos) |
| cardotrejos/jev-ad-preflight | Typesafe/Jev public X demo | [仓库](https://github.com/cardotrejos/jev-ad-preflight) |
| cardotrejos/jev-should-i-apply | Typesafe/Jev public X demo | [仓库](https://github.com/cardotrejos/jev-should-i-apply) |
| cardotrejos/jev-user-jury | Typesafe/Jev public X demo | [仓库](https://github.com/cardotrejos/jev-user-jury) |
| chrisXchen/typesafe-cookie-consent | Chrome extension that reads every cookie banner and popup like a person and clicks the honest button. Judged by TypeSafe's Jev. BYOK, no backend. | [仓库](https://github.com/chrisXchen/typesafe-cookie-consent) |
| colinmcdermott/emoji-jev | Emoji autocomplete at the speed of typing. TypeSafe AI Jev on a Whop-hosted TanStack Start app. | [仓库](https://github.com/colinmcdermott/emoji-jev) |
| derinworks/penr-oz-jev-syslog-analyzer | An asyncio daemon that tails journald or syslog and asks Jev, for each event, which subsystem it belongs to, how severe it is, and whether it's noise. Plain code then ignores the event, alerts on it, or escalates it to a human when confidence is low. | [仓库](https://github.com/derinworks/penr-oz-jev-syslog-analyzer) |
| distributedlabs/magic-8-ball | A TypeSafe Jev-powered Magic 8 Ball | [仓库](https://github.com/distributedlabs/magic-8-ball) |
| djascorp/jev-trade | Trading project using JEV by TypeSafe AI | [仓库](https://github.com/djascorp/jev-trade) |
| dnakhoa/jev-deferred-crispification | Position paper: the Hidden-Markov and fuzzy primitives missing from TypeSafe AI's Jev and System-One decision models. Two lemmas, one principle (Deferred Crispification), one architecture (BSF-S1). | [仓库](https://github.com/dnakhoa/jev-deferred-crispification) |
| DomMonte/n8n-nodes-typesafe-ai | n8n community node for the TypeSafe AI System One API — typed yes/no, choice and score questions with calibrated probabilities | [仓库](https://github.com/DomMonte/n8n-nodes-typesafe-ai) · [网站](https://docs.typesafe.ai) |
| edsonayllon/jev-prototype | Feed triage prototype: TypeSafe Jev judgments tag posts by type, sentiment, and attention | [仓库](https://github.com/edsonayllon/jev-prototype) |
| EdytaKucharska/ticket-quest | Playful ticket triage that shows how TypeSafe Jev's typed, probability-backed decisions compare with prompting an LLM. Cost of Delay ranking, certainty-gated routing, bring-your-own-key LLM race. | [仓库](https://github.com/EdytaKucharska/ticket-quest) · [网站](https://ticket-quest-three.vercel.app) |
| farukkavlak/vocabboost | Look up a word from the subtitles and see what it means in that line, without leaving the video. | [仓库](https://github.com/farukkavlak/vocabboost) |
| gpazo/jev-vphone-cli | Jev from Typesafe.ai + vphone-cli | [仓库](https://github.com/gpazo/jev-vphone-cli) |
| gzd2032/typesafe-ai-test | a test repo for typesafe.ai | [仓库](https://github.com/gzd2032/typesafe-ai-test) |
| hasura/jev-test-datasets | Public repo containing generated synthetic data to test jev from typesafe | [仓库](https://github.com/hasura/jev-test-datasets) |
| hemanth/pkg-gate | Pre-install security gate for npm lifecycle scripts using TypeSafe System One. | [仓库](https://github.com/hemanth/pkg-gate) · [网站](https://hemanth.github.io/pkg-gate/) |
| hide-G/magi-system-on-jev | MAGI system (Neon Genesis Evangelion) recreated with Jev, TypeSafe AI's System One model. 3 sages deliberate your question. | [仓库](https://github.com/hide-G/magi-system-on-jev) |
| JacobLinCool/jev-paper-judge | Feedback on your paper in seconds. | [仓库](https://github.com/JacobLinCool/jev-paper-judge) · [网站](https://jev-paper-judge.jacob.workers.dev) |
| jagenaujagenau/ground-truth | Ground News style bias check for the article in your current tab. | [仓库](https://github.com/jagenaujagenau/ground-truth) · [网站](https://groundtruth.click/) |
| jdhornsby/typesafe-jev | 原始数据未提供说明。 | [仓库](https://github.com/jdhornsby/typesafe-jev) |
| jflam/jev1 | Jev (TypeSafe System One) proof of concept: smart-home assistant demo | [仓库](https://github.com/jflam/jev1) |
| JordiParraCrespo/typesafe-ai-trading-showcase | 原始数据未提供说明。 | [仓库](https://github.com/JordiParraCrespo/typesafe-ai-trading-showcase) · [网站](https://typesafe-ai-trading-showcase.vercel.app) |
| joshbla/jev-plays-2048 | A visible 2048 experiment powered by TypeSafe | [仓库](https://github.com/joshbla/jev-plays-2048) |
| juanegido/jev-pr-judge | Typed verdicts on pull requests with TypeSafe System One (Jev): one parallel call, policy in code, usable as a GitHub Action | [仓库](https://github.com/juanegido/jev-pr-judge) · [网站](https://jev-pr-judge.vercel.app) |
| jujumilk3/jev-calibration-audit | Independent API-only calibration audit of TypeSafe AI's Jev decision model | [仓库](https://github.com/jujumilk3/jev-calibration-audit) |
| JustinRoderick/jev-test | Testing typesafe.ai new model Jev | [仓库](https://github.com/JustinRoderick/jev-test) |
| kaijia323/dsh-plugin-jev | TypeSafe Jev (System One decision model) as a native jev_decide tool plugin for DeepSeek Harness | [仓库](https://github.com/kaijia323/dsh-plugin-jev) |
| kamesan1577/re-heitan | X（旧Twitter）のタイムラインから誹謗中傷を取り除く Chrome 拡張。判定を TypeSafe の System One モデル Jev で行う。 | [仓库](https://github.com/kamesan1577/re-heitan) |
| kenhuangus/jev-usecases | Production TypeSafe Jev (System One) use-case harnesses with confidence-gated decision logic | [仓库](https://github.com/kenhuangus/jev-usecases) |
| kevin9327/jev-code | JevCode: TypeSafe Jev diff merge gate. merge / comment / block in code. | [仓库](https://github.com/kevin9327/jev-code) |
| kspviswa/chakravyuha-jev | Chakravyuha — a polar ring-maze where every move is a Jev (TypeSafe System One) decision. A fun experiment: the model picks each move, the walk grades it green or red, and the history page asks whether its confidence score can be trusted. BYOK, no build step. | [仓库](https://github.com/kspviswa/chakravyuha-jev) |
| kylemclaren/jevql | Semantic SQL for vanilla Postgres. Powered by Jev | [仓库](https://github.com/kylemclaren/jevql) · [网站](https://jevql.fly.dev/) |
| lainollll/lm-studio-typesafe-chat | Tkinter chat and live visual narration with LM Studio, TypeSafe Jev, and Chatterbox TTS | [仓库](https://github.com/lainollll/lm-studio-typesafe-chat) |
| lautaroalejo02/TypeSafe-Test-Project | This is just for testing TypeSafe AI | [仓库](https://github.com/lautaroalejo02/TypeSafe-Test-Project) · [网站](https://jev-pilot-proxy.vercel.app) |
| legacybridge-tech/pi-typesafe-jev | A pi extension that exposes TypeSafe (Jev, System One) judgments as five pi tools, so a model can make narrow semantic judgments while your code and your users keep control of thresholds, weights, and actions. | [仓库](https://github.com/legacybridge-tech/pi-typesafe-jev) |
| lhotwll217/jev-cli | JSON-in, typed-decisions-out CLI for the TypeSafe System One API | [仓库](https://github.com/lhotwll217/jev-cli) |
| LingXuanYin/jev-chat | Jev 聊天机：一个「只选不写」的聊天机——每个回复由逐词选择拼装，词典+分级索引+输入法式联想，由真实 Jev（TypeSafe System One）驱动。非官方实验，与 TypeSafe AI 无关联。 | [仓库](https://github.com/LingXuanYin/jev-chat) · [网站](https://cohub.live/ncyg191125/jev-chat/w/jev-chat) |
| linw1995/dify-plugin-typesafe-ai | 原始数据未提供说明。 | [仓库](https://github.com/linw1995/dify-plugin-typesafe-ai) |
| m0rphtail/triagedy | Alert triage as a UNIX filter: JSONL security alerts in, typed decisions out. Runs on TypeSafe Jev or a local model; policy routing stays in code. | [仓库](https://github.com/m0rphtail/triagedy) |
| MachineLearning-Nerd/jev-tetris | A visual TypeSafe demo where Jev chooses verified Tetris placements. | [仓库](https://github.com/MachineLearning-Nerd/jev-tetris) |
| mahan-ym/cleaner | An experiment with JEV from typesafe.ai to clean up my useless data. | [仓库](https://github.com/mahan-ym/cleaner) |
| makefinks/jev-feed-filter | Smart, dynamic AI filtering for X and YouTube feeds using Jev | [仓库](https://github.com/makefinks/jev-feed-filter) |
| malDuffin/typesafe-3d-chess | 3D chess powered by TypeSafe AI (Jev). AI vs AI by default, or play either side. Multiple difficulty levels. | [仓库](https://github.com/malDuffin/typesafe-3d-chess) |
| marcelomar21/demo-tetris-jev | Tetris arcade jogado pelo Jev da TypeSafe AI, com decisões em JSON, antecipação de jogadas e custo por partida. | [仓库](https://github.com/marcelomar21/demo-tetris-jev) |
| markfive-proto/typesafe-vs-deepseek | TypeSafe (Jev) vs DeepSeek-flash: side-by-side speed/token/cost/accuracy comparison across invoice extraction, email classification, and reranking | [仓库](https://github.com/markfive-proto/typesafe-vs-deepseek) · [网站](https://typesafe-vs-deepseek.vercel.app) |
| markmdev/hundred-faces | A wall of a hundred invented people who react while you type, on TypeSafe AI's Jev | [仓库](https://github.com/markmdev/hundred-faces) |
| mattn/sqlite3-jev | SQLite extension that calls TypeSafe Jev (or tensai serve) from SQL | [仓库](https://github.com/mattn/sqlite3-jev) |
| MichitoSugawara/jev-lint | Semantic lint CLI powered by TypeSafe Jev | [仓库](https://github.com/MichitoSugawara/jev-lint) |
| miounet11/jevcode | JevCode — Jev (TypeSafe System One) 技术解决方案与最佳实践 · https://www.jevcode.ai | [仓库](https://github.com/miounet11/jevcode) · [网站](https://www.jevcode.ai) |
| model-clis/jev | Typed judgment CLI for the Jev model (TypeSafe System One): state + questions in, calibrated answers and exit codes out | [仓库](https://github.com/model-clis/jev) |
| n3ndor/n8n-nodes-typesafe-jev | n8n community node for TypeSafe Jev structured AI decisions | [仓库](https://github.com/n3ndor/n8n-nodes-typesafe-jev) |
| nardinmarcus/pi-jev-typesafe | TypeSafe Jev (System One judgments) for Pi: zero-dependency jev_ask tool with question linting, model discovery, and budget caps | [仓库](https://github.com/nardinmarcus/pi-jev-typesafe) |
| ndolinschi/cartshield | CartShield — SMB checkout fraud disposition via TypeSafe Jev | [仓库](https://github.com/ndolinschi/cartshield) · [网站](https://cartshield.vercel.app) |
| ndolinschi/hiresignal | HireSignal — resume first-pass fit+interview via TypeSafe Jev | [仓库](https://github.com/ndolinschi/hiresignal) · [网站](https://hiresignal-opal.vercel.app) |
| ndolinschi/jevplay | TypeSafe Jev playground — custom Choice/Score/Noul builder with live distributions | [仓库](https://github.com/ndolinschi/jevplay) · [网站](https://jevplay.vercel.app) |
| ndolinschi/lanebreak | LaneBreak — support ticket priority+routing via TypeSafe Jev | [仓库](https://github.com/ndolinschi/lanebreak) · [网站](https://lanebreak.vercel.app) |
| ndolinschi/pulselane | PulseLane — clinic triage decisions via TypeSafe Jev | [仓库](https://github.com/ndolinschi/pulselane) · [网站](https://pulselane-topaz.vercel.app) |
| ndolinschi/trustgate | TrustGate — indie media T&S gate via TypeSafe Jev | [仓库](https://github.com/ndolinschi/trustgate) · [网站](https://trustgate-mu.vercel.app) |
| noetion/dsh-jev | DSH bundle that registers jev_ask for TypeSafe Jev noul, choice, and score answers. | [仓库](https://github.com/noetion/dsh-jev) · [网站](https://github.com/noetion/dsh-jev) |
| nsillik/jevvin-off | Prototyping against TypeSafe's Jev System One API: a one-ticket quickstart and a Bluesky Jetstream firehose demo. | [仓库](https://github.com/nsillik/jevvin-off) |
| Obrais-cloud/ticket-rerank | FastAPI service that reranks support tickets by urgency using TypeSafe (Jev / System One) | [仓库](https://github.com/Obrais-cloud/ticket-rerank) |
| Obrais-cloud/typesafe-translate | Escribe lenguaje natural y un LLM local lo compila a variables de TypeSafe (state + questions) y las ejecuta (Jev / System One) | [仓库](https://github.com/Obrais-cloud/typesafe-translate) |
| oceanByte/tsai-cli | Unofficial CLI for the TypeSafe AI System One API. | [仓库](https://github.com/oceanByte/tsai-cli) |
| ojusave/beat-jev | A penalty shootout powered by Render Workflows, TypeSafe Jev, and Render Postgres. Python and TypeScript examples. | [仓库](https://github.com/ojusave/beat-jev) |
| Olli0103/openclaw-typesafe-ai | Optional typed TypeSafe AI Jev decisions for OpenClaw, with SecretRef credentials and strict API validation. | [仓库](https://github.com/Olli0103/openclaw-typesafe-ai) |
| ozzy2438/apply-os | Apply OS — Personal career decision engine powered by TypeSafe AI (Jev). Ranks job postings, drafts applications, and automates the pipeline with typed, calibrated decisions. Agency-ready build spec included. | [仓库](https://github.com/ozzy2438/apply-os) |
| ozzy2438/personal-decision-inbox | Agency-ready build prompt for a Personal Decision Inbox powered by TypeSafe AI (Jev). Full end-to-end spec: architecture, UI, integrations, deployment. | [仓库](https://github.com/ozzy2438/personal-decision-inbox) |
| Para-FR/casse-brique-typesafe | A Next.js brick breaker whose paddle is controlled in real time by TypeSafe AI's Jev model. Built with Claude Code. | [仓库](https://github.com/Para-FR/casse-brique-typesafe) |
| pekth/draftpulse | Experimental: live X draft viral scorer powered by TypeSafe Jev | [仓库](https://github.com/pekth/draftpulse) |
| phuthuycoding/jev-audit | AI-powered pre-commit auditor backed by TypeSafe System One (Jev) — blocks secrets, vulns & low-quality code in ~300ms. 79-case test corpus at 100% accuracy. | [仓库](https://github.com/phuthuycoding/jev-audit) |
| Pimmetjeoss/tribe-crm-jev | TypeSafe Jev-powered lead intake and live CRM judgment demo for Tribe CRM | [仓库](https://github.com/Pimmetjeoss/tribe-crm-jev) |
| piyush-infocusp/openjev | 原始数据未提供说明。 | [仓库](https://github.com/piyush-infocusp/openjev) |
| piyush97/focus-tube | Distraction-free YouTube learning feed powered by TypeSafe AI's Jev System One model | [仓库](https://github.com/piyush97/focus-tube) |
| RajKKapadia/youtube-typesafe-ai-demo | 原始数据未提供说明。 | [仓库](https://github.com/RajKKapadia/youtube-typesafe-ai-demo) |
| recodelabs/duckdb-jev | Natural-language WHERE clauses for DuckDB, powered by TypeSafe's Jev | [仓库](https://github.com/recodelabs/duckdb-jev) |
| robzolkos/omarchy-issue-classifier | Classify the Omarchy issue backlog with Jev, TypeSafe's System One model. Ten typed questions per issue in one request, for a hundredth of a cent each. | [仓库](https://github.com/robzolkos/omarchy-issue-classifier) |
| rolottr/x-jev-classifier | Chrome extension that stamps every X post with a type badge — alpha, shitpost, AI slop, bait — judged by Jev from Typesafe | [仓库](https://github.com/rolottr/x-jev-classifier) |
| sandra-arato/icon-matcher | Match a UI section title to a Hugeicons icon using TypeSafe.ai's Choice primitive — no lexical/keyword search. | [仓库](https://github.com/sandra-arato/icon-matcher) |
| Senzo41/typesafe-ai-usecases | 原始数据未提供说明。 | [仓库](https://github.com/Senzo41/typesafe-ai-usecases) |
| shishiv/pi-jeev | A bounded TypeSafe Jev decision tool for Pi | [仓库](https://github.com/shishiv/pi-jeev) |
| shivam2003-dev/typesafe-triage-guard | Three composable judgment pipelines on TypeSafe's Jev: support-ticket triage, observability alert triage, and a deploy-risk gate. | [仓库](https://github.com/shivam2003-dev/typesafe-triage-guard) |
| shunta-furukawa/jev-tick-lab | A forward-only experiment: Jev (TypeSafe System One) making one-second trading judgments on bitbank, logged for calibration analysis. | [仓库](https://github.com/shunta-furukawa/jev-tick-lab) |
| ShupingR/scam-shield | Scam text message filter powered by TypeSafe's Jev model | [仓库](https://github.com/ShupingR/scam-shield) · [网站](https://scam-shield-seven-ecru.vercel.app) |
| sio-funmatsu/fmjev | 原始数据未提供说明。 | [仓库](https://github.com/sio-funmatsu/fmjev) |
| spivi/cloudforge-jev | Sidecar: grade a cloudforge student writeup with TypeSafe Jev. Not part of the OSS product. | [仓库](https://github.com/spivi/cloudforge-jev) |
| Spykoninho/trading-bot-jev | Crypto trading bot on Binance testnet using TypeSafe (Jev) to judge news | [仓库](https://github.com/Spykoninho/trading-bot-jev) |
| STRML/omp-jevens-classifier | Jev-powered model-judged permission gate for OMP (TypeSafe System One) | [仓库](https://github.com/STRML/omp-jevens-classifier) |
| sueszli/qwen27b-jev | multiple-choice questions for Qwen3.8-27B, read from logits | [仓库](https://github.com/sueszli/qwen27b-jev) |
| sxoni/typesafe-ai-clone | 原始数据未提供说明。 | [仓库](https://github.com/sxoni/typesafe-ai-clone) |
| Tatuck/jev-boe-demo | Daily demo applying TypeSafe's Jev model to Spain's official gazette (BOE). | [仓库](https://github.com/Tatuck/jev-boe-demo) · [网站](https://tatuck.github.io/jev-boe-demo/) |
| Tepes99/openjev-lite | My take on the latest hype with comparisons to cheaper traditional options for this kind of task. Quick poc vibed with my local ai rig | [仓库](https://github.com/Tepes99/openjev-lite) |
| TheGali/terrarium | A sandbox where a TypeSafe System One model presses the controls of a small creature. Code runs the world. | [仓库](https://github.com/TheGali/terrarium) |
| TholeG/typesafe-chess | Chess where both players are TypeSafe's Jev model: every move is a typed Choice decision | [仓库](https://github.com/TholeG/typesafe-chess) |
| TKY-27/JevSlop | Jevによるnote記事のAI Slop判定サイト | [仓库](https://github.com/TKY-27/JevSlop) · [网站](https://jevslop.pages.dev/) |
| ufec/jev-block-android-ad | JevNoiseGate filters unwanted notifications and SMS on Android. Rather than   matching keywords, an LLM decides what's noise — and only what it explicitly   flags is blocked. Verification codes are matched on-device and never uploaded;   anything uncertain passes through. | [仓库](https://github.com/ufec/jev-block-android-ad) |
| vishivishvish/jev-typesafeai | 原始数据未提供说明。 | [仓库](https://github.com/vishivishvish/jev-typesafeai) |
| vkpdeveloper/mrsecret | Mr. Secret — blurs secrets & PII on any page using TypeSafe AI Jev | [仓库](https://github.com/vkpdeveloper/mrsecret) |
| willprout/magic-8-ball | A beautifully minimal Magic 8 Ball powered by Jev from TypeSafe. Twenty classic answers, one fast AI judgment. | [仓库](https://github.com/willprout/magic-8-ball) |
| Wizhill05/typesafe-image-diffusion | Diffusion-style pixel art out of a general classifier (TypeSafe Jev): 256 parallel pixel questions + refinement passes | [仓库](https://github.com/Wizhill05/typesafe-image-diffusion) |
| ximhear/jev-kr-name-age | 이름으로 나이대를 맞히는 React 웹 (TypeSafe Jev) | [仓库](https://github.com/ximhear/jev-kr-name-age) |
| zefir1990/openjev-experiments | Openjev experiments | [仓库](https://github.com/zefir1990/openjev-experiments) · [网站](https://demensdeum.com) |
| zsoXi/FeedGate | Precision-first Chrome feed filter (v2.1.0) using TypeSafe Jev judgments: promotional posts are kept unless independently strong spam or ad evidence appears. Reversible cosmetic filtering, zero runtime dependencies. | [仓库](https://github.com/zsoXi/FeedGate) |

<a id="category-3"></a>

## Integrations

| 项目或资源 | 原始说明 | 链接 |
| --- | --- | --- |
| Vercel AI Gateway 上的 Jev | typesafe-ai/jev · 部分用户可绕等待列表 | [网站](https://vercel.com/ai-gateway/models/jev) |
| NiazMorshed2007/jev-review | Local-first MCP plugin for continuous software-quality review by AI coding agents, powered by Jev. | [仓库](https://github.com/NiazMorshed2007/jev-review) |
| jkudish/jev-mcp | Proof of concept MCP for Typesafe's new Jev AI model | [仓库](https://github.com/jkudish/jev-mcp) |
| itsmostafa/typesafe-mcp | mcp connector to give your AI agent direct access to typesafe ai's jev model | [仓库](https://github.com/itsmostafa/typesafe-mcp) |
| iammrduncan/typesafe-ai-benchmark | This is a LLM Gateway that mimics typesafe ai structured output. Like an imposter Jev. | [仓库](https://github.com/iammrduncan/typesafe-ai-benchmark) · [网站](https://hackersintheloop.org/) |
| 0xNatoshi/jev-codex-router | Per-turn model & reasoning routing for Codex, driven by Jev (TypeSafe System One): picks the model, thinking depth and speed mode for every turn. | [仓库](https://github.com/0xNatoshi/jev-codex-router) |
| nidhi-singh02/agent-router | CLI that picks Cursor, Claude Code, Codex, or OpenCode + model/effort for a task, then launches it. Powered by Jev and Herdr | [仓库](https://github.com/nidhi-singh02/agent-router) |
| wundercorp/loki | The agent that evolves with you 𖤍 | [仓库](https://github.com/wundercorp/loki) · [网站](https://loki.computer) |
| Ying-Kai-Liao/jev-browser | Browser automation where an LLM plans and Jev (Typesafe System One) decides. Library, CLI and MCP server. | [仓库](https://github.com/Ying-Kai-Liao/jev-browser) |
| blakestone-x/jev-mcp | MCP server for TypeSafe Jev: typed classify, score, check, match and screen for any agent, with confidence on every answer | [仓库](https://github.com/blakestone-x/jev-mcp) |
| DECRUX9812/typesafe-skill-router | TypeSafe (Jev) skill routing for Hermes Agent: names the one skill worth loading, before the model call. Opt-in, stdlib only, ~$0.001 per routed turn. | [仓库](https://github.com/DECRUX9812/typesafe-skill-router) |
| mejiasd3v/pi-jev-router | Automatic model routing for Pi using TypeSafe's Jev through Vercel AI Gateway | [仓库](https://github.com/mejiasd3v/pi-jev-router) |
| GodsBoy/jev-agent-skill-router | Typed, confidence-aware agent skill routing with TypeSafe Jev. | [仓库](https://github.com/GodsBoy/jev-agent-skill-router) |
| Brainwires/jevwire | Jev decision layer for agents: MCP server, embeddable DecisionModel library, and an escalate-only Claude Code plugin (TypeSafe AI's Jev) | [仓库](https://github.com/Brainwires/jevwire) |
| andrelandgraf/safer-with-jev | Neon Function proxy for the Neon AI Gateway with TypeSafe Jev routing. | [仓库](https://github.com/andrelandgraf/safer-with-jev) |
| docxology/daf-jev | daf-jev: composable Python toolkit for TypeSafe's Jev (System One) decision API — question builders, confidence gates, evaluator, calibration, CLI, MCP server, agent skill | [仓库](https://github.com/docxology/daf-jev) |
| harshil1712/slidepilot | Voice-driven semantic auto-advance for Slidev, powered by Cloudflare Agents and TypeSafe AI Jev | [仓库](https://github.com/harshil1712/slidepilot) |
| raihankhan-rk/diffjury | DiffJury — TypeSafe Jev PR risk router + code review coach | [仓库](https://github.com/raihankhan-rk/diffjury) |
| AkashPriyadarshii/jev-seo | 100% free ₹0 agent-first SEO & GEO CLI suite and MCP server in Rust replacing Semrush and OpenSEO via DuckDuckGo and TypeSafe Jev System One | [仓库](https://github.com/AkashPriyadarshii/jev-seo) |
| caiovicentino/jev-shield | Semantic MCP firewall powered by Jev — screens every tool call, tool result, and tool description with calibrated System One verification. 94% block recall, 0 false positives, ~$0.00002/check. | [仓库](https://github.com/caiovicentino/jev-shield) |
| jerryfane/omp-jev-compaction | Verbatim Jev-scored context reduction for omp, over TypeSafe or OpenRouter | [仓库](https://github.com/jerryfane/omp-jev-compaction) |
| keltokhy/jgrep | grep, but the pattern is a description. Filters lines by meaning with TypeSafe's Jev decision model: ~200 ms and a thousandth of a cent per line. | [仓库](https://github.com/keltokhy/jgrep) |
| lomeshdutta/skill-router | Tell Claude Code which installed skill a session needs, using Jev (TypeSafe AI) for the decision and skills.sh for discovery. | [仓库](https://github.com/lomeshdutta/skill-router) |
| molis-ai/jev-workbench | Build versioned judgment functions on TypeSafe's Jev once, then call the same published version from your backend over HTTP and from coding agents over MCP. The vendor key stays on your machine. | [仓库](https://github.com/molis-ai/jev-workbench) |
| MrJev/awesome-jev | A curated list of projects, integrations, and resources for Jev, TypeSafe AI's System One model.  | [仓库](https://github.com/MrJev/awesome-jev) · [网站](https://mrjev.com) |
| qiz029/dscode | A DeepSeek coding agent harness: persistent shell, Ultra subagents, auto approval, Chrome MCP and session telemetry | [仓库](https://github.com/qiz029/dscode) · [网站](https://www.npmjs.com/package/@toddzheng024/dscode) |
| rajdhakad9826/routeKit | Agent-native LLM model router built with JEV by TypeSafe.ai. Dynamically selects the most suitable model based on task complexity, reasoning requirements, and tool usage. | [仓库](https://github.com/rajdhakad9826/routeKit) |
| rashedInt32/jev-mcp | MCP server exposing TypeSafe Jev as typed, calibrated judgment tools: classify, score, check, batched ask. Ships as a Claude Code plugin. | [仓库](https://github.com/rashedInt32/jev-mcp) · [网站](https://www.npmjs.com/package/jev-mcp) |
| WiktorB2004/llama-index-jev | LlamaIndex reranker + router powered by TypeSafe Jev — typed scores/choices, cheaper than LLM-as-judge. | [仓库](https://github.com/WiktorB2004/llama-index-jev) · [网站](https://github.com/WiktorB2004/llama-index-jev) |
| abhishekashokvkumar/jev-mcp-dispatcher | Natural-language MCP tool dispatcher powered entirely by TypeSafe's Jev — no general-purpose LLM. Discovers a simple MCP server's tool signatures at runtime and uses Jev's typed primitives (Choice/Noul) to pick the right tool and extract its arguments straight out of the sentence. | [仓库](https://github.com/abhishekashokvkumar/jev-mcp-dispatcher) |
| AkashPriyadarshii/jev-scout | Zero-hallucination open-source repo and crate scout powered by TypeSafe AI Jev System One scoring | [仓库](https://github.com/AkashPriyadarshii/jev-scout) · [网站](https://github.com/AkashPriyadarshii/jev-scout) |
| bestagentkits/jev-skillful | Per-prompt capability router for coding agents: resolves installed skills, MCP servers, agents and commands against your prompt via TypeSafe Jev, and measures whether the injection actually helps. | [仓库](https://github.com/bestagentkits/jev-skillful) |
| BYK/jev-mcp | An eval-first MCP server for TypeSafe's Jev, a System One model that returns typed judgments (noul, choice, score) with probabilities instead of generated text. | [仓库](https://github.com/BYK/jev-mcp) |
| daftAI2026/awesome-jev | TypeSafe System One / Jev community directory — GitHub projects & posts around typed decisions (typesafe.ai) | [仓库](https://github.com/daftAI2026/awesome-jev) · [网站](https://awesomejev.cc) |
| GhrezaKh74/JevTicktRouter | A .NET 10 and React 19 application for fast, structured AI-powered ticket triage using TypeSafe Jev. | [仓库](https://github.com/GhrezaKh74/JevTicktRouter) |
| greenyamao/Antigravity-mcp-semantic-search-with-TypeSafeAi | Fast semantic code search & diff sanity auditor for AI coding assistants (Antigravity, Cursor, Claude Code) powered by TypeSafe System One. | [仓库](https://github.com/greenyamao/Antigravity-mcp-semantic-search-with-TypeSafeAi) |
| himomohi/aside-jev | Aside agents decide with TypeSafe Jev (System One: Choice/Score/Noul). Not a Cua binding — Jev is the model, Aside is the browser runtime. | [仓库](https://github.com/himomohi/aside-jev) |
| ndolinschi/toolgate | Agent tool/MCP call gate — allow / ask_human / deny via TypeSafe Jev | [仓库](https://github.com/ndolinschi/toolgate) · [网站](https://toolgate.vercel.app) |
| Obrais-cloud/typesafe-mcp | MCP server exposing TypeSafe (Jev/System One) to the fleet: judge, rerank, systemone | [仓库](https://github.com/Obrais-cloud/typesafe-mcp) |
| Ravinder82/jev-flash-router | open-sourced jev-flash-router: an MCP server for TypeSafe's new Jev model.  AI coding agents waste hundreds of reasoning tokens just deciding which file to edit, which route to pick, or whether a diff breaks tests.  Jev evaluates state and outputs calibrated probabilities.  Works with Cursor, Windsurf, & Claude Code | [仓库](https://github.com/Ravinder82/jev-flash-router) |
| simota/tenbin | MCP server and agent skill for the TypeSafe AI System One API (Jev): decompose a judgment into Choice / Score / Noul questions, lint them, measure on labelled data, and put calibrated thresholds in code | [仓库](https://github.com/simota/tenbin) |
| tonyzdev/PiJ | A terminal coding agent with Jev in the loop: skill selection, code ranking, and failure triage. | [仓库](https://github.com/tonyzdev/PiJ) |
| Wang-auspicious/codex-jev-compaction | Jev-powered context curation for Codex. Build compact, traceable handoff context through native plugins and skills. | [仓库](https://github.com/Wang-auspicious/codex-jev-compaction) |
| affirmitv/bitrate-advisor | Live-stream encoder settings from telemetry and history: TypeSafe's Jev decision model inside a deterministic safety envelope. Deno, Node, edge runtimes. | [仓库](https://github.com/affirmitv/bitrate-advisor) |
| altregubov/jev-antigravity-mcp | 原始数据未提供说明。 | [仓库](https://github.com/altregubov/jev-antigravity-mcp) |
| alviso/jev-precheck | A second signature on every write an AI agent makes into a system of record. MCP proxy: fetch the records, derive in code, Jev judges. 98.6% recall, 0 false holds on 288 cases. | [仓库](https://github.com/alviso/jev-precheck) |
| aniruddh-krovvidi/switchboard | Guardrail + model router for LLM gateways on TypeSafe's Jev (System One model), with an independent accuracy/calibration/latency evaluation. Stdlib Python. | [仓库](https://github.com/aniruddh-krovvidi/switchboard) |
| armsteadj1/vibe-smart-router | A Node-first, policy-bounded payment-context scorer using Jev for held-out feature discovery and per-transaction context. | [仓库](https://github.com/armsteadj1/vibe-smart-router) |
| AStheTECH/mewcp-jev | JEV MCP server by MewCP | [仓库](https://github.com/AStheTECH/mewcp-jev) · [网站](https://mewcp-jev.vercel.app) |
| bestagentkits/typesafe-demo-mcp | MCP server exposing TypeSafe System One judgments (noul, choice, score) as agent tools | [仓库](https://github.com/bestagentkits/typesafe-demo-mcp) |
| brnyxx/jev-ra | Browser use for coding agents, 3-5x faster than browser-use. MCP server + CLI; TypeSafe Jev decides every step in ~300 ms. | [仓库](https://github.com/brnyxx/jev-ra) · [网站](https://brnyxx.github.io/jev-ra/) |
| carllippert/jev-router | Express with no routes. TypeSafe Jev picks which handler runs. | [仓库](https://github.com/carllippert/jev-router) |
| cbruyndoncx/AskJev-MCP | MCP server for TypeSafe's System One API (Jev): typed choice/noul/score judgments with calibrated probabilities and confidence | [仓库](https://github.com/cbruyndoncx/AskJev-MCP) |
| chungsubeen0/jevmcp | Unofficial MCP for Jev | [仓库](https://github.com/chungsubeen0/jevmcp) |
| danielhirt/jev-lab | Experiments on TypeSafe Jev (System One decision model) via OpenRouter: repeatability, perturbation, and LLM baseline comparison | [仓库](https://github.com/danielhirt/jev-lab) |
| david-cermak/jevlike-esp32 | Jevlike edge router on ESP32 | [仓库](https://github.com/david-cermak/jevlike-esp32) |
| denikuchero/jev-chess-lab | Jev chess experiments: independent decisions vs tactical and Stockfish assistance, with full traces and video replays | [仓库](https://github.com/denikuchero/jev-chess-lab) · [网站](https://denikuchero.github.io/jev-chess-lab/) |
| DoGMaTiiC/hermes-jev | Hermes Agent plugin: route each turn to the one skill that fits, via TypeSafe Jev on the Vercel AI Gateway. Fail-open, opt-in, stdlib only. | [仓库](https://github.com/DoGMaTiiC/hermes-jev) |
| duketopceo/jev-compact | Moving-highlight context compaction for agent harnesses — Jev-scored span retention, tombstone restore via MCP | [仓库](https://github.com/duketopceo/jev-compact) |
| fast-facts/jev-mcp | 原始数据未提供说明。 | [仓库](https://github.com/fast-facts/jev-mcp) |
| Friedjof/jev-mobile | Fast structured Android control loops with TypeSafe Jev and Mobile MCP | [仓库](https://github.com/Friedjof/jev-mobile) · [网站](https://github.com/Friedjof/jev-mobile) |
| gorock007/jev-atlas | An independent, evidence-first field guide to Jev (TypeSafe AI's System One model) — for people and for coding agents. Not affiliated with TypeSafe AI. | [仓库](https://github.com/gorock007/jev-atlas) · [网站](https://jev-atlas.vercel.app) |
| gzawadzki/jev-usecases | TypeSafe Jev demos: Play inbox, Czajka guard, agent-card router, seed comparator, RL data triage | [仓库](https://github.com/gzawadzki/jev-usecases) |
| hangarbay/jev.mcp | One MCP server for TypeSafe's Jev: typed, calibrated decisions instead of generated text | [仓库](https://github.com/hangarbay/jev.mcp) |
| HiepPP/hiep-paseo-plugin | Local Paseo plugin exposing Jev evaluations through MCP | [仓库](https://github.com/HiepPP/hiep-paseo-plugin) |
| hugo-alves/jev-router-playground | Interactive playground for testing Jev model-routing decisions against OpenRouter models | [仓库](https://github.com/hugo-alves/jev-router-playground) · [网站](https://kvhx37ziab90c.space.minimax.io) |
| islee23520/omo-jevlike-router | Jev-style one-pass skill router for OmO: shrink the skill catalog in your system prompt with one forward pass (frozen Qwen2.5-0.5B + jevlike head, fail-open extension) | [仓库](https://github.com/islee23520/omo-jevlike-router) |
| its-panzer/skilltree | A local-first skill library and visual skill tree, with Jev routing and MCP access. | [仓库](https://github.com/its-panzer/skilltree) |
| jcpsimmons/jev-macos-loop | Open-source macOS AI computer use and native GUI automation on Apple silicon. Jev + OmniParser CoreML + Apple Vision OCR. Bring your own OpenRouter, Vercel AI Gateway, or TypesafeAI token. | [仓库](https://github.com/jcpsimmons/jev-macos-loop) |
| krw82/jev-playwright-mcp | Jev-augmented Playwright MCP proxy — page-state triage, prompt-injection shielding, goal-based snapshot pruning, risky-action gating. Drop-in wrapper around @playwright/mcp for any coding agent. | [仓库](https://github.com/krw82/jev-playwright-mcp) |
| KrzysztofStaron/jev-experiments | TypeSafe Jev experiments via Vercel AI Gateway: pixel B&W/gray images + long-context relevance filter bench | [仓库](https://github.com/KrzysztofStaron/jev-experiments) |
| MahmoudAdelbghany/jev-browser | Jev-powered browser MCP for LLM agents — ~300ms decisions, no LLM tokens in the loop. Benchmark vs Playwright MCP included. | [仓库](https://github.com/MahmoudAdelbghany/jev-browser) |
| maraichr/jev-triage | Cross-border B2B case triage prototype using TypeSafe Jev via OpenRouter | [仓库](https://github.com/maraichr/jev-triage) |
| marcus/frost | A flexible and configurable CLI model router using TypeSafe Jev. | [仓库](https://github.com/marcus/frost) · [网站](https://haplab.com) |
| micic-mihajlo/jev-tool-runner | Jev selects developer tools; Codex handles code. MCP and Jev-first execution with measured benchmarks. | [仓库](https://github.com/micic-mihajlo/jev-tool-runner) |
| minhgv/jev-mcp | TypeSafe Jev MCP decision layer for coding agents and CI | [仓库](https://github.com/minhgv/jev-mcp) |
| mpiv-ai/bb-plugin-typesafe-router | Routes a thread's first message to the right harness and model with TypeSafe (Jev), then asks you to confirm. | [仓库](https://github.com/mpiv-ai/bb-plugin-typesafe-router) |
| MSalvalaggio/jev-reflex | Claude thinks, Jev reacts: an MCP server that hands browser tasks from Claude to TypeSafe's Jev (~100 ms per decision). | [仓库](https://github.com/MSalvalaggio/jev-reflex) |
| ndolinschi/mcpmatch | Match user goals to MCP catalog (two-stage) via TypeSafe Jev | [仓库](https://github.com/ndolinschi/mcpmatch) · [网站](https://mcpmatch.vercel.app) |
| nekowasabi/jev-routing-go | Go Jev harness for Claude Code, Codex, and Grok Build. No npx. Not an MCP server. | [仓库](https://github.com/nekowasabi/jev-routing-go) · [网站](https://github.com/nekowasabi/jev-routing-go) |
| nekowasabi/jev-routing-mcp | 原始数据未提供说明。 | [仓库](https://github.com/nekowasabi/jev-routing-mcp) |
| nitinnat/jev-gateway | A small local HTTP service for TypeSafe AI's Jev through Vercel | [仓库](https://github.com/nitinnat/jev-gateway) |
| ohernandezdev/jevmod | Moderation for communities and apps, powered by Jev (TypeSafe): probabilities per category, thresholds you own. Discord/Telegram/Reddit bots, CLI, Python, npm, HTTP API, MCP. | [仓库](https://github.com/ohernandezdev/jevmod) · [网站](https://jevmod.dev) |
| okooo5km/jev | Typed decisions from the shell: a stdlib-Python CLI and Agent Skill for TypeSafe Jev on OpenRouter. Yes/no, choice and ordinal scores with calibrated probabilities, semantic grep and batch mode. | [仓库](https://github.com/okooo5km/jev) · [网站](https://sink.5km.tech/skills) |
| ourines/hermes-jev | Jev decision sidekick for Hermes Agent — TypeSafe and Cloudflare, explicit tools and official skill | [仓库](https://github.com/ourines/hermes-jev) |
| Perferic/openjev-mcp | Open-source Jev-compatible MCP server for typed decisions (Choice/Score/Noul): local GLiNER backend with a model router, drop-in swappable with the TypeSafe System One API. | [仓库](https://github.com/Perferic/openjev-mcp) |
| Pinutss/jev-mcp-router | Select relevant MCP tools under a context-token budget, without executing them. | [仓库](https://github.com/Pinutss/jev-mcp-router) |
| prasanth263/maza | Local MCP gateway with Jev tool discovery, secure credentials, CLI and dashboard | [仓库](https://github.com/prasanth263/maza) |
| pZacca/askjev | Unofficial MCP server for Jev (Typesafe AI) | [仓库](https://github.com/pZacca/askjev) |
| raj8525/universal-jev | Universal TypeSafe Jev Runtime Plugin & MCP Server for Coding Agents | [仓库](https://github.com/raj8525/universal-jev) |
| rajivkuriakose/typesafe-jev-examples | Worked examples for TypeSafe's Jev System One decision model, runnable today through OpenRouter | [仓库](https://github.com/rajivkuriakose/typesafe-jev-examples) |
| Rawson08/the-llm-dispatcher | An LLM router that uses Jev (TypeSafe System One) to dispatch each request to the cheapest model and lowest reasoning effort that will do the job. OpenAI-compatible proxy, Claude Code and Codex wrappers, TypeScript and C#. | [仓库](https://github.com/Rawson08/the-llm-dispatcher) |
| SadiqOnGithub/jev-lab | Live tests for TypeSafe Jev (System One) via OpenRouter's Decisions API | [仓库](https://github.com/SadiqOnGithub/jev-lab) |
| stbenjam/jev-eight-ball | A liquid magic eight ball powered by TypeSafe Jev decisions through OpenRouter | [仓库](https://github.com/stbenjam/jev-eight-ball) |
| stbenjam/jevagotchi | A tiny virtual pet cared for by TypeSafe Jev through OpenRouter | [仓库](https://github.com/stbenjam/jevagotchi) |
| themsquared/jev-benchmark | Reproducible benchmark for TypeSafe AI's Jev on agent tool-call risk classification: accuracy, latency, and whether the confidence score is worth routing on. | [仓库](https://github.com/themsquared/jev-benchmark) · [网站](https://webofmike.com/jev-benchmark/) |
| Verhex/xerify | Verify before you trust. Cross-provider verification with LLMs and Jev. CLI, library & MCP. | [仓库](https://github.com/Verhex/xerify) · [网站](https://verhex.github.io/xerify/) |
| VinaSundar-Nat/Krypton.Carevo.JMR.MCP | MCP server with tooling for JMR - LIX , JEV and Database tooling | [仓库](https://github.com/VinaSundar-Nat/Krypton.Carevo.JMR.MCP) |
| Xy2002/poker-jev-test-bench | Jev test bench — Texas Hold'em edition: live-fire testing of TypeSafe's Jev evaluation model through a React poker game (Vercel AI Gateway). MIT. | [仓库](https://github.com/Xy2002/poker-jev-test-bench) |

<a id="category-4"></a>

## Browser

| 项目或资源 | 原始说明 | 链接 |
| --- | --- | --- |
| browser-use/jev-ultrafast | i. am. speed. | [仓库](https://github.com/browser-use/jev-ultrafast) · [网站](https://browser-use.com) |
| socai-io/socai | Browser & Computer-Use Agent Optimized for Social Media: Research, Content Extraction, and Agentic Analysis | [仓库](https://github.com/socai-io/socai) · [网站](https://socai.io/) |
| jkudish/jev-browser | Browser use using Typesafe's Jev model | [仓库](https://github.com/jkudish/jev-browser) |
| moritzkremb/jev-voice-browser | Control a real browser by voice. Jev (TypeSafe System One) decides intent + target in ~300 ms per spoken word; Playwright acts — often before you finish the sentence. | [仓库](https://github.com/moritzkremb/jev-voice-browser) |
| anandi1989/awesome-jev-usecases | Evidence-backed index of real-world Jev (TypeSafe AI System One) use cases, cookbook, how-to, repos, patterns, and measured results | [仓库](https://github.com/anandi1989/awesome-jev-usecases) · [网站](https://anandi1989.github.io/awesome-jev-usecases/) |
| Heman10x-NGU/Verdict-open-jev | Non-autoregressive decision engine on ModernBERT (151M) with calibrated uncertainty (RLCD), TypeSafe AI Jev benchmark audit, and in-browser WebGPU playground | [仓库](https://github.com/Heman10x-NGU/Verdict-open-jev) |
| vinilana/live-jev | 2D autonomous car simulation in the browser, driven by TypeSafe's Jev decision model | [仓库](https://github.com/vinilana/live-jev) |
| AbdelStark/heist-one | Observable browser stealth game: Jev makes typed guard judgments while deterministic code owns the world. | [仓库](https://github.com/AbdelStark/heist-one) |
| mikesmullin/openjev | Local reproduction of AlexWortega/openjev (Qwen3.5-4B NLI cross-encoder playing Doom), plus real-time headed play and a browser front-end | [仓库](https://github.com/mikesmullin/openjev) |
| Nainish-Rai/jev-frontend-qa | Evidence-driven frontend QA built on Jev Ultrafast and Browser Harness, with a synthetic todo demo. | [仓库](https://github.com/Nainish-Rai/jev-frontend-qa) |
| paulsmith/computer-use-jev | macOS computer use driven by Jev (TypeSafe System One) as the decision maker | [仓库](https://github.com/paulsmith/computer-use-jev) |
| ranjan2829/AskJev | AskJev — Jev autopilot for any website + guard on irreversible clicks (TypeSafe System One, not Claude) | [仓库](https://github.com/ranjan2829/AskJev) · [网站](https://docs.typesafe.ai/introduction) |
| romaluev/jev-ego | Fast browser agent for ego lite. One TypeSafe request per step; an agent or Jev picks the move. | [仓库](https://github.com/romaluev/jev-ego) |
| jgridifier/jev-research-eval | Reproducible Jev Ultrafast research-browser eval harness + field note (QC’d cases, suite runner, report generator). Not investment advice. | [仓库](https://github.com/jgridifier/jev-research-eval) |
| kw2828/OpenJev | Browser decision playground and reproducible experiments on memory, uncertainty, and Doom control | [仓库](https://github.com/kw2828/OpenJev) · [网站](https://kw2828.github.io/OpenJev/) |
| raihankhan-rk/jevarena | JevArena — two Jev agents duel in click-only browser games (Browser Use + TypeSafe Jev) | [仓库](https://github.com/raihankhan-rk/jevarena) |
| AE-AlphaEdge/grokskill-jev | Public Grok skill snapshot around Browser Use Jev Ultrafast | [仓库](https://github.com/AE-AlphaEdge/grokskill-jev) · [网站](https://github.com/browser-use/jev-ultrafast) |
| bramtechs/Focus | Browser extension that blocks distracting websites using TypeSafe: Jev | [仓库](https://github.com/bramtechs/Focus) |
| cartermccann/typesafe-computer-use-hyprland | Hyprland/NixOS fork of typesafe-computer-use — grim + hyprctl + ydotool, TypeSafe Jev decisions | [仓库](https://github.com/cartermccann/typesafe-computer-use-hyprland) |
| CharryLee0426/jev-test | Testing TypeSafe's Jev model on real-time browser games (flappybird.io, play.tetris.com) | [仓库](https://github.com/CharryLee0426/jev-test) |
| Icohen007/jev-play-ping-pong | Jev plays browser table tennis in real time: structured telemetry, typed decisions, ordinary Chrome inputs, and auditable evidence. | [仓库](https://github.com/Icohen007/jev-play-ping-pong) · [网站](https://indispensable-lingonberry-hot.julius.site/) |
| juancristobalgd1/jevRemote | Reproducible text-first browser automation experiment with TypeSafe Jev and Playwright. | [仓库](https://github.com/juancristobalgd1/jevRemote) · [网站](https://juancristobalgd1.github.io/jevRemote/) |
| KesavanKing/jev-browser | Local browser automation UI that uses TypeSafe Jev to choose bounded page actions and a text model only for field values. | [仓库](https://github.com/KesavanKing/jev-browser) |
| max1874/jev-computer-use | A macOS computer-use agent with a dynamic, indexed action space. No screenshots, no coordinates. A macOS port of browser-use/jev-ultrafast. | [仓库](https://github.com/max1874/jev-computer-use) |
| sandra-arato/icon-matcher-ui | Browser-only UI for icon-matcher — paste a TypeSafe.ai key, match a UI title to an icon live, no backend. | [仓库](https://github.com/sandra-arato/icon-matcher-ui) · [网站](https://icon-matcher-ui.vercel.app) |
| shantanugoel/tetris-ai | Browser Tetris with a first-class AI API: play it with a built-in planning agent, TypeSafe's Jev decision model, or any OpenAI-compatible chat model | [仓库](https://github.com/shantanugoel/tetris-ai) |
| thevibeworks/awesome-typesafe-jev | Curated list of projects built on TypeSafe's Jev model, read before listed. With media and our own measurements. Not affiliated with TypeSafe AI. | [仓库](https://github.com/thevibeworks/awesome-typesafe-jev) · [网站](https://thevibeworks.github.io/awesome-typesafe-jev/) |
| thevibeworks/pagepilot | An agent in the browser that pays for thinking once: author a deterministic spec (Jev first, LLM on escalation), replay it for 0 tokens. | [仓库](https://github.com/thevibeworks/pagepilot) |
| usingcolor/jev-browser-plugin | Agent plugin: TypeSafe Jev browser automation skills for Grok Bot / Cursor | [仓库](https://github.com/usingcolor/jev-browser-plugin) |
| yatharth1706/jev-automation | Trying automation on web browser via jev from typesafe | [仓库](https://github.com/yatharth1706/jev-automation) |
| yousudip/lizard-agent | A browser agent with no LLM in the loop — deterministic code plus Jev, a System One model. ~118ms per decision, typed and auditable. | [仓库](https://github.com/yousudip/lizard-agent) |

<a id="category-5"></a>

## Games

| 项目或资源 | 原始说明 | 链接 |
| --- | --- | --- |
| fhshaik/typesafe-mario | A TypeSafe/Jev agent that plays Super Mario Bros. from structured emulator state. | [仓库](https://github.com/fhshaik/typesafe-mario) |
| y0usaf/pi-jev | TypeSafe Jev as a decision layer for the Pi coding agent: a measured tool-call gate plus jev_ask for typed, calibrated answers | [仓库](https://github.com/y0usaf/pi-jev) |
| DevMortimer/pi-warden | Guardrails for Pi built on pi-typesafe that steer the agent instead of interrupting you: Jev judges irreversible and off-task tool calls, detects stuck loops, checks unverified done claims, flags slop | [仓库](https://github.com/DevMortimer/pi-warden) |
| jomatsu/pi-jev-auto-mode | Jev (TypeSafe System One) backed auto mode for the Pi coding agent: semantically auto-approves bash, write, and edit tool calls and fails closed when a decision cannot be made. | [仓库](https://github.com/jomatsu/pi-jev-auto-mode) |
| BunsDev/typesafe-ai-playground | Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI. | [仓库](https://github.com/BunsDev/typesafe-ai-playground) · [网站](https://jev.works) |
| kavehmz/typesafe-playground | Interactive experiments with TypeSafe Jev, from support routing to 3D driving simulations with real AI decisions and visible sensor inputs. | [仓库](https://github.com/kavehmz/typesafe-playground) |
| TheoOliveira/pi-jev | Semantic tool routing and typed System One decisions for the Pi coding agent using TypeSafe Jev | [仓库](https://github.com/TheoOliveira/pi-jev) |
| inanna-malick/jev-dsl | Agent-first Haskell DSL for TypeSafe's Jev judgment model: typed packets, inferred types, answers under the same labels | [仓库](https://github.com/inanna-malick/jev-dsl) |
| kikoncuo/jevfire | JEV-inspired parallel decisions for CUDA LLMs. One context, many decisions. vLLM API, game-agent examples, and reproducible benchmarks. | [仓库](https://github.com/kikoncuo/jevfire) · [网站](https://kikoncuo.github.io/jevfire/learn.html) |
| joelhooks/pi-fast-jev-compaction | Pi extension: verbatim context compaction with TypeSafe Jev decisions | [仓库](https://github.com/joelhooks/pi-fast-jev-compaction) |
| kevinpita/pi-jev-context | Reversible context pruning for Pi, powered by TypeSafe Jev. Keep useful context without deleting session history. | [仓库](https://github.com/kevinpita/pi-jev-context) |
| leonaaardob/fast-dev-compaction | Codex plugin: verbatim Jev-guided context restoration around session compaction. Port of tamaratran/fast-jev-compaction to Codex lifecycle hooks. | [仓库](https://github.com/leonaaardob/fast-dev-compaction) |
| nickthompson480/typesafe-ai-playground | Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI. | [仓库](https://github.com/nickthompson480/typesafe-ai-playground) |
| Nyarlathoteppppp/pi-heed | Runtime constraints for the pi coding agent: checks every side-effecting tool call against what you said, before it runs. Powered by TypeSafe Jev. | [仓库](https://github.com/Nyarlathoteppppp/pi-heed) |
| wondertwins/jev-benchmark | Benchmarks and a playground for TypeSafe's Jev (System One) model: chess, and who-is-the-player-talking-to for speech-to-text game NPCs | [仓库](https://github.com/wondertwins/jev-benchmark) |
| 4esv/jev-mario | TypeSafe Jev plays Super Mario Bros from a text description of emulator RAM | [仓库](https://github.com/4esv/jev-mario) |
| hev/reranker | Use Jev (TypeSafe's System One model) as a calibrated reranker: one call, up to 30 documents, a probability per document. Apache-2.0. | [仓库](https://github.com/hev/reranker) |
| phureewat29/got-jev | Jev (TypeSafe AI) PoC through Game of Thrones | [仓库](https://github.com/phureewat29/got-jev) · [网站](https://jev.phureewat.com) |
| QuentinDanblon/pi-fast-jev-compaction | Verbatim context pruning for the pi coding agent, scored by TypeSafe Jev: stale tool calls and results are dropped or truncated, everything kept stays verbatim. | [仓库](https://github.com/QuentinDanblon/pi-fast-jev-compaction) |
| Query-farm/vgi-typesafe | A VGI worker exposing TypeSafe System One questions (choice, noul, score) to DuckDB/SQL as LATERAL-joinable table functions | [仓库](https://github.com/Query-farm/vgi-typesafe) · [网站](https://query.farm/vgi/) |
| tyleree/jevbot | Options trading bot (backtest + Alpaca paper only) with TypeSafe Jev as the decision core | [仓库](https://github.com/tyleree/jevbot) |
| Wang-auspicious/pi-jev-compaction | Jev-powered context compaction for Pi. Keep critical instructions and tool history, prune the noise, and fall back gracefully. | [仓库](https://github.com/Wang-auspicious/pi-jev-compaction) |
| aieo-product/jev-gamebenchmark | Sandbox & benchmark: optimize how you ask Jev (TypeSafe System One) to play falling-block puzzle games, head-to-head against LLMs | [仓库](https://github.com/aieo-product/jev-gamebenchmark) |
| alexshpunt/pi-agent-foreman | Send Pi agents back to work when they stop before the job is done. | [仓库](https://github.com/alexshpunt/pi-agent-foreman) · [网站](https://pi.dev/packages/pi-agent-foreman) |
| ashaazami/river-run-typesafe | River shooter game in Python, inspired by Atari's River Raid, played by a TypeSafe AI pilot | [仓库](https://github.com/ashaazami/river-run-typesafe) |
| bahramzada/jev-taxi-dispatch | Real-vaxt taksi dispetçerlik simulyasiyası — TypeSafe JEV (System One) modeli ilə | [仓库](https://github.com/bahramzada/jev-taxi-dispatch) |
| cassiomc1/fast-jev-compaction-alt | Continuous, verbatim context compaction for LLM agents using TypeSafe's Jev model. | [仓库](https://github.com/cassiomc1/fast-jev-compaction-alt) |
| clankagent/pi-jev | Jev-powered semantic process conditions and skill suggestions for Pi | [仓库](https://github.com/clankagent/pi-jev) |
| cpaczek/s1s | System One Search: navigate and trace code with TypeSafe judgments and repository evidence | [仓库](https://github.com/cpaczek/s1s) · [网站](https://s1s.iar.dev) |
| felixfisher/pi-jev-compaction | Experimental Pi extension using TypeSafe Jev for auditable tool-history compaction | [仓库](https://github.com/felixfisher/pi-jev-compaction) |
| filippos95/cybercab-jev | Three.js robotaxi game where TypeSafe's Jev model makes the driving decisions | [仓库](https://github.com/filippos95/cybercab-jev) |
| furedea/reflex-state | Jev-powered execution state for Pi coding agents. Track changes, checks, and blockers outside the main LLM, with evidence-backed updates and replay. Inspired by SKILL.state. | [仓库](https://github.com/furedea/reflex-state) |
| Hexdigest123/typesafe-comment | Small Python package that uses typesafe.ai to evaluate code comments on certain heuristics | [仓库](https://github.com/Hexdigest123/typesafe-comment) |
| iammusham/jev-snake | An experimental Snake environment where the game engine owns deterministic rules and TypeSafe AI's Jev makes the movement decision from structured state on every tick. | [仓库](https://github.com/iammusham/jev-snake) |
| jason-allen-oneal/openclaw-plugin-typesafe-ai | TypeSafe AI (Jev System One) plugin for OpenClaw - sub-100ms group triage, tool safety guardrails, compaction curation, and model routing | [仓库](https://github.com/jason-allen-oneal/openclaw-plugin-typesafe-ai) |
| kxzk/typesafe-jev-drone-demo | Three.js drone simulator with a Python backend and live TypeSafe Jev navigation | [仓库](https://github.com/kxzk/typesafe-jev-drone-demo) |
| luiginotmario/postgres-Jev | Natural-language PostgreSQL predicates with TypeSafe Jev. A simple search playground with randomly generated databases. | [仓库](https://github.com/luiginotmario/postgres-Jev) · [网站](https://postgres-jev.vercel.app) |
| Maverick-Ansh/intentions_emergent | Latent reasoning for user-intent decomposition: does more continuous-space compute produce better goal extraction? With JEV (TypeSafe System One) as the calibrated decision layer. | [仓库](https://github.com/Maverick-Ansh/intentions_emergent) |
| milanboers/jev-plays-pokemon | Playing Pokemon Red using TypeSafe Jev | [仓库](https://github.com/milanboers/jev-plays-pokemon) |
| nourhelmi/pi-jev-compaction | Automatic Jev context clearing for Pi. Keep the conversation, prune stale tool output, retrieve originals without rerunning commands. | [仓库](https://github.com/nourhelmi/pi-jev-compaction) |
| Nyarlathoteppppp/pi-jev-context | Cache-neutral context trimming for the pi coding agent, powered by TypeSafe Jev: long tool output cut to verbatim key lines before it enters context, with lossless recall. Measured, with pre-registered benchmarks. | [仓库](https://github.com/Nyarlathoteppppp/pi-jev-context) |
| onionminionops-beep/pdoom-protocol | USER + JEV: P(DOOM) PROTOCOL — co-op platform shooter where TypeSafe Jev plays alongside you | [仓库](https://github.com/onionminionops-beep/pdoom-protocol) |
| rchovatiya88/cyber-breach-jev | Cyber-Breach: The Jev Protocol - A tactical cyberpunk arena combat game powered by TypeSafe AI Jev System One decision model | [仓库](https://github.com/rchovatiya88/cyber-breach-jev) |
| skcache/jevtrafficsim | TypeSafe AI's first model Jev takes on an entire city's traffic | [仓库](https://github.com/skcache/jevtrafficsim) |

<a id="category-6"></a>

## Agents

| 项目或资源 | 原始说明 | 链接 |
| --- | --- | --- |
| devagrawal09/jev-review | A staged code-review workflow and local dashboard built with TypeSafe Jev. | [仓库](https://github.com/devagrawal09/jev-review) |
| thruwire/foreman | Software Factory Foreman based on TypeSafe Jev model | [仓库](https://github.com/thruwire/foreman) |
| fabricioctelles/skills | A collection of skills for AI agents (Kiro, Cursor, Windsurf, Claude Code, and others). Each skill is a reusable module that teaches the agent to perform complex tasks with context, structure, and best practices. | [仓库](https://github.com/fabricioctelles/skills) · [网站](https://skilldev.pro) |
| dbreunig/building-with-jev-skill | A skill for writing and improving programs that call Jev, TypeSafe's System One model | [仓库](https://github.com/dbreunig/building-with-jev-skill) |
| RomanSlack/jev-drone | Camera-only autonomous drone in MuJoCo with a small judgment model (TypeSafe Jev) in the loop at 2.5Hz | [仓库](https://github.com/RomanSlack/jev-drone) |
| superagents-lab/jev-search | Search the web with TypeSafe's Jev: source selection, query understanding and relevance ranking. Built with Search1API. | [仓库](https://github.com/superagents-lab/jev-search) · [网站](https://jev.s1.dev) |
| Dicklesworthstone/skillranker | Rust CLI powered by Jev from TypeSafe.ai that ranks agent skills for the next step using live session context. Includes Claude Code hooks, structured JSON, abstention, and local feedback. Requires a TypeSafe API key. | [仓库](https://github.com/Dicklesworthstone/skillranker) |
| shantanugoel/ask-jev-skill | Skill for Hermes, and other agents, to ask typesafe's jev | [仓库](https://github.com/shantanugoel/ask-jev-skill) |
| supercorp-ai/supercov | Code quality and coverage for coding agents | [仓库](https://github.com/supercorp-ai/supercov) · [网站](https://supercov.com) |
| GhalebDweikat/winnow | A calibrated context sieve for Claude Code: every tool result is judged by a System One model before it enters context. | [仓库](https://github.com/GhalebDweikat/winnow) |
| shiftynick/jev-axi | Agent-ergonomic CLI for TypeSafe's Jev: fast calibrated judgments (pick, rate, check, rank, triage, guard) from the shell | [仓库](https://github.com/shiftynick/jev-axi) |
| DanRWilloughby/snifftest | A prose linter that sniffs out AI writing tells. Zero dependencies, countable rules plus one judgment model. | [仓库](https://github.com/DanRWilloughby/snifftest) · [网站](https://www.npmjs.com/package/snifftest) |
| devagrawal09/jev-code | Bounded TypeSafe Jev workflows for coding agents. | [仓库](https://github.com/devagrawal09/jev-code) |
| 3clyp50/a0-typesafe-ai | TypeSafe AI Jev judgments for Agent Zero, with typed tools and probability cards. | [仓库](https://github.com/3clyp50/a0-typesafe-ai) |
| anpicasso/hermes-jev-approvals | PoC: TypeSafe Jev as the reviewer for Hermes Agent smart command approvals. 8.7x faster, 4.4x fewer prompts, measured on 153 real commands. Approvals only. | [仓库](https://github.com/anpicasso/hermes-jev-approvals) |
| geilt/typesafe-cli | CLI and agent skill for TypeSafe System One (Jev): typed Choice, Score, and Noul judgments. | [仓库](https://github.com/geilt/typesafe-cli) |
| HyunjunJeon/pi-quiet-ask | TypeSafe Jev as the pi coding agent's quiet decision layer | [仓库](https://github.com/HyunjunJeon/pi-quiet-ask) |
| BeLazy167/typesafe-mod | Claude Code mod that routes decisions to TypeSafe's Jev model: ranks installed skills per prompt, and answers the agent's own this-or-that questions when confident. | [仓库](https://github.com/BeLazy167/typesafe-mod) |
| doeixd/jev-pref | Turn your AGENTS.md preferences into a fast, Jev-powered AI linter. | [仓库](https://github.com/doeixd/jev-pref) |
| HyunjunJeon/jev-judgment | Agent Skill: send closed coding-agent judgments to TypeSafe Jev | [仓库](https://github.com/HyunjunJeon/jev-judgment) |
| iamvatsalpatel/tiershift | Shift every LLM call to the cheapest model that can handle it. Routing decided by TypeSafe Jev in ~180 ms. No training data. Policy in plain YAML. TypeScript and Python. | [仓库](https://github.com/iamvatsalpatel/tiershift) |
| leepokai/jev-guard | Auto mode for every coding agent, built on Jev: risk-scores every tool call with session context (deny / ask / allow), flags prompt injection in results, checks skills and plugins. Claude Code, Codex, Copilot, Gemini, Cursor, pi, OpenCode, ACP. | [仓库](https://github.com/leepokai/jev-guard) |
| MongLong0214/jev-gate | Not every coding task needs your best model. Experimental Jev-powered model routing for Claude Code — V3 prototype runs today, V4 routes at the task boundary. | [仓库](https://github.com/MongLong0214/jev-gate) |
| opaielsheikh/typesafe-migration-guard | Automated database migration safety reviewer powered by TypeSafe AI (Jev System One model) | [仓库](https://github.com/opaielsheikh/typesafe-migration-guard) |
| samtay32/jev-system-architect | System-architecture skill for TypeSafe AI Jev/System One — find fuzzy semantic judgment and turn it into small Choice/Score/Noul primitives. | [仓库](https://github.com/samtay32/jev-system-architect) |
| ShivamPansuriya/jev-skill-gate | Cut Claude Code's skill manifest by ~75% with TypeSafe Jev. Scores every installed skill for relevance and hides the rest via skillOverrides — 12,750 → 3,185 tokens on a 217-skill install, for $0.0009 a session. | [仓库](https://github.com/ShivamPansuriya/jev-skill-gate) · [网站](https://github.com/ShivamPansuriya/jev-skill-gate#does-it-pick-the-right-skills) |
| aegsrl7/jevmap | Map a codebase into units and let Jev (TypeSafe AI) hand an AI coding agent the ten files that matter for a task | [仓库](https://github.com/aegsrl7/jevmap) |
| altryne/jevify | An agent skill to discover TypeSafe Jev opportunities, design typed questions, and learn from recent community experiments. | [仓库](https://github.com/altryne/jevify) · [网站](https://thursdai.news) |
| buchmark/claude-jev | Claude Code plugin that scores review findings, debug hypotheses and design options with TypeSafe's Jev — calibrated probabilities instead of one more opinion. | [仓库](https://github.com/buchmark/claude-jev) |
| harrymunro/decision-first | Agent skill that spots bounded-judgment steps, tries a typed decision model (TypeSafe's Jev) first, and documents every attempt | [仓库](https://github.com/harrymunro/decision-first) |
| JanOstrowka/typesafe-assist | Home Assistant Assist conversation agent powered by TypeSafe's Jev (System One) model | [仓库](https://github.com/JanOstrowka/typesafe-assist) |
| lhemerly/mcts-agent | Discriminative Monte Carlo Tree Search using TypeSafe Jev System One Primitives and Gemini | [仓库](https://github.com/lhemerly/mcts-agent) |
| noplan-inc/limpet | A Stop hook that stops your coding agent from stopping too early. Plain-language rules, judged by jev. | [仓库](https://github.com/noplan-inc/limpet) · [网站](https://github.com/noplan-inc/limpet) |
| omni-/ask-jev | Utilizing Jev, the RLCD-type model provided by TypeSafe AI, to independently and cheaply judge agentic coding sessions. | [仓库](https://github.com/omni-/ask-jev) |
| PistachioAIHQ/jev-synergy-screening | Jev (TypeSafe System One) × ASReview SYNERGY abstract screening demo — Choice/Noul vs gold labels | [仓库](https://github.com/PistachioAIHQ/jev-synergy-screening) |
| poponline63/hermes-jev-north-star | Hermes Agent skill whose north-star gate is judged by Jev (TypeSafe System One): turn an intention into a checkable finish line, generate the run prompt, and let Jev rank what is still unproven. | [仓库](https://github.com/poponline63/hermes-jev-north-star) |
| qkal/Canny | Stops AI coding agents from claiming work is done without evidence. Deterministic hooks decide, TypeSafe's Jev advises. Append-only ledger, zero runtime dependencies. | [仓库](https://github.com/qkal/Canny) |
| rthomas24/jev-realtime-trading | Paper trading agents on a live tape, decided every second by TypeSafe's Jev (System One). Electron desktop app. | [仓库](https://github.com/rthomas24/jev-realtime-trading) |
| siddicky/omp-typesafe | TypeSafe AI (Jev) adversarial reviewer and typesafe_ask tool for the omp coding agent | [仓库](https://github.com/siddicky/omp-typesafe) |
| 24601/Augustus | Agent skill: design judgment-assisted systems with TypeSafe Jev (System One). Maps Choice/Score/Noul onto decision theory, reranking, and routing. Composition algebra, question design, validation gates. MIT. | [仓库](https://github.com/24601/Augustus) · [网站](https://github.com/24601/Augustus/blob/main/docs/ecosystem.md) |
| aaravriyer193/OpenSmoke | Find the AI agent runs that broke because their environment did: missing keys, tools, files, permissions, network, or context. Powered by TypeSafe Jev. | [仓库](https://github.com/aaravriyer193/OpenSmoke) |
| AkashPriyadarshii/jev-superpowers | Systematic software development framework for AI coding agents upgraded with TypeSafe Jev System One typed decisions | [仓库](https://github.com/AkashPriyadarshii/jev-superpowers) · [网站](https://github.com/AkashPriyadarshii/jev-superpowers) |
| AlexBabescu/ActionJev | Structured code review for GitHub and Gitea Actions, powered by TypeSafe Jev and written in Rust. | [仓库](https://github.com/AlexBabescu/ActionJev) |
| ArkadyBuryakov/jev-preview | TUI Sandbox for Typesafe Jev API | [仓库](https://github.com/ArkadyBuryakov/jev-preview) |
| BrunooMoniz/polymarket-btc-5m-agent | Agente de trading para o mercado BTC Up/Down de 5 minutos da Polymarket: modelo em código, Jev (TypeSafe System One) como portão, ordens maker, calibração e shadows em paper | [仓库](https://github.com/BrunooMoniz/polymarket-btc-5m-agent) |
| CodeAlive-AI/mastra-jev-moderation | Input moderation for Mastra agents on TypeSafe Jev — one file | [仓库](https://github.com/CodeAlive-AI/mastra-jev-moderation) |
| ddfeyes/jev-mode | I kept watching coding agents burn context on decisions that aren't hard - triage 400 tickets, tag 600 files, route to one of six teams. jev-mode moves those verdicts to a typed-judgment model. I A/B'd it: 78% fewer tokens, 16x less work-attributable input, accuracy 96.1% vs 93.7%. Python, no deps, MIT. | [仓库](https://github.com/ddfeyes/jev-mode) |
| dsandrade/jevra | An open-source decision layer connecting coding agents with TypeSafe Jev. | [仓库](https://github.com/dsandrade/jevra) |
| Eliran-Turgeman/reaper | Semantic linter for AI coding agents and CI code review. Detects silent failures, weakened tests, scope creep, unnecessary abstractions, and other semantic code smells. | [仓库](https://github.com/Eliran-Turgeman/reaper) |
| eyenpi/actionreflex | A pre-execution gate for AI agent actions, powered by TypeSafe's Jev (System One) model. | [仓库](https://github.com/eyenpi/actionreflex) |
| fabricio852/jevshift | ⚡ Token Saver & Fast Decision Layer for OpenAI Codex — powered by Jev | [仓库](https://github.com/fabricio852/jevshift) |
| getexcited/stepwarden | Every tool call your agent makes, checked before it runs. A Claude Code plugin that uses TypeSafe AI's Jev to verify each pending tool call against the session plan, then allows it, asks you, or blocks it. Proof of concept | [仓库](https://github.com/getexcited/stepwarden) · [网站](https://github.com/getexcited/claude-plugins) |
| ibrahemid/git-jev-stage | Stage the git hunks that match a sentence. Exact patch, preview first, staging only, decided per hunk by Jev. | [仓库](https://github.com/ibrahemid/git-jev-stage) |
| ibrahemid/jevprune | Keeps the lines of a command's output that matter for the task. Exact text, full output recoverable, decided per line by Jev. | [仓库](https://github.com/ibrahemid/jevprune) |
| ivorpad/skillranker | Rust CLI powered by Jev from TypeSafe.ai that ranks agent skills for the next step using live session context. Includes Claude Code hooks, structured JSON, abstention, and local feedback. Requires a TypeSafe API key. | [仓库](https://github.com/ivorpad/skillranker) |
| kaustav1996/reflex | A coding agent and personal assistant with System One reflexes (TypeSafe Jev) on top of the Pi coding agent | [仓库](https://github.com/kaustav1996/reflex) |
| kevin9327/jev-harness | JevHarness: TypeSafe Jev agent tool-call gate. execute / confirm / reject in code. | [仓库](https://github.com/kevin9327/jev-harness) |
| knowlet/Decision-Theoretic-Mixture-of-Agents | A fully audited, reproducible decision‑theoretic mixture‑of‑agents framework comparing multiple selector strategies, including OpenJev, with transparent calibration, limitations, and verification artifacts. | [仓库](https://github.com/knowlet/Decision-Theoretic-Mixture-of-Agents) |
| manojlds/jev-review | Standalone TypeSafe Jev code-review CLI: typed decisions over a local git diff. | [仓库](https://github.com/manojlds/jev-review) |
| Mentioum/judgement | Agent-friendly Go library and JSON-first CLI for TypeSafe AI's Jev and System One API | [仓库](https://github.com/Mentioum/judgement) |
| milokuo/tagtrim | Tag every line of a command's output, then trim by tag, so your coding agent reads the signal, not the noise. Design stage. | [仓库](https://github.com/milokuo/tagtrim) |
| ndolinschi/harnessjudge | Judge agent steps — ok / retry / escalate / stop via TypeSafe Jev | [仓库](https://github.com/ndolinschi/harnessjudge) · [网站](https://harnessjudge.vercel.app) |
| ndolinschi/spendbrake | Agent budget brake — continue / downgrade_model / stop via TypeSafe Jev | [仓库](https://github.com/ndolinschi/spendbrake) · [网站](https://spendbrake.vercel.app) |
| opaielsheikh/ps2-ai-agent | Autonomous PlayStation 2 AI Agent with real-time visual telemetry HUD powered by TypeSafe Jev System One | [仓库](https://github.com/opaielsheikh/ps2-ai-agent) |
| pistachiopranay/jev-synergy-screening | Jev (TypeSafe System One) × ASReview SYNERGY abstract screening demo — Choice/Noul vs gold labels | [仓库](https://github.com/pistachiopranay/jev-synergy-screening) |
| rashedInt32/jev-gates | Six calibrated gates for Claude Code, judged by TypeSafe Jev: rules, scope, intent, done, claims, and commit honesty. Each one escalates, none ever approves. | [仓库](https://github.com/rashedInt32/jev-gates) |
| rbalch/typesafeai-review | Using Typesafe.AI to generate diff reviews. | [仓库](https://github.com/rbalch/typesafeai-review) |
| Ripwords/agent-gate-loop | Reusable GitHub Action: agent fix loop gated by checks, an AI reviewer, and TypeSafe Jev | [仓库](https://github.com/Ripwords/agent-gate-loop) |
| RiskAverseTech/toolgate | Open auto mode for AI agents — a calibrated tool-call firewall powered by TypeSafe Jev. Ships as a Claude Code hook | [仓库](https://github.com/RiskAverseTech/toolgate) |
| rustfuture/reflex-control | Rust policy engine using TypeSafe Jev and deterministic checks to route AI agent decisions. | [仓库](https://github.com/rustfuture/reflex-control) |
| suraj-phanindra/wellposed | Lint your jev requests before they come back confidently wrong. | [仓库](https://github.com/suraj-phanindra/wellposed) |
| Thestral12/pr-sieve | Semantic PR gate: .jev.yml rules as TypeSafe Jev questions. Not a review bot. | [仓库](https://github.com/Thestral12/pr-sieve) |
| twilwa/pi-typesafe | Pi coding-agent extension built on the TypeSafe AI System One API (Jev) | [仓库](https://github.com/twilwa/pi-typesafe) |
| wotai-dev/typesafe-jev-tools | A Claude Code hook that asks whether the decision you are writing needs a model at all. Includes a measured 149-row comparison of TypeSafe Jev against Claude Haiku 4.5. | [仓库](https://github.com/wotai-dev/typesafe-jev-tools) |

<a id="category-7"></a>

## Lists

| 项目或资源 | 原始说明 | 链接 |
| --- | --- | --- |
| AbdelStark/awesome-typesafe | A curated list of official resources and community projects for TypeSafe, System One models, and Jev. | [仓库](https://github.com/AbdelStark/awesome-typesafe) · [网站](https://abdelstark.github.io/awesome-typesafe/) |
| yibie/awesome-jev | A curated list of public projects, integrations, and discussions built on Jev — TypeSafe AI's System One model for typed decisions. | [仓库](https://github.com/yibie/awesome-jev) |
| AnotiaWang/awesome-jev | A curated list of awesome Jev / TypeSafe System One applications, libraries, and resources. | [仓库](https://github.com/AnotiaWang/awesome-jev) |
| Anil-matcha/awesome-jev-by-typesafe | Evidence-backed use cases, patterns, prompts, and starter code for TypeSafe Jev — a System One model for fast, typed, confidence-aware decisions in software. | [仓库](https://github.com/Anil-matcha/awesome-jev-by-typesafe) · [网站](https://typesafe.ai/) |
| cobanov/awesome-jev | A curated, source-backed list of projects built with Jev, TypeSafe AI's System One model for typed decisions. | [仓库](https://github.com/cobanov/awesome-jev) |
| fatwang2/awesome-jev | A source-backed Jev project directory with a reusable Jev-only GitHub review workflow. | [仓库](https://github.com/fatwang2/awesome-jev) |
| hellogumbo/awesome-jev | A community directory of projects built on Jev, TypeSafe AI's System One model. | [仓库](https://github.com/hellogumbo/awesome-jev) · [网站](https://awesomejev.com) |
| logicrw/awesome-jev-projects | Awesome Jev: source-backed open-source ecosystem radar, plain-language project discovery, and automatic GitHub sync | [仓库](https://github.com/logicrw/awesome-jev-projects) · [网站](https://logicrw.github.io/awesome-jev-projects/) |
| SeeAPI/awesome-jev-use-cases | Explore real-world use cases and projects built with TypeSafe AI's Jev: content moderation, AI agents, model routing, and semantic search. Curated by SeeAPI. | [仓库](https://github.com/SeeAPI/awesome-jev-use-cases) · [网站](https://www.seeapi.com/) |
| aliaihub/awesome-jev-usecases | Evidence-backed use cases, patterns, and guidance for building with Jev, TypeSafe AI's System One model. Every claim is labeled and sourced. | [仓库](https://github.com/aliaihub/awesome-jev-usecases) |
| fatwang2/jev-review-action | Configurable GitHub submission review and PR classification with TypeSafe Jev. No text-generation model. | [仓库](https://github.com/fatwang2/jev-review-action) |
| ozers/jevsome-projects | Open-source projects that provably call Jev, TypeSafe AI's System One model. Every entry links to the line of code that proves it. Refreshed daily. | [仓库](https://github.com/ozers/jevsome-projects) · [网站](https://jevsome.ozersubasi.com) |
| rhc98/awesome-jev | Projects built on Jev (TypeSafe AI's System One model), curated by Jev itself. | [仓库](https://github.com/rhc98/awesome-jev) · [网站](https://awesome-jev.xyz) |
| sontakey/awesome-jev | Unofficial list of insanely useful TypeSafe AI Jev / System One projects | [仓库](https://github.com/sontakey/awesome-jev) |
| JohnDotOwl/awesome-jev | A curated list of projects built on Jev, TypeSafe AI's System One model. | [仓库](https://github.com/JohnDotOwl/awesome-jev) |
| majiayu000/anosomejev | Curated Awesome Jev — high-signal map of TypeSafe System One / Jev (Must-30, trust labels, critique, 中文). Not affiliated with TypeSafe. | [仓库](https://github.com/majiayu000/anosomejev) |
| thevibeworks/jevgate | Which shell commands may your coding agent run without asking? An allowlist proves what it can; Jev, a no-text model, judges only the rest. Claude Code hook + CLI, measured. | [仓库](https://github.com/thevibeworks/jevgate) |
| wh000wh000/awesome-jev-live | Evidence-graded index of the Jev / TypeSafe System One ecosystem. Rebuilt every 2 hours in 20 languages. | [仓库](https://github.com/wh000wh000/awesome-jev-live) |
| yangzhou-chaofan/awesome-jev-prompt | latest top 100 showcases for jev (keep updating) from x / github / latest sources | [仓库](https://github.com/yangzhou-chaofan/awesome-jev-prompt) |

<a id="category-8"></a>

## Research

| 项目或资源 | 原始说明 | 链接 |
| --- | --- | --- |
| HackSing/jev-report | 发明 RLHF 的人，这次做了个不会说话的模型：Jev 独立研究报告。52 页 PDF + 50 条中文实测复现包 + 143 条可回溯数据表 | [仓库](https://github.com/HackSing/jev-report) · [网站](https://github.com/HackSing/jev-report) |
| olanotolu/jevbetter | A stronger one-pass scorer over a variable list of text options. Hashed n-gram encoder, rival-aware attention, gated head, temperature scaling — with a head-to-head benchmark vs the jevlike starter design. | [仓库](https://github.com/olanotolu/jevbetter) |
| carlaiau/jev-reranking | Search engine experimentation on the TREC collections. Currently focused on zero-shot reranking implementations with typesafe.ai's JEV model | [仓库](https://github.com/carlaiau/jev-reranking) |
| OmniJev/awesome-jev | Papers, open reproductions and independent evaluations behind System One models and Jev. | [仓库](https://github.com/OmniJev/awesome-jev) · [网站](https://omnijev.github.io/awesome-jev/) |
| zhihz/openjev | Local bilingual probability decisions from context, questions, and candidate answers. Independent research preview inspired by TypeSafe Jev. | [仓库](https://github.com/zhihz/openjev) |
| abhixhek/jevcal | Stop guessing confidence thresholds: calibrate, threshold, and drift-check typed decision models (TypeSafe Jev) against an LLM teacher. | [仓库](https://github.com/abhixhek/jevcal) |
| zhuyansen/jev-search-rerank-eval | Does a TypeSafe Jev rerank beat embedding search? Graded relevance eval (9,831 pairs, 164 zh/en queries) over the Agent Skills Hub catalog, with the judge-circularity bias measured. | [仓库](https://github.com/zhuyansen/jev-search-rerank-eval) |
| AntonioCoppe/jev-harness | Decision harness for TypeSafe Jev — confidence gates, shadow mode, recipes, and evals. Claude CLI 48.9s → Jev 1.3s on the same row-filter job. | [仓库](https://github.com/AntonioCoppe/jev-harness) · [网站](https://github.com/AntonioCoppe/jev-harness) |
| FirasSX914/Janus | Measure when to use Jev and other models on your data, then route accordingly. | [仓库](https://github.com/FirasSX914/Janus) |
| haseeb-heaven/jev-system-one | A polished OpenAI + TypeSafe Jev terminal interface for answers with transparent decision reports | [仓库](https://github.com/haseeb-heaven/jev-system-one) |
| 0xnairb/research_desk | TypeSafe Jev demonstration for new analyzation — experimenting with Jev for fast analysis of news and tickers | [仓库](https://github.com/0xnairb/research_desk) |
| AkashPriyadarshii/jev-curate | High-throughput synthetic & pretraining dataset sifter powered by TypeSafe AI Jev (api.typesafe.ai). Stream, filter, and score Parquet & JSONL datasets at 1,500+ rows/sec using System One typed decisions (Choice, Score, Noul). | [仓库](https://github.com/AkashPriyadarshii/jev-curate) · [网站](https://crates.io/crates/jev-curate) |
| AnshChoudhary/typesafe-ai-firewall | Shadow-mode validation harness for a pre-execution firewall on AI agent tool calls (TypeSafe/Jev). Real run, findings in report.md. | [仓库](https://github.com/AnshChoudhary/typesafe-ai-firewall) |
| dayhaysoos/jevals | Local evaluation workbench for TypeSafe Jev | [仓库](https://github.com/dayhaysoos/jevals) |
| Gaurav-Gosain/jev-sec-bench | Blind security benchmarks for Jev, TypeSafe's System One model: prompt injection and vulnerable code detection, built on jev-go | [仓库](https://github.com/Gaurav-Gosain/jev-sec-bench) |
| hamakyo/jev-starter | Typed, policy-driven decision workflows on top of TypeSafe AI Jev: confidence routing, fallbacks, evaluation, and RAG patterns for TypeScript apps. | [仓库](https://github.com/hamakyo/jev-starter) |
| jtsang4/jev-cli | CLI for TypeSafe AI's Jev evaluation model — typed questions in, structured JSON answers out | [仓库](https://github.com/jtsang4/jev-cli) |
| memovai/openevals | Affordable platform for parallel agent evals and observability. Powered by JEV. | [仓库](https://github.com/memovai/openevals) |
| rongxinzy/LightJev | Train lightweight language backbones for typed decisions and candidate probabilities. CE/Brier training, evaluation, and an offline end-to-end demo. | [仓库](https://github.com/rongxinzy/LightJev) |
| TokenTrim/jev-agent-failure-benchmark | Benchmarking Jev (Typesafe.ai) against a strong LLM on the Who&When Pro agent-failure-attribution benchmark (text subset). | [仓库](https://github.com/TokenTrim/jev-agent-failure-benchmark) |
| 24601/rh-guard | Reward-hack radar for coding agents: structural denies + TypeSafe Jev System One sidecar for Claude Code & Cursor hooks | [仓库](https://github.com/24601/rh-guard) |
| 4esv/jev-eval | Independent eval of TypeSafe Jev vs GPT-5.6 Terra: accuracy, calibration, latency, cost | [仓库](https://github.com/4esv/jev-eval) |
| AIPI-mvoronovych/JEVBenchmark-Contradiction-Detection | Checking JEV's Contradiction detection (Model by TypeSafe.AI) | [仓库](https://github.com/AIPI-mvoronovych/JEVBenchmark-Contradiction-Detection) |
| alex-sun-kuo/jev-consumer-research | Consumer research explorations using TypeSafe's Jev | [仓库](https://github.com/alex-sun-kuo/jev-consumer-research) |
| avshalomd/longjev | Long inputs for TypeSafe AI's Jev decision model. An experiment, published with its evals. | [仓库](https://github.com/avshalomd/longjev) |
| BrendanH18/jev-lab | Six small apps and a workbench that show what TypeSafe's Jev (System One) model can do | [仓库](https://github.com/BrendanH18/jev-lab) |
| choxos/jev-reviewer | Ask a trial report and its supplements for systematic review data by voice, text or a questions file. Jev (TypeSafe System One) points at the lines; every answer is a verbatim quote with its file and page. PDF, Word and text files; CSV export. | [仓库](https://github.com/choxos/jev-reviewer) · [网站](https://jevreviewer.xera.ac) |
| cmartinez9/jev-judge-bench | Binary LLM-judge bench — compare Jev (TypeSafe System One) against a frontier LLM judge on speed, cost, and agreement with human labels. | [仓库](https://github.com/cmartinez9/jev-judge-bench) |
| DECRUX9812/openjev-lm | open-Jev LM arm: Qwen2.5-0.5B + LoRA reproducing a hosted decision model's judgment at 92.9% on hand-labelled gold - trained overnight on a 6-vCPU CPU-only host, $0/call. Paper, corpora, harnesses, receipts. | [仓库](https://github.com/DECRUX9812/openjev-lm) |
| eggmasonvalue/jev-takes-mauboussin | Evaluating TypeSafe's Jev on Michael Mauboussin's 50-question decision calibration test | [仓库](https://github.com/eggmasonvalue/jev-takes-mauboussin) |
| FFatTiger/new-api-plugin-typesafe | TypeSafe AI System One (Jev) task plugin for QuantumNous/new-api — native /v1/systemone, synchronous evaluation, token billing | [仓库](https://github.com/FFatTiger/new-api-plugin-typesafe) |
| heaven-hm/jev-system-one | A polished OpenAI + TypeSafe Jev terminal interface for answers with transparent decision reports | [仓库](https://github.com/heaven-hm/jev-system-one) |
| hifizz/jev-finance-benchmark | typesafe.ai model jev finance benchmark | [仓库](https://github.com/hifizz/jev-finance-benchmark) |
| Jabbslad/pi-jev-tools | TypeSafe ranking, classification, retrieval and structured-decision tools for Pi coding agents | [仓库](https://github.com/Jabbslad/pi-jev-tools) |
| javiergradiche/ruby_llm-providers-typesafe | TypeSafe System One models (Jev) for RubyLLM: typed judgments, evaluations and reranking. | [仓库](https://github.com/javiergradiche/ruby_llm-providers-typesafe) · [网站](https://rubygems.org/gems/ruby_llm-providers-typesafe) |
| jeiel85/jevscope | Local-first visual decision debugger and regression testbench for TypeSafe AI Jev | [仓库](https://github.com/jeiel85/jevscope) · [网站](https://jeiel85.github.io/jevscope/) |
| jmanhype/jev-dspy-lab | Reproducible calibration and selective-risk benchmarks for Jev/TypeSafe decisions in DSPy workflows | [仓库](https://github.com/jmanhype/jev-dspy-lab) |
| Menny1337/jev-lab | TypeScript experiments, evaluations, and latency benchmarks for TypeSafe's Jev model | [仓库](https://github.com/Menny1337/jev-lab) |
| misaalya/snbt-jev-bench |  Jev on Indonesia's SNBT 2025 university entrance test: 159 questions, seven subtests, audited answer keys. | [仓库](https://github.com/misaalya/snbt-jev-bench) |
| ndolinschi/jev-wave | TypeSafe Jev research + 5 product specs | [仓库](https://github.com/ndolinschi/jev-wave) |
| NicolasMontone/jev-evals | Rubric-based eval harness cheap enough to run on every PR, powered by typesafe-ai/jev | [仓库](https://github.com/NicolasMontone/jev-evals) |
| robipop22/Jev-is-odd | Ask Jev by TypeSafe AI whether a number is odd. TypeScript, real token usage, and latency benchmarks. | [仓库](https://github.com/robipop22/Jev-is-odd) |
| samoweb3/jev-x-posts | Sortable 48-hour X post report for Jev, TypeSafe AI and Diogo Almeida, with Jev sentiment labels | [仓库](https://github.com/samoweb3/jev-x-posts) |
| trophee-bot/typesafe-oracles | Evaluating TypeSafe's System One primitives (Choice/Score/Noul) — where a typed oracle beats an LLM call | [仓库](https://github.com/trophee-bot/typesafe-oracles) |
| TyrellD1/typesafe-ai_smoke-test | Smoke test: route prompts to a work or life database with TypeSafe AI (Jev), 30-case eval | [仓库](https://github.com/TyrellD1/typesafe-ai_smoke-test) |
| vehas/thaiexam-jev-charts | Charts: TypeSafe Jev evaluated on Thai standardized exams vs 110 other models | [仓库](https://github.com/vehas/thaiexam-jev-charts) |
| vnmoorthy/siege | SIEGE: 200 people vs one agent. A typed action gate (TypeSafe System One) that learns from every breach, evaluated by W&B Weave, hardened by a defender loop. Built at CoreWeave Hacks: Agent Loops 2026. | [仓库](https://github.com/vnmoorthy/siege) · [网站](https://vnmoorthy.github.io/siege/) |

<a id="category-9"></a>

## SDKs

| 项目或资源 | 原始说明 | 链接 |
| --- | --- | --- |
| kitze/skillbox | Self-hosted, versioned skills library for AI agents. MCP, scoped clients, and optional Jev recommendations. | [仓库](https://github.com/kitze/skillbox) |
| pithings/advocaat | A small, type-safe client for asking AI questions about your data, powered by TypeSafe Jev. | [仓库](https://github.com/pithings/advocaat) |
| gamesonrblx/Jevbridge | ACP and MCP adapter that bridges TypeSafe Jev with any LLM — computer use and typed decisions alongside Codex, Claude, Grok, and OpenCode. | [仓库](https://github.com/gamesonrblx/Jevbridge) |
| Twister915/typesafe-ai | Typed TypeSafe AI clients for Rust, with async and blocking backends and observable retries. | [仓库](https://github.com/Twister915/typesafe-ai) |
| arunav25/jev-mcp | Connect JEV to MCP clients and compare its judgments against general-purpose LLMs using shared datasets and measurable accuracy. | [仓库](https://github.com/arunav25/jev-mcp) |
| saibimajdi/typesafeai-dotnet-sdk | Community .NET SDK for the TypeSafe AI System One API — typed noul, choice, and score questions with structured, confidence-scored answers. Not affiliated with TypeSafe AI. | [仓库](https://github.com/saibimajdi/typesafeai-dotnet-sdk) · [网站](https://saibimajdi.github.io/typesafeai-dotnet-sdk/) |
| joshmn/typesafe-sdk | Ruby client for typesafe.ai | [仓库](https://github.com/joshmn/typesafe-sdk) |
| frostney/clean-code-review | Every code file in a pull request, judged against Uncle Bob's Clean Code by TypeSafe's Jev, then reviewed by Luna. Built on eve and Next.js. | [仓库](https://github.com/frostney/clean-code-review) · [网站](https://clean-code-review.vercel.app) |
| gilljon/typesafe-ai-rs | Independent async and blocking Rust SDK for the TypeSafe AI System One API | [仓库](https://github.com/gilljon/typesafe-ai-rs) · [网站](https://docs.rs/typesafe-ai-rs) |
| Olti1947/jev-java | Idiomatic Java SDK for TypeSafe AI Jev System One decision engine | [仓库](https://github.com/Olti1947/jev-java) |
| 2389-research/typesafe-go | A Go client for the TypeSafe System One API — typed judgments and probabilities, zero dependencies outside the standard library. | [仓库](https://github.com/2389-research/typesafe-go) |
| Hawxy/TypeSafeAI.Net | .NET SDK for the TypeSafe AI platform | [仓库](https://github.com/Hawxy/TypeSafeAI.Net) · [网站](https://docs.typesafe.ai/) |
| InsaneArts/typesafe-sdk-swift | Swift SDK for TypeSafe AI | [仓库](https://github.com/InsaneArts/typesafe-sdk-swift) |
| nshkrdotcom/typesafe_sdk | An idiomatic, type-safe Elixir port of the official TypeScript AI SDK (ai / ai-sdk) providing unified LLM integrations, streaming text and structured outputs, tool calling, and agentic workflows. Jev is their current flagship model and is the first System One model. | [仓库](https://github.com/nshkrdotcom/typesafe_sdk) |
| Premo-Cloud/typesafe-sdk-java | Community Java client for the TypeSafe System One API (unofficial) | [仓库](https://github.com/Premo-Cloud/typesafe-sdk-java) · [网站](https://docs.typesafe.ai) |
| tontoko/jev-browser | One grounded Jev/Playwright core: typed SDK, persistent CLI, and MCP server with native browser operations and deterministic assertions. | [仓库](https://github.com/tontoko/jev-browser) |
| yzfly/awesome-jev-zh | Jev / TypeSafe System One 中文精选列表：官方资料、SDK、爆款应用、Agent 工具、开源复现与独立评测，附中文上手指南，每日自动收录 GitHub 热门项目。 | [仓库](https://github.com/yzfly/awesome-jev-zh) · [网站](https://code.jiangshu.ai/awesome-jev-zh/) |
| AboveColin/jevclient | Async Python client for TypeSafe Jev. Typed questions in, probabilities and choices out, no prose to parse. | [仓库](https://github.com/AboveColin/jevclient) · [网站](https://pypi.org/project/jevclient/) |
| burnigtm/jev-mcp | MCP server that puts TypeSafe Jev on the coding loop in Cursor, Codex, and any MCP client | [仓库](https://github.com/burnigtm/jev-mcp) |
| chez-shanpu/typesafeai-go | Go SDK for TypeSafe AI API https://docs.typesafe.ai/api | [仓库](https://github.com/chez-shanpu/typesafeai-go) |
| fgn/jevgo | Go client for TypeSafe AI's System One API (Jev), with optional Langfuse instrumentation | [仓库](https://github.com/fgn/jevgo) |
| Gaurav-Gosain/jev-go | Go client for TypeSafe's System One API and its model Jev: typed judgments and calibrated probabilities instead of generated text | [仓库](https://github.com/Gaurav-Gosain/jev-go) |
| guillemus/jev-go | Unofficial Go SDK for TypeSafe AI's Jev API | [仓库](https://github.com/guillemus/jev-go) |
| JedimEmO/typesafe-client | Unofficial typed async Rust client for the TypeSafe System One API | [仓库](https://github.com/JedimEmO/typesafe-client) |
| latere-ai/typesafe-ai-go-sdk | Go client for the TypeSafe API | [仓库](https://github.com/latere-ai/typesafe-ai-go-sdk) |
| Stumble/jev-go | Community Go SDK for TypeSafe AI Jev / System One | [仓库](https://github.com/Stumble/jev-go) |
| zhirschtritt/typesafe-go | Idiomatic Go SDK for the TypeSafe AI API | [仓库](https://github.com/zhirschtritt/typesafe-go) · [网站](https://pkg.go.dev/github.com/zhirschtritt/typesafe-go) |
| AbdelStark/s1-rs | Typed System One layer for Rust (Choice/Score/Noul).  | [仓库](https://github.com/AbdelStark/s1-rs) |
| AbdelStark/typesafe-rs | Latency-first Rust SDK for TypeSafe System One.  | [仓库](https://github.com/AbdelStark/typesafe-rs) · [网站](https://docs.rs/typesafe-rs/latest/typesafe_rs/) |
| abeldzan/jev-rs | Async-first Rust SDK for the TypeSafe AI API | [仓库](https://github.com/abeldzan/jev-rs) |
| anilsenay/jev | Unofficial Go client for TypeSafe's System One API  and its model, Jev. | [仓库](https://github.com/anilsenay/jev) |
| aoprisan/typesafe-ai-rust-sdk | 原始数据未提供说明。 | [仓库](https://github.com/aoprisan/typesafe-ai-rust-sdk) |
| aoprisan/typesafe-ai-scala-sdk | 原始数据未提供说明。 | [仓库](https://github.com/aoprisan/typesafe-ai-scala-sdk) |
| binnash/typesafe-sdk | PHP & Laravel SDK for TypeSafe AI's JEV Model series | [仓库](https://github.com/binnash/typesafe-sdk) |
| dakdevs/decide-mcp | Configurable decision MCP server with AI SDK, Jev, percentage scores, and bias profile routing | [仓库](https://github.com/dakdevs/decide-mcp) |
| david1gp/jev | Result-based TypeSafe System One client library and jev command-line interface. | [仓库](https://github.com/david1gp/jev) |
| ehmpathy/rhachet-brains-typesafeai | rhachet brain.atom adapter for typesafe.ai classifier models | [仓库](https://github.com/ehmpathy/rhachet-brains-typesafeai) |
| jonesmelton/verdict | ocaml sdk for typesafe.ai's jev model | [仓库](https://github.com/jonesmelton/verdict) |
| kazz187/jev-sdk-go | Go 1.27 client for TypeSafe AI's Jev (System One) API: typed questions, typed answers | [仓库](https://github.com/kazz187/jev-sdk-go) |
| kraayenjon/awesome-jev | A curated list of Jev use cases, projects, SDKs, and resources. Jev is TypeSafe AI's System One model for fast, typed decisions in software — Choice, Score, and Noul with calibrated probabilities. | [仓库](https://github.com/kraayenjon/awesome-jev) · [网站](https://madewithjev.com) |
| kunobi-ninja/kunobi-jev | Rust client for the TypeSafe System One API (Jev) | [仓库](https://github.com/kunobi-ninja/kunobi-jev) |
| lu-zero/systemone | Rust client for the TypeSafe AI systemone API | [仓库](https://github.com/lu-zero/systemone) |
| maddygoround/typesafeai-cli | Give your AI agent a CLI companion who has access to TypeSafe AI's Jev. | [仓库](https://github.com/maddygoround/typesafeai-cli) |
| mhmdkzr/jev | An unofficial Go client for TypeSafe's System One Jev model | [仓库](https://github.com/mhmdkzr/jev) |
| mzainzulifqar/jev-php-sdk | PHP SDK for TypeSafe's Jev: send text and typed questions, get typed answers with calibrated confidence. PHP 8.1+, works with any PSR-18 client, Laravel 8–13. | [仓库](https://github.com/mzainzulifqar/jev-php-sdk) · [网站](https://packagist.org/packages/mzainzulifqar/jev-php-sdk) |
| Nibir1/typesafe-go | Community-maintained Go SDK for the TypeSafe "System One" API (`Jev`) | [仓库](https://github.com/Nibir1/typesafe-go) |
| nu-sync/effect-evaluation | An Effect-native client for TypeSafe AI System One models (Jev) | [仓库](https://github.com/nu-sync/effect-evaluation) |
| obie/ruby_decision_model | Ruby client for decision models such as Typesafe Jev | [仓库](https://github.com/obie/ruby_decision_model) |
| pierangeloc/zio-typesafe-ai | Simple ZIO based client library for typesafe-ai | [仓库](https://github.com/pierangeloc/zio-typesafe-ai) |
| RadixILS-Dev/typesafe-sdk-go | A typesafe.ai client written in golang | [仓库](https://github.com/RadixILS-Dev/typesafe-sdk-go) |
| sava-software/typesafe-client | Java client for the TypeSafe System One API (Jev): typed questions in, calibrated probabilities out | [仓库](https://github.com/sava-software/typesafe-client) |
| SergeAx/typesafe-sdk-go | TypeSafe.AI Go SDK | [仓库](https://github.com/SergeAx/typesafe-sdk-go) |
| Shubham510/typesafe-go | Unofficial Go SDK for TypeSafe AI's System One API (Jev). | [仓库](https://github.com/Shubham510/typesafe-go) |
| smasato/jev-jp-address | Jev (TypeSafe) 性能評価プロジェクト — 日本郵便 KEN_ALL をマスタに、AI SDK 経由の Jev が住所のあいまい一致にどこまで使えるかを検証 | [仓库](https://github.com/smasato/jev-jp-address) |
| stillroom/agent-workflow-lab | Typed state, explicit transitions, one narrow model judgment, and a human approval gate — a rebuildable agent workflow using and testing Jev. | [仓库](https://github.com/stillroom/agent-workflow-lab) |
| tinyhumansai/tinyjevclient | An integration with jev by typesafe.ai in Rust | [仓库](https://github.com/tinyhumansai/tinyjevclient) |
| typesend/typesafe_ai | Typed Elixir client for TypeSafe AI and its Jev System One model, with offline test stubs, concurrent fan-out, and atom-keyed answers. | [仓库](https://github.com/typesend/typesafe_ai) · [网站](https://typesafe-api.hexdocs.pm/readme.html) |
| valksor/typesafe-sdk-go | Unofficial Go SDK for the TypeSafe AI System One API — 1:1 parity with the official JS and Python SDKs. Not affiliated with TypeSafe AI. | [仓库](https://github.com/valksor/typesafe-sdk-go) |
| valksor/typesafe-sdk-php | Unofficial PHP SDK for the TypeSafe AI System One API — 1:1 parity with the official JS and Python SDKs. Not affiliated with TypeSafe AI. | [仓库](https://github.com/valksor/typesafe-sdk-php) · [网站](https://packagist.org/packages/valksor/typesafe-sdk-php) |
| xingwudao/OpenJev | OpenJev: an independent Jev-inspired System One decision API based on TypeSafe.ai concepts. Choice, score and noul primitives, local mock server, Python and TypeScript SDKs. Real inference planned; not affiliated with TypeSafe AI. | [仓库](https://github.com/xingwudao/OpenJev) |

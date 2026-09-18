# Awesome Jev — Full Catalog Mirror

> Mirror of [awesomejev.com](https://awesomejev.com/) · snapshot **2026-09-18** · **410** entries
>
> Source data: [`hellogumbo/awesome-jev` `data/projects.json`](https://github.com/hellogumbo/awesome-jev/blob/main/data/projects.json) (powers the site).
> Not affiliated with TypeSafe AI or awesomejev.com. Stars as of snapshot; may be stale until next refresh.

## Counts

| Section | Count |
| --- | ---: |
| 01 · Official | 19 |
| 02 · SDKs & clients | 35 |
| 03 · Integrations | 22 |
| 04 · Agent tooling | 61 |
| 05 · Browser & computer use | 24 |
| 06 · Applications | 34 |
| 07 · Games & simulations | 47 |
| 08 · Demos & playgrounds | 46 |
| 09 · Benchmarks & research | 71 |
| 10 · Other lists | 3 |
| 11 · Articles & threads | 48 |
| **Total** | **410** |

## 01 · Official

*Docs, SDKs, and resources from TypeSafe AI.*

*19 entries*

| Project | Description | Lang | Stars | Links |
| --- | --- | --- | --- | --- |
| [TypeSafe AI](https://typesafe.ai) | Company homepage, waitlist, and product overview. | — | — | [site](https://typesafe.ai) |
| [Documentation](https://docs.typesafe.ai) | Introduction, primitives, patterns, cookbooks, HTTP API, and SDK references. | — | — | [site](https://docs.typesafe.ai) |
| [Quick start](https://docs.typesafe.ai/introduction/quickstart) | Shortest path from an API key to a typed decision. | — | — | [site](https://docs.typesafe.ai/introduction/quickstart) |
| [Playground](https://console.typesafe.ai/playground) | Paste a state, add questions, and see typed answers in the browser. | — | — | [site](https://console.typesafe.ai/playground) |
| [HTTP API reference](https://docs.typesafe.ai/api) | Request and response contract for POST /v1/systemone. | — | — | [site](https://docs.typesafe.ai/api) |
| [Primitives](https://docs.typesafe.ai/primitives) | Choice, Score, and Noul: the three question types and what they return. | — | — | [site](https://docs.typesafe.ai/primitives) |
| [Patterns](https://docs.typesafe.ai/patterns) | Speculative fan-out, confidence-gated routing, composite scoring, and intent routing. | — | — | [site](https://docs.typesafe.ai/patterns) |
| [Cookbooks](https://docs.typesafe.ai/cookbooks/parallel_questions) | Reproducible recipes: parallel questions, reranking, guardrails, citation checks, extraction, hierarchical classification. | — | — | [site](https://docs.typesafe.ai/cookbooks/parallel_questions) |
| [Smart home demo](https://docs.typesafe.ai/demos/smart-home) | Official interactive demo of speculative fan-out: many questions in one call, code keeps the relevant answers. | — | — | [site](https://docs.typesafe.ai/demos/smart-home) |
| [Workflow evals](https://evals.typesafe.ai) | Published eval methodology and per-model results for System One workflows. | — | — | [site](https://evals.typesafe.ai) |
| [Jev 1.13 jaggedness](https://docs.typesafe.ai/model-jaggedness/jev-1.13) | Known failure modes of the current public model, documented by TypeSafe. | — | — | [site](https://docs.typesafe.ai/model-jaggedness/jev-1.13) |
| [Introducing System One Models and Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev) | Launch post: architecture, RLCD training, pricing, Doom and Wikiracing demos, FAQ. | — | — | [site](https://typesafe.ai/blog/introducing-system-one-models-and-jev) |
| [Manifesto](https://typesafe.ai/manifesto) | The case for machine-native intelligence built for software, not conversation. | — | — | [site](https://typesafe.ai/manifesto) |
| [Discord](https://discord.gg/typesafe) | Official TypeSafe server. Builder demos live in the Show and Tell channel. | — | — | [site](https://discord.gg/typesafe) |
| [@typesafeai on X](https://x.com/typesafeai) | Product and research updates. | — | — | [site](https://x.com/typesafeai) |
| [TypeSafe agent skills](https://github.com/typesafe-ai/skills) | Official agent skill for Claude Code, Codex, and compatible agents: primitives, patterns, and how to structure evaluations. | — | 170 | [repo](https://github.com/typesafe-ai/skills) · [site](https://typesafe.ai) |
| [TypeSafe JavaScript SDK](https://github.com/typesafe-ai/typesafe-sdk-js) | Official TypeScript/JavaScript client with inferred answer types. npm install @typesafe-ai/sdk. | TypeScript | 100 | [repo](https://github.com/typesafe-ai/typesafe-sdk-js) |
| [System One adapter (Python)](https://github.com/typesafe-ai/system-one-adapter-python) | Official drop-in TypeSafeClient replacement backed by OpenAI, Anthropic, and compatible LLM APIs, for comparing Jev against chat models. | Python | 97 | [repo](https://github.com/typesafe-ai/system-one-adapter-python) |
| [TypeSafe Python SDK](https://github.com/typesafe-ai/typesafe-sdk-python) | Official sync and async Python client. pip install typesafe-sdk. | Python | 70 | [repo](https://github.com/typesafe-ai/typesafe-sdk-python) · [site](https://docs.typesafe.ai/sdk/python) |

## 02 · SDKs & clients

*Community clients for languages without an official SDK.*

*35 entries*

| Project | Description | Lang | Stars | Links |
| --- | --- | --- | --- | --- |
| [advocaat](https://github.com/pithings/advocaat) | A small, type-safe client for asking AI questions about your data, powered by TypeSafe Jev. | TypeScript | 61 | [repo](https://github.com/pithings/advocaat) |
| [typesafe-ai](https://github.com/Twister915/typesafe-ai) | Typed TypeSafe AI clients for Rust, with async and blocking backends and observable retries. | Rust | 7 | [repo](https://github.com/Twister915/typesafe-ai) |
| [zod-jev](https://github.com/jomatsu/zod-jev) | Zod validates the shape, Jev validates the meaning: semantic checks on request bodies become calibrated probabilities you threshold in code. | TypeScript | 6 | [repo](https://github.com/jomatsu/zod-jev) |
| [typesafe-dotnet-sdk](https://github.com/saibimajdi/typesafeai-dotnet-sdk) | Community .NET SDK for the TypeSafe AI System One API — typed noul, choice, and score questions with structured, confidence-scored answers. Not affiliated with TypeSafe AI. | C# | 5 | [repo](https://github.com/saibimajdi/typesafeai-dotnet-sdk) · [site](https://saibimajdi.github.io/typesafeai-dotnet-sdk/) |
| [typesafe-sdk (joshmn)](https://github.com/joshmn/typesafe-sdk) | Ruby client for typesafe.ai | Ruby | 4 | [repo](https://github.com/joshmn/typesafe-sdk) |
| [super-jev](https://github.com/Kevthetech143/super-jev) | A small, extensible decision-to-action harness for TypeSafe Jev | TypeScript | 4 | [repo](https://github.com/Kevthetech143/super-jev) |
| [jod](https://github.com/mateonunez/jod) | Semantic schemas over TypeSafe's Jev — validate the state locally, then project typed answers. | TypeScript | 3 | [repo](https://github.com/mateonunez/jod) · [site](https://npmjs.com/package/@mateonunez/jod) · [post](https://x.com/mmateonunez/status/2100612699394597125) |
| [typesafe-ai-rs](https://github.com/gilljon/typesafe-ai-rs) | Independent async and blocking Rust SDK for the TypeSafe AI System One API | Rust | 3 | [repo](https://github.com/gilljon/typesafe-ai-rs) · [site](https://docs.rs/typesafe-ai-rs) |
| [TypeSafeAI.Net](https://github.com/Hawxy/TypeSafeAI.Net) | .NET SDK for the TypeSafe AI platform | C# | 2 | [repo](https://github.com/Hawxy/TypeSafeAI.Net) · [site](https://docs.typesafe.ai/) |
| [typesafe-go (cole-gillespie)](https://github.com/cole-gillespie/typesafe-go) | unofficial go SDK for typesafe AI, with typed answers, retries, and context support | Go | 2 | [repo](https://github.com/cole-gillespie/typesafe-go) |
| [typesafe-sdk-swift](https://github.com/InsaneArts/typesafe-sdk-swift) | Swift SDK for TypeSafe AI | Swift | 2 | [repo](https://github.com/InsaneArts/typesafe-sdk-swift) |
| [typesafe_sdk](https://github.com/nshkrdotcom/typesafe_sdk) | An idiomatic, type-safe Elixir port of the official TypeScript AI SDK (ai / ai-sdk) providing unified LLM integrations, streaming text and structured outputs, tool calling, and agentic workflows. Jev is their current flagship model and is the first System One model. | Elixir | 1 | [repo](https://github.com/nshkrdotcom/typesafe_sdk) · [post](https://x.com/elixirforum/status/2100495661942677648) |
| [jevgo](https://github.com/fgn/jevgo) | Go client for TypeSafe AI's System One API (Jev), with optional Langfuse instrumentation | Go | 1 | [repo](https://github.com/fgn/jevgo) |
| [jevclient](https://github.com/AboveColin/jevclient) | Async Python client for TypeSafe Jev. Typed questions in, probabilities and choices out, no prose to parse. | Python | 1 | [repo](https://github.com/AboveColin/jevclient) · [site](https://pypi.org/project/jevclient/) |
| [jev-go (guillemus)](https://github.com/guillemus/jev-go) | Unofficial Go SDK for TypeSafe AI's Jev API | Go | 1 | [repo](https://github.com/guillemus/jev-go) |
| [jev-go (Gaurav-Gosain)](https://github.com/Gaurav-Gosain/jev-go) | Go client for TypeSafe's System One API and its model Jev: typed judgments and calibrated probabilities instead of generated text | Go | 1 | [repo](https://github.com/Gaurav-Gosain/jev-go) |
| [typesafe-sdk-rust](https://github.com/codeitlikemiley/typesafe-sdk-rust) | Rust SDK for the TypeSafe AI API | Rust | 1 | [repo](https://github.com/codeitlikemiley/typesafe-sdk-rust) |
| [zio-typesafe-ai](https://github.com/jamesward/zio-typesafe-ai) | Scala 3 / ZIO client for the System One API: typed end-to-end, several questions per round-trip via NamedTuple. | Scala | 1 | [repo](https://github.com/jamesward/zio-typesafe-ai) |
| [typesafe-client](https://github.com/JedimEmO/typesafe-client) | Unofficial typed async Rust client for the TypeSafe System One API | Rust | 1 | [repo](https://github.com/JedimEmO/typesafe-client) |
| [typesafeai-go](https://github.com/chez-shanpu/typesafeai-go) | Go SDK for TypeSafe AI API https://docs.typesafe.ai/api | Go | 1 | [repo](https://github.com/chez-shanpu/typesafeai-go) |
| [kunobi-jev](https://github.com/kunobi-ninja/kunobi-jev) | Rust client for the TypeSafe System One API (Jev) | Rust | 0 | [repo](https://github.com/kunobi-ninja/kunobi-jev) |
| [tinyjevclient](https://github.com/tinyhumansai/tinyjevclient) | An integration with jev by typesafe.ai in Rust | Rust | 0 | [repo](https://github.com/tinyhumansai/tinyjevclient) |
| [decido](https://github.com/yairshy/decido) | Probabilistic decisions for Python. Use Jev or bring your own provider; crawl with Playwright. | Python | 0 | [repo](https://github.com/yairshy/decido) |
| [typesafe-sdk (binnash)](https://github.com/binnash/typesafe-sdk) | PHP & Laravel SDK for TypeSafe AI's JEV Model series | PHP | 0 | [repo](https://github.com/binnash/typesafe-sdk) |
| [jev](https://github.com/anilsenay/jev) | Unofficial Go client for TypeSafe's System One API  and its model, Jev. | Go | 0 | [repo](https://github.com/anilsenay/jev) |
| [typesafe-go (zhirschtritt)](https://github.com/zhirschtritt/typesafe-go) | Idiomatic Go SDK for the TypeSafe AI API | Go | 0 | [repo](https://github.com/zhirschtritt/typesafe-go) |
| [typesafe_sdk_ex](https://github.com/vinnie357/typesafe_sdk_ex) | Typesafe AI SDK in Elixir using Req | Elixir | 0 | [repo](https://github.com/vinnie357/typesafe_sdk_ex) |
| [typesafe-sdk-php](https://github.com/valksor/typesafe-sdk-php) | Unofficial PHP SDK for the TypeSafe AI System One API — 1:1 parity with the official JS and Python SDKs. Not affiliated with TypeSafe AI. | PHP | 0 | [repo](https://github.com/valksor/typesafe-sdk-php) · [site](https://packagist.org/packages/valksor/typesafe-sdk-php) |
| [typesafe-sdk-go](https://github.com/valksor/typesafe-sdk-go) | Unofficial Go SDK for the TypeSafe AI System One API — 1:1 parity with the official JS and Python SDKs. Not affiliated with TypeSafe AI. | Go | 0 | [repo](https://github.com/valksor/typesafe-sdk-go) |
| [typesafe_ai (typesend)](https://github.com/typesend/typesafe_ai) | Unofficial Elixir SDK for the TypeSafe AI API | Elixir | 0 | [repo](https://github.com/typesend/typesafe_ai) · [site](https://typesafe-api.hexdocs.pm/readme.html) |
| [typesafe.zig](https://github.com/mattneel/typesafe.zig) | An idiomatic Zig client for the TypeSafe AI API | Zig | 0 | [repo](https://github.com/mattneel/typesafe.zig) |
| [typesafe](https://github.com/mattneel/typesafe) | An idiomatic Elixir client for the TypeSafe AI API | Elixir | 0 | [repo](https://github.com/mattneel/typesafe) |
| [typesafe_ai (hfiguera)](https://github.com/hfiguera/typesafe_ai) | A supervised Mint client for the TypeSafe AI System One API | Elixir | 0 | [repo](https://github.com/hfiguera/typesafe_ai) |
| [s1-rs](https://github.com/AbdelStark/s1-rs) | Typed System One layer for Rust (Choice/Score/Noul). | Rust | 0 | [repo](https://github.com/AbdelStark/s1-rs) |
| [typesafe-rs](https://github.com/AbdelStark/typesafe-rs) | Latency-first Rust SDK for TypeSafe System One. | Rust | 0 | [repo](https://github.com/AbdelStark/typesafe-rs) · [site](https://docs.rs/typesafe-rs/latest/typesafe_rs/) |

## 03 · Integrations

*Jev inside frameworks, gateways, and platforms.*

*22 entries*

| Project | Description | Lang | Stars | Links |
| --- | --- | --- | --- | --- |
| [eve](https://github.com/vercel/eve) | Vercel's open agent framework, which ships Jev as the default evaluation model in its experimental evaluate path. | TypeScript | 5,249 | [repo](https://github.com/vercel/eve) · [site](https://eve.dev) |
| [ai-cli](https://github.com/vercel-labs/ai-cli) | Vercel Labs terminal CLI that can run Jev as the evaluation model for its evaluate command. | TypeScript | 782 | [repo](https://github.com/vercel-labs/ai-cli) · [site](https://ai-cli.dev) |
| [Loki](https://github.com/wundercorp/loki) | Self-improving agent harness with an optional TypeSafe Jev companion for typed Choice, Score, and Noul judgments. | Python | 23 | [repo](https://github.com/wundercorp/loki) · [site](https://loki.computer) · [post](https://x.com/wundercorp/status/2100619500966056196) |
| [neo4jev](https://github.com/jexp/neo4jev) | Typesafe.ai System One Model Jev navigating a Neo4j graph by using a classifier over neighbouring relationships | Jupyter Notebook | 11 | [repo](https://github.com/jexp/neo4jev) · [post](https://x.com/0xLogicrw/status/2100478725393686556) |
| [ruby_llm-typesafe](https://github.com/kieranklaassen/ruby_llm-typesafe) | TypeSafe structured-output provider for RubyLLM 2 | Ruby | 9 | [repo](https://github.com/kieranklaassen/ruby_llm-typesafe) |
| [HA-Jev](https://github.com/AboveColin/HA-Jev) | Home Assistant integration for TypeSafe Jev. Ask a question about your house and get a probability, a choice or a score as an entity. | Python | 6 | [repo](https://github.com/AboveColin/HA-Jev) |
| [typesafe-jev-workflow](https://github.com/GiesN/typesafe-jev-workflow) | Async LangGraph workflow that gets a typed Jev Choice (invoice or general) and routes each inbound email to the matching handler. | Python | 4 | [repo](https://github.com/GiesN/typesafe-jev-workflow) |
| [a0-typesafe-ai](https://github.com/3clyp50/a0-typesafe-ai) | TypeSafe AI Jev judgments for Agent Zero, with typed tools and probability cards. | Python | 4 | [repo](https://github.com/3clyp50/a0-typesafe-ai) |
| [typesafe-on-neon](https://github.com/andrelandgraf/safer-with-jev) | Neon Function proxy for the Neon AI Gateway with TypeSafe Jev routing. | TypeScript | 3 | [repo](https://github.com/andrelandgraf/safer-with-jev) · [post](https://x.com/0xLogicrw/status/2100478725393686556) |
| [pg_typesafe](https://github.com/giuliosmall/pg_typesafe) | Pre-alpha PostgreSQL extension for TypeSafe AI (Jev) categorical classification | C | 2 | [repo](https://github.com/giuliosmall/pg_typesafe) |
| [laravel-typesafe-jev](https://github.com/Butochnikov/laravel-typesafe-jev) | Unofficial Laravel integration for TypeSafe Jev AI with typed responses, async requests, scoped dependency injection, and testing fakes. | PHP | 2 | [repo](https://github.com/Butochnikov/laravel-typesafe-jev) |
| [typesafe-ai-rails](https://github.com/GenieRobot/typesafe-ai-rails) | Community Rails integration on the typesafe-sdk gem: configuration, persisted usage and cost telemetry, and opt-in confidence policies. | Ruby | 1 | [repo](https://github.com/GenieRobot/typesafe-ai-rails) |
| [judging-with-typesafe](https://github.com/carlsonchik/judging-with-typesafe) | Скилл для агентов Letta: суждения по критериям через TypeSafe System One (Jev) | Python | 1 | [repo](https://github.com/carlsonchik/judging-with-typesafe) |
| [pydantic-jev-examples](https://github.com/adtyavrdhn/pydantic-jev-examples) | Pydantic AI capabilities made stronger with Jev: small runnable demos, one file each | Python | 1 | [repo](https://github.com/adtyavrdhn/pydantic-jev-examples) |
| [typesafe-assist](https://github.com/JanOstrowka/typesafe-assist) | Home Assistant Assist conversation agent powered by TypeSafe's Jev (System One) model | Python | 1 | [repo](https://github.com/JanOstrowka/typesafe-assist) |
| [Jev4Mellea](https://github.com/SoundBlaster/Jev4Mellea) | Jev adapter to Mellea | Python | 0 | [repo](https://github.com/SoundBlaster/Jev4Mellea) |
| [n8n-nodes-typesafe-ai](https://github.com/DomMonte/n8n-nodes-typesafe-ai) | n8n community node for the TypeSafe AI System One API — typed yes/no, choice and score questions with calibrated probabilities | TypeScript | 0 | [repo](https://github.com/DomMonte/n8n-nodes-typesafe-ai) · [site](https://docs.typesafe.ai) |
| [typesafe-ui](https://github.com/BunsDev/typesafe-ui) | shadcn-style reusable components and blocks for using TypeSafe AI. | TypeScript | 0 | [repo](https://github.com/BunsDev/typesafe-ui) · [site](https://typesafe-ui.vercel.app) |
| [Vercel AI SDK provider](https://ai-sdk.dev/providers/ai-sdk-providers/typesafe-ai) | @ai-sdk/typesafe-ai plus experimental_evaluate; use jev-latest as an evaluation model. | — | — | [site](https://ai-sdk.dev/providers/ai-sdk-providers/typesafe-ai) · [post](https://x.com/vercel_dev/status/2100378959653507175) |
| [Jev on Vercel AI Gateway](https://vercel.com/ai-gateway/models/jev) | Hosted typesafe-ai/jev for AI SDK evaluate calls, no TypeSafe waitlist required. | — | — | [site](https://vercel.com/ai-gateway/models/jev) · [post](https://x.com/typesafeai/status/2100376436272173088) |
| [agentgateway Jev guardrail example](https://x.com/agentgateway/status/2100615437973074097) | Jev as an LLM prompt guardrail inside the agentgateway proxy, with tracing and cost tracking. | TypeScript | — | [post](https://x.com/agentgateway/status/2100615437973074097) |
| [TrainLCD Jev rerank](https://x.com/tinykitten8/status/2100618835443453969) | Pull request adding Jev to station-suggestion reranking in the TrainLCD transit app. | TypeScript | — | [post](https://x.com/tinykitten8/status/2100618835443453969) |

## 04 · Agent tooling

*Gates, routers, reviewers, MCP servers, and skills for coding agents.*

*61 entries*

| Project | Description | Lang | Stars | Links |
| --- | --- | --- | --- | --- |
| [foreman](https://github.com/thruwire/foreman) | Software Factory Foreman: an agent supervisor that uses Jev decisions to keep coding agents on task. | Python | 249 | [repo](https://github.com/thruwire/foreman) · [post](https://x.com/JoshARosen/status/2100573432089866717) |
| [jev-review (devagrawal09)](https://github.com/devagrawal09/jev-review) | A staged code-review workflow and local dashboard built with TypeSafe Jev. | TypeScript | 216 | [repo](https://github.com/devagrawal09/jev-review) · [post](https://x.com/0xLogicrw/status/2100478725393686556) |
| [jev-router (gargpratyush)](https://github.com/gargpratyush/jev-router) | Route to the cheapest model in claude code for your task using jev-router | JavaScript | 106 | [repo](https://github.com/gargpratyush/jev-router) |
| [jev-review (NiazMorshed2007)](https://github.com/NiazMorshed2007/jev-review) | Local-first MCP plugin for continuous software-quality review by AI coding agents, powered by Jev. | TypeScript | 98 | [repo](https://github.com/NiazMorshed2007/jev-review) |
| [jev-mcp (jkudish)](https://github.com/jkudish/jev-mcp) | Proof of concept MCP for Typesafe's new Jev AI model | TypeScript | 59 | [repo](https://github.com/jkudish/jev-mcp) · [post](https://x.com/0xLogicrw/status/2100478725393686556) |
| [pi-warden](https://github.com/DevMortimer/pi-warden) | Guardrails for Pi built on pi-typesafe that steer the agent instead of interrupting you: Jev judges irreversible and off-task tool calls, detects stuck loops, checks unverified done claims, flags slop | TypeScript | 55 | [repo](https://github.com/DevMortimer/pi-warden) |
| [typesafe-mcp](https://github.com/itsmostafa/typesafe-mcp) | Go CLI and single-binary MCP server exposing TypeSafe judgments to Claude Desktop, Claude Code, and Codex. | Go | 51 | [repo](https://github.com/itsmostafa/typesafe-mcp) · [post](https://x.com/0xLogicrw/status/2100478725393686556) |
| [pi-jev (y0usaf)](https://github.com/y0usaf/pi-jev) | TypeSafe Jev as a decision layer for the Pi coding agent: a measured tool-call gate plus jev_ask for typed, calibrated answers | TypeScript | 36 | [repo](https://github.com/y0usaf/pi-jev) |
| [ask-jev-skill](https://github.com/shantanugoel/ask-jev-skill) | Skill for Hermes, and other agents, to ask typesafe's jev | Python | 24 | [repo](https://github.com/shantanugoel/ask-jev-skill) · [post](https://x.com/KevinMagnan/status/2100587059928764726) |
| [jev-codex-router](https://github.com/0xNatoshi/jev-codex-router) | Per-turn model & reasoning routing for Codex, driven by Jev (TypeSafe System One): picks the model, thinking depth and speed mode for every turn. | Python | 21 | [repo](https://github.com/0xNatoshi/jev-codex-router) · [post](https://x.com/0xLogicrw/status/2100478725393686556) |
| [winnow](https://github.com/GhalebDweikat/winnow) | A calibrated context sieve for Claude Code: every tool result is judged by a System One model before it enters context. | Python | 11 | [repo](https://github.com/GhalebDweikat/winnow) · [post](https://x.com/0xLogicrw/status/2100478725393686556) |
| [jev-axi](https://github.com/shiftynick/jev-axi) | Agent-ergonomic CLI for TypeSafe's Jev: fast calibrated judgments (pick, rate, check, rank, triage, guard) from the shell | TypeScript | 8 | [repo](https://github.com/shiftynick/jev-axi) |
| [pi-jev-auto-mode](https://github.com/jomatsu/pi-jev-auto-mode) | Jev (TypeSafe System One) backed auto mode for the Pi coding agent: semantically auto-approves bash, write, and edit tool calls and fails closed when a decision cannot be made. | TypeScript | 8 | [repo](https://github.com/jomatsu/pi-jev-auto-mode) |
| [jev-mcp (blakestone-x)](https://github.com/blakestone-x/jev-mcp) | MCP server for TypeSafe Jev: typed classify, score, check, match and screen for any agent, with confidence on every answer | Python | 7 | [repo](https://github.com/blakestone-x/jev-mcp) · [post](https://x.com/0xLogicrw/status/2100478725393686556) |
| [pi-jev-router](https://github.com/mejiasd3v/pi-jev-router) | Automatic model routing for Pi using TypeSafe's Jev through Vercel AI Gateway | JavaScript | 5 | [repo](https://github.com/mejiasd3v/pi-jev-router) |
| [JevLint](https://github.com/huntedman/JevLint) | Configurable semantic linting powered by Jev, with file-level NOUL judgments and a magic-strings plugin. | TypeScript | 5 | [repo](https://github.com/huntedman/JevLint) |
| [typesafe-skill-router](https://github.com/DECRUX9812/typesafe-skill-router) | TypeSafe (Jev) skill routing for Hermes Agent: names the one skill worth loading, before the model call. Opt-in, stdlib only, ~$0.001 per routed turn. | Python | 4 | [repo](https://github.com/DECRUX9812/typesafe-skill-router) |
| [jev-agent-skill-router](https://github.com/GodsBoy/jev-agent-skill-router) | Typed, confidence-aware agent skill routing with TypeSafe Jev. | Python | 4 | [repo](https://github.com/GodsBoy/jev-agent-skill-router) |
| [pi-jev (TheoOliveira)](https://github.com/TheoOliveira/pi-jev) | Semantic tool routing and typed System One decisions for the Pi coding agent using TypeSafe Jev | TypeScript | 4 | [repo](https://github.com/TheoOliveira/pi-jev) |
| [typesafe-cli (geilt)](https://github.com/geilt/typesafe-cli) | CLI and agent skill for TypeSafe System One (Jev): typed Choice, Score, and Noul judgments. | Python | 3 | [repo](https://github.com/geilt/typesafe-cli) |
| [diffjury](https://github.com/raihankhan-rk/diffjury) | DiffJury — TypeSafe Jev PR risk router + code review coach | TypeScript | 3 | [repo](https://github.com/raihankhan-rk/diffjury) |
| [jev-code](https://github.com/devagrawal09/jev-code) | Bounded TypeSafe Jev workflows for coding agents. | TypeScript | 3 | [repo](https://github.com/devagrawal09/jev-code) |
| [jevex](https://github.com/jvsteiner/jevex) | Minimal agent loop where Jev directs control flow and a LangChain chat model writes argument values and the final response. | Python | 3 | [repo](https://github.com/jvsteiner/jevex) |
| [typesafe-migration-guard](https://github.com/opaielsheikh/typesafe-migration-guard) | Automated database migration safety reviewer powered by TypeSafe AI (Jev System One model) | TypeScript | 2 | [repo](https://github.com/opaielsheikh/typesafe-migration-guard) |
| [typesafe-mod](https://github.com/BeLazy167/typesafe-mod) | Claude Code mod that routes decisions to TypeSafe's Jev model: ranks installed skills per prompt, and answers the agent's own this-or-that questions when confident. | TypeScript | 2 | [repo](https://github.com/BeLazy167/typesafe-mod) |
| [jev-judgment](https://github.com/HyunjunJeon/jev-judgment) | Agent Skill: send closed coding-agent judgments to TypeSafe Jev | Python | 2 | [repo](https://github.com/HyunjunJeon/jev-judgment) |
| [jev-mcp (rashedInt32)](https://github.com/rashedInt32/jev-mcp) | MCP server exposing TypeSafe Jev as typed, calibrated judgment tools: classify, score, check, batched ask. Ships as a Claude Code plugin. | TypeScript | 2 | [repo](https://github.com/rashedInt32/jev-mcp) · [site](https://www.npmjs.com/package/jev-mcp) |
| [jev-shield](https://github.com/caiovicentino/jev-shield) | Semantic MCP firewall powered by Jev — screens every tool call, tool result, and tool description with calibrated System One verification. 94% block recall, 0 false positives, ~$0.00002/check. | JavaScript | 2 | [repo](https://github.com/caiovicentino/jev-shield) |
| [jcm-router](https://github.com/adarshmishra07/jcm-router) | Local proxy that picks the Claude model and effort per message using TypeSafe Jev. Routes subagents, leaves your cached main chat alone. | TypeScript | 2 | [repo](https://github.com/adarshmishra07/jcm-router) |
| [pi-quiet-ask](https://github.com/HyunjunJeon/pi-quiet-ask) | TypeSafe Jev as the pi coding agent's quiet decision layer | TypeScript | 2 | [repo](https://github.com/HyunjunJeon/pi-quiet-ask) |
| [ailerix](https://github.com/tylerjharden/ailerix) | Type-safe model router. Jev (System One) banks each request to a typed catalog route. | TypeScript | 2 | [repo](https://github.com/tylerjharden/ailerix) · [site](https://ailerix.vercel.app) |
| [bicameral](https://github.com/AbdelStark/bicameral) | Hybrid coding harness: System 2 writes, System 1 (Jev) runs reflexes. | TypeScript | 2 | [repo](https://github.com/AbdelStark/bicameral) |
| [jev-system-architect](https://github.com/samtay32/jev-system-architect) | System-architecture skill for TypeSafe AI Jev/System One — find fuzzy semantic judgment and turn it into small Choice/Score/Noul primitives. | — | 2 | [repo](https://github.com/samtay32/jev-system-architect) · [post](https://x.com/Kantorcodes/status/2100607286498488587) |
| [jev-mcp (benballintyn)](https://github.com/benballintyn/jev-mcp) | MCP server giving coding agents typed, calibrated judgments from TypeSafe's Jev model | — | 1 | [repo](https://github.com/benballintyn/jev-mcp) |
| [omp-typesafe](https://github.com/siddicky/omp-typesafe) | TypeSafe AI (Jev) adversarial reviewer and typesafe_ask tool for the omp coding agent | TypeScript | 1 | [repo](https://github.com/siddicky/omp-typesafe) |
| [ask-jev](https://github.com/omni-/ask-jev) | Utilizing Jev, the RLCD-type model provided by TypeSafe AI, to independently and cheaply judge agentic coding sessions. | PowerShell | 1 | [repo](https://github.com/omni-/ask-jev) |
| [jev-predict-skill](https://github.com/DanielKillenberger/jev-predict-skill) | Predict another skill's next closed decision with TypeSafe Jev — without running that skill. | HTML | 1 | [repo](https://github.com/DanielKillenberger/jev-predict-skill) |
| [Antigravity-mcp-semantic-search-with-TypeSafeAi](https://github.com/greenyamao/Antigravity-mcp-semantic-search-with-TypeSafeAi) | Fast semantic code search & diff sanity auditor for AI coding assistants (Antigravity, Cursor, Claude Code) powered by TypeSafe System One. | Python | 1 | [repo](https://github.com/greenyamao/Antigravity-mcp-semantic-search-with-TypeSafeAi) |
| [jev-guard](https://github.com/leepokai/jev-guard) | Prompt-injection and dangerous-action guard for coding agents (Claude Code, Codex, pi, ACP), powered by Jev | JavaScript | 1 | [repo](https://github.com/leepokai/jev-guard) |
| [jev-skillful](https://github.com/bestagentkits/jev-skillful) | Per-prompt capability router for coding agents: resolves installed skills, MCP servers, agents and commands against your prompt via TypeSafe Jev, and measures whether the injection actually helps. | TypeScript | 1 | [repo](https://github.com/bestagentkits/jev-skillful) |
| [jev-router (prismhq)](https://github.com/prismhq/jev-router) | Open-source LLM router that uses TypeSafe's Jev to pick a model, on top of LiteLLM | Python | 1 | [repo](https://github.com/prismhq/jev-router) |
| [jev-mcp (arunav25)](https://github.com/arunav25/jev-mcp) | Connect JEV to MCP clients and compare its judgments against general-purpose LLMs using shared datasets and measurable accuracy. | JavaScript | 0 | [repo](https://github.com/arunav25/jev-mcp) |
| [jev-triage](https://github.com/cephalization/jev-triage) | Uses typeful jev, zero sync to pull and sync large repositories for issue triage | TypeScript | 0 | [repo](https://github.com/cephalization/jev-triage) |
| [omp-jevens-classifier](https://github.com/STRML/omp-jevens-classifier) | Jev-powered model-judged permission gate for OMP (TypeSafe System One) | TypeScript | 0 | [repo](https://github.com/STRML/omp-jevens-classifier) |
| [jev-mcp (burnigtm)](https://github.com/burnigtm/jev-mcp) | MCP server that puts TypeSafe Jev on the coding loop in Cursor, Codex, and any MCP client | TypeScript | 0 | [repo](https://github.com/burnigtm/jev-mcp) |
| [pi-jev-code](https://github.com/KamilPostrozny/pi-jev-code) | Single-agent Pi coding coprocessor with Jev semantic gates, baseline-to-current diff review, and append-only observability telemetry. | TypeScript | 0 | [repo](https://github.com/KamilPostrozny/pi-jev-code) |
| [pi-agent-foreman](https://github.com/alexshpunt/pi-agent-foreman) | Send Pi agents back to work when they stop before the job is done. | TypeScript | 0 | [repo](https://github.com/alexshpunt/pi-agent-foreman) · [site](https://pi.dev/packages/pi-agent-foreman) |
| [check-risk](https://github.com/moezubair/check-risk) | A CLI and GitHub Action that assesses code-change risk using deterministic rules and TypeSafe Jev, recommending checks and reviewers before merge. | TypeScript | 0 | [repo](https://github.com/moezubair/check-risk) |
| [limpet](https://github.com/noplan-inc/limpet) | A Stop hook that stops your coding agent from stopping too early. Plain-language rules, judged by jev. | Python | 0 | [repo](https://github.com/noplan-inc/limpet) |
| [agent-gate-loop](https://github.com/Ripwords/agent-gate-loop) | Reusable GitHub Action: agent fix loop gated by checks, an AI reviewer, and TypeSafe Jev | TypeScript | 0 | [repo](https://github.com/Ripwords/agent-gate-loop) |
| [switchboard](https://github.com/aniruddh-krovvidi/switchboard) | Guardrail + model router for LLM gateways on TypeSafe's Jev (System One model), with an independent accuracy/calibration/latency evaluation. Stdlib Python. | Python | 0 | [repo](https://github.com/aniruddh-krovvidi/switchboard) |
| [frost](https://github.com/marcus/frost) | A flexible and configurable CLI model router using TypeSafe Jev. | Go | 0 | [repo](https://github.com/marcus/frost) · [site](https://haplab.com) |
| [pi-typesafe-jev](https://github.com/legacybridge-tech/pi-typesafe-jev) | A pi extension that exposes TypeSafe (Jev, System One) judgments as five pi tools, so a model can make narrow semantic judgments while your code and your users keep control of thresholds, weights, and actions. | TypeScript | 0 | [repo](https://github.com/legacybridge-tech/pi-typesafe-jev) |
| [pi-typesafe](https://github.com/twilwa/pi-typesafe) | Pi coding-agent extension built on the TypeSafe AI System One API (Jev) | TypeScript | 0 | [repo](https://github.com/twilwa/pi-typesafe) |
| [jev-review (thiago-ss)](https://github.com/thiago-ss/jev-review) | Autonomous Jev pull-request review with typed decisions, calibrated approval gates, and trusted-owner escalation | Python | 0 | [repo](https://github.com/thiago-ss/jev-review) |
| [hermes-jev-router](https://github.com/ussyverse/hermes-jev-router) | Experimental Hermes plugin: Jev-assisted model routing plans with budget and capability constraints. API access pending. | Python | 0 | [repo](https://github.com/ussyverse/hermes-jev-router) |
| [zcode-jev](https://github.com/Zahrannnn/zcode-jev) | Typed judgment layer for coding agents — gates from PRD to ship. Jev-ready, provider-agnostic. | TypeScript | 0 | [repo](https://github.com/Zahrannnn/zcode-jev) |
| [jev-builder-loop](https://github.com/rainbowpuffpuff/jev-builder-loop) | Grok skill: Jev as a judgment sensor in a builder-agent loop (priors × probabilities → next act) | Python | 0 | [repo](https://github.com/rainbowpuffpuff/jev-builder-loop) |
| [typesafeai-review](https://github.com/rbalch/typesafeai-review) | Using Typesafe.AI to generate diff reviews. | Python | 0 | [repo](https://github.com/rbalch/typesafeai-review) |
| [typesafe-demo-mcp](https://github.com/bestagentkits/typesafe-demo-mcp) | MCP server exposing TypeSafe System One judgments (noul, choice, score) as agent tools | TypeScript | 0 | [repo](https://github.com/bestagentkits/typesafe-demo-mcp) |
| [agent-handoff-gate](https://github.com/zsoXi/agent-handoff-gate) | Experimental protocol for evidence-aware agent handoffs, with Jev-assisted review before results reach the lead agent. | Python | 0 | [repo](https://github.com/zsoXi/agent-handoff-gate) · [post](https://x.com/zxdubx/status/2100604919120121960) |

## 05 · Browser & computer use

*Browser, desktop, and mobile automation with Jev choosing the action.*

*24 entries*

| Project | Description | Lang | Stars | Links |
| --- | --- | --- | --- | --- |
| [Jev Ultrafast](https://github.com/browser-use/jev-ultrafast) | Browser Use's ultrafast agent: Jev picks the operation and DOM element in one request; a small LLM only writes text when typing is needed. | Python | 3,904 | [repo](https://github.com/browser-use/jev-ultrafast) · [site](https://browser-use.com) · [post](https://x.com/gregpr07/status/2100411066966749359) |
| [typesafe-computer-use](https://github.com/awlevin/typesafe-computer-use) | Computer use for about $0.0002 a step: OCR the screen, classify the next action with TypeSafe, click. macOS. | Python | 183 | [repo](https://github.com/awlevin/typesafe-computer-use) · [post](https://x.com/awlevin/status/2100262612428894676) |
| [mobile-jev](https://github.com/droidrun/mobile-jev) | Standalone Android agent for Mobilerun where Jev makes every decision, with a live React studio and an Uber demo. | JavaScript | 69 | [repo](https://github.com/droidrun/mobile-jev) |
| [unclutter](https://github.com/kitze/unclutter) | WXT browser extension: Jev-powered page clutter removal with reusable template rules. | TypeScript | 62 | [repo](https://github.com/kitze/unclutter) · [post](https://x.com/thekitze/status/2100595129874817340) |
| [jev-browser (vlad-terin)](https://github.com/vlad-terin/jev-browser) | Jev-powered element selection for your agent’s existing computer-use tools | JavaScript | 31 | [repo](https://github.com/vlad-terin/jev-browser) · [post](https://x.com/0xLogicrw/status/2100478725393686556) |
| [jev-browser (Ying-Kai-Liao)](https://github.com/Ying-Kai-Liao/jev-browser) | Browser automation where an LLM plans and Jev (Typesafe System One) decides. Library, CLI and MCP server. | JavaScript | 6 | [repo](https://github.com/Ying-Kai-Liao/jev-browser) · [post](https://x.com/0xLogicrw/status/2100478725393686556) |
| [jev-browser (vinilana)](https://github.com/vinilana/jev-browser) | Hybrid browser harness: an LLM turns goals into verifiable subgoals, Jev chooses each action and DOM field, Playwright acts. | TypeScript | 3 | [repo](https://github.com/vinilana/jev-browser) |
| [jev-ego](https://github.com/romaluev/jev-ego) | TypeScript browser agent for ego lite: Jev Ultrafast indexed actions, TypeSafe Jev decisions, persistent observe/act CLI. No Chrome or Playwright. | TypeScript | 2 | [repo](https://github.com/romaluev/jev-ego) |
| [computer_use](https://github.com/paulsmith/computer-use-jev) | macOS computer use driven by Jev (TypeSafe System One) as the decision maker | Go | 2 | [repo](https://github.com/paulsmith/computer-use-jev) |
| [psearch](https://github.com/komikat/psearch) | Parallel web search for terminals and agents, with local Chromium and Jev-guided exploration. | Python | 1 | [repo](https://github.com/komikat/psearch) |
| [almond-fastloop](https://github.com/eriestra/almond-fastloop) | Almond-fastloop: Almond's browser computer-use rig (Chrome DevTools + TypeSafe Jev), and the Browser Use Olympics benchmark it is measured on. | HTML | 1 | [repo](https://github.com/eriestra/almond-fastloop) |
| [barrunto](https://github.com/elpumberto/barrunto) | A Chrome extension that brings TypeSafe's Jev to X.com to analyze posts as you browse | TypeScript | 1 | [repo](https://github.com/elpumberto/barrunto) |
| [jev-browser (tontoko)](https://github.com/tontoko/jev-browser) | One grounded Jev/Playwright core: typed SDK, persistent CLI, and MCP server with native browser operations and deterministic assertions. | JavaScript | 1 | [repo](https://github.com/tontoko/jev-browser) |
| [otto](https://github.com/NobleSpartan6/otto) | Open-source native computer use for macOS and Windows: TypeSafe Jev, local OCR, and selective planning. | TypeScript | 1 | [repo](https://github.com/NobleSpartan6/otto) |
| [jev-browse](https://github.com/kyrylosyzonenko/jev-browse) | Drives a real browser with Jev making every decision and Vercel's agent-browser performing every action, with a benchmark. | JavaScript | 1 | [repo](https://github.com/kyrylosyzonenko/jev-browse) |
| [sift](https://github.com/tylergibbs1/sift) | Chrome extension that re-ranks Google results with TypeSafe Jev and folds away sales pages and SEO filler. | TypeScript | 0 | [repo](https://github.com/tylergibbs1/sift) |
| [jev-mobile](https://github.com/Friedjof/jev-mobile) | Fast structured Android control loops with TypeSafe Jev and Mobile MCP | Python | 0 | [repo](https://github.com/Friedjof/jev-mobile) |
| [browser-use-olympics](https://github.com/eriestra/browser-use-olympics) | Browser Use Olympics by Almond: one prompt, five events, one clock. Plus fast loop, a ~200-line browser computer-use agent (Chrome DevTools + TypeSafe Jev). | HTML | 0 | [repo](https://github.com/eriestra/browser-use-olympics) |
| [turbo](https://github.com/sightmap/jev-turbo) | Jev-powered semantic browser use | Go | 0 | [repo](https://github.com/sightmap/jev-turbo) |
| [sloppy-jevs-extension](https://github.com/neddes/sloppy-jevs-extension) | Open-source Chrome extension that filters AI-generated prose and ads with Jev | JavaScript | 0 | [repo](https://github.com/neddes/sloppy-jevs-extension) |
| [jev-browser (MahmoudAdelbghany)](https://github.com/MahmoudAdelbghany/jev-browser) | Jev-powered browser MCP for LLM agents — ~300ms decisions, no LLM tokens in the loop. Benchmark vs Playwright MCP included. | JavaScript | 0 | [repo](https://github.com/MahmoudAdelbghany/jev-browser) |
| [jev-playwright-mcp](https://github.com/krw82/jev-playwright-mcp) | Jev-augmented Playwright MCP proxy — page-state triage, prompt-injection shielding, goal-based snapshot pruning, risky-action gating. Drop-in wrapper around @playwright/mcp for any coding agent. | TypeScript | 0 | [repo](https://github.com/krw82/jev-playwright-mcp) |
| [jev-browser (KesavanKing)](https://github.com/KesavanKing/jev-browser) | Local browser automation UI that uses TypeSafe Jev to choose bounded page actions and a text model only for field values. | Python | 0 | [repo](https://github.com/KesavanKing/jev-browser) |
| [JevTest](https://github.com/CorieW/JevTest) | Bounded exploratory browser testing with Jev, deterministic assertions, and replayable evidence. | TypeScript | 0 | [repo](https://github.com/CorieW/JevTest) · [site](https://jevtest.dev) |

## 06 · Applications

*Products, tools, and pipelines that call Jev.*

*34 entries*

| Project | Description | Lang | Stars | Links |
| --- | --- | --- | --- | --- |
| [jev-trader](https://github.com/jarrodwatts/jev-trader) | One AI trade decision every Monad block. Jev on Kuru MON-USDC. | TypeScript | 702 | [repo](https://github.com/jarrodwatts/jev-trader) · [site](https://jev-trader.vercel.app/) · [post](https://x.com/jarrodwatts/status/2100356151468585346) |
| [notra](https://github.com/usenotra/notra) | Marketing analytics platform whose feature flag routes brand-visibility classifiers off an LLM and onto Jev boolean decisions. | TypeScript | 170 | [repo](https://github.com/usenotra/notra) · [site](https://www.usenotra.com/) |
| [jevmeter](https://github.com/ChetasLua/jevmeter) | Put a live Jev (TypeSafe) meter on any video: every sentence scored, rendered as a 16:9 edit | Python | 48 | [repo](https://github.com/ChetasLua/jevmeter) · [post](https://x.com/chetaslua/status/2100602714204049588) |
| [Jev-Moderation-Bot](https://github.com/brainstormity/Jev-Moderation-Bot) | Real-time Discord moderation bot: Jev evaluates messages and metadata in parallel to catch phishing, spam, and social engineering with a progressive escalation ladder. | Python | 21 | [repo](https://github.com/brainstormity/Jev-Moderation-Bot) |
| [commit-miner](https://github.com/devanshbatham/commit-miner) | Classify Git commit diffs and messages with Jev. Bug fixes, security fixes/CWEs, and change types. | Rust | 20 | [repo](https://github.com/devanshbatham/commit-miner) |
| [blink](https://github.com/ellipsis-dev/blink) | Codebase search powered by Jev from @typesafe-ai | TypeScript | 14 | [repo](https://github.com/ellipsis-dev/blink) · [post](https://x.com/0xLogicrw/status/2100478725393686556) |
| [ai-elo-ranker](https://github.com/opaielsheikh/ai-elo-ranker) | High-speed recursive AI Elo tournament engine powered by Jev and Swiss matchmaking | Python | 6 | [repo](https://github.com/opaielsheikh/ai-elo-ranker) |
| [jevlogs](https://github.com/reachjalil/jevlogs) | Open-source Jev log triage for OpenTelemetry. Score the signal before expensive LLM analysis. | TypeScript | 5 | [repo](https://github.com/reachjalil/jevlogs) |
| [semdecide](https://github.com/sharziki/semdecide) | Typed semantic decisions for Unix pipelines and CI, powered by TypeSafe AI Jev. | Python | 5 | [repo](https://github.com/sharziki/semdecide) · [post](https://x.com/0xLogicrw/status/2100478725393686556) |
| [typesafe-cli (y0usaf)](https://github.com/y0usaf/typesafe-cli) | Ask Jev typed questions from the shell: noul, choice, and score answers as numbers, not prose | TypeScript | 4 | [repo](https://github.com/y0usaf/typesafe-cli) |
| [jevibe-check](https://github.com/sriganesh/jevibe-check) | A live tone labeler for Bluesky posts and drafts, using TypeSafe's Jev API. | JavaScript | 2 | [repo](https://github.com/sriganesh/jevibe-check) |
| [every](https://github.com/sufianetaouil/every) | Ask a yes/no question of every function in a codebase. Ranked answers in seconds, for cents. Grep whose pattern is a question, powered by TypeSafe Jev. | Python | 2 | [repo](https://github.com/sufianetaouil/every) |
| [commentcop](https://github.com/ntedvs/commentcop) | Put your code comments on trial. Powered by Jev. | TypeScript | 1 | [repo](https://github.com/ntedvs/commentcop) |
| [jev-cli](https://github.com/jtsang4/jev-cli) | CLI for TypeSafe AI's Jev evaluation model — typed questions in, structured JSON answers out | TypeScript | 1 | [repo](https://github.com/jtsang4/jev-cli) |
| [btc-jev-signal](https://github.com/WebGrga/btc-jev-signal) | Experimental multi-horizon BTC signal generator using TypeSafe Jev probabilities and Binance market data. | TypeScript | 1 | [repo](https://github.com/WebGrga/btc-jev-signal) |
| [JevTicktRouter](https://github.com/GhrezaKh74/JevTicktRouter) | A .NET 10 and React 19 application for fast, structured AI-powered ticket triage using TypeSafe Jev. | C# | 0 | [repo](https://github.com/GhrezaKh74/JevTicktRouter) |
| [draftpulse](https://github.com/pekth/draftpulse) | Experimental: live X draft viral scorer powered by TypeSafe Jev | TypeScript | 0 | [repo](https://github.com/pekth/draftpulse) |
| [jev-document-classification](https://github.com/Charlyhno-eng/jev-document-classification) | JEV Document Classification enables the rapid and cost-effective classification of text-based documents using AI, leveraging TypeSafe's "System One" model. | TypeScript | 0 | [repo](https://github.com/Charlyhno-eng/jev-document-classification) |
| [typesafe-jev](https://github.com/gtaras7/typesafe-jev) | Screen a folder of CVs with the TypeSafe Jev decision model: typed judgments, an editable policy, free re-scoring. | TypeScript | 0 | [repo](https://github.com/gtaras7/typesafe-jev) |
| [typesafe-triage-guard](https://github.com/shivam2003-dev/typesafe-triage-guard) | Three composable judgment pipelines on TypeSafe's Jev: support-ticket triage, observability alert triage, and a deploy-risk gate. | Python | 0 | [repo](https://github.com/shivam2003-dev/typesafe-triage-guard) |
| [jevegis](https://github.com/0xArx/jevegis) | Guardrails for LLM apps in one API call. Prompt injection, jailbreaks, leaks, unsafe content. Built on TypeSafe Jev. MIT. | TypeScript | 0 | [repo](https://github.com/0xArx/jevegis) · [site](https://jevegis.vercel.app) |
| [citation-verifier](https://github.com/MarissaFamularo/citation-verifier) | Check whether each cited paper supports the sentence citing it. Claude proves the quote, TypeSafe's Jev scores it, a human decides. | JavaScript | 0 | [repo](https://github.com/MarissaFamularo/citation-verifier) · [site](https://verify.papertrellis.com) |
| [jev-rerank](https://github.com/hev/reranker) | Use Jev (TypeSafe's System One model) as a calibrated reranker: one call, up to 30 documents, a probability per document. Apache-2.0. | Python | 0 | [repo](https://github.com/hev/reranker) |
| [emoji-jev](https://github.com/colinmcdermott/emoji-jev) | Emoji autocomplete at the speed of typing. TypeSafe AI Jev on a Whop-hosted TanStack Start app. | TypeScript | 0 | [repo](https://github.com/colinmcdermott/emoji-jev) |
| [jev-resume-analyzer](https://github.com/awun8191/jev-resume-analyzer) | CV diagnostics and job alignment with TypeSafe Jev, React and FastAPI | Python | 0 | [repo](https://github.com/awun8191/jev-resume-analyzer) |
| [jev-audio-beeper](https://github.com/santos-sanz/jev-audio-beeper) | Low-latency audio censorship POC using Jev typed decisions and ffmpeg. | TypeScript | 0 | [repo](https://github.com/santos-sanz/jev-audio-beeper) |
| [scam-shield](https://github.com/ShupingR/scam-shield) | Scam text message filter powered by TypeSafe's Jev model | TypeScript | 0 | [repo](https://github.com/ShupingR/scam-shield) · [site](https://scam-shield-seven-ecru.vercel.app) |
| [typesafe-comment](https://github.com/Hexdigest123/typesafe-comment) | Small Python package that uses typesafe.ai to evaluate code comments on certain heuristics | Python | 0 | [repo](https://github.com/Hexdigest123/typesafe-comment) |
| [transcript-scorecard](https://github.com/brandonbryant12/transcript-scorecard) | ACME live support-call scoring demo with TypeSafe AI, Effect, SQLite, React, Vite, and Turborepo | TypeScript | 0 | [repo](https://github.com/brandonbryant12/transcript-scorecard) |
| [mimicry](https://github.com/jxucoder/mimicry) | Rewrite AI drafts in your own voice with a bounded TypeSafe feedback loop. | Python | 0 | [repo](https://github.com/jxucoder/mimicry) |
| [s1s](https://github.com/cpaczek/s1s) | System One Search: navigate and trace code with TypeSafe judgments and repository evidence | TypeScript | 0 | [repo](https://github.com/cpaczek/s1s) · [site](https://s1s.iar.dev) |
| [pkg-gate](https://github.com/hemanth/pkg-gate) | Pre-install security gate for npm lifecycle scripts using TypeSafe System One. | JavaScript | 0 | [repo](https://github.com/hemanth/pkg-gate) · [site](https://hemanth.github.io/pkg-gate/) |
| [Jev Classifier](https://jevclassifier.vercel.app) | Local Telegram channel JSON analyzer for intent, quality, sentiment, and speaker tone. | — | — | [site](https://jevclassifier.vercel.app) · [post](https://x.com/DagmawiBabi/status/2100618066459553796) |
| [dmx.to](https://dmx.to) | X client with Jev smart rules that filter the timeline by usefulness, type, and topic. | — | — | [site](https://dmx.to) · [post](https://x.com/thekitze/status/2100570975175877106) |

## 07 · Games & simulations

*Games and simulations with Jev making the moves.*

*47 entries*

| Project | Description | Lang | Stars | Links |
| --- | --- | --- | --- | --- |
| [typesafe-mario](https://github.com/fhshaik/typesafe-mario) | A TypeSafe/Jev agent that plays Super Mario Bros. from structured emulator state. | Python | 250 | [repo](https://github.com/fhshaik/typesafe-mario) |
| [jev-drone](https://github.com/RomanSlack/jev-drone) | Camera-only autonomous drone in MuJoCo with a small judgment model (TypeSafe Jev) in the loop at 2.5Hz | Python | 56 | [repo](https://github.com/RomanSlack/jev-drone) |
| [typesafe-snake](https://github.com/sorrycc/typesafe-snake) | Snake auto-played by TypeSafe's Jev model: one System One choice per tick, legal moves and facts generated in code | TypeScript | 17 | [repo](https://github.com/sorrycc/typesafe-snake) |
| [tsai-sc](https://github.com/phyous/tsai-sc) | TypeSafe Jev controls original StarCraft shareware through keyboard and mouse with recorded action probabilities. | Python | 11 | [repo](https://github.com/phyous/tsai-sc) |
| [mario-jev](https://github.com/shantanugoel/mario-jev) | Python prototype that plays NES Super Mario Bros. from structured RAM observations, with Jev answering focused movement and jump questions. | Python | 10 | [repo](https://github.com/shantanugoel/mario-jev) |
| [OneVOneJev](https://github.com/emrickgarrett/OneVOneJev) | 1v1 Jev quickscope arena — Three.js + TypeSafe System One | TypeScript | 5 | [repo](https://github.com/emrickgarrett/OneVOneJev) |
| [heist-one](https://github.com/AbdelStark/heist-one) | Observable browser stealth game: Jev makes typed guard judgments while deterministic code owns the world. | TypeScript | 2 | [repo](https://github.com/AbdelStark/heist-one) |
| [rubikjev](https://github.com/0xtrou/rubikjev) | Challenge the Jev's intelligence in Rubik Cube puzzles | TypeScript | 1 | [repo](https://github.com/0xtrou/rubikjev) · [site](https://rubikjev.solo.engineer) |
| [jev-doom-agent](https://github.com/lukaske/jev-doom-agent) | A browser-native Doom agent experiment with structured spatial state, composable AI controls, live decision telemetry, and a Chocolate Doom WebAssembly runtime. | TypeScript | 1 | [repo](https://github.com/lukaske/jev-doom-agent) |
| [tsai-civ2](https://github.com/phyous/tsai-civ2) | TypeSafe Jev plays original Civilization II in a browser, with live action probabilities. Experimental full-game harness. | Python | 1 | [repo](https://github.com/phyous/tsai-civ2) |
| [casse-brique-typesafe](https://github.com/Para-FR/casse-brique-typesafe) | A Next.js brick breaker whose paddle is controlled in real time by TypeSafe AI's Jev model. Built with Claude Code. | TypeScript | 0 | [repo](https://github.com/Para-FR/casse-brique-typesafe) |
| [pong-jev](https://github.com/safzanpirani/pong-jev) | TypeSafe's Jev plays Atari Pong. One typed Choice question per frame, no coordinates sent to the model. | TypeScript | 0 | [repo](https://github.com/safzanpirani/pong-jev) |
| [cyber-breach-jev](https://github.com/rchovatiya88/cyber-breach-jev) | Cyber-Breach: The Jev Protocol - A tactical cyberpunk arena combat game powered by TypeSafe AI Jev System One decision model | JavaScript | 0 | [repo](https://github.com/rchovatiya88/cyber-breach-jev) |
| [Agent-JEV-Tetris](https://github.com/Yasserbhb/Agent-JEV-Tetris) | using the new model JEV to play the game tetris | HTML | 0 | [repo](https://github.com/Yasserbhb/Agent-JEV-Tetris) |
| [last-exit](https://github.com/0x963D/last-exit) | A cyberpunk border encounter powered by TypeSafe Jev. Bluff the guard. Inspect the receipts. | JavaScript | 0 | [repo](https://github.com/0x963D/last-exit) · [site](https://gate.fade.tools) |
| [beatjev](https://github.com/lambertsj/beatjev) | Browser game: try to beat Jev at spotting a spam message. | JavaScript | 0 | [repo](https://github.com/lambertsj/beatjev) · [site](https://beatjev2it.jlamberts86.workers.dev) · [post](https://x.com/j_lamberts/status/2100592556081832131) |
| [pdoom-protocol](https://github.com/onionminionops-beep/pdoom-protocol) | USER + JEV: P(DOOM) PROTOCOL — co-op platform shooter where TypeSafe Jev plays alongside you | TypeScript | 0 | [repo](https://github.com/onionminionops-beep/pdoom-protocol) |
| [jev-games](https://github.com/shantanugoel/jev-games) | Visual Jev lab for multiple games and emulator platforms | Python | 0 | [repo](https://github.com/shantanugoel/jev-games) |
| [jev.mods](https://github.com/Hardel-DW/jev.mods) | Minecraft mod where Jev tries to finish the game from scratch without a scripted route. | Java | 0 | [repo](https://github.com/Hardel-DW/jev.mods) |
| [jev-play-ping-pong](https://github.com/Icohen007/jev-play-ping-pong) | Jev plays browser table tennis in real time: structured telemetry, typed decisions, ordinary Chrome inputs, and auditable evidence. | JavaScript | 0 | [repo](https://github.com/Icohen007/jev-play-ping-pong) · [site](https://indispensable-lingonberry-hot.julius.site/) |
| [jev-gomoku](https://github.com/mizchi/jev-gomoku) | MoonBit client for Jev plus a Jev-vs-Jev gomoku match, with timing logs. | MoonBit | 0 | [repo](https://github.com/mizchi/jev-gomoku) |
| [typesafe-3d-chess](https://github.com/malDuffin/typesafe-3d-chess) | 3D chess powered by TypeSafe AI (Jev). AI vs AI by default, or play either side. Multiple difficulty levels. | TypeScript | 0 | [repo](https://github.com/malDuffin/typesafe-3d-chess) |
| [jev2048](https://github.com/KyleKreuter/jev2048) | Let Jev (TypeSafeAI) solve 2048 | TypeScript | 0 | [repo](https://github.com/KyleKreuter/jev2048) |
| [river-oaks](https://github.com/BunsDev/river-oaks) | NPCs of River Oaks Houston, Texas using Jev to power NPCs | — | 0 | [repo](https://github.com/BunsDev/river-oaks) |
| [hundred](https://github.com/jammaru/jev-lab) | 100 AI NPCs live in a tiny town. Jev chooses the next action; the world writes the story. | TypeScript | 0 | [repo](https://github.com/jammaru/jev-lab) |
| [snake-jev](https://github.com/siroccomask/snake-jev) | Snake controlled by parallel Jev assessments, with one API call per game tick. | Python | 0 | [repo](https://github.com/siroccomask/snake-jev) |
| [jev-askable-arm](https://github.com/TarunTomar122/jev-askable-arm) | Zero-shot English goals on a sim Franka. Jev chains hardcoded primitives. | Python | 0 | [repo](https://github.com/TarunTomar122/jev-askable-arm) |
| [typesafe-chess](https://github.com/TholeG/typesafe-chess) | Chess where both players are TypeSafe's Jev model: every move is a typed Choice decision | JavaScript | 0 | [repo](https://github.com/TholeG/typesafe-chess) |
| [jev-snake](https://github.com/iammusham/jev-snake) | An experimental Snake environment where the game engine owns deterministic rules and TypeSafe AI's Jev makes the movement decision from structured state on every tick. | Python | 0 | [repo](https://github.com/iammusham/jev-snake) |
| [jev-tetris](https://github.com/MachineLearning-Nerd/jev-tetris) | A visual TypeSafe demo where Jev chooses verified Tetris placements. | Python | 0 | [repo](https://github.com/MachineLearning-Nerd/jev-tetris) |
| [ps2-ai-agent](https://github.com/opaielsheikh/ps2-ai-agent) | Autonomous PlayStation 2 AI Agent with real-time visual telemetry HUD powered by TypeSafe Jev System One | Python | 0 | [repo](https://github.com/opaielsheikh/ps2-ai-agent) |
| [jev-bfs](https://github.com/komikat/jev-bfs) | Wikipedia link races with direct Jev ranking and a live terminal display. | Python | 0 | [repo](https://github.com/komikat/jev-bfs) |
| [shady-town](https://github.com/tpaulshippy/shady-town) | Shady Town: social-deduction party game for the living room TV, moderated by TypeSafe Jev | Ruby | 0 | [repo](https://github.com/tpaulshippy/shady-town) |
| [roverlab](https://github.com/juancamiloqhz/roverlab) | A 3D planetary rover sandbox for experimenting with autonomous decisions using TypeSafe AI. | TypeScript | 0 | [repo](https://github.com/juancamiloqhz/roverlab) |
| [river-run-typesafe](https://github.com/ashaazami/river-run-typesafe) | River shooter game in Python, inspired by Atari's River Raid, played by a TypeSafe AI pilot | Python | 0 | [repo](https://github.com/ashaazami/river-run-typesafe) |
| [typesafe-minecraft-demo](https://github.com/ellistev/typesafe-minecraft-demo) | A Minecraft Java player controlled by TypeSafe AI, with live decisions, Canadian flag building, and a side-by-side dashboard. | JavaScript | 0 | [repo](https://github.com/ellistev/typesafe-minecraft-demo) |
| [terrarium](https://github.com/TheGali/terrarium) | A sandbox where a TypeSafe System One model presses the controls of a small creature. Code runs the world. | JavaScript | 0 | [repo](https://github.com/TheGali/terrarium) |
| [siege](https://github.com/vnmoorthy/siege) | SIEGE: 200 people vs one agent. A typed action gate (TypeSafe System One) that learns from every breach, evaluated by W&B Weave, hardened by a defender loop. Built at CoreWeave Hacks: Agent Loops 2026. | TypeScript | 0 | [repo](https://github.com/vnmoorthy/siege) · [site](https://vnmoorthy.github.io/siege/) |
| [jev-t-rex-runner](https://github.com/joshlarsen/jev-t-rex-runner) | Chrome dino game played by Typesafe AI Jev model | JavaScript | 0 | [repo](https://github.com/joshlarsen/jev-t-rex-runner) · [site](https://devfolioco.github.io/t-rex-runner-game/) |
| [Jev Driving Lab](https://github.com/kavehmz/typesafe-playground) | Interactive experiments from support routing to a 3D driving simulation: structured sensor state in, typed steer, brake, and overtake decisions out. | JavaScript | 0 | [repo](https://github.com/kavehmz/typesafe-playground) · [post](https://x.com/kavehmz/status/2100616111771238881) |
| [Jev Tetris](https://jev-omega.vercel.app) | Jev picks rotation and column from holes, stack height, and bumpiness. | — | — | [site](https://jev-omega.vercel.app) |
| [Jev Pac-Man](https://jev-pacman.ephraimduncan.com) | The maze as JSON; Jev picks the turn at each junction in real time. | — | — | [site](https://jev-pacman.ephraimduncan.com) |
| [Hollow Creek](https://hollow-creek-sigma.vercel.app) | Village NPCs that judge you each tick, deciding what to do and how they feel, instead of chatting. | — | — | [site](https://hollow-creek-sigma.vercel.app) |
| [Jev Arcade](https://jev-arcade.vercel.app/duel) | Krunker-style 1v1 FPS where Jev decides move, aim, ADS, fire, and jump at about 9 Hz. | — | — | [site](https://jev-arcade.vercel.app/duel) · [post](https://x.com/Neel490/status/2100618722318688753) |
| [Game Plan](https://game-plan.adriaansendennis.workers.dev/play) | Small game that tests how Jev handles unknown input. | — | — | [site](https://game-plan.adriaansendennis.workers.dev/play) · [post](https://x.com/DennisAdriaans/status/2100616874719347136) |
| [Jev board games](https://jevboardgames.everpaper.app/) | Playable board games driven by Jev decisions. | — | — | [site](https://jevboardgames.everpaper.app/) · [post](https://x.com/MarcoIannello/status/2100622449268191524) |
| [chess-jev](https://chess-jev.loomens.com) | 3D chess where Jev plays both sides, or you jump in. | — | — | [site](https://chess-jev.loomens.com) · [post](https://x.com/BuildWithKhalil/status/2100364868733812987) |

## 08 · Demos & playgrounds

*Live demos and playgrounds.*

*46 entries*

| Project | Description | Lang | Stars | Links |
| --- | --- | --- | --- | --- |
| [killmyidea](https://github.com/monteduro/killmyidea) | Describe your startup idea. Jev decides: kill it, fix it or ship it. | TypeScript | 12 | [repo](https://github.com/monteduro/killmyidea) · [site](https://killmyidea.stemonte.io) |
| [jev-me](https://github.com/jon-devlapaz/jev-me) | A grill-me style interrogation of your idea, with Jev doing the grilling. | Python | 9 | [repo](https://github.com/jon-devlapaz/jev-me) |
| [typesafe-ai-playground (BunsDev)](https://github.com/BunsDev/typesafe-ai-playground) | Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI. | TypeScript | 6 | [repo](https://github.com/BunsDev/typesafe-ai-playground) · [site](https://jev.works) |
| [jev-system-one](https://github.com/haseeb-heaven/jev-system-one) | A polished OpenAI + TypeSafe Jev terminal interface for answers with transparent decision reports | Python | 2 | [repo](https://github.com/haseeb-heaven/jev-system-one) |
| [Should AI Kill Us All?](https://github.com/hellogumbo/should-ai-kill-us-all) | Live verdict page: feeds Jev the day’s Florida Man, odd-news, politics and world headlines and asks all three primitives whether AI should kill us all, refreshed every ten minutes. | JavaScript | 2 | [repo](https://github.com/hellogumbo/should-ai-kill-us-all) · [site](https://shouldaikillusall.com) |
| [jev-playground (Little-Planet-Labs)](https://github.com/Little-Planet-Labs/jev-playground) | A small Next.js app for experimenting with TypeSafe AI's Jev model (System One) | TypeScript | 1 | [repo](https://github.com/Little-Planet-Labs/jev-playground) · [site](https://jev-playground-zeta.vercel.app) |
| [clarity-judge](https://github.com/BunsDev/clarity-judge) | Multi-axis writing quality checker powered by TypeSafe AI's Jev model. Separate named checks, each with its own verdict and confidence. | TypeScript | 1 | [repo](https://github.com/BunsDev/clarity-judge) · [site](https://judge.jev.works) |
| [gpt-vs-jev](https://github.com/TanayPadar/gpt-vs-jev) | Compare GPT generated language with JEV structured Noul decisions on the same input. | TypeScript | 1 | [repo](https://github.com/TanayPadar/gpt-vs-jev) · [site](https://gptvsjev.vercel.app) · [post](https://x.com/nerdytanay/status/2100465397267144815) |
| [harden-jev-decides](https://github.com/tylerjharden/harden-jev-decides) | JEV picks which stream idea becomes the live MVP. TypeSafe System One decision board. | TypeScript | 1 | [repo](https://github.com/tylerjharden/harden-jev-decides) |
| [typesafe-ai-playground (markjaquith)](https://github.com/markjaquith/typesafe-ai-playground) | A playground for experiments around Jev, TypeSafe's System One model. | Rust | 1 | [repo](https://github.com/markjaquith/typesafe-ai-playground) · [post](https://x.com/0xLogicrw/status/2100478725393686556) |
| [got-jev](https://github.com/phureewat29/got-jev) | Jev (TypeSafe AI) PoC through Game of Thrones | TypeScript | 1 | [repo](https://github.com/phureewat29/got-jev) · [site](https://jev.phureewat.com) |
| [toolgate](https://github.com/ndolinschi/toolgate) | Agent tool/MCP call gate — allow / ask_human / deny via TypeSafe Jev | TypeScript | 1 | [repo](https://github.com/ndolinschi/toolgate) · [site](https://toolgate.vercel.app) |
| [guard-jev](https://github.com/NorbertBodziony/guard-jev) | Comment-moderation playground: paste a comment, Jev decides what to do with it. | TypeScript | 1 | [repo](https://github.com/NorbertBodziony/guard-jev) · [site](https://guard-jev.vercel.app) |
| [typesafe-arena](https://github.com/DeepBlueDynamics/typesafe-arena) | A playground for TypeSafeAI's Jev Model | Rust | 1 | [repo](https://github.com/DeepBlueDynamics/typesafe-arena) |
| [Instinct](https://github.com/joevidev/ui-generator-instinct-jev) | Instinct: describe a case in free text and Jev picks the UI from a fixed catalog without generating a line of code or copy. | TypeScript | 1 | [repo](https://github.com/joevidev/ui-generator-instinct-jev) · [site](https://ui-generator-instinct-jev.vercel.app) |
| [jev-should-i-apply](https://github.com/cardotrejos/jev-should-i-apply) | Typesafe/Jev public X demo | — | 0 | [repo](https://github.com/cardotrejos/jev-should-i-apply) |
| [jev-user-jury](https://github.com/cardotrejos/jev-user-jury) | Typesafe/Jev public X demo | — | 0 | [repo](https://github.com/cardotrejos/jev-user-jury) |
| [jev-ad-preflight](https://github.com/cardotrejos/jev-ad-preflight) | Typesafe/Jev public X demo | — | 0 | [repo](https://github.com/cardotrejos/jev-ad-preflight) |
| [jev-dev](https://github.com/n-yokomachi/jev-dev) | 同じ発言を jev と LLM の両方に判定させ、感情の変動値のズレと応答速度を1画面で見比べるデモ（affectus + Vercel AI Gateway） | TypeScript | 0 | [repo](https://github.com/n-yokomachi/jev-dev) |
| [Jev Gamecast](https://github.com/narulaskaran/jev-data-questions) | Jev Gamecast: replay-first React app that asks Jev typed questions about live sports data. | TypeScript | 0 | [repo](https://github.com/narulaskaran/jev-data-questions) · [site](https://jev-gamecast.vercel.app) |
| [jev-paper-judge](https://github.com/JacobLinCool/jev-paper-judge) | Feedback on your paper in seconds. | TypeScript | 0 | [repo](https://github.com/JacobLinCool/jev-paper-judge) · [site](https://jev-paper-judge.jacob.workers.dev) |
| [human-compiler](https://github.com/asfarsadewa/human-compiler) | A compiler for human language. Paste text, get diagnostics. Measured by TypeSafe Jev. | TypeScript | 0 | [repo](https://github.com/asfarsadewa/human-compiler) · [site](https://human-compiler.asfarlab.fun) |
| [Search-Function-Test](https://github.com/Shifros/Search-Function-Test) | A test project based on Jev AI, the goal is to build a search function for a blog/article website that has 100s of articles to search from, So the user can actually use the search as chat to question anything and find related answers/articles | JavaScript | 0 | [repo](https://github.com/Shifros/Search-Function-Test) · [site](https://search-function-test.vercel.app) |
| [jev-bun1](https://github.com/heiwa4126/jev-bun1) | TypeSafe の Jev を TypeScript SDK で使ってみる最初の 1 歩 | TypeScript | 0 | [repo](https://github.com/heiwa4126/jev-bun1) |
| [jevplay](https://github.com/ndolinschi/jevplay) | TypeSafe Jev playground — custom Choice/Score/Noul builder with live distributions | TypeScript | 0 | [repo](https://github.com/ndolinschi/jevplay) · [site](https://jevplay.vercel.app) |
| [mcpmatch](https://github.com/ndolinschi/mcpmatch) | Match user goals to MCP catalog (two-stage) via TypeSafe Jev | TypeScript | 0 | [repo](https://github.com/ndolinschi/mcpmatch) · [site](https://mcpmatch.vercel.app) |
| [spendbrake](https://github.com/ndolinschi/spendbrake) | Agent budget brake — continue / downgrade_model / stop via TypeSafe Jev | TypeScript | 0 | [repo](https://github.com/ndolinschi/spendbrake) · [site](https://spendbrake.vercel.app) |
| [harnessjudge](https://github.com/ndolinschi/harnessjudge) | Judge agent steps — ok / retry / escalate / stop via TypeSafe Jev | TypeScript | 0 | [repo](https://github.com/ndolinschi/harnessjudge) · [site](https://harnessjudge.vercel.app) |
| [swarmrouter](https://github.com/ndolinschi/swarmrouter) | Route tasks to research/code/browser/support/writer agents via TypeSafe Jev | TypeScript | 0 | [repo](https://github.com/ndolinschi/swarmrouter) · [site](https://swarmrouter.vercel.app) |
| [jev-playground (wustep)](https://github.com/wustep/jev-playground) | Can a System One model steer music? Jev picks the plan (enums only); code renders sheet, audio and MIDI. | TypeScript | 0 | [repo](https://github.com/wustep/jev-playground) · [site](https://jev-playground.vercel.app) |
| [hiresignal](https://github.com/ndolinschi/hiresignal) | HireSignal — resume first-pass fit+interview via TypeSafe Jev | TypeScript | 0 | [repo](https://github.com/ndolinschi/hiresignal) · [site](https://hiresignal-opal.vercel.app) |
| [trustgate](https://github.com/ndolinschi/trustgate) | TrustGate — indie media T&S gate via TypeSafe Jev | TypeScript | 0 | [repo](https://github.com/ndolinschi/trustgate) · [site](https://trustgate-mu.vercel.app) |
| [lanebreak](https://github.com/ndolinschi/lanebreak) | LaneBreak — support ticket priority+routing via TypeSafe Jev | TypeScript | 0 | [repo](https://github.com/ndolinschi/lanebreak) · [site](https://lanebreak.vercel.app) |
| [cartshield](https://github.com/ndolinschi/cartshield) | CartShield — SMB checkout fraud disposition via TypeSafe Jev | TypeScript | 0 | [repo](https://github.com/ndolinschi/cartshield) · [site](https://cartshield.vercel.app) |
| [pulselane](https://github.com/ndolinschi/pulselane) | PulseLane — clinic triage decisions via TypeSafe Jev | TypeScript | 0 | [repo](https://github.com/ndolinschi/pulselane) · [site](https://pulselane-topaz.vercel.app) |
| [jev-demos](https://github.com/Bud-ro/jev-demos) | Demos to test the effectiveness of TypeSafe's "Jev" System One Model | Dart | 0 | [repo](https://github.com/Bud-ro/jev-demos) |
| [Job Risk Analyzer](https://github.com/WeSecureYou/Jev-test) | Job Risk Analyzer: CLI and REST API that uses Jev to score an occupation's exposure to AI-driven layoffs and its resilience. | TypeScript | 0 | [repo](https://github.com/WeSecureYou/Jev-test) · [site](https://jev-test.vercel.app) |
| [jev-board-lab](https://github.com/WebGrga/jev-board-lab) | Interactive explorer and Jev question workspace for Jev Board datasets. | JavaScript | 0 | [repo](https://github.com/WebGrga/jev-board-lab) |
| [extremely-specific-council](https://github.com/cbetz/extremely-specific-council) | Twelve members. Zero qualifications. A playful TypeSafe AI council with animated votes, inspectable decisions, and shareable verdicts. | TypeScript | 0 | [repo](https://github.com/cbetz/extremely-specific-council) · [site](https://extremely-specific-council-five.vercel.app) |
| [Probably](https://github.com/JordiParraCrespo/typesafe-ai-trading-showcase) | Probably: live BTC, ETH, and XRP prices with a shared TypeSafe buy-or-wait demonstration. No trades placed. | TypeScript | 0 | [repo](https://github.com/JordiParraCrespo/typesafe-ai-trading-showcase) · [site](https://typesafe-ai-trading-showcase.vercel.app) |
| [typesafe-image-diffusion](https://github.com/Wizhill05/typesafe-image-diffusion) | Diffusion-style pixel art out of a classifier: 256 parallel per-pixel Jev questions plus refinement passes. | HTML | 0 | [repo](https://github.com/Wizhill05/typesafe-image-diffusion) · [post](https://x.com/just_aryansingh/status/2100617080395710748) |
| [Yes / No](https://yesno.coderai.dev) | Free, no-signup Noul demo. Ask a question, get yes, no, or maybe, with web search when needed. | — | — | [site](https://yesno.coderai.dev) |
| [TypeSafe Typewriter](https://typesafe-demo.val.run/) | Val Town demo where 16 typed judgments update live as you type. | — | — | [site](https://typesafe-demo.val.run/) · [post](https://x.com/stevekrouse/status/2100287368221659289) |
| [Crowdcheck](https://crowdcheck-ai.vercel.app/) | Test a post against 10,000 synthetic personas before you publish it. | — | — | [site](https://crowdcheck-ai.vercel.app/) |
| [Jev mood demo](https://jev-demo.vercel.app) | Talk nicely or nastily over time; structured state tracks the mood. | — | — | [site](https://jev-demo.vercel.app) |
| [Jev Room](https://jev-room.moe136231.chatgpt.site) | One sentence becomes six room settings. Jev chooses, the app renders. | — | — | [site](https://jev-room.moe136231.chatgpt.site) |

## 09 · Benchmarks & research

*Benchmarks, evals, calibration studies, and open replicas.*

*71 entries*

| Project | Description | Lang | Stars | Links |
| --- | --- | --- | --- | --- |
| [openjev (TheoLeeCJ)](https://github.com/TheoLeeCJ/openjev) | Can we run something like Jev on a 3090 at home? | Python | 1,307 | [repo](https://github.com/TheoLeeCJ/openjev) · [site](https://openjev.com) · [post](https://x.com/hhkkmon/status/2100443314957038010) |
| [jevlike](https://github.com/vinnylarouge/jevlike) | Train a small model that chooses among a changing list of text options, one probability per option in a single pass. Includes Doom, chess, and Wikispeedia demos. | Python | 798 | [repo](https://github.com/vinnylarouge/jevlike) · [post](https://x.com/hhkkmon/status/2100443314957038010) |
| [jev-eval-agent](https://github.com/vinilana/jev-eval-agent) | Personal-assistant agent built on Vercel's eve with 100 mocked tools, measuring how many steps it takes when Jev picks the tool versus the LLM. | HTML | 76 | [repo](https://github.com/vinilana/jev-eval-agent) |
| [typesafe-ai-benchmark](https://github.com/iammrduncan/typesafe-ai-benchmark) | This is a LLM Gateway that mimics typesafe ai structured output. Like an imposter Jev. | TypeScript | 29 | [repo](https://github.com/iammrduncan/typesafe-ai-benchmark) · [site](https://hackersintheloop.org/) · [post](https://x.com/iamMrDuncan/status/2100467548298899918) |
| [open-jev (daseinlabs)](https://github.com/daseinlabs/open-jev) | One-pass option scoring with a local Gemma 3 4B on Apple silicon via MLX, inspired by jevlike, with a Doom demo. | Python | 24 | [repo](https://github.com/daseinlabs/open-jev) |
| [jevmlx](https://github.com/bnsd55/jevmlx) | Jev-style parallel constrained decisions for any MLX model on Apple Silicon. Typed, schema-valid JSON in one forward pass. | Python | 18 | [repo](https://github.com/bnsd55/jevmlx) · [post](https://x.com/beni_il_/status/2100617387116568956) |
| [jev-on-a-laptop](https://github.com/rorshopping/jev-on-a-laptop) | Unofficial study: Jev-style parallel typed decisions on stock 1.5B-8B models on an Apple Silicon laptop. Benchmarks, research notes, and a Hugging Face Space demo. | Python | 14 | [repo](https://github.com/rorshopping/jev-on-a-laptop) · [post](https://x.com/hhkkmon/status/2100443314957038010) |
| [open-jev (JoshuaSP)](https://github.com/JoshuaSP/open-jev) | Typed JSON inference with DiffusionGemma, with Every and Jev benchmark results | Python | 13 | [repo](https://github.com/JoshuaSP/open-jev) |
| [jevbetter](https://github.com/olanotolu/jevbetter) | A stronger one-pass scorer over a variable list of text options: hashed n-gram encoder, rival-aware attention, gated head, temperature scaling, benchmarked against jevlike. | Python | 10 | [repo](https://github.com/olanotolu/jevbetter) |
| [decider](https://github.com/Mapika/decider) | One-pass typed decisions with calibrated probabilities (System One style model), fine-tuned from Qwen3.5-2B | Python | 9 | [repo](https://github.com/Mapika/decider) |
| [TypeAR](https://github.com/zmtomorrow/TypeAR) | Type-safe one-decision-per-token decoding engine for autoregressive LLMs, inspired by Jev. | Python | 8 | [repo](https://github.com/zmtomorrow/TypeAR) · [post](https://x.com/MingtianZhang/status/2100579236960682120) |
| [openvons](https://github.com/genai-craft/openvons) | openvons (open-Jev): 有限選択肢に確率で答える判断層 — テキスト / 画像 / 日本語音声コマンド | Python | 7 | [repo](https://github.com/genai-craft/openvons) · [site](https://genai-craft.com) |
| [jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks) | Probability-aware evaluation for typed decision models: calibration, selective risk, latency, and reproducible benchmarks. | Python | 6 | [repo](https://github.com/AbdelStark/jev-benchmarks) |
| [LegalForecastBench](https://github.com/johnhughes3/LegalForecastBench) | LegalForecast-MTD benchmark alpha and official evaluation workflows | Python | 5 | [repo](https://github.com/johnhughes3/LegalForecastBench) |
| [jev-lm](https://github.com/y0usaf/jev-lm) | A word-level language model whose output layer is Jev: n-gram drafter, Noul chunk verification, bits-per-token eval | TypeScript | 4 | [repo](https://github.com/y0usaf/jev-lm) |
| [jev-korean-benchmark](https://github.com/mahlernim/jev-korean-benchmark) | Reproducible early-access evaluation of Jev on Korean understanding and medical text, with runtime and cost evidence | Python | 4 | [repo](https://github.com/mahlernim/jev-korean-benchmark) · [site](https://ahn-lab.org/jev-korean-benchmark/) |
| [jevfire](https://github.com/kikoncuo/jevfire) | JEV-inspired parallel decisions for CUDA LLMs. One context, many decisions. vLLM API, game-agent examples, and reproducible benchmarks. | JavaScript | 4 | [repo](https://github.com/kikoncuo/jevfire) · [site](https://kikoncuo.github.io/jevfire/) |
| [openjev (zhihz)](https://github.com/zhihz/openjev) | Local bilingual probability decisions from context, questions, and candidate answers. Independent research preview inspired by TypeSafe Jev. | Python | 4 | [repo](https://github.com/zhihz/openjev) |
| [system-one-open](https://github.com/mithalouni/system-one-open) | Open replica of TypeSafe's Jev: typed calibrated decisions in one forward pass, on Gemma 4 E2B / Gemma 3 270M (Modal) | Python | 4 | [repo](https://github.com/mithalouni/system-one-open) |
| [jev-behavior-study](https://github.com/RINNECODER/jev-behavior-study) | Independent Jev 1.13.0 behavior study: report, controlled prompt experiments, raw results, and offline verification. | Python | 3 | [repo](https://github.com/RINNECODER/jev-behavior-study) |
| [jev-chat](https://github.com/adhyaay-karnwal/jev-chat) | A chatbot from typed Jev decisions: hierarchical speculative decoding over System One probabilities. | Python | 3 | [repo](https://github.com/adhyaay-karnwal/jev-chat) |
| [jev_stock](https://github.com/sosopop/jev_stock) | An experimental JEV-powered framework for forecasting short-term stock price direction from structured market data. | Python | 2 | [repo](https://github.com/sosopop/jev_stock) |
| [jev-for-engineers](https://github.com/Foadsf/jev-for-engineers) | Eight minimal working examples of TypeSafe's Jev (a System One model) applied to mechanical and electrical engineering: CAD/CAE/CAM routing, FEM result triage, DFM screening, BOM alignment, hallucination-proof extraction. Zero dependencies. | Python | 2 | [repo](https://github.com/Foadsf/jev-for-engineers) |
| [trade-jev](https://github.com/justinhe16/trade-jev) | Backtest Jev (TypeSafe) as a BUY/SELL/HOLD trader on NQ L10 order-book data | Python | 2 | [repo](https://github.com/justinhe16/trade-jev) |
| [jev-benchmark](https://github.com/wondertwins/jev-benchmark) | Benchmarks and a playground for TypeSafe's Jev (System One) model: chess, and who-is-the-player-talking-to for speech-to-text game NPCs | Python | 2 | [repo](https://github.com/wondertwins/jev-benchmark) |
| [calibre](https://github.com/FirasSX914/Janus) | Calibration and confidence-based routing measured on Banking77: 80.2% accuracy at $0.103 per 500 decisions | Python | 2 | [repo](https://github.com/FirasSX914/Janus) |
| [jevgpt](https://github.com/Bewinxed/jevgpt) | A chatbot built on a model that cannot generate text (TypeSafe AI's Jev, driven autoregressively) | TypeScript | 2 | [repo](https://github.com/Bewinxed/jevgpt) |
| [system-one](https://github.com/sgoedecke/system-one) | Batched single-token choice inference for open language models, compatible with TypeSafe | Python | 2 | [repo](https://github.com/sgoedecke/system-one) |
| [jev-little-airways](https://github.com/lbotinelly/jev-little-airways) | A show-and-tell capability study for Jev, TypeSafe's System One decision model. | HTML | 1 | [repo](https://github.com/lbotinelly/jev-little-airways) |
| [kyotsu-ai-bench](https://github.com/shibadogcap/kyotsu-ai-bench) | AI benchmark on Japan's 2026 Common Test: Jev vs luna-none vs luna-low (static dashboard) | HTML | 1 | [repo](https://github.com/shibadogcap/kyotsu-ai-bench) |
| [decisionbridge](https://github.com/grishahq/decisionbridge) | A Jev-inspired decision interface for existing LLMs. Explicit choices, scores, calibration, and review thresholds. | HTML | 1 | [repo](https://github.com/grishahq/decisionbridge) |
| [padflow-jev-evals](https://github.com/zsavage8/padflow-jev-evals) | Typed-decision benchmark from PadFlow (land development SaaS): schemas, anonymized labeled rows, and a runner for confidence-calibrated models like TypeSafe Jev. | Python | 1 | [repo](https://github.com/zsavage8/padflow-jev-evals) |
| [mcts-agent](https://github.com/lhemerly/mcts-agent) | Discriminative Monte Carlo Tree Search using TypeSafe Jev System One Primitives and Gemini | Python | 1 | [repo](https://github.com/lhemerly/mcts-agent) |
| [jev-rerank-bench](https://github.com/anessbelbati/jev-rerank-bench) | Can a decision model beat dedicated rerankers? TypeSafe Jev vs Cohere Rerank 4 vs ZeroEntropy zerank-2 vs a chat-model baseline: 14 datasets, every raw API response, bootstrap ranges on every gap. | Python | 1 | [repo](https://github.com/anessbelbati/jev-rerank-bench) |
| [jev-sec-bench](https://github.com/Gaurav-Gosain/jev-sec-bench) | Blind security benchmarks for Jev, TypeSafe's System One model: prompt injection and vulnerable code detection, built on jev-go | Go | 1 | [repo](https://github.com/Gaurav-Gosain/jev-sec-bench) · [post](https://x.com/_GauravGosain/status/2100111398277959715) |
| [jev-agent-failure-benchmark](https://github.com/TokenTrim/jev-agent-failure-benchmark) | Benchmarking Jev (Typesafe.ai) against a strong LLM on the Who&When Pro agent-failure-attribution benchmark (text subset). | Python | 1 | [repo](https://github.com/TokenTrim/jev-agent-failure-benchmark) |
| [qwen-rlcd](https://github.com/shamazharikh/qwen-rlcd) | Jev-style calibrated decision model (Choice/Score/Noul) on Qwen3.5-0.8B | Python | 1 | [repo](https://github.com/shamazharikh/qwen-rlcd) |
| [RISC-jeV](https://github.com/i2cjak/RISC-jeV) | I tortured Jev into being a RISC-V CPU. | Python | 1 | [repo](https://github.com/i2cjak/RISC-jeV) |
| [jev-synergy-screening](https://github.com/PistachioAIHQ/jev-synergy-screening) | Jev (TypeSafe System One) × ASReview SYNERGY abstract screening demo — Choice/Noul vs gold labels | Python | 1 | [repo](https://github.com/PistachioAIHQ/jev-synergy-screening) |
| [jev-freeform](https://github.com/kesku/jev-freeform) | An observable raw-character chat experiment powered entirely by TypeSafe Jev Choice | JavaScript | 1 | [repo](https://github.com/kesku/jev-freeform) |
| [jev-playground (hegargarcia)](https://github.com/hegargarcia/jev-playground) | Benchmarks Jev against other evaluation models in games with explicit states, legal actions, and measurable outcomes. | TypeScript | 0 | [repo](https://github.com/hegargarcia/jev-playground) |
| [jev-as-a-judge](https://github.com/danielgshea/jev-as-a-judge) | Using Jev as an evaluator. | Python | 0 | [repo](https://github.com/danielgshea/jev-as-a-judge) |
| [jev-report](https://github.com/HackSing/jev-report) | 发明 RLHF 的人，这次做了个不会说话的模型：Jev 独立研究报告。52 页 PDF + 50 条中文实测复现包 + 143 条可回溯数据表 | Python | 0 | [repo](https://github.com/HackSing/jev-report) |
| [jev-research-eval](https://github.com/jgridifier/jev-research-eval) | Reproducible Jev Ultrafast research-browser eval harness + field note (QC’d cases, suite runner, report generator). Not investment advice. | HTML | 0 | [repo](https://github.com/jgridifier/jev-research-eval) |
| [jev-exploration](https://github.com/SamuelSacco/jev-exploration) | Jev (TypeSafe) exploratory thread: claim audit, live demos, and runnable code | Python | 0 | [repo](https://github.com/SamuelSacco/jev-exploration) |
| [jev-secret-detection](https://github.com/teyhouse/jev-secret-detection) | Measures how well TypeSafe's RLCD-Jev model spots real secret credentials in file snippets | Python | 0 | [repo](https://github.com/teyhouse/jev-secret-detection) · [post](https://x.com/Teyhouse/status/2100555273718907064) |
| [jev-phishing-bench](https://github.com/anisselbd/jev-phishing-bench) | Jev (TypeSafe) vs Claude Haiku 4.5 on 2 000 phishing emails: accuracy, calibration, latency, cost. Reproducible benchmark. | Python | 0 | [repo](https://github.com/anisselbd/jev-phishing-bench) |
| [system-one-gemma](https://github.com/akash-kamat/system-one-gemma) | Open-source Jev-style System One decision model. Gemma 3 270M with a scoring head — fast, calibrated decisions in a single forward pass. No text generation. Inspired by TypeSafe.ai's Jev. | Python | 0 | [repo](https://github.com/akash-kamat/system-one-gemma) |
| [jev-routing-experiment](https://github.com/TokenTrim/jev-routing-experiment) | Benchmarking TypeSafe's Jev decision model as a cost-efficient LLM router on RouterArena | Python | 0 | [repo](https://github.com/TokenTrim/jev-routing-experiment) |
| [jev-jp-address](https://github.com/smasato/jev-jp-address) | Jev (TypeSafe) 性能評価プロジェクト — 日本郵便 KEN_ALL をマスタに、AI SDK 経由の Jev が住所のあいまい一致にどこまで使えるかを検証 | TypeScript | 0 | [repo](https://github.com/smasato/jev-jp-address) |
| [openjev-experiments](https://github.com/zefir1990/openjev-experiments) | Openjev experiments | Python | 0 | [repo](https://github.com/zefir1990/openjev-experiments) · [site](https://demensdeum.com) |
| [shade-arena-jev-monitor](https://github.com/nican2018/shade-arena-jev-monitor) | Evaluating TypeSafe's Jev as a fast monitor and action gate for agent sabotage in SHADE-Arena, compared with Gemini 2.5 Flash/Pro. | Python | 0 | [repo](https://github.com/nican2018/shade-arena-jev-monitor) |
| [thaiexam-jev-charts](https://github.com/vehas/thaiexam-jev-charts) | Charts: TypeSafe Jev evaluated on Thai standardized exams vs 110 other models | HTML | 0 | [repo](https://github.com/vehas/thaiexam-jev-charts) |
| [jev-column-race](https://github.com/goodrahstar/jev-column-race) | Jev vs Gemini 3.8 Flash: labelling 1,000 app reviews, 4.1× faster and 7× cheaper | JavaScript | 0 | [repo](https://github.com/goodrahstar/jev-column-race) · [site](https://jev-column-race.vercel.app) |
| [jev-trace-classifier](https://github.com/sypherin/jev-trace-classifier) | Application of TypeSafe Jev (noul judgment primitive) on the collusion.wiki corpus: agent vs human page authorship, head-to-head vs local Qwen3.8-Flash-Next | Python | 0 | [repo](https://github.com/sypherin/jev-trace-classifier) |
| [jev-shadcn-lint-eval](https://github.com/blas0/jev-shadcn-lint-eval) | A small second eval for shadcn-ui/lint that uses TypeSafe's Jev to judge the linter's own output. | JavaScript | 0 | [repo](https://github.com/blas0/jev-shadcn-lint-eval) |
| [jev-deferred-crispification](https://github.com/dnakhoa/jev-deferred-crispification) | Position paper: the Hidden-Markov and fuzzy primitives missing from TypeSafe AI's Jev and System-One decision models. Two lemmas, one principle (Deferred Crispification), one architecture (BSF-S1). | TeX | 0 | [repo](https://github.com/dnakhoa/jev-deferred-crispification) |
| [jev-finance-benchmark](https://github.com/hifizz/jev-finance-benchmark) | typesafe.ai model jev finance benchmark | — | 0 | [repo](https://github.com/hifizz/jev-finance-benchmark) |
| [jev-pick-and-place-study](https://github.com/tryaksh/jev-pick-and-place-study) | A small reproducible MuJoCo pilot comparing Jev, Claude Haiku, and reactive rules for pick-and-place. | Python | 0 | [repo](https://github.com/tryaksh/jev-pick-and-place-study) |
| [jev-spam-eval](https://github.com/bitnovus/jev-spam-eval) | Zero-shot spam filtering with TypeSafe Jev Noul questions, compared with TF-IDF baselines | Jupyter Notebook | 0 | [repo](https://github.com/bitnovus/jev-spam-eval) |
| [jev-anotacao-sentencas](https://github.com/lab-dados/jev-anotacao-sentencas) | Jev (TypeSafe) vs. Gemini 3.8 Flash vs. GPT-5.6 Luna na anotação estruturada de sentenças do TJSP: qualidade, tempo e custo | Python | 0 | [repo](https://github.com/lab-dados/jev-anotacao-sentencas) · [site](https://lab-dados.github.io/jev-anotacao-sentencas/) |
| [jev-lab](https://github.com/Menny1337/jev-lab) | TypeScript experiments, evaluations, and latency benchmarks for TypeSafe's Jev model | TypeScript | 0 | [repo](https://github.com/Menny1337/jev-lab) |
| [jev-headline-bench](https://github.com/Gaurav-Gosain/jev-headline-bench) | Can Jev pick the winner of a real headline A/B test? 64.5% across 10,984 Upworthy randomized experiments, 74.7% when the difference was decisive. | Go | 0 | [repo](https://github.com/Gaurav-Gosain/jev-headline-bench) |
| [jev-alpha-bench](https://github.com/Gaurav-Gosain/jev-alpha-bench) | Does Jev predict stock returns from news? It reads the news well; there is no tradeable alpha. Three arms separate reading from recall. | Go | 0 | [repo](https://github.com/Gaurav-Gosain/jev-alpha-bench) |
| [FinancialPredictionJev](https://github.com/thodoh1/FinancialPredictionJev) | Using Jev to test how well it predicts financial markets(just like most llms as of september 2026, it doesnt do that good) | Python | 0 | [repo](https://github.com/thodoh1/FinancialPredictionJev) |
| [Typesafe_chess_eval](https://github.com/AliceRoselia/Typesafe_chess_eval) | An evaluation of typesafe AI chess. As it turns out, the AI isn't doing really well even though chess is not a particularly open-ended game. Still, it's only a prototype and this probably wasn't optimzied for games. | Python | 0 | [repo](https://github.com/AliceRoselia/Typesafe_chess_eval) |
| [typesafe-oracles](https://github.com/trophee-bot/typesafe-oracles) | Evaluating TypeSafe's System One primitives (Choice/Score/Noul) — where a typed oracle beats an LLM call | JavaScript | 0 | [repo](https://github.com/trophee-bot/typesafe-oracles) |
| [system-one-adapter-rust](https://github.com/codeitlikemiley/system-one-adapter-rust) | Rust port of TypeSafe system-one-adapter (LLM-backed system_one evaluations) | Rust | 0 | [repo](https://github.com/codeitlikemiley/system-one-adapter-rust) |
| [PocketJev](https://github.com/NullPo-jp/PocketJev) | On-device iPhone visual decision tool using MLX and Qwen3-VL direct option logits. | Swift | 0 | [repo](https://github.com/NullPo-jp/PocketJev) |
| [misereru-slide-jev](https://github.com/myokoym/misereru-slide-jev) | Ongoing Japanese research deck on Jev and System One models, maintained as Markdown slides. | JavaScript | 0 | [repo](https://github.com/myokoym/misereru-slide-jev) · [site](https://myokoym.github.io/misereru-slide-jev/) |
| [Parallel Constrained Decoding (Qwen2.5-1B-RLCD)](https://huggingface.co/spaces/drinkmoonshine/parallel-constrained-decoding) | Hugging Face Space exploring open-source parallel constrained decoding as an alternative to Jev. | — | — | [site](https://huggingface.co/spaces/drinkmoonshine/parallel-constrained-decoding) |

## 10 · Other lists

*Other curated lists.*

*3 entries*

| Project | Description | Lang | Stars | Links |
| --- | --- | --- | --- | --- |
| [awesome-typesafe](https://github.com/AbdelStark/awesome-typesafe) | Curated list of official resources and community projects for TypeSafe, System One models, and Jev, with a GitHub Pages site. | CSS | 151 | [repo](https://github.com/AbdelStark/awesome-typesafe) · [site](https://abdelstark.github.io/awesome-typesafe/) |
| [awesome-jev (yibie)](https://github.com/yibie/awesome-jev) | A curated list of public projects, integrations, and discussions built on Jev — TypeSafe AI's System One model for typed decisions. | Python | 82 | [repo](https://github.com/yibie/awesome-jev) |
| [awesome-jev (AnotiaWang)](https://github.com/AnotiaWang/awesome-jev) | A curated list of awesome Jev / TypeSafe System One applications, libraries, and resources. | — | 44 | [repo](https://github.com/AnotiaWang/awesome-jev) · [post](https://x.com/0xLogicrw/status/2100478725393686556) |

## 11 · Articles & threads

*Coverage, write-ups, and X threads.*

*48 entries*

| Project | Description | Lang | Stars | Links |
| --- | --- | --- | --- | --- |
| [Hacker News launch thread](https://news.ycombinator.com/item?id=49717558) | 1,800-point thread debating whether typed decisions replace LLM calls for classification, routing, and scoring. | — | — | [link](https://news.ycombinator.com/item?id=49717558) |
| [AINews: Jev, a System One Model that only decides](https://www.latent.space/p/ainews-jev-a-system-one-model-that) | Latent Space's launch-day roundup: over 100x faster and 200x cheaper than small frontier LLMs. | — | — | [link](https://www.latent.space/p/ainews-jev-a-system-one-model-that) |
| [TypeSafe AI debuts model for machines that plays Doom](https://www.theregister.com/ai-and-ml/2026/09/16/typesafe-ai-debuts-model-for-machines-that-plays-doom/5296711) | The Register on the launch, the Doom demo, and the $40M seed round. | — | — | [link](https://www.theregister.com/ai-and-ml/2026/09/16/typesafe-ai-debuts-model-for-machines-that-plays-doom/5296711) |
| [Jev: System One models explained](https://www.theneuron.ai/explainer-articles/typesafe-jev-system-one-models-explained/) | The Neuron's explainer on AI decisions without a chatbot. | — | — | [link](https://www.theneuron.ai/explainer-articles/typesafe-jev-system-one-models-explained/) |
| [Mini-Vibe Check: Jev judged everything I have written in 0.7 seconds](https://every.to/also-true-for-humans/mini-vibe-check-typesafe-s-jev-judged-everything-i-ve-written-in-0-7-seconds) | Every's Mike Taylor runs his whole archive through Jev. | — | — | [link](https://every.to/also-true-for-humans/mini-vibe-check-typesafe-s-jev-judged-everything-i-ve-written-in-0-7-seconds) |
| [Jev: The Language Model That Will Not Talk](https://anthonymaio.substack.com/p/jev-the-language-model-that-wont) | Anthony Maio's essay on what a model that cannot generate text is for. | — | — | [link](https://anthonymaio.substack.com/p/jev-the-language-model-that-wont) |
| [TypeSafe Jev: the first decision-only model class](https://www.developersdigest.tech/blog/typesafe-jev-system-one-models-release-guide-2026) | Release-week technical roundup: API, evals, adapter, and skill. | — | — | [link](https://www.developersdigest.tech/blog/typesafe-jev-system-one-models-release-guide-2026) |
| [He says he co-invented ChatGPT. His new AI will not write a word](https://dev.to/gabrielanhaia/he-says-he-co-invented-chatgpt-his-new-ai-jev-wont-write-a-word-e3c) | dev.to walkthrough of the Vercel AI SDK evaluate integration. | — | — | [link](https://dev.to/gabrielanhaia/he-says-he-co-invented-chatgpt-his-new-ai-jev-wont-write-a-word-e3c) |
| [Typed decisions, not chat](https://warmersun.com/jev/) | Independent walkthrough separating TypeSafe's published claims from public evidence. | — | — | [link](https://warmersun.com/jev/) |
| [What is Jev?](https://mohammedshehu.com/jev-typesafe-ai/) | Short practical intro with a Python ticket-triage example. | — | — | [link](https://mohammedshehu.com/jev-typesafe-ai/) |
| [AI that does not talk](https://ziplyne.agency/blog/ai-that-doesnt-talk-typesafe-jev-guide) | Practical guide: playground, Python and JS SDKs, raw HTTP, and the agent skill. | — | — | [link](https://ziplyne.agency/blog/ai-that-doesnt-talk-typesafe-jev-guide) |
| [Jev vs Mistral and Gemini for event validation](https://nearhere.events/blog/typesafe-jev-mistral-gemini-event-validation) | Head-to-head test at validating local event listings, with cost and latency. | — | — | [link](https://nearhere.events/blog/typesafe-jev-mistral-gemini-event-validation) |
| [TypeSafeのJevを正しく驚く](https://zenn.dev/nwn/articles/824026c76116e0) | Japanese walkthrough of what Jev is and is not. | — | — | [link](https://zenn.dev/nwn/articles/824026c76116e0) |
| [jev 同士に五目並べで対戦させた](https://zenn.dev/mizchi/articles/jev-plays-gomoku) | Jev vs Jev gomoku with source and timing logs. | — | — | [link](https://zenn.dev/mizchi/articles/jev-plays-gomoku) |
| [Launch thread by Diogo Almeida](https://x.com/CompleteSkeptic/status/2099925682726002904) | TypeSafe's founder on why RLCD-trained decision models are a shorter path to value than chat models. | — | — | [link](https://x.com/CompleteSkeptic/status/2099925682726002904) |
| [Computer use built on Jev](https://x.com/awlevin/status/2100262612428894676) | Aaron Levin: 155x cheaper than Opus 5, about 20x faster, and it generalizes across operating systems. | — | — | [link](https://x.com/awlevin/status/2100262612428894676) |
| [Browser Use + Jev](https://x.com/gregpr07/status/2100411066966749359) | Gregor Zunic's flight-search demo with a dynamic DOM action space. | — | — | [link](https://x.com/gregpr07/status/2100411066966749359) |
| [Jev Typewriter launch](https://x.com/stevekrouse/status/2100287368221659289) | Steve Krouse's playable 16-judgment demo and video. | — | — | [link](https://x.com/stevekrouse/status/2100287368221659289) |
| [Model router built with Jev](https://x.com/ephraimduncan/status/2100454070536351824) | Ephraim Duncan's demo where Jev decides which model should serve a request. | — | — | [link](https://x.com/ephraimduncan/status/2100454070536351824) |
| [Jev vs Qwen on Cerebras](https://x.com/iamMrDuncan/status/2100467548298899918) | Video comparison against a structured-output LLM baseline. | — | — | [link](https://x.com/iamMrDuncan/status/2100467548298899918) |
| [Internal classifier field note](https://x.com/identityTorn/status/2100475121324728615) | Matched-precision comparison against a private fine-tuned classifier. | — | — | [link](https://x.com/identityTorn/status/2100475121324728615) |
| [Jev as an agent safety monitor](https://x.com/isNickMa/status/2100566407524344225) | Test report using Jev to check each agent action first: most attacks caught, almost no false blocks. | — | — | [link](https://x.com/isNickMa/status/2100566407524344225) |
| [Hide posts on X with natural language](https://x.com/marcelpociot/status/2100520134481735729) | Marcel Pociot's browser extension that collapses posts based on a Jev judgment. | — | — | [link](https://x.com/marcelpociot/status/2100520134481735729) |
| [Jev plays Minecraft (r/accelerate)](https://reddit.com/r/accelerate/comments/1whk9oy/new_typesafe_ai_jev_model_playing_minecraft_wip/) | Work-in-progress demo of Jev driving Minecraft, including fleeing zombies at night. | — | — | [link](https://reddit.com/r/accelerate/comments/1whk9oy/new_typesafe_ai_jev_model_playing_minecraft_wip/) |
| [Vercel fx: Jev as a command safety reviewer](https://x.com/rauchg/status/2100307962262872105) | Guillermo Rauch: Jev reviews every fx command, faster and more accurate than a chat model. | — | — | [link](https://x.com/rauchg/status/2100307962262872105) |
| [Stagehand + Jev browser use](https://x.com/kylejeong/status/2100622054945095934) | Observe the accessibility tree, Jev chooses the next action, Stagehand executes. | — | — | [link](https://x.com/kylejeong/status/2100622054945095934) |
| [OpenCode browser use powered by Jev](https://x.com/thdxr/status/2100288951978164647) | Preview of fast browser use with Jev and OpenCode's browser CLI. | — | — | [link](https://x.com/thdxr/status/2100288951978164647) |
| [Ground Truth news-framing extension](https://x.com/jagenaujagenau/status/2100622352333574460) | Browser extension that classifies an article's framing, type, topic, and loaded language with Jev. | — | — | [link](https://x.com/jagenaujagenau/status/2100622352333574460) |
| [Jev in a Grammarly-style Mac app](https://x.com/nielsmouthaan/status/2100543809465577665) | Desktop writing app using Jev for fast structured writing judgments. | — | — | [link](https://x.com/nielsmouthaan/status/2100543809465577665) |
| [Kalshi prediction-market bot](https://x.com/stablebun/status/2100614911898390589) | Jev trades 15-minute and 1-hour BTC, ETH, and SOL markets on Kalshi. | — | — | [link](https://x.com/stablebun/status/2100614911898390589) |
| [Model router CLI](https://x.com/nidhisinghattri/status/2100617830890885415) | Task plus subscription list in, Jev picks which model or agent should handle it. | — | — | [link](https://x.com/nidhisinghattri/status/2100617830890885415) |
| [Support ticket classifier](https://x.com/ifahimreza/status/2100616988746023102) | Jev labels category, urgency, and human-versus-auto handling for support tickets. | — | — | [link](https://x.com/ifahimreza/status/2100616988746023102) |
| [ConsoleChaosRacing driven by Jev](https://x.com/Maoku/status/2100611986358927627) | Racing UI wired to Jev driving decisions. | — | — | [link](https://x.com/Maoku/status/2100611986358927627) |
| [skillbox + Jev skill routing](https://x.com/thekitze/status/2100556122570792999) | MCP skill router where Jev picks the relevant skills instead of a long agent search. | — | — | [link](https://x.com/thekitze/status/2100556122570792999) |
| [jev-rabbit PR review bot](https://x.com/thekitze/status/2100616530275029139) | Work-in-progress PR reviewer with plain-English Jev rules. | — | — | [link](https://x.com/thekitze/status/2100616530275029139) |
| [AIAvatarKit turn-end gate](https://x.com/uezochan/status/2100608556823388486) | Voice-dialog turn-end detection using Jev scores after speech. | — | — | [link](https://x.com/uezochan/status/2100608556823388486) |
| [Early Jev tools roundup](https://x.com/0xLogicrw/status/2100478725393686556) | Thread cataloguing the first wave of Jev tools: MCP servers, routers, reviewers, and browser agents. | — | — | [link](https://x.com/0xLogicrw/status/2100478725393686556) |
| [Jev: System One models explained (DataCamp)](https://www.datacamp.com/blog/system-one-models-jev) | Third-party write-up of the System One primitives, pricing, and vendor workflow evals. | — | — | [link](https://www.datacamp.com/blog/system-one-models-jev) |
| [DuckDB Jev classifier](https://x.com/hamiltonulmer/status/2100370557405667768) | DuckDB extension that classifies rows in CSV, Parquet, or DuckDB tables with Jev, about 10 seconds per 1,000 rows. | — | — | [link](https://x.com/hamiltonulmer/status/2100370557405667768) |
| [Hook panel A/B tester](https://x.com/Vybhav/status/2100609472750047263) | Near-real-time scoring of TikTok and Instagram hooks against about 100 personas. | — | — | [link](https://x.com/Vybhav/status/2100609472750047263) |
| [Jev gomoku harness](https://x.com/VacekvVita/status/2100609341145465325) | Local tactics shrink 225 moves to about 40 candidates, then Jev picks among tiered options. | — | — | [link](https://x.com/VacekvVita/status/2100609341145465325) |
| [ViZDoom Jev agent](https://x.com/kmad/status/2100339921714323624) | Two decision channels on ViZDoom, navigation at 5 Hz and combat at 12 Hz, with an 18-kill test run. | — | — | [link](https://x.com/kmad/status/2100339921714323624) |
| [StarCraft Brood War WASM MCP demo](https://x.com/literallydenis/status/2100622868878868603) | Brood War in WASM exposed as an MCP server, with Jev playing and still losing to a Zerg rush. | — | — | [link](https://x.com/literallydenis/status/2100622868878868603) |
| [Spanish AEPD corpus test](https://x.com/juanmacias/status/2100463494629925048) | Jev versus a hand-built regex on 544 public data-protection resolutions: 98.2% agreement for about five cents. | — | — | [link](https://x.com/juanmacias/status/2100463494629925048) |
| [Tabletop MMORPG action mapper](https://x.com/Jon_iy/status/2100397782322364792) | Eval of Jev turning free-text player intent into typed server actions: 96% agreement, 317 ms median. | — | — | [link](https://x.com/Jon_iy/status/2100397782322364792) |
| [Jev in 34 seconds](https://x.com/dwhitedesign/status/2100368024649769384) | Short video explainer of how Jev's typed-decision loop works. | — | — | [link](https://x.com/dwhitedesign/status/2100368024649769384) |
| [agentjournal ledger tests](https://x.com/agent_journal/status/2100611808545632758) | 25,174 Jev calls for $1.43 across template-trap, multi-dimension, and real-ledger account-coding tasks. | — | — | [link](https://x.com/agent_journal/status/2100611808545632758) |
| [Wiki-link clicker demo](https://x.com/mark1nhu/status/2100620075090792490) | Page-level demo where Jev picks which candidate link to click toward a goal. | — | — | [link](https://x.com/mark1nhu/status/2100620075090792490) |


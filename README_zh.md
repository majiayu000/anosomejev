# anosomejev — Jev 可信地图

> **Trust Map for Jev / System One**：可搜索目录 + 信任标签 + Must-30 + 每周中文雷达。  
> **与 TypeSafe 无关联。** 主数据来自 GitHub 自采（见 [SOURCE.md](SOURCE.md)），不是 awesomejev.com 的无署名镜像。

[English](README.md) · **[打开可信地图](docs/index.html)** · [本周雷达](docs/radar.html) · [雷达 md](radar/README.md) · [信任标签](TRUST_LABELS.md) · [SOURCE](SOURCE.md) · 协议：[CC0-1.0](LICENSE)

**GitHub Pages（启用后）：** https://majiayu000.github.io/anosomejev/  
启用：Settings → Pages → Deploy from branch → `main` → `/docs`（详见 [.github/PAGES.md](.github/PAGES.md)）

### 三层结构

| 层级 | 路径 | 作用 |
| --- | --- | --- |
| **可信目录（前台）** | [`docs/`](docs/index.html) | 自采 GitHub 索引 + 搜索/筛选/信任标签（当前约 584 条） |
| **精选 Must-30** | 下文 | 人工高信号 |
| **中文雷达** | [`radar/`](radar/README.md) | 每周高信号叙事 |

本地预览：`cd docs && python3 -m http.server 8080`

---

## 1. Jev 是什么

[Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev) 是 TypeSafe 的首个 **System One** 模型（约 2026-09-15 发布）：给软件用的**类型化决策**，不是聊天机器人。

| 原语 | 作用 |
| --- | --- |
| **Choice** | 从枚举选项中选择（带概率 / 置信度） |
| **Score** | 有序 / 分级判断 |
| **Noul** | 是/否式概率 |

- **API：** `POST https://api.typesafe.ai/v1/systemone` — 输入 `state` + 类型化 `questions` → 类型化答案（+ 概率/置信度）。别名：`jev-latest` / `jev-preview`（如 `jev-1.13.0`）。
- **训练主张：** RLCD（Reinforcement Learning for Calibrated Decisions）— 架构与权重未公开。
- **厂商定价：** 输入 $0.042 / MTok；**输出免费**。延迟主张：端到端 70–500 ms。
- **核心论点：** LLM 为人写文本；System One 对状态回答类型化问题，让**代码**分支/排序/路由 — 「不生成文本、不解析」。

**从这里开始**

- 文档：https://docs.typesafe.ai/ · [llms.txt](https://docs.typesafe.ai/llms.txt)
- 宣言：https://typesafe.ai/manifesto — 「Build Prod, Not God」
- **必读：** [模型 jaggedness — jev-1.13](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md)

### 红线

> **类型安全 ≠ 事实正确。**  
> 符合 schema 的 Choice / Score / Noul 答案仍可能**自信地错**。厂商所谓「零幻觉 / 零类型错误」指的是**不会发明 schema 之外的文本**，不是语义真理。HN、中文报道与官方 jaggedness 均强调这一点。


---

## 中文 Jev 雷达（主产品）

每周精选，不拼百科条目数：

- 索引：[radar/](radar/README.md)
- 最新一期：[2026-W38 · 发车周](radar/2026-W38.md)

清单（Must-30）是底座；**雷达才是持续更新的前台。**

---

## 2. 必收 30（Must-30）

按**生态重要性**排序，不是纯星标。依据见 [research/03-taxonomy-and-must-include.md](research/03-taxonomy-and-must-include.md)。

| # | 项目 | ★ | 为何收录 |
| --- | --- | --- | --- |
| 1 | [TypeSafe 文档](https://docs.typesafe.ai/) | — | 原语、模式、jaggedness、API 正典 |
| 2 | [发布博文](https://typesafe.ai/blog/introducing-system-one-models-and-jev) | — | RLCD、定价、演示 nuance、FAQ |
| 3 | [宣言](https://typesafe.ai/manifesto) | — | 产品哲学 |
| 4 | [Jaggedness jev-1.13](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md) | — | 官方失败模式 — 必读 |
| 5 | [工作流评测](https://evals.typesafe.ai/) | — | 厂商 Pareto（先读 caveat）· `vendor-claim` |
| 6 | [typesafe-sdk-js](https://github.com/typesafe-ai/typesafe-sdk-js) | ★62 | 官方 TS SDK |
| 7 | [typesafe-sdk-python](https://github.com/typesafe-ai/typesafe-sdk-python) | ★34 | 官方 Python SDK |
| 8 | [system-one-adapter-python](https://github.com/typesafe-ai/system-one-adapter-python) | ★67 | 同一类型接口对比 Jev vs LLM |
| 9 | [typesafe-ai/skills](https://github.com/typesafe-ai/skills) | ★60 | 官方 agent skill |
| 10 | [Vercel AI Gateway 上的 Jev](https://vercel.com/ai-gateway/models/jev) | — | `typesafe-ai/jev` · 部分用户可绕等待列表 |
| 11 | [browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) | ★1,194 | 旗舰 CU：Jev 选操作+DOM；LLM 只做 TYPE_TEXT |
| 12 | [vinnylarouge/jevlike](https://github.com/vinnylarouge/jevlike) | ★548 | 开源 option scorer · `replica`（非 TypeSafe 权重） |
| 13 | [TheoLeeCJ/openjev](https://github.com/TheoLeeCJ/openjev) | ★463 | 开源研究复刻 · `replica` |
| 14 | [jarrodwatts/jev-trader](https://github.com/jarrodwatts/jev-trader) | ★363 | 每 Monad 区块一个决策 |
| 15 | [awlevin/typesafe-computer-use](https://github.com/awlevin/typesafe-computer-use) | ★145 | OCR→Jev→点击 |
| 16 | [fhshaik/typesafe-mario](https://github.com/fhshaik/typesafe-mario) | ★165 | 结构化模拟器状态游戏智能体 |
| 17 | [usenotra/notra](https://github.com/usenotra/notra) | ★170 | 偏生产的 flag 路由到 Jev 布尔 |
| 18 | [vercel/eve](https://github.com/vercel/eve) | ★5,355 | 大框架；evaluate 默认路径 — **`star-inflation-host`** |
| 19 | [vercel-labs/ai-cli](https://github.com/vercel-labs/ai-cli) | ★699 | CLI evaluate |
| 20 | [devagrawal09/jev-review](https://github.com/devagrawal09/jev-review) | ★77 | 分阶段代码审查 + 看板 |
| 21 | [thruwire/foreman](https://github.com/thruwire/foreman) | ★67 | 用 Jev 盯住编码 agent |
| 22 | [NiazMorshed2007/jev-review](https://github.com/NiazMorshed2007/jev-review) | ★45 | 本地优先 MCP 质量审查 |
| 23 | [gargpratyush/jev-router](https://github.com/gargpratyush/jev-router) | ★44 | 把 Claude Code 任务路由到够用的最便宜模型 |
| 24 | [vlad-terin/jev-browser](https://github.com/vlad-terin/jev-browser) | ★31 | observe-act-verify 中的元素选择 |
| 25 | [jkudish/jev-mcp](https://github.com/jkudish/jev-mcp) | ★24 | MCP 封装 verify/screen/find |
| 26 | [AbdelStark/awesome-typesafe](https://github.com/AbdelStark/awesome-typesafe) | ★118 实时 GH / awesomejev ★41 | 最强调 caveat 的 awesome |
| 27 | [yibie/awesome-jev](https://github.com/yibie/awesome-jev) | ★69 实时 GH | 实践分类法 |
| 28 | [AnotiaWang/awesome-jev](https://github.com/AnotiaWang/awesome-jev) | ★39 实时 GH | 中英双语精选 |
| 29 | [anessbelbati/jev-rerank-bench](https://github.com/anessbelbati/jev-rerank-bench) | ★1 | 独立 rerank 基准 |
| 30 | [HackSing/jev-report](https://github.com/HackSing/jev-report) | awesomejev ★0 | 中文独立报告包 — **`needs-verify`** |

未写「实时 GH」的 ★ 均为 **awesomejev 2026-09-17**。

**同属关键网关：** [Cloudflare `typesafe/jev`](https://developers.cloudflare.com/ai/models/typesafe/jev/) · [OpenRouter beta 公告](https://x.com/OpenRouter/status/2100744709589316009)

**强力候补：** `RomanSlack/jev-drone`、`kitze/unclutter`、`droidrun/mobile-jev`、`DevMortimer/pi-warden`、`FirasSX914/calibre`、`anisselbd/jev-phishing-bench`（`negative-result`）、Mapika/decider、NullPo-jp/PocketJev。

---

## 3. 批判与校准（上线前必读）

全文：[taxonomy/critique-limits.md](taxonomy/critique-limits.md)

1. 钉住官方 [jaggedness](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md) 与发布博文 nuance 框。  
2. 钉住 HN **[49717558](https://news.ycombinator.com/item?id=49717558)** — 相信「200×」之前先读完。（不是 [49716682](https://news.ycombinator.com/item?id=49716682)。）  
3. 分清标签：`schema-guarantee`（类型/schema 保证）/ `task-accuracy`（任务正确率）/ `calibration`（校准与阈值）。  
4. 保留**负面结果**：钓鱼基准上 Haiku 可胜；Pac-Man 胜利不可复现；发票工作流偏弱等。  
5. 默认独立冒烟：[Every / Mike Taylor](https://every.to/also-true-for-humans/mini-vibe-check-typesafe-s-jev-judged-everything-i-ve-written-in-0-7-seconds) — 777 次判断 &lt;0.7 秒；植入缺陷 **6/7**。  
6. 厂商工作流评测 = 与前沿模型平均**一致率**，**不是** ground truth（[evals.typesafe.ai](https://evals.typesafe.ai/)）。  
7. 首页 193.6× / 444.6× 是披露过的**偏高端**数字。

### 官方 jaggedness 摘要（jev-1.13）

| 模式 | 建议 |
| --- | --- |
| 字面理解 | 条件写死；边界放进 criteria；拆分意图 |
| 数学与计数 | 算术放代码；别让模型数东西 |
| 日期时间比较 | 用 Choice 抽字段，比较放代码 |
| 间接指代 | 减少跳转；点名相关 state 字段 |
| 过大无关 state | 先过滤；context rot 真实存在 |
| 对抗内容 | 精确 criteria；测边界 |
| 自相矛盾指令 | 对齐；避免「true 表示否」的 Noul |
| 结构不变量 | 勿假设跨问题 P(noul)=P(yes) 或概率互补 |
| 生成 | 用生成式模型 |

### 反模式

- 只凭厂商 Pareto 百分比上线自动化  
- 在 Jev 里做计数、日期运算、颜色距离  
- 把「输出免费」当成准确率无限  
- 用 `vercel/eve` 的星标给「最热 Jev 项目」排名（`star-inflation-host`）  
- 把 jevlike / openjev 当成 TypeSafe 权重  

---

## 4. 中文资源（一等公民）

专题页：[taxonomy/chinese.md](taxonomy/chinese.md)

### 解读与报道

| 来源 | 链接 | 角度 |
| --- | --- | --- |
| OrcaRouter | https://www.orcarouter.ai/zh-CN/blog/jev-typesafe-system-one-what-we-know | 「我们知道/不知道」；独立测试 vs 厂商；校准；**不托管** Jev（2026-09-16） |
| remio | https://www.remio.ai/zh/post/typesafe-jev-model-rejects-chatbots-for-programmatic-decisions-zh | 程序化决策 vs 聊天；schema≠真理 |
| OurCoders | https://ourcoders.com/tech/show/tech-20260916-001-07/ | 「类型正确离判断正确还有多远」 |
| 人人都是产品经理 | https://www.woshipm.com/share/6465624.html | RLHF、Jevons 命名、Every 777/0.7s、零幻觉误读 |
| agenccy | https://agenccy.ai/zh/news/jevs-0-percent-hallucination-sits-beside-a-678-percent-accuracy-score/ | 「0% 幻觉」旁是约 67.8% 工作流分（厂商语境） |
| 赢政天下 | https://www.winzheng.com/article/jev-ai-decision-model-typesafe-diogo-almeida-system-one | 新闻向综述 |
| OrcaRouter 英文对照 | https://www.orcarouter.ai/blog/jev-typesafe-system-one-what-we-know | 同上 |

**中文报道共识：** 不是聊天模型；速度/成本大体可信、准确率需本地标注；「零幻觉」= schema 保证；架构未公开；最佳用法 = 海量类型化决策 + 置信度门控 + LLM 写字。

### 清单与报告

- [AnotiaWang/awesome-jev 简体中文](https://github.com/AnotiaWang/awesome-jev/blob/main/README_zh.md) — 目前最好的中文清单入门  
- [HackSing/jev-report](https://github.com/HackSing/jev-report) — awesomejev 描述为 52 页 PDF + 50 条中文复现 + 143 表 · **`needs-verify`**（发布前请再确认仓库）

### 讨论

- **[@dotey 中文解读长帖](https://x.com/dotey/status/2100109937237987823)** — 把 Jev 讲成代码里的「智能判断函数」：RLCD、类型安全、校准概率、工作流评测、Doom/Wikipedia，并提醒极端加速倍数是最优情况  
- [请求中文字幕](https://x.com/dotey/status/2100125076091760742)  
- [Suyanzhenq：「量化交易圣体」](https://x.com/Suyanzhenq/status/2100121219521544312)  
- HN 主帖：https://news.ycombinator.com/item?id=49717558  

### 实践提示（编辑部）

1. 在**自有标注集**上画校准 / 选择风险曲线，再自动化。  
2. **Jev 做决策，LLM 写字。**  
3. 上线前读 jaggedness。  
4. Every 协议可作默认独立冒烟测试。  

Every 常被中文稿引用的数字：37×21 → **777** 次判断 **&lt;0.7s**、约 ¼ 美分；更广 **1,709** 次 / **&lt;$0.01**；该设置下相对 Fable 约 25× 更快、约 580× 更便宜；植入缺陷 Jev **6/7**、Fable **7/7**。

---

## 5. 分类索引

### 按产物类型

| 文件 | 范围 |
| --- | --- |
| [taxonomy/official.md](taxonomy/official.md) | 公司、文档、SDK、jaggedness、Discord |
| [taxonomy/sdks.md](taxonomy/sdks.md) | 官方与社区客户端 |
| [taxonomy/integrations.md](taxonomy/integrations.md) | Vercel / Cloudflare / OpenRouter / eve |
| [taxonomy/agents.md](taxonomy/agents.md) | MCP、路由、审查、守卫 |
| [taxonomy/browser-cu.md](taxonomy/browser-cu.md) | Ultrafast、OCR CU、移动端 |
| [taxonomy/apps.md](taxonomy/apps.md) | 交易、notra、DuckDB 等 |
| [taxonomy/games.md](taxonomy/games.md) | Mario、无人机、Doom  caveat |
| [taxonomy/demos.md](taxonomy/demos.md) | 演示与 cookbook |
| [taxonomy/benchmarks-replicas.md](taxonomy/benchmarks-replicas.md) | jevlike、openjev、基准 |
| [taxonomy/writing.md](taxonomy/writing.md) | 英文写作、HN、X、其他 awesome |
| [taxonomy/chinese.md](taxonomy/chinese.md) | 中文专题 |
| [taxonomy/critique-limits.md](taxonomy/critique-limits.md) | 限制与反模式 |

### 按决策模式

| 文件 | 模式 |
| --- | --- |
| [patterns/routing.md](patterns/routing.md) | 路由 / 分类 / 意图 |
| [patterns/verification.md](patterns/verification.md) | 护栏 / 交接 / 安全 |
| [patterns/scoring.md](patterns/scoring.md) | 打分 / 重排 / 校准 |
| [patterns/labeling.md](patterns/labeling.md) | 标注 map-reduce |
| [patterns/realtime.md](patterns/realtime.md) | 实时 / CU / 游戏循环 |

信任标签说明：[TRUST_LABELS.md](TRUST_LABELS.md)

---

## 6. 完整火hose（数量百科）

| 表面 | URL | 角色 |
| --- | --- | --- |
| Awesome Jev 站点 | https://awesomejev.com/ | 约 410 条 · 合计约 10,093★（2026-09-17 刷新） |
| jev.directory | https://jev.directory/ | 可分享的原语片段 |
| Console | https://console.typesafe.ai/ | 密钥与 playground |
| Discord | https://discord.gg/typesafe | Show and Tell |
| HN 主帖 | https://news.ycombinator.com/item?id=49717558 | 主讨论 |

本列表的研究底稿：[research/](research/)

---

## 建议关注的 X 账号

来源：公开网页与 [research/08-x-content-haul.md](research/08-x-content-haul.md)

| 组别 | 账号 |
| --- | --- |
| 官方 | [@typesafeai](https://x.com/typesafeai)、[@CompleteSkeptic](https://x.com/CompleteSkeptic) |
| 网关 | [@OpenRouter](https://x.com/OpenRouter)、[@vercel_dev](https://x.com/vercel_dev)、[@ritakozlov](https://x.com/ritakozlov) |
| 构建者 | [@gregpr07](https://x.com/gregpr07)、[@browser_use](https://x.com/browser_use)、[@stevekrouse](https://x.com/stevekrouse)、[@hamiltonulmer](https://x.com/hamiltonulmer)、[@ephraimduncan](https://x.com/ephraimduncan)、[@rauchg](https://x.com/rauchg)、[@fazxes](https://x.com/fazxes) |
| 怀疑 / 纠偏 | [@awlevin](https://x.com/awlevin)、[@sebuzdugan](https://x.com/sebuzdugan)、[@danshipper](https://x.com/danshipper) |
| 中文 | [@dotey](https://x.com/dotey) |
| 亦被引用 | [@iamMrDuncan](https://x.com/iamMrDuncan)、[@identityTorn](https://x.com/identityTorn)、[@isNickMa](https://x.com/isNickMa)、[@chetaslua](https://x.com/chetaslua)、[@wmoto_ai](https://x.com/wmoto_ai)、[@Kostastsale](https://x.com/Kostastsale)、[@waynesutton](https://x.com/waynesutton)、[@malekoo](https://x.com/malekoo)、[@justALEXWORTEGA](https://x.com/justALEXWORTEGA)、[@harshagundal](https://x.com/harshagundal) |

发布主帖：https://x.com/CompleteSkeptic/status/2099925682726002904

---

## 定位一句话

> **awesomejev.com** = 发布首周「什么都建了」的百科。  
> **anosomejev** = 精选地图：什么重要、什么被证明、什么被夸大 — 中英双语。

贡献见 [CONTRIBUTING.md](CONTRIBUTING.md)。列表协议 [CC0-1.0](LICENSE)；被链项目保留各自许可证。

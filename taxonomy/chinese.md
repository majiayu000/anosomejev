# 中文资源 (Chinese resources)

First-class section — ZH coverage is underserved on English-only dumps. Label `zh`.

## 解读与报道

| 来源 | URL | 角度 |
| --- | --- | --- |
| OrcaRouter | https://www.orcarouter.ai/zh-CN/blog/jev-typesafe-system-one-what-we-know | 深读「我们知道/不知道」；独立测试 vs 厂商；校准；OrcaRouter **不**托管 Jev · 2026-09-16 · Magnus Corvin |
| OrcaRouter EN | https://www.orcarouter.ai/blog/jev-typesafe-system-one-what-we-know | 英文对照 |
| remio | https://www.remio.ai/zh/post/typesafe-jev-model-rejects-chatbots-for-programmatic-decisions-zh | 程序化决策 vs 聊天；schema≠真理 · ~2026-09-17 |
| OurCoders | https://ourcoders.com/tech/show/tech-20260916-001-07/ | 「类型正确离判断正确还有多远」· 林岚 · 2026-09-16 |
| 人人都是产品经理 / SenseAI | https://www.woshipm.com/share/6465624.html | 大众向解读：RLHF、Jevons、Every 777/0.7s、零幻觉误读、官方自曝限制 · 2026-09-17 |
| agenccy | https://agenccy.ai/zh/news/jevs-0-percent-hallucination-sits-beside-a-678-percent-accuracy-score/ | 「0% 幻觉」旁是约 67.8% 工作流准确率（厂商面板语境） |
| 赢政天下 / winzheng | https://www.winzheng.com/article/jev-ai-decision-model-typesafe-diogo-almeida-system-one | 新闻向：成本与人物叙事 |

### 中文报道共同主题

1. **不是聊天模型** — 只有 Choice / Score / Noul。  
2. **速度/成本大体可信；准确率要本地标注** — 常引 Every 6/7 defects。  
3. **「零幻觉」= schema 保证**，不是语义正确。  
4. 厂商工作流准确率常被概括为中段 60%（orcarouter 引面板 overall **67.8%** vs 最佳对照 **74.1%** — 视为厂商报告）。  
5. **架构 / RLCD 未公开**。  
6. **最佳用法：** 海量类型化决策 + 置信度门控 + 生成式模型写字。

## 清单与报告

| 项目 | URL | 备注 |
| --- | --- | --- |
| AnotiaWang/awesome-jev 简体中文 | https://github.com/AnotiaWang/awesome-jev/blob/main/README_zh.md | 目前最好的中文清单入门 |
| HackSing/jev-report | https://github.com/HackSing/jev-report | awesomejev 描述：52 页 PDF + 50 条中文实测复现 + 143 表 · **`needs-verify`** — 发布前请再次确认仓库存在 |

## 讨论

- [@dotey 中文解读](https://x.com/dotey/status/2100109937237987823) — 将 Jev 解释为代码里的「智能判断函数」：RLCD、类型安全、校准概率、工作流评测、Doom/Wikipedia、并提醒极端加速倍数是最优情况 · ~70.1K views（快照）
- [@dotey 请求中文字幕](https://x.com/dotey/status/2100125076091760742)
- [Suyanzhenq 回复](https://x.com/Suyanzhenq/status/2100121219521544312) — 「量化交易圣体」应用想象
- HN 主帖：https://news.ycombinator.com/item?id=49717558 — 「类型安全 ≠ 事实正确」争论常被中文读者引用

## 实践提示（编辑部）

- 在**自有标注集**上画校准曲线再自动化。  
- 与生成式模型分工：**Jev 决策，LLM 写字**。  
- 先读官方 [jaggedness](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md)。  
- Every 协议可作默认独立冒烟测试：https://every.to/also-true-for-humans/mini-vibe-check-typesafe-s-jev-judged-everything-i-ve-written-in-0-7-seconds  

完整英文对照见 [README_zh.md](../README_zh.md)。

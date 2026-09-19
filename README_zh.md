# Awesome Jev

认识 Jev、跑通第一个示例，再查找适合自己的 SDK、项目和评测。

[English](README.md) · [从这里开始](guides/start.md#中文) · [可运行示例](examples/README.md#中文) · [参与贡献](CONTRIBUTING.md)

本清单由社区维护，与 TypeSafe 无隶属关系。收录表示值得参考，不代表已通过安全、准确率或生产可用性验证。

## Jev 是什么？

Jev 是 TypeSafe 的结构化决策模型。你提供**状态**（消息、文档或应用上下文）和**预先定义的问题**，它返回可以交给代码处理的值。例如：为工单选择队列、给用户情绪打分、判断消息是否紧急。产品定义见[官方介绍](https://docs.typesafe.ai/introduction)。

| 问题类型 | 适合做什么 | 怎样理解结果 |
| --- | --- | --- |
| **Choice** | 从预先定义的选项中选择工单队列 | 选中的选项，以及各选项的概率分布 |
| **Score** | 按明确的有序等级评价内容 | 评分标准上的位置，可以是小数 |
| **Noul** | 判断一个定义清楚的是非条件 | 0 到 1 的概率，没有单独的 confidence 字段 |

```mermaid
flowchart LR
    S["业务状态 + 预定义问题"] --> J["Jev"]
    J --> A["Choice / Score / Noul"]
    A --> C["代码校验与业务规则"]
    C --> R["路由建议或人工复核"]
```

模型负责判断，代码控制执行。**格式正确不代表判断正确。** Choice/Score 的 `confidence` 概括概率分布的形状，不是通用的正确率保证。详见[三种基础问题](https://docs.typesafe.ai/primitives)与[置信度说明](https://docs.typesafe.ai/confidence)。

## 你想先做什么？

| 目标 | 入口 |
| --- | --- |
| 理解概念与能力边界 | [新手指南](guides/start.md#中文) |
| 不配置密钥，先跑通流程 | [离线工单路由示例](examples/README.md#中文) |
| 调用真实模型 | [显式启用 live 模式](examples/README.md#live-mode) |
| 找 SDK 或集成方案 | 下方 [SDK 与接入](#sdk-与接入) |
| 用并行任务发现更多资源 | [候选检索与 Agent 分工](research/DISCOVERY.md) |
| 查看精选之外的资料 | [完整收集记录](catalog/FULL.md)，含历史及待核实条目 |

示例只需要 Python 3.10+ 标准库，不需要安装依赖或填写密钥：

```bash
git clone https://github.com/majiayu000/awesome-jev.git
cd awesome-jev
python3 examples/ticket_routing.py
```

默认输出来自**人工编写的演示数据**，不代表模型判断。使用 `--live` 前，请阅读示例里的密钥、费用与隐私说明。

## 精选资源

下面的列表直接在 Markdown 中维护。网站精选数据从这两份 README 提取，不再单独维护另一份精选清单。[来源与历史快照说明](SOURCE.md)。

<!-- curated:start -->

## 入门

- [官方文档](https://docs.typesafe.ai/) - API 说明、快速入门与使用示例。
- [模型能力局限](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md) - Jev 1.13 的已知限制与使用注意事项。
- [发布介绍](https://typesafe.ai/blog/introducing-system-one-models-and-jev) - TypeSafe 对 Jev 及其适用场景的介绍。
- [在线试用](https://console.typesafe.ai/) - TypeSafe 提供的 API 试用控制台。

## SDK 与接入

- [typesafe-sdk-js](https://github.com/typesafe-ai/typesafe-sdk-js) - 官方 JavaScript 与 TypeScript 客户端。
- [typesafe-sdk-python](https://github.com/typesafe-ai/typesafe-sdk-python) - 官方 Python 客户端。
- [system-one-adapter-python](https://github.com/typesafe-ai/system-one-adapter-python) - 通过相同的决策接口比较 Jev 与语言模型。
- [TypeSafe skills](https://github.com/typesafe-ai/skills) - 帮助编程智能体使用 Jev 的官方说明。
- [Vercel AI Gateway](https://vercel.com/ai-gateway/models/jev) - 网关模型页面，当前接入方式与价格以服务商说明为准。
- [Cloudflare Workers AI](https://developers.cloudflare.com/ai/models/typesafe/jev/) - Cloudflare 的模型接入文档。
- [vercel/eve](https://github.com/vercel/eve) - 包含 Jev 评估功能的智能体框架，Jev 只是其中一部分。
- [vercel-labs/ai-cli](https://github.com/vercel-labs/ai-cli) - 包含 Jev 评估功能的命令行工具。

## 智能体工具

- [jev-router](https://github.com/gargpratyush/jev-router) - 为 Claude Code 任务选择模型。
- [jev-review — devagrawal09](https://github.com/devagrawal09/jev-review) - 带看板的代码审查流程。
- [jev-review — NiazMorshed2007](https://github.com/NiazMorshed2007/jev-review) - 通过 MCP 插件进行本地代码审查。
- [foreman](https://github.com/thruwire/foreman) - 使用 Jev 检查编程智能体的工作。
- [jev-mcp](https://github.com/jkudish/jev-mcp) - 通过 MCP 工具提供 Jev 检查与查找功能。

## 浏览器自动化

- [jev-ultrafast](https://github.com/browser-use/jev-ultrafast) - 由 Jev 选择浏览器操作与 DOM 元素，由语言模型生成要输入的文字。
- [typesafe-computer-use](https://github.com/awlevin/typesafe-computer-use) - 利用 OCR 识别的文字帮助 Jev 选择电脑操作。

## 应用与游戏

- [notra](https://github.com/usenotra/notra) - 包含基于 Jev 的功能开关路由。
- [jev-trader](https://github.com/jarrodwatts/jev-trader) - 在每个 Monad 区块请求一次判断的交易实验，收录不代表其能够盈利。
- [typesafe-mario](https://github.com/fhshaik/typesafe-mario) - 使用模拟器结构化状态的游戏智能体。
- [jev-drone](https://github.com/RomanSlack/jev-drone) - 在 MuJoCo 中使用 Jev 的无人机模拟实验。

## 评测与开源实现

- [jev-rerank-bench](https://github.com/anessbelbati/jev-rerank-bench) - 重排序评测，使用其结论前需查看数据集与测试方法。
- [jev-phishing-bench](https://github.com/anisselbd/jev-phishing-bench) - 钓鱼内容分类对比，包含 Jev 表现不及对照模型的结果。
- [Janus](https://github.com/FirasSX914/Janus) - 在自己的数据上测量置信度阈值，再据此在大小模型之间路由。
- [jevlike](https://github.com/vinnylarouge/jevlike) - 开源选项评分实现，不是 TypeSafe 的模型权重。
- [OpenJev / SemIf](https://github.com/TheoLeeCJ/SemIf) - 受 Jev 启发的独立实现，不是官方模型。
- [TypeSafe 工作流评测](https://evals.typesafe.ai/) - 厂商发布的评测，需查看参考答案与对照方法。

## 文章与中文资源

- [Every / Mike Taylor](https://every.to/also-true-for-humans/mini-vibe-check-typesafe-s-jev-judged-everything-i-ve-written-in-0-7-seconds) - 小样本使用评测，不能作为通用准确率保证。
- [OrcaRouter 中文介绍](https://www.orcarouter.ai/zh-CN/blog/jev-typesafe-system-one-what-we-know) - 介绍产品与已有公开材料。
- [宝玉的中文解读](https://x.com/dotey/status/2100109937237987823) - 解释 Jev 的用途，属于第三方解读，不是独立评测。
- [jev-report](https://github.com/HackSing/jev-report) - 中文报告与复现材料；2026-09-19 已确认仓库存在，本清单未复现其中结果。

<!-- curated:end -->

## 更多资料

[按资源类别查找](SUMMARY.md) · [使用方法](SUMMARY.md#使用方法) · [能力局限](taxonomy/critique-limits.md) · [社区动态](updates/README.md) · [历史研究笔记](research/00-overview.md)。

## 参与贡献

欢迎补充项目、更正描述和提交失败案例，请先阅读[贡献说明](CONTRIBUTING.md)。自动检索的结果只进入候选池，不会自动获得推荐。[CC0 许可](LICENSE)。

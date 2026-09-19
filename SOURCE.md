# 资料来源

Awesome Jev 是社区维护的资源清单。README 提供入门与精选项目，分类文档补充资料；推荐不代表项目已经通过测试。本次入门、示例和网站修改由 AI 辅助完成，仍需维护者审阅，不宣称已满足其他 Awesome 目录的收录政策。

## 当前精选与网站

`README.md` 与 `README_zh.md` 是中英文精选的编辑来源。`scripts/sync_catalog.py` 从明确标记的区段提取条目，生成 `docs/data/curated.json`；`--check` 检查生成内容是否过期。网站只读取这个生成文件，按 README 阅读顺序显示，不按星数排名。

这个同步范围仅限**首页精选**，不意味着 `catalog/`、历史研究或旧网页快照都已逐条重新核实。API 说明于 2026-09-19 对照官方文档；示例只进行了离线测试，没有进行真实 API 调用或逐项项目评测。

## 主要来源与归因

优先引用官方文档、GitHub 仓库、作者文章和原始评测。其他目录用于发现资料，条目说明应指向原项目。

- [TypeSafe 文档](https://docs.typesafe.ai/)与[发布文章](https://typesafe.ai/blog/introducing-system-one-models-and-jev)提供产品说明。
- [awesomejev.com](https://awesomejev.com/)、[hellogumbo/awesome-jev](https://github.com/hellogumbo/awesome-jev)、[AbdelStark/awesome-typesafe](https://github.com/AbdelStark/awesome-typesafe)、[yibie/awesome-jev](https://github.com/yibie/awesome-jev)和[AnotiaWang/awesome-jev](https://github.com/AnotiaWang/awesome-jev)曾用于发现项目。
- [research/](research/00-overview.md)保留 2026-09-17 至 2026-09-19 的早期调研记录，不是当前 API 文档，也不表示本仓库独立复现了其中结果。

整理日期不等于逐项测试日期。API、价格、开放范围和项目维护状态可能变化，使用时检查原始来源。历史星数保留原日期与来源，不作为当前排名。

## 历史资料没有删除

[完整收集记录](catalog/FULL.md)以及 `catalog/entries.json` 保留，来源见[目录说明](catalog/SOURCE.md)。旧版 `docs/data/entries.json`、旧雷达页面和报告也保留，但不再作为当前首页精选的数据源。

旧网页来源说明声称数据来自 GitHub 采集和当时的 Must-30 表，但引用的 `/workspace/uploads/discovered_repos.json`、采集和生成脚本没有随仓库提交。不能仅凭这份历史快照重做原始采集，也不能宣称每条已独立核实。原始来源说明完整保存在 [docs/archive/SOURCE-v2.md](docs/archive/SOURCE-v2.md)，其中的旧名称、路径和主张是历史记录，不是当前事实保证。

新增候选的检索与 Agent 复核流程见 [research/DISCOVERY.md](research/DISCOVERY.md)。它不会把元数据发现自动升级为已验证项目。

## 名称与上线状态

仓库名为 `awesome-jev`，标题为 **Awesome Jev**，与 TypeSafe 无隶属关系。名字不表示已被 [sindresorhus/awesome](https://github.com/sindresorhus/awesome) 收录。网站源码存在不表示 GitHub Pages 已启用；预览与发布说明见 [.github/PAGES.md](.github/PAGES.md)。

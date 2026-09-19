# Contributing to Awesome Jev

欢迎补充有明确用途的 Jev 项目、教程和评测，也欢迎纠正错误信息。

## 收录要求

- 提供公开可访问的链接，说明解决什么问题，以及 Jev 在其中做什么。
- 优先引用源码、官方文档、作者文章或原始测试结果；代码证据尽量固定到 commit。
- 性能、费用与准确率数字必须附测试条件和来源。没有亲自复现就写明“作者报告”或“厂商公布”。
- 演示与实验不称为生产可用。已失效、归档或停止维护的项目不放在首页精选；历史记录可以保留并说明状态。

不按星数、浏览量或固定名额收录。来源、内容类型和验证程度分别说明，不设置含混的“可信”等级。一次演示只说明那次运行；接口兼容不等于使用官方模型或具有同等效果。

## 修改哪里

| 内容 | 编辑位置 |
| --- | --- |
| 首页精选 | 同时编辑 `README.md` 和 `README_zh.md`，保持链接、顺序、分类含义一致 |
| 网站精选 | 不手改 JSON；运行 `python3 scripts/sync_catalog.py`，提交生成的 `docs/data/curated.json` |
| 新手说明与完整示例 | `guides/`、`examples/` |
| 完整收集记录 | `catalog/`，按该目录 README 与来源说明处理历史数据 |
| 分类和实践 | `taxonomy/`、`patterns/`，索引见 `SUMMARY.md` |
| 新发现但未核实的资源 | 按 `research/DISCOVERY.md` 保留候选与证据；不自动推荐 |
| 有日期的动态 | `updates/`，注明时间并更新索引 |
| 来源与整理方式 | `SOURCE.md` |

精选条目写在两个 README 的 `curated:start` / `curated:end` 注释之间，格式为 `- [名称](https://原始链接) - 用途说明`，使用二级标题分类。同步脚本检查重复链接、中英文链接顺序及分类对应。README 本身不由脚本生成，保持可直接阅读和编辑。

一个项目在最相关分类中写完整介绍。首页精选不等于收集总量；精简首页时保留历史目录记录。失效链接标注状态或更新地址，不静默删除来源记录。

## 提交前检查

打开新增外链，核对用途说明与原始证据。没有验证过的外链或性能结果，不写“已验证”。完成适用的检查：

```bash
python3 scripts/sync_catalog.py --check
python3 -m unittest discover -s examples -v
python3 -m unittest discover -s scripts -v
node --check docs/js/app.js
git diff --check
```

同步脚本和 Python 测试只依赖标准库，不需要安装测试框架。Node 仅用于可选的 JavaScript 语法检查，浏览网站不需要 Node。普通资料贡献不需要调用模型或付费 API。不要为了文档修改引入第三方构建系统。

网站修改请运行 `python3 -m http.server 8000 --directory docs`，在桌面和手机宽度检查搜索、分类、语言切换、空结果、加载失败与键盘操作。历史 `docs/data/entries.json` 不再作为当前精选来源，不要手工把旧标签迁入新数据。

## AI 辅助与验证边界

欢迎 AI 帮助发现与整理资料，但提交者必须核对来源并披露未验证事项。Agent 输出先进入候选池；不得给虚构运行记录、自动通过的准确率或虚假人工审阅盖章。本次入门与网站重构包含 AI 辅助修改，仍需维护者审阅。

## English summary

Provide a public primary source, a concrete use case, and Jev’s role. Attribute claims, distinguish commentary from experiments, and disclose untested results. Keep the bilingual README selections aligned and run `python3 scripts/sync_catalog.py` after editing them. The website uses that derived file; historical collections remain separate. Offline tests do not certify model quality. AI-assisted discovery produces candidates for review, not automatic endorsements.

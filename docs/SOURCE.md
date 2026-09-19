# Website sources / 网站来源

**Awesome Jev** 的当前网站使用 `data/curated.json`。该文件由 `scripts/sync_catalog.py` 从两份首页 README 提取。编辑 README 后同步并提交生成数据；运行 `--check` 可发现漂移。首页不再读取旧 `data/entries.json`，不展示 Must-30 或“可信”等级，不按星数默认排序。

当前网站简介来自 TypeSafe 官方[介绍](https://docs.typesafe.ai/introduction)、[基础问题](https://docs.typesafe.ai/primitives)与[置信度说明](https://docs.typesafe.ai/confidence)，核对日期为 2026-09-19。示例说明的是程序流程；没有声称进行过真实 API 评测。

历史 `data/entries.json`、`radar.html`、`radar/2026-W38.md` 与旧 CSS 保留以便追溯。它们不是当前精选来源，也不自动同步。原始 v2 来源说明存于 [archive/SOURCE-v2.md](archive/SOURCE-v2.md)，保留原作者当时的说法；不可把历史采集或验证主张当成这次重新验证的结果。

原始采集文件和生成脚本曾缺失，详见[仓库来源说明](https://github.com/majiayu000/awesome-jev/blob/main/SOURCE.md)。其他 Awesome 目录的发现贡献与来源归因继续保留。

## Local preview

Run from the repository root:

```bash
python3 scripts/sync_catalog.py --check
python3 -m http.server 8000 --directory docs
```

Open `http://localhost:8000`. No framework, package installation, analytics, external fonts, or build step is required to view the website. JavaScript fetches only the local generated catalog. Without JavaScript, the onboarding content and README links remain available.

GitHub Pages publication is a separate repository setting; source files and a PR do not establish a live deployment.

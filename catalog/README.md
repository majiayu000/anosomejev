# catalog/ — 全量百科镜像

本目录是 [awesomejev.com](https://awesomejev.com/) 的**全量百科镜像**（firehose），收录该站公开页面上的全部条目。

## 这是什么

- **全量百科**：尽量完整地镜像 awesomejev.com 上的项目 / 站点 / 文章列表，便于检索与二次处理。
- **不是精选**：高信号精选请看仓库根目录 README 中的 **Must-30**；中文周报请看 [`radar/`](../radar/README.md)。
- **三层结构**（本仓库产品分层）：
  1. `catalog/` — 全量百科镜像（本目录）
  2. README Must-30 — 人工精选
  3. `radar/` — 中文周雷达

## 来源与声明

- **来源：** [https://awesomejev.com/](https://awesomejev.com/)
- **结构化数据：** [`hellogumbo/awesome-jev` 的 `data/projects.json`](https://github.com/hellogumbo/awesome-jev/blob/main/data/projects.json)（站点数据源）
- **快照日期：** 2026-09-18
- **条目数：** 410
- **与 TypeSafe / awesomejev.com 无关联。** 本镜像仅为方便阅读与检索的公共页面整理；星标等数字以快照为准，下次刷新前可能过时。

## 本目录文件

| 文件 | 说明 |
| --- | --- |
| [`entries.json`](entries.json) | 全量机器可读数组 |
| [`FULL.md`](FULL.md) | 按源站分区的人类可读全文 |
| [`SOURCE.md`](SOURCE.md) | 镜像方法、快照日期、免责声明 |

## 刷新

重新拉取 awesomejev.com / `data/projects.json` 后覆盖本目录即可。刷新后请更新本 README 与 `SOURCE.md` 中的快照日期。

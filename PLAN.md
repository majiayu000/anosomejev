# anosomejev 完整方案

> 目标读者：你自己（lif / majiayu000）  
> 对照标准：[awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot)  
> 写成日期：2026-09-20 · 不提 Issue，这份文档就是施工图  
> 布局备注：远端已把部分 `radar/` 迁到 `updates/`，并改过 README；下文路径已按 **当前 main** 对齐，你改文案时以仓库实况为准。  
> 你后面改仓、改文案、开 Pages，都以本文为准；可整段删改。

---

## 0. 一句话结论

**做成「Jev 可信地图」GitHub 仓，完成度对齐你自己的 awesome-grok-bot：打开 README 就知道干什么、先点哪 4 个、怎么贡献、为什么信。**  
全量条目是底座，不是卖点；卖点是 **精选 + 红线 + 周雷达 + 可验证标签**。

现在大约 **3～4 / 10**（相对 grok-bot）。按下面做完 Phase A+B，应到 **7～8 / 10**；持续四周雷达后才到「像成品」。

---

## 1. 现在有什么（盘点）

| 资产 | 路径 / 状态 | 留下？ |
| --- | --- | --- |
| Must-30 精选 | `README_zh.md` / `README.md` | **留下，当门面核心** |
| 信任标签定义 | `TRUST_LABELS.md` | 留下，并落到条目上 |
| 中文雷达 W38 | `updates/2026-W38.md`（原 radar/，现仓为 updates/） | 留下；每周续写 |
| 可信地图静态站 | `docs/`（~584 条自采） | 留下；开 Pages |
| 自采数据 | `docs/data/entries.json` | 留下；可定时刷新 |
| 研究底稿 | `research/` | 留下，README 链过去即可，不主推 |
| 旧百科镜像 | `catalog/` | **降级 / 可删**；勿当主叙事 |
| 周五例行 | `anosomejev-jev` | 留下；写完要推仓 |

**硬限制（已定）：** 不做「去掉来源、把别人目录当原创」。自采 GitHub + 诚实 `SOURCE.md`。

---

## 2. 产品定义（对外怎么说）

### 2.1 定位

> **anosomejev = Jev / System One 的可信地图**  
> 帮你在爆炸生态里快速找到：该用什么、别信什么、本周什么重要。

不是：第二个 awesomejev.com。  
是：编辑部视角的 Awesome 仓 + 可搜目录 + 周报。

### 2.2 三层（对外只讲这三层）

1. **Try first（必试 4～6 个）** — 打开就能动手  
2. **Must-30** — 高信号地图  
3. **目录 + 雷达** — `docs/` 全量可搜；`updates/` 每周叙事  

### 2.3 成功标准（对齐 grok-bot）

陌生人打开 GitHub 后，**一分钟内**能做到：

1. 说出这仓是干嘛的  
2. 点开「先试这几个」里至少一个链接并跑通  
3. 知道类型安全 ≠ 判断正确（红线）  
4. 知道本周看哪篇雷达  

达不到这四条 = 门面没做完。

---

## 3. 对照：我们缺什么（相对 awesome-grok-bot）

| grok-bot 有的 | anosomejev 现状 | 动作 |
| --- | --- | --- |
| Awesome badge + PRs + stars + last-commit | 几乎没有 | Phase A 加 |
| How to use → Try first → TOC | 有三层表，但入口弱 | 重写 README 头 |
| Field cases / Gotchas | 只有 critique 段 | 加「踩坑 / 实测」短节 |
| `catalog.json` + 可达性说明 | 有 `entries.json`，README 没讲清 | 门面写清 + 可选校验脚本 |
| topics / homepage / 准确 description | 旧 description、无 topics、Pages 关 | Phase A 改元数据 |
| 中英对称、维护节奏可见 | 有双语，雷达例行未跑出声 | 四周内连续发雷达 |

---

## 4. 施工分期

### Phase A — 门面（你改文案时优先；预计 0.5～1 天）

**只动 GitHub 观感，不扩条目。**

1. **改仓库元数据**（网页 Settings 或 `gh`）  
   - Description：`Jev 可信地图 — Must-30 · 信任标签 · 中文周雷达 · 自采目录。Not affiliated with TypeSafe.`  
   - Homepage：开 Pages 后填 `https://majiayu000.github.io/anosomejev/`  
   - Topics：`awesome` `jev` `typesafe` `system-one` `awesome-list` `decision-models` `agent-tooling` `chinese`

2. **README 头重写（中英同步）** — 顺序强制：  
   - 标题 + badge 行  
   - 一句话定位 + 红线引用块  
   - 链接行：中英 · Trust Map · 本周雷达 · TRUST_LABELS · SOURCE · LICENSE  
   - **How to use**（3 步：读红线 → Try first → 需要全量再开 docs）  
   - **Try first**（固定 4～6 个，见 §5）  
   - Contents TOC  
   - Must-30 / 批判 / 中文资源 / 目录入口 / 雷达 / 贡献  

3. **启用 GitHub Pages**  
   - Settings → Pages → `main` → `/docs`  
   - 验收：首页能搜、能显示 584 条量级  

4. **`catalog/`**  
   - 保持「历史对照」说明，或直接删除以免误导；主入口只留 `docs/`

5. **CONTRIBUTING**  
   - 怎么提新项目（repo URL + 一句 why + 建议信任标签）  
   - 明确：不接受「无证据吹零幻觉」的 PR 文案

### Phase B — 可信度（1～2 天）

1. **Try first 清单定稿**（§5），每条带「30 秒能验证什么」  
2. **Gotchas 短节**（从现有 critique / jaggedness / HN 抽 6～10 条）  
3. **信任标签落到 Must-30 每一行**（表格加一列 Tag）  
4. **目录刷新脚本**（可选）  
   - 输入：GitHub Search  
   - 输出：覆盖 `docs/data/entries.json`  
   - README 写「上次刷新：YYYY-MM-DD」  
5. **雷达模板锁死**（与现有 `updates/README.md` 对齐）：一句本周 → 必看 5 → 争议 → 接入面 → 下周盯

### Phase C — 节奏（持续）

1. **每周五**例行产出 `updates/YYYY-Www.md`，推 `main`，改 README「本周」链接  
2. **不**自动发 X；要分发时人工改写成 @agentreleases / 小红书短钩  
3. 四周后回顾：是否有人 star / issue；没有则加强 Try first 与中文传播，而不是加条目

---

## 5. Try first（建议默认名单）

可改，但数量锁在 **4～6**，且必须「能动手」：

| # | 项目 | 30 秒验证 |
| --- | --- | --- |
| 1 | [发布博文](https://typesafe.ai/blog/introducing-system-one-models-and-jev) | 搞清 Choice/Score/Noul |
| 2 | [Jaggedness jev-1.13](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md) | 知道官方承认的失败模式 |
| 3 | [typesafe-sdk-js 或 python](https://github.com/typesafe-ai/typesafe-sdk-js) | 跑通一次 `systemOne` |
| 4 | [browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) | 理解「决策层 + 小生成」 |
| 5 | [宝玉长帖](https://x.com/dotey/status/2100109937237987823) | 中文心智模型 |
| 6 | [本周更新](updates/2026-W38.md) | 知道编辑部立场 |

---

## 6. 不做清单（防范围膨胀）

- 不和无署名 awesomejev 镜像拼条目数  
- 不单独开 Jev 产品 X 号（沿用 @agentreleases 策略）  
- 不把 `research/` 做成第二个百科首页  
- 不先做复杂框架站；Pages 静态站足够  
- 不宣称「零幻觉 = 判断总对」

---

## 7. 验收清单（你改完自测）

- [ ] 手机打开 README，不用滚太远就能看到 Try first  
- [ ] badge 行正常；description / topics 已更新  
- [ ] Pages 200；搜索「browser」有结果  
- [ ] 红线在首页可见  
- [ ] Must-30 每行有信任标签或能点到图例  
- [ ] 「本周雷达」链到最新一期  
- [ ] SOURCE 仍诚实说明自采，不装成独家发明全宇宙  
- [ ] 你主观：和 awesome-grok-bot 并排，不至于不好意思转给别人

---

## 8. 建议你动手的顺序（最短路径）

1. 开 Pages（`main` / `/docs`）  
2. 改 description + topics + homepage  
3. 按 §4 Phase A 重写 README 头 + Try first  
4. 补 Gotchas 一小节  
5. 下一期雷达按模板写，推仓  

条目刷新可以放最后；**门面 > 数据量**。

---

## 9. 附录：关键链接

- 仓：https://github.com/majiayu000/anosomejev  
- 对照：https://github.com/majiayu000/awesome-grok-bot  
- 本地预览：`cd docs && python3 -m http.server 8765`  
- Pages（启用后）：https://majiayu000.github.io/anosomejev/  
- 例行：周五 10:00 上海 · `anosomejev-jev`


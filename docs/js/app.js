(() => {
  const TAG_LABELS = {
    "vendor-official": "厂商官方",
    "vendor-claim": "厂商主张",
    "independent-eval": "独立评测",
    "replica": "开源复刻",
    "structured-demo": "结构化演示",
    "star-inflation-host": "星标膨胀宿主",
    "needs-verify": "待核实",
    "chinese": "中文",
    "radar-pick": "雷达精选",
  };

  const LEGEND = [
    ["vendor-official", "TypeSafe 官方文档 / SDK / 组织仓库"],
    ["vendor-claim", "来自厂商营销或官方 evals 的速度/成本/准确率主张"],
    ["independent-eval", "方法或结果在 TypeSafe 工作流评测之外"],
    ["replica", "开源接口/训练实验，非 TypeSafe 权重"],
    ["structured-demo", "游戏 / CU / 模拟：喂结构化状态（非像素端到端）"],
    ["star-inflation-host", "大宿主仓，Jev 只是功能之一——勿用裸 ★ 排名"],
    ["needs-verify", "他处列出但本轮未独立确认"],
    ["chinese", "中文为主内容或中文作者长文"],
    ["radar-pick", "本周 / 近期雷达高信号条目"],
  ];

  const $ = (sel) => document.querySelector(sel);
  const state = { entries: [], filtered: [] };

  function fmtStars(n) {
    if (n == null || n === "") return "—";
    return "★" + Number(n).toLocaleString("en-US");
  }

  function fmtDate(iso) {
    if (!iso) return "";
    try {
      const d = new Date(iso);
      if (Number.isNaN(d.getTime())) return iso.slice(0, 10);
      return d.toISOString().slice(0, 10);
    } catch {
      return String(iso).slice(0, 10);
    }
  }

  function renderLegend() {
    const el = $("#legend");
    if (!el) return;
    el.innerHTML =
      "<h2>信任标签图例</h2>" +
      LEGEND.map(
        ([k, v]) =>
          `<div class="item"><code>${k}</code> · ${TAG_LABELS[k] || k} — ${v}</div>`
      ).join("");
  }

  function fillCategories(entries) {
    const sel = $("#category");
    const cats = [...new Set(entries.map((e) => e.category).filter(Boolean))].sort(
      (a, b) => a.localeCompare(b)
    );
    for (const c of cats) {
      const o = document.createElement("option");
      o.value = c;
      o.textContent = c;
      sel.appendChild(o);
    }
  }

  function fillTags() {
    const sel = $("#trust");
    for (const [k, zh] of Object.entries(TAG_LABELS)) {
      const o = document.createElement("option");
      o.value = k;
      o.textContent = `${zh} (${k})`;
      sel.appendChild(o);
    }
  }

  function applyFilters() {
    const q = ($("#q").value || "").trim().toLowerCase();
    const cat = $("#category").value;
    const trust = $("#trust").value;
    const sort = $("#sort").value;
    const mustOnly = $("#must30").checked;

    let list = state.entries.slice();
    if (mustOnly) list = list.filter((e) => e.must30 != null);
    if (cat) list = list.filter((e) => e.category === cat);
    if (trust) list = list.filter((e) => (e.trust_tags || []).includes(trust));
    if (q) {
      list = list.filter((e) => {
        const blob = [
          e.name,
          e.description,
          e.why_signal,
          e.lang,
          e.category,
          ...(e.trust_tags || []),
          e.repo_url,
          e.site_url,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return blob.includes(q);
      });
    }

    list.sort((a, b) => {
      if (sort === "must30") {
        const am = a.must30 != null ? a.must30 : 999;
        const bm = b.must30 != null ? b.must30 : 999;
        if (am !== bm) return am - bm;
        return (b.stars || 0) - (a.stars || 0);
      }
      if (sort === "updated") {
        const au = a.updated_at || a.snapshot_date || "";
        const bu = b.updated_at || b.snapshot_date || "";
        return bu.localeCompare(au);
      }
      // stars default
      return (b.stars || -1) - (a.stars || -1);
    });

    state.filtered = list;
    render();
  }

  function render() {
    const grid = $("#grid");
    const count = $("#count");
    count.textContent = `显示 ${state.filtered.length} / ${state.entries.length} 条`;
    if (!state.filtered.length) {
      grid.innerHTML = `<div class="empty">没有匹配条目。试试清空筛选。</div>`;
      return;
    }
    grid.innerHTML = state.filtered
      .map((e) => {
        const tags = (e.trust_tags || [])
          .map((t) => `<span class="tag ${t}" title="${TAG_LABELS[t] || t}">${t}</span>`)
          .join("");
        const must =
          e.must30 != null ? `<span class="must-badge">Must-${e.must30}</span>` : "";
        const links = [];
        if (e.repo_url)
          links.push(`<a href="${e.repo_url}" target="_blank" rel="noopener">仓库</a>`);
        if (e.site_url)
          links.push(`<a href="${e.site_url}" target="_blank" rel="noopener">站点</a>`);
        const updated = e.updated_at
          ? ` · 更新 ${fmtDate(e.updated_at)}`
          : e.snapshot_date
            ? ` · 快照 ${e.snapshot_date}`
            : "";
        const lang = e.lang ? ` · ${e.lang}` : "";
        const prov = e.provenance ? ` · ${e.provenance}` : "";
        return `<article class="card">
          <div class="card-top">
            <h3>${must} <a href="${e.repo_url || e.site_url || "#"}" target="_blank" rel="noopener">${escapeHtml(e.full_name || e.name || "Untitled")}</a></h3>
            <div class="stats">${fmtStars(e.stars)}${lang}${updated}</div>
          </div>
          <p class="desc">${escapeHtml(e.description || "")}</p>
          <p class="signal"><strong>信号：</strong>${escapeHtml(e.why_signal || "—")}</p>
          <div class="tags">${tags || `<span class="tag">untagged</span>`}</div>
          <div class="links">${links.join("")}<span class="stats">${escapeHtml(e.category || "")}${prov}</span></div>
        </article>`;
      })
      .join("");
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  async function boot() {
    renderLegend();
    fillTags();
    const status = $("#status");
    try {
      const res = await fetch("data/entries.json");
      if (!res.ok) throw new Error("HTTP " + res.status);
      state.entries = await res.json();
      fillCategories(state.entries);
      status.textContent = `已加载 ${state.entries.length} 条 · 快照 ${state.entries[0]?.snapshot_date || "—"}`;
      ["q", "category", "trust", "sort", "must30"].forEach((id) => {
        const el = $("#" + id);
        el.addEventListener(id === "q" ? "input" : "change", applyFilters);
      });
      applyFilters();
    } catch (err) {
      status.textContent = "加载失败：" + err.message + "（请用本地服务器打开，或确认 data/entries.json 存在）";
      console.error(err);
    }
  }

  document.addEventListener("DOMContentLoaded", boot);
})();

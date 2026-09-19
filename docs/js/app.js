/* Derived selections only. Historical data/entries.json is deliberately not loaded. */
(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  let entries = [];

  function safeUrl(raw) {
    try {
      const url = new URL(raw);
      return url.protocol === "https:" && !url.username && !url.password ? url.href : null;
    } catch { return null; }
  }

  function validate(data) {
    if (data?.schema_version !== 1 || !Array.isArray(data.entries) || !data.entries.length) {
      throw new Error("目录结构不正确");
    }
    const seen = new Set();
    for (const entry of data.entries) {
      if (!entry || !safeUrl(entry.url) || seen.has(entry.url)) throw new Error("资源链接无效或重复");
      seen.add(entry.url);
      for (const lang of ["en", "zh"]) {
        for (const field of ["name", "description", "category"]) {
          if (typeof entry[lang]?.[field] !== "string" || !entry[lang][field].trim()) {
            throw new Error("双语资源字段缺失");
          }
        }
      }
    }
    return data.entries;
  }

  function fillCategories() {
    const previous = $("category").value;
    const language = $("language").value;
    $("category").replaceChildren(new Option("全部分类", ""));
    const seen = new Set();
    for (const entry of entries) {
      const key = entry.en.category;
      if (!seen.has(key)) $("category").add(new Option(entry[language].category, key));
      seen.add(key);
    }
    $("category").value = seen.has(previous) ? previous : "";
  }

  function render() {
    const language = $("language").value;
    const query = $("q").value.trim().toLocaleLowerCase();
    const category = $("category").value;
    let filtered = entries.filter((entry) => {
      const text = [entry.url, ...Object.values(entry.en), ...Object.values(entry.zh)].join(" ").toLocaleLowerCase();
      return (!category || entry.en.category === category) && (!query || text.includes(query));
    });
    if ($("sort").value === "name") {
      filtered.sort((a, b) => a[language].name.localeCompare(b[language].name, language));
    }
    const fragment = document.createDocumentFragment();
    for (const entry of filtered) {
      const resource = entry[language];
      const card = document.createElement("article");
      card.className = "card";
      card.lang = language === "zh" ? "zh-CN" : "en";
      const tag = document.createElement("div");
      tag.className = "category";
      tag.textContent = resource.category;
      const heading = document.createElement("h3");
      const link = document.createElement("a");
      link.href = safeUrl(entry.url);
      link.textContent = resource.name;
      heading.append(link);
      const description = document.createElement("p");
      description.textContent = resource.description;
      card.append(tag, heading, description);
      fragment.append(card);
    }
    $("grid").replaceChildren(fragment);
    $("status").textContent = filtered.length
      ? `显示 ${filtered.length} / ${entries.length} 条精选 · 与 README 同源`
      : "没有匹配结果。请更换关键词或重置筛选。";
  }

  async function boot() {
    try {
      const response = await fetch("data/curated.json");
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      entries = validate(await response.json());
      fillCategories();
      $("q").addEventListener("input", render);
      for (const id of ["category", "sort"]) $(id).addEventListener("change", render);
      $("language").addEventListener("change", () => { fillCategories(); render(); });
      $("reset").addEventListener("click", () => {
        $("q").value = "";
        $("category").value = "";
        $("sort").value = "editorial";
        render();
      });
      render();
    } catch {
      $("status").textContent = "精选目录加载失败。可先阅读 GitHub README；本地预览请在仓库根目录运行 python3 -m http.server 8000 --directory docs。";
    }
  }
  boot();
})();

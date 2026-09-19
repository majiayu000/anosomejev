"""Bounded, read-only GitHub candidate discovery. This is NOT an LLM agent runner."""
from __future__ import annotations
import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
import json
import os
from pathlib import Path
import re
from urllib import error, parse, request

ROOT = Path(__file__).resolve().parents[1]
QUERIES = {
    "official": "jev org:typesafe-ai",
    "integrations": "jev typesafe in:readme",
    "evaluations": "jev benchmark in:readme",
    "implementations": "jev systemone in:readme",
}
REPOSITORY = re.compile(r"^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+$")
GITHUB_LINK = re.compile(r"https://github\.com/([A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+)")


class NoRedirect(request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


def search(query: str, token: str, per_page: int) -> dict:
    params = parse.urlencode({"q": query + " is:public archived:false fork:false", "per_page": per_page, "page": 1})
    headers = {"Accept": "application/vnd.github+json", "User-Agent": "awesome-jev-discovery",
               "X-GitHub-Api-Version": "2026-03-10"}
    if token:
        headers["Authorization"] = "Bearer " + token
    req = request.Request("https://api.github.com/search/repositories?" + params, headers=headers)
    with request.build_opener(NoRedirect()).open(req, timeout=20) as response:
        raw = response.read(8_000_001)
    if len(raw) > 8_000_000:
        raise ValueError("Search response too large")
    data = json.loads(raw)
    if not isinstance(data, dict) or not isinstance(data.get("items"), list):
        raise ValueError("Invalid search response")
    return data


def known_repositories(paths: list[Path]) -> set[str]:
    known = set()
    for path in paths:
        if path.exists():
            known.update(match.rstrip(".").removesuffix(".git").lower()
                         for match in GITHUB_LINK.findall(path.read_text(encoding="utf-8")))
    return known


def collect(token: str, per_page: int, workers: int, known: set[str]) -> dict:
    candidates, runs = {}, []
    failed = False
    with ThreadPoolExecutor(max_workers=workers) as pool:
        futures = {pool.submit(search, query, token, per_page): (lane, query) for lane, query in QUERIES.items()}
        for future in as_completed(futures):
            lane, query = futures[future]
            try:
                result = future.result()
                incomplete = bool(result.get("incomplete_results", False))
                failed = failed or incomplete
                runs.append({"lane": lane, "query": query, "page": 1,
                             "total_count": result.get("total_count"), "incomplete_results": incomplete,
                             "status": "incomplete" if incomplete else "sample_only"})
                for item in result["items"]:
                    if not isinstance(item, dict):
                        raise ValueError("Invalid search item")
                    name = item.get("full_name", "")
                    if not isinstance(name, str) or not REPOSITORY.fullmatch(name):
                        continue
                    # Never write private/archived/fork results even if query filters change.
                    if item.get("private") is not False or item.get("archived") or item.get("fork"):
                        continue
                    key = name.lower()
                    if key in known:
                        continue
                    row = candidates.setdefault(key, {
                        "repository": name, "url": "https://github.com/" + name,
                        "description": item.get("description"), "lanes": [],
                        "verification": "metadata_only_not_reviewed", "evidence": [], "run_result": "not_run",
                    })
                    if lane not in row["lanes"]:
                        row["lanes"].append(lane)
            except (error.HTTPError, error.URLError, TimeoutError, OSError, ValueError) as exc:
                failed = True
                runs.append({"lane": lane, "query": query, "status": "error",
                             "error": f"HTTP {exc.code}" if isinstance(exc, error.HTTPError) else type(exc).__name__})
    for row in candidates.values():
        row["lanes"].sort()
    return {"schema_version": 1, "discovered_at": datetime.now(timezone.utc).isoformat(),
            "status": "partial_failure" if failed else "sample_only",
            "limits": {"queries": len(QUERIES), "pages_per_query": 1, "per_page": per_page},
            "runs": sorted(runs, key=lambda row: row["lane"]),
            "candidates": [candidates[key] for key in sorted(candidates)]}


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--workers", type=int, choices=range(1, 5), default=4)
    parser.add_argument("--per-page", type=int, choices=range(1, 31), default=20)
    parser.add_argument("--output", type=Path, default=ROOT / "research/candidates/latest.json")
    args = parser.parse_args(argv)
    if args.output.exists():
        parser.error("Output already exists; choose a new filename to preserve earlier evidence.")
    token = os.environ.get("GITHUB_TOKEN", "").strip()
    if "\n" in token or "\r" in token:
        parser.error("Invalid GITHUB_TOKEN")
    try:
        known = known_repositories([ROOT / "README.md", ROOT / "catalog/FULL.md"])
        data = collect(token, args.per_page, args.workers, known)
        args.output.parent.mkdir(parents=True, exist_ok=True)
        with args.output.open("x", encoding="utf-8") as output:
            json.dump(data, output, ensure_ascii=False, indent=2)
            output.write("\n")
    except (OSError, ValueError) as exc:
        print(f"Discovery failed: {type(exc).__name__}")
        return 2
    print(f"{len(data['candidates'])} unreviewed candidates; status={data['status']}; output={args.output}")
    return 2 if data["status"] == "partial_failure" else 0


if __name__ == "__main__":
    raise SystemExit(main())

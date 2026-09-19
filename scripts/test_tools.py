"""Offline tests; no GitHub requests or language-model calls."""
import tempfile
from pathlib import Path
import unittest
from unittest.mock import patch
from urllib.error import HTTPError
import discover
import sync_catalog


def readme(name="Project", description="A description."):
    return f"{sync_catalog.START}\n## SDK\n- [{name}](https://github.com/test/project) - {description}\n{sync_catalog.END}\n"


def item(name, **changes):
    return dict(full_name=name, description="Author description", private=False, archived=False, fork=False, **changes)


class CatalogTests(unittest.TestCase):
    def test_bilingual_pair(self):
        result = sync_catalog.build_catalog(readme(), readme("项目", "用途说明。"))
        self.assertEqual(result["entries"][0]["zh"]["name"], "项目")

    def test_missing_or_reversed_markers(self):
        for text in ("", sync_catalog.END + readme() + sync_catalog.START):
            with self.assertRaises(ValueError):
                sync_catalog.parse_readme(text)

    def test_bad_entry_and_empty_block(self):
        for text in (readme().replace("https://", "javascript:"), readme().replace("## SDK", ""),
                     sync_catalog.START + "\n" + sync_catalog.END):
            with self.assertRaises(ValueError):
                sync_catalog.parse_readme(text)

    def test_duplicates_rejected(self):
        text = readme().replace(sync_catalog.END, "- [Again](https://github.com/test/project/) - Duplicate.\n" + sync_catalog.END)
        with self.assertRaises(ValueError):
            sync_catalog.parse_readme(text)

    def test_language_drift_rejected(self):
        with self.assertRaises(ValueError):
            sync_catalog.build_catalog(readme(), readme().replace("test/project", "test/other"))

    def test_deterministic_serialization(self):
        self.assertEqual(sync_catalog.build_catalog(readme(), readme()), sync_catalog.build_catalog(readme(), readme()))


class DiscoveryTests(unittest.TestCase):
    def test_known_repositories_from_readme(self):
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "README.md"
            path.write_text(readme().replace("test/project", "Test/Project"))
            self.assertEqual(discover.known_repositories([path, Path(tmp)/"absent"]), {"test/project"})

    def test_parallel_dedup_and_known_exclusion(self):
        data = {"items": [item("test/project"), item("test/new")], "total_count": 200, "incomplete_results": False}
        with patch.object(discover, "search", return_value=data) as search:
            result = discover.collect("", 20, 4, {"test/project"})
        self.assertEqual(search.call_count, 4)
        self.assertEqual(len(result["candidates"]), 1)
        self.assertEqual(len(result["candidates"][0]["lanes"]), 4)
        self.assertEqual(result["status"], "sample_only")
        self.assertEqual(result["candidates"][0]["run_result"], "not_run")

    def test_private_archived_and_fork_results_excluded(self):
        items = [item("test/okay")]
        for field in ("private", "archived", "fork"):
            candidate = item("test/" + field)
            candidate[field] = True
            items.append(candidate)
        with patch.object(discover, "search", return_value={"items": items}):
            result = discover.collect("", 20, 2, set())
        self.assertEqual([r["repository"] for r in result["candidates"]], ["test/okay"])

    def test_partial_failure_does_not_look_complete(self):
        def fake(query, token, per_page):
            if query == discover.QUERIES["official"]:
                raise HTTPError("https://api.github.com", 429, "secret", {}, None)
            return {"items": [item("test/new")], "incomplete_results": False}
        with patch.object(discover, "search", side_effect=fake):
            result = discover.collect("", 20, 4, set())
        self.assertEqual(result["status"], "partial_failure")
        self.assertEqual(len(result["candidates"]), 1)
        self.assertNotIn("secret", str(result))

    def test_incomplete_api_results_are_flagged(self):
        with patch.object(discover, "search", return_value={"items": [], "incomplete_results": True}):
            self.assertEqual(discover.collect("", 20, 1, set())["status"], "partial_failure")

    def test_malformed_name_is_not_a_link(self):
        with patch.object(discover, "search", return_value={"items": [item("test/name<script>")]}):
            self.assertEqual(discover.collect("", 20, 1, set())["candidates"], [])


if __name__ == "__main__":
    unittest.main()

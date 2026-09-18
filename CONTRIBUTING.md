# Contributing to anosomejev

**anosomejev** (Awesome Jev) is a **curated high-signal** field guide for the TypeSafe System One / Jev ecosystem. It is **not affiliated with TypeSafe** and does **not** compete with [awesomejev.com](https://awesomejev.com/) on quantity. Prefer linking the firehose there; promote entries here only when they teach a decision pattern, carry evidence, or fill a ZH / critique gap.

## Inclusion bar

A PR must include:

1. **Public URL** (repo, docs page, article, or status) that anyone can open.
2. **One typed-decision sentence** — what Choice / Score / Noul (or equivalent System One call) decides, and what code does with the answer.
3. **Trust labels** from [TRUST_LABELS.md](TRUST_LABELS.md) (at least `community` or `official`, plus any eval / replica / caveat labels that apply).
4. **Caveat if private data** — if the demo uses closed datasets or single-run anecdotes, say so (`single-run`, no invented accuracy %).
5. **Stars only with date** — prefer awesomejev.com snapshot `2026-09-17`, or live GitHub with fetch date. Never invent counts.

## Prefer

- Entries with **thresholds, policies, telemetry, or shadow mode**
- **Independent evals** and **negative results**
- **Chinese longform** and bilingual onboarding
- Clear split: TypeSafe Jev vs open **replicas** (interface only)

## Avoid / reject

- Dumping every ★0 toy already on awesomejev.com
- Ranking by stars when the host is `star-inflation-host` (e.g. large frameworks with a Jev evaluate path)
- Equating schema safety with truth (“zero hallucination” misuse)
- Unverified repos without `needs-verify` (e.g. HackSing/jev-report until confirmed)
- Marketing multiples (193.6× / 444.6×) without linking vendor nuance / jaggedness

## Where to add

| Kind | File |
| --- | --- |
| Artifact type | `taxonomy/*.md` |
| Decision pattern | `patterns/*.md` |
| Must-30 change | Propose in PR; update both `README.md` and `README_zh.md` |
| Trust vocabulary | `TRUST_LABELS.md` |

One primary category per entry. Cross-link patterns when useful.

## Style

- Clean markdown; factual one-liners.
- No invented metrics, training details, or unpublished architecture claims.
- EN and ZH READMEs stay in sync on Must-30, critique red line, and section order.

## License

List content is [CC0-1.0](LICENSE). Linked projects keep their own licenses.

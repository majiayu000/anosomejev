# Model limitations and evaluation

A correctly formatted answer can still be wrong. Assess Jev on the task you intend to automate.

## Official limitations

The [Jev 1.13 limitations document](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md) describes version-specific behavior. Consult the documentation for the version you use.

| Concern | Practical approach |
| --- | --- |
| Ambiguous or compound questions | State criteria clearly and separate distinct judgments. |
| Arithmetic and dates | Calculate exact results in code. |
| Long, irrelevant input | Include the information needed for the decision. |
| Conflicting instructions or untrusted input | Separate instructions from input data and test adversarial cases. |
| Text generation | Use a model intended to generate text. |
| Confidence estimates | Check how confidence relates to observed correctness on your own data. |

## Reading evaluations

- Check who conducted the test and whether methods and samples are available.
- Distinguish agreement with reference models from correctness against labeled answers.
- Compare equivalent task settings, and retain failures alongside successes.
- Treat a single demo’s latency and cost as measurements of that run.
- Do not infer the official model’s architecture or quality from an independent compatible implementation.

Sources: [TypeSafe launch article](https://typesafe.ai/blog/introducing-system-one-models-and-jev), [vendor evaluations](https://evals.typesafe.ai/), and [evaluation projects](benchmarks-replicas.md).

## Reports worth reading

- [Phishing classification comparison](https://github.com/anisselbd/jev-phishing-bench) - Includes results where Jev underperforms a comparison model.
- [Pac-Man follow-up](https://x.com/ephraimduncan/status/2100554620254752981) - Author reports being unable to reproduce an earlier win.
- [Every evaluation](https://every.to/also-true-for-humans/mini-vibe-check-typesafe-s-jev-judged-everything-i-ve-written-in-0-7-seconds) - A small-sample experiment, not a general accuracy guarantee.

These are source reports; this repository has not independently reproduced their results. For a deployment decision, use your own labeled examples, set acceptable error rates, and decide how uncertain cases will be handled.

[All categories](../SUMMARY.md) · [Sources](../SOURCE.md)

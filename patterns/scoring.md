# Scoring, ranking, and confidence

Assign scores or order candidates. Confidence describes a model estimate; calibration checks how that estimate compares with observed correctness.

## References

- [Score](https://docs.typesafe.ai/primitives/score.md) - Official scoring documentation.
- [Confidence](https://docs.typesafe.ai/confidence.md) - Official confidence documentation.
- [jev-rerank-bench](https://github.com/anessbelbati/jev-rerank-bench) - A reranking comparison.
- [Janus](https://github.com/FirasSX914/Janus) - Measure confidence thresholds for routing between models.

## Practical steps

1. Define what each score level means.
2. Evaluate against labeled examples and an appropriate baseline.
3. Check actual error rates at candidate confidence thresholds.
4. Keep exact arithmetic in code.

[All guides](../SUMMARY.md#使用方法) · [Model limitations](../taxonomy/critique-limits.md)

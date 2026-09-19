# Routing and classification

Choose a category or destination from a defined set, then let code act on the result.

## References

- [Intent routing](https://docs.typesafe.ai/patterns/intent-routing.md) - Official routing examples.
- [Confidence routing](https://docs.typesafe.ai/patterns/confidence-routing.md) - Official guidance on handling uncertain decisions.
- [jev-router](https://github.com/gargpratyush/jev-router) - Select a model for a coding task.

## Practical steps

1. Define the possible destinations and their criteria.
2. Separate unrelated judgments; one category may not represent a request with several intents.
3. Measure errors on representative examples before selecting a confidence threshold.
4. Provide an explicit path for cases that need review.

[All guides](../SUMMARY.md#使用方法) · [Model limitations](../taxonomy/critique-limits.md)

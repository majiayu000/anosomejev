# Checking agent actions

Use model judgments as one part of checking an action or result. Model confidence is not an authorization policy.

## References

- [Official documentation](https://docs.typesafe.ai/llms.txt) - Find guardrail and citation-check examples.
- [foreman](https://github.com/thruwire/foreman) - Monitor a coding agent’s work.
- [pi-warden](https://github.com/DevMortimer/pi-warden) - Checks for Pi workflows.

## Practical steps

1. Enforce permissions and deterministic constraints in code.
2. Define the decision and evidence the model should inspect.
3. Test both missed problems and unnecessary blocks.
4. Send uncertain or consequential cases to an appropriate review path.

[All guides](../SUMMARY.md#使用方法) · [Model limitations](../taxonomy/critique-limits.md)

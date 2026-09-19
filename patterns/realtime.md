# Interactive applications

Use model decisions within browser, game, or simulation loops. A faster individual decision does not establish end-to-end reliability.

## References

- [jev-ultrafast](https://github.com/browser-use/jev-ultrafast) - Browser actions using DOM observations.
- [typesafe-mario](https://github.com/fhshaik/typesafe-mario) - Decisions from structured game state.
- [jev-drone](https://github.com/RomanSlack/jev-drone) - Drone simulation with Jev.

## Practical steps

1. Describe observations and allowed actions explicitly.
2. Reject invalid actions in code.
3. Measure complete task success across repeated runs.
4. Record observation, decision, and execution latency separately when diagnosing delays.

[All guides](../SUMMARY.md#使用方法) · [Model limitations](../taxonomy/critique-limits.md)

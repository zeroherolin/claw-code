${_}

## Action

1. **Run The user wants you to self-pace. Decide what makes the next iteration worth running — a passage of time, or an observable event.

1. **Run the parsed prompt now.** If it's a slash command, invoke it via the Skill tool; otherwise act on it directly.
2. **If the next run is gated on an event** (CI finishing, a log line matching, a file changing, a PR comment) and no ${Gs} is already running for it: ${…}. Its events arrive as `<task-notification>` messages and wake this loop immediately — you do not wait for the ${el} deadline. ${…}
${r}
5. **If you were woken by a `<task-notification>`** rather than this prompt: handle the event in the context of the loop task, then make the same decision. If the loop should continue, ${…}. If the event means the work is finished, stop (step 6).
6. **To stop the loop** — the task is complete, further iterations can't make progress, or the user asked you to stop — call ${el} with `stop: true` (no other fields) and ${$d} any ${Gs} you armed (use ${qC} to find the task ID if it is no longer in context).${…} Stopping is the loop's normal ending — the user can restart it anytime with /loop.${…} now**, following the instructions inlined below.
2. **If the next tick is gated on an event** (CI finishing, a PR comment, a log line) and no ${Gs} is already running for it: ${…}. Its events wake this loop immediately — you do not wait for the ${el} deadline. ${…}
${N}
5. **If woken by a `<task-notification>`** rather than this prompt: handle the event, then make the same decision. If the loop should continue, ${…}. If the event means the work is finished, stop (step 6).
6. **To stop the loop** — the task is complete, further iterations can't make progress, or the user asked you to stop — call ${el} with `stop: true` (no other fields) and ${$d} any ${Gs} you armed (use ${qC} to find the task ID if it is no longer in context).${…} Stopping is the loop's normal ending — the user can restart it anytime with /loop.${…}

${r}

${n}
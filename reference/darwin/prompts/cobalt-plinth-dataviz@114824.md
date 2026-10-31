# Debug Skill

Help the user debug an issue they're encountering in this current Claude Code session.
${…}
## Session Debug Log

The debug log for the current session is at: `${r}`



For additional context, grep for [ERROR] and [WARN] lines across the full file.

waiting_install

## Issue Description

${…}

## Settings

Remember that settings are in:
* user - ${…}
* project - ${…}
* local - ${…}

## Instructions

1. Review the user's issue description
2. The last ${ve} lines show the debug file format. Look for [ERROR] and [WARN] entries, stack traces, and failure patterns across the file
3. Consider launching the ${SCo} subagent to understand the relevant Claude Code features
4. Explain what you found in plain language
5. Suggest concrete fixes or next steps

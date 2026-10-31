
stopped

${dJn}

# Harness
 - Text you output outside of tool use is displayed to the user as Github-flavored markdown in a terminal.
 - Tools run behind a user-selected permission mode; a denied call means the user declined it — adjust, don't retry verbatim.
 - ${…} Hooks may intercept tool calls; treat hook output as user feedback.Define hooks in the plugin's own hooks/hooks.json (or its plugin.json), or inline them here as an object mapping hook event names to matcher arrays.
 - Prefer the dedicated file/search tools over shell commands when one fits. Independent tool calls can run in parallel in one response.
 - Reference code as `file_path:line_number` — it's clickable.
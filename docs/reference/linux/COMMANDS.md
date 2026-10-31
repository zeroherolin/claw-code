# 斜杠命令（linux）

`local`：本地执行并返回文本；`local-jsx`：渲染 Ink 组件；`prompt`：展开为发给模型的提示词。同名的多条通常对应交互与非交互两种实现。

| 命令 | 类型 | 说明 | 定义位置 |
|---|---|---|---|
| `/__remote-workflow` | local | Run the workflow script delivered in this session environment (server-launched sessions only) | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/add-dir` | local | Add a new working directory | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/add-dir` | local-jsx | Add a new working directory | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/advisor` | local-jsx | Let Claude consult a stronger model at key moments | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/advisor` | local | Let Claude consult a stronger model at key moments | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/agents` | local | (removed) Ask Claude to create/manage subagents, or edit .claude/agents/ | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/artifacts` | local-jsx | Browse your published and shared artifacts | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/auto-mode-setup` | local | Teach auto mode about your environment, plus optional rule tweaks | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/auto-mode-setup` | local-jsx | Teach auto mode about your environment, plus optional rule tweaks | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/autocompact` | local-jsx | Set how full the context gets before auto-summarizing | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/autocompact` | local | Configure the auto-compact window size | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/autofix-pr` | local-jsx | Monitor and autofix any issues with the current PR | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/background` | local-jsx | Send this session to the background and free the terminal | [commands/command-background.js](../../../src/linux/commands/command-background.js) |
| `/branch` | local-jsx | Create a branch of the current conversation at this point | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/brief` | local-jsx | Toggle brief-only mode | [commands/command-brief.js](../../../src/linux/commands/command-brief.js) |
| `/btw` | local-jsx | Ask a quick side question without interrupting the main conversation | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/bug` | local-jsx | Report a bug or share your conversation | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/cd` | local-jsx | Move this session to a new working directory | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/chrome` | local-jsx | Open Claude in Chrome settings | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/clear` | local | Start a new session with empty context; previous session stays on disk (resumable with /resume) | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/cloud-plugins` | local-jsx | Choose whether cloud sessions use the plugins enabled on this machine | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/color` | local-jsx | Set the prompt bar color for this session | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/color` | local | Set the prompt bar color for this session | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/compact` | local | Free up context by summarizing the conversation so far | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/config` | local-jsx | Open settings | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/config` | local | Set a setting by key | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/context` | local-jsx | Visualize current context usage as a colored grid | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/context` | local | Show current context usage | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/copy` | local-jsx | Copy Claude's last response to clipboard (or /copy N for the Nth-latest) | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/daemon` | local-jsx | Manage background services and routines | [commands/command-daemon.js](../../../src/linux/commands/command-daemon.js) |
| `/design-consent` | local | Grant Claude agent access to your Design projects | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/design-login` | local-jsx | Authorize design-system access for /design-sync with your claude.ai account | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/design-revoke` | local | Revoke Claude agent access to your Design projects | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/desktop` | local-jsx | Continue the current session in Claude Desktop | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/diff` | local-jsx | （动态生成） | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/effort` | local-jsx | Set effort level for model usage | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/effort` | local | Set effort level for model usage | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/exit` | local-jsx | （动态生成） | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/exit` | local | （动态生成） | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/export` | local-jsx | Export the current conversation to a file or clipboard | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/extra-usage` | local-jsx | Renamed to /usage-credits | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/extra-usage` | local | Renamed to /usage-credits | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/fast` | local-jsx | （动态生成） | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/fast` | local | （动态生成） | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/feedback` | local-jsx | Send feedback to Anthropic or report a bug | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/focus` | local-jsx | Toggle focus view: just your prompt, summary, and response | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/focus` | local | Toggle focus view: just your prompt, summary, and response | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/fork` | local-jsx | Spawn a background agent that inherits the full conversation | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/fork` | local-jsx | Copy this conversation into a new background session and keep working here | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/goal` | local-jsx | Set a goal Claude checks before stopping | [commands/command-goal.js](../../../src/linux/commands/command-goal.js) |
| `/goal` | local | Set a goal — keep working until the condition is met | [commands/command-goal.js](../../../src/linux/commands/command-goal.js) |
| `/heapdump` | local | Dump the JS heap to the Desktop; on Linux with no Desktop folder, the home directory | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/help` | local-jsx | Show help and available commands | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/hooks` | local-jsx | View hook configurations for tool events | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/ide` | local-jsx | Manage IDE integrations and show status | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/import` | local-jsx | Import config from another AI coding agent | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/import` | local | Import config from another AI coding agent | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/init` | prompt | （动态生成） | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/insights` | prompt | Generate a report analyzing your Claude Code sessions | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/insights` | prompt | Generate a report analyzing your Claude Code sessions | [commands/command-insights.js](../../../src/linux/commands/command-insights.js) |
| `/install` | local-jsx | Install Claude Code native build | [commands/command-install.js](../../../src/linux/commands/command-install.js) |
| `/install-github-app` | local-jsx | Set up Claude GitHub Actions for a repository | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/install-slack-app` | local | Install the Claude Slack app | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/keybindings` | local | Open your keyboard shortcuts file | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/limit-reset` | local-jsx | （动态生成） | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/list-agents` | local | List subagents, teammates, and other Claude sessions you can message | [commands/command-list-agents.js](../../../src/linux/commands/command-list-agents.js) |
| `/login` | local-jsx | （动态生成） | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/logout` | local-jsx | Sign out from your Anthropic account | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/loops` | local-jsx | List, create, and delete loops | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/mcp` | local | Manage MCP servers | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/mcp` | local-jsx | Manage MCP servers | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/memory` | local-jsx | Edit CLAUDE.md files and memory settings | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/mobile` | local-jsx | Show QR code to download the Claude mobile app | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/model` | local | Set the AI model for Claude Code | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/model` | local-jsx | （动态生成） | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/output-style` | local | List output styles or switch to one | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/passes` | local-jsx | （动态生成） | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/pause-memory` | local | （动态生成） | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/permissions` | local-jsx | Manage allow and deny tool permission rules | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/plan` | local-jsx | Enable plan mode or view the current session plan | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/plugin` | local-jsx | Manage Claude Code plugins | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/powerup` | local-jsx | Discover Claude Code features through quick interactive lessons | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/privacy-settings` | local-jsx | View and update your privacy settings | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/pro-trial-expired` | local-jsx | Options shown when the Pro plan Claude Code trial has ended | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/radio` | local | Listen to Claude FM lo-fi radio | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/rate-limit-options` | local-jsx | Manage usage limits and upgrade options | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/recap` | local | Generate a one-line session recap now | [commands/command-recap.js](../../../src/linux/commands/command-recap.js) |
| `/release-notes` | local-jsx | View release notes | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/reload-plugins` | local | Activate pending plugin changes in the current session | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/reload-skills` | local | Pick up skills added or changed on disk during this session | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/remote-control` | local-jsx | （动态生成） | [commands/command-remote-control.js](../../../src/linux/commands/command-remote-control.js) |
| `/remote-env` | local-jsx | Choose the default environment for cloud agents | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/rename` | local-jsx | Rename the current conversation | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/rename` | local | Rename the current conversation | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/restart` | local | （动态生成） | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/resume` | local-jsx | （动态生成） | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/rewind` | local | Restore the code and/or conversation to a previous point | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/sandbox` | local-jsx | （动态生成） | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/scroll-speed` | local-jsx | Adjust mouse wheel scroll speed | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/session` | local-jsx | Show cloud session URL and QR code | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/setup-bedrock` | local-jsx | Reconfigure Amazon Bedrock authentication, region, or model pins | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/setup-vertex` | local-jsx | Reconfigure Google Vertex AI authentication, project, region, or model pins | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/skill-doctor` | local-jsx | Show which loaded skills are unused and costing context | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/skill-doctor` | local | Show which loaded skills are unused and costing context | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/skills` | local-jsx | List available skills | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/status` | local-jsx | Show Claude Code status including version, model, account, API connectivity, and tool statuses | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/statusline` | prompt | Set up Claude Code's status line UI | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/stickers` | local | Order Claude Code stickers | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/stop` | local-jsx | Stop this background session; transcript and worktree are kept | [commands/command-stop.js](../../../src/linux/commands/command-stop.js) |
| `/stop` | local | Stop this background session; transcript and worktree are kept | [commands/command-stop.js](../../../src/linux/commands/command-stop.js) |
| `/subtask` | local-jsx | Send a subagent off with your full context; its result comes back here | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/tasks` | local-jsx | View and manage everything running in the background | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/team-onboarding` | prompt | Help teammates ramp on Claude Code with a guide from your usage | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/teleport` | local-jsx | Send this session to the cloud, or resume one from claude.ai | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/terminal-setup` | local-jsx | （动态生成） | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/theme` | local-jsx | Change the theme | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/tui` | local-jsx | Set the terminal UI renderer (default \| fullscreen) | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/ultraplan` | local-jsx | （动态生成） | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/ultrareview` | local-jsx | （动态生成） | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/ultrareview` | local | （动态生成） | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/upgrade` | local-jsx | Upgrade to Max for higher rate limits and more Opus | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/usage` | local-jsx | Show session cost, plan usage, and activity stats | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/usage` | local | Show session cost, plan usage, and what's contributing to your limits | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/usage-credits` | local-jsx | Configure usage credits or request them from your admin when you hit a limit | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/usage-credits` | local | Configure usage credits or request them from your admin when you hit a limit | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/version` | local-jsx | Show this session's version (autoupdate may have a newer one) | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/version` | local | Print the version this session is running (not what autoupdate downloaded) | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/voice` | local | Toggle voice mode | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/web-setup` | local-jsx | Set up cloud sessions with your GitHub account | [commands/command-web-setup.js](../../../src/linux/commands/command-web-setup.js) |
| `/wellbeing` | local-jsx | Configure optional break reminders and quiet-hours nudges | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/workflow-launch-exec` | local | Execute a server-launched workflow handoff (workflow_launch event sessions only) | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `/workflows` | local-jsx | Browse running and completed workflows | [commands/command-workflows.js](../../../src/linux/commands/command-workflows.js) |

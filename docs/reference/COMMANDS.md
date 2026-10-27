# 斜杠命令

`local`：本地执行并返回文本；`local-jsx`：渲染 Ink 组件；`prompt`：展开为发给模型的提示词。同名的多条通常对应交互与非交互两种实现。

| 命令 | 类型 | 说明 | 定义位置 |
|---|---|---|---|
| `/__remote-workflow` | local | Run the workflow script delivered in this session environment (server-launched sessions only) | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/add-dir` | local | Add a new working directory | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/add-dir` | local-jsx | Add a new working directory | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/advisor` | local-jsx | Let Claude consult a stronger model at key moments | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/advisor` | local | Let Claude consult a stronger model at key moments | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/agents` | local | (removed) Ask Claude to create/manage subagents, or edit .claude/agents/ | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/artifacts` | local-jsx | Browse your published and shared artifacts | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/auto-mode-setup` | local | Teach auto mode about your environment, plus optional rule tweaks | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/auto-mode-setup` | local-jsx | Teach auto mode about your environment, plus optional rule tweaks | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/autocompact` | local-jsx | Set how full the context gets before auto-summarizing | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/autocompact` | local | Configure the auto-compact window size | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/autofix-pr` | local-jsx | Monitor and autofix any issues with the current PR | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/background` | local-jsx | Send this session to the background and free the terminal | [commands/command-background.t601.js](../../src/commands/command-background.t601.js) |
| `/branch` | local-jsx | Create a branch of the current conversation at this point | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/brief` | local-jsx | Toggle brief-only mode | [commands/command-brief.0rj4.js](../../src/commands/command-brief.0rj4.js) |
| `/btw` | local-jsx | Ask a quick side question without interrupting the main conversation | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/bug` | local-jsx | Report a bug or share your conversation | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/cd` | local-jsx | Move this session to a new working directory | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/chrome` | local-jsx | Open Claude in Chrome settings | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/clear` | local | Start a new session with empty context; previous session stays on disk (resumable with /resume) | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/cloud-plugins` | local-jsx | Choose whether cloud sessions use the plugins enabled on this machine | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/color` | local-jsx | Set the prompt bar color for this session | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/color` | local | Set the prompt bar color for this session | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/compact` | local | Free up context by summarizing the conversation so far | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/config` | local-jsx | Open settings | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/config` | local | Set a setting by key | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/context` | local-jsx | Visualize current context usage as a colored grid | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/context` | local | Show current context usage | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/copy` | local-jsx | Copy Claude's last response to clipboard (or /copy N for the Nth-latest) | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/daemon` | local-jsx | Manage background services and routines | [commands/command-daemon.eynb.js](../../src/commands/command-daemon.eynb.js) |
| `/design-consent` | local | Grant Claude agent access to your Design projects | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/design-login` | local-jsx | Authorize design-system access for /design-sync with your claude.ai account | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/design-revoke` | local | Revoke Claude agent access to your Design projects | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/desktop` | local-jsx | Continue the current session in Claude Desktop | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/diff` | local-jsx | （动态生成） | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/effort` | local-jsx | Set effort level for model usage | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/effort` | local | Set effort level for model usage | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/exit` | local-jsx | （动态生成） | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/exit` | local | （动态生成） | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/export` | local-jsx | Export the current conversation to a file or clipboard | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/extra-usage` | local-jsx | Renamed to /usage-credits | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/extra-usage` | local | Renamed to /usage-credits | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/fast` | local-jsx | （动态生成） | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/fast` | local | （动态生成） | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/feedback` | local-jsx | Send feedback to Anthropic or report a bug | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/focus` | local-jsx | Toggle focus view: just your prompt, summary, and response | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/focus` | local | Toggle focus view: just your prompt, summary, and response | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/fork` | local-jsx | Spawn a background agent that inherits the full conversation | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/fork` | local-jsx | Copy this conversation into a new background session and keep working here | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/goal` | local-jsx | Set a goal Claude checks before stopping | [commands/command-goal.839w.js](../../src/commands/command-goal.839w.js) |
| `/goal` | local | Set a goal — keep working until the condition is met | [commands/command-goal.839w.js](../../src/commands/command-goal.839w.js) |
| `/heapdump` | local | Dump the JS heap to the Desktop; on Linux with no Desktop folder, the home directory | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/help` | local-jsx | Show help and available commands | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/hooks` | local-jsx | View hook configurations for tool events | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/ide` | local-jsx | Manage IDE integrations and show status | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/import` | local-jsx | Import config from another AI coding agent | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/import` | local | Import config from another AI coding agent | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/init` | prompt | （动态生成） | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/insights` | prompt | Generate a report analyzing your Claude Code sessions | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/insights` | prompt | Generate a report analyzing your Claude Code sessions | [commands/command-insights.cbep.js](../../src/commands/command-insights.cbep.js) |
| `/install` | local-jsx | Install Claude Code native build | [commands/command-install.5379.js](../../src/commands/command-install.5379.js) |
| `/install-github-app` | local-jsx | Set up Claude GitHub Actions for a repository | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/install-slack-app` | local | Install the Claude Slack app | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/keybindings` | local | Open your keyboard shortcuts file | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/limit-reset` | local-jsx | （动态生成） | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/list-agents` | local | List subagents, teammates, and other Claude sessions you can message | [commands/command-list-agents.dfgt.js](../../src/commands/command-list-agents.dfgt.js) |
| `/login` | local-jsx | （动态生成） | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/logout` | local-jsx | Sign out from your Anthropic account | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/loops` | local-jsx | List, create, and delete loops | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/mcp` | local | Manage MCP servers | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/mcp` | local-jsx | Manage MCP servers | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/memory` | local-jsx | Edit CLAUDE.md files and memory settings | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/mobile` | local-jsx | Show QR code to download the Claude mobile app | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/model` | local | Set the AI model for Claude Code | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/model` | local-jsx | （动态生成） | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/output-style` | local | List output styles or switch to one | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/passes` | local-jsx | （动态生成） | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/pause-memory` | local | （动态生成） | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/permissions` | local-jsx | Manage allow and deny tool permission rules | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/plan` | local-jsx | Enable plan mode or view the current session plan | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/plugin` | local-jsx | Manage Claude Code plugins | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/powerup` | local-jsx | Discover Claude Code features through quick interactive lessons | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/privacy-settings` | local-jsx | View and update your privacy settings | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/pro-trial-expired` | local-jsx | Options shown when the Pro plan Claude Code trial has ended | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/radio` | local | Listen to Claude FM lo-fi radio | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/rate-limit-options` | local-jsx | Manage usage limits and upgrade options | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/recap` | local | Generate a one-line session recap now | [commands/command-recap.5wye.js](../../src/commands/command-recap.5wye.js) |
| `/release-notes` | local-jsx | View release notes | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/reload-plugins` | local | Activate pending plugin changes in the current session | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/reload-skills` | local | Pick up skills added or changed on disk during this session | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/remote-control` | local-jsx | （动态生成） | [commands/command-remote-control.skt1.js](../../src/commands/command-remote-control.skt1.js) |
| `/remote-env` | local-jsx | Choose the default environment for cloud agents | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/rename` | local-jsx | Rename the current conversation | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/rename` | local | Rename the current conversation | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/restart` | local | （动态生成） | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/resume` | local-jsx | （动态生成） | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/rewind` | local | Restore the code and/or conversation to a previous point | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/sandbox` | local-jsx | （动态生成） | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/scroll-speed` | local-jsx | Adjust mouse wheel scroll speed | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/session` | local-jsx | Show cloud session URL and QR code | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/setup-bedrock` | local-jsx | Reconfigure Amazon Bedrock authentication, region, or model pins | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/setup-vertex` | local-jsx | Reconfigure Google Vertex AI authentication, project, region, or model pins | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/skill-doctor` | local-jsx | Show which loaded skills are unused and costing context | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/skill-doctor` | local | Show which loaded skills are unused and costing context | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/skills` | local-jsx | List available skills | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/status` | local-jsx | Show Claude Code status including version, model, account, API connectivity, and tool statuses | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/statusline` | prompt | Set up Claude Code's status line UI | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/stickers` | local | Order Claude Code stickers | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/stop` | local-jsx | Stop this background session; transcript and worktree are kept | [commands/command-stop.hef6.js](../../src/commands/command-stop.hef6.js) |
| `/stop` | local | Stop this background session; transcript and worktree are kept | [commands/command-stop.hef6.js](../../src/commands/command-stop.hef6.js) |
| `/subtask` | local-jsx | Send a subagent off with your full context; its result comes back here | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/tasks` | local-jsx | View and manage everything running in the background | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/team-onboarding` | prompt | Help teammates ramp on Claude Code with a guide from your usage | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/teleport` | local-jsx | Send this session to the cloud, or resume one from claude.ai | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/terminal-setup` | local-jsx | （动态生成） | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/theme` | local-jsx | Change the theme | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/tui` | local-jsx | Set the terminal UI renderer (default \| fullscreen) | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/ultraplan` | local-jsx | （动态生成） | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/ultrareview` | local-jsx | （动态生成） | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/ultrareview` | local | （动态生成） | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/upgrade` | local-jsx | Upgrade to Max for higher rate limits and more Opus | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/usage` | local-jsx | Show session cost, plan usage, and activity stats | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/usage` | local | Show session cost, plan usage, and what's contributing to your limits | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/usage-credits` | local-jsx | Configure usage credits or request them from your admin when you hit a limit | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/usage-credits` | local | Configure usage credits or request them from your admin when you hit a limit | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/version` | local-jsx | Show this session's version (autoupdate may have a newer one) | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/version` | local | Print the version this session is running (not what autoupdate downloaded) | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/voice` | local | Toggle voice mode | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/web-setup` | local-jsx | Set up cloud sessions with your GitHub account | [commands/command-web-setup.d6eb.js](../../src/commands/command-web-setup.d6eb.js) |
| `/wellbeing` | local-jsx | Configure optional break reminders and quiet-hours nudges | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/workflow-launch-exec` | local | Execute a server-launched workflow handoff (workflow_launch event sessions only) | [core/conversation-engine.31gx.js](../../src/core/conversation-engine.31gx.js) |
| `/workflows` | local-jsx | Browse running and completed workflows | [commands/command-workflows.nb6p.js](../../src/commands/command-workflows.nb6p.js) |

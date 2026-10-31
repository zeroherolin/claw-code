# CLI 子命令与选项（darwin）

来源：commander 链式调用 `.command()` / `.option()` / `.addOption(new Option())`。“隐藏”表示不在 `--help` 中显示。

## 子命令

| 命令 | 说明 | 位置 |
|---|---|---|
| `edit-permission-rules` | Apply one permission-rule edit read as JSON from stdin (used by the VS Code extension) | [cli/drop-worktree-registrations.js:22](../../../src/darwin/cli/drop-worktree-registrations.js#L22) |
| `edit-memory-settings` | Apply one memory-settings edit read as JSON from stdin (used by the VS Code extension) | [cli/drop-worktree-registrations.js:32](../../../src/darwin/cli/drop-worktree-registrations.js#L32) |
| `edit-skill-overrides` | Apply one skill state edit read as JSON from stdin (used by the VS Code extension) | [cli/drop-worktree-registrations.js:42](../../../src/darwin/cli/drop-worktree-registrations.js#L42) |
| `edit-sandbox-settings` | Apply one sandbox settings edit read as JSON from stdin (used by the VS Code extension) | [cli/drop-worktree-registrations.js:52](../../../src/darwin/cli/drop-worktree-registrations.js#L52) |
| `design-login` | Run the Claude Design sign-in, or report its state, as JSON lines (used by the VS Code extension) | [cli/drop-worktree-registrations.js:62](../../../src/darwin/cli/drop-worktree-registrations.js#L62) |
| `edit-chrome-settings` | Apply one Claude in Chrome settings edit read as JSON from stdin (used by the VS Code extension) | [cli/drop-worktree-registrations.js:74](../../../src/darwin/cli/drop-worktree-registrations.js#L74) |
| `drop-worktree-registrations` | Drop deleted worktrees' git registrations named as JSON on stdin (used by the VS Code extension) | [cli/drop-worktree-registrations.js:84](../../../src/darwin/cli/drop-worktree-registrations.js#L84) |
| `edit-hook` | Apply one hook edit read as JSON from stdin (used by the VS Code extension) | [cli/main.js:689](../../../src/darwin/cli/main.js#L689) |
| `project` |  | [cli/main.js:704](../../../src/darwin/cli/main.js#L704) |
| `purge [path]` |  | [cli/main.js:708](../../../src/darwin/cli/main.js#L708) |
| `gateway` | Run the enterprise auth/telemetry gateway | [cli/main.js:938](../../../src/darwin/cli/main.js#L938) |
| `auth` | Manage authentication | [cli/main.js:953](../../../src/darwin/cli/main.js#L953) |
| `login` | Sign in to your Anthropic account | [cli/main.js:954](../../../src/darwin/cli/main.js#L954) |
| `status` | Show authentication status | [cli/main.js:957](../../../src/darwin/cli/main.js#L957) |
| `logout` | Log out from your Anthropic account | [cli/main.js:960](../../../src/darwin/cli/main.js#L960) |
| `setup-token` | Set up a long-lived authentication token (requires Claude subscription) | [cli/main.js:965](../../../src/darwin/cli/main.js#L965) |
| `agents` | Manage background agents | [cli/main.js:969](../../../src/darwin/cli/main.js#L969) |
| `ultrareview [target]` | Run a cloud-hosted multi-agent code review of the current branch (or a PR number / base branch) and print the… | [cli/main.js:973](../../../src/darwin/cli/main.js#L973) |
| `auto-mode` | Inspect or reset auto mode classifier configuration | [cli/main.js:978](../../../src/darwin/cli/main.js#L978) |
| `defaults` | Print the default auto mode environment, allow, soft_deny, and hard_deny rules as JSON | [cli/main.js:979](../../../src/darwin/cli/main.js#L979) |
| `config` | Print the effective auto mode config as JSON: your settings where set, defaults otherwise | [cli/main.js:982](../../../src/darwin/cli/main.js#L982) |
| `reset` | Reset auto mode configuration to the shipped defaults by removing the autoMode section from your user setting… | [cli/main.js:985](../../../src/darwin/cli/main.js#L985) |
| `critique` | Get AI feedback on your custom auto mode rules | [cli/main.js:988](../../../src/darwin/cli/main.js#L988) |
| `remote-control` | Control local sessions from claude.ai/code or the Claude mobile app | [cli/main.js:993](../../../src/darwin/cli/main.js#L993) |
| `doctor` | Check the health of your Claude Code installation. Reads settings files in the current directory without a tr… | [cli/main.js:997](../../../src/darwin/cli/main.js#L997) |
| `<dyn>` | Review how your Claude Code settings (~/.claude/settings.json) and this folder's (.claude/settings.json, .cla… | [cli/main.js:1000](../../../src/darwin/cli/main.js#L1000) |
| `sandbox` |  | [cli/main.js:1004](../../../src/darwin/cli/main.js#L1004) |
| `install` | Install the Windows sandbox user and network filters. Self-elevates (one UAC prompt). Prints a JSON {status, … | [cli/main.js:1005](../../../src/darwin/cli/main.js#L1005) |
| `status` | Print the effective sandbox posture (enabled, its source, strict mode, filesystem policy, Bash auto-allow) an… | [cli/main.js:1008](../../../src/darwin/cli/main.js#L1008) |
| `uninstall` | Remove the Windows sandbox account and network filters from this PC, then list what stays behind; Windows may… | [cli/main.js:1011](../../../src/darwin/cli/main.js#L1011) |
| `update` | Check for updates and install if available; package-manager installs update through the package manager | [cli/main.js:1014](../../../src/darwin/cli/main.js#L1014) |
| `install [target]` | Install Claude Code native build. Use [target] to specify version (stable, latest, or specific version) | [cli/main.js:1017](../../../src/darwin/cli/main.js#L1017) |
| `import` | Import config from another AI coding agent into Claude Code | [cli/main.js:1020](../../../src/darwin/cli/main.js#L1020) |
| `import-conversations <exportPath>` |  | [cli/main.js:1025](../../../src/darwin/cli/main.js#L1025) |
| `plugin` | Manage Claude Code plugins | [plugins/register-plugin-commands.js:612](../../../src/darwin/plugins/register-plugin-commands.js#L612) |
| `init <name>` |  | [plugins/register-plugin-commands.js:624](../../../src/darwin/plugins/register-plugin-commands.js#L624) |
| `validate <path>` |  | [plugins/register-plugin-commands.js:627](../../../src/darwin/plugins/register-plugin-commands.js#L627) |
| `tag [path]` |  | [plugins/register-plugin-commands.js:630](../../../src/darwin/plugins/register-plugin-commands.js#L630) |
| `list` |  | [plugins/register-plugin-commands.js:633](../../../src/darwin/plugins/register-plugin-commands.js#L633) |
| `eval [target]` |  | [plugins/register-plugin-commands.js:644](../../../src/darwin/plugins/register-plugin-commands.js#L644) |
| `init [name]` |  | [plugins/register-plugin-commands.js:649](../../../src/darwin/plugins/register-plugin-commands.js#L649) |
| `test [dir]` |  | [plugins/register-plugin-commands.js:654](../../../src/darwin/plugins/register-plugin-commands.js#L654) |
| `details <name>` |  | [plugins/register-plugin-commands.js:662](../../../src/darwin/plugins/register-plugin-commands.js#L662) |
| `marketplace` | Manage Claude Code marketplaces | [plugins/register-plugin-commands.js:666](../../../src/darwin/plugins/register-plugin-commands.js#L666) |
| `add <source>` |  | [plugins/register-plugin-commands.js:667](../../../src/darwin/plugins/register-plugin-commands.js#L667) |
| `list` |  | [plugins/register-plugin-commands.js:670](../../../src/darwin/plugins/register-plugin-commands.js#L670) |
| `remove <name>` |  | [plugins/register-plugin-commands.js:673](../../../src/darwin/plugins/register-plugin-commands.js#L673) |
| `update [name]` |  | [plugins/register-plugin-commands.js:676](../../../src/darwin/plugins/register-plugin-commands.js#L676) |
| `install <plugin>` |  | [plugins/register-plugin-commands.js:680](../../../src/darwin/plugins/register-plugin-commands.js#L680) |
| `uninstall <plugin>` |  | [plugins/register-plugin-commands.js:691](../../../src/darwin/plugins/register-plugin-commands.js#L691) |
| `prune` |  | [plugins/register-plugin-commands.js:694](../../../src/darwin/plugins/register-plugin-commands.js#L694) |
| `enable <plugin>` |  | [plugins/register-plugin-commands.js:697](../../../src/darwin/plugins/register-plugin-commands.js#L697) |
| `disable [plugin]` |  | [plugins/register-plugin-commands.js:700](../../../src/darwin/plugins/register-plugin-commands.js#L700) |
| `update <plugin>` |  | [plugins/register-plugin-commands.js:703](../../../src/darwin/plugins/register-plugin-commands.js#L703) |
| `configure <plugin>` |  | [plugins/register-plugin-commands.js:706](../../../src/darwin/plugins/register-plugin-commands.js#L706) |
| `add <name> <commandOrUrl> [args...]` | Add an MCP server to Claude Code. Examples:   # Add HTTP server:   claude mcp add --transport http sentry htt… | [mcp/register-mcp-commands.js:409](../../../src/darwin/mcp/register-mcp-commands.js#L409) |
| `xaa` | Manage the XAA (SEP-990) IdP connection | [mcp/register-mcp-commands.js:483](../../../src/darwin/mcp/register-mcp-commands.js#L483) |
| `setup` | Configure the IdP connection (one-time setup for all XAA-enabled servers) | [mcp/register-mcp-commands.js:484](../../../src/darwin/mcp/register-mcp-commands.js#L484) |
| `login` | Cache an IdP id_token so XAA-enabled MCP servers authenticate silently. Default: run the OIDC browser login. … | [mcp/register-mcp-commands.js:507](../../../src/darwin/mcp/register-mcp-commands.js#L507) |
| `show` | Show the current IdP connection config | [mcp/register-mcp-commands.js:529](../../../src/darwin/mcp/register-mcp-commands.js#L529) |
| `clear` | Clear the IdP connection config and cached id_token | [mcp/register-mcp-commands.js:540](../../../src/darwin/mcp/register-mcp-commands.js#L540) |
| `mcp` | Configure and manage MCP servers | [mcp/register-mcp-commands.js:548](../../../src/darwin/mcp/register-mcp-commands.js#L548) |
| `serve` | Start the Claude Code MCP server | [mcp/register-mcp-commands.js:548](../../../src/darwin/mcp/register-mcp-commands.js#L548) |
| `remove <name>` | Remove an MCP server | [mcp/register-mcp-commands.js:555](../../../src/darwin/mcp/register-mcp-commands.js#L555) |
| `list` | List configured MCP servers. Unapproved .mcp.json servers are shown as ⏸ Pending approval and not connected t… | [mcp/register-mcp-commands.js:558](../../../src/darwin/mcp/register-mcp-commands.js#L558) |
| `get <name>` | Get details about an MCP server. Unapproved .mcp.json servers are shown as ⏸ Pending approval and not connect… | [mcp/register-mcp-commands.js:561](../../../src/darwin/mcp/register-mcp-commands.js#L561) |
| `login <name>` | Authenticate with an MCP server (HTTP, SSE, or claude.ai connector) | [mcp/register-mcp-commands.js:564](../../../src/darwin/mcp/register-mcp-commands.js#L564) |
| `logout <name>` | Clear stored OAuth credentials for an MCP server | [mcp/register-mcp-commands.js:567](../../../src/darwin/mcp/register-mcp-commands.js#L567) |
| `add-json <name> <json>` | Add an MCP server (stdio, SSE, HTTP, or WebSocket) with a JSON string | [mcp/register-mcp-commands.js:570](../../../src/darwin/mcp/register-mcp-commands.js#L570) |
| `add-from-claude-desktop` | Import MCP servers from Claude Desktop (Mac and WSL only) | [mcp/register-mcp-commands.js:573](../../../src/darwin/mcp/register-mcp-commands.js#L573) |
| `reset-project-choices` | Reset all approved and rejected project-scoped (.mcp.json) servers within this project | [mcp/register-mcp-commands.js:576](../../../src/darwin/mcp/register-mcp-commands.js#L576) |

## 选项：edit-permission-rules

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--json` |  | Read the edit as JSON from stdin |

## 选项：edit-memory-settings

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--json` |  | Read the edit as JSON from stdin |

## 选项：edit-skill-overrides

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--json` |  | Read the edit as JSON from stdin |

## 选项：edit-sandbox-settings

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--json` |  | Read the edit as JSON from stdin |

## 选项：design-login

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--json` |  | Write JSON lines to stdout |
| `--status` |  | Report whether design-system access is authorized, and exit |

## 选项：edit-chrome-settings

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--json` |  | Read the edit as JSON from stdin |

## 选项：drop-worktree-registrations

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--json` |  | Read the request as JSON from stdin |

## 选项：claude

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `-d, --debug [filter]` |  | Enable debug mode with optional category filtering (e.g., --debug=hooks,mcp or --debug='!hooks,!mcp') |
| `-d2e, --debug-to-stderr` | ✓ | (deprecated) Enable debug mode (to stderr) |
| `--debug-file <path>` |  | Write debug logs to a specific file path (implicitly enables debug mode) |
| `--verbose` |  | Override verbose mode setting from config |
| `-p, --print` |  | Print response and exit (useful for pipes). Note: The workspace trust dialog is skipped when Claude is run in non-interactive mode (via -p,… |
| `--bare` |  | Minimal mode: skip hooks (those defined in settings and by installed plugins; features built into Claude Code are unaffected), LSP, plugin … |
| `--safe-mode` |  | Start with all customizations (CLAUDE.md, skills, installed plugins, hooks, MCP servers, custom commands and agents, output styles, workflo… |
| `--init` | ✓ | Run Setup hooks with init trigger, then continue |
| `--init-only` | ✓ | Run Setup and SessionStart:startup hooks, then exit |
| `--maintenance` | ✓ | Run Setup hooks with maintenance trigger, then continue |
| `--output-format <format>` |  | Output format (only works with --print): "text" (default), "json" (single result), or "stream-json" (realtime streaming)（可选值：text, json, stream-json） |
| `--json-schema <schema>` |  | JSON Schema for structured output validation (only works with --print). Example: {"type":"object","properties":{"name":{"type":"string"}},"… |
| `--include-hook-events` |  | Include all hook lifecycle events in the output stream (only works with --output-format=stream-json) |
| `--include-partial-messages` |  | Include partial message chunks as they arrive (only works with --print and --output-format=stream-json) |
| `--forward-subagent-text` |  | Forward subagent text and thinking blocks as assistant/user messages with parent_tool_use_id set (only works with --print and --output-form… |
| `--session-mirror` | ✓ | Emit transcript_mirror frames on stdout (SDK-internal; set by ProcessTransport when sessionStore is configured) |
| `--await-claim` | ✓ | Start as a pre-warmed spare for an SDK host: boot with host-level options in a neutral directory, skip session-scoped start-up work, and wa… |
| `--input-format <format>` |  | Input format (only works with --print): "text" (default), or "stream-json" (realtime streaming input)（可选值：text, stream-json） |
| `--await-initialize` | ✓ | Read the initialize control request from stdin during startup so its launch-scoped fields (plugins) apply exactly like their command-line f… |
| `--dangerously-skip-permissions` |  | Bypass all permission checks. Recommended only for sandboxes with no internet access. |
| `--allow-dangerously-skip-permissions` |  | Enable bypassing all permission checks as an option, without it being enabled by default. Recommended only for sandboxes with no internet a… |
| `--thinking <mode>` | ✓ | Thinking mode: enabled (equivalent to adaptive), disabled（可选值：enabled, adaptive, disabled） |
| `--thinking-display <display>` | ✓ | How thinking content appears in the response |
| `--max-thinking-tokens <tokens>` | ✓ | [DEPRECATED. Use --thinking instead for newer models] Maximum number of thinking tokens (only works with --print) |
| `--max-turns <turns>` | ✓ | Maximum number of agentic turns in non-interactive mode. This will early exit the conversation after the specified number of turns. (only w… |
| `--max-budget-usd <amount>` |  | Maximum dollar amount to spend on API calls (only works with --print) |
| `--task-budget <tokens>` | ✓ | API-side task budget in tokens (output_config.task_budget) |
| `--replay-user-messages` |  | Re-emit user messages from stdin back on stdout for acknowledgment (only works with --input-format=stream-json and --output-format=stream-j… |
| `--prompt-suggestions [value]` |  | Enable prompt suggestions. In print/SDK mode, emits a prompt_suggestion message after each turn with a predicted next user prompt（可选值：true, false, 1, 0, yes, no, on, off） |
| `--enable-auth-status` | ✓ | Enable auth status messages in SDK mode |
| `--allowedTools, --allowed-tools <tools...>` |  | Comma or space-separated list of tool names to allow (e.g. "Bash(git *) Edit") |
| `--tools <tools...>` |  | Specify the list of available tools from the built-in set. Use "" to disable all tools, "default" to use the default set, or specify tool n… |
| `--restricted` |  | Restricted mode: removes the built-in tools that run commands or code (Bash, PowerShell and the other code-running tools) and WebFetch unle… |
| `--disallowedTools, --disallowed-tools <tools...>` |  | Comma or space-separated list of tool names to deny (e.g. "Bash(git *) Edit") |
| `--mcp-config <configs...>` |  | Load MCP servers from JSON files or strings (space-separated) |
| `--permission-prompt-tool <tool>` | ✓ | MCP tool to use for permission prompts (only works with --print) |
| `--permission-prompts <target>` |  | Who answers permission prompts with --print: "host" (the SDK host or --permission-prompt-tool) or "none" (nobody: anything that would promp… |
| `--system-prompt <prompt>` |  | System prompt to use for the session |
| `--system-prompt-file <file>` | ✓ | Read system prompt from a file |
| `--append-system-prompt <prompt>` |  | Append a system prompt to the default system prompt |
| `--append-system-prompt-file <file>` | ✓ | Read system prompt from a file and append to the default system prompt |
| `--system-prompt-snapshot <on|off>` |  | Record the system prompt once per conversation and reuse it verbatim on every request and resume. on (the default, except under --bare outs…（可选值：on, off） |
| `--append-subagent-system-prompt <prompt>` | ✓ | Append a system prompt to every Task-tool subagent's system prompt, propagated to nested subagents (only works with --print). Implies CLAUD… |
| `--append-subagent-system-prompt-file <file>` | ✓ | Read a system prompt from a file and append it to every Task-tool subagent's system prompt (only works with --print) |
| `--plan-mode-instructions <instructions>` | ✓ | Custom workflow body for plan mode. Replaces the default code-implementation phases in the plan-mode system reminder; the read-only enforce… |
| `--exclude-dynamic-system-prompt-sections` |  | Move per-machine sections (cwd, env info, memory paths, git status) from the system prompt into the first user message. Improves cross-user… |
| `--permission-mode <mode>` |  | Permission mode to use for the session |
| `--inherit-permission-mode <mode>` | ✓ | Permission mode carried from a parent session, used only when nothing else configures one |
| `-c, --continue` |  | Continue the most recent conversation in the current directory |
| `-r, --resume [value]` |  | Resume a conversation by session ID or name, or open interactive picker with optional search term |
| `--fork-session` |  | When resuming, create a new session ID instead of reusing the original (use with --resume or --continue) |
| `--watch-artifact <artifact>` | ✓ | Watch a Claude artifact (id or URL) in this session and hear about new versions and comments |
| `--watch-artifact-no-autoreact <artifact>` | ✓ |  |
| `--prefill <text>` | ✓ | Pre-fill the prompt input with text without submitting it |
| `--deep-link-origin` | ✓ | Signal that this session was launched from a deep link |
| `--deep-link-repo <slug>` | ✓ | Repo slug the deep link ?repo= parameter resolved to the current cwd |
| `--deep-link-last-fetch <ms>` | ✓ | FETCH_HEAD mtime in epoch ms, precomputed by the deep link trampoline |
| `--prefill-b64 <b64>` | ✓ | Base64url-encoded --prefill value (deep-link shell-safe launch paths) |
| `--deep-link-cwd-b64 <b64>` | ✓ | Base64url-encoded working directory (deep-link shell-safe launch paths) |
| `--from-pr [value]` |  | Resume a session linked to a PR by PR number/URL, or open interactive picker with optional search term |
| `--no-session-persistence` |  | Disable session persistence - sessions will not be saved to disk and cannot be resumed (only works with --print) |
| `--resume-session-at <message id>` | ✓ | When resuming, only messages up to and including the chain entry with <message.id> — any chain-entry UUID, typically the kept turn's last e… |
| `--resume-drops-turn <message id>` | ✓ | With --resume-session-at in print mode: declare the prompt uuid of the turn the truncating resume intends to discard; the resume is refused… |
| `--reply-on-resume` | ✓ | When resuming, immediately query if the loaded transcript ends in a user-role message (set by /background mid-turn so the fork continues th… |
| `--rewind-files <user-message-id>` | ✓ | Restore files to state at the specified user message and exit (requires --resume) |
| `--model <model>` |  | Model for the current session. Provide an alias for the latest model (e.g. 'fable', 'opus', or 'sonnet') or a model's full name. |
| `--include-unsupported-models` | ✓ | Offer models your account can use that this version of Claude Code does not know |
| `--effort <level>` |  | Effort level for the current session (${…}) |
| `--fast-mode <on|off>` | ✓ |  |
| `--agent <agent>` |  | Agent for the current session. Overrides the 'agent' setting. |
| `--betas <betas...>` |  | Beta headers to include in API requests (API key users only) |
| `--fallback-model <model>` |  | Enable automatic fallback to specified model(s) when the default model is overloaded or not available. Accepts a comma-separated list to tr… |
| `--workload <tag>` | ✓ | Workload tag for billing-header attribution (cc_workload). Process-scoped; set by SDK daemon callers that spawn subprocesses for cron work.… |
| `--settings <file-or-json>` |  | Path to a settings JSON file or a JSON string to load additional settings from |
| `--client-data-url <url>` | ✓ | URL for a signed configuration document. Claude Code exits if it cannot load it, or if it has no entry for the selected model and --allow-o… |
| `--allow-other-models` | ✓ | With --client-data-url: start on a model the document has no entry for, applying none of its per-model client data, instead of exiting. CLA… |
| `--managed-settings <json>` | ✓ | Policy-tier settings JSON from a spawning parent process (SDK use only) |
| `--host-auth-is-org-sign-in` | ✓ | The ANTHROPIC_AUTH_TOKEN this host manages is an Anthropic organization sign-in that it obtained itself (desktop hosts only) |
| `--add-dir <directories...>` |  | Additional directories to allow tool access to |
| `--project-config-root <dir>` | ✓ | Read project settings, .mcp.json and the .claude config trees (commands, agents, skills, workflows, routines, output-styles; --routine is r… |
| `--ide` |  | Automatically connect to IDE on startup if exactly one valid IDE is available |
| `--desktop` |  | Open in the Claude Desktop app instead of the terminal (with --continue or --resume <id> to pick the session) |
| `--strict-mcp-config` |  | Only use MCP servers from --mcp-config, ignoring all other MCP configurations |
| `--session-id <uuid>` |  | Use a specific session ID for the conversation (must be a valid UUID) |
| `-n, --name <name>` |  | Set a display name for this session (shown in the prompt box, /resume picker, and terminal title) |
| `--agents <json-or-file>` |  | JSON object defining custom agents, or with --print the path to a file that holds one (e.g. '{"reviewer": {"description": "Reviews code", "… |
| `--setting-sources <sources>` |  | Comma-separated list of setting sources to load (user, project, local). |
| `--plugin-dir <path>` |  | Load a plugin from a directory or .zip for this session only; a folder of plugins loads each child (repeatable: --plugin-dir A --plugin-dir… |
| `--plugin-dir-no-mcp <path>` | ✓ | Like --plugin-dir but the engine will not read this plugin's .mcp.json (caller owns its MCP connections) |
| `--plugin-url <url>` |  | Fetch a plugin .zip from a URL for this session only (repeatable: --plugin-url A --plugin-url B) |
| `--disable-slash-commands` |  | Disable all skills and commands |
| `--chrome` |  | Enable Claude in Chrome integration |
| `--no-chrome` |  | Disable Claude in Chrome integration |
| `--file <specs...>` |  | File resources to download at startup. Format: file_id:relative_path (e.g., --file file_abc:doc.txt file_def:img.png) |

## 选项：edit-hook

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--json` |  | Read the edit as JSON from stdin |

## 选项：purge [path]

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--dry-run` |  | List what would be deleted without deleting anything |
| `-y, --yes` |  | Skip confirmation prompt |
| `-i, --interactive` |  | Prompt for each item before deleting |
| `--all` |  | Purge state for every project (mutually exclusive with [path]) |

## 选项：gateway

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--config <path>` |  | Path to gateway YAML config |

## 选项：login

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--email <email>` |  | Pre-populate email address on the login page |
| `--sso` |  | Force SSO login flow |
| `--console` |  | Use Anthropic Console (API usage billing) instead of Claude subscription |
| `--claudeai` |  | Use Claude subscription (default) |
| `--force` |  | Ignore any cached id_token and re-login (useful after IdP-side revocation) |
| `--id-token <jwt>` |  | Write this pre-obtained id_token directly to cache, skipping the OIDC browser login |

## 选项：status

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--json` |  | Output as JSON (default) |
| `--text` |  | Output as human-readable text |

## 选项：agents

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--setting-sources <sources>` |  | Comma-separated list of setting sources to load (user, project, local). |
| `--cwd <path>` |  | Show only background sessions started under <path> |
| `--add-dir <directory>` |  | Additional directory to allow tool access to in dispatched sessions (repeatable) |
| `--plugin-dir <path>` |  | Load plugins from specified directory for the agent view and dispatched sessions; a folder of plugins loads each child (repeatable) |
| `--plugin-dir-no-mcp <path>` | ✓ | Like --plugin-dir but the engine will not read this plugin's .mcp.json |
| `--settings <file-or-json>` |  | Settings file or JSON string to apply to the agent view and dispatched sessions |
| `--managed-settings <json>` | ✓ |  |
| `--mcp-config <config>` |  | MCP server configuration to apply to dispatched sessions (repeatable) |
| `--strict-mcp-config` |  | Only use MCP servers from --mcp-config in dispatched sessions |
| `--restricted` |  | Start dispatched sessions in restricted mode |
| `--permission-mode <mode>` |  | Default permission mode for sessions dispatched from agent view |
| `--inherit-permission-mode <mode>` | ✓ |  |
| `--dangerously-skip-permissions` |  | Alias for --permission-mode bypassPermissions |
| `--allow-dangerously-skip-permissions` |  | Make bypass-permissions mode available to dispatched sessions without defaulting to it |
| `--model <model>` |  | Default model for sessions dispatched from agent view |
| `--effort <level>` |  | Default effort level for sessions dispatched from agent view |
| `--agent <agent>` |  | Default agent for sessions dispatched from agent view. Overrides the 'agent' setting. |
| `--json` |  | Print active sessions (interactive and background) as a JSON array and exit (for scripting; does not require a TTY) |
| `--all` |  | With --json: also include completed background sessions |

## 选项：ultrareview [target]

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--json` |  | Print the raw bugs.json payload instead of formatted findings |
| `--timeout <minutes>` |  | Maximum minutes to wait for the review to finish (default: 45) |
| `--post` |  | Post the finished review's findings to the PR as you (PR targets only; one plain comment, not a review) |
| `--no-post` |  | Do not post the findings to the PR (the default; accepted for parity with the /ultrareview and /code-review ultra flags) |
| `--trust-workspace` |  | Trust the current folder for this run only, without asking (for scripts and CI). Takes no value: put a PR number or base branch before it. … |

## 选项：defaults

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--label <prefix>` |  | Show only rules whose label starts with this prefix (case-insensitive) |

## 选项：reset

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `-y, --yes` |  | Skip the confirmation prompt |

## 选项：critique

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--model <model>` |  | Override which model is used |

## 选项：uninstall

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--json` |  | Print one JSON line: {status, message, leftBehind, filtersChecked} |

## 选项：install [target]

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--force` |  | Force installation even if already installed |

## 选项：import

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--dry-run` |  | Show what would be imported without writing anything |
| `--yes` |  | Skip the interactive picker. On headless surfaces, pass --yes=<digest> from the `/import` preview. |

## 选项：import-conversations <exportPath>

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--cwd <dir>` |  | Archive directory the imported sessions anchor to |
| `--dry-run` |  | Parse and verify manifest without writing files |

## 选项：init <name>

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--description <text>` |  | Manifest description |
| `--author <name>` |  | Author name (default: git config user.name) |
| `--author-email <email>` |  | Author email (default: git config user.email) |
| `--with <components...>` |  | Also scaffold: ${…} |
| `-f, --force` |  | Overwrite an existing .claude-plugin/ at the target |

## 选项：validate <path>

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--strict` |  | Treat warnings as errors (exit 1). Use in CI to fail on unrecognized fields, missing metadata, and other issues that the runtime tolerates. |
| `--json` |  | Output the validation report as JSON (same exit codes) |
| `--profile <name>` |  | Also exit 1 when the plugin directory (the catalog that plugins are submitted to) would refuse a submission of the plugin on a check this c…（可选值：directory） |

## 选项：tag [path]

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--push` |  | Push the tag to --remote after creating it |
| `--dry-run` |  | Print what would be tagged without creating it |
| `-f, --force` |  | Skip the dirty-working-tree and tag-already-exists checks |
| `-m, --message <msg>` |  | Tag annotation message (use %s for the version) |
| `--remote <name>` |  | Remote to push to with --push |

## 选项：list

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--json` |  | Output as JSON |
| `--available` |  | Include available plugins from marketplaces (requires --json) |
| `--data-size [plugin]` |  | Measure each installed plugin's saved data directory, or only the named plugin's (requires --json) |
| `--json` |  | Output as JSON |

## 选项：eval [target]

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--case <glob>` |  | Filter cases by name glob |
| `--tag <tag...>` |  | Filter cases by tag (repeatable) |
| `--runs <n>` |  | Override per-case runs (default: case.runs ?? 3) |
| `-j, --concurrency <n>` |  | Run up to <n> agent runs at once (1-8; default 1). Each run is a full claude child on your own credential, so they share one rate limit; re… |
| `--model <model>` |  | Override model for all cases |
| `--judge-model <model>` |  | Override LLM-grader model (default: haiku) |
| `--max-cost-usd <usd>` |  | Optional hard cost ceiling; abort and report partial results if hit (exit 2). The ceiling is checked before each run launches, so overrun i… |
| `--output-dir <dir>` |  | Directory for aggregate-result.json (default: ./<eval dir>/results/<timestamp>/) |
| `--eval-dir <dir>` |  | Directory name (below the plugin) that holds the eval cases; results go to <plugin>/<dir>/results/ — for an installed-plugin target, ./<dir… |
| `--json [path]` |  | Print the full run result (prompts, graders, per-run scores) as JSON to stdout, or write it to this .json file |
| `--threshold <0..1>` |  | Exit 1 if any case score is below this threshold (default: 1.0) |
| `--allow-tools <tools...>` |  | Operator grant for gated tools (Bash, Write, Edit, WebFetch, mcp__*). Supports Tool(pattern:*) syntax |
| `--disallow-tools <tools...>` |  | Built-in tools to keep from Claude in every case, even if granted (e.g. Agent TaskStop) |
| `--scaffold` |  | Run each case's scaffold_script (runs author-supplied bash as you; off by default — only use on case files you authored) |
| `--no-scaffold` |  | Explicitly skip scaffold_script |
| `--trust-plugin` |  | Assert that you trust this plugin's code and eval suite, and skip the first-run trust prompt (for CI; like --dangerously-skip-permissions, … |
| `--ablation <mode>` |  | Run a no-plugin baseline arm and report the score delta (none \| with-without; default: with-without whenever a plugin resolves — by name, … |
| `--mocks <mode>` |  | Mock stand-ins for MCP servers, from <eval dir>/mocks/ (record \| off; default: record). record: a plugin server with no mock is NOT starte… |
| `--allow-real-servers` |  | With --mocks record: also start the plugin's REAL MCP server processes for servers that have no mock (they run as you, outside the OS sandb… |
| `--keep-temp` |  | Preserve scaffold dirs for debugging |
| `--verbose` |  | Log per-message trace events to the debug log (use --debug-file to read them) |
| `--report <path>` |  | Write the self-contained HTML report (scores, prompts, grader verdicts) to <path> instead of the results dir |
| `--publish-report` |  | Also require publishing the report to claude.ai (already the default when your account supports it); explains why if unavailable |
| `--no-publish` |  | Keep the HTML report local only; skip publishing it to claude.ai |

## 选项：init [name]

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--bare` |  | Write a blank template (prompt.md + graders/criteria.md) instead of running the interview |
| `-i, --interactive` |  | Run the authoring interview (already the default in a terminal); requires an interactive terminal |
| `--interview` | ✓ | Alias for --interactive |
| `--eval-dir <dir>` |  | Directory (below the current directory) to write cases into (default: experimental.evals from the plugin.json in the current directory, els… |

## 选项：add <source>

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--sparse <paths...>` |  | Limit checkout to specific directories via git sparse-checkout (for monorepos). Example: --sparse .claude-plugin plugins |
| `--scope <scope>` |  | Where to declare the marketplace: user (default), project, or local |
| `--claudeai` |  | Add the marketplace of this name that claude.ai hosts for you, by its listed name or its local name (see: claude plugin marketplace list) |
| `--from-link` | ✓ | For a program adding a marketplace from an install link: adds it as the install link does, then prints one JSON line, {"name": "<marketplac… |
| `--resolve-only` | ✓ | With --from-link (not with --sparse or --scope): adds nothing and prints one JSON line, {"existing": "<marketplace>"} naming the added mark… |
| `--json` |  | Print one machine-readable result line as the last line on stdout (same exit codes) |

## 选项：remove <name>

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--scope <scope>` |  | Remove the marketplace declaration from a specific settings scope: user, project, or local. Omit to remove it from every scope. |
| `--json` |  | Print one machine-readable result line as the last line on stdout (same exit codes) |
| `-s, --scope <scope>` |  | Configuration scope (local, user, or project) - if not specified, removes from whichever scope it exists in |

## 选项：update [name]

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--json` |  | With a marketplace name: print one machine-readable result line as the last line on stdout (same exit codes) |

## 选项：install <plugin>

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `-s, --scope <scope>` |  | Installation scope: user, project, or local |
| `--config <key=value>` |  | Set a userConfig option declared in the plugin's manifest, or a bundled .mcpb server's own user_config field as <server>.<key>=<value> (a b… |
| `-y, --yes` |  | Accept the displayed marketplace-declared command without the confirmation prompt — a plugin installed by running a command, or one whose a… |
| `--accept-command <sha256>` |  | Accept the marketplace-declared command (a command-source install, or the headersHelper that fetches the archive) whose sha256 a previous -… |

## 选项：uninstall <plugin>

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `-s, --scope <scope>` |  | Uninstall from scope: user, project, or local |
| `--keep-data` |  | Preserve the plugin's persistent data directory (~/.claude/plugins/data/{id}/) |
| `--prune` |  | Also remove auto-installed dependencies that are no longer needed (requires -y in non-interactive contexts) |
| `-y, --yes` |  | Skip the --prune confirmation prompt (required when stdin or stdout is not a TTY) |
| `--json` |  | Print one machine-readable result line on stdout instead of the human message (same exit codes; not with --prune) |

## 选项：prune

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `-s, --scope <scope>` |  | Prune at scope: user, project, or local |
| `--dry-run` |  | List what would be removed without removing |
| `-y, --yes` |  | Skip the confirmation prompt (required when stdin or stdout is not a TTY) |

## 选项：enable <plugin>

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `-s, --scope <scope>` |  | Installation scope: ${…} (default: auto-detect) |
| `--json` |  | Print one machine-readable result line on stdout instead of the human message (same exit codes) |

## 选项：disable [plugin]

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `-a, --all` |  | Disable all enabled plugins |
| `-s, --scope <scope>` |  | Installation scope: ${…} (default: auto-detect) |
| `--json` |  | Print one machine-readable result line on stdout instead of the human message (same exit codes) |

## 选项：update <plugin>

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `-s, --scope <scope>` |  | Installation scope: ${…} (default: auto-detect) |
| `-y, --yes` |  | Accept the displayed marketplace-declared command without the confirmation prompt — a changed install command, or the headersHelper command… |
| `--accept-command <sha256>` |  | Accept the marketplace-declared command (a command-source install, or the headersHelper that fetches the archive) whose sha256 a previous -… |
| `--json` |  | Print one machine-readable result line on stdout instead of the human message (same exit codes; a marketplace-declared command is still sho… |

## 选项：configure <plugin>

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--json` |  | Output as JSON |
| `--values-stdin` |  | Read option values from stdin as a JSON object of single-line strings; options left out keep their values |

## 选项：add <name> <commandOrUrl> [args...]

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `-s, --scope <scope>` |  | Configuration scope (local, user, or project) |
| `-t, --transport <transport>` |  | Transport type (stdio, sse, http). Defaults to stdio if not specified. |
| `-e, --env <env...>` |  | Set environment variables (e.g. -e KEY=value) |
| `-H, --header <header...>` |  | Set headers for HTTP/SSE servers (e.g. -H "X-Api-Key: abc123" -H "X-Custom: value") |
| `--client-id <clientId>` |  | OAuth client ID for HTTP/SSE servers |
| `--client-secret` |  | Prompt for OAuth client secret (or set MCP_CLIENT_SECRET env var) |
| `--callback-port <port>` |  | Fixed port for OAuth callback (for servers requiring pre-registered redirect URIs) |
| `--xaa` | ✓ | Enable XAA (SEP-990) for this server. Requires 'claude mcp xaa setup' first. Also requires --client-id and --client-secret (for the MCP ser… |

## 选项：setup

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--issuer <url>` |  | IdP issuer URL (OIDC discovery) |
| `--client-id <id>` |  | Claude Code's client_id at the IdP |
| `--client-secret` |  | Read IdP client secret from MCP_XAA_IDP_CLIENT_SECRET env var |
| `--callback-port <port>` |  | Fixed loopback callback port (only if IdP does not honor RFC 8252 port-any matching) |

## 选项：serve

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `-d, --debug` |  | Enable debug mode |
| `--verbose` |  | Override verbose mode setting from config |

## 选项：login <name>

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `--no-browser` |  | Print the authorization URL instead of opening a browser (for SSH/headless sessions — paste the redirect URL back when prompted) |

## 选项：add-json <name> <json>

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `-s, --scope <scope>` |  | Configuration scope (local, user, or project) |
| `--client-secret` |  | Prompt for OAuth client secret (or set MCP_CLIENT_SECRET env var) |

## 选项：add-from-claude-desktop

| 选项 | 隐藏 | 说明 |
|---|---|---|
| `-s, --scope <scope>` |  | Configuration scope (local, user, or project) |

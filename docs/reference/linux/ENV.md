# 环境变量（linux）

代码中以 `process.env.X` 读取的环境变量共 418 个，下表列出读取位置。

## CLAUDE_CODE_*（93）

| 变量 | 读取位置 |
|---|---|
| `CLAUDE_CODE_ACCOUNT_UUID` | [context/create-chrome-context.js](../../../src/linux/context/create-chrome-context.js) |
| `CLAUDE_CODE_ACTION` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js) |
| `CLAUDE_CODE_AGENT` | [cli/session-setup.js](../../../src/linux/cli/session-setup.js) |
| `CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT` | [shared/chunk-8b876f81.js](../../../src/linux/shared/chunk-8b876f81.js) |
| `CLAUDE_CODE_API_BASE_URL` | [context/team-memory-sync.js](../../../src/linux/context/team-memory-sync.js) |
| `CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR` | [telemetry/bridge-resume-respects-local-owner.js](../../../src/linux/telemetry/bridge-resume-respects-local-owner.js) |
| `CLAUDE_CODE_ATTRIBUTION_HEADER` | [auth/claude-desktop-3p.js](../../../src/linux/auth/claude-desktop-3p.js) |
| `CLAUDE_CODE_BLOCKING_LIMIT_OVERRIDE` | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `CLAUDE_CODE_BRIDGE_MCP_CARRIER` | [remote/self-hosted.js](../../../src/linux/remote/self-hosted.js) |
| `CLAUDE_CODE_BRIDGE_SESSION_ID` | [remote/chunk-8734517b.js](../../../src/linux/remote/chunk-8734517b.js) |
| `CLAUDE_CODE_BYOC_ENABLE_DATADOG` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `CLAUDE_CODE_CLASSIFIER_SUMMARY` | [context/classifier-disabled-surfaces.js](../../../src/linux/context/classifier-disabled-surfaces.js) |
| `CLAUDE_CODE_CONTAINER_ID` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js), [api/anthropic-client.js](../../../src/linux/api/anthropic-client.js) |
| `CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS` | [shared/chunk-6cafd643.js](../../../src/linux/shared/chunk-6cafd643.js) |
| `CLAUDE_CODE_COORDINATOR_MODE` | [git/coordinator-mode-switched.js](../../../src/linux/git/coordinator-mode-switched.js), [agents/chunk-f334f2d3.js](../../../src/linux/agents/chunk-f334f2d3.js) |
| `CLAUDE_CODE_CUSTOM_OAUTH_URL` | [auth/oauth-2025-04-20.js](../../../src/linux/auth/oauth-2025-04-20.js) |
| `CLAUDE_CODE_DAEMON_COLD_START` | [telemetry/fleet-past-sessions.js](../../../src/linux/telemetry/fleet-past-sessions.js) |
| `CLAUDE_CODE_DISABLE_AUTO_MEMORY` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js) |
| `CLAUDE_CODE_DISABLE_CLAUDE_MDS` | [cli/session-setup.js](../../../src/linux/cli/session-setup.js) |
| `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` | [artifacts/cowritten-artifact-html.js](../../../src/linux/artifacts/cowritten-artifact-html.js), [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `CLAUDE_CODE_DISABLE_PRECOMPACT_SKIP` | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `CLAUDE_CODE_DONT_INHERIT_ENV` | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `CLAUDE_CODE_ENABLE_APPEND_SUBAGENT_PROMPT` | [agents/agent-summary-skipped.js](../../../src/linux/agents/agent-summary-skipped.js) |
| `CLAUDE_CODE_ENABLE_AWAY_SUMMARY` | [context/ccr-recap-generate.js](../../../src/linux/context/ccr-recap-generate.js) |
| `CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION` | [core/query-loop.js](../../../src/linux/core/query-loop.js) |
| `CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER` | [git/agent-proxy-standalone.js](../../../src/linux/git/agent-proxy-standalone.js) |
| `CLAUDE_CODE_ENABLE_TELEMETRY` | [telemetry/agent-proxy-init.js](../../../src/linux/telemetry/agent-proxy-init.js), [telemetry/big-query-export-interval-ms.js](../../../src/linux/telemetry/big-query-export-interval-ms.js), [context/account-memory-text-not-identified.js](../../../src/linux/context/account-memory-text-not-identified.js) 等 4 处 |
| `CLAUDE_CODE_ENHANCED_TELEMETRY_BETA` | [agents/api-system.js](../../../src/linux/agents/api-system.js) |
| `CLAUDE_CODE_ENTRYPOINT` | [auth/claude-desktop-3p.js](../../../src/linux/auth/claude-desktop-3p.js), [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js), [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) 等 7 处 |
| `CLAUDE_CODE_ENVIRONMENT_KIND` | [remote/chunk-95151620.js](../../../src/linux/remote/chunk-95151620.js), [cli/headless-print-mode.js](../../../src/linux/cli/headless-print-mode.js), [remote/turn-handoff-flag-wait.js](../../../src/linux/remote/turn-handoff-flag-wait.js) 等 6 处 |
| `CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION` | [remote/turn-handoff-flag-wait.js](../../../src/linux/remote/turn-handoff-flag-wait.js) |
| `CLAUDE_CODE_EXTRA_BODY` | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `CLAUDE_CODE_EXTRA_METADATA` | [core/system-prompt-blocks.js](../../../src/linux/core/system-prompt-blocks.js) |
| `CLAUDE_CODE_FORCE_WINDOWS_CREDMAN` | [auth/permission-error.js](../../../src/linux/auth/permission-error.js) |
| `CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR` | [auth/descriptor-direct.js](../../../src/linux/auth/descriptor-direct.js) |
| `CLAUDE_CODE_GLOB_HIDDEN` | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `CLAUDE_CODE_GLOB_NO_IGNORE` | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `CLAUDE_CODE_HOST_AUTH_ENV_VAR` | [settings/non-string-value.js](../../../src/linux/settings/non-string-value.js) |
| `CLAUDE_CODE_HOST_AUTH_REFRESH_TIMEOUT_MS` | [cli/headless-print-mode.js](../../../src/linux/cli/headless-print-mode.js) |
| `CLAUDE_CODE_HOST_PLATFORM` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js), [shared/environment.js](../../../src/linux/shared/environment.js) |
| `CLAUDE_CODE_HOVER_REST` | [cli.js](../../../src/linux/cli.js) |
| `CLAUDE_CODE_IDLE_THRESHOLD_MINUTES` | [ui/repl-screen.js](../../../src/linux/ui/repl-screen.js) |
| `CLAUDE_CODE_IDLE_TOKEN_THRESHOLD` | [ui/repl-screen.js](../../../src/linux/ui/repl-screen.js) |
| `CLAUDE_CODE_JIT_POLICY_AFTER_STARTUP` | [cli.js](../../../src/linux/cli.js) |
| `CLAUDE_CODE_MAX_OUTPUT_TOKENS` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js) |
| `CLAUDE_CODE_MAX_TURNS` | [models/claude-3-5-sonnet.js](../../../src/linux/models/claude-3-5-sonnet.js) |
| `CLAUDE_CODE_MCP_ALLOWLIST_ENV` | [git/ssh-placeholder.js](../../../src/linux/git/ssh-placeholder.js) |
| `CLAUDE_CODE_MESSAGING_SOCKET` | [artifacts/foreign-owner.js](../../../src/linux/artifacts/foreign-owner.js) |
| `CLAUDE_CODE_OAUTH_CLIENT_ID` | [auth/auth-login.js](../../../src/linux/auth/auth-login.js), [auth/oauth-2025-04-20.js](../../../src/linux/auth/oauth-2025-04-20.js) |
| `CLAUDE_CODE_OAUTH_REFRESH_TOKEN` | [auth/auth-login.js](../../../src/linux/auth/auth-login.js) |
| `CLAUDE_CODE_OAUTH_SCOPES` | [auth/auth-login.js](../../../src/linux/auth/auth-login.js) |
| `CLAUDE_CODE_OAUTH_TOKEN` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js), [auth/oauth-storage-warning.js](../../../src/linux/auth/oauth-storage-warning.js), [telemetry/bg-daemon-spawn-reinstall-wait.js](../../../src/linux/telemetry/bg-daemon-spawn-reinstall-wait.js) 等 5 处 |
| `CLAUDE_CODE_ORGANIZATION_UUID` | [shared/sk-ant-sid.js](../../../src/linux/shared/sk-ant-sid.js) |
| `CLAUDE_CODE_OTEL_HEADERS_HELPER_DEBOUNCE_MS` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js) |
| `CLAUDE_CODE_PACKAGE_MANAGER_AUTO_UPDATE` | [computer-use/native-auto-updater-skipped-unverified-release.js](../../../src/linux/computer-use/native-auto-updater-skipped-unverified-release.js) |
| `CLAUDE_CODE_PLUGIN_DIRS` | [cli.js](../../../src/linux/cli.js) |
| `CLAUDE_CODE_PROJECT_DIR_NAME` | [models/claude-3-5-sonnet.js](../../../src/linux/models/claude-3-5-sonnet.js) |
| `CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST` | [settings/non-string-value.js](../../../src/linux/settings/non-string-value.js) |
| `CLAUDE_CODE_RATE_LIMIT_TIER` | [auth/descriptor-direct.js](../../../src/linux/auth/descriptor-direct.js), [git/ssh-placeholder.js](../../../src/linux/git/ssh-placeholder.js) |
| `CLAUDE_CODE_REFUSAL_FALLBACK_CATCH_ALL` | [api/anthropic-client.js](../../../src/linux/api/anthropic-client.js) |
| `CLAUDE_CODE_REMOTE` | [telemetry/agent-proxy-init.js](../../../src/linux/telemetry/agent-proxy-init.js), [remote/chunk-95151620.js](../../../src/linux/remote/chunk-95151620.js), [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js) 等 7 处 |
| `CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js), [auth/guard-runner-review-tokens.js](../../../src/linux/auth/guard-runner-review-tokens.js), [remote/self-hosted.js](../../../src/linux/remote/self-hosted.js) |
| `CLAUDE_CODE_REMOTE_MEMORY_DIR` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js), [context/org-memory-writes-setting-changed.js](../../../src/linux/context/org-memory-writes-setting-changed.js) |
| `CLAUDE_CODE_REMOTE_SESSION_ID` | [cli/session-setup.js](../../../src/linux/cli/session-setup.js), [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js), [api/anthropic-client.js](../../../src/linux/api/anthropic-client.js) 等 6 处 |
| `CLAUDE_CODE_REMOTE_SESSION_ORIGIN` | [auth/guard-runner-review-tokens.js](../../../src/linux/auth/guard-runner-review-tokens.js), [cli.js](../../../src/linux/cli.js) |
| `CLAUDE_CODE_RESTRICTED` | [models/claude-3-5-sonnet.js](../../../src/linux/models/claude-3-5-sonnet.js), [cli.js](../../../src/linux/cli.js) |
| `CLAUDE_CODE_SAFE_MODE` | [cli/session-setup.js](../../../src/linux/cli/session-setup.js), [models/claude-3-5-sonnet.js](../../../src/linux/models/claude-3-5-sonnet.js) |
| `CLAUDE_CODE_SCRIPT_CAPS` | [git/ssh-placeholder.js](../../../src/linux/git/ssh-placeholder.js) |
| `CLAUDE_CODE_SESSION_ACCESS_TOKEN` | [shared/sk-ant-sid.js](../../../src/linux/shared/sk-ant-sid.js), [cli/main.js](../../../src/linux/cli/main.js), [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `CLAUDE_CODE_SESSION_ID` | [hooks/conversation-reset.js](../../../src/linux/hooks/conversation-reset.js), [remote/self-hosted.js](../../../src/linux/remote/self-hosted.js) |
| `CLAUDE_CODE_SESSION_KIND` | [models/claude-3-5-sonnet.js](../../../src/linux/models/claude-3-5-sonnet.js), [fs/chunk-86a4e44e.js](../../../src/linux/fs/chunk-86a4e44e.js), [cli.js](../../../src/linux/cli.js) |
| `CLAUDE_CODE_SHELL` | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `CLAUDE_CODE_SIMPLE` | [cli/session-setup.js](../../../src/linux/cli/session-setup.js), [models/claude-3-5-sonnet.js](../../../src/linux/models/claude-3-5-sonnet.js), [cli.js](../../../src/linux/cli.js) |
| `CLAUDE_CODE_SKIP_PROMPT_HISTORY` | [context/team-memory-sync.js](../../../src/linux/context/team-memory-sync.js) |
| `CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS` | [fs/gitlab-runner-authentication-token.js](../../../src/linux/fs/gitlab-runner-authentication-token.js) |
| `CLAUDE_CODE_SPAWNED_BY_SERVER` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `CLAUDE_CODE_SPAWN_TIMESTAMP_MS` | [mcp/init-function-end.js](../../../src/linux/mcp/init-function-end.js) |
| `CLAUDE_CODE_STARTUP_FAILURE_RESULTS` | [cli/stream-json.js](../../../src/linux/cli/stream-json.js) |
| `CLAUDE_CODE_SUBPROCESS_ENV_SCRUB` | [settings/settings-auto-mode-rules-untrusted-source-ignored.js](../../../src/linux/settings/settings-auto-mode-rules-untrusted-source-ignored.js), [git/ssh-placeholder.js](../../../src/linux/git/ssh-placeholder.js) |
| `CLAUDE_CODE_SUBSCRIPTION_TYPE` | [auth/descriptor-direct.js](../../../src/linux/auth/descriptor-direct.js), [git/ssh-placeholder.js](../../../src/linux/git/ssh-placeholder.js) |
| `CLAUDE_CODE_SUPERVISED` | [models/claude-3-5-sonnet.js](../../../src/linux/models/claude-3-5-sonnet.js) |
| `CLAUDE_CODE_TAGS` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js) |
| `CLAUDE_CODE_TEE_SDK_STDOUT` | [remote/turn-handoff-flag-wait.js](../../../src/linux/remote/turn-handoff-flag-wait.js) |
| `CLAUDE_CODE_TEST_ALLOW_REAL_NETWORK` | [mcp/allowed-warning.js](../../../src/linux/mcp/allowed-warning.js) |
| `CLAUDE_CODE_TMPDIR` | [fs/chunk-0b1060fd.js](../../../src/linux/fs/chunk-0b1060fd.js) |
| `CLAUDE_CODE_USE_ANTHROPIC_AWS` | [artifacts/cowritten-artifact-html.js](../../../src/linux/artifacts/cowritten-artifact-html.js) |
| `CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD` | [artifacts/cowritten-artifact-html.js](../../../src/linux/artifacts/cowritten-artifact-html.js) |
| `CLAUDE_CODE_USE_BEDROCK` | [artifacts/cowritten-artifact-html.js](../../../src/linux/artifacts/cowritten-artifact-html.js) |
| `CLAUDE_CODE_USE_FOUNDRY` | [artifacts/cowritten-artifact-html.js](../../../src/linux/artifacts/cowritten-artifact-html.js) |
| `CLAUDE_CODE_USE_MANTLE` | [artifacts/cowritten-artifact-html.js](../../../src/linux/artifacts/cowritten-artifact-html.js) |
| `CLAUDE_CODE_USE_POWERSHELL_TOOL` | [plugins/advertised-command-is-offered.js](../../../src/linux/plugins/advertised-command-is-offered.js) |
| `CLAUDE_CODE_USE_VERTEX` | [artifacts/cowritten-artifact-html.js](../../../src/linux/artifacts/cowritten-artifact-html.js) |
| `CLAUDE_CODE_WORKER_EPOCH` | [cli/headless-print-mode.js](../../../src/linux/cli/headless-print-mode.js) |

## CLAUDE_*（51）

| 变量 | 读取位置 |
|---|---|
| `CLAUDE_AFTER_LAST_COMPACT` | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `CLAUDE_AGENTS_SELECT` | [ui/bg-agent-action.js](../../../src/linux/ui/bg-agent-action.js), [cli/main.js](../../../src/linux/cli/main.js), [ui/repl-screen.js](../../../src/linux/ui/repl-screen.js) |
| `CLAUDE_AGENT_SDK_CLIENT_APP` | [api/anthropic-client.js](../../../src/linux/api/anthropic-client.js) |
| `CLAUDE_AGENT_SDK_VERSION` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js), [telemetry/session-title-generated.js](../../../src/linux/telemetry/session-title-generated.js), [mcp/request-user-dialog-response-ignored.js](../../../src/linux/mcp/request-user-dialog-response-ignored.js) |
| `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR` | [models/claude-3-5-sonnet.js](../../../src/linux/models/claude-3-5-sonnet.js) |
| `CLAUDE_BG_AUTH_SNAPSHOT_PATH` | [auth/descriptor-direct.js](../../../src/linux/auth/descriptor-direct.js) |
| `CLAUDE_BG_BACKEND` | [auth/is-desktop-entrypoint-exempted.js](../../../src/linux/auth/is-desktop-entrypoint-exempted.js) |
| `CLAUDE_BG_CLAIM_AUTH` | [telemetry/bg-adopt-token-lost-respawn.js](../../../src/linux/telemetry/bg-adopt-token-lost-respawn.js) |
| `CLAUDE_BG_PTY_AUTH` | [shell/run-pty-host.js](../../../src/linux/shell/run-pty-host.js) |
| `CLAUDE_BG_RENDEZVOUS_SOCK` | [agents/attacher-caps.js](../../../src/linux/agents/attacher-caps.js) |
| `CLAUDE_BG_RV_AUTH` | [agents/attacher-caps.js](../../../src/linux/agents/attacher-caps.js) |
| `CLAUDE_BG_SOCKET_TOKENS_PATH` | [shell/run-pty-host.js](../../../src/linux/shell/run-pty-host.js), [telemetry/bg-adopt-token-lost-respawn.js](../../../src/linux/telemetry/bg-adopt-token-lost-respawn.js), [agents/attacher-caps.js](../../../src/linux/agents/attacher-caps.js) |
| `CLAUDE_BG_SOURCE` | [ui/repl-screen.js](../../../src/linux/ui/repl-screen.js) |
| `CLAUDE_BG_TCC_DISCLAIMED` | [computer-use/chunk-20fbb9ad.js](../../../src/linux/computer-use/chunk-20fbb9ad.js) |
| `CLAUDE_BRIDGE_REATTACH_GROUPING` | [remote/init-repl-bridge.js](../../../src/linux/remote/init-repl-bridge.js) |
| `CLAUDE_BRIDGE_REATTACH_NO_BACKFILL` | [remote/init-repl-bridge.js](../../../src/linux/remote/init-repl-bridge.js) |
| `CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY` | [remote/init-repl-bridge.js](../../../src/linux/remote/init-repl-bridge.js) |
| `CLAUDE_BRIDGE_REATTACH_OWNER_ACCT` | [remote/init-repl-bridge.js](../../../src/linux/remote/init-repl-bridge.js) |
| `CLAUDE_BRIDGE_REATTACH_OWNER_ORG` | [remote/init-repl-bridge.js](../../../src/linux/remote/init-repl-bridge.js) |
| `CLAUDE_BRIDGE_REATTACH_SEQ` | [remote/init-repl-bridge.js](../../../src/linux/remote/init-repl-bridge.js) |
| `CLAUDE_BRIDGE_REATTACH_SESSION` | [remote/init-repl-bridge.js](../../../src/linux/remote/init-repl-bridge.js) |
| `CLAUDE_BYTE_STREAM_IDLE_TIMEOUT_MS` | [api/anthropic-client.js](../../../src/linux/api/anthropic-client.js) |
| `CLAUDE_CHROME_PERMISSION_MODE` | [context/create-chrome-context.js](../../../src/linux/context/create-chrome-context.js) |
| `CLAUDE_CONFIG_DIR` | [tasks/daemon-main.js](../../../src/linux/tasks/daemon-main.js), [telemetry/bg-daemon-spawn-reinstall-wait.js](../../../src/linux/telemetry/bg-daemon-spawn-reinstall-wait.js), [shared/environment.js](../../../src/linux/shared/environment.js) 等 11 处 |
| `CLAUDE_COWORK_MEMORY_EXTRA_GUIDELINES` | [context/org-memory-writes-setting-changed.js](../../../src/linux/context/org-memory-writes-setting-changed.js) |
| `CLAUDE_COWORK_MEMORY_INDEX_CONTENT` | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `CLAUDE_FORCE_DISPLAY_SURVEY` | [ui/repl-screen.js](../../../src/linux/ui/repl-screen.js) |
| `CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME` | [agents/initialize-session-team.js](../../../src/linux/agents/initialize-session-team.js) |
| `CLAUDE_INTERNAL_FC_OVERRIDES` | [cli.js](../../../src/linux/cli.js) |
| `CLAUDE_JOB_DIR` | [fs/backed-up.js](../../../src/linux/fs/backed-up.js), [context/org-memory-writes-setting-changed.js](../../../src/linux/context/org-memory-writes-setting-changed.js), [ui/repl-screen.js](../../../src/linux/ui/repl-screen.js) |
| `CLAUDE_LOCAL_OAUTH_API_BASE` | [auth/oauth-2025-04-20.js](../../../src/linux/auth/oauth-2025-04-20.js) |
| `CLAUDE_LOCAL_OAUTH_APPS_BASE` | [auth/oauth-2025-04-20.js](../../../src/linux/auth/oauth-2025-04-20.js) |
| `CLAUDE_LOCAL_OAUTH_CONSOLE_BASE` | [auth/oauth-2025-04-20.js](../../../src/linux/auth/oauth-2025-04-20.js) |
| `CLAUDE_MEMORY_STORES` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js), [context/org-memory-writes-setting-changed.js](../../../src/linux/context/org-memory-writes-setting-changed.js) |
| `CLAUDE_PTY_HEARTBEAT_MS` | [shell/run-pty-host.js](../../../src/linux/shell/run-pty-host.js) |
| `CLAUDE_PTY_HOST_EXEC` | [shell/run-pty-host.js](../../../src/linux/shell/run-pty-host.js) |
| `CLAUDE_PTY_ORPHAN_CHECK_MS` | [shell/run-pty-host.js](../../../src/linux/shell/run-pty-host.js) |
| `CLAUDE_PTY_RECORD` | [shell/run-pty-host.js](../../../src/linux/shell/run-pty-host.js) |
| `CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX` | [remote/bridge-main.js](../../../src/linux/remote/bridge-main.js), [cli/session-setup.js](../../../src/linux/cli/session-setup.js), [shared/remote-control.js](../../../src/linux/shared/remote-control.js) |
| `CLAUDE_RUNNER_ACTIVITY_FD` | [remote/turn-handoff-flag-wait.js](../../../src/linux/remote/turn-handoff-flag-wait.js) |
| `CLAUDE_RUNNER_SKIP_GIT_VERIFY` | [git/anthropic-version.js](../../../src/linux/git/anthropic-version.js) |
| `CLAUDE_RUNNER_USE_GIT_PROXY` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `CLAUDE_SECURESTORAGE_CONFIG_DIR` | [agents/spawn-teammate.js](../../../src/linux/agents/spawn-teammate.js), [auth/claude-code-user.js](../../../src/linux/auth/claude-code-user.js) |
| `CLAUDE_SESSION_INGRESS_TOKEN_FILE` | [shared/sk-ant-sid.js](../../../src/linux/shared/sk-ant-sid.js) |
| `CLAUDE_SLOW_FIRST_BYTE_MS` | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `CLAUDE_SSH_DAEMON_CHILD` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `CLAUDE_SSH_RUN_DIR` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `CLAUDE_STREAM_IDLE_TIMEOUT_MS` | [api/anthropic-client.js](../../../src/linux/api/anthropic-client.js) |
| `CLAUDE_TMPDIR` | [fs/chunk-0b1060fd.js](../../../src/linux/fs/chunk-0b1060fd.js), [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `CLAUDE_TRUSTED_DEVICE_TOKEN` | [remote/sessions-elevated-auth-disable-proactive-enrollment.js](../../../src/linux/remote/sessions-elevated-auth-disable-proactive-enrollment.js) |

## ANTHROPIC_*（22）

| 变量 | 读取位置 |
|---|---|
| `ANTHROPIC_API_KEY` | [auth/auth-login.js](../../../src/linux/auth/auth-login.js), [telemetry/bridge-resume-respects-local-owner.js](../../../src/linux/telemetry/bridge-resume-respects-local-owner.js), [cli/bg-claim-env-dropped.js](../../../src/linux/cli/bg-claim-env-dropped.js) |
| `ANTHROPIC_AUTH_TOKEN` | [telemetry/bridge-resume-respects-local-owner.js](../../../src/linux/telemetry/bridge-resume-respects-local-owner.js), [cli/bg-claim-env-dropped.js](../../../src/linux/cli/bg-claim-env-dropped.js) |
| `ANTHROPIC_AWS_API_KEY` | [api/anthropic-client.js](../../../src/linux/api/anthropic-client.js), [auth/start-gateway.js](../../../src/linux/auth/start-gateway.js) |
| `ANTHROPIC_AWS_BASE_URL` | [api/anthropic-client.js](../../../src/linux/api/anthropic-client.js) |
| `ANTHROPIC_BASE_URL` | [cli/session-setup.js](../../../src/linux/cli/session-setup.js), [context/team-memory-sync.js](../../../src/linux/context/team-memory-sync.js), [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js) 等 8 处 |
| `ANTHROPIC_BEDROCK_BASE_URL` | [api/anthropic-client.js](../../../src/linux/api/anthropic-client.js) |
| `ANTHROPIC_BEDROCK_MANTLE_BASE_URL` | [api/anthropic-client.js](../../../src/linux/api/anthropic-client.js) |
| `ANTHROPIC_BEDROCK_SERVICE_TIER` | [api/anthropic-client.js](../../../src/linux/api/anthropic-client.js) |
| `ANTHROPIC_CONFIG_DIR` | [plugins/plugin-eval-handler.js](../../../src/linux/plugins/plugin-eval-handler.js) |
| `ANTHROPIC_CUSTOM_HEADERS` | [api/anthropic-client.js](../../../src/linux/api/anthropic-client.js) |
| `ANTHROPIC_DEFAULT_HAIKU_MODEL` | [telemetry/mantle-default-fallback.js](../../../src/linux/telemetry/mantle-default-fallback.js) |
| `ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION` | [telemetry/mantle-default-fallback.js](../../../src/linux/telemetry/mantle-default-fallback.js) |
| `ANTHROPIC_DEFAULT_OPUS_MODEL_NAME` | [telemetry/mantle-default-fallback.js](../../../src/linux/telemetry/mantle-default-fallback.js) |
| `ANTHROPIC_FEDERATION_RULE_ID` | [auth/profile-explicit.js](../../../src/linux/auth/profile-explicit.js) |
| `ANTHROPIC_FOUNDRY_API_KEY` | [api/anthropic-client.js](../../../src/linux/api/anthropic-client.js) |
| `ANTHROPIC_MODEL` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js), [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js), [cli/main.js](../../../src/linux/cli/main.js) 等 4 处 |
| `ANTHROPIC_ORGANIZATION_ID` | [auth/profile-explicit.js](../../../src/linux/auth/profile-explicit.js) |
| `ANTHROPIC_PROFILE` | [plugins/plugin-eval-handler.js](../../../src/linux/plugins/plugin-eval-handler.js), [auth/profile-explicit.js](../../../src/linux/auth/profile-explicit.js) |
| `ANTHROPIC_SMALL_FAST_MODEL` | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `ANTHROPIC_UNIX_SOCKET` | [settings/non-string-value.js](../../../src/linux/settings/non-string-value.js), [telemetry/bridge-resume-respects-local-owner.js](../../../src/linux/telemetry/bridge-resume-respects-local-owner.js) |
| `ANTHROPIC_VERTEX_BASE_URL` | [api/anthropic-client.js](../../../src/linux/api/anthropic-client.js) |
| `ANTHROPIC_WORKSPACE_ID` | [auth/profile-explicit.js](../../../src/linux/auth/profile-explicit.js) |

## 云厂商 / OTEL（43）

| 变量 | 读取位置 |
|---|---|
| `AWS_ACCESS_KEY_ID` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `AWS_BEARER_TOKEN_BEDROCK` | [api/anthropic-client.js](../../../src/linux/api/anthropic-client.js) |
| `AWS_DEFAULT_REGION` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `AWS_EXECUTION_ENV` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `AWS_LAMBDA_BENCHMARK_MODE` | [vendor/aws-sdk/smithy-protocol.js](../../../src/linux/vendor/aws-sdk/smithy-protocol.js) |
| `AWS_LAMBDA_FUNCTION_NAME` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `AWS_LAMBDA_NODEJS_NO_GLOBAL_AWSLAMBDA` | [vendor/aws-sdk/smithy-protocol.js](../../../src/linux/vendor/aws-sdk/smithy-protocol.js) |
| `AWS_LOGIN_CACHE_DIRECTORY` | [vendor/aws-sdk/refresh-token.7583.js](../../../src/linux/vendor/aws-sdk/refresh-token.7583.js) |
| `AWS_PROFILE` | [ide/create-credential-chain.js](../../../src/linux/ide/create-credential-chain.js) |
| `AWS_REGION` | [vendor/aws-sdk/refresh-token.7583.js](../../../src/linux/vendor/aws-sdk/refresh-token.7583.js), [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `AWS_SECRET_ACCESS_KEY` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `AWS_SESSION_TOKEN` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `AZURE_ADDITIONALLY_ALLOWED_TENANTS` | [auth/get-bearer-token-provider.js](../../../src/linux/auth/get-bearer-token-provider.js) |
| `AZURE_AUTHORITY_HOST` | [auth/get-bearer-token-provider.js](../../../src/linux/auth/get-bearer-token-provider.js) |
| `AZURE_CLIENT_CERTIFICATE_PASSWORD` | [auth/get-bearer-token-provider.js](../../../src/linux/auth/get-bearer-token-provider.js) |
| `AZURE_CLIENT_CERTIFICATE_PATH` | [auth/get-bearer-token-provider.js](../../../src/linux/auth/get-bearer-token-provider.js) |
| `AZURE_CLIENT_ID` | [auth/get-bearer-token-provider.js](../../../src/linux/auth/get-bearer-token-provider.js) |
| `AZURE_CLIENT_SECRET` | [auth/get-bearer-token-provider.js](../../../src/linux/auth/get-bearer-token-provider.js) |
| `AZURE_CLIENT_SEND_CERTIFICATE_CHAIN` | [auth/get-bearer-token-provider.js](../../../src/linux/auth/get-bearer-token-provider.js) |
| `AZURE_FEDERATED_TOKEN_FILE` | [auth/get-bearer-token-provider.js](../../../src/linux/auth/get-bearer-token-provider.js) |
| `AZURE_FUNCTIONS_ENVIRONMENT` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `AZURE_IDENTITY_DISABLE_MULTITENANTAUTH` | [auth/get-bearer-token-provider.js](../../../src/linux/auth/get-bearer-token-provider.js) |
| `AZURE_PASSWORD` | [auth/get-bearer-token-provider.js](../../../src/linux/auth/get-bearer-token-provider.js) |
| `AZURE_POD_IDENTITY_AUTHORITY_HOST` | [auth/get-bearer-token-provider.js](../../../src/linux/auth/get-bearer-token-provider.js) |
| `AZURE_REGIONAL_AUTHORITY_NAME` | [auth/get-bearer-token-provider.js](../../../src/linux/auth/get-bearer-token-provider.js) |
| `AZURE_TENANT_ID` | [auth/get-bearer-token-provider.js](../../../src/linux/auth/get-bearer-token-provider.js) |
| `AZURE_TOKEN_CREDENTIALS` | [auth/get-bearer-token-provider.js](../../../src/linux/auth/get-bearer-token-provider.js) |
| `AZURE_USERNAME` | [auth/get-bearer-token-provider.js](../../../src/linux/auth/get-bearer-token-provider.js) |
| `CLOUD_ML_REGION` | [models/claude-3-5-sonnet.js](../../../src/linux/models/claude-3-5-sonnet.js) |
| `GCLOUD_PROJECT` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `GOOGLE_APPLICATION_CREDENTIALS` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `GOOGLE_CLOUD_PROJECT` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js), [shared/environment.js](../../../src/linux/shared/environment.js) |
| `GOOGLE_CLOUD_QUOTA_PROJECT` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `GOOGLE_CLOUD_WORKSTATIONS` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `OTEL_EXPORTER_OTLP_ENDPOINT` | [vendor/grpc/proto3-optional.js](../../../src/linux/vendor/grpc/proto3-optional.js) |
| `OTEL_EXPORTER_OTLP_HEADERS` | [vendor/grpc/proto3-optional.js](../../../src/linux/vendor/grpc/proto3-optional.js) |
| `OTEL_EXPORTER_OTLP_INSECURE` | [vendor/grpc/proto3-optional.js](../../../src/linux/vendor/grpc/proto3-optional.js) |
| `OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE` | [telemetry/big-query-export-interval-ms.js](../../../src/linux/telemetry/big-query-export-interval-ms.js) |
| `OTEL_EXPORTER_PROMETHEUS_HOST` | [vendor/opentelemetry/target-info.js](../../../src/linux/vendor/opentelemetry/target-info.js) |
| `OTEL_EXPORTER_PROMETHEUS_PORT` | [vendor/opentelemetry/target-info.js](../../../src/linux/vendor/opentelemetry/target-info.js) |
| `OTEL_LOGS_EXPORT_INTERVAL` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js) |
| `OTEL_LOG_RAW_API_BODIES` | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `OTEL_LOG_TOOL_CONTENT` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js) |

## 其他（209）

| 变量 | 读取位置 |
|---|---|
| `AI_AGENT` | [remote/claude-code-remote.js](../../../src/linux/remote/claude-code-remote.js) |
| `ALACRITTY_LOG` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `ALL_PROXY` | [git/rev-parse.js](../../../src/linux/git/rev-parse.js), [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `API_FORCE_IDLE_TIMEOUT` | [fs/ca-certs-load.js](../../../src/linux/fs/ca-certs-load.js) |
| `APPDATA` | [plugins/plugin-eval-handler.js](../../../src/linux/plugins/plugin-eval-handler.js), [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `APP_URL` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `AUTOMODE_DECISION_LOG` | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `BASH_MAX_OUTPUT_LENGTH` | [telemetry/binary-content-persisted.js](../../../src/linux/telemetry/binary-content-persisted.js) |
| `BETA_TRACING_ENDPOINT` | [agents/api-system.js](../../../src/linux/agents/api-system.js) |
| `BROWSER` | [agents/attacher-caps.js](../../../src/linux/agents/attacher-caps.js) |
| `BUF_BIGINT_DISABLE` | [shell/sandbox.js](../../../src/linux/shell/sandbox.js) |
| `BUGHUNTER_DEV_BUNDLE_B64` | [git/review-remote-precondition-failed.js](../../../src/linux/git/review-remote-precondition-failed.js) |
| `BUGHUNTER_FLEET_SIZE` | [context/classifier-disabled-surfaces.js](../../../src/linux/context/classifier-disabled-surfaces.js) |
| `BUILDKITE` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `C9_PID` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `C9_USER` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR` | [auth/guard-relay-token-descriptor.js](../../../src/linux/auth/guard-relay-token-descriptor.js), [cli.js](../../../src/linux/cli.js) |
| `CCR_ON_BRANCH_DEFAULT_GUARD` | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `CCR_SHR_SSE_HINTS` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `CCR_SPAWN_TIMESTAMP_MS` | [mcp/init-function-end.js](../../../src/linux/mcp/init-function-end.js), [mcp/spawn-to-exec-ms.js](../../../src/linux/mcp/spawn-to-exec-ms.js) |
| `CF_PAGES` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `CHOKIDAR_INTERVAL` | [fs/files-directories.js](../../../src/linux/fs/files-directories.js) |
| `CHOKIDAR_USEPOLLING` | [fs/files-directories.js](../../../src/linux/fs/files-directories.js) |
| `CIRCLECI` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `CLOUDSDK_CONFIG` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `CLOUD_RUN_JOB` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `CODER` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `CODER_WORKSPACE_NAME` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `CODESPACES` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `COMPUTER_USE_SWIFT_NODE_PATH` | [core/query-loop.js](../../../src/linux/core/query-loop.js) |
| `COMSPEC` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `COREPACK_ENABLE_AUTO_PIN` | [cli.js](../../../src/linux/cli.js) |
| `CURSOR_TRACE_ID` | [terminal/aria-preserve-whitespace.js](../../../src/linux/terminal/aria-preserve-whitespace.js), [shared/environment.js](../../../src/linux/shared/environment.js), [ui/scroll-speed-set.js](../../../src/linux/ui/scroll-speed-set.js) |
| `ConEmuANSI` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `ConEmuPID` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `ConEmuTask` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `DAYTONA_WS_ID` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `DEBUG` | [auth/get-bearer-token-provider.js](../../../src/linux/auth/get-bearer-token-provider.js), [fs/content-encoding.js](../../../src/linux/fs/content-encoding.js) |
| `DEBUG_AUTH` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `DENO_DEPLOYMENT_ID` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `DETECT_GCP_RETRIES` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `DEVPOD` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `DEVPOD_WORKSPACE_UID` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `DISABLE_AUTOUPDATER` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js) |
| `DISABLE_COMPACT` | [ui/unknown-model.js](../../../src/linux/ui/unknown-model.js), [context/hard-limit.js](../../../src/linux/context/hard-limit.js), [ui/tool-message-rendering.js](../../../src/linux/ui/tool-message-rendering.js) 等 7 处 |
| `DISABLE_ERROR_REPORTING` | [auth/allowed-taints-clean.js](../../../src/linux/auth/allowed-taints-clean.js), [artifacts/cowritten-artifact-html.js](../../../src/linux/artifacts/cowritten-artifact-html.js), [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `DISABLE_GROWTHBOOK` | [telemetry/bridge-resume-respects-local-owner.js](../../../src/linux/telemetry/bridge-resume-respects-local-owner.js), [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `DISABLE_INSTALLATION_CHECKS` | [telemetry/version-lock-acquired.js](../../../src/linux/telemetry/version-lock-acquired.js), [computer-use/native-auto-updater-skipped-unverified-release.js](../../../src/linux/computer-use/native-auto-updater-skipped-unverified-release.js), [ui/repl-screen.js](../../../src/linux/ui/repl-screen.js) 等 4 处 |
| `DISABLE_TELEMETRY` | [artifacts/cowritten-artifact-html.js](../../../src/linux/artifacts/cowritten-artifact-html.js), [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `DISPLAY` | [terminal/wl-copy.js](../../../src/linux/terminal/wl-copy.js) |
| `DO_NOT_TRACK` | [artifacts/cowritten-artifact-html.js](../../../src/linux/artifacts/cowritten-artifact-html.js), [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `DYNO` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `ENABLE_CLAUDEAI_MCP_SERVERS` | [mcp/claudeai-mcp-eligibility.js](../../../src/linux/mcp/claudeai-mcp-eligibility.js) |
| `ENABLE_ENHANCED_TELEMETRY_BETA` | [agents/api-system.js](../../../src/linux/agents/api-system.js) |
| `ENABLE_TOOL_SEARCH` | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js), [mcp/tool-search-unsupported-models.js](../../../src/linux/mcp/tool-search-unsupported-models.js) |
| `FLY_APP_NAME` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `FLY_MACHINE_ID` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `FORCE_CODE_TERMINAL` | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `FORCE_COLOR` | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `FUNCTION_NAME` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `FUNCTION_TARGET` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `GAE_MODULE_NAME` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `GAE_SERVICE` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `GCE_METADATA_HOST` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `GCE_METADATA_IP` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `GH_ENTERPRISE_TOKEN` | [context/team-memory-sync.js](../../../src/linux/context/team-memory-sync.js) |
| `GH_HOST` | [context/team-memory-sync.js](../../../src/linux/context/team-memory-sync.js) |
| `GH_TOKEN` | [context/team-memory-sync.js](../../../src/linux/context/team-memory-sync.js) |
| `GITHUB_ACTIONS` | [settings/settings-auto-mode-rules-untrusted-source-ignored.js](../../../src/linux/settings/settings-auto-mode-rules-untrusted-source-ignored.js), [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js), [shared/environment.js](../../../src/linux/shared/environment.js) |
| `GITHUB_ACTION_PATH` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js), [git/ssh-placeholder.js](../../../src/linux/git/ssh-placeholder.js) |
| `GITHUB_ENTERPRISE_TOKEN` | [context/team-memory-sync.js](../../../src/linux/context/team-memory-sync.js) |
| `GITHUB_ENV` | [git/ssh-placeholder.js](../../../src/linux/git/ssh-placeholder.js) |
| `GITHUB_EVENT_NAME` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js) |
| `GITHUB_EVENT_PATH` | [git/ssh-placeholder.js](../../../src/linux/git/ssh-placeholder.js) |
| `GITHUB_TOKEN` | [context/team-memory-sync.js](../../../src/linux/context/team-memory-sync.js) |
| `GITHUB_WORKSPACE` | [git/ssh-placeholder.js](../../../src/linux/git/ssh-placeholder.js) |
| `GITLAB_CI` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `GITPOD_WORKSPACE_ID` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `GIT_CONFIG_COUNT` | [fs/chunk-0b1060fd.js](../../../src/linux/fs/chunk-0b1060fd.js), [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `GIT_CONFIG_GLOBAL` | [git/agent-proxy-download-queue.js](../../../src/linux/git/agent-proxy-download-queue.js), [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `GIT_SSH_COMMAND` | [git/rev-parse.js](../../../src/linux/git/rev-parse.js), [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `GNOME_TERMINAL_SERVICE` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `GRACEFUL_FS_PLATFORM` | [fs/chunk-475c6783.js](../../../src/linux/fs/chunk-475c6783.js) |
| `GRPC_DEFAULT_SSL_ROOTS_FILE_PATH` | [vendor/grpc/proto3-optional.js](../../../src/linux/vendor/grpc/proto3-optional.js) |
| `GRPC_EXPERIMENTAL_ENABLE_OUTLIER_DETECTION` | [vendor/grpc/proto3-optional.js](../../../src/linux/vendor/grpc/proto3-optional.js) |
| `GRPC_NODE_TRACE` | [vendor/grpc/proto3-optional.js](../../../src/linux/vendor/grpc/proto3-optional.js) |
| `GRPC_NODE_USE_ALTERNATIVE_RESOLVER` | [vendor/grpc/proto3-optional.js](../../../src/linux/vendor/grpc/proto3-optional.js) |
| `GRPC_NODE_VERBOSITY` | [vendor/grpc/proto3-optional.js](../../../src/linux/vendor/grpc/proto3-optional.js) |
| `GRPC_SSL_CIPHER_SUITES` | [vendor/grpc/proto3-optional.js](../../../src/linux/vendor/grpc/proto3-optional.js) |
| `GRPC_TRACE` | [vendor/grpc/proto3-optional.js](../../../src/linux/vendor/grpc/proto3-optional.js) |
| `GRPC_VERBOSITY` | [vendor/grpc/proto3-optional.js](../../../src/linux/vendor/grpc/proto3-optional.js) |
| `HOME` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js), [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `HTTPS_PROXY` | [git/rev-parse.js](../../../src/linux/git/rev-parse.js), [auth/credential-source.js](../../../src/linux/auth/credential-source.js), [git/agent-proxy-download-queue.js](../../../src/linux/git/agent-proxy-download-queue.js) 等 5 处 |
| `HTTP_PROXY` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js), [shared/proxy-authorization.js](../../../src/linux/shared/proxy-authorization.js) |
| `INK_SCREEN_READER` | [terminal/ink-renderer.js](../../../src/linux/terminal/ink-renderer.js) |
| `INTELLIJ_TERMINAL_COMMAND_BLOCKS` | [terminal/aria-preserve-whitespace.js](../../../src/linux/terminal/aria-preserve-whitespace.js) |
| `INTELLIJ_TERMINAL_COMMAND_BLOCKS_REWORKED` | [terminal/aria-preserve-whitespace.js](../../../src/linux/terminal/aria-preserve-whitespace.js) |
| `IS_SANDBOX` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js), [auth/is-desktop-entrypoint-exempted.js](../../../src/linux/auth/is-desktop-entrypoint-exempted.js) |
| `JAVA_TOOL_OPTIONS` | [shell/sandbox.js](../../../src/linux/shell/sandbox.js) |
| `KITTY_WINDOW_ID` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `KONSOLE_VERSION` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `KUBERNETES_SERVICE_HOST` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `K_CONFIGURATION` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `K_SERVICE` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js), [shared/environment.js](../../../src/linux/shared/environment.js) |
| `LOCALAPPDATA` | [computer-use/native-auto-updater-skipped-unverified-release.js](../../../src/linux/computer-use/native-auto-updater-skipped-unverified-release.js), [fs/node-modules.js](../../../src/linux/fs/node-modules.js) |
| `MAX_THINKING_TOKENS` | [cli/session-setup.js](../../../src/linux/cli/session-setup.js), [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js) |
| `MCP_CLIENT_SECRET` | [auth/mcp-oauth-flow-success.ce3f.js](../../../src/linux/auth/mcp-oauth-flow-success.ce3f.js), [auth/mcp-oauth-flow-success.f313.js](../../../src/linux/auth/mcp-oauth-flow-success.f313.js) |
| `METADATA_SERVER_DETECTION` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `MSYSTEM` | [shared/environment.js](../../../src/linux/shared/environment.js), [git/utf-8.js](../../../src/linux/git/utf-8.js) |
| `NETLIFY` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `NODE_DEBUG` | [fs/chunk-475c6783.js](../../../src/linux/fs/chunk-475c6783.js), [mcp/allowed-warning.js](../../../src/linux/mcp/allowed-warning.js) |
| `NODE_EXTRA_CA_CERTS` | [shell/sandbox.js](../../../src/linux/shell/sandbox.js), [settings/config-read-failed.js](../../../src/linux/settings/config-read-failed.js) |
| `NODE_OPTIONS` | [models/claude-3-5-sonnet.js](../../../src/linux/models/claude-3-5-sonnet.js), [cli.js](../../../src/linux/cli.js) |
| `NO_PROXY` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js), [fs/content-encoding.js](../../../src/linux/fs/content-encoding.js), [shared/proxy-authorization.js](../../../src/linux/shared/proxy-authorization.js) 等 4 处 |
| `NoDefaultCurrentDirectoryInExePath` | [cli/main.js](../../../src/linux/cli/main.js), [mcp/request-user-dialog-response-ignored.js](../../../src/linux/mcp/request-user-dialog-response-ignored.js), [cli.js](../../../src/linux/cli.js) |
| `OSTYPE` | [context/tool-cgroup-exclude-classes.js](../../../src/linux/context/tool-cgroup-exclude-classes.js) |
| `P4PORT` | [fs/chunk-ce5d00cd.js](../../../src/linux/fs/chunk-ce5d00cd.js) |
| `PATH` | [shell/sandbox.js](../../../src/linux/shell/sandbox.js), [context/tool-cgroup-exclude-classes.js](../../../src/linux/context/tool-cgroup-exclude-classes.js), [shared/environment.js](../../../src/linux/shared/environment.js) 等 6 处 |
| `PATHEXT` | [shell/sandbox.js](../../../src/linux/shell/sandbox.js), [context/tool-cgroup-exclude-classes.js](../../../src/linux/context/tool-cgroup-exclude-classes.js), [shared/environment.js](../../../src/linux/shared/environment.js) |
| `PROJECT_DOMAIN` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `ProgramData` | [auth/get-bearer-token-provider.js](../../../src/linux/auth/get-bearer-token-provider.js), [shell/sandbox.js](../../../src/linux/shell/sandbox.js) |
| `ProgramFiles` | [auth/get-bearer-token-provider.js](../../../src/linux/auth/get-bearer-token-provider.js) |
| `RAILWAY_ENVIRONMENT_NAME` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `RAILWAY_SERVICE_NAME` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `RENDER` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `REPL_ID` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `REPL_SLUG` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `RUNNER_ENVIRONMENT` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js) |
| `RUNNER_OS` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js) |
| `SDK_NATIVE_BIN` | [mcp/request-user-dialog-response-ignored.js](../../../src/linux/mcp/request-user-dialog-response-ignored.js) |
| `SELF_HOSTED_RUNNER_BASE_DIR` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_CHECKOUT_HOOK_TIMEOUT_MS` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_CLIENT_LABEL` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_CONFIGURE_GIT` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_CONFINE_REPO_SETTINGS` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_DEBUG_DIR` | [remote/self-hosted-runner-orchestrator-main.js](../../../src/linux/remote/self-hosted-runner-orchestrator-main.js) |
| `SELF_HOSTED_RUNNER_DEBUG_TOKEN_DIR` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_DEFER_SHUTDOWN_MAX_MS` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_DIFF_FINDS_NESTED_REPOSITORY` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_DRAIN_GRACE_MS` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_DRAIN_MARKER_FILE` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_DRAIN_WAIT_MS` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js), [remote/self-hosted-runner-orchestrator-main.js](../../../src/linux/remote/self-hosted-runner-orchestrator-main.js) |
| `SELF_HOSTED_RUNNER_EXEC_PATH` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_HEALTH_PORT` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js), [remote/self-hosted-runner-orchestrator-main.js](../../../src/linux/remote/self-hosted-runner-orchestrator-main.js) |
| `SELF_HOSTED_RUNNER_HOOKS_DIR` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js), [remote/self-hosted-runner-orchestrator-main.js](../../../src/linux/remote/self-hosted-runner-orchestrator-main.js) |
| `SELF_HOSTED_RUNNER_HOST_CONFIG_DIR` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_HOST_CONFIG_SNAPSHOT` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_IDLE_SHUTDOWN_MS` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_LOCK_TO_ACCOUNT` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_LOG_FILE` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_MAX_LIFETIME_MS` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_POOL_SECRET` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js), [remote/self-hosted-runner-orchestrator-main.js](../../../src/linux/remote/self-hosted-runner-orchestrator-main.js) |
| `SELF_HOSTED_RUNNER_POST_SESSION_HOOK_TIMEOUT_MS` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_PUSH_OUTCOME_ON_RELEASE` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_REMOVE_SESSION_STATE` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_RETIRE_AT` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_SERVER_AUTO_MODE_LISTS` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_SESSION_IDLE_MS` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_SESSION_STOP_GRACE_MS` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_SIGKILL_TIMEOUT_MS` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_STARTUP_TIMEOUT_MS` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SELF_HOSTED_RUNNER_TRUST_WORKSPACE` | [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `SESSIONNAME` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `SESSION_INGRESS_URL` | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js), [remote/self-hosted.js](../../../src/linux/remote/self-hosted.js) |
| `SHELL` | [shared/environment.js](../../../src/linux/shared/environment.js), [shell/chunk-8eebd6c6.js](../../../src/linux/shell/chunk-8eebd6c6.js) |
| `SLASH_COMMAND_TOOL_CHAR_BUDGET` | [core/conversation-engine.js](../../../src/linux/core/conversation-engine.js) |
| `SPACE_CREATOR_USER_ID` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `SRT_DEBUG` | [fs/chunk-0b1060fd.js](../../../src/linux/fs/chunk-0b1060fd.js) |
| `SSH_CLIENT` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `SSH_CONNECTION` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `SSH_TTY` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `SSL_CERT_FILE` | [git/agent-proxy-download-queue.js](../../../src/linux/git/agent-proxy-download-queue.js) |
| `STY` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `SWE_BENCH_INSTANCE_ID` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js) |
| `SWE_BENCH_RUN_ID` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js) |
| `SWE_BENCH_TASK_ID` | [settings/global-config-and-gates.js](../../../src/linux/settings/global-config-and-gates.js) |
| `SystemRoot` | [shell/sandbox.js](../../../src/linux/shell/sandbox.js) |
| `TERM` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `TERMINAL_EMULATOR` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `TERMINATOR_UUID` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `TERM_PROGRAM` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `TEST_GRACEFUL_FS_GLOBAL_PATCH` | [fs/chunk-475c6783.js](../../../src/linux/fs/chunk-475c6783.js) |
| `TILIX_ID` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `TMUX` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `USER` | [auth/claude-code-user.js](../../../src/linux/auth/claude-code-user.js) |
| `VERCEL` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `VSCODE_GIT_ASKPASS_MAIN` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `VTE_VERSION` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `VisualStudioVersion` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `WAYLAND_DISPLAY` | [terminal/wl-copy.js](../../../src/linux/terminal/wl-copy.js) |
| `WEBSITE_SITE_NAME` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `WEBSITE_SKU` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `WSL_DISTRO_NAME` | [shared/environment.js](../../../src/linux/shared/environment.js), [fs/chunk-9b7a3f1c.js](../../../src/linux/fs/chunk-9b7a3f1c.js) |
| `WT_SESSION` | [shared/environment.js](../../../src/linux/shared/environment.js), [telemetry/render-glyph-cardinality.js](../../../src/linux/telemetry/render-glyph-cardinality.js), [terminal/ink-renderer.js](../../../src/linux/terminal/ink-renderer.js) |
| `XDG_CONFIG_HOME` | [plugins/plugin-eval-handler.js](../../../src/linux/plugins/plugin-eval-handler.js), [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `XDG_RUNTIME_DIR` | [plugins/plugin-eval-handler.js](../../../src/linux/plugins/plugin-eval-handler.js), [ide/create-lsp-client.js](../../../src/linux/ide/create-lsp-client.js) |
| `XTERM_VERSION` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `ZELLIJ` | [terminal/aria-preserve-whitespace.js](../../../src/linux/terminal/aria-preserve-whitespace.js), [ui/repl-screen.js](../../../src/linux/ui/repl-screen.js), [terminal/ink-renderer.js](../../../src/linux/terminal/ink-renderer.js) 等 4 处 |
| `__CFBundleIdentifier` | [shared/environment.js](../../../src/linux/shared/environment.js) |
| `all_proxy` | [git/rev-parse.js](../../../src/linux/git/rev-parse.js), [remote/self-hosted-runner-main.js](../../../src/linux/remote/self-hosted-runner-main.js) |
| `gcloud_project` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `google_application_credentials` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `google_cloud_project` | [auth/credential-source.js](../../../src/linux/auth/credential-source.js) |
| `grpc_proxy` | [vendor/grpc/proto3-optional.js](../../../src/linux/vendor/grpc/proto3-optional.js) |
| `http_proxy` | [vendor/grpc/proto3-optional.js](../../../src/linux/vendor/grpc/proto3-optional.js), [auth/credential-source.js](../../../src/linux/auth/credential-source.js), [shared/proxy-authorization.js](../../../src/linux/shared/proxy-authorization.js) |
| `https_proxy` | [git/rev-parse.js](../../../src/linux/git/rev-parse.js), [vendor/grpc/proto3-optional.js](../../../src/linux/vendor/grpc/proto3-optional.js), [auth/credential-source.js](../../../src/linux/auth/credential-source.js) 等 5 处 |
| `no_grpc_proxy` | [vendor/grpc/proto3-optional.js](../../../src/linux/vendor/grpc/proto3-optional.js) |
| `no_proxy` | [vendor/grpc/proto3-optional.js](../../../src/linux/vendor/grpc/proto3-optional.js), [auth/credential-source.js](../../../src/linux/auth/credential-source.js), [fs/content-encoding.js](../../../src/linux/fs/content-encoding.js) 等 5 处 |


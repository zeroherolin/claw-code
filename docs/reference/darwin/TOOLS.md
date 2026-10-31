# 内置工具（darwin）

工具由工厂函数或对象字面量定义。属性值取自方法体的字面返回值，`<expr>` 表示运行时计算。
输入输出的 JSON Schema 见 [`assets/sdk/sdk-tools.d.ts`](../../../assets/sdk/sdk-tools.d.ts)（✦ 表示其中有同名的 `<Name>Input`）。

| 工具 | 只读 | 可并发 | 延迟加载 | searchHint | 定义位置 |
|---|---|---|---|---|---|
| `(dynamic) Artifact family sub-tool` | <fn> | <fn> | true | <expr> | [artifacts/artifact-addon-tools.js:505](../../../src/darwin/artifacts/artifact-addon-tools.js#L505) |
| `(dynamic) JSON-schema tool` | true | true | true |  | [mcp/enable-stub-tools.js:418](../../../src/darwin/mcp/enable-stub-tools.js#L418) |
| `(dynamic) list-<subject> tool` | true | true | true | <expr> | [tools/plugin-skill-safe-tool-names.js:263](../../../src/darwin/tools/plugin-skill-safe-tool-names.js#L263) |
| `(dynamic) MCP server tool wrapper` | <expr> | <expr> |  | <expr> | [mcp/apply-capability-serve-time-miss.848f.js:2582](../../../src/darwin/mcp/apply-capability-serve-time-miss.848f.js#L2582) |
| `(dynamic) MCP server tool wrapper` | <expr> | <expr> |  | <expr> | [mcp/apply-capability-serve-time-miss.fa8e.js:3291](../../../src/darwin/mcp/apply-capability-serve-time-miss.fa8e.js#L3291) |
| `(dynamic) mcp__<server>__authenticate stub` | false | false |  |  | [tools/tool-result.12b0.js:160](../../../src/darwin/tools/tool-result.12b0.js#L160) |
| `(dynamic) mcp__<server>__authenticate stub` | false | false |  |  | [tools/tool-result.12b0.js:223](../../../src/darwin/tools/tool-result.12b0.js#L223) |
| `(dynamic) mcp__<server>__authenticate stub` | false | false |  |  | [tools/tool-result.12b0.js:312](../../../src/darwin/tools/tool-result.12b0.js#L312) |
| `(dynamic) search-<noun> tool (claude.ai catalog)` | true | true | <expr> | <expr> | [tools/plugin-skill-safe-tool-names.js:428](../../../src/darwin/tools/plugin-skill-safe-tool-names.js#L428) |
| `(dynamic) unavailable-tool placeholder` | false | false |  |  | [ui/repl-screen.js:5321](../../../src/darwin/ui/repl-screen.js#L5321) |
| `Agent` ✦ | true | true |  | delegate work to a subagent | [tools/agent-tool.js:654](../../../src/darwin/tools/agent-tool.js#L654) |
| `AppifactRepl` | false | false |  | run appifact SDK JavaScript against an artifact | [tools/appifact-repl-tool.js:1004](../../../src/darwin/tools/appifact-repl-tool.js#L1004) |
| `AskUserQuestion` ✦ | true | true |  | prompt the user with a multiple-choice question | [tools/ask-user-question-tool.js:248](../../../src/darwin/tools/ask-user-question-tool.js#L248) |
| `Bash` ✦ | <expr> | <expr> |  | execute shell commands | [core/conversation-engine.js:112841](../../../src/darwin/core/conversation-engine.js#L112841) |
| `ClaudeDesign` ✦ | <fn> | <fn> |  | work with Claude Design (claude.ai/design) projects | [tools/claude-design-tool.js:621](../../../src/darwin/tools/claude-design-tool.js#L621) |
| `CronCreate` ✦ |  |  | true | schedule a recurring or one-shot prompt | [tools/cron-create-tool.js:181](../../../src/darwin/tools/cron-create-tool.js#L181) |
| `CronDelete` ✦ |  |  | true | cancel a scheduled cron job | [tools/cron-delete-tool.js:151](../../../src/darwin/tools/cron-delete-tool.js#L151) |
| `CronList` ✦ | true | true | true | list active cron jobs | [tools/cron-list-tool.js:154](../../../src/darwin/tools/cron-list-tool.js#L154) |
| `DesignSync` | <expr> | false | true | sync local design system components to a claude.ai/design p… | [tools/design-sync-tool.js:340](../../../src/darwin/tools/design-sync-tool.js#L340) |
| `Edit` |  |  |  | modify file contents in place | [core/conversation-engine.js:108471](../../../src/darwin/core/conversation-engine.js#L108471) |
| `EndConversation` | true | false | true | end the conversation — only for sustained user abuse, or wh… | [tools/end-conversation-tool.js:425](../../../src/darwin/tools/end-conversation-tool.js#L425) |
| `EnterPlanMode` ✦ | true | true | true | switch to plan mode to design an approach before coding | [tools/skill-tool-suffix-match.js:494](../../../src/darwin/tools/skill-tool-suffix-match.js#L494) |
| `EnterWorktree` ✦ |  |  | true | create an isolated git worktree and switch into it | [tools/worktree-entered-existing.js:2403](../../../src/darwin/tools/worktree-entered-existing.js#L2403) |
| `ExitPlanMode` ✦ | false | true | true | present plan for approval and start coding (plan mode only) | [tools/exit-plan-mode-tool.js:114](../../../src/darwin/tools/exit-plan-mode-tool.js#L114) |
| `ExitWorktree` ✦ |  |  | true | exit a worktree session and return to the original directory | [tools/worktree-entered-existing.js:2582](../../../src/darwin/tools/worktree-entered-existing.js#L2582) |
| `FetchInboxMessage` | true | true | true | read a relayed inbox message from a linked thread | [tools/fetch-inbox-message-tool.js:202](../../../src/darwin/tools/fetch-inbox-message-tool.js#L202) |
| `GetTask` | true | true |  | check on a background shell command by task ID | [tools/worktree-entered-existing.js:1811](../../../src/darwin/tools/worktree-entered-existing.js#L1811) |
| `Glob` ✦ | true | true |  | find files by name pattern or wildcard | [core/conversation-engine.js:38382](../../../src/darwin/core/conversation-engine.js#L38382) |
| `Grep` ✦ | true | true |  | search file contents with regex (ripgrep) | [core/conversation-engine.js:38471](../../../src/darwin/core/conversation-engine.js#L38471) |
| `ListAgents` | true | true |  | list agents you can SendMessage to | [tools/list-agents-tool.js:155](../../../src/darwin/tools/list-agents-tool.js#L155) |
| `ListConnectors` | true | true | true | list the user's installed MCP connectors | [tools/list-connectors-tool.js:161](../../../src/darwin/tools/list-connectors-tool.js#L161) |
| `ListMcpResourcesTool` | true | true | true | list resources from connected MCP servers | [tools/tool-result.f5fc.js:33](../../../src/darwin/tools/tool-result.f5fc.js#L33) |
| `LSP` | true | true | true | code intelligence (definitions, references, symbols, hover) | [tools/worktree-entered-existing.js:2110](../../../src/darwin/tools/worktree-entered-existing.js#L2110) |
| `mcp` |  |  |  |  | [tools/mcp-tool.js:22](../../../src/darwin/tools/mcp-tool.js#L22) |
| `memory_list` | true | true | false | list the memory stores and the documents in them | [tools/worktree-entered-existing.js:1280](../../../src/darwin/tools/worktree-entered-existing.js#L1280) |
| `memory_read` | true | true | false | read a document from a memory store | [core/conversation-engine.js:38786](../../../src/darwin/core/conversation-engine.js#L38786) |
| `memory_write` |  |  | false | save a document to a memory store | [tools/memory-write-tool.js:1102](../../../src/darwin/tools/memory-write-tool.js#L1102) |
| `Monitor` ✦ |  | true | true | watch, monitor, or keep an eye on a process/log/command or … | [tools/monitor-tool.js:420](../../../src/darwin/tools/monitor-tool.js#L420) |
| `NotebookEdit` ✦ |  |  | true | edit Jupyter notebook cells (.ipynb) | [core/conversation-engine.js:108722](../../../src/darwin/core/conversation-engine.js#L108722) |
| `ObserverReport` | false |  |  |  | [tools/observer-report-tool.js:65](../../../src/darwin/tools/observer-report-tool.js#L65) |
| `OfferChromeSetup` ✦ | true | false | true | offer the user Claude in Chrome setup for their own browser | [tools/worktree-entered-existing.js:367](../../../src/darwin/tools/worktree-entered-existing.js#L367) |
| `Poll` | true | true |  | wait for and receive queued harness events | [tools/poll-tool.js:407](../../../src/darwin/tools/poll-tool.js#L407) |
| `PowerShell` | <expr> | <expr> |  | execute Windows PowerShell commands | [tools/power-shell-tool.js:2196](../../../src/darwin/tools/power-shell-tool.js#L2196) |
| `Projects` ✦ | <expr> | false |  | read and write the session's attached claude.ai project | [tools/projects-tool.js:567](../../../src/darwin/tools/projects-tool.js#L567) |
| `propose_skills` | true | true |  | propose skills from recurring procedures for the user to re… | [tools/propose-skills-tool.js:601](../../../src/darwin/tools/propose-skills-tool.js#L601) |
| `ProposeGoal` ✦ | true | false | true | propose a session goal condition for the user to approve wi… | [tools/propose-goal-tool.js:156](../../../src/darwin/tools/propose-goal-tool.js#L156) |
| `PublishPlugin` | false | false | true | publish or share a plugin or mod with the team or organizat… | [tools/publish-plugin-tool.js:875](../../../src/darwin/tools/publish-plugin-tool.js#L875) |
| `PushNotification` ✦ | true | true | true | send a notification to the user via terminal and optionally… | [tools/push-notification-tool.js:148](../../../src/darwin/tools/push-notification-tool.js#L148) |
| `Read` | true | true |  | read files, images, PDFs, notebooks | [core/conversation-engine.js:75443](../../../src/darwin/core/conversation-engine.js#L75443) |
| `ReadMcpResourceDirTool` | true | true | true | list the children of an MCP directory resource | [tools/tool-result.f5fc.js:141](../../../src/darwin/tools/tool-result.f5fc.js#L141) |
| `ReadMcpResourceTool` | true | true | true | read a specific MCP resource by URI | [tools/tool-result.f5fc.js:218](../../../src/darwin/tools/tool-result.f5fc.js#L218) |
| `ReadNotifications` ✦ | true | true |  | read queued external notifications (webhooks, triggers) | [tools/worktree-entered-existing.js:119](../../../src/darwin/tools/worktree-entered-existing.js#L119) |
| `RefreshMcpTools` ✦ | true | true |  | refresh or re-sync tool lists from connected MCP servers, r… | [tools/worktree-entered-existing.js:2313](../../../src/darwin/tools/worktree-entered-existing.js#L2313) |
| `RemoteTrigger` ✦ | <expr> | true | true | manage scheduled cloud agent routines; inspect their run hi… | [tools/remote-trigger-tool.js:444](../../../src/darwin/tools/remote-trigger-tool.js#L444) |
| `ReportFindings` ✦ | true | true |  | report code-review findings as a structured list | [tools/worktree-entered-existing.js:1017](../../../src/darwin/tools/worktree-entered-existing.js#L1017) |
| `ScheduleWakeup` ✦ |  |  | false | <expr> | [tools/worktree-entered-existing.js:786](../../../src/darwin/tools/worktree-entered-existing.js#L786) |
| `SearchMcpRegistry` | true | true | true | discover MCP connectors by keyword | [tools/search-mcp-registry-tool.js:149](../../../src/darwin/tools/search-mcp-registry-tool.js#L149) |
| `self_hosted_runner_get_pool` | true | true | true | read self-hosted environment aggregates and queue counts | [tools/self-hosted-runner-tools.js:148](../../../src/darwin/tools/self-hosted-runner-tools.js#L148) |
| `self_hosted_runner_list_runners` | true | true | true | list registered self-hosted runners for an environment | [tools/self-hosted-runner-tools.js:192](../../../src/darwin/tools/self-hosted-runner-tools.js#L192) |
| `self_hosted_runner_list_secrets` | true | true | true | list self-hosted environment secrets (metadata only) | [tools/self-hosted-runner-tools.js:214](../../../src/darwin/tools/self-hosted-runner-tools.js#L214) |
| `self_hosted_runner_list_sessions` | true | true | true | list queued/assigned sessions in a self-hosted environment | [tools/self-hosted-runner-tools.js:170](../../../src/darwin/tools/self-hosted-runner-tools.js#L170) |
| `self_hosted_runner_read_health` | true | true | true | probe local self-hosted runner /healthz endpoint | [tools/self-hosted-runner-tools.js:236](../../../src/darwin/tools/self-hosted-runner-tools.js#L236) |
| `self_hosted_runner_read_metrics` | true | true | true | read self-hosted runner Prometheus gauges from /metrics | [tools/self-hosted-runner-tools.js:284](../../../src/darwin/tools/self-hosted-runner-tools.js#L284) |
| `self_hosted_runner_requeue_session` | false |  | true | requeue a stuck self-hosted runner session onto another run… | [tools/self-hosted-runner-tools.js:311](../../../src/darwin/tools/self-hosted-runner-tools.js#L311) |
| `self_hosted_runner_spawn_local` | false |  | true | start a local self-hosted runner process for try-it-out | [tools/self-hosted-runner-tools.js:350](../../../src/darwin/tools/self-hosted-runner-tools.js#L350) |
| `self_hosted_runner_tail_log` | true | true | true | tail self-hosted runner log file with secret redaction | [tools/self-hosted-runner-tools.js:392](../../../src/darwin/tools/self-hosted-runner-tools.js#L392) |
| `SendFeedback` ✦ | false | true |  | draft product or model-behavior feedback report queue | [tools/worktree-entered-existing.js:1736](../../../src/darwin/tools/worktree-entered-existing.js#L1736) |
| `SendFile` | false | false | true | send files to another Claude Code session | [tools/send-file-tool.js:541](../../../src/darwin/tools/send-file-tool.js#L541) |
| `SendMessage` | <expr> |  | true | send messages to agent teammates | [tools/send-message-tool.js:1064](../../../src/darwin/tools/send-message-tool.js#L1064) |
| `SendUserFile` | true | true | <expr> | deliver files (screenshots, reports, artifacts) to the user | [tools/send-user-file-tool.js:202](../../../src/darwin/tools/send-user-file-tool.js#L202) |
| `SendUserMessage` | true | true |  | send a message to the user — your primary visible output ch… | [tools/worktree-entered-existing.js:732](../../../src/darwin/tools/worktree-entered-existing.js#L732) |
| `ShareOnboardingGuide` | false | false |  | upload ONBOARDING.md and get a team share link | [tools/worktree-entered-existing.js:149](../../../src/darwin/tools/worktree-entered-existing.js#L149) |
| `ShowOnboardingRolePicker` ✦ | true | true |  | show the Cowork onboarding role picker | [tools/worktree-entered-existing.js:267](../../../src/darwin/tools/worktree-entered-existing.js#L267) |
| `Skill` |  |  |  | invoke a slash-command skill | [tools/skill-tool-suffix-match.js:248](../../../src/darwin/tools/skill-tool-suffix-match.js#L248) |
| `StructuredOutput` | true | true |  | return the final response as structured JSON | [tools/structured-output-tool.js:631](../../../src/darwin/tools/structured-output-tool.js#L631) |
| `SubagentHandback` | false |  |  | deliver your final report to the agent that spawned you | [tools/subagent-handback-tool.js:71](../../../src/darwin/tools/subagent-handback-tool.js#L71) |
| `SuggestConnectors` | true | true | true | resolve MCP connector payloads by directoryUuid | [tools/suggest-connectors-tool.js:148](../../../src/darwin/tools/suggest-connectors-tool.js#L148) |
| `SuggestPluginInstall` | true | true | <expr> | render a plugin install card | [tools/plugin-skill-safe-tool-names.js:336](../../../src/darwin/tools/plugin-skill-safe-tool-names.js#L336) |
| `SuggestSkills` | true | true | <expr> | render addable claude.ai skills by keyword | [tools/plugin-skill-safe-tool-names.js:396](../../../src/darwin/tools/plugin-skill-safe-tool-names.js#L396) |
| `TaskCreate` ✦ |  | false | true | create a task in the task list | [tools/worktree-entered-existing.js:2690](../../../src/darwin/tools/worktree-entered-existing.js#L2690) |
| `TaskGet` ✦ | true | true | true | retrieve a task by ID | [tools/worktree-entered-existing.js:2747](../../../src/darwin/tools/worktree-entered-existing.js#L2747) |
| `TaskList` ✦ | true | true | true | list all tasks | [tools/worktree-entered-existing.js:2978](../../../src/darwin/tools/worktree-entered-existing.js#L2978) |
| `TaskStop` ✦ |  | true | true | kill a running background task | [tools/worktree-entered-existing.js:677](../../../src/darwin/tools/worktree-entered-existing.js#L677) |
| `TaskUpdate` ✦ |  | true | true | update a task | [tools/worktree-entered-existing.js:2860](../../../src/darwin/tools/worktree-entered-existing.js#L2860) |
| `TestingPermission` | true | true |  |  | [tools/worktree-entered-existing.js:1250](../../../src/darwin/tools/worktree-entered-existing.js#L1250) |
| `TodoWrite` ✦ |  |  | true | manage the session task checklist | [tools/worktree-entered-existing.js:1226](../../../src/darwin/tools/worktree-entered-existing.js#L1226) |
| `ToolSearch` | true | true |  |  | [core/conversation-engine.js:42869](../../../src/darwin/core/conversation-engine.js#L42869) |
| `WaitForMcpServers` | true | false |  |  | [core/conversation-engine.js:61366](../../../src/darwin/core/conversation-engine.js#L61366) |
| `WebFetch` ✦ | true | true | true | fetch and extract content from a URL | [core/conversation-engine.js:58554](../../../src/darwin/core/conversation-engine.js#L58554) |
| `WebSearch` ✦ | true | true | true | search the web for current information | [tools/worktree-entered-existing.js:885](../../../src/darwin/tools/worktree-entered-existing.js#L885) |
| `Workflow` ✦ |  |  |  | orchestrate subagents with deterministic JavaScript workflow | [tools/workflow-tool.js:1907](../../../src/darwin/tools/workflow-tool.js#L1907) |
| `Write` |  |  |  | create or overwrite files | [core/conversation-engine.js:37728](../../../src/darwin/core/conversation-engine.js#L37728) |

## 工具对象的属性（出现次数）

`name`(92) · `maxResultSizeChars`(92) · `description`(92) · `prompt`(92) · `inputSchema`(90) · `mapToolResultToToolResultBlockParam`(90) · `backgrounding`(87) · `create`(86) · `outputSchema`(83) · `searchHint`(82) · `renderToolUseMessage`(82) · `isReadOnly`(75) · `isConcurrencySafe`(74) · `toAutoClassifierInput`(65) · `isEnabled`(62) · `userFacingName`(61) · `shouldDefer`(54) · `getToolUseSummary`(17) · `getActivityDescription`(15) · `extractSearchText`(14) · `coerceInput`(13) · `ruleContentField`(12) · `getPath`(12) · `persistenceThresholdCeiling`(9) · `enablesCodeExecution`(9) · `isMcp`(8) · `aliases`(8) · `remoteExecution`(8) · `strict`(8) · `preparePermissionMatcher`(8) · `stripForStorage`(7) · `isDestructive`(7) · `requiresUserInteraction`(7) · `suppressesAllPermissionUpdates`(7) · `skipAggregateToolResultBudget`(6) · `suppressesAlwaysAllowRule`(6) · `checkPermissions`(6) · `call`(6) · `fromAnotherProcess`(6) · `inputJSONSchema`(5) · `mcpInfo`(5) · `isSearchOrReadCommand`(5) · `backfillObservableInput`(5) · `isOpenWorld`(4) · `outputSchemaAcrossProcesses`(4) · `stripForCreation`(4) · `briefStandalone`(3) · `preserveToolUseResultInSubagents`(3) · `ignoresWholeToolAllowRule`(3) · `validationErrorSteer`(3) · `restoreTransientForRemap`(3) · `alwaysLoad`(3) · `admitCardAnswer`(3) · `sandboxNetworkLists`(3) · `stripToolUseResultAtCreation`(2) · `readOnlyHint`(2) · `openWorldHint`(2) · `validateInput`(2) · `inputsEquivalent`(2) · `familyParentToolName`(1) · `mintsArtifactKeys`(1) · `toFamilyParentInput`(1) · `permissionCard`(1) · `staleServerClassifierContext`(1) · `shownCardInput`(1) · `notReadOnlyReason`(1) · `isLsp`(1) · `uiTableKey`(1) · `whenToUse`(1) · `isTransparentWrapper`(1) · `classifierOnly`(1) · `streamedInputRepairExemptKeys`(1)

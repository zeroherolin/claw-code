# 内置工具（linux）

工具由工厂函数或对象字面量定义。属性值取自方法体的字面返回值，`<expr>` 表示运行时计算。
输入输出的 JSON Schema 见 [`assets/sdk/sdk-tools.d.ts`](../../../assets/sdk/sdk-tools.d.ts)（✦ 表示其中有同名的 `<Name>Input`）。

| 工具 | 只读 | 可并发 | 延迟加载 | searchHint | 定义位置 |
|---|---|---|---|---|---|
| `(dynamic) Artifact family sub-tool` | <fn> | <fn> | true | <expr> | [artifacts/artifact-addon-tools.js:502](../../../src/linux/artifacts/artifact-addon-tools.js#L502) |
| `(dynamic) JSON-schema tool` | true | true | true |  | [mcp/enable-stub-tools.js:415](../../../src/linux/mcp/enable-stub-tools.js#L415) |
| `(dynamic) list-<subject> tool` | true | true | true | <expr> | [tools/plugin-skill-safe-tool-names.js:262](../../../src/linux/tools/plugin-skill-safe-tool-names.js#L262) |
| `(dynamic) MCP server tool wrapper` | <expr> | <expr> |  | <expr> | [mcp/apply-capability-serve-time-miss.848f.js:2574](../../../src/linux/mcp/apply-capability-serve-time-miss.848f.js#L2574) |
| `(dynamic) MCP server tool wrapper` | <expr> | <expr> |  | <expr> | [mcp/apply-capability-serve-time-miss.fa8e.js:3283](../../../src/linux/mcp/apply-capability-serve-time-miss.fa8e.js#L3283) |
| `(dynamic) mcp__<server>__authenticate stub` | false | false |  |  | [tools/tool-result.12b0.js:160](../../../src/linux/tools/tool-result.12b0.js#L160) |
| `(dynamic) mcp__<server>__authenticate stub` | false | false |  |  | [tools/tool-result.12b0.js:223](../../../src/linux/tools/tool-result.12b0.js#L223) |
| `(dynamic) mcp__<server>__authenticate stub` | false | false |  |  | [tools/tool-result.12b0.js:312](../../../src/linux/tools/tool-result.12b0.js#L312) |
| `(dynamic) search-<noun> tool (claude.ai catalog)` | true | true | <expr> | <expr> | [tools/plugin-skill-safe-tool-names.js:427](../../../src/linux/tools/plugin-skill-safe-tool-names.js#L427) |
| `(dynamic) unavailable-tool placeholder` | false | false |  |  | [ui/repl-screen.js:5318](../../../src/linux/ui/repl-screen.js#L5318) |
| `Agent` ✦ | true | true |  | delegate work to a subagent | [tools/agent-tool.js:654](../../../src/linux/tools/agent-tool.js#L654) |
| `AppifactRepl` | false | false |  | run appifact SDK JavaScript against an artifact | [tools/appifact-repl-tool.js:1004](../../../src/linux/tools/appifact-repl-tool.js#L1004) |
| `AskUserQuestion` ✦ | true | true |  | prompt the user with a multiple-choice question | [tools/ask-user-question-tool.js:248](../../../src/linux/tools/ask-user-question-tool.js#L248) |
| `Bash` ✦ | <expr> | <expr> |  | execute shell commands | [core/conversation-engine.js:112827](../../../src/linux/core/conversation-engine.js#L112827) |
| `ClaudeDesign` ✦ | <fn> | <fn> |  | work with Claude Design (claude.ai/design) projects | [tools/claude-design-tool.js:618](../../../src/linux/tools/claude-design-tool.js#L618) |
| `CronCreate` ✦ |  |  | true | schedule a recurring or one-shot prompt | [tools/cron-create-tool.js:180](../../../src/linux/tools/cron-create-tool.js#L180) |
| `CronDelete` ✦ |  |  | true | cancel a scheduled cron job | [tools/cron-delete-tool.js:151](../../../src/linux/tools/cron-delete-tool.js#L151) |
| `CronList` ✦ | true | true | true | list active cron jobs | [tools/cron-list-tool.js:154](../../../src/linux/tools/cron-list-tool.js#L154) |
| `DesignSync` | <expr> | false | true | sync local design system components to a claude.ai/design p… | [tools/design-sync-tool.js:340](../../../src/linux/tools/design-sync-tool.js#L340) |
| `Edit` |  |  |  | modify file contents in place | [core/conversation-engine.js:108457](../../../src/linux/core/conversation-engine.js#L108457) |
| `EndConversation` | true | false | true | end the conversation — only for sustained user abuse, or wh… | [tools/end-conversation-tool.js:422](../../../src/linux/tools/end-conversation-tool.js#L422) |
| `EnterPlanMode` ✦ | true | true | true | switch to plan mode to design an approach before coding | [tools/skill-tool-suffix-match.js:494](../../../src/linux/tools/skill-tool-suffix-match.js#L494) |
| `EnterWorktree` ✦ |  |  | true | create an isolated git worktree and switch into it | [tools/worktree-entered-existing.js:2402](../../../src/linux/tools/worktree-entered-existing.js#L2402) |
| `ExitPlanMode` ✦ | false | true | true | present plan for approval and start coding (plan mode only) | [tools/exit-plan-mode-tool.js:114](../../../src/linux/tools/exit-plan-mode-tool.js#L114) |
| `ExitWorktree` ✦ |  |  | true | exit a worktree session and return to the original directory | [tools/worktree-entered-existing.js:2581](../../../src/linux/tools/worktree-entered-existing.js#L2581) |
| `FetchInboxMessage` | true | true | true | read a relayed inbox message from a linked thread | [tools/fetch-inbox-message-tool.js:201](../../../src/linux/tools/fetch-inbox-message-tool.js#L201) |
| `GetTask` | true | true |  | check on a background shell command by task ID | [tools/worktree-entered-existing.js:1810](../../../src/linux/tools/worktree-entered-existing.js#L1810) |
| `Glob` ✦ | true | true |  | find files by name pattern or wildcard | [core/conversation-engine.js:38368](../../../src/linux/core/conversation-engine.js#L38368) |
| `Grep` ✦ | true | true |  | search file contents with regex (ripgrep) | [core/conversation-engine.js:38457](../../../src/linux/core/conversation-engine.js#L38457) |
| `ListAgents` | true | true |  | list agents you can SendMessage to | [tools/list-agents-tool.js:155](../../../src/linux/tools/list-agents-tool.js#L155) |
| `ListConnectors` | true | true | true | list the user's installed MCP connectors | [tools/list-connectors-tool.js:161](../../../src/linux/tools/list-connectors-tool.js#L161) |
| `ListMcpResourcesTool` | true | true | true | list resources from connected MCP servers | [tools/tool-result.f5fc.js:33](../../../src/linux/tools/tool-result.f5fc.js#L33) |
| `LSP` | true | true | true | code intelligence (definitions, references, symbols, hover) | [tools/worktree-entered-existing.js:2109](../../../src/linux/tools/worktree-entered-existing.js#L2109) |
| `mcp` |  |  |  |  | [tools/mcp-tool.js:22](../../../src/linux/tools/mcp-tool.js#L22) |
| `memory_list` | true | true | false | list the memory stores and the documents in them | [tools/worktree-entered-existing.js:1279](../../../src/linux/tools/worktree-entered-existing.js#L1279) |
| `memory_read` | true | true | false | read a document from a memory store | [core/conversation-engine.js:38772](../../../src/linux/core/conversation-engine.js#L38772) |
| `memory_write` |  |  | false | save a document to a memory store | [tools/memory-write-tool.js:1102](../../../src/linux/tools/memory-write-tool.js#L1102) |
| `Monitor` ✦ |  | true | true | watch, monitor, or keep an eye on a process/log/command or … | [tools/monitor-tool.js:420](../../../src/linux/tools/monitor-tool.js#L420) |
| `NotebookEdit` ✦ |  |  | true | edit Jupyter notebook cells (.ipynb) | [core/conversation-engine.js:108708](../../../src/linux/core/conversation-engine.js#L108708) |
| `ObserverReport` | false |  |  |  | [tools/observer-report-tool.js:65](../../../src/linux/tools/observer-report-tool.js#L65) |
| `OfferChromeSetup` ✦ | true | false | true | offer the user Claude in Chrome setup for their own browser | [tools/worktree-entered-existing.js:366](../../../src/linux/tools/worktree-entered-existing.js#L366) |
| `Poll` | true | true |  | wait for and receive queued harness events | [tools/poll-tool.js:404](../../../src/linux/tools/poll-tool.js#L404) |
| `PowerShell` | <expr> | <expr> |  | execute Windows PowerShell commands | [tools/power-shell-tool.js:2193](../../../src/linux/tools/power-shell-tool.js#L2193) |
| `Projects` ✦ | <expr> | false |  | read and write the session's attached claude.ai project | [tools/projects-tool.js:564](../../../src/linux/tools/projects-tool.js#L564) |
| `propose_skills` | true | true |  | propose skills from recurring procedures for the user to re… | [tools/propose-skills-tool.js:598](../../../src/linux/tools/propose-skills-tool.js#L598) |
| `ProposeGoal` ✦ | true | false | true | propose a session goal condition for the user to approve wi… | [tools/propose-goal-tool.js:156](../../../src/linux/tools/propose-goal-tool.js#L156) |
| `PublishPlugin` | false | false | true | publish or share a plugin or mod with the team or organizat… | [tools/publish-plugin-tool.js:875](../../../src/linux/tools/publish-plugin-tool.js#L875) |
| `PushNotification` ✦ | true | true | true | send a notification to the user via terminal and optionally… | [tools/push-notification-tool.js:148](../../../src/linux/tools/push-notification-tool.js#L148) |
| `Read` | true | true |  | read files, images, PDFs, notebooks | [core/conversation-engine.js:75429](../../../src/linux/core/conversation-engine.js#L75429) |
| `ReadMcpResourceDirTool` | true | true | true | list the children of an MCP directory resource | [tools/tool-result.f5fc.js:141](../../../src/linux/tools/tool-result.f5fc.js#L141) |
| `ReadMcpResourceTool` | true | true | true | read a specific MCP resource by URI | [tools/tool-result.f5fc.js:218](../../../src/linux/tools/tool-result.f5fc.js#L218) |
| `ReadNotifications` ✦ | true | true |  | read queued external notifications (webhooks, triggers) | [tools/worktree-entered-existing.js:118](../../../src/linux/tools/worktree-entered-existing.js#L118) |
| `RefreshMcpTools` ✦ | true | true |  | refresh or re-sync tool lists from connected MCP servers, r… | [tools/worktree-entered-existing.js:2312](../../../src/linux/tools/worktree-entered-existing.js#L2312) |
| `RemoteTrigger` ✦ | <expr> | true | true | manage scheduled cloud agent routines; inspect their run hi… | [tools/remote-trigger-tool.js:444](../../../src/linux/tools/remote-trigger-tool.js#L444) |
| `ReportFindings` ✦ | true | true |  | report code-review findings as a structured list | [tools/worktree-entered-existing.js:1016](../../../src/linux/tools/worktree-entered-existing.js#L1016) |
| `ScheduleWakeup` ✦ |  |  | false | <expr> | [tools/worktree-entered-existing.js:785](../../../src/linux/tools/worktree-entered-existing.js#L785) |
| `SearchMcpRegistry` | true | true | true | discover MCP connectors by keyword | [tools/search-mcp-registry-tool.js:149](../../../src/linux/tools/search-mcp-registry-tool.js#L149) |
| `self_hosted_runner_get_pool` | true | true | true | read self-hosted environment aggregates and queue counts | [tools/self-hosted-runner-tools.js:148](../../../src/linux/tools/self-hosted-runner-tools.js#L148) |
| `self_hosted_runner_list_runners` | true | true | true | list registered self-hosted runners for an environment | [tools/self-hosted-runner-tools.js:192](../../../src/linux/tools/self-hosted-runner-tools.js#L192) |
| `self_hosted_runner_list_secrets` | true | true | true | list self-hosted environment secrets (metadata only) | [tools/self-hosted-runner-tools.js:214](../../../src/linux/tools/self-hosted-runner-tools.js#L214) |
| `self_hosted_runner_list_sessions` | true | true | true | list queued/assigned sessions in a self-hosted environment | [tools/self-hosted-runner-tools.js:170](../../../src/linux/tools/self-hosted-runner-tools.js#L170) |
| `self_hosted_runner_read_health` | true | true | true | probe local self-hosted runner /healthz endpoint | [tools/self-hosted-runner-tools.js:236](../../../src/linux/tools/self-hosted-runner-tools.js#L236) |
| `self_hosted_runner_read_metrics` | true | true | true | read self-hosted runner Prometheus gauges from /metrics | [tools/self-hosted-runner-tools.js:284](../../../src/linux/tools/self-hosted-runner-tools.js#L284) |
| `self_hosted_runner_requeue_session` | false |  | true | requeue a stuck self-hosted runner session onto another run… | [tools/self-hosted-runner-tools.js:311](../../../src/linux/tools/self-hosted-runner-tools.js#L311) |
| `self_hosted_runner_spawn_local` | false |  | true | start a local self-hosted runner process for try-it-out | [tools/self-hosted-runner-tools.js:350](../../../src/linux/tools/self-hosted-runner-tools.js#L350) |
| `self_hosted_runner_tail_log` | true | true | true | tail self-hosted runner log file with secret redaction | [tools/self-hosted-runner-tools.js:392](../../../src/linux/tools/self-hosted-runner-tools.js#L392) |
| `SendFeedback` ✦ | false | true |  | draft product or model-behavior feedback report queue | [tools/worktree-entered-existing.js:1735](../../../src/linux/tools/worktree-entered-existing.js#L1735) |
| `SendFile` | false | false | true | send files to another Claude Code session | [tools/send-file-tool.js:538](../../../src/linux/tools/send-file-tool.js#L538) |
| `SendMessage` | <expr> |  | true | send messages to agent teammates | [tools/send-message-tool.js:1061](../../../src/linux/tools/send-message-tool.js#L1061) |
| `SendUserFile` | true | true | <expr> | deliver files (screenshots, reports, artifacts) to the user | [tools/send-user-file-tool.js:201](../../../src/linux/tools/send-user-file-tool.js#L201) |
| `SendUserMessage` | true | true |  | send a message to the user — your primary visible output ch… | [tools/worktree-entered-existing.js:731](../../../src/linux/tools/worktree-entered-existing.js#L731) |
| `ShareOnboardingGuide` | false | false |  | upload ONBOARDING.md and get a team share link | [tools/worktree-entered-existing.js:148](../../../src/linux/tools/worktree-entered-existing.js#L148) |
| `ShowOnboardingRolePicker` ✦ | true | true |  | show the Cowork onboarding role picker | [tools/worktree-entered-existing.js:266](../../../src/linux/tools/worktree-entered-existing.js#L266) |
| `Skill` |  |  |  | invoke a slash-command skill | [tools/skill-tool-suffix-match.js:248](../../../src/linux/tools/skill-tool-suffix-match.js#L248) |
| `StructuredOutput` | true | true |  | return the final response as structured JSON | [tools/structured-output-tool.js:692](../../../src/linux/tools/structured-output-tool.js#L692) |
| `SubagentHandback` | false |  |  | deliver your final report to the agent that spawned you | [tools/subagent-handback-tool.js:71](../../../src/linux/tools/subagent-handback-tool.js#L71) |
| `SuggestConnectors` | true | true | true | resolve MCP connector payloads by directoryUuid | [tools/suggest-connectors-tool.js:148](../../../src/linux/tools/suggest-connectors-tool.js#L148) |
| `SuggestPluginInstall` | true | true | <expr> | render a plugin install card | [tools/plugin-skill-safe-tool-names.js:335](../../../src/linux/tools/plugin-skill-safe-tool-names.js#L335) |
| `SuggestSkills` | true | true | <expr> | render addable claude.ai skills by keyword | [tools/plugin-skill-safe-tool-names.js:395](../../../src/linux/tools/plugin-skill-safe-tool-names.js#L395) |
| `TaskCreate` ✦ |  | false | true | create a task in the task list | [tools/worktree-entered-existing.js:2689](../../../src/linux/tools/worktree-entered-existing.js#L2689) |
| `TaskGet` ✦ | true | true | true | retrieve a task by ID | [tools/worktree-entered-existing.js:2746](../../../src/linux/tools/worktree-entered-existing.js#L2746) |
| `TaskList` ✦ | true | true | true | list all tasks | [tools/worktree-entered-existing.js:2977](../../../src/linux/tools/worktree-entered-existing.js#L2977) |
| `TaskStop` ✦ |  | true | true | kill a running background task | [tools/worktree-entered-existing.js:676](../../../src/linux/tools/worktree-entered-existing.js#L676) |
| `TaskUpdate` ✦ |  | true | true | update a task | [tools/worktree-entered-existing.js:2859](../../../src/linux/tools/worktree-entered-existing.js#L2859) |
| `TestingPermission` | true | true |  |  | [tools/worktree-entered-existing.js:1249](../../../src/linux/tools/worktree-entered-existing.js#L1249) |
| `TodoWrite` ✦ |  |  | true | manage the session task checklist | [tools/worktree-entered-existing.js:1225](../../../src/linux/tools/worktree-entered-existing.js#L1225) |
| `ToolSearch` | true | true |  |  | [core/conversation-engine.js:42855](../../../src/linux/core/conversation-engine.js#L42855) |
| `WaitForMcpServers` | true | false |  |  | [core/conversation-engine.js:61352](../../../src/linux/core/conversation-engine.js#L61352) |
| `WebFetch` ✦ | true | true | true | fetch and extract content from a URL | [core/conversation-engine.js:58540](../../../src/linux/core/conversation-engine.js#L58540) |
| `WebSearch` ✦ | true | true | true | search the web for current information | [tools/worktree-entered-existing.js:884](../../../src/linux/tools/worktree-entered-existing.js#L884) |
| `Workflow` ✦ |  |  |  | orchestrate subagents with deterministic JavaScript workflow | [tools/workflow-tool.js:1904](../../../src/linux/tools/workflow-tool.js#L1904) |
| `Write` |  |  |  | create or overwrite files | [core/conversation-engine.js:37714](../../../src/linux/core/conversation-engine.js#L37714) |

## 工具对象的属性（出现次数）

`name`(92) · `maxResultSizeChars`(92) · `description`(92) · `prompt`(92) · `inputSchema`(90) · `mapToolResultToToolResultBlockParam`(90) · `backgrounding`(87) · `create`(86) · `outputSchema`(83) · `searchHint`(82) · `renderToolUseMessage`(82) · `isReadOnly`(75) · `isConcurrencySafe`(74) · `toAutoClassifierInput`(65) · `isEnabled`(62) · `userFacingName`(61) · `shouldDefer`(54) · `getToolUseSummary`(17) · `getActivityDescription`(15) · `extractSearchText`(14) · `coerceInput`(13) · `ruleContentField`(12) · `getPath`(12) · `persistenceThresholdCeiling`(9) · `enablesCodeExecution`(9) · `isMcp`(8) · `aliases`(8) · `remoteExecution`(8) · `strict`(8) · `preparePermissionMatcher`(8) · `stripForStorage`(7) · `isDestructive`(7) · `requiresUserInteraction`(7) · `suppressesAllPermissionUpdates`(7) · `skipAggregateToolResultBudget`(6) · `suppressesAlwaysAllowRule`(6) · `checkPermissions`(6) · `call`(6) · `fromAnotherProcess`(6) · `inputJSONSchema`(5) · `mcpInfo`(5) · `isSearchOrReadCommand`(5) · `backfillObservableInput`(5) · `isOpenWorld`(4) · `outputSchemaAcrossProcesses`(4) · `stripForCreation`(4) · `briefStandalone`(3) · `preserveToolUseResultInSubagents`(3) · `ignoresWholeToolAllowRule`(3) · `validationErrorSteer`(3) · `restoreTransientForRemap`(3) · `alwaysLoad`(3) · `admitCardAnswer`(3) · `sandboxNetworkLists`(3) · `stripToolUseResultAtCreation`(2) · `readOnlyHint`(2) · `openWorldHint`(2) · `validateInput`(2) · `inputsEquivalent`(2) · `familyParentToolName`(1) · `mintsArtifactKeys`(1) · `toFamilyParentInput`(1) · `permissionCard`(1) · `staleServerClassifierContext`(1) · `shownCardInput`(1) · `notReadOnlyReason`(1) · `isLsp`(1) · `uiTableKey`(1) · `whenToUse`(1) · `isTransparentWrapper`(1) · `classifierOnly`(1) · `streamedInputRepairExemptKeys`(1)

# 内置工具

工具由工厂函数或对象字面量定义。属性值取自方法体的字面返回值，`<expr>` 表示运行时计算。
输入输出的 JSON Schema 见 [`assets/sdk/sdk-tools.d.ts`](../../assets/sdk/sdk-tools.d.ts)（✦ 表示其中有同名的 `<Name>Input`）。

| 工具 | 只读 | 可并发 | 延迟加载 | searchHint | 定义位置 |
|---|---|---|---|---|---|
| `(dynamic) Artifact family sub-tool` | <fn> | <fn> | true | <expr> | [artifacts/artifact-addon-tools.xz4a.js:505](../../src/artifacts/artifact-addon-tools.xz4a.js#L505) |
| `(dynamic) JSON-schema tool` | true | true | true |  | [mcp/enable-stub-tools.4bv1.js:418](../../src/mcp/enable-stub-tools.4bv1.js#L418) |
| `(dynamic) list-<subject> tool` | true | true | true | <expr> | [tools/plugin-skill-safe-tool-names.hyfs.js:263](../../src/tools/plugin-skill-safe-tool-names.hyfs.js#L263) |
| `(dynamic) MCP server tool wrapper` | <expr> | <expr> |  | <expr> | [mcp/apply-capability-serve-time-miss.pghm.js:2582](../../src/mcp/apply-capability-serve-time-miss.pghm.js#L2582) |
| `(dynamic) MCP server tool wrapper` | <expr> | <expr> |  | <expr> | [mcp/apply-capability-serve-time-miss.3j3b.js:3291](../../src/mcp/apply-capability-serve-time-miss.3j3b.js#L3291) |
| `(dynamic) mcp__<server>__authenticate stub` | false | false |  |  | [tools/tool-result.s7b2.js:160](../../src/tools/tool-result.s7b2.js#L160) |
| `(dynamic) mcp__<server>__authenticate stub` | false | false |  |  | [tools/tool-result.s7b2.js:223](../../src/tools/tool-result.s7b2.js#L223) |
| `(dynamic) mcp__<server>__authenticate stub` | false | false |  |  | [tools/tool-result.s7b2.js:312](../../src/tools/tool-result.s7b2.js#L312) |
| `(dynamic) search-<noun> tool (claude.ai catalog)` | true | true | <expr> | <expr> | [tools/plugin-skill-safe-tool-names.hyfs.js:428](../../src/tools/plugin-skill-safe-tool-names.hyfs.js#L428) |
| `(dynamic) unavailable-tool placeholder` | false | false |  |  | [ui/repl-screen.zq77.js:5321](../../src/ui/repl-screen.zq77.js#L5321) |
| `Agent` ✦ | true | true |  | delegate work to a subagent | [tools/agent-tool.vxxp.js:654](../../src/tools/agent-tool.vxxp.js#L654) |
| `AppifactRepl` | false | false |  | run appifact SDK JavaScript against an artifact | [tools/appifact-repl-tool.tj0x.js:1004](../../src/tools/appifact-repl-tool.tj0x.js#L1004) |
| `AskUserQuestion` ✦ | true | true |  | prompt the user with a multiple-choice question | [tools/ask-user-question-tool.sdzg.js:248](../../src/tools/ask-user-question-tool.sdzg.js#L248) |
| `Bash` ✦ | <expr> | <expr> |  | execute shell commands | [core/conversation-engine.31gx.js:112841](../../src/core/conversation-engine.31gx.js#L112841) |
| `ClaudeDesign` ✦ | <fn> | <fn> |  | work with Claude Design (claude.ai/design) projects | [tools/claude-design-tool.2t5d.js:621](../../src/tools/claude-design-tool.2t5d.js#L621) |
| `CronCreate` ✦ |  |  | true | schedule a recurring or one-shot prompt | [tools/cron-create-tool.g97v.js:181](../../src/tools/cron-create-tool.g97v.js#L181) |
| `CronDelete` ✦ |  |  | true | cancel a scheduled cron job | [tools/cron-delete-tool.y2x8.js:151](../../src/tools/cron-delete-tool.y2x8.js#L151) |
| `CronList` ✦ | true | true | true | list active cron jobs | [tools/cron-list-tool.w0s5.js:154](../../src/tools/cron-list-tool.w0s5.js#L154) |
| `DesignSync` | <expr> | false | true | sync local design system components to a claude.ai/design p… | [tools/design-sync-tool.4z7p.js:340](../../src/tools/design-sync-tool.4z7p.js#L340) |
| `Edit` |  |  |  | modify file contents in place | [core/conversation-engine.31gx.js:108471](../../src/core/conversation-engine.31gx.js#L108471) |
| `EndConversation` | true | false | true | end the conversation — only for sustained user abuse, or wh… | [tools/end-conversation-tool.em31.js:425](../../src/tools/end-conversation-tool.em31.js#L425) |
| `EnterPlanMode` ✦ | true | true | true | switch to plan mode to design an approach before coding | [tools/skill-tool-suffix-match.tg55.js:494](../../src/tools/skill-tool-suffix-match.tg55.js#L494) |
| `EnterWorktree` ✦ |  |  | true | create an isolated git worktree and switch into it | [tools/worktree-entered-existing.1dq1.js:2403](../../src/tools/worktree-entered-existing.1dq1.js#L2403) |
| `ExitPlanMode` ✦ | false | true | true | present plan for approval and start coding (plan mode only) | [tools/exit-plan-mode-tool.5tnq.js:114](../../src/tools/exit-plan-mode-tool.5tnq.js#L114) |
| `ExitWorktree` ✦ |  |  | true | exit a worktree session and return to the original directory | [tools/worktree-entered-existing.1dq1.js:2582](../../src/tools/worktree-entered-existing.1dq1.js#L2582) |
| `FetchInboxMessage` | true | true | true | read a relayed inbox message from a linked thread | [tools/fetch-inbox-message-tool.d8ht.js:202](../../src/tools/fetch-inbox-message-tool.d8ht.js#L202) |
| `GetTask` | true | true |  | check on a background shell command by task ID | [tools/worktree-entered-existing.1dq1.js:1811](../../src/tools/worktree-entered-existing.1dq1.js#L1811) |
| `Glob` ✦ | true | true |  | find files by name pattern or wildcard | [core/conversation-engine.31gx.js:38382](../../src/core/conversation-engine.31gx.js#L38382) |
| `Grep` ✦ | true | true |  | search file contents with regex (ripgrep) | [core/conversation-engine.31gx.js:38471](../../src/core/conversation-engine.31gx.js#L38471) |
| `ListAgents` | true | true |  | list agents you can SendMessage to | [tools/list-agents-tool.8mhr.js:155](../../src/tools/list-agents-tool.8mhr.js#L155) |
| `ListConnectors` | true | true | true | list the user's installed MCP connectors | [tools/list-connectors-tool.c3rk.js:161](../../src/tools/list-connectors-tool.c3rk.js#L161) |
| `ListMcpResourcesTool` | true | true | true | list resources from connected MCP servers | [tools/tool-result.wtan.js:33](../../src/tools/tool-result.wtan.js#L33) |
| `LSP` | true | true | true | code intelligence (definitions, references, symbols, hover) | [tools/worktree-entered-existing.1dq1.js:2110](../../src/tools/worktree-entered-existing.1dq1.js#L2110) |
| `mcp` |  |  |  |  | [tools/mcp-tool.d3qb.js:22](../../src/tools/mcp-tool.d3qb.js#L22) |
| `memory_list` | true | true | false | list the memory stores and the documents in them | [tools/worktree-entered-existing.1dq1.js:1280](../../src/tools/worktree-entered-existing.1dq1.js#L1280) |
| `memory_read` | true | true | false | read a document from a memory store | [core/conversation-engine.31gx.js:38786](../../src/core/conversation-engine.31gx.js#L38786) |
| `memory_write` |  |  | false | save a document to a memory store | [tools/memory-write-tool.2csa.js:1102](../../src/tools/memory-write-tool.2csa.js#L1102) |
| `Monitor` ✦ |  | true | true | watch, monitor, or keep an eye on a process/log/command or … | [tools/monitor-tool.fwss.js:420](../../src/tools/monitor-tool.fwss.js#L420) |
| `NotebookEdit` ✦ |  |  | true | edit Jupyter notebook cells (.ipynb) | [core/conversation-engine.31gx.js:108722](../../src/core/conversation-engine.31gx.js#L108722) |
| `ObserverReport` | false |  |  |  | [tools/observer-report-tool.jfd6.js:65](../../src/tools/observer-report-tool.jfd6.js#L65) |
| `OfferChromeSetup` ✦ | true | false | true | offer the user Claude in Chrome setup for their own browser | [tools/worktree-entered-existing.1dq1.js:367](../../src/tools/worktree-entered-existing.1dq1.js#L367) |
| `Poll` | true | true |  | wait for and receive queued harness events | [tools/poll-tool.aaq1.js:407](../../src/tools/poll-tool.aaq1.js#L407) |
| `PowerShell` | <expr> | <expr> |  | execute Windows PowerShell commands | [tools/power-shell-tool.26p5.js:2196](../../src/tools/power-shell-tool.26p5.js#L2196) |
| `Projects` ✦ | <expr> | false |  | read and write the session's attached claude.ai project | [tools/projects-tool.hgv7.js:567](../../src/tools/projects-tool.hgv7.js#L567) |
| `propose_skills` | true | true |  | propose skills from recurring procedures for the user to re… | [tools/propose-skills-tool.xh2t.js:601](../../src/tools/propose-skills-tool.xh2t.js#L601) |
| `ProposeGoal` ✦ | true | false | true | propose a session goal condition for the user to approve wi… | [tools/propose-goal-tool.fbm8.js:156](../../src/tools/propose-goal-tool.fbm8.js#L156) |
| `PublishPlugin` | false | false | true | publish or share a plugin or mod with the team or organizat… | [tools/publish-plugin-tool.6wcw.js:875](../../src/tools/publish-plugin-tool.6wcw.js#L875) |
| `PushNotification` ✦ | true | true | true | send a notification to the user via terminal and optionally… | [tools/push-notification-tool.zvnf.js:148](../../src/tools/push-notification-tool.zvnf.js#L148) |
| `Read` | true | true |  | read files, images, PDFs, notebooks | [core/conversation-engine.31gx.js:75443](../../src/core/conversation-engine.31gx.js#L75443) |
| `ReadMcpResourceDirTool` | true | true | true | list the children of an MCP directory resource | [tools/tool-result.wtan.js:141](../../src/tools/tool-result.wtan.js#L141) |
| `ReadMcpResourceTool` | true | true | true | read a specific MCP resource by URI | [tools/tool-result.wtan.js:218](../../src/tools/tool-result.wtan.js#L218) |
| `ReadNotifications` ✦ | true | true |  | read queued external notifications (webhooks, triggers) | [tools/worktree-entered-existing.1dq1.js:119](../../src/tools/worktree-entered-existing.1dq1.js#L119) |
| `RefreshMcpTools` ✦ | true | true |  | refresh or re-sync tool lists from connected MCP servers, r… | [tools/worktree-entered-existing.1dq1.js:2313](../../src/tools/worktree-entered-existing.1dq1.js#L2313) |
| `RemoteTrigger` ✦ | <expr> | true | true | manage scheduled cloud agent routines; inspect their run hi… | [tools/remote-trigger-tool.vfpy.js:444](../../src/tools/remote-trigger-tool.vfpy.js#L444) |
| `ReportFindings` ✦ | true | true |  | report code-review findings as a structured list | [tools/worktree-entered-existing.1dq1.js:1017](../../src/tools/worktree-entered-existing.1dq1.js#L1017) |
| `ScheduleWakeup` ✦ |  |  | false | <expr> | [tools/worktree-entered-existing.1dq1.js:786](../../src/tools/worktree-entered-existing.1dq1.js#L786) |
| `SearchMcpRegistry` | true | true | true | discover MCP connectors by keyword | [tools/search-mcp-registry-tool.jaq2.js:149](../../src/tools/search-mcp-registry-tool.jaq2.js#L149) |
| `self_hosted_runner_get_pool` | true | true | true | read self-hosted environment aggregates and queue counts | [tools/self-hosted-runner-tools.9fx1.js:148](../../src/tools/self-hosted-runner-tools.9fx1.js#L148) |
| `self_hosted_runner_list_runners` | true | true | true | list registered self-hosted runners for an environment | [tools/self-hosted-runner-tools.9fx1.js:192](../../src/tools/self-hosted-runner-tools.9fx1.js#L192) |
| `self_hosted_runner_list_secrets` | true | true | true | list self-hosted environment secrets (metadata only) | [tools/self-hosted-runner-tools.9fx1.js:214](../../src/tools/self-hosted-runner-tools.9fx1.js#L214) |
| `self_hosted_runner_list_sessions` | true | true | true | list queued/assigned sessions in a self-hosted environment | [tools/self-hosted-runner-tools.9fx1.js:170](../../src/tools/self-hosted-runner-tools.9fx1.js#L170) |
| `self_hosted_runner_read_health` | true | true | true | probe local self-hosted runner /healthz endpoint | [tools/self-hosted-runner-tools.9fx1.js:236](../../src/tools/self-hosted-runner-tools.9fx1.js#L236) |
| `self_hosted_runner_read_metrics` | true | true | true | read self-hosted runner Prometheus gauges from /metrics | [tools/self-hosted-runner-tools.9fx1.js:284](../../src/tools/self-hosted-runner-tools.9fx1.js#L284) |
| `self_hosted_runner_requeue_session` | false |  | true | requeue a stuck self-hosted runner session onto another run… | [tools/self-hosted-runner-tools.9fx1.js:311](../../src/tools/self-hosted-runner-tools.9fx1.js#L311) |
| `self_hosted_runner_spawn_local` | false |  | true | start a local self-hosted runner process for try-it-out | [tools/self-hosted-runner-tools.9fx1.js:350](../../src/tools/self-hosted-runner-tools.9fx1.js#L350) |
| `self_hosted_runner_tail_log` | true | true | true | tail self-hosted runner log file with secret redaction | [tools/self-hosted-runner-tools.9fx1.js:392](../../src/tools/self-hosted-runner-tools.9fx1.js#L392) |
| `SendFeedback` ✦ | false | true |  | draft product or model-behavior feedback report queue | [tools/worktree-entered-existing.1dq1.js:1736](../../src/tools/worktree-entered-existing.1dq1.js#L1736) |
| `SendFile` | false | false | true | send files to another Claude Code session | [tools/send-file-tool.9yew.js:541](../../src/tools/send-file-tool.9yew.js#L541) |
| `SendMessage` | <expr> |  | true | send messages to agent teammates | [tools/send-message-tool.6dde.js:1064](../../src/tools/send-message-tool.6dde.js#L1064) |
| `SendUserFile` | true | true | <expr> | deliver files (screenshots, reports, artifacts) to the user | [tools/send-user-file-tool.10xm.js:202](../../src/tools/send-user-file-tool.10xm.js#L202) |
| `SendUserMessage` | true | true |  | send a message to the user — your primary visible output ch… | [tools/worktree-entered-existing.1dq1.js:732](../../src/tools/worktree-entered-existing.1dq1.js#L732) |
| `ShareOnboardingGuide` | false | false |  | upload ONBOARDING.md and get a team share link | [tools/worktree-entered-existing.1dq1.js:149](../../src/tools/worktree-entered-existing.1dq1.js#L149) |
| `ShowOnboardingRolePicker` ✦ | true | true |  | show the Cowork onboarding role picker | [tools/worktree-entered-existing.1dq1.js:267](../../src/tools/worktree-entered-existing.1dq1.js#L267) |
| `Skill` |  |  |  | invoke a slash-command skill | [tools/skill-tool-suffix-match.tg55.js:248](../../src/tools/skill-tool-suffix-match.tg55.js#L248) |
| `StructuredOutput` | true | true |  | return the final response as structured JSON | [tools/structured-output-tool.j28z.js:631](../../src/tools/structured-output-tool.j28z.js#L631) |
| `SubagentHandback` | false |  |  | deliver your final report to the agent that spawned you | [tools/subagent-handback-tool.08ey.js:71](../../src/tools/subagent-handback-tool.08ey.js#L71) |
| `SuggestConnectors` | true | true | true | resolve MCP connector payloads by directoryUuid | [tools/suggest-connectors-tool.958n.js:148](../../src/tools/suggest-connectors-tool.958n.js#L148) |
| `SuggestPluginInstall` | true | true | <expr> | render a plugin install card | [tools/plugin-skill-safe-tool-names.hyfs.js:336](../../src/tools/plugin-skill-safe-tool-names.hyfs.js#L336) |
| `SuggestSkills` | true | true | <expr> | render addable claude.ai skills by keyword | [tools/plugin-skill-safe-tool-names.hyfs.js:396](../../src/tools/plugin-skill-safe-tool-names.hyfs.js#L396) |
| `TaskCreate` ✦ |  | false | true | create a task in the task list | [tools/worktree-entered-existing.1dq1.js:2690](../../src/tools/worktree-entered-existing.1dq1.js#L2690) |
| `TaskGet` ✦ | true | true | true | retrieve a task by ID | [tools/worktree-entered-existing.1dq1.js:2747](../../src/tools/worktree-entered-existing.1dq1.js#L2747) |
| `TaskList` ✦ | true | true | true | list all tasks | [tools/worktree-entered-existing.1dq1.js:2978](../../src/tools/worktree-entered-existing.1dq1.js#L2978) |
| `TaskStop` ✦ |  | true | true | kill a running background task | [tools/worktree-entered-existing.1dq1.js:677](../../src/tools/worktree-entered-existing.1dq1.js#L677) |
| `TaskUpdate` ✦ |  | true | true | update a task | [tools/worktree-entered-existing.1dq1.js:2860](../../src/tools/worktree-entered-existing.1dq1.js#L2860) |
| `TestingPermission` | true | true |  |  | [tools/worktree-entered-existing.1dq1.js:1250](../../src/tools/worktree-entered-existing.1dq1.js#L1250) |
| `TodoWrite` ✦ |  |  | true | manage the session task checklist | [tools/worktree-entered-existing.1dq1.js:1226](../../src/tools/worktree-entered-existing.1dq1.js#L1226) |
| `ToolSearch` | true | true |  |  | [core/conversation-engine.31gx.js:42869](../../src/core/conversation-engine.31gx.js#L42869) |
| `WaitForMcpServers` | true | false |  |  | [core/conversation-engine.31gx.js:61366](../../src/core/conversation-engine.31gx.js#L61366) |
| `WebFetch` ✦ | true | true | true | fetch and extract content from a URL | [core/conversation-engine.31gx.js:58554](../../src/core/conversation-engine.31gx.js#L58554) |
| `WebSearch` ✦ | true | true | true | search the web for current information | [tools/worktree-entered-existing.1dq1.js:885](../../src/tools/worktree-entered-existing.1dq1.js#L885) |
| `Workflow` ✦ |  |  |  | orchestrate subagents with deterministic JavaScript workflow | [tools/workflow-tool.sxcv.js:1907](../../src/tools/workflow-tool.sxcv.js#L1907) |
| `Write` |  |  |  | create or overwrite files | [core/conversation-engine.31gx.js:37728](../../src/core/conversation-engine.31gx.js#L37728) |

## 工具对象的属性（出现次数）

`name`(92) · `maxResultSizeChars`(92) · `description`(92) · `prompt`(92) · `inputSchema`(90) · `mapToolResultToToolResultBlockParam`(90) · `backgrounding`(87) · `create`(86) · `outputSchema`(83) · `searchHint`(82) · `renderToolUseMessage`(82) · `isReadOnly`(75) · `isConcurrencySafe`(74) · `toAutoClassifierInput`(65) · `isEnabled`(62) · `userFacingName`(61) · `shouldDefer`(54) · `getToolUseSummary`(17) · `getActivityDescription`(15) · `extractSearchText`(14) · `coerceInput`(13) · `ruleContentField`(12) · `getPath`(12) · `persistenceThresholdCeiling`(9) · `enablesCodeExecution`(9) · `isMcp`(8) · `aliases`(8) · `remoteExecution`(8) · `strict`(8) · `preparePermissionMatcher`(8) · `stripForStorage`(7) · `isDestructive`(7) · `requiresUserInteraction`(7) · `suppressesAllPermissionUpdates`(7) · `skipAggregateToolResultBudget`(6) · `suppressesAlwaysAllowRule`(6) · `checkPermissions`(6) · `call`(6) · `fromAnotherProcess`(6) · `inputJSONSchema`(5) · `mcpInfo`(5) · `isSearchOrReadCommand`(5) · `backfillObservableInput`(5) · `isOpenWorld`(4) · `outputSchemaAcrossProcesses`(4) · `stripForCreation`(4) · `briefStandalone`(3) · `preserveToolUseResultInSubagents`(3) · `ignoresWholeToolAllowRule`(3) · `validationErrorSteer`(3) · `restoreTransientForRemap`(3) · `alwaysLoad`(3) · `admitCardAnswer`(3) · `sandboxNetworkLists`(3) · `stripToolUseResultAtCreation`(2) · `readOnlyHint`(2) · `openWorldHint`(2) · `validateInput`(2) · `inputsEquivalent`(2) · `familyParentToolName`(1) · `mintsArtifactKeys`(1) · `toFamilyParentInput`(1) · `permissionCard`(1) · `staleServerClassifierContext`(1) · `shownCardInput`(1) · `notReadOnlyReason`(1) · `isLsp`(1) · `uiTableKey`(1) · `whenToUse`(1) · `isTransparentWrapper`(1) · `classifierOnly`(1) · `streamedInputRepairExemptKeys`(1)

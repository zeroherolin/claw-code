# dev 分支：有意改动的行为

`dev` 是 `main` 加上本文列出的改动，别无其他：提取流水线、构建、运行时层的其余部分、共用的文档和测试都与 `main` 相同，通用的修复先提交到 `main` 再合并过来。`main` 与原版行为一致，`dev` 在下面八处有意不同。

模块路径对两个系统都成立，位置用"路径「特征字符串」"标注，写法同 [architecture.md](architecture.md)。

## 概览

| 改动 | 日常使用时的表现 | 详见 |
|---|---|---|
| 时区 | 发出的时间信息一律用美国太平洋时间（`America/Los_Angeles`），包括 Bash 工具里执行的命令 | [固定的环境变量](#固定的环境变量) |
| 遥测 | 无条件关闭：1P 事件日志、Datadog、BigQuery 指标、错误上报、GrowthBook、OpenTelemetry 导出、反馈问卷 | [固定的环境变量](#固定的环境变量) |
| 非必要网络流量 | 无条件关闭：登录引导、更新检查、MCP 官方目录、插件市场、远程会话、团队记忆同步等都不发请求，这些功能不可用 | [固定的环境变量](#固定的环境变量) |
| GPU 信息 | 不收集、不发送 | [GPU 信息](#gpu-信息) |
| 记忆 | 只发记忆文件的路径，不发正文；模型要读记忆目录里的文件时一律先询问 | [记忆](#记忆) |
| `safeguards` | 发往服务端分类器的上下文脱敏，字段本身仍发送；退回本地分类器时不脱敏 | [safeguards 脱敏](#safeguards-脱敏) |
| 服务端拒答 | 用原模型最多连续重试 10 轮，不换模型；每次重试更换会话 ID、设备 ID 和提示 ID | [拒答后的重试](#拒答后的重试) |
| 与 `claude` 共存 | 不注册 `claude-cli://` 处理程序；`update`、`upgrade`、`install` 直接退出 | [与已安装的 claude 共存](#与已安装的-claude-共存) |

改动落在四个地方，`git diff main` 看到的就是它们：

| 位置 | 内容 |
|---|---|
| `src/main.js` | 入口最先调用 `pinEnvironment()` |
| `src/runtime/` | `pinned-env.js`、`pinned-env-worker.js`（固定环境变量），`memory-guard.js`（读取记忆需要确认），`safeguards-redact.js`（脱敏），`upload-identity.js`（拒答重试的临时上传身份） |
| `extract/patches/2.1.310.patch` | 两个系统生成源码上的改动，逐条见[生成源码上的改动](#生成源码上的改动)；补丁机制见 [extract/README.md](../extract/README.md#版本补丁) |
| `test/dev/`、`test/parity/intentional.js` | 这些改动的测试，以及对比测试中登记的有意差异 |

## 与对比测试的关系

`npm run test:parity` 在 `dev` 上仍是 33 项全部一致：

- 时区与遥测的改动，对比用例覆盖不到：隔离环境本来就关闭了遥测，用例的输出也不涉及时区。
- 有两处差异会出现在请求里，登记在 `test/parity/intentional.js`，比较前从两边去掉，其余内容仍逐字比较：
  - 系统提示词多出的 `# Memory access policy` 一段。按原文逐字匹配，措辞改了而登记没有跟着改时，对比会报不一致。
  - 「Today's date」的取值。本机时区与美国太平洋时间不在同一天时，两边的日期不同。
- 其余改动（拒答重试、记忆读取确认、脱敏、共存）在对比用例的场景里不触发，由 `test/dev/` 单独验证。

## 固定的环境变量

`src/runtime/pinned-env.js` 由入口最先调用，在加载原版代码之前完成四件事。

**一、写入固定值，或删除变量**

| 变量 | 固定为 | 作用 |
|---|---|---|
| `TZ` | `America/Los_Angeles` | `Date` 与 `Intl` 的时区；对话中的日期、每轮时间戳、工具提示里的时间都随之改变 |
| `DISABLE_TELEMETRY`、`DO_NOT_TRACK` | `1` | 隐私级别为 no-telemetry：关闭 1P 事件日志、Datadog、BigQuery 指标与 GrowthBook |
| `DISABLE_ERROR_REPORTING` | `1` | 关闭错误上报 |
| `CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY` | `1` | 关闭会话反馈问卷 |
| `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` | `1` | 隐私级别为 essential-traffic（蕴含 no-telemetry）：关闭一切不是模型对话必需的请求，范围见下文 |
| `CLAUDE_CODE_ENABLE_TELEMETRY`、`CLAUDE_CODE_ENHANCED_TELEMETRY_BETA`、`ENABLE_ENHANCED_TELEMETRY_BETA`、`ENABLE_BETA_TRACING_DETAILED` | 删除 | OpenTelemetry 导出与增强追踪各有独立开关，不受隐私级别控制 |

**二、锁定 `process.env`**

把 `process.env` 换成 Proxy，忽略对这些键的写入和删除。原版会在运行期把各层 `settings.json` 的 `env`、插件 hooks 写回 `process.env`，锁定后它们都改不回来。

**三、包装 `Bun.spawn` 与 `Bun.spawnSync`**

给每个子进程带上固定的 `TZ`，继承语义与原版一致：

- `Bun.spawn` 不传 `env` 时，拿到的是进程启动时的环境，看不到运行期写入的值（比如刷新后的 OAuth token）；
- `node:child_process` 显式传入当前的 `process.env`，照旧能拿到；
- 调用方自己给出的 `env` 原样使用，只覆盖 `TZ`；
- 原版只对 `ps` 显式指定 `TZ=UTC` 以解析 `lstart`，这一处保留。

**四、包装 `Worker`**

包括全局的，以及经 `require("worker_threads")` 取得的。Worker 有自己的 `process.env` 副本和自己的 `Bun.spawn`，主线程的 Proxy 管不到。包装后：

- 每个 Worker 的 `env` 是「调用方给的 env，或启动时的环境」套上全部固定值；
- 通过 `preload` 先运行 `src/runtime/pinned-env-worker.js`，在 Worker 里再调用一次 `pinEnvironment()`，那里的 `process.env` 同样被锁定，子进程同样带固定的 `TZ`；
- 调用方自己的 `workerData`、`preload` 等选项原样保留。

另有两处补丁让时区在 `process.env` 之外也固定：

- Bash 工具的每条命令在 `eval` 前导出固定的 `TZ`（`core/conversation-engine.js`「export TZ=America/Los_Angeles」）。它排在 shell 快照、`~/.zshenv` 与 SessionStart hook 的环境脚本之后，用户的 shell 配置覆盖不了。
- 续上旧会话时，记录中保存的每轮时间戳按固定时区重新格式化后再发送（`core/conversation-engine.js`「Number.isNaN(Date.parse(」）。

### 非必要网络流量关闭后不可用的功能

需要下列功能时，不要用 `dev` 分支：

- 远程会话、Remote Control、`/teleport`、从 claude.ai 发起到本机的会话；
- 团队记忆同步、claude.ai 插件同步、设计同步、`DesignSync` / `Projects` 工具；
- 自动更新检查与版本提示、更新日志（本机缓存里的除外）；
- 官方 MCP 目录（`/mcp-registry`）、官方插件市场的下载与更新；
- 登录引导（bootstrap）：拿不到服务端下发的模型列表等附加信息，退回内置的默认值；
- 内置 `gh api`、文件上传到 Anthropic、会话反馈问卷、终端标题等。

官方插件市场从 GCS 下载的函数，原版没有检查这个开关，设了变量仍会访问 `downloads.claude.ai`；补丁在函数开头补上了判断（`core/conversation-engine.js`「非必要流量已关闭：不下载官方插件市场」）。

关闭遥测的代价：GrowthBook 不拉取，特性开关只用离线默认值；从 Claude Desktop 远程发起到本机的 Remote Control 会话可能被拒绝（原版提示 "feature-flag evaluation is off"）。

实测范围：隔离 HOME、本地 MITM 代理、假 API 直连，环境和 `settings.json` 都故意把该变量设成空串，`-p` 与交互界面启动后没有任何外部请求，只剩发往 `ANTHROPIC_BASE_URL` 的模型对话。真实登录后的 OAuth 刷新等请求依据源码，没有实测。

测试：`test/dev/runtime.test.js` 的 `pinned-env`（固定值、锁定、子进程与 Worker 的继承语义），`test/dev/smoke.test.js` 的「非必要网络流量始终关闭」。

## GPU 信息

- Remote Control 主机画像不探测 `nvidia-smi`、`/usr/local/cuda/version.json`、`/proc/driver/nvidia/version`（`mcp/bridge-host-profile-collect.js`）。
- 项目扫描不识别 CUDA 项目（`.cu` / `.cuh`、CMake、conda），`tengu_init` 的 `os_locked_toolchain` 不会为 `cuda`（`vendor/google-auth/xcode-project.js`）。

## 记忆

### 记忆内容不发送

发给模型的只有记忆文件的路径：

| 内容 | 处理 | 位置 |
|---|---|---|
| `MEMORY.md` 索引（含宿主经 `CLAUDE_COWORK_MEMORY_INDEX_CONTENT` 注入的） | 只检查文件是否存在，正文换成一句占位文本，路径照发 | `core/conversation-engine.js`「(path only; contents not loaded)」 |
| 相关记忆召回 | 关闭：选择器不把记忆文件的描述发给模型，召回的正文也不放进消息 | `core/conversation-engine.js`「记忆内容不发送：不做相关记忆召回」 |
| 账号记忆与 cowork 记忆快照 | 不渲染进消息 | `core/conversation-engine.js`「cowork_memory_context: () => [], account_memory_recall: () => []」 |
| 子代理记忆、团队记忆索引 | 只给路径 | `context/org-memory-writes-setting-changed.js`「Team memory index (contents not loaded」 |
| 后台记忆提取 | 不运行（它会把已有记忆的清单和对话发给模型） | `context/extract-memories-extraction.js`「记忆内容不发送：不运行后台记忆提取」 |
| 记忆整理 | 不运行（它会把记忆文件读给模型） | `context/auto-dream-skipped.js`「记忆内容不发送：不运行记忆整理」 |

系统提示词的 `# Memory` 一节后追加一段 `# Memory access policy`：只发了记忆文件的路径，用户没有明确要求时不要读取、搜索或打开记忆目录里的文件（`context/org-memory-writes-setting-changed.js`「Memory access policy」）。

随之而来的变化：

- 模型仍知道记忆目录和 `MEMORY.md` 的路径，也仍能用 Edit、Write 保存记忆。追加的政策只是提示，不是强制；强制的部分是下一节的读取确认。
- 后台记忆提取和记忆整理关闭后，不再自动沉淀新的记忆，只在用户明确要求时保存。
- 系统提示词里原有的一句 "`MEMORY.md` is the index loaded into context each session" 没有改，与追加的政策有出入，以后者为准。
- 团队记忆索引需要服务端的记忆库，这一处只改了文本格式化函数，没有实测。

测试：`test/dev/smoke.test.js` 的「记忆内容不发送，只发记忆文件的路径」。

### 读取记忆文件需要确认

任何会读到记忆目录里的文件的工具调用，一律先询问用户，不论权限模式、allow 规则、hook 还是自动模式的分类器怎么判断。

实现在 `src/runtime/memory-guard.js`，挂在权限检查链上 `tool.checkPermissions` 及其后的几步之后（`core/conversation-engine.js`「memoryReadGuard(」）。返回的是带 `safetyCheck` 的 `ask`：

- 断路器名 `memoryRead`，在断路器表里与 `outsideReadsBlocked` 同级（`permissions/classifier-transcript-too-long.js`「memoryRead:」）：`bypassImmune`，所以 bypassPermissions 模式也要问；不走分类器，只能由人回答。
- `hooksMayAllow: false`，hook 的 allow 不起作用。
- `suppressAlwaysAllowRule: true`，界面上不提供「以后都允许」。

记忆目录包括：

- 当前项目的自动记忆目录，取原版解析出的路径，通常是 `<配置目录>/projects/<项目>/memory`；
- 其他项目的自动记忆目录：`<配置目录>/projects/*/memory` 与 `~/.claude/projects/*/memory`；
- `agent-memory` 与 `agent-memory-local`：`<配置目录>`、`~/.claude` 与当前项目 `.claude` 下的这两个目录，以及任何位置上的 `.claude/agent-memory`、`.claude/agent-memory-local`；
- 设置了 `CLAUDE_CODE_REMOTE_MEMORY_DIR` 时，它下面的 `agent-memory` 与 `projects`。

`<配置目录>` 与 `~/.claude` 中的其他文件（`settings.json`、会话记录等）不在其中，直接读取不触发询问。

| 调用 | 如何判断 | 可靠程度 |
|---|---|---|
| 带路径的只读工具（Read 等） | 取工具的 `getPath`，展开 `~`、相对路径并解析符号链接（目标不存在时解析最长的已存在前缀）后，看是否在记忆目录里。Grep、Glob 等搜索工具还检查搜索范围是否包含已存在的记忆目录 | 直接路径、符号链接、记忆目录的上级搜索范围都会询问 |
| Bash / PowerShell | 对每个词按真实路径判断，展开 `~`、`$HOME`、`${HOME}`、相对路径与 `VAR=路径`。另外识别 grep / ugrep 的递归选项、rg / ag / ack、find / bfs、PowerShell Get-ChildItem 的递归搜索，检查显式起点或默认的当前目录是否包含记忆；支持先 `cd` 再搜索，以及管道。只是提到名字、非递归列目录、搜索普通的 `src` 目录不会被拦 | 尽力而为，盲区见下 |
| 写类工具（Write、Edit） | 不询问：保存记忆需要写入 | 写入不读取内容，但 Edit 不必先 Read 就能执行，模型知道文件里某段文字时可以不经询问地改它 |

没有人可以回答时（`-p` 等），询问记为 `permission_denials`，调用不执行，内容不进入请求。交互界面里出现 "Do you want to proceed?"：选 No 内容不发送，选 Yes 才发送。

已知的盲区（Bash 只看命令文本，下面这些识别不到，会正常执行）：

- 路径靠变量或通配符拼出来，例如 `d=...; cat $d/mem*/*.md`、`cd <项目目录> && cat memory/*.md`；
- 脚本、解释器内部间接读取（`python -c`、`node -e`、已有的脚本文件等）；
- 用没有识别的递归工具或包装函数，或经搜索范围内部的符号链接访问不在已知记忆根目录中的记忆。

要堵上这些，只能在沙箱里限制读取范围，或在权限里对记忆目录加 deny 规则。

测试：`test/dev/runtime.test.js` 的 `memory-guard`（直接读取、上级递归范围、默认当前目录、`cd`、管道、符号链接、Grep / Glob，以及与普通搜索的对照）；`test/dev/smoke.test.js` 的「读取记忆文件需要确认」（真实二进制加假 API，在各权限模式、allow 规则与 hook 下验证 Read 和 Bash；交互界面的 No 与 Yes 两个分支）。

## safeguards 脱敏

auto 模式（交互界面不带参数时默认进入）和 plan 模式下，原版每个请求都带一个 `safeguards` 字段（beta 头 `dangerous-tool-use-2026-09-03`），其中的 `classifier_context` 供服务端分类器判断工具调用是否危险。`src/runtime/safeguards-redact.js` 在构造它的函数返回前统一脱敏（`core/conversation-engine.js`「redactClassifierContext(」）：字段仍然发送，形状不变，只抹掉能识别用户、机器和项目的值。

| 字段 | 处理 |
|---|---|
| `user_identity` | `null`（原版取 `GITHUB_ACTOR`、`USER`、`USERNAME`，最后取 `git config user.email` 的 `@` 前部分） |
| `home_dir`、`rule_roots` | 删除、置空（schema 里可选或接受空对象） |
| `rules.allow/deny/ask` | `[]`（权限规则原文，路径里常含用户名和项目名） |
| `auto_mode.*` | `[]`（用户自己写的自然语言规则） |
| `trusted_directories.additional/network` | `[]`（`--add-dir` 目录、允许的网络域名） |
| `git_state.branch/default_branch/root` | `null` |
| `git_state.status.counts` | 计数置 0 或 `null`，保留 `clean` 标志 |
| `git_state.visibility` | `remotes`、`visibility_cache` 清空，`push_remote` 置 `null`，`origin` 的 host、remote 置为 `"redacted"`，保留 `visibility` 的取值 |
| `chrome_navigation`、`artifacts` | 去掉标签页网址与标题、工件信息，只保留 `enabled` |
| `prior_turn_context[].context.git_state` | 同上 |

保留的字段：`v`、`permission_mode`、`platform`、`live_cwd`、`trusted_directories.primary`、`block_reads_outside_working_directories` 与其他布尔标志、`git_state.cwd`、`git_state.status.clean`。`live_cwd` 保留是因为分类器要用它判断命令是否在工作目录内，主请求的 `Environment` 里本来也有这个路径。

代价：服务端分类器看不到用户配置的权限规则、`autoMode` 规则、`--add-dir` 目录和仓库信息，判断依据变少。预期分类器对「这条命令在这个环境里是否被允许」更保守，更多调用要手动确认。经中转站实测，带脱敏后 `safeguards` 的请求被正常受理；中转站没有实现服务端分类器，所以分类质量仍没有在一方端点上验证过。

**脱敏只覆盖服务端分类器，不覆盖本地分类器**。端点没有实现服务端分类器时（自定义 `ANTHROPIC_BASE_URL` 的中转站通常如此，界面会提示 "isn't compatible with this update"），原版自动退回本地分类器（`core/conversation-engine.js`「arbiterWithLocalFallback」）：另发一个不带工具的请求，让模型判断这次调用。这个请求不经过 `redactClassifierContext`，经中转站实测，它的系统提示词里有：

- 用户名（`core/conversation-engine.js`「## Session Context」，取值与 `user_identity` 相同）；
- `autoMode` 的 `environment`、`allow` 等规则原文；
- 权限 deny 规则原文。

消息部分是用户提示原文和待判断的工具调用。只读命令（如 `echo`）不触发分类，也就不发这个请求。

没有改动的：

- 主请求里原有的内容，包括 `gitStatus` 块里的当前分支名和主分支名；
- 本地分类器的请求，见上；
- 其他权限模式（default、acceptEdits、dontAsk、bypassPermissions）本来就不发 `safeguards`。

测试：`test/dev/runtime.test.js` 的 `safeguards-redact`（输入的形状取自原版的真实输出）；`test/dev/smoke.test.js` 的「safeguards 脱敏」（真实二进制，把用户名、分支、remote、权限规则、autoMode 规则、`--add-dir` 都设成可识别的值，检查一个都不出现，且路径只剩工作目录）。

## 拒答后的重试

服务端以拒答结束响应时（`stop_reason: "refusal"`，如 `frontier_llm`），原版用同一个模型重试 1 次，并会提示或静默换到回退模型。`dev` 的做法：

### 重试与换模型

- **最多连续重试 10 轮**，每轮用同一个模型、同一份历史（`core/query-loop.js`「REFUSAL_RETRY_MAX」）。界面和 `--output-format stream-json` 里都会出现 `The response above was cut off by the server · retrying with the same model (n/10)`。
- **只算连续被拦截的次数**：重试之后得到了正常的响应（例如模型发出工具调用并执行），再遇到拦截就从 1/10 重新开始。一次提问里总共被拦截的次数因此没有上限，每一段连续拦截最多 10 轮。
- **不换模型**：原版会在拒答后弹出底部选择框（"Model switch"），或在已开启时静默换到回退模型。`dev` 里回退模型一律为空（`core/conversation-engine.js`「拒答后不切换模型」、`api/anthropic-client.js`「拒答后不切换模型」），两条路径都不会触发，请求里的 `model` 始终是原模型。
- **10 轮后仍被拦截**：补齐没执行的工具结果，把拒答作为 API 错误输出（`terminal_reason: "api_error"`，`stop_reason: "refusal"`，`-p` 退出码为 1），本轮结束，下一条消息照常发送，不弹出任何选择框。第 10 轮之后的那次请求不算重试，所以一段连续拦截最多产生 11 个请求。
- 原版的"双击 Esc 编辑上一条消息"提示仍在拒答文案里，那只是文字，不是对话框。

### 拒答后的历史

- 被拦截那一轮的提问、已输出的文字和工具调用全部保留，重试和下一条消息里照样带上。
- 不再往历史里追加 "Your response above was stopped by a safety classifier…" 那条提示；给未完成的工具调用补的结果改成中性措辞："Not run: …ended before the call was executed" / "Interrupted: …ended while the call was running; it may have partially or fully completed"（`core/query-loop.js`「the response containing this tool call ended」）。
- 拒答本身（`stop_details`、界面上的 "safeguards flagged this message" 文案）原版就不进请求；重试提示只在界面显示，也不进请求。

### 临时上传身份

每次拒答重试生成一份临时身份，只替换发往服务端的值（`src/runtime/upload-identity.js`，`core/query-loop.js`「newUploadIdentity(」）：

| 值 | 形状 | 用在哪里 |
|---|---|---|
| 会话 ID | UUID | `metadata.user_id.session_id`、请求头 `X-Claude-Code-Session-Id` |
| 设备 ID | 32 个随机字节的十六进制，与 `userID` 同形 | `metadata.user_id.device_id` |
| 提示 ID | UUID | 请求头 `x-claude-code-prompt-id`、账单头 `cc_prompt_id` |

各标识原本的含义见 [identifiers.md](identifiers.md)。

**重试请求本身**还做了这些处理，使它不指向被拦截的那一次：

- 原本会续接的 `thread` 改为 `create`，不带线程的 `previous_message_id`（`core/conversation-engine.js`「forceCreate("refusal_retry_identity")」）；
- 账单头不带 `cc_prev_req`，请求体 `diagnostics.previous_message_id` 为 `null`（`core/conversation-engine.js`「uploadIdentity === void 0 ?」）；
- 同一次重试的请求头与 metadata 一致；流式请求遇到 404 改用非流式重发时，沿用同一份身份。

**采用**：重试得到完整的响应后，该身份被采用（`core/query-loop.js`「adoptUploadIdentity(」）。

- 完整的响应指：不是拒答，不是 API 错误，没有被中断。输出被 `max_tokens` 或上下文窗口截断也算，因为服务端已经受理。
- 采用之后，同一进程里发往模型的所有请求都沿用它，包括工具轮、标题等辅助请求、子代理和下一条消息，不再回到本地 ID；这些请求照常指向上一次成功的请求（`req_…`）和消息（`msg_…`）。
- 下一次重试成功，换成新的一份。
- 重试又被拒，或遇到 4xx / 5xx / 过载，那一份作废；连续 10 轮用尽也不采用。之后沿用此前采用的身份，没有就用本地 ID。

**作用范围**：

- 会话 ID 记在本地会话名下：`/clear`、`/resume` 换了本地会话，就用新会话自己的。
- 设备 ID 在进程内通用。
- 提示 ID 按「问」对应：被顶替的那一问后面的工具轮沿用顶替后的，下一问是新生成的（`core/conversation-engine.js`「promptIdFor(」）。
- 只保存在进程内存里，不写盘。重启进程（含 `--continue`）从本地 ID 开始，若又被拒答，照常重试并换新身份。

**问数与轮数**：账单头里的 `cc_prompt_index` / `cc_turn_index` 由历史按本地会话计数，换会话 ID 不会重新计数。新的会话 ID 配上接着原会话往下数的序号，等于把新 ID 连回原会话，所以会话 ID 不是本地 ID 时（重试请求和采用之后的请求）不带这两个字段，回到本地 ID 时照常带（`core/conversation-engine.js`「turnPositionFor(」）。不改成从 1 重新计数：那是编出来的序号，和请求里已有的多轮历史对不上。

**claude.ai 连接器的 MCP 代理**：请求头 `X-Mcp-Client-Session-Id` 原版放的是会话 ID，`dev` 改为进程内一个独立的随机 UUID，与任何发往模型的会话 ID 都不同（`mcp/apply-capability-serve-time-miss.fa8e.js`「"X-Mcp-Client-Session-Id": mcpClientSessionId」，另一份副本 `mcp/apply-capability-serve-time-miss.848f.js`「"X-Mcp-Client-Session-Id": mcpClientSessionId」）。代理连接在启动时建立，整条连接共用服务端下发的 `mcp-session-id`；不改的话，换过会话 ID 之后原 ID 仍出现在同一条连接的每次工具调用里。

**仍与被拦截那一轮相同的内容**，服务端可以据此关联到同一对话：

- 消息历史：被拦截那一轮的提问、已输出的文字、`tool_use` 的 id 和对应的 `tool_result`。保留已做的部分就必然如此。
- 账单头 `cc_version` 末尾 3 位指纹（由首条用户消息算出）。
- `account_uuid`、鉴权凭据。
- 连接器工具调用的 `_meta` 里的 `tool_use` id，以及整条代理连接的 `mcp-session-id`。
- `/ultrareview` 预检请求的 `X-Claude-Code-Session-Id` 仍是本地会话 ID。

**不改的本地状态**：本地会话 ID、磁盘上的 `userID`、账号 ID、`parent_session_id`、Agent 与工具调用 ID、会话文件及本地消息 UUID、历史、`--continue`。`x-client-request-id` 与查询链 ID 原版就是每个请求各自生成，不在临时身份里。

**中转站形态**：自定义 `ANTHROPIC_BASE_URL` 时，提示 ID 与客户端请求 ID 头、`cc_prev_req`、`cc_prompt_index` / `cc_turn_index`、`diagnostics` 和消息线程本来就不发送，重试只更换 metadata 里的会话 ID、设备 ID 和 `X-Claude-Code-Session-Id`。

### 测试

- `test/dev/runtime.test.js` 的 `upload-identity`：身份的形状、采用与沿用的规则、会话作用域、提示 ID 的对应、问数与轮数的取舍、连接器代理的客户端会话头。
- `test/dev/smoke.test.js`，真实二进制加脚本化的假 API（`test/dev/scripted-api.js`）：
  - 重试轮数与提示、连续计数、10 轮用尽后的结束方式、始终用原模型；
  - 历史里保留已做的部分、没有拒答提示；
  - 一方端点形态下逐字段检查临时身份（含 `cc_prev_req` 与 `diagnostics.previous_message_id`）、重试成功后工具轮的沿用、流式 404 改非流式重发、`--continue` 新进程从本地标识开始；
  - 中转站形态（默认配置）下会话与设备 ID 的更换；
  - 交互界面（伪终端）里的采用与沿用、被拒的候选不采用、10 轮用尽后回到本地标识、第二问被拒时不带接着原会话的问数与轮数、没有换模型的选择框。
- claude.ai 连接器代理需要 claude.ai 登录和官方代理地址，冒烟测试走不到；单元测试检查两个系统的生成源码都用 `mcpClientSessionId`。

## 与已安装的 claude 共存

共用的配置、会话与凭据，以及原版的两处影响，见 [runtime.md](runtime.md#安装与共存)。`dev` 用补丁关掉了那两处，不需要另外设置：

| 位置 | 改动 |
|---|---|
| `fs/deep-link-register-failed.js`「不注册 claude-cli:// 处理程序」 | 不自动注册 `claude-cli://` 处理程序。从网页深链接拉起的仍是已安装的 `claude` |
| `fs/auto-updater-forced-downgrade.js`「claw-code does not update itself」 | `update`、`upgrade` 直接提示后退出 |
| `fs/setup-token-command.js`「claw-code does not install itself」 | `install` 直接提示后退出 |

升级 `claw-code` 的办法是更新项目后重新执行 `npm run install-cli`。

测试：`test/dev/smoke.test.js` 的「与已安装的 claude 共存」（三个子命令不联网、不写 `installMethod`、不碰 `~/.local`；交互使用后不注册处理程序）。

## 生成源码上的改动

`extract/patches/2.1.310.patch` 的全部内容，两个系统各一份，位置相同：

| 文件 | 改动 | 属于 |
|---|---|---|
| `core/conversation-engine.js` | Bash 命令前导出 `TZ`；续会话时重新格式化每轮时间戳 | 时区 |
| 同上 | 官方插件市场下载前检查 essential-traffic | 非必要网络流量 |
| 同上 | `MEMORY.md` 只发路径；关闭相关记忆召回；账号与 cowork 记忆不渲染；权限检查链追加 `memoryReadGuard` | 记忆 |
| 同上 | `classifier_context` 返回前脱敏 | `safeguards` |
| 同上 | 回退模型一律为空；重试请求用临时身份的提示 ID、新建线程、去掉上一个请求 ID 与问数轮数；把身份传给 metadata 与客户端 | 拒答重试 |
| `core/query-loop.js` | 重试上限与计数、重试提示、中性的工具结果措辞、生成与采用临时身份 | 拒答重试 |
| `core/system-prompt-blocks.js` | metadata 的会话 ID、设备 ID 取当前该用的身份 | 拒答重试 |
| `api/anthropic-client.js` | 默认会话请求头取当前该用的身份；不装填静默回退模型 | 拒答重试 |
| `mcp/apply-capability-serve-time-miss.fa8e.js`、`mcp/apply-capability-serve-time-miss.848f.js` | 连接器代理的客户端会话头改用独立的随机 UUID | 拒答重试 |
| `context/org-memory-writes-setting-changed.js` | 追加记忆访问政策；子代理记忆与团队记忆索引只给路径 | 记忆 |
| `context/extract-memories-extraction.js`、`context/auto-dream-skipped.js` | 不运行后台记忆提取与记忆整理 | 记忆 |
| `permissions/classifier-transcript-too-long.js` | 断路器表新增 `memoryRead` | 记忆 |
| `mcp/bridge-host-profile-collect.js`、`vendor/google-auth/xcode-project.js` | 去掉 GPU 与 CUDA 探测 | GPU 信息 |
| `fs/deep-link-register-failed.js`、`fs/auto-updater-forced-downgrade.js`、`fs/setup-token-command.js` | 不注册处理程序；`update`、`upgrade`、`install` 直接退出 | 共存 |

改动生成源码后要重新生成补丁，做法与检查见 [extract/README.md](../extract/README.md#版本补丁)。

# dev 分支：有意改动的行为

`dev` 由 `main` 加上本文列出的改动构成：提取流水线、构建、运行时层的其余部分、共用的文档和测试都与 `main` 相同，通用的修复先提交到 `main`，再合并到 `dev`。`main` 的行为与原版一致，`dev` 在以下九处有意不同。

模块路径对每个系统都成立，位置用"路径「特征字符串」"标注，写法同 [architecture.md](architecture.md)。

## 概览

| 改动 | 表现 | 详见 |
|---|---|---|
| 时区 | 发出的时间信息一律使用美国太平洋时间（`America/Los_Angeles`），包括 Bash 工具执行的命令 | [固定的环境变量](#固定的环境变量) |
| 遥测 | 无条件关闭：1P 事件日志、Datadog、BigQuery 指标、错误上报、GrowthBook、OpenTelemetry 导出、反馈问卷 | [固定的环境变量](#固定的环境变量) |
| 非必要网络流量 | 无条件关闭：登录引导、更新检查、MCP 官方目录、官方插件市场的自动安装、首次引导的连通性检查、远程会话、团队记忆同步等都不发请求，相应功能不可用 | [固定的环境变量](#固定的环境变量) |
| GPU 信息 | 不收集、不发送 | [GPU 信息](#gpu-信息) |
| 记忆 | 只发送记忆文件的路径，不发送正文；模型读取记忆目录中的文件前一律先询问用户 | [记忆](#记忆) |
| `safeguards` | 发给分类器的上下文脱敏（服务端分类器的 `safeguards` 字段、本地分类器的请求）：不带用户名、规则原文和仓库信息 | [safeguards 脱敏](#safeguards-脱敏) |
| 服务端拒答 | 使用原模型最多连续重试 10 轮，不换模型；每次重试更换会话 ID、设备 ID 和提示 ID | [拒答后的重试](#拒答后的重试) |
| 后台会话 | 交互界面中转入后台或新建的会话随程序退出而结束，不留下后台进程、任务与后台命令；在这类会话里退出即退出整个程序 | [后台会话随退出结束](#后台会话随退出结束) |
| 与 `claude` 共存 | 不注册 `claude-cli://` 处理程序；`update`、`upgrade`、`install` 直接退出 | [与已安装的 claude 共存](#与已安装的-claude-共存) |

改动分布在下列位置：

| 位置 | 内容 |
|---|---|
| `src/main.js` | 入口最先调用 `pinEnvironment()` |
| `src/runtime/` | `pinned-env.js`、`pinned-env-worker.js`（固定环境变量），`memory-guard.js`（读取记忆需要确认），`safeguards-redact.js`（脱敏），`upload-identity.js`（拒答重试的临时上传身份），`session-bound-agents.js`（后台会话随退出结束） |
| `extract/patches/2.1.310.patch` | 各系统生成源码上的改动，见[生成源码上的改动](#生成源码上的改动)；补丁机制见 [extract/README.md](../extract/README.md#版本补丁) |
| `test/dev/`、`test/parity/intentional.js` | 上述改动的测试，以及对比测试中登记的有意差异 |

`git diff main` 的内容由上表中的文件、补丁对应的 `src/<系统>/` 改动，以及随之变化的下列文件构成：

- 本文，以及 `README.md`、`docs/architecture.md`、`docs/identifiers.md` 中说明 `dev` 分支的几行；
- `reference/<系统>/tools.json` 与 `docs/reference/<系统>/TOOLS.md` 中工具定义的行号：行号按补丁换算，见 [extract/README.md](../extract/README.md#版本补丁)。

## 与对比测试的关系

`npm run test:parity` 在 `dev` 上仍为 34 项全部一致：

- 时区与遥测的改动不在对比用例的覆盖范围内：隔离环境已关闭遥测，用例的输出不涉及时区。
- 有两处差异会出现在请求中，登记在 `test/parity/intentional.js`。比较前从原版与本项目的请求中去掉，其余内容仍逐字比较：
  - 系统提示词中追加的 `# Memory access policy` 段落。按原文逐字匹配；补丁中的措辞改动而登记未同步时，对比报告不一致。
  - 「Today's date」的取值。本机时区与美国太平洋时间不在同一天时，日期不同。
- 首次引导场景（`onboarding`）中，原版先检查连通性，`dev` 不检查。截屏时二者都已进入主题选择，屏幕相同；连通性检查失败时（如没有网络），原版停在报错页，这一项不一致。
- 其余改动（拒答重试、记忆读取确认、脱敏、后台会话、共存、官方插件市场的自动安装）在对比用例的场景中不触发，由 `test/dev/` 单独验证。

## 固定的环境变量

`src/runtime/pinned-env.js` 由入口最先调用，在加载原版代码之前完成以下四项。

**一、写入固定值，或删除变量**

| 变量 | 固定为 | 作用 |
|---|---|---|
| `TZ` | `America/Los_Angeles` | `Date` 与 `Intl` 的时区；对话中的日期、每轮时间戳、工具提示中的时间随之改变 |
| `DISABLE_TELEMETRY`、`DO_NOT_TRACK` | `1` | 隐私级别为 no-telemetry：关闭 1P 事件日志、Datadog、BigQuery 指标与 GrowthBook |
| `DISABLE_ERROR_REPORTING` | `1` | 关闭错误上报 |
| `CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY` | `1` | 关闭会话反馈问卷 |
| `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` | `1` | 隐私级别为 essential-traffic（蕴含 no-telemetry）：关闭所有不是模型对话必需的请求，范围见下文 |
| `CLAUDE_CODE_ENABLE_TELEMETRY`、`CLAUDE_CODE_ENHANCED_TELEMETRY_BETA`、`ENABLE_ENHANCED_TELEMETRY_BETA`、`ENABLE_BETA_TRACING_DETAILED` | 删除 | OpenTelemetry 导出与增强追踪各有独立开关，不受隐私级别控制 |

**二、锁定 `process.env`**

把 `process.env` 替换为 Proxy，忽略对上述键的写入和删除。原版在运行期把各层 `settings.json` 的 `env`、插件 hooks 写回 `process.env`；锁定后这些写入对上述键无效。

**三、包装 `Bun.spawn` 与 `Bun.spawnSync`**

每个子进程的环境都套用固定的 `TZ`，继承语义与原版一致：

- `Bun.spawn` 不传 `env` 时，继承进程启动时的环境，不包含运行期写入的值（如刷新后的 OAuth token）；
- `node:child_process` 显式传入当前的 `process.env`，包含运行期写入的值；
- 调用方给出的 `env` 原样使用，只覆盖 `TZ`；
- 原版只对 `ps` 显式指定 `TZ=UTC` 以解析 `lstart`，这一处保留。

**四、包装 `Worker`**

包括全局的 `Worker`，以及经 `require("worker_threads")` 取得的 `Worker`。Worker 有独立的 `process.env` 副本和 `Bun.spawn`，主线程的 Proxy 对它无效。包装后：

- 每个 Worker 的 `env` 为调用方给出的 `env`（未给出时为启动时的环境）套用全部固定值；
- 通过 `preload` 先运行 `src/runtime/pinned-env-worker.js`，在 Worker 内再次调用 `pinEnvironment()`，使 Worker 中的 `process.env` 同样被锁定，子进程同样使用固定的 `TZ`；
- 调用方的 `workerData`、`preload` 等选项原样保留。

另有两处补丁使时区在 `process.env` 之外同样固定：

- Bash 工具的每条命令在 `eval` 前导出固定的 `TZ`（`core/conversation-engine.js`「export TZ=America/Los_Angeles」）。导出语句位于 shell 快照、`~/.zshenv` 与 SessionStart hook 的环境脚本之后，用户的 shell 配置无法覆盖。
- 接续旧会话时，记录中保存的每轮时间戳按固定时区重新格式化后再发送（`core/conversation-engine.js`「Number.isNaN(Date.parse(」）。

### 非必要网络流量关闭后不可用的功能

- 远程会话、Remote Control、`/teleport`、从 claude.ai 发起到本机的会话；
- 团队记忆同步、claude.ai 插件同步、设计同步、`DesignSync` / `Projects` 工具；
- 自动更新检查与版本提示、更新日志（本机缓存中的除外）；
- 官方 MCP 目录（`/mcp-registry`）；
- 官方插件市场的自动安装，以及从 `downloads.claude.ai` 下载与更新官方插件市场；
- 首次引导开始时的连通性检查；
- 登录引导（bootstrap）：不获取服务端下发的模型列表等附加信息，使用内置的默认值；
- 内置 `gh api`、文件上传到 Anthropic、会话反馈问卷、终端标题等。

原版有三处访问不受这个开关控制，由补丁关闭：

| 原版的行为 | 补丁 |
|---|---|
| 从 GCS 下载官方插件市场，访问 `downloads.claude.ai` | 下载函数的开头加入判断（`core/conversation-engine.js`「非必要流量已关闭：不下载官方插件市场」） |
| 交互界面启动后自动安装官方插件市场：下载失败时用 `ssh` 探测 `github.com`，再从 GitHub 克隆到 `<配置目录>/plugins/marketplaces` | 自动安装的入口加入判断（`ui/repl-screen.js`「非必要流量已关闭：不自动安装官方插件市场」） |
| 首次引导开始时检查连通性，访问 `api.anthropic.com` 与 `platform.claude.com` | 引导流程不加入这一步（`ui/preflight-check-failed.js`「非必要流量已关闭：首次引导不检查连通性」） |

用户执行 `plugin marketplace add`、`plugin marketplace update` 时仍按原版访问所指定的 Git 仓库；更新官方插件市场时不经 `downloads.claude.ai`，直接从 GitHub 克隆。首次引导不检查连通性的代价：无法连接服务端时，引导不提示，问题在第一次模型请求时才报告。

关闭遥测的代价：GrowthBook 不拉取，特性开关只使用离线默认值；从 Claude Desktop 远程发起到本机的 Remote Control 会话可能被拒绝（原版提示 "feature-flag evaluation is off"）。

验证范围：隔离 HOME、假 API 直连，环境变量和 `settings.json` 都把该变量设为空串，测试环境中关闭官方插件市场自动安装的变量也去掉。外部访问用只做记录的 HTTP 代理和 `ssh`、`git` 的替身记录（`test/harness.js` 的 `trapExternalAccess`）：`-p`、交互界面启动并完成一轮对话、首次引导都没有外部访问，只有发往 `ANTHROPIC_BASE_URL` 的模型对话。真实登录后的 OAuth 刷新等请求依据源码，未实测。

测试：`test/dev/runtime.test.js` 的 `pinned-env`（固定值、锁定、子进程与 Worker 的继承语义），`test/dev/smoke.test.js` 的两个「非必要网络流量始终关闭」用例（`-p`；交互界面启动与首次引导）。

## GPU 信息

- Remote Control 主机画像不探测 `nvidia-smi`、`/usr/local/cuda/version.json`、`/proc/driver/nvidia/version`（`mcp/bridge-host-profile-collect.js`）。
- 项目扫描不识别 CUDA 项目（`.cu` / `.cuh`、CMake、conda），`tengu_init` 的 `os_locked_toolchain` 不会取值 `cuda`（`vendor/google-auth/xcode-project.js`）。

## 记忆

### 记忆内容不发送

发给模型的只有记忆文件的路径：

| 内容 | 处理 | 位置 |
|---|---|---|
| `MEMORY.md` 索引（含宿主经 `CLAUDE_COWORK_MEMORY_INDEX_CONTENT` 注入的索引） | 只检查文件是否存在，正文替换为一句占位文本，路径仍然发送 | `core/conversation-engine.js`「(path only; contents not loaded)」 |
| 相关记忆召回 | 关闭：选择器不把记忆文件的描述发给模型，召回的正文不放入消息 | `core/conversation-engine.js`「记忆内容不发送：不做相关记忆召回」 |
| 账号记忆与 cowork 记忆快照 | 不渲染到消息中 | `core/conversation-engine.js`「cowork_memory_context: () => [], account_memory_recall: () => []」 |
| 子代理记忆、团队记忆索引 | 只给出路径 | `context/org-memory-writes-setting-changed.js`「Team memory index (contents not loaded」 |
| 后台记忆提取 | 不运行（它会把已有记忆的清单和对话发给模型） | `context/extract-memories-extraction.js`「记忆内容不发送：不运行后台记忆提取」 |
| 记忆整理 | 不运行（它会把记忆文件的内容发给模型） | `context/auto-dream-skipped.js`「记忆内容不发送：不运行记忆整理」 |

系统提示词的 `# Memory` 一节之后追加 `# Memory access policy` 段落：说明只发送了记忆文件的路径，用户没有明确要求时不读取、搜索或打开记忆目录中的文件（`context/org-memory-writes-setting-changed.js`「Memory access policy」）。

由此带来的变化：

- 模型仍知道记忆目录和 `MEMORY.md` 的路径，仍可用 Edit、Write 保存记忆。追加的政策是提示，不具强制力；强制的部分是下一节的读取确认。
- 后台记忆提取和记忆整理关闭后，不再自动生成新的记忆，记忆只在用户明确要求时保存。
- 系统提示词中原有的一句 "`MEMORY.md` is the index loaded into context each session" 未改动，与追加的政策不一致，以追加的政策为准。
- 团队记忆索引依赖服务端的记忆库，这一处只改动了文本格式化函数，未实测。

测试：`test/dev/smoke.test.js` 的「记忆内容不发送，只发记忆文件的路径」。

### 读取记忆文件需要确认

任何会读取记忆目录中文件的工具调用，一律先询问用户，不论权限模式、allow 规则、hook 还是自动模式的分类器如何判断。

实现在 `src/runtime/memory-guard.js`，接在权限检查链中 `tool.checkPermissions` 及其后几步之后（`core/conversation-engine.js`「memoryReadGuard(」）。返回带 `safetyCheck` 的 `ask`：

- 断路器名为 `memoryRead`，在断路器表中与 `outsideReadsBlocked` 同级（`permissions/classifier-transcript-too-long.js`「memoryRead:」）：标记为 `bypassImmune`，因此 bypassPermissions 模式下同样询问；不交给分类器，只能由用户回答。
- `hooksMayAllow: false`：hook 返回的 allow 无效。
- `suppressAlwaysAllowRule: true`：界面不提供「以后都允许」的选项。

记忆目录包括：

- 当前项目的自动记忆目录，取原版解析出的路径，通常为 `<配置目录>/projects/<项目>/memory`；
- 其他项目的自动记忆目录：`<配置目录>/projects/*/memory` 与 `~/.claude/projects/*/memory`；
- `agent-memory` 与 `agent-memory-local`：`<配置目录>`、`~/.claude` 与当前项目 `.claude` 下的这两个目录，以及任何位置的 `.claude/agent-memory`、`.claude/agent-memory-local`；
- 设置了 `CLAUDE_CODE_REMOTE_MEMORY_DIR` 时，其下的 `agent-memory` 与 `projects`。

`<配置目录>` 与 `~/.claude` 中的其他文件（`settings.json`、会话记录等）不属于记忆目录，直接读取不触发询问。

| 调用 | 判断方式 | 可靠程度 |
|---|---|---|
| 带路径的只读工具（Read 等） | 取工具的 `getPath`，展开 `~`、相对路径并解析符号链接（目标不存在时解析最长的已存在前缀）后，判断是否位于记忆目录中。Grep、Glob 等搜索工具另外检查搜索范围是否包含已存在的记忆目录 | 直接路径、符号链接、记忆目录的上级搜索范围都会触发询问 |
| Bash / PowerShell | 按 shell 的引用规则把命令切成词，对每个词按真实路径判断：展开 `~`、`$HOME`、`${HOME}` 与相对路径，`VAR=路径`、`--选项=路径`、`-x路径` 取其中的路径。引号内的文本按同样的规则再切分，`sh -c "…"`、`eval "…"`、`"$(…)"`、`python -c "…"` 中原样写出的路径同样识别。另外识别 grep / ugrep 的递归选项、rg / ag / ack、find / bfs、PowerShell Get-ChildItem 的递归搜索，检查显式起点或默认的当前目录是否包含记忆目录；支持先 `cd` 再搜索、管道，以及 `sh -c`、`eval`、命令替换中的搜索。只提到名字、非递归列目录、搜索普通的 `src` 目录不触发询问 | 尽力而为，盲区见下文 |
| 写类工具（Write、Edit） | 不询问：保存记忆需要写入 | 写入不读取内容；但 Edit 不要求先 Read，模型已知文件中某段文字时可以不经询问地修改它 |

无人回答时（`-p` 等），询问记为 `permission_denials`，调用不执行，内容不进入请求。交互界面显示 "Do you want to proceed?"：选择 No 时内容不发送，选择 Yes 时发送。

已知的盲区（Bash 只依据命令文本判断，下列情形无法识别，调用正常执行）：

- 路径由变量或通配符拼接，例如 `d=...; cat $d/mem*/*.md`、`cd <项目目录> && cat memory/*.md`；
- 脚本文件内部的读取，以及解释器的内联代码（`python -c`、`node -e` 等）中计算得出的路径，例如用 `os.path.join` 拼接；
- 未识别的递归工具作用于记忆目录的上级目录（`tree`、`tar`、`cp -r` 等），`command`、`exec`、`env`、`sudo` 以外的包装命令之后的搜索（如 `timeout 5 rg …`），包装函数，或经搜索范围内部的符号链接访问不在已知记忆根目录中的记忆。

引号内的文本不区分是否会被执行：提交说明等文本中原样写出记忆目录中的路径时，同样询问。

覆盖这些情形需要在沙箱中限制读取范围，或在权限设置中对记忆目录添加 deny 规则。

测试：`test/dev/runtime.test.js` 的 `memory-guard`（直接读取、选项中的路径、引号内的文本、上级递归范围、默认当前目录、`cd`、管道、符号链接、Grep / Glob，与普通搜索的对照，以及上述盲区）；`test/dev/smoke.test.js` 的「读取记忆文件需要确认」（真实二进制加假 API，在各权限模式、allow 规则与 hook 下验证 Read 和 Bash；递归搜索上级目录、写在引号内或选项里的路径；交互界面的 No 与 Yes 两个分支）。

## safeguards 脱敏

auto 模式（交互界面不带参数时默认进入）和 plan 模式下，每次工具调用先由分类器判断是否危险。分类器有两条路径，`dev` 对二者都做了脱敏，实现在 `src/runtime/safeguards-redact.js` 和补丁中：

| 路径 | 使用条件 | 数据位置 |
|---|---|---|
| 服务端分类器 | 端点实现了服务端分类器（Anthropic 一方端点） | 主请求的 `safeguards` 字段 |
| 本地分类器 | 端点没有实现服务端分类器时自动回退（`core/conversation-engine.js`「arbiterWithLocalFallback」）。自定义 `ANTHROPIC_BASE_URL` 的中转站通常属于这种情况，界面提示 "isn't compatible with this update" | 另发的不带工具的请求，由模型判断这次调用 |

两条路径都不发送用户编写的 `autoMode` 规则、权限规则和用户名：服务端分类器收到空的规则列表，本地分类器的提示词与没有配置这些规则时逐字相同。代价是分类器只按内置的默认规则判断：

- `autoMode.allow`、`autoMode.environment` 中放行或说明的内容不再生效，相应的调用更可能被拦截并要求确认；
- `autoMode.soft_deny`、`autoMode.hard_deny` 中添加的拦截规则不再生效，只有内置的拦截规则起作用。需要硬性禁止某类调用时应使用权限 deny 规则：它由本地的权限检查强制执行，不依赖分类器；
- 分类器不再识别"换用其他工具绕过权限 deny 规则"的做法；
- 分类器不知道用户名，无法识别以用户名开头的个人分支。

### 服务端分类器

原版每个请求都带 `safeguards` 字段（beta 头 `dangerous-tool-use-2026-09-03`），其中的 `classifier_context` 在构造它的函数返回前统一脱敏（`core/conversation-engine.js`「redactClassifierContext(」）：字段仍然发送，形状不变，只清除可以识别用户、机器和项目的值。

| 字段 | 处理 |
|---|---|
| `user_identity` | `null`（原版取 `GITHUB_ACTOR`、`USER`、`USERNAME`，最后取 `git config user.email` 的 `@` 前部分） |
| `home_dir`、`rule_roots` | 删除、置空（schema 中为可选或接受空对象） |
| `rules.allow/deny/ask` | `[]`（权限规则原文，路径中常含用户名和项目名） |
| `auto_mode.*` | `[]`（用户编写的自然语言规则） |
| `trusted_directories.additional/network` | `[]`（`--add-dir` 目录、允许的网络域名） |
| `git_state.branch/default_branch/root` | `null` |
| `git_state.status.counts` | 计数置 0 或 `null`，保留 `clean` 标志 |
| `git_state.visibility` | `remotes`、`visibility_cache` 清空，`push_remote` 置 `null`，`origin` 的 host、remote 置为 `"redacted"`，保留 `visibility` 的取值 |
| `chrome_navigation`、`artifacts` | 去掉标签页网址与标题、工件信息，只保留 `enabled` |
| `prior_turn_context[].context.git_state` | 与 `git_state` 相同 |

保留的字段：`v`、`permission_mode`、`platform`、`live_cwd`、`trusted_directories.primary`、`block_reads_outside_working_directories` 与其他布尔标志、`git_state.cwd`、`git_state.status.clean`。`live_cwd` 保留的原因：分类器据此判断命令是否在工作目录内，且主请求的 `Environment` 中已包含这个路径。

经中转站实测，带脱敏后 `safeguards` 的请求被正常受理。中转站没有实现服务端分类器，因此脱敏后的分类质量未在一方端点上验证。

### 本地分类器

本地分类器的请求由系统提示词和消息组成，`dev` 的处理如下：

| 部分 | 原版的内容 | `dev` 的处理 |
|---|---|---|
| 系统提示词：规则模板 | 内置的分类规则，其中的槽位填入 `autoMode` 的 `allow`、`soft_deny`、`hard_deny`、`environment` 原文，另有一段列出权限 deny 规则原文 | 槽位不填入用户的规则，不写 deny 规则段落（`core/conversation-engine.js`「本地分类器脱敏」）。得到的提示词与原版在没有配置这些规则时逐字相同 |
| 系统提示词：`## Session Context` | 用户名，取值与 `user_identity` 相同 | 不写这一节 |
| 消息：命令前的 `repoVisibility` 元信息行 | 当前仓库和推送目的地的 `属主/仓库名`、分支名、可见性。只出现在 push、`remote set-url`、`gh pr create` 等可能向外发送内容的命令之前 | 仓库名、分支名只在待判断的命令中原样出现时保留，否则仓库名替换为 `"redacted"`、分支名删除；可见性保留（`core/conversation-engine.js`「redactRepoVisibility(」） |
| 消息：命令前的 `gitStatus` 元信息行 | 工作区是否干净，有改动时为计数；只出现在 `git reset --hard`、`rm -rf` 等会丢弃改动的命令之前。特性开关 `gitStatusUploads` 开启时，`git add`、`commit`、`push` 之前改为 `git status` 的文件清单 | `clean` 标志与计数原样保留；文件清单替换为计数（`core/conversation-engine.js`「redactGitStatus(」）。`gitStatusUploads` 的离线默认值为关闭，`dev` 不拉取特性开关，因此文件清单这一形式实际不会出现 |
| 消息：CLAUDE.md、对话中的用户提问和工具调用、待判断的命令 | 原文 | 不改动：这些内容已在主请求中发往同一个端点，且是分类器判断的依据 |

可见性保留的原因：它直接决定判断结果，推送到公开仓库视为发布。原版查询可见性需要访问 GitHub API；隐私级别不是默认值时该查询不发出（`context/team-memory-sync.js`「allow_repo_visibility_probe」所在的函数）。`dev` 固定关闭了遥测，因此取值总是 `"unknown"`。

只读命令（如 `echo`）不触发分类，不发这个请求。分类分两个阶段：第一阶段只要求返回严重程度的分数，分数较高时再发第二个请求，要求完整的判断；两个请求使用同一份提示词和消息。

经中转站实测（分类器由 `claude-sonnet-5` 担任）：脱敏后的请求被正常受理，普通的联网命令被放行，`git reset --hard` 并修改 remote 的命令进入第二阶段后被放行。

### 未改动的部分

- 主请求中原有的内容，包括 `gitStatus` 块中的当前分支名和主分支名；
- 其他权限模式（default、acceptEdits、dontAsk、bypassPermissions）不调用分类器，也不发送 `safeguards`。

### 测试

- `test/dev/runtime.test.js` 的 `safeguards-redact`：`classifier_context` 的脱敏（输入的形状取自原版的真实输出），两种元信息行的脱敏，以及各系统的生成源码都已接入这些处理。
- `test/dev/smoke.test.js` 的「safeguards 脱敏」：真实二进制，把用户名、分支、remote、权限规则、autoMode 规则、`--add-dir` 都设为可识别的值，检查它们都不出现在 `safeguards` 中，且路径只有工作目录。
- `test/dev/smoke.test.js` 的两个「本地分类器」用例：真实二进制加假 API（没有服务端分类器，使用本地回退），假 API 充当分类器。检查分类器的每个请求中都没有用户名、规则原文、当前仓库的名字、分支和文件名，命令中写明的仓库保留；分类器放行时命令执行，判定拦截时命令不执行并记为被拒绝的调用。

## 拒答后的重试

服务端以拒答结束响应时（`stop_reason: "refusal"`，如 `frontier_llm`），原版使用同一个模型重试 1 次，并提示或静默切换到回退模型。`dev` 的行为如下。

### 重试与换模型

- **最多连续重试 10 轮**，每轮使用同一个模型、同一份历史（`core/query-loop.js`「REFUSAL_RETRY_MAX」）。界面和 `--output-format stream-json` 中都显示 `The response above was cut off by the server · retrying with the same model (n/10)`。
- **只计连续被拦截的次数**：重试之后得到正常的响应（例如模型发出工具调用并执行），再次被拦截时从 1/10 重新计数。一次提问中被拦截的总次数因此没有上限，每一段连续拦截最多重试 10 轮。
- **不换模型**：原版在拒答后显示底部选择框（"Model switch"），或在已开启时静默切换到回退模型。`dev` 中回退模型一律为空（`core/conversation-engine.js`「拒答后不切换模型」、`api/anthropic-client.js`「拒答后不切换模型」），两条路径都不触发，请求中的 `model` 始终是原模型。
- **10 轮后仍被拦截**：补齐未执行的工具结果，把拒答作为 API 错误输出（`terminal_reason: "api_error"`，`stop_reason: "refusal"`，`-p` 退出码为 1），本轮结束；下一条消息正常发送，不显示任何选择框。一段连续拦截最多产生 11 个请求：原请求 1 个，重试 10 个。
- 原版的"双击 Esc 编辑上一条消息"提示仍保留在拒答文案中；该提示是文案的一部分，不是对话框。

### 拒答后的历史

- 被拦截那一轮的提问、已输出的文字和工具调用全部保留，包含在重试请求和下一条消息的历史中。
- 不再向历史追加 "Your response above was stopped by a safety classifier…" 的提示；为未完成的工具调用补充的结果改为中性措辞："Not run: …ended before the call was executed" / "Interrupted: …ended while the call was running; it may have partially or fully completed"（`core/query-loop.js`「the response containing this tool call ended」）。
- 拒答本身（`stop_details`、界面上的 "safeguards flagged this message" 文案）在原版中即不进入请求；重试提示只在界面显示，同样不进入请求。

### 临时上传身份

每次拒答重试生成一份临时身份，只替换发往服务端的值（`src/runtime/upload-identity.js`，`core/query-loop.js`「newUploadIdentity(」）：

| 值 | 形状 | 使用位置 |
|---|---|---|
| 会话 ID | UUID | `metadata.user_id.session_id`、请求头 `X-Claude-Code-Session-Id` |
| 设备 ID | 32 个随机字节的十六进制，与 `userID` 同形 | `metadata.user_id.device_id` |
| 提示 ID | UUID | 请求头 `x-claude-code-prompt-id`、账单头 `cc_prompt_id` |

各标识原有的含义见 [identifiers.md](identifiers.md)。

**重试请求**另有以下处理，使它不指向被拦截的请求：

- 原本会续接的 `thread` 改为 `create`，不带线程的 `previous_message_id`（`core/conversation-engine.js`「forceCreate("refusal_retry_identity")」）；
- 账单头不带 `cc_prev_req`，请求体 `diagnostics.previous_message_id` 为 `null`（`core/conversation-engine.js`「uploadIdentity === void 0 ?」）；
- 同一次重试的请求头与 metadata 一致；流式请求遇到 404 改用非流式重发时，沿用同一份身份。

**采用**：重试得到完整的响应后，该身份被采用（`core/query-loop.js`「adoptUploadIdentity(」）。

- 完整的响应指：不是拒答，不是 API 错误，没有被中断。输出被 `max_tokens` 或上下文窗口截断的响应同样视为完整，因为服务端已受理请求。
- 采用之后，同一进程中发往模型的所有请求都沿用该身份，包括工具轮、标题等辅助请求、子代理和下一条消息，不再回到本地 ID；这些请求仍然指向上一次成功的请求（`req_…`）和消息（`msg_…`）。
- 下一次重试成功时，由新的身份取代。
- 重试再次被拒，或遇到 4xx / 5xx / 过载时，该身份作废；连续 10 轮用尽时同样不采用。之后沿用此前采用的身份，没有时使用本地 ID。

**作用范围**：

- 会话 ID 记在本地会话名下：`/clear`、`/resume` 切换本地会话后，使用新会话自身的 ID。
- 设备 ID 在进程内通用。
- 提示 ID 按「问」对应：被替换的那一问后续的工具轮沿用替换后的提示 ID，下一问的提示 ID 是新生成的（`core/conversation-engine.js`「promptIdFor(」）。
- 只保存在进程内存中，不写盘。重启进程（含 `--continue`）从本地 ID 开始；再次被拒答时，同样重试并更换身份。

**问数与轮数**：账单头中的 `cc_prompt_index` / `cc_turn_index` 由历史按本地会话计数，更换会话 ID 时不会重新计数。新的会话 ID 加上延续原会话的序号，会把新 ID 关联回原会话；因此会话 ID 不是本地 ID 时（重试请求和采用之后的请求）不带这两个字段，回到本地 ID 时带（`core/conversation-engine.js`「turnPositionFor(」）。不改为从 1 重新计数：那样的序号是虚构的，与请求中已有的多轮历史不一致。

**claude.ai 连接器的 MCP 代理**：请求头 `X-Mcp-Client-Session-Id` 在原版中取会话 ID，`dev` 改为进程内一个独立的随机 UUID，与任何发往模型的会话 ID 都不同（`mcp/apply-capability-serve-time-miss.fa8e.js`「"X-Mcp-Client-Session-Id": mcpClientSessionId」，另一份副本 `mcp/apply-capability-serve-time-miss.848f.js`「"X-Mcp-Client-Session-Id": mcpClientSessionId」）。代理连接在启动时建立，整条连接共用服务端下发的 `mcp-session-id`；不做这项改动时，更换会话 ID 之后原 ID 仍出现在同一条连接的每次工具调用中。

**仍与被拦截那一轮相同的内容**，服务端可以据此关联到同一对话：

- 消息历史：被拦截那一轮的提问、已输出的文字、`tool_use` 的 id 和对应的 `tool_result`。保留已完成的部分必然带来这一点。
- 账单头 `cc_version` 末尾 3 位指纹（由首条用户消息算出）。
- `account_uuid`、鉴权凭据。
- 连接器工具调用的 `_meta` 中的 `tool_use` id，以及整条代理连接的 `mcp-session-id`。
- `/ultrareview` 预检请求的 `X-Claude-Code-Session-Id` 仍是本地会话 ID。

**不改动的本地状态**：本地会话 ID、磁盘上的 `userID`、账号 ID、`parent_session_id`、Agent 与工具调用 ID、会话文件及本地消息 UUID、历史、`--continue`。`x-client-request-id` 与查询链 ID 在原版中即为每个请求各自生成，不属于临时身份。

**中转站形态**：自定义 `ANTHROPIC_BASE_URL` 时，提示 ID 与客户端请求 ID 头、`cc_prev_req`、`cc_prompt_index` / `cc_turn_index`、`diagnostics` 和消息线程在原版中即不发送，重试只更换 metadata 中的会话 ID、设备 ID 和 `X-Claude-Code-Session-Id`。

### 测试

- `test/dev/runtime.test.js` 的 `upload-identity`：身份的形状、采用与沿用的规则、会话作用域、提示 ID 的对应、问数与轮数的取舍、连接器代理的客户端会话头。
- `test/dev/smoke.test.js`，真实二进制加脚本化的假 API（`test/dev/scripted-api.js`）：
  - 重试轮数与提示、连续计数、10 轮用尽后的结束方式、始终使用原模型；
  - 历史中保留已完成的部分、没有拒答提示；
  - 一方端点形态下逐字段检查临时身份（含 `cc_prev_req` 与 `diagnostics.previous_message_id`）、重试成功后工具轮的沿用、流式 404 改非流式重发、`--continue` 新进程从本地标识开始；
  - 中转站形态（默认配置）下会话与设备 ID 的更换；
  - 交互界面（伪终端）中的采用与沿用、被拒的候选身份不采用、10 轮用尽后回到本地标识、第二问被拒时不带延续原会话的问数与轮数、不显示换模型的选择框。
- claude.ai 连接器代理需要 claude.ai 登录和官方代理地址，冒烟测试无法覆盖；单元测试检查各系统的生成源码都使用 `mcpClientSessionId`。

## 后台会话随退出结束

原版的后台会话由后台守护进程运行，不随前台程序退出：

- 交互界面中输入框为空时按 ←，当前会话转给守护进程名下的 worker 进程，前台改为显示 agents 视图（`ui/repl-screen.js`「Press ← again to open agents」）。agents 视图中新建的会话、`/fork` 分出的会话同样由守护进程运行。
- 前台程序退出后，守护进程、worker 与备用进程继续运行。再次启动时，这些会话仍列在 agents 视图中；`--continue` 不接续最近的会话，只提示它正在后台运行、需经 `claude agents` 接入（"Your most recent conversation is running in the background"）。
- worker 的凭据取自守护进程的环境，不取派发它的前台进程的环境：守护进程以某个 `ANTHROPIC_AUTH_TOKEN` 启动后，前台换用另一个值派发的会话，请求中仍是守护进程启动时的值（原版 2.1.310 与本项目实测相同）。因此退出、修改环境变量、再启动之后，已转入后台的会话和经同一个守护进程新派发的会话都使用原来的值。
- 在接入的后台会话里按两次 Ctrl+C 或执行 `/exit`，只从会话分离并回到 agents 视图，再按两次 Ctrl+C 才退出程序。

`dev` 中，交互界面派发的后台会话随程序退出而结束；交互进程未执行退出流程就结束时，遗留的会话在下一次启动时回收：

| 操作 | 原版 | `dev` |
|---|---|---|
| 退出程序：在 agents 视图中按两次 Ctrl+C，或进程收到 SIGHUP、SIGTERM | 后台会话与守护进程继续运行 | 归属于本进程的后台会话结束，其遗留的后台命令一并结束，任务状态删除；没有其他后台会话与前台程序时守护进程随之结束 |
| 在接入的后台会话里按两次 Ctrl+C、两次 Ctrl+D，或执行 `/exit` | 回到 agents 视图 | 退出程序，并按上一行处理 |
| 在接入的后台会话里按 ← | 回到 agents 视图 | 不变 |
| 再次启动 | 原来的后台会话仍在运行，需经 agents 视图接入 | 没有遗留的后台会话；`--continue` 把保留的会话记录作为普通会话接续，使用启动时的环境 |

会话记录（`projects/` 下的 `.jsonl`）不属于任务状态，退出时保留：转入后台之后在会话里进行的对话同样可以接续。

### 归属与结束

`src/runtime/session-bound-agents.js` 把后台会话的归属写入它的任务目录，交互进程退出时结束归属于它的会话。

**归属**：任务目录中的 `owner.json`，内容为派发该会话的交互进程的 pid、启动时间与主机名。pid 会被系统重复使用，与启动时间一起才标识一个进程。

- **写入**：新派发的会话在派发之前写入（`git/bg-respawn-no-transcript.js`「markOwned(T)」）。写在派发之前，派发尚未完成时交互进程退出，退出流程仍能找到它。重新启动已有任务的 worker（从 agents 视图打开已停止的会话、`respawn`）不写入，该任务原有的归属或没有归属的状态保持不变。
- **没有归属的会话**：命令行的 `--bg`、`/background` 与退出对话框中的 "Move to background and exit" 派发后删除归属（`git/bg-respawn-no-transcript.js`「disown(_o(u.short))」、`ui/repl-screen.js`「disown(_o(」）。这几种是用户明确要求转入后台后离开，会话在程序退出后继续运行，与原版相同：普通会话里后台命令尚未结束时退出并选择 "Move to background and exit"，会话连同该命令保留，之后可经 `attach` 或 agents 视图接入。
- **后台会话派发的会话**：后台会话的 worker 派发会话时（在其中执行 `/fork`），沿用它自己那个任务的归属。worker 的环境来自守护进程而不是派发它的交互进程，归属因此从任务目录读取（环境变量 `CLAUDE_JOB_DIR`）。没有归属的会话分出的会话同样没有归属。

归属写在磁盘上而不在进程内存中：在后台会话里分出的会话、派发尚未完成的会话、交互进程未执行退出流程时遗留的会话，都能按它找到。

**退出时结束**：在退出流程中、终端已恢复且退出时限的计时器已启动之后执行（`core/conversation-engine.js`「await endOwnedBackgroundSessions()」），最多等待 8 秒，其间退出时限相应放宽。worker 进程自身退出时不执行：它名下的会话归属于交互进程。对每个归属于本进程的任务：

1. 请守护进程结束 worker，等待确认；
2. 结束会话遗留的后台命令。worker 被结束时把仍在运行的后台命令写入任务目录的交接清单（`workflows/adopt-exit-handoff.js`「exit handoff」），留给该会话下一次启动的 worker 接管；会话随即被删除，不会再有 worker 接管。原版的删除在 worker 写出清单之前检查它，命令因此遗留（`claude rm` 实测如此）。这里等待清单最多 0.4 秒（实测 worker 结束后约 0.13 秒写出），再结束其中登记的进程；
3. 调用原版删除任务的函数，效果与 `claude rm <id>` 相同：删除任务状态目录。

之后守护进程名下没有其他仍在运行的会话、也没有其他前台程序连着它时，向它发出原版的 `yield` 请求：临时启动的守护进程立即结束（`tasks/daemon-main.js`「yielding to a foreground/service daemon」），注册为系统服务的守护进程不响应。下次需要时，守护进程以当时的环境重新启动。不发出 `yield` 时，临时守护进程在最后一个会话结束、最后一个前台程序断开 5 秒后自行结束（`tasks/daemon-main.js`「with no clients — exiting」），这是原版的行为。

**启动时回收**：派发模块加载时，回收归属进程在本机已不存在的会话（`git/bg-respawn-no-transcript.js`「reapOrphanedBackgroundSessions();」），做法与退出时相同，不等待完成。交互进程被强制终止或崩溃、或退出流程未在时限内完成时会留下这样的会话。归属的主机名与本机不同时不回收：配置目录由多台机器或容器共用时，其他机器上的进程无法在本机判断是否存活。

实测：从发出退出按键到进程退出约 0.5 至 0.7 秒；程序退出后，worker 的伪终端宿主进程至多再存活约 6 秒。

### 在后台会话里退出

接入后台会话时，界面由 worker 进程绘制，前台进程只转发终端数据。原版中 worker 收到退出操作后向接入方发出分离请求，接入方回到 agents 视图。`dev` 的改动：

- worker 的退出操作在分离请求中带上一条固定的消息（`ui/repl-screen.js`「请接入方退出整个程序，而不是回到 agents 视图」、`ui/exit-nudge.js`「后台会话里的 /exit：请接入方退出整个程序」）；按 ← 发出的分离请求不带这条消息。
- 接入方收到这条消息时，在接入结果上标记 `exit`（`telemetry/bg-attach-outcome.js`「isExitDetach(」），agents 视图据此结束（`ui/bg-agent-action.js`「会话里的退出操作：结束 agents 视图，程序随之退出」），程序进入退出流程。此时终端仍在接入时进入的备用屏幕中，结束前写出离开备用屏幕的序列；各退出路径结束时的终端模式与原版一致（实测）。
- 接入方是命令行的 `claude attach <id>` 时，原版在分离后转入 agents 视图；`dev` 中 attach 显示这条消息后结束（`git/bg-respawn-no-transcript.js`「claude attach 分离后不转入 agents 视图」）。会话不是 attach 进程派发的，继续运行；消息中写明这一点。

这条消息与原版的分离请求一样，经 worker 输出中的带内转义序列传给接入方。会话内容中的控制字符在界面渲染时去除；伪造该序列的情形未专门验证。

### 未覆盖的情形

- **强制终止到下一次启动之间**：交互进程被 SIGKILL 结束或崩溃时不执行退出流程，它的后台会话与守护进程继续运行，到下一次启动时才回收。
- **守护进程仍在运行时派发的会话**：守护进程名下还有其他后台会话（没有归属的，或其他窗口中的）、或还有其他前台程序连着它时，守护进程不结束，此后转入后台的会话沿用它启动时的凭据。
- **守护进程由已安装的 `claude` 启动**：守护进程按配置目录区分（`fs/attach-journal.js`「cc-daemon-」），与已安装的 `claude` 共用配置目录时也共用守护进程。后台会话在守护进程预先启动的备用进程中运行，使用守护进程所属的可执行文件：守护进程由原版启动时，本项目转入后台的会话运行的是原版程序，本文的各项改动在这些会话里不生效，在其中退出时回到 agents 视图，在其中分出的会话没有归属；前台进程退出时的结束与删除仍然执行。以上在二者版本相同时实测，版本不同时守护进程的交接未实测。
- **重新启动自身**：agents 视图切换到较新的版本等情形下，程序以替换进程映像的方式重新启动，pid 与启动时间不变，归属仍然成立；无法替换进程映像时改为启动子进程，父进程随子进程结束而直接退出，它的会话到下一次启动时回收（依据源码，未实测）。
- **带 worktree 的会话**：worktree 中有未提交或未推送的内容时，原版的删除保留任务状态与 worktree，worker 进程已结束（依据源码，未实测）。
- **后台命令以外的遗留工作**：交接清单中的 workflow、子代理等条目不处理；它们随 worker 进程结束。
- **普通会话的退出确认**：没有转入后台的会话里有后台任务（后台命令、子代理等）时，原版的退出确认对话框不变。
- **界面文案**：以下原版文案未改动，与 `dev` 的行为不一致：agents 视图中的 "they keep running even if you close the terminal"、退出提示中的 "will keep running"、后台会话里第一次 Ctrl+C 的 "Press Ctrl-C again to detach (session keeps running)"、退出时的 "Your conversation was backgrounded"。

测试：

- `test/dev/runtime.test.js` 的 `session-bound-agents`：归属的写入、读取与取消，退出时结束的范围与顺序，让出的条件，时限，启动时回收的范围，按交接清单结束后台命令，worker 进程沿用任务的归属，以及各系统的生成源码都已接入。
- `test/dev/smoke.test.js` 的「后台会话随退出结束」，真实二进制加假 API，在伪终端中操作（`test/dev/agents-session.js`）：
  - 在后台会话里退出、从 agents 视图退出、会话里按 ← 与执行 `/exit`：程序退出后没有后台进程与任务，更换凭据后接续的请求使用新凭据并带有完整历史；
  - 带未结束后台命令的会话转入后台后退出：命令进程一并结束，终端离开备用屏幕；
  - 交互进程被强制终止后，遗留的会话在下一次启动时回收；
  - 没有归属的会话不受影响：`/background` 与 `--bg` 派发的任务保留；退出对话框中选择 "Move to background and exit" 时会话连同后台命令保留，另一个会话进入 agents 视图再退出不影响它；从 agents 视图重新打开已停止的会话再退出，该会话保留；
  - 用 `attach` 接入的会话里退出时 attach 结束、会话保留。

## 与已安装的 claude 共存

共用的配置、会话与凭据，以及原版的两处影响，见 [runtime.md](runtime.md#安装与共存)。`dev` 用补丁关闭了这两处行为，不需要另行设置：

| 位置 | 改动 |
|---|---|
| `fs/deep-link-register-failed.js`「不注册 claude-cli:// 处理程序」 | 不自动注册 `claude-cli://` 处理程序。网页深链接启动的仍是已安装的 `claude` |
| `fs/auto-updater-forced-downgrade.js`「claw-code does not update itself」 | `update`、`upgrade` 提示后直接退出 |
| `fs/setup-token-command.js`「claw-code does not install itself」 | `install` 提示后直接退出 |

升级 `claw-code` 的方式是更新项目后重新执行 `npm run install-cli`。

后台守护进程按配置目录区分，同样与已安装的 `claude` 共用，影响见[未覆盖的情形](#未覆盖的情形)。

测试：`test/dev/smoke.test.js` 的「与已安装的 claude 共存」（三个子命令不联网、不写 `installMethod`、不创建 `~/.local`；交互使用后不注册处理程序）。

## 生成源码上的改动

`extract/patches/2.1.310.patch` 的全部内容。各系统的改动相同，位置对应：

| 文件 | 改动 | 所属 |
|---|---|---|
| `core/conversation-engine.js` | Bash 命令前导出 `TZ`；接续会话时重新格式化每轮时间戳 | 时区 |
| 同上 | 官方插件市场下载前检查 essential-traffic | 非必要网络流量 |
| 同上 | `MEMORY.md` 只发送路径；关闭相关记忆召回；账号与 cowork 记忆不渲染；权限检查链追加 `memoryReadGuard` | 记忆 |
| 同上 | `classifier_context` 返回前脱敏；本地分类器的提示词不填入用户规则、不写用户名，两种元信息行脱敏 | `safeguards` |
| 同上 | 回退模型一律为空；重试请求使用临时身份的提示 ID、新建线程、不带上一个请求 ID 与问数轮数；把身份传给 metadata 与客户端 | 拒答重试 |
| 同上 | 退出流程中结束归属于本进程的后台会话，其间放宽退出时限 | 后台会话 |
| `core/query-loop.js` | 重试上限与计数、重试提示、中性的工具结果措辞、生成与采用临时身份 | 拒答重试 |
| `core/system-prompt-blocks.js` | metadata 的会话 ID、设备 ID 取当前应使用的身份 | 拒答重试 |
| `api/anthropic-client.js` | 默认会话请求头取当前应使用的身份；不设置静默回退模型 | 拒答重试 |
| `mcp/apply-capability-serve-time-miss.fa8e.js`、`mcp/apply-capability-serve-time-miss.848f.js` | 连接器代理的客户端会话头改用独立的随机 UUID | 拒答重试 |
| `context/org-memory-writes-setting-changed.js` | 追加记忆访问政策；子代理记忆与团队记忆索引只给出路径 | 记忆 |
| `context/extract-memories-extraction.js`、`context/auto-dream-skipped.js` | 不运行后台记忆提取与记忆整理 | 记忆 |
| `permissions/classifier-transcript-too-long.js` | 断路器表新增 `memoryRead` | 记忆 |
| `mcp/bridge-host-profile-collect.js`、`vendor/google-auth/xcode-project.js` | 去掉 GPU 与 CUDA 探测 | GPU 信息 |
| `ui/repl-screen.js`、`ui/preflight-check-failed.js` | 不自动安装官方插件市场；首次引导不检查连通性 | 非必要网络流量 |
| `git/bg-respawn-no-transcript.js` | 新派发的会话在派发之前写入归属，命令行 `--bg` 派发后删除归属；登记结束会话所需的操作，加载时回收遗留的会话；会话里请求退出时，`attach` 分离后不转入 agents 视图 | 后台会话 |
| `ui/repl-screen.js`、`ui/exit-nudge.js` | 后台会话里的退出操作发出表示退出程序的分离消息；`/background` 与退出对话框派发的会话删除归属 | 后台会话 |
| `telemetry/bg-attach-outcome.js`、`ui/bg-agent-action.js` | 接入方识别该消息，agents 视图离开备用屏幕后结束 | 后台会话 |
| `fs/deep-link-register-failed.js`、`fs/auto-updater-forced-downgrade.js`、`fs/setup-token-command.js` | 不注册处理程序；`update`、`upgrade`、`install` 直接退出 | 共存 |

改动生成源码后须重新生成补丁，做法与检查见 [extract/README.md](../extract/README.md#版本补丁)。

生成源码中的名字是原版混淆后的名字，各系统不同：同一处改动在每个系统的源码里引用的名字各不相同。冒烟测试只运行当前系统的构建产物，其他系统的源码里引用了不存在的名字时，要到该系统上运行才报错（模块顶层的引用使模块加载失败）。`test/dev/patch-identifiers.test.js` 对每个系统的源码做静态检查：补丁新增的行里引用的名字，须在所在模块中有定义或导入。

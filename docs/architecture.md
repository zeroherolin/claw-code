# 架构与运行流程

本文描述 Claude Code 2.1.310 从启动到完成一次对话回合的运行路径，以及 `src/` 各目录的职责。

- 文中的位置用 `文件:行号` 标注，行号对应当前生成的源码；重新生成后，行号可能随格式化结果变化。
- 函数名都是原版混淆后的名字，如 `Ye`、`xu`、`yN`。它们在源码中可以直接搜索到，但不表示含义。
- 模块的原始 chunk id 可以在 `reference/module-map.json` 中查到。

## 1. 分层

```
本项目（手写）
  src/main.js
    runtime/embedded-tools.js   argv0 为 rg / bfs / ugrep 时转交系统工具
    runtime/bun-ant.js          安装 Bun.ant.CellSegmenter
    import ./cli.js
  src/runtime/assets.js         资源定位：assets/ 与 src/ 的绝对路径

原版代码（2568 个模块，只改了排版和引用路径）
  cli.js → cli/main → cli/root-command（commander）
    交互：    cli/session-setup → ui/launch-repl-session → ui/repl-screen（React + Ink）
              → terminal/ink-renderer
    非交互：  cli/headless-print-mode（-p、SDK stream-json）
  两条路径共用：core/query-loop → core/conversation-engine → api/anthropic-client
              → Anthropic Messages API（SSE）
```

## 2. 启动流程

### 2.1 本项目入口 `src/main.js`

1. `dispatchEmbeddedTool()`：如果进程以 `rg`、`bfs` 或 `ugrep` 为 argv0 启动，直接转交系统里的同名工具，不再加载 CLI。原版由内部 Bun 在原生层完成这一步，见 [runtime.md](runtime.md#内嵌命令行工具)。
2. `installBunAnt()`：在公开版 Bun 上补上 `Bun.ant.CellSegmenter`。
3. `await import("./cli.js")`。

编译产物 `dist/claude` 的入口是 `scripts/boot.js`，它在运行期加载 `/$bunfs/root/src/main.js`，之后的流程完全相同。

### 2.2 原版入口 `cli.js`（函数 `Ye`，`src/cli.js:59`）

模块顶层先设置几个进程环境变量（如 `COREPACK_ENABLE_AUTO_PIN=0`），然后调用 `Ye()`。`Ye` 是一个快速路径分发器：能尽早处理的情况就不加载主程序。按顺序依次是：

| 条件 | 去向 |
|---|---|
| `--version` / `-v` | 直接打印 `2.1.310 (Claude Code)` 后返回 |
| 当前目录不可读 | 写启动失败结果，退出 |
| `plugin test` | `cli/early-fetch-vetoed.*` |
| `--chrome-native-host` / `--computer-use-mcp` | `mcp/` 下对应的服务器 |
| `--daemon-worker` / `--bg-pty-host` / `--bg-spare` / `--preload` | 后台会话进程（`tasks/`、`shell/run-pty-host.*`） |
| `remote-control` / `rc` / `bridge` … | `remote/enter-remote-control.*` |
| `self-hosted-runner …` | `remote/self-hosted-runner-*.js` |
| 其余 | 预读 MDM 配置、预取 Keychain，然后 `import("./cli/main.q3ah.js")` 并调用 `main()`（`src/cli.js:493`） |

### 2.3 `cli/main`（`xu`，`src/cli/main.q3ah.js:893`）

- `xu` 依次处理 `--handle-uri` 深链接、macOS URL handler 启动、旧参数改写，然后调用 `sr()`。
- `sr()`（`:929`）调用 `cli/root-command` 的 `Mis()` 构建 commander 程序，并注入回调，其中包括：
  - `runInteractiveSession`：指向本文件的 `dr()`；
  - `runOnboarding`：首次引导；
  - `showSecurityDialog`、`handleInvalidSettings` 等界面回调。
- `sr()` 还会注册子命令：`mcp`、`plugin`、`auth`、`setup-token`、`auto-mode`、`gateway` 等，完整列表见 [CLI.md](reference/CLI.md)。最后执行 `program.parseAsync(process.argv)`。
- 带 `-p` 时只注册根命令，然后立即解析，跳过子命令注册，这样启动更快。

### 2.4 根命令 `cli/root-command`（`Mis`，`src/cli/root-command.fnas.js:699`）

- `preAction` 钩子（`:703`）：初始化遥测、加载设置、迁移配置。
- 根命令的 action（`:853`）：
  - 先处理 `--desktop` 交接；
  - 然后调用 `cli/session-setup` 的 `Uso()`（`:859`）做会话准备，具体包括：
    - 解析模型和权限模式；
    - 加载 skill、agent、托管设置；
    - 检查工作目录信任；
    - 记录 `tengu_init` 和 `session_start` 事件。
- 准备完成后分两条路：
  - **非交互**（`-p`、`--print`，或 stdin 不是 TTY）：`import("./headless-print-mode.tt02.js")` 后调用 `runHeadless`（`:587`）。
  - **交互**：调用 `runInteractiveSession` 回调，即 `cli/main` 的 `dr()`（`src/cli/main.q3ah.js:1114`）。`dr()` 汇总初始状态，然后 `await oRt(...)`（`:1158`）。

### 2.5 交互界面

- `ui/launch-repl-session` 的 `oRt`（`src/ui/launch-repl-session.neh1.js:20`）先设置权限模式，再调用 `rgi`。
- `rgi` 挂载 React 树 `<AppRoot><REPL/></AppRoot>`，并把 `core/query-loop` 的 `yN` 作为 `run` 注入对话引擎。
- `ui/repl-screen` 是主界面组件，负责：
  - 消息列表和输入框；
  - 斜杠命令菜单；
  - 权限确认对话框（"Do you want to proceed?"）；
  - spinner、快捷键、历史记录。
- `terminal/ink-renderer` 是 Ink 渲染器：用 Yoga 计算布局，管理备用屏幕，调度帧，并对输出做差量更新。
- 每一行文本由 `terminal/cell-segmenter-factory`（`:158`）创建的 `Bun.ant.CellSegmenter` 切成屏幕格子。本项目用 `src/runtime/cell-segmenter.js` 实现这个能力，契约见 [runtime.md](runtime.md#cellsegmenter)。

### 2.6 非交互模式

`cli/headless-print-mode` 的 `runHeadless`（`runHeadless_entry`，`src/cli/headless-print-mode.tt02.js:13016`）读取提示词，调用同一个 `yN` 执行回合，再按 `--output-format` 输出结果：

- `text`：只输出最终文本；
- `json`：输出一个结果对象；
- `stream-json`：逐条输出事件；配合 `--input-format stream-json` 时还能处理 SDK 的 `control_request` 协议，即 `initialize`、权限回调、中断等。

## 3. 一次对话回合

```
用户输入
  → yN（core/query-loop.ae10.js:3398）          回合入口，交互与非交互共用
      → ku / kf → Bs（:1799）                    主循环：一轮"请求模型 → 执行工具"
          ├─ 组装请求：系统提示词 + 历史消息 + 工具定义
          │    · 系统提示词正文：core/conversation-engine（"You are an agent…"，:54781）
          │    · 环境信息段："Primary working directory…"（:1910）
          │    · 分块与缓存断点：core/system-prompt-blocks（__SYSTEM_PROMPT_STATIC_BREAKPOINT__，:40）
          ├─ 调用模型：callModel = YNt（core/conversation-engine.31gx.js:64933）
          │    → anthropic-client.beta.messages.create({ …, stream: true })（:66856）
          │    → 逐个产出 SSE 事件（message_start / content_block_delta / message_stop …）
          ├─ 有 tool_use 时执行工具：
          │    PreToolUse hooks → 权限判定（规则 / auto mode 分类器 / 询问用户）
          │    → tool.call() → PostToolUse hooks → tool_result 追加到消息，进入下一轮
          ├─ 没有 tool_use 时：Stop hooks（:2076 hook_stopped_continuation）决定是否继续
          └─ 上下文接近上限时：自动压缩（autocompact；超长时 :2335 tengu_compact_after_prompt_too_long）
  → 产出消息流 → 交互界面渲染 / 非交互模式输出
```

**工具**：

- 内置工具定义在 `tools/`。其中 Bash、Read、Edit、Write、Grep、Glob 等核心工具定义在 `core/conversation-engine` 里。
- 完整列表、只读与可并发属性、定义位置见 [TOOLS.md](reference/TOOLS.md)；输入输出的 JSON Schema 在 `assets/sdk/sdk-tools.d.ts`。

**Bash 工具的 shell**：

- 首次执行时，在 `~/.claude/shell-snapshots/` 生成 shell 快照，用来复用用户 shell 的 PATH、别名和函数。
- 快照里会注入 `find`、`grep`、`rg` 三个函数（`core/conversation-engine.31gx.js:72857` 起）。这些函数用 `ARGV0=bfs|ugrep|rg` 回调 `$CLAUDE_CODE_EXECPATH`，也就是当前可执行文件（`:73297` 设为 `process.execPath`），从而用上内嵌工具。

**沙箱**：

- `shell/sandbox` 在 macOS 上用 `sandbox-exec`（`:21267`），在 Linux 上用 bwrap。

## 4. 配置、开关与遥测

- **全局配置** `~/.claude.json`（目录由 `CLAUDE_CONFIG_DIR` 指定）：读写逻辑在 `settings/global-config-and-gates`。
- **分层设置** `settings.json`：
  - 层级为 policy、user、project、local、flag，读取逻辑在 `settings/`；
  - 托管策略（MDM 等）在启动时预读。
- **特性开关**（GrowthBook）：
  - 读取函数在 `settings/global-config-and-gates`（`pinnedFeatureValues`，`:22675`）；
  - 共 737 个开关，离线默认值见 [GATES.md](reference/GATES.md)；
  - 设置 `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1` 或使用第三方 API 提供方时，只使用默认值。
- **遥测**：事件名都以 `tengu_` 开头，完整清单在 `reference/telemetry-events.json`。设置 `DISABLE_TELEMETRY=1` 可关闭。
- **环境变量**：共 419 个，见 [ENV.md](reference/ENV.md)。
- **运行环境探测**：在 `shared/environment` 中。其中 `Tf()`（`:41`）即 `Bun.isStandaloneExecutable === true`，决定是否以单文件可执行程序方式运行，影响内置 hooks 模块、Grep 内嵌模式和子进程重启方式，见 [runtime.md](runtime.md#开发模式与构建产物的差异)。

## 5. 目录职责

`src/` 下的目录按 `extract/areas.js` 的规则自动划分，关键模块按 `extract/layout/2.1.310.json` 人工放置，详见 [extract/README.md](../extract/README.md#文件命名)。

| 目录 | 模块数 | 职责 |
|---|---:|---|
| `core/` | 3 | 对话引擎（流式请求、工具执行、压缩、hooks、权限、内置核心工具）、回合循环、系统提示词分块 |
| `cli/` | 48 | 进程入口之后的命令行层：commander 程序、会话准备、无头模式、快速路径 |
| `ui/` | ≈178 | React 组件：REPL 主界面、对话框、消息渲染、引导 |
| `terminal/` | ≈17 | 终端能力：Ink 渲染器、CellSegmenter 工厂、图片协议、剪贴板 |
| `tools/` | ≈50 | 内置工具（Agent、AskUserQuestion、Cron*、Monitor、WebFetch……） |
| `commands/` | ≈17 | 斜杠命令实现（列表见 [COMMANDS.md](reference/COMMANDS.md)） |
| `skills/` | ≈61 | 内置 skill 的加载与执行（文档在 `assets/skills/`） |
| `api/` | ≈9 | Anthropic SDK 客户端，以及 Bedrock / Vertex / Foundry 适配 |
| `auth/` | ≈96 | OAuth、API key、Keychain、凭据刷新、云厂商凭据 |
| `models/` | ≈17 | 模型目录、别名、能力判定 |
| `permissions/` | ≈104 | 权限规则、auto mode 分类器、拒绝与询问 |
| `settings/` | ≈88 | 分层设置、全局配置、特性开关、托管策略 |
| `hooks/` | ≈34 | hooks 系统与内置 hooks 模块（含 hooks worker） |
| `mcp/` | ≈121 | MCP 客户端与服务器、OAuth、注册表 |
| `plugins/` | ≈67 | 插件与市场 |
| `agents/` | ≈101 | 子代理、团队与 fleet 视图 |
| `tasks/` `workflows/` | ≈54 | 后台任务、daemon、workflow 编排 |
| `remote/` | ≈128 | 远程会话、bridge、teleport、self-hosted runner |
| `context/` | ≈107 | 上下文构造：CLAUDE.md、记忆、团队记忆同步、附件 |
| `shell/` | ≈75 | shell 进程、快照、沙箱、PTY |
| `fs/` `git/` | ≈145 | 文件系统、ripgrep、git、worktree |
| `ide/` `chrome/` `web/` | ≈53 | IDE 集成与 LSP、Chrome 扩展、WebFetch 和 WebSearch 辅助 |
| `artifacts/` `design/` | ≈78 | Artifact、Claude Design |
| `computer-use/` `native/` | ≈25 | 计算机操作、语音；原生模块 JS 包装（`.node` 文件在 `assets/native/`） |
| `telemetry/` | ≈141 | 事件上报、OpenTelemetry、诊断 |
| `onboarding/` | 6 | 首次引导与信任 |
| `shared/` | ≈670 | 被多个功能区共用、无法归入单一区域的模块（含大量小型工具函数） |
| `vendor/` | ≈74 | 第三方库（含 Claude Code 自身代码的模块不归入此处）：react、ink、yoga、zod、commander、chalk、marked、highlight、ajv、jose、semver、parse5、acorn、grpc、opentelemetry、aws-sdk、google-auth、mcp-sdk、anthropic-sdk |
| `runtime/` | 4 | **本项目手写**：assets、bun-ant、cell-segmenter、embedded-tools |

表中带 ≈ 的数字会随重新生成略有变化。

## 6. 资源

`assets/INDEX.json` 列出全部 251 个资源，字段包括原始 bunfs 名、新路径、大小和引用它的模块。源码通过以下三个函数访问资源：

- `__asset_text("prompts/…")`：文本资源，对应原版 text loader 的 `import.meta.require`；
- `__asset_path("native/….node")`：文件路径，用于 `fs.readFile` 或加载原生模块；
- `__asset_src("hooks/hooks-worker.js")`：`src/` 下脚本的绝对路径，用于 `new Worker`。

| 目录 | 内容 |
|---|---|
| `prompts/` | 以资源文件形式发布的提示词（/loop、workflow 示例等）；其余提示词以字符串字面量留在源码中，全文见 [PROMPTS.md](reference/PROMPTS.md) |
| `skills/` `plugins/` | 内置 skill 和内置插件的文档、脚本 |
| `artifact-runtime/` | Artifact 页面运行时 |
| `fonts/` | 渲染用字体 |
| `native/` | `audio-capture.node`、`computer-use-input.node`、`computer-use-swift.node`（macOS 原生模块，原样保留） |
| `vendor/` | Artifact 页面用的前端库（chart.js、highlight.js、mermaid） |
| `sdk/sdk-tools.d.ts` | 工具输入输出类型，来自 npm 主包 |

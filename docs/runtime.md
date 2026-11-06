# 运行时：与原版的差异

原版 Claude Code 2.1.310 运行在 Anthropic 内部定制的 Bun（`@anthropic-ai/bun-internal`，基于 Bun 1.4.4）上，每个平台发布一个单文件可执行程序。本项目运行在公开版 Bun 1.4.4 上。两者的差异集中在三处，都由 `src/runtime/` 补齐，对各系统相同：

| 原版内部 Bun 提供 | 本项目 |
|---|---|
| `Bun.ant.*` 原生 API | 补上没有回退的 `CellSegmenter` 与 `setDumpable`，其余由原版代码自带回退 |
| 内嵌的 ripgrep / bfs / ugrep（argv0 分发） | `embedded-tools.js` 按 argv0 转交给系统工具 |
| 模块图里 hash 命名的虚拟文件 `/$bunfs/root/<name>` | `assets.js` 按逻辑路径定位 `assets/` 与 `src/` |

原版代码本身只改了排版和引用路径（Linux 版另把写死的架构名改回 `process.arch`，见 [extract/README.md](../extract/README.md#架构还原)），没有因为这些差异改动任何逻辑。`dev` 分支例外：时区、遥测、GPU 信息与记忆内容有意与原版不同，见[固定的环境变量](#固定的环境变量)。

入口 `src/main.js` 按 `process.platform` 加载 `src/darwin/` 或 `src/linux/`；平台不在 `src/runtime/platforms.js` 中时提示并退出。

## Bun.ant

公开版 Bun 没有 `Bun.ant`。两个系统的原版代码各调用 12 个原生能力，合计 13 个，其中 11 个两边都有。没有回退、由本项目实现的是 `CellSegmenter` 与 `setDumpable`：

| API | 系统 | 用途 | 调用位置 | 缺失时原版的行为 |
|---|---|---|---|---|
| `CellSegmenter` | 两者 | 终端渲染：带 ANSI 的文本 → 屏幕格子 | `terminal/cell-segmenter-factory.js`「Bun.ant.CellSegmenter」 | **抛错，界面无法渲染** → 本项目实现 |
| `setDumpable` | Linux | `prctl(PR_SET_DUMPABLE)`：禁止同一用户的其他进程读取本进程内存 | `src/linux/shared/chunk-960c3301.js`「Bun.ant.setDumpable」 | try/catch → 代码审查会话**拒绝启动**，其他场景记录警告 → 本项目实现 |
| `getPeerPid` / `getPeerUid` | 两者 | daemon Unix socket 对端校验 | `settings/global-config-and-gates.js`「Bun.ant?.getPeerPid」、`telemetry/harbor-kite-pacing-off.js`「Bun.ant.getPeerUid」 | `typeof` 检查不通过 → 不启用依赖它的能力，只记录警告 |
| `loginTty` | 两者 | 后台会话获取控制终端 | `core/conversation-engine.js`「Bun.ant.loginTty」 | try/catch → 返回 `"ffi_unavailable"`，跳过 |
| `ttyName` | 两者 | 查询终端设备名 | `telemetry/terminal-nonblocking-stdout.js`「Bun.ant.ttyName」 | try/catch → undefined |
| `memoryPressureLevel` | 两者 | 内存压力（后台任务降载） | `context/bg-attach-upgrade.js`「Bun.ant.memoryPressureLevel」 | try/catch → undefined，改用其他内存指标 |
| `posixFsAt` | 两者 | macOS 沙箱的 anchor 后端 | `fs/unstable-identity.js`「ant?.posixFsAt」 | 记录警告，不启用该后端（Linux 使用 procfs 后端，不需要它） |
| `waitForUrlEvent` | macOS | `claude://` 深链接（只在 .app 包装内） | `src/darwin/ui/handle-deep-link-uri.js`「Bun.ant.waitForUrlEvent」 | 只在特定 bundle id 下调用；try/catch → null |
| `windowsFolderSecurity` / `windowsProcessList` / `windowsProcessCreationTime` / `windowsSandboxDeniesArg` | 两者 | Windows 专用 | `shell/sandbox.js`「windowsSandboxDeniesArg」、`settings/global-config-and-gates.js`「Bun.ant?.windowsProcessList」、`fs/chunk-b6c2193e.js`「windowsProcessCreationTime」 | 非 Windows 平台不调用 |

`src/runtime/bun-ant.js` 的处理方式：

- 逐个检查上述两个成员，只在缺失时安装本项目的实现；`setDumpable` 只在 Linux 上安装；
- 不覆盖 `Bun.ant` 上已有的其他成员；
- 如果运行在内部定制 Bun 上，不做任何改动。

### CellSegmenter

实现文件：`src/runtime/cell-segmenter.js`。原生实现不公开，下面的契约依据 `terminal/` 中渲染器的调用方式确定，由 `test/runtime/cell-segmenter.test.js` 覆盖。

```
new CellSegmenter({ ambiguousIsNarrow, substitute: [[first, last], …], screen?, replacement? })

.graphemes / .sgrKeys / .sgrCloseKeys / .uris
    只增不减的驻留表，下标 0 为空串。sgrKeys[i] 与 sgrCloseKeys[i] 一一对应。

.segment(text, cells: Int32Array, runs: Int32Array, reorder: boolean) → count
    把一行文本切成格子。数组不够大时返回 -(所需格数)，且不写入。
    cells[2i]   = graphemes 下标
    cells[2i+1] = (run << 10) | (tab ? 256 : 0) | width      width ∈ {1, 2}，tab 的 width 为 0
    runs[2r]    = sgrKeys 下标（该 run 生效的 SGR 组合，多个序列用 \0 连接）
    runs[2r+1]  = uris 下标（OSC 8 超链接，0 表示无）

.paint(screenCells, screenWidth, x, y, cells, count, order, charMap, words) → damage
    把 segment 的结果写入屏幕缓冲：宽字符写本体 + 尾随占位；行尾放不下的宽字符写行首占位；
    tab 展开到下一个制表位。
    damage = x1·2^20 + x2·2^36 + 结束列

.setCell(screenCells, screenWidth, x, y, charIndex, word) → damage
```

以下要点会直接影响逐格一致性：

- **字素切分**：用 `Intl.Segmenter`，宽度用 `Bun.stringWidth`（`ambiguousIsNarrow`）。组合字符、ZWJ 序列、肤色修饰符都算一个字素。
  - 宽度不能只看首字符：键帽 emoji（如 `1️⃣`）以 ASCII 字符开头，占两格。
- **控制字符与零宽字符**：不占格。substitute 区间内的码点替换为 U+FFFD。
- **SGR 状态**：按"类别"保存，即粗体、暗淡、斜体、下划线、前景色、背景色等各占一类。
  - 同一类别重新设置时，移到末尾。
  - 粗体或暗淡已经生效时，再次设置不改变顺序；这与渲染器对 `\e[22m` 同时关闭两者的处理方式一致。
  - 顺序决定输出的转义序列，必须与原生实现一致，即按设置的先后排列，而不是按固定的类别顺序。
- **reorder**：在不做 bidi 的终端（如 Windows Terminal、VS Code 终端）上，把连续的 RTL 字符反转成视觉顺序。

### setDumpable

实现文件：`src/runtime/set-dumpable.js`，只在 Linux 上安装。

- 调用约定：`setDumpable(flag)` 把进程设为可转储（`true`）或不可转储（`false`），成功时返回 `true`。
- 实现：经 `bun:ffi` 调用 glibc 的 `prctl(PR_SET_DUMPABLE, flag)`。`prctl` 的参数是 `unsigned long`，按 64 位传入。
- 原版在代码审查会话中先把进程设为不可转储，使审查时运行的命令无法经 ptrace 或 `/proc/<pid>/mem` 读取内存中的 token；做不到时拒绝启动（`src/linux/cli/main.js`「could not make itself non-dumpable」）。
- `test/runtime/runtime.test.js` 在 Linux 上用 `PR_GET_DUMPABLE` 读回，验证设置生效。

## 内嵌命令行工具

原版的可执行程序以 argv0 = `rg`、`bfs` 或 `ugrep` 启动时，会直接作为对应工具运行。Claude Code 在两处依赖这个能力：

1. **Bash 工具的 shell 快照**：
   - 快照里注入了 `find`、`grep`、`rg` 三个函数（`core/conversation-engine.js`「exec -a」）。
   - 函数以 `$CLAUDE_CODE_EXECPATH`（当前可执行文件）为程序，把 argv0 设为 `bfs`、`ugrep` 或 `rg` 后执行：zsh 下是 `ARGV0=bfs "$_cc_bin" …`，bash 下是 `(exec -a bfs "$_cc_bin" …)`。该变量不可执行时，依次退回安装路径下的 `claude` 和系统里的同名命令。
   - 因此模型在 Bash 里执行 `find`，实际运行的是 bfs；执行 `grep`，实际运行的是 ugrep。
2. **Grep 工具与文件搜索**：`shell/sandbox.js`「argv0: "rg"」选择 ripgrep 的运行方式。
   - 以单文件可执行程序运行时，默认用 embedded 模式：`{ command: process.execPath, argv0: "rg" }`。
   - 否则使用系统 rg。

`src/runtime/embedded-tools.js` 在入口的最前面按 `basename(process.argv0)` 分发：

| argv0 | 首选 | 回退 | 回退时去掉的参数 |
|---|---|---|---|
| `rg` | 系统 `rg` | — | — |
| `bfs` | 系统 `bfs`（3.3 或更新） | `find` | `-S <策略>`、`-regextype findutils-default`；BSD find（macOS）去掉全部 `-regextype <类型>` |
| `ugrep` | 系统 `ugrep` | `grep` | `--ignore-files`、`--hidden`、`-I`、`-G` |

- find 函数固定传入 `-S dfs -regextype findutils-default`。bfs 3.3 起才支持 `findutils-default`，发行版自带的往往更旧（如 Ubuntu 24.04 为 3.1，Debian 12 为 2.6）。因此先用这组选项探测系统 bfs，不接受时视同没有安装，改用 find。
- `findutils-default` 就是 GNU find 的默认正则类型，回退时去掉它不改变行为；GNU find 也不接受它出现在路径之前。
- 找工具时会排除自身（`process.execPath`），避免递归调用。
- 都不可用时，打印安装提示，以 127 退出。
- Bash 中 find、grep、rg 的输出与原版一致，已由对比测试中的 `findgrep` 用例在每个平台上验证：macOS 上使用 Homebrew 的 bfs 4.x，Ubuntu 24.04 上自带的 bfs 3.1 过旧，走 GNU find 回退。

## 资源定位

原版把资源放在模块图中，名字是 `/$bunfs/root/<原名>-<hash>.<ext>`，有时还经过 zstd 压缩。读取方式有三种：

- text loader：`import.meta.require(path)`；
- file loader：`fs.readFileSync(path)`；
- napi loader：加载原生模块。

本项目在提取时做了三件事：

- 把资源解压、还原到 `assets/<逻辑路径>`；各系统相同的资源只存一份，原生模块按平台存到 `assets/native/<系统>-<架构>/`；
- 把源码里的引用改写为下面四个函数；
- 生成 `assets/INDEX.json`，记录每个资源的原名、新路径、大小，以及各系统中引用它的模块。

| 函数 | 替代 | 返回 |
|---|---|---|
| `__asset_text(rel)` | text loader 资源 | 文件内容（带缓存） |
| `__asset_path(rel)` | file loader 资源 | 绝对路径 |
| `__asset_native(name)` | napi 资源 | 当前平台 `native/<系统>-<架构>/<name>` 的绝对路径 |
| `__asset_src(rel)` | 构建宏 `HOOKS_WORKER_URL` | `src/` 下脚本的绝对路径（用于 `new Worker`） |

根目录的确定方式：

- **编译产物**（`Bun.isStandaloneExecutable`）：`/$bunfs/root`。
- **开发模式**：项目根目录。

## 编译方式

`npm run build`（`scripts/build.js`）用 `Bun.build({ compile })` 为目标平台生成单文件可执行程序，约 10 秒。目标平台默认为当前平台，也可用 `--target <系统>-<架构>` 交叉编译：

```js
entrypoints: ["scripts/boot.js", "src/main.js", ...src/runtime/ 与 src/<目标系统>/ 下全部 .js],
compile: { outfile: "dist/claude", assets: [<组装好的 assets/>], target: "bun-<平台>" },
naming: "[dir]/[name].[ext]",
bytecode: true,
external: ["/$bunfs/*", "./*", "../*"],
```

- **只嵌入目标平台需要的内容**：目标系统的源码；资源中原生模块只取 `assets/native/<目标平台>/`。`compile.assets` 中的目录以自身名字嵌入根目录，因此先在临时目录里组装一份 `assets/` 再传入。
- **每个模块各作一个入口，模块间的相对引用全部 external**：打包器不合并、不移动模块，输出保持原目录结构 `/$bunfs/root/src/…`。原版代码里有 500 多处运行期执行的相对路径 `import.meta.require("./x.js")`，以及大量动态 `import()`，模块位置不变，这些路径才能继续生效。
- **字节码**：每个模块预编译为 JavaScriptCore 字节码，启动时不必重新解析约 115 万行源码。一次 `-p` 请求约 0.23 秒，不用字节码时约 0.8 秒，原版约 0.15 秒（Apple M 系列，中位数）。
- 入口 `boot.js` 只做一件事：运行期 `import("/$bunfs/root/src/main.js")`。

## 开发模式与构建产物的差异

`npm start` 和 `bin/claude` 直接用 Bun 运行 `src/main.js`。与 `dist/claude` 相比，有两处行为不同，都是原版代码自身的判断造成的：

| 场景 | 原因 | 开发模式下的表现 |
|---|---|---|
| 内置 hooks 模块 | "是否以单文件可执行程序方式运行"（`shared/environment.js`「isStandaloneExecutable」）为假时，原版会去找源码树中的 `hooks/register.ts`，而发布包里没有这个文件 | 内置 hooks 模块不加载，debug 日志中可见 |
| Bash 中的 `find`、`grep`、`rg` 函数 | 函数以指定的 argv0 回调 `$CLAUDE_CODE_EXECPATH`；开发模式下它是 `bun` 本身，argv0 分发到不了 `src/main.js` | 这三个函数会报错；直接调用 `/usr/bin/find` 等命令不受影响 |

另外，以下行为也取决于是否以单文件可执行程序方式运行：子进程重启 CLI 自身时 argv 的构造方式（`fs/chunk-dacd9872.js`「process.execPath」），以及 ripgrep 的运行方式（见上文）。开发模式下它们走的是原版为"以脚本方式运行"准备的分支，只有 `dist/claude` 与官方可执行程序一致。

开发模式适合阅读、调试和快速试验；需要与原版完全一致的行为时，请用 `dist/claude`。

## 固定的环境变量

`dev` 分支有意改动的行为。时区与遥测的改动，对比测试的用例覆盖不到（隔离环境本来就关闭了遥测，用例输出也不涉及时区）；记忆的改动让系统提示词多出 `# Memory access policy` 一段，时区的改动让「Today's date」在本机时区与美国太平洋时间不在同一天时与原版不同。对比测试在比较请求前只去掉这两处（`test/parity/normalize.js` 的 `INTENTIONAL`，逐字匹配，措辞被改动时会报不一致），其余内容仍逐字比较，33 项全部一致。

`src/runtime/pinned-env.js` 由入口最先调用，在加载原版代码之前完成四件事：

- 写入固定值，或删除变量：

  | 变量 | 固定为 | 作用 |
  |---|---|---|
  | `TZ` | `America/Los_Angeles` | `Date` 与 `Intl` 的时区，对话中的日期、每轮时间戳、工具提示里的时间都随之改变 |
  | `DISABLE_TELEMETRY`、`DO_NOT_TRACK` | `1` | 隐私级别为 no-telemetry：关闭 1P 事件日志、Datadog、BigQuery 指标与 GrowthBook |
  | `DISABLE_ERROR_REPORTING` | `1` | 关闭错误上报 |
  | `CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY` | `1` | 关闭会话反馈问卷 |
  | `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` | `1` | 隐私级别为 essential-traffic（蕴含 no-telemetry）：关闭登录引导（bootstrap）、`penguin_mode`、MCP 官方目录、更新检查与更新日志、claude.ai 插件同步、远程会话与 Remote Control、团队记忆同步、设计同步、文件上传、内置 `gh api`、终端标题等一切不是模型对话必需的请求 |
  | `CLAUDE_CODE_ENABLE_TELEMETRY`、`CLAUDE_CODE_ENHANCED_TELEMETRY_BETA`、`ENABLE_ENHANCED_TELEMETRY_BETA`、`ENABLE_BETA_TRACING_DETAILED` | 删除 | OpenTelemetry 导出与增强追踪各有独立开关，不受隐私级别控制 |

- 把 `process.env` 换成 Proxy，忽略对这些键的写入和删除。原版会在运行期把各层 settings.json 的 `env`、插件 hooks 写回 `process.env`，因此它们都改不回来。
- 包装 `Bun.spawn` 与 `Bun.spawnSync`，给每个子进程带上固定的 `TZ`。继承语义与原版一致，只多了固定的 `TZ`：`Bun.spawn` 不传 `env` 时拿到的是进程启动时的环境，看不到运行期写入的值（比如刷新后的 OAuth token）；`node:child_process` 显式传入当前的 `process.env`，照旧能拿到。调用方自己给出的 `env` 原样使用，只覆盖 `TZ`。原版只对 `ps` 显式指定 `TZ=UTC` 以解析 `lstart`，这一处保留。
- 包装 `Worker`（全局的，以及经 `require("worker_threads")` 取得的）。Worker 有自己的 `process.env` 副本和自己的 `Bun.spawn`，主线程的 Proxy 管不到：不处理的话，用户设的时区和 `CLAUDE_CODE_ENABLE_TELEMETRY` 在 Worker 里依然生效。包装后每个 Worker 的 `env` 是「调用方给的 env，或启动时的环境」套上全部固定值，并通过 `preload` 先运行 `src/runtime/pinned-env-worker.js`，在 Worker 里再调用一次 `pinEnvironment()`，让那里的 `process.env` 同样被锁定、子进程同样带固定的 `TZ`。调用方自己的 `workerData`、`preload` 等选项原样保留。

`CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` 固定为 `1` 的代价：下列功能不可用或退化。需要它们时，不要用 `dev` 分支。

- 远程会话、Remote Control、`/teleport`、从 claude.ai 发起到本机的会话；
- 团队记忆同步、claude.ai 插件同步、设计同步、`DesignSync` / `Projects` 工具；
- 自动更新检查与版本提示、更新日志（本机缓存里的除外）；
- 官方 MCP 目录（`/mcp-registry`）、官方插件市场的下载与更新（见下表对 GCS 下载的补丁）；
- 登录引导（bootstrap）拿不到服务端下发的模型列表等附加信息，退回内置的默认值；
- 内置 `gh api`、文件上传到 Anthropic、会话反馈问卷、终端标题等。

实测（隔离 HOME，本地 MITM 代理，假 API 直连，环境和 settings.json 都故意把该变量设成空串）：`-p` 与交互界面启动后都没有任何外部请求；只剩发往 `ANTHROPIC_BASE_URL` 的模型对话。真实登录后的 OAuth 刷新等请求只读了代码，没有实测。

关闭遥测的代价：GrowthBook 不再拉取，特性开关只用离线默认值；从 Claude Desktop 远程发起到本机的 Remote Control 会话可能被拒绝（原版提示 "feature-flag evaluation is off"）。

另外直接修改了两个系统的生成代码，重新执行 `npm run extract` 会覆盖，需要再次应用：

| 位置 | 改动 |
|---|---|
| `core/conversation-engine.js`「export TZ=America/Los_Angeles」 | Bash 工具的每条命令在 `eval` 前导出固定的 `TZ`，排在 shell 快照、`~/.zshenv` 与 SessionStart hook 环境脚本之后，用户的 shell 配置覆盖不了 |
| `core/conversation-engine.js`「Number.isNaN(Date.parse(w.perTurnTiming))」 | 续上旧会话时，记录中保存的每轮时间戳按固定时区重新格式化后再发送 |
| `mcp/bridge-host-profile-collect.js` | Remote Control 主机画像不再探测 `nvidia-smi`、`/usr/local/cuda/version.json`、`/proc/driver/nvidia/version` |
| `vendor/google-auth/xcode-project.js` | 项目扫描不再识别 CUDA 项目（`.cu`/`.cuh`、CMake、conda），`tengu_init` 的 `os_locked_toolchain` 不会为 `cuda` |
| `core/conversation-engine.js`「(path only; contents not loaded)」 | 消息里的 `MEMORY.md`（含宿主经 `CLAUDE_COWORK_MEMORY_INDEX_CONTENT` 注入的索引）只检查文件是否存在，正文换成这一句占位文本，路径照发 |
| `core/conversation-engine.js`「if (true) return; // 记忆内容不发送」 | 关闭相关记忆召回：选择器不再把记忆文件的描述发给模型，召回的正文也不再放进消息 |
| `core/conversation-engine.js`「cowork_memory_context: () => [], account_memory_recall: () => []」 | 账号记忆与 cowork 记忆快照不再渲染进消息 |
| `context/org-memory-writes-setting-changed.js`「Memory access policy」 | 系统提示词的 `# Memory` 一节后追加一段：只发了记忆文件的路径，用户没有明确要求时不要读取、搜索或打开记忆目录里的文件；子代理记忆与团队记忆索引同样只给路径 |
| `context/extract-memories-extraction.js`「记忆内容不发送：不运行后台记忆提取」 | 不再运行后台记忆提取（它会把已有记忆的清单和对话发给模型） |
| `context/auto-dream-skipped.js`「记忆内容不发送：不运行记忆整理」 | 不再运行记忆整理（它会把记忆文件读给模型） |
| `core/conversation-engine.js`「redactClassifierContext」 | 发往服务端分类器的 `safeguards.classifier_context` 在构造函数（darwin 的 `bhn`、linux 的 `khn`）返回前统一脱敏，见下文「safeguards 脱敏」 |
| `core/conversation-engine.js`「非必要流量已关闭：不下载官方插件市场」 | 官方插件市场从 GCS 下载的函数（darwin 的 `B6n`、linux 的 `SKn`）开头加一道 essential-traffic 判断。原版这一处没有检查该开关，设了变量仍会访问 `downloads.claude.ai` |
| `core/conversation-engine.js`「memoryReadGuard」 | 权限检查链（`BT` / `wwn`，darwin 与 linux 的变量名不同）在 `tool.checkPermissions` 及其后的几步之后，追加一步 `memoryReadGuard`，见下文「读取记忆文件需要确认」 |
| `permissions/classifier-transcript-too-long.js`「memoryRead:」 | 断路器表新增 `memoryRead`，与 `outsideReadsBlocked` 同级：`bypassImmune`（bypassPermissions 模式也要问）、不走分类器、只能由人回答 |
| `core/query-loop.js`「REFUSAL_RETRY_MAX」 | 同模型重试从 1 次改为最多连续 10 轮（`refusalRetrySpent` 由布尔值改成计数，上一步不是拒答重试就按 0 起算），每轮的界面提示带轮数 `(n/10)`；第 10 轮之后仍被拦截，补齐没执行的工具结果后正常结束本轮，把拒答作为 API 错误输出，不再继续请求 |
| `core/conversation-engine.js`「拒答后不切换模型」 | 拒答后回退模型的选择函数（darwin 的 `mMr`、linux 的 `qOr`）不再给出任何回退模型，原版的“换模型并继续”提示与静默换模型都不会触发 |
| `api/anthropic-client.js`「拒答后不切换模型」 | 静默回退模型的装填函数（darwin 的 `z1o`、linux 的 `iBo`）直接返回，不装填 |
| `core/query-loop.js`「the response containing this tool call ended」 | 服务端拒答（如 `frontier_llm`）后的同模型重试：不再往历史里追加 "Your response above was stopped by a safety classifier…" 那条提示，给未完成的工具调用补的结果也改成中性措辞（"Not run: …ended before the call was executed" / "Interrupted: …ended while the call was running; it may have partially or fully completed"） |

拒答后的历史：被拦截那一轮的提问、已输出的文字和工具调用全部保留，下一条消息里照样带上；拒答本身（`stop_details`、界面上的 "safeguards flagged this message" 文案）一直不进请求。保留的 `notice` 只在界面显示，不进请求。

拒答后的重试与换模型：

- 最多连续重试 10 轮，每轮用同一个模型、同一份历史（含被拦截那一轮已做的部分）。界面和 `--output-format stream-json` 里都会出现 `The response above was cut off by the server · retrying with the same model (n/10)`。计数只算连续被拦截的次数：重试之后得到了正常的响应（例如模型发出工具调用并执行），再遇到拦截就从 1/10 重新开始；一次提问里总共被拦截的次数因此没有上限，每一段连续拦截最多 10 轮。
- 不换模型：原版会在拒答后弹出底部选择框（"Model switch"：换到下一档模型并以后自动切换 / 留在原模型并每次询问），或在已开启时静默换到回退模型。`dev` 里回退模型一律为空，两条路径都不会触发，请求里的 `model` 始终是原模型。
- 10 轮后仍被拦截：补齐没执行的工具结果，把拒答作为 API 错误输出（`terminal_reason: "api_error"`，`stop_reason: "refusal"`，`-p` 退出码为 1），本轮结束，下一条消息照常发送。不会再弹出任何选择框。
- 第 10 轮之后的那次请求不算重试，所以一段连续拦截最多产生 11 个请求。
- 原版的“双击 Esc 编辑上一条消息”提示仍在拒答文案里，只是文字，不是对话框。

## safeguards 脱敏

auto 模式（交互界面不带参数时默认进入）和 plan 模式下，原版每个请求都带一个 `safeguards` 字段（beta 头 `dangerous-tool-use-2026-09-03`），其中的 `classifier_context` 是给服务端分类器判断工具调用是否危险用的。`src/runtime/safeguards-redact.js` 在请求发出前统一脱敏：字段仍然发送，形状不变，只抹掉能识别用户、机器和项目的值。

| 字段 | 处理 |
|---|---|
| `user_identity` | `null`（原版取 `GITHUB_ACTOR`、`USER`、`USERNAME`，最后取 `git config user.email` 的 `@` 前部分） |
| `home_dir`、`rule_roots` | 删除、置空（schema 里可选或接受空对象） |
| `rules.allow/deny/ask` | `[]`（权限规则原文，路径里常含用户名和项目名） |
| `auto_mode.*` | `[]`（用户自己写的自然语言规则） |
| `trusted_directories.additional/network` | `[]`（`--add-dir` 目录、允许的网络域名） |
| `git_state.branch/default_branch/root` | `null` |
| `git_state.status.counts` | 计数置 0 或 `null`，保留 `clean` 标志 |
| `git_state.visibility` | `remotes`、`visibility_cache` 清空，`push_remote` 置 `null`，`origin` 的 host、remote 置为 `"redacted"`，保留 `visibility` 取值 |
| `chrome_navigation`、`artifacts` | 标签页网址与标题、工件信息去掉，只保留 `enabled` |
| `prior_turn_context[].context.git_state` | 同上 |

保留的字段：`v`、`permission_mode`、`platform`、`live_cwd`、`trusted_directories.primary`、`block_reads_outside_working_directories` 与其他布尔标志、`git_state.cwd`、`git_state.status.clean`。`live_cwd` 保留是因为分类器要用它判断命令是否在工作目录内；主请求的 `Environment` 里本来就有这个路径。

**代价**：服务端分类器看不到你配置的权限规则、`autoMode` 规则、`--add-dir` 目录和仓库信息，判断依据变少。预期的后果是分类器对「这条命令在你的环境里是否被允许」更保守，更多调用会被要求手动确认。我没有用真实服务端验证分类质量，这一点没有实测。

**没有改动的**：
- 主请求里原有的内容不受影响，包括 `gitStatus` 块里的当前分支名和主分支名；
- 本地分类器路径（`CLAUDE_CODE_AUTO_MODE_SERVER=0`）不经过这里，它会把 CLAUDE.md、用户提示原文和 Bash 命令发给模型，数据量更大，所以没有启用；
- 其他权限模式（default、acceptEdits、dontAsk、bypassPermissions）本来就不发 `safeguards`。

测试：`test/runtime/runtime.test.js` 的 `safeguards-redact`（形状取自原版真实输出），`test/smoke.test.js` 的「safeguards 脱敏」（真实二进制，把用户名、分支、remote、权限规则、autoMode 规则、`--add-dir` 全部设成可识别的值，检查一个都不出现，且路径只剩工作目录）。去掉脱敏调用后重新构建，该测试变红。

## 读取记忆文件需要确认

任何会读到记忆目录里的文件的工具调用，一律先询问用户，不论权限模式、allow 规则、hook 还是自动模式的分类器怎么判断。实现在 `src/runtime/memory-guard.js`，由权限检查链在 `tool.checkPermissions` 之后调用；返回的是带 `safetyCheck` 的 `ask`，断路器名 `memoryRead`，`personOnly`，`hooksMayAllow: false`，`suppressAlwaysAllowRule: true`，所以 hook 的 allow 不起作用，界面上也不提供「以后都允许」。

记忆目录包括：自动记忆目录（`<配置目录>/projects/<项目>/memory`，也含其他项目的）、`<配置目录>`、`~/.claude`、当前项目 `.claude` 下的 `agent-memory` 与 `agent-memory-local`，以及设置了 `CLAUDE_CODE_REMOTE_MEMORY_DIR` 时它下面的 `agent-memory` 与 `projects`。

| 调用 | 如何判断 | 可靠程度 |
|---|---|---|
| 带路径的只读工具（Read 等） | 取工具的 `getPath`，展开 `~`、相对路径，并解析符号链接（目标不存在时解析最长的已存在前缀）后，看是否在记忆目录里 | 可靠：符号链接、`..`、`~`、大小写不同（大小写不敏感的文件系统上）都已测试 |
| Bash / PowerShell | 只能看命令文本：把命令切成词（引号内算一个词），对每个词按真实路径判断，`~`、`$HOME`、`${HOME}` 和相对路径展开后落在记忆目录里就询问；`cd <目录>` 之后的相对路径按那个目录解析；`VAR=路径` 取等号右边。只是提到名字的命令（`git add MEMORY.md`、`grep -rn agent-memory src/`、文件名含 `agent-memory`）不会被拦 | 尽力而为 |
| 写类工具（Write、Edit） | 不询问：保存记忆需要写入。实测 Edit 一个记忆文件时，文件里模型没见过的内容没有进入请求，返回给模型的只有「更新成功」；但 Edit 没有先 Read 也能直接执行，所以模型知道文件里某段文字时可以不经询问地改它 | 写入不涉及读取，但不是完全没有信息通道 |

在 `-p` 等没有人可以回答的模式下，询问记为 `permission_denials`，调用不执行，内容不会进入请求。交互界面里出现 "Do you want to proceed?"：选 No 内容不发送，选 Yes 才发送。

测试覆盖：`test/runtime/runtime.test.js` 的 `memory-guard`（判断逻辑），`test/smoke.test.js` 的「读取记忆文件需要确认」（真实二进制 + 假 API，在默认、acceptEdits、bypassPermissions、auto 模式以及 allow 规则、hook 返回 allow 下 Read 与 Bash 都被拦；交互界面的 No 与 Yes 两个分支）。darwin 与 linux 两份生成代码都改了，linux 用伪装平台在 mac 上跑了同一组用例。

已知的盲区（Bash 只看命令文本，下面这些识别不到，会正常执行）：

- 路径靠变量或通配符拼出来，例如 `d=...; cat $d/mem*/*.md`、`cd <项目目录> && cat memory/*.md`；
- 脚本、解释器内部间接读取（`python -c`、`node -e`、已有脚本文件等）。

这些要堵上只能在沙箱里限制读取范围，或在权限里对记忆目录加 deny 规则。

记忆内容不发送：

- 模型仍知道记忆目录和 `MEMORY.md` 的路径，也仍能用 Edit、Write 保存记忆；系统提示词里追加的政策只是提示，不是强制。模型自己调用 Read 读取记忆文件时，现在会先询问用户，见上一节；用户同意后正文才会作为工具结果发出。
- 后台记忆提取和记忆整理关闭后，不会再自动沉淀新的记忆；记忆只在用户明确要求时才会保存。
- 系统提示词里原有的一句 "`MEMORY.md` is the index loaded into context each session" 没有改，与追加的政策有出入，以后者为准。
- 团队记忆索引（需要服务端的记忆库）的改动没有实测，只改了文本格式化函数。

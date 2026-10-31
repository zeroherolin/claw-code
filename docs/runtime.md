# 运行时：与原版的差异

原版 Claude Code 2.1.310 运行在 Anthropic 内部定制的 Bun（`@anthropic-ai/bun-internal`，基于 Bun 1.4.4）上，每个平台发布一个单文件可执行程序。本项目运行在公开版 Bun 1.4.4 上。两者的差异集中在三处，都由 `src/runtime/` 补齐，对各系统相同：

| 原版内部 Bun 提供 | 本项目 |
|---|---|
| `Bun.ant.*` 原生 API | 补上没有回退的 `CellSegmenter` 与 `setDumpable`，其余由原版代码自带回退 |
| 内嵌的 ripgrep / bfs / ugrep（argv0 分发） | `embedded-tools.js` 按 argv0 转交给系统工具 |
| 模块图里 hash 命名的虚拟文件 `/$bunfs/root/<name>` | `assets.js` 按逻辑路径定位 `assets/` 与 `src/` |

原版代码本身只改了排版和引用路径（Linux 版另把写死的架构名改回 `process.arch`，见 [extract/README.md](../extract/README.md#架构还原)），没有因为这些差异改动任何逻辑。

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
| `bfs` | 系统 `bfs` | `find` | `-S <策略>`；BSD find（macOS）还会去掉 `-regextype <类型>` |
| `ugrep` | 系统 `ugrep` | `grep` | `--ignore-files`、`--hidden`、`-I`、`-G` |

- 找工具时会排除自身（`process.execPath`），避免递归调用。
- 都找不到时，打印安装提示，以 127 退出。
- 安装 ripgrep、bfs、ugrep 后（`brew install ripgrep bfs ugrep` 或 `apt install ripgrep bfs ugrep`），Bash 中 find、grep、rg 的输出与原版一致，已由对比测试中的 `findgrep` 用例在每个平台上验证。

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

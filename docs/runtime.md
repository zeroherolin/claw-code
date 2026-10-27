# 运行时：与原版的差异

原版 Claude Code 2.1.310 运行在 Anthropic 内部定制的 Bun（`@anthropic-ai/bun-internal`，基于 Bun 1.4.4）上，以单文件可执行程序发布。本项目运行在公开版 Bun 1.4.4 上。两者的差异集中在三处，都由 `src/runtime/` 补齐：

| 原版内部 Bun 提供 | 本项目 |
|---|---|
| `Bun.ant.*` 原生 API（12 个） | 补上 `CellSegmenter`（JS 实现），其余 11 个由原版代码自带回退 |
| 内嵌的 ripgrep / bfs / ugrep（argv0 分发） | `embedded-tools.js` 按 argv0 转交给系统工具 |
| 模块图里 hash 命名的虚拟文件 `/$bunfs/root/<name>` | `assets.js` 按逻辑路径定位 `assets/` 与 `src/` |

原版代码本身只改了排版和引用路径，没有因为这些差异改动任何逻辑。

## Bun.ant

原版代码通过 `Bun.ant.*` 调用 12 个原生能力。公开版 Bun 没有 `Bun.ant`。逐个检查调用点后，结论是只有 `CellSegmenter` 没有回退：

| API | 用途 | 调用位置 | 缺失时原版的行为 |
|---|---|---|---|
| `CellSegmenter` | 终端渲染：带 ANSI 的文本 → 屏幕格子 | `terminal/cell-segmenter-factory.bt9c.js:157` | **抛错，界面无法渲染** → 本项目补上 |
| `getPeerPid` / `getPeerUid` | daemon Unix socket 对端校验 | `settings/global-config-and-gates.27xj.js:20697`、`telemetry/harbor-kite-pacing-off.qsxe.js:195` | `typeof` 检查不通过 → 返回 null，只记录警告 |
| `loginTty` | 后台会话获取控制终端 | `core/conversation-engine.31gx.js:47699` | try/catch → 返回 `"ffi_unavailable"`，跳过 |
| `ttyName` | 查询终端设备名 | `telemetry/terminal-nonblocking-stdout.vtvg.js:56` | try/catch → undefined |
| `memoryPressureLevel` | macOS 内存压力（后台任务降载） | `context/bg-attach-upgrade.mcwd.js:19` | try/catch → undefined，改用其他内存指标 |
| `posixFsAt` | macOS 沙箱 anchor 后端 | `fs/unstable-identity.n73g.js:391` | 记录警告，不启用该后端 |
| `waitForUrlEvent` | `claude://` 深链接（只在 .app 包装内） | `ui/handle-deep-link-uri.9bk7.js:395` | 只在特定 bundle id 下调用；try/catch → null |
| `windowsFolderSecurity` / `windowsProcessList` / `windowsProcessCreationTime` / `windowsSandboxDeniesArg` | Windows 专用 | `shell/sandbox.*`、`settings/global-config-and-gates.*`、`fs/chunk-tzqhxyjb.js` | 非 Windows 平台不调用 |

`src/runtime/bun-ant.js` 的处理方式：

- 只在 `Bun.ant.CellSegmenter` 缺失时安装本项目的实现；
- 不覆盖 `Bun.ant` 上已有的其他成员；
- 如果运行在内部定制 Bun 上，不做任何改动。

### CellSegmenter

实现文件：`src/runtime/cell-segmenter.js`。原生实现不公开，契约是从渲染器的调用方式反推出来的；`test/runtime/cell-segmenter.test.js` 覆盖了各项约定。

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
- **控制字符与零宽字符**：不占格。substitute 区间内的码点替换为 U+FFFD。
- **SGR 状态**：按"类别"保存，即粗体、暗淡、斜体、下划线、前景色、背景色等各占一类。
  - 同一类别重新设置时，移到末尾。
  - 粗体或暗淡已经生效时，再次设置不改变顺序；这与渲染器对 `\e[22m` 同时关闭两者的处理方式一致。
  - 顺序会直接影响输出的转义序列，因此必须与原生实现一致。最初用固定顺序时，TUI 对比测试出现了属性差异，改为按插入顺序后消除。
- **reorder**：在不做 bidi 的终端（如 Windows Terminal、VS Code 终端）上，把连续的 RTL 字符反转成视觉顺序。

## 内嵌命令行工具

原版的可执行程序以 argv0 = `rg`、`bfs` 或 `ugrep` 启动时，会直接作为对应工具运行。Claude Code 在两处依赖这个能力：

1. **Bash 工具的 shell 快照**：
   - 快照里注入了 `find`、`grep`、`rg` 三个函数，定义在 `core/conversation-engine.31gx.js:72857` 起。
   - 函数体大致是 `ARGV0=bfs "$CLAUDE_CODE_EXECPATH" …`，`CLAUDE_CODE_EXECPATH` 即当前可执行文件。
   - 所以模型在 Bash 里执行 `find`，实际运行的是 bfs；执行 `grep`，实际运行的是 ugrep。
2. **Grep 工具与文件搜索**：`shell/sandbox.aet2.js:24007` 的 `rue()` 选择 ripgrep 的运行方式。
   - 以单文件可执行程序运行时（`Tf()` 为真），默认用 embedded 模式：`{ command: process.execPath, argv0: "rg" }`。
   - 否则使用系统 rg。

`src/runtime/embedded-tools.js` 在入口的最前面按 `basename(process.argv0)` 分发：

| argv0 | 首选 | 回退 | 回退时去掉的参数 |
|---|---|---|---|
| `rg` | 系统 `rg` | — | — |
| `bfs` | 系统 `bfs` | `find` | `-S <策略>`；macOS 上还会去掉 `-regextype <类型>` |
| `ugrep` | 系统 `ugrep` | `grep` | `--ignore-files`、`--hidden`、`-I`、`-G` |

- 找工具时会排除自身（`process.execPath`），避免递归调用。
- 都找不到时，打印安装提示，以 127 退出。
- 安装 `brew install ripgrep bfs ugrep` 后，Bash 中 find、grep、rg 的输出与原版一致，已由对比测试中的 `findgrep` 用例验证。

## 资源定位

原版把资源放在模块图中，名字是 `/$bunfs/root/<原名>-<hash>.<ext>`，有时还经过 zstd 压缩。读取方式有两种：

- text loader：`import.meta.require(path)`；
- file loader：`fs.readFileSync(path)`。

本项目在提取时做了三件事：

- 把资源解压、还原到 `assets/<逻辑路径>`；
- 把源码里的引用改写为下面三个函数；
- 生成 `assets/INDEX.json`，记录每个资源的原名、新路径、大小，以及引用它的模块。

| 函数 | 替代 | 返回 |
|---|---|---|
| `__asset_text(rel)` | text loader 资源 | 文件内容（带缓存） |
| `__asset_path(rel)` | file loader / napi 资源 | 绝对路径 |
| `__asset_src(rel)` | 构建宏 `HOOKS_WORKER_URL` | `src/` 下脚本的绝对路径（用于 `new Worker`） |

根目录的确定方式：

- **编译产物**（`Bun.isStandaloneExecutable`）：`/$bunfs/root`，Windows 上是 `B:\~BUN\root`。
- **开发模式**：项目根目录。

## 编译方式

`npm run build`（`scripts/build.js`）用 `Bun.build({ compile })` 生成单文件可执行程序：

```js
entrypoints: ["scripts/boot.js"],
compile: { outfile: "dist/claude", assets: ["src", "assets"] },
external: ["/$bunfs/*"],
```

- `src/` 和 `assets/` **原样**嵌入 `/$bunfs/root/`，不经打包器改写。
- 入口 `boot.js` 只做一件事：运行期 `import("/$bunfs/root/src/main.js")`。

不让打包器处理源码有两个原因：

- 原版代码里有 500 多处运行期执行的相对路径 `import.meta.require("./x.js")`，以及大量动态 `import()`。打包器合并或拆分模块后，这些路径会失效。
- 把 2568 个模块逐个作为入口编译，耗时过长。原样嵌入只需约 1 秒。

## 开发模式与构建产物的差异

`npm start` 和 `bin/claude` 直接用 Bun 运行 `src/main.js`。与 `dist/claude` 相比，有两处行为不同，都是原版代码自身的判断造成的：

| 场景 | 原因 | 开发模式下的表现 |
|---|---|---|
| 内置 hooks 模块 | `shared/environment` 的 `Tf()`（`Bun.isStandaloneExecutable === true`）为假时，原版会去找源码树中的 `hooks/register.ts`，而发布包里没有这个文件 | 内置 hooks 模块不加载，debug 日志中可见 |
| Bash 中的 `find`、`grep`、`rg` 函数 | 函数以 `ARGV0=…` 回调 `$CLAUDE_CODE_EXECPATH`；开发模式下它是 `bun` 本身，argv0 分发到不了 `src/main.js` | 这三个函数会报错；直接调用 `/usr/bin/find` 等命令不受影响 |

另外，以下行为也取决于 `Tf()`：子进程重启 CLI 自身时 argv 的构造方式（`fs/chunk-tcpay5ps.js:18`），以及 ripgrep 的运行方式（见上文）。开发模式下它们走的是原版为"以脚本方式运行"准备的分支，只有 `dist/claude` 与官方可执行程序一致。

结论：开发模式适合阅读、调试和快速试验；需要与原版完全一致的行为时，请用 `dist/claude`。

# claw-code

Claude Code **2.1.310** 的可读、可运行重组版本，运行在公开版 Bun 1.4.4 上。

原版以单个原生可执行程序发布：Anthropic 内部定制的 Bun 运行时，加上嵌入其中的 2568 个混淆 JS 模块和 251 个资源文件。本项目做了三件事：

- 把模块和资源提取出来，按功能分目录，并用有含义的文件名存放；
- 补上内部 Bun 才有的几项原生能力；
- 重新编译出单文件 `claude`。

行为与原版一致：发往 API 的请求逐字节相同，交互界面逐格相同（见[行为一致性](#行为一致性)）。

版权与许可见 [LICENSE](LICENSE)。

## 快速开始

```sh
npm install           # 安装固定版本的 Bun 与开发依赖
npm run build         # 编译出 dist/claude（约 1 秒）
./dist/claude         # 交互模式；用法与原版相同，例如 ./dist/claude -p "hello"
```

建议安装 `brew install ripgrep bfs ugrep`。原版把这三个工具内嵌在可执行文件里，本项目改为调用系统里的同名工具，详见 [docs/runtime.md](docs/runtime.md#内嵌命令行工具)。

不构建也能直接运行，即开发模式：`npm start -- -p "hello"` 或 `bin/claude`。开发模式有两处与原版不同：内置 hooks 模块不加载，Bash 工具里的 `find`、`grep`、`rg` 函数不可用，原因见 [docs/runtime.md](docs/runtime.md#开发模式与构建产物的差异)。

## 目录结构

| 路径 | 内容 | 来源 |
|---|---|---|
| `src/main.js` | 入口：补齐运行时能力后加载 `cli.js` | 手写 |
| `src/runtime/` | 替代内部定制 Bun 的运行时层 | 手写 |
| `src/cli.js` | 原版 CLI 入口 | 生成 |
| `src/core/` | 对话引擎：回合循环、流式请求、上下文压缩、系统提示词 | 生成 |
| `src/cli/`、`src/ui/`、`src/tools/` 等 | 按功能划分的原版模块，各目录职责见 [architecture.md](docs/architecture.md#5-目录职责) | 生成 |
| `src/vendor/` | 第三方库：react、ink、yoga、zod、aws-sdk 等 | 生成 |
| `assets/` | 资源：提示词、skill 文档、字体、原生 `.node` 模块；清单见 `INDEX.json` | 生成 |
| `reference/` | 机器可读的参考数据：模块对照、工具、命令、特性开关、提示词全文 | 生成 |
| `docs/` | 架构与运行时文档；`docs/reference/` 为参考手册 | 手写 + 生成 |
| `scripts/` | `build.js` 编译单文件可执行程序，`boot.js` 是它的入口 | 手写 |
| `bin/claude` | 开发模式启动器 | 手写 |
| `test/` | 单元、完整性、冒烟测试；`parity/` 为与原版的对比测试 | 手写 |
| `extract/` | 维护者工具：从官方发布内容重新生成上表中"生成"的部分以及 `LICENSE` | 手写 |

"生成"的内容由 `npm run extract` 产出，不要手改。

- **文件命名**：`<语义名>.<原 chunk id 前 4 位>.js`，例如 `tools/agent-tool.vxxp.js`。约 720 个模块找不到可靠的名字，保留为 `chunk-<id>.js`。新旧路径对照见 `reference/module-map.json`。
- **源码只改了位置和排版**：用 esbuild 等价格式化；模块引用改为相对路径；资源引用改为 `__asset_*()`。标识符仍是原版混淆后的名字。

## 文档

| 文档 | 内容 |
|---|---|
| [docs/architecture.md](docs/architecture.md) | 启动流程、一次对话回合的运行路径、各目录职责、关键模块索引 |
| [docs/runtime.md](docs/runtime.md) | 与原版运行时的差异：Bun.ant、内嵌工具、资源定位、编译方式、开发模式的限制 |
| [extract/README.md](extract/README.md) | 重新生成、命名与归档规则、升级到新版本 |
| [docs/reference/](docs/reference) | 自动生成：[工具](docs/reference/TOOLS.md)、[斜杠命令](docs/reference/COMMANDS.md)、[Skill](docs/reference/SKILLS.md)、[CLI](docs/reference/CLI.md)、[环境变量](docs/reference/ENV.md)、[特性开关](docs/reference/GATES.md)、[提示词](docs/reference/PROMPTS.md) |

## 测试

```sh
npm test               # 单元、完整性、冒烟测试（几秒钟）
npm run test:parity    # 与官方可执行程序逐项对比（约 10 分钟）
```

- 对比测试默认使用 `extract/upstream/` 中的官方可执行程序，获取方式见 [extract/README.md](extract/README.md#获取官方发布内容)。也可以用参数或 `CLAUDE_ORIG_BIN` 指定其他位置。
- 只跑部分用例：`npm run test:parity -- --filter '^(text|markdown)'`。
- 全部测试都在隔离的 HOME 下运行，使用假 API key，只连接 127.0.0.1 上的假 API，不访问真实服务。

## 行为一致性

`npm run test:parity` 把官方可执行程序和 `dist/claude` 放在相同的隔离环境中运行同一组用例，逐项比较。当前 30 项全部一致：

- **CLI 输出**（6 项）：`--version`、`--help`，以及 `mcp`、`plugin`、`config`、`doctor` 子命令的帮助。
- **非交互模式**（8 项）：
  - `-p` 的 text、json、stream-json 输出；
  - Bash 和 Read 的工具循环、`--model`、`--append-system-prompt`；
  - Bash 工具里的 find、grep、rg。
  - 以上每一项都同时比较发往 API 的每个请求（系统提示词、工具定义、消息、请求头），要求逐字节一致。
- **交互界面**（16 项）：在固定尺寸的伪终端中按相同时间表发送按键，比较最终屏幕每个格子的字符、颜色和样式。场景包括首次引导、启动页、中日文与 emoji 输入、斜杠命令菜单、`/help`、对话回合、工具调用、Markdown 渲染、长输出、多行输入、Esc、Shift+Tab 切换模式、60 列窄屏和 160 列宽屏。

比较前只归一化与运行环境有关的内容：路径、端口、时间、随机 id、动画相位。规则见 `test/parity/normalize.js`。

已知差异（不影响对话、工具和界面）：

- 内部 Bun 另有 11 个 `Bun.ant.*` 原生能力没有补，原版代码对它们都自带回退。
- 可执行文件的体积和 Bun 版本串不同，且本项目的可执行文件没有代码签名。

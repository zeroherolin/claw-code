# claw-code

Claude Code **2.1.310** 的可读、可运行重组版本，运行在公开版 Bun 1.4.4 上，支持 macOS 与 Linux。

原版为每个平台发布一个原生可执行程序：Anthropic 内部定制的 Bun 运行时，加上嵌入其中的两千多个混淆 JS 模块和两百多个资源文件。各平台分别打包，打包时按目标平台裁剪了代码。本项目做了三件事：

- 把各系统的模块和资源提取出来，按功能分目录，用有含义的文件名存放；各系统中对应的模块路径相同；
- 补上内部 Bun 才有的几项原生能力；
- 为目标平台重新编译出单文件 `claude`。

行为与原版一致：发往 API 的请求逐字节相同，交互界面逐格相同，在每个支持的平台上分别验证（见[行为一致性](#行为一致性)）。

本仓库有两个长期分支：`main` 的行为与原版一致；`dev` 在 `main` 的基础上有意改动了与隐私有关的行为（固定时区、关闭遥测与非必要网络流量、记忆只发路径、拒答后的重试等），说明见该分支的 `docs/dev.md`。

版权与许可见 [LICENSE](LICENSE)。

## 支持的平台

| 系统 | 架构 | 生成代码 | 对应的官方包 |
|---|---|---|---|
| macOS | arm64 | `src/darwin/` | `@anthropic-ai/claude-code-darwin-arm64` |
| Linux（glibc） | x64、arm64 | `src/linux/` | `@anthropic-ai/claude-code-linux-x64`、`-linux-arm64` |

每个系统一份生成代码，适用于该系统列出的全部架构。原版各架构的代码只在硬编码的架构名上不同，提取时已改回运行时判断，见 [extract/README.md](extract/README.md#架构还原)。

## 快速开始

```sh
npm install           # 安装固定版本的 Bun 与开发依赖
npm run build         # 为当前平台编译出 dist/claude（约 10 秒）
./dist/claude         # 交互模式；用法与原版相同，例如 ./dist/claude -p "hello"
npm run install-cli   # 构建，并在 ~/.local/bin 创建 claw-code 链接
```

- `npm run install-cli` 安装的 `claw-code` 与已安装的 `claude` 共存，共用会话记录、配置文件和登录凭据。原版代码有两处会影响已安装的 `claude`：交互使用后把 `claude-cli://` 深链接改注册为当前可执行文件；`update`、`install` 子命令下载官方版本并改写共享配置。避免方式、安装目录、命令名和卸载见 [docs/runtime.md](docs/runtime.md#安装与共存)。
- `npm link` 也只注册 `claw-code` 命令，指向开发模式启动器 `bin/claude`；需要与原版一致的行为时用 `npm run install-cli` 安装构建产物。
- `dist/claude` 是自包含的单文件可执行程序，可以复制到其他位置。不要把它链接为 `claude`，否则会覆盖已安装的原版命令。
- 为其他平台编译：`npm run build -- --target linux-arm64`。
- 建议安装 ripgrep、bfs（3.3 或更新）、ugrep，例如 `brew install ripgrep bfs ugrep` 或 `apt install ripgrep bfs ugrep`。原版把这三个工具内嵌在可执行文件里，本项目改为调用系统里的同名工具；bfs 缺失或过旧时改用系统的 find，详见 [docs/runtime.md](docs/runtime.md#内嵌命令行工具)。

开发模式不需要构建：`bin/claude -p "hello"` 直接运行 `src/`，在调用者的当前目录工作，可用于任意项目（`npm start` 同样是开发模式，但 npm 总是在本项目根目录里运行）。开发模式有两处与原版不同：内置 hooks 模块不加载，Bash 工具里的 `find`、`grep`、`rg` 函数不可用，原因见 [docs/runtime.md](docs/runtime.md#开发模式与构建产物的差异)。

## 目录结构

| 路径 | 内容 | 来源 |
|---|---|---|
| `src/main.js` | 入口：补齐运行时能力后加载当前系统的 `src/<系统>/cli.js` | 手写 |
| `src/runtime/` | 替代内部定制 Bun 的运行时层，以及支持的平台列表 `platforms.js` | 手写 |
| `src/<系统>/` | 各系统的原版模块，每个支持的系统一个目录（`src/darwin/`、`src/linux/`），结构相同：`cli.js` 为原版入口，`core/` 为对话引擎，`cli/`、`ui/`、`tools/` 等按功能划分，`vendor/` 为第三方库；各目录职责见 [architecture.md](docs/architecture.md#5-目录职责) | 生成 |
| `assets/` | 资源：提示词、skill 文档、字体等各系统共用；原生 `.node` 模块按平台放在 `native/<系统>-<架构>/`；清单见 `INDEX.json` | 生成 |
| `reference/` | 机器可读的参考数据：`module-map.json` 为模块路径与各系统原 chunk id 的对照；`<系统>/` 下为工具、命令、特性开关、提示词全文等 | 生成 |
| `docs/` | 架构与运行时文档；`docs/reference/<系统>/` 为参考手册 | 手写 + 生成 |
| `scripts/` | `build.js` 编译单文件可执行程序，`boot.js` 是它的入口，`install.js` 构建并安装 `claw-code` 命令 | 手写 |
| `bin/claude` | 开发模式启动器：直接运行 `src/`，无需构建；与原版有两处行为差异，见 [runtime.md](docs/runtime.md#开发模式与构建产物的差异) | 手写 |
| `dist/claude` | `npm run build` 的产物：自包含的单文件可执行程序（约 290 MB，含 Bun 运行时、目标系统的源码及其字节码、资源） | 构建，不提交 |
| `test/` | 单元、完整性、冒烟测试；`parity/` 为与原版的对比测试 | 手写 |
| `extract/` | 维护者工具：从官方发布内容重新生成上表中"生成"的部分以及 `LICENSE` | 手写 |

"生成"的内容由 `npm run extract` 产出，不要手工修改；有意改动生成源码的分支用版本补丁保存改动，见 [extract/README.md](extract/README.md#版本补丁)。

- **文件命名**：`<语义名>.js`，例如 `tools/agent-tool.js`；名字重复的加上短哈希，如 `ui/aria-hidden.12aa.js`；约 730 个模块无法确定可靠的名字，命名为 `chunk-<哈希>.js`。各系统中对应的模块使用同一路径，只属于某个系统的模块只出现在该系统的目录中。
- **源码只改了位置和排版**：用 esbuild 等价格式化；模块引用改为相对路径；资源引用改为 `__asset_*()`；有多个架构的系统另把硬编码的架构名改回 `process.arch`。标识符仍是原版混淆后的名字，各系统不同。

## 文档

| 文档 | 内容 |
|---|---|
| [docs/architecture.md](docs/architecture.md) | 启动流程、一次对话回合的运行路径、各目录职责、各系统之间的差异 |
| [docs/runtime.md](docs/runtime.md) | 与原版运行时的差异：Bun.ant、内嵌工具、资源定位、编译方式、开发模式的限制、安装与共存 |
| [docs/identifiers.md](docs/identifiers.md) | 会话、设备、账号、请求等标识的来源、存储与发送位置 |
| [extract/README.md](extract/README.md) | 重新生成、架构还原、跨系统对齐、命名与归档规则、升级到新版本 |
| [docs/reference/](docs/reference) | 自动生成，每个系统一份：工具、斜杠命令、Skill、CLI、环境变量、特性开关、提示词（[darwin](docs/reference/darwin/TOOLS.md)、[linux](docs/reference/linux/TOOLS.md)） |

## 测试

```sh
npm test               # 单元、完整性、冒烟测试（约 15 秒）
npm run test:parity    # 与当前平台的官方可执行程序逐项对比（约 3 分钟）
```

- 对比测试默认使用 `extract/upstream/claude-code-<系统>-<架构>/` 中的官方可执行程序，获取方式见 [extract/README.md](extract/README.md#获取官方发布内容)。也可以用参数或 `CLAUDE_ORIG_BIN` 指定其他位置。
- 只运行部分用例：`npm run test:parity -- --filter '^(text|markdown)'`。
- 全部测试都在隔离的 HOME 下运行，使用假 API key，模型请求只发往 127.0.0.1 上的假 API。隔离环境关闭了遥测、非必要网络流量和官方插件市场的自动安装（`test/harness.js` 的 `cleanEnv`）。对比测试的首次引导场景（`onboarding`）是例外：原版在引导开始时检查连通性，访问 `api.anthropic.com` 与 `platform.claude.com`（`ui/preflight-check-failed.js`「/v1/oauth/hello」），请求不带凭据，原版没有关闭这项检查的开关。
- CI（`.github/workflows/test.yml`）：每次 push 和 PR 在每个支持的平台上分别构建，运行 `npm test`，并与该平台的官方可执行程序做对比测试。

## 行为一致性

`npm run test:parity` 把官方可执行程序和 `dist/claude` 放在相同的隔离环境中运行同一组用例，逐项比较。在每个支持的平台上，33 项全部一致：

- **CLI 输出**（6 项）：`--version`、`--help`，以及 `mcp`、`plugin`、`config`、`doctor` 子命令的帮助。
- **非交互模式**（9 项）：
  - `-p` 的 text、json、stream-json 输出；
  - Bash 和 Read 的工具循环、`--model`、`--append-system-prompt`；
  - Bash 工具里的 find、grep、rg；
  - `--continue` 接续已保存的会话。
  - 以上每一项都同时比较发往 API 的每个请求（系统提示词、工具定义、消息、请求头），要求逐字节一致。
- **交互界面**（18 项）：在固定尺寸的伪终端中，等启动输出静止后按相同的节奏发送按键，输出再次静止后比较屏幕每个格子的字符、颜色和样式。场景包括首次引导、启动页、中日文与 emoji 输入、键帽和国旗等特殊 emoji 字素、斜杠命令菜单、`/help`、对话回合、工具调用、权限确认对话框、Markdown 渲染、长输出、多行输入、Esc、Shift+Tab 切换模式、60 列窄屏和 160 列宽屏。

比较前只归一化与运行环境有关的内容：路径、端口、时间、随机 id、动画相位。规则见 `test/parity/normalize.js`；分支有意与原版不同的内容登记在 `test/parity/intentional.js`，`main` 上为空。

已知差异（不影响对话、工具和界面）：

- 内部 Bun 的 `Bun.ant.*` 原生能力中，本项目补上了没有回退的两个，其余由原版代码自带回退，见 [docs/runtime.md](docs/runtime.md#bunant)。
- 启动稍慢：一次 `-p` 请求约 0.23 秒，原版约 0.15 秒，见 [docs/runtime.md](docs/runtime.md#编译方式)。
- 可执行文件的体积和 Bun 版本串不同，且本项目的可执行文件没有代码签名。

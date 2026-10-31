# extract：从官方发布内容重新生成本项目

本目录是维护者工具。它读取官方 Claude Code 各平台的原生可执行程序，重新生成以下内容：

- `src/<系统>/`：各系统的生成代码（手写的 `src/main.js` 与 `src/runtime/` 不受影响）；
- `assets/`、`reference/`、`docs/reference/`；
- `LICENSE`。

项目运行时不需要这个目录。

```sh
npm run extract                       # 默认读取 extract/upstream/
npm run extract -- --upstream <目录>
```

整个流程只依赖 Bun 和项目的 devDependencies（esbuild、acorn），约 1 分钟完成。

- 输出是确定的：对同一份输入运行两次，结果逐字节相同。
- 读取与分析全部成功后才写入项目目录；输入缺失或分析出错时，项目保持原样。

## 目录

```
extract/
├── index.js        流水线入口：按顺序调用下面各阶段
├── lib.js          读取 Bun 模块图（Mach-O 与 ELF）、格式化 JS 模块、AST 解析与分词
├── assets.js       资源：识别引用关系、解压转码、按规则归档
├── unfold.js       架构还原：对照同一系统的各架构构建，把写死的架构名改回运行时判断
├── analyze.js      静态分析：工具、斜杠命令、skill、特性开关、CLI、环境变量、遥测、提示词
├── align.js        跨系统对齐：找出两个系统中一一对应的模块
├── areas.js        功能区规则：模块放进 src/<系统>/ 的哪个目录
├── naming.js       自动命名规则
├── assemble.js     组装：确定各模块路径、改写模块与资源引用、写出 src/<系统>/
├── reference.js    写 reference/<系统>/*.json 与 docs/reference/<系统>/*.md
├── license.js      写 LICENSE：原版声明 + 本项目许可 + 第三方许可注释
├── layout/
│   └── 2.1.310.json  按版本编写的规则：关键模块的人工命名、资源归档规则
└── upstream/       官方发布内容（不提交，获取方式见下）
    ├── claude-code/                  npm 包 @anthropic-ai/claude-code（取其中的 sdk-tools.d.ts、LICENSE.md）
    └── claude-code-<系统>-<架构>/     各平台的 npm 包（原生可执行程序 claude）
```

支持的平台定义在 `src/runtime/platforms.js`，提取、构建、入口和测试都读取它。

## 获取官方发布内容

```sh
cd extract/upstream
version=2.1.310
for pkg in claude-code claude-code-darwin-arm64 claude-code-linux-x64 claude-code-linux-arm64; do
  npm pack "@anthropic-ai/$pkg@$version"
  mkdir "$pkg" && tar -xzf "anthropic-ai-$pkg-$version.tgz" --strip-components=1 -C "$pkg"
done
rm ./*.tgz
```

这些内容也是对比测试（`npm run test:parity`）默认使用的原版：对比测试只需要当前平台的那个包。

## 流水线

| 阶段 | 模块 | 做什么 |
|---|---|---|
| 1. 模块图 | `lib.js` | 在 Mach-O 的 `__BUN,__bun` 段或 ELF 的 `.bun` 节中读出各平台的模块：名字、内容、编码、loader |
| 2. 资源 | `assets.js` | 找出每个资源被哪些模块、以什么逻辑路径引用；zstd 解压、UTF-16 转 UTF-8；按 `layout` 归档到 `assets/`；原生模块按平台存放 |
| 3. 格式化与架构还原 | `lib.js` `unfold.js` | 用 esbuild 格式化各平台的 JS 模块；同一系统有多个架构时，把写死的架构名改回 `process.arch` |
| 4. 分析 | `analyze.js` | 对每个系统做 AST 分析，结果供命名与参考资料使用 |
| 5. 对齐与命名 | `align.js` `assemble.js` `areas.js` `naming.js` | 找出两个系统中对应的模块，为每组确定目录和文件名 |
| 6. 写出 | `assemble.js` | 改写模块与资源引用，写出 `src/<系统>/` 与 `assets/`（含 `INDEX.json`） |
| 7. 参考资料 | `reference.js` | 把分析结果中的位置换算到 `src/<系统>/` 下的新路径和行号，写 `reference/<系统>/` 与 `docs/reference/<系统>/`；`reference/module-map.json` 为模块路径与各系统原 chunk id 的对照 |
| 8. LICENSE | `license.js` | 汇总原版 LICENSE.md、模块头部的条款声明、第三方库许可注释 |

组装阶段只改位置和排版，不改语义：

- 去掉每个模块开头的 Bun 字节码标记和条款声明；
- 用 esbuild 等价重新打印；第三方许可注释抽出，写进 `LICENSE`；
- `"/$bunfs/root/<chunk>.js"` 改成相对路径；
- 资源引用改成 `__asset_text()`、`__asset_path()`、`__asset_native()`、`__asset_src()`（见 `src/runtime/assets.js`）。

架构还原是唯一改动表达式的步骤，范围见下节。

## 架构还原

原版每个平台单独打包，`process.arch` 被替换成了字面量。同一系统各架构的构建，去掉混淆名后只有三类差异：

| 差异 | 例子 | 处理 |
|---|---|---|
| 字符串、模板字符串或属性名中的架构名 | `"x64-linux"`、`` `${platform} x64` ``、`o.x64` | 改为 `` `${process.arch}-linux` ``、`` `${platform} ${process.arch}` ``、`o[process.arch]` |
| 构建常量对象中只在部分架构出现的 `DD_SOURCEMAP_GROUP` | x64 版有 `DD_SOURCEMAP_GROUP: "default"`，arm64 版没有 | 值改为 `process.arch === "x64" ? "default" : void 0` |
| 对象属性简写与否 | `{ a }` 与 `{ a: b }` | 混淆名碰巧相同造成，不是真实差异，忽略 |

`unfold.js` 以基准架构（`src/runtime/platforms.js` 中每个系统的第一个架构）格式化后的源码为准，逐 token 对照其他架构的同一模块，只按上表改写；遇到其他差异立即报错，不做猜测。当前 Linux 版改写了 89 个模块：架构名 25 处，`DD_SOURCEMAP_GROUP` 300 处。

## 跨系统对齐

两个系统分别打包，混淆名不同、平台相关的分支被裁掉，chunk id 也不同。`align.js` 按内容找出一一对应的模块，对应的模块在 `src/darwin/` 与 `src/linux/` 中使用相同的路径：

1. 有固定名字的模块（入口 `cli`、hooks worker、原生模块的 JS 包装）按名字配对；
2. 形状相同（标识符统一为 `$`，模块引用换成占位符）且一对一的配对；
3. 把"引用了哪些已配对模块""被哪些已配对模块引用"（按集合）加入形状，继续找一对一，直到不再增加；
4. 其余按得分配对：token 3-gram 相似度、字符串字面量重合度、已配对邻居重合度三者的平均；要求互为最佳且明显高于次佳；
5. 3、4 交替进行，直到不再增加；
6. 命名时，按内容没配上、但语义名在每个系统的未配对模块中都恰好出现一次的，也视为对应模块。

配不上的模块只属于一个系统，只出现在该系统的目录中。

## 文件命名

文件名格式为 `<语义名>.js`。名字在全部模块中重复时，每个都加上该组模块的短哈希，如 `<语义名>.<4 位哈希>.js`；找不到可靠名字的命名为 `chunk-<8 位哈希>.js`。哈希由各系统的原 chunk id 计算，不偏向任何一个系统。新旧对照见 `reference/module-map.json`。

**语义名**按以下优先级依次选取（一组模块在各系统中算出的结果不同时，取字典序较小者）：

1. `layout/<版本>.json` 中的人工命名
2. 唯一对应的工具名 → `<tool>-tool`；斜杠命令 → `command-<name>`；skill → `skill-<name>`
3. 有意义的导出名（camelCase 或 UPPER_CASE，排除混淆名）
4. 有意义的声明名（长度至少 8 的 class 或 function 名）
5. 最常见的语义化遥测事件名（去掉 `tengu_` 前缀）
6. 最具代表性的特征字符串
7. 以上都没有：`chunk-<哈希>`

**人工命名**：`modules` 以目标路径为键，`match` 是一组特征字符串，必须在每个系统中都全部出现在、且只出现在一个模块的原版源码中，并且各系统命中的模块互相对应；`why` 说明这个模块的职责。chunk id 每个版本、每个系统都不同，特征字符串通常不变，因此升级时一般不用改。

```json
"core/system-prompt-blocks": { "match": ["__SYSTEM_PROMPT_STATIC_BREAKPOINT__"], "why": "系统提示词分块…" }
```

特征字符串宜选用户可见的文案、遥测事件名、选项名等，不要用混淆后的标识符。

**目录**（`areas.js`，一组模块在各系统中算出的结果不同时取字典序较小者）：

- 工具、命令、skill 模块直接进入对应目录；
- 其余模块先看导出名，再按特征正则计分，取得分最高的区域；
- 第三方库的得分须达到应用区域最高分的 1.5 倍，才会被归入 `vendor/<库名>`；
- 含 Claude Code 自身代码标志（`tengu_` 遥测事件、`CLAUDE_CODE_*` 环境变量、构建宏、产品名）的模块不归入 `vendor/`：打包时应用代码可能和库代码合进同一个 chunk；
- 都不匹配时进入 `shared/`。

## 资源归档

`layout/<版本>.json` 的 `assets` 只引用资源名，不引用 chunk id，因此对各系统同样适用：

- `groups`：`{ 分组目录: [锚点资源名…] }`。引用锚点资源的 chunk 所引用的资源都归入该分组，逻辑路径即组内相对路径。例如内置 skill 的文档归入 `skills/<名字>`。
- `named`：没有逻辑路径的单个资源（字体、vendor 库等），从原名映射到新路径。
- `replRoute`、`designSyncScripts`：两个特殊分组的成员。
- 原生模块（napi）不需要规则：按平台存到 `native/<系统>-<架构>/<名字>`。

同一个资源在各平台必须落到同一位置、内容相同，否则提取报错。

## 升级到新版本

内部 chunk id 和资源名中的 hash 每个版本都会变。新版本需要一份新的 `layout/<版本>.json`：

1. 按上文获取新版本全部平台的官方发布内容，然后复制上一版的 layout 文件并改名。
2. 运行 `npm run extract`。没有归档规则的资源会被逐个列出，并注明各系统中引用它的 chunk。按提示更新 `assets` 中的规则：锚点资源与 `named` 的键是带 hash 的资源名，需要换成新版本的名字。
3. 人工命名按 `match` 自动定位。某条在某个系统中命中 0 个或多个模块时，提取会列出命中情况并停止，项目保持原样。处理方式：
   - 按 `why` 的说明在新版本的源码中重新挑选特征字符串；
   - 或删除这一条，让该模块使用自动命名。手写文档若引用了它，`npm test` 中的文档检查会指出。
4. 架构还原遇到新类型的差异时会报错并列出位置；确认是打包时写死的平台常量后，在 `unfold.js` 中补充规则。
5. 检查运行时层是否需要调整：`rg -o 'Bun\.ant\??\.\w+' src/darwin src/linux | sort | uniq -c`。
   - 新增的 API 若有回退（try/catch 或 `typeof` 检查），只需更新 `docs/runtime.md` 中的表格；
   - 若没有回退，要在 `src/runtime/bun-ant.js` 中补上实现。
   - CellSegmenter 的调用约定有变化时，同时更新 `src/runtime/cell-segmenter.js` 与它的单元测试。
6. 修改 `package.json` 的 `version`。原版的 Bun 版本变了时，同时修改 `engines.bun` 和 devDependency 里的 `bun`。
7. 运行 `npm run build && npm test && npm run test:parity`；其他平台的验证由 CI 完成。

## 新增平台

1. 在 `src/runtime/platforms.js` 的 `SYSTEMS` 中加入新的系统或架构。新系统会多一份 `src/<系统>/`；已有系统的新架构只用于架构还原，不增加源码。
2. 获取对应的官方 npm 包，运行 `npm run extract`。架构还原遇到未知差异时会报错，说明该架构不能共用一份源码。
3. 检查新系统用到的 `Bun.ant` 能力（见上文第 5 步）。
4. 在 `.github/workflows/test.yml` 的矩阵中加入该平台的 runner。

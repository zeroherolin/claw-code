# extract：从官方发布内容重新生成本项目

本目录是维护者工具。它读取官方 Claude Code 的原生可执行程序，重新生成以下内容：

- `src/`：手写的 `main.js` 与 `runtime/` 除外；
- `assets/`、`reference/`、`docs/reference/`；
- `LICENSE`。

项目运行时不需要这个目录。

```sh
npm run extract                  # 默认读取 extract/upstream/
npm run extract -- --binary <claude> --sdk-types <sdk-tools.d.ts>
```

整个流程只依赖 Bun 和项目的 devDependencies（esbuild、acorn），约 15 秒完成。输出是确定的：对同一份输入运行两次，结果逐字节相同。

## 目录

```
extract/
├── index.js        流水线入口：按顺序调用下面各阶段
├── lib.js          读取 Bun 模块图（Mach-O 解析）、格式化 JS 模块、AST 解析
├── assets.js       资源：识别引用关系、解压转码、按规则归档
├── analyze.js      静态分析：工具、斜杠命令、skill、特性开关、CLI、环境变量、遥测、提示词
├── areas.js        功能区规则：模块放进 src/ 的哪个目录
├── naming.js       自动命名规则
├── assemble.js     组装 src/：命名、改写模块与资源引用、写出
├── reference.js    写 reference/*.json 与 docs/reference/*.md
├── license.js      写 LICENSE：原版声明 + 本项目许可 + 第三方许可注释
├── layout/
│   └── 2.1.310.json  按版本编写的规则：关键模块的人工命名、资源归档规则
└── upstream/       官方发布内容（不提交，获取方式见下）
    ├── claude-code/               npm 包 @anthropic-ai/claude-code（取其中的 sdk-tools.d.ts、LICENSE.md）
    └── claude-code-darwin-arm64/  npm 包 @anthropic-ai/claude-code-darwin-arm64（原生可执行程序 claude）
```

## 获取官方发布内容

```sh
cd extract/upstream
npm pack @anthropic-ai/claude-code@2.1.310 @anthropic-ai/claude-code-darwin-arm64@2.1.310
mkdir claude-code claude-code-darwin-arm64
tar -xzf anthropic-ai-claude-code-2.1.310.tgz --strip-components=1 -C claude-code
tar -xzf anthropic-ai-claude-code-darwin-arm64-2.1.310.tgz --strip-components=1 -C claude-code-darwin-arm64
rm *.tgz
```

这份内容也是对比测试（`npm run test:parity`）默认使用的原版。

## 流水线

| 阶段 | 模块 | 做什么 |
|---|---|---|
| 1. 模块图 | `lib.js` | 在 Mach-O 的 `__BUN,__bun` 段中读出 2819 个模块：名字、内容、编码、loader |
| 2. 资源 | `assets.js` | 找出每个资源被哪些模块、以什么逻辑路径引用；zstd 解压、UTF-16 转 UTF-8；按 `layout` 归档到 `assets/`，生成 `INDEX.json` |
| 3. 分析 | `lib.js` `analyze.js` | 用 esbuild 格式化 2568 个 JS 模块后做 AST 分析，结果供命名与参考资料使用 |
| 4. 组装 | `assemble.js` `areas.js` `naming.js` | 为每个模块确定目录和文件名，改写引用，写出 `src/` |
| 5. 参考资料 | `reference.js` | 把分析结果中的位置换算到 `src/` 下的新路径和行号，写 `reference/` 与 `docs/reference/` |
| 6. LICENSE | `license.js` | 汇总原版 LICENSE.md、模块头部的条款声明、第三方库许可注释 |

组装阶段只改位置和排版，不改语义：

- 去掉每个模块开头的 Bun 字节码标记和条款声明；
- 用 esbuild 等价重新打印；第三方许可注释抽出，写进 `LICENSE`；
- `"/$bunfs/root/<chunk>.js"` 改成相对路径；
- 资源引用改成 `__asset_text()`、`__asset_path()`、`__asset_src()`（见 `src/runtime/assets.js`）。

## 文件命名

文件名格式为 `<语义名>.<chunk id 前 4 位>.js`。后缀保证文件名唯一，也能直接回溯到原 chunk。完整对照见 `reference/module-map.json`。

**语义名**按以下优先级依次选取：

1. `layout/<版本>.json` 中的人工命名
2. 唯一对应的工具名 → `<tool>-tool`；斜杠命令 → `command-<name>`；skill → `skill-<name>`
3. 有意义的导出名（camelCase 或 UPPER_CASE，排除混淆名）
4. 有意义的声明名（长度至少 8 的 class 或 function 名）
5. 最常见的语义化遥测事件名（去掉 `tengu_` 前缀）
6. 最具代表性的特征字符串
7. 以上都没有：`chunk-<8 位 id>`

**目录**（`areas.js`）：

- 工具、命令、skill 模块直接进入对应目录；
- 其余模块先看导出名，再按特征正则计分，取得分最高的区域；
- 第三方库的得分须达到应用区域最高分的 1.5 倍，才会被归入 `vendor/<库名>`；
- 都不匹配时进入 `shared/`。

## 升级到新版本

内部 chunk id 和资源名中的 hash 每个版本都会变。新版本需要一份新的 `layout/<版本>.json`：

1. 按上文获取新版本的官方发布内容，然后复制上一版的 layout 文件并改名。
2. 运行 `npm run extract`。没有归档规则的资源会被逐个列出，并注明引用它的 chunk。按提示补全 `assets` 中的规则：
   - `chunkGroup`：某个 chunk 引用的资源归入哪个目录。例如内置 skill 的文档归入 `skills/<名字>`：skill 看 SKILL.md 头部的 `name:`，提示词看引用它的模块。
   - `named`：没有逻辑路径的单个资源（字体、vendor 库、原生模块等），从原名映射到新路径。
   - `replRoute`、`designSyncScripts`：两个特殊分组的成员。
3. 更新 `modules` 中的人工命名。每条的 `why` 记录了判断依据（特征字符串），据此在新版本中找到对应的 chunk：

   ```sh
   rg -l '__SYSTEM_PROMPT_STATIC_BREAKPOINT__' src     # 找到文件
   rg '"chunk-[a-z0-9]{8}\.js": "core/system-prompt-blocks' reference/module-map.json
   ```

   这一步可以跳过：缺少人工命名时，这些模块会退回到自动命名。
4. 检查运行时层是否需要调整：`rg -o 'Bun\.ant\??\.\w+' src | sort | uniq -c`。
   - 新增的 API 若有回退（try/catch 或 `typeof` 检查），只需更新 `docs/runtime.md` 中的表格；
   - 若没有回退，要在 `src/runtime/bun-ant.js` 中补上实现。
   - CellSegmenter 的调用约定有变化时，同时更新 `src/runtime/cell-segmenter.js` 与它的单元测试。
5. 修改 `package.json` 的 `version`。原版的 Bun 版本变了时，同时修改 `engines.bun` 和 devDependency 里的 `bun`。
6. 运行 `npm run build && npm test && npm run test:parity`。

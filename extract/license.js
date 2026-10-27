// LICENSE 阶段：把所有版权与许可相关内容汇总到项目根目录的 LICENSE，源码与资源中不再保留。
//
// 来源:
//   - 原版发布包的 LICENSE.md
//   - 原版每个 JS 模块开头的条款声明（组装时已从源码中去掉）
//   - 第三方库的许可注释（/*! … */、@license、@preserve；组装时由 esbuild 抽出）
import fs from "node:fs";

/**
 * @param legal Map<许可注释, Set<出现的 src/ 路径>>
 */
export function writeLicense(file, { version, upstreamLicense, upstreamHeader, legal }) {
  const header = upstreamHeader.split("\n").map((l) => l.replace(/^\/\/ ?/, "")).join("\n").trim();
  const thirdParty = [...legal].sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)).map(([text, files]) => {
    const where = [...files].sort();
    return `${text}\n    （位于 ${where.slice(0, 3).map((f) => `src/${f}`).join("、")}${where.length > 3 ? ` 等 ${where.length} 个文件` : ""}）`;
  });

  fs.writeFileSync(file, `本项目由两部分组成，适用不同的条款。

================================================================================
一、Claude Code ${version}（src/ 中的生成代码、assets/、reference/、docs/reference/）
================================================================================

这些内容提取自 Anthropic PBC 发布的 Claude Code ${version}
（npm 包 @anthropic-ai/claude-code 与 @anthropic-ai/claude-code-darwin-arm64），
版权归 Anthropic PBC 所有。本项目只对其做了提取、格式化与重新组织，未取得任何额外授权。

原版 LICENSE.md:

  ${upstreamLicense}

原版每个模块开头附带的声明:

${header.split("\n").map((l) => (l ? `  ${l}` : "")).join("\n")}

使用这些内容须遵守上述法律协议。本项目仅用于学习、研究与互操作性分析，
不得用于规避原版的授权或计费机制。

================================================================================
二、本项目新增的部分
================================================================================

src/main.js、src/runtime/、scripts/、bin/、test/、extract/（upstream/ 除外）以及 docs/ 中的
手写文档为本项目新增内容，以 MIT 许可发布:

MIT License

Copyright (c) 2026 Linz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

================================================================================
三、原版中包含的第三方库
================================================================================

原版打包了下列第三方库（主要位于 src/vendor/），它们沿用各自的开源许可。
以下为原版代码中保留的许可注释，共 ${thirdParty.length} 段:

${thirdParty.join("\n\n")}
`);
}

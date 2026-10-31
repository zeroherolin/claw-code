// 补齐内部定制 Bun 才有的 Bun.ant.* 原生 API。
//
// 原版运行在 @anthropic-ai/bun-internal 上，代码通过 Bun.ant.* 调用原生能力（macOS 版 12 个、Linux 版 12 个，
// 共 13 个）。公开版 Bun 没有 Bun.ant；多数调用点自带回退（try/catch 或 typeof 检查后降级），
// 以下两个没有能让功能照常工作的回退，因此由本项目实现:
//
//   CellSegmenter              终端渲染：文本 → 屏幕格子（缺失时界面无法渲染）  → cell-segmenter.js
//   setDumpable（仅 Linux）     prctl(PR_SET_DUMPABLE)（缺失时代码审查会话拒绝启动）→ set-dumpable.js
//
// 其余 API 与原版的回退见 docs/runtime.md#bunant。
import { CellSegmenter } from "./cell-segmenter.js";
import { setDumpable } from "./set-dumpable.js";

const PROVIDED = { CellSegmenter, ...(process.platform === "linux" && { setDumpable }) };

/** 在公开版 Bun 上补齐上述成员；已有的成员不覆盖，在内部定制 Bun 上不做任何事 */
export function installBunAnt() {
  const ant = Bun.ant ?? {};
  for (const [name, impl] of Object.entries(PROVIDED)) if (typeof ant[name] !== "function") ant[name] = impl;
  if (Bun.ant !== ant) Object.defineProperty(Bun, "ant", { value: ant, configurable: true, writable: true, enumerable: false });
}

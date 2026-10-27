#!/usr/bin/env bun
// 把 src/ 与 assets/ 编译为单文件可执行程序 dist/claude。
//
// 源码与资源不经打包器改写，按原目录结构嵌入 /$bunfs/root/{src,assets}：原版代码中有 500 多处
// 运行期的 import.meta.require("./x.js") 与动态 import()，打包合并会让这些相对路径失效。
// 入口 scripts/boot.js 只在运行期加载 /$bunfs/root/src/main.js。
//
//   bun scripts/build.js [--outfile dist/claude] [--target bun-darwin-arm64]
import path from "node:path";
import { parseArgs } from "node:util";

const ROOT = path.join(import.meta.dir, "..");
const { values } = parseArgs({ options: { outfile: { type: "string", default: "dist/claude" }, target: { type: "string" } } });

const t0 = performance.now();
const result = await Bun.build({
  entrypoints: [path.join(ROOT, "scripts/boot.js")],
  compile: {
    outfile: path.join(ROOT, values.outfile),
    assets: [path.join(ROOT, "src"), path.join(ROOT, "assets")],
    ...(values.target && { target: values.target }), // 默认为当前平台
  },
  root: ROOT,
  format: "esm",
  external: ["/$bunfs/*"],
});
if (!result.success) {
  for (const log of result.logs) console.error(String(log));
  process.exit(1);
}
console.log(`${values.outfile}（${Math.round(performance.now() - t0)} ms）`);

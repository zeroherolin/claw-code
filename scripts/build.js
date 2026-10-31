#!/usr/bin/env bun
// 把 src/ 与 assets/ 编译为单文件可执行程序 dist/claude。
//
// src/ 中每个模块各作一个入口，模块之间的相对路径引用全部标为 external：打包器不合并、不移动模块，
// 输出保持原目录结构（/$bunfs/root/src/…）。原版代码中有 500 多处运行期的
// import.meta.require("./x.js") 与动态 import()，模块位置不变，这些相对路径才能继续生效。
// 每个模块预编译为字节码，启动时不必重新解析源码。
// 入口 scripts/boot.js 在运行期加载 /$bunfs/root/src/main.js。
//
//   bun scripts/build.js [--outfile dist/claude] [--target bun-darwin-arm64]
import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "node:util";

const ROOT = path.join(import.meta.dir, "..");
const { values } = parseArgs({ options: { outfile: { type: "string", default: "dist/claude" }, target: { type: "string" } } });

const modules = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
  const p = path.join(dir, e.name);
  return e.isDirectory() ? modules(p) : e.name.endsWith(".js") ? [p] : [];
});

const t0 = performance.now();
const result = await Bun.build({
  entrypoints: [path.join(ROOT, "scripts/boot.js"), ...modules(path.join(ROOT, "src"))],
  compile: {
    outfile: path.join(ROOT, values.outfile),
    assets: [path.join(ROOT, "assets")],
    ...(values.target && { target: values.target }), // 默认为当前平台
  },
  root: ROOT,
  naming: "[dir]/[name].[ext]",
  format: "esm",
  bytecode: true,
  external: ["/$bunfs/*", "./*", "../*"],
});
if (!result.success) {
  for (const log of result.logs) console.error(String(log));
  process.exit(1);
}
console.log(`${values.outfile}（${Math.round(performance.now() - t0)} ms）`);

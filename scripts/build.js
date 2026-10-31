#!/usr/bin/env bun
// 把目标平台所需的源码与资源编译为单文件可执行程序 dist/claude。
//
// 嵌入内容：src/main.js、src/runtime/、目标系统的 src/<系统>/，以及 assets/（原生模块只取目标平台的
// assets/native/<平台>/）。src 下每个模块各作一个入口，模块之间的相对路径引用全部标为 external：
// 打包器不合并、不移动模块，输出保持原目录结构（/$bunfs/root/src/…）。原版代码中有 500 多处运行期的
// import.meta.require("./x.js") 与动态 import()，模块位置不变，这些相对路径才能继续生效。
// 每个模块预编译为字节码，启动时不必重新解析源码。入口 scripts/boot.js 在运行期加载 /$bunfs/root/src/main.js。
//
//   bun scripts/build.js [--target <平台>] [--outfile dist/claude]      平台如 linux-x64，默认为当前平台
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { parseArgs } from "node:util";
import { PLATFORMS } from "../src/runtime/platforms.js";

const ROOT = path.join(import.meta.dir, "..");
const { values } = parseArgs({ options: { outfile: { type: "string", default: "dist/claude" }, target: { type: "string", default: `${process.platform}-${process.arch}` } } });
if (!PLATFORMS.includes(values.target)) {
  console.error(`不支持的平台 ${values.target}，可选：${PLATFORMS.join("、")}`);
  process.exit(2);
}
const [system] = values.target.split("-");

const modules = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
  const p = path.join(dir, e.name);
  return e.isDirectory() ? modules(p) : e.name.endsWith(".js") ? [p] : [];
});
const src = (p) => path.join(ROOT, "src", p);

// compile.assets 中的目录以自身的名字嵌入根目录，因此在临时目录中组装一份 assets/（原生模块只取目标平台）
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "claw-build-"));
process.on("exit", () => fs.rmSync(tmp, { recursive: true, force: true }));
const native = path.join(ROOT, "assets/native");
fs.cpSync(path.join(ROOT, "assets"), path.join(tmp, "assets"), {
  recursive: true,
  filter: (p) => !p.startsWith(native + path.sep) || p.startsWith(path.join(native, values.target)),
});

const t0 = performance.now();
const result = await Bun.build({
  entrypoints: [path.join(ROOT, "scripts/boot.js"), src("main.js"), ...modules(src("runtime")), ...modules(src(system))],
  compile: { outfile: path.join(ROOT, values.outfile), assets: [path.join(tmp, "assets")], target: `bun-${values.target}` },
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
console.log(`${values.outfile}（${values.target}，${Math.round(performance.now() - t0)} ms）`);

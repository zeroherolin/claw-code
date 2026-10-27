// 资源定位：替代原版模块图中 hash 命名的虚拟文件 /$bunfs/root/<name>。
//   单文件可执行程序（npm run build）: /$bunfs/root/{src,assets}/…
//   开发模式（bun src/main.js）:        <项目根>/{src,assets}/…
import { readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = Bun.isStandaloneExecutable
  ? (process.platform === "win32" ? "B:\\~BUN\\root" : "/$bunfs/root")
  : join(import.meta.dir, "../..");
const ASSETS = join(ROOT, "assets");
const SRC = join(ROOT, "src");
const textCache = new Map();

/** 资源的绝对路径（file / napi loader：交给 fs 读取或加载原生模块） */
export function __asset_path(rel) {
  return join(ASSETS, rel);
}

/** 资源的文本内容（text loader：原版经 import.meta.require 得到字符串） */
export function __asset_text(rel) {
  if (!textCache.has(rel)) textCache.set(rel, readFileSync(join(ASSETS, rel), "utf8"));
  return textCache.get(rel);
}

/** src/ 下脚本的绝对路径（用于 new Worker） */
export function __asset_src(rel) {
  return join(SRC, rel);
}

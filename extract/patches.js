// 版本补丁：有意改动生成源码的分支，把改动按上游版本保存为标准 diff（extract/patches/<版本>.patch）。
// 提取时先在项目外的临时目录完整校验，再应用。没有补丁时什么都不做，生成的源码与原版只差位置和排版。
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const PATCH_DIR = path.join(import.meta.dir, "patches");

/**
 * 本版本的补丁文件；一个补丁都没有时返回 null。
 * 有别的版本的补丁、却没有本版本的，说明升级时漏了迁移：直接失败，不生成丢掉这些改动的源码。
 */
export function sourcePatchForVersion(version, dir = PATCH_DIR) {
  if (!/^\d+\.\d+\.\d+$/.test(version)) throw new Error(`无效的上游版本 ${version}`);
  const patch = path.join(dir, `${version}.patch`);
  if (fs.existsSync(patch)) return patch;
  const others = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".patch")).sort() : [];
  if (others.length) throw new Error(`缺少源码补丁 extract/patches/${version}.patch（现有 ${others.join("、")}）：升级前须迁移并审查补丁，不能生成丢掉这些改动的版本`);
  return null;
}

/**
 * 在 root 下应用补丁，补丁中的路径相对 root。先完整校验，任何一处不匹配都不改动文件。
 * root 必须在 Git 仓库之外：在仓库里 git apply 会按仓库根目录解释路径。不访问 Git 索引。
 */
export function applySourcePatch(root, patch, { reverse = false } = {}) {
  const env = Object.fromEntries(Object.entries(process.env).filter(([key]) => !key.startsWith("GIT_")));
  const args = ["--whitespace=nowarn", ...(reverse ? ["--reverse"] : []), path.resolve(patch)];
  for (const check of [true, false]) {
    const result = spawnSync("git", ["apply", ...(check ? ["--check"] : []), ...args], { cwd: root, env, encoding: "utf8" });
    if (result.error || result.status !== 0) throw new Error(`源码补丁${check ? "校验" : "应用"}失败（${path.basename(patch)}），文件未被改动：\n${result.error?.message ?? result.stderr}`);
  }
}

/**
 * 补丁造成的行号变化：返回 (补丁中的文件路径, 补丁前的行号) → 补丁后的行号。
 * 被删除的行对应到它原来位置上的下一行；补丁没有涉及的文件，行号不变。
 */
export function patchLineShift(patch) {
  const files = new Map();
  let file, o, n;
  for (const line of fs.readFileSync(patch, "utf8").split("\n")) {
    let m;
    if (line.startsWith("diff --git ")) file = o = undefined;
    else if ((m = line.match(/^\+\+\+ b\/(.+)$/)) && o === undefined) files.set(m[1], (file = { inside: new Map(), after: [] }));
    else if (file && (m = line.match(/^@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@/))) (o = +m[1]), (n = +m[2]), file.after.push([o, n - o]);
    else if (o !== undefined && /^[ +-]/.test(line)) {
      if (line[0] !== "+") file.inside.set(o++, n);
      if (line[0] !== "-") n++;
      file.after[file.after.length - 1] = [o, n - o]; // 这个改动块之后的行：从 o 起，行号增加 n - o
    }
  }
  return (name, line) => {
    const f = files.get(name);
    if (!f) return line;
    if (f.inside.has(line)) return f.inside.get(line);
    let delta = 0;
    for (const [from, d] of f.after) if (from <= line) delta = d;
    return line + delta;
  };
}

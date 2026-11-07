// dev 的生成源码改动按上游版本保存为标准 diff；先在临时目录完整校验，再交给流水线写入项目。
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

export function sourcePatchForVersion(version) {
  if (!/^\d+\.\d+\.\d+$/.test(version)) throw new Error(`无效的上游版本 ${version}`);
  const patch = path.join(import.meta.dir, "patches", `${version}.patch`);
  if (!fs.existsSync(patch)) throw new Error(`缺少 dev 源码补丁 extract/patches/${version}.patch：升级前须迁移并审查补丁，不能生成没有隐私策略的版本`);
  return patch;
}

/** root 必须是项目之外的临时目录，里面只有待生成的 src/；不访问 Git 索引，不允许部分应用。 */
export function applySourcePatch(root, patch, { reverse = false } = {}) {
  const env = Object.fromEntries(Object.entries(process.env).filter(([key]) => !key.startsWith("GIT_")));
  const args = ["--whitespace=nowarn", ...(reverse ? ["--reverse"] : []), path.resolve(patch)];
  for (const check of [true, false]) {
    const result = spawnSync("git", ["apply", ...(check ? ["--check"] : []), ...args], { cwd: root, env, encoding: "utf8" });
    if (result.error || result.status !== 0) throw new Error(`dev 源码补丁${check ? "校验" : "应用"}失败（${path.basename(patch)}），项目文件未被替换：\n${result.error?.message ?? result.stderr}`);
  }
}

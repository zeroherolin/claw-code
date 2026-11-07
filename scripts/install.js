#!/usr/bin/env bun
// 编译并安装：把 dist/claude 以 claw-code 的名字链接到 PATH 中的目录，与已安装的 claude 共存。
//
//   bun scripts/install.js [--bin-dir <目录>] [--name claw-code] [--no-build] [--force]      安装（默认 ~/.local/bin）
//   bun scripts/install.js --uninstall [--bin-dir <目录>] [--name claw-code]                 卸载
//
// 只创建一个符号链接，指向本项目的 dist/claude：重新构建后立即生效，不复制 290 MB 的可执行文件。
// 配置、会话记录、登录凭据都由原版代码按同样的规则定位（~/.claude、~/.claude.json、钥匙串），所以与 claude 共用。
// 不会覆盖不是自己创建的文件；卸载只删除指向本项目 dist/claude 的链接。
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { parseArgs } from "node:util";

const ROOT = path.join(import.meta.dir, "..");
const DIST = path.join(ROOT, "dist/claude");
const { values } = parseArgs({
  options: {
    "bin-dir": { type: "string", default: path.join(os.homedir(), ".local/bin") },
    name: { type: "string", default: "claw-code" },
    "no-build": { type: "boolean", default: false },
    force: { type: "boolean", default: false },
    uninstall: { type: "boolean", default: false },
  },
});
if (!/^[A-Za-z0-9._-]+$/.test(values.name) || values.name === "claude") {
  console.error(`名字 ${values.name} 不可用：只能含字母、数字、. _ -，且不能是 claude（那是已安装的原版）`);
  process.exit(2);
}
const binDir = path.resolve(values["bin-dir"]);
const link = path.join(binDir, values.name);

/** link 是否是指向 dist/claude 的符号链接（目标不存在也算，卸载时要能清掉失效的链接） */
function isOurs() {
  try {
    return fs.lstatSync(link).isSymbolicLink() && path.resolve(binDir, fs.readlinkSync(link)) === DIST;
  } catch {
    return false;
  }
}
const exists = () => fs.lstatSync(link, { throwIfNoEntry: false }) !== undefined;

if (values.uninstall) {
  if (!exists()) console.log(`${link} 不存在，无需卸载`);
  else if (!isOurs()) {
    console.error(`${link} 不是指向 ${DIST} 的链接，不删除`);
    process.exit(1);
  } else {
    fs.unlinkSync(link);
    console.log(`已删除 ${link}`);
  }
  process.exit(0);
}

if (exists() && !isOurs() && !values.force) {
  console.error(`${link} 已存在，且不是本项目创建的链接。确认可以覆盖请加 --force`);
  process.exit(1);
}

if (!values["no-build"] || !fs.existsSync(DIST)) {
  const r = Bun.spawnSync([process.execPath, path.join(ROOT, "scripts/build.js")], { stdout: "inherit", stderr: "inherit" });
  if (r.exitCode !== 0) process.exit(r.exitCode ?? 1);
}

fs.mkdirSync(binDir, { recursive: true });
fs.rmSync(link, { force: true });
fs.symlinkSync(DIST, link);
console.log(`${link} -> ${DIST}`);

// 提醒：目录不在 PATH 中，或 PATH 里排在前面的另有同名命令
const dirs = (process.env.PATH ?? "").split(path.delimiter).filter(Boolean).map((d) => path.resolve(d));
if (!dirs.includes(binDir)) {
  console.log(`\n${binDir} 不在 PATH 中。把下面这行加进 shell 配置后重新打开终端：\n  export PATH="${binDir}:$PATH"`);
} else {
  const shadow = dirs.slice(0, dirs.indexOf(binDir)).map((d) => path.join(d, values.name)).find((p) => fs.existsSync(p));
  if (shadow) console.log(`\n注意：${shadow} 排在前面，输入 ${values.name} 会先运行它。`);
}

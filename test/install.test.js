// scripts/install.js：把 dist/claude 以 claw-code 的名字链接进 bin 目录，与已安装的 claude 共存。
// 全部在临时目录里进行，--no-build 复用已构建的 dist/claude，因此没有构建产物时跳过。
import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { ROOT, DIST, VERSION } from "./harness.js";

const SCRIPT = path.join(ROOT, "scripts/install.js");
let tmp, bin;

beforeEach(() => {
  tmp = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), "claw-inst-")));
  bin = path.join(tmp, "bin");
});
afterEach(() => fs.rmSync(tmp, { recursive: true, force: true }));

/** 运行安装脚本。PATH 只有系统目录和 extraPath，HOME 指向临时目录，不涉及真实的 ~/.local/bin */
function install(args, { extraPath } = {}) {
  const r = Bun.spawnSync([process.execPath, SCRIPT, "--no-build", "--bin-dir", bin, ...args], {
    env: { PATH: [extraPath, "/usr/bin", "/bin"].filter(Boolean).join(":"), HOME: tmp },
  });
  return { code: r.exitCode, out: r.stdout.toString(), err: r.stderr.toString() };
}
const linkTarget = (name = "claw-code") => fs.readlinkSync(path.join(bin, name));

describe.skipIf(!fs.existsSync(DIST))("scripts/install.js", () => {
  test("创建指向 dist/claude 的链接，经 PATH 以 claw-code 启动", () => {
    const r = install([]);
    expect(r.code).toBe(0);
    expect(linkTarget()).toBe(DIST);
    const run = Bun.spawnSync(["claw-code", "--version"], { env: { PATH: `${bin}:/usr/bin:/bin`, HOME: tmp } });
    expect(run.stdout.toString().trim()).toBe(`${VERSION} (Claude Code)`);
  });

  test("可重复安装", () => {
    expect(install([]).code).toBe(0);
    expect(install([]).code).toBe(0);
    expect(linkTarget()).toBe(DIST);
  });

  test("bin 目录不在 PATH 中时给出提示", () => {
    expect(install([]).out).toContain("不在 PATH 中");
  });

  test("bin 目录在 PATH 中且排在前面的有同名命令时提醒", () => {
    const other = path.join(tmp, "other");
    fs.mkdirSync(other);
    fs.writeFileSync(path.join(other, "claw-code"), "#!/bin/sh\n", { mode: 0o755 });
    const r = install([], { extraPath: `${other}:${bin}` });
    expect(r.out).toContain(`${path.join(other, "claw-code")} 排在前面`);
  });

  test("不覆盖不是本脚本创建的文件，加 --force 才覆盖", () => {
    fs.mkdirSync(bin);
    fs.writeFileSync(path.join(bin, "claw-code"), "mine\n");
    const r = install([]);
    expect(r.code).toBe(1);
    expect(r.err).toContain("--force");
    expect(fs.readFileSync(path.join(bin, "claw-code"), "utf8")).toBe("mine\n");
    expect(install(["--force"]).code).toBe(0);
    expect(linkTarget()).toBe(DIST);
  });

  test("不接受 claude 这个名字，不改动已安装的原版", () => {
    const r = install(["--name", "claude"]);
    expect(r.code).toBe(2);
    expect(fs.existsSync(path.join(bin, "claude"))).toBe(false);
  });

  test("卸载只删除指向本项目的链接", () => {
    install([]);
    fs.writeFileSync(path.join(bin, "other"), "keep\n");
    fs.symlinkSync("/nonexistent/claude", path.join(bin, "foreign"));
    expect(install(["--uninstall", "--name", "other"]).code).toBe(1);
    expect(install(["--uninstall", "--name", "foreign"]).code).toBe(1);
    expect(install(["--uninstall"]).code).toBe(0);
    expect(fs.readdirSync(bin).sort()).toEqual(["foreign", "other"]);
    expect(install(["--uninstall"]).out).toContain("无需卸载"); // 已卸载
  });
});

// bin/claude 启动器：跟随符号链接找到项目根目录，在调用者所在的目录运行，透传参数与退出码，
// 优先使用项目固定版本的 Bun，找不到 Bun 时给出明确提示。
//
// 被测脚本会被复制进临时目录里搭出的最小"项目"（路径里带空格，检验引号处理），其中 src/main.js
// 换成只打印运行环境的桩，因此不依赖真实的 Claude Code 代码，也不访问任何服务。
import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { ROOT, VERSION } from "./harness.js";

const LAUNCHER = path.join(ROOT, "bin/claude");
let tmp, project, work;

beforeEach(() => {
  tmp = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), "claw-bin-")));
  project = path.join(tmp, "claw code");
  work = path.join(tmp, "work");
  for (const d of ["bin", "src", "node_modules/.bin"]) fs.mkdirSync(path.join(project, d), { recursive: true });
  fs.mkdirSync(work);
  fs.copyFileSync(LAUNCHER, path.join(project, "bin/claude"));
  fs.chmodSync(path.join(project, "bin/claude"), 0o755);
  fs.writeFileSync(path.join(project, "src/main.js"), `
    const [flag, code] = process.argv.slice(2);
    if (flag === "--exit") process.exit(Number(code));
    console.log(JSON.stringify({ args: process.argv.slice(2), cwd: process.cwd(), main: import.meta.path }));
  `);
  fs.symlinkSync(process.execPath, path.join(project, "node_modules/.bin/bun"));
});
afterEach(() => fs.rmSync(tmp, { recursive: true, force: true }));

const launcher = () => path.join(project, "bin/claude");
const mainJs = () => path.join(project, "src/main.js");
const link = (target, at) => (fs.mkdirSync(path.dirname(at), { recursive: true }), fs.symlinkSync(target, at), at);
const fakeBun = (dir, script) => (fs.mkdirSync(dir), fs.writeFileSync(path.join(dir, "bun"), script, { mode: 0o755 }), dir);

/** 在 work/ 下运行启动器。PATH 里没有 bun，除非 extraPath 提供 */
function run(file, args = [], { extraPath } = {}) {
  const r = Bun.spawnSync([file, ...args], {
    cwd: work,
    env: { PATH: [extraPath, "/usr/bin", "/bin"].filter(Boolean).join(":"), HOME: tmp },
  });
  return { code: r.exitCode, out: r.stdout.toString(), err: r.stderr.toString() };
}

describe("定位项目根目录", () => {
  const expectFindsProject = (r) => {
    expect(r.err).toBe("");
    expect(r.code).toBe(0);
    expect(JSON.parse(r.out).main).toBe(mainJs());
  };

  test("直接调用", () => expectFindsProject(run(launcher())));

  test("绝对路径的符号链接（npm link、链入 PATH 的方式）", () => {
    expectFindsProject(run(link(launcher(), path.join(tmp, "claude"))));
  });

  test("相对路径的符号链接，且逐级链接", () => {
    link("../claw code/bin/claude", path.join(tmp, "links/inner"));
    expectFindsProject(run(link("inner", path.join(tmp, "links/outer"))));
  });

  test("bin/ 目录本身是符号链接", () => {
    link("claw code/bin", path.join(tmp, "bin-link"));
    expectFindsProject(run(path.join(tmp, "bin-link/claude")));
  });
});

describe("运行方式", () => {
  test("在调用者所在的目录运行，参数原样透传", () => {
    const args = ["-p", "hello world", "--flag=a b", "", "*"];
    const out = JSON.parse(run(launcher(), args).out);
    expect(out.cwd).toBe(work);
    expect(out.args).toEqual(args);
  });

  test("退出码原样透传", () => {
    expect(run(launcher(), ["--exit", "7"]).code).toBe(7);
  });
});

describe("选择 Bun", () => {
  test("优先使用项目固定版本的 Bun，而不是 PATH 里的", () => {
    const decoy = fakeBun(path.join(tmp, "decoy"), "#!/bin/sh\necho decoy-bun\n");
    const r = run(launcher(), [], { extraPath: decoy });
    expect(JSON.parse(r.out).main).toBe(mainJs()); // 用了 decoy 的话输出是 "decoy-bun"，这里会解析失败
  });

  test("没有固定版本时回退到 PATH 里的 bun", () => {
    fs.rmSync(path.join(project, "node_modules"), { recursive: true });
    const dir = fakeBun(path.join(tmp, "fallback"), '#!/bin/sh\necho "fallback-bun $1 $2"\n');
    expect(run(launcher(), ["x"], { extraPath: dir }).out.trim()).toBe(`fallback-bun ${mainJs()} x`);
  });

  test("两者都没有时给出提示，退出码 127", () => {
    fs.rmSync(path.join(project, "node_modules"), { recursive: true });
    const r = run(launcher());
    expect(r.code).toBe(127);
    expect(r.err).toContain("找不到 bun");
    expect(r.out).toBe("");
  });
});

describe("真实项目", () => {
  test("bin/claude 可执行，且就是 package.json 中 bin.claude 指向的文件", () => {
    const declared = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf8")).bin.claude;
    expect(path.resolve(ROOT, declared)).toBe(LAUNCHER);
    expect(fs.statSync(LAUNCHER).mode & 0o111).not.toBe(0);
  });

  test("经符号链接运行 --version", () => {
    const r = run(link(LAUNCHER, path.join(tmp, "claude")), ["--version"]);
    expect(r.out.trim()).toBe(`${VERSION} (Claude Code)`);
    expect(r.code).toBe(0);
  });
});

// 运行时层：内嵌工具分发、Bun.ant 补丁、资源定位。
import { describe, expect, test } from "bun:test";
import { spawnSync } from "child_process";
import fs from "fs";
import os from "os";
import path from "path";

const ROOT = path.resolve(import.meta.dir, "../..");
const RUNTIME = path.join(ROOT, "src/runtime");

// 写一个只调用 dispatchEmbeddedTool() 的小入口，以指定 argv0 启动
function dispatch(argv0, args, env = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "claw-dispatch-"));
  const entry = path.join(dir, "entry.js");
  fs.writeFileSync(entry, `import { dispatchEmbeddedTool } from ${JSON.stringify(path.join(RUNTIME, "embedded-tools.js"))};
dispatchEmbeddedTool();
console.log("NOT_DISPATCHED");\n`);
  try {
    return spawnSync(process.execPath, [entry, ...args], { argv0, encoding: "utf8", env: { ...process.env, ...env }, cwd: dir });
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

// 造一个只含指定工具的 PATH 目录（用 shell 脚本冒充，打印收到的参数）
function fakePath(tools) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "claw-path-"));
  for (const t of tools) {
    const p = path.join(dir, t);
    fs.writeFileSync(p, `#!/bin/sh\necho "${t}:$*"\n`);
    fs.chmodSync(p, 0o755);
  }
  return dir;
}

describe("embedded-tools", () => {
  test("argv0 不是内嵌工具名时不做任何事", () => {
    const r = dispatch("claude", ["--x"]);
    expect(r.stdout.trim()).toBe("NOT_DISPATCHED");
  });

  test("rg → 系统 rg，参数原样透传", () => {
    const bin = fakePath(["rg"]);
    const r = dispatch("rg", ["-n", "needle", "."], { PATH: bin });
    expect(r.stdout.trim()).toBe("rg:-n needle .");
    expect(r.status).toBe(0);
  });

  test("bfs 不存在时回退 find，并去掉 bfs 专有参数", () => {
    const bin = fakePath(["find"]);
    const r = dispatch("bfs", [".", "-S", "dfs", "-name", "*.txt"], { PATH: bin });
    expect(r.stdout.trim()).toBe("find:. -name *.txt");
  });

  test("ugrep 不存在时回退 grep，并去掉 ugrep 专有参数", () => {
    const bin = fakePath(["grep"]);
    const r = dispatch("ugrep", ["-G", "--hidden", "-rn", "needle", "."], { PATH: bin });
    expect(r.stdout.trim()).toBe("grep:-rn needle .");
  });

  test("系统里找不到任何候选时以 127 退出", () => {
    const r = dispatch("rg", ["x"], { PATH: fakePath([]) });
    expect(r.status).toBe(127);
    expect(r.stderr).toContain("rg: not found");
  });
});

describe("bun-ant", () => {
  test("安装 Bun.ant.CellSegmenter，且不覆盖已有的 Bun.ant 成员", async () => {
    const { installBunAnt } = await import("../../src/runtime/bun-ant.js");
    const { CellSegmenter } = await import("../../src/runtime/cell-segmenter.js");
    const had = Object.getOwnPropertyDescriptor(Bun, "ant");
    try {
      const marker = () => "kept";
      Object.defineProperty(Bun, "ant", { value: { ttyName: marker }, configurable: true, writable: true });
      installBunAnt();
      expect(Bun.ant.CellSegmenter).toBe(CellSegmenter);
      expect(Bun.ant.ttyName).toBe(marker);
    } finally {
      if (had) Object.defineProperty(Bun, "ant", had);
      else delete Bun.ant;
    }
  });
});

describe("assets", () => {
  test("开发模式下资源根为 <项目>/assets，源码根为 <项目>/src", async () => {
    const { __asset_path, __asset_src, __asset_text } = await import("../../src/runtime/assets.js");
    expect(__asset_path("INDEX.json")).toBe(path.join(ROOT, "assets/INDEX.json"));
    expect(__asset_src("cli.js")).toBe(path.join(ROOT, "src/cli.js"));
    expect(Array.isArray(JSON.parse(__asset_text("INDEX.json")))).toBe(true);
  });
});

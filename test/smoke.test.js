// 冒烟测试：开发模式（bun src/main.js）与构建产物（dist/claude，构建后才运行）都能启动并完成请求。
import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import fs from "node:fs";
import path from "node:path";
import { ROOT, DIST, VERSION, makeHome, cleanEnv, startFakeApi, runCli } from "./harness.js";

let home, api;
const run = (cmd, args) => runCli(cmd, args, { cwd: home.work, env: cleanEnv(home.home, api.url) });
const DEV = [process.execPath, path.join(ROOT, "src/main.js")];

beforeAll(() => {
  home = makeHome();
  api = startFakeApi(home.work);
});
afterAll(() => {
  api.stop();
  home.remove();
});

describe("开发模式 bun src/main.js", () => {
  test("--version", async () => {
    const r = await run(DEV, ["--version"]);
    expect(r.output.trim()).toBe(`${VERSION} (Claude Code)`);
    expect(r.code).toBe(0);
  });

  test("-p 完成一次请求", async () => {
    const r = await run(DEV, ["-p", "say hi"]);
    expect(r.output.trim()).toBe("PONG");
    expect(r.code).toBe(0);
  });
});

describe.skipIf(!fs.existsSync(DIST))("构建产物 dist/claude", () => {
  test("-p 完成一次带工具调用的请求", async () => {
    const r = await run([DIST], ["-p", "CALL_BASH please", "--allowedTools", "Bash(echo:*)"]);
    expect(r.output.trim()).toBe("DONE: hello-from-tool");
    expect(r.code).toBe(0);
  });

  // 原版的可执行程序不加载当前目录中的 .env 与 bunfig.toml；公开版 Bun 的编译产物默认加载，构建时关闭（见 docs/runtime.md#编译方式）。
  // .env 中的变量生效时请求带上自定义请求头，bunfig.toml 的 preload 脚本运行时写出标记文件
  test("不加载工作目录中的 .env 与 bunfig.toml", async () => {
    const h = makeHome(), fake = startFakeApi(h.work), marker = path.join(h.home, "preload-ran");
    fs.writeFileSync(path.join(h.work, ".env"), "ANTHROPIC_CUSTOM_HEADERS=anthropic-from-dotenv: 1\n");
    fs.writeFileSync(path.join(h.work, "preload.js"), `require("fs").writeFileSync(${JSON.stringify(marker)}, "");\n`);
    fs.writeFileSync(path.join(h.work, "bunfig.toml"), 'preload = ["./preload.js"]\n');
    try {
      const r = await runCli([DIST], ["-p", "say hi"], { cwd: h.work, env: cleanEnv(h.home, fake.url) });
      expect(r.output.trim()).toBe("PONG");
      expect(fake.requests[0].headers["anthropic-from-dotenv"]).toBeUndefined();
      expect(fs.existsSync(marker)).toBe(false);
    } finally {
      fake.stop();
      h.remove();
    }
  });
});

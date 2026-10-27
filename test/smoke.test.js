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
});

// 测试工具自身的测试：伪终端驱动在按键后等到程序响应再结束；隔离环境中的 CLI 不访问外部服务。
import { describe, expect, test } from "bun:test";
import fs from "node:fs";
import path from "node:path";
import { DIST, cleanEnv, makeHome, runInPty, startFakeApi, trapExternalAccess } from "./harness.js";

describe("runInPty", () => {
  test("按键前已长时间静止时，仍等到程序对按键的响应", async () => {
    // 不回显输入；读到一行后 0.3 秒才输出，按键本身不会立刻产生任何输出
    const script = 'stty -echo; printf ready; read -r x; sleep 0.3; printf " got:%s" "$x"; sleep 30';
    const { bytes, timedOut } = await runInPty(["/bin/sh", "-c", script], {
      cwd: "/", env: { PATH: "/usr/bin:/bin" }, cols: 40, rows: 5, idle: 500, keys: [[0.6, "hi\r"]],
    });
    expect(timedOut).toBe(false);
    expect(bytes.toString()).toContain("ready got:hi");
  });
});

describe.skipIf(!fs.existsSync(DIST))("cleanEnv", () => {
  test("交互界面启动时不访问外部服务：不调用 ssh，git 不执行网络操作，不经代理连接外部主机", async () => {
    const h = makeHome(), api = startFakeApi(h.work);
    const trap = trapExternalAccess(cleanEnv(h.home, api.url), path.join(h.home, "trap"));
    try {
      const { timedOut } = await runInPty([DIST], { cwd: h.work, env: trap.env, cols: 100, rows: 30, keys: [] });
      expect(timedOut).toBe(false);
      expect(trap.attempts()).toEqual([]);
    } finally {
      trap.stop();
      api.stop();
      h.remove();
    }
  }, 60_000);
});

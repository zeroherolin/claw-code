// 测试工具自身的测试：伪终端驱动在按键后等到程序响应再结束。
import { describe, expect, test } from "bun:test";
import { runInPty } from "./harness.js";

describe("runInPty", () => {
  test("按键前已静止很久时，仍等到程序对按键的响应", async () => {
    // 不回显输入；读到一行后 0.3 秒才输出，按键本身不会立刻产生任何输出
    const script = 'stty -echo; printf ready; read -r x; sleep 0.3; printf " got:%s" "$x"; sleep 30';
    const { bytes, timedOut } = await runInPty(["/bin/sh", "-c", script], {
      cwd: "/", env: { PATH: "/usr/bin:/bin" }, cols: 40, rows: 5, idle: 500, keys: [[0.6, "hi\r"]],
    });
    expect(timedOut).toBe(false);
    expect(bytes.toString()).toContain("ready got:hi");
  });
});

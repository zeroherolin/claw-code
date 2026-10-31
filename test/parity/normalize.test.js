// 对比规则自身的测试：屏幕按列逐格比较，只忽略运行环境造成的差异。
import { describe, expect, test } from "bun:test";
import { renderScreen } from "../harness.js";
import { normalizeStream, screenDiff } from "./normalize.js";

const screen = (bytes) => renderScreen(Buffer.from(bytes, "latin1"), 40, 3);
const utf8 = (s) => Buffer.from(s, "utf8").toString("latin1");

describe("screenDiff", () => {
  test("相同的屏幕没有差异", async () => {
    const s = utf8("中文 \x1b[1mbold\x1b[0m 🎉 end");
    expect(screenDiff(await screen(s), await screen(s), "/h1", "/h2")).toEqual([]);
  });

  test("宽字符之后的差异报告在正确的列，并给出该列的字符", async () => {
    const a = await screen(utf8("中文 abc"));
    const b = await screen(utf8("中文 a\x1b[31mb\x1b[0mc"));
    const diffs = screenDiff(a, b, "/h1", "/h2");
    expect(diffs).toHaveLength(1);
    expect(diffs[0]).toContain("列 6 b|"); // 中、文各占两列，"b" 在第 6 列
  });

  test("只有属性不同也算差异", async () => {
    expect(screenDiff(await screen("x"), await screen("\x1b[2mx\x1b[0m"), "/h1", "/h2")).toHaveLength(1);
  });

  test("两边各自的 HOME 与端口不算差异", async () => {
    const home1 = "/private/var/folders/T/claw-test-aaaaaa", home2 = "/private/var/folders/T/claw-test-bbbbbb";
    const at = (home, port) => normalizeStream(`cwd ${home}/work api 127.0.0.1:${port}`, home);
    expect(screenDiff(await screen(at(home1, 4001)), await screen(at(home2, 59999)), home1, home2)).toEqual([]);
  });
});

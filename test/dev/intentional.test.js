// 对比测试里登记的有意差异（test/parity/intentional.js）：只去掉登记的内容，其他差异仍然报告。
import { describe, expect, test } from "bun:test";
import fs from "node:fs";
import path from "node:path";
import { ROOT } from "../harness.js";
import { SYSTEMS } from "../../src/runtime/platforms.js";
import { MEMORY_POLICY } from "../parity/intentional.js";
import { jsonDiff, normalizeRequest } from "../parity/normalize.js";

describe("normalizeRequest：有意的差异", () => {
  const req = (system, date) => ({ body: { system: [{ type: "text", text: system }], messages: [{ role: "user", content: `<system-reminder>\nToday's date is ${date}.\n</system-reminder>` }] } });
  const upstream = "# Memory\nrules here.\n\n# Environment\n - cwd";
  const dev = `# Memory\nrules here.\n\n${MEMORY_POLICY}\n\n# Environment\n - cwd`;

  test("记忆政策段落与日期不计为差异", () => {
    expect(jsonDiff(normalizeRequest(req(upstream, "2026-11-07"), "/h1"), normalizeRequest(req(dev, "2026-11-06"), "/h2"))).toEqual([]);
  });

  test("段落以外的任何差异仍然报告，政策文字被改动也计为差异", () => {
    const other = normalizeRequest(req(dev.replace("rules here", "rules there"), "2026-11-06"), "/h2");
    expect(jsonDiff(normalizeRequest(req(upstream, "2026-11-07"), "/h1"), other).length).toBeGreaterThan(0);
    const edited = normalizeRequest(req(dev.replace("Do not read", "Feel free to read"), "2026-11-06"), "/h2");
    expect(jsonDiff(normalizeRequest(req(upstream, "2026-11-07"), "/h1"), edited).length).toBeGreaterThan(0);
  });

  test("只忽略日期的取值，不忽略日期所在的句子", () => {
    const a = req(upstream, "2026-11-07"), b = req(upstream, "2026-11-07");
    b.body.messages[0].content = b.body.messages[0].content.replace("Today's date is", "The date is");
    expect(jsonDiff(normalizeRequest(a, "/h1"), normalizeRequest(b, "/h2")).length).toBeGreaterThan(0);
  });

  test("登记的政策原文与各系统生成代码中追加的文字逐字相同", () => {
    for (const sys of Object.keys(SYSTEMS)) {
      const code = fs.readFileSync(path.join(ROOT, "src", sys, "context/org-memory-writes-setting-changed.js"), "utf8");
      expect(code).toContain(JSON.stringify("\n\n" + MEMORY_POLICY).slice(1, -1));
    }
  });
});

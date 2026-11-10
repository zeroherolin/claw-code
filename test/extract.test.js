// 版本补丁机制（extract/patches.js）：按版本选取补丁，完整校验后才应用，并换算补丁造成的行号变化。
import { describe, expect, test } from "bun:test";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { applySourcePatch, patchLineShift, sourcePatchForVersion } from "../extract/patches.js";
import { SYSTEMS } from "../src/runtime/platforms.js";
import { ROOT, VERSION } from "./harness.js";

/** 在一次性目录里运行 fn(dir) */
function inTmp(fn) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "claw-patch-"));
  try {
    return fn(dir);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}
const lines = (...xs) => xs.map((x) => x + "\n").join("");
// f.txt 共 12 行（l1 … l12）：在 l2 之后插入一行，删除 l8
const F_OLD = lines(...Array.from({ length: 12 }, (_, i) => `l${i + 1}`));
const F_PATCH = lines(
  "diff --git a/f.txt b/f.txt", "--- a/f.txt", "+++ b/f.txt",
  "@@ -1,4 +1,5 @@", " l1", " l2", "+new", " l3", " l4",
  "@@ -7,3 +8,2 @@", " l7", "-l8", " l9",
);

describe("sourcePatchForVersion", () => {
  test("一个补丁都没有时返回 null；有本版本的补丁时返回它", () => inTmp((dir) => {
    expect(sourcePatchForVersion("1.2.3", dir)).toBeNull();
    expect(sourcePatchForVersion("1.2.3", path.join(dir, "missing"))).toBeNull();
    fs.writeFileSync(path.join(dir, "1.2.3.patch"), F_PATCH);
    expect(sourcePatchForVersion("1.2.3", dir)).toBe(path.join(dir, "1.2.3.patch"));
  }));

  test("只有别的版本的补丁时失败：升级时不能丢掉这些改动", () => inTmp((dir) => {
    fs.writeFileSync(path.join(dir, "1.2.3.patch"), F_PATCH);
    expect(() => sourcePatchForVersion("1.2.4", dir)).toThrow("缺少源码补丁 extract/patches/1.2.4.patch（现有 1.2.3.patch）");
  }));

  test("版本号不是 x.y.z 时失败", () => {
    expect(() => sourcePatchForVersion("../1.2.3")).toThrow("无效的上游版本");
  });
});

describe("applySourcePatch", () => {
  test("应用后可完整逆向", () => inTmp((dir) => {
    const file = path.join(dir, "f.txt"), patch = path.join(dir, "p.patch");
    fs.writeFileSync(file, F_OLD);
    fs.writeFileSync(patch, F_PATCH);
    applySourcePatch(dir, patch);
    expect(fs.readFileSync(file, "utf8")).toBe(F_OLD.replace("l2\n", "l2\nnew\n").replace("l8\n", ""));
    applySourcePatch(dir, patch, { reverse: true });
    expect(fs.readFileSync(file, "utf8")).toBe(F_OLD);
  }));

  test("任何一处不匹配时，所有文件都保留原内容", () => inTmp((dir) => {
    fs.writeFileSync(path.join(dir, "f.txt"), F_OLD);
    fs.writeFileSync(path.join(dir, "g.txt"), "unexpected\n");
    const patch = path.join(dir, "p.patch");
    fs.writeFileSync(patch, F_PATCH + lines("diff --git a/g.txt b/g.txt", "--- a/g.txt", "+++ b/g.txt", "@@ -1 +1 @@", "-expected", "+patched"));
    expect(() => applySourcePatch(dir, patch)).toThrow("校验失败");
    expect(fs.readFileSync(path.join(dir, "f.txt"), "utf8")).toBe(F_OLD);
    expect(fs.readFileSync(path.join(dir, "g.txt"), "utf8")).toBe("unexpected\n");
  }));
});

describe("patchLineShift", () => {
  test("补丁前的每一行都换算到补丁后同一行内容所在的行号", () => inTmp((dir) => {
    const file = path.join(dir, "f.txt"), patch = path.join(dir, "p.patch");
    fs.writeFileSync(file, F_OLD);
    fs.writeFileSync(patch, F_PATCH);
    applySourcePatch(dir, patch);
    const after = fs.readFileSync(file, "utf8").split("\n"), shift = patchLineShift(patch);
    for (let i = 1; i <= 12; i++) if (i !== 8) expect(after[shift("f.txt", i) - 1]).toBe(`l${i}`);
    expect(after[shift("f.txt", 8) - 1]).toBe("l9"); // 被删除的行对应到原位置上的下一行
    expect(shift("other.txt", 5)).toBe(5); // 补丁没有涉及的文件
  }));
});

// 有版本补丁的分支才运行：补丁须与当前的生成源码吻合，且每个系统都有改动
const current = sourcePatchForVersion(VERSION);
describe.skipIf(!current)("本版本的补丁", () => {
  const files = current ? [...fs.readFileSync(current, "utf8").matchAll(/^\+\+\+ b\/(src\/[^\n]+)$/gm)].map((m) => m[1]) : [];

  test("每个系统的生成源码都有改动", () => {
    for (const system of Object.keys(SYSTEMS)) expect(files.some((f) => f.startsWith(`src/${system}/`))).toBe(true);
  });

  test("可从当前的生成源码完整逆向，再重放回原样", () => inTmp((dir) => {
    const read = (root, f) => fs.readFileSync(path.join(root, f));
    for (const f of files) {
      fs.mkdirSync(path.dirname(path.join(dir, f)), { recursive: true });
      fs.copyFileSync(path.join(ROOT, f), path.join(dir, f));
    }
    applySourcePatch(dir, current, { reverse: true });
    for (const f of files) expect(read(dir, f).equals(read(ROOT, f))).toBe(false); // 逆向后每个文件都变回补丁前的内容
    applySourcePatch(dir, current);
    for (const f of files) expect(read(dir, f).equals(read(ROOT, f))).toBe(true);
  }));
});

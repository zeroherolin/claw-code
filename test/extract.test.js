// 提取流水线中可单独验证的部分：版本补丁机制（extract/patches.js）、跨系统对齐与路径规划（extract/align.js、extract/assemble.js）。
import { describe, expect, test } from "bun:test";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { alignSystems } from "../extract/align.js";
import { planLayout } from "../extract/assemble.js";
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

  test("只有其他版本的补丁时失败：升级时不能遗漏这些改动", () => inTmp((dir) => {
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

// 对齐与路径规划不限定系统数量：三个虚构的系统，标识符各不相同，结构对应
describe("跨系统对齐与路径规划", () => {
  const CLI = `console.log("entry");\n`;
  const parse = (fn, arg) => `function ${fn}(${arg}) {\n  return ${arg} + 1;\n}\nexport { ${fn} as parseAlphaValue };\n`;
  const render = (fn, arg) => `function ${fn}(${arg}) {\n  return [${arg}, "beta"];\n}\nexport { ${fn} as renderBetaList };\n`;
  const helper = (fn) => `function ${fn}() {\n  return { kind: "gamma", size: 3 };\n}\nexport { ${fn} as sharedGammaHelper };\n`;
  // 第一个系统是基准；y、z 各有一个基准系统中没有的模块，x 有一个 z 中没有的模块
  const SOURCES = {
    x: { cli: CLI, "chunk-x1.js": parse("a", "b"), "chunk-x2.js": render("c", "d") },
    y: { cli: CLI, "chunk-y1.js": parse("e", "f"), "chunk-y2.js": render("g", "h"), "chunk-y3.js": helper("i") },
    z: { cli: CLI, "chunk-z1.js": parse("j", "k"), "chunk-z3.js": helper("l") },
  };
  const mods = (key) => Object.fromEntries(Object.entries(SOURCES).map(([s, files]) => [s, Object.entries(files).map(([id, code]) => ({ id, [key]: code }))]));

  test("以第一个系统为基准逐个对齐：对应的模块成组，没有对应模块的单独成组", () => {
    expect(alignSystems(mods("code"))).toEqual([
      { x: "cli", y: "cli", z: "cli" },
      { x: "chunk-x1.js", y: "chunk-y1.js", z: "chunk-z1.js" },
      { x: "chunk-x2.js", y: "chunk-y2.js" },
      { y: "chunk-y3.js" },
      { z: "chunk-z3.js" },
    ]);
  });

  test("对应的模块在各系统中路径相同；基准系统中没有、语义名相同的模块也归到同一路径", () => {
    const owners = Object.fromEntries(Object.keys(SOURCES).map((s) => [s, { tool: new Map(), command: new Map(), skill: new Map() }]));
    const plan = planLayout(alignSystems(mods("code")), mods("raw"), owners, {});
    expect(plan.x.cli).toBe("cli.js");
    expect(new Set([plan.x.cli, plan.y.cli, plan.z.cli]).size).toBe(1);
    expect(plan.x["chunk-x1.js"]).toMatch(/\/parse-alpha-value\.js$/);
    expect(new Set([plan.x["chunk-x1.js"], plan.y["chunk-y1.js"], plan.z["chunk-z1.js"]]).size).toBe(1);
    expect(plan.y["chunk-y2.js"]).toBe(plan.x["chunk-x2.js"]);
    expect(plan.y["chunk-y3.js"]).toMatch(/\/shared-gamma-helper\.js$/);
    expect(plan.z["chunk-z3.js"]).toBe(plan.y["chunk-y3.js"]);
    for (const s of Object.keys(SOURCES)) expect(new Set(Object.values(plan[s])).size).toBe(Object.keys(SOURCES[s]).length); // 同一系统内路径不重复
  });
});

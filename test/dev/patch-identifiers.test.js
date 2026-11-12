// 生成源码上的补丁在每个系统的源码中引用的名字都有定义（test/dev/patch-identifiers.js）。
import { describe, expect, test } from "bun:test";
import { sourcePatchForVersion } from "../../extract/patches.js";
import { ROOT, VERSION } from "../harness.js";
import { addedLines, patchUndefinedIdentifiers, undefinedIdentifiers } from "./patch-identifiers.js";

describe("补丁新增行中的标识符", () => {
  const all = (code) => new Set(code.split("\n").map((_, i) => i + 1));
  const names = (code, lines = all(code)) => undefinedIdentifiers(code, lines).map((x) => x.name);

  test("addedLines：按补丁后的行号给出各文件新增的行", () => {
    const patch = ["diff --git a/f.js b/f.js", "--- a/f.js", "+++ b/f.js", "@@ -1,3 +1,4 @@", " a", "+b", " c", " d", "@@ -9,2 +10,3 @@", " x", "-y", "+y1", "+y2", "diff --git a/g.js b/g.js", "--- a/g.js", "+++ b/g.js", "@@ -4,0 +5 @@", "+z"].join("\n");
    expect([...addedLines(patch)].map(([file, lines]) => [file, [...lines]])).toEqual([["f.js", [2, 11, 12]], ["g.js", [5]]]);
  });

  test("模块中有定义的名字不报告：导入、顶层声明、参数、块内声明、解构、循环变量、catch 的参数", () => {
    const code = [
      'import { a, b as c } from "./x.js";',
      "var d = 1, { e, f: [g] } = a;",
      "function h(i, { j }, ...k) { let l = i + j + k.length; return l + d + e + g + c; }",
      "class M { n() { return this.o + h(1, a); } }",
      "for (const p of [1]) { try { h(p); } catch (q) { new M(q); } }",
      "const r = (s) => ({ t: s, u() { return r; } });",
    ].join("\n");
    expect(names(code)).toEqual([]);
  });

  test("没有定义的名字按首次出现的行报告；属性名、对象的键、运行环境的全局名字不算", () => {
    const code = ["var a = { missing: 1, b: process.env.HOME, c: Bun.version };", "a.undefinedProperty = unknownOne(a);", "function f(x) { return x + unknownTwo + unknownOne; }"].join("\n");
    expect(undefinedIdentifiers(code, all(code))).toEqual([{ name: "unknownOne", line: 2 }, { name: "unknownTwo", line: 3 }]);
  });

  test("只检查给定的行：其他行上未定义的名字不报告", () => {
    const code = ["var a = upstreamGlobal;", "var b = added;"].join("\n");
    expect(names(code, new Set([2]))).toEqual(["added"]);
  });

  // 混淆名各系统不同；把一个系统的名字写进另一个系统的源码时，该系统的模块在加载时失败，而测试只运行当前系统的构建产物
  const patch = sourcePatchForVersion(VERSION);
  test.skipIf(!patch)("本版本的补丁：各系统的生成源码中，新增行引用的名字都有定义", () => {
    expect(patchUndefinedIdentifiers(patch, ROOT)).toEqual([]);
  });
});

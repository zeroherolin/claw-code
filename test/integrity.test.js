// 项目完整性：所有模块 / 资源引用都能在项目内解析，不依赖 extract/upstream 或原版虚拟文件系统。
import { describe, expect, test } from "bun:test";
import fs from "node:fs";
import path from "node:path";
import { ROOT } from "./harness.js";

const SRC = path.join(ROOT, "src");
const ASSETS = path.join(ROOT, "assets");

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}
const sources = [...walk(SRC)].filter((f) => f.endsWith(".js")).map((f) => ({ file: f, code: fs.readFileSync(f, "utf8") }));
const rel = (f) => path.relative(ROOT, f);

describe("源码", () => {
  test("模块数量与原版一致（2568 个 + 运行时层与入口）", () => {
    const generated = sources.filter((s) => !rel(s.file).startsWith("src/runtime/") && rel(s.file) !== "src/main.js");
    expect(generated.length).toBe(2568);
  });

  test("相对路径的静态 import / export from / import() / import.meta.require 全部可解析", () => {
    const missing = [];
    // 只认语句级的引用（行首的 import / export，或调用形式），避免把提示文案里的示例代码当成真实 import
    const RE = /(?:^(?:import|export)\b[^"\n]*?\bfrom\s*|^import\s*|\bimport\(\s*|\.require\(\s*)"(\.\.?\/[^"]+)"/gm;
    for (const { file, code } of sources) {
      for (const m of code.matchAll(RE)) {
        const target = path.resolve(path.dirname(file), m[1]);
        if (!fs.existsSync(target)) missing.push(`${rel(file)} → ${m[1]}`);
      }
    }
    expect(missing).toEqual([]);
  });

  test("__asset_text / __asset_path / __asset_src 引用的文件都存在", () => {
    const missing = [];
    for (const { file, code } of sources) {
      for (const m of code.matchAll(/__asset_(text|path|src)\("([^"]+)"\)/g)) {
        const base = m[1] === "src" ? SRC : ASSETS;
        if (!fs.existsSync(path.join(base, m[2]))) missing.push(`${rel(file)} → ${m[1]}:${m[2]}`);
      }
    }
    expect(missing).toEqual([]);
  });

  test("不再引用原版的 /$bunfs 虚拟路径，也不引用 extract/upstream", () => {
    const bad = [];
    for (const { file, code } of sources) {
      if (rel(file).startsWith("src/runtime/")) continue; // 运行时层按设计识别编译后的 /$bunfs/root
      if (/"\/\$bunfs\/root\/[^"]+\.(js|node|txt|md|json|zst)"/.test(code)) bad.push(`${rel(file)}: /$bunfs`);
      if (/extract\/upstream|claude-code-darwin-arm64\/claude/.test(code)) bad.push(`${rel(file)}: extract/upstream`);
    }
    expect(bad).toEqual([]);
  });

  test("版权与许可声明只出现在 LICENSE 中", () => {
    const bad = sources.filter(({ code }) => /^\/\/ \(c\) Anthropic PBC|^\/\*![\s\S]*?\*\//m.test(code)).map(({ file }) => rel(file));
    expect(bad).toEqual([]);
  });
});

describe("资源", () => {
  const index = JSON.parse(fs.readFileSync(path.join(ASSETS, "INDEX.json"), "utf8"));

  test("INDEX.json 中的每一项都存在且大小一致", () => {
    const wrong = index.filter((a) => {
      const p = path.join(ASSETS, a.path);
      return !fs.existsSync(p) || fs.statSync(p).size !== a.bytes;
    }).map((a) => a.path);
    expect(wrong).toEqual([]);
  });

  test("没有未登记的资源文件", () => {
    const listed = new Set(index.map((a) => a.path));
    listed.add("INDEX.json");
    listed.add("sdk/sdk-tools.d.ts"); // 来自 npm 主包，供 SDK 使用者参考
    const extra = [...walk(ASSETS)].map((f) => path.relative(ASSETS, f)).filter((p) => !listed.has(p) && path.basename(p) !== ".DS_Store");
    expect(extra).toEqual([]);
  });
});

describe("参考映射", () => {
  test("module-map.json 覆盖全部模块，且指向的文件都存在", () => {
    const map = JSON.parse(fs.readFileSync(path.join(ROOT, "reference/module-map.json"), "utf8"));
    const targets = Object.values(map);
    expect(targets.length).toBe(2568);
    expect(targets.filter((p) => !fs.existsSync(path.join(SRC, p)))).toEqual([]);
    expect(new Set(targets).size).toBe(targets.length);
  });
});

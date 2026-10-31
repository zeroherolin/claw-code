// 项目完整性：各系统的模块 / 资源引用都能在项目内解析，不依赖 extract/upstream 或原版虚拟文件系统。
import { describe, expect, test } from "bun:test";
import fs from "node:fs";
import path from "node:path";
import { ROOT } from "./harness.js";
import { SYSTEMS } from "../src/runtime/platforms.js";

const SRC = path.join(ROOT, "src");
const ASSETS = path.join(ROOT, "assets");

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}
const rel = (f) => path.relative(ROOT, f).split(path.sep).join("/");
const sources = [...walk(SRC)].filter((f) => f.endsWith(".js")).map((f) => ({ file: f, code: fs.readFileSync(f, "utf8") }));
// 各系统的生成源码：系统 → Map<src/<系统>/ 下的相对路径, 源码>
const trees = Object.fromEntries(Object.keys(SYSTEMS).map((s) => [s, new Map(sources
  .filter((x) => rel(x.file).startsWith(`src/${s}/`))
  .map((x) => [path.relative(path.join(SRC, s), x.file).split(path.sep).join("/"), x.code]))]));
const moduleMap = JSON.parse(fs.readFileSync(path.join(ROOT, "reference/module-map.json"), "utf8"));

describe("源码", () => {
  test("src/ 下只有手写的入口、运行时层，以及每个支持的系统各一份生成代码", () => {
    expect(fs.readdirSync(SRC).sort()).toEqual(["main.js", "runtime", ...Object.keys(SYSTEMS)].sort());
  });

  test.each(Object.keys(SYSTEMS))("%s：模块数量与 module-map.json 一致，路径一一对应", (system) => {
    const mapped = Object.entries(moduleMap).filter(([, v]) => v[system]).map(([p]) => p).sort();
    expect([...trees[system].keys()].sort()).toEqual(mapped);
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

  test("__asset_* 引用的文件都存在；原生模块在该系统的每个平台都有", () => {
    const missing = [];
    for (const [system, tree] of Object.entries(trees)) {
      for (const [file, code] of tree) {
        for (const [, kind, name] of code.matchAll(/__asset_(text|path|src|native)\("([^"]+)"\)/g)) {
          const targets = kind === "src" ? [path.join(SRC, name)]
            : kind === "native" ? SYSTEMS[system].map((arch) => path.join(ASSETS, "native", `${system}-${arch}`, name))
            : [path.join(ASSETS, name)];
          for (const t of targets) if (!fs.existsSync(t)) missing.push(`src/${system}/${file} → ${kind}:${rel(t)}`);
        }
      }
    }
    expect(missing).toEqual([]);
  });

  test("不引用原版的 /$bunfs 虚拟路径，也不引用 extract/upstream", () => {
    const bad = [];
    for (const { file, code } of sources) {
      if (rel(file).startsWith("src/runtime/")) continue; // 运行时层按设计识别编译后的 /$bunfs/root
      if (/"\/\$bunfs\/root\/[^"]+\.(js|node|txt|md|json|zst)"/.test(code)) bad.push(`${rel(file)}: /$bunfs`);
      if (/extract\/upstream|claude-code-(darwin|linux)-[a-z0-9]+\/claude/.test(code)) bad.push(`${rel(file)}: extract/upstream`);
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

  test("原生模块按平台存放：每个支持的平台一个目录，且只有这些目录", () => {
    const platforms = Object.entries(SYSTEMS).flatMap(([s, arches]) => arches.map((a) => `${s}-${a}`)).sort();
    expect(fs.readdirSync(path.join(ASSETS, "native")).filter((d) => d !== ".DS_Store").sort()).toEqual(platforms);
  });
});

describe("手写文档", () => {
  // 文档用“路径”或“路径「特征字符串」”指向生成源码，例如 `core/query-loop.js`「hook_stopped_continuation」：
  // 不写某个系统的行号和混淆名，路径与特征字符串须在每个系统中都成立；
  // 只属于某个系统的写成 `src/<系统>/…`，只在该系统中检查。
  const DOCS = ["README.md", "docs/architecture.md", "docs/runtime.md", "extract/README.md"];
  const areas = [...new Set(Object.values(trees).flatMap((t) => [...t.keys()].map((p) => p.split("/")[0])))].filter((d) => !d.endsWith(".js"));
  const RE = new RegExp(String.raw`(?<![\w./-])\`(?:src/(${Object.keys(SYSTEMS).join("|")})/)?((?:${areas.join("|")})/[\w./-]+\.js|cli\.js)\`(?:「([^」]+)」)?`, "g");

  test("引用的生成源码在相应系统中存在，特征字符串在文件中出现", () => {
    const bad = [];
    let checked = 0;
    for (const doc of DOCS) {
      for (const [ref, only, file, anchor] of fs.readFileSync(path.join(ROOT, doc), "utf8").matchAll(RE)) {
        checked++;
        for (const system of only ? [only] : Object.keys(SYSTEMS)) {
          const code = trees[system].get(file);
          if (code === undefined) bad.push(`${doc}: ${ref}（${system} 中不存在）`);
          else if (anchor && !code.includes(anchor)) bad.push(`${doc}: ${ref}（${system} 的该文件中没有「${anchor}」）`);
        }
      }
    }
    expect(bad).toEqual([]);
    expect(checked).toBeGreaterThan(0);
  });
});

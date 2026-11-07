// 版本补丁必须能从当前生成源码完整逆向再重放；不匹配时不能留下部分应用的源码。
import { test, expect } from "bun:test";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { applySourcePatch, sourcePatchForVersion } from "../extract/patches.js";
import { ROOT, VERSION } from "./harness.js";

test("两个系统的 dev 补丁可完整重放，缺失版本必须失败", () => {
  const patch = sourcePatchForVersion(VERSION);
  const files = [...fs.readFileSync(patch, "utf8").matchAll(/^\+\+\+ b\/(src\/[^\n]+)$/gm)].map((m) => m[1]);
  expect(files.some((file) => file.startsWith("src/darwin/"))).toBe(true);
  expect(files.some((file) => file.startsWith("src/linux/"))).toBe(true);
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "claw-patch-"));
  try {
    for (const file of files) {
      fs.mkdirSync(path.dirname(path.join(dir, file)), { recursive: true });
      fs.copyFileSync(path.join(ROOT, file), path.join(dir, file));
    }
    applySourcePatch(dir, patch, { reverse: true });
    const engine = fs.readFileSync(path.join(dir, "src/darwin/core/conversation-engine.js"), "utf8");
    for (const token of ["memoryReadGuard", "uploadIdentity"]) expect(engine).not.toContain(token); // 逆向后补丁引入的内容都应消失
    applySourcePatch(dir, patch);
    for (const file of files) expect(fs.readFileSync(path.join(dir, file)).equals(fs.readFileSync(path.join(ROOT, file)))).toBe(true);
    expect(() => sourcePatchForVersion("0.0.0")).toThrow("缺少 dev 源码补丁");
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});

test("补丁任何一处不匹配时，所有文件都保留原内容", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "claw-patch-fail-"));
  try {
    fs.writeFileSync(path.join(dir, "a.txt"), "original\n");
    fs.writeFileSync(path.join(dir, "b.txt"), "unexpected\n");
    const patch = path.join(dir, "test.patch");
    fs.writeFileSync(patch, "diff --git a/a.txt b/a.txt\n--- a/a.txt\n+++ b/a.txt\n@@ -1 +1 @@\n-original\n+patched\ndiff --git a/b.txt b/b.txt\n--- a/b.txt\n+++ b/b.txt\n@@ -1 +1 @@\n-expected\n+patched\n");
    expect(() => applySourcePatch(dir, patch)).toThrow("校验失败");
    expect(fs.readFileSync(path.join(dir, "a.txt"), "utf8")).toBe("original\n");
    expect(fs.readFileSync(path.join(dir, "b.txt"), "utf8")).toBe("unexpected\n");
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});

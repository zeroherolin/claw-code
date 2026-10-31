// linux/context/chunk-34131468.js — Claude Code 2.1.310（linux）模块 chunk-8h689vdr.js
import { __asset_src } from "../../runtime/assets.js";
import { q } from "./not-admin-owned.js";
import { N, Fs } from "../telemetry/anthropic-workspace-id.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { _, ie, t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { O } from "../fs/chunk-ce5d00cd.js";
import { S_ } from "../shared/environment.js";
import { afi } from "../fs/utf-8.aa9a.js";
import { m8o } from "../auth/auth-launcher-host-login.js";
import { writeFileSync as k } from "fs";
import { readdir as U, readFile as R, writeFile as P } from "fs/promises";
import { join as w } from "path";
import { getHeapSpaceStatistics as C, getHeapStatistics as D } from "v8";
async function M(u, n = 0) {
  let s = process.memoryUsage(), e = D(), i = process.resourceUsage(), m = process.uptime(), d;
  try {
    d = C();
  } catch {
  }
  let g = process._getActiveHandles().length, h = process._getActiveRequests().length, r;
  try {
    r = (await U("/proc/self/fd")).length;
  } catch {
  }
  let c;
  try {
    c = await R("/proc/self/smaps_rollup", "utf8");
  } catch {
  }
  let f, S, v;
  try {
    let { heapStats: p } = await import("bun:jsc"), b = p(true);
    f = b.objectTypeCounts, S = b.protectedObjectTypeCounts, v = b.mimalloc || void 0;
  } catch {
  }
  let x = s.rss - s.heapUsed, H = m > 0 ? s.rss / m : 0, y = H * 3600 / 1048576, o = [];
  if (e.number_of_detached_contexts > 0) o.push(`${e.number_of_detached_contexts} detached context(s) - possible iframe/context leak`);
  if (g > 100) o.push(`${g} active handles - possible timer/socket leak`);
  if (x > s.heapUsed) o.push("Native memory > heap - leak may be in native addons (node-pty, etc.)");
  if (y > 100) o.push(`High memory growth rate: ${y.toFixed(1)} MB/hour`);
  if (r && r > 500) o.push(`${r} open file descriptors - possible file/socket leak`);
  return { timestamp: (/* @__PURE__ */ new Date()).toISOString(), sessionId: q(), trigger: u, dumpNumber: n, uptimeSeconds: m, runtime: S_() ? "bun" : "node", memoryUsage: { heapUsed: s.heapUsed, heapTotal: s.heapTotal, external: s.external, arrayBuffers: s.arrayBuffers, rss: s.rss }, memoryGrowthRate: { bytesPerSecond: H, mbPerHour: y }, v8HeapStats: { heapSizeLimit: e.heap_size_limit, mallocedMemory: e.malloced_memory, peakMallocedMemory: e.peak_malloced_memory, detachedContexts: e.number_of_detached_contexts, nativeContexts: e.number_of_native_contexts }, v8HeapSpaces: d?.map((p) => ({ name: p.space_name, size: p.space_size, used: p.space_used_size, available: p.space_available_size })), resourceUsage: { maxRSS: i.maxRSS * (O() === "macos" ? 1 : 1024), userCPUTime: i.userCPUTime, systemCPUTime: i.systemCPUTime }, activeHandles: g, activeRequests: h, openFileDescriptors: r, analysis: { potentialLeaks: o, recommendation: o.length > 0 ? `WARNING: ${o.length} potential leak indicator(s) found. See potentialLeaks array.` : "No obvious leak indicators. Check heap snapshot for retained objects." }, smapsRollup: c, objectTypeCounts: f, protectedObjectTypeCounts: S, mimalloc: v, platform: "linux", nodeVersion: process.version, ccVersion: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION };
}
async function kuo(u = "manual", n = 0) {
  if (m8o()) return { success: false, error: "heap dumps are unavailable in a launcher-started session" };
  try {
    let s = q(), e = await M(u, n), i = (f) => (f / 1024 / 1024 / 1024).toFixed(3);
    t(`[HeapDump] Memory state:
  heapUsed: ${i(e.memoryUsage.heapUsed)} GB (in snapshot)
  external: ${i(e.memoryUsage.external)} GB (${e.runtime === "bun" ? "part of heapUsed, in snapshot" : "NOT in snapshot"})
  rss: ${i(e.memoryUsage.rss)} GB (total process)
  ${e.analysis.recommendation}`);
    let m = await afi();
    await ie().mkdir(m);
    let d = n > 0 ? `-dump${n}` : "", g = `${s}${d}.heapsnapshot`, h = `${s}${d}-diagnostics.json`, r = w(m, g), c = w(m, h);
    return await P(c, _(e, null, 2), { mode: 384 }), t(`[HeapDump] Diagnostics written to ${c}`), await T(r), t(`[HeapDump] Heap dump written to ${r}`), a("tengu_heap_dump", { triggerManual: true, triggerAuto15GB: false, dumpNumber: n, success: true }), { success: true, heapPath: r, diagPath: c, diagnostics: e };
  } catch (s) {
    let e = N(s);
    if (Fs(e)) t(`[HeapDump] Failed to write dump: ${e.message}`, { level: "error" });
    else l(e);
    return a("tengu_heap_dump", { triggerManual: true, triggerAuto15GB: false, dumpNumber: n, success: false }), { success: false, error: e.message };
  }
}
async function T(u) {
  k(u, Bun.generateHeapSnapshot("v8", "arraybuffer"), { mode: 384 }), Bun.gc(true);
}
export {
  kuo
};

// linux/permissions/daemon-config.js — Claude Code 2.1.310（linux）模块 chunk-rk9gqbt8.js
import { R, d, G } from "../telemetry/anthropic-workspace-id.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.js";
import { Le } from "../models/claude-3-5-sonnet.js";
import { Dn } from "../fs/utf-8.8f8e.js";
import { hn } from "../fs/async-hooks.7959.js";
import { We } from "../plugins/chunk-0a4c51cf.js";
import { fo } from "../telemetry/chunk-9d6962d2.js";
import { gB } from "./classifier-transcript-too-long.js";
import { JE, que } from "../fs/chunk-b6c2193e.js";
import { No, ot } from "../fs/chunk-86be9585.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { Bue } from "../shared/async-hooks.b037.js";
import { vY, w8, Tcn } from "../fs/utf-8.0ed0.js";
import { _m } from "../shared/chunk-471874cc.js";
import { xu } from "../fs/chunk-dacd9872.js";
import { aD } from "../shared/chunk-f843925d.js";
import { o, v, M, T, u, B } from "../vendor/zod/string-format.js";
import { z } from "../shared/chunk-be29de51.js";
import { readFile as ee, stat as te } from "fs/promises";
import { dirname as re } from "path";
var x6e = 1048576;
async function SPt(s) {
  let r;
  try {
    r = await Z(s);
  } catch (n) {
    return { kind: "threw", error: n };
  }
  if (!r.ok) {
    let n = "telemetryCode" in r.error ? r.error.telemetryCode : void 0;
    if (n === "ENXIO" || n === "EISDIR" || n === "EFBIG") return { kind: "refused" };
    return { kind: "failed", error: r.error };
  }
  let e = r.value.items[0];
  if (!e.found) return { kind: "absent" };
  if (e.totalBytes > x6e) return { kind: "refused" };
  return { kind: "text", text: Buffer.from(e.value).toString("utf8") };
}
function Z(s) {
  return s.read([{ key: We.state("daemon-config"), offset: 0, length: x6e + 1 }]);
}
async function D(s, r) {
  let e = s ?? aD(), n;
  if (z() && r !== void 0 && e === aD()) n = await oe(r, e);
  else try {
    let l = await te(e);
    if (!l.isFile() || l.size > x6e) throw Error(`${e} is not a regular file (or exceeds 1MiB); refusing read-modify-write`);
    n = await ee(e, "utf8");
  } catch (l) {
    if (!G(l)) throw l;
  }
  if (n === void 0 || n.trim() === "") return {};
  let a;
  try {
    a = JSON.parse(No(n));
  } catch {
    throw Error(`daemon.json is malformed: ${e}`);
  }
  if (a && typeof a === "object" && !Array.isArray(a)) return a;
  return {};
}
async function oe(s, r) {
  let e = await SPt(s);
  switch (e.kind) {
    case "text":
      return e.text;
    case "absent":
      return;
    case "refused": {
      let n = `${r} is not a regular file (or exceeds 1MiB); refusing read-modify-write`;
      throw Error(n);
    }
    case "failed":
      throw Object.assign(new R(`daemon.json read failed: ${e.error.code}`, "daemon.json v5 read failed"), { cause: "cause" in e.error ? e.error.cause : e.error });
    case "threw":
      throw e.error;
  }
}
async function d9t(s, r, e) {
  let n = r ?? aD(), a = await D(n, e);
  if (await s(a) === false) return;
  if (z() && e !== void 0 && n === aD()) {
    let m = await e.write(We.state("daemon-config"), _(a, null, 2) + `
`, { publishDiscipline: "atomic", mode: 438 & ~process.umask() });
    if (!m.ok) throw Object.assign(new R(`daemon.json write failed: ${m.error.code}`, "daemon.json v5 write failed"), { cause: "cause" in m.error ? m.error.cause : m.error });
    return;
  }
  await hn().mkdir(re(n)), await Dn(n, _(a, null, 2) + `
`);
}
function Nro(s) {
  if (Array.isArray(s)) return s.filter((r) => !!r && typeof r.dir === "string");
  if (s && typeof s.dir === "string") return [s];
  return [];
}
import { readFile as ne } from "fs/promises";
import { join as se } from "path";
var ie = 1e3, O = 10080, edt = ["dontAsk", "auto", "default", "acceptEdits", "plan", "bypassPermissions"], j = p(() => u({ id: o().min(1), cron: o().refine((s) => vY(s) !== null, { message: "invalid 5-field cron expression" }), prompt: o().min(1), directory: o().min(1), enabled: M().default(true), permissionMode: B([...edt, gB]).transform((s) => s === gB ? "default" : s).default("dontAsk"), model: o().optional(), runTimeoutMinutes: v().positive().max(O).default(30), maxQueued: v().int().positive().default(1) }).strict()), $ro = p(() => u({ tasks: T(j()).default([]).refine((s) => new Set(s.map((r) => r.id)).size === s.length, { message: "task ids must be unique" }), maxConcurrent: v().int().positive().default(1) }).strict());
function N() {
  return se(Le(), "daemon.scheduled.status.json");
}
function L() {
  return We.state("scheduled-status");
}
async function ae(s, r) {
  let e = { workerPid: process.pid, workerProcStart: que(), writtenAt: Date.now(), tasks: s };
  if (z() && r) {
    try {
      let n = await r.write(L(), _(e), { mode: 438 & ~process.umask() });
      if (!n.ok) t(`writeScheduledStatus: ${n.error.code}`);
    } catch (n) {
      t(`writeScheduledStatus: ${d(n)}`);
    }
    return;
  }
  try {
    await Dn(N(), _(e));
  } catch {
  }
}
async function qfs(s) {
  let r;
  if (z() && s !== void 0) {
    let a;
    try {
      a = await s.readText([L()]);
    } catch {
      return null;
    }
    if (!a.ok) return null;
    let l = a.value.items[0];
    if (!l.found) return null;
    r = l.value;
  } else try {
    r = await ne(N(), "utf8");
  } catch {
    return null;
  }
  let e = ot(r, false);
  if (!e || typeof e !== "object") return null;
  let n = e;
  if (typeof n.workerPid !== "number" || typeof n.tasks !== "object" || n.tasks === null) return null;
  try {
    process.kill(n.workerPid, 0);
  } catch {
    return null;
  }
  if (!await JE(n.workerPid, n.workerProcStart)) return null;
  return e;
}
var Yfs = async (s, r, e, n, a) => {
  let { tasks: l, maxConcurrent: m } = $ro().parse(s), { initializeErrorLogSink: y } = await import("../ui/initialize-error-log-sink.js"), { initializeAnalyticsSink: q } = await import("../telemetry/initialize-analytics-sink.js");
  if (y(), q(), !n.getAccessToken()) e("scheduled worker: not authed — run `claude auth login`"), process.exit(1);
  let { awaitPolicyLimitsColdStart: Q, stopPolicyLimits: U } = await import("../cli/admit-prefetched-policy-limits.js");
  if (r.aborted) return;
  if (r.addEventListener("abort", () => U(), { once: true }), await Q(), r.aborted) return;
  let { query: H } = await import("../mcp/request-user-dialog-response-ignored.js");
  if (e(`scheduled worker started tasks=${l.length} maxConcurrent=${m}`), l.length === 0) {
    let c = setInterval(() => {
    }, 6e4);
    await new Promise((i) => {
      if (r.aborted) {
        i();
        return;
      }
      r.addEventListener("abort", () => i(), { once: true });
    }), clearInterval(c);
    return;
  }
  let b = [], x = /* @__PURE__ */ new Set(), S = null;
  function J(c) {
    let i = b.reduce((f, k) => k.task.id === c.id ? f + 1 : f, 0);
    if (i >= c.maxQueued) {
      e(`task=${c.id} dropped (queue full: ${i}/${c.maxQueued})`);
      return;
    }
    b.push({ task: c }), S?.(), S = null;
  }
  let A = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Set(), K = Date.now();
  function F() {
    let c = {};
    for (let i of l) {
      let f = A.get(i.id);
      c[i.id] = { running: C.has(i.id), ...f !== void 0 && { lastFiredAt: f } };
    }
    ae(c, a);
  }
  F();
  function V(c) {
    let i = A.get(c.id) ?? K;
    return Tcn(c.cron, i, c.id, w8);
  }
  let X = setInterval((c, i, f, k) => {
    let P = Date.now();
    for (let h of c) {
      if (!h.enabled) continue;
      let w = i(h);
      if (w === null) continue;
      if (w <= P) f.set(h.id, P), k(h);
    }
  }, ie, l, V, A, J);
  r.addEventListener("abort", () => {
    clearInterval(X);
    for (let c of x) c.abort();
    S?.(), S = null;
  });
  let E = /* @__PURE__ */ new Set();
  async function Y(c) {
    let { task: i } = c, f = _m();
    if (f) {
      e(`task=${i.id} refused: ${f}`);
      return;
    }
    let k = new AbortController();
    x.add(k), C.add(i.id), F();
    let P = setTimeout((w) => w.abort(), Math.min(i.runTimeoutMinutes, O) * 6e4, k);
    e(`task=${i.id} start cron='${i.cron}' dir='${i.directory}'`);
    let h = xu({ pinToCurrentBinary: true });
    try {
      let w = H({ prompt: i.prompt, options: { cwd: i.directory, permissionMode: i.permissionMode, ...i.permissionMode === "bypassPermissions" && { allowDangerouslySkipPermissions: true }, ...i.model && { model: i.model }, systemPrompt: { type: "preset", preset: "claude_code" }, settingSources: ["user", "project", "local"], pathToClaudeCodeExecutable: h.cmd, executableArgs: h.prefixArgs, abortController: k, stderr: (g) => e(`[${i.id}] ${g.trimEnd()}`), workload: Bue } });
      for await (let g of w) if (g.type === "result") e(`task=${i.id} result subtype=${g.subtype} duration=${g.duration_ms}ms cost=$${g.total_cost_usd.toFixed(4)}`);
    } catch (w) {
      e(`task=${i.id} threw: ${w}`);
    } finally {
      clearTimeout(P), x.delete(k), C.delete(i.id), F();
    }
  }
  while (!r.aborted) {
    while (E.size < m && b.length > 0 && !r.aborted) {
      let c = b.shift(), i = Y(c).finally(() => {
        E.delete(i), S?.(), S = null;
      });
      E.add(i);
    }
    if (r.aborted) break;
    if (b.length === 0 || E.size >= m) await new Promise((c) => {
      S = c;
    });
  }
  await Promise.allSettled(Array.from(E));
};
function I(s) {
  let r = s.scheduled, e = {};
  if (Array.isArray(r) && r.length > 0 && typeof r[0] === "object") e = r[0] ?? {};
  else if (r && typeof r === "object" && !Array.isArray(r)) e = r;
  let n = Array.isArray(e.tasks) ? e.tasks : [];
  return { ...e, tasks: n };
}
function W(s, r) {
  let e = s.scheduled;
  if (Array.isArray(e)) {
    let n = e.slice();
    n[0] = r, s.scheduled = n;
  } else s.scheduled = r;
}
async function tdt(s, r, e) {
  return fo("daemon_scheduled_add", async () => {
    j().parse(s), await d9t((n) => {
      let a = I(n), l = a.tasks.filter((m) => !(m && typeof m === "object" && m.id === s.id));
      l.push(s), W(n, { ...a, tasks: l });
    }, r, e);
  });
}
async function ndt(s, r, e) {
  return fo("daemon_scheduled_remove", async () => {
    let n = false;
    return await d9t((a) => {
      if (!("scheduled" in a)) return false;
      let l = I(a), m = l.tasks.filter((y) => !(y && typeof y === "object" && y.id === s));
      if (m.length === l.tasks.length) return false;
      if (m.length === 0) {
        let y = a.scheduled;
        if (Array.isArray(y) && y.length > 1) a.scheduled = y.slice(1);
        else delete a.scheduled;
      } else W(a, { ...l, tasks: m });
      n = true;
    }, r, e), n;
  });
}
async function wPt(s, r) {
  let e = await D(s, r);
  if (!("scheduled" in e)) return [];
  let n = I(e), a = [];
  for (let l of n.tasks) {
    let m = j().safeParse(l);
    if (m.success) a.push(m.data);
  }
  return a;
}
export {
  $ro,
  Nro,
  SPt,
  Yfs,
  d9t,
  edt,
  ndt,
  qfs,
  tdt,
  wPt,
  x6e
};

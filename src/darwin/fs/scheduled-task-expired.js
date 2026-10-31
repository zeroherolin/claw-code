// darwin/fs/scheduled-task-expired.js — Claude Code 2.1.310（darwin）模块 chunk-kyfe1fr0.js
import { Idr } from "../shared/chunk-d2c47492.js";
import { V, Cu, ao, xW, rcr, Bos, Om, MX } from "../context/not-admin-owned.js";
import { Qe, MW, N, v } from "../telemetry/anthropic-workspace-id.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { _t, _, ie, t } from "./gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { ZL, i3e, Gst, Qb } from "../context/utf-8.js";
import { vKe, Qv, epe, tpe } from "./chunk-b6c2193e.js";
import { ot } from "./chunk-86be9585.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { qi } from "../shared/async-hooks.b037.js";
import { Sx, aHe, x5n, Fcn, qLo, h$r, P5n, YCe, RVs, P8, Ucn, Xyt, xVs } from "./utf-8.0ed0.js";
import { PR, hz } from "../git/utf-8.js";
import { Ja } from "./daemon-worker.js";
import { cn } from "../shared/chunk-6ae01e90.js";
import { o, E, u } from "../vendor/zod/string-format.js";
import { _e, d3t } from "../shared/chunk-86ecf3aa.js";
import { Ee } from "../shared/chunk-fee3c428.js";
import { join as Ke } from "path";
import { mkdir as Me, readFile as ze, unlink as Pe, writeFile as ue } from "fs/promises";
import { dirname as We, join as xe } from "path";
import { appendFile as je, mkdir as Ae, readFile as De } from "fs/promises";
import { join as Ie } from "path";
var Ne = ["**/.claude/scheduled_tasks.lock", "**/.claude/scheduled_tasks.json", "**/.claude/routines/.state/", "**/.claude/worktrees/", "**/.claude/checkpoints/", "**/.claude/mailbox/", "**/.claude/agent-registry.json", "**/.claude/agent-memory-local", "**/.claude/first-run", "**/.claude/assistant-daemon-state.json"], ve = "# claude-code-runtime";
async function Fe(n) {
  if (!qi().claim(`claude_runtime_exclude_ensured:${n}`)) return;
  try {
    let s = await PR(n);
    if (!s) return;
    let i = await hz(s) ?? s, y = Ie(i, "info", "exclude"), S = "";
    try {
      if (S = await De(y, "utf-8"), S.includes(ve)) return;
    } catch (I) {
      if (v(I) !== "ENOENT") throw I;
      await Ae(Ie(i, "info")).catch((q) => {
        if (v(q) !== "EEXIST") throw q;
      });
    }
    let k = S && !S.endsWith(`
`) ? `
` : "", d = [ve, ...Ne, ""].join(`
`);
    await je(y, k + d);
  } catch (s) {
    t(`ensureClaudeRuntimeFilesExcluded: ${s}`);
  }
}
var qe = xe(".claude", "scheduled_tasks.lock"), He = f(() => u({ sessionId: o(), pid: E(), procStart: o().optional(), acquiredAt: E() }));
function G(n) {
  return xe(n ?? ao(), qe);
}
async function Le(n) {
  let s;
  try {
    s = await ze(G(n), "utf8");
  } catch {
    return;
  }
  let i = He().safeParse(ot(s, false));
  return i.success ? i.data : void 0;
}
async function be(n, s) {
  let i = G(s), y = _(n);
  try {
    return await ue(i, y, { flag: "wx" }), true;
  } catch (S) {
    let k = v(S);
    if (k === "EEXIST") return false;
    if (k === "ENOENT") {
      await Me(We(i), { recursive: true });
      try {
        return await ue(i, y, { flag: "wx" }), true;
      } catch (d) {
        if (v(d) === "EEXIST") return false;
        throw d;
      }
    }
    throw S;
  }
}
function le(n, s) {
  n.unregisterCleanup?.(), n.unregisterCleanup = _t(async () => {
    await W(n, s);
  });
}
async function fe(n, s) {
  let i = s?.dir;
  if (x5n(i)) return false;
  await Fe(i ?? ao());
  let y = s?.lockIdentity ?? V(), S = { sessionId: y, pid: process.pid, procStart: tpe(), acquiredAt: Date.now() };
  if (await be(S, i)) return n.lastBlockedBy = void 0, le(n, s), t(`[ScheduledTasks] acquired scheduler lock (PID ${process.pid})`), true;
  let k = await Le(i);
  if (k?.sessionId === y) {
    if (k.pid !== process.pid) await ue(G(i), _(S)), le(n, s);
    return true;
  }
  if (k && Ja(k.pid) && await Qv(k.pid, k.procStart)) {
    if (n.lastBlockedBy !== k.sessionId) n.lastBlockedBy = k.sessionId, t(`[ScheduledTasks] scheduler lock held by session ${k.sessionId} (PID ${k.pid})`);
    return false;
  }
  if (k) t(`[ScheduledTasks] recovering stale scheduler lock from PID ${k.pid}`);
  if (await Pe(G(i)).catch(() => {
  }), await be(S, i)) return n.lastBlockedBy = void 0, le(n, s), true;
  return false;
}
async function W(n, s) {
  n.reset();
  let i = s?.dir;
  try {
    i ??= ao();
  } catch {
    return;
  }
  let y = s?.lockIdentity ?? V(), S = await Le(i);
  if (!S || S.sessionId !== y) return;
  try {
    await Pe(G(i)), t("[ScheduledTasks] released scheduler lock");
  } catch {
  }
}
class ke {
  unregisterCleanup = void 0;
  lastBlockedBy = void 0;
  reset() {
    this.unregisterCleanup?.(), this.unregisterCleanup = void 0, this.lastBlockedBy = void 0;
  }
}
var Be = import.meta.require("../telemetry/get-autonomous-loop-preamble.js"), Je = 1e3, Ue = 300, Ge = 5e3;
function Xe(n, s, i) {
  if (i === 0) return false;
  return Boolean(n.recurring && !n.permanent && s - n.createdAt >= i);
}
async function Ve(n, s, i) {
  let y = Qb(i), S = ie(), k = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  for (let { createdBySessionId: I } of n) if (I !== void 0 && I !== s) d.add(I);
  if (await Promise.all(Array.from(d, async (I) => {
    if (ZL(I) === null) return;
    if (await S.lstat(Ke(y, `${I}.jsonl`)).then((H) => H.isFile(), (H) => {
      let O = v(H);
      if (O !== "ENOENT" && O !== "ENOTDIR") t(`[ScheduledTasks] could not look for a transcript of task creator ${I} (${O}); treating it as not found`);
      return false;
    })) k.add(I);
  })), k.size < d.size) t(`[ScheduledTasks] found no transcript in ${y} for ${d.size - k.size} other session(s) named in scheduled_tasks.json (a file copied from another checkout looks like this); this session will not run their tasks`);
  return k;
}
var Q = Ee(/* @__PURE__ */ new Set(), (n) => n.clear());
function Y(n, s) {
  return `${n ?? ""}\0${s}`;
}
function IZr(n) {
  let { onFire: s, isLoading: i, assistantMode: y = false, onFireTask: S, onMissed: k, dir: d, lockIdentity: I, getJitterConfig: q, isKilled: H, filter: O, getExtraTasks: Z, leaseFileTasks: ee = () => true } = n, D = d || I ? { dir: d, lockIdentity: I } : void 0, M = new ke(), X = d !== void 0 ? I : V(), re = /* @__PURE__ */ new Set(), te = null, ne = [], oe = [], F = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Set(), A = null, J = null, j = null, z = null, B = false, L = false, me = /* @__PURE__ */ new Set(), pe = "", se = /* @__PURE__ */ new Map();
  function Re(r, c) {
    if (!Ja(r)) return se.delete(r), true;
    if (c === void 0) return false;
    let w = Date.now(), T = se.get(r);
    if (!T || w - T.at >= 6e4) T = { at: w, token: vKe(r) }, se.set(r, T);
    return T.token !== void 0 && T.token !== c;
  }
  function ge(r) {
    return i3e(r, Gst());
  }
  function Oe(r) {
    if (r.createdInProject !== void 0) return ge(r.createdInProject) === pe;
    return r.createdBySessionId !== void 0 && me.has(r.createdBySessionId);
  }
  function Se(r) {
    if (r.createdBySessionId === void 0) return L;
    if (r.createdBySessionId === X) return true;
    if (re.has(r.createdBySessionId) && r.createdByPid === process.pid && (r.createdByProcStart === void 0 ? r.createdAt >= performance.timeOrigin : r.createdByProcStart === epe.token)) return true;
    return L && Oe(r) && (r.createdByPid === void 0 || Re(r.createdByPid, r.createdByProcStart));
  }
  function ae(r) {
    if (r.length === 0) return;
    YCe(r.map((c) => c.id), d).catch((c) => t(`[ScheduledTasks] failed to remove tasks: ${c}`));
  }
  async function ye(r) {
    let c = qLo(d) ? [] : await Fcn(d), w = Z ? await Z().catch((h) => {
      if (qi().claim("cron_extra_tasks_load_bad")) m("routine_register_trigger", "extra_tasks_load_failed");
      return t(`[ScheduledTasks] getExtraTasks failed: ${h}`), [];
    }) : [], T = d ?? ao(), P = await Ve(c.filter((h) => h.createdInProject === void 0), X, T);
    if (B) return;
    if (ne = c, oe = w, me = P, pe = ge(T), !r) return;
    let e = false;
    for (let h of c) if (X !== void 0 && h.createdBySessionId === X && h.createdByPid !== process.pid) h.createdByPid = process.pid, h.createdByProcStart = tpe(), e = true;
    if (e) await P5n(c, d).catch((h) => t(`[ScheduledTasks] failed to refresh task pids: ${h}`));
    let R = Date.now(), C = xVs(c, R).filter((h) => !h.recurring && !he.has(h.id) && !Q.has(Y(d, h.id)) && (!O || O(h)) && Se(h));
    if (C.length > 0) {
      for (let b of C) he.add(b.id), F.set(b.id, 1 / 0);
      a("tengu_scheduled_task_missed", { count: C.length, taskIds: d3t(C.map((b) => b.id)) });
      let h = /* @__PURE__ */ new Set();
      try {
        if (k) {
          h = new Set(k(C, ae) ?? []);
          for (let b of h) Q.add(Y(d, b));
        } else s(Cpr(C));
      } catch (b) {
        t(`[ScheduledTasks] could not surface ${C.length} missed one-shot task(s); they stay in scheduled_tasks.json for a later session`, { level: "error" }), l($e(b, "handler for missed scheduled tasks threw (message not reported: it may contain user text)"));
        return;
      }
      ae(C.filter((b) => !h.has(b.id))), t(`[ScheduledTasks] surfaced ${C.length - h.size} missed one-shot task(s), kept back ${h.size}`);
    }
  }
  function de() {
    if (H?.()) return;
    if (L && !ee()) L = false, W(M, D);
    if (i() && !y) return;
    let r = Date.now(), c = /* @__PURE__ */ new Set(), w = [], T = q?.() ?? P8;
    function P(e, R) {
      if (O && !O(e)) return;
      if (c.add(e.id), K.has(e.id)) return;
      if (!R && Q.has(Y(d, e.id))) return;
      let C = F.get(e.id);
      if (C === void 0) {
        let x = Xyt(e, T);
        if (x === null) m("cron_task_fire", "next_fire_unresolvable", { recurring: e.recurring ?? false });
        C = x ?? 1 / 0, F.set(e.id, C), t(`[ScheduledTasks] scheduled ${e.id} for ${C === 1 / 0 ? "never" : new Date(C).toISOString()}`);
      }
      if (r < C) return;
      t(`[ScheduledTasks] firing ${e.id}${e.recurring ? " (recurring)" : ""}`);
      let h = e.id.startsWith("routine:") ? cn(e.id) : _e(e.id);
      a("tengu_scheduled_task_fire", { recurring: e.recurring ?? false, taskId: h, autonomousLoopDefault: Be.isLoopDefaultSentinel(e.prompt) });
      let b = { recurring: e.recurring ?? false, permanent: e.permanent ?? false }, we = false;
      try {
        if (S) we = S(e, () => ae([e])) === true;
        else s(e.prompt);
        g("cron_task_fire", b);
      } catch (x) {
        let U = !R && !e.recurring;
        if (U) F.set(e.id, 1 / 0);
        if (t(U ? `[ScheduledTasks] delivering task ${e.id} failed (its handler threw); the task stays in scheduled_tasks.json for a later session` : `[ScheduledTasks] delivering task ${e.id} failed (its handler threw); this run is dropped and will not be retried`, { level: "error" }), m("cron_task_fire", "handler_threw", b), l($e(x, "scheduled task fire handler threw (message not reported: it may contain user text)")), U) return;
      }
      let Ce = Xe(e, r, T.recurringMaxAgeMs);
      if (Ce) {
        let x = Math.floor((r - e.createdAt) / 1e3 / 60 / 60);
        t(`[ScheduledTasks] recurring task ${e.id} aged out (${x}h since creation), deleting after final fire`), a("tengu_scheduled_task_expired", { taskId: h, ageHours: x });
      }
      if (e.recurring && !Ce) {
        let x = Ucn(e.cron, r, e.id, T);
        if (x === null) p("cron_task_fire", "reschedule_unresolvable");
        let U = x ?? 1 / 0;
        if (F.set(e.id, U), !R) w.push(e.id);
      } else if (R) MX([e.id]), F.delete(e.id);
      else if (we) Q.add(Y(d, e.id)), F.set(e.id, 1 / 0);
      else K.add(e.id), F.set(e.id, 1 / 0), YCe([e.id], d).catch((x) => t(`[ScheduledTasks] failed to remove task ${e.id}: ${x}`)).finally(() => K.delete(e.id));
    }
    for (let e of ne) if (Se(e)) P(e, false);
    if (w.length > 0) {
      for (let e of w) K.add(e);
      RVs(w, r, d).catch((e) => t(`[ScheduledTasks] failed to persist lastFiredAt: ${e}`)).finally(() => {
        for (let e of w) K.delete(e);
      });
    }
    if (d === void 0) for (let e of Om().slice()) {
      P(e, true);
      let R = F.get(e.id);
      e.nextFireAt = R === 1 / 0 ? void 0 : R;
    }
    for (let e of oe) P(e, true);
    if (c.size === 0) {
      F.clear();
      return;
    }
    for (let e of F.keys()) if (!c.has(e)) F.delete(e);
  }
  async function ce() {
    if (B) return;
    A?.(), A = null;
    let { default: r } = await import("../shared/chunk-4d81e08a.js");
    if (B) return;
    if (L = ee() ? await fe(M, D).catch(() => false) : false, B) {
      if (L) L = false, W(M, D);
      return;
    }
    if (!L) j = setInterval(() => {
      if (!ee()) return;
      fe(M, D).then((w) => {
        if (B) {
          if (w) W(M, D);
          return;
        }
        if (w) {
          if (L = true, j) clearInterval(j), j = null;
        }
      }).catch((w) => t(String(w), { level: "error" }));
    }, Ge), j.unref?.();
    ye(true).then(de);
    let c = aHe(d);
    z = Te(() => r.watch(c, { persistent: false, ignoreInitial: true, awaitWriteFinish: { stabilityThreshold: Ue }, ignorePermissionErrors: true })), J = setInterval(de, Je), J.unref?.();
  }
  function Te(r) {
    let c = r();
    c.on("error", (T) => t(`[ScheduledTasks] watcher error: ${T}`, { level: "warn" }));
    let w = () => {
      if (B || z !== c) return;
      z = Te(r), z.once("ready", () => void ye(false)), c.close().catch((T) => t(`[ScheduledTasks] watcher close failed: ${T}`, { level: "warn" }));
    };
    return c.on("add", w), c.on("change", w), c.on("unlink", () => {
      if (!B) {
        ne = [];
        let T = new Set(oe.map((P) => P.id));
        if (d === void 0) for (let P of Om()) T.add(P.id);
        for (let P of F.keys()) if (!T.has(P)) F.delete(P);
      }
    }), c;
  }
  return { start() {
    if (B = false, A?.(), A = null, d !== void 0) {
      t(`[ScheduledTasks] scheduler start() — dir=${d}, hasTasks=${h$r(d)}`), ce();
      return;
    }
    if (t(`[ScheduledTasks] scheduler start() — enabled=${rcr()}, hasTasks=${h$r()}`), re.add(V()), te ??= Cu((r) => {
      re.add(r);
    }), !rcr() && (y || Z !== void 0 || h$r())) xW(true);
    if (rcr()) {
      ce();
      return;
    }
    A = Bos(() => void ce());
  }, stop() {
    if (B = true, A?.(), A = null, te?.(), te = null, J) clearInterval(J), J = null;
    if (j) clearInterval(j), j = null;
    if (z?.close(), z = null, L) L = false, W(M, D);
  }, getNextFireTime() {
    let r = 1 / 0;
    for (let c of F.values()) if (c < r) r = c;
    return r === 1 / 0 ? null : r;
  }, checkNow() {
    de();
  } };
}
function Cpr(n) {
  let s = n.length > 1, i = `The following one-shot scheduled task${s ? "s were" : " was"} missed while Claude was not running. ${s ? "They have" : "It has"} already been removed from .claude/scheduled_tasks.json.

Do NOT execute ${s ? "these prompts" : "this prompt"} yet. First use the AskUserQuestion tool to ask whether to run ${s ? "each one" : "it"} now. Only execute if the user confirms.`, y = n.map((S) => `${`[${Sx(S.cron)}, created ${new Date(S.createdAt).toLocaleString()}]`}
${Idr(S.prompt)}`);
  return `${i}

${y.join(`

`)}`;
}
function $e(n, s) {
  let i = () => Qe(Error("scheduled task handler threw (message not reported: it may contain user text)", { cause: n }), s);
  try {
    let y = Qe(N(n), s);
    return MW(y) === s ? y : i();
  } catch {
    return i();
  }
}
export {
  Cpr,
  IZr
};

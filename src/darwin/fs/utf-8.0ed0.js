// darwin/fs/utf-8.0ed0.js — Claude Code 2.1.310（darwin）模块 chunk-gftmfzh1.js
import { V, ao, no, pP, Frs, Om, zxe, MX } from "../context/not-admin-owned.js";
import { Kt } from "../telemetry/anthropic-workspace-id.js";
import { _, ie, t } from "./gitlab-runner-authentication-token.js";
import { wie } from "../models/claude-3-5-sonnet.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { mW } from "./utf-8.8f8e.js";
import { GTt, OR } from "./utf-8.aa9a.js";
import { tpe } from "./chunk-b6c2193e.js";
import { ot } from "./chunk-86be9585.js";
import { Yot } from "../plugins/skills-dir.js";
import { akt } from "../shared/async-hooks.b037.js";
import { randomUUID as D } from "crypto";
import { readFileSync as P } from "fs";
import { mkdir as R } from "fs/promises";
import { join as S } from "path";
var x = [{ min: 0, max: 59 }, { min: 0, max: 23 }, { min: 1, max: 31 }, { min: 1, max: 12 }, { min: 0, max: 6 }];
function k(e, s) {
  let { min: o, max: r } = s, i = /* @__PURE__ */ new Set();
  for (let a of e.split(",")) {
    let n = a.match(/^\*(?:\/(\d+))?$/);
    if (n) {
      let c = n[1] ? parseInt(n[1], 10) : 1;
      if (c < 1) return null;
      for (let f = o; f <= r; f += c) i.add(f);
      continue;
    }
    let m = a.match(/^(\d+)-(\d+)(?:\/(\d+))?$/);
    if (m) {
      let c = parseInt(m[1], 10), f = parseInt(m[2], 10), u = m[3] ? parseInt(m[3], 10) : 1, h = o === 0 && r === 6, d = h ? 7 : r;
      if (c > f || u < 1 || c < o || f > d) return null;
      for (let g = c; g <= f; g += u) i.add(h && g === 7 ? 0 : g);
      continue;
    }
    if (a.match(/^\d+$/)) {
      let c = parseInt(a, 10);
      if (o === 0 && r === 6 && c === 7) c = 0;
      if (c < o || c > r) return null;
      i.add(c);
      continue;
    }
    return null;
  }
  if (i.size === 0) return null;
  return Array.from(i).sort((a, n) => a - n);
}
function O3(e) {
  let s = e.trim().split(/\s+/);
  if (s.length !== 5) return null;
  let o = [];
  for (let r = 0; r < 5; r++) {
    let i = k(s[r], x[r]);
    if (!i) return null;
    o.push(i);
  }
  return { minute: o[0], hour: o[1], dayOfMonth: o[2], month: o[3], dayOfWeek: o[4] };
}
function F(e) {
  let s = new Date(e.getTime());
  return s.setMinutes(s.getMinutes()), s.getTime() !== e.getTime();
}
function I1t(e, s, { oneShot: o = false } = {}) {
  let r = new Set(e.minute), i = new Set(e.hour), a = new Set(e.dayOfMonth), n = new Set(e.month), m = new Set(e.dayOfWeek), p = e.dayOfMonth.length === 31, c = e.dayOfWeek.length === 7, f = (d) => p && c ? true : p ? m.has(d.getDay()) : c ? a.has(d.getDate()) : a.has(d.getDate()) || m.has(d.getDay()), u = new Date(Math.floor(s.getTime() / 6e4) * 6e4 + 6e4);
  if (Number.isNaN(u.getTime())) return null;
  let h = 527040;
  for (let d = 0; d < h; d++) {
    if (F(u)) {
      if (o && n.has(u.getMonth() + 1) && f(u) && i.has(u.getHours()) && r.has(u.getMinutes())) return u;
      u.setTime(u.getTime() + 6e4);
      continue;
    }
    let g = u.getMonth() + 1;
    if (!n.has(g)) {
      u.setMonth(u.getMonth() + 1, 1), u.setHours(0, 0, 0, 0);
      continue;
    }
    if (!f(u)) {
      u.setDate(u.getDate() + 1), u.setHours(0, 0, 0, 0);
      continue;
    }
    if (!i.has(u.getHours()) || !r.has(u.getMinutes())) {
      if (o) u.setTime(u.getTime() + 6e4);
      else if (!i.has(u.getHours())) u.setHours(u.getHours() + 1, 0, 0, 0);
      else u.setMinutes(u.getMinutes() + 1);
      continue;
    }
    return u;
  }
  return null;
}
var b = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function w(e, s) {
  return new Date(2e3, 0, 1, s, e).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}
function I(e, s) {
  let o = /* @__PURE__ */ new Date();
  return o.setUTCHours(s, e, 0, 0), o.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZoneName: "short" });
}
function Sx(e, s) {
  let o = s?.utc ?? false, r = e.trim().split(/\s+/);
  if (r.length !== 5) return e;
  let [i, a, n, m, p] = r;
  if (a === "*" && n === "*" && m === "*" && p === "*") {
    if (i === "*") return "Every minute";
    let d = i.match(/^\*\/(\d+)$/);
    if (d) {
      let g = parseInt(d[1], 10);
      return g === 1 ? "Every minute" : `Every ${g} minutes`;
    }
  }
  if (i.match(/^\d+$/) && a === "*" && n === "*" && m === "*" && p === "*") {
    let d = parseInt(i, 10);
    if (d === 0) return "Every hour";
    return `Every hour at :${d.toString().padStart(2, "0")}`;
  }
  let c = a.match(/^\*\/(\d+)$/);
  if (i.match(/^\d+$/) && c && n === "*" && m === "*" && p === "*") {
    let d = parseInt(c[1], 10), g = parseInt(i, 10), y = g === 0 ? "" : ` at :${g.toString().padStart(2, "0")}`;
    return d === 1 ? `Every hour${y}` : `Every ${d} hours${y}`;
  }
  if (!i.match(/^\d+$/) || !a.match(/^\d+$/)) return e;
  let f = parseInt(i, 10), u = parseInt(a, 10), h = o ? I : w;
  if (n === "*" && m === "*" && p === "*") return `Every day at ${h(f, u)}`;
  if (n === "*" && m === "*" && p.match(/^\d$/)) {
    let d = parseInt(p, 10) % 7, g;
    if (o) {
      let y = /* @__PURE__ */ new Date(), T = (d - y.getUTCDay() + 7) % 7;
      y.setUTCDate(y.getUTCDate() + T), y.setUTCHours(u, f, 0, 0), g = b[y.getDay()];
    } else g = b[d];
    if (g) return `Every ${g} at ${h(f, u)}`;
  }
  if (n === "*" && m === "*" && p === "1-5") return `Weekdays at ${h(f, u)}`;
  return e;
}
function fGe(e) {
  let s = e.trim();
  if (s === "") return { error: "required" };
  let o = s.match(/^(\d+)\s*([smhd])$/i);
  if (o) {
    let r = parseInt(o[1], 10), i = o[2].toLowerCase();
    if (r < 1) return { error: "interval must be at least 1" };
    let a;
    switch (i) {
      case "s":
        return { error: "minimum interval is 1 minute" };
      case "m":
        if (r > 59) return { error: "minute interval must be 1–59 (use hours instead)" };
        a = r === 1 ? "* * * * *" : `*/${r} * * * *`;
        break;
      case "h":
        if (r > 23) return { error: "hour interval must be 1–23 (use days instead)" };
        a = r === 1 ? "0 * * * *" : `0 */${r} * * *`;
        break;
      case "d":
        if (r === 1) {
          a = "0 0 * * *";
          break;
        }
        if (r > 28) return { error: "day interval must be 1–28 (use a cron expression)" };
        a = `0 0 */${r} * *`;
        break;
      default:
        return { error: "unknown interval unit" };
    }
    return { cron: a, human: Sx(a) };
  }
  if (O3(s) !== null) return { cron: s, human: Sx(s) };
  return { error: "use an interval (5m, 2h, 1d) or 5-field cron (*/5 * * * *)" };
}
var C = 256;
var iHe = (e) => typeof e === "string" && e !== "" && e.length <= C && !Yot.test(e);
var R5n = 3e5, E = /^\*\/\d+ \* \* \* \*$/, v = S(".claude", "scheduled_tasks.json");
function aHe(e) {
  return S(e ?? ao(), v);
}
function x5n(e) {
  return e === void 0 && no() !== null;
}
async function Fcn(e) {
  if (x5n(e)) return [];
  let s = ie(), o;
  try {
    o = await s.readFile(aHe(e), { encoding: "utf-8" });
  } catch (n) {
    if (Kt(n)) return [];
    return l(n), [];
  }
  let r = ot(o, false);
  if (!r || typeof r !== "object") return [];
  let i = r;
  if (!Array.isArray(i.tasks)) return [];
  let a = [];
  for (let n of i.tasks) {
    if (!n || typeof n.id !== "string" || typeof n.cron !== "string" || typeof n.prompt !== "string" || typeof n.createdAt !== "number") {
      t(`[ScheduledTasks] skipping malformed task: ${_(n)}`);
      continue;
    }
    if (!O3(n.cron)) {
      t(`[ScheduledTasks] skipping task ${n.id} with invalid cron '${n.cron}'`);
      continue;
    }
    if (n.plugin !== void 0 && !iHe(n.plugin)) {
      t(`[ScheduledTasks] skipping task ${n.id}: its plugin name fails the rule for a stored name`);
      continue;
    }
    a.push({ id: n.id, cron: n.cron, prompt: n.prompt, createdAt: n.createdAt, ...typeof n.lastFiredAt === "number" && { lastFiredAt: n.lastFiredAt }, ...n.recurring && { recurring: true }, ...n.permanent && { permanent: true }, ...typeof n.createdBySessionId === "string" && { createdBySessionId: n.createdBySessionId }, ...typeof n.createdByPid === "number" && { createdByPid: n.createdByPid }, ...typeof n.createdByProcStart === "string" && { createdByProcStart: n.createdByProcStart }, ...typeof n.createdInProject === "string" && { createdInProject: n.createdInProject }, ...typeof n.plugin === "string" && { plugin: n.plugin } });
  }
  return a;
}
function qLo(e) {
  return pP() || Frs(e ?? ao());
}
function h$r(e) {
  if (x5n(e)) return false;
  if (qLo(e)) return false;
  let s;
  try {
    s = P(aHe(e), "utf-8");
  } catch {
    return false;
  }
  let o = ot(s, false);
  if (!o || typeof o !== "object") return false;
  let r = o.tasks;
  return Array.isArray(r) && r.length > 0;
}
async function P5n(e, s) {
  if (x5n(s)) throw Error("Durable scheduled tasks are unavailable in a session started with --project-config-root");
  let o = s ?? ao(), r = !wie(S(o, ".claude"));
  if (r) await GTt(o, S(o, ".claude"));
  await R(S(o, ".claude"), { recursive: true });
  let i = { tasks: e.map(({ durable: a, ...n }) => n) };
  await OR(aHe(o), _(i, null, 2) + `
`, { encoding: "utf-8", allowSymlink: !r, checkParentDir: r, stagingDir: S(o, ".claude", mW) });
}
async function Yyt(e, s, o, r, i, a = Date.now(), n) {
  let m = akt(n), p = D().slice(0, 8), c = { id: p, cron: e, prompt: s, createdAt: a, ...o && { recurring: true }, ...m !== void 0 && { plugin: m } };
  if (!r) return zxe({ ...c, ...i && { agentId: i } }), p;
  let f = await Fcn();
  return f.push({ ...c, createdBySessionId: V(), createdByPid: process.pid, createdByProcStart: tpe(), createdInProject: ao() }), await P5n(f), p;
}
async function YCe(e, s) {
  if (e.length === 0) return;
  if (s === void 0 && MX(e) === e.length) return;
  let o = new Set(e), r = await Fcn(s), i = r.filter((a) => !o.has(a.id));
  if (i.length === r.length) return;
  await P5n(i, s);
}
async function RVs(e, s, o) {
  if (e.length === 0) return;
  let r = new Set(e), i = await Fcn(o), a = false;
  for (let n of i) if (r.has(n.id)) n.lastFiredAt = s, a = true;
  if (!a) return;
  await P5n(i, o);
}
async function Fde(e) {
  let s = await Fcn(e);
  if (e !== void 0) return s;
  let o = Om().map((r) => ({ ...r, durable: false }));
  return [...s, ...o];
}
function $cn(e, s, o) {
  let r = O3(e);
  if (!r) return null;
  let i = I1t(r, new Date(s), o);
  return i ? i.getTime() : null;
}
var P8 = { recurringFrac: 0.5, recurringCapMs: 18e5, oneShotMaxMs: 9e4, oneShotFloorMs: 0, oneShotMinuteMod: 30, recurringMaxAgeMs: 6048e5, cacheLeadMs: 15e3 };
function M(e) {
  let s = parseInt(e.slice(0, 8), 16) / 4294967296;
  return Number.isFinite(s) ? s : 0;
}
function Ucn(e, s, o, r = P8) {
  let i = $cn(e, s);
  if (i === null) return null;
  let a = $cn(e, i);
  if (a === null) return i;
  let n = a - i;
  if (E.test(e) && r.cacheLeadMs > 0 && r.cacheLeadMs < n && n >= R5n && n - r.cacheLeadMs < R5n) return s + n - r.cacheLeadMs;
  let m = Math.min(M(o) * r.recurringFrac * n, r.recurringCapMs);
  return i + m;
}
function YLo(e, s, o, r = P8) {
  let i = $cn(e, s, { oneShot: true });
  if (i === null) return null;
  if (new Date(i).getMinutes() % r.oneShotMinuteMod !== 0) return i;
  let a = r.oneShotFloorMs + M(o) * (r.oneShotMaxMs - r.oneShotFloorMs);
  return Math.max(i - a, s);
}
function Xyt(e, s) {
  return e.recurring ? Ucn(e.cron, e.lastFiredAt ?? e.createdAt, e.id, s) : YLo(e.cron, e.createdAt, e.id, s);
}
function Jyt(e) {
  return new Date(Math.round(e / 6e4) * 6e4);
}
function xVs(e, s) {
  return e.filter((o) => {
    let r = $cn(o.cron, o.createdAt, { oneShot: !o.recurring });
    return r !== null && r < s;
  });
}
export {
  $cn,
  Fcn,
  Fde,
  I1t,
  Jyt,
  O3,
  P5n,
  P8,
  R5n,
  RVs,
  Sx,
  Ucn,
  Xyt,
  YCe,
  YLo,
  Yyt,
  aHe,
  fGe,
  h$r,
  iHe,
  qLo,
  x5n,
  xVs
};

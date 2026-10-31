// linux/fs/chunk-b4a20003.js — Claude Code 2.1.310（linux）模块 chunk-1vw5s89k.js
import { ke } from "../context/not-admin-owned.js";
import { d } from "../telemetry/anthropic-workspace-id.js";
import { ba } from "../settings/global-config-and-gates.js";
import { t } from "./gitlab-runner-authentication-token.js";
import { We } from "../plugins/chunk-0a4c51cf.js";
import { M8 } from "../context/org-memory-writes-setting-changed.js";
import { Zb } from "../agents/in-process-teammate.9720.js";
import { Pso } from "./chunk-e59b1f32.js";
import { Xa } from "./daemon-worker.js";
import { z } from "../shared/chunk-be29de51.js";
import { mkdir as P, readFile as f, stat as p, unlink as v, utimes as D, writeFile as k } from "fs/promises";
import { join as A } from "path";
var g = ".consolidate-lock", y = 36e5;
function c(e) {
  return A(e, g);
}
function l(e) {
  let n = M8(e);
  return n === void 0 ? void 0 : We.memory(n, [g]);
}
function b(e, n) {
  let [a = "", r = ""] = e.split(`
`), o = parseInt(a.trim(), 10), i = r.trim() === "" ? NaN : Number(r.trim());
  return { holderPid: Number.isFinite(o) ? o : void 0, lastConsolidatedAt: Number.isFinite(i) ? i : n };
}
function h(e, n) {
  return `${e ?? ""}
${n}`;
}
async function Edt(e = ba(), n) {
  let a = z() && n !== void 0 ? l(e) : void 0;
  if (n && a) {
    let r = await n.readText([a]);
    if (!r.ok || !r.value.items[0].found) return 0;
    let { value: o, mtimeMs: i } = r.value.items[0];
    return b(o, i).lastConsolidatedAt;
  }
  try {
    return (await p(c(e))).mtimeMs;
  } catch {
    return 0;
  }
}
async function Dgs(e) {
  return L(ba(), e);
}
async function L(e, n) {
  let a = z() && n !== void 0 ? l(e) : void 0;
  if (n && a) return S(n, a);
  let r = c(e), o, i;
  try {
    let [s, w] = await Promise.all([p(r), f(r, "utf8")]);
    o = s.mtimeMs;
    let m = parseInt(w.trim(), 10);
    i = Number.isFinite(m) ? m : void 0;
  } catch {
  }
  if (o !== void 0 && Date.now() - o < y) {
    if (i !== void 0 && Xa(i)) return t(`[autoDream] lock held by live PID ${i} (mtime ${Math.round((Date.now() - o) / 1e3)}s ago)`), null;
  }
  await P(e, { recursive: true }), await k(r, String(process.pid));
  let u;
  try {
    u = await f(r, "utf8");
  } catch {
    return null;
  }
  if (parseInt(u.trim(), 10) !== process.pid) return null;
  return o ?? 0;
}
async function sIt(e, n) {
  return C(ba(), e, n);
}
async function C(e, n, a) {
  let r = z() && a !== void 0 ? l(e) : void 0;
  if (a && r) return x(a, r, n);
  let o = c(e);
  try {
    if (n === 0) {
      await v(o);
      return;
    }
    await k(o, "");
    let i = n / 1e3;
    await D(o, i, i);
  } catch (i) {
    t(`[autoDream] rollback failed: ${d(i)} — next trigger delayed to minHours`);
  }
}
async function S(e, n) {
  let a = await e.readText([n]), r = a.ok ? a.value.items[0] : void 0, o = r?.found ? r.version : void 0, i = r?.found ? b(r.value, r.mtimeMs) : void 0;
  if (i !== void 0 && Date.now() - i.lastConsolidatedAt < y) {
    if (i.holderPid !== void 0 && Xa(i.holderPid)) return t(`[autoDream] lock held by live PID ${i.holderPid} (acquired ${Math.round((Date.now() - i.lastConsolidatedAt) / 1e3)}s ago)`), null;
  }
  let u = await e.updateText(n, (s) => (s?.version ?? void 0) === o ? { write: h(process.pid, Date.now()), result: true } : { skip: true, result: false }, r?.found ? { publishDiscipline: "inPlace" } : void 0);
  if (!u.ok || u.value.result !== true) return null;
  return i?.lastConsolidatedAt ?? 0;
}
async function x(e, n, a) {
  let r = a === 0 ? await e.delete(n) : await e.updateText(n, () => ({ write: h(void 0, a) }), { publishDiscipline: "inPlace" });
  if (!r.ok) t(`[autoDream] rollback failed: ${r.error.code} — next trigger delayed to minHours`);
}
async function Hgs(e, n) {
  let a = Zb(ke());
  return (await Pso(a, true, void 0, n)).filter((o) => o.mtime > e).map((o) => o.sessionId);
}
export {
  Dgs,
  Edt,
  Hgs,
  sIt
};

// settings/not-due.vtxe.js — Claude Code 2.1.310 模块 chunk-vtxe145b.js
import { He } from "../fs/async-hooks.9s1z.js";
import { nt, ci } from "../context/not-admin-owned.ersa.js";
import { N } from "../telemetry/anthropic-workspace-id.36ys.js";
import { Pe } from "../shared/chunk-3kevgx4j.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { fts, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { h7o } from "../shell/invalid-type.qnva.js";
import { it, lvt, Voe } from "./global-config-and-gates.27xj.js";
import { ut } from "../shell/chunk-tjkwy3jp.js";
import { Is } from "./workflow-launch-exec.t4r2.js";
import { fe, mt } from "./settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { xqt } from "../remote/moved-directory.z3m0.js";
import { hon, sS, bO, IP } from "../core/conversation-engine.31gx.js";
import { dG } from "./built-in.5fzv.js";
import { kze, Ofn, Ju } from "../context/org-memory-writes-setting-changed.w8x9.js";
import { ag, J0, e7n, Pet } from "../permissions/frontmatter-grant-withheld.8tyz.js";
import { Fvr, $vr, B1e, Sut, Mgo, but, Wvr, YIe } from "../permissions/auto-mode-config.nbjc.js";
import { Act } from "../context/ccr-recap-generate.bwce.js";
import { QC } from "../permissions/chunk-vacbe373.js";
import { resolve as B } from "path";
var Sno = new nt(() => He());
function h8t(e, n, o, d, u) {
  let c = mt();
  t(`Settings changed from ${n}, updating app state`), Voe();
  let f = J0();
  dG({ userLayer: "retain" }), IP();
  let a = false;
  if (o((m) => {
    let s = hon(m.toolPermissionContext, f);
    s = wno(s, m.settings.permissions?.additionalDirectories, Pet(), n, u?.trustFlip === true, u?.prevCwd, d);
    let r = bno(s, f);
    if (s = r.context, a = r.exitedAutoMode, s.blockReadsOutsideWorkingDirectories !== true && kze()) s = { ...s, blockReadsOutsideWorkingDirectories: true }, Ofn();
    let g = Act();
    return { ...m, settings: c, toolPermissionContext: s, ...m.awaySummaryEnabled !== g && { awaySummaryEnabled: g } };
  }), a && e !== void 0) Sno.of(e).emit();
}
function y8t(e) {
  if (h7o()) e();
}
function bno(e, n) {
  let o = e;
  if (o.isBypassPermissionsModeAvailable && QC()) o = Mgo(o);
  if (o.strippedDangerousRules !== void 0) {
    let u = new Set(Is), c = !ag(), f = {};
    for (let [a, m] of Object.entries(o.strippedDangerousRules)) if (m && (c || a === "command") && !u.has(a)) f[a] = [...m];
    o = { ...o, strippedDangerousRules: f };
  }
  let d = but(o) && Sut();
  if (d) o = Wvr(o);
  return { context: YIe(o), exitedAutoMode: d };
}
function wno(e, n, o, d, u = false, c, f) {
  let a = new Set((n ?? []).flatMap((i) => C(i, c))), m = new Set((o ?? []).flatMap((i) => C(i))), s = e.additionalWorkingDirectories, r = [...a].filter((i) => !m.has(i) && !D(s.get(i)?.source)), g = [...m].filter((i) => (!a.has(i) || u && !s.has(i)) && !D(s.get(i)?.source)), P = ci(), { declared: T, repoOnly: v } = e7n((i) => [...P === null ? [] : C(i, P), ...C(i)], f), b = (i) => v.has(i) ? "projectSettings" : "localSettings", A = [...s.entries()].filter(([i, p]) => !D(p.source) && !r.includes(i) && T.has(i) && p.source !== b(i));
  if (r.length === 0 && g.length === 0 && A.length === 0 && d !== "flagSettings") return e;
  let y = e;
  if (A.length > 0) {
    let i = new Map(s);
    for (let [p, h] of A) i.set(p, { ...h, source: b(p) });
    y = { ...y, additionalWorkingDirectories: i };
  }
  if (d === "flagSettings") {
    let i = new Set((fe("flagSettings")?.permissions?.additionalDirectories ?? []).flatMap((S) => C(S))), p = new Map(y.trustedNetworkDirectories ?? []), h = false;
    for (let S of [...p.keys()]) if (!i.has(S) && s.get(S)?.source !== "cliArg") {
      for (let x of p.get(S) ?? []) if (x !== S) r.push(x);
      p.delete(S), h = true;
    }
    if ($vr()) {
      for (let S of i) if (!p.has(S)) {
        if (fts(S)) continue;
        let x = xqt(S);
        if (x.length > 0) {
          p.set(S, x);
          for (let M of x) if (M !== S) g.push(M);
          h = true;
        }
      }
    }
    if (h) y = { ...y, trustedNetworkDirectories: p };
  }
  if (r.length > 0) y = Ju(y, { type: "removeDirectories", directories: r, destination: "localSettings" });
  if (g.length > 0) for (let i of ["projectSettings", "localSettings"]) {
    let p = g.filter((h) => b(h) === i);
    if (p.length > 0) y = Ju(y, { type: "addDirectories", directories: p, destination: i });
  }
  return y;
}
function _8t(e, n) {
  let o = new Set(Pet().flatMap((c) => C(c))), d = e.additionalWorkingDirectories, u = n.filter((c) => {
    let f = d.get(c);
    return f !== void 0 && !o.has(c) && !D(f.source);
  });
  if (u.length === 0) return e;
  return Ju(e, { type: "removeDirectories", directories: u, destination: "localSettings" });
}
function D(e) {
  return e === "cliArg" || e === "command" || e === "session";
}
function E(e, n) {
  return B(ut(e, n));
}
function C(e, n) {
  try {
    return [E(e, n)];
  } catch {
    return [];
  }
}
class k {
  #e = false;
  #o = false;
  get autoModeCheckRan() {
    return this.#e;
  }
  get isLaunchRun() {
    return !this.#o;
  }
  claimAutoModeCheck() {
    if (this.#e) return false;
    return this.#e = true, true;
  }
  rearmAutoModeCheck() {
    this.#e = false, this.#o = true;
  }
  reset() {
    this.#e = false, this.#o = false;
  }
}
var w = new W(() => new k());
function Fxt(e) {
  return { key: "auto-mode-gate-notification", kind: "warning", text: e, color: "warning", priority: "high" };
}
async function $xt(e, n, o, d, u) {
  let c = w.of(e);
  if (!c.claimAutoModeCheck()) return;
  let { updateContext: f, notification: a } = await B1e(n, d, c.isLaunchRun);
  if (o((m) => {
    let s = f(m.toolPermissionContext), r = s === m.toolPermissionContext ? m : { ...m, toolPermissionContext: s };
    if (!a || u) return r;
    return { ...r, notifications: { ...r.notifications, queue: [...r.notifications.queue, Fxt(a)] } };
  }), a && u) u(Fxt(a));
}
function VPn(e) {
  w.of(e).rearmAutoModeCheck();
}
function Eno(e, n) {
  return (e.isAutoModeAvailable === false || Boolean(n) || lvt(it())) && sS();
}
function vno(e, n, o, d) {
  return R(e, n, o, d, false);
}
function S8t(e, n, o) {
  return R(e, n, o, void 0, true);
}
async function pps(e, n, o, d) {
  switch (await vno(e, n, o, d)) {
    case "not-due":
    case "allowed":
      return;
    case "refused":
      return Fvr(bO());
    case "unanswered":
      return { ok: false, error: "Cannot set permission mode to auto: auto mode availability is not known yet · ask again", code: "auto_mode_unavailable" };
  }
}
async function R(e, n, o, d, u) {
  if (!Eno(e, o) || u && but(e)) return "not-due";
  let c = B1e(e, o).then(({ updateContext: f, canEnterAuto: a, refusedForSettingsAlone: m }) => {
    let s = false;
    if (!m) n((r) => {
      let g = r.toolPermissionContext;
      if (!a) {
        if (u && but(g)) return r;
        let P = f(g);
        return P === g ? r : { ...r, toolPermissionContext: P };
      }
      if (s = Boolean(r.fastMode) && !o, g.isAutoModeAvailable !== false || !sS() || Boolean(r.fastMode) !== Boolean(o)) return r;
      return { ...r, toolPermissionContext: { ...g, isAutoModeAvailable: a, canAutoClassifierRun: a } };
    });
    if (!a) return "refused";
    return s ? "unanswered" : "allowed";
  }).catch((f) => (l(N(f)), "unanswered"));
  return await (d === void 0 ? c : Pe(c, d)) ?? "unanswered";
}
export {
  $xt,
  Eno,
  Fxt,
  S8t,
  Sno,
  VPn,
  _8t,
  bno,
  h8t,
  pps,
  vno,
  wno,
  y8t
};

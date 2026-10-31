// darwin/shared/advisor-tool.js — Claude Code 2.1.310（darwin）模块 chunk-3jhqvsbn.js
import { Jo, mnt, ZAe, Ft } from "../settings/global-config-and-gates.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Qs } from "../models/total-tokens-reminder.js";
import { z$t, jC, w3, p8, khe, SCe, rln, qBs, dJe, v0e, V$t, JBs } from "../context/team-memory-sync.js";
var C = { announcement: void 0, advisorModel: void 0, advisorDeferred: false, advisorActive: false };
function uws(e, o, { querySource: i, resumeActive: u, configuredRuntimeModel: d, runtimeOptionsModel: f, carrier: n, toolChangesRide: g }) {
  try {
    let r = typeof g === "function" ? g : () => g, b = Jo(i), v = o.getAdvisorSetting(), s = b === "main" ? d : f, m = r(f), c = V$t(e);
    if (u || b === "auxiliary") {
      let p = n?.advisorHeld ?? mDn(c) ?? _(v, s, d, r(s)), h = p.model === void 0 && m && !p.refused ? { model: A(v, s, d), viaToolChange: true } : p;
      return H(S(h, m), c, s, d);
    }
    let a = n?.advisorHeld;
    if (a === void 0) {
      if (a = mDn(c) ?? _(v, s, d, r(s)), n !== void 0) n.advisorHeld = a;
    } else if (a.model === void 0 && m && !a.refused) {
      let p = A(v, s, d);
      if (p !== void 0) {
        if (a = { model: p, viaToolChange: true }, n !== void 0) n.advisorHeld = a;
      }
    }
    let F = S(a, m), q = a.viaToolChange && !m && a.inFallback !== true, y = x(e, v, s, d, F, q), N = a.model === void 0 || c !== void 0 || T(a.model, s, d), B = m ? false : a.inFallback === true || N;
    if (n !== void 0 && a.viaToolChange && a.inFallback === true !== B) {
      let { inFallback: p, ...h } = a;
      n.advisorHeld = B ? { ...h, inFallback: true } : h;
    }
    let O = y === void 0 ? c : y.available ? { available: true, model: y.model, toolChange: y.toolChange !== void 0, byBase: false } : { available: false, model: y.model, toolChange: y.toolChange !== void 0, byBase: y.byBase === true };
    return { ...H(F, O, s, d), announcement: y };
  } catch (r) {
    return l(r), C;
  }
}
function w(e, o, i) {
  return { announcement: void 0, advisorModel: e, advisorDeferred: e !== void 0 && o, advisorActive: e !== void 0 && i };
}
function H(e, o, i, u) {
  if (e.model === void 0 || !T(e.model, i, u)) return C;
  if (e.viaToolChange) return w(e.model, true, o?.available === true);
  if (e.standby && o === void 0) return C;
  if (o !== void 0 && !o.available && o.toolChange && !o.byBase) return C;
  return w(e.model, false, true);
}
function S(e, o) {
  return e.viaToolChange && !o ? { ...e, viaToolChange: false } : e;
}
function mDn(e) {
  if (e === void 0) return;
  return { model: e.model, viaToolChange: e.toolChange };
}
function _(e, o, i, u) {
  let d = A(e, o, i);
  if (d !== void 0 || !u || e) return { model: d, viaToolChange: u };
  let f = P(o, i);
  return f === void 0 ? { model: void 0, viaToolChange: true } : { model: f, viaToolChange: true, standby: true };
}
function P(e, o) {
  if (!Qs() || !jC() || !w3(e)) return;
  let i = p8(), u = [...i.filter((d) => !k(d)), ...i.filter((d) => k(d))];
  for (let d of u) {
    let f = A(d, e, o);
    if (f === void 0 || !qBs(e, f)) continue;
    if (mnt(f)) return f;
    t(`[AdvisorTool] No standby advisor entry - this org is not known to serve ${f}`);
    return;
  }
  return;
}
function k(e) {
  return ZAe(Ft(e));
}
function x(e, o, i, u, d, f = false) {
  let n = V$t(e), g = d ?? mDn(n) ?? { model: A(o, i, u), viaToolChange: false }, r = g.model, b = D(e) === "add";
  if (r === void 0 || !T(r, i, u)) {
    let c = g.viaToolChange || f, a = jC() && Boolean(o);
    if (n?.available !== true) {
      if (!c || r === void 0 || n === void 0) return;
      if (n.byBase && !a) return { type: "advisor_tool", available: false, model: r, toolChange: "remove" };
      if (n.toolChange && !n.byBase && a) return { type: "advisor_tool", available: false, model: r, toolChange: "remove", byBase: true };
      return;
    }
    if (r === void 0) return { type: "advisor_tool", available: false };
    if (!c) return { type: "advisor_tool", available: false, model: r, byBase: true };
    return a ? { type: "advisor_tool", available: false, model: r, toolChange: "remove", byBase: true } : { type: "advisor_tool", available: false, model: r, toolChange: "remove" };
  }
  let v = JBs(e);
  if (g.viaToolChange) {
    if (v0e(o, i) === void 0) return b || n?.available === true ? { type: "advisor_tool", available: false, model: r, toolChange: "remove" } : void 0;
    if (b && n?.available !== false) return v ? void 0 : { type: "advisor_tool", available: true, model: r, toolChange: "add" };
    return v ? { type: "advisor_tool", available: true, model: r, abbreviated: true, toolChange: "add" } : { type: "advisor_tool", available: true, model: r, toolChange: "add" };
  }
  let s = { type: "advisor_tool", available: true, model: r }, m = { ...s, abbreviated: true };
  if (f) {
    if (v0e(o, i) === void 0) return n?.available === true || n !== void 0 && n.byBase || n === void 0 && g.standby !== true ? { type: "advisor_tool", available: false, model: r, toolChange: "remove" } : void 0;
    if (n?.available === true) return v ? void 0 : s;
    return v ? m : s;
  }
  if (n === void 0) return g.standby ? void 0 : s;
  if (n.available) return v ? void 0 : s;
  if (n.toolChange && !n.byBase) return;
  return v ? m : s;
}
function D(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let i = e[o];
    if (i.type === "attachment" && i.attachment.type === "advisor_tool" && i.attachment.toolChange !== void 0) return i.attachment.toolChange;
  }
  return;
}
function T(e, o, i) {
  return z$t() && khe(e) && w3(o) && (dJe(o, i) ? SCe(o, e) : rln(o, e));
}
function A(e, o, i) {
  let u = v0e(e, o);
  return u !== void 0 && (dJe(o, i) || rln(o, u)) ? u : void 0;
}
export {
  mDn,
  uws
};

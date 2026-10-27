// telemetry/apply-flag-settings.7rcd.js — Claude Code 2.1.310 模块 chunk-7rcddx0a.js
import { S, c, ce } from "../agents/third-party.ydpb.js";
import { a } from "./chunk-wq923bwc.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { i } from "../shared/environment.9a41.js";
import { tr, dl } from "../shared/async-hooks.m2fg.js";
import { gQn, sH, Bm, m6e, l_e, xQ, l4, uL, aAe, tA, cwt, Dce, bQn, IQ, y6e, a_, Z2o, w2t } from "../models/ccr-unsupported-default-mode-ignored.fdkh.js";
import { it } from "../settings/global-config-and-gates.27xj.js";
var F = { low: "Quick, straightforward implementation", medium: "Balanced approach with standard testing", high: "Comprehensive implementation with extensive testing", xhigh: "Extended reasoning with thorough analysis (on supported models)", max: "Maximum capability with deepest reasoning (on supported models)" }, gOt = "dynamic workflows on every task";
function pDn() {
  let e = it(), t = sH(e), n = l_e(e);
  return `Usage: /effort [${n.join("|")}|auto${t ? "|ultracode [on|off]" : ""}]

Effort levels:
` + n.map((r) => `- ${r}: ${F[r]}
`).join("") + "- auto: Use the default effort level for your model" + (t ? `

Ultracode (any effort level, this session only):
- ultracode [on|off]: ${gOt}` : "");
}
function g(e) {
  let t = l_e(e), n = sH(e) ? ", ultracode [on|off]" : "";
  return `${t.join(", ")}, auto${n}`;
}
function luo(e) {
  let t = e.toLowerCase();
  if (t === "auto" || t === "unset") return { value: void 0 };
  let n = uL(e);
  return n ? { value: n } : null;
}
function R(e) {
  if (!tr()) return null;
  if (!dl()) return " (applied locally — this remote transport can’t change the remote session’s settings)";
  return tr()?.sendControlRequest({ subtype: "apply_flag_settings", settings: e }).catch(l), null;
}
function duo() {
  return tr() !== null && dl();
}
function w(e) {
  return duo() ? e.ultracodeConfirmed ?? false : void 0;
}
function O(e, t) {
  let n = tr();
  if (!n) return null;
  if (!dl()) return R({ effortLevel: e, ultracode: false });
  return n.sendControlRequest({ subtype: "apply_flag_settings", settings: { effortLevel: e, ultracode: false } }).then(() => t === true ? n.sendControlRequest({ subtype: "apply_flag_settings", settings: { ultracode: true } }) : void 0).catch(l), null;
}
async function V(e, t, n, r, s) {
  let f = it(), o = typeof e === "string" ? xQ(e, f) : e, E = o !== e, d = n && !E, u = aAe(o);
  if (dl() && u === void 0) return { message: `${o} is session-scoped and won't reach the remote process. Use low, medium, high, or xhigh instead.` };
  let p = IQ(o, f, d, s);
  r?.({ value: o });
  let m = w(t), h = m === false && t.ultracode === true;
  if (m !== void 0 && m !== (t.ultracode === true)) r?.({ ultracode: m });
  let y = O(u ?? null, m), C = await p;
  if (C) return { message: `Failed to set effort level: ${C.message}` };
  a("tengu_effort_command", { effort: typeof o === "number" ? o : c(o), from_level: ce(a_(f, t.effort)), route: c(t.route), is_remote: tr() !== null });
  let U = tr() ? void 0 : tA();
  if (U !== void 0 && U !== o) {
    let x = i.CLAUDE_CODE_EFFORT_LEVEL;
    if (u === void 0) return { message: `Not applied: CLAUDE_CODE_EFFORT_LEVEL=${x} overrides effort this session, and ${l4(o)} is session-only (nothing saved)`, effortUpdate: { value: o } };
    return { message: `CLAUDE_CODE_EFFORT_LEVEL=${x} overrides this session — clear it and ${l4(o)} takes over`, effortUpdate: { value: o } };
  }
  let _ = Z2o(o), b = bQn(f), L = u !== void 0 && d && !tr() ? b !== null ? ` (saved, though your organization starts new sessions on ${f} at ${b} effort)` : " (saved as your default for new sessions)" : " (this session only)";
  if (E) return { message: `Effort '${e}' exceeds the cap for ${f} set by your settings or organization; set to '${o}' instead${L}: ${_}${h ? " · Ultracode off" : ""}${y ?? ""}`, effortUpdate: { value: o } };
  return { message: `Set effort level to ${l4(o)}${L}: ${_}${h ? " · Ultracode off" : ""}${y ?? ""}`, effortUpdate: { value: o } };
}
function v(e) {
  let t = tr() ? void 0 : tA();
  return t === null ? void 0 : t ?? e;
}
function fDn({ asDefault: e, levelChanged: t, chosen: n, model: r }) {
  return e && (t || v(n) !== void 0 || w2t(r) === void 0);
}
function sJt(e, t, n) {
  let r = Bm(n, t) ? " · Ultracode on" : "", s = v(e);
  if (s === void 0) {
    let o = y6e(t, e);
    if (o === void 0) return { message: `Effort level: auto${r}` };
    let E = m6e(t) !== null && w2t(t) === void 0 ? ", set by your organization" : "";
    return { message: `Effort level: auto (currently ${l4(o)}${E})${r}` };
  }
  let f = Z2o(s);
  return { message: `Current effort level: ${l4(s)} (${f})${r}` };
}
async function k(e, t, n, r) {
  n?.({ value: void 0 });
  let s = w(e), f = s === false && e.ultracode === true;
  if (s !== void 0 && s !== (e.ultracode === true)) n?.({ ultracode: s });
  let o = O(null, s), E = await IQ(void 0, it(), t, r);
  if (E) return { message: `Failed to set effort level: ${E.message}` };
  a("tengu_effort_command", { effort: S("auto"), from_level: ce(a_(it(), e.effort)), route: c(e.route), is_remote: tr() !== null });
  let d = t ? "" : " (this session only)", u = tr() ? void 0 : tA();
  if (u !== void 0 && u !== null) {
    let p = i.CLAUDE_CODE_EFFORT_LEVEL;
    return { message: `${t ? "Cleared effort from settings, but" : "Effort set to auto for this session, but"} CLAUDE_CODE_EFFORT_LEVEL=${p} still controls this session`, effortUpdate: { value: void 0 } };
  }
  return { message: `Effort level set to auto${d}${f ? " · Ultracode off" : ""}${o ?? ""}`, effortUpdate: { value: void 0 } };
}
function D(e, t, n) {
  let r = it();
  if (e && !sH()) return { message: `Ultracode needs dynamic workflows enabled (see /config). Valid options are: ${g(r)}` };
  if (e && !sH(r)) return { message: `Ultracode isn't available on ${r}. Valid options are: ${g(r)}` };
  n?.({ ultracode: e });
  let s = R({ ultracode: e });
  a("tengu_effort_command", { effort: e ? S("ultracode") : S("ultracode_off"), from_level: ce(a_(r, t.effort)), route: c(t.route), is_remote: tr() !== null });
  let f = v(t.effort) ?? y6e(r, t.effort) ?? "auto";
  return { message: e ? `Ultracode on (this session only): ${gOt}. Effort stays ${f}.${s ?? ""}` : `Ultracode off. Effort stays ${f}.${s ?? ""}`, effortUpdate: { ultracode: e } };
}
function A(e) {
  let [t, n, ...r] = e.split(/\s+/);
  if (t !== "ultracode" || r.length > 0) return;
  if (n === void 0 || n === "on") return true;
  return n === "off" ? false : void 0;
}
async function P(e, t, n = true, r, s) {
  let f = e.toLowerCase();
  if (f === "auto" || f === "unset") return k(t, n, r, s);
  let o = A(f);
  if (o !== void 0) return D(o, t, r);
  let E = uL(e);
  if (!E) return { message: `Invalid argument: ${e}. Valid options are: ${g(it())}` };
  return V(E, t, n, r, s);
}
async function i1e(e, t, n, r = true, s) {
  let f = false, o = null, E = await P(e, t, r, (d) => {
    if (f = true, d.ultracode === void 0) gQn();
    n((u) => {
      o ??= { sessionEffort: u.sessionEffort, ultracode: u.ultracode ?? false };
      let p = d.ultracode === void 0 ? cwt(d.value) : u.sessionEffort, m = d.ultracode ?? u.ultracode ?? false;
      if (Dce(u.sessionEffort, p) && (u.ultracode ?? false) === m) return u;
      return { ...u, sessionEffort: p, ultracode: m };
    });
  }, s);
  if (f && !E.effortUpdate) n((d) => {
    if (o === null) return d;
    if (Dce(d.sessionEffort, o.sessionEffort) && (d.ultracode ?? false) === o.ultracode) return d;
    return { ...d, sessionEffort: o.sessionEffort, ultracode: o.ultracode };
  });
  return E;
}
export {
  duo,
  fDn,
  gOt,
  i1e,
  luo,
  pDn,
  sJt
};

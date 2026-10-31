// linux/telemetry/apply-flag-settings.js — Claude Code 2.1.310（linux）模块 chunk-gbxb25ge.js
import { b, c, ce } from "../agents/third-party.js";
import { a } from "./chunk-9097a12b.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { i } from "../shared/environment.js";
import { tr, ll } from "../shared/async-hooks.5238.js";
import { JQn, tH, Bm, oKe, n_e, w7, JY, l0, tCe, QA, rwt, Rce, n7n, E7, aKe, s_, kGo, dGt } from "../models/ccr-unsupported-default-mode-ignored.js";
import { st } from "../settings/global-config-and-gates.js";
var F = { low: "Quick, straightforward implementation", medium: "Balanced approach with standard testing", high: "Comprehensive implementation with extensive testing", xhigh: "Extended reasoning with thorough analysis (on supported models)", max: "Maximum capability with deepest reasoning (on supported models)" }, lOt = "dynamic workflows on every task";
function ZHn() {
  let e = st(), t = tH(e), n = n_e(e);
  return `Usage: /effort [${n.join("|")}|auto${t ? "|ultracode [on|off]" : ""}]

Effort levels:
` + n.map((r) => `- ${r}: ${F[r]}
`).join("") + "- auto: Use the default effort level for your model" + (t ? `

Ultracode (any effort level, this session only):
- ultracode [on|off]: ${lOt}` : "");
}
function g(e) {
  let t = n_e(e), n = tH(e) ? ", ultracode [on|off]" : "";
  return `${t.join(", ")}, auto${n}`;
}
function $co(e) {
  let t = e.toLowerCase();
  if (t === "auto" || t === "unset") return { value: void 0 };
  let n = l0(e);
  return n ? { value: n } : null;
}
function R(e) {
  if (!tr()) return null;
  if (!ll()) return " (applied locally — this remote transport can’t change the remote session’s settings)";
  return tr()?.sendControlRequest({ subtype: "apply_flag_settings", settings: e }).catch(l), null;
}
function Fco() {
  return tr() !== null && ll();
}
function w(e) {
  return Fco() ? e.ultracodeConfirmed ?? false : void 0;
}
function O(e, t) {
  let n = tr();
  if (!n) return null;
  if (!ll()) return R({ effortLevel: e, ultracode: false });
  return n.sendControlRequest({ subtype: "apply_flag_settings", settings: { effortLevel: e, ultracode: false } }).then(() => t === true ? n.sendControlRequest({ subtype: "apply_flag_settings", settings: { ultracode: true } }) : void 0).catch(l), null;
}
async function V(e, t, n, r, s) {
  let f = st(), o = typeof e === "string" ? w7(e, f) : e, E = o !== e, d = n && !E, u = tCe(o);
  if (ll() && u === void 0) return { message: `${o} is session-scoped and won't reach the remote process. Use low, medium, high, or xhigh instead.` };
  let p = E7(o, f, d, s);
  r?.({ value: o });
  let m = w(t), h = m === false && t.ultracode === true;
  if (m !== void 0 && m !== (t.ultracode === true)) r?.({ ultracode: m });
  let y = O(u ?? null, m), C = await p;
  if (C) return { message: `Failed to set effort level: ${C.message}` };
  a("tengu_effort_command", { effort: typeof o === "number" ? o : c(o), from_level: ce(s_(f, t.effort)), route: c(t.route), is_remote: tr() !== null });
  let U = tr() ? void 0 : QA();
  if (U !== void 0 && U !== o) {
    let x = i.CLAUDE_CODE_EFFORT_LEVEL;
    if (u === void 0) return { message: `Not applied: CLAUDE_CODE_EFFORT_LEVEL=${x} overrides effort this session, and ${JY(o)} is session-only (nothing saved)`, effortUpdate: { value: o } };
    return { message: `CLAUDE_CODE_EFFORT_LEVEL=${x} overrides this session — clear it and ${JY(o)} takes over`, effortUpdate: { value: o } };
  }
  let _ = kGo(o), L = n7n(f), S = u !== void 0 && d && !tr() ? L !== null ? ` (saved, though your organization starts new sessions on ${f} at ${L} effort)` : " (saved as your default for new sessions)" : " (this session only)";
  if (E) return { message: `Effort '${e}' exceeds the cap for ${f} set by your settings or organization; set to '${o}' instead${S}: ${_}${h ? " · Ultracode off" : ""}${y ?? ""}`, effortUpdate: { value: o } };
  return { message: `Set effort level to ${JY(o)}${S}: ${_}${h ? " · Ultracode off" : ""}${y ?? ""}`, effortUpdate: { value: o } };
}
function v(e) {
  let t = tr() ? void 0 : QA();
  return t === null ? void 0 : t ?? e;
}
function eLn({ asDefault: e, levelChanged: t, chosen: n, model: r }) {
  return e && (t || v(n) !== void 0 || dGt(r) === void 0);
}
function YJt(e, t, n) {
  let r = Bm(n, t) ? " · Ultracode on" : "", s = v(e);
  if (s === void 0) {
    let o = aKe(t, e);
    if (o === void 0) return { message: `Effort level: auto${r}` };
    let E = oKe(t) !== null && dGt(t) === void 0 ? ", set by your organization" : "";
    return { message: `Effort level: auto (currently ${JY(o)}${E})${r}` };
  }
  let f = kGo(s);
  return { message: `Current effort level: ${JY(s)} (${f})${r}` };
}
async function k(e, t, n, r) {
  n?.({ value: void 0 });
  let s = w(e), f = s === false && e.ultracode === true;
  if (s !== void 0 && s !== (e.ultracode === true)) n?.({ ultracode: s });
  let o = O(null, s), E = await E7(void 0, st(), t, r);
  if (E) return { message: `Failed to set effort level: ${E.message}` };
  a("tengu_effort_command", { effort: b("auto"), from_level: ce(s_(st(), e.effort)), route: c(e.route), is_remote: tr() !== null });
  let d = t ? "" : " (this session only)", u = tr() ? void 0 : QA();
  if (u !== void 0 && u !== null) {
    let p = i.CLAUDE_CODE_EFFORT_LEVEL;
    return { message: `${t ? "Cleared effort from settings, but" : "Effort set to auto for this session, but"} CLAUDE_CODE_EFFORT_LEVEL=${p} still controls this session`, effortUpdate: { value: void 0 } };
  }
  return { message: `Effort level set to auto${d}${f ? " · Ultracode off" : ""}${o ?? ""}`, effortUpdate: { value: void 0 } };
}
function D(e, t, n) {
  let r = st();
  if (e && !tH()) return { message: `Ultracode needs dynamic workflows enabled (see /config). Valid options are: ${g(r)}` };
  if (e && !tH(r)) return { message: `Ultracode isn't available on ${r}. Valid options are: ${g(r)}` };
  n?.({ ultracode: e });
  let s = R({ ultracode: e });
  a("tengu_effort_command", { effort: e ? b("ultracode") : b("ultracode_off"), from_level: ce(s_(r, t.effort)), route: c(t.route), is_remote: tr() !== null });
  let f = v(t.effort) ?? aKe(r, t.effort) ?? "auto";
  return { message: e ? `Ultracode on (this session only): ${lOt}. Effort stays ${f}.${s ?? ""}` : `Ultracode off. Effort stays ${f}.${s ?? ""}`, effortUpdate: { ultracode: e } };
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
  let E = l0(e);
  if (!E) return { message: `Invalid argument: ${e}. Valid options are: ${g(st())}` };
  return V(E, t, n, r, s);
}
async function JUe(e, t, n, r = true, s) {
  let f = false, o = null, E = await P(e, t, r, (d) => {
    if (f = true, d.ultracode === void 0) JQn();
    n((u) => {
      o ??= { sessionEffort: u.sessionEffort, ultracode: u.ultracode ?? false };
      let p = d.ultracode === void 0 ? rwt(d.value) : u.sessionEffort, m = d.ultracode ?? u.ultracode ?? false;
      if (Rce(u.sessionEffort, p) && (u.ultracode ?? false) === m) return u;
      return { ...u, sessionEffort: p, ultracode: m };
    });
  }, s);
  if (f && !E.effortUpdate) n((d) => {
    if (o === null) return d;
    if (Rce(d.sessionEffort, o.sessionEffort) && (d.ultracode ?? false) === o.ultracode) return d;
    return { ...d, sessionEffort: o.sessionEffort, ultracode: o.ultracode };
  });
  return E;
}
export {
  $co,
  Fco,
  JUe,
  YJt,
  ZHn,
  eLn,
  lOt
};

// darwin/context/apply-flag-settings.74aa.js — Claude Code 2.1.310（darwin）模块 chunk-fnv1bvrp.js
import { xf, RA, ps } from "./not-admin-owned.js";
import { S } from "../agents/third-party.js";
import { wt, QQ } from "../settings/global-config-and-gates.js";
import { yn } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { tr, dl } from "../shared/async-hooks.5238.js";
import { Un } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { tHe } from "../mcp/declared-tools-dropped-at-compaction.js";
import { w3, lJe, p8, Che, Rht, xht, SCe, dJe, V$t } from "./team-memory-sync.js";
import { mDn } from "../shared/advisor-tool.js";
import { Fn } from "../models/claude-mythos-preview.js";
function cuo(o, n = false) {
  return `${Rht(o)} Run ${xht(o)}${n ? " in an interactive terminal session" : ""} to review and enable, then set it as the advisor.`;
}
function Pct(o, n, f, u, t = true, m = false, r = []) {
  let d = dl(), e = o === "off" ? void 0 : Fn(o), s = e === void 0 || lJe(e);
  if (a("tengu_advisor_command", { advisor: e === void 0 ? S("off") : s ? wt(o) : Che(e) ? S("consent_pending") : S("invalid"), remote: d }), !d && tr()) return "The advisor can't be changed from this client — this connection is view-only or has no control channel";
  let c = d ? " (this session only)" : t ? "" : " for this session — run /advisor in the terminal to change your default";
  if (e === void 0) {
    if (f((i) => i.advisorModel === void 0 ? i : { ...i, advisorModel: void 0 }), d) tr()?.sendControlRequest({ subtype: "apply_flag_settings", settings: { advisorModel: null } }).catch(l);
    else if (M(""), t) Un("userSettings", { advisorModel: void 0 }, void 0, u);
    return `Advisor disabled${c}${h(r, void 0, n)}`;
  }
  if (!s) {
    if (Che(e)) return cuo(e, m);
    let i = [...p8(), "off"].join(", ");
    return `${yn(QQ(e))} cannot be used as an advisor. Valid options: ${i}`;
  }
  if (f((i) => i.advisorModel === e ? i : { ...i, advisorModel: e }), d) tr()?.sendControlRequest({ subtype: "apply_flag_settings", settings: { advisorModel: e } }).catch(l);
  else if (M(e), t) Un("userSettings", { advisorModel: e }, void 0, u);
  let p = yn(QQ(e)), v = yn(QQ(n)), g = `Advisor set to ${p}${c}`;
  if (!w3(n)) g += `
Note: the current main model (${v}) does not support the advisor. It will activate when you switch to a supported main model.`;
  else if (!SCe(n, e)) g += `
Note: ${p} is less capable than the current main model (${v}), so the advisor will not activate. Choose a more capable advisor, or switch to a smaller main model.`;
  return g + h(r, e, n);
}
function h(o, n, f) {
  let u = ps(), t = u.advisorHeld ?? mDn(V$t(o));
  if (t === void 0) return "";
  if (t.refused) return n === void 0 ? "" : `
The API refused the advisor for the current conversation, so it runs without one until /clear or /compact; the setting applies from there and in new conversations.`;
  let m = tHe(u, f);
  if (t.model === void 0 && m) return "";
  if (t.viaToolChange && (m || t.inFallback !== true && t.model !== void 0)) return t.model !== void 0 && n !== void 0 && !y(n, t.model) ? `
The current conversation keeps ${yn(QQ(t.model))} as its advisor model until /clear or /compact, so the tool it has already declared stays unchanged; turning the advisor on or off applies right away.` : "";
  let r = V$t(o), d = r !== void 0 && !r.available && r.toolChange && !r.byBase, e = t.standby === true && r === void 0, s = d || e ? void 0 : t.model;
  if (s === n || s !== void 0 && n !== void 0 && y(n, s)) return "";
  return `
The current conversation ${s === void 0 ? "runs without the advisor" : `keeps ${yn(QQ(s))} as its advisor`} until /clear or /compact, so the prompt it has already sent stays unchanged; the new setting applies from there and in new conversations.`;
}
function y(o, n) {
  return dJe(o, n);
}
function M(o) {
  RA({ ...xf() ?? {}, advisorModel: o });
}
export {
  Pct,
  cuo
};

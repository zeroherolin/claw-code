// linux/context/apply-flag-settings.74aa.js — Claude Code 2.1.310（linux）模块 chunk-9xaw21d7.js
import { xp, TC, ps } from "./not-admin-owned.js";
import { b } from "../agents/third-party.js";
import { wt, G7 } from "../settings/global-config-and-gates.js";
import { yn } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { tr, ll } from "../shared/async-hooks.5238.js";
import { Un } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { qDe } from "../mcp/declared-tools-dropped-at-compaction.js";
import { uY, pQe, s8, Ehe, Nht, $ht, gTe, mQe, qFt } from "./team-memory-sync.js";
import { tLn } from "../shared/advisor-tool.js";
import { $n } from "../models/claude-mythos-preview.js";
function Uco(o, n = false) {
  return `${Nht(o)} Run ${$ht(o)}${n ? " in an interactive terminal session" : ""} to review and enable, then set it as the advisor.`;
}
function Cct(o, n, f, u, t = true, m = false, r = []) {
  let d = ll(), e = o === "off" ? void 0 : $n(o), s = e === void 0 || pQe(e);
  if (a("tengu_advisor_command", { advisor: e === void 0 ? b("off") : s ? wt(o) : Ehe(e) ? b("consent_pending") : b("invalid"), remote: d }), !d && tr()) return "The advisor can't be changed from this client — this connection is view-only or has no control channel";
  let c = d ? " (this session only)" : t ? "" : " for this session — run /advisor in the terminal to change your default";
  if (e === void 0) {
    if (f((i) => i.advisorModel === void 0 ? i : { ...i, advisorModel: void 0 }), d) tr()?.sendControlRequest({ subtype: "apply_flag_settings", settings: { advisorModel: null } }).catch(l);
    else if (S(""), t) Un("userSettings", { advisorModel: void 0 }, void 0, u);
    return `Advisor disabled${c}${h(r, void 0, n)}`;
  }
  if (!s) {
    if (Ehe(e)) return Uco(e, m);
    let i = [...s8(), "off"].join(", ");
    return `${yn(G7(e))} cannot be used as an advisor. Valid options: ${i}`;
  }
  if (f((i) => i.advisorModel === e ? i : { ...i, advisorModel: e }), d) tr()?.sendControlRequest({ subtype: "apply_flag_settings", settings: { advisorModel: e } }).catch(l);
  else if (S(e), t) Un("userSettings", { advisorModel: e }, void 0, u);
  let p = yn(G7(e)), v = yn(G7(n)), g = `Advisor set to ${p}${c}`;
  if (!uY(n)) g += `
Note: the current main model (${v}) does not support the advisor. It will activate when you switch to a supported main model.`;
  else if (!gTe(n, e)) g += `
Note: ${p} is less capable than the current main model (${v}), so the advisor will not activate. Choose a more capable advisor, or switch to a smaller main model.`;
  return g + h(r, e, n);
}
function h(o, n, f) {
  let u = ps(), t = u.advisorHeld ?? tLn(qFt(o));
  if (t === void 0) return "";
  if (t.refused) return n === void 0 ? "" : `
The API refused the advisor for the current conversation, so it runs without one until /clear or /compact; the setting applies from there and in new conversations.`;
  let m = qDe(u, f);
  if (t.model === void 0 && m) return "";
  if (t.viaToolChange && (m || t.inFallback !== true && t.model !== void 0)) return t.model !== void 0 && n !== void 0 && !y(n, t.model) ? `
The current conversation keeps ${yn(G7(t.model))} as its advisor model until /clear or /compact, so the tool it has already declared stays unchanged; turning the advisor on or off applies right away.` : "";
  let r = qFt(o), d = r !== void 0 && !r.available && r.toolChange && !r.byBase, e = t.standby === true && r === void 0, s = d || e ? void 0 : t.model;
  if (s === n || s !== void 0 && n !== void 0 && y(n, s)) return "";
  return `
The current conversation ${s === void 0 ? "runs without the advisor" : `keeps ${yn(G7(s))} as its advisor`} until /clear or /compact, so the prompt it has already sent stays unchanged; the new setting applies from there and in new conversations.`;
}
function y(o, n) {
  return mQe(o, n);
}
function S(o) {
  TC({ ...xp() ?? {}, advisorModel: o });
}
export {
  Cct,
  Uco
};

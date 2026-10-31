// darwin/context/classifier-disabled-surfaces.js — Claude Code 2.1.310（darwin）模块 chunk-x4d0vmf5.js
import { Ne } from "../fs/async-hooks.93b1.js";
import { ye, Vc } from "./not-admin-owned.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { c3t } from "../remote/local-agent.js";
import { Vo } from "../mcp/claude-browser.js";
import { ET } from "../shared/async-hooks.5238.js";
import { Nr } from "../mcp/always-allow.js";
import { wS, Ut, PSn, ISn, k } from "../settings/global-config-and-gates.js";
import { pze } from "../remote/chunk-8734517b.js";
import { hhe, yhe } from "./projects-thread-reply-lead-killswitch.js";
import { Zl } from "../telemetry/focus-events.js";
import { u8, aqn } from "../git/needs-reply.js";
import { r_e } from "../shared/chunk-9f5e078b.js";
import { OZn } from "../shared/chunk-37f396c1.js";
import { z } from "../shared/chunk-be29de51.js";
var l = /* @__PURE__ */ new Set(["remote", "remote_cowork", "remote_desktop", "remote_mobile", "remote_projects"]);
function Rhi(e) {
  if (Ut()) return /* @__PURE__ */ new Set(["bg"]);
  let r = /* @__PURE__ */ new Set();
  if ((e ?? PSn()) || wS() !== null) r.add("watched");
  if (xbr()) r.add("ccr");
  if (i.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge" || Vc()) r.add("bridge");
  let o = i.CLAUDE_CODE_ENTRYPOINT;
  if (o !== void 0 && c3t.has(o)) r.add("desktop");
  if (Ohi()) r.add("cli");
  if (!ye() && Zl()) r.add("repl");
  return r;
}
function xbr() {
  if (ET("fanout")) return true;
  if (i.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc") return true;
  if (i.CLAUDE_CODE_REMOTE) return l.has(i.CLAUDE_CODE_ENTRYPOINT ?? "") && !process.env.BUGHUNTER_FLEET_SIZE;
  return false;
}
async function iTi(e) {
  return z() && e !== void 0 ? ISn(e) : void 0;
}
var u = { bg: ["state"], watched: ["state"], ccr: ["summary"], bridge: ["summary"], desktop: ["summary"], cli: ["summary"], repl: ["headline"] };
function xhi(e) {
  let r = /* @__PURE__ */ new Set(), o = Phi();
  for (let n of e) {
    if (o.has(n)) continue;
    for (let s of u[n]) r.add(s);
  }
  if (e.has("bg")) r.delete("summary");
  if (k("tengu_classifier_summary_kill", false)) r.delete("summary");
  return r;
}
function Phi() {
  return f(k("tengu_classifier_disabled_surfaces", ""));
}
function f(e) {
  let r = /* @__PURE__ */ new Set();
  for (let o of e.split(",")) {
    let n = o.trim();
    if (!n) continue;
    if (n in u) r.add(n);
    else if (!u8().warnedUnknownDisabledSurface) u8().warnedUnknownDisabledSurface = true, t(`[classifier] tengu_classifier_disabled_surfaces: unknown surface '${n}' ignored`);
  }
  return r;
}
function Ihi(e) {
  if (e.size === 0) return null;
  let r = e.has("state") ? "llm" : !e.has("summary") ? "heuristic" : process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY !== void 0 ? Ne(process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY) ? "llm" : "heuristic" : m();
  return r === "llm" && k("tengu_cobalt_wren", false) ? "heuristic" : r;
}
function m() {
  if (k("tengu_classifier_summary_llm_emit", false)) return "llm";
  return "heuristic";
}
function Ohi() {
  return false;
}
function aTi(e) {
  return hhe() && yhe(e) && k("tengu_projects_thread_recap", false);
}
var a = /* @__PURE__ */ new Map([["blocked", "blocked"], ["done", "completed"], ["working", "review_ready"]]);
function lTi(e, r) {
  if (e.recap) return { status_category: e.state === "failed" ? "failed" : a.get(e.state) ?? "review_ready", status_detail: e.recap.headline, needs_action: e.state === "blocked" ? e.recap.needs : "", recent_action: e.recap.needsYou, description: e.recap.happened, reply: e.recap.reply };
  return { status_category: a.get(e.state) ?? "review_ready", status_detail: e.detail, needs_action: e.state === "blocked" ? e.needs ?? "" : "", recent_action: e.output.result ?? "", ...r?.projectsRecap && { description: aqn(e.detail).text } };
}
function dTi(e, r) {
  let o = xhi(Rhi(false));
  if (!o.has("summary") || Ihi(o) === null) return;
  let n = Nr(e.tool_name), s = !n?.toolName || n.serverName === Vo ? r_e(e.tool_name) : OZn({ serverName: n.serverName, toolName: n.toolName }), c = e.tool_name.startsWith("dialog:") ? { status_category: "blocked", status_detail: "Waiting on a user dialog", needs_action: e.action_description } : { status_category: "blocked", status_detail: `Waiting on permission: ${s}`, needs_action: `Approve or deny ${s}` };
  pze(r, c);
}
export {
  Ihi,
  Ohi,
  Phi,
  Rhi,
  aTi,
  dTi,
  iTi,
  lTi,
  xbr,
  xhi
};

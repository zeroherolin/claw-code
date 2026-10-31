// linux/context/classifier-disabled-surfaces.js — Claude Code 2.1.310（linux）模块 chunk-6pvjd6r3.js
import { Ne } from "../fs/async-hooks.93b1.js";
import { ye, zc } from "./not-admin-owned.js";
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { X4t } from "../remote/local-agent.js";
import { zo } from "../mcp/claude-browser.js";
import { bA } from "../shared/async-hooks.5238.js";
import { Nr } from "../mcp/always-allow.js";
import { Sb, Ut, pbn, mbn, k } from "../settings/global-config-and-gates.js";
import { Jze } from "../remote/chunk-8734517b.js";
import { uhe, fhe } from "./projects-thread-reply-lead-killswitch.js";
import { Zl } from "../telemetry/focus-events.js";
import { t8, Uqn } from "../git/needs-reply.js";
import { Jye } from "../shared/chunk-9f5e078b.js";
import { mZn } from "../shared/chunk-37f396c1.js";
import { z } from "../shared/chunk-be29de51.js";
var l = /* @__PURE__ */ new Set(["remote", "remote_cowork", "remote_desktop", "remote_mobile", "remote_projects"]);
function zgi(e) {
  if (Ut()) return /* @__PURE__ */ new Set(["bg"]);
  let r = /* @__PURE__ */ new Set();
  if ((e ?? pbn()) || Sb() !== null) r.add("watched");
  if (mSr()) r.add("ccr");
  if (i.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge" || zc()) r.add("bridge");
  let o = i.CLAUDE_CODE_ENTRYPOINT;
  if (o !== void 0 && X4t.has(o)) r.add("desktop");
  if (Ygi()) r.add("cli");
  if (!ye() && Zl()) r.add("repl");
  return r;
}
function mSr() {
  if (bA("fanout")) return true;
  if (i.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc") return true;
  if (i.CLAUDE_CODE_REMOTE) return l.has(i.CLAUDE_CODE_ENTRYPOINT ?? "") && !process.env.BUGHUNTER_FLEET_SIZE;
  return false;
}
async function ETi(e) {
  return z() && e !== void 0 ? mbn(e) : void 0;
}
var u = { bg: ["state"], watched: ["state"], ccr: ["summary"], bridge: ["summary"], desktop: ["summary"], cli: ["summary"], repl: ["headline"] };
function Kgi(e) {
  let r = /* @__PURE__ */ new Set(), o = Vgi();
  for (let n of e) {
    if (o.has(n)) continue;
    for (let s of u[n]) r.add(s);
  }
  if (e.has("bg")) r.delete("summary");
  if (k("tengu_classifier_summary_kill", false)) r.delete("summary");
  return r;
}
function Vgi() {
  return f(k("tengu_classifier_disabled_surfaces", ""));
}
function f(e) {
  let r = /* @__PURE__ */ new Set();
  for (let o of e.split(",")) {
    let n = o.trim();
    if (!n) continue;
    if (n in u) r.add(n);
    else if (!t8().warnedUnknownDisabledSurface) t8().warnedUnknownDisabledSurface = true, t(`[classifier] tengu_classifier_disabled_surfaces: unknown surface '${n}' ignored`);
  }
  return r;
}
function qgi(e) {
  if (e.size === 0) return null;
  let r = e.has("state") ? "llm" : !e.has("summary") ? "heuristic" : process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY !== void 0 ? Ne(process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY) ? "llm" : "heuristic" : m();
  return r === "llm" && k("tengu_cobalt_wren", false) ? "heuristic" : r;
}
function m() {
  if (k("tengu_classifier_summary_llm_emit", false)) return "llm";
  return "heuristic";
}
function Ygi() {
  return false;
}
function kTi(e) {
  return uhe() && fhe(e) && k("tengu_projects_thread_recap", false);
}
var a = /* @__PURE__ */ new Map([["blocked", "blocked"], ["done", "completed"], ["working", "review_ready"]]);
function TTi(e, r) {
  if (e.recap) return { status_category: e.state === "failed" ? "failed" : a.get(e.state) ?? "review_ready", status_detail: e.recap.headline, needs_action: e.state === "blocked" ? e.recap.needs : "", recent_action: e.recap.needsYou, description: e.recap.happened, reply: e.recap.reply };
  return { status_category: a.get(e.state) ?? "review_ready", status_detail: e.detail, needs_action: e.state === "blocked" ? e.needs ?? "" : "", recent_action: e.output.result ?? "", ...r?.projectsRecap && { description: Uqn(e.detail).text } };
}
function ATi(e, r) {
  let o = Kgi(zgi(false));
  if (!o.has("summary") || qgi(o) === null) return;
  let n = Nr(e.tool_name), s = !n?.toolName || n.serverName === zo ? Jye(e.tool_name) : mZn({ serverName: n.serverName, toolName: n.toolName }), c = e.tool_name.startsWith("dialog:") ? { status_category: "blocked", status_detail: "Waiting on a user dialog", needs_action: e.action_description } : { status_category: "blocked", status_detail: `Waiting on permission: ${s}`, needs_action: `Approve or deny ${s}` };
  Jze(r, c);
}
export {
  ATi,
  ETi,
  Kgi,
  TTi,
  Vgi,
  Ygi,
  kTi,
  mSr,
  qgi,
  zgi
};

// linux/agents/chunk-e7d109ea.js — Claude Code 2.1.310（linux）模块 chunk-s72xe0e3.js
import { qni, Koi } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
import { X8s, BE } from "../context/tool-result-clearing-after-idle-server-report.js";
import { lX } from "../remote/local-agent.js";
import { ht } from "./chunk-5531d42a.js";
import { sz } from "../models/model-capability-off-from-client-data.js";
import { Ex, F6s, U6s } from "../mcp/tool-search-unsupported-models.js";
import { qa, OWt, GY } from "../tools/structured-output-tool.js";
import { pu } from "../workflows/workflow-subagent.js";
import { $O } from "../shared/chunk-fd6326ea.js";
import { ki } from "../shared/chunk-5eb2276b.js";
var jP = "ReportFindings", C0o = "Report code-review findings as a typed list so the host UI can render them. Use this only when the active code-review instructions tell you to report findings with this tool; otherwise follow whatever output format those instructions specify. When reporting a review's results, call it once with the verified findings ranked most-severe first (empty array if nothing survived verification) and do not also print the findings as text. When re-reporting after applying fixes (only if the apply instructions ask for it), set `outcome` on each finding to what actually happened.";
var $D = "EnterWorktree";
var sHe = "ShareOnboardingGuide", R0o = `Upload the ONBOARDING.md in the current directory and return a share link teammates can open in Claude Code. Call this after the user has confirmed the final content.

When called with the default mode='check': if a local ONBOARDING.md is present, uploads it to the most-recently-updated org guide (or creates one if none exist) and returns a fresh link. If no local file is present, returns the existing link without uploading (status: has_existing).`;
var u = import.meta.require("../shared/brief-enforce-sentinel.js").BRIEF_TOOL_NAME, d = /* @__PURE__ */ new Set([jP, pu, sHe]), c = `Fetches full schema definitions for deferred tools so they can be called.

Deferred tools appear by name in <system-reminder> messages.`, m = " Until fetched, only the name is known — there is no parameter schema, so the tool cannot be invoked.", p = ` Until fetched, only the name is known — there is no parameter schema, so calling the tool fails with InputValidationError. When any instruction, system reminder, or other tool's description names a deferred tool, fetch it with query "select:<name>" before calling it.`, h = ` This tool takes a query, matches it against the deferred tool list, and returns the matched tools' complete JSONSchema definitions inside a <functions> block. Once a tool's schema appears in that result, it is callable exactly like any tool defined at the top of the prompt.

Result format: each matched tool appears as one <function>{"description": "...", "name": "...", "parameters": {...}}</function> line inside the <functions> block — the same encoding as the tool list at the top of this prompt.

Query forms:
- "select:Read,Edit,Grep" — fetch these exact tools by name
- "notebook jupyter" — keyword search, up to max_results best matches
- "+slack send" — require "slack" in the name, rank by remaining terms`;
function RG(e, n) {
  return qni(e.name) ?? oze(e, n);
}
function oze(e, n) {
  if (e.alwaysLoad === true) return false;
  if (O(e, n)) return false;
  if (OWt()) return false;
  return T(e);
}
function T(e) {
  if (e.isMcp === true) return true;
  if (F6s() && BE(e, d)) return true;
  return e.shouldDefer === true;
}
function O(e, n) {
  return l(e, n) || E(e) || f(e);
}
function l(e, n = Ex()) {
  if (BE(e, n)) return true;
  if (e.isMcp === true) return false;
  if (e.name === ki) return true;
  if (e.name === qa) return true;
  if (e.name === ht) {
    let r = import.meta.require("./build-child-message.js");
    if (r.isForkSubagentEnabled()) return true;
  }
  if (e.name === u) return true;
  if (f(e) && !U6s()) return true;
  return false;
}
function E(e) {
  return e.isMcp !== true && e.name === $D && i.CLAUDE_CODE_SESSION_KIND === "bg";
}
function f(e) {
  return e.isMcp !== true && e.name === $O && lX();
}
function qK(e, n, r, { toolSearchAbsent: t = false, placements: s = "hooks", nonDeferrableBuiltins: o } = {}) {
  let a = s === "hooks" ? qni(e.name) : void 0;
  if (a !== void 0) return a;
  if (t) {
    if (n === void 0) return false;
  } else if (n === void 0) return s === "hooks" ? RG(e, o) : oze(e, o);
  if (r !== void 0 && GY(r)) return false;
  if (l(e, o)) return false;
  return !n.has(e.name);
}
function x0o(e) {
  return e.whenToUse !== void 0 && RG(e) ? `${e.name}: ${e.whenToUse}` : e.name;
}
function Q$r(e = {}) {
  return (sz(e) ? X8s : c) + (Koi() ? p : m) + h;
}
function Z$r(e, { heldInlineTools: n, nonDeferrableBuiltins: r, listed: t }) {
  return n !== void 0 && !RG(e, r) && !t.has(e.name);
}
function P0o(e, n) {
  if (!qK(e, n.heldInlineTools, void 0, { nonDeferrableBuiltins: n.nonDeferrableBuiltins }) || n.announced.has(e.name)) return;
  if (n.listed.has(e.name)) return n.withdrawn.has(e.name) ? "again" : void 0;
  return Z$r(e, n) ? "surfaced" : void 0;
}
export {
  $D,
  C0o,
  P0o,
  Q$r,
  R0o,
  RG,
  Z$r,
  jP,
  oze,
  qK,
  sHe,
  x0o
};

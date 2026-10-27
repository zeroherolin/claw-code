// agents/chunk-1tgz1139.js — Claude Code 2.1.310 模块 chunk-1tgz1139.js
import { Ori, Psi } from "../settings/global-config-and-gates.27xj.js";
import { i } from "../shared/environment.9a41.js";
import { HYs, jv } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
import { hX } from "../remote/local-agent.we9a.js";
import { ht } from "./chunk-zwvcbrvr.js";
import { mG } from "../models/model-capability-off-from-client-data.g3tc.js";
import { Tx, v9s, k9s } from "../mcp/tool-search-unsupported-models.9b5s.js";
import { Ya, VWt, t4 } from "../tools/structured-output-tool.j28z.js";
import { mu } from "../workflows/workflow-subagent.xrcd.js";
import { WO } from "../shared/chunk-vtk2arn4.js";
import { ki } from "../shared/chunk-zx7a5yyq.js";
var zP = "ReportFindings", tNo = "Report code-review findings as a typed list so the host UI can render them. Use this only when the active code-review instructions tell you to report findings with this tool; otherwise follow whatever output format those instructions specify. When reporting a review's results, call it once with the verified findings ranked most-severe first (empty array if nothing survived verification) and do not also print the findings as text. When re-reporting after applying fixes (only if the apply instructions ask for it), set `outcome` on each finding to what actually happened.";
var j0 = "EnterWorktree";
var uHe = "ShareOnboardingGuide", nNo = `Upload the ONBOARDING.md in the current directory and return a share link teammates can open in Claude Code. Call this after the user has confirmed the final content.

When called with the default mode='check': if a local ONBOARDING.md is present, uploads it to the most-recently-updated org guide (or creates one if none exist) and returns a fresh link. If no local file is present, returns the existing link without uploading (status: has_existing).`;
var u = import.meta.require("../shared/brief-enforce-sentinel.xrby.js").BRIEF_TOOL_NAME, d = /* @__PURE__ */ new Set([zP, mu, uHe]), c = `Fetches full schema definitions for deferred tools so they can be called.

Deferred tools appear by name in <system-reminder> messages.`, m = " Until fetched, only the name is known — there is no parameter schema, so the tool cannot be invoked.", p = ` Until fetched, only the name is known — there is no parameter schema, so calling the tool fails with InputValidationError. When any instruction, system reminder, or other tool's description names a deferred tool, fetch it with query "select:<name>" before calling it.`, h = ` This tool takes a query, matches it against the deferred tool list, and returns the matched tools' complete JSONSchema definitions inside a <functions> block. Once a tool's schema appears in that result, it is callable exactly like any tool defined at the top of the prompt.

Result format: each matched tool appears as one <function>{"description": "...", "name": "...", "parameters": {...}}</function> line inside the <functions> block — the same encoding as the tool list at the top of this prompt.

Query forms:
- "select:Read,Edit,Grep" — fetch these exact tools by name
- "notebook jupyter" — keyword search, up to max_results best matches
- "+slack send" — require "slack" in the name, rank by remaining terms`;
function F2(e, n) {
  return Ori(e.name) ?? mGe(e, n);
}
function mGe(e, n) {
  if (e.alwaysLoad === true) return false;
  if (O(e, n)) return false;
  if (VWt()) return false;
  return T(e);
}
function T(e) {
  if (e.isMcp === true) return true;
  if (v9s() && jv(e, d)) return true;
  return e.shouldDefer === true;
}
function O(e, n) {
  return l(e, n) || E(e) || f(e);
}
function l(e, n = Tx()) {
  if (jv(e, n)) return true;
  if (e.isMcp === true) return false;
  if (e.name === ki) return true;
  if (e.name === Ya) return true;
  if (e.name === ht) {
    let r = import.meta.require("./build-child-message.5pdv.js");
    if (r.isForkSubagentEnabled()) return true;
  }
  if (e.name === u) return true;
  if (f(e) && !k9s()) return true;
  return false;
}
function E(e) {
  return e.isMcp !== true && e.name === j0 && i.CLAUDE_CODE_SESSION_KIND === "bg";
}
function f(e) {
  return e.isMcp !== true && e.name === WO && hX();
}
function sV(e, n, r, { toolSearchAbsent: t = false, placements: s = "hooks", nonDeferrableBuiltins: o } = {}) {
  let a = s === "hooks" ? Ori(e.name) : void 0;
  if (a !== void 0) return a;
  if (t) {
    if (n === void 0) return false;
  } else if (n === void 0) return s === "hooks" ? F2(e, o) : mGe(e, o);
  if (r !== void 0 && t4(r)) return false;
  if (l(e, o)) return false;
  return !n.has(e.name);
}
function rNo(e) {
  return e.whenToUse !== void 0 && F2(e) ? `${e.name}: ${e.whenToUse}` : e.name;
}
function _$r(e = {}) {
  return (mG(e) ? HYs : c) + (Psi() ? p : m) + h;
}
function S$r(e, { heldInlineTools: n, nonDeferrableBuiltins: r, listed: t }) {
  return n !== void 0 && !F2(e, r) && !t.has(e.name);
}
function oNo(e, n) {
  if (!sV(e, n.heldInlineTools, void 0, { nonDeferrableBuiltins: n.nonDeferrableBuiltins }) || n.announced.has(e.name)) return;
  if (n.listed.has(e.name)) return n.withdrawn.has(e.name) ? "again" : void 0;
  return S$r(e, n) ? "surfaced" : void 0;
}
export {
  F2,
  S$r,
  _$r,
  j0,
  mGe,
  nNo,
  oNo,
  rNo,
  sV,
  tNo,
  uHe,
  zP
};

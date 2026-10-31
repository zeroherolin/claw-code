// linux/auth/allowed-taints-clean.js — Claude Code 2.1.310（linux）模块 chunk-88c2sbvj.js
import { __asset_src } from "../../runtime/assets.js";
import { J } from "../context/not-admin-owned.js";
import { fk } from "./oauth-2025-04-20.js";
import { Ae, Ci } from "../models/total-tokens-reminder.js";
import { oy } from "../mcp/allowed-warning.js";
import { ua, Ng, nf, T5, k } from "../settings/global-config-and-gates.js";
import { c_ } from "../workflows/chunk-a1595c7e.js";
import { on, Bzr, Pw } from "./env-quad.js";
import { Ce } from "../vendor/react/chunk-0b0bf45d.js";
var r = Ce(oy(), 1);
var t = "tengu_orford_ness", n = "2.1.193";
function l() {
  try {
    return k(t, false);
  } catch {
    return false;
  }
}
function _2o() {
  let e = Pw();
  if (!on("allow_error_reporting")) {
    if (e === null) return "blocked_cache_miss";
    return e.restrictions.allow_error_reporting?.allowed === false ? "blocked_restriction" : "blocked_tainted";
  }
  let o = Bzr();
  if (e !== null) return o ? "allowed_taints_clean" : "blocked_unsettled";
  if (nf() && !T5(fk)) return "blocked_scopeless_oauth";
  if (ua().source === "ANTHROPIC_AUTH_TOKEN") return "blocked_auth_token_env";
  if (Ng()) return "blocked_api_key_helper";
  return o ? "allowed_untaintable" : "blocked_unsettled";
}
function b2o() {
  let e = _2o();
  return e === "allowed_taints_clean" || e === "allowed_untaintable";
}
function g7s() {
  if (process.env.DISABLE_ERROR_REPORTING) return false;
  if (J()) return false;
  if (c_()) return false;
  if (Ae() !== "firstParty" || !Ci()) return false;
  if (!r.gte(r.coerce({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION)?.version ?? { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("linux/hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: process.arch === "x64" ? "default" : void 0 }.VERSION, n)) return false;
  if (!b2o()) return false;
  return l();
}
export {
  _2o,
  b2o,
  g7s
};

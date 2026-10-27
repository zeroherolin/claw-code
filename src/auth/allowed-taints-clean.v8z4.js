// auth/allowed-taints-clean.v8z4.js — Claude Code 2.1.310 模块 chunk-v8z4y50z.js
import { __asset_src } from "../runtime/assets.js";
import { J } from "../context/not-admin-owned.ersa.js";
import { fk } from "./oauth-2025-04-20.ke15.js";
import { Te, Ai } from "../models/total-tokens-reminder.psq3.js";
import { oy } from "../mcp/allowed-warning.j2d4.js";
import { ua, Ng, np, L4, k } from "../settings/global-config-and-gates.27xj.js";
import { p_ } from "../workflows/chunk-exaq0a52.js";
import { on, lzr, Iw } from "./env-quad.nmae.js";
import { Ae } from "../vendor/react/chunk-meds60nn.js";
var r = Ae(oy(), 1);
var t = "tengu_orford_ness", n = "2.1.193";
function l() {
  try {
    return k(t, false);
  } catch {
    return false;
  }
}
function Vzo() {
  let e = Iw();
  if (!on("allow_error_reporting")) {
    if (e === null) return "blocked_cache_miss";
    return e.restrictions.allow_error_reporting?.allowed === false ? "blocked_restriction" : "blocked_tainted";
  }
  let o = lzr();
  if (e !== null) return o ? "allowed_taints_clean" : "blocked_unsettled";
  if (np() && !L4(fk)) return "blocked_scopeless_oauth";
  if (ua().source === "ANTHROPIC_AUTH_TOKEN") return "blocked_auth_token_env";
  if (Ng()) return "blocked_api_key_helper";
  return o ? "allowed_untaintable" : "blocked_unsettled";
}
function Kzo() {
  let e = Vzo();
  return e === "allowed_taints_clean" || e === "allowed_untaintable";
}
function ZQs() {
  if (process.env.DISABLE_ERROR_REPORTING) return false;
  if (J()) return false;
  if (p_()) return false;
  if (Te() !== "firstParty" || !Ai()) return false;
  if (!r.gte(r.coerce({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION)?.version ?? { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __asset_src("hooks/hooks-worker.js"), DD_SOURCEMAP_GROUP: "darwin" }.VERSION, n)) return false;
  if (!Kzo()) return false;
  return l();
}
export {
  Kzo,
  Vzo,
  ZQs
};

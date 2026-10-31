// darwin/mcp/repo-rules-read-failed.js — Claude Code 2.1.310（darwin）模块 chunk-nm96dqej.js
import { bo } from "../context/not-admin-owned.js";
import { m, p } from "../telemetry/chunk-9d6962d2.js";
import { Ll } from "../context/tool-result-clearing-after-idle-server-report.js";
import { swe } from "../settings/repo-rules-ask-malformed.js";
import { LJr } from "../settings/chunk-16f4230b.js";
var bfe = "repo_rules_unread";
function gvi(e, o) {
  let t = swe(e, o.meta);
  return t instanceof Promise ? t.then((r) => s(r, o)) : s(t, o);
}
function s(e, o) {
  if (e.refused !== void 0) return (e.refused.cause === "repo_rules_read_failed" ? m : p)("mcp_serve_file_call", e.refused.cause), bfe;
  return e.repoRules === void 0 ? o.launchPermissionContext : n(o.launchPermissionContext, e.repoRules, o);
}
function n(e, o, { session: t }) {
  let r = e ?? Ll();
  return { ...r, ...LJr({ alwaysDenyRules: {}, alwaysAskRules: {} }, r, bo(t).originalCwd, o, "upload") };
}
export {
  bfe,
  gvi
};

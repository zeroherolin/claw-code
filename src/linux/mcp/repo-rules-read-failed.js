// linux/mcp/repo-rules-read-failed.js — Claude Code 2.1.310（linux）模块 chunk-ma6pmm2f.js
import { So } from "../context/not-admin-owned.js";
import { m, f } from "../telemetry/chunk-9d6962d2.js";
import { Ll } from "../context/tool-result-clearing-after-idle-server-report.js";
import { ZSe } from "../settings/repo-rules-ask-malformed.js";
import { aQr } from "../settings/chunk-16f4230b.js";
var ppe = "repo_rules_unread";
function Ovi(e, o) {
  let t = ZSe(e, o.meta);
  return t instanceof Promise ? t.then((r) => s(r, o)) : s(t, o);
}
function s(e, o) {
  if (e.refused !== void 0) return (e.refused.cause === "repo_rules_read_failed" ? m : f)("mcp_serve_file_call", e.refused.cause), ppe;
  return e.repoRules === void 0 ? o.launchPermissionContext : n(o.launchPermissionContext, e.repoRules, o);
}
function n(e, o, { session: t }) {
  let r = e ?? Ll();
  return { ...r, ...aQr({ alwaysDenyRules: {}, alwaysAskRules: {} }, r, So(t).originalCwd, o, "upload") };
}
export {
  Ovi,
  ppe
};

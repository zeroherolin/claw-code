// darwin/telemetry/org-config-required.js — Claude Code 2.1.310（darwin）模块 chunk-8xh6ycam.js
var t = ["team", "enterprise"];
function YSn(e) {
  return typeof e === "string" && t.includes(e);
}
var SRe = "tengu_org_config_required", jue = { enabled: false, plans: [], percent: 0, graceTtlHours: 96, budgetMs: 6e3, hostTokens: false, exemptReasons: [], refuseNotEntitled: false };
function t5o(e) {
  switch (e) {
    case "ok":
    case "none_configured":
    case "not_required":
      return "fetched";
    case "refused_credential":
    case "refused_not_entitled":
      return "refused";
    case "blocked_by_intermediary":
      return "intermediary";
    case "refused_other":
    case "unavailable_timeout":
    case "unavailable_connect":
    case "unavailable_server":
    case "unavailable_rate_limited":
    case "unavailable_credential_refresh":
    case "unavailable_pending":
    case "unavailable_settings_unusable":
      return "unavailable";
    case "client_no_credentials":
    case "client_error":
      return "client";
    case "not_attempted":
      return "not_attempted";
  }
}
export {
  SRe,
  YSn,
  jue,
  t5o
};

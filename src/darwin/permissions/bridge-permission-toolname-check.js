// darwin/permissions/bridge-permission-toolname-check.js — Claude Code 2.1.310（darwin）模块 chunk-pbh3r4v6.js
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { pje } from "../core/conversation-engine.js";
import { o, oe, u, me, B } from "../vendor/zod/string-format.js";
var r = f(() => u({ behavior: B(["allow", "deny"]), updatedInput: me(o(), oe()).optional().transform((e) => e && Object.keys(e).length === 0 ? void 0 : e), updatedPermissions: pje("refused", "bridge client"), message: o().optional().catch(void 0), toolName: o().optional().catch(void 0) }));
function Evs(e) {
  let s = r().safeParse(e);
  if (!s.success) {
    t(`Malformed bridge permission response ignored: ${s.error.issues[0]?.message ?? "unknown"}`, { level: "warn" }), m("permission_bridge_relay", "permission_response_malformed");
    return;
  }
  if (typeof e === "object" && e !== null && e.updatedPermissions !== void 0 && s.data.updatedPermissions === void 0) return { ...s.data, updatedPermissionsDropped: true };
  return s.data;
}
function K9e(e, s, n) {
  if (typeof e !== "string") return false;
  if (!Qct(e, s)) return g("bridge_permission_toolname_check"), false;
  return t(`Ignoring can_use_tool control_response for request_id=${n}: toolName '${e}' does not match pending '${s}'`, { level: "warn" }), m("bridge_permission_toolname_check", "toolname_mismatch"), true;
}
function Qct(e, s) {
  return typeof e === "string" && e !== s;
}
function d9(e) {
  return (e.split("__").pop() || e).replace(/_/g, " ").replace(/\b\w/g, (n) => n.toUpperCase());
}
export {
  Evs,
  K9e,
  Qct,
  d9
};

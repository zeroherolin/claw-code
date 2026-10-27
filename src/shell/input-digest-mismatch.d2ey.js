// shell/input-digest-mismatch.d2ey.js — Claude Code 2.1.310 模块 chunk-d2eyfa9r.js
import { _, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Ha } from "./chunk-0gmzdmcr.js";
import { v3 } from "../context/team-memory-sync.0s3j.js";
function u(e) {
  if (!Array.isArray(e)) return [];
  let n = v3(), s = [];
  for (let o of e) {
    let i = n.safeParse(o);
    if (i.success) s.push(i.data);
    else t(`[SwarmPermissionPoller] Dropping malformed permissionUpdate entry: ${i.error.message}`, { level: "warn" });
  }
  return s;
}
function PFn(e) {
  Ha().swarmPermissions.pending.set(e.requestId, e), t(`[SwarmPermissionPoller] Registered callback for request ${e.requestId}`);
}
function cZt(e) {
  Ha().swarmPermissions.pending.delete(e), t(`[SwarmPermissionPoller] Unregistered callback for request ${e}`);
}
function cTs(e) {
  return Ha().swarmPermissions.pending.has(e);
}
function uTs() {
  Ha().swarmPermissions.clear();
}
var d = true;
function a(e, n) {
  let s = n.toolUseId === void 0 ? d : n.toolUseId === e.toolUseId, o = n.approvedRequest, i = o === void 0 ? d : o.tool_use_id === e.toolUseId && o.tool_name === e.toolName, r = o === void 0 ? d : o.input_digest === e.inputDigest;
  if (!s || !i) return "mismatch";
  if (!r) return "input_digest_mismatch";
  return n.toolUseId === void 0 || o === void 0 ? "unbound" : "bound";
}
function uZt(e) {
  let n = Ha().swarmPermissions.pending, s = n.get(e.requestId);
  if (!s) return t(`[SwarmPermissionPoller] No callback registered for mailbox response ${_(e.requestId)}`), false;
  n.delete(e.requestId);
  let o = a(s, e);
  if (o === "mismatch" || o === "input_digest_mismatch") {
    let i = e.approvedRequest, r = e.decision === "approved" ? "approval" : "denial", l = o === "input_digest_mismatch" ? `this ${_(s.toolName)} call (${_(s.toolUseId)}), but its input digest differs` : `${i ? `${_(i.tool_name)} (${_(i.tool_use_id)})` : _(e.toolUseId)}, not this ${_(s.toolName)} call (${_(s.toolUseId)})`;
    return t(`[SwarmPermissionPoller] Refusing ${r} for request ${_(e.requestId)}: the leader answered ${l}`, { level: "warn" }), s.onRefuse(`The ${r} did not describe this tool call, so it was refused.`, r), true;
  }
  if (t(`[SwarmPermissionPoller] Processing mailbox response for request ${_(e.requestId)}: ${e.decision} (${o})`), o === "unbound") s.onUnboundVerdict();
  if (e.decision === "approved") {
    let i = u(e.permissionUpdates), r = e.updatedInput;
    s.onAllow(r, i);
  } else s.onReject(e.feedback);
  return true;
}
function pTs(e) {
  Ha().swarmPermissions.pendingSandbox.set(e.requestId, e), t(`[SwarmPermissionPoller] Registered sandbox callback for request ${e.requestId}`);
}
function fTs(e) {
  return Ha().swarmPermissions.pendingSandbox.has(e);
}
function mTs(e) {
  let n = Ha().swarmPermissions.pendingSandbox, s = n.get(e.requestId);
  if (!s) return t(`[SwarmPermissionPoller] No sandbox callback registered for request ${_(e.requestId)}`), false;
  if (n.delete(e.requestId), s.host !== e.host) return t(`[SwarmPermissionPoller] Refusing sandbox ${e.allow === true ? "allow" : "deny"} for request ${_(e.requestId)}: the leader answered for ${_(e.host)}, not ${_(s.host)}`, { level: "warn" }), s.resolve(false), true;
  return t(`[SwarmPermissionPoller] Processing sandbox response for request ${_(e.requestId)}: allow=${_(e.allow)}`), s.resolve(e.allow), true;
}
export {
  PFn,
  cTs,
  cZt,
  fTs,
  mTs,
  pTs,
  uTs,
  uZt
};

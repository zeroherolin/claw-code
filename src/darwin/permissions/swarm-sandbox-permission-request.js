// darwin/permissions/swarm-sandbox-permission-request.js — Claude Code 2.1.310（darwin）模块 chunk-t4gw660s.js
import { g, m } from "../telemetry/chunk-9d6962d2.js";
import { _, ee, t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { _I, ov, oc, zx } from "../agents/in-process-teammate.32be.js";
import { qE, $No, UNo, BNo, jNo } from "../context/envelope-pinned-id.js";
import { Xa } from "../fs/reply-across-default-dirs.js";
import { Hb } from "../agents/swarm-team-file-update.js";
import { createHash as b } from "crypto";
var S = 32;
function BJ(e, r) {
  return b("sha256").update(e).update("\0").update(_(c(r))).digest("hex");
}
function c(e, r = 0) {
  if (r > S) return e;
  if (Array.isArray(e)) return e.map((n) => c(n, r + 1));
  if (typeof e === "object" && e !== null) return Object.fromEntries(Object.entries(e).sort(([n], [o]) => n < o ? -1 : n > o ? 1 : 0).map(([n, o]) => [n, c(o, r + 1)]));
  return e;
}
function W1t(e, r) {
  let n = ee(_(r));
  return BJ(e, n);
}
function k() {
  return `perm-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
function Q5n(e) {
  let r = e.teamName || oc(), n = e.workerId || _I(), o = e.workerName || ov(), i = e.workerColor || zx();
  if (!r) throw Error("Team name is required for permission requests");
  if (!n) throw Error("Worker ID is required for permission requests");
  if (!o) throw Error("Worker name is required for permission requests");
  return { id: k(), workerId: n, workerName: o, workerColor: i, teamName: r, toolName: e.toolName, toolUseId: e.toolUseId, description: e.description, input: e.input, permissionSuggestions: e.permissionSuggestions || [], createdAt: Date.now() };
}
function y(e) {
  if (!(e || oc())) return false;
  let n = _I();
  return !n || n === "team-lead";
}
function bGe() {
  let e = oc(), r = _I();
  return !!e && !!r && !y();
}
async function x(e, r) {
  let n = e || oc();
  if (!n) return null;
  if (!await Hb(n, r)) return t(`[PermissionSync] Team file not found for team: ${n}`), null;
  return Xa;
}
async function u(e, r, n, o, i) {
  if (await qE(e, r, n, i) === void 0) return t(`[PermissionSync] FAILED to deliver ${o}`, { level: "error" }), false;
  return t(`[PermissionSync] Sent ${o}`), true;
}
async function Z5n(e, r) {
  let n = await x(e.teamName, r);
  if (!n) return t("[PermissionSync] Cannot send permission request: leader name not found"), false;
  try {
    let o = $No({ request_id: e.id, agent_id: e.workerName, tool_name: e.toolName, tool_use_id: e.toolUseId, description: e.description, input: e.input, permission_suggestions: e.permissionSuggestions });
    return await u(n, { from: e.workerName, text: _(o), timestamp: (/* @__PURE__ */ new Date()).toISOString(), color: e.workerColor }, e.teamName, `permission request ${_(e.id)} to leader ${_(n)} via mailbox`, r);
  } catch (o) {
    return t(`[PermissionSync] Failed to send permission request via mailbox: ${o}`), l(o), false;
  }
}
async function TNo(e, r, n, o, i, a) {
  let d = o || oc();
  if (!d) return t("[PermissionSync] Cannot send permission response: team name not found"), false;
  try {
    let s = UNo({ request_id: n, subtype: r.decision === "approved" ? "success" : "error", error: r.feedback, updated_input: r.updatedInput, permission_updates: r.permissionUpdates, tool_use_id: a, approved_request: r.approvedRequest });
    return await u(e, { from: Xa, text: _(s), timestamp: (/* @__PURE__ */ new Date()).toISOString() }, d, `permission response for ${_(n)} to worker ${_(e)} via mailbox`, i);
  } catch (s) {
    return t(`[PermissionSync] Failed to send permission response via mailbox: ${s}`), l(s), false;
  }
}
function cKs() {
  return `sandbox-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
async function uKs(e, r, n, o) {
  let i = n || oc();
  if (!i) return t("[PermissionSync] Cannot send sandbox permission request: team name not found"), m("swarm_sandbox_permission_request", "no_team_name"), false;
  let a = await x(i, o);
  if (!a) return t("[PermissionSync] Cannot send sandbox permission request: leader name not found"), m("swarm_sandbox_permission_request", "no_leader"), false;
  let d = _I(), s = ov(), f = zx();
  if (!d || !s) return t("[PermissionSync] Cannot send sandbox permission request: worker ID or name not found"), m("swarm_sandbox_permission_request", "no_worker_identity"), false;
  try {
    let p = BNo({ requestId: r, workerId: d, workerName: s, workerColor: f, host: e }), w = await u(a, { from: s, text: _(p), timestamp: (/* @__PURE__ */ new Date()).toISOString(), color: f }, i, `sandbox permission request ${_(r)} for host ${_(e)} to leader ${_(a)} via mailbox`, o);
    if (w) g("swarm_sandbox_permission_request");
    else m("swarm_sandbox_permission_request", "mailbox_write_failed");
    return w;
  } catch (p) {
    return t(`[PermissionSync] Failed to send sandbox permission request via mailbox: ${p}`), l(p), m("swarm_sandbox_permission_request", "mailbox_write_failed"), false;
  }
}
async function F$r(e, r, n, o, i, a) {
  let d = i || oc();
  if (!d) return t("[PermissionSync] Cannot send sandbox permission response: team name not found"), false;
  try {
    let s = jNo({ requestId: r, host: n, allow: o });
    return await u(e, { from: Xa, text: _(s), timestamp: (/* @__PURE__ */ new Date()).toISOString() }, d, `sandbox permission response for ${_(r)} (host: ${_(n)}, allow: ${_(o)}) to worker ${_(e)} via mailbox`, a);
  } catch (s) {
    return t(`[PermissionSync] Failed to send sandbox permission response via mailbox: ${s}`), l(s), false;
  }
}
export {
  BJ,
  F$r,
  Q5n,
  TNo,
  W1t,
  Z5n,
  bGe,
  cKs,
  uKs
};

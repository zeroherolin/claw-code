// linux/permissions/worker-permission-mode-restore.js — Claude Code 2.1.310（linux）模块 chunk-b3gj9f0k.js
import { c, ce } from "../agents/third-party.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { Rf } from "../artifacts/cowritten-artifact-html.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { Qv } from "../tools/device-session-limit.js";
import { ql } from "../shell/invalid-type.js";
import { Hy, Wn } from "../settings/global-config-and-gates.js";
import { fh } from "./classifier-transcript-too-long.js";
import { oo } from "./bot-protected-tengu-atomic-magpie.js";
import { _L } from "./auto-mode-config.js";
import { LK, Ah } from "../core/conversation-engine.js";
import { e3 } from "../tools/exit-plan-mode-tool.js";
import { ec } from "../shared/chunk-11bd2044.js";
var R = "tengu_tranquil_fern";
function f() {
  return Wn(R, true);
}
function tao() {
  return { source: "none", trustedMode: void 0, recordedMode: "absent" };
}
function iys(e) {
  if (e.source !== "none") return "restored";
  return (e.recordedMode === "plan" || e.transcriptOpen === true) && e.trustedMode !== "plan" ? "declined" : "none";
}
function g(e) {
  if (e === void 0 || e === null) return "absent";
  return typeof e === "string" && fh(e) || "invalid";
}
function P(e) {
  return { ..._L(e.mode, "plan", e), mode: "plan" };
}
function S(e) {
  return { ...e, toolPermissionContext: P(e.toolPermissionContext) };
}
function _(e) {
  return f() && e.mode !== "plan" && e3.isEnabled() && !oo(e, e3);
}
function Igi(e, n, { forkSession: o, transcript: s } = {}) {
  if (n.recordedMode = g(e?.worker_permission_mode), n.recordedMode === "invalid") t("[planModeResume] ignoring unrecognized internal_metadata.worker_permission_mode", { level: "warn" });
  if (n.recordedMode === "plan" && s && f()) n.recordTranscriptState = f_r(s);
  return (r) => {
    if (n.trustedMode ??= r.toolPermissionContext.mode, n.recordedMode !== "plan" || o || !_(r.toolPermissionContext)) return r;
    return n.source = "internal", t(`[planModeResume] re-entering plan mode from the prior worker's record (was ${r.toolPermissionContext.mode})`), S(r);
  };
}
function nao(e, n, { planModeOnResume: o, restored: s, restartedWorker: r }) {
  let i = Boolean(s?.external || s?.internal);
  if (r && !i) return;
  if (e.enableWorkerPermissionModeRecord(), o !== void 0 && i) e.notifyInternalMetadataChanged({ worker_permission_mode: ql(n) });
}
function ays(e, n, o, s) {
  let r = s && n.source === "none" && (n.recordedMode === "absent" || n.recordedMode === "invalid") && f() && f_r(e) === "open";
  if (r) n.transcriptOpen = true;
  o((i) => {
    if (n.trustedMode ??= i.toolPermissionContext.mode, !r || i.toolPermissionContext.mode === "plan" || oo(i.toolPermissionContext, e3)) return i;
    return n.source = "transcript", t(`[planModeResume] re-entering plan mode from the transcript's open plan segment (was ${i.toolPermissionContext.mode})`), S(i);
  });
}
function f_r(e) {
  let n = `<${Rf}>/plan</${Rf}>`, o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), r = x(e), i = false, d = () => i ? "none" : "open";
  for (let M = e.length - 1; M >= 0; M--) {
    let l = e[M];
    if (l.type === "attachment") {
      let m = l.attachment.type;
      if (m === "plan_mode" || m === "plan_mode_reentry") return d();
      if (m === "plan_mode_exit") return "exited";
    } else if (l.type === "assistant" && Array.isArray(l.message.content)) {
      let m = l.message.content;
      for (let p = m.length - 1; p >= 0; p--) {
        let u = m[p];
        if (u.type !== "tool_use") continue;
        if (u.name === ec && s.has(u.id) && !o.has(u.id) && !r.has(u.id)) return "exited";
        if (u.name === Qv && s.has(u.id) && (!o.has(u.id) || r.has(u.id))) return d();
      }
    } else if (l.type === "user" && LK(l)) {
      let m = l.message.content;
      if (Array.isArray(m)) {
        for (let p of m) if (p.type === "tool_result") (p.is_error || y(l, p.content) ? o : s).add(p.tool_use_id);
      }
    } else if (l.type === "user") {
      if (Ah(l)?.trimStart().startsWith(n)) return d();
      if (l.permissionMode === "plan") return d();
      if (l.permissionMode !== void 0 && !l.isMeta && Hy(l.origin)) i = true;
    }
  }
  return "none";
}
function x(e) {
  let n = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
  for (let s of e) {
    if (s.type !== "assistant" || !Array.isArray(s.message.content)) continue;
    for (let r of s.message.content) {
      if (r.type !== "tool_use") continue;
      if (n.has(r.id)) o.add(r.id);
      else n.add(r.id);
    }
  }
  return o;
}
function y(e, n) {
  let o = e.toolUseResult;
  if (o !== null && typeof o === "object" && o.awaitingLeaderApproval === true) return true;
  return typeof n === "string" && n.startsWith("Your plan has been submitted to the team lead");
}
function p_r({ sdkUrl: e, permissionModeSuppliedOnInvocation: n, forkSession: o }) {
  if (!e3.isEnabled() || o) return false;
  return !!e || n === false;
}
function rao(e, n, o) {
  let s = tao();
  return ays(e, s, o, p_r(n)), oao(s, { lane: n.sdkUrl ? "sdk_url" : "print", hadExternal: false, hadInternal: false }), iys(s);
}
function m_r(e, n, { lane: o, forkSession: s, transcript: r }) {
  let i = tao();
  if (n(Igi(e?.internal, i, { forkSession: s, transcript: r?.messages })), r) ays(r.sourceRows, i, n, r.sourceAllowed);
  return oao(i, { lane: o, hadExternal: !!e?.external, hadInternal: !!e?.internal }), iys(i);
}
function Bki(e, { storedPermissionMode: n, messages: o, forkSession: s, startupModePinned: r, lane: i }) {
  let d = tao();
  if (d.trustedMode = e.mode, d.recordedMode = g(n), !r && !s && _(e)) {
    if (d.recordedMode === "plan") {
      if (d.recordTranscriptState = f_r(o), d.recordTranscriptState !== "exited") d.source = "stored";
    } else if ((d.recordedMode === "absent" || d.recordedMode === "invalid") && f_r(o) === "open") d.transcriptOpen = true, d.source = "transcript";
  }
  if (oao(d, { lane: i, hadExternal: false, hadInternal: false }), d.source === "none") return;
  return t(`[planModeResume] re-entering plan mode on resume (source: ${d.source}, was ${e.mode})`), P(e);
}
function oao(e, { lane: n, hadExternal: o, hadInternal: s }) {
  let r = e.source === "none" ? e.trustedMode : "plan";
  a("tengu_worker_permission_mode_restore", { source: c(e.source), lane: c(n), trusted_mode: ce(e.trustedMode), recorded_mode: c(e.recordedMode), target_mode: ce(r), had_external: o, had_internal: s, guard_enabled: f(), ...e.recordTranscriptState && { record_transcript_state: c(e.recordTranscriptState) }, ...e.transcriptOpen && { transcript_open: true } });
}
export {
  Bki,
  Igi,
  ays,
  f_r,
  iys,
  m_r,
  nao,
  oao,
  p_r,
  rao,
  tao
};

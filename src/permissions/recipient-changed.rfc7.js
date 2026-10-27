// permissions/recipient-changed.rfc7.js — Claude Code 2.1.310 模块 chunk-rfc74vey.js
import { Ii } from "../shell/invalid-type.qnva.js";
import { _ } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { exe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { Gce } from "../shared/session-activity-parked-exceeds-refcount.8mxy.js";
import { _Re } from "../settings/global-config-and-gates.27xj.js";
import { randomUUID as k } from "crypto";
var c = Symbol("isolationDispatchGate.mintedReentry");
async function u7t({ tool: e, input: n, ask: o, permissionPhase: s, alreadyApproved: i, recipientLabel: r, resolution: p, askUnconditionally: l = false, parse: m }) {
  if (!((l || exe()) && !i)) return { proceed: true, input: n, asked: false };
  let u = { ...s, ...p !== void 0 && { dispatchResolution: { input: n, note: p } } };
  Object.defineProperty(u, c, { value: true, configurable: true });
  let h = k(), f = Gce(), t;
  try {
    t = await o(n, { toolUseId: h, reentry: u });
  } finally {
    f(), Reflect.deleteProperty(u, c);
  }
  if (t.behavior !== "allow") return { proceed: false, asked: true, reason: "denied", message: t.behavior === "deny" && t.message ? t.message : l ? `Sending to ${r} needs your approval — nothing was sent.` : `isolatePeerMachines is enabled: sending to ${r} needs your approval — nothing was sent.`, ...t.behavior === "deny" && t.decisionReason && { decisionReason: t.decisionReason } };
  if (t.updatedInput === void 0 || _Re(t.updatedInput)) return { proceed: true, input: n, asked: true, ...t.decisionReason && { decisionReason: t.decisionReason } };
  let d = P(m, t.updatedInput);
  if (!d.success) return { proceed: false, asked: true, reason: "bad_shape", message: `The permission handler narrowed the input to a shape ${e.name} does not accept — nothing was sent.` };
  if (d.data.to !== n.to) return { proceed: false, asked: true, reason: "recipient_changed", message: `The permission handler changed the recipient (from ${r}) after this send was resolved — nothing was sent. Send again to the recipient you intend.` };
  if (d.data.message !== void 0 && typeof d.data.message !== "string") return { proceed: false, asked: true, reason: "non_text_message", message: "The permission handler rewrote the message into a structured (non-text) form, which cannot be sent to another session — nothing was sent." };
  return { proceed: true, input: d.data, asked: true, ...t.decisionReason && { decisionReason: t.decisionReason } };
}
function p7t(e, n, o, s) {
  let i = e.permissionPhase?.pipeline;
  if (i === void 0) return false;
  let r = i.result.behavior === "ask" ? i.result : i.answered;
  if (r === void 0 || r.behavior !== "ask" || !s(r)) return false;
  return a(o(i.input), o(n));
}
function dSs(e, n, o) {
  let s = e.permissionPhase?.checked;
  if (s === void 0) return;
  return a(o(s.input), o(n)) ? s.result : void 0;
}
function yHn(e, n, o) {
  let s = e.permissionPhase?.checked;
  if (s === void 0 || !("note" in s)) return;
  return a(o(s.input), o(n)) ? s.note : void 0;
}
function cSs(e, n, o, s) {
  if (e === void 0) return;
  let i = s(n), r = { ...e };
  if (e.checked !== void 0 && a(s(e.checked.input), i)) r.checked = { ...e.checked, input: o };
  if (e.pipeline !== void 0 && a(s(e.pipeline.input), i)) r.pipeline = { ...e.pipeline, input: o };
  return r;
}
function uSs(e, n, o) {
  let s = e.permissionPhase?.dispatchResolution;
  if (s === void 0) return;
  return a(o(s.input), o(n)) ? s.note : void 0;
}
function cEe(e) {
  let n = e.permissionPhase;
  return n !== void 0 && Object.hasOwn(n, c);
}
function f7t(e) {
  return e.behavior === "ask" && e.decisionReason?.type === "safetyCheck" && e.decisionReason.circuitBreaker === "isolatePeerMachines";
}
function a(e, n) {
  return _(e) === _(n);
}
function P(e, n) {
  let o = e(n);
  if (o.success || o.error === void 0) return o;
  let s = /* @__PURE__ */ new Set();
  for (let i of o.error.issues) {
    if (i.code !== "unrecognized_keys" || i.path.length > 0) return o;
    for (let r of i.keys) s.add(r);
  }
  if (s.size === 0 || typeof n !== "object" || n === null) return o;
  return e(Ii(n, (i, r) => s.has(r)));
}
export {
  cEe,
  cSs,
  dSs,
  f7t,
  p7t,
  u7t,
  uSs,
  yHn
};

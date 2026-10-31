// linux/telemetry/stop-hook-removed.js — Claude Code 2.1.310（linux）模块 chunk-2a5hfwr3.js
import { q, ly, ye } from "../context/not-admin-owned.js";
import { b, c, ce } from "../agents/third-party.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Lu } from "../shell/invalid-type.js";
import { Cs } from "../settings/global-config-and-gates.js";
import { a } from "./chunk-9097a12b.js";
import { g, f } from "./chunk-9d6962d2.js";
import { Ie } from "../plugins/chunk-c198f87f.js";
import { X8 } from "../settings/built-in.js";
import { qY, Iy } from "../shared/chunk-fe849e7d.js";
import { randomUUID as S } from "crypto";
function QWt() {
  let t = false;
  try {
    t = Lu();
  } catch (e) {
    l(e);
  }
  if (!t) return false;
  try {
    return qY();
  } catch (e) {
    return l(e), true;
  }
}
function GO() {
  if (!QWt()) return false;
  try {
    return Iy() === "unanswered";
  } catch (t) {
    return l(t), true;
  }
}
function ZWt() {
  try {
    Ie().organizationAsk.hasHeld = true;
  } catch (t) {
    l(t);
  }
}
function EQn(t, e) {
  return { type: "goal_status", met: t, sentinel: true, condition: e };
}
function Qmn(t) {
  if (!t) return null;
  for (let e = t.length - 1; e >= 0; e--) {
    let r = t[e];
    if (r?.type !== "attachment" || r.attachment.type !== "goal_status") continue;
    if (r.attachment.met || r.attachment.failed) return null;
    let o = r.attachment.condition;
    return typeof o === "string" && o.length > 0 ? o : null;
  }
  return null;
}
function Kre(t, e) {
  a("tengu_goal_cleared", { reason: c(e), iterations: t.iterations, durationMs: Date.now() - t.setAt, origin: ce(t.origin) });
}
var eGt = 4e3, y = /* @__PURE__ */ new Set(["clear", "stop", "off", "reset", "none", "cancel"]);
function jSt(t) {
  return y.has(t.toLowerCase());
}
function NWo(t) {
  for (let e = t.length - 1; e >= 0; e--) {
    let r = t[e];
    if (r?.type !== "attachment" || r.attachment.type !== "goal_status") continue;
    let o = r.attachment;
    if (!o.met || o.sentinel) continue;
    return { condition: o.condition, iterations: o.iterations, durationMs: o.durationMs, tokens: o.tokens };
  }
  return null;
}
var kQn = (t) => `A session-scoped Stop hook is now active with condition: "${t}". Briefly acknowledge the goal, then immediately start (or continue) working toward it — treat the condition itself as your directive and do not pause to ask the user what to do. The hook will block stopping until the condition holds. It auto-clears once the condition is met — do not tell the user to run \`/goal clear\` after success; that's only for clearing a goal early.`;
function Q2e(t, e) {
  let r = [];
  for (let o of t.get(e, "Stop").get("Stop") ?? []) {
    if (o.matcher !== "" || o.skillRoot !== void 0) continue;
    for (let n of o.hooks) if (n.type === "prompt") r.push(n);
  }
  return r;
}
var k = "/goal is only available in trusted workspaces. Restart, accept the trust dialog, and try again.", G = "/goal can't run yet: your organization's settings haven't been read, so it isn't known whether it allows hooks.", A = "/goal can't run while hooks are restricted (disableAllHooks or allowManagedHooksOnly is set in settings or by policy).";
function Zmn() {
  if (X8()) return { message: A, code: "hooks_gate" };
  if (GO()) return ZWt(), { message: G, code: "hooks_held" };
  if (!ye() && !Cs()) return { message: k, code: "trust_gate" };
  return null;
}
function _Xs(t, e, r) {
  t((o) => ({ ...o, queuedGoalOrigin: { condition: e, origin: r } }));
}
function O(t, e) {
  let r = e.getAppState().queuedGoalOrigin;
  if (r === void 0 || r.condition !== t) return "user";
  return e.setAppState((o) => ({ ...o, queuedGoalOrigin: void 0 })), r.origin;
}
function WSt(t, e, r) {
  let o = r ?? O(t, e), n = Zmn();
  if (n !== null) return f("goal_set", n.code, { origin: c(o) }), n.message;
  let s = q(), p = e.getAppState().activeGoal;
  if (p !== void 0) Kre(p, "superseded");
  for (let i of Q2e(e.sessionHooksRegistry, s)) e.sessionHooksRegistry.remove(s, "Stop", i);
  e.sessionHooksRegistry.add(s, "Stop", "", { type: "prompt", prompt: t });
  let u = { condition: t, iterations: 0, setAt: Date.now(), origin: o, tokensAtStart: ly() };
  return e.setAppState((i) => ({ ...i, activeGoal: u })), e.applyMessageOp({ type: "append", messages: [zWr(false, t)] }), a("tengu_stop_hook_added", { promptLength: t.length, via: b("goal"), origin: c(o) }), g("goal_set"), null;
}
function GSt(t) {
  let e = q(), r = Q2e(t.sessionHooksRegistry, e);
  if (r.length === 0) return null;
  let o = r[0].prompt;
  for (let s of r) t.sessionHooksRegistry.remove(e, "Stop", s);
  let n = t.getAppState().activeGoal;
  if (n !== void 0) Kre(n, "user_clear");
  return t.setAppState((s) => s.activeGoal === void 0 ? s : { ...s, activeGoal: void 0 }), t.applyMessageOp({ type: "append", messages: [zWr(true, o)] }), a("tengu_stop_hook_removed", { via: b("goal") }), o;
}
function zWr(t, e) {
  return { type: "attachment", uuid: S(), timestamp: (/* @__PURE__ */ new Date()).toISOString(), attachment: EQn(t, e) };
}
export {
  EQn,
  GO,
  GSt,
  Kre,
  NWo,
  Q2e,
  QWt,
  Qmn,
  WSt,
  ZWt,
  Zmn,
  _Xs,
  eGt,
  jSt,
  kQn,
  zWr
};

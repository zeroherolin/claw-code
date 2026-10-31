// darwin/telemetry/stop-hook-removed.js — Claude Code 2.1.310（darwin）模块 chunk-w16mfxd9.js
import { V, cy, ye } from "../context/not-admin-owned.js";
import { S, c, ce } from "../agents/third-party.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { Fu } from "../shell/invalid-type.js";
import { As } from "../settings/global-config-and-gates.js";
import { a } from "./chunk-9097a12b.js";
import { g, p } from "./chunk-9d6962d2.js";
import { Ie } from "../plugins/chunk-c198f87f.js";
import { oY } from "../settings/built-in.js";
import { s4, My } from "../shared/chunk-fe849e7d.js";
import { randomUUID as y } from "crypto";
function c2t() {
  let t = false;
  try {
    t = Fu();
  } catch (e) {
    l(e);
  }
  if (!t) return false;
  try {
    return s4();
  } catch (e) {
    return l(e), true;
  }
}
function XO() {
  if (!c2t()) return false;
  try {
    return My() === "unanswered";
  } catch (t) {
    return l(t), true;
  }
}
function u2t() {
  try {
    Ie().organizationAsk.hasHeld = true;
  } catch (t) {
    l(t);
  }
}
function BJn(t, e) {
  return { type: "goal_status", met: t, sentinel: true, condition: e };
}
function fgn(t) {
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
function Qre(t, e) {
  a("tengu_goal_cleared", { reason: c(e), iterations: t.iterations, durationMs: Date.now() - t.setAt, origin: ce(t.origin) });
}
var p2t = 4e3, k = /* @__PURE__ */ new Set(["clear", "stop", "off", "reset", "none", "cancel"]);
function Ybt(t) {
  return k.has(t.toLowerCase());
}
function p2o(t) {
  for (let e = t.length - 1; e >= 0; e--) {
    let r = t[e];
    if (r?.type !== "attachment" || r.attachment.type !== "goal_status") continue;
    let o = r.attachment;
    if (!o.met || o.sentinel) continue;
    return { condition: o.condition, iterations: o.iterations, durationMs: o.durationMs, tokens: o.tokens };
  }
  return null;
}
var jJn = (t) => `A session-scoped Stop hook is now active with condition: "${t}". Briefly acknowledge the goal, then immediately start (or continue) working toward it — treat the condition itself as your directive and do not pause to ask the user what to do. The hook will block stopping until the condition holds. It auto-clears once the condition is met — do not tell the user to run \`/goal clear\` after success; that's only for clearing a goal early.`;
function l6e(t, e) {
  let r = [];
  for (let o of t.get(e, "Stop").get("Stop") ?? []) {
    if (o.matcher !== "" || o.skillRoot !== void 0) continue;
    for (let n of o.hooks) if (n.type === "prompt") r.push(n);
  }
  return r;
}
var G = "/goal is only available in trusted workspaces. Restart, accept the trust dialog, and try again.", A = "/goal can't run yet: your organization's settings haven't been read, so it isn't known whether it allows hooks.", O = "/goal can't run while hooks are restricted (disableAllHooks or allowManagedHooksOnly is set in settings or by policy).";
function mgn() {
  if (oY()) return { message: O, code: "hooks_gate" };
  if (XO()) return u2t(), { message: A, code: "hooks_held" };
  if (!ye() && !As()) return { message: G, code: "trust_gate" };
  return null;
}
function n7s(t, e, r) {
  t((o) => ({ ...o, queuedGoalOrigin: { condition: e, origin: r } }));
}
function _(t, e) {
  let r = e.getAppState().queuedGoalOrigin;
  if (r === void 0 || r.condition !== t) return "user";
  return e.setAppState((o) => ({ ...o, queuedGoalOrigin: void 0 })), r.origin;
}
function Xbt(t, e, r) {
  let o = r ?? _(t, e), n = mgn();
  if (n !== null) return p("goal_set", n.code, { origin: c(o) }), n.message;
  let s = V(), u = e.getAppState().activeGoal;
  if (u !== void 0) Qre(u, "superseded");
  for (let i of l6e(e.sessionHooksRegistry, s)) e.sessionHooksRegistry.remove(s, "Stop", i);
  e.sessionHooksRegistry.add(s, "Stop", "", { type: "prompt", prompt: t });
  let m = { condition: t, iterations: 0, setAt: Date.now(), origin: o, tokensAtStart: cy() };
  return e.setAppState((i) => ({ ...i, activeGoal: m })), e.applyMessageOp({ type: "append", messages: [p2r(false, t)] }), a("tengu_stop_hook_added", { promptLength: t.length, via: S("goal"), origin: c(o) }), g("goal_set"), null;
}
function Jbt(t) {
  let e = V(), r = l6e(t.sessionHooksRegistry, e);
  if (r.length === 0) return null;
  let o = r[0].prompt;
  for (let s of r) t.sessionHooksRegistry.remove(e, "Stop", s);
  let n = t.getAppState().activeGoal;
  if (n !== void 0) Qre(n, "user_clear");
  return t.setAppState((s) => s.activeGoal === void 0 ? s : { ...s, activeGoal: void 0 }), t.applyMessageOp({ type: "append", messages: [p2r(true, o)] }), a("tengu_stop_hook_removed", { via: S("goal") }), o;
}
function p2r(t, e) {
  return { type: "attachment", uuid: y(), timestamp: (/* @__PURE__ */ new Date()).toISOString(), attachment: BJn(t, e) };
}
export {
  BJn,
  Jbt,
  Qre,
  XO,
  Xbt,
  Ybt,
  c2t,
  fgn,
  jJn,
  l6e,
  mgn,
  n7s,
  p2o,
  p2r,
  p2t,
  u2t
};

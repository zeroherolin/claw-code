// linux/telemetry/goal-restored-on-resume.js — Claude Code 2.1.310（linux）模块 chunk-aeb0nxxy.js
import { q, ly } from "../context/not-admin-owned.js";
import { b, c } from "../agents/third-party.js";
import { a } from "./chunk-9097a12b.js";
import { f } from "./chunk-9d6962d2.js";
import { Qmn, Kre, Zmn } from "./stop-hook-removed.js";
function eao(s, i, l) {
  let e = Qmn(s), n = e !== null ? Zmn() : null, r = n?.code === "hooks_held" ? null : n;
  if (r !== null) f("goal_set", r.code, { origin: c("restored") });
  let t;
  if (e === null || r !== null) {
    if (i((o) => (t = o.activeGoal, o.activeGoal === void 0 ? o : { ...o, activeGoal: void 0 })), t !== void 0) Kre(t, "resume_swap");
    return;
  }
  if (l.add(q(), "Stop", "", { type: "prompt", prompt: e }), i((o) => (t = o.activeGoal, { ...o, activeGoal: { condition: e, iterations: 0, setAt: Date.now(), origin: "restored", tokensAtStart: ly() } })), t !== void 0) Kre(t, "resume_swap");
  a("tengu_goal_restored_on_resume", { promptLength: e.length }), a("tengu_stop_hook_added", { promptLength: e.length, via: b("goal"), origin: c("restored") });
}
export {
  eao
};

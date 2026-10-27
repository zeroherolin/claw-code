// telemetry/goal-restored-on-resume.xnzp.js — Claude Code 2.1.310 模块 chunk-xnzpmpak.js
import { V, cy } from "../context/not-admin-owned.ersa.js";
import { S, c } from "../agents/third-party.ydpb.js";
import { a } from "./chunk-wq923bwc.js";
import { p } from "./chunk-wn8xtaqg.js";
import { fgn, Qre, mgn } from "./stop-hook-removed.w16m.js";
function lao(s, i, l) {
  let e = fgn(s), n = e !== null ? mgn() : null, r = n?.code === "hooks_held" ? null : n;
  if (r !== null) p("goal_set", r.code, { origin: c("restored") });
  let t;
  if (e === null || r !== null) {
    if (i((o) => (t = o.activeGoal, o.activeGoal === void 0 ? o : { ...o, activeGoal: void 0 })), t !== void 0) Qre(t, "resume_swap");
    return;
  }
  if (l.add(V(), "Stop", "", { type: "prompt", prompt: e }), i((o) => (t = o.activeGoal, { ...o, activeGoal: { condition: e, iterations: 0, setAt: Date.now(), origin: "restored", tokensAtStart: cy() } })), t !== void 0) Qre(t, "resume_swap");
  a("tengu_goal_restored_on_resume", { promptLength: e.length }), a("tengu_stop_hook_added", { promptLength: e.length, via: S("goal"), origin: c("restored") });
}
export {
  lao
};

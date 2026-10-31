// linux/agents/chunk-7e8c5e89.js — Claude Code 2.1.310（linux）模块 chunk-9afmk2xz.js
import { nt } from "../context/not-admin-owned.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
function n() {
  return { spawned: 0, requested: { background: 0, foreground: 0, unset: 0 }, started_in_background: 0, max_depth: 0, spawned_by_subagents: 0, completed: 0, failed: 0, killed: { parent: 0, user: 0, system: 0 }, refused: { depth_limit: 0, concurrency_limit: 0, budget: 0 } };
}
class s {
  #e;
  #t;
  constructor(e) {
    this.#e = e;
  }
  completed() {
    if (this.#n("completed")) this.#e.completed += 1;
  }
  failed() {
    if (this.#n("failed")) this.#e.failed += 1;
  }
  killed(e) {
    if (this.#n("killed")) this.#e.killed[e ?? "user"] += 1;
  }
  cancelledAfterCompletion() {
    if (this.#t === "completed") this.#e.completed -= 1, this.#t = void 0;
    this.killed("user");
  }
  #n(e) {
    if (this.#t !== void 0) return false;
    return this.#t = e, true;
  }
}
class r {
  #e = n();
  #t = /* @__PURE__ */ new Map();
  recordSpawn(e) {
    let t = this.#e;
    if (t.spawned += 1, t.requested[e.runInBackground === void 0 ? "unset" : e.runInBackground ? "background" : "foreground"] += 1, e.runsInBackground) t.started_in_background += 1;
    if (this.#t.set(e.agentType, (this.#t.get(e.agentType) ?? 0) + 1), t.max_depth = Math.max(t.max_depth, e.depth), e.depth > 1) t.spawned_by_subagents += 1;
    return new s(t);
  }
  recordRefused(e) {
    this.#e.refused[e] += 1;
  }
  snapshot() {
    let e = this.#e;
    return { ...e, requested: { ...e.requested }, killed: { ...e.killed }, refused: { ...e.refused }, by_type: Object.fromEntries(this.#t) };
  }
  reset() {
    Object.assign(this.#e, n()), this.#t.clear();
  }
}
var _8e = new nt(() => new r());
function _te(e) {
  if (!e) return;
  try {
    return _8e.of(e).snapshot();
  } catch (t) {
    l(t);
    return;
  }
}
export {
  _8e,
  _te
};

// shared/chunk-fj59deqq.js — Claude Code 2.1.310 模块 chunk-fj59deqq.js
import { Dn } from "../agents/third-party.ydpb.js";
var n = /* @__PURE__ */ new Set(["starting", "running", "resuming", "adopted", "crashed", "working", "blocked", "done", "stopped", "failed", "busy", "shell", "idle", "waiting"]);
function lq(e) {
  if (e === void 0) return;
  return Dn(n.has(e) ? e : "other");
}
var t = /* @__PURE__ */ new Set(["cold", "spare", "adopted"]);
function eIt(e) {
  return typeof e === "string" && t.has(e) ? e : void 0;
}
export {
  eIt,
  lq
};

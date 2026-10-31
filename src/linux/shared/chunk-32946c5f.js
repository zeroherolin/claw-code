// linux/shared/chunk-32946c5f.js — Claude Code 2.1.310（linux）模块 chunk-psw7zg7w.js
import { Hn } from "../agents/third-party.js";
var n = /* @__PURE__ */ new Set(["starting", "running", "resuming", "adopted", "crashed", "working", "blocked", "done", "stopped", "failed", "busy", "shell", "idle", "waiting"]);
function Qq(e) {
  if (e === void 0) return;
  return Hn(n.has(e) ? e : "other");
}
var t = /* @__PURE__ */ new Set(["cold", "spare", "adopted"]);
function WPt(e) {
  return typeof e === "string" && t.has(e) ? e : void 0;
}
export {
  Qq,
  WPt
};

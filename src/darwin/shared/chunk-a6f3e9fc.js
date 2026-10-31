// darwin/shared/chunk-a6f3e9fc.js — Claude Code 2.1.310（darwin）模块 chunk-5gaq8d34.js
import { FF } from "../settings/global-config-and-gates.js";
import { $N } from "../core/conversation-engine.js";
function Tq(r, t = false) {
  return (r.type === "http" || r.type === "sse") && FF(r.url) ? 1 / 0 : $N(t);
}
export {
  Tq
};

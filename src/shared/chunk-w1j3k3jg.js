// shared/chunk-w1j3k3jg.js — Claude Code 2.1.310 模块 chunk-w1j3k3jg.js
import { nt } from "../context/not-admin-owned.ersa.js";
import { HJn } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
var t = new nt(() => ({ byToolUse: /* @__PURE__ */ new Map() }));
function LSo(n, e, i) {
  t.of(n).byToolUse.set(e, i), HJn(n, e, () => {
    HUn(n, e);
  });
}
function HUn(n, e) {
  t.peek(n)?.byToolUse.delete(e);
}
function kAi(n, e) {
  return e !== void 0 && t.peek(n)?.byToolUse.has(e) === true;
}
function NSo(n, e) {
  if (e === void 0) return;
  let i = t.peek(n)?.byToolUse.get(e);
  return HUn(n, e), i;
}
export {
  HUn,
  LSo,
  NSo,
  kAi
};

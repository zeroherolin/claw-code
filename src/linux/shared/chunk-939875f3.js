// linux/shared/chunk-939875f3.js — Claude Code 2.1.310（linux）模块 chunk-k4139wtg.js
import { nt } from "../context/not-admin-owned.js";
import { hQn } from "../context/tool-result-clearing-after-idle-server-report.js";
var t = new nt(() => ({ byToolUse: /* @__PURE__ */ new Map() }));
function ibo(n, e, i) {
  t.of(n).byToolUse.set(e, i), hQn(n, e, () => {
    hUn(n, e);
  });
}
function hUn(n, e) {
  t.peek(n)?.byToolUse.delete(e);
}
function UAi(n, e) {
  return e !== void 0 && t.peek(n)?.byToolUse.has(e) === true;
}
function abo(n, e) {
  if (e === void 0) return;
  let i = t.peek(n)?.byToolUse.get(e);
  return hUn(n, e), i;
}
export {
  UAi,
  abo,
  hUn,
  ibo
};

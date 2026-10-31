// linux/shared/chunk-c2723143.js — Claude Code 2.1.310（linux）模块 chunk-1mbkjwnq.js
import { H } from "./chunk-7027e6d5.js";
function Wfs(e, l) {
  let t = /* @__PURE__ */ new Map(), o = [];
  if (e === void 0 || e === null) return { manifests: t, malformedField: false, malformedServerNames: o };
  if (!H(e)) return { manifests: t, malformedField: true, malformedServerNames: o };
  for (let r of l) {
    if (!Object.hasOwn(e, r)) continue;
    let n = e[r], s = H(n) ? n.initializeResult : void 0, i = H(n) && n.toolsListResult !== null ? n.toolsListResult : void 0;
    if (H(s) && (i === void 0 || H(i))) t.set(r, i === void 0 ? { initializeResult: s } : { initializeResult: s, toolsListResult: i });
    else o.push(r);
  }
  return { manifests: t, malformedField: false, malformedServerNames: o };
}
var d = "notifications/tools/list_changed";
function JIn(e) {
  return H(e) && !("id" in e) && e.method === d;
}
export {
  JIn,
  Wfs
};

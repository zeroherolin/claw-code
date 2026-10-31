// darwin/shared/chunk-c2723143.js — Claude Code 2.1.310（darwin）模块 chunk-k5cvg7ge.js
import { D } from "./chunk-7027e6d5.js";
function Kms(e, l) {
  let t = /* @__PURE__ */ new Map(), o = [];
  if (e === void 0 || e === null) return { manifests: t, malformedField: false, malformedServerNames: o };
  if (!D(e)) return { manifests: t, malformedField: true, malformedServerNames: o };
  for (let r of l) {
    if (!Object.hasOwn(e, r)) continue;
    let n = e[r], s = D(n) ? n.initializeResult : void 0, i = D(n) && n.toolsListResult !== null ? n.toolsListResult : void 0;
    if (D(s) && (i === void 0 || D(i))) t.set(r, i === void 0 ? { initializeResult: s } : { initializeResult: s, toolsListResult: i });
    else o.push(r);
  }
  return { manifests: t, malformedField: false, malformedServerNames: o };
}
var d = "notifications/tools/list_changed";
function YOn(e) {
  return D(e) && !("id" in e) && e.method === d;
}
export {
  Kms,
  YOn
};

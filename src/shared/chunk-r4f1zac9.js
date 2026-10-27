// shared/chunk-r4f1zac9.js — Claude Code 2.1.310 模块 chunk-r4f1zac9.js
import { U } from "../context/not-admin-owned.ersa.js";
import { W } from "./chunk-3y73jbfr.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
var s = new W(() => ({ alreadyReported: /* @__PURE__ */ new Set() }));
function z2(r) {
  try {
    let e = s.of(U().host);
    if (!e.alreadyReported.has(r)) e.alreadyReported.add(r), e.listener?.(r);
  } catch (e) {
    l(e);
  }
}
export {
  z2
};

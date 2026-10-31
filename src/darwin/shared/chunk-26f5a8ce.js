// darwin/shared/chunk-26f5a8ce.js — Claude Code 2.1.310（darwin）模块 chunk-r4f1zac9.js
import { U } from "../context/not-admin-owned.js";
import { W } from "./chunk-37dd5dd4.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
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

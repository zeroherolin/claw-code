// darwin/shared/chunk-e9b81411.js — Claude Code 2.1.310（darwin）模块 chunk-5q6vj6jk.js
import { CFe } from "../fs/ca-certs-load.js";
import { x } from "../vendor/react/chunk-0b0bf45d.js";
var rM = x(function(s) {
  var r = CFe(), o = (e) => e[r.SMITHY_CONTEXT_KEY] || (e[r.SMITHY_CONTEXT_KEY] = {}), i = (e) => {
    if (typeof e === "function") return e;
    let t = Promise.resolve(e);
    return () => t;
  };
  s.getSmithyContext = o;
  s.normalizeProvider = i;
});
export {
  rM
};

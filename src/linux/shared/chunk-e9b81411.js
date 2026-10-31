// linux/shared/chunk-e9b81411.js — Claude Code 2.1.310（linux）模块 chunk-3b5xdkhc.js
import { h$e } from "../fs/ca-certs-load.js";
import { x } from "../vendor/react/chunk-0b0bf45d.js";
var JO = x(function(s) {
  var r = h$e(), o = (e) => e[r.SMITHY_CONTEXT_KEY] || (e[r.SMITHY_CONTEXT_KEY] = {}), i = (e) => {
    if (typeof e === "function") return e;
    let t = Promise.resolve(e);
    return () => t;
  };
  s.getSmithyContext = o;
  s.normalizeProvider = i;
});
export {
  JO
};

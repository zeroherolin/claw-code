// linux/shared/rate-limit-options.js — Claude Code 2.1.310（linux）模块 chunk-7k5v7jym.js
import { p } from "./chunk-2fe3b2b7.js";
import { us } from "./chunk-869ced06.js";
import { o, M, sm, u } from "../vendor/zod/string-format.js";
var kg = us({ kind: "local_jsx", payload: p(() => u({ nodeId: o(), commandName: o(), immediate: M(), hidesPrompt: M(), holdsQueue: M().optional() })), result: p(() => sm()), default: null, userInvoked: true, hideWhile: [] }), t = p(() => u({ holdsQueue: M().optional() }));
function NMt(a) {
  return a.open.some((e) => e.kind === kg.kind && t().safeParse(e.payload).data?.holdsQueue !== false);
}
var Bgo = /* @__PURE__ */ new Set(["rate-limit-options", "pro-trial-expired"]);
export {
  Bgo,
  NMt,
  kg
};

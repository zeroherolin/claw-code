// shared/rate-limit-options.s16b.js — Claude Code 2.1.310 模块 chunk-s16b52xf.js
import { f } from "./chunk-nyvhtfb3.js";
import { os } from "./chunk-98em9746.js";
import { o, M, sm, u } from "../vendor/zod/string-format.k395.js";
var kg = os({ kind: "local_jsx", payload: f(() => u({ nodeId: o(), commandName: o(), immediate: M(), hidesPrompt: M(), holdsQueue: M().optional() })), result: f(() => sm()), default: null, userInvoked: true, hideWhile: [] }), t = f(() => u({ holdsQueue: M().optional() }));
function GMt(a) {
  return a.open.some((e) => e.kind === kg.kind && t().safeParse(e.payload).data?.holdsQueue !== false);
}
var uho = /* @__PURE__ */ new Set(["rate-limit-options", "pro-trial-expired"]);
export {
  GMt,
  kg,
  uho
};

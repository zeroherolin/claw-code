// git/chunk-k0rw53yq.js — Claude Code 2.1.310 模块 chunk-k0rw53yq.js
import { f } from "../shared/chunk-nyvhtfb3.js";
import { ifo, gLn } from "../shared/chunk-3t4qtm0n.js";
import { bMe, eDs } from "../core/conversation-engine.31gx.js";
import { o, oe, C, u, T } from "../vendor/zod/string-format.k395.js";
var n = 1, a = 64, s = "offer", t = f(() => o().regex(bMe).refine(eDs)), c = f(() => u({ v: T(n), head: t(), branch: o().min(1).max(ifo).refine(gLn), ancestors: C(oe()).max(a).pipe(C(t())) }));
function tcs(e) {
  let r = c().safeParse(e[s]);
  return r.success ? r.data : null;
}
export {
  tcs
};

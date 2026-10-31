// linux/git/chunk-072326ab.js — Claude Code 2.1.310（linux）模块 chunk-tgdb2nvk.js
import { p } from "../shared/chunk-2fe3b2b7.js";
import { hfo, e0n } from "../shared/chunk-18d5ee88.js";
import { mMe, gHs } from "../core/conversation-engine.js";
import { o, oe, T, u, A } from "../vendor/zod/string-format.js";
var n = 1, a = 64, s = "offer", t = p(() => o().regex(mMe).refine(gHs)), c = p(() => u({ v: A(n), head: t(), branch: o().min(1).max(hfo).refine(e0n), ancestors: T(oe()).max(a).pipe(T(t())) }));
function bds(e) {
  let r = c().safeParse(e[s]);
  return r.success ? r.data : null;
}
export {
  bds
};

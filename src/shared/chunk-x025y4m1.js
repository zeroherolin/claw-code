// shared/chunk-x025y4m1.js — Claude Code 2.1.310 模块 chunk-x025y4m1.js
import { Bc } from "../settings/global-config-and-gates.27xj.js";
import { Ee } from "./chunk-f9xfyhm1.js";
var kco = Object.freeze({ isKept: true, isDenied: false, context: Object.freeze([]) });
function m() {
  let o = Bc();
  return { setPromptMentionRunner: o.set, runPromptMention: (r) => {
    let e = o.get();
    return e ? e(r) : r.read(r.raised, "unhooked").then(() => kco);
  } };
}
var t = Ee(m(), (o) => o.setPromptMentionRunner(null));
var bhi = t.runPromptMention;
var whi = t.setPromptMentionRunner;
export {
  bhi,
  kco,
  whi
};

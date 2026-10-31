// linux/shared/chunk-012c5480.js — Claude Code 2.1.310（linux）模块 chunk-fscwz3m3.js
import { Bc } from "../settings/global-config-and-gates.js";
import { ve } from "./chunk-fee3c428.js";
var aco = Object.freeze({ isKept: true, isDenied: false, context: Object.freeze([]) });
function m() {
  let o = Bc();
  return { setPromptMentionRunner: o.set, runPromptMention: (r) => {
    let e = o.get();
    return e ? e(r) : r.read(r.raised, "unhooked").then(() => aco);
  } };
}
var t = ve(m(), (o) => o.setPromptMentionRunner(null));
var Fgi = t.runPromptMention;
var Ugi = t.setPromptMentionRunner;
export {
  Fgi,
  Ugi,
  aco
};

// linux/shared/chunk-b09058c6.js — Claude Code 2.1.310（linux）模块 chunk-enp5gvra.js
import { Ne } from "../fs/async-hooks.93b1.js";
import { i } from "./environment.js";
var t = null;
function YQs(e) {
  t = e;
}
function My() {
  return i.CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG === true || Ne(t?.()?.CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG);
}
var o = 300;
function BGt() {
  let e = t?.(), n = (e === void 0 ? i.CLAUDE_CODE_PERSONAL_CONFIG_FIX : e.CLAUDE_CODE_PERSONAL_CONFIG_FIX)?.trim();
  if (n === void 0 || n === "" || n.length > o || /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(n)) return;
  return n;
}
export {
  BGt,
  My,
  YQs
};

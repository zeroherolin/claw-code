// darwin/shared/chunk-b09058c6.js — Claude Code 2.1.310（darwin）模块 chunk-9m922vm4.js
import { Ne } from "../fs/async-hooks.93b1.js";
import { i } from "./environment.js";
var t = null;
function MQs(e) {
  t = e;
}
function Dy() {
  return i.CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG === true || Ne(t?.()?.CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG);
}
var o = 300;
function Z2t() {
  let e = t?.(), n = (e === void 0 ? i.CLAUDE_CODE_PERSONAL_CONFIG_FIX : e.CLAUDE_CODE_PERSONAL_CONFIG_FIX)?.trim();
  if (n === void 0 || n === "" || n.length > o || /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(n)) return;
  return n;
}
export {
  Dy,
  MQs,
  Z2t
};

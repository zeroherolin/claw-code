// shared/chunk-17f2zfzf.js — Claude Code 2.1.310 模块 chunk-17f2zfzf.js
import { re } from "./chunk-j79dwkaq.js";
import { un } from "../fs/async-hooks.2k4e.js";
var lye = 128, j2 = /^[\x21-\x7e]+$/, mUr = "io.modelcontextprotocol/tasks";
function qde(r) {
  return re(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu, ""), lye);
}
function O8(r) {
  return re(qde(r), 8);
}
function EFo(r) {
  if (!Number.isFinite(r) || r <= 0) return;
  return r < 1e3 ? `${r}ms` : un(r);
}
export {
  EFo,
  O8,
  j2,
  lye,
  mUr,
  qde
};

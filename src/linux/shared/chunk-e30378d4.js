// linux/shared/chunk-e30378d4.js — Claude Code 2.1.310（linux）模块 chunk-vxpcbg5q.js
import { re } from "./chunk-d2c47492.js";
import { un } from "../fs/async-hooks.7959.js";
var dye = 128, LG = /^[\x21-\x7e]+$/, JUr = "io.modelcontextprotocol/tasks";
function Gde(r) {
  return re(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu, ""), dye);
}
function A8(r) {
  return re(Gde(r), 8);
}
function W$o(r) {
  if (!Number.isFinite(r) || r <= 0) return;
  return r < 1e3 ? `${r}ms` : un(r);
}
export {
  A8,
  Gde,
  JUr,
  LG,
  W$o,
  dye
};

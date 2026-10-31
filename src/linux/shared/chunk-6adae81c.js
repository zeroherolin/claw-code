// linux/shared/chunk-6adae81c.js — Claude Code 2.1.310（linux）模块 chunk-wrgxzjpr.js
import { re, zr } from "./chunk-d2c47492.js";
import { gt } from "../fs/async-hooks.7959.js";
import { yn } from "../fs/gitlab-runner-authentication-token.js";
var i = 200, o = i * 4, r = /[\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu;
function uu(n) {
  let e = n === void 0 ? "" : zr(yn(n).replace(r, " "));
  return e === "" ? void 0 : gt(re(e, o), i);
}
export {
  uu
};

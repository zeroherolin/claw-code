// shared/chunk-a9jqgh3e.js — Claude Code 2.1.310 模块 chunk-a9jqgh3e.js
import { re, zr } from "./chunk-j79dwkaq.js";
import { ft } from "../fs/async-hooks.2k4e.js";
import { yn } from "../fs/gitlab-runner-authentication-token.d7b0.js";
var i = 200, o = i * 4, r = /[\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu;
function pu(n) {
  let e = n === void 0 ? "" : zr(yn(n).replace(r, " "));
  return e === "" ? void 0 : ft(re(e, o), i);
}
export {
  pu
};

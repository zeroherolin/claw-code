// darwin/shared/chunk-6adae81c.js — Claude Code 2.1.310（darwin）模块 chunk-a9jqgh3e.js
import { re, zr } from "./chunk-d2c47492.js";
import { ft } from "../fs/async-hooks.7959.js";
import { yn } from "../fs/gitlab-runner-authentication-token.js";
var i = 200, o = i * 4, r = /[\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu;
function pu(n) {
  let e = n === void 0 ? "" : zr(yn(n).replace(r, " "));
  return e === "" ? void 0 : ft(re(e, o), i);
}
export {
  pu
};

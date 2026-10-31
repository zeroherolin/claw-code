// linux/shared/chunk-0542336f.js — Claude Code 2.1.310（linux）模块 chunk-nvjx6a4x.js
import { nI } from "./chunk-570a9e6c.js";
var ip = Symbol("untrustedArray.unreadable"), n5 = "<unreadable list>";
function xw(e) {
  let n;
  try {
    if (!Array.isArray(e)) return;
    n = e.length;
  } catch {
    return ip;
  }
  if (typeof n !== "number" || !Number.isSafeInteger(n) || n < 0 || n > nI) return ip;
  let u = [];
  for (let r = 0; r < n; r++) {
    let t;
    try {
      t = e[r];
    } catch {
      t = void 0;
    }
    u.push(t);
  }
  return u;
}
function eoe(e) {
  let n = xw(e);
  return n === ip ? void 0 : n;
}
export {
  eoe,
  ip,
  n5,
  xw
};

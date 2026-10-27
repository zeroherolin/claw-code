// shared/chunk-jfsgpm14.js — Claude Code 2.1.310 模块 chunk-jfsgpm14.js
import { sI } from "./chunk-t5dpzsbb.js";
var of = Symbol("untrustedArray.unreadable"), f4 = "<unreadable list>";
function Pw(e) {
  let n;
  try {
    if (!Array.isArray(e)) return;
    n = e.length;
  } catch {
    return of;
  }
  if (typeof n !== "number" || !Number.isSafeInteger(n) || n < 0 || n > sI) return of;
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
function aoe(e) {
  let n = Pw(e);
  return n === of ? void 0 : n;
}
export {
  Pw,
  aoe,
  f4,
  of
};

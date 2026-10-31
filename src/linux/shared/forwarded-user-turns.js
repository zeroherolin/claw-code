// linux/shared/forwarded-user-turns.js — Claude Code 2.1.310（linux）模块 chunk-ev9ynqqq.js
import { di } from "./chunk-d2c47492.js";
import { Wt, Wz, sE } from "./chunk-dda594a8.js";
function VNo(t) {
  return "  " + t.replace(vze, `
`).split(`
`).join(`
  `);
}
var qNo = l$, vze = /\r\n?|[\u001c-\u001e\u2028\u2029\u0085\v\f]/g;
function Eze(t) {
  return t.replace(vze, `
`);
}
var JTe = /[\p{Cf}\p{Default_Ignorable_Code_Point}]/gu, { open: e, close: o, slash: i } = Wz;
function t1t(t, r) {
  return r.replace(JTe, "").replace(new RegExp(`[${e}]([\\s${i}]*${di(t)}\\b(?:[^${e}${o}]*[${o}])?)`, "gi"), (n, s) => "[" + s);
}
var n1t = "forwarded_user_turns", wHe = "forwarded_turn", p = ["transcript", n1t, wHe];
function Q7e(t) {
  let r = t;
  for (let n of p) r = t1t(n, r);
  return r;
}
function l$(t) {
  return "  " + Q7e(Eze(t)).split(`
`).join(`
  `);
}
var a = /[\x00-\x08\x0b-\x1f\x7f-\x9f]/g;
function qFr(t) {
  return VNo(Wt(sE(Eze(t).replace(JTe, "").replace(a, ""))));
}
export {
  Eze,
  JTe,
  Q7e,
  VNo,
  l$,
  n1t,
  qFr,
  qNo,
  t1t,
  vze,
  wHe
};

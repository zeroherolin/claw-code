// darwin/shared/forwarded-user-turns.js — Claude Code 2.1.310（darwin）模块 chunk-ka5j9k3q.js
import { di } from "./chunk-d2c47492.js";
import { jt, QG, iv } from "./chunk-dda594a8.js";
function kFo(t) {
  return "  " + t.replace(OGe, `
`).split(`
`).join(`
  `);
}
var CFo = pF, OGe = /\r\n?|[\u001c-\u001e\u2028\u2029\u0085\v\f]/g;
function MGe(t) {
  return t.replace(OGe, `
`);
}
var rTe = /[\p{Cf}\p{Default_Ignorable_Code_Point}]/gu, { open: e, close: o, slash: i } = QG;
function fBt(t, r) {
  return r.replace(rTe, "").replace(new RegExp(`[${e}]([\\s${i}]*${di(t)}\\b(?:[^${e}${o}]*[${o}])?)`, "gi"), (n, s) => "[" + s);
}
var mBt = "forwarded_user_turns", AHe = "forwarded_turn", p = ["transcript", mBt, AHe];
function iZe(t) {
  let r = t;
  for (let n of p) r = fBt(n, r);
  return r;
}
function pF(t) {
  return "  " + iZe(MGe(t)).split(`
`).join(`
  `);
}
var a = /[\x00-\x08\x0b-\x1f\x7f-\x9f]/g;
function gUr(t) {
  return kFo(jt(iv(MGe(t).replace(rTe, "").replace(a, ""))));
}
export {
  AHe,
  CFo,
  MGe,
  OGe,
  fBt,
  gUr,
  iZe,
  kFo,
  mBt,
  pF,
  rTe
};

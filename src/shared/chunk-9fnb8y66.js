// shared/chunk-9fnb8y66.js — Claude Code 2.1.310 模块 chunk-9fnb8y66.js
import { Z } from "../artifacts/same-account.bxg8.js";
import { randomUUID as s } from "crypto";
var m = 256;
function oNn(e = s(), t) {
  if (t !== void 0) {
    let o = Z().laneNoticeSlugs;
    o.set(e, t), r(o);
  }
  return e;
}
function Sks(e) {
  return Z().laneNoticeSlugs.get(e);
}
function bks(e, t, o) {
  let n = Z(), i = Date.now();
  if (e !== void 0) n.commentReads.set(e, { slug: t, ownWordsOnly: o }), r(n.commentReads);
  if (n.commentReadAtBySlug.delete(t), n.commentReadAtBySlug.set(t, i), r(n.commentReadAtBySlug) || !o) n.lastOthersCommentReadAt = i;
}
function wks(e) {
  return Z().commentReads.get(e);
}
function sNn(e, t) {
  for (let [o, n] of Z().commentReadAtBySlug) if (o !== e && !(Number.isFinite(t) && n < t)) return true;
  return false;
}
function iNn() {
  return Z().lastOthersCommentReadAt;
}
function r(e) {
  if (e.size <= m) return false;
  let t = e.keys().next().value;
  if (t !== void 0) e.delete(t);
  return true;
}
export {
  Sks,
  bks,
  iNn,
  oNn,
  sNn,
  wks
};

// darwin/shared/chunk-909b5542.js — Claude Code 2.1.310（darwin）模块 chunk-13bg33w9.js
import { zi } from "../remote/chunk-7e620e0d.js";
function oRs(e) {
  return () => {
    let n = e(), t = zi();
    return t.disconnectedAnswerCount++, t.disconnectedAnswerTexts.add(n), n;
  };
}
function v_o() {
  return zi().disconnectedAnswerCount;
}
function eUn(e) {
  return zi().disconnectedAnswerTexts.has(e);
}
function cen() {
  let e = zi();
  return e.disconnectedAnswerCount > 0 || e.notConnectedSeenByPriorWorker;
}
function sRs() {
  zi().notConnectedSeenByPriorWorker = true;
}
export {
  cen,
  eUn,
  oRs,
  sRs,
  v_o
};

// linux/shared/chunk-909b5542.js — Claude Code 2.1.310（linux）模块 chunk-98t1ehjk.js
import { zi } from "../remote/chunk-7e620e0d.js";
function xCs(e) {
  return () => {
    let n = e(), t = zi();
    return t.disconnectedAnswerCount++, t.disconnectedAnswerTexts.add(n), n;
  };
}
function r_o() {
  return zi().disconnectedAnswerCount;
}
function eUn(e) {
  return zi().disconnectedAnswerTexts.has(e);
}
function len() {
  let e = zi();
  return e.disconnectedAnswerCount > 0 || e.notConnectedSeenByPriorWorker;
}
function PCs() {
  zi().notConnectedSeenByPriorWorker = true;
}
export {
  PCs,
  eUn,
  len,
  r_o,
  xCs
};

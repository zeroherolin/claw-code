// shared/chunk-bwprpqap.js — Claude Code 2.1.310 模块 chunk-bwprpqap.js
import { K } from "./chunk-p82eferg.js";
import { iri, Wb, Ft } from "../settings/global-config-and-gates.27xj.js";
import { QM } from "./chunk-3mz4bt3m.js";
import { Wd } from "./chunk-vx3s7x6j.js";
import { Von, nWe } from "../core/conversation-engine.31gx.js";
import { P, te, Qh, j } from "../vendor/react/chunk-s8vmszp2.js";
j();
function t() {
  let [o, e] = Qh((s) => s + 1, 0);
  return P(() => iri(e), []), o;
}
function Nmr(o, e) {
  return Von(o) ?? Von(e) ?? Wb();
}
function lD(o) {
  return Ft(Nmr(o.mainLoopModelForSession, o.mainLoopModel));
}
function Iwe() {
  let o = K((n) => n.mainLoopModel), e = K((n) => n.mainLoopModelForSession), s = QM(), i = t(), r = Wd();
  return te(() => nWe(e, o), [e, o, s, r, i]);
}
function i5e() {
  let o = K((n) => n.mainLoopModel), e = K((n) => n.mainLoopModelForSession), s = QM(), i = t(), r = Wd();
  return te(() => Nmr(e, o), [e, o, s, r, i]);
}
function su() {
  let o = K((n) => n.mainLoopModel), e = K((n) => n.mainLoopModelForSession), s = QM(), i = t(), r = Wd();
  return te(() => lD({ mainLoopModel: o, mainLoopModelForSession: e }), [e, o, s, r, i]);
}
export {
  Iwe,
  Nmr,
  i5e,
  lD,
  su
};

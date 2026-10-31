// darwin/shared/chunk-72c4b78c.js — Claude Code 2.1.310（darwin）模块 chunk-bwprpqap.js
import { K } from "./chunk-e4a3aa33.js";
import { iri, Wb, Ft } from "../settings/global-config-and-gates.js";
import { QM } from "./chunk-1d395236.js";
import { Wd } from "./chunk-d08b9350.js";
import { Von, nWe } from "../core/conversation-engine.js";
import { P, te, Qh, j } from "../vendor/react/chunk-9a0b1ced.js";
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

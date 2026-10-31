// linux/shared/chunk-72c4b78c.js — Claude Code 2.1.310（linux）模块 chunk-dxycrgwg.js
import { K } from "./chunk-e4a3aa33.js";
import { vni, jS, $t } from "../settings/global-config-and-gates.js";
import { qM } from "./chunk-1d395236.js";
import { Wd } from "./chunk-d08b9350.js";
import { Ion, Kje } from "../core/conversation-engine.js";
import { P, ee, Qh, j } from "../vendor/react/chunk-9a0b1ced.js";
j();
function t() {
  let [o, e] = Qh((s) => s + 1, 0);
  return P(() => vni(e), []), o;
}
function Smr(o, e) {
  return Ion(o) ?? Ion(e) ?? jS();
}
function sL(o) {
  return $t(Smr(o.mainLoopModelForSession, o.mainLoopModel));
}
function kwe() {
  let o = K((n) => n.mainLoopModel), e = K((n) => n.mainLoopModelForSession), s = qM(), i = t(), r = Wd();
  return ee(() => Kje(e, o), [e, o, s, r, i]);
}
function Q5e() {
  let o = K((n) => n.mainLoopModel), e = K((n) => n.mainLoopModelForSession), s = qM(), i = t(), r = Wd();
  return ee(() => Smr(e, o), [e, o, s, r, i]);
}
function ou() {
  let o = K((n) => n.mainLoopModel), e = K((n) => n.mainLoopModelForSession), s = qM(), i = t(), r = Wd();
  return ee(() => sL({ mainLoopModel: o, mainLoopModelForSession: e }), [e, o, s, r, i]);
}
export {
  Q5e,
  Smr,
  kwe,
  ou,
  sL
};

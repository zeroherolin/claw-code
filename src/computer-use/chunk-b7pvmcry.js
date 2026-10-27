// computer-use/chunk-b7pvmcry.js — Claude Code 2.1.310 模块 chunk-b7pvmcry.js
import { w } from "../ui/chunk-zqxc4qtb.js";
import { e } from "../vendor/react/chunk-f790ajz4.js";
import { Gt, Se, y, kt, j } from "../vendor/react/chunk-s8vmszp2.js";
import { Ps } from "../shared/chunk-bkvejkkf.js";
j();
function h() {
  let u = Ps(v);
  let V = new l();
  return u.subscribe(() => {
    if (u.getState().voiceState !== "recording") V.reset();
  }), { store: u, levelSmoother: V };
}
var v = { voiceState: "idle", voiceError: null, voiceInterimTranscript: "", voiceAudioLevels: [], voiceWarmingUp: false, awaitingVoiceSubmitDoubleTap: false };
class l {
  #e = 0;
  next(o, t) {
    return this.#e = this.#e * t + o * (1 - t), this.#e;
  }
  reset() {
    this.#e = 0;
  }
}
var i = Gt(null);
function Bgr(o) {
  let s = w(3), { children: t } = o, [n] = y(h), c;
  if (s[0] !== t || s[1] !== n) c = e(i.Provider, { value: n, children: t }), s[0] = t, s[1] = n, s[2] = c;
  else c = s[2];
  return c;
}
function r() {
  let o = Se(i);
  if (!o) {
    throw Error("useVoiceState must be used within a VoiceProvider");
  }
  return o;
}
function C5e() {
  return r().store;
}
function wro() {
  return r().levelSmoother;
}
function Vh(o) {
  let n = w(3), t = C5e(), s;
  if (n[0] !== o || n[1] !== t) s = () => o(t.getState()), n[0] = o, n[1] = t, n[2] = s;
  else s = n[2];
  let c = s;
  return kt(t.subscribe, c, c);
}
function OIn() {
  return C5e().setState;
}
function bUe() {
  return C5e().getState;
}
export {
  Bgr,
  C5e,
  OIn,
  Vh,
  bUe,
  wro
};

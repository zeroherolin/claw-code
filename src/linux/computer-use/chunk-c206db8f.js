// linux/computer-use/chunk-c206db8f.js — Claude Code 2.1.310（linux）模块 chunk-r495jyat.js
import { w } from "../ui/chunk-0ed4c357.js";
import { e } from "../vendor/react/chunk-40234545.js";
import { Gt, be, y, kt, j } from "../vendor/react/chunk-9a0b1ced.js";
import { Ps } from "../shared/chunk-67236fa7.js";
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
function kgr(o) {
  let s = w(3), { children: t } = o, [n] = y(h), c;
  if (s[0] !== t || s[1] !== n) c = e(i.Provider, { value: n, children: t }), s[0] = t, s[1] = n, s[2] = c;
  else c = s[2];
  return c;
}
function r() {
  let o = be(i);
  if (!o) {
    throw Error("useVoiceState must be used within a VoiceProvider");
  }
  return o;
}
function h6e() {
  return r().store;
}
function qno() {
  return r().levelSmoother;
}
function Kh(o) {
  let n = w(3), t = h6e(), s;
  if (n[0] !== o || n[1] !== t) s = () => o(t.getState()), n[0] = o, n[1] = t, n[2] = s;
  else s = n[2];
  let c = s;
  return kt(t.subscribe, c, c);
}
function hIn() {
  return h6e().setState;
}
function fUe() {
  return h6e().getState;
}
export {
  Kh,
  fUe,
  h6e,
  hIn,
  kgr,
  qno
};

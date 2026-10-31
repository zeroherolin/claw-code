// darwin/auth/is-native-audio-available.js — Claude Code 2.1.310（darwin）模块 chunk-7wbz1vyq.js
import { dVo } from "../computer-use/chunk-5f38493e.js";
import { $e } from "../vendor/react/chunk-0b0bf45d.js";
var a = null, i = false;
function r() {
  if (i) return a;
  i = true;
  let t = "darwin";
  if (t !== "darwin" && t !== "linux" && t !== "win32") return null;
  try {
    return a = dVo(), a;
  } catch {
  }
  let o = `arm64-${t}`, u = (t === "linux" ? [o, `${o}-musl`] : [o]).flatMap((n) => [`./vendor/audio-capture/${n}/audio-capture.node`, `../audio-capture/${n}/audio-capture.node`]);
  for (let n of u) try {
    return a = $e(n), a;
  } catch {
  }
  return null;
}
function c() {
  return r() !== null;
}
function l(t, o) {
  let e = r();
  if (!e) return false;
  return e.startRecording(t, o);
}
function s() {
  let t = r();
  if (!t) return;
  t.stopRecording();
}
function d() {
  let t = r();
  if (!t) return false;
  return t.isRecording();
}
function p(t, o) {
  let e = r();
  if (!e) return false;
  return e.startPlayback(t, o);
}
function f(t) {
  let o = r();
  if (!o) return;
  o.writePlaybackData(t);
}
function m() {
  let t = r();
  if (!t) return;
  t.stopPlayback();
}
function b() {
  let t = r();
  if (!t) return false;
  return t.isPlaying();
}
function v() {
  let t = r();
  if (!t || !t.microphoneAuthorizationStatus) return 0;
  return t.microphoneAuthorizationStatus();
}
export {
  c as isNativeAudioAvailable,
  b as isNativePlaying,
  d as isNativeRecordingActive,
  v as microphoneAuthorizationStatus,
  p as startNativePlayback,
  l as startNativeRecording,
  m as stopNativePlayback,
  s as stopNativeRecording,
  f as writeNativePlaybackData
};

// darwin/remote/direct-served.js — Claude Code 2.1.310（darwin）模块 chunk-csqm371m.js
import { nt, U } from "../context/not-admin-owned.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { Y } from "../shared/async-hooks.9e79.js";
import { p } from "../telemetry/chunk-9d6962d2.js";
class VEs {
  state = { status: "inactive" };
  fallbackSadEmitted = /* @__PURE__ */ new Set();
  toolsBaseline = { captured: false };
  relayThinkingStripOwed = false;
  lastDispatchRelayed = false;
  lastDispatchFallback = void 0;
  openBootVerdict = void 0;
  bootSettled = false;
  handoffMarkerStep = void 0;
  enableStubsCalled = /* @__PURE__ */ new Map();
  chromeSwitchedOn = void 0;
  forkDirectLines = /* @__PURE__ */ new Set();
  relayRefusedGzip = false;
}
var Hhi = new nt(() => new VEs());
function n() {
  return Hhi.of(U());
}
function f0() {
  return n().state;
}
function Fpo(e) {
  let r = n();
  if (r.state.status !== "inactive") return;
  r.state = e, r.relayThinkingStripOwed = false;
}
function g1e(e, r, o) {
  let a = n();
  if (a.state.status === "reverted") return;
  if (a.state.status === "active") {
    if (e === "device_tool_requested" || e === "device_tool_request_repeated") Y("info", "cli_teleport_relay_ended", { reason: e });
    else if (e !== "direct_served") p("upgrade_teleport_cache", e), l(e);
    if (e !== "direct_served") s(r, e);
    a.relayThinkingStripOwed = true;
  }
  a.state = { status: "reverted", reason: e, detail: o };
}
function $po(e, r) {
  let o = n().enableStubsCalled;
  if (!o.has(e)) return o.set(e, r), "not_repeat";
  return !!r && r === o.get(e) ? "not_repeat" : "repeat";
}
function CTi(e) {
  n().chromeSwitchedOn = e;
}
function Upo() {
  return n().chromeSwitchedOn;
}
var i = /* @__PURE__ */ new WeakMap();
function Bpo(e, r) {
  i.set(e, r);
}
function TTi(e) {
  let r = n();
  if (r.relayThinkingStripOwed) return e.mainLoop ? "strip_and_mark" : "strip";
  if (r.state.status !== "active") return "keep";
  return e.fetch !== void 0 && i.has(e.fetch) ? "keep" : "strip";
}
function ATi(e) {
  return n().state.status === "active" && e !== void 0 && i.get(e) === "main";
}
function jpo(e) {
  n().openBootVerdict = e;
}
function fLn() {
  return n().openBootVerdict !== void 0;
}
function vwr() {
  n().bootSettled = true;
}
function RTi() {
  return !n().bootSettled || f0().status === "active" || fLn();
}
function mLn() {
  let e = n(), r = e.openBootVerdict;
  return e.openBootVerdict = void 0, r;
}
function B9e(e) {
  n().handoffMarkerStep = e;
}
function Wpo() {
  let e = n(), r = e.handoffMarkerStep;
  return e.handoffMarkerStep = void 0, r;
}
function NJt() {
  let e = mLn();
  if (e === void 0) return;
  p("upgrade_teleport_cache", e), Y("warn", "cli_teleport_arm_verdict", { outcome: "refused", error_code: e }), t(`prompt-cache relay stays off: boot had no marker (${e}) and no hand-off armed it`);
}
function Gpo() {
  n().relayThinkingStripOwed = true;
}
function zpo() {
  return n().relayThinkingStripOwed;
}
function Vpo() {
  return !n().relayRefusedGzip;
}
function Kpo() {
  let e = n();
  if (e.relayRefusedGzip) return;
  e.relayRefusedGzip = true, Y("warn", "cli_teleport_relay_gzip_refused");
}
function qpo(e) {
  let r = n();
  r.lastDispatchRelayed = e, r.lastDispatchFallback = void 0;
}
function Ypo(e, r) {
  n().lastDispatchFallback = { cause: e, httpStatus: r };
}
function xTi() {
  return n().lastDispatchFallback;
}
function PTi() {
  let e = n();
  return e.relayThinkingStripOwed && !e.lastDispatchRelayed;
}
function ITi(e) {
  let r = n();
  if (!r.relayThinkingStripOwed) return;
  r.relayThinkingStripOwed = false, Y("info", "cli_teleport_relay_thinking_settled", { outcome: e });
}
function Xpo(e) {
  let r = n();
  if (r.fallbackSadEmitted.has(e)) return;
  r.fallbackSadEmitted.add(e), p("upgrade_teleport_cache", e), l(e);
}
function Jpo(e, r) {
  if (n().state.status !== "active") return;
  l("direct_served", e), s(r, `direct_served_${e}`), g1e("direct_served", r, e);
}
function Qpo(e, r) {
  let o = n();
  if (o.state.status !== "active") return;
  let a = e.at(-1);
  if (a !== void 0) o.forkDirectLines.add(a);
  p("upgrade_relay_fork_direct", r);
}
function Zpo(e) {
  let r = n().forkDirectLines;
  return r.size > 0 && e.some((o) => r.has(o));
}
function s(e, r) {
  p("upgrade_relay_end", `${e}_${r}`);
}
function l(e, r) {
  Y("warn", "cli_teleport_relay_fallback", { reason: e, ...r !== void 0 && { cause: r } });
}
function efo(e) {
  let r = d(e);
  if (r === void 0) return f0().status === "active";
  return g1e("context_reduced", "main", r), false;
}
function tfo(e) {
  return f0().status === "active" && d(e) === void 0;
}
function d(e) {
  let r = f0();
  if (r.status !== "active") return;
  let o = r.preAnchorLineUuids;
  if (e.length < o.length) return `live view has ${e.length} lines before its tail; the arm snapshot guarded ${o.length}`;
  for (let a = 0; a < o.length; a++) if (e[a] !== o[a]) return `pre-anchor line ${a} changed since arm`;
  return;
}
function nfo(e, r) {
  let o = n();
  if (o.state.status !== "active") return false;
  let a = o.toolsBaseline;
  if (!a.captured) return o.toolsBaseline = { captured: true, model: e, fingerprint: r }, true;
  if (e !== a.model) return false;
  if (a.fingerprint === r) return true;
  return g1e("tools_changed", "main", a.fingerprint === null ? "session gained a toolset after a toolless first relay-attempted dispatch" : r === null ? "session lost its toolset after a tooled first relay-attempted dispatch" : "outgoing toolset diverged from the first relay-attempted dispatch baseline"), false;
}
function rfo(e, r) {
  let o = n();
  if (o.state.status !== "active") return "not_comparable";
  let a = o.toolsBaseline;
  if (!a.captured) return "intact";
  if (e !== a.model) return "not_comparable";
  return a.fingerprint === r ? "intact" : "changed";
}
export {
  $po,
  ATi,
  B9e,
  Bpo,
  CTi,
  Fpo,
  Gpo,
  Hhi,
  ITi,
  Jpo,
  Kpo,
  NJt,
  PTi,
  Qpo,
  RTi,
  TTi,
  Upo,
  VEs,
  Vpo,
  Wpo,
  Xpo,
  Ypo,
  Zpo,
  efo,
  f0,
  fLn,
  g1e,
  jpo,
  mLn,
  nfo,
  qpo,
  rfo,
  tfo,
  vwr,
  xTi,
  zpo
};

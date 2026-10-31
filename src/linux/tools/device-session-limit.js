// linux/tools/device-session-limit.js — Claude Code 2.1.310（linux）模块 chunk-5z6t3gwt.js
import { p } from "../shared/chunk-2fe3b2b7.js";
import { te } from "../fs/gitlab-runner-authentication-token.js";
import { re, Ze } from "../shared/chunk-d2c47492.js";
import { i } from "../shared/environment.js";
import { IU } from "../shared/chunk-f65ac34f.js";
import { o, v, oe, u, yt } from "../vendor/zod/string-format.js";
var E = 2, xXs = '{"type":"hb"}', iGo = 15e3, O = 1e3, M = 3e4, PXs = 100, IXs = 1e4, OXs = 4e3, _ = 5e3, b = 2e4, x = 3e5, d = 0.2, N = "device", LQn = { tools_settled: 250, tools_changed: 5e3, connected_stale: 250 }, aGo = { hbIntervalMs: 1e4, stalenessMs: 25e3, rpcTimeoutMs: 6e4 }, l = { hbIntervalMs: { min: 2e3, max: 12e4 }, stalenessMs: { min: 5e3, max: 6e5 }, rpcTimeoutMs: { min: 5e3, max: 6e5 } }, R = 6e3, S = 1e3, I = Object.freeze(["no_credential", "user_mismatch", "upstream_401", "upstream_403", "upstream_4xx", "upstream_529", "upstream_error", "network_error", "malformed_response", "duplicate_device_id", "device_name_in_use", "device_session_limit"]);
function y(e) {
  if (typeof e !== "string" || e.length === 0) return;
  return I.includes(e) ? e : "unknown";
}
function MXs(e) {
  return e === "duplicate_device_id" || e === "device_name_in_use" || e === "device_session_limit";
}
var rz = { searchHint: "anthropic/searchHint", alwaysLoad: "anthropic/alwaysLoad", maxResultSizeChars: "anthropic/maxResultSizeChars", requiresUserInteraction: "anthropic/requiresUserInteraction" };
function DXs(e) {
  let n = e.deviceId !== void 0 && e.deviceId !== "";
  return { type: "connect", oauth_token: e.oauthToken, tools: e.tools, rtb_protocol_version: E, hb_capable: true, cancel_capable: true, ...n && { device_id: e.deviceId }, ...n && e.sessionId !== void 0 && e.sessionId !== "" && { session_id: e.sessionId } };
}
var C = 64, k = 1024, L = p(() => yt({ type: o().optional() })), A = p(() => u({ rtb_protocol_version: oe().optional(), hb_supported: oe().optional(), timings: oe().optional() }).transform((e) => ({ protocolVersion: w(e.rtb_protocol_version, e.hb_supported), timings: F(e.timings) }))), H = p(() => u({ reason: o().optional().catch(void 0), status: v().optional().catch(void 0), error: o().optional().catch(void 0) }));
function HXs(e) {
  let n;
  try {
    n = te(e);
  } catch {
    return { kind: "ignored" };
  }
  if (typeof n === "object" && n !== null) {
    if (Object.prototype.hasOwnProperty.call(n, "__proto__")) delete n.__proto__;
  }
  let t = L().safeParse(n);
  if (!t.success) return { kind: "ignored" };
  let r = t.data, s = r.type;
  if (s === void 0) return { kind: "rpc", message: r };
  if (typeof s !== "string") return { kind: "ignored" };
  switch (s) {
    case "connected":
      return { kind: "connected", ...A().parse(r) };
    case "hb_ack":
      return { kind: "hb_ack" };
    case "error": {
      let a = H().parse(r);
      return { kind: "error", reason: y(a.reason), status: a.status, detail: a.error === void 0 ? void 0 : re(a.error, k) };
    }
    default:
      return { kind: "unknown", frameType: re(s, C) };
  }
}
function w(e, n) {
  let t = typeof e === "number" && Number.isInteger(e) && e >= 0 ? e : 0;
  return Math.max(t, n === true ? 1 : 0);
}
function F(e) {
  let n = typeof e === "object" && e !== null && !Array.isArray(e) ? e : {};
  return { hbIntervalMs: c(n.hb_interval_ms, "hbIntervalMs"), stalenessMs: c(n.staleness_ms, "stalenessMs"), rpcTimeoutMs: c(n.rpc_timeout_ms, "rpcTimeoutMs") };
}
function c(e, n) {
  if (typeof e !== "number" || !Number.isFinite(e) || e <= 0) return aGo[n];
  let { min: t, max: r } = l[n];
  return Math.round(Math.min(Math.max(e, t), r));
}
function lGo(e) {
  let n = Math.min(e.hbIntervalMs, Math.max(Math.floor(e.stalenessMs / 2), l.hbIntervalMs.min));
  return { keepaliveIntervalMs: n, pongTimeoutMs: Math.max(2 * n + R, e.stalenessMs + S), rotateDrainMaxMs: e.rpcTimeoutMs, slotContentionFastAttempts: Math.ceil((e.stalenessMs + b) / _) };
}
function sGr(e, n, t, r = Math.random) {
  if (n > 0) {
    let s = n <= t ? _ : x, a = 1 - d + r() * (2 * d);
    return Math.round(s * a);
  }
  return Math.round(Math.min(O * 1.5 ** e, M) * (0.5 + r() * 0.5));
}
function NQn(e, n) {
  return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+/, "").slice(0, n).replace(/-+$/, "");
}
function YSt(e, n = 48) {
  return NQn(e, n) || N;
}
function nz() {
  return i.CLAUDE_CODE_REMOTE_TOOLS_FORWARD === true;
}
function QD() {
  return nz();
}
var Lr = "_host", iGr = "_host_context", f = /* @__PURE__ */ new WeakMap();
function LXs(e, n) {
  return f.set(e, n), e;
}
function hLe(e) {
  let n = f.get(e);
  return n === void 0 ? {} : { [iGr]: n };
}
var yLe = "device", D = ["container", "this-machine"], nKe = /^[a-z0-9](?:[a-z0-9-]{0,38}[a-z0-9])?$/, dGo = 40;
function pV(e) {
  return !ZD(e) && nKe.test(e);
}
var m = " (offline)";
function T(e) {
  return /^[\x20-\x7e]+$/.test(e);
}
function $Qn(e) {
  let n = e.trim();
  if (!T(n)) return;
  let t = n.toLowerCase().endsWith(m) ? n.slice(0, -m.length) : n, r = NQn(Ze(t, "."), dGo);
  return r === "" ? void 0 : r;
}
function eCe(e, n) {
  let t = e.trim();
  if (!T(t)) return false;
  let r = t.toLowerCase();
  if (ZD(r)) return false;
  if (r === n) return true;
  if (pV(r)) return false;
  let s = $Qn(t);
  return s !== void 0 && !ZD(s) && s === $Qn(n);
}
function _Le(e) {
  let n = $Qn(e);
  return ZD(e.trim().toLowerCase()) || n !== void 0 && ZD(n);
}
function mV() {
  return i.CLAUDE_CODE_REMOTE ? "container" : "this-machine";
}
function ZD(e) {
  return D.some((n) => n === e);
}
function YY() {
  return QD() ? { [Lr]: o().optional().describe("Optional. Name of an attached machine to run this tool call on; omit it to run in this session's own environment (the default). Use only a name this session listed as attached; the result says where it ran. Choose per call by which machine the command or file path concerns; the attached-machines note says what lives where and which are reachable now.") } : {};
}
var j = 40;
function S7(e) {
  let { [Lr]: n, ...t } = e;
  if (typeof n !== "string") return { requested: void 0, input: e };
  let r = n.trim();
  return { requested: r === "" || ZD(r) ? void 0 : r, input: t };
}
function aGr(e) {
  let n = S7(e).requested;
  return { requestedMachine: n, runsOnMachine: QD() && n !== void 0 && pV(n) ? n : void 0 };
}
function JT(e) {
  return re(IU(e), j);
}
function oz() {
  return `This call named a machine ("${Lr}") but was not forwarded to it; omit the field to run here.`;
}
function FQn() {
  return `Running tool calls on an attached machine is not enabled in this session; omit "${Lr}" to run here.`;
}
function wf(e) {
  return h(e) !== void 0;
}
function mgn(e) {
  let n = h(e);
  return n === void 0 ? void 0 : JT(n) || void 0;
}
function h(e) {
  if (typeof e !== "object" || e === null || !(Lr in e)) return;
  let n = e[Lr];
  if (typeof n !== "string") return;
  let t = n.trim();
  return t === "" || ZD(t) ? void 0 : t;
}
var Qv = "EnterPlanMode";
export {
  $Qn,
  DXs,
  FQn,
  HXs,
  IXs,
  JT,
  LQn,
  LXs,
  Lr,
  MXs,
  NQn,
  OXs,
  PXs,
  QD,
  Qv,
  S7,
  YSt,
  YY,
  ZD,
  _Le,
  aGo,
  aGr,
  dGo,
  eCe,
  hLe,
  iGo,
  iGr,
  lGo,
  mV,
  mgn,
  nKe,
  nz,
  oz,
  pV,
  rz,
  sGr,
  wf,
  xXs,
  yLe
};

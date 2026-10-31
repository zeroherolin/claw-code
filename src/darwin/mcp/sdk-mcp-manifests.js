// darwin/mcp/sdk-mcp-manifests.js — Claude Code 2.1.310（darwin）模块 chunk-8zgzfcyt.js
import { bni, pl, Ti, kn, k, Wn } from "../settings/global-config-and-gates.js";
import { N } from "../telemetry/anthropic-workspace-id.js";
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { i } from "../shared/environment.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { ay, hfi, Qm } from "../remote/local-agent.js";
import { nr } from "../remote/moved-directory.js";
import { ybn } from "./allowed-warning.js";
import { Lo } from "../agents/chunk-44729602.js";
import { KYe, FAr } from "./owner-account-only.js";
import { r4s } from "../shared/chunk-f0d2d1c6.js";
import { Ie } from "../plugins/chunk-c198f87f.js";
import { Ob } from "../telemetry/chunk-d4426fa7.js";
import { GE } from "../context/team-memory-sync.js";
import { Dde } from "../plugins/chunk-238ac5cd.js";
import { gx } from "../agents/api-system.js";
import { Jio, ays, Qio } from "./lifecycle-wakeup-source-v1.js";
import { r9e } from "../remote/chunk-9a53b808.js";
import { Ni } from "../shared/chunk-669ef766.js";
import { Db } from "../shared/chunk-cc3dea5c.js";
function i_r() {
  return Qm() && !k("tengu_melodic_ember", true);
}
function Khs(e, r) {
  if (!Qm()) return () => {
  };
  let o = e();
  return pl(() => {
    let t = e(), n = o && !t;
    if (o = t, n) r();
  });
}
var R = "tengu_ccr_sdk_mcp_remote_manifests";
function s0n() {
  return Wn("tengu_sdk_mcp_manifests", true);
}
var f = "sdk_mcp_tools_list_changed", T = "sdk_mcp_manifests";
function qhs(e) {
  if (!k("tengu_sdk_mcp_manifests", true)) return [];
  return e?.isRemoteTransport() !== true || KYe(e.sessionWriters()) && m() ? [f, T] : [f];
}
function Yhs(e) {
  return e.includes("sdkMcpServerManifests") ? c(e, 0) : void 0;
}
var d = ["payload", "request", "sdkMcpServerManifests"];
function c(e, r) {
  return r4s(e, (o, t) => {
    if (o !== d[r]) return t;
    return r === d.length - 1 ? "{}" : c(t, r + 1) ?? t;
  });
}
function m() {
  return k(R, false);
}
var s = 3e5, Idt = 3e5;
function g({ origin: e, frameCreatedAt: r, sessionWriters: o, now: t = Date.now() }) {
  if (e !== "host_per_send") return "no_origin_marker";
  let n = FAr({ frameCreatedAt: r, sessionWriters: o, maxFrameAgeMs: s, maxStatementAgeMs: Idt, now: t });
  if (n !== void 0) return n;
  return;
}
async function Xhs(e) {
  let r = g(e);
  if (r !== void 0) return r;
  if (m()) return;
  return await Pe(Ti().catch(() => null), 0) !== void 0 ? "flag_off" : "flag_unsettled";
}
var S = false;
function F() {
  let e = Lo(), r = kn(bni, S);
  return e.servedOnFacts ??= r.value === true && r.source === "payload", e.servedOnFacts;
}
var x = "ui_", _ = "ui_detach", E = "remote_cowork", b = /* @__PURE__ */ new Set([E, "remote_mobile"]), a = "vscode";
function i0n(e) {
  let r = ay();
  return !e.redactsWhatItPersists && (!e.isRemoteTransport || nr() && Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID) && (b.has(r ?? "") || hfi.has(r ?? "") && F()));
}
function u() {
  return Ob() && !i_r();
}
function hae(e) {
  return u() && i0n(e) && (!e.isRemoteTransport || KYe(e.sessionWriters));
}
function Jhs(e, r) {
  return e.isRemoteTransport && !r && u() && i0n(e);
}
function Wio() {
  return k("tengu_calm_osprey", true);
}
function Odt(e) {
  return typeof e === "string" && e.startsWith(x);
}
function Qhs(e) {
  try {
    let r = e();
    return r.isRemoteTransport && r.leavesBelowFloor;
  } catch (r) {
    return l(N(r)), true;
  }
}
function a0n(e, r) {
  return FAr({ frameCreatedAt: e.createdAt, sessionWriters: e.sessionWriters, maxFrameAgeMs: s, maxStatementAgeMs: Idt, now: r });
}
function l0n(e, r, o = Date.now) {
  if (!Odt(e)) return false;
  try {
    let t = r(), n = !t.isRemoteTransport || (t.isAtFloor || t.leavesBelowFloor && e === _) && a0n(t, o()) === void 0, M = e === _ && t.isAnySurfaceAttached;
    return !(i0n(t) && n && (M || u()));
  } catch (t) {
    return l(N(t)), true;
  }
}
function Zhs(e, r) {
  return e.isRemoteTransport && r && Ob() && !KYe(e.sessionWriters);
}
function W() {
  try {
    return Ni("prompt.submit", void 0, Ie().loadedModules.filter((e) => !Db(e)));
  } catch (e) {
    return l(N(e)), true;
  }
}
function Gio() {
  return W() || gx() || r9e();
}
function zio() {
  return Gio() || !A();
}
function A() {
  let e = Ie();
  return !e.hookRegistrationOwed && e.hookRegistrationInFlight === void 0 && e.hooksUnknownCause === void 0 && !Dde();
}
function a_r(e) {
  try {
    let r = e();
    if (!(hae(r) && (!r.isRemoteTransport || ay() === E))) return [];
    return zio() ? [Jio, ays] : [Jio];
  } catch (r) {
    return l(r), [];
  }
}
function Vio(e, r) {
  return Ni(GE, r === a ? { component: e, surface: r } : { component: e });
}
function eys(e) {
  return e === a ? Ie().hookRegistrationInFlight?.catch(() => {
  }) : void 0;
}
function l_r(e) {
  try {
    if (!Qm() || !hae(e()) || !A()) return [];
    return [Qio, ...ybn().options.filter((r) => Vio(r, a)).map((r) => `${Qio}:${r}`)];
  } catch (r) {
    return l(N(r)), [];
  }
}
export {
  Gio,
  Idt,
  Jhs,
  Khs,
  Odt,
  Qhs,
  Vio,
  Wio,
  Xhs,
  Yhs,
  Zhs,
  a0n,
  a_r,
  eys,
  hae,
  i0n,
  i_r,
  l0n,
  l_r,
  qhs,
  s0n,
  zio
};

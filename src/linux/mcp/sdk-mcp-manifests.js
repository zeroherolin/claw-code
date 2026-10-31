// linux/mcp/sdk-mcp-manifests.js — Claude Code 2.1.310（linux）模块 chunk-gwrs245d.js
import { Lti, ul, Ai, kn, k, Wn } from "../settings/global-config-and-gates.js";
import { N } from "../telemetry/anthropic-workspace-id.js";
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { i } from "../shared/environment.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { iy, Ifi, Qm } from "../remote/local-agent.js";
import { nr } from "../remote/moved-directory.js";
import { eSn } from "./allowed-warning.js";
import { Lo } from "../agents/chunk-44729602.js";
import { F9e, wCr } from "./owner-account-only.js";
import { AYs } from "../shared/chunk-f0d2d1c6.js";
import { Ie } from "../plugins/chunk-c198f87f.js";
import { IS } from "../telemetry/chunk-d4426fa7.js";
import { Wv } from "../context/team-memory-sync.js";
import { Ade } from "../plugins/chunk-238ac5cd.js";
import { fx } from "../agents/api-system.js";
import { Dio, Nhs, Hio } from "./lifecycle-wakeup-source-v1.js";
import { X6e } from "../remote/chunk-9a53b808.js";
import { Ni } from "../shared/chunk-669ef766.js";
import { DS } from "../shared/chunk-cc3dea5c.js";
function Jyr() {
  return Qm() && !k("tengu_melodic_ember", true);
}
function Ehs(e, r) {
  if (!Qm()) return () => {
  };
  let o = e();
  return ul(() => {
    let t = e(), n = o && !t;
    if (o = t, n) r();
  });
}
var R = "tengu_ccr_sdk_mcp_remote_manifests";
function GMn() {
  return Wn("tengu_sdk_mcp_manifests", true);
}
var f = "sdk_mcp_tools_list_changed", T = "sdk_mcp_manifests";
function khs(e) {
  if (!k("tengu_sdk_mcp_manifests", true)) return [];
  return e?.isRemoteTransport() !== true || F9e(e.sessionWriters()) && m() ? [f, T] : [f];
}
function Ths(e) {
  return e.includes("sdkMcpServerManifests") ? c(e, 0) : void 0;
}
var d = ["payload", "request", "sdkMcpServerManifests"];
function c(e, r) {
  return AYs(e, (o, t) => {
    if (o !== d[r]) return t;
    return r === d.length - 1 ? "{}" : c(t, r + 1) ?? t;
  });
}
function m() {
  return k(R, false);
}
var s = 3e5, Rdt = 3e5;
function g({ origin: e, frameCreatedAt: r, sessionWriters: o, now: t = Date.now() }) {
  if (e !== "host_per_send") return "no_origin_marker";
  let n = wCr({ frameCreatedAt: r, sessionWriters: o, maxFrameAgeMs: s, maxStatementAgeMs: Rdt, now: t });
  if (n !== void 0) return n;
  return;
}
async function Ahs(e) {
  let r = g(e);
  if (r !== void 0) return r;
  if (m()) return;
  return await Pe(Ai().catch(() => null), 0) !== void 0 ? "flag_off" : "flag_unsettled";
}
var S = false;
function F() {
  let e = Lo(), r = kn(Lti, S);
  return e.servedOnFacts ??= r.value === true && r.source === "payload", e.servedOnFacts;
}
var x = "ui_", _ = "ui_detach", E = "remote_cowork", b = /* @__PURE__ */ new Set([E, "remote_mobile"]), a = "vscode";
function zMn(e) {
  let r = iy();
  return !e.redactsWhatItPersists && (!e.isRemoteTransport || nr() && Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID) && (b.has(r ?? "") || Ifi.has(r ?? "") && F()));
}
function u() {
  return IS() && !Jyr();
}
function lae(e) {
  return u() && zMn(e) && (!e.isRemoteTransport || F9e(e.sessionWriters));
}
function Chs(e, r) {
  return e.isRemoteTransport && !r && u() && zMn(e);
}
function Aio() {
  return k("tengu_calm_osprey", true);
}
function xdt(e) {
  return typeof e === "string" && e.startsWith(x);
}
function Rhs(e) {
  try {
    let r = e();
    return r.isRemoteTransport && r.leavesBelowFloor;
  } catch (r) {
    return l(N(r)), true;
  }
}
function KMn(e, r) {
  return wCr({ frameCreatedAt: e.createdAt, sessionWriters: e.sessionWriters, maxFrameAgeMs: s, maxStatementAgeMs: Rdt, now: r });
}
function VMn(e, r, o = Date.now) {
  if (!xdt(e)) return false;
  try {
    let t = r(), n = !t.isRemoteTransport || (t.isAtFloor || t.leavesBelowFloor && e === _) && KMn(t, o()) === void 0, M = e === _ && t.isAnySurfaceAttached;
    return !(zMn(t) && n && (M || u()));
  } catch (t) {
    return l(N(t)), true;
  }
}
function xhs(e, r) {
  return e.isRemoteTransport && r && IS() && !F9e(e.sessionWriters);
}
function W() {
  try {
    return Ni("prompt.submit", void 0, Ie().loadedModules.filter((e) => !DS(e)));
  } catch (e) {
    return l(N(e)), true;
  }
}
function Cio() {
  return W() || fx() || X6e();
}
function Rio() {
  return Cio() || !A();
}
function A() {
  let e = Ie();
  return !e.hookRegistrationOwed && e.hookRegistrationInFlight === void 0 && e.hooksUnknownCause === void 0 && !Ade();
}
function Qyr(e) {
  try {
    let r = e();
    if (!(lae(r) && (!r.isRemoteTransport || iy() === E))) return [];
    return Rio() ? [Dio, Nhs] : [Dio];
  } catch (r) {
    return l(r), [];
  }
}
function xio(e, r) {
  return Ni(Wv, r === a ? { component: e, surface: r } : { component: e });
}
function Phs(e) {
  return e === a ? Ie().hookRegistrationInFlight?.catch(() => {
  }) : void 0;
}
function Zyr(e) {
  try {
    if (!Qm() || !lae(e()) || !A()) return [];
    return [Hio, ...eSn().options.filter((r) => xio(r, a)).map((r) => `${Hio}:${r}`)];
  } catch (r) {
    return l(N(r)), [];
  }
}
export {
  Ahs,
  Aio,
  Chs,
  Cio,
  Ehs,
  GMn,
  Jyr,
  KMn,
  Phs,
  Qyr,
  Rdt,
  Rhs,
  Rio,
  Ths,
  VMn,
  Zyr,
  khs,
  lae,
  xdt,
  xhs,
  xio,
  zMn
};

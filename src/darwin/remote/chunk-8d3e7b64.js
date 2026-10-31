// darwin/remote/chunk-8d3e7b64.js — Claude Code 2.1.310（darwin）模块 chunk-7nwr416d.js
import { nt } from "../context/not-admin-owned.js";
import { N } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { xes } from "./local-agent.js";
import { cC, Jar } from "./moved-directory.js";
class n {
  active = void 0;
  transportPersists = void 0;
  hostedWorker = false;
  hostOwnedLocalStdin = false;
  setActive(r) {
    this.active = r, this.transportPersists = r?.persistsOutboundFrames, this.hostedWorker = r?.isHostedWorker === true, this.hostOwnedLocalStdin = false;
  }
  remoteBridgeLive = null;
  bridgeMayBeLive() {
    return this.remoteBridgeLive === null || this.remoteBridgeLive();
  }
  markLocalTransport() {
    this.transportPersists = false;
  }
  markHeadlessStart(r) {
    this.hostOwnedLocalStdin = !r.sdkUrl && r.readsProcessStdin && !xes();
  }
}
var cS = new nt(() => new n());
function Dp(r) {
  return Jar({ hostedWorker: lcn(r), transportPersists: cS.of(r).transportPersists });
}
function Z0e(r) {
  return lcn(r) || cS.of(r).transportPersists !== false;
}
function Pzs(r) {
  let e = cS.of(r);
  return e.hostOwnedLocalStdin && e.transportPersists === false && !lcn(r) && !xes();
}
function Izs(r) {
  return cC() && cS.of(r).transportPersists === true;
}
function lcn(r) {
  return r.host.launchOptions.diskless() || cS.of(r).hostedWorker;
}
function eo(r) {
  return Dp(r) || cS.of(r).bridgeMayBeLive();
}
function YDo(r, e) {
  return Dp(r) ? XDo(e) : e;
}
function XDo(r) {
  return r.map((e) => ({ name: e.name, status: e.status }));
}
function JDo(r, e) {
  return Dp(r) ? [] : e;
}
function HFr(r, e, s, i = "last") {
  try {
    if (!Dp(r)) return i === "first" ? [e, ...s] : [...s, e];
    for (let o of s) t(`error_during_execution detail: ${o}`, { level: "error" });
    return [e];
  } catch (o) {
    return l(N(o)), [e];
  }
}
function fre(r, e, s) {
  return Dp(r) ? s : e;
}
export {
  Dp,
  HFr,
  Izs,
  JDo,
  Pzs,
  XDo,
  YDo,
  Z0e,
  cS,
  eo,
  fre,
  lcn
};

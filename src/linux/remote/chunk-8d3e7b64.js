// linux/remote/chunk-8d3e7b64.js — Claude Code 2.1.310（linux）模块 chunk-bxamkenk.js
import { nt } from "../context/not-admin-owned.js";
import { N } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { qZo } from "./local-agent.js";
import { aT, Ear } from "./moved-directory.js";
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
    this.hostOwnedLocalStdin = !r.sdkUrl && r.readsProcessStdin && !qZo();
  }
}
var db = new nt(() => new n());
function Lf(r) {
  return Ear({ hostedWorker: ccn(r), transportPersists: db.of(r).transportPersists });
}
function YDe(r) {
  return ccn(r) || db.of(r).transportPersists !== false;
}
function O2s(r) {
  let e = db.of(r);
  return e.hostOwnedLocalStdin && e.transportPersists === false && !ccn(r) && !qZo();
}
function M2s(r) {
  return aT() && db.of(r).transportPersists === true;
}
function ccn(r) {
  return r.host.launchOptions.diskless() || db.of(r).hostedWorker;
}
function eo(r) {
  return Lf(r) || db.of(r).bridgeMayBeLive();
}
function MLo(r, e) {
  return Lf(r) ? DLo(e) : e;
}
function DLo(r) {
  return r.map((e) => ({ name: e.name, status: e.status }));
}
function HLo(r, e) {
  return Lf(r) ? [] : e;
}
function P$r(r, e, s, i = "last") {
  try {
    if (!Lf(r)) return i === "first" ? [e, ...s] : [...s, e];
    for (let o of s) t(`error_during_execution detail: ${o}`, { level: "error" });
    return [e];
  } catch (o) {
    return l(N(o)), [e];
  }
}
function sre(r, e, s) {
  return Lf(r) ? s : e;
}
export {
  DLo,
  HLo,
  Lf,
  M2s,
  MLo,
  O2s,
  P$r,
  YDe,
  ccn,
  db,
  eo,
  sre
};

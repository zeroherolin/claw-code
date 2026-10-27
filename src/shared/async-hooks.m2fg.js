// shared/async-hooks.m2fg.js — Claude Code 2.1.310 模块 chunk-m2fgnje1.js
import { m$e, ke, ci, gk, kit, VM, Pn, RTn } from "../context/not-admin-owned.ersa.js";
import { In } from "../fs/node-modules.gp4v.js";
import { AsyncLocalStorage as m } from "async_hooks";
var i = { ccr: { controlChannel: true, modelCatalog: true, setPermissionMode: true, sessionRecord: true, fanout: true, presence: true, catchupReplay: true, bashExec: true, fileRead: true, sendNow: true }, ssh: { controlChannel: true, modelCatalog: true, setPermissionMode: true, sessionRecord: false, fanout: false, presence: false, catchupReplay: false, bashExec: false, fileRead: true, sendNow: false }, direct: { controlChannel: false, modelCatalog: false, setPermissionMode: false, sessionRecord: false, fanout: false, presence: false, catchupReplay: false, bashExec: false, fileRead: false, sendNow: false } };
var kYr = { isRemoteMode: false };
function tr() {
  return VM().remote;
}
var $lr = "Stopped waiting for the remote — the command may still complete there";
function Pt() {
  return Pn() || tr() !== null;
}
function xxe(e, o) {
  return Pt() ? o : e;
}
function dl() {
  return Ses(tr());
}
function Ses(e) {
  return e?.caps?.controlChannel === true && !e.viewerOnly;
}
function Ulr() {
  return false;
}
function ET(e) {
  return tr()?.caps?.[e] === true;
}
function CYr(e, o) {
  return o && !(e.isRemoteMode && e.viewerOnly);
}
function c(e) {
  return Promise.reject(Error(`sendControlRequest not yet wired for ${e} transport`));
}
function TYr(e, o, a, u, s = false) {
  if (!o.isRemoteMode) return kYr;
  return { kind: e, isRemoteMode: true, viewerOnly: a, caps: i[e], sessionId: u, ...s && { consoleProfileBearer: s }, sendMessage: o.sendMessage, cancelRequest: o.cancelRequest, cancelHeldMessages: o.cancelHeldMessages ?? (() => false), sendQueuedNow: o.sendQueuedNow ?? (() => Promise.resolve("failed")), workerSendsNow: o.workerSendsNow ?? (() => false), serviceTimeMs: o.serviceTimeMs ?? (() => {
    return;
  }), holdsSends: o.holdsSends ?? (() => false), disconnect: o.disconnect, sendControlRequest: o.sendControlRequest ?? (() => c(e)), ...false };
}
var n = new m();
function yg(e, o) {
  return n.run({ cwd: In(e) }, o);
}
function Xst(e) {
  let o = d();
  return o === void 0 ? n.exit(e) : n.run(o, e);
}
function tfi() {
  let e = t();
  return e?.call === void 0 ? void 0 : e.cwd;
}
function nfi(e) {
  return Pt() ? e() : n.exit(e);
}
function Wkn(e, o) {
  return yg(e ?? pe(), o);
}
function Gkn(e, o) {
  return e === null ? o() : Wkn(e.cwd, o);
}
function A1() {
  return d() !== void 0;
}
function zkn(e) {
  let o = t();
  while (o?.call !== void 0) o.cwd = In(e), o = r(o.call.outer);
  if (o) o.cwd = In(e);
  else kit(e);
}
function Vkn() {
  return t()?.cwd ?? gk();
}
function Pl() {
  if (t()?.cwd === void 0 && ci() === null) return null;
  return pe();
}
function pe() {
  try {
    return Vkn();
  } catch (e) {
    if (m$e(e) && ci() === null) throw e;
    return ke();
  }
}
function AYr() {
  return !A1() && Pt() ? void 0 : pe();
}
function Jst(e) {
  return RTn() ?? e;
}
function l(e) {
  return A1() ? e : Jst(e);
}
function Blr() {
  return l(pe());
}
function rfi() {
  try {
    let e = Pl();
    return e === null ? null : l(e);
  } catch {
    return null;
  }
}
function r(e) {
  let o = e;
  while (o?.call?.isOver === true) o = o.call.outer;
  return o;
}
function t() {
  return r(n.getStore());
}
function d() {
  let e = t();
  while (e?.call !== void 0) e = r(e.call.outer);
  return e;
}
export {
  $lr,
  A1,
  AYr,
  Blr,
  CYr,
  ET,
  Gkn,
  Jst,
  Pl,
  Pt,
  Ses,
  TYr,
  Ulr,
  Vkn,
  Wkn,
  Xst,
  dl,
  kYr,
  nfi,
  pe,
  rfi,
  tfi,
  tr,
  xxe,
  yg,
  zkn
};

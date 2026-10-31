// linux/shared/async-hooks.5238.js — Claude Code 2.1.310（linux）模块 chunk-xe386mry.js
import { sFe, ke, ci, mk, yit, BM, Pn, uAn } from "../context/not-admin-owned.js";
import { In } from "../fs/node-modules.js";
import { AsyncLocalStorage as m } from "async_hooks";
var i = { ccr: { controlChannel: true, modelCatalog: true, setPermissionMode: true, sessionRecord: true, fanout: true, presence: true, catchupReplay: true, bashExec: true, fileRead: true, sendNow: true }, ssh: { controlChannel: true, modelCatalog: true, setPermissionMode: true, sessionRecord: false, fanout: false, presence: false, catchupReplay: false, bashExec: false, fileRead: true, sendNow: false }, direct: { controlChannel: false, modelCatalog: false, setPermissionMode: false, sessionRecord: false, fanout: false, presence: false, catchupReplay: false, bashExec: false, fileRead: false, sendNow: false } };
var e9r = { isRemoteMode: false };
function tr() {
  return BM().remote;
}
var Elr = "Stopped waiting for the remote — the command may still complete there";
function Pt() {
  return Pn() || tr() !== null;
}
function Txe(e, o) {
  return Pt() ? o : e;
}
function ll() {
  return WZo(tr());
}
function WZo(e) {
  return e?.caps?.controlChannel === true && !e.viewerOnly;
}
function klr() {
  return false;
}
function bA(e) {
  return tr()?.caps?.[e] === true;
}
function t9r(e, o) {
  return o && !(e.isRemoteMode && e.viewerOnly);
}
function c(e) {
  return Promise.reject(Error(`sendControlRequest not yet wired for ${e} transport`));
}
function n9r(e, o, a, u, s = false) {
  if (!o.isRemoteMode) return e9r;
  return { kind: e, isRemoteMode: true, viewerOnly: a, caps: i[e], sessionId: u, ...s && { consoleProfileBearer: s }, sendMessage: o.sendMessage, cancelRequest: o.cancelRequest, cancelHeldMessages: o.cancelHeldMessages ?? (() => false), sendQueuedNow: o.sendQueuedNow ?? (() => Promise.resolve("failed")), workerSendsNow: o.workerSendsNow ?? (() => false), serviceTimeMs: o.serviceTimeMs ?? (() => {
    return;
  }), holdsSends: o.holdsSends ?? (() => false), disconnect: o.disconnect, sendControlRequest: o.sendControlRequest ?? (() => c(e)), ...false };
}
var n = new m();
function yg(e, o) {
  return n.run({ cwd: In(e) }, o);
}
function Gst(e) {
  let o = d();
  return o === void 0 ? n.exit(e) : n.run(o, e);
}
function _fi() {
  let e = t();
  return e?.call === void 0 ? void 0 : e.cwd;
}
function bfi(e) {
  return Pt() ? e() : n.exit(e);
}
function Ckn(e, o) {
  return yg(e ?? fe(), o);
}
function Rkn(e, o) {
  return e === null ? o() : Ckn(e.cwd, o);
}
function vB() {
  return d() !== void 0;
}
function xkn(e) {
  let o = t();
  while (o?.call !== void 0) o.cwd = In(e), o = r(o.call.outer);
  if (o) o.cwd = In(e);
  else yit(e);
}
function Pkn() {
  return t()?.cwd ?? mk();
}
function Pl() {
  if (t()?.cwd === void 0 && ci() === null) return null;
  return fe();
}
function fe() {
  try {
    return Pkn();
  } catch (e) {
    if (sFe(e) && ci() === null) throw e;
    return ke();
  }
}
function r9r() {
  return !vB() && Pt() ? void 0 : fe();
}
function zst(e) {
  return uAn() ?? e;
}
function l(e) {
  return vB() ? e : zst(e);
}
function Tlr() {
  return l(fe());
}
function Sfi() {
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
  Ckn,
  Elr,
  Gst,
  Pkn,
  Pl,
  Pt,
  Rkn,
  Sfi,
  Tlr,
  Txe,
  WZo,
  _fi,
  bA,
  bfi,
  e9r,
  fe,
  klr,
  ll,
  n9r,
  r9r,
  t9r,
  tr,
  vB,
  xkn,
  yg,
  zst
};

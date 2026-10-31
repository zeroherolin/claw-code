// linux/shared/chunk-e4a3aa33.js — Claude Code 2.1.310（linux）模块 chunk-61vn6n52.js
import { xe } from "./chunk-9e685b7f.js";
import { Gt, be, ee, j } from "../vendor/react/chunk-9a0b1ced.js";
import { Fyn } from "./chunk-67236fa7.js";
j();
var zI = Gt(null), Rgr = Gt(null), xgr = Gt(null);
function $8t() {
  let e = be(xgr);
  if (!e) throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");
  return e;
}
var Pgr = Gt(null);
function Yq() {
  let e = be(Pgr);
  if (!e) throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");
  return e;
}
function Qw() {
  let e = be(Rgr);
  if (!e) throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");
  return e;
}
function t() {
  let e = be(zI);
  if (!e) throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");
  return e;
}
function K(e) {
  let n = t();
  return xe(n, e);
}
function Gn() {
  return t().setState;
}
function Yno() {
  let e = t();
  return ee(() => Fyn(e.setState), [e]);
}
function xr() {
  return t();
}
function qo(e) {
  return xe(be(zI), e);
}
export {
  $8t,
  Gn,
  K,
  Pgr,
  Qw,
  Rgr,
  Yno,
  Yq,
  qo,
  xgr,
  xr,
  zI
};

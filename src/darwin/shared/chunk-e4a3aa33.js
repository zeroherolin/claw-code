// darwin/shared/chunk-e4a3aa33.js — Claude Code 2.1.310（darwin）模块 chunk-p82eferg.js
import { xe } from "./chunk-9e685b7f.js";
import { Gt, Se, te, j } from "../vendor/react/chunk-9a0b1ced.js";
import { n_n } from "./chunk-67236fa7.js";
j();
var XI = Gt(null), Ggr = Gt(null), zgr = Gt(null);
function J8t() {
  let e = Se(zgr);
  if (!e) throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");
  return e;
}
var Vgr = Gt(null);
function sq() {
  let e = Se(Vgr);
  if (!e) throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");
  return e;
}
function Zw() {
  let e = Se(Ggr);
  if (!e) throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");
  return e;
}
function t() {
  let e = Se(XI);
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
function Ero() {
  let e = t();
  return te(() => n_n(e.setState), [e]);
}
function xr() {
  return t();
}
function Yo(e) {
  return xe(Se(XI), e);
}
export {
  Ero,
  Ggr,
  Gn,
  J8t,
  K,
  Vgr,
  XI,
  Yo,
  Zw,
  sq,
  xr,
  zgr
};

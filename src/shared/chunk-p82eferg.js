// shared/chunk-p82eferg.js — Claude Code 2.1.310 模块 chunk-p82eferg.js
import { xe } from "./chunk-fdmmynxd.js";
import { Gt, Se, te, j } from "../vendor/react/chunk-s8vmszp2.js";
import { n_n } from "./chunk-bkvejkkf.js";
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

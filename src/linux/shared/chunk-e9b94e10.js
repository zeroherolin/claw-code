// linux/shared/chunk-e9b94e10.js — Claude Code 2.1.310（linux）模块 chunk-0er7yfq4.js
import { _Si, bSi, eqo } from "../hooks/tool-name.js";
import { Bc } from "../settings/global-config-and-gates.js";
import { ve } from "./chunk-fee3c428.js";
var e = ve(Bc(), (o) => o.set(null));
function gSi(o) {
  let t = o !== void 0 && o !== null;
  e.set(t ? _Si(o) : null);
}
function hSi(o) {
  return eqo(o) !== void 0 ? e.get() ?? void 0 : void 0;
}
function ySi(o, t) {
  if (eqo(o) !== void 0) e.set(t ?? null);
}
function r0e(o) {
  let t = eqo(o), m = e.get() ?? bSi;
  return t === void 0 ? void 0 : { table: m, paths: t };
}
export {
  gSi,
  hSi,
  r0e,
  ySi
};

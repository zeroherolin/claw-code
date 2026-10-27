// shared/chunk-ms35gg38.js — Claude Code 2.1.310 模块 chunk-ms35gg38.js
import { twi, nwi, xKo } from "../hooks/tool-name.v56n.js";
import { Bc } from "../settings/global-config-and-gates.27xj.js";
import { Ee } from "./chunk-f9xfyhm1.js";
var e = Ee(Bc(), (o) => o.set(null));
function Qbi(o) {
  let t = o !== void 0 && o !== null;
  e.set(t ? twi(o) : null);
}
function Zbi(o) {
  return xKo(o) !== void 0 ? e.get() ?? void 0 : void 0;
}
function ewi(o, t) {
  if (xKo(o) !== void 0) e.set(t ?? null);
}
function dLe(o) {
  let t = xKo(o), m = e.get() ?? nwi;
  return t === void 0 ? void 0 : { table: m, paths: t };
}
export {
  Qbi,
  Zbi,
  dLe,
  ewi
};

// linux/shared/chunk-669ef766.js — Claude Code 2.1.310（linux）模块 chunk-e36t8chg.js
import { mu } from "./chunk-b2bcd1a3.js";
import { Ie } from "../plugins/chunk-c198f87f.js";
import { Ber } from "../hooks/tool-name.js";
import { r0e } from "./chunk-e9b94e10.js";
function Ni(o, e, s) {
  let t = e && r0e(o);
  return (s ?? Ie().loadedModules).some((r) => r.hooks(o) && mu(r) && (e === void 0 || Ber(r.matcherFor(o), e, t)));
}
export {
  Ni
};

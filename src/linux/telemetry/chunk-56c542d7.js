// linux/telemetry/chunk-56c542d7.js — Claude Code 2.1.310（linux）模块 chunk-df5gvbw5.js
import { qo } from "../shared/chunk-e4a3aa33.js";
import { gy } from "../terminal/chunk-2969c20f.js";
import { k } from "../settings/global-config-and-gates.js";
function Vh(e) {
  if (e) return true;
  return gy() && k("tengu_cedar_marsh", false);
}
var DPe = -100;
function If() {
  return Vh(qo((e) => e.settings.prefersReducedMotion));
}
export {
  DPe,
  If,
  Vh
};

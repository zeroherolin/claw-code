// darwin/telemetry/chunk-56c542d7.js — Claude Code 2.1.310（darwin）模块 chunk-eewnxw2v.js
import { Yo } from "../shared/chunk-e4a3aa33.js";
import { yy } from "../terminal/chunk-2969c20f.js";
import { k } from "../settings/global-config-and-gates.js";
function Kh(e) {
  if (e) return true;
  return yy() && k("tengu_cedar_marsh", false);
}
var UPe = -100;
function Pp() {
  return Kh(Yo((e) => e.settings.prefersReducedMotion));
}
export {
  Kh,
  Pp,
  UPe
};

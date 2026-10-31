// linux/telemetry/chunk-ee26f33c.js — Claude Code 2.1.310（linux）模块 chunk-3rzpgy59.js
import { Uy } from "../remote/local-agent.js";
import { k } from "../settings/global-config-and-gates.js";
import { Lo } from "../agents/chunk-44729602.js";
var e = "tengu_buzzing_lightning";
function n() {
  let t = Lo(), o = void 0;
  return t.artifactReplPathEnabled ??= k(e, false), t.artifactReplPathEnabled;
}
function $wo() {
  return Uy() && n();
}
export {
  $wo
};

// linux/mcp/mcp-elicitation-waiting.js — Claude Code 2.1.310（linux）模块 chunk-jmeqy39x.js
import { p } from "../shared/chunk-2fe3b2b7.js";
import { us } from "../shared/chunk-869ced06.js";
import { B, $u } from "../vendor/zod/string-format.js";
var gJ = us({ kind: "mcp_elicitation", payload: p(() => $u((t) => typeof t === "object" && t !== null && "serverName" in t && "params" in t)), result: p(() => $u((t) => typeof t === "object" && t !== null)), default: { action: "cancel" }, holdsTop: true }), kme = us({ kind: "mcp_elicitation_waiting", payload: p(() => $u((t) => typeof t === "object" && t !== null && "serverName" in t && "params" in t)), result: p(() => B(["dismiss", "retry", "cancel", "cancelled"])), default: "cancelled" });
function Pbo(t) {
  return t === gJ.kind || t === kme.kind;
}
export {
  Pbo,
  gJ,
  kme
};

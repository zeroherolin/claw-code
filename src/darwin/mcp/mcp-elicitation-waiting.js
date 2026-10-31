// darwin/mcp/mcp-elicitation-waiting.js — Claude Code 2.1.310（darwin）模块 chunk-c3vwje1x.js
import { f } from "../shared/chunk-2fe3b2b7.js";
import { os } from "../shared/chunk-869ced06.js";
import { B, Eu } from "../vendor/zod/string-format.js";
var v7 = os({ kind: "mcp_elicitation", payload: f(() => Eu((t) => typeof t === "object" && t !== null && "serverName" in t && "params" in t)), result: f(() => Eu((t) => typeof t === "object" && t !== null)), default: { action: "cancel" }, holdsTop: true }), xme = os({ kind: "mcp_elicitation_waiting", payload: f(() => Eu((t) => typeof t === "object" && t !== null && "serverName" in t && "params" in t)), result: f(() => B(["dismiss", "retry", "cancel", "cancelled"])), default: "cancelled" });
function tbo(t) {
  return t === v7.kind || t === xme.kind;
}
export {
  tbo,
  v7,
  xme
};

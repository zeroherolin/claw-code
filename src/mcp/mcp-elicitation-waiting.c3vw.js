// mcp/mcp-elicitation-waiting.c3vw.js — Claude Code 2.1.310 模块 chunk-c3vwje1x.js
import { f } from "../shared/chunk-nyvhtfb3.js";
import { os } from "../shared/chunk-98em9746.js";
import { B, Eu } from "../vendor/zod/string-format.k395.js";
var v7 = os({ kind: "mcp_elicitation", payload: f(() => Eu((t) => typeof t === "object" && t !== null && "serverName" in t && "params" in t)), result: f(() => Eu((t) => typeof t === "object" && t !== null)), default: { action: "cancel" }, holdsTop: true }), xme = os({ kind: "mcp_elicitation_waiting", payload: f(() => Eu((t) => typeof t === "object" && t !== null && "serverName" in t && "params" in t)), result: f(() => B(["dismiss", "retry", "cancel", "cancelled"])), default: "cancelled" });
function tbo(t) {
  return t === v7.kind || t === xme.kind;
}
export {
  tbo,
  v7,
  xme
};

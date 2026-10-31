// linux/tools/chunk-343c37e5.js — Claude Code 2.1.310（linux）模块 chunk-k5k1rgxr.js
import { W } from "../shared/chunk-37dd5dd4.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { Azn } from "../core/conversation-engine.js";
import { dBn, kbo, s1e } from "./mcp-tool.js";
import { Eto, olt } from "../ui/space-between.js";
import { o, T, u, $e } from "../vendor/zod/string-format.js";
import { wB } from "../shared/chunk-8bf008d9.js";
var f = 256, a = null;
function Uie(e, n, t = false) {
  let r = Azn(e);
  return r ? x.of(n)(e, r.serverName, r.toolName, t) : void 0;
}
var y = p(() => $e([kbo(), u({ content: $e([o(), T(u({ type: o() }).passthrough())]) }).transform((e) => e.content)])), REi = { isResultTruncated(e, n) {
  let t = g(e);
  return olt(t, n) || olt(l(t), n);
}, renderToolResultMessage(e, n, { verbose: t }) {
  return Eto(l(e), t);
} }, x = new W(() => wB(d, (e, n, t, r) => r ? `${e}\0save` : e, f));
function d(e, n, t, r = false) {
  let s = () => {
    throw Error("Display-only MCP tool invoked — it exists only for transcript rendering");
  };
  return { ...s1e, name: e, mcpInfo: { serverName: n, toolName: t }, isEnabled: () => false, outputSchema: y(), uiTableKey: dBn, userFacingName: () => `${n} - ${t} (MCP)`, ...r && a?.isMemorySaveCall({ serverName: n, toolName: t }) && { userFacingName: () => a.memorySaveRowName(t), renderToolUseMessage: (i) => a.memorySaveArgument(i) }, description: async () => s(), prompt: async () => s(), call: async () => s(), checkPermissions: async () => s() };
}
function g(e) {
  let n = typeof e === "object" && e !== null && !Array.isArray(e) && "content" in e ? e.content : e;
  if (typeof n === "string") return n;
  return Array.isArray(n) && n.every((t) => typeof t === "object" && t !== null) ? n : void 0;
}
var O = /\x1b\]8;[^;\x07\n\r\x18\x1a\x1b]*;([^\x07\n\r\x18\x1a\x1b]*)(?:\x07|\x1b\\)|\x1b\[[0-?]*[ -/]*[@-~]|\x1b[\]P_X^][^\x07\n\r\x18\x1a\x1b]*(?:\x07|\x1b\\)/g, b = /[\x00-\x08\x0b-\x1f\x7f-\x9f]/g, S = /\\u001b/gi, M = /\\u00(?:0[0-8b-f]|1[0-9a-f]|7f|[89][0-9a-f])/gi;
function c(e) {
  let n = "", t = () => n ? ` <${n}>` : "";
  return (e.replace(O, (s, i) => {
    if (i === void 0) return "";
    let m = t();
    return n = i, m;
  }) + t()).replace(b, "").replace(S, "\\u241b").replace(M, "\\u2426");
}
function l(e) {
  if (typeof e === "string") return c(e);
  return e?.map((n) => n.type === "text" && "text" in n ? { type: "text", text: c(String(n.text ?? "")) } : n);
}
export {
  REi,
  Uie
};

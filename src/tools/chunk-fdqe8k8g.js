// tools/chunk-fdqe8k8g.js — Claude Code 2.1.310 模块 chunk-fdqe8k8g.js
import { W } from "../shared/chunk-3y73jbfr.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { KGn } from "../core/conversation-engine.31gx.js";
import { S1n, VSo, fBe } from "./mcp-tool.d3qb.js";
import { qto, dlt } from "../ui/space-between.gnm2.js";
import { o, C, u, Fe } from "../vendor/zod/string-format.k395.js";
import { T1 } from "../shared/chunk-bhdett2m.js";
var m = 256, a = null;
function qie(e, n, t = false) {
  let r = KGn(e);
  return r ? x.of(n)(e, r.serverName, r.toolName, t) : void 0;
}
var y = f(() => Fe([VSo(), u({ content: Fe([o(), C(u({ type: o() }).passthrough())]) }).transform((e) => e.content)])), hki = { isResultTruncated(e, n) {
  let t = g(e);
  return dlt(t, n) || dlt(p(t), n);
}, renderToolResultMessage(e, n, { verbose: t }) {
  return qto(p(e), t);
} }, x = new W(() => T1(d, (e, n, t, r) => r ? `${e}\0save` : e, m));
function d(e, n, t, r = false) {
  let s = () => {
    throw Error("Display-only MCP tool invoked — it exists only for transcript rendering");
  };
  return { ...fBe, name: e, mcpInfo: { serverName: n, toolName: t }, isEnabled: () => false, outputSchema: y(), uiTableKey: S1n, userFacingName: () => `${n} - ${t} (MCP)`, ...r && a?.isMemorySaveCall({ serverName: n, toolName: t }) && { userFacingName: () => a.memorySaveRowName(t), renderToolUseMessage: (i) => a.memorySaveArgument(i) }, description: async () => s(), prompt: async () => s(), call: async () => s(), checkPermissions: async () => s() };
}
function g(e) {
  let n = typeof e === "object" && e !== null && !Array.isArray(e) && "content" in e ? e.content : e;
  if (typeof n === "string") return n;
  return Array.isArray(n) && n.every((t) => typeof t === "object" && t !== null) ? n : void 0;
}
var T = /\x1b\]8;[^;\x07\n\r\x18\x1a\x1b]*;([^\x07\n\r\x18\x1a\x1b]*)(?:\x07|\x1b\\)|\x1b\[[0-?]*[ -/]*[@-~]|\x1b[\]P_X^][^\x07\n\r\x18\x1a\x1b]*(?:\x07|\x1b\\)/g, O = /[\x00-\x08\x0b-\x1f\x7f-\x9f]/g, b = /\\u001b/gi, S = /\\u00(?:0[0-8b-f]|1[0-9a-f]|7f|[89][0-9a-f])/gi;
function c(e) {
  let n = "", t = () => n ? ` <${n}>` : "";
  return (e.replace(T, (s, i) => {
    if (i === void 0) return "";
    let l = t();
    return n = i, l;
  }) + t()).replace(O, "").replace(b, "\\u241b").replace(S, "\\u2426");
}
function p(e) {
  if (typeof e === "string") return c(e);
  return e?.map((n) => n.type === "text" && "text" in n ? { type: "text", text: c(String(n.text ?? "")) } : n);
}
export {
  hki,
  qie
};

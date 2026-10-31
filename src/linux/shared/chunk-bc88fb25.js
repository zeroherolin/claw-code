// linux/shared/chunk-bc88fb25.js — Claude Code 2.1.310（linux）模块 chunk-v2m68x0a.js
import { p } from "./chunk-2fe3b2b7.js";
import { Fo } from "../core/conversation-engine.js";
import { o, oe, T, u, A } from "../vendor/zod/string-format.js";
var a_s = "Resumed agent. Its final report is not in this message.", l_s = "Resumed agent. Its final report follows this JSON, framed by the harness.";
function Plo({ displayName: e, content: n }) {
  return `Resumed agent ${e}. Result:

${Fo(n, `
`) || "(no text output)"}`;
}
var Ilo = p(() => u({ message: o().optional(), display: o().optional(), inlineHandback: u({ displayName: o(), content: T(u({ type: A("text"), text: o() })) }).optional().catch(void 0), routing: oe().optional(), request_id: oe().optional(), target: oe().optional() }));
function Olo(e) {
  if (e.routing) return;
  if (e.request_id !== void 0 && e.target !== void 0) return;
  return e.display ?? (e.inlineHandback ? Plo(e.inlineHandback) : e.message);
}
function d_s(e) {
  let n = Ilo().safeParse(e);
  return n.success ? Olo(n.data) ?? "" : "";
}
export {
  Ilo,
  Olo,
  Plo,
  a_s,
  d_s,
  l_s
};

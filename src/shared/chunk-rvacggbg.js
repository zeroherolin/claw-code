// shared/chunk-rvacggbg.js — Claude Code 2.1.310 模块 chunk-rvacggbg.js
import { f } from "./chunk-nyvhtfb3.js";
import { $o } from "../core/conversation-engine.31gx.js";
import { o, oe, C, u, T } from "../vendor/zod/string-format.k395.js";
var N_s = "Resumed agent. Its final report is not in this message.", F_s = "Resumed agent. Its final report follows this JSON, framed by the harness.";
function Ylo({ displayName: e, content: n }) {
  return `Resumed agent ${e}. Result:

${$o(n, `
`) || "(no text output)"}`;
}
var Xlo = f(() => u({ message: o().optional(), display: o().optional(), inlineHandback: u({ displayName: o(), content: C(u({ type: T("text"), text: o() })) }).optional().catch(void 0), routing: oe().optional(), request_id: oe().optional(), target: oe().optional() }));
function Jlo(e) {
  if (e.routing) return;
  if (e.request_id !== void 0 && e.target !== void 0) return;
  return e.display ?? (e.inlineHandback ? Ylo(e.inlineHandback) : e.message);
}
function $_s(e) {
  let n = Xlo().safeParse(e);
  return n.success ? Jlo(n.data) ?? "" : "";
}
export {
  $_s,
  F_s,
  Jlo,
  N_s,
  Xlo,
  Ylo
};

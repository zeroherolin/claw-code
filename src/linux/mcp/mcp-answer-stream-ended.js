// linux/mcp/mcp-answer-stream-ended.js — Claude Code 2.1.310（linux）模块 chunk-stzrz9z3.js
import { Ky } from "../shared/chunk-57ff8cc1.js";
var qAe = "2025-11-25", Kye = "2026-07-28", wce = "reopen_refetch", Let = "before_handler", FJn = 4096, e8s = 16384, MWt = "The tool call was interrupted before a result was received. It may or may not have completed on the server — verify before assuming it succeeded, and retry if needed.", t8s = 1e3, cWr = "The outcome is unknown: the call may have finished, may still be running, or may never have started. Check what it did before you repeat it.";
function UJn(e, t) {
  return `MCP server "${e}" never answered tool "${t}". ${cWr}`;
}
var n8s = "mcp_answer_stream_ended", r8s = "mcp_call_not_sent_again", BJn = "mcp_call_unanswered", o8s = "The server asked the user a question, and no answer came before the time limit. Do not call this tool again in this turn. Tell the user that the server's question got no answer, and wait for their reply.", s8s = "mcp_question_unanswered", K8 = 16777216, Wre = 5, _ = 1e3, o = 3e4, i8s = 1e4;
function PSt(e) {
  return Ky({ attempt: e, baseMs: _, capMs: o });
}
var jJn = 8, Vjo = 3e4, a8s = 3e5, DWt = "inode/directory";
function YAe(e) {
  return e.replace(/[^\x20-\x7e]/g, "").slice(0, 32);
}
export {
  BJn,
  DWt,
  FJn,
  K8,
  Kye,
  Let,
  MWt,
  PSt,
  UJn,
  Vjo,
  Wre,
  YAe,
  a8s,
  cWr,
  e8s,
  i8s,
  jJn,
  n8s,
  o8s,
  qAe,
  r8s,
  s8s,
  t8s,
  wce
};

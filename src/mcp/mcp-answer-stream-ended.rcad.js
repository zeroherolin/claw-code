// mcp/mcp-answer-stream-ended.rcad.js — Claude Code 2.1.310 模块 chunk-rcadg6ze.js
import { Ky } from "../shared/chunk-3kevgx4j.js";
var JTe = "2025-11-25", Qye = "2026-07-28", Ace = "reopen_refetch", Wet = "before_handler", B7n = 4096, R8s = 16384, jWt = "The tool call was interrupted before a result was received. It may or may not have completed on the server — verify before assuming it succeeded, and retry if needed.", x8s = 1e3, vWr = "The outcome is unknown: the call may have finished, may still be running, or may never have started. Check what it did before you repeat it.";
function j7n(e, t) {
  return `MCP server "${e}" never answered tool "${t}". ${vWr}`;
}
var P8s = "mcp_answer_stream_ended", I8s = "mcp_call_not_sent_again", W7n = "mcp_call_unanswered", O8s = "The server asked the user a question, and no answer came before the time limit. Do not call this tool again in this turn. Tell the user that the server's question got no answer, and wait for their reply.", M8s = "mcp_question_unanswered", Z8 = 16777216, Yre = 5, _ = 1e3, o = 3e4, H8s = 1e4;
function Cbt(e) {
  return Ky({ attempt: e, baseMs: _, capMs: o });
}
var G7n = 8, eWo = 3e4, D8s = 3e5, WWt = "inode/directory";
function QTe(e) {
  return e.replace(/[^\x20-\x7e]/g, "").slice(0, 32);
}
export {
  Ace,
  B7n,
  Cbt,
  D8s,
  G7n,
  H8s,
  I8s,
  JTe,
  M8s,
  O8s,
  P8s,
  QTe,
  Qye,
  R8s,
  W7n,
  WWt,
  Wet,
  Yre,
  Z8,
  eWo,
  j7n,
  jWt,
  vWr,
  x8s
};

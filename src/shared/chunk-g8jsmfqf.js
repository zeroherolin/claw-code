// shared/chunk-g8jsmfqf.js — Claude Code 2.1.310 模块 chunk-g8jsmfqf.js
import { qoe } from "../mcp/allowed-warning.j2d4.js";
import { eU } from "../tasks/continued-in.f5qq.js";
function LIe(e, o) {
  if (qoe(e)) return;
  return { uuid: typeof e.source_uuid === "string" && e.source_uuid ? e.source_uuid : o, content: e.prompt, isMeta: Boolean(e.isMeta), origin: eU(e.origin, e.commandMode, e.runId) };
}
export {
  LIe
};

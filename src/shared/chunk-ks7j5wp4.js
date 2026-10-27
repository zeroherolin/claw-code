// shared/chunk-ks7j5wp4.js — Claude Code 2.1.310 模块 chunk-ks7j5wp4.js
import { i } from "./environment.9a41.js";
import { QRe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
function B0e() {
  let e = i.CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL;
  if (!e || e.toLowerCase() === "inherit") return;
  if (i.CLAUDE_CODE_SUBAGENT_MODEL_FORCE && QRe("CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL")?.trim() !== e) return;
  return e;
}
export {
  B0e
};

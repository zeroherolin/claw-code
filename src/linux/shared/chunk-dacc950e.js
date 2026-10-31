// linux/shared/chunk-dacc950e.js — Claude Code 2.1.310（linux）模块 chunk-27jj32jc.js
import { i } from "./environment.js";
import { VRe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
function HDe() {
  let e = i.CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL;
  if (!e || e.toLowerCase() === "inherit") return;
  if (i.CLAUDE_CODE_SUBAGENT_MODEL_FORCE && VRe("CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL")?.trim() !== e) return;
  return e;
}
export {
  HDe
};

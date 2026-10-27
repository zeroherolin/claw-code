// workflows/user-invocable-only.4ggs.js — Claude Code 2.1.310 模块 chunk-4ggs0m06.js
import { C_, VK } from "../context/not-admin-owned.ersa.js";
import { i } from "../shared/environment.9a41.js";
import { mt } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import { Lo } from "../agents/chunk-j350yvzv.js";
import { Rt } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
import { jm } from "./managed-settings.qezs.js";
import { To } from "../permissions/max-thinking-tokens.hx3h.js";
import { fL } from "../git/artifact-capabilities.87hz.js";
import { v4, $V } from "../shared/allow-bundled-skills.k5t2.js";
function n1e(o) {
  let l = Lo();
  return l.workflowAuthoringSkillAvailable ??= e(), l.workflowAuthoringSkillAvailable && !$V(fL) && (o === void 0 || r(o));
}
function e() {
  if (!jm()) return false;
  if (v4() || C_()) return false;
  if (i.CLAUDE_CODE_ENTRYPOINT === "local-agent") return false;
  let o = mt().skillOverrides?.[fL];
  if (o === "off" || o === "user-invocable-only") return false;
  let l = VK();
  if (l !== void 0 && !l.includes(fL)) return false;
  return true;
}
function r(o) {
  return o.some((l) => Rt(l, To));
}
export {
  n1e
};

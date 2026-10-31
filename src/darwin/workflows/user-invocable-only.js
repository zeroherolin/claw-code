// darwin/workflows/user-invocable-only.js — Claude Code 2.1.310（darwin）模块 chunk-4ggs0m06.js
import { C_, VK } from "../context/not-admin-owned.js";
import { i } from "../shared/environment.js";
import { mt } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { Lo } from "../agents/chunk-44729602.js";
import { Rt } from "../context/tool-result-clearing-after-idle-server-report.js";
import { jm } from "./managed-settings.js";
import { To } from "../permissions/max-thinking-tokens.js";
import { fL } from "../git/artifact-capabilities.js";
import { v4, $V } from "../shared/allow-bundled-skills.js";
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

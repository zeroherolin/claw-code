// linux/workflows/user-invocable-only.js — Claude Code 2.1.310（linux）模块 chunk-4rzrazb5.js
import { k_, Lq } from "../context/not-admin-owned.js";
import { i } from "../shared/environment.js";
import { pt } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { Lo } from "../agents/chunk-44729602.js";
import { Rt } from "../context/tool-result-clearing-after-idle-server-report.js";
import { jm } from "./managed-settings.js";
import { Ao } from "../permissions/max-thinking-tokens.js";
import { c0 } from "../git/artifact-capabilities.js";
import { f5, RV } from "../shared/allow-bundled-skills.js";
function VUe(o) {
  let l = Lo();
  return l.workflowAuthoringSkillAvailable ??= e(), l.workflowAuthoringSkillAvailable && !RV(c0) && (o === void 0 || r(o));
}
function e() {
  if (!jm()) return false;
  if (f5() || k_()) return false;
  if (i.CLAUDE_CODE_ENTRYPOINT === "local-agent") return false;
  let o = pt().skillOverrides?.[c0];
  if (o === "off" || o === "user-invocable-only") return false;
  let l = Lq();
  if (l !== void 0 && !l.includes(c0)) return false;
  return true;
}
function r(o) {
  return o.some((l) => Rt(l, Ao));
}
export {
  VUe
};

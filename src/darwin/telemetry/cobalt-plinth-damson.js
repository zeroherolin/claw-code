// darwin/telemetry/cobalt-plinth-damson.js — Claude Code 2.1.310（darwin）模块 chunk-6bqzpy6h.js
import { Z } from "../artifacts/same-account.js";
import { k } from "../settings/global-config-and-gates.js";
import { i } from "../shared/environment.js";
import { a } from "./chunk-9097a12b.js";
function ef() {
  let t = Z();
  if (t.toolsetLatch === null) t.toolsetLatch = i.CLAUDE_CODE_ARTIFACT_TOOLSET ?? k("tengu_cobalt_plinth_damson", false) === true, a("tengu_artifact_toolset", { on: t.toolsetLatch });
  return t.toolsetLatch;
}
export {
  ef
};

// telemetry/cobalt-plinth-damson.6bqz.js — Claude Code 2.1.310 模块 chunk-6bqzpy6h.js
import { Z } from "../artifacts/same-account.bxg8.js";
import { k } from "../settings/global-config-and-gates.27xj.js";
import { i } from "../shared/environment.9a41.js";
import { a } from "./chunk-wq923bwc.js";
function ef() {
  let t = Z();
  if (t.toolsetLatch === null) t.toolsetLatch = i.CLAUDE_CODE_ARTIFACT_TOOLSET ?? k("tengu_cobalt_plinth_damson", false) === true, a("tengu_artifact_toolset", { on: t.toolsetLatch });
  return t.toolsetLatch;
}
export {
  ef
};

// linux/telemetry/chunk-04e1acdf.js — Claude Code 2.1.310（linux）模块 chunk-2gvtp5cn.js
import { Lo } from "../agents/chunk-44729602.js";
import { i } from "../shared/environment.js";
var n = 3;
var _ = "tengu_hazel_trellis";
function $k() {
  let e = i.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH;
  if (e !== void 0) return e;
  let t = Lo();
  if (t.maxSubagentSpawnDepthFromGrowthBook === void 0) {
    let { getFeatureValue_CACHED_MAY_BE_STALE: a } = import.meta.require("../cli/answer-next-growth-book-remote-eval-with.js"), { getCachedClientData: A } = import.meta.require("../settings/check-has-trust-dialog-accepted.js"), o = A()?.[_], r = u(o) ? o : a(_, n);
    t.maxSubagentSpawnDepthFromGrowthBook = u(r) ? r : n;
  }
  return t.maxSubagentSpawnDepthFromGrowthBook;
}
function u(e) {
  return typeof e === "number" && Number.isInteger(e) && e >= 1;
}
export {
  $k
};

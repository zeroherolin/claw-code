// linux/shared/chunk-5cc0d77a.js — Claude Code 2.1.310（linux）模块 chunk-p6e9mq3q.js
import { xp, TC } from "../context/not-admin-owned.js";
import { bO } from "../telemetry/bg-roster-parse-failed.js";
import { er } from "../settings/workflow-launch-exec.js";
import { nw } from "../cli/chunk-af2447be.js";
function t$n(e, n) {
  let o = nw("--fast-mode");
  if (o !== "on" && o !== "off") return;
  TC({ ...xp() ?? {}, fastMode: e }), er(), bO("--fast-mode", [], e ? "on" : "off", void 0, n);
}
export {
  t$n
};

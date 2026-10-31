// linux/shared/chunk-1bf5cfbe.js — Claude Code 2.1.310（linux）模块 chunk-yfha6bzq.js
import { d } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { ad, lo, Wa, RE } from "../telemetry/bg-roster-parse-failed.js";
import { _ye } from "./chunk-3484f8f6.js";
async function VHn(r, o) {
  if (!_ye()) return;
  try {
    let e = await lo(r, o);
    if (!e || !Wa(e) || e.state === "stopped" || RE(e)) return;
    await ad(r, { ...e, state: "stopped", updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, o);
  } catch (e) {
    t(`stop not recorded on the job's row: ${d(e)}`, { level: "error" });
  }
}
export {
  VHn
};

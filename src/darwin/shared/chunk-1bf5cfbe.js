// darwin/shared/chunk-1bf5cfbe.js — Claude Code 2.1.310（darwin）模块 chunk-hfn0s647.js
import { d } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { ad, lo, Ga, xv } from "../telemetry/bg-roster-parse-failed.js";
import { Rye } from "./chunk-3484f8f6.js";
async function oDn(r, o) {
  if (!Rye()) return;
  try {
    let e = await lo(r, o);
    if (!e || !Ga(e) || e.state === "stopped" || xv(e)) return;
    await ad(r, { ...e, state: "stopped", updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, o);
  } catch (e) {
    t(`stop not recorded on the job's row: ${d(e)}`, { level: "error" });
  }
}
export {
  oDn
};

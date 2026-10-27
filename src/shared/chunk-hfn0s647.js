// shared/chunk-hfn0s647.js — Claude Code 2.1.310 模块 chunk-hfn0s647.js
import { d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { ad, lo, Ga, xv } from "../telemetry/bg-roster-parse-failed.yhsj.js";
import { Rye } from "./chunk-3jqwtmc6.js";
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

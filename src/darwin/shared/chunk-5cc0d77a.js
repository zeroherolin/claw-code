// darwin/shared/chunk-5cc0d77a.js — Claude Code 2.1.310（darwin）模块 chunk-sjqrd429.js
import { xf, RA } from "../context/not-admin-owned.js";
import { PO } from "../telemetry/bg-roster-parse-failed.js";
import { er } from "../settings/workflow-launch-exec.js";
import { Zb } from "../cli/chunk-af2447be.js";
function mFn(e, n) {
  let o = Zb("--fast-mode");
  if (o !== "on" && o !== "off") return;
  RA({ ...xf() ?? {}, fastMode: e }), er(), PO("--fast-mode", [], e ? "on" : "off", void 0, n);
}
export {
  mFn
};

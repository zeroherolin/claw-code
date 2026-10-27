// shared/chunk-sjqrd429.js — Claude Code 2.1.310 模块 chunk-sjqrd429.js
import { xf, RA } from "../context/not-admin-owned.ersa.js";
import { PO } from "../telemetry/bg-roster-parse-failed.yhsj.js";
import { er } from "../settings/workflow-launch-exec.t4r2.js";
import { Zb } from "../cli/chunk-33ax6j5s.js";
function mFn(e, n) {
  let o = Zb("--fast-mode");
  if (o !== "on" && o !== "off") return;
  RA({ ...xf() ?? {}, fastMode: e }), er(), PO("--fast-mode", [], e ? "on" : "off", void 0, n);
}
export {
  mFn
};

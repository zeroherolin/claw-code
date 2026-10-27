// shared/chunk-gm8g4ma7.js — Claude Code 2.1.310 模块 chunk-gm8g4ma7.js
import { _r } from "../plugins/chunk-x0a7sawk.js";
import { R } from "../telemetry/anthropic-workspace-id.36ys.js";
import { _o } from "../telemetry/bg-roster-parse-failed.yhsj.js";
import { Zm, Et } from "../telemetry/chunk-q6tk46bn.js";
import { z } from "./chunk-mxa4mwnj.js";
import { mkdir as i } from "fs/promises";
import { join as a } from "path";
async function sgs(e, r) {
  if (z() && r !== void 0 && _r(e)) {
    await n(r, { namespace: "job", jobId: e });
    return;
  }
  await i(_o(e), { recursive: true });
}
async function HUe(e, r) {
  if (z() && r !== void 0 && _r(e)) {
    await n(r, c(e));
    return;
  }
  await i(a(_o(e), "tmp"), { recursive: true });
}
function c(e) {
  return { namespace: "job", jobId: e, relPath: ["tmp"] };
}
async function n(e, r) {
  let o = await e.ensureScope(r);
  if (!o.ok) {
    let t = Zm(o.error);
    throw Object.assign(new R(`job folder not made (${Et(o.error)})`, "job folder not made"), t !== void 0 ? { code: t } : {});
  }
}
export {
  HUe,
  sgs
};

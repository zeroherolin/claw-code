// linux/shared/chunk-314b4e47.js — Claude Code 2.1.310（linux）模块 chunk-bgwqkh89.js
import { _r } from "../plugins/chunk-0a4c51cf.js";
import { R } from "../telemetry/anthropic-workspace-id.js";
import { _o } from "../telemetry/bg-roster-parse-failed.js";
import { Zm, vt } from "../telemetry/chunk-a27d4004.js";
import { z } from "./chunk-be29de51.js";
import { mkdir as i } from "fs/promises";
import { join as a } from "path";
async function Ems(e, r) {
  if (z() && r !== void 0 && _r(e)) {
    await n(r, { namespace: "job", jobId: e });
    return;
  }
  await i(_o(e), { recursive: true });
}
async function AUe(e, r) {
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
    throw Object.assign(new R(`job folder not made (${vt(o.error)})`, "job folder not made"), t !== void 0 ? { code: t } : {});
  }
}
export {
  AUe,
  Ems
};

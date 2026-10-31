// darwin/permissions/chunk-efcd08a8.js — Claude Code 2.1.310（darwin）模块 chunk-br8m47yn.js
import { U } from "../context/not-admin-owned.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { i } from "../shared/environment.js";
import { Hf, lo, PO } from "../telemetry/bg-roster-parse-failed.js";
var s = "--inherit-permission-mode";
function t(e) {
  return e === s || e.startsWith(`${s}=`);
}
class m {
  mode;
}
var u = new W(() => new m());
function f() {
  return u.of(U().host);
}
function bhs({ inheritPermissionModeCli: e, resolvedMode: n, storageV5: r }) {
  if (!e) return;
  f().mode = n, PO("--permission-mode", [s], n, void 0, r).catch((o) => l(o));
}
async function whs(e) {
  let n = f(), r = n.mode;
  if (r === void 0) return;
  let o = i.CLAUDE_JOB_DIR;
  if (!o || i.CLAUDE_CODE_SESSION_KIND !== "bg") {
    n.mode = void 0;
    return;
  }
  let d = await lo(o, e);
  if (!d?.respawnFlags) return;
  if (!d.respawnFlags.some(t)) {
    n.mode = void 0;
    return;
  }
  await PO("--permission-mode", [s], r, void 0, e, void 0, (p) => p.some(t)), Hf(o);
  let a = await lo(o, e);
  if (a?.respawnFlags && !a.respawnFlags.some(t)) n.mode = void 0;
}
export {
  bhs,
  whs
};

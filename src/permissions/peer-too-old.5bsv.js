// permissions/peer-too-old.5bsv.js — Claude Code 2.1.310 模块 chunk-5bsv0k8e.js
import { f } from "../shared/chunk-nyvhtfb3.js";
import { qe, cSe } from "../shared/allow-large.djgw.js";
import { Bd, Ue } from "../vendor/zod/string-format.k395.js";
function d2r(e, n) {
  return e !== void 0 && Number.isInteger(e) && e >= 6 && e <= n ? e : 6;
}
var l2t = { first: 5, permissionRequestRenames: 6, readAllowLarge: 7, editOriginalFile: 8, containerSearchTools: 9, managedHookCall: 10, keptBackgroundCommands: 11, readCallsByToolUseId: 12, repoRulesReadHere: 13, repoRulesOnRenders: 14, repoRulesOnUploads: 15 }, r = Math.max(...Object.values(l2t)), d = { [qe]: { [cSe]: l2t.readAllowLarge } };
var dgn = { version: r, min_version: d2r(void 0, r) }, cgn = { version: dgn.version, min_version: 1 }, d2t = f(() => Ue({ version: Bd().min(1), min_version: Bd().min(1) }).refine(({ version: e, min_version: n }) => n <= e));
function FJn(e) {
  return d2t().safeParse(e).data;
}
function $Jn(e, n) {
  if (n.version < e.min_version) return { kind: "peer_too_old" };
  return e.version < n.min_version ? { kind: "self_too_old" } : { kind: "agreed", version: Math.min(e.version, n.version) };
}
export {
  $Jn,
  FJn,
  cgn,
  d2r,
  d2t,
  dgn,
  l2t
};

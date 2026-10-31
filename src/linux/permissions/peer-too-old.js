// linux/permissions/peer-too-old.js — Claude Code 2.1.310（linux）模块 chunk-e7w635nh.js
import { p } from "../shared/chunk-2fe3b2b7.js";
import { qe, rbe } from "../shared/allow-large.js";
import { Bd, Ue } from "../vendor/zod/string-format.js";
function jWr(e, n) {
  return e !== void 0 && Number.isInteger(e) && e >= 6 && e <= n ? e : 6;
}
var XWt = { first: 5, permissionRequestRenames: 6, readAllowLarge: 7, editOriginalFile: 8, containerSearchTools: 9, managedHookCall: 10, keptBackgroundCommands: 11, readCallsByToolUseId: 12, repoRulesReadHere: 13, repoRulesOnRenders: 14, repoRulesOnUploads: 15 }, r = Math.max(...Object.values(XWt)), d = { [qe]: { [rbe]: XWt.readAllowLarge } };
var qmn = { version: r, min_version: jWr(void 0, r) }, Ymn = { version: qmn.version, min_version: 1 }, JWt = p(() => Ue({ version: Bd().min(1), min_version: Bd().min(1) }).refine(({ version: e, min_version: n }) => n <= e));
function SQn(e) {
  return JWt().safeParse(e).data;
}
function wQn(e, n) {
  if (n.version < e.min_version) return { kind: "peer_too_old" };
  return e.version < n.min_version ? { kind: "self_too_old" } : { kind: "agreed", version: Math.min(e.version, n.version) };
}
export {
  JWt,
  SQn,
  XWt,
  Ymn,
  jWr,
  qmn,
  wQn
};

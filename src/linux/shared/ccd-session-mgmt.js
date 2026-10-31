// linux/shared/ccd-session-mgmt.js — Claude Code 2.1.310（linux）模块 chunk-8gjxvrgz.js
import { H } from "./chunk-7027e6d5.js";
var Mn = "SendMessage", rwn = "ccd_session_mgmt", Bkt = 200, d5r = ["type", "recipient", "recipient_kind", "content", "request_id", "approve"];
function V3o(e) {
  return "to" in e && ("message" in e || "notify_when_idle" in e);
}
function $Vt(e) {
  if (!H(e) || !V3o(e) || !d5r.some((n) => n in e)) return;
  let o = { ...e };
  for (let n of d5r) delete o[n];
  return o;
}
export {
  $Vt,
  Bkt,
  Mn,
  V3o,
  d5r,
  rwn
};

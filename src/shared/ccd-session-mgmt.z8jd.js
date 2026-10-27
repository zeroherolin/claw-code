// shared/ccd-session-mgmt.z8jd.js — Claude Code 2.1.310 模块 chunk-z8jd3qze.js
import { D } from "./chunk-6rnejvk7.js";
var Mn = "SendMessage", bwn = "ccd_session_mgmt", Ykt = 200, I4r = ["type", "recipient", "recipient_kind", "content", "request_id", "approve"];
function C8o(e) {
  return "to" in e && ("message" in e || "notify_when_idle" in e);
}
function XVt(e) {
  if (!D(e) || !C8o(e) || !I4r.some((n) => n in e)) return;
  let o = { ...e };
  for (let n of I4r) delete o[n];
  return o;
}
export {
  C8o,
  I4r,
  Mn,
  XVt,
  Ykt,
  bwn
};

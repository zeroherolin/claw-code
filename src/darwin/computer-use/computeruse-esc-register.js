// darwin/computer-use/computeruse-esc-register.js — Claude Code 2.1.310（darwin）模块 chunk-pbgna982.js
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { o_ } from "../shared/chunk-4bbbe120.js";
import { cVo } from "./chunk-158c5f44.js";
import { g, p } from "../telemetry/chunk-9d6962d2.js";
import { x, $e } from "../vendor/react/chunk-0b0bf45d.js";
var c = x(function(w, s) {
  var R = $e("path"), n = cVo();
  s.exports = n.computerUse;
});
function y6() {
  return o_().swiftModule ??= c();
}
function y(e) {
  e._drainMainRunLoop();
}
function m() {
  let e = o_();
  if (e.runLoopPumpRetainCount++, e.runLoopPump === void 0) e.runLoopPump = setInterval(y, 1, y6()), t("[drainRunLoop] pump started", { level: "verbose" });
}
function a() {
  let e = o_();
  if (e.runLoopPumpRetainCount--, e.runLoopPumpRetainCount <= 0 && e.runLoopPump !== void 0) clearInterval(e.runLoopPump), e.runLoopPump = void 0, t("[drainRunLoop] pump stopped", { level: "verbose" }), e.runLoopPumpRetainCount = 0;
}
var P = 3e4;
class f extends Error {
  constructor(e) {
    super(`computer-use native call exceeded ${e}ms`);
  }
}
function v(e, r) {
  e(new f(r));
}
var d = m, l = a;
async function sve(e, r = P) {
  m();
  let o;
  try {
    let u = e();
    u.catch(() => {
    });
    let i = Promise.withResolvers();
    return o = setTimeout(v, r, i.reject, r), await Promise.race([u, i.promise]);
  } finally {
    clearTimeout(o), a();
  }
}
function fRs(e) {
  if (o_().escHotkeyRegistered) return true;
  if (!y6().hotkey.registerEscape(e)) return t("[cu-esc] registerEscape returned false", { level: "warn" }), p("computeruse_esc_register", "tap_create_failed"), false;
  return d(), o_().escHotkeyRegistered = true, t("[cu-esc] registered"), g("computeruse_esc_register"), true;
}
function mRs() {
  if (!o_().escHotkeyRegistered) return;
  try {
    y6().hotkey.unregister();
  } finally {
    l(), o_().escHotkeyRegistered = false, t("[cu-esc] unregistered");
  }
}
function A_o() {
  if (!o_().escHotkeyRegistered) return;
  y6().hotkey.notifyExpectedEscape();
}
export {
  A_o,
  fRs,
  mRs,
  sve,
  y6
};

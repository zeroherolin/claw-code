// darwin/remote/chunk-4ac312dd.js — Claude Code 2.1.310（darwin）模块 chunk-t4xmjqqy.js
import { k_o } from "../permissions/not-signed-in.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { zi } from "./chunk-7e620e0d.js";
function oTi(e) {
  let r = zi(), d = r.lastSentPreferredDeviceId, i = r.browserHints !== void 0 && r.browserHints.preferredDeviceId === void 0 && d !== void 0 && e.preferredDeviceId === d;
  r.lastSentPreferredDeviceId = e.preferredDeviceId, r.browserHints = e.preferredDeviceId === void 0 && e.localDeviceIds.length === 0 ? void 0 : i ? { ...e, preferredDeviceId: void 0 } : e, t(`[Claude in Chrome] browser hints: preferred=${e.preferredDeviceId?.slice(0, 8) ?? "none"} local=${e.localDeviceIds.length}${i ? " (re-send; in-session pick stands)" : ""}`);
  let n = r.bridgeBinding;
  if (n && e.preferredDeviceId !== void 0 && e.preferredDeviceId !== d && n.socketClient.getSelectedDeviceId?.() !== e.preferredDeviceId) k_o(n.socketClient);
}
function Gco(e) {
  let r = zi(), d = r.browserHints;
  if (!d || d.preferredDeviceId === void 0 || d.preferredDeviceId === e) return;
  r.browserHints = { ...d, preferredDeviceId: void 0 };
}
function zco(e) {
  return zi().browserHints?.preferredDeviceId ?? e();
}
function Vco() {
  let e = zi().browserHints;
  if (!e) return;
  return new Map(e.localDeviceIds.map((r) => [r, "live"]));
}
function Kco() {
  return zi().browserHints?.hostPlatform;
}
export {
  Gco,
  Kco,
  Vco,
  oTi,
  zco
};

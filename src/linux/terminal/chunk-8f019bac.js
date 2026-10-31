// linux/terminal/chunk-8f019bac.js — Claude Code 2.1.310（linux）模块 chunk-cm8k0hcd.js
import { d, E } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
var s = /* @__PURE__ */ new Set(["EIO", "ENOTTY", "EBADF"]);
function Lv(e, n) {
  if (!("setRawMode" in e) || typeof e.setRawMode !== "function") return;
  try {
    e.setRawMode(n);
  } catch (o) {
    let a = d(o), r = E(o);
    if (a.includes("setRawMode failed") || s.has(r ?? "")) {
      t(`setRawMode(${n}) failed on revoked tty: ${a}`);
      return;
    }
    throw o;
  }
}
export {
  Lv
};

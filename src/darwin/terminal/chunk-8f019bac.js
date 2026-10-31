// darwin/terminal/chunk-8f019bac.js — Claude Code 2.1.310（darwin）模块 chunk-pasjdr9n.js
import { d, v } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
var s = /* @__PURE__ */ new Set(["EIO", "ENOTTY", "EBADF"]);
function NE(e, n) {
  if (!("setRawMode" in e) || typeof e.setRawMode !== "function") return;
  try {
    e.setRawMode(n);
  } catch (o) {
    let a = d(o), r = v(o);
    if (a.includes("setRawMode failed") || s.has(r ?? "")) {
      t(`setRawMode(${n}) failed on revoked tty: ${a}`);
      return;
    }
    throw o;
  }
}
export {
  NE
};

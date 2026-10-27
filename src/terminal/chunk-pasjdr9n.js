// terminal/chunk-pasjdr9n.js — Claude Code 2.1.310 模块 chunk-pasjdr9n.js
import { d, v } from "../telemetry/anthropic-workspace-id.36ys.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
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

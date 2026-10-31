// linux/shared/chunk-2af31564.js — Claude Code 2.1.310（linux）模块 chunk-hyekvybh.js
import { t } from "../fs/gitlab-runner-authentication-token.js";
function fL(r, n, o) {
  let e = n.safeParse(o);
  if (e.success) return e.data;
  let s = e.error.issues[0];
  return t(`[thin-client] ${r} reply did not match its schema (${e.error.issues.length} issue(s); first: ${s ? `${s.path.join(".") || "<root>"}: ${s.message}` : "unknown"})`, { level: "warn" }), null;
}
export {
  fL
};

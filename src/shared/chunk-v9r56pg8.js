// shared/chunk-v9r56pg8.js — Claude Code 2.1.310 模块 chunk-v9r56pg8.js
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
function gD(r, n, o) {
  let e = n.safeParse(o);
  if (e.success) return e.data;
  let s = e.error.issues[0];
  return t(`[thin-client] ${r} reply did not match its schema (${e.error.issues.length} issue(s); first: ${s ? `${s.path.join(".") || "<root>"}: ${s.message}` : "unknown"})`, { level: "warn" }), null;
}
export {
  gD
};

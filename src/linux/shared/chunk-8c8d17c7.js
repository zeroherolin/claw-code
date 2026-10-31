// linux/shared/chunk-8c8d17c7.js — Claude Code 2.1.310（linux）模块 chunk-0nak2t1c.js
import { ii, bi, RT, Cd, nO } from "../vendor/mcp-sdk/not-in-era.js";
function r1e(r) {
  return r instanceof Error && "code" in r && r.code === "CLAUDEAI_BEARER_REJECTED";
}
function $en(r) {
  if (r instanceof nO) return true;
  if (r1e(r)) return false;
  if (r instanceof RT && (r.status === 403 || r.status === 401)) return r.code !== ii.ClientHttpAuthentication && r.code !== ii.ClientHttpForbidden;
  if (r instanceof Error && !(r instanceof Cd) && !(r instanceof bi) && "code" in r && (r.code === 403 || r.code === 401)) return true;
  return false;
}
export {
  $en,
  r1e
};

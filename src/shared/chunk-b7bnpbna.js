// shared/chunk-b7bnpbna.js — Claude Code 2.1.310 模块 chunk-b7bnpbna.js
import { ii, Si, IC, Ad, lO } from "../vendor/mcp-sdk/not-in-era.0ynw.js";
function pBe(r) {
  return r instanceof Error && "code" in r && r.code === "CLAUDEAI_BEARER_REJECTED";
}
function Zen(r) {
  if (r instanceof lO) return true;
  if (pBe(r)) return false;
  if (r instanceof IC && (r.status === 403 || r.status === 401)) return r.code !== ii.ClientHttpAuthentication && r.code !== ii.ClientHttpForbidden;
  if (r instanceof Error && !(r instanceof Ad) && !(r instanceof Si) && "code" in r && (r.code === 403 || r.code === 401)) return true;
  return false;
}
export {
  Zen,
  pBe
};

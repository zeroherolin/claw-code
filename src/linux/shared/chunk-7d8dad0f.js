// linux/shared/chunk-7d8dad0f.js — Claude Code 2.1.310（linux）模块 chunk-b66yv75g.js
import { Mi } from "../vendor/mcp-sdk/input-required.88fd.js";
import { eO } from "../auth/client-secret-basic.js";
function S3e(r) {
  return r instanceof Error && "code" in r && r.code === "CLAUDEAI_BEARER_REJECTED";
}
function TJt(r) {
  if (r instanceof eO) return true;
  if (S3e(r)) return false;
  if (r instanceof Error && !(r instanceof Mi) && "code" in r) {
    if (r.code === 403) return !r.message.includes("Server returned 403 after trying upscoping");
    if (r.code === 401) return !r.message.includes("Server returned 401 after successful authentication");
  }
  return false;
}
export {
  S3e,
  TJt
};

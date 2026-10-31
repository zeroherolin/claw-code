// darwin/shared/chunk-7d8dad0f.js — Claude Code 2.1.310（darwin）模块 chunk-34y13qs8.js
import { Mi } from "../vendor/mcp-sdk/input-required.88fd.js";
import { sO } from "../auth/client-secret-basic.js";
function A9e(r) {
  return r instanceof Error && "code" in r && r.code === "CLAUDEAI_BEARER_REJECTED";
}
function F7t(r) {
  if (r instanceof sO) return true;
  if (A9e(r)) return false;
  if (r instanceof Error && !(r instanceof Mi) && "code" in r) {
    if (r.code === 403) return !r.message.includes("Server returned 403 after trying upscoping");
    if (r.code === 401) return !r.message.includes("Server returned 401 after successful authentication");
  }
  return false;
}
export {
  A9e,
  F7t
};

// mcp/chunk-wvjv545z.js — Claude Code 2.1.310 模块 chunk-wvjv545z.js
import { ae } from "../permissions/max-thinking-tokens.hx3h.js";
import { nJ, Y0r, Hxo, MWe } from "../core/conversation-engine.31gx.js";
import { Va, NRe } from "../chrome/browser-batch.ny0f.js";
function bae() {
  return MWe() || nJ(Va, NRe());
}
function Ddo() {
  if (!bae()) return null;
  if (Hxo() && !nJ(Va, NRe())) return Y0r;
  return "--chrome is blocked by your organization's MCP policy (an enterprise MCP config or a deniedMcpServers entry).";
}
function wHn(r) {
  let { mode: e, isBypassPermissionsModeAvailable: o } = ae(r);
  return e === "bypassPermissions" || e === "plan" && o;
}
export {
  Ddo,
  bae,
  wHn
};

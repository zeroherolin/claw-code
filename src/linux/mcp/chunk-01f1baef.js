// linux/mcp/chunk-01f1baef.js — Claude Code 2.1.310（linux）模块 chunk-jjh6n918.js
import { ae } from "../permissions/max-thinking-tokens.js";
import { qJ, xDr, sxo, EWe } from "../core/conversation-engine.js";
import { za, ORe } from "../chrome/browser-batch.js";
function fae() {
  return EWe() || qJ(za, ORe());
}
function _do() {
  if (!fae()) return null;
  if (sxo() && !qJ(za, ORe())) return xDr;
  return "--chrome is blocked by your organization's MCP policy (an enterprise MCP config or a deniedMcpServers entry).";
}
function sHn(r) {
  let { mode: e, isBypassPermissionsModeAvailable: o } = ae(r);
  return e === "bypassPermissions" || e === "plan" && o;
}
export {
  _do,
  fae,
  sHn
};

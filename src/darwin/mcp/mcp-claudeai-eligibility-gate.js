// darwin/mcp/mcp-claudeai-eligibility-gate.js — Claude Code 2.1.310（darwin）模块 chunk-dea9ag23.js
import { k } from "../settings/global-config-and-gates.js";
function i() {
  return k("tengu_mcp_claudeai_eligibility_gate", false);
}
function IRs() {
  return k("tengu_delightful_hamster", false) === true;
}
function gpt(e) {
  return e.type === "claudeai-proxy" && e.eligible === false && i();
}
export {
  IRs,
  gpt
};

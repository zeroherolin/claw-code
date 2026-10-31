// linux/mcp/mcp-claudeai-eligibility-gate.js — Claude Code 2.1.310（linux）模块 chunk-darjc7bw.js
import { k } from "../settings/global-config-and-gates.js";
function i() {
  return k("tengu_mcp_claudeai_eligibility_gate", false);
}
function ZCs() {
  return k("tengu_delightful_hamster", false) === true;
}
function pft(e) {
  return e.type === "claudeai-proxy" && e.eligible === false && i();
}
export {
  ZCs,
  pft
};

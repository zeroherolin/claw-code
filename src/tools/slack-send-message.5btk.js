// tools/slack-send-message.5btk.js — Claude Code 2.1.310 模块 chunk-5btk7esb.js
import { JWn, Kft } from "../core/conversation-engine.31gx.js";
var l = /^[CDG][A-Z0-9]{6,}$/;
function GSo(e) {
  let n = e.replace(/^#/, "");
  return l.test(n) ? `https://slack.com/app_redirect?channel=${n}` : null;
}
var t = /* @__PURE__ */ new Set(["slack_send_message", "slack_post_message"]), zSo = "mcp-slack-send";
function y1n(e) {
  return t.has(e);
}
function ORs(e) {
  let n = e.channel_id ?? e.channel;
  if (typeof n !== "string") return null;
  let r = JWn(n);
  if (!r) return null;
  return { label: `#${r.replace(/^#/, "")}`, url: GSo(n) };
}
function _1n() {
  return { uiTableKey: zSo, userFacingName() {
    return "Slacked";
  }, renderToolUseMessage(e, n) {
    return n.verbose ? Kft(e, n) : "";
  } };
}
export {
  GSo,
  ORs,
  _1n,
  y1n,
  zSo
};

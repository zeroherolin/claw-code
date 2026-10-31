// linux/tools/slack-send-message.js — Claude Code 2.1.310（linux）模块 chunk-b2bgm8b9.js
import { PWn, Upt } from "../core/conversation-engine.js";
var l = /^[CDG][A-Z0-9]{6,}$/;
function vbo(e) {
  let n = e.replace(/^#/, "");
  return l.test(n) ? `https://slack.com/app_redirect?channel=${n}` : null;
}
var t = /* @__PURE__ */ new Set(["slack_send_message", "slack_post_message"]), Ebo = "mcp-slack-send";
function aBn(e) {
  return t.has(e);
}
function eRs(e) {
  let n = e.channel_id ?? e.channel;
  if (typeof n !== "string") return null;
  let r = PWn(n);
  if (!r) return null;
  return { label: `#${r.replace(/^#/, "")}`, url: vbo(n) };
}
function lBn() {
  return { uiTableKey: Ebo, userFacingName() {
    return "Slacked";
  }, renderToolUseMessage(e, n) {
    return n.verbose ? Upt(e, n) : "";
  } };
}
export {
  Ebo,
  aBn,
  eRs,
  lBn,
  vbo
};

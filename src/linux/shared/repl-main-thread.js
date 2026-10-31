// linux/shared/repl-main-thread.js — Claude Code 2.1.310（linux）模块 chunk-a5n97xgg.js
import { AP, BJ } from "../core/conversation-engine.js";
import { pr } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
function vae(t, e) {
  if (e) return t ? `agent:builtin:${t}` : "agent:default";
  return t ? `agent:custom:${t}` : "agent:custom";
}
function H3e() {
  let e = pr()?.outputStyle ?? AP;
  if (e === AP) return "repl_main_thread";
  return Object.hasOwn(BJ, e) ? `repl_main_thread:outputStyle:${e}` : "repl_main_thread:outputStyle:custom";
}
export {
  H3e,
  vae
};

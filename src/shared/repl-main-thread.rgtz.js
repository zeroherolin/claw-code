// shared/repl-main-thread.rgtz.js — Claude Code 2.1.310 模块 chunk-rgtztr8n.js
import { xP, Y7 } from "../core/conversation-engine.31gx.js";
import { fr } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
function Pae(t, e) {
  if (e) return t ? `agent:builtin:${t}` : "agent:default";
  return t ? `agent:custom:${t}` : "agent:custom";
}
function W9e() {
  let e = fr()?.outputStyle ?? xP;
  if (e === xP) return "repl_main_thread";
  return Object.hasOwn(Y7, e) ? `repl_main_thread:outputStyle:${e}` : "repl_main_thread:outputStyle:custom";
}
export {
  Pae,
  W9e
};

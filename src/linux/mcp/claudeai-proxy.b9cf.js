// linux/mcp/claudeai-proxy.b9cf.js — Claude Code 2.1.310（linux）模块 chunk-zrcae60v.js
import { Kt } from "../shared/chunk-3b9c376b.js";
import { NVt, Qor, FRe } from "./claude-browser.js";
import { _fe } from "../plugins/skills-dir.js";
import { i } from "../shared/environment.js";
import { zae } from "../artifacts/cobalt-plinth-linden.js";
import { Fbo } from "./cobalt-plinth-yew.js";
import { hxr } from "../core/conversation-engine.js";
var Abo = ["Docs"], t = /* @__PURE__ */ new Set(["claudedocs", "claudepages"]);
function VTr(o) {
  return o.tier === "core" && Abo.some((e) => zae(o.title) === zae(e));
}
var tRs = "The Docs type is filled only through the first-party Claude Docs connector, which is not attached in this session: for a document, make a page instead of starting from that type.";
function ntn(o) {
  return o.config.type === "claudeai-proxy" && _fe(o.config) && hxr(o.config) || Fbo() && o.config.type === "sdk" && Kt(o.name) !== null && t.has(FRe(o.serverInfo?.name ?? "")) || i.CLAUDE_CODE_REMOTE === true && o.config.type === "http" && o.config.scope === "dynamic" && (Qor(o.config) || NVt.has(o.name));
}
function qTr(o) {
  return o.some((e) => (e.type === "connected" || e.type === "pending" || e.type === "cached") && ntn(e));
}
export {
  Abo,
  VTr,
  ntn,
  qTr,
  tRs
};

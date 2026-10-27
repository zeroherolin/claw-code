// mcp/claudeai-proxy.deqs.js — Claude Code 2.1.310 模块 chunk-deqs0mpz.js
import { Vt } from "../shared/chunk-9sbknd2z.js";
import { YVt, hsr, GRe } from "./claude-browser.hdf6.js";
import { Cpe } from "../plugins/skills-dir.cemw.js";
import { i } from "../shared/environment.9a41.js";
import { Zae } from "../artifacts/cobalt-plinth-linden.561n.js";
import { gbo } from "./cobalt-plinth-yew.bkr0.js";
import { Lxr } from "../core/conversation-engine.31gx.js";
var qSo = ["Docs"], t = /* @__PURE__ */ new Set(["claudedocs", "claudepages"]);
function rTr(o) {
  return o.tier === "core" && qSo.some((e) => Zae(o.title) === Zae(e));
}
var MRs = "The Docs type is filled only through the first-party Claude Docs connector, which is not attached in this session: for a document, make a page instead of starting from that type.";
function rtn(o) {
  return o.config.type === "claudeai-proxy" && Cpe(o.config) && Lxr(o.config) || gbo() && o.config.type === "sdk" && Vt(o.name) !== null && t.has(GRe(o.serverInfo?.name ?? "")) || i.CLAUDE_CODE_REMOTE === true && o.config.type === "http" && o.config.scope === "dynamic" && (hsr(o.config) || YVt.has(o.name));
}
function oTr(o) {
  return o.some((e) => (e.type === "connected" || e.type === "pending" || e.type === "cached") && rtn(e));
}
export {
  MRs,
  oTr,
  qSo,
  rTr,
  rtn
};

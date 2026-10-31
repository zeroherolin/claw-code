// linux/tools/chunk-69cf9f3c.js — Claude Code 2.1.310（linux）模块 chunk-syntvyhn.js
import { U } from "../context/not-admin-owned.js";
import { $Tt } from "../plugins/skills-dir.js";
import { UD } from "../mcp/mcp-drive-file-reference-upload.js";
import { Sf } from "../plugins/not-found.js";
import { gbe, Fkt } from "../mcp/claude-browser.js";
import { LD } from "../plugins/plugin-enabled-for-session.js";
import { KOe } from "../core/conversation-engine.js";
function i1e(e, o) {
  let n = o.map((t) => t.mcpInfo === void 0 || t.mcpInfo.scope === e.config.scope && t.mcpInfo.pluginSource === e.config.pluginSource ? t : { ...t, mcpInfo: $Tt(e) });
  return n.every((t, r) => t === o[r]) ? o : n;
}
function Wae(e, o) {
  return e.config.scope === o.scope && e.config.pluginSource === o.pluginSource ? e : { ...e, config: o };
}
var S = 128, g = /^[a-z0-9._:-]+$/;
function i(e) {
  let o = e?.trim().toLowerCase();
  if (!o || o.length > S || !g.test(o)) return;
  return o;
}
function Tme(e, o) {
  if (o.type !== "http" || UD(e, o) !== "dynamic") return;
  let n = i(gbe(o));
  if (n) return n;
  let p = Fkt.peek(U())?.read?.();
  return i(p?.[e]);
}
var m = (e, o) => ({ ...o, scope: e.config.scope, pluginSource: e.config.pluginSource, source: UD(e.name, e.config), pluginTelemetry: void 0, ...e.config.pluginSource !== void 0 && { pluginTelemetry: LD(e.config.pluginSource, Sf()) }, serverIdStamp: Tme(e.name, e.config) });
function hJ(e, o) {
  let n = KOe(e.name, e.config), p = o.map((r) => {
    if (r.mcpInfo === void 0) return r;
    let s = n && r.ignoresWholeToolAllowRule?.({}) !== true ? { ...r, ignoresWholeToolAllowRule() {
      return true;
    }, suppressesAlwaysAllowRule() {
      return true;
    }, async checkPermissions(u, f) {
      let c = await r.checkPermissions(u, f);
      return c.behavior === "ask" || c.behavior === "passthrough" ? { ...c, suggestions: [] } : c;
    } } : r;
    return r.mcpInfo.scope === e.config.scope && r.mcpInfo.pluginSource === e.config.pluginSource ? s : { ...s, mcpInfo: m(e, r.mcpInfo) };
  });
  return p.every((r, s) => r === o[s]) ? o : p;
}
export {
  Tme,
  Wae,
  hJ,
  i1e
};

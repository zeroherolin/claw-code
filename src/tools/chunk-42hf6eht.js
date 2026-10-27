// tools/chunk-42hf6eht.js — Claude Code 2.1.310 模块 chunk-42hf6eht.js
import { U } from "../context/not-admin-owned.ersa.js";
import { VCt } from "../plugins/skills-dir.cemw.js";
import { G0 } from "../mcp/mcp-drive-file-reference-upload.nfj5.js";
import { Sp } from "../plugins/not-found.2nbd.js";
import { ESe, Kkt } from "../mcp/claude-browser.hdf6.js";
import { $0 } from "../plugins/plugin-enabled-for-session.9xx8.js";
import { QOe } from "../core/conversation-engine.31gx.js";
function gBe(e, o) {
  let n = o.map((t) => t.mcpInfo === void 0 || t.mcpInfo.scope === e.config.scope && t.mcpInfo.pluginSource === e.config.pluginSource ? t : { ...t, mcpInfo: VCt(e) });
  return n.every((t, r) => t === o[r]) ? o : n;
}
function Jae(e, o) {
  return e.config.scope === o.scope && e.config.pluginSource === o.pluginSource ? e : { ...e, config: o };
}
var S = 128, g = /^[a-z0-9._:-]+$/;
function i(e) {
  let o = e?.trim().toLowerCase();
  if (!o || o.length > S || !g.test(o)) return;
  return o;
}
function Pme(e, o) {
  if (o.type !== "http" || G0(e, o) !== "dynamic") return;
  let n = i(ESe(o));
  if (n) return n;
  let p = Kkt.peek(U())?.read?.();
  return i(p?.[e]);
}
var m = (e, o) => ({ ...o, scope: e.config.scope, pluginSource: e.config.pluginSource, source: G0(e.name, e.config), pluginTelemetry: void 0, ...e.config.pluginSource !== void 0 && { pluginTelemetry: $0(e.config.pluginSource, Sp()) }, serverIdStamp: Pme(e.name, e.config) });
function k7(e, o) {
  let n = QOe(e.name, e.config), p = o.map((r) => {
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
  Jae,
  Pme,
  gBe,
  k7
};

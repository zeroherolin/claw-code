// linux/shared/chunk-6cafd643.js — Claude Code 2.1.310（linux）模块 chunk-6h2vv539.js
import { Ug } from "../computer-use/chunk-217335d0.js";
import { i } from "./environment.js";
import { Rt, Xye, BE } from "../context/tool-result-clearing-after-idle-server-report.js";
import { Be } from "../mcp/allowed-warning.js";
import { $w } from "../shell/invalid-type.js";
import { Td } from "../context/fetch-project-timeline.js";
import { ri } from "../permissions/classifier-transcript-too-long.js";
import { io, jc } from "../mcp/always-allow.js";
import { rm } from "./chunk-46ffe22f.js";
import { L3s } from "../permissions/bot-protected-tengu-atomic-magpie.js";
import { Ght } from "../context/team-memory-sync.js";
import { n6n, u0o, MKs, vcn } from "../plugins/unsubscribe-pr-activity.js";
import { cDn, cys } from "../mcp/artifact-mcp-swap.js";
import { sAe, F_t } from "./chunk-7a8599f4.js";
import { dDn } from "./chunk-69fecb65.js";
import { EG } from "../mcp/declared-tools-dropped-at-compaction.js";
import { Zh } from "../mcp/chunk-a5cd39f7.js";
var c = /* @__PURE__ */ new Set([rm, Ug]);
function sao(o, e) {
  if (e.length === 0) return o;
  let t = e.map((m) => [m, io(m)]), n = o.filter((m) => !t.some(([s, r]) => jc(m, s, r)));
  return n.length === o.length ? o : n;
}
function f(o) {
  return o.mcpInfo?.cliOwned === true && o.mcpInfo.serverName === Td;
}
var a = import.meta.require("../context/get-coordinator-system-prompt.js");
function lDn() {
  return (process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS ?? "").split(",").map((o) => o.trim()).filter(Boolean);
}
function iao(o, e = lDn()) {
  if (sAe(o) || u0o.includes(o.name)) return true;
  let t = io(o.name);
  return e.some((n) => n.startsWith(t));
}
function g_r(o, e = () => false) {
  let t = i.CLAUDE_CODE_BRIEF, n = new Set(lDn()), m = vcn(), s = o.some(F_t);
  return o.filter((r) => n6n.has(r.name) || m && Rt(r, Be) && !Zh(r) || MKs(r.name) || f(r) || F_t(r) || t && c.has(r.name) || BE(r, n) || !s && e(r));
}
function cXt(o, e, t, n, m) {
  let [s, r] = $w(dDn(ri(Ght([...o, ...e]), "name"), n), (p) => Zh(p) || EG(p)), l = [...cys(r).sort(Xye), ...cDn(s, n ?? s).sort(Xye)];
  if (a.isCoordinatorMode()) return g_r(l, m);
  return l;
}
function uXt(o, e) {
  let t = o.length === 1 ? o[0] : void 0;
  if (t && L3s(e, t)) return [];
  return o;
}
export {
  cXt,
  g_r,
  iao,
  lDn,
  sao,
  uXt
};

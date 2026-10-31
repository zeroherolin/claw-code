// darwin/shared/chunk-6cafd643.js — Claude Code 2.1.310（darwin）模块 chunk-3fdmwcat.js
import { Ug } from "../computer-use/chunk-217335d0.js";
import { i } from "./environment.js";
import { Rt, n_e, jv } from "../context/tool-result-clearing-after-idle-server-report.js";
import { Be } from "../mcp/allowed-warning.js";
import { $w } from "../shell/invalid-type.js";
import { kd } from "../context/fetch-project-timeline.js";
import { ri } from "../permissions/classifier-transcript-too-long.js";
import { io, jc } from "../mcp/always-allow.js";
import { rm } from "./chunk-46ffe22f.js";
import { b8s } from "../permissions/bot-protected-tengu-atomic-magpie.js";
import { Dht } from "../context/team-memory-sync.js";
import { E5n, $Lo, _Vs, Ncn } from "../plugins/unsubscribe-pr-activity.js";
import { K0n, P_s } from "../mcp/artifact-mcp-swap.js";
import { uTe, V_t } from "./chunk-7a8599f4.js";
import { V0n } from "./chunk-69fecb65.js";
import { M2 } from "../mcp/declared-tools-dropped-at-compaction.js";
import { Zh } from "../mcp/chunk-a5cd39f7.js";
var c = /* @__PURE__ */ new Set([rm, Ug]);
function Ilo(o, e) {
  if (e.length === 0) return o;
  let t = e.map((m) => [m, io(m)]), n = o.filter((m) => !t.some(([s, r]) => jc(m, s, r)));
  return n.length === o.length ? o : n;
}
function f(o) {
  return o.mcpInfo?.cliOwned === true && o.mcpInfo.serverName === kd;
}
var a = import.meta.require("../context/get-coordinator-system-prompt.js");
function z0n() {
  return (process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS ?? "").split(",").map((o) => o.trim()).filter(Boolean);
}
function Olo(o, e = z0n()) {
  if (uTe(o) || $Lo.includes(o.name)) return true;
  let t = io(o.name);
  return e.some((n) => n.startsWith(t));
}
function Q_r(o, e = () => false) {
  let t = i.CLAUDE_CODE_BRIEF, n = new Set(z0n()), m = Ncn(), s = o.some(V_t);
  return o.filter((r) => E5n.has(r.name) || m && Rt(r, Be) && !Zh(r) || _Vs(r.name) || f(r) || V_t(r) || t && c.has(r.name) || jv(r, n) || !s && e(r));
}
function NXt(o, e, t, n, m) {
  let [s, r] = $w(V0n(ri(Dht([...o, ...e]), "name"), n), (p) => Zh(p) || M2(p)), l = [...P_s(r).sort(n_e), ...K0n(s, n ?? s).sort(n_e)];
  if (a.isCoordinatorMode()) return Q_r(l, m);
  return l;
}
function FXt(o, e) {
  let t = o.length === 1 ? o[0] : void 0;
  if (t && b8s(e, t)) return [];
  return o;
}
export {
  FXt,
  Ilo,
  NXt,
  Olo,
  Q_r,
  z0n
};

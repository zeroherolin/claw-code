// shared/chunk-3fdmwcat.js — Claude Code 2.1.310 模块 chunk-3fdmwcat.js
import { Ug } from "../computer-use/chunk-ec42nx0x.js";
import { i } from "./environment.9a41.js";
import { Rt, n_e, jv } from "../context/tool-result-clearing-after-idle-server-report.epan.js";
import { Be } from "../mcp/allowed-warning.j2d4.js";
import { $w } from "../shell/invalid-type.qnva.js";
import { kd } from "../context/fetch-project-timeline.g27d.js";
import { ri } from "../permissions/classifier-transcript-too-long.8zvz.js";
import { io, jc } from "../mcp/always-allow.9m89.js";
import { rm } from "./chunk-vf2gp3w9.js";
import { b8s } from "../permissions/bot-protected-tengu-atomic-magpie.zc9j.js";
import { Dht } from "../context/team-memory-sync.0s3j.js";
import { E5n, $Lo, _Vs, Ncn } from "../plugins/unsubscribe-pr-activity.wqn0.js";
import { K0n, P_s } from "../mcp/artifact-mcp-swap.dypj.js";
import { uTe, V_t } from "./chunk-hfmb03fw.js";
import { V0n } from "./chunk-92n351f7.js";
import { M2 } from "../mcp/declared-tools-dropped-at-compaction.brrn.js";
import { Zh } from "../mcp/chunk-4sncr48f.js";
var c = /* @__PURE__ */ new Set([rm, Ug]);
function Ilo(o, e) {
  if (e.length === 0) return o;
  let t = e.map((m) => [m, io(m)]), n = o.filter((m) => !t.some(([s, r]) => jc(m, s, r)));
  return n.length === o.length ? o : n;
}
function f(o) {
  return o.mcpInfo?.cliOwned === true && o.mcpInfo.serverName === kd;
}
var a = import.meta.require("../context/get-coordinator-system-prompt.94gk.js");
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

// telemetry/dead-probe-adopt-ticks-token.xkx6.js — Claude Code 2.1.310 模块 chunk-xkx67h02.js
import { U } from "../context/not-admin-owned.ersa.js";
import { c } from "../agents/third-party.ydpb.js";
import { W } from "../shared/chunk-3y73jbfr.js";
import { a } from "./chunk-wq923bwc.js";
import { vd } from "../fs/chunk-tzqhxyjb.js";
import { Dw } from "../settings/global-config-and-gates.27xj.js";
import { readFile as s } from "fs/promises";
class o {
  firedSites = /* @__PURE__ */ new Set();
  fire(e) {
    if (this.firedSites.has(e)) return;
    this.firedSites.add(e), a("tengu_dead_probe_adopt_ticks_token", { site: c(e) });
  }
  reset() {
    this.firedSites.clear();
  }
}
var l = new W(() => new o());
function f() {
  return l.of(U().host);
}
function Gno(e) {
  f().fire(e);
}
async function v8t(e) {
  return null;
}
async function Alt(e, t, r) {
  if (r !== void 0) {
    if (await vd(e, { skipCache: true }) !== r) return;
  } else if (t !== void 0) {
    if (Gno("kill_gate"), await v8t(e) !== t) return;
  } else return;
  await Dw(e, "SIGTERM").catch(() => {
  });
}
export {
  Alt,
  Gno,
  v8t
};

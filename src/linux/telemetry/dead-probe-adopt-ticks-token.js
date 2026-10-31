// linux/telemetry/dead-probe-adopt-ticks-token.js — Claude Code 2.1.310（linux）模块 chunk-wh8n5d32.js
import { U } from "../context/not-admin-owned.js";
import { c } from "../agents/third-party.js";
import { W } from "../shared/chunk-37dd5dd4.js";
import { a } from "./chunk-9097a12b.js";
import { kd } from "../fs/chunk-b6c2193e.js";
import { Dw } from "../settings/global-config-and-gates.js";
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
function Hno(e) {
  f().fire(e);
}
async function T8t(e) {
  try {
    let t = await s(`/proc/${e}/stat`, "utf-8"), r = t.lastIndexOf(")"), n = t.slice(r + 2).split(" "), i = Number(n[19]);
    return Number.isFinite(i) ? i : null;
  } catch {
    return null;
  }
}
async function Plt(e, t, r) {
  if (r !== void 0) {
    if (await kd(e, { skipCache: true }) !== r) return;
  } else if (t !== void 0) {
    if (Hno("kill_gate"), await T8t(e) !== t) return;
  } else return;
  await Dw(e, "SIGTERM").catch(() => {
  });
}
export {
  Hno,
  Plt,
  T8t
};

// remote/tool-container.eq4j.js — Claude Code 2.1.310 模块 chunk-eq4j5qxn.js
import { W } from "../shared/chunk-3y73jbfr.js";
import { Une, aan } from "../fs/ccr-left-running-programs-note.9sg4.js";
import { i } from "../shared/environment.9a41.js";
import { nr } from "./moved-directory.z3m0.js";
import { B4t, wAn, EAn, nat } from "../shell/chunk-1nwpdsxe.js";
import { vPs } from "../shared/resource-link.rb76.js";
import { mn } from "../shared/chunk-1a0taxx3.js";
import { readFileSync as b } from "fs";
import { posix as _ } from "path";
var c = `${vPs}toolContainerCpu`, f = "anthropic/toolContainerCpu", R = 1, g = 864e5, x = 31 * g;
function d(n) {
  return mn(n) && n[c] === R;
}
var a = new W(() => ({}));
function $Jr(n, e) {
  if (e !== "tool-container" || !nr() || i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted") return;
  let t;
  try {
    t = b("/proc/self/cgroup", "utf8");
  } catch {
    return;
  }
  let r = wAn(t);
  if (r === void 0) return;
  let u = m(0), o = EAn(r);
  if (u !== void 0) {
    let s = o === void 0 ? void 0 : _.join(o, "cpuacct.usage"), p = s === void 0 ? void 0 : nat(s);
    a.of(n).meter = { machineMsAtZero: u.cpuMs - u.daemonCpuMs, callsBeingServed: 0, atCallsStart: void 0, inCallMs: 0, inCallCpuMs: 0, shell: s === void 0 || p === void 0 ? void 0 : { usageFile: s, msAtZero: p } }, Une.enableCounting();
  }
  aan(o);
}
function Cvi(n) {
  let { meter: e } = a.of(n);
  if (e === void 0) return;
  if (e.callsBeingServed++ === 0) e.atCallsStart = m(e.machineMsAtZero);
  return { [Symbol.dispose]() {
    if (--e.callsBeingServed === 0) {
      let t = M(e, m(e.machineMsAtZero));
      e.inCallMs = t.ms, e.inCallCpuMs = t.cpuMs, e.atCallsStart = void 0;
    }
  } };
}
function Tvi(n, e, t) {
  let { meter: r } = a.of(e);
  if (r === void 0 || !d(t)) return n;
  let u = r.shell === void 0 ? void 0 : nat(r.shell.usageFile), o = m(r.machineMsAtZero);
  if (o === void 0) return n;
  let s = M(r, o), p = Math.floor(o.cpuMs), l = r.shell === void 0 || u === void 0 ? void 0 : Math.floor(u - r.shell.msAtZero), C = { start_time_unix_ms: Math.floor(performance.timeOrigin), up_ms: Math.floor(o.upMs), cpu_ms: p, daemon_cpu_ms: Math.floor(o.daemonCpuMs), in_call_ms: Math.floor(s.ms), in_call_cpu_ms: Math.floor(s.cpuMs), ...l !== void 0 && l >= 1 && l <= p && { shell_cpu_ms: l }, left_running_programs: Une.countRunning() }, h = n.isError === true ? f : c;
  return { ...n, _meta: { ...n._meta, [h]: C } };
}
function M({ atCallsStart: n, inCallMs: e, inCallCpuMs: t }, r) {
  return n === void 0 || r === void 0 ? { ms: e, cpuMs: t } : { ms: e + r.upMs - n.upMs, cpuMs: t + Math.max(0, r.cpuMs - n.cpuMs) };
}
function m(n) {
  let e = nat(_.join(B4t, "cpuacct.usage"));
  if (e === void 0) return;
  try {
    let { user: t, system: r } = process.cpuUsage();
    return { cpuMs: Math.max(0, e - n), daemonCpuMs: (t + r) / 1e3, upMs: performance.now() };
  } catch {
    return;
  }
}
export {
  $Jr,
  Cvi,
  Tvi
};

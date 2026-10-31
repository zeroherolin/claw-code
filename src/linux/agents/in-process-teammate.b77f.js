// linux/agents/in-process-teammate.b77f.js — Claude Code 2.1.310（linux）模块 chunk-eacq4pgt.js
import { J } from "../context/not-admin-owned.js";
import { Pu } from "../fs/unadoptable-session-id.js";
import { randomBytes as i } from "crypto";
function cs(e) {
  return e === "completed" || e === "failed" || e === "killed";
}
var OIo = /* @__PURE__ */ new Set(["local_agent", "remote_agent", "in_process_teammate", "local_workflow"]);
function x1(e) {
  return Object.values(e).some(rht);
}
function sqn(e) {
  return Object.values(e).some((t) => rht(t) && t.status !== "paused" && !(t.type === "in_process_teammate" && t.identity?.resumableAgentId === void 0) && !(t.type === "remote_agent" && (t.ultraplanPhase === "needs_input" || t.ultraplanPhase === "plan_ready" || t.isUltraplan && t.restoredOnResume)));
}
function rht(e) {
  return OIo.has(e.type) && !cs(e.status) && !(e.type === "in_process_teammate" && e.isIdle) && !(e.type === "remote_agent" && e.isLongRunning);
}
function MIo(e) {
  return Object.values(e).some(tLr);
}
function tLr(e) {
  return e.type === "local_bash" && !cs(e.status);
}
var r = { local_bash: "b", local_agent: "a", remote_agent: "r", in_process_teammate: "t", local_workflow: "w", monitor_mcp: "m", monitor_ws: "s", mcp_task: "k", dream: "d", auto_mode_scan: "e", local_memory_import: "n" }, o = "0123456789abcdefghijklmnopqrstuvwxyz";
function aY(e, t) {
  let s = r[e];
  return s !== void 0 && t.length === 9 && t.startsWith(s) && t.slice(s.length).split("").every((a) => o.includes(a));
}
function DIo(e) {
  return e.length <= 1024 && /^(?:\/(?!\.{1,2}(?:\/|$))[A-Za-z0-9_.-]+)+$/.test(e);
}
function iqn(e, t) {
  return DIo(t) && t.endsWith(`/${e}.output`);
}
function NT(e) {
  let t = r[e] ?? "x", s = i(8), a = t;
  for (let n = 0; n < 8; n++) a += o[s[n] % o.length];
  return a;
}
function Kb(e, t, s, a) {
  return { id: e, type: t, status: "pending", description: s, toolUseId: a, startTime: Date.now(), ...!J() && { outputFile: Pu(e) }, outputOffset: 0, notified: false };
}
export {
  DIo,
  Kb,
  MIo,
  NT,
  OIo,
  aY,
  cs,
  iqn,
  rht,
  sqn,
  tLr,
  x1
};

// linux/mcp/monitor-ws.js — Claude Code 2.1.310（linux）模块 chunk-1axdbe50.js
import { F, L, q, Om } from "../context/not-admin-owned.js";
import { I } from "../shared/chunk-d2c47492.js";
import { hs, un } from "../fs/async-hooks.7959.js";
import { T4 } from "../fs/mcp-tasks.js";
import { i } from "../shared/environment.js";
import { lLr, lDe, vy, dDe, ahe, dFt, van } from "../git/bridge-child-tool-diff.js";
import { pp } from "../core/conversation-engine.js";
import { bht } from "../telemetry/bg-roster-parse-failed.js";
import { vY, bBt, hx } from "../fs/utf-8.0ed0.js";
import { ime, Xct } from "../tasks/artifact-changed.js";
import { jco } from "../workflows/remote-agent.js";
import { Bct, sBe, gvs } from "../shared/chunk-5a5434c5.js";
function SIe() {
  return !i.CLAUDE_DISABLE_ADOPT;
}
var u = 50;
function l(e) {
  let o = [];
  for (let t of Om()) {
    if (e && !e(t)) continue;
    o.push({ label: "scheduled task", detail: `${h(t)} · ${hs(t.prompt, u, true)}` });
  }
  return o;
}
function h(e) {
  if (e.recurring) return hx(e.cron);
  let o = vY(e.cron), t = o && bBt(o, new Date(e.createdAt), { oneShot: true });
  if (!t) return hx(e.cron);
  let r = Math.max(0, t.getTime() - Date.now());
  return `Runs once in ${un(r, { mostSignificantOnly: true })}`;
}
function NSs(e, { includeDream: o = false, mcpClients: t } = {}) {
  let r = [];
  for (let n of Object.values(e)) {
    if (!vy(n) || n.type === "remote_agent") continue;
    if (!o && n.type === "dream") continue;
    if (n.type === "monitor_ws" && n.ambient) continue;
    if (ahe(n)) continue;
    if (dFt(n)) continue;
    if (g(n, t)) continue;
    if (pp(n) && n.stopsOnExit) continue;
    r.push({ label: lDe(n.type), detail: hs(n.description, u, true) });
  }
  return r.push(...l()), r;
}
var b = { agent: "subagent", workflow: "workflow", shell: "shell", monitor: "monitor", mcp: "MCP task" };
function $Ss(e, o) {
  let t = bht(), { items: r, kinds: n } = t, a = [];
  for (let s of r) {
    if (s.kind === "todo" || s.doneAt !== void 0 || s.stopsOnExit) continue;
    if (g(e?.[s.id], o)) continue;
    a.push({ label: b[s.kind], detail: hs(s.label, u, true) });
  }
  if (n.includes("auto_mode_scan")) a.push({ label: lLr.auto_mode_scan, detail: "environment scan for /auto-mode-setup" });
  if (n.includes("local_memory_import")) a.push({ label: lLr.local_memory_import, detail: "still reading local memory notes; running the command again later continues it" });
  return a.push(...l()), a;
}
function S(e) {
  return e.type === "monitor_ws" && e.ambient === true && !ime(e);
}
function m(e) {
  return Object.values(e).filter(vy).filter((o) => o.type !== "remote_agent" && o.type !== "dream").filter((o) => !S(o));
}
function p(e) {
  if (e.status !== "running" && e.status !== "pending") return false;
  if (dDe(e)) return false;
  if (e.type === "in_process_teammate" && e.evictAfter === 0 && e.currentWorkAbortController === void 0 && ahe(e)) return false;
  if (e.type === "remote_agent" || e.type === "dream") return false;
  if (e.type === "mcp_task" && e.abortController === void 0) {
    if (e.protocol === "sep2663") {
      if (e.parked === true) return false;
      return e.sidecarSessionId !== q() || e.sidecarProjectDir !== T4();
    }
    return false;
  }
  if (e.type === "monitor_ws" && e.ambient === true) return false;
  return true;
}
function T(e) {
  return ime(e) && e.frameLive !== void 0;
}
function Bco() {
  return SIe() && !i.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF;
}
function y(e) {
  return ime(e) && Xct(e);
}
function FSs(e) {
  return Object.values(e).some(y) || gvs() || sBe().size > 0;
}
function QUe(e) {
  return Object.values(e).some(p);
}
function JB(e, { sessionCrons: o = true } = {}) {
  let t = m(e), r = o ? Om().length : 0, n = L(t.map(f)), a = new Set(t.flatMap((c) => T(c) ? [c.frameLive.slug] : [])), s = !SIe() ? 0 : F(L([...Bct(), ...sBe()]), (c) => !a.has(c));
  if (s > 0 && !n.includes("artifact_watch")) n.push("artifact_watch");
  let d = Bco() ? a.size + s : 0;
  if (r > 0) n.push("session_cron");
  let k = F(Object.values(e), van);
  return { count: t.length + r + s, restartableCount: k, kinds: n, drainableMonitors: d, carriedMonitors: a.size + s };
}
function f(e) {
  if (e.type === "monitor_ws" && e.ambient) return "artifact_watch";
  return pp(e) && e.kind === "monitor" ? "monitor" : e.type;
}
function A3e(e, o) {
  let t = m(e), r = l(o?.cronFilter), n = t.length + r.length, a = L(t.map(f));
  if (r.length > 0) a.push("session_cron");
  let s = [jco(t), r.length ? `${r.length} ${I(r.length, "loop")}` : ""];
  return { count: n, kinds: a, summary: s.filter(Boolean).join(", ") };
}
function USs() {
  let { tasks: e } = bht();
  if (e === 0) return;
  return `Detached — ${e} ${I(e, "task")} still running. Run \`claude agents\` to see your background sessions.`;
}
function g(e, o) {
  if (e?.type !== "mcp_task" || p(e)) return false;
  let t = o?.find((r) => r.name === e.serverName)?.config.type;
  return t !== void 0 && t !== "stdio" && t !== "sdk";
}
export {
  $Ss,
  A3e,
  Bco,
  FSs,
  JB,
  NSs,
  QUe,
  SIe,
  USs
};

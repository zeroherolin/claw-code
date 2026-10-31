// darwin/mcp/monitor-ws.js — Claude Code 2.1.310（darwin）模块 chunk-sreyh9v8.js
import { F, L, V, Om } from "../context/not-admin-owned.js";
import { I } from "../shared/chunk-d2c47492.js";
import { ys, un } from "../fs/async-hooks.7959.js";
import { Dq } from "../fs/mcp-tasks.js";
import { i } from "../shared/environment.js";
import { RDr, m0e, ky, g0e, phe, w$t, Nan } from "../git/bridge-child-tool-diff.js";
import { pf } from "../core/conversation-engine.js";
import { tyt } from "../telemetry/bg-roster-parse-failed.js";
import { O3, I1t, Sx } from "../fs/utf-8.0ed0.js";
import { pme, Zct } from "../tasks/artifact-changed.js";
import { puo } from "../workflows/remote-agent.js";
import { Uct, f1e, LEs } from "../shared/chunk-5a5434c5.js";
function TIe() {
  return !i.CLAUDE_DISABLE_ADOPT;
}
var u = 50;
function l(e) {
  let o = [];
  for (let t of Om()) {
    if (e && !e(t)) continue;
    o.push({ label: "scheduled task", detail: `${h(t)} · ${ys(t.prompt, u, true)}` });
  }
  return o;
}
function h(e) {
  if (e.recurring) return Sx(e.cron);
  let o = O3(e.cron), t = o && I1t(o, new Date(e.createdAt), { oneShot: true });
  if (!t) return Sx(e.cron);
  let r = Math.max(0, t.getTime() - Date.now());
  return `Runs once in ${un(r, { mostSignificantOnly: true })}`;
}
function pws(e, { includeDream: o = false, mcpClients: t } = {}) {
  let r = [];
  for (let n of Object.values(e)) {
    if (!ky(n) || n.type === "remote_agent") continue;
    if (!o && n.type === "dream") continue;
    if (n.type === "monitor_ws" && n.ambient) continue;
    if (phe(n)) continue;
    if (w$t(n)) continue;
    if (g(n, t)) continue;
    if (pf(n) && n.stopsOnExit) continue;
    r.push({ label: m0e(n.type), detail: ys(n.description, u, true) });
  }
  return r.push(...l()), r;
}
var b = { agent: "subagent", workflow: "workflow", shell: "shell", monitor: "monitor", mcp: "MCP task" };
function fws(e, o) {
  let t = tyt(), { items: r, kinds: n } = t, a = [];
  for (let s of r) {
    if (s.kind === "todo" || s.doneAt !== void 0 || s.stopsOnExit) continue;
    if (g(e?.[s.id], o)) continue;
    a.push({ label: b[s.kind], detail: ys(s.label, u, true) });
  }
  if (n.includes("auto_mode_scan")) a.push({ label: RDr.auto_mode_scan, detail: "environment scan for /auto-mode-setup" });
  if (n.includes("local_memory_import")) a.push({ label: RDr.local_memory_import, detail: "still reading local memory notes; running the command again later continues it" });
  return a.push(...l()), a;
}
function S(e) {
  return e.type === "monitor_ws" && e.ambient === true && !pme(e);
}
function m(e) {
  return Object.values(e).filter(ky).filter((o) => o.type !== "remote_agent" && o.type !== "dream").filter((o) => !S(o));
}
function p(e) {
  if (e.status !== "running" && e.status !== "pending") return false;
  if (g0e(e)) return false;
  if (e.type === "in_process_teammate" && e.evictAfter === 0 && e.currentWorkAbortController === void 0 && phe(e)) return false;
  if (e.type === "remote_agent" || e.type === "dream") return false;
  if (e.type === "mcp_task" && e.abortController === void 0) {
    if (e.protocol === "sep2663") {
      if (e.parked === true) return false;
      return e.sidecarSessionId !== V() || e.sidecarProjectDir !== Dq();
    }
    return false;
  }
  if (e.type === "monitor_ws" && e.ambient === true) return false;
  return true;
}
function T(e) {
  return pme(e) && e.frameLive !== void 0;
}
function uuo() {
  return TIe() && !i.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF;
}
function y(e) {
  return pme(e) && Zct(e);
}
function mws(e) {
  return Object.values(e).some(y) || LEs() || f1e().size > 0;
}
function a1e(e) {
  return Object.values(e).some(p);
}
function rB(e, { sessionCrons: o = true } = {}) {
  let t = m(e), r = o ? Om().length : 0, n = L(t.map(f)), a = new Set(t.flatMap((c) => T(c) ? [c.frameLive.slug] : [])), s = !TIe() ? 0 : F(L([...Uct(), ...f1e()]), (c) => !a.has(c));
  if (s > 0 && !n.includes("artifact_watch")) n.push("artifact_watch");
  let d = uuo() ? a.size + s : 0;
  if (r > 0) n.push("session_cron");
  let k = F(Object.values(e), Nan);
  return { count: t.length + r + s, restartableCount: k, kinds: n, drainableMonitors: d, carriedMonitors: a.size + s };
}
function f(e) {
  if (e.type === "monitor_ws" && e.ambient) return "artifact_watch";
  return pf(e) && e.kind === "monitor" ? "monitor" : e.type;
}
function M9e(e, o) {
  let t = m(e), r = l(o?.cronFilter), n = t.length + r.length, a = L(t.map(f));
  if (r.length > 0) a.push("session_cron");
  let s = [puo(t), r.length ? `${r.length} ${I(r.length, "loop")}` : ""];
  return { count: n, kinds: a, summary: s.filter(Boolean).join(", ") };
}
function gws() {
  let { tasks: e } = tyt();
  if (e === 0) return;
  return `Detached — ${e} ${I(e, "task")} still running. Run \`claude agents\` to see your background sessions.`;
}
function g(e, o) {
  if (e?.type !== "mcp_task" || p(e)) return false;
  let t = o?.find((r) => r.name === e.serverName)?.config.type;
  return t !== void 0 && t !== "stdio" && t !== "sdk";
}
export {
  M9e,
  TIe,
  a1e,
  fws,
  gws,
  mws,
  pws,
  rB,
  uuo
};

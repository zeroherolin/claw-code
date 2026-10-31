// linux/agents/set-option.js — Claude Code 2.1.310（linux）模块 chunk-wmxemmwv.js
import { F } from "../context/not-admin-owned.js";
import { m } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { efi } from "../context/tool-cgroup-exclude-classes.js";
import { it } from "../git/utf8-keep-bom.js";
import { Kde, mBr, gBr, Vze } from "../terminal/chunk-4c553df7.js";
import { xG, Jyt } from "./swarm-team-file-update.js";
import { jue, uSn, Wue, prt, fSn } from "../fs/reply-across-default-dirs.js";
import { iX } from "../shared/chunk-65fb1c9c.js";
function h(e) {
  let n = `Failed to create teammate pane: ${e}`, a = e.toLowerCase();
  return a.includes("no space") || a.includes("too small") ? `${n} — no room for another tmux split. Spawn fewer concurrent teammates, enlarge your terminal if running inside tmux, or switch to in-process teammates via /config.` : n;
}
function T(e) {
  return { red: "red", blue: "blue", green: "green", yellow: "yellow", purple: "magenta", orange: "colour208", pink: "colour205", cyan: "cyan" }[e];
}
function d(e) {
  let n = gBr(), a = n ? ["-S", n, ...e] : e;
  return it(Wue, a);
}
function l(e, n) {
  return it(Wue, ["-L", fSn(), ...e], n);
}
async function pCr(e, n, a, r) {
  await it(Wue, [...e, "set-option", "-p", "-t", n, "remain-on-exit", "failed"], r);
  let s = await it(Wue, [...e, "respawn-pane", "-k", "-t", n, "--", efi("agent", a)], r);
  if (s.code !== 0) throw new xG(`Failed to send command to pane ${n}: ${s.stderr}`);
}
class Nhi {
  type = "tmux";
  displayName = "tmux";
  cachedLeaderWindowTarget = null;
  firstPaneUsedForExternal = false;
  paneCreationLock = iX();
  async isAvailable() {
    return Vze();
  }
  async isRunningInside() {
    return Kde();
  }
  async createTeammatePaneInSwarmView(e, n) {
    let a = await this.paneCreationLock.acquire();
    try {
      if (await this.isRunningInside()) return await this.createTeammatePaneWithLeader(e, n);
      return await this.createTeammatePaneExternal(e, n);
    } finally {
      a();
    }
  }
  async sendCommandToPane(e, n, a = false) {
    try {
      Jyt(n);
    } catch (o) {
      throw m("swarm_pane_spawn", "swarm_pane_command_control_chars"), o;
    }
    let r = gBr(), s = a ? ["-L", fSn()] : r ? ["-S", r] : [];
    await pCr(s, e, n);
  }
  async setPaneBorderColor(e, n, a = false) {
    let r = T(n), s = a ? l : d;
    await s(["set-option", "-p", "-t", e, "window-style", `bg=default,fg=${r}`]), await s(["set-option", "-p", "-t", e, "pane-border-style", `fg=${r}`]), await s(["set-option", "-p", "-t", e, "pane-active-border-style", `fg=${r}`]);
  }
  async setPaneTitle(e, n, a, r = false) {
    let s = T(a), o = r ? l : d;
    await o(["select-pane", "-t", e, "-T", n]), await o(["set-option", "-p", "-t", e, "pane-border-format", `#[fg=${s},bold] #{pane_title} #[default]`]);
  }
  async enablePaneBorderStatus(e, n = false) {
    let a = e || await this.getCurrentWindowTarget();
    if (!a) return;
    await (n ? l : d)(["set-option", "-w", "-t", a, "pane-border-status", "top"]);
  }
  async killPane(e, n = false) {
    return (await (n ? l : d)(["kill-pane", "-t", e])).code === 0;
  }
  async getCurrentPaneId() {
    let e = mBr();
    if (e) return e;
    let n = await d(["display-message", "-p", "#{pane_id}"]);
    if (n.code !== 0) return t(`[TmuxBackend] Failed to get current pane ID (exit ${n.code}): ${n.stderr}`), null;
    return n.stdout.trim();
  }
  async getCurrentWindowTarget() {
    if (this.cachedLeaderWindowTarget) return this.cachedLeaderWindowTarget;
    let e = mBr(), n = ["display-message"];
    if (e) n.push("-t", e);
    n.push("-p", "#{window_id}");
    let a = await d(n);
    if (a.code !== 0) return t(`[TmuxBackend] Failed to get current window target (exit ${a.code}): ${a.stderr}`), null;
    return this.cachedLeaderWindowTarget = a.stdout.trim(), this.cachedLeaderWindowTarget;
  }
  async getCurrentWindowPaneCount(e, n = false) {
    let a = e || await this.getCurrentWindowTarget();
    if (!a) return null;
    let r = ["list-panes", "-t", a, "-F", "#{pane_id}"], s = n ? await l(r) : await d(r);
    if (s.code !== 0) {
      if (t(`[TmuxBackend] Failed to get pane count for ${a} (exit ${s.code}): ${s.stderr}`, { level: "error" }), a === this.cachedLeaderWindowTarget) this.cachedLeaderWindowTarget = null;
      return null;
    }
    return F(s.stdout.trim().split(`
`), Boolean);
  }
  async hasSessionInSwarm(e) {
    return (await l(["has-session", "-t", e])).code === 0;
  }
  async createExternalSwarmSession() {
    if (!await this.hasSessionInSwarm(jue)) {
      let o = await l(["new-session", "-d", "-s", jue, "-n", uSn, "-P", "-F", "#{pane_id}", "--", prt], { useCwd: true, toolCgroupClass: "agent" });
      if (o.code !== 0) throw new xG(`Failed to create swarm session: ${o.stderr || "Unknown error"}`);
      let i = o.stdout.trim(), u = `${jue}:${uSn}`;
      return t(`[TmuxBackend] Created external swarm session with window ${u}, pane ${i}`), this.firstPaneUsedForExternal = false, { windowTarget: u, paneId: i };
    }
    let a = (await l(["list-windows", "-t", jue, "-F", "#{window_name}"])).stdout.trim().split(`
`).filter(Boolean), r = `${jue}:${uSn}`;
    if (a.includes(uSn)) {
      let i = (await l(["list-panes", "-t", r, "-F", "#{pane_id}"])).stdout.trim().split(`
`).filter(Boolean);
      return { windowTarget: r, paneId: i[0] || "" };
    }
    let s = await l(["new-window", "-t", jue, "-n", uSn, "-P", "-F", "#{pane_id}", "--", prt]);
    if (s.code !== 0) throw new xG(`Failed to create swarm-view window: ${s.stderr || "Unknown error"}`);
    return this.firstPaneUsedForExternal = false, { windowTarget: r, paneId: s.stdout.trim() };
  }
  async createTeammatePaneWithLeader(e, n) {
    let a = await this.getCurrentPaneId(), r = await this.getCurrentWindowTarget();
    if (!a || !r) throw new xG("Could not determine current tmux pane/window");
    let s = await this.getCurrentWindowPaneCount(r);
    if (s === null) throw new xG("Could not determine pane count for current window");
    let o = s === 1, i;
    if (o) i = await d(["split-window", "-d", "-t", a, "-h", "-l", "70%", "-P", "-F", "#{pane_id}", "--", prt]);
    else {
      let c = (await d(["list-panes", "-t", r, "-F", "#{pane_id}"])).stdout.trim().split(`
`).filter(Boolean).slice(1), g = c.length, P = g % 2 === 1, w = Math.floor((g - 1) / 2), x = c[w] || c.at(-1);
      i = await d(["split-window", "-d", "-t", x, P ? "-v" : "-h", "-P", "-F", "#{pane_id}", "--", prt]);
    }
    if (i.code !== 0) throw new xG(h(i.stderr));
    let u = i.stdout.trim();
    return t(`[TmuxBackend] Created teammate pane for ${e}: ${u}`), await this.setPaneBorderColor(u, n), await this.setPaneTitle(u, e, n), await this.rebalancePanesWithLeader(r), { paneId: u, isFirstTeammate: o };
  }
  async createTeammatePaneExternal(e, n) {
    let { windowTarget: a, paneId: r } = await this.createExternalSwarmSession(), s = await this.getCurrentWindowPaneCount(a, true);
    if (s === null) throw new xG("Could not determine pane count for swarm window");
    let o = !this.firstPaneUsedForExternal && s === 1, i;
    if (o) i = r, this.firstPaneUsedForExternal = true, t(`[TmuxBackend] Using initial pane for first teammate ${e}: ${i}`), await this.enablePaneBorderStatus(a, true);
    else {
      let p = (await l(["list-panes", "-t", a, "-F", "#{pane_id}"])).stdout.trim().split(`
`).filter(Boolean), f = p.length, c = f % 2 === 1, g = Math.floor((f - 1) / 2), P = p[g] || p.at(-1), w = await l(["split-window", "-d", "-t", P, c ? "-v" : "-h", "-P", "-F", "#{pane_id}", "--", prt]);
      if (w.code !== 0) throw new xG(h(w.stderr));
      i = w.stdout.trim(), t(`[TmuxBackend] Created teammate pane for ${e}: ${i}`);
    }
    return await this.setPaneBorderColor(i, n, true), await this.setPaneTitle(i, e, n, true), await this.rebalancePanesTiled(a), { paneId: i, isFirstTeammate: o };
  }
  async rebalancePanesWithLeader(e) {
    let a = (await d(["list-panes", "-t", e, "-F", "#{pane_id}"])).stdout.trim().split(`
`).filter(Boolean);
    if (a.length <= 2) return;
    await d(["select-layout", "-t", e, "main-vertical"]);
    let r = a[0];
    await d(["resize-pane", "-t", r, "-x", "30%"]), t(`[TmuxBackend] Rebalanced ${a.length - 1} teammate panes with leader`);
  }
  async rebalancePanesTiled(e) {
    let a = (await l(["list-panes", "-t", e, "-F", "#{pane_id}"])).stdout.trim().split(`
`).filter(Boolean);
    if (a.length <= 1) return;
    await l(["select-layout", "-t", e, "tiled"]), t(`[TmuxBackend] Rebalanced ${a.length} teammate panes with tiled layout`);
  }
}
export {
  Nhi,
  pCr
};

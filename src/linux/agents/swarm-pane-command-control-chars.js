// linux/agents/swarm-pane-command-control-chars.js — Claude Code 2.1.310（linux）模块 chunk-ge26fw1r.js
import "./third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import "../telemetry/chunk-9097a12b.js";
import { m } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../models/claude-3-5-sonnet.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../shared/chunk-0870a9b4.js";
import { i } from "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "../shared/chunk-de56f88d.js";
import "../context/tool-cgroup-exclude-classes.js";
import "../shared/async-hooks.5238.js";
import "../shared/chunk-8eee6836.js";
import { it } from "../git/utf8-keep-bom.js";
import "../shell/chunk-fea9c492.js";
import { KQ, EFo, D1t } from "../terminal/chunk-4c553df7.js";
import { xG, Jyt } from "./swarm-team-file-update.js";
import "../shared/chunk-1f805b50.js";
import { iX } from "../shared/chunk-65fb1c9c.js";
import "../shared/chunk-6da6c5a3.js";
function c(e) {
  return it(EFo(), e);
}
function p(e) {
  let s = e.match(/Created new pane:\s*(.+)/);
  if (s && s[1]) return s[1].trim();
  return "";
}
function I() {
  let e = i.ITERM_SESSION_ID;
  if (!e) return null;
  let s = e.indexOf(":");
  if (s === -1) return null;
  return e.slice(s + 1);
}
class g {
  type = "iterm2";
  displayName = "iTerm2";
  teammateSessionIds = [];
  firstPaneUsed = false;
  paneCreationLock = iX();
  async isAvailable() {
    let e = KQ();
    if (t(`[ITermBackend] isAvailable check: inITerm2=${e}`), !e) return t("[ITermBackend] isAvailable: false (not in iTerm2)"), false;
    let s = await D1t();
    return t(`[ITermBackend] isAvailable: ${s} (it2 CLI ${s ? "found" : "not found"})`), s;
  }
  async isRunningInside() {
    let e = KQ();
    return t(`[ITermBackend] isRunningInside: ${e}`), e;
  }
  async createTeammatePaneInSwarmView(e, s) {
    t(`[ITermBackend] createTeammatePaneInSwarmView called for ${e} with color ${s}`);
    let o = await this.paneCreationLock.acquire();
    try {
      while (true) {
        let n = !this.firstPaneUsed;
        t(`[ITermBackend] Creating pane: isFirstTeammate=${n}, existingPanes=${this.teammateSessionIds.length}`);
        let r, a;
        if (n) {
          let l = I();
          if (l) r = ["session", "split", "-v", "-s", l], t(`[ITermBackend] First split from leader session: ${l}`);
          else r = ["session", "split", "-v"], t("[ITermBackend] First split from active session (no leader ID)");
        } else if (a = this.teammateSessionIds.at(-1), a) r = ["session", "split", "-s", a], t(`[ITermBackend] Subsequent split from teammate session: ${a}`);
        else r = ["session", "split"], t("[ITermBackend] Subsequent split from active session (no teammate ID)");
        let d = await c(r);
        if (d.code !== 0) {
          if (a) {
            let l = await c(["session", "list"]);
            if (l.code === 0 && !l.stdout.includes(a)) {
              t(`[ITermBackend] Split failed targeting dead session ${a}, pruning and retrying: ${d.stderr}`);
              let f = this.teammateSessionIds.indexOf(a);
              if (f !== -1) this.teammateSessionIds.splice(f, 1);
              if (this.teammateSessionIds.length === 0) this.firstPaneUsed = false;
              continue;
            }
          }
          throw new xG(`Failed to create iTerm2 split pane: ${d.stderr}`);
        }
        let u = p(d.stdout);
        if (!u) throw Error(`Failed to parse session ID from split output: ${d.stdout}`);
        if (t(`[ITermBackend] Created teammate pane for ${e}: ${u}`), n) this.firstPaneUsed = true;
        return this.teammateSessionIds.push(u), { paneId: u, isFirstTeammate: n };
      }
    } finally {
      o();
    }
  }
  async sendCommandToPane(e, s, o) {
    try {
      Jyt(s);
    } catch (a) {
      throw m("swarm_pane_spawn", "swarm_pane_command_control_chars"), a;
    }
    let n = e ? ["-s", e] : [];
    await c(["session", "send", ...n, ""]);
    let r = await c(["session", "run", ...n, s]);
    if (r.code !== 0) throw new xG(`Failed to send command to iTerm2 pane ${e}: ${r.stderr}`);
  }
  async setPaneBorderColor(e, s, o) {
  }
  async setPaneTitle(e, s, o, n) {
  }
  async enablePaneBorderStatus(e, s) {
  }
  async killPane(e, s) {
    let o = await c(["session", "close", "-f", "-s", e]), n = this.teammateSessionIds.indexOf(e);
    if (n !== -1) this.teammateSessionIds.splice(n, 1);
    if (this.teammateSessionIds.length === 0) this.firstPaneUsed = false;
    return o.code === 0;
  }
}
export {
  g as ITermBackend
};

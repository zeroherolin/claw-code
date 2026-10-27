// agents/swarm-pane-command-control-chars.fzzv.js — Claude Code 2.1.310 模块 chunk-fzzvyt8s.js
import "./third-party.ydpb.js";
import "../telemetry/anthropic-workspace-id.36ys.js";
import "../shared/chunk-9sbknd2z.js";
import "../fs/async-hooks.9s1z.js";
import "../context/not-admin-owned.ersa.js";
import "../fs/chunk-kqpf5fh3.js";
import "../shared/chunk-3kevgx4j.js";
import "../fs/node-modules.gp4v.js";
import "../shared/chunk-3y73jbfr.js";
import "../telemetry/chunk-wq923bwc.js";
import { m } from "../telemetry/chunk-wn8xtaqg.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import "../shared/chunk-x6r6k81p.js";
import "../models/claude-3-5-sonnet.21mz.js";
import "../fs/backed-up.p1qn.js";
import "../shared/chunk-j79dwkaq.js";
import "../shared/chunk-nrx8c90j.js";
import { i } from "../shared/environment.9a41.js";
import "../auth/oauth-2025-04-20.ke15.js";
import "../artifacts/cowritten-artifact-html.thm2.js";
import "../fs/chunk-dz0rx1wn.js";
import "../shared/chunk-4kxy1036.js";
import "../context/tool-cgroup-exclude-classes.t1za.js";
import "../shared/async-hooks.m2fg.js";
import "../shared/chunk-z6efcye4.js";
import { st } from "../git/utf8-keep-bom.c49x.js";
import "../shell/chunk-gx93fya1.js";
import { nQ, AUo, njt } from "../terminal/chunk-cz21n45m.js";
import { $2, o_t } from "./swarm-team-file-update.vdzy.js";
import "../shared/chunk-81mpzfkq.js";
import { mX } from "../shared/chunk-mzb69x1h.js";
import "../shared/chunk-n07cvysj.js";
function c(e) {
  return st(AUo(), e);
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
  paneCreationLock = mX();
  async isAvailable() {
    let e = nQ();
    if (t(`[ITermBackend] isAvailable check: inITerm2=${e}`), !e) return t("[ITermBackend] isAvailable: false (not in iTerm2)"), false;
    let s = await njt();
    return t(`[ITermBackend] isAvailable: ${s} (it2 CLI ${s ? "found" : "not found"})`), s;
  }
  async isRunningInside() {
    let e = nQ();
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
          throw new $2(`Failed to create iTerm2 split pane: ${d.stderr}`);
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
      o_t(s);
    } catch (a) {
      throw m("swarm_pane_spawn", "swarm_pane_command_control_chars"), a;
    }
    let n = e ? ["-s", e] : [];
    await c(["session", "send", ...n, ""]);
    let r = await c(["session", "run", ...n, s]);
    if (r.code !== 0) throw new $2(`Failed to send command to iTerm2 pane ${e}: ${r.stderr}`);
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

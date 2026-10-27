// agents/initialize-session-team.d34y.js — Claude Code 2.1.310 模块 chunk-d34ympta.js
import "../shared/chunk-9sbknd2z.js";
import "../fs/async-hooks.9s1z.js";
import { V, ke, f7r, dss } from "../context/not-admin-owned.ersa.js";
import "../fs/chunk-kqpf5fh3.js";
import "./third-party.ydpb.js";
import "../telemetry/anthropic-workspace-id.36ys.js";
import "../shared/chunk-3kevgx4j.js";
import "../fs/node-modules.gp4v.js";
import "../shared/chunk-3y73jbfr.js";
import { XS } from "../shared/general-purpose.t0jz.js";
import "../plugins/chunk-x0a7sawk.js";
import "../fs/gitlab-runner-authentication-token.d7b0.js";
import "../shared/chunk-x6r6k81p.js";
import "../models/claude-3-5-sonnet.21mz.js";
import "../fs/backed-up.p1qn.js";
import "../shared/chunk-j79dwkaq.js";
import "../shared/chunk-nrx8c90j.js";
import "../shared/environment.9a41.js";
import "../auth/oauth-2025-04-20.ke15.js";
import "../artifacts/cowritten-artifact-html.thm2.js";
import "../fs/chunk-dz0rx1wn.js";
import "../shared/chunk-4kxy1036.js";
import "../shared/chunk-nyvhtfb3.js";
import "../fs/chunk-w461d8x8.js";
import "../shell/chunk-0gmzdmcr.js";
import "./in-process-teammate.5te1.js";
import "../remote/local-agent.we9a.js";
import "../shell/chunk-gx93fya1.js";
import "../cli/chunk-33ax6j5s.js";
import "../mcp/toolbox-mcp-server-id.fewh.js";
import "../artifacts/chunk-m8t7qekn.js";
import "../remote/self-hosted.qq4m.js";
import "../context/fetch-project-timeline.g27d.js";
import "../mcp/claude-browser.hdf6.js";
import "../shared/chunk-xz73gv4f.js";
import "../shared/chunk-cg45s1mf.js";
import "../auth/profile-explicit.b7t3.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.32v5.js";
import "../shared/chunk-5x6nmyvf.js";
import "../git/utf-8.vh7e.js";
import "../telemetry/chunk-wq923bwc.js";
import "../telemetry/chunk-wn8xtaqg.js";
import "../shared/async-hooks.m2fg.js";
import "../shared/async-hooks.923e.js";
import "../context/tool-cgroup-exclude-classes.t1za.js";
import "../shared/chunk-z6efcye4.js";
import "../git/utf8-keep-bom.c49x.js";
import "../git/chunk-q8vnfcnf.js";
import "../shared/chunk-abagh0tt.js";
import "../shared/chunk-daaayw23.js";
import "../shell/chunk-tjkwy3jp.js";
import "../context/utf-8.yzy3.js";
import "../fs/utf-8.7pve.js";
import "../fs/tempdir-owner-mismatch.5xe1.js";
import "../fs/utf-8.fmbx.js";
import "../fs/async-hooks.2k4e.js";
import "../shell/invalid-type.qnva.js";
import "../permissions/classifier-transcript-too-long.8zvz.js";
import "../permissions/quota-auto-resume-disabled.gt6d.js";
import "../terminal/chunk-9vttrktj.js";
import "../mcp/chunk-ykcv164t.js";
import "../mcp/always-allow.9m89.js";
import "../plugins/skills-dir.cemw.js";
import "../fs/chunk-gzs70jxe.js";
import "../settings/workflow-launch-exec.t4r2.js";
import "../shared/chunk-s56ftfc1.js";
import "../remote/moved-directory.z3m0.js";
import "../models/total-tokens-reminder.psq3.js";
import "../mcp/init-function-end.wpfb.js";
import "../shell/spawn-error.7yg0.js";
import "../fs/content-encoding.v6wj.js";
import "../auth/descriptor-direct.zd2z.js";
import "../vendor/aws-sdk/ca-certs-load.ft7b.js";
import "../git/ssh-placeholder.1144.js";
import { fKs, fU, iun } from "../context/envelope-pinned-id.a4yh.js";
import { wGe, Hb, $$r, U$r, xNo } from "./swarm-team-file-update.vdzy.js";
import "../shared/chunk-g217yxgy.js";
import { zj, Xa } from "../fs/reply-across-default-dirs.esvz.js";
import "../shared/chunk-dpjnt83j.js";
import "../models/claude-mythos-preview.rw6s.js";
import "../shared/sk-ant-sid.0hme.js";
import "../shared/chunk-s06z5etx.js";
import "../shared/chunk-81mpzfkq.js";
import "../fs/not-utf8.sqq6.js";
import "../context/tool-result.evq2.js";
import "../shared/chunk-bhdett2m.js";
import "../shared/chunk-n07cvysj.js";
import "../shared/chunk-19a02m7w.js";
import "../remote/chunk-t0kv6pst.js";
import { rename as d } from "fs/promises";
var l = "session";
function c(t) {
  return `${l}-${t.slice(0, 8)}`;
}
function p() {
  if (f7r() === void 0) {
    let t = process.env.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME || null;
    delete process.env.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME, dss(t);
  }
  return f7r() ?? null;
}
async function x(t, n) {
  let i = t?.existingTeamName || p(), e = i ?? c(V()), a = zj(Xa, e), m = wGe(e);
  if (!(i ? await Hb(e, n) : null)) {
    let r = { name: e, createdAt: Date.now(), leadAgentId: a, leadSessionId: V(), members: [{ agentId: a, name: Xa, agentType: Xa, joinedAt: Date.now(), tmuxPaneId: "leader", cwd: ke(), subscriptions: [], backendType: "in-process" }] };
    await U$r(e, r, n).catch((T) => $$r(e, T));
  }
  fKs(e);
  let o = V();
  if (e !== o) await d(fU(o), fU(e)).catch(() => {
  });
  await iun(e, n), xNo(e);
  let s = XS[0];
  return { teamContext: { teamName: e, teamFilePath: m, leadAgentId: a, teammates: { [a]: { name: Xa, agentType: Xa, color: s, tmuxSessionName: "in-process", tmuxPaneId: "leader", cwd: ke(), spawnedAt: Date.now() } } }, teammateColors: { assignments: /* @__PURE__ */ new Map([[a, s]]), index: 1 } };
}
export {
  x as initializeSessionTeam
};

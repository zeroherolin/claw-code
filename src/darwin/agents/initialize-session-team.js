// darwin/agents/initialize-session-team.js — Claude Code 2.1.310（darwin）模块 chunk-d34ympta.js
import "../shared/chunk-3b9c376b.js";
import "../fs/async-hooks.93b1.js";
import { V, ke, f7r, dss } from "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "./third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import { XS } from "../shared/general-purpose.js";
import "../plugins/chunk-0a4c51cf.js";
import "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../models/claude-3-5-sonnet.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../shared/chunk-0870a9b4.js";
import "../shared/environment.js";
import "../auth/oauth-2025-04-20.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "../shared/chunk-59ffb646.js";
import "../shared/chunk-2fe3b2b7.js";
import "../fs/chunk-475c6783.js";
import "../shell/chunk-e0b62862.js";
import "./in-process-teammate.32be.js";
import "../remote/local-agent.js";
import "../shell/chunk-fea9c492.js";
import "../cli/chunk-af2447be.js";
import "../mcp/toolbox-mcp-server-id.js";
import "../artifacts/chunk-a6c9d164.js";
import "../remote/self-hosted.js";
import "../context/fetch-project-timeline.js";
import "../mcp/claude-browser.js";
import "../shared/chunk-1b1c4439.js";
import "../shared/chunk-f98598c3.js";
import "../auth/profile-explicit.js";
import "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import "../shared/chunk-537f65d6.js";
import "../git/utf-8.js";
import "../telemetry/chunk-9097a12b.js";
import "../telemetry/chunk-9d6962d2.js";
import "../shared/async-hooks.5238.js";
import "../shared/async-hooks.9e79.js";
import "../context/tool-cgroup-exclude-classes.js";
import "../shared/chunk-8eee6836.js";
import "../git/utf8-keep-bom.js";
import "../git/chunk-c16cb6b4.js";
import "../shared/chunk-4563156b.js";
import "../shared/chunk-d4196a83.js";
import "../shell/chunk-8eebd6c6.js";
import "../context/utf-8.js";
import "../fs/utf-8.8f8e.js";
import "../fs/tempdir-owner-mismatch.js";
import "../fs/utf-8.aa9a.js";
import "../fs/async-hooks.7959.js";
import "../shell/invalid-type.js";
import "../permissions/classifier-transcript-too-long.js";
import "../permissions/quota-auto-resume-disabled.js";
import "../terminal/chunk-3ca478a4.js";
import "../mcp/chunk-0e2a1db6.js";
import "../mcp/always-allow.js";
import "../plugins/skills-dir.js";
import "../fs/chunk-86be9585.js";
import "../settings/workflow-launch-exec.js";
import "../fs/chunk-9b7a3f1c.js";
import "../remote/moved-directory.js";
import "../models/total-tokens-reminder.js";
import "../mcp/init-function-end.js";
import "../shell/spawn-error.js";
import "../fs/content-encoding.js";
import "../auth/descriptor-direct.js";
import "../fs/ca-certs-load.js";
import "../git/ssh-placeholder.js";
import { fKs, fU, iun } from "../context/envelope-pinned-id.js";
import { wGe, Hb, $$r, U$r, xNo } from "./swarm-team-file-update.js";
import "../shared/chunk-bfd2df5f.js";
import { zj, Xa } from "../fs/reply-across-default-dirs.js";
import "../shared/chunk-6ae01e90.js";
import "../models/claude-mythos-preview.js";
import "../shared/sk-ant-sid.js";
import "../shared/chunk-cc3baac1.js";
import "../shared/chunk-1f805b50.js";
import "../fs/not-utf8.js";
import "../context/tool-result.js";
import "../shared/chunk-8bf008d9.js";
import "../shared/chunk-6da6c5a3.js";
import "../shared/chunk-86ecf3aa.js";
import "../remote/chunk-95151620.js";
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

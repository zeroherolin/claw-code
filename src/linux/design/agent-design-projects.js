// linux/design/agent-design-projects.js — Claude Code 2.1.310（linux）模块 chunk-mfm8tcsq.js
import { d } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { vM } from "../remote/moved-directory.js";
import { OF } from "../context/update-member-role.js";
import { kBe, Uks } from "./design-project-grant.js";
import { DGe } from "./allow-design-sync.js";
var kNn = async (n, r) => {
  let o = r.toolState.get(OF);
  if (n === "consent") try {
    return await kBe(o, "agent_design_projects", r.credentials), { type: "text", value: `Design agent access granted for your Claude Design projects. Use /design revoke to undo.
${DGe}` };
  } catch (e) {
    if (vM()) return t(`/design consent failed in a cloud session: ${d(e)}`, { level: "error" }), { type: "text", value: "Couldn't record Design agent access for your Claude Design projects from this cloud session. Try again, or grant it at claude.ai/design/settings and then retry your Design request." };
    return { type: "text", value: `Couldn't record Design agent access for ${"your Claude Design projects"} — ${d(e)}. Try again, or run /design-login to authorize Claude Design for this account.` };
  }
  try {
    return await Uks(o, "agent_design_projects", r.credentials), { type: "text", value: "Design agent access revoked for your Claude Design projects." };
  } catch (e) {
    if (vM()) return t(`/design revoke failed in a cloud session: ${d(e)}`, { level: "error" }), { type: "text", value: "Couldn't revoke Design agent access for your Claude Design projects from this cloud session. Try again, or revoke it at claude.ai/design/settings." };
    return { type: "text", value: `Couldn't revoke Design agent access for ${"your Claude Design projects"} — ${d(e)}. Try again, or run /design-login to authorize Claude Design for this account.` };
  }
};
export {
  kNn
};

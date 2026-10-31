// darwin/design/agent-design-projects.js — Claude Code 2.1.310（darwin）模块 chunk-vjzg0mkb.js
import { d } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { xM } from "../remote/moved-directory.js";
import { L$ } from "../context/update-member-role.js";
import { M1e, gCs } from "./design-project-grant.js";
import { G2e } from "./allow-design-sync.js";
var NNn = async (n, r) => {
  let o = r.toolState.get(L$);
  if (n === "consent") try {
    return await M1e(o, "agent_design_projects", r.credentials), { type: "text", value: `Design agent access granted for your Claude Design projects. Use /design revoke to undo.
${G2e}` };
  } catch (e) {
    if (xM()) return t(`/design consent failed in a cloud session: ${d(e)}`, { level: "error" }), { type: "text", value: "Couldn't record Design agent access for your Claude Design projects from this cloud session. Try again, or grant it at claude.ai/design/settings and then retry your Design request." };
    return { type: "text", value: `Couldn't record Design agent access for ${"your Claude Design projects"} — ${d(e)}. Try again, or run /design-login to authorize Claude Design for this account.` };
  }
  try {
    return await gCs(o, "agent_design_projects", r.credentials), { type: "text", value: "Design agent access revoked for your Claude Design projects." };
  } catch (e) {
    if (xM()) return t(`/design revoke failed in a cloud session: ${d(e)}`, { level: "error" }), { type: "text", value: "Couldn't revoke Design agent access for your Claude Design projects from this cloud session. Try again, or revoke it at claude.ai/design/settings." };
    return { type: "text", value: `Couldn't revoke Design agent access for ${"your Claude Design projects"} — ${d(e)}. Try again, or run /design-login to authorize Claude Design for this account.` };
  }
};
export {
  NNn
};

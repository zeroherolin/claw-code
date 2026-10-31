// linux/mcp/get-mcp-skill.js — Claude Code 2.1.310（linux）模块 chunk-qy2abh3b.js
import { p } from "../shared/chunk-2fe3b2b7.js";
import "../fs/async-hooks.93b1.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import "../models/claude-3-5-sonnet.js";
import "../shared/chunk-0870a9b4.js";
import "../shared/environment.js";
import "../shared/chunk-3b9c376b.js";
import "../context/not-admin-owned.js";
import "../auth/oauth-2025-04-20.js";
import "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import "../artifacts/cowritten-artifact-html.js";
import "../fs/chunk-ce5d00cd.js";
import "../shared/chunk-de56f88d.js";
import { Wl } from "../shared/chunk-51932285.js";
import { Yi } from "../shared/chunk-62a451b1.js";
import { o, oe, T, u } from "../vendor/zod/string-format.js";
var i = p(() => u({ skills: T(oe()), nextCursor: o().nullish() })), s = p(() => u({ skill: oe() }));
function c(t, e) {
  return Yi(t.client).request({ method: "skills/list", params: e === void 0 ? {} : { cursor: e } }, i(), { timeout: Wl() });
}
function S(t, e, l) {
  return Yi(t.client).request({ method: "skills/get", params: { uri: e } }, s(), { timeout: Wl(), signal: l?.signal });
}
export {
  S as getMcpSkill,
  c as listMcpSkillPage
};

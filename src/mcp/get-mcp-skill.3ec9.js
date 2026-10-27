// mcp/get-mcp-skill.3ec9.js — Claude Code 2.1.310 模块 chunk-3ec9974y.js
import { f } from "../shared/chunk-nyvhtfb3.js";
import "../fs/async-hooks.9s1z.js";
import "../fs/chunk-kqpf5fh3.js";
import "../agents/third-party.ydpb.js";
import "../telemetry/anthropic-workspace-id.36ys.js";
import "../shared/chunk-3kevgx4j.js";
import "../fs/node-modules.gp4v.js";
import "../shared/chunk-3y73jbfr.js";
import "../models/claude-3-5-sonnet.21mz.js";
import "../shared/chunk-nrx8c90j.js";
import "../shared/environment.9a41.js";
import "../shared/chunk-9sbknd2z.js";
import "../context/not-admin-owned.ersa.js";
import "../auth/oauth-2025-04-20.ke15.js";
import "../fs/gitlab-runner-authentication-token.d7b0.js";
import "../shared/chunk-x6r6k81p.js";
import "../fs/backed-up.p1qn.js";
import "../shared/chunk-j79dwkaq.js";
import "../artifacts/cowritten-artifact-html.thm2.js";
import "../fs/chunk-dz0rx1wn.js";
import "../shared/chunk-4kxy1036.js";
import { Wl } from "../shared/chunk-xbqn04a1.js";
import { Yi } from "../shared/chunk-e76vd23z.js";
import { o, oe, C, u } from "../vendor/zod/string-format.k395.js";
var i = f(() => u({ skills: C(oe()), nextCursor: o().nullish() })), s = f(() => u({ skill: oe() }));
function a(t, e) {
  return Yi(t.client).request({ method: "skills/list", params: e === void 0 ? {} : { cursor: e } }, i(), { timeout: Wl() });
}
function c(t, e, l) {
  return Yi(t.client).request({ method: "skills/get", params: { uri: e } }, s(), { timeout: Wl(), signal: l?.signal });
}
export {
  c as getMcpSkill,
  a as listMcpSkillPage
};

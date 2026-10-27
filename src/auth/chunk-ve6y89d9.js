// auth/chunk-ve6y89d9.js — Claude Code 2.1.310 模块 chunk-ve6y89d9.js
import { d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { Sr } from "../models/claude-3-5-sonnet.21mz.js";
import { i } from "../shared/environment.9a41.js";
import { zQo, VQo, vui } from "./descriptor-direct.zd2z.js";
import { bui } from "../shared/sk-ant-sid.0hme.js";
async function q2t(e, r = {}) {
  try {
    if (!Sr()) {
      if (!i.CLAUDE_CODE_OAUTH_TOKEN && r.bgAuthSnapshot !== "leave") await zQo(e);
      await VQo(e), await vui(e);
    }
    await bui(e);
  } catch (o) {
    t(`Descriptor credential prime failed (non-fatal): ${d(o)}`, { level: "error" });
  }
}
export {
  q2t
};

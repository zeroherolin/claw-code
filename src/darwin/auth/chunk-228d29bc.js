// darwin/auth/chunk-228d29bc.js — Claude Code 2.1.310（darwin）模块 chunk-ve6y89d9.js
import { d } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { Sr } from "../models/claude-3-5-sonnet.js";
import { i } from "../shared/environment.js";
import { zQo, VQo, vui } from "./descriptor-direct.js";
import { bui } from "../shared/sk-ant-sid.js";
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

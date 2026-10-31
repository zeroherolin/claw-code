// linux/auth/chunk-228d29bc.js — Claude Code 2.1.310（linux）模块 chunk-x00h1pmd.js
import { d } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { wr } from "../models/claude-3-5-sonnet.js";
import { i } from "../shared/environment.js";
import { XQo, JQo, mci } from "./descriptor-direct.js";
import { uci } from "../shared/sk-ant-sid.js";
async function LGt(e, r = {}) {
  try {
    if (!wr()) {
      if (!i.CLAUDE_CODE_OAUTH_TOKEN && r.bgAuthSnapshot !== "leave") await XQo(e);
      await JQo(e), await mci(e);
    }
    await uci(e);
  } catch (o) {
    t(`Descriptor credential prime failed (non-fatal): ${d(o)}`, { level: "error" });
  }
}
export {
  LGt
};

// auth/oauth-slot-refresh-diskless.kgvs.js — Claude Code 2.1.310 模块 chunk-kgvs5hwe.js
import { J } from "../context/not-admin-owned.ersa.js";
import { d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { X } from "../shared/chunk-3kevgx4j.js";
import { ie, t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { m } from "../telemetry/chunk-wn8xtaqg.js";
import { El } from "../fs/chunk-w461d8x8.js";
import { YKr } from "../settings/global-config-and-gates.27xj.js";
import { DL } from "./claude-code-user.tvhr.js";
import { join as f } from "path";
var p = 5;
class v2t extends Error {
  constructor() {
    super("OAuth refresh lock contention: another process is holding the refresh lock");
    this.name = "OauthSlotLockContendedError";
  }
}
async function AQn(o, n) {
  if (J()) throw m("oauth_token_refresh", "oauth_slot_refresh_diskless"), Error("This hosted session (claude-code-server) cannot refresh an OAuth token");
  let s = DL();
  await ie().mkdir(s);
  let i = f(s, o), a = false, r, l = 0;
  while (!r) {
    l++;
    try {
      r = await El(i, { lockfilePath: i, realpath: false, stale: 6e4, update: 5e3, onCompromised: (e) => {
        a = true, t(`OAuth refresh lock ${o} compromised: ${e.message}`, { level: "error" });
      } });
    } catch (e) {
      if (e.code === "ELOCKED") {
        if (l < p) {
          await X(1e3 + Math.random() * 1e3);
          continue;
        }
        throw new v2t();
      }
      throw e;
    }
  }
  let c = { isCompromised: () => a }, h = YKr();
  try {
    return await n(c);
  } finally {
    try {
      try {
        await r();
      } catch (e) {
        t(`OAuth refresh lock ${o} release failed: ${d(e)}`, { level: "error" });
      }
    } finally {
      h();
    }
  }
}
export {
  AQn,
  v2t
};

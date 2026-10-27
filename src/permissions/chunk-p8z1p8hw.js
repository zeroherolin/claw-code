// permissions/chunk-p8z1p8hw.js — Claude Code 2.1.310 模块 chunk-p8z1p8hw.js
import { i } from "../shared/environment.9a41.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { vt, ue } from "../settings/global-config-and-gates.27xj.js";
import { BB, M0e, VA, jB } from "../context/team-memory-sync.0s3j.js";
import { Va } from "../chrome/browser-batch.ny0f.js";
var Mmr = "https://clau.de/chrome/permissions", m = { install: BB, reconnect: M0e, permissions: Mmr };
async function Cki({ mcpClients: s, atStartup: a }) {
  let l = await jB().catch((e) => (t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error ? e.message : String(e)}`, { level: "error" }), false)), o = ue(), r = s.some((e) => e.name === Va && e.type === "connected"), n = o.chromeExtension?.pairedDeviceName;
  return { allowed: VA(), subscriber: vt(), wsl: i.isWslEnvironment(), installed: l, connected: r, ...r && n && { paired_browser: n }, enabled_by_default: o.claudeInChromeDefaultEnabled ?? false, at_startup: await a(o.claudeInChromeDefaultEnabled === true), urls: { ...m } };
}
export {
  Cki,
  Mmr
};

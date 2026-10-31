// linux/permissions/chunk-41011549.js — Claude Code 2.1.310（linux）模块 chunk-e7tdk4xv.js
import { i } from "../shared/environment.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { Et, ue } from "../settings/global-config-and-gates.js";
import { H1, ODe, GC, L1 } from "../context/team-memory-sync.js";
import { za } from "../chrome/browser-batch.js";
var pmr = "https://clau.de/chrome/permissions", m = { install: H1, reconnect: ODe, permissions: pmr };
async function BEi({ mcpClients: s, atStartup: a }) {
  let l = await L1().catch((e) => (t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error ? e.message : String(e)}`, { level: "error" }), false)), o = ue(), r = s.some((e) => e.name === za && e.type === "connected"), n = o.chromeExtension?.pairedDeviceName;
  return { allowed: GC(), subscriber: Et(), wsl: i.isWslEnvironment(), installed: l, connected: r, ...r && n && { paired_browser: n }, enabled_by_default: o.claudeInChromeDefaultEnabled ?? false, at_startup: await a(o.claudeInChromeDefaultEnabled === true), urls: { ...m } };
}
export {
  BEi,
  pmr
};

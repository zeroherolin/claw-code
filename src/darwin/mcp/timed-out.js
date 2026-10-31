// darwin/mcp/timed-out.js — Claude Code 2.1.310（darwin）模块 chunk-b546nyks.js
import { ye } from "../context/not-admin-owned.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { JY } from "../shell/invalid-type.js";
import { Y } from "../shared/async-hooks.9e79.js";
import { np } from "../settings/global-config-and-gates.js";
import { TDt, xvo, h7e, pi, e8, pm } from "../core/conversation-engine.js";
import { Hr, A6e } from "./spawn-to-exec-ms.js";
import { wf } from "../commands/claude-code.js";
import { vtt, UDe, WGr } from "../auth/policy-limits-principal-changed.js";
import { t2, kN, gMt, NEe, CNn } from "../remote/managed-settings-security-dialog-accepted.js";
async function Q1(r) {
  let n = performance.now(), o = false, e, a = NEe(), i = false;
  if (CNn()) t("[mcp-policy-cold-start] waiting on remote managed-settings confirmation (managedMcpServers is withheld from the unverified cache)"), e = performance.now(), await kN(), o = true, i = true;
  else if (!a && !UDe()) ;
  else if (r.hasDynamicMcpConfig || !r.pluginStateReliable || ye() || await m(r.storageV5)) {
    if (a) t("[mcp-policy-cold-start] waiting on remote managed-settings load"), e = performance.now(), await t2(), o = true;
    i = true;
  } else t("[mcp-policy-cold-start] skipped — no MCP server source visible");
  if (e !== void 0 && A6e("mcp_policy_settings_wait_ms") === void 0) {
    let s = performance.now() - e, c = gMt();
    Hr("mcp_policy_settings_wait_ms", s, e);
    let d = c ? "timed_out" : NEe() || CNn() ? "load_failed" : "ok";
    Y(d === "ok" ? "info" : "warn", "mcp_policy_settings_wait", { waited_ms: Math.round(s), timed_out: c, outcome: d, ...JY() && { stored_copy: "not_read" } });
  }
  if (vtt("settings", () => !o ? "not_awaited" : gMt() ? "timed_out" : "completed", { since: o ? n : void 0 }), i && UDe()) {
    if (t("[mcp-policy-cold-start] waiting on the policy-limits verdict (compliance taints feed config ${VAR} expansion)"), await WGr() === "timed_out") t("[mcp-policy-cold-start] policy-limits verdict did not land within the cold-start budget; loading MCP configs without it");
  }
}
async function m(r) {
  for (let n of e8) if (Object.keys(pm(n, { expandVars: false }).servers).length > 0) return true;
  if (h7e()) return true;
  try {
    for (let { record: e } of xvo(TDt())) for (let [a, i] of Object.entries(e ?? {})) if ((i === true || Array.isArray(i)) && !wf(a)) return true;
    let { enabled: n, errors: o } = await pi(r);
    if (o.length > 0) return true;
    for (let e of n) if (!e.isBuiltin || e.mcpServers !== void 0 && Object.keys(e.mcpServers).length > 0) return true;
  } catch {
    return true;
  }
  return np();
}
export {
  Q1
};

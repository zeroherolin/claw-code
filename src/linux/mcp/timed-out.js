// linux/mcp/timed-out.js — Claude Code 2.1.310（linux）模块 chunk-nkb3cjtc.js
import { ye } from "../context/not-admin-owned.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { W9 } from "../shell/invalid-type.js";
import { Y } from "../shared/async-hooks.9e79.js";
import { nf } from "../settings/global-config-and-gates.js";
import { mLt, eEo, lJe, fi, G3, fm } from "../core/conversation-engine.js";
import { Dr, yKe } from "./spawn-to-exec-ms.js";
import { vp } from "../commands/claude-code.js";
import { htt, DLe, vzr } from "../auth/policy-limits-principal-changed.js";
import { KW, SN, lMt, Ive, uNn } from "../remote/managed-settings-security-dialog-accepted.js";
async function VB(r) {
  let n = performance.now(), o = false, e, a = Ive(), i = false;
  if (uNn()) t("[mcp-policy-cold-start] waiting on remote managed-settings confirmation (managedMcpServers is withheld from the unverified cache)"), e = performance.now(), await SN(), o = true, i = true;
  else if (!a && !DLe()) ;
  else if (r.hasDynamicMcpConfig || !r.pluginStateReliable || ye() || await m(r.storageV5)) {
    if (a) t("[mcp-policy-cold-start] waiting on remote managed-settings load"), e = performance.now(), await KW(), o = true;
    i = true;
  } else t("[mcp-policy-cold-start] skipped — no MCP server source visible");
  if (e !== void 0 && yKe("mcp_policy_settings_wait_ms") === void 0) {
    let s = performance.now() - e, c = lMt();
    Dr("mcp_policy_settings_wait_ms", s, e);
    let d = c ? "timed_out" : Ive() || uNn() ? "load_failed" : "ok";
    Y(d === "ok" ? "info" : "warn", "mcp_policy_settings_wait", { waited_ms: Math.round(s), timed_out: c, outcome: d, ...W9() && { stored_copy: "not_read" } });
  }
  if (htt("settings", () => !o ? "not_awaited" : lMt() ? "timed_out" : "completed", { since: o ? n : void 0 }), i && DLe()) {
    if (t("[mcp-policy-cold-start] waiting on the policy-limits verdict (compliance taints feed config ${VAR} expansion)"), await vzr() === "timed_out") t("[mcp-policy-cold-start] policy-limits verdict did not land within the cold-start budget; loading MCP configs without it");
  }
}
async function m(r) {
  for (let n of G3) if (Object.keys(fm(n, { expandVars: false }).servers).length > 0) return true;
  if (lJe()) return true;
  try {
    for (let { record: e } of eEo(mLt())) for (let [a, i] of Object.entries(e ?? {})) if ((i === true || Array.isArray(i)) && !vp(a)) return true;
    let { enabled: n, errors: o } = await fi(r);
    if (o.length > 0) return true;
    for (let e of n) if (!e.isBuiltin || e.mcpServers !== void 0 && Object.keys(e.mcpServers).length > 0) return true;
  } catch {
    return true;
  }
  return nf();
}
export {
  VB
};

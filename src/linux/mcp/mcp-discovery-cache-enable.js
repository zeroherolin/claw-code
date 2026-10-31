// linux/mcp/mcp-discovery-cache-enable.js — Claude Code 2.1.310（linux）模块 chunk-v4qhq59m.js
import { p } from "../shared/chunk-2fe3b2b7.js";
import { k } from "../settings/global-config-and-gates.js";
import { XOs, JOs } from "../core/conversation-engine.js";
import { us } from "../shared/chunk-869ced06.js";
import { $u } from "../vendor/zod/string-format.js";
var jae = us({ kind: "mcp_url_elicitation", payload: p(() => $u((e) => typeof e === "object" && e !== null && "serverName" in e && "params" in e)), result: p(() => $u((e) => typeof e === "object" && e !== null)), default: { action: "cancel" } });
function iEe() {
  if (JOs()) return;
  let e = false, t;
  XOs(() => {
    if (!e) e = true, t = k("tengu_mcp_discovery_cache_enable", null) ?? void 0;
    return t;
  });
}
export {
  iEe,
  jae
};

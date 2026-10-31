// darwin/mcp/mcp-discovery-cache-enable.js — Claude Code 2.1.310（darwin）模块 chunk-b8b320wh.js
import { f } from "../shared/chunk-2fe3b2b7.js";
import { k } from "../settings/global-config-and-gates.js";
import { DMs, LMs } from "../core/conversation-engine.js";
import { os } from "../shared/chunk-869ced06.js";
import { Eu } from "../vendor/zod/string-format.js";
var qae = os({ kind: "mcp_url_elicitation", payload: f(() => Eu((e) => typeof e === "object" && e !== null && "serverName" in e && "params" in e)), result: f(() => Eu((e) => typeof e === "object" && e !== null)), default: { action: "cancel" } });
function uve() {
  if (LMs()) return;
  let e = false, t;
  DMs(() => {
    if (!e) e = true, t = k("tengu_mcp_discovery_cache_enable", null) ?? void 0;
    return t;
  });
}
export {
  qae,
  uve
};

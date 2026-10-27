// mcp/mcp-discovery-cache-enable.b8b3.js — Claude Code 2.1.310 模块 chunk-b8b320wh.js
import { f } from "../shared/chunk-nyvhtfb3.js";
import { k } from "../settings/global-config-and-gates.27xj.js";
import { DMs, LMs } from "../core/conversation-engine.31gx.js";
import { os } from "../shared/chunk-98em9746.js";
import { Eu } from "../vendor/zod/string-format.k395.js";
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

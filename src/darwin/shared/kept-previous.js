// darwin/shared/kept-previous.js — Claude Code 2.1.310（darwin）模块 chunk-rsm7m8ev.js
import { xt } from "../mcp/toolbox-mcp-server-id.js";
import { k7 } from "../tools/chunk-69cf9f3c.js";
import { ar, Ul } from "../core/conversation-engine.js";
function s() {
  return import.meta.require("../mcp/emit-tripwire-event.js").mcpClientModule();
}
async function gae(e, c, d) {
  let i = ar(e.name, e.config), { captureDiscoveryGrantLeg: h, ensureDiscoveryCacheAccount: l, getMcpIdentityEpoch: f, persistRefreshedToolsIfPresent: m } = s();
  l();
  let a = Ul() ? h(e.name, e.config) : void 0, n = xt().toolRefreshSequences, r = n.get(e) ?? { started: 0, applied: 0 };
  n.set(e, r), r.started += 1;
  let p = r.started, { fetchToolsForClient: t } = s(), v = t.cache.get(i), g = f();
  t.cache.delete(i);
  let o = await t(e, d), u = s().getToolsListErrorForResult(o);
  if (u) return { status: "kept-previous", error: u };
  if (e.discoveryAuthFailure && o.length === 0) return { status: "kept-previous", error: "the server rejected tool discovery as unauthorized — the user needs to authorize this connector (e.g. via /mcp) before its tools are available" };
  if (r.applied > p) return { status: "kept-previous", error: "superseded by a newer concurrent refresh of this server — the newer refresh result is the one applied" };
  if (r.applied = p, c(e.name, k7(e, o)), a) a.then((y) => m(e, o, { identityEpoch: g, grantLeg: y }));
  return { status: "refreshed", newTools: o, previousToolsPromise: v };
}
export {
  gae
};

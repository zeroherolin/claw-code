// linux/vendor/mcp-sdk/elicitation-response.js — Claude Code 2.1.310（linux）模块 chunk-8a2pg45a.js
import { Wen, Gen } from "./not-in-era.js";
import { GH, J } from "../../context/not-admin-owned.js";
import { ss, se } from "../../artifacts/cowritten-artifact-html.js";
import { yK, bK, jNt, WNt, OL } from "../../core/conversation-engine.js";
import { rx } from "./chunk-384e0b2c.js";
import { tHt } from "../../mcp/mcp-elicitation-response.js";
import { Yi } from "../../shared/chunk-62a451b1.js";
function ZAi(e) {
  let t = Gen.safeParse(e?.[Wen]);
  return t.success ? { taskId: t.data.taskId } : null;
}
function eCi(e, t, s, c, r) {
  if (rx({ name: t }) !== void 0) return;
  let i = tHt(e, { serverName: t, pluginSource: r, requestDialog: s, transportErrorState: c, runElicitationHooks: RUn, runElicitationResultHooks: xUn });
  try {
    e.setRequestHandler("elicitation/create", (n, o) => i.handle(n, { signal: o.mcpReq.signal })), e.setNotificationHandler("notifications/elicitation/complete", (n) => {
      let { elicitationId: o } = n.params;
      if (se(t, `Received elicitation completion notification: ${o}`), OL(yK(), { message: `MCP server "${t}" confirmed elicitation ${o} complete`, notificationType: "elicitation_complete" }).catch(bK), !i.complete(o)) se(t, `Ignoring completion notification for unknown elicitation: ${o}`);
    });
  } catch {
    return;
  }
}
function gbo({ connected: e, params: t, signal: s, requestDialog: c, transportErrorState: r }) {
  return tHt(Yi(e.client), { serverName: e.name, pluginSource: e.config.pluginSource, requestDialog: c, transportErrorState: e.transportErrorState, runElicitationHooks: RUn, runElicitationResultHooks: xUn }).handle({ params: t }, { signal: s, transportErrorState: r });
}
async function RUn(e, t, s) {
  let c = yK();
  if (c.project === null && !J()) throw new GH();
  try {
    let r = t.mode === "url" ? "url" : "form", i = "url" in t ? t.url : void 0, n = "elicitationId" in t ? t.elicitationId : void 0, { elicitationResponse: o, blockingError: a } = await jNt({ session: c, serverName: e, message: t.message, requestedSchema: "requestedSchema" in t ? t.requestedSchema : void 0, signal: s, mode: r, url: i, elicitationId: n });
    if (a) return { action: "decline" };
    if (o) return { action: o.action, content: o.content };
    return;
  } catch (r) {
    ss(e, `Elicitation hook error: ${r}`);
    return;
  }
}
async function xUn(e, t, s, c, r) {
  let i = yK();
  if (i.project === null && !J()) throw new GH();
  try {
    let { elicitationResultResponse: n, blockingError: o } = await WNt({ session: i, serverName: e, action: t.action, content: t.content, signal: s, mode: c, elicitationId: r });
    if (o) return OL(i, { message: `Elicitation response for server "${e}": decline`, notificationType: "elicitation_response" }).catch(bK), { action: "decline" };
    let a = n ? { action: n.action, content: n.content ?? t.content } : t;
    return OL(i, { message: `Elicitation response for server "${e}": ${a.action}`, notificationType: "elicitation_response" }).catch(bK), a;
  } catch (n) {
    return ss(e, `ElicitationResult hook error: ${n}`), OL(i, { message: `Elicitation response for server "${e}": ${t.action}`, notificationType: "elicitation_response" }).catch(bK), t;
  }
}
export {
  RUn,
  ZAi,
  eCi,
  gbo,
  xUn
};

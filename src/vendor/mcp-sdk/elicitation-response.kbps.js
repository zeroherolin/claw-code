// vendor/mcp-sdk/elicitation-response.kbps.js — Claude Code 2.1.310 模块 chunk-kbpshf75.js
import { mtn, gtn } from "./not-in-era.0ynw.js";
import { KH, J } from "../../context/not-admin-owned.ersa.js";
import { is, se } from "../../artifacts/cowritten-artifact-html.thm2.js";
import { R6, P6, eFt, tFt, DD } from "../../core/conversation-engine.31gx.js";
import { ix } from "./chunk-mcb3r2r5.js";
import { rHt } from "../../mcp/mcp-elicitation-response.e3cr.js";
import { Yi } from "../../shared/chunk-e76vd23z.js";
function NAi(e) {
  let t = gtn.safeParse(e?.[mtn]);
  return t.success ? { taskId: t.data.taskId } : null;
}
function FAi(e, t, s, c, r) {
  if (ix({ name: t }) !== void 0) return;
  let i = rHt(e, { serverName: t, pluginSource: r, requestDialog: s, transportErrorState: c, runElicitationHooks: G1n, runElicitationResultHooks: z1n });
  try {
    e.setRequestHandler("elicitation/create", (n, o) => i.handle(n, { signal: o.mcpReq.signal })), e.setNotificationHandler("notifications/elicitation/complete", (n) => {
      let { elicitationId: o } = n.params;
      if (se(t, `Received elicitation completion notification: ${o}`), DD(R6(), { message: `MCP server "${t}" confirmed elicitation ${o} complete`, notificationType: "elicitation_complete" }).catch(P6), !i.complete(o)) se(t, `Ignoring completion notification for unknown elicitation: ${o}`);
    });
  } catch {
    return;
  }
}
function ebo({ connected: e, params: t, signal: s, requestDialog: c, transportErrorState: r }) {
  return rHt(Yi(e.client), { serverName: e.name, pluginSource: e.config.pluginSource, requestDialog: c, transportErrorState: e.transportErrorState, runElicitationHooks: G1n, runElicitationResultHooks: z1n }).handle({ params: t }, { signal: s, transportErrorState: r });
}
async function G1n(e, t, s) {
  let c = R6();
  if (c.project === null && !J()) throw new KH();
  try {
    let r = t.mode === "url" ? "url" : "form", i = "url" in t ? t.url : void 0, n = "elicitationId" in t ? t.elicitationId : void 0, { elicitationResponse: o, blockingError: a } = await eFt({ session: c, serverName: e, message: t.message, requestedSchema: "requestedSchema" in t ? t.requestedSchema : void 0, signal: s, mode: r, url: i, elicitationId: n });
    if (a) return { action: "decline" };
    if (o) return { action: o.action, content: o.content };
    return;
  } catch (r) {
    is(e, `Elicitation hook error: ${r}`);
    return;
  }
}
async function z1n(e, t, s, c, r) {
  let i = R6();
  if (i.project === null && !J()) throw new KH();
  try {
    let { elicitationResultResponse: n, blockingError: o } = await tFt({ session: i, serverName: e, action: t.action, content: t.content, signal: s, mode: c, elicitationId: r });
    if (o) return DD(i, { message: `Elicitation response for server "${e}": decline`, notificationType: "elicitation_response" }).catch(P6), { action: "decline" };
    let a = n ? { action: n.action, content: n.content ?? t.content } : t;
    return DD(i, { message: `Elicitation response for server "${e}": ${a.action}`, notificationType: "elicitation_response" }).catch(P6), a;
  } catch (n) {
    return is(e, `ElicitationResult hook error: ${n}`), DD(i, { message: `Elicitation response for server "${e}": ${t.action}`, notificationType: "elicitation_response" }).catch(P6), t;
  }
}
export {
  FAi,
  G1n,
  NAi,
  ebo,
  z1n
};

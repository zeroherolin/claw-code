// linux/shared/elicitation-response.js — Claude Code 2.1.310（linux）模块 chunk-cfy7dqkc.js
import { eEe, Zkr, JBe, bDt } from "../vendor/mcp-sdk/input-required.88fd.js";
import { GH, J } from "../context/not-admin-owned.js";
import { ss, se } from "../artifacts/cowritten-artifact-html.js";
import { yK, bK, jNt, WNt, OL } from "../core/conversation-engine.js";
import { rx } from "../vendor/mcp-sdk/chunk-384e0b2c.js";
import { tHt } from "../mcp/mcp-elicitation-response.js";
import { Yi } from "./chunk-62a451b1.js";
function _Ti(e) {
  let t = Zkr.safeParse(e?.[eEe]);
  return t.success ? { taskId: t.data.taskId } : null;
}
function bTi(e, t, s, c, r) {
  if (rx({ name: t }) !== void 0) return;
  let o = tHt(e, { serverName: t, pluginSource: r, requestDialog: s, transportErrorState: c, runElicitationHooks: FHn, runElicitationResultHooks: UHn });
  try {
    e.setRequestHandler(JBe, (n, i) => o.handle(n, { signal: i.signal })), e.setNotificationHandler(bDt, (n) => {
      let { elicitationId: i } = n.params;
      if (se(t, `Received elicitation completion notification: ${i}`), OL(yK(), { message: `MCP server "${t}" confirmed elicitation ${i} complete`, notificationType: "elicitation_complete" }).catch(bK), !o.complete(i)) se(t, `Ignoring completion notification for unknown elicitation: ${i}`);
    });
  } catch {
    return;
  }
}
function STi({ connected: e, params: t, signal: s, requestDialog: c, transportErrorState: r }) {
  return tHt(Yi(e.client), { serverName: e.name, pluginSource: e.config.pluginSource, requestDialog: c, transportErrorState: e.transportErrorState, runElicitationHooks: FHn, runElicitationResultHooks: UHn }).handle({ params: t }, { signal: s, transportErrorState: r });
}
async function FHn(e, t, s) {
  let c = yK();
  if (c.project === null && !J()) throw new GH();
  try {
    let r = t.mode === "url" ? "url" : "form", o = "url" in t ? t.url : void 0, n = "elicitationId" in t ? t.elicitationId : void 0, { elicitationResponse: i, blockingError: a } = await jNt({ session: c, serverName: e, message: t.message, requestedSchema: "requestedSchema" in t ? t.requestedSchema : void 0, signal: s, mode: r, url: o, elicitationId: n });
    if (a) return { action: "decline" };
    if (i) return { action: i.action, content: i.content };
    return;
  } catch (r) {
    ss(e, `Elicitation hook error: ${r}`);
    return;
  }
}
async function UHn(e, t, s, c, r) {
  let o = yK();
  if (o.project === null && !J()) throw new GH();
  try {
    let { elicitationResultResponse: n, blockingError: i } = await WNt({ session: o, serverName: e, action: t.action, content: t.content, signal: s, mode: c, elicitationId: r });
    if (i) return OL(o, { message: `Elicitation response for server "${e}": decline`, notificationType: "elicitation_response" }).catch(bK), { action: "decline" };
    let a = n ? { action: n.action, content: n.content ?? t.content } : t;
    return OL(o, { message: `Elicitation response for server "${e}": ${a.action}`, notificationType: "elicitation_response" }).catch(bK), a;
  } catch (n) {
    return ss(e, `ElicitationResult hook error: ${n}`), OL(o, { message: `Elicitation response for server "${e}": ${t.action}`, notificationType: "elicitation_response" }).catch(bK), t;
  }
}
export {
  FHn,
  STi,
  UHn,
  _Ti,
  bTi
};

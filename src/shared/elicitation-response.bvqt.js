// shared/elicitation-response.bvqt.js — Claude Code 2.1.310 模块 chunk-bvqtjj91.js
import { ive, ECr, aBe, O0t } from "../vendor/mcp-sdk/input-required.rtb7.js";
import { KH, J } from "../context/not-admin-owned.ersa.js";
import { is, se } from "../artifacts/cowritten-artifact-html.thm2.js";
import { R6, P6, eFt, tFt, DD } from "../core/conversation-engine.31gx.js";
import { ix } from "../vendor/mcp-sdk/chunk-mcb3r2r5.js";
import { rHt } from "../mcp/mcp-elicitation-response.e3cr.js";
import { Yi } from "./chunk-e76vd23z.js";
function YCi(e) {
  let t = ECr.safeParse(e?.[ive]);
  return t.success ? { taskId: t.data.taskId } : null;
}
function XCi(e, t, s, c, r) {
  if (ix({ name: t }) !== void 0) return;
  let o = rHt(e, { serverName: t, pluginSource: r, requestDialog: s, transportErrorState: c, runElicitationHooks: eDn, runElicitationResultHooks: tDn });
  try {
    e.setRequestHandler(aBe, (n, i) => o.handle(n, { signal: i.signal })), e.setNotificationHandler(O0t, (n) => {
      let { elicitationId: i } = n.params;
      if (se(t, `Received elicitation completion notification: ${i}`), DD(R6(), { message: `MCP server "${t}" confirmed elicitation ${i} complete`, notificationType: "elicitation_complete" }).catch(P6), !o.complete(i)) se(t, `Ignoring completion notification for unknown elicitation: ${i}`);
    });
  } catch {
    return;
  }
}
function JCi({ connected: e, params: t, signal: s, requestDialog: c, transportErrorState: r }) {
  return rHt(Yi(e.client), { serverName: e.name, pluginSource: e.config.pluginSource, requestDialog: c, transportErrorState: e.transportErrorState, runElicitationHooks: eDn, runElicitationResultHooks: tDn }).handle({ params: t }, { signal: s, transportErrorState: r });
}
async function eDn(e, t, s) {
  let c = R6();
  if (c.project === null && !J()) throw new KH();
  try {
    let r = t.mode === "url" ? "url" : "form", o = "url" in t ? t.url : void 0, n = "elicitationId" in t ? t.elicitationId : void 0, { elicitationResponse: i, blockingError: a } = await eFt({ session: c, serverName: e, message: t.message, requestedSchema: "requestedSchema" in t ? t.requestedSchema : void 0, signal: s, mode: r, url: o, elicitationId: n });
    if (a) return { action: "decline" };
    if (i) return { action: i.action, content: i.content };
    return;
  } catch (r) {
    is(e, `Elicitation hook error: ${r}`);
    return;
  }
}
async function tDn(e, t, s, c, r) {
  let o = R6();
  if (o.project === null && !J()) throw new KH();
  try {
    let { elicitationResultResponse: n, blockingError: i } = await tFt({ session: o, serverName: e, action: t.action, content: t.content, signal: s, mode: c, elicitationId: r });
    if (i) return DD(o, { message: `Elicitation response for server "${e}": decline`, notificationType: "elicitation_response" }).catch(P6), { action: "decline" };
    let a = n ? { action: n.action, content: n.content ?? t.content } : t;
    return DD(o, { message: `Elicitation response for server "${e}": ${a.action}`, notificationType: "elicitation_response" }).catch(P6), a;
  } catch (n) {
    return is(e, `ElicitationResult hook error: ${n}`), DD(o, { message: `Elicitation response for server "${e}": ${t.action}`, notificationType: "elicitation_response" }).catch(P6), t;
  }
}
export {
  JCi,
  XCi,
  YCi,
  eDn,
  tDn
};

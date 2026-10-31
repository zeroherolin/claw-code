// darwin/agents/chunk-a3b77149.js — Claude Code 2.1.310（darwin）模块 chunk-r2pwyg28.js
import { V } from "../context/not-admin-owned.js";
import { pc } from "./in-process-teammate.32be.js";
import { vx, Pye } from "../shared/remote-control.js";
import { zd } from "../remote/chunk-8734517b.js";
import { Pg, udn } from "../telemetry/bg-roster-parse-failed.js";
import { XS, vGe } from "../shared/general-purpose.js";
import { _p } from "./in-process-teammate.9720.js";
import { Pin } from "../core/conversation-engine.js";
import { A8e } from "../shared/chunk-67ada34f.js";
var c = ["default", "reset", "none", "gray", "grey"];
async function XTi(n, e, o) {
  return n(await ckr(o, e), { display: "system" }), null;
}
async function ckr(n, e) {
  if (pc()) return "Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";
  let o = n?.trim() ?? "", t = o === "" ? XS[Math.floor(Math.random() * XS.length)] : o.toLowerCase(), r = c.includes(t);
  if (!r && !XS.includes(t)) {
    let s = XS.join(", ");
    return `Invalid color "${t}". Available colors: ${s}, default`;
  }
  let d = V(), m = _p(), i = r ? "default" : t, l = r ? void 0 : t;
  await Pin(d, i, m, e.storageV5), e.setAppState((s) => A8e(s, { color: l }));
  let a = e.getAppState(), g = a.agent ? a.agentDefinitions.activeAgents.find((s) => s.agentType === a.agent) : void 0;
  return udn(Pg(), vGe({ userOverride: l, agentDefinitionColor: g?.color }), e.storageV5), p(i, e.credentials), r ? "Session color reset to default" : `Session color set to: ${t}`;
}
function p(n, e) {
  let o = zd()?.bridgeSessionId;
  if (!o) return;
  let t = vx();
  import("../remote/create-bridge-session.js").then(({ updateBridgeSessionColorTag: r }) => r(o, n, XS, { baseUrl: Pye(), getAccessToken: t ? () => t : void 0, credentials: e }).catch(() => {
  }));
}
export {
  XTi,
  ckr
};

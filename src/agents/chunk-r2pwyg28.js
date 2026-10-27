// agents/chunk-r2pwyg28.js — Claude Code 2.1.310 模块 chunk-r2pwyg28.js
import { V } from "../context/not-admin-owned.ersa.js";
import { pc } from "./in-process-teammate.5te1.js";
import { vx, Pye } from "../shared/remote-control.063d.js";
import { zd } from "../remote/chunk-c1rfegja.js";
import { Pg, udn } from "../telemetry/bg-roster-parse-failed.yhsj.js";
import { XS, vGe } from "../shared/general-purpose.t0jz.js";
import { _p } from "./in-process-teammate.040f.js";
import { Pin } from "../core/conversation-engine.31gx.js";
import { A8e } from "../shared/chunk-ns8czn4y.js";
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
  import("../remote/create-bridge-session.9rqf.js").then(({ updateBridgeSessionColorTag: r }) => r(o, n, XS, { baseUrl: Pye(), getAccessToken: t ? () => t : void 0, credentials: e }).catch(() => {
  }));
}
export {
  XTi,
  ckr
};

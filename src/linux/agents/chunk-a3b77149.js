// linux/agents/chunk-a3b77149.js — Claude Code 2.1.310（linux）模块 chunk-n7g4mhm2.js
import { q } from "../context/not-admin-owned.js";
import { fc } from "./in-process-teammate.32be.js";
import { Sx, Aye } from "../shared/remote-control.js";
import { zd } from "../remote/chunk-8734517b.js";
import { Pg, Gan } from "../telemetry/bg-roster-parse-failed.js";
import { Yb, pze } from "../shared/general-purpose.js";
import { bf } from "./in-process-teammate.9720.js";
import { gin } from "../core/conversation-engine.js";
import { S8e } from "../shared/chunk-67ada34f.js";
var c = ["default", "reset", "none", "gray", "grey"];
async function pAi(n, e, o) {
  return n(await YEr(o, e), { display: "system" }), null;
}
async function YEr(n, e) {
  if (fc()) return "Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";
  let o = n?.trim() ?? "", t = o === "" ? Yb[Math.floor(Math.random() * Yb.length)] : o.toLowerCase(), r = c.includes(t);
  if (!r && !Yb.includes(t)) {
    let s = Yb.join(", ");
    return `Invalid color "${t}". Available colors: ${s}, default`;
  }
  let d = q(), m = bf(), i = r ? "default" : t, l = r ? void 0 : t;
  await gin(d, i, m, e.storageV5), e.setAppState((s) => S8e(s, { color: l }));
  let a = e.getAppState(), g = a.agent ? a.agentDefinitions.activeAgents.find((s) => s.agentType === a.agent) : void 0;
  return Gan(Pg(), pze({ userOverride: l, agentDefinitionColor: g?.color }), e.storageV5), p(i, e.credentials), r ? "Session color reset to default" : `Session color set to: ${t}`;
}
function p(n, e) {
  let o = zd()?.bridgeSessionId;
  if (!o) return;
  let t = Sx();
  import("../remote/create-bridge-session.js").then(({ updateBridgeSessionColorTag: r }) => r(o, n, Yb, { baseUrl: Aye(), getAccessToken: t ? () => t : void 0, credentials: e }).catch(() => {
  }));
}
export {
  YEr,
  pAi
};

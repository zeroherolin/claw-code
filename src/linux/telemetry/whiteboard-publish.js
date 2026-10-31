// linux/telemetry/whiteboard-publish.js — Claude Code 2.1.310（linux）模块 chunk-sspzxwqc.js
import { g } from "./chunk-9d6962d2.js";
import { Soe } from "../shared/chunk-67236fa7.js";
var d = {}, xSs = Soe("whiteboardTelemetry", d);
function PSs(i, r, e, n) {
  g("whiteboard_publish", { seeded: n && e.elCount > 0, el_count: e.elCount, is_first_publish: n });
  let t;
  if (i.set((o) => {
    if (t = o[r], t === void 0) return { ...o, [r]: e.pingCount };
    if (e.pingCount > t) return { ...o, [r]: e.pingCount };
    return o;
  }), t !== void 0 && e.pingCount > t) g("whiteboard_turn", { ping_count: e.pingCount, el_count: e.elCount });
}
export {
  PSs,
  xSs
};

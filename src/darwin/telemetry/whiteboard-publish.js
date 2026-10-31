// darwin/telemetry/whiteboard-publish.js — Claude Code 2.1.310（darwin）模块 chunk-4wmp12fq.js
import { g } from "./chunk-9d6962d2.js";
import { Aoe } from "../shared/chunk-67236fa7.js";
var d = {}, ows = Aoe("whiteboardTelemetry", d);
function sws(i, r, e, n) {
  g("whiteboard_publish", { seeded: n && e.elCount > 0, el_count: e.elCount, is_first_publish: n });
  let t;
  if (i.set((o) => {
    if (t = o[r], t === void 0) return { ...o, [r]: e.pingCount };
    if (e.pingCount > t) return { ...o, [r]: e.pingCount };
    return o;
  }), t !== void 0 && e.pingCount > t) g("whiteboard_turn", { ping_count: e.pingCount, el_count: e.elCount });
}
export {
  ows,
  sws
};

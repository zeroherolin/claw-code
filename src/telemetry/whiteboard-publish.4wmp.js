// telemetry/whiteboard-publish.4wmp.js — Claude Code 2.1.310 模块 chunk-4wmp12fq.js
import { g } from "./chunk-wn8xtaqg.js";
import { Aoe } from "../shared/chunk-bkvejkkf.js";
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

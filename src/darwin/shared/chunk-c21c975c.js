// darwin/shared/chunk-c21c975c.js — Claude Code 2.1.310（darwin）模块 chunk-qpmkzt82.js
import { YH } from "../context/not-admin-owned.js";
import { W } from "./chunk-37dd5dd4.js";
import { vf } from "../settings/global-config-and-gates.js";
import { tao, nao } from "../agents/attacher-caps.js";
import { Rl } from "../telemetry/bg-roster-parse-failed.js";
class i {
  activePark = null;
}
var s = new W(() => new i());
async function Fat(r, e, n, a) {
  if (!vf()) return false;
  let o = s.of(r), t = await tao(e, n, a);
  switch (t.kind) {
    case "refused":
      return false;
    case "already":
      if (o.activePark?.needs !== e) d(o, e, { tempo: "idle", needs: void 0, detail: "" }, a);
      return true;
    case "wrote":
      return d(o, e, t.prior, a), true;
  }
}
function d(r, e, n, a) {
  r.activePark?.unsubscribe();
  let o = YH(() => {
    if (vf()) return;
    let t = r.activePark;
    if (!t || t.needs !== e) return;
    r.activePark = null, t.unsubscribe(), nao(e, t.prior, t.storageV5).catch(Rl);
  });
  r.activePark = { needs: e, prior: n, storageV5: a, unsubscribe: o };
}
export {
  Fat
};

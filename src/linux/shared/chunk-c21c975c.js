// linux/shared/chunk-c21c975c.js — Claude Code 2.1.310（linux）模块 chunk-320aj1fh.js
import { KH } from "../context/not-admin-owned.js";
import { W } from "./chunk-37dd5dd4.js";
import { kp } from "../settings/global-config-and-gates.js";
import { $io, Fio } from "../agents/attacher-caps.js";
import { Rl } from "../telemetry/bg-roster-parse-failed.js";
class i {
  activePark = null;
}
var s = new W(() => new i());
async function Mat(r, e, n, a) {
  if (!kp()) return false;
  let o = s.of(r), t = await $io(e, n, a);
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
  let o = KH(() => {
    if (kp()) return;
    let t = r.activePark;
    if (!t || t.needs !== e) return;
    r.activePark = null, t.unsubscribe(), Fio(e, t.prior, t.storageV5).catch(Rl);
  });
  r.activePark = { needs: e, prior: n, storageV5: a, unsubscribe: o };
}
export {
  Mat
};

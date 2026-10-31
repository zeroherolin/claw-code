// darwin/telemetry/kairos-cron-config.js — Claude Code 2.1.310（darwin）模块 chunk-2p1menv7.js
import { QV } from "../settings/global-config-and-gates.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { P8 } from "../fs/utf-8.0ed0.js";
import { E, u } from "../vendor/zod/string-format.js";
var o = 6e4, r = 18e5, t = 2592e6, i = f(() => u({ recurringFrac: E().min(0).max(1), recurringCapMs: E().int().min(0).max(r), oneShotMaxMs: E().int().min(0).max(r), oneShotFloorMs: E().int().min(0).max(r), oneShotMinuteMod: E().int().min(1).max(60), recurringMaxAgeMs: E().int().min(0).max(t).default(P8.recurringMaxAgeMs), cacheLeadMs: E().int().min(0).max(6e4).default(P8.cacheLeadMs) }).refine((n) => n.oneShotFloorMs <= n.oneShotMaxMs));
function i9() {
  let n = QV("tengu_kairos_cron_config", P8, o), e = i().safeParse(n);
  return e.success ? e.data : P8;
}
export {
  i9
};

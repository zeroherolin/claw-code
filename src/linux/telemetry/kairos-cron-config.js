// linux/telemetry/kairos-cron-config.js — Claude Code 2.1.310（linux）模块 chunk-hmk482tx.js
import { BV } from "../settings/global-config-and-gates.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { w8 } from "../fs/utf-8.0ed0.js";
import { v, u } from "../vendor/zod/string-format.js";
var o = 6e4, r = 18e5, t = 2592e6, i = p(() => u({ recurringFrac: v().min(0).max(1), recurringCapMs: v().int().min(0).max(r), oneShotMaxMs: v().int().min(0).max(r), oneShotFloorMs: v().int().min(0).max(r), oneShotMinuteMod: v().int().min(1).max(60), recurringMaxAgeMs: v().int().min(0).max(t).default(w8.recurringMaxAgeMs), cacheLeadMs: v().int().min(0).max(6e4).default(w8.cacheLeadMs) }).refine((n) => n.oneShotFloorMs <= n.oneShotMaxMs));
function X6() {
  let n = BV("tengu_kairos_cron_config", w8, o), e = i().safeParse(n);
  return e.success ? e.data : w8;
}
export {
  X6
};

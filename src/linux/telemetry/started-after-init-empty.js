// linux/telemetry/started-after-init-empty.js — Claude Code 2.1.310（linux）模块 chunk-eq25erm1.js
import { ye } from "../context/not-admin-owned.js";
import { Pe } from "../shared/chunk-57ff8cc1.js";
import { i } from "../shared/environment.js";
import { Uy } from "../remote/local-agent.js";
var F1 = 1500, uLo = 3e3;
function tre() {
  return i.CLAUDE_CODE_REMOTE && ye();
}
function Bdn() {
  return tre() && Uy();
}
function $zs({ eventLoggingEnabled: e, growthBookEnabled: n, cacheEmpty: o, relaunches: r }) {
  let t = e && o ? F1 : 0, a = n && r ? i.CLAUDE_CODE_FLAG_FETCH_WAIT_MS ?? uLo : 0, s = Math.max(t, a);
  return s > 0 ? s : void 0;
}
function Fzs({ site: e, nonInteractive: n, budgetMs: o, settingsEnvPending: r, cacheEmpty: t, warmCacheKick: a }) {
  if (!n || o === void 0) return "not_eligible";
  if (!t && !a) return "not_asked_warm";
  if (r) return t ? "settings_pending_empty" : "settings_pending_warm";
  if (e === "init") return t ? "started_in_init_empty" : "started_in_init_warm";
  return t ? "started_after_init_empty" : "started_after_init_warm";
}
function Uzs(e) {
  switch (e) {
    case "started_in_init_empty":
    case "started_in_init_warm":
    case "started_after_init_empty":
    case "started_after_init_warm":
      return true;
    case "not_asked_warm":
    case "settings_pending_empty":
    case "settings_pending_warm":
    case "launch_excluded":
    case "not_eligible":
      return false;
  }
}
function Bzs({ nonInteractive: e, budgetMs: n, settingsEnvPending: o, cacheEmpty: r, relaunches: t, autoModeKillSwitchOnDisk: a, warmWakeEarlyFetch: s }) {
  if (n === void 0) return;
  if (e && !o && (r || t && (a || !s))) return "gb-before-mode";
  return t ? "gb-before-context" : "gb-before-tools";
}
async function zGe({ initialize: e, budgetMs: n }) {
  let o = performance.now(), r = await Pe(e().then(() => true, () => true), n);
  return { waitMs: performance.now() - o, timedOut: r === void 0 };
}
export {
  $zs,
  Bdn,
  Bzs,
  F1,
  Fzs,
  Uzs,
  tre,
  uLo,
  zGe
};

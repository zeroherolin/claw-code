// chrome/roster-changed.37kf.js — Claude Code 2.1.310 模块 chunk-37kfs5sj.js
import { Ye } from "../telemetry/anthropic-workspace-id.36ys.js";
import { Jl, Pe, si } from "../shared/chunk-3kevgx4j.js";
import { p } from "../telemetry/chunk-wn8xtaqg.js";
import { k } from "../settings/global-config-and-gates.27xj.js";
import { l } from "../artifacts/cowritten-artifact-html.thm2.js";
import { zi } from "../remote/chunk-bqkq3e7y.js";
var h = 5e3, C = 4e3, a = 1e3, w = 4e3, b = 1e3, S = 250;
function tRs(e) {
  e.browserRosterVersion++, e.browserRosterChanged.emit();
}
async function nRs(e) {
  let n = zi(), t = n.bridgeBinding, o = t?.socketClient;
  if (t === void 0 || o?.listConnectedExtensions === void 0 || o.hasActiveSelection?.() === true || !k("tengu_hushed_lantern", true)) return false;
  if (!(Boolean(t.context.getPersistedDeviceId?.()) || ((await Pe(Promise.resolve().then(() => t.context.getLocalDeviceIds?.()), a).catch(() => {
    return;
  }))?.size ?? 0) > 0)) return false;
  if (n.relayConnectFailed === o && !o.isConnected()) return false;
  let d = o.listConnectedExtensions.bind(o), i = Jl.monotonicNow(), c = n.noBrowserFound?.client === o && n.noBrowserFound.rosterVersion === n.browserRosterVersion, r = c ? "none_cached" : await si(g(n, o, d), e, () => new Ye()).catch((_) => {
    if (e.aborted) return "aborted";
    return l(_), "failed";
  });
  if (r !== "present" && r !== "roster_changed" && !c) p("chrome_permission_prompt", `browser_check_${r}`, { elapsed_ms: Math.round(Jl.monotonicNow() - i) });
  return r === "none" || r === "none_short_wait" || r === "none_cached";
}
async function rRs() {
  let e = zi().bridgeBinding?.socketClient;
  if (e?.listConnectedExtensions === void 0) return false;
  let n = await f(e, e.listConnectedExtensions.bind(e), a).catch((t) => (l(t), "failed"));
  if (n !== "none" && n !== "present") p("chrome_setup_card_answer", `browser_check_${n}`);
  return n === "none";
}
async function g(e, n, t) {
  let o = Jl.now() + h;
  if (await Pe(n.ensureConnected(), C) !== true) return e.relayConnectFailed = n, "connect_failed";
  e.relayConnectFailed = void 0;
  let s = e.browserRosterVersion, d = Jl.now(), i = await f(n, t, a);
  if (i !== "none" || e.browserRosterVersion !== s) return i === "none" ? "roster_changed" : i;
  let c = Math.min(w, o - Jl.now() - S);
  if (c < b) return "no_time_to_wait";
  let r = () => {
  }, _ = new Promise((m) => {
    r = e.browserRosterChanged.subscribe(m);
  });
  if (await Pe(_, c).finally(() => r()), e.browserRosterVersion !== s) return "roster_changed";
  let u = await f(n, t, a);
  if (u !== "none" || e.browserRosterVersion !== s) return u === "none" ? "roster_changed" : u;
  if (Jl.now() - d < w) return "none_short_wait";
  return e.noBrowserFound = { client: n, rosterVersion: s }, "none";
}
async function f(e, n, t) {
  let o = await Pe(n(), t);
  if (!e.isConnected()) return "connection_lost";
  if (o === void 0) return "list_timeout";
  return o.length > 0 ? "present" : "none";
}
export {
  nRs,
  rRs,
  tRs
};

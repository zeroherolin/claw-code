// linux/chrome/roster-changed.js — Claude Code 2.1.310（linux）模块 chunk-j4n8akhp.js
import { Ye } from "../telemetry/anthropic-workspace-id.js";
import { Jl, Pe, si } from "../shared/chunk-57ff8cc1.js";
import { f } from "../telemetry/chunk-9d6962d2.js";
import { k } from "../settings/global-config-and-gates.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { zi } from "../remote/chunk-7e620e0d.js";
var C = 5e3, b = 4e3, a = 1e3, m = 4e3, S = 1e3, p = 250;
function ACs(e) {
  e.browserRosterVersion++, e.browserRosterChanged.emit();
}
async function CCs(e) {
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
  if (r !== "present" && r !== "roster_changed" && !c) f("chrome_permission_prompt", `browser_check_${r}`, { elapsed_ms: Math.round(Jl.monotonicNow() - i) });
  return r === "none" || r === "none_short_wait" || r === "none_cached";
}
async function RCs() {
  let e = zi().bridgeBinding?.socketClient;
  if (e?.listConnectedExtensions === void 0) return false;
  let n = await w(e, e.listConnectedExtensions.bind(e), a).catch((t) => (l(t), "failed"));
  if (n !== "none" && n !== "present") f("chrome_setup_card_answer", `browser_check_${n}`);
  return n === "none";
}
async function g(e, n, t) {
  let o = Jl.now() + C;
  if (await Pe(n.ensureConnected(), b) !== true) return e.relayConnectFailed = n, "connect_failed";
  e.relayConnectFailed = void 0;
  let s = e.browserRosterVersion, d = Jl.now(), i = await w(n, t, a);
  if (i !== "none" || e.browserRosterVersion !== s) return i === "none" ? "roster_changed" : i;
  let c = Math.min(m, o - Jl.now() - p);
  if (c < S) return "no_time_to_wait";
  let r = () => {
  }, _ = new Promise((h) => {
    r = e.browserRosterChanged.subscribe(h);
  });
  if (await Pe(_, c).finally(() => r()), e.browserRosterVersion !== s) return "roster_changed";
  let u = await w(n, t, a);
  if (u !== "none" || e.browserRosterVersion !== s) return u === "none" ? "roster_changed" : u;
  if (Jl.now() - d < m) return "none_short_wait";
  return e.noBrowserFound = { client: n, rosterVersion: s }, "none";
}
async function w(e, n, t) {
  let o = await Pe(n(), t);
  if (!e.isConnected()) return "connection_lost";
  if (o === void 0) return "list_timeout";
  return o.length > 0 ? "present" : "none";
}
export {
  ACs,
  CCs,
  RCs
};

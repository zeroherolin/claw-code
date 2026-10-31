// linux/hooks/create-device-hook-registry.js — Claude Code 2.1.310（linux）模块 chunk-4s8q0hy8.js
import "../fs/async-hooks.93b1.js";
import "../shared/chunk-3b9c376b.js";
import "../context/not-admin-owned.js";
import "../fs/chunk-86a4e44e.js";
import "../agents/third-party.js";
import { N } from "../telemetry/anthropic-workspace-id.js";
import "../shared/chunk-57ff8cc1.js";
import "../fs/node-modules.js";
import "../shared/chunk-37dd5dd4.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import "../shared/chunk-50219e50.js";
import "../models/claude-3-5-sonnet.js";
import "../fs/backed-up.js";
import "../shared/chunk-d2c47492.js";
import { ac } from "../shared/chunk-53bebec8.js";
var y = 2;
function D(i) {
  let e = null, l = null, a = 0, r = false, s = null, d = 0, p = [], m = () => {
    l?.clear(), l = null;
  }, v = () => {
    if (m(), e === null) return;
    let n = e;
    l = i.setTimer(() => {
      if (l = null, e !== n) return;
      if (i.now() < n.leaseExpiresAt) {
        v();
        return;
      }
      let o = { ...n, entries: [] };
      e = o.templates.length === 0 ? null : o;
      for (let u of [...i.onLeaseExpired ? [i.onLeaseExpired] : [], ...p]) try {
        u(o);
      } catch (c) {
        t(`[deviceHooks] lease-expiry listener threw: ${N(c).stack ?? String(c)}`, { level: "error" });
      }
    }, Math.min(ac, Math.max(0, n.leaseExpiresAt - i.now())));
  };
  return { current: () => e, generation: () => d, recordMiss(n, o) {
    if (e === null || e.instanceId !== n || o !== d) return false;
    if (a += 1, !r && a >= y) r = true, s = i.now();
    return r;
  }, recordHit(n) {
    if (e !== null && e.instanceId === n) a = 0;
  }, isAway: (n) => e !== null && e.instanceId === n && r, awaySince: (n) => e !== null && e.instanceId === n && r ? s : null, replaceOwner(n) {
    let o = e !== null && e.instanceId !== n.instanceId ? e.instanceId : void 0, u = e !== null && o === void 0, c = u && r ? s : null;
    if (e = n, !u || c !== null) a = 0, r = false, s = null;
    return d += 1, v(), { ...o !== void 0 && { replaced: o }, ...c !== null && { awaySince: c } };
  }, removeOwner(n) {
    if (e === null || e.instanceId !== n) return false;
    return e = null, a = 0, r = false, s = null, m(), true;
  }, clear() {
    e = null, a = 0, r = false, s = null, m();
  }, onLeaseExpired(n) {
    p.push(n);
  } };
}
function H(i, e) {
  let l = setTimeout(i, e);
  return l.unref(), { clear: () => clearTimeout(l) };
}
export {
  D as createDeviceHookRegistry,
  H as productionRegistryTimer
};

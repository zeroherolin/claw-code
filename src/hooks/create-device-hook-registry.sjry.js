// hooks/create-device-hook-registry.sjry.js — Claude Code 2.1.310 模块 chunk-sjryc3r0.js
import "../fs/async-hooks.9s1z.js";
import "../shared/chunk-9sbknd2z.js";
import "../context/not-admin-owned.ersa.js";
import "../fs/chunk-kqpf5fh3.js";
import "../agents/third-party.ydpb.js";
import { N } from "../telemetry/anthropic-workspace-id.36ys.js";
import "../shared/chunk-3kevgx4j.js";
import "../fs/node-modules.gp4v.js";
import "../shared/chunk-3y73jbfr.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import "../shared/chunk-x6r6k81p.js";
import "../models/claude-3-5-sonnet.21mz.js";
import "../fs/backed-up.p1qn.js";
import "../shared/chunk-j79dwkaq.js";
import { ac } from "../shared/chunk-refybwsn.js";
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

// remote/self-hosted-pool.34b1.js — Claude Code 2.1.310 模块 chunk-34b198na.js
import { d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { JB, Are, IZe, pTe, SU, Y8n } from "./bridge-outcome-branch-dropped.9kms.js";
async function Q5t(f, r) {
  let [o, l] = await Promise.allSettled([SU(void 0, f, r), Y8n(void 0, r)]), s = o.status === "rejected" ? d(o.reason) : null, i = o.status === "fulfilled" ? o.value : [], a = l.status === "fulfilled" ? l.value : [], t = [...i, ...a], e = pTe(), u = e.ignoredUntrustedPool ?? null;
  if (e.id !== void 0 && Are(e.id) && !t.some((n) => JB(n) === e.id)) t.push({ kind: "self_hosted_pool", pool_id: e.id, name: e.id, created_at: "", alive_runner_count: 0 });
  if (t.length === 0) return { availableTargets: [], selectedTarget: null, selectedTargetSource: null, environmentsError: s, ignoredUntrustedPool: u };
  let c = IZe(i, (n) => n.kind !== "bridge") ?? a[0] ?? t[0], g = null;
  if (e.id !== void 0) {
    let n = t.find((m) => JB(m) === e.id);
    if (n) c = n, g = e.source ?? null;
  }
  return { availableTargets: t, selectedTarget: c, selectedTargetSource: g, environmentsError: s, ignoredUntrustedPool: u };
}
export {
  Q5t
};

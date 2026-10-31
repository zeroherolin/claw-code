// linux/shared/downstream-unreachable.d160.js — Claude Code 2.1.310（linux）模块 chunk-e2yfqzm0.js
import { Ye, R } from "../telemetry/anthropic-workspace-id.js";
import { kG, ire } from "../ide/needs-auth.js";
import { Wl } from "./chunk-51932285.js";
import { Ts } from "./chunk-82eb5142.js";
function u(i, r, o, n = "connection", a) {
  let e = () => a?.aborted ? new Ye(`${n} for '${o}' aborted`) : Object.assign(new R(kG(o) ? ire("failed_retrying") : `${n} for '${o}' timed out connecting`, "MCP lazy dial timed out connecting"), { mcpErrorSource: "downstream_unreachable" });
  if (r.aborted) return i.catch(() => {
  }), Promise.reject(a?.aborted ? new Ye(`${n} for '${o}' aborted before connect`) : new R(`${n} for '${o}' aborted before connect`, "MCP lazy dial aborted before connect"));
  return new Promise((t, s) => {
    let c = () => s(e());
    r.addEventListener("abort", c, { once: true }), i.then((l) => {
      r.removeEventListener("abort", c), t(l);
    }, (l) => {
      r.removeEventListener("abort", c), s(l);
    });
  });
}
async function mEe(i, r) {
  let o = r.timeoutMs ?? Wl(), { signal: n, cleanup: a } = Ts(r.signal, { timeoutMs: o, refTimer: true });
  try {
    return await u(i, n, r.serverName, r.context, r.signal);
  } finally {
    a();
  }
}
var d = 5e3, m = 3e5;
function dtn(i) {
  let r = i?.baseHoldMs ?? d, o = i?.maxHoldMs ?? m, n = /* @__PURE__ */ new Map(), a = (e, t) => {
    let s = n.get(e);
    return s !== void 0 && t < s.holdUntil;
  };
  return { shouldSkip(e, t = Date.now()) {
    return a(e, t);
  }, recordFailure(e, t = Date.now()) {
    if (a(e, t)) return;
    let c = (n.get(e)?.count ?? 0) + 1, l = Math.min(o, r * 2 ** (c - 1));
    n.set(e, { count: c, holdUntil: t + l });
  }, recordSuccess(e) {
    n.delete(e);
  }, holdUntil(e) {
    return n.get(e)?.holdUntil;
  } };
}
export {
  dtn,
  mEe
};

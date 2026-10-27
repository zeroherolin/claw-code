// remote/anthropic-client-request-reason.t9k0.js — Claude Code 2.1.310 模块 chunk-t9k0wa9f.js
import { d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { Te } from "../models/total-tokens-reminder.psq3.js";
var u = 10, F1r = 50, STe = /^(?:session|cse)_[A-Za-z0-9_-]+$/;
function O(e) {
  let r = (e.title ?? "").trim();
  return r !== "" && !f(r);
}
function f(e) {
  return e.includes("__CBU_POOLED__") || e === "__warming__" || e.startsWith("ditto:");
}
async function ZRi(e) {
  if (Te() !== "firstParty") return [];
  try {
    await import("../shared/chunk-dw3eq93g.js");
    let { axiosGetWithRetry: r, prepareApiRequest: o, getOAuthRequestHeaders: S } = await import("./archive-remote-session.3d8w.js"), { getOauthConfig: R } = await import("../auth/all-o-auth-scopes.jbyq.js"), { accessToken: C } = await o(e?.credentials), b = (e?.statuses ?? []).map((c) => `&statuses=${c}`).join(""), m = `${R().BASE_API_URL}/v1/code/sessions?limit=100${b}`, w = { ...S(C), ...e?.requestReason && { "anthropic-client-request-reason": e.requestReason } }, g = /* @__PURE__ */ new Set(), n = [], h = 0, s = null, a = 0;
    for (; a < u; a++) {
      let c = s ? `${m}&cursor=${encodeURIComponent(s)}` : m, i;
      try {
        i = await r(c, { headers: w, timeout: 15e3 });
      } catch (t) {
        if (e?.throwOnError) throw t;
        let { logForDebugging: y } = await import("../shared/dropped-debug-output-totals.1enm.js");
        y(`[ccr:list] page ${a} failed (${n.length} rows so far): ${d(t)}`);
        break;
      }
      h += i.data.data.length;
      for (let t of i.data.data) {
        if (g.has(t.id)) continue;
        if (g.add(t.id), t.status !== "archived" && (e?.includeBridgeKind || t.environment_kind !== "bridge") && STe.test(t.id) && (e?.includeBridgeKind && t.environment_kind === "bridge" ? !f((t.title ?? "").trim()) : O(t)) && (e?.accept?.(t) ?? true)) n.push(t);
      }
      s = i.data.next_cursor ?? null;
      let l = i.data.data.at(-1), _ = l ? Date.parse(l.last_event_at ?? l.created_at) : Number.NaN;
      if (!s || !e?.exhaustive && n.length >= F1r || e?.stopWhenOlderThan !== void 0 && !Number.isNaN(_) && _ < e.stopWhenOlderThan) break;
    }
    let { logForDebugging: v } = await import("../shared/dropped-debug-output-totals.1enm.js"), p = a >= u && s !== null;
    if (e?.status) e.status.truncated = p, e.status.moreRemain = Boolean(s);
    return v(`[ccr:list]: ${h} fetched, ${n.length} after archive/bridge/husk${e?.accept ? "/accept" : ""} filter${p ? ` (TRUNCATED: ${u}-page budget exhausted with more remaining)` : ""}`), n;
  } catch (r) {
    if (e?.throwOnError) throw r;
    let { logForDebugging: o } = await import("../shared/dropped-debug-output-totals.1enm.js");
    o(`[ccr:list] failed: ${d(r)}`);
  }
  return [];
}
export {
  F1r,
  STe,
  ZRi
};

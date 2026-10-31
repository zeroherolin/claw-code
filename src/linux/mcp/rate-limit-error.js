// linux/mcp/rate-limit-error.js — Claude Code 2.1.310（linux）模块 chunk-sf87mdx3.js
import { Gh, lF, PSe, lFe, dFe, zH } from "../context/not-admin-owned.js";
import { d, Pp } from "../telemetry/anthropic-workspace-id.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.js";
import { l } from "../artifacts/cowritten-artifact-html.js";
import { dSe } from "../fs/async-hooks.7959.js";
import { Et, kf, gn, cr } from "../settings/global-config-and-gates.js";
import { RFs, KWe, eTe, iIo, Qin, xFs, V$t, _O, PFs, HFs, LHr, LFs, Y3, gIo } from "../core/system-prompt-blocks.js";
import { xve } from "./allow-skill-doctor-transcript-scan.js";
import { Z3e, gBe, n7t, t8e } from "../workflows/always-on-context.js";
function oNn(e) {
  let a = Y3();
  if (!a.five_hour && !a.seven_day) {
    let n = LHr(e);
    return n ? { utilization: n.utilization, source: "persisted", fetchedAtMs: n.fetchedAtMs } : null;
  }
  let s = (n) => n ? { utilization: dSe(n.utilization), resets_at: new Date(n.resets_at * 1e3).toISOString() } : void 0, i = S(gIo().seven_day_overage_included, e);
  return { utilization: { five_hour: s(a.five_hour), seven_day: s(a.seven_day), ...i && { limits: [i] } }, source: "headers" };
}
function S(e, a) {
  if (!e) return;
  let s = eTe();
  if (!s[0]) return;
  let i = V$t(LHr(a)?.utilization.limits, s), n = i.length === 1 ? i[0].displayName : s[0];
  return { kind: "weekly_scoped", group: "weekly", percent: dSe(e.utilization), resets_at: new Date(e.resets_at * 1e3).toISOString(), scope: { model: { display_name: n } } };
}
function g(e, a, s) {
  return { status: "seeded", utilization: e.utilization, rateLimitedVia: a, seedSource: e.source, seedFetchedAtMs: e.fetchedAtMs, heldUntilMs: s };
}
var y = 200;
function h(e) {
  if (e.length <= y) return e;
  return `${e.slice(0, y).replace(/[\uD800-\uDBFF]$/, "")}…`;
}
async function ZOt(e, a) {
  let s = await U(e, a);
  if (s.status !== "ok" && s.status !== "seeded") return s;
  if (s.status === "seeded" && s.seedSource === "headers") {
    let i = gIo().seven_day_overage_included;
    if (i) {
      await iIo();
      let n = S(i, e), { limits: u, ...o } = s.utilization;
      return { ...s, utilization: n ? { ...o, limits: [n] } : o };
    }
  }
  if (Qin(s.utilization.limits)) await iIo();
  return s;
}
async function U(e, a) {
  let s = gn()?.accountUuid;
  if (Et() && kf()) {
    let i = LFs(e);
    if (i) return t(`Usage read answered from a snapshot ${Math.round(i.ageMs / 1e3)}s old; endpoint not asked`), { status: "ok", utilization: i.utilization };
  }
  try {
    let i = await _O(a);
    if (!i) return { status: "empty_response" };
    let n = Et() && kf(), u = RFs(i), o = KWe(i);
    if (!u || n && !o) {
      t("Usage fetch returned a fieldless or non-object body (in-band error)", { level: "error" });
      let c = u && "error" in i ? i.error : void 0, m = typeof c === "object" && c !== null && "type" in c && c.type === "rate_limit_error" ? "envelope" : null, p = oNn(e);
      if (p) return g(p, m);
      return { status: "unavailable", rateLimitedVia: m, responseBody: h(_(i)) };
    }
    if (o) HFs(i, s, e);
    return { status: "ok", utilization: i };
  } catch (i) {
    if (Pp(i)) t(`Failed to load usage data: ${d(i)}`, { level: "error" });
    else l(i);
    let n = i, u = n.response?.status === 429 ? "http_429" : null, o = u === null ? void 0 : await PFs(a).catch((m) => {
      l(m);
      return;
    }), c = oNn(e);
    if (c) return g(c, u, o);
    return { status: "unavailable", rateLimitedVia: u, heldUntilMs: o, responseBody: n.response?.data ? h(_(n.response.data)) : void 0 };
  }
}
function v(e, a, s) {
  let i = t8e(e, a, s);
  return { recommendations: i.map(({ key: n, pct: u, title: o, detail: c }) => ({ key: n, pct: u, title: o, detail: c })), fix: s && n7t(i), request_count: e.requestCount, session_count: e.sessionCount, behaviors: e.behaviors.filter((n) => e.totalCost > 0 && n.cost / e.totalCost * 100 >= gBe).map((n) => ({ key: n.key, pct: Math.round(n.cost / e.totalCost * 100), count: n.count })), agents: e.agents, skills: e.skills, plugins: e.plugins, mcp_servers: e.mcpServers };
}
async function sNn({ includeBehaviors: e = true, storageV5: a, credentials: s, live: i }) {
  let n = Et(), u = n && kf(), [o, c] = await Promise.all([u ? ZOt(a, s) : Promise.resolve(null), e && n && xve().allowed ? Z3e(a).then((r) => ({ day: v(r.day, r.evidence.day, i), week: v(r.week, r.evidence.week, i) }), (r) => (l(r), null)) : Promise.resolve(null)]), m = o?.status === "ok" || o?.status === "seeded" ? o.utilization : null, p;
  if (m !== null) try {
    p = V$t(m.limits, eTe()).map((r) => ({ display_name: r.displayName, utilization: r.limit.utilization ?? null, resets_at: typeof r.limit.resets_at === "number" ? new Date(r.limit.resets_at * 1e3).toISOString() : r.limit.resets_at ?? null }));
  } catch (r) {
    t(`model_scoped projection failed: ${d(r)}`, { level: "error" });
  }
  let f = m;
  if (m !== null && o?.status === "seeded") {
    let { limits: r, ...R } = m;
    f = R;
  }
  let z = p !== void 0 && o?.status === "ok" && (o.utilization.five_hour != null || o.utilization.seven_day != null) && Array.isArray(o.utilization.limits) && !xFs(o.utilization.limits);
  return { session: { total_cost_usd: Gh(), total_api_duration_ms: lF(), total_duration_ms: PSe(), total_lines_added: lFe(), total_lines_removed: dFe(), model_usage: zH() }, subscription_type: cr(), rate_limits_available: u, rate_limits: m === null ? null : p !== void 0 && p.length > 0 ? { ...f, model_scoped: p } : z ? { ...f, model_scoped: [] } : f, behaviors: c };
}
export {
  ZOt,
  oNn,
  sNn
};

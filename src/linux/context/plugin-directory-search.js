// linux/context/plugin-directory-search.js — Claude Code 2.1.310（linux）模块 chunk-jvcbfwgk.js
import { c } from "../agents/third-party.js";
import { ui } from "../telemetry/anthropic-workspace-id.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { re } from "../shared/chunk-d2c47492.js";
import { Ynr, jt } from "../settings/global-config-and-gates.js";
import { p } from "../shared/chunk-2fe3b2b7.js";
import { Kqt, BTt } from "../plugins/skills-dir.js";
import { F4t, yo, f6 } from "../git/chunk-c16cb6b4.js";
import { pS, bR, q5 } from "../shared/chunk-f98598c3.js";
import { Oh } from "../telemetry/service-error-detail-not-plain.js";
import { eS } from "../plugins/entry-refused.js";
import { H } from "../shared/chunk-7027e6d5.js";
import { o, oe, T, u, A } from "../vendor/zod/string-format.js";
var I = 25, U = "public", O = 3, B = 200, G = 8e3, Y = 36e5, q = 8388608, F = p(() => u({ id: o().min(1), name: o().min(1), summary: o().optional().catch(void 0), description: o().optional().catch(void 0), release: u({ version: o() }).optional().catch(void 0), publisher: u({ name: o() }).optional().catch(void 0), links: u({ documentation: o().optional().catch(void 0) }).optional().catch(void 0), surfaces: T(o()).optional().catch(void 0), source: u({ type: A("directory"), repository: u({ url: o().min(1), path: o().optional(), reviewed_commit: o().optional() }) }), checks: u({ review: u({ state: o(), by: u({ type: o() }).optional().catch(void 0) }) }) }));
function PHn(e) {
  return F().safeParse(x(e)).data;
}
function N(e) {
  if (Kqt(e) !== null) return true;
  if (!e.startsWith("https://") || f6(e)) return false;
  let n;
  try {
    n = new URL(e);
  } catch {
    return false;
  }
  return !yo(n.hostname) && !F4t(n.hostname, "ssh.github.com");
}
function eco(e) {
  let { state: n, by: h } = e.checks.review;
  if (n !== "done") return false;
  switch (h?.type) {
    case "partner":
      return N(e.source.repository.url);
    case "anthropic":
      return BTt(e.source.repository.url);
    default:
      return false;
  }
}
var V = p(() => u({ data: T(oe()).nullish(), next_page: o().nullish() }));
function m3e() {
  return pS("allow_plugin_directory_search") && eS() === null;
}
function Vki() {
  let e = bR("allow_plugin_directory_search");
  return (e === "cache_miss" || e === "unregistered" ? null : q5("allow_plugin_directory_search", "it", "is")) ?? "your organization's policy could not be checked yet; try again in a moment";
}
function qki() {
  if (m3e() || eS() !== null) return null;
  return "policy-not-known";
}
async function tco({ query: e, pageToken: n, signal: h, pageSize: w = I, include: E, keepTokenWhenEmpty: j = false }) {
  let L = re(e.trim(), B), l = L !== "", d = n !== void 0, _ = performance.now();
  if (!pS("allow_plugin_directory_search")) {
    let i = bR("allow_plugin_directory_search");
    return z("unavailable", _, l, d, { cause: c("policy") }), m("plugin_directory_search", i === "org_denied" ? "policy_denied" : i === "unregistered" ? "policy_mirror_unregistered" : i === "route_missing" ? "policy_route_missing" : "policy_cache_miss"), { ok: false, reason: "unavailable", cause: "policy", message: (i === "cache_miss" || i === "unregistered" ? null : q5("allow_plugin_directory_search", "it", "is")) ?? "your organization's policy could not be checked yet; try again in a moment", blockedBy: i === "org_denied" || i === "latched" ? "policy_limit" : void 0 };
  }
  let M = eS();
  if (M !== null) return z("unavailable", _, l, d, { cause: c("policy") }), { ok: false, reason: "unavailable", cause: "policy", message: "it is blocked by your organization", blockedBy: M };
  let D = [], P = 0, v = 0, b = n;
  try {
    do {
      let s = new URLSearchParams({ limit: String(w), visibility: U });
      if (E !== void 0) s.set("include", E);
      if (l) s.set("q", L);
      if (b !== void 0) s.set("page", b);
      let r = await jt.get(`${Ynr}?${s}`, { auth: "none", publicPluginDirectoryCatalog: true, timeout: G, maxContentLength: q, signal: h, validateStatus: () => true });
      if (v++, !r.ok) {
        let y = r.reason === "essential-traffic-only", R = y ? "essential-traffic-only" : "data-residency";
        return z("unavailable", _, l, d, { cause: c(R) }), f("plugin_directory_search", y ? "essential_traffic_only" : "data_residency"), { ok: false, reason: "unavailable", cause: R };
      }
      if (r.status === 404) return z("not_served", _, l, d, { http_status: 404 }), f("plugin_directory_search", "not_served"), { ok: false, reason: "not-served" };
      if (r.status >= 400) {
        z("failed", _, l, d, { error_kind: c("http"), http_status: r.status }), m("plugin_directory_search", `http_${r.status}`);
        let y;
        if (r.status === 400 && d) y = "it could not continue this results page; search again to start from the first page";
        else if (r.status === 429 || r.status >= 500) y = "it is temporarily unavailable; try again shortly";
        else y = `the request failed (HTTP ${r.status})`;
        let R = r.status === 429 || r.status === 503 ? r.response.headers["retry-after"] : void 0, C = Oh(typeof R === "string" ? R : void 0);
        return { ok: false, reason: "failed", message: y, ...C !== void 0 && { retryAfterMs: Math.min(C, Y) } };
      }
      let S = V().safeParse(r.data);
      if (!S.success) return z("failed", _, l, d, { error_kind: c("invalid_schema") }), m("plugin_directory_search", "invalid_schema"), { ok: false, reason: "failed", message: "it returned a response Claude Code could not read" };
      for (let y of S.data.data ?? []) {
        let R = PHn(y);
        if (R) D.push(R);
        else P++;
      }
      b = S.data.next_page || void 0;
    } while (D.length < w && b !== void 0 && v < O);
    let i = D.length === 0 && b !== void 0, k = i && !j;
    if (k) b = void 0;
    return z("success", _, l, d, { result_count: D.length, skipped_count: P, request_count: v, has_more: b !== void 0, chase_exhausted: i }), g("plugin_directory_search"), { ok: true, page: { listings: D, nextPageToken: b, skippedRows: P, truncated: k || void 0 } };
  } catch (i) {
    if (h?.aborted) return { ok: false, reason: "aborted" };
    let { kind: k, status: s, message: r } = ui(i);
    return t(`plugin directory search failed (${k}${s ? ` ${s}` : ""}): ${r}`), z("failed", _, l, d, { error_kind: c(k), ...s !== void 0 && { http_status: s } }), m("plugin_directory_search", k), { ok: false, reason: "failed", message: s === void 0 && k !== "other" ? "it could not be reached; check your network connection" : "the request failed" };
  }
}
function x(e) {
  if (Array.isArray(e)) return e.map(x);
  if (H(e)) {
    let n = {};
    for (let [h, w] of Object.entries(e)) if (w !== null) n[h] = x(w);
    return n;
  }
  return e;
}
function z(e, n, h, w, E = {}) {
  a("tengu_plugin_directory_search", { outcome: c(e), has_query: h, is_continuation: w, duration_ms: Math.round(performance.now() - n), ...E });
}
export {
  PHn,
  Vki,
  eco,
  m3e,
  qki,
  tco
};

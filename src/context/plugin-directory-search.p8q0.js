// context/plugin-directory-search.p8q0.js — Claude Code 2.1.310 模块 chunk-p8q025xv.js
import { c } from "../agents/third-party.ydpb.js";
import { ui } from "../telemetry/anthropic-workspace-id.36ys.js";
import { a } from "../telemetry/chunk-wq923bwc.js";
import { g, m, p } from "../telemetry/chunk-wn8xtaqg.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { re } from "../shared/chunk-j79dwkaq.js";
import { frr, Wt } from "../settings/global-config-and-gates.27xj.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { sqt, YCt } from "../plugins/skills-dir.cemw.js";
import { Jqt, yo, E5 } from "../git/chunk-q8vnfcnf.js";
import { mb, ER, s5 } from "../shared/chunk-cg45s1mf.js";
import { Oh } from "../telemetry/service-error-detail-not-plain.9kgx.js";
import { tb } from "../plugins/entry-refused.bp7z.js";
import { D } from "../shared/chunk-6rnejvk7.js";
import { o, oe, C, u, T } from "../vendor/zod/string-format.k395.js";
var U = 25, O = "public", B = 3, G = 200, H = 8e3, Y = 36e5, q = 8388608, F = f(() => u({ id: o().min(1), name: o().min(1), summary: o().optional().catch(void 0), description: o().optional().catch(void 0), release: u({ version: o() }).optional().catch(void 0), publisher: u({ name: o() }).optional().catch(void 0), links: u({ documentation: o().optional().catch(void 0) }).optional().catch(void 0), surfaces: C(o()).optional().catch(void 0), source: u({ type: T("directory"), repository: u({ url: o().min(1), path: o().optional(), reviewed_commit: o().optional() }) }), checks: u({ review: u({ state: o(), by: u({ type: o() }).optional().catch(void 0) }) }) }));
function zHn(e) {
  return F().safeParse(x(e)).data;
}
function N(e) {
  if (sqt(e) !== null) return true;
  if (!e.startsWith("https://") || E5(e)) return false;
  let n;
  try {
    n = new URL(e);
  } catch {
    return false;
  }
  return !yo(n.hostname) && !Jqt(n.hostname, "ssh.github.com");
}
function pco(e) {
  let { state: n, by: h } = e.checks.review;
  if (n !== "done") return false;
  switch (h?.type) {
    case "partner":
      return N(e.source.repository.url);
    case "anthropic":
      return YCt(e.source.repository.url);
    default:
      return false;
  }
}
var V = f(() => u({ data: C(oe()).nullish(), next_page: o().nullish() }));
function w9e() {
  return mb("allow_plugin_directory_search") && tb() === null;
}
function PCi() {
  let e = ER("allow_plugin_directory_search");
  return (e === "cache_miss" || e === "unregistered" ? null : s5("allow_plugin_directory_search", "it", "is")) ?? "your organization's policy could not be checked yet; try again in a moment";
}
function ICi() {
  if (w9e() || tb() !== null) return null;
  return "policy-not-known";
}
async function fco({ query: e, pageToken: n, signal: h, pageSize: w = U, include: P, keepTokenWhenEmpty: I = false }) {
  let L = re(e.trim(), G), l = L !== "", d = n !== void 0, _ = performance.now();
  if (!mb("allow_plugin_directory_search")) {
    let i = ER("allow_plugin_directory_search");
    return z("unavailable", _, l, d, { cause: c("policy") }), m("plugin_directory_search", i === "org_denied" ? "policy_denied" : i === "unregistered" ? "policy_mirror_unregistered" : i === "route_missing" ? "policy_route_missing" : "policy_cache_miss"), { ok: false, reason: "unavailable", cause: "policy", message: (i === "cache_miss" || i === "unregistered" ? null : s5("allow_plugin_directory_search", "it", "is")) ?? "your organization's policy could not be checked yet; try again in a moment", blockedBy: i === "org_denied" || i === "latched" ? "policy_limit" : void 0 };
  }
  let M = tb();
  if (M !== null) return z("unavailable", _, l, d, { cause: c("policy") }), { ok: false, reason: "unavailable", cause: "policy", message: "it is blocked by your organization", blockedBy: M };
  let E = [], v = 0, S = 0, b = n;
  try {
    do {
      let s = new URLSearchParams({ limit: String(w), visibility: O });
      if (P !== void 0) s.set("include", P);
      if (l) s.set("q", L);
      if (b !== void 0) s.set("page", b);
      let r = await Wt.get(`${frr}?${s}`, { auth: "none", publicPluginDirectoryCatalog: true, timeout: H, maxContentLength: q, signal: h, validateStatus: () => true });
      if (S++, !r.ok) {
        let y = r.reason === "essential-traffic-only", R = y ? "essential-traffic-only" : "data-residency";
        return z("unavailable", _, l, d, { cause: c(R) }), p("plugin_directory_search", y ? "essential_traffic_only" : "data_residency"), { ok: false, reason: "unavailable", cause: R };
      }
      if (r.status === 404) return z("not_served", _, l, d, { http_status: 404 }), p("plugin_directory_search", "not_served"), { ok: false, reason: "not-served" };
      if (r.status >= 400) {
        z("failed", _, l, d, { error_kind: c("http"), http_status: r.status }), m("plugin_directory_search", `http_${r.status}`);
        let y;
        if (r.status === 400 && d) y = "it could not continue this results page; search again to start from the first page";
        else if (r.status === 429 || r.status >= 500) y = "it is temporarily unavailable; try again shortly";
        else y = `the request failed (HTTP ${r.status})`;
        let R = r.status === 429 || r.status === 503 ? r.response.headers["retry-after"] : void 0, j = Oh(typeof R === "string" ? R : void 0);
        return { ok: false, reason: "failed", message: y, ...j !== void 0 && { retryAfterMs: Math.min(j, Y) } };
      }
      let A = V().safeParse(r.data);
      if (!A.success) return z("failed", _, l, d, { error_kind: c("invalid_schema") }), m("plugin_directory_search", "invalid_schema"), { ok: false, reason: "failed", message: "it returned a response Claude Code could not read" };
      for (let y of A.data.data ?? []) {
        let R = zHn(y);
        if (R) E.push(R);
        else v++;
      }
      b = A.data.next_page || void 0;
    } while (E.length < w && b !== void 0 && S < B);
    let i = E.length === 0 && b !== void 0, k = i && !I;
    if (k) b = void 0;
    return z("success", _, l, d, { result_count: E.length, skipped_count: v, request_count: S, has_more: b !== void 0, chase_exhausted: i }), g("plugin_directory_search"), { ok: true, page: { listings: E, nextPageToken: b, skippedRows: v, truncated: k || void 0 } };
  } catch (i) {
    if (h?.aborted) return { ok: false, reason: "aborted" };
    let { kind: k, status: s, message: r } = ui(i);
    return t(`plugin directory search failed (${k}${s ? ` ${s}` : ""}): ${r}`), z("failed", _, l, d, { error_kind: c(k), ...s !== void 0 && { http_status: s } }), m("plugin_directory_search", k), { ok: false, reason: "failed", message: s === void 0 && k !== "other" ? "it could not be reached; check your network connection" : "the request failed" };
  }
}
function x(e) {
  if (Array.isArray(e)) return e.map(x);
  if (D(e)) {
    let n = {};
    for (let [h, w] of Object.entries(e)) if (w !== null) n[h] = x(w);
    return n;
  }
  return e;
}
function z(e, n, h, w, P = {}) {
  a("tengu_plugin_directory_search", { outcome: c(e), has_query: h, is_continuation: w, duration_ms: Math.round(performance.now() - n), ...P });
}
export {
  ICi,
  PCi,
  fco,
  pco,
  w9e,
  zHn
};

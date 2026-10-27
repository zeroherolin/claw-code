// auth/connector-suggest-search.f6t2.js — Claude Code 2.1.310 模块 chunk-f6t2m301.js
import { d } from "../telemetry/anthropic-workspace-id.36ys.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { f } from "../shared/chunk-nyvhtfb3.js";
import { g, m } from "../telemetry/chunk-wn8xtaqg.js";
import { Wt } from "../settings/global-config-and-gates.27xj.js";
import { mb, ER, s5 } from "../shared/chunk-cg45s1mf.js";
import { Kkt } from "../mcp/claude-browser.hdf6.js";
import { o, M, C, u, yt } from "../vendor/zod/string-format.k395.js";
var m9e = f(() => yt({ name: o().optional() })), y = f(() => u({ results: C(m9e()), opt_in_required: M().optional(), message: o().nullish() }));
function yIe(e) {
  return !Array.isArray(e) && e.opt_in_required === true;
}
class lEe extends Error {
  constructor(e) {
    super(e);
    this.name = "ConnectorRegistryUnavailableError";
  }
}
var h = 15e3, S = "/api/oauth/organizations/:orgUUID/mcp/connectors/search", R = "/api/oauth/organizations/:orgUUID/mcp/connectors/suggest", w = "/api/oauth/organizations/:orgUUID/mcp/connectors/list";
async function l(e, n, r, a) {
  let i = await Wt.post(e, n, { auth: "teleport-org", timeout: h, signal: r, credentials: a });
  if (!i.ok) throw Error(i.reason === "no-auth" ? "Not authenticated with a claude.ai account." : `connector route unavailable: ${i.reason}`);
  if (i.status >= 400) {
    let c = u({ error: u({ type: o(), message: o() }) }).safeParse(i.data);
    throw Error(c.success ? `connector route ${i.status} ${c.data.error.type}: ${c.data.error.message}` : `connector route ${i.status}`);
  }
  let s = y().safeParse(i.data);
  if (!s.success) throw Error("malformed connector response");
  if (s.data.opt_in_required) return { opt_in_required: true, message: s.data.message ?? "Enable connector suggestions in your Claude settings to use this." };
  return s.data.results;
}
function _(e) {
  if (mb("allow_connector_suggest")) return;
  let n = ER("allow_connector_suggest"), r = e === "search" ? "Connector search" : "Connector lookup";
  throw m(e === "search" ? "connector_suggest_search" : "connector_suggest_lookup", n === "org_denied" ? "policy_denied" : n === "unregistered" ? "policy_mirror_unregistered" : n === "route_missing" ? "policy_route_missing" : "policy_cache_miss"), new lEe(s5("allow_connector_suggest", r, "is") ?? `${r} is unavailable right now; please try again.`);
}
async function G_s(e, n, r) {
  _("search");
  let a = await l(S, { keywords: e, include_custom: true }, n, r);
  if (!yIe(a)) g("connector_suggest_search");
  return a;
}
async function z_s(e, n, r) {
  _("lookup");
  let a = await l(R, { uuids: e }, n, r);
  if (!yIe(a)) g("connector_suggest_lookup");
  return a;
}
function sHn(e, n, r) {
  let a = Kkt.peek(r)?.read?.(), i = /* @__PURE__ */ new Set();
  for (let s of n) {
    if (s.type === "disabled") continue;
    let c = s.config, p = ("headers" in c ? c.headers?.["X-MCP-Server-ID"] : void 0) ?? a?.[s.name];
    if (p) i.add(p.toLowerCase());
  }
  return e.map((s) => {
    let c = typeof s.installedServerId === "string" ? s.installedServerId : void 0;
    return { ...s, enabledInChat: c !== void 0 && i.has(c.toLowerCase()) };
  });
}
async function V_s(e, n) {
  let r = await l(w, {}, e, n);
  if (!yIe(r)) g("connector_suggest_list");
  return r;
}
function tct(e, n) {
  t(`[connector-suggest] ${e} failed: ${d(n)}`, { level: "error" }), m(e === "search" ? "connector_suggest_search" : e === "lookup" ? "connector_suggest_lookup" : "connector_suggest_list", "fetch_failed");
}
export {
  G_s,
  V_s,
  lEe,
  m9e,
  sHn,
  tct,
  yIe,
  z_s
};

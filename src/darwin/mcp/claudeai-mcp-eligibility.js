// darwin/mcp/claudeai-mcp-eligibility.js — Claude Code 2.1.310（darwin）模块 chunk-x1b6gj45.js
import { Dt } from "../fs/content-encoding.js";
import { as } from "../fs/async-hooks.93b1.js";
import { S, ZK } from "../agents/third-party.js";
import { Cie } from "../telemetry/anthropic-workspace-id.js";
import { Ky, X } from "../shared/chunk-57ff8cc1.js";
import { i } from "../shared/environment.js";
import { Bi } from "../context/not-admin-owned.js";
import { rn } from "../auth/oauth-2025-04-20.js";
import { _, t } from "../fs/gitlab-runner-authentication-token.js";
import { St, dAt } from "../artifacts/cowritten-artifact-html.js";
import { he } from "../terminal/xterm-ghostty.js";
import { ebn } from "./allowed-warning.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { g, m, p } from "../telemetry/chunk-9d6962d2.js";
import { $n } from "../models/total-tokens-reminder.js";
import { kpe } from "../plugins/skills-dir.js";
import { mpe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { Ln, pa, vt, gn, wE, k, Re, ue } from "../settings/global-config-and-gates.js";
import { p1 } from "../auth/permission-error.js";
import { xt, wNe } from "./toolbox-mcp-server-id.js";
import { NKe } from "./claude-browser.js";
import { mr } from "../workflows/chunk-5e65bb82.js";
import { jO } from "../telemetry/mcp-sdk-generation.js";
import { zC } from "./mcp-task-worker-wake.js";
import { mUr } from "../shared/chunk-e30378d4.js";
import { JTe, Qye } from "./mcp-answer-stream-ended.js";
import { vn } from "../shared/chunk-3c6e6b31.js";
import { Hs } from "../remote/claude-code-remote.js";
function L() {
  return k("tengu_mcp_url_elicitation", true);
}
function P() {
  return k("tengu_mcp_legacy_url_elicitation", true) === true;
}
var H = "io.modelcontextprotocol/ui", K = "text/html;profile=mcp-app";
function vun() {
  return i.CLAUDE_CODE_MCP_APPS_HOST === true;
}
function V() {
  return { roots: { listChanged: true }, elicitation: {}, ...vun() && { extensions: { [H]: { mimeTypes: [K] } } } };
}
function m9n(e) {
  let { tasks: r, extensions: n, ...s } = e;
  if (n === void 0 || !(mUr in n)) return n === void 0 ? s : { ...s, extensions: n };
  let { [mUr]: A, ...f } = n;
  return Object.keys(f).length > 0 ? { ...s, extensions: f } : s;
}
function kun() {
  let e = V();
  return jO() === "v2" ? q(e) : e;
}
function q(e) {
  if (!zC()) return e;
  return { ...e, extensions: { ...e.extensions, [mUr]: {} } };
}
function Cun() {
  let e = kun();
  if (!L()) return e;
  return { ...e, elicitation: { form: {}, url: {} } };
}
function iBt(e, { denylisted: r }) {
  return P() && !r && (e.type === void 0 || e.type === "stdio" || e.type === "sse" || e.type === "http" || e.type === "ws") && !wNe(e) && !("bareElicitationCapability" in e && e.bareElicitationCapability === true) ? Cun() : kun();
}
function Tun() {
  return k("tengu_mcp_stateless_skip_init", true);
}
function g9n() {
  let e = k("tengu_mcp_discover_projection_prior", "off");
  return e === "legacy_only" || e === "all" ? e : "off";
}
var W = 6144;
function U() {
  let e = g9n();
  if (!Tun() && e === "off") return {};
  let r = kun(), n = Buffer.from(_(r)).toString("base64");
  if (Buffer.byteLength(n, "ascii") > W) return t("[claudeai-mcp] client capabilities header exceeds size limit — omitting init-projection headers"), {};
  return { "anthropic-mcp-client-capabilities": n, "MCP-Protocol-Version": JTe, ...e !== "off" && { "anthropic-mcp-discover-protocol-version": Qye } };
}
var w = 5e3, F = 3, Z = 500, J = 3, Q = 12e3, j = /* @__PURE__ */ new Set(["ECONNABORTED", "ECONNRESET", "ECONNREFUSED", "ETIMEDOUT", "EAI_AGAIN", "ERR_SOCKET_CLOSED", "ERR_PROXY_TUNNEL"]), ee = /* @__PURE__ */ new Set([...j, ...p1, "ERR_NETWORK"]);
function B(e) {
  if (!Dt.isAxiosError(e)) return false;
  let r = e.response?.status;
  if (r !== void 0) return r >= 500 && r < 600;
  return e.code !== void 0 && j.has(e.code);
}
function ZNo(e) {
  return xt().claudeAiConfigsFetchTransientFailures.has(e);
}
function eFo() {
  let e = xt(), r = e.pendingCrossOrgNotice;
  return e.pendingCrossOrgNotice = void 0, r;
}
function f_t() {
  let e = eFo();
  if (!e) return;
  let r = e.level === "error" ? he.red(e.message) : he.yellow(`⚠ ${e.message}`);
  process.stderr.write(`${r}
`);
}
function te(e) {
  let r = /* @__PURE__ */ Object.create(null);
  for (let n of e ?? []) {
    if (n.effective_max_permission === void 0) continue;
    let s = kpe().safeParse(n.effective_max_permission);
    r[n.name] = s.success ? s.data : "blocked";
  }
  return Object.keys(r).length > 0 ? r : void 0;
}
function G(e) {
  try {
    return new URL(e).href.replace(/\/+$/, "");
  } catch {
    return e;
  }
}
function Gde(e) {
  let r = xt();
  if (r.claudeAiConfigsFetch === null) r.claudeAiConfigsFetch = ne(e);
  return r.claudeAiConfigsFetch;
}
async function ne(e) {
  let r = 0, n = xt();
  n.pendingCrossOrgNotice = void 0;
  let s = false, A = n.claudeAiConnectorListGeneration, f = ++n.claudeAiConnectorListFetchSeq;
  try {
    let c = as(process.env.ENABLE_CLAUDEAI_MCP_SERVERS), C = mpe();
    if (c || C) return t(`[claudeai-mcp] Disabled via ${c ? "env var" : "disableClaudeAiConnectors setting"}`), a("tengu_claudeai_mcp_eligibility", { state: c ? S("disabled_env_var") : S("disabled_setting") }), {};
    if (mr("mcpClaudeAi")) return t("[claudeai-mcp] Disabled in safe mode"), a("tengu_claudeai_mcp_eligibility", { state: S("safe_mode") }), {};
    if (!$n()) return t("[claudeai-mcp] Disabled on third-party provider"), a("tengu_claudeai_mcp_eligibility", { state: S("third_party_provider") }), {};
    if (!vt()) {
      if (t("[claudeai-mcp] Disabled: API-key auth precedence active"), a("tengu_claudeai_mcp_eligibility", { state: S("api_key_precedence") }), Ln()?.scopes?.includes("user:mcp_servers")) n.pendingCrossOrgNotice = { level: "warn", message: "claude.ai connectors are disabled because ANTHROPIC_API_KEY or another auth source is set and takes precedence over your claude.ai login · Unset it to load your organization's connectors" };
      return {};
    }
    await pa({ credentials: e });
    let l = Ln();
    if (!l?.accessToken) return t("[claudeai-mcp] No access token"), a("tengu_claudeai_mcp_eligibility", { state: S("no_oauth_token") }), {};
    if (!l.scopes?.includes("user:mcp_servers")) {
      let o = i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE ? "[claudeai-mcp] inference token lacks user:mcp_servers scope — claude.ai org connectors disabled (locally-configured MCP servers in managed-mcp.json / .claude.json / .mcp.json are NOT affected by this check)" : `[claudeai-mcp] Missing user:mcp_servers scope (scopes=${l.scopes?.join(",") || "none"})`;
      return t(o), a("tengu_claudeai_mcp_eligibility", { state: S("missing_scope") }), {};
    }
    let u = `${rn().BASE_API_URL}/v1/mcp_servers?limit=1000`, h = `${u}&include_additional_installs=true`;
    t(`[claudeai-mcp] Fetching from ${h}`);
    let I = () => wE(() => Dt.get(h, { headers: { "User-Agent": Hs(), Authorization: `Bearer ${Ln()?.accessToken ?? l.accessToken}`, "Content-Type": "application/json", "anthropic-beta": ebn.header, "anthropic-version": "2023-06-01", ...U() }, timeout: w }), { credentials: e }), z = Date.now(), D = 0, T;
    while (true) {
      r++;
      try {
        T = await I();
        break;
      } catch (o) {
        let d = Dt.isAxiosError(o) ? o.response?.status : void 0, E = () => {
          if (h === u || d === void 0 || d === 401 || d === 429) return false;
          if (t(`[claudeai-mcp] Connector list request got HTTP ${d}, asking once more without include_additional_installs (a connector's additional accounts will not be listed)`), h = u, !B(o)) D++;
          return true;
        }, b = r - D;
        if (b >= F || !B(o)) {
          if (E()) continue;
          throw o;
        }
        let y = Ky({ attempt: b, baseMs: Z, factor: J });
        if (Date.now() - z + y + w >= Q) {
          if (t(`[claudeai-mcp] Retry budget exhausted after ${r} attempt(s)`), E()) continue;
          throw o;
        }
        let Y = Dt.isAxiosError(o) ? o.response?.status ?? o.code ?? "unknown" : "unknown";
        t(`[claudeai-mcp] Transient fetch error (${Y}), retrying in ${y}ms (attempt ${b}/${F})`), await X(y);
      }
    }
    let R = /* @__PURE__ */ new Map(), M = [];
    for (let o of T.data.data) {
      if (o.additional_install === true) {
        M.push(o);
        continue;
      }
      let d = G(o.url), E = R.get(d);
      if (E) {
        t(`[claudeai-mcp] Dropping duplicate upstream ${d}: keeping ${E.id}, dropping ${o.id}`);
        continue;
      }
      R.set(d, o);
    }
    let O = {}, N = /* @__PURE__ */ new Set([NKe]);
    M.sort((o, d) => (Date.parse(o.created_at) || 0) - (Date.parse(d.created_at) || 0) || (o.id < d.id ? -1 : o.id > d.id ? 1 : 0));
    for (let o of [...R.values(), ...M]) {
      let d = `claude.ai ${o.display_name}`, E = d, b = vn(E), y = 1;
      while (N.has(b)) y++, E = `${d} (${y})`, b = vn(E);
      if (y > 1) t(`[claudeai-mcp] Display-name collision: "${E}" (${o.id}, ${o.url})`);
      N.add(b), O[E] = { type: "claudeai-proxy", url: o.url, id: o.id, displayName: o.display_name, iconUrl: o.icon_url, scope: "claudeai", toolPermissions: te(o.tools), stateless: o.stateless, cachedInitResponse: o.cached_init_response, discoverSupport: o.discover_support, cachedDiscoverResponse: o.cached_discover_response, eligible: o.eligible, ineligibleReason: o.eligibility_reason, enterpriseManaged: o.enterprise_managed };
    }
    if (t(`[claudeai-mcp] Fetched ${Object.keys(O).length} servers`), a("tengu_claudeai_mcp_eligibility", { state: S("eligible") }), h === u) p("mcp_claudeai_fetch_configs", "fetch_additional_installs_param_refused");
    else g("mcp_claudeai_fetch_configs");
    if (n.claudeAiConnectorListGeneration === A && f > n.claudeAiConnectorListSettledSeq) n.claudeAiConnectorIdIndex = ie(O, T.data.data, R), n.claudeAiConnectorListStatus = "settled", n.claudeAiConnectorListSettledSeq = f, s = true;
    return O;
  } catch (c) {
    let C = Dt.isAxiosError(c) ? c : void 0, l = C?.response?.status, v = C?.code, u = String(l ?? v ?? "unknown");
    if (t(`[claudeai-mcp] Fetch failed (${u}) after ${r} attempt(s)`), a("tengu_claudeai_mcp_eligibility", { state: S("fetch_failed"), status: ZK(l) ?? Cie(v) ?? S("unknown"), attempts: r }), u === "401" || u === "403") p("mcp_claudeai_fetch_configs", "fetch_needs_auth");
    else if (u === "429") p("mcp_claudeai_fetch_configs", "fetch_rate_limited");
    else if (u === "ECONNABORTED" || u === "ETIMEDOUT") p("mcp_claudeai_fetch_configs", "fetch_timeout");
    else if (/^\d+$/.test(u)) m("mcp_claudeai_fetch_configs", `fetch_failed_http_${u}`);
    else if (u !== "unknown") p("mcp_claudeai_fetch_configs", "fetch_network_error");
    else m("mcp_claudeai_fetch_configs", "fetch_failed");
    n.claudeAiConfigsFetch = null;
    let h = C !== void 0 && (l !== void 0 ? l >= 500 && l < 600 || l === 429 : v !== void 0 && ee.has(v)), I = {};
    if (h) n.claudeAiConfigsFetchTransientFailures.add(I);
    return I;
  } finally {
    if (!s && n.claudeAiConnectorListGeneration === A && n.claudeAiConnectorListStatus !== "settled") n.claudeAiConnectorListStatus = "unavailable";
  }
}
function ie(e, r, n) {
  let s = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map();
  for (let [f, c] of Object.entries(e)) {
    if (c.type !== "claudeai-proxy") continue;
    let C = { name: f, config: c, siblingIds: [c.id] };
    A.set(c.id, C), s.set(vHe(c.id), C);
  }
  for (let f of r) {
    let c = vHe(f.id);
    if (s.has(c)) continue;
    let C = n.get(G(f.url)), l = C === void 0 ? void 0 : A.get(C.id);
    if (l !== void 0) l.siblingIds.push(f.id), s.set(c, l);
  }
  return s;
}
function m_t() {
  let e = xt();
  e.claudeAiConfigsFetch = null, e.pendingCrossOrgNotice = void 0;
}
function h9n(e) {
  let r = xt(), n = r.claudeAiConnectorIdIndex;
  if (r.claudeAiConnectorListStatus !== "settled" || n === void 0) return r.claudeAiConnectorListStatus === "unavailable" ? { kind: "unavailable" } : { kind: "pending" };
  let s = n.get(vHe(e));
  return s === void 0 ? { kind: "absent" } : { kind: "found", ...s };
}
function y9n() {
  let e = xt();
  if (e.claudeAiConnectorListStatus !== "settled") e.claudeAiConnectorListStatus = "unavailable";
}
function oe() {
  let e = xt();
  e.claudeAiConnectorIdIndex = void 0, e.claudeAiConnectorListStatus = "pending", e.claudeAiConnectorListSettledSeq = 0, e.claudeAiConnectorListGeneration += 1;
}
function aBt(e, r) {
  xt().claudeAiConnectedThisSession.add(e), Re((n) => {
    let s = x(n);
    if (s.includes(e)) return n;
    return { ...n, claudeAiMcpEverConnected: [...s, e] };
  }, r);
}
function Aun(e) {
  return xt().claudeAiConnectedThisSession.has(e);
}
function _9n() {
  xt().claudeAiConnectedThisSession.clear(), oe();
}
function Run(e) {
  return x(ue()).includes(e);
}
function xun() {
  return new Set(x(ue()));
}
function x(e) {
  return Bi(e.claudeAiMcpEverConnected);
}
function GJ() {
  return `${rn().CLAUDE_AI_ORIGIN}/customize/connectors`;
}
function vHe(e) {
  return typeof e === "string" && e.startsWith("mcprs") ? `mcpsrv${e.slice(5)}` : e;
}
function yU(e) {
  return e.type === "claudeai-proxy" && e.scope === "claudeai" && e.id ? vHe(e.id) : void 0;
}
function zde(e) {
  let r = gn()?.organizationUuid;
  if (!r || !e.id) return null;
  let n = rn().CLAUDE_AI_ORIGIN, s = vHe(e.id), A = encodeURIComponent(i.CLAUDE_CODE_ENTRYPOINT || "cli");
  return `${n}/api/organizations/${r}/mcp/start-auth/${s}?product_surface=${A}`;
}
export {
  Aun,
  Cun,
  GJ,
  Gde,
  Run,
  Tun,
  ZNo,
  _9n,
  aBt,
  eFo,
  f_t,
  g9n,
  h9n,
  iBt,
  kun,
  m9n,
  m_t,
  vHe,
  vun,
  xun,
  y9n,
  yU,
  zde
};

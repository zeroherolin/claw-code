// linux/auth/mcp-headers-helper.js — Claude Code 2.1.310（linux）模块 chunk-pqth9145.js
import { L, ke, kC, no, ye } from "../context/not-admin-owned.js";
import { c, ce } from "../agents/third-party.js";
import { d } from "../telemetry/anthropic-workspace-id.js";
import { Cn, t } from "../fs/gitlab-runner-authentication-token.js";
import { Le } from "../models/claude-3-5-sonnet.js";
import { E2 } from "../fs/backed-up.js";
import { see } from "../shared/environment.js";
import { ss, se } from "../artifacts/cowritten-artifact-html.js";
import { a } from "../telemetry/chunk-9097a12b.js";
import { Xnt, Z_e, cI } from "../settings/global-config-and-gates.js";
import { Ns, G_, Vs } from "../shell/invalid-type.js";
import { g, m, f } from "../telemetry/chunk-9d6962d2.js";
import { $vn, Zx, d4e, bfe } from "../plugins/skills-dir.js";
import { Gj } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { fEe } from "../mcp/mcp-discovery-cache.js";
import { $Xn } from "../permissions/frontmatter-grant-withheld.js";
import { x4, P4, VEo } from "../core/conversation-engine.js";
import { A6n } from "../plugins/plugin-command-source-refresh.js";
import { _un } from "../mcp/claudeai-mcp-eligibility.js";
function M(e) {
  try {
    let r = new URL(e);
    if (r.protocol !== "https:" && r.protocol !== "http:") return;
    return r.origin;
  } catch {
    return;
  }
}
function yOe(e) {
  return { authorizationServerUrl: e.authorizationServerUrl, oauthMetadataFound: e.oauthMetadataFound, authServerMetadataUrl: e.authServerMetadataUrl };
}
function h(e) {
  return e !== void 0 && e.authorizationServerUrl !== "";
}
function pBn({ previous: e, discovered: r, servedMetadataUrl: n }) {
  if (h(e) && e.authServerMetadataUrl !== void 0) return { authorizationServerUrl: e.authorizationServerUrl, oauthMetadataFound: e.oauthMetadataFound, authServerMetadataUrl: e.authServerMetadataUrl };
  if (!r.oauthMetadataFound || M(r.authorizationServerUrl) === void 0) return h(e) ? { authorizationServerUrl: e.authorizationServerUrl, oauthMetadataFound: e.oauthMetadataFound } : { ...r };
  if (h(e) && e.oauthMetadataFound !== true && n !== void 0) return { authorizationServerUrl: e.authorizationServerUrl, oauthMetadataFound: e.oauthMetadataFound };
  return { ...r, authServerMetadataUrl: n ?? null };
}
function O(e, { servedMetadataUrl: r, interactiveSignIn: n }) {
  if (!h(e)) return e;
  let o = r ?? null;
  return (n ? e.authServerMetadataUrl === o : e.authServerMetadataUrl !== void 0) ? e : { ...e, authServerMetadataUrl: o };
}
function mBn({ previous: e, signIn: r, servedMetadataUrl: n, interactiveSignIn: o }) {
  if (r !== void 0 && M(r.authorizationServerUrl) !== void 0 && (o || !h(e))) {
    let { authServerMetadataUrl: i, ...s } = e ?? { authorizationServerUrl: "" };
    return o || r.oauthMetadataFound ? { ...e, authorizationServerUrl: r.authorizationServerUrl, oauthMetadataFound: r.oauthMetadataFound, authServerMetadataUrl: n ?? null } : { ...s, authorizationServerUrl: r.authorizationServerUrl, oauthMetadataFound: r.oauthMetadataFound };
  }
  if (e !== void 0 && !o && e.oauthMetadataFound !== true && e.authServerMetadataUrl === void 0) return r !== void 0 && n === void 0 && r.oauthMetadataFound && M(r.authorizationServerUrl) !== void 0 ? { ...e, authorizationServerUrl: r.authorizationServerUrl, oauthMetadataFound: true, authServerMetadataUrl: null } : e;
  return e && O(e, { servedMetadataUrl: n, interactiveSignIn: o });
}
function JDt({ previous: e, issuedBy: r, interactiveSignIn: n }) {
  let o = e?.authServerMetadataUrl;
  return { authorizationServerUrl: r, oauthMetadataFound: true, authServerMetadataUrl: !n && o !== void 0 ? o : null };
}
import { isAbsolute as F } from "path";
function P(e) {
  switch (e) {
    case "projectSettings":
    case "localSettings":
      return "repo";
    case "plugin":
    case "additionalDirectory":
      return "thirdParty";
    case "userSettings":
    case "flagSettings":
    case "policySettings":
    case "built-in":
      return "operator";
    default:
      return e;
  }
}
function R(e) {
  switch (e) {
    case "project":
    case "local":
      return "repo";
    case "user":
    case "dynamic":
    case "enterprise":
    case "claudeai":
    case "managed":
    case "agent":
      return "operator";
    default:
      return e;
  }
}
function E(e) {
  return R(e.scope) === "repo" || e.agentSource !== void 0 && P(e.agentSource) === "repo";
}
function w(e, r) {
  if (r !== void 0) return true;
  if (e.scope === "project") return true;
  return e.agentSource !== void 0 && P(e.agentSource) !== "operator";
}
async function x(e, r) {
  if (!r.headersHelper) return null;
  let n = typeof r.pluginPath === "string" && F(r.pluginPath) ? r.pluginPath : void 0;
  try {
    se(e, "Executing headersHelper to get dynamic headers");
    let o = r.scope !== void 0 && E({ scope: r.scope, agentSource: r.agentSource }), i = await A6n({ command: r.headersHelper, isRepoResidentConfig: o, repoResidentOrigin: r.declaredIn, cwd: n ?? (o ? no() ?? r.declaredIn ?? ke() : r.scope === "dynamic" && r.agentSource === void 0 ? no() ?? ke() : Le()), scrubCredentialEnv: w(r, n), pluginId: r.pluginSource, fromOrganization: r.scope !== void 0 && Zx(r.scope), env: { CLAUDE_CODE_MCP_SERVER_NAME: e, CLAUDE_CODE_MCP_SERVER_URL: r.url, ...n && { CLAUDE_PLUGIN_ROOT: n } } });
    if (i.ok) return se(e, `Successfully retrieved ${Object.keys(i.headers).length} headers from headersHelper`), g("mcp_headers_helper"), i.headers;
    if (i.reason === "missing_trust") {
      let s = Z_e() ? `${Xnt}, so add the server at user scope or in a managed MCP config instead` : kC() ? "not available to a session rooted at the home directory without a person present (home trust is session-only): run Claude Code interactively here and accept the trust dialog for that session, or work from a project directory you have trusted" : `accept the trust dialog here once interactively, or set projects[${VEo(cI())}].hasTrustDialogAccepted in ${see()}`;
      if (se(e, `headersHelper not run: this workspace has no persisted trust; ${s}.`), ye() && $Xn(`mcp headersHelper ${e}`)) E2(`MCP server '${Cn(e)}': headersHelper not run — this workspace has no persisted trust; ${s}.
`);
      return a("tengu_mcp_headersHelper_missing_trust", {}), f("mcp_headers_helper", "missing_trust"), null;
    }
    throw m("mcp_headers_helper", i.reason), Error(k(e, i.reason));
  } catch (o) {
    return ss(e, `Error getting headers from headersHelper: ${d(o)}`), t(`Error getting MCP headers from headersHelper for server '${e}': ${d(o)}`, { level: "error" }), null;
  }
}
function C(e) {
  let r = x4(), n = {}, o = [];
  for (let [i, s] of Object.entries(e ?? {})) {
    let { expanded: p, missingVars: u } = P4(s, void 0, void 0, { remoteSink: true, blankList: r });
    n[i] = p, o.push(...u);
  }
  return { staticHeaders: n, missingVars: o };
}
function k(e, r) {
  switch (r) {
    case "exec_failed":
      return `headersHelper for MCP server '${e}' did not return a valid value`;
    case "parse_failed":
      return `headersHelper for MCP server '${e}' did not return valid JSON`;
    case "non_object":
      return `headersHelper for MCP server '${e}' must return a JSON object with string key-value pairs`;
    case "non_string_value":
      return `headersHelper for MCP server '${e}' returned a non-string header value`;
  }
}
async function QDt(e, r) {
  let { staticHeaders: n, missingVars: o } = r.scope !== void 0 && Zx(r.scope) ? Gj(() => C(r.headers)) : C(r.headers);
  if (o.length > 0) se(e, `Header values reference unset environment variables: ${L(o).join(", ")}`);
  let i = await x(e, r) || {}, s = { ...n, ...i };
  if (_un() && URL.parse(r.url)?.hostname === "api.githubcopilot.com" && !Object.keys(s).some((p) => p.toLowerCase() === "x-mcp-features")) s["X-MCP-Features"] = "mcp_apps_disable_form_deferral";
  return s;
}
var T = 5;
function Eme(e, r, n) {
  let o;
  return async (i, s) => {
    let p = (s?.method ?? "GET").toUpperCase() === "GET", u = i;
    for (let _ = 0; ; _++) {
      if (!v(r, u)) return n(u, s);
      o ??= A(e, r);
      let U = new Headers(await o);
      new Headers(s?.headers).forEach((b, H) => U.set(H, b));
      let l = await n(u, { ...s, headers: U, redirect: "manual" }), y = l.headers.get("location");
      if (!(l.status >= 300 && l.status < 400) || !y || _ === T) return l;
      let S = new URL(y, u);
      if (!(p ? S.protocol === "https:" || S.protocol === "http:" : (l.status === 307 || l.status === 308) && v(r, S))) return l;
      u = S;
    }
  };
}
async function gBn(e, r, n) {
  return v(r, n) ? Object.fromEntries(await A(e, r)) : {};
}
function hBn(e) {
  return (r) => {
    if (!bfe(d4e(r), e)) throw Error("Refused a redirect to another origin");
  };
}
function v(e, r) {
  return (!!e.headers || !!e.headersHelper) && bfe(String(r), e.url);
}
async function A(e, r) {
  let n = new Headers();
  for (let [o, i] of Object.entries(await QDt(e, r))) n.set(o, i);
  return n.delete("authorization"), fEe(r.headers, Object.fromEntries(n)), n;
}
function yBn(e, r) {
  let n = typeof e.pluginSource === "string" ? e.pluginSource : void 0;
  return { scope: ce($vn().safeParse(e.scope).data), isPlugin: e.pluginSource !== void 0, plugin_marketplace_kind: ce(n === void 0 ? void 0 : G_(n) ?? (Vs(n) === Ns ? "builtin" : "marketplace")), has_config_client_id: Boolean(e.oauth?.clientId), redirect_kind: c(r ? "custom" : "loopback") };
}
export {
  Eme,
  JDt,
  QDt,
  gBn,
  hBn,
  mBn,
  pBn,
  yBn,
  yOe
};

// darwin/shared/needs-auth.3b80.js — Claude Code 2.1.310（darwin）模块 chunk-r2xrjmab.js
import { Rr, d } from "../telemetry/anthropic-workspace-id.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { co, jl, bw } from "../mcp/declared-tools-dropped-at-compaction.js";
import { Zt } from "../plugins/skills-dir.js";
import { b0, du } from "./chunk-60b5f597.js";
var a = /* @__PURE__ */ new Set(["INVALID_CONFIG", "UNCONFIGURED", "AUTH_HEADER_REJECTED", "HEADERS_HELPER_AUTH_REJECTED", "CLI_OWNED_BEARER_REJECTED", "FIRST_PARTY_AUTH_REJECTED", "CLAUDEAI_BEARER_REJECTED", "ENDPOINT_NOT_FOUND", "CONNECT_TIMEOUT", "CONNECT_SUSPENDED", "CREDENTIAL_STORE_UNAVAILABLE", "POLICY_BLOCKED", "APPROVAL_REQUIRED", "DISABLED", "IDENTITY_CHANGED", "SHUTTING_DOWN"]);
function Hmr(e) {
  let o = b0(e.name, e.config, { detail: "origin" }), n = e.errorCode, s = (r) => du(e.name, e.config, r);
  if (n !== void 0 && a.has(n)) return e.error !== void 0 ? s(e.error) : n;
  if (n) {
    let r = u(n);
    return o ? `${r} at ${o}` : r;
  }
  return e.error !== void 0 ? s(e.error) : "";
}
function u(e) {
  let o = Number(e);
  return e === "23" ? "request timed out" : Number.isInteger(o) && o >= 100 && o <= 599 ? `HTTP ${e}` : e;
}
function lps(e) {
  let { errorCode: o, displayDetail: n } = e, s = (i) => bw(du(e.name, e.config, i));
  if (o && !a.has(o)) {
    let i = u(o), f = e.error !== void 0 ? `${i}: ${e.error}` : i;
    return s(n ? `${f} ${n}` : f);
  }
  let r = e.error ?? o ?? "", c = n ? `${r} ${n}`.trim() : r;
  return c === "" ? c : s(c);
}
function Mxt(e, o, n, s) {
  switch (e.client.type) {
    case "connected":
      if (e.client.discoveryBearerRejected) return { message: `Reconnected to ${co(o)}, but your claude.ai session token was rejected. Run /login, then reconnect.`, success: false };
      if (e.client.toolsListError) {
        if (n.persistsOffBox) return t(`mcp reconnect tools/list failed for ${Zt(o)}: ${du(o, e.client.config, e.client.toolsListError)}`, { level: "error" }), { message: `Reconnected to ${co(o)}, but fetching tools failed (detail withheld on this connection).`, success: false };
        return { message: `Reconnected to ${co(o)}, but fetching tools failed: ${jl(du(o, e.client.config, e.client.toolsListError))}`, success: false };
      }
      return { message: `Reconnected to ${co(o)}.`, success: true };
    case "needs-auth":
      return { message: s?.hasHeadersHelper ? `${co(o)} requires authentication. Use 'Authenticate' if the upstream server uses OAuth, or check the headersHelper script and use 'Reconnect'.` : `${co(o)} requires authentication. Use the 'Authenticate' option.`, success: false };
    case "failed": {
      let r = Hmr(e.client);
      if (n.persistsOffBox) {
        if (r) t(`mcp reconnect failed for ${Zt(o)}: ${r}`, { level: "error" });
        return { message: `Failed to reconnect to ${co(o)}${r ? " (detail withheld on this connection)" : ""}.`, success: false };
      }
      return { message: r ? `Failed to reconnect to ${co(o)}: ${jl(r)}` : `Failed to reconnect to ${co(o)}.`, success: false };
    }
    default:
      return { message: `Unknown result when reconnecting to ${co(o)}.`, success: false };
  }
}
function ylt(e, o, n) {
  let s = n.config ? du(o, n.config, d(e)) : d(e);
  if (e instanceof Rr) return jl(d(e), void 0, "none");
  if (n.persistsOffBox) return t(`mcp reconnect error for ${Zt(o)}: ${s}`, { level: "error" }), `Error reconnecting to ${co(o)} (detail withheld on this connection).`;
  return `Error reconnecting to ${co(o)}: ${jl(s)}`;
}
function uUe(e, o, n, s) {
  let r = s.config ? du(o, s.config, d(e)) : d(e);
  if (e instanceof Rr) return jl(d(e), void 0, "none");
  if (s.persistsOffBox) return t(`mcp ${n} failed for ${Zt(o)}: ${r}`, { level: "error" }), `Failed to ${n} MCP server "${co(o)}" (detail withheld on this connection).`;
  return `Failed to ${n} MCP server "${co(o)}": ${jl(r)}`;
}
export {
  Hmr,
  Mxt,
  lps,
  uUe,
  ylt
};

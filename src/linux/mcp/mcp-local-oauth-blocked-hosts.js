// linux/mcp/mcp-local-oauth-blocked-hosts.js — Claude Code 2.1.310（linux）模块 chunk-apca454z.js
import { mNe } from "./toolbox-mcp-server-id.js";
import { co } from "./declared-tools-dropped-at-compaction.js";
import { wl } from "../shell/invalid-type.js";
import { k } from "../settings/global-config-and-gates.js";
var i = ["microsoft365.mcp.claude.com", "gmail.mcp.claude.com", "gcal.mcp.claude.com"];
function p(t) {
  return t.toLowerCase().replace(/\.$/, "");
}
function u() {
  let t = k("tengu_mcp_local_oauth_blocked_hosts", { hosts: i }), e = i;
  if (t !== null && typeof t === "object" && "hosts" in t && Array.isArray(t.hosts)) {
    let o = t.hosts.filter((n) => typeof n === "string");
    if (o.length > 0) e = o;
  }
  return new Set(e.map(p));
}
function c(t) {
  if (!t) return false;
  try {
    let e = p(new URL(t).hostname);
    return u().has(e);
  } catch {
    return false;
  }
}
function a(t, e = {}) {
  let o = `"${co(t)}" is Anthropic-hosted and doesn't support local OAuth. Connect it via Settings → Connectors on claude.ai (requires \`claude login\`), then it'll be available here automatically.`, r = e.scope === "local" || e.scope === "project" || e.scope === "user" ? wl("mcp remove", t) : null, s = r ? `${o} Remove the stale entry with: \`${r}\`` : o;
  return r && [...s].length <= 1024 ? s : o;
}
function b4(t, e) {
  if (e.type === "claudeai-proxy") return { kind: "claudeai-proxy", config: e };
  if (e.type !== "sse" && e.type !== "http") return { kind: "unsupported-transport", transport: e.type ?? "stdio" };
  if (c(e.url)) return { kind: "anthropic-hosted", config: e, message: a(t, { scope: e.scope }) };
  if (mNe(t, e)) return { kind: "anthropic-hosted", config: e, message: `"${co(t)}" is provided to this session by Claude Code's cloud service, which holds its sign-in, so it can't be signed in to from here. If it is one of your claude.ai connectors, reconnect it under Settings → Connectors on claude.ai and then start a new session.` };
  return { kind: "oauth", config: e };
}
export {
  b4
};

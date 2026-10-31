// linux/auth/oauth-2025-04-20.js — Claude Code 2.1.310（linux）模块 chunk-xc1j8sdj.js
import { L } from "../context/not-admin-owned.js";
function E() {
  return "prod";
}
var wSe = ["", "-staging-oauth", "-local-oauth", "-custom-oauth"];
function y2() {
  if (process.env.CLAUDE_CODE_CUSTOM_OAUTH_URL) return "-custom-oauth";
  switch (E()) {
    case "local":
      return "-local-oauth";
    case "staging":
      return "-staging-oauth";
    case "prod":
      return "";
  }
}
function ses() {
  return y2() === "-staging-oauth";
}
var Kse = 31536e3;
var ies = Math.round(Kse / 86400), fk = "user:inference", _2 = "user:profile", Ukn = "user:sessions:claude_code", Wlr = [_2, Ukn], WAt = "user:plugins", Glr = "user:projects:read", zlr = "user:projects:write";
function Klr(t) {
  return Array.isArray(t) && t.includes(fk);
}
var c = "org:create_api_key", Bu = "oauth-2025-04-20", n = [c, _2], r = [_2, fk, Ukn, "user:mcp_servers", "user:file_upload"];
function GAt() {
  let t = rn(), e = [...r];
  if (t.PLUGINS_SCOPE_REGISTERED) e.push(WAt);
  return e;
}
function g9r() {
  return L([...n, ...GAt()]);
}
var K$e = ["user:design:read", "user:design:write"], S = [Glr, zlr];
function h9r(t) {
  if (!Array.isArray(t)) return [];
  let e = S;
  return t.filter((o) => e.includes(o));
}
function aes(t) {
  return L([...GAt(), ...h9r(t)]);
}
var a = { BASE_API_URL: "https://api.anthropic.com", CONSOLE_AUTHORIZE_URL: "https://platform.claude.com/oauth/authorize", CLAUDE_AI_AUTHORIZE_URL: "https://claude.com/cai/oauth/authorize", CLAUDE_AI_ORIGIN: "https://claude.ai", TOKEN_URL: "https://platform.claude.com/v1/oauth/token", API_KEY_URL: "https://api.anthropic.com/api/oauth/claude_cli/create_api_key", ROLES_URL: "https://api.anthropic.com/api/oauth/claude_cli/roles", CONSOLE_SUCCESS_URL: "https://platform.claude.com/buy_credits?returnUrl=/oauth/code/success%3Fapp%3Dclaude-code", CLAUDEAI_SUCCESS_URL: "https://platform.claude.com/oauth/code/success?app=claude-code", MANUAL_REDIRECT_URL: "https://platform.claude.com/oauth/code/callback", CLIENT_ID: "9d1c250a-e61b-44d9-88ed-5944d1962f5e", DESIGN_CLIENT_ID: "59637612-477b-4836-a601-b0589eda7704", OAUTH_FILE_SUFFIX: "", PLUGINS_SCOPE_REGISTERED: true, PROJECTS_SCOPES_REGISTERED: true, HYBRID_SETTINGS_SCOPE_REGISTERED: false, MCP_PROXY_URL: "https://mcp-proxy.anthropic.com", MCP_PROXY_PATH: "/v1/mcp/{server_id}" }, sYe = "https://claude.ai/oauth/claude-code-client-metadata", u = void 0;
function i() {
  let t = process.env.CLAUDE_LOCAL_OAUTH_API_BASE?.replace(/\/$/, "") ?? "http://localhost:8000", e = process.env.CLAUDE_LOCAL_OAUTH_APPS_BASE?.replace(/\/$/, "") ?? "http://localhost:4000", o = process.env.CLAUDE_LOCAL_OAUTH_CONSOLE_BASE?.replace(/\/$/, "") ?? "http://localhost:3000";
  return { BASE_API_URL: t, CONSOLE_AUTHORIZE_URL: `${o}/oauth/authorize`, CLAUDE_AI_AUTHORIZE_URL: `${e}/oauth/authorize`, CLAUDE_AI_ORIGIN: e, TOKEN_URL: `${t}/v1/oauth/token`, API_KEY_URL: `${t}/api/oauth/claude_cli/create_api_key`, ROLES_URL: `${t}/api/oauth/claude_cli/roles`, CONSOLE_SUCCESS_URL: `${o}/buy_credits?returnUrl=/oauth/code/success%3Fapp%3Dclaude-code`, CLAUDEAI_SUCCESS_URL: `${o}/oauth/code/success?app=claude-code`, MANUAL_REDIRECT_URL: `${o}/oauth/code/callback`, CLIENT_ID: "22422756-60c9-4084-8eb7-27705fd5cf9a", DESIGN_CLIENT_ID: "00000000-0000-4000-8000-000000000000", OAUTH_FILE_SUFFIX: "-local-oauth", PLUGINS_SCOPE_REGISTERED: true, PROJECTS_SCOPES_REGISTERED: true, HYBRID_SETTINGS_SCOPE_REGISTERED: true, MCP_PROXY_URL: "http://localhost:8205", MCP_PROXY_PATH: "/v1/toolbox/shttp/mcp/{server_id}" };
}
var iYe = ["https://beacon.claude-ai.staging.ant.dev", "https://claude.fedstart.com", "https://claude-staging.fedstart.com"];
function y9r() {
  switch (E()) {
    case "local":
      return i();
    case "staging":
      return u ?? a;
    case "prod":
      return a;
  }
}
function rn() {
  let t = y9r(), e = process.env.CLAUDE_CODE_CUSTOM_OAUTH_URL;
  if (e) {
    let _ = e.replace(/\/$/, "");
    if (!iYe.includes(_)) throw Error("CLAUDE_CODE_CUSTOM_OAUTH_URL is not an approved endpoint.");
    t = { ...t, BASE_API_URL: _, CONSOLE_AUTHORIZE_URL: `${_}/oauth/authorize`, CLAUDE_AI_AUTHORIZE_URL: `${_}/oauth/authorize`, CLAUDE_AI_ORIGIN: _, TOKEN_URL: `${_}/v1/oauth/token`, API_KEY_URL: `${_}/api/oauth/claude_cli/create_api_key`, ROLES_URL: `${_}/api/oauth/claude_cli/roles`, CONSOLE_SUCCESS_URL: `${_}/oauth/code/success?app=claude-code`, CLAUDEAI_SUCCESS_URL: `${_}/oauth/code/success?app=claude-code`, MANUAL_REDIRECT_URL: `${_}/oauth/code/callback`, OAUTH_FILE_SUFFIX: "-custom-oauth", PLUGINS_SCOPE_REGISTERED: false, PROJECTS_SCOPES_REGISTERED: false, HYBRID_SETTINGS_SCOPE_REGISTERED: false };
  }
  let o = process.env.CLAUDE_CODE_OAUTH_CLIENT_ID;
  if (o) t = { ...t, CLIENT_ID: o, PLUGINS_SCOPE_REGISTERED: false, PROJECTS_SCOPES_REGISTERED: false, HYBRID_SETTINGS_SCOPE_REGISTERED: false };
  return t;
}
export {
  Bu,
  GAt,
  Glr,
  K$e,
  Klr,
  Kse,
  Ukn,
  WAt,
  Wlr,
  _2,
  aes,
  fk,
  g9r,
  h9r,
  iYe,
  ies,
  rn,
  sYe,
  ses,
  wSe,
  y2,
  y9r,
  zlr
};

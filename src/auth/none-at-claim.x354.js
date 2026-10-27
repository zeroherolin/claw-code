// auth/none-at-claim.x354.js — Claude Code 2.1.310 模块 chunk-x354zft2.js
import { Ne } from "../fs/async-hooks.9s1z.js";
import { Q3t } from "../context/not-admin-owned.ersa.js";
import { s$, FM } from "../remote/local-agent.we9a.js";
import { qZ, bTt, Fvn, cv, cW } from "./descriptor-direct.zd2z.js";
import { gpe, Nu } from "../models/total-tokens-reminder.psq3.js";
var o = null;
function KQs(n) {
  o = n;
}
function $hn() {
  return o?.credential() ?? null;
}
function qQs() {
  return o?.road() ?? "none_at_claim";
}
function YQs(n, e) {
  if (e === null) return "none_at_claim";
  let t = e.kind === "bearer", i = t ? "CLAUDE_CODE_OAUTH_TOKEN" : "ANTHROPIC_API_KEY", u = t ? "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR" : "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR";
  return r(n[i]) === void 0 ? Q3t(u) ?? "none" : "env_var";
}
function XQs(n) {
  if (_(n)) {
    let d = r(Fvn(qZ, "OAuth token")), s = r(Fvn(bTt, "API key"));
    if (d !== void 0 && s !== void 0) return null;
    return d === void 0 ? c(s) : { kind: "bearer", token: d };
  }
  let e = a(n, "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR"), t = a(n, "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR"), i = r(n.CLAUDE_CODE_OAUTH_TOKEN) ?? (e ? r(cv()) : void 0), u = r(n.ANTHROPIC_API_KEY) ?? (t ? r(cW()) : void 0);
  if (i !== void 0) return { kind: "bearer", token: i };
  if (u !== void 0) return { kind: "key", key: u };
  if (e || t) return null;
  let l = r(cv());
  if (l !== void 0) return { kind: "bearer", token: l };
  return c(r(cW()));
}
function JQs() {
  let n = o?.env();
  if (n === void 0) return "no_auth";
  if ([...gpe, "CLAUDE_CODE_USE_GATEWAY"].some((i) => Ne(n[i]))) return "third_party_provider";
  let t = r(n.ANTHROPIC_BASE_URL);
  if (t !== void 0 && !Nu(t)) return "custom_base_url";
  return $hn() === null ? "no_auth" : null;
}
var E = ["USE_LOCAL_OAUTH", "USE_STAGING_OAUTH", "CLAUDE_LOCAL_OAUTH_API_BASE", "CLAUDE_CODE_CUSTOM_OAUTH_URL"];
function jwt() {
  let n = o?.env() ?? {};
  return E.some((e) => process.env[e] !== n[e]);
}
function QQs() {
  let n = o?.env();
  return n === void 0 || _(n) ? void 0 : r(n.CLAUDE_CODE_SUBSCRIPTION_TYPE);
}
function _(n) {
  return s$() || FM() || a(n, "CLAUDE_CODE_CHILD_SESSION") || a(n, "CLAUDECODE");
}
function a(n, e) {
  return r(n[e]) !== void 0;
}
function c(n) {
  return n === void 0 ? null : { kind: "key", key: n };
}
function r(n) {
  let e = n?.trim() ?? "";
  return e === "" ? void 0 : e;
}
export {
  $hn,
  JQs,
  KQs,
  QQs,
  XQs,
  YQs,
  jwt,
  qQs
};

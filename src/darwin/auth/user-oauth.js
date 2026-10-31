// darwin/auth/user-oauth.js — Claude Code 2.1.310（darwin）模块 chunk-dnzdxqep.js
import { R, d, v, Kt } from "../telemetry/anthropic-workspace-id.js";
import { fk, Az } from "./oauth-2025-04-20.js";
import { ee, t } from "../fs/gitlab-runner-authentication-token.js";
import { i } from "../shared/environment.js";
import { f } from "../shared/chunk-2fe3b2b7.js";
import { nk, Te, Nu } from "../models/total-tokens-reminder.js";
import { HKr, nqr } from "../settings/global-config-and-gates.js";
import { Rqe, o8r, dxe, DH } from "./profile-explicit.js";
import { LZs, oyn, F6o, Izr } from "./wif-user-oauth-refresh-race-resolved.js";
import { o, yt } from "../vendor/zod/string-format.js";
import { mkdir as w, readFile as P, unlink as k, writeFile as O } from "fs/promises";
import { join as c } from "path";
var dMt = "41077d10-94b8-4194-be48-d251e9eb21b4", Fks = [Az, fk], g = { created_by: "claude-code" }, T = f(() => yt({ created_by: o().optional(), base_url: o().optional(), authentication: yt({ type: o(), client_id: o().optional(), credentials_path: o().optional() }) })), b = f(() => yt({ created_by: o().optional() })), y = { no_config_dir: true, invalid_profile_name: true, foreign_profile: true, custom_credentials_path: true, api_key_env_nondispatching: true, wif_env_quad: false, third_party_provider: false, api_key_env: false, env_credential_shadow: false, other_deployment_profile: false, federation_profile: false, unreadable_profile: false };
function N(e) {
  return Object.hasOwn(y, e);
}
function $ks(e) {
  if (!(e instanceof R) || e.errorClass === void 0 || !N(e.errorClass)) return null;
  return y[e.errorClass];
}
var I = { no_config_dir: "no Anthropic config directory was found", invalid_profile_name: "the configured profile name isn't valid", foreign_profile: "the profile on this machine belongs to another tool", custom_credentials_path: "the existing profile keeps its sign-in somewhere custom", api_key_env_nondispatching: "ANTHROPIC_API_KEY is set in this environment" };
function Uks(e) {
  if (!(e instanceof R) || e.errorClass === void 0 || !L(e.errorClass)) return null;
  return I[e.errorClass];
}
function L(e) {
  return Object.hasOwn(I, e);
}
async function jEr() {
  if (!o8r(i.ANTHROPIC_PROFILE) && i.ANTHROPIC_FEDERATION_RULE_ID && i.ANTHROPIC_ORGANIZATION_ID) throw new R("Workload identity federation is configured in this environment (ANTHROPIC_FEDERATION_RULE_ID and ANTHROPIC_ORGANIZATION_ID), and it takes precedence over the default profile. Set ANTHROPIC_PROFILE to a profile name to sign in with a profile that outranks it.", "Console profile login refused: env-quad federation outranks the implicit profile", "wif_env_quad");
  let e = Te();
  if (e !== "firstParty") throw new R(`This session uses ${nk[e]}, which does not use Anthropic Console sign-in.`, "This session uses a third-party provider, which does not use Anthropic Console sign-in.", "third_party_provider");
  let n = i.ANTHROPIC_API_KEY;
  if (n) {
    let l = await nqr({ skipRetrievingKeyFromApiKeyHelper: true });
    if (l.source === "ANTHROPIC_API_KEY" && l.key === n) throw new R("ANTHROPIC_API_KEY is set in this environment and takes precedence over a profile, so a profile sign-in would not be used. Unset it to sign in this way.", "Console profile login refused: env credential shadows the profile", "api_key_env");
  }
  if (HKr()) throw new R("Something in this environment — an API key helper, an injected token, or a third-party provider setting — takes precedence over a profile sign-in, so it would not be used here.", "Console profile login refused: env credential shadows the profile", "env_credential_shadow");
  let r = DH();
  if (r === null) throw new R("Cannot locate the Anthropic config directory. Set ANTHROPIC_CONFIG_DIR (or HOME) and try again.", "Console profile login refused: no config directory", "no_config_dir");
  let a = h(r), s = await C(c(r, "configs", `${a}.json`));
  if (s !== null) {
    if (s.base_url && !Nu(s.base_url)) throw new R("This profile is bound to a different Anthropic deployment, so Claude Code will not replace it here. Sign out of it with the tool that created it, then try again.", "Console profile login refused: profile bound to another deployment", "other_deployment_profile");
    if (s.authentication.type === "oidc_federation") throw new R("This machine is set up for workload identity federation, which signs in on its own. If you need a different sign-in, ask whoever configured it.", "Console profile login refused: federation profile", "federation_profile");
    if (s.authentication.type !== "user_oauth") throw new R("Claude Code cannot read the existing sign-in on this machine, so it will not overwrite it. Check the permissions on your Anthropic config directory, then try again.", "Console profile login refused: unreadable or unrecognized profile config", "unreadable_profile");
    if (s.authentication.client_id !== dMt) throw new R("This machine already has a sign-in from another tool that Claude Code cannot replace. Sign out with that tool, then try again.", "Console profile login refused: profile is not a same-client login", "foreign_profile");
    if (s.authentication.credentials_path) throw new R("This profile keeps its sign-in somewhere custom, so Claude Code cannot replace it. Sign out of it with the tool that created it, then try again.", "Console profile login refused: custom credentials_path", "custom_credentials_path");
  }
  if (n) throw new R("ANTHROPIC_API_KEY is set in this environment. Unset it to sign in without an API key.", "Console profile login refused: non-dispatching env API key present", "api_key_env_nondispatching");
  return { profile: a, configDir: r, isNewProfile: s === null };
}
async function Bks(e) {
  let n = await jEr();
  return await w(c(n.configDir, "credentials"), { recursive: true, mode: 448 }), F6o(p(n.configDir, n.profile), () => S(e));
}
async function S(e) {
  let { profile: n, configDir: r, isNewProfile: a } = await jEr(), s = c(r, "configs", `${n}.json`);
  await w(c(r, "configs"), { recursive: true, mode: 448 });
  let l = { version: LZs, organization_id: e.organizationUuid, workspace_id: e.workspaceId, authentication: { type: "user_oauth", client_id: dMt }, ...g };
  await Rqe(s, l);
  let u = a, _ = { version: oyn, type: "oauth_token", access_token: e.accessToken, refresh_token: e.refreshToken, expires_at: Math.floor(e.expiresAtMs / 1e3), scope: e.scopes.join(" "), organization_uuid: e.organizationUuid, organization_name: e.organizationName, account_email: e.accountEmail };
  await Rqe(p(r, n), { ..._, workspace_id: e.workspaceId, workspace_name: e.workspaceName, ...g });
  let E = await D(c(r, "active_config"), n + `
`);
  return t(`Console profile login: wrote credentials for profile ${n}${u ? " (new profile)" : ""}${E ? " (set active)" : ""}`), Izr(), { profile: n, configDir: r };
}
async function jks({ revoke: e } = {}) {
  try {
    let n = DH();
    if (n === null) return { removed: false };
    let r;
    try {
      r = h(n);
    } catch {
      return { removed: false };
    }
    let a = await C(c(n, "configs", `${r}.json`));
    if (a === null || !A(a)) return { removed: false };
    if (await m(p(n, r)) === null) return { removed: false };
    return await F6o(p(n, r), () => F(e));
  } catch (n) {
    if (v(n) === "ENOENT") return { removed: false };
    return t(`Logout: profile credential removal failed: ${d(n)}`, { level: "error" }), { removed: false };
  }
}
async function F(e) {
  let n = DH();
  if (n === null) return { removed: false };
  let r;
  try {
    r = h(n);
  } catch {
    return { removed: false };
  }
  let a = await C(c(n, "configs", `${r}.json`));
  if (a === null || !A(a)) return { removed: false };
  let s = p(n, r), l = await m(s);
  if (l === null) return { removed: false };
  let u = { refreshToken: l.refreshToken, clientId: dMt };
  if (e && u.refreshToken) await e({ refreshToken: u.refreshToken, clientId: u.clientId });
  try {
    await k(s);
  } catch (_) {
    return t(`Logout: could not remove profile credentials: ${d(_)}`, { level: "error" }), { removed: false, ...u };
  }
  return t(`Logout: removed credentials for profile ${r}`), Izr(), { removed: true, ...u };
}
function h(e) {
  let n = i.ANTHROPIC_PROFILE || dxe(e);
  if (!o8r(n)) throw new R(`ANTHROPIC_PROFILE "${n}" is not a valid profile name (letters, digits, '_', '.', '-')`, "ANTHROPIC_PROFILE is not a valid profile name", "invalid_profile_name");
  return n;
}
function p(e, n) {
  return c(e, "credentials", `${n}.json`);
}
async function C(e) {
  let n;
  try {
    n = await P(e, "utf-8");
  } catch (s) {
    if (v(s) === "ENOENT") return null;
    if (Kt(s)) return { authentication: { type: "unreadable" } };
    throw s;
  }
  let r;
  try {
    r = ee(n);
  } catch (s) {
    return t(`Profile config is not JSON, treating as foreign: ${d(s)}`), { authentication: { type: "unreadable" } };
  }
  let a = T().safeParse(r);
  return a.success ? a.data : { authentication: { type: "unreadable" } };
}
function A(e) {
  return e.created_by === g.created_by && e.authentication.type === "user_oauth" && e.authentication.client_id === dMt;
}
async function m(e) {
  let n;
  try {
    n = await P(e, "utf-8");
  } catch (l) {
    if (Kt(l)) return null;
    throw l;
  }
  let r;
  try {
    r = ee(n);
  } catch {
    return null;
  }
  let a = b().safeParse(r);
  if (!a.success || a.data.created_by !== g.created_by) return null;
  let s = a.data.refresh_token;
  return { refreshToken: typeof s === "string" ? s : void 0 };
}
async function Wks(e) {
  let n = DH();
  if (n === null) return false;
  try {
    let r = await m(p(n, h(n)));
    return r !== null && r.refreshToken === e;
  } catch {
    return true;
  }
}
async function Gks() {
  return false;
}
async function D(e, n) {
  try {
    return await O(e, n, { flag: "wx", mode: 420 }), true;
  } catch (r) {
    if (v(r) === "EEXIST") return false;
    throw r;
  }
}
export {
  $ks,
  Bks,
  Fks,
  Gks,
  Uks,
  Wks,
  dMt,
  jEr,
  jks
};

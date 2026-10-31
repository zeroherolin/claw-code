// linux/vendor/aws-sdk/refresh-token.fb89.js — Claude Code 2.1.310（linux）模块 chunk-jendns25.js
import { R$ } from "../../fs/chunk-cccfb281.js";
import { lh } from "./chunk-dabc4269.js";
import { Ce } from "../react/chunk-0b0bf45d.js";
var S = Ce(lh()), a = Ce(R$());
var g = 3e5, p = "To refresh this SSO session run 'aws sso login' with the corresponding profile.";
var k = async (e, o = {}) => {
  let { SSOOIDCClient: s } = await import("./sso-oauth.js").then((m) => Ce(m.default)), n = (f) => o.clientConfig?.[f] ?? o.parentClientConfig?.[f];
  return new s(Object.assign({}, o.clientConfig ?? {}, { region: e ?? o.clientConfig?.region, logger: n("logger"), userAgentAppId: n("userAgentAppId") }));
};
var h = async (e, o, s = {}) => {
  let { CreateTokenCommand: n } = await import("./sso-oauth.js").then((m) => Ce(m.default));
  return (await k(o, s)).send(new n({ clientId: e.clientId, clientSecret: e.clientSecret, refreshToken: e.refreshToken, grantType: "refresh_token" }));
};
var u = Ce(lh());
var w = (e) => {
  if (e.expiration && e.expiration.getTime() < Date.now()) throw new u.TokenProviderError(`Token is expired. ${p}`, false);
};
var E = Ce(lh());
var i = (e, o, s = false) => {
  if (typeof o > "u") throw new E.TokenProviderError(`Value not present for '${e}' in SSO Token${s ? ". Cannot refresh" : ""}. ${p}`, false);
};
var x = Ce(R$());
import { promises as A } from "fs";
var { writeFile: R } = A, O = (e, o) => {
  let s = x.getSSOTokenFilepath(e), n = JSON.stringify(o, null, 2);
  return R(s, n);
};
var C = /* @__PURE__ */ new Date(0), LZn = (e = {}) => async ({ callerClientConfig: o } = {}) => {
  let s = { ...e, parentClientConfig: { ...o, ...e.parentClientConfig } };
  s.logger?.debug("@aws-sdk/token-providers - fromSso");
  let n = await a.parseKnownFiles(s), c = a.getProfileName({ profile: s.profile ?? o?.profile }), f = n[c];
  if (!f) throw new S.TokenProviderError(`Profile '${c}' could not be found in shared credentials file.`, false);
  else if (!f.sso_session) throw new S.TokenProviderError(`Profile '${c}' is missing required property 'sso_session'.`);
  let m = f.sso_session, d = (await a.loadSsoSessionData(s))[m];
  if (!d) throw new S.TokenProviderError(`Sso session '${m}' could not be found in shared credentials file.`, false);
  for (let t of ["sso_start_url", "sso_region"]) if (!d[t]) throw new S.TokenProviderError(`Sso session '${m}' is missing required property '${t}'.`, false);
  let { sso_start_url: F, sso_region: _ } = d, r;
  try {
    r = await a.getSSOTokenFromFile(m);
  } catch (t) {
    throw new S.TokenProviderError(`The SSO session token associated with profile=${c} was not found or is invalid. ${p}`, false);
  }
  i("accessToken", r.accessToken), i("expiresAt", r.expiresAt);
  let { accessToken: y, expiresAt: I } = r, l = { token: y, expiration: new Date(I) };
  if (l.expiration.getTime() - Date.now() > g) return l;
  if (Date.now() - C.getTime() < 3e4) return w(l), l;
  i("clientId", r.clientId, true), i("clientSecret", r.clientSecret, true), i("refreshToken", r.refreshToken, true);
  try {
    C.setTime(Date.now());
    let t = await h(r, _, s);
    i("accessToken", t.accessToken), i("expiresIn", t.expiresIn);
    let T = new Date(Date.now() + t.expiresIn * 1e3);
    try {
      await O(m, { ...r, accessToken: t.accessToken, expiresAt: T.toISOString(), refreshToken: t.refreshToken });
    } catch (v) {
    }
    return { token: t.accessToken, expiration: T };
  } catch (t) {
    return w(l), l;
  }
};
export {
  LZn
};

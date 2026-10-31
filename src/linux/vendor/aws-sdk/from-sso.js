// linux/vendor/aws-sdk/from-sso.js — Claude Code 2.1.310（linux）模块 chunk-p3rpdy7h.js
import { R$ } from "../../fs/chunk-cccfb281.js";
import { LZn } from "./refresh-token.fb89.js";
import { YO } from "../../shared/chunk-9bdd05bb.js";
import { lh } from "./chunk-dabc4269.js";
import { Ce } from "../react/chunk-0b0bf45d.js";
var S = Ce(lh()), m = Ce(R$());
var D = (e) => e && (typeof e.sso_start_url === "string" || typeof e.sso_account_id === "string" || typeof e.sso_session === "string" || typeof e.sso_region === "string" || typeof e.sso_role_name === "string");
var y = Ce(YO());
var d = Ce(lh()), F = Ce(R$()), h = false, O = async ({ ssoStartUrl: e, ssoSession: f, ssoAccountId: s, ssoRegion: n, ssoRoleName: r, ssoClient: i, clientConfig: a, parentClientConfig: _, profile: t, filepath: k, configFilepath: o, ignoreCache: u, logger: l }) => {
  let g, N = "To refresh this SSO session run aws sso login with the corresponding profile.";
  if (f) try {
    let c = await LZn({ profile: t, filepath: k, configFilepath: o, ignoreCache: u })();
    g = { accessToken: c.token, expiresAt: new Date(c.expiration).toISOString() };
  } catch (c) {
    throw new d.CredentialsProviderError(c.message, { tryNextLink: h, logger: l });
  }
  else try {
    g = await F.getSSOTokenFromFile(e);
  } catch (c) {
    throw new d.CredentialsProviderError("The SSO session associated with this profile is invalid. To refresh this SSO session run aws sso login with the corresponding profile.", { tryNextLink: h, logger: l });
  }
  if (new Date(g.expiresAt).getTime() - Date.now() <= 0) throw new d.CredentialsProviderError("The SSO session associated with this profile has expired. To refresh this SSO session run aws sso login with the corresponding profile.", { tryNextLink: h, logger: l });
  let { accessToken: C } = g, { SSOClient: A, GetRoleCredentialsCommand: p } = await import("../../shared/get-role-credentials-command.aea4.js"), w = i || new A(Object.assign({}, a ?? {}, { logger: a?.logger ?? _?.logger, region: a?.region ?? n, userAgentAppId: a?.userAgentAppId ?? _?.userAgentAppId })), I;
  try {
    I = await w.send(new p({ accountId: s, roleName: r, accessToken: C }));
  } catch (c) {
    throw new d.CredentialsProviderError(c, { tryNextLink: h, logger: l });
  }
  let { roleCredentials: { accessKeyId: L, secretAccessKey: R, sessionToken: T, expiration: v, credentialScope: P, accountId: E } = {} } = I;
  if (!L || !R || !T || !v) throw new d.CredentialsProviderError("SSO returns an invalid temporary credential.", { tryNextLink: h, logger: l });
  let x = { accessKeyId: L, secretAccessKey: R, sessionToken: T, expiration: new Date(v), ...P && { credentialScope: P }, ...E && { accountId: E } };
  if (f) y.setCredentialFeature(x, "CREDENTIALS_SSO", "s");
  else y.setCredentialFeature(x, "CREDENTIALS_SSO_LEGACY", "u");
  return x;
};
var M = Ce(lh()), U = (e, f) => {
  let { sso_start_url: s, sso_account_id: n, sso_region: r, sso_role_name: i } = e;
  if (!s || !n || !r || !i) throw new M.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(e).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, { tryNextLink: false, logger: f });
  return e;
};
var Y = (e = {}) => async ({ callerClientConfig: f } = {}) => {
  e.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
  let { ssoStartUrl: s, ssoAccountId: n, ssoRegion: r, ssoRoleName: i, ssoSession: a } = e, { ssoClient: _ } = e, t = m.getProfileName({ profile: e.profile ?? f?.profile });
  if (!s && !n && !r && !i && !a) {
    let o = (await m.parseKnownFiles(e))[t];
    if (!o) throw new S.CredentialsProviderError(`Profile ${t} was not found.`, { logger: e.logger });
    if (!D(o)) throw new S.CredentialsProviderError(`Profile ${t} is not configured with SSO credentials.`, { logger: e.logger });
    if (o?.sso_session) {
      let p = (await m.loadSsoSessionData(e))[o.sso_session], w = ` configurations in profile ${t} and sso-session ${o.sso_session}`;
      if (r && r !== p.sso_region) throw new S.CredentialsProviderError("Conflicting SSO region" + w, { tryNextLink: false, logger: e.logger });
      if (s && s !== p.sso_start_url) throw new S.CredentialsProviderError("Conflicting SSO start_url" + w, { tryNextLink: false, logger: e.logger });
      o.sso_region = p.sso_region, o.sso_start_url = p.sso_start_url;
    }
    let { sso_start_url: u, sso_account_id: l, sso_region: g, sso_role_name: N, sso_session: C } = U(o, e.logger);
    return O({ ssoStartUrl: u, ssoSession: C, ssoAccountId: l, ssoRegion: g, ssoRoleName: N, ssoClient: _, clientConfig: e.clientConfig, parentClientConfig: e.parentClientConfig, profile: t, filepath: e.filepath, configFilepath: e.configFilepath, ignoreCache: e.ignoreCache, logger: e.logger });
  } else if (!s || !n || !r || !i) throw new S.CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"', { tryNextLink: false, logger: e.logger });
  else return O({ ssoStartUrl: s, ssoSession: a, ssoAccountId: n, ssoRegion: r, ssoRoleName: i, ssoClient: _, clientConfig: e.clientConfig, parentClientConfig: e.parentClientConfig, profile: t, filepath: e.filepath, configFilepath: e.configFilepath, ignoreCache: e.ignoreCache, logger: e.logger });
};
export {
  Y as fromSSO
};

// auth/from-token-file.be5y.js — Claude Code 2.1.310 模块 chunk-be5yt856.js
import { OF } from "../fs/chunk-182nrm88.js";
import { tM } from "../shared/chunk-ddq4b1hs.js";
import { lh } from "../vendor/aws-sdk/chunk-k5hq3azn.js";
import { Ae } from "../vendor/react/chunk-meds60nn.js";
var d = Ae(tM()), a = Ae(lh()), m = Ae(OF());
import { readFileSync as _ } from "fs";
var l = (e) => async (t) => {
  e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
  let { roleArn: o, roleSessionName: r, webIdentityToken: s, providerId: n, policyArns: g, policy: p, durationSeconds: E } = e, { roleAssumerWithWebIdentity: i } = e;
  if (!i) {
    let { getDefaultRoleAssumerWithWebIdentity: f } = await import("../shared/chunk-cq63rtd6.js").then((m2) => Ae(m2.default));
    i = f({ ...e.clientConfig, credentialProviderLogger: e.logger, parentClientConfig: { ...t?.callerClientConfig, ...e.parentClientConfig } }, e.clientPlugins);
  }
  return i({ RoleArn: o, RoleSessionName: r ?? `aws-sdk-js-session-${Date.now()}`, WebIdentityToken: s, ProviderId: n, PolicyArns: g, Policy: p, DurationSeconds: E });
};
var c = "AWS_WEB_IDENTITY_TOKEN_FILE", S = "AWS_ROLE_ARN", N = "AWS_ROLE_SESSION_NAME", A = (e = {}) => async (t) => {
  e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
  let o = e?.webIdentityTokenFile ?? process.env[c], r = e?.roleArn ?? process.env[S], s = e?.roleSessionName ?? process.env[N];
  if (!o || !r) throw new a.CredentialsProviderError("Web identity configuration not specified", { logger: e.logger });
  let n = await l({ ...e, webIdentityToken: m.externalDataInterceptor?.getTokenRecord?.()[o] ?? _(o, { encoding: "ascii" }), roleArn: r, roleSessionName: s })(t);
  if (o === process.env[c]) d.setCredentialFeature(n, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h");
  return n;
};
export {
  A as fromTokenFile,
  l as fromWebToken
};

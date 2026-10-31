// darwin/ide/create-credential-chain.js — Claude Code 2.1.310（darwin）模块 chunk-vghf34wq.js
import { nM } from "../shared/chunk-5750ab12.js";
import { ZZn, R_e } from "../vendor/aws-sdk/chunk-048c160b.js";
import "../fs/chunk-cccfb281.js";
import { z6o } from "../vendor/aws-sdk/refresh-token.7583.js";
import { oA } from "../vendor/aws-sdk/use-dualstack-endpoint.js";
import { Hw } from "../vendor/aws-sdk/chunk-01df6a01.js";
import "../vendor/aws-sdk/utf-8.js";
import { lh } from "../vendor/aws-sdk/chunk-dabc4269.js";
import "../shared/chunk-e9b81411.js";
import "../vendor/aws-sdk/chunk-d15f3977.js";
import { Ae } from "../vendor/react/chunk-0b0bf45d.js";
var x = Ae(lh()), O = (...e) => {
  let r = -1, i = Object.assign(async (t) => {
    let o = await P(...e)(t);
    if (!o.expiration && r !== -1) o.expiration = new Date(Date.now() + r);
    return o;
  }, { expireAfter(t) {
    if (t < 3e5) throw Error("@aws-sdk/credential-providers - createCredentialChain(...).expireAfter(ms) may not be called with a duration lower than five minutes.");
    return r = t, i;
  } });
  return i;
}, P = (...e) => async (r) => {
  if (e.length === 0) throw new x.ProviderError("No providers in chain", { tryNextLink: false });
  let n;
  for (let i of e) try {
    return await i(r);
  } catch (t) {
    if (n = t, t?.tryNextLink) continue;
    throw t;
  }
  throw n;
};
var R = (e) => ZZn(e);
var F = (e = {}) => z6o({ ...e });
var v = (e = {}) => R_e({ ...e });
var E = Ae(oA()), T = Ae(nM());
var h = Ae(Hw()), S = Ae(lh()), k = "us-east-1", A = (e, r, n) => {
  let i;
  return async (t = {}) => {
    let { callerClientConfig: o } = t, w = e.clientConfig?.profile ?? o?.profile, c = e.logger ?? o?.logger;
    c?.debug("@aws-sdk/credential-providers - fromTemporaryCredentials (STS)");
    let f = { ...e.params, RoleSessionName: e.params.RoleSessionName ?? "aws-sdk-js-" + Date.now() };
    if (f?.SerialNumber) {
      if (!e.mfaCodeProvider) throw new S.CredentialsProviderError("Temporary credential requires multi-factor authentication, but no MFA code callback was provided.", { tryNextLink: false, logger: c });
      f.TokenCode = await e.mfaCodeProvider(f?.SerialNumber);
    }
    let { AssumeRoleCommand: I, STSClient: N } = await import("../shared/assume-role-command.js");
    if (!i) {
      let u = typeof r === "function" ? r() : void 0, s = [e.masterCredentials, e.clientConfig?.credentials, void o?.credentials, o?.credentialDefaultProvider?.(), u], l = "STS client default credentials";
      if (s[0]) l = "options.masterCredentials";
      else if (s[1]) l = "options.clientConfig.credentials";
      else if (s[2]) throw l = "caller client's credentials", Error("fromTemporaryCredentials recursion in callerClientConfig.credentials");
      else if (s[3]) l = "caller client's credentialDefaultProvider";
      else if (s[4]) l = "AWS SDK default credentials";
      let d = [e.clientConfig?.region, o?.region, await n?.({ profile: w }), k], m = "default partition's default region";
      if (d[0]) m = "options.clientConfig.region";
      else if (d[1]) m = "caller client's region";
      else if (d[2]) m = "file or env region";
      let C = [y(e.clientConfig?.requestHandler), y(o?.requestHandler)], g = "STS default requestHandler";
      if (C[0]) g = "options.clientConfig.requestHandler";
      else if (C[1]) g = "caller client's requestHandler";
      c?.debug?.(`@aws-sdk/credential-providers - fromTemporaryCredentials STS client init with ${m}=${await h.normalizeProvider(p(d))()}, ${l}, ${g}.`), i = new N({ userAgentAppId: o?.userAgentAppId, ...e.clientConfig, credentials: p(s), logger: c, profile: w, region: p(d), requestHandler: p(C) });
    }
    if (e.clientPlugins) for (let u of e.clientPlugins) i.middlewareStack.use(u);
    let { Credentials: a } = await i.send(new I(f));
    if (!a || !a.AccessKeyId || !a.SecretAccessKey) throw new S.CredentialsProviderError(`Invalid response from STS.assumeRole call with role ${f.RoleArn}`, { logger: c });
    return { accessKeyId: a.AccessKeyId, secretAccessKey: a.SecretAccessKey, sessionToken: a.SessionToken, expiration: a.Expiration, credentialScope: a.CredentialScope };
  };
}, y = (e) => e?.metadata?.handlerProtocol === "h2" ? void 0 : e, p = (e) => {
  for (let r of e) if (r !== void 0) return r;
};
var M = (e) => A(e, v, async ({ profile: r = process.env.AWS_PROFILE }) => T.loadConfig({ environmentVariableSelector: (n) => n.AWS_REGION, configFileSelector: (n) => n.region, default: () => {
  return;
} }, { ...E.NODE_REGION_CONFIG_FILE_OPTIONS, profile: r })());
export {
  O as createCredentialChain,
  R as fromEnv,
  F as fromIni,
  v as fromNodeProviderChain,
  M as fromTemporaryCredentials
};

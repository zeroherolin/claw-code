// linux/vendor/aws-sdk/from-process.js — Claude Code 2.1.310（linux）模块 chunk-2wgjpp5s.js
import { R$ } from "../../fs/chunk-cccfb281.js";
import { YO } from "../../shared/chunk-9bdd05bb.js";
import { lh } from "./chunk-dabc4269.js";
import { Ce } from "../react/chunk-0b0bf45d.js";
var i = Ce(R$());
var c = Ce(lh()), f = Ce(R$());
import { exec as w } from "child_process";
import { promisify as m } from "util";
var p = Ce(YO()), a = (r, e, o) => {
  if (e.Version !== 1) throw Error(`Profile ${r} credential_process did not return Version 1.`);
  if (e.AccessKeyId === void 0 || e.SecretAccessKey === void 0) throw Error(`Profile ${r} credential_process returned invalid credentials.`);
  if (e.Expiration) {
    let d = /* @__PURE__ */ new Date();
    if (new Date(e.Expiration) < d) throw Error(`Profile ${r} credential_process returned expired credentials.`);
  }
  let s = e.AccountId;
  if (!s && o?.[r]?.aws_account_id) s = o[r].aws_account_id;
  let t = { accessKeyId: e.AccessKeyId, secretAccessKey: e.SecretAccessKey, ...e.SessionToken && { sessionToken: e.SessionToken }, ...e.Expiration && { expiration: new Date(e.Expiration) }, ...e.CredentialScope && { credentialScope: e.CredentialScope }, ...s && { accountId: s } };
  return p.setCredentialFeature(t, "CREDENTIALS_PROCESS", "w"), t;
};
var u = async (r, e, o) => {
  let s = e[r];
  if (e[r]) {
    let t = s.credential_process;
    if (t !== void 0) {
      let d = m(f.externalDataInterceptor?.getTokenRecord?.().exec ?? w);
      try {
        let { stdout: n } = await d(t), l;
        try {
          l = JSON.parse(n.trim());
        } catch {
          throw Error(`Profile ${r} credential_process returned invalid JSON.`);
        }
        return a(r, l, e);
      } catch (n) {
        throw new c.CredentialsProviderError(n.message, { logger: o });
      }
    } else throw new c.CredentialsProviderError(`Profile ${r} did not contain credential_process.`, { logger: o });
  } else throw new c.CredentialsProviderError(`Profile ${r} could not be found in shared credentials file.`, { logger: o });
};
var h = (r = {}) => async ({ callerClientConfig: e } = {}) => {
  r.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
  let o = await i.parseKnownFiles(r);
  return u(i.getProfileName({ profile: r.profile ?? e?.profile }), o, r.logger);
};
export {
  h as fromProcess
};

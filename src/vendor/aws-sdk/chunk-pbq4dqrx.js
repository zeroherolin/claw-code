// vendor/aws-sdk/chunk-pbq4dqrx.js — Claude Code 2.1.310 模块 chunk-pbq4dqrx.js
import { Hw } from "./chunk-12jj09fn.js";
import { eer } from "./refresh-token.vcf7.js";
import { jtt } from "./transfer-encoding.bmpf.js";
import { tM } from "../../shared/chunk-ddq4b1hs.js";
import { lh } from "./chunk-k5hq3azn.js";
import { fh } from "../../fs/ca-certs-load.ft7b.js";
import { Ae } from "../react/chunk-meds60nn.js";
var a = Ae(tM());
var c = fh(), d = Hw(), l = lh(), u = tM(), S = jtt();
var g = (e) => `AWS_BEARER_TOKEN_${e.replace(/[\s-]/g, "_").toUpperCase()}`;
var r = g;
var s = Ae(lh()), JZn = ({ logger: e, signingName: n } = {}) => async () => {
  if (e?.debug?.("@aws-sdk/token-providers - fromEnvSigningName"), !n) throw new s.TokenProviderError("Please pass 'signingName' to compute environment variable key", { logger: e });
  let t = r(n);
  if (!(t in process.env)) throw new s.TokenProviderError(`Token not present in '${t}' environment variable`, { logger: e });
  let o = { token: process.env[t] };
  return a.setTokenFeature(o, "BEARER_SERVICE_ENV_VARS", "3"), o;
};
var i = Ae(lh());
var QZn = (e = {}) => i.memoize(i.chain(eer(e), async () => {
  throw new i.TokenProviderError("Could not load token from any providers", false);
}), (n) => n.expiration !== void 0 && n.expiration.getTime() - Date.now() < 3e5, (n) => n.expiration !== void 0);
export {
  JZn,
  QZn
};

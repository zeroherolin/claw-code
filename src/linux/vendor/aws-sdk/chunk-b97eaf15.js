// linux/vendor/aws-sdk/chunk-b97eaf15.js — Claude Code 2.1.310（linux）模块 chunk-rxfa9f6z.js
import { Mw } from "./chunk-01df6a01.js";
import { LZn } from "./refresh-token.fb89.js";
import { Htt } from "./transfer-encoding.js";
import { YO } from "../../shared/chunk-9bdd05bb.js";
import { lh } from "./chunk-dabc4269.js";
import { ph } from "../../fs/ca-certs-load.js";
import { Ce } from "../react/chunk-0b0bf45d.js";
var a = Ce(YO());
var c = ph(), d = Mw(), l = lh(), u = YO(), S = Htt();
var g = (e) => `AWS_BEARER_TOKEN_${e.replace(/[\s-]/g, "_").toUpperCase()}`;
var r = g;
var s = Ce(lh()), MZn = ({ logger: e, signingName: n } = {}) => async () => {
  if (e?.debug?.("@aws-sdk/token-providers - fromEnvSigningName"), !n) throw new s.TokenProviderError("Please pass 'signingName' to compute environment variable key", { logger: e });
  let t = r(n);
  if (!(t in process.env)) throw new s.TokenProviderError(`Token not present in '${t}' environment variable`, { logger: e });
  let o = { token: process.env[t] };
  return a.setTokenFeature(o, "BEARER_SERVICE_ENV_VARS", "3"), o;
};
var i = Ce(lh());
var DZn = (e = {}) => i.memoize(i.chain(LZn(e), async () => {
  throw new i.TokenProviderError("Could not load token from any providers", false);
}), (n) => n.expiration !== void 0 && n.expiration.getTime() - Date.now() < 3e5, (n) => n.expiration !== void 0);
export {
  DZn,
  MZn
};

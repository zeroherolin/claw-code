// darwin/shared/chunk-a8015993.js — Claude Code 2.1.310（darwin）模块 chunk-tgxmcfkt.js
import { Dt } from "../fs/content-encoding.js";
import { kRe } from "../mcp/allowed-warning.js";
import { mz } from "../fs/ca-certs-load.js";
var i = /^([a-z][a-z\d+\-.]*:)?\/\//i;
function r(o, e) {
  let s = e?.baseURL, n = i.test(o), t = null;
  if (n && !mz(o)) t = o;
  else if (s != null && !mz(s)) t = s;
  else if (!n && s == null) t = o;
  if (t !== null) throw Error(`downloads: request (url="${o}"` + (s != null ? `, baseURL="${s}"` : "") + ") does not resolve to the public CDN (downloads.claude.ai). Use firstPartyApi for api.anthropic.com (residency-gated) or externalHttp for non-Anthropic hosts.");
}
var j3 = { get(o, e) {
  return r(o, e), kRe(), Dt.get(o, e);
} };
export {
  j3
};

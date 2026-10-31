// linux/shared/chunk-a8015993.js — Claude Code 2.1.310（linux）模块 chunk-d89f5ek5.js
import { Ht } from "../fs/content-encoding.js";
import { _Re } from "../mcp/allowed-warning.js";
import { o2 } from "../fs/ca-certs-load.js";
var i = /^([a-z][a-z\d+\-.]*:)?\/\//i;
function r(o, e) {
  let s = e?.baseURL, n = i.test(o), t = null;
  if (n && !o2(o)) t = o;
  else if (s != null && !o2(s)) t = s;
  else if (!n && s == null) t = o;
  if (t !== null) throw Error(`downloads: request (url="${o}"` + (s != null ? `, baseURL="${s}"` : "") + ") does not resolve to the public CDN (downloads.claude.ai). Use firstPartyApi for api.anthropic.com (residency-gated) or externalHttp for non-Anthropic hosts.");
}
var IY = { get(o, e) {
  return r(o, e), _Re(), Ht.get(o, e);
} };
export {
  IY
};

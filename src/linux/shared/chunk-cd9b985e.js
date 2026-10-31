// linux/shared/chunk-cd9b985e.js — Claude Code 2.1.310（linux）模块 chunk-knwmtcpr.js
import { xt } from "../mcp/toolbox-mcp-server-id.js";
var s = null;
function hRs(e) {
  let n = s;
  return s = e, n;
}
function BBn() {
  return s;
}
var r = null;
function yRs(e) {
  let n = r;
  return r = e, n;
}
async function Mte(e) {
  return await r?.(e) ?? false;
}
class p1e extends Error {
  consent;
  constructor(e) {
    super("first-party design MCP server requires consent");
    this.consent = e;
    this.name = "FirstPartyDesignNeedsConsentError";
  }
}
var t = null;
function _Rs(e) {
  let n = t;
  return t = e, n;
}
function a9e() {
  return t;
}
function jBn(e) {
  let n = xt();
  if (n.scopeExpansionDisclosed) return;
  n.scopeExpansionDisclosed = true, n.pendingScopeExpansionNotice = e;
}
function Lbo() {
  let e = xt(), n = e.pendingScopeExpansionNotice;
  return e.pendingScopeExpansionNotice = void 0, n;
}
function bRs() {
  let e = Lbo();
  if (e) process.stderr.write(`${e}
`);
}
export {
  BBn,
  Lbo,
  Mte,
  _Rs,
  a9e,
  bRs,
  hRs,
  jBn,
  p1e,
  yRs
};

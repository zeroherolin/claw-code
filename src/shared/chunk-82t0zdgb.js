// shared/chunk-82t0zdgb.js — Claude Code 2.1.310 模块 chunk-82t0zdgb.js
import { xt } from "../mcp/toolbox-mcp-server-id.fewh.js";
var s = null;
function exs(e) {
  let n = s;
  return s = e, n;
}
function iBn() {
  return s;
}
var r = null;
function txs(e) {
  let n = r;
  return r = e, n;
}
async function Bte(e) {
  return await r?.(e) ?? false;
}
class EBe extends Error {
  consent;
  constructor(e) {
    super("first-party design MCP server requires consent");
    this.consent = e;
    this.name = "FirstPartyDesignNeedsConsentError";
  }
}
var t = null;
function nxs(e) {
  let n = t;
  return t = e, n;
}
function gYe() {
  return t;
}
function aBn(e) {
  let n = xt();
  if (n.scopeExpansionDisclosed) return;
  n.scopeExpansionDisclosed = true, n.pendingScopeExpansionNotice = e;
}
function pbo() {
  let e = xt(), n = e.pendingScopeExpansionNotice;
  return e.pendingScopeExpansionNotice = void 0, n;
}
function rxs() {
  let e = pbo();
  if (e) process.stderr.write(`${e}
`);
}
export {
  Bte,
  EBe,
  aBn,
  exs,
  gYe,
  iBn,
  nxs,
  pbo,
  rxs,
  txs
};

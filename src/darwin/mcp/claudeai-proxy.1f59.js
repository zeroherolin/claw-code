// darwin/mcp/claudeai-proxy.1f59.js — Claude Code 2.1.310（darwin）模块 chunk-yjryt8aa.js
import { PE } from "../context/not-admin-owned.js";
import { Sr } from "../models/claude-3-5-sonnet.js";
import { Ko } from "../shared/chunk-8eee6836.js";
import { Vo } from "./claude-browser.js";
import { FNe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { xb, nJ, LC, Io } from "../core/conversation-engine.js";
import { Kls } from "./reserved-argument.js";
import { YR } from "../shared/chunk-9b73b6ad.js";
function M5t() {
  return nJ(Vo);
}
async function _Zr() {
  await Promise.all([YR(), FNe()]);
}
function SZr(e, r) {
  return Kls(r.scope) && !Io(e);
}
function B$e(e, r) {
  return SZr(e, r) && !t(r);
}
function t(e) {
  return import.meta.require("./emit-tripwire-event.js").mcpClientModule().isFirstPartyDesignServerConfig(e);
}
function bZr(e) {
  switch (e.type) {
    case void 0:
    case "stdio":
    case "http":
    case "sse":
    case "ws":
      return true;
    case "sdk":
    case "sse-ide":
    case "ws-ide":
    case "claudeai-proxy":
      return false;
  }
}
function i(e) {
  return Object.assign(xb(), Ko(e, bZr));
}
async function wZr({ storageV5: e } = {}) {
  if (PE() || Sr()) return { configs: xb(), deniedBySettings: false };
  await _Zr();
  let { servers: r } = await LC({}, { purpose: "deviceBridge", storageV5: e });
  return { configs: i(r), deniedBySettings: M5t() };
}
async function QRn(e = {}) {
  let { configs: r, deniedBySettings: o } = await wZr(e);
  return o ? xb() : r;
}
export {
  B$e,
  M5t,
  QRn,
  SZr,
  _Zr,
  bZr,
  wZr
};

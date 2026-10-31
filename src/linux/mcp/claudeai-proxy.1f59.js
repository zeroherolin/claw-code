// linux/mcp/claudeai-proxy.1f59.js — Claude Code 2.1.310（linux）模块 chunk-6vr8kjs4.js
import { xv } from "../context/not-admin-owned.js";
import { wr } from "../models/claude-3-5-sonnet.js";
import { Ko } from "../shared/chunk-8eee6836.js";
import { zo } from "./claude-browser.js";
import { ONe } from "../settings/settings-auto-mode-rules-untrusted-source-ignored.js";
import { RS, qJ, DT, Io } from "../core/conversation-engine.js";
import { gas } from "./reserved-argument.js";
import { KR } from "../shared/chunk-9b73b6ad.js";
function $5t() {
  return qJ(zo);
}
async function YQr() {
  await Promise.all([KR(), ONe()]);
}
function XQr(e, r) {
  return gas(r.scope) && !Io(e);
}
function RFe(e, r) {
  return XQr(e, r) && !t(r);
}
function t(e) {
  return import.meta.require("./emit-tripwire-event.js").mcpClientModule().isFirstPartyDesignServerConfig(e);
}
function JQr(e) {
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
  return Object.assign(RS(), Ko(e, JQr));
}
async function QQr({ storageV5: e } = {}) {
  if (xv() || wr()) return { configs: RS(), deniedBySettings: false };
  await YQr();
  let { servers: r } = await DT({}, { purpose: "deviceBridge", storageV5: e });
  return { configs: i(r), deniedBySettings: $5t() };
}
async function yCn(e = {}) {
  let { configs: r, deniedBySettings: o } = await QQr(e);
  return o ? RS() : r;
}
export {
  $5t,
  JQr,
  QQr,
  RFe,
  XQr,
  YQr,
  yCn
};

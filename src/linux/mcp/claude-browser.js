// linux/mcp/claude-browser.js — Claude Code 2.1.310（linux）模块 chunk-zf79f62g.js
import { sN } from "../shared/chunk-3b9c376b.js";
import { rwn } from "../shared/ccd-session-mgmt.js";
import { nt } from "../context/not-admin-owned.js";
var zo = "remote-devices";
var xqe = "claude_ai", $kt = "widgets", Mrt = "ccr-email", LVt = "visualize", oB = "memory", QSn = `mcp__${oB}__memory_`, ZSn = "a471caf9-e559-5ad8-836c-4e5972877185", ewn = "63d0e670-f310-5da6-b45c-86ffaf444223";
function z5(e, t) {
  return sN(t, sN(e, c));
}
var c = "00000000-0000-0000-0000-000000000000";
function gbe(e) {
  if (e.type !== "http") return;
  let t = "headers" in e ? e.headers : void 0;
  for (let [r, _] of Object.entries(t ?? {})) if (r.toLowerCase() === "x-mcp-server-id") return _.toLowerCase();
  return;
}
var Fkt = new nt(() => ({}));
function eai(e) {
  return gbe(e) === ewn;
}
var Drt = "758bbc64-7e6c-5dab-a3a5-2a4c7ca423fc", Xor = "667a974b-0f6b-57fc-8973-52854120fcb3", NVt = /* @__PURE__ */ new Set(["Claude_Pages", "Claude_Docs"]), W3o = "1a59c906-04da-521d-bda7-7f71b9f9e01c", Jor = "/v1/pages/mcp", hbe = "2cd180e1-ecb6-5156-82c8-41224ae6346e", Id = "claude-artifacts", twn = "/v1/code/mcp/ccr-artifacts", Pqe = "/api/artifacts/mcp";
function Qor(e) {
  return gbe(e) === W3o;
}
var Hrt = `mcp__${zo}__device_bash`, G3o = `mcp__${zo}__device_stage_files`, z3o = `mcp__${zo}__device_commit_files`, l5r = "ide", tai = `mcp__${l5r}__executeCode`, n = "office_bridge.listing";
function TNe(e) {
  let t = e._meta, r = typeof t === "object" && t !== null && n in t ? t[n] : void 0;
  return r === "stub" || r === "live" ? r : void 0;
}
var nai = [Hrt, `mcp__${zo}__device_list_dir`, G3o, z3o], K3o = /* @__PURE__ */ new Set([l5r, zo]), E = ["claude_in_chrome", "claude_browser", "claude_preview", "claude_code_ios_simulator", "claude_code_android_emulator", "computer_use", "framebuffer", "plugins", "skills", "mcp_registry", "scheduled_tasks", "cowork", "session_info", "dispatch", "remote_devices", "ccd_directory"], i = /* @__PURE__ */ new Set(["workspace", "terminal", "office", "visualize", "window_halo", "dev_debug", "ccd_session", rwn]);
function o(e) {
  return e.replace(/[^a-zA-Z0-9_-]+/g, "_").toLowerCase().replace(/-/g, "_");
}
var s = ["claude_browser"];
function nwn(e, t = s) {
  let r = o(e);
  return t.find((_) => o(_) === r) ?? null;
}
function FRe(e) {
  return e.toLowerCase().replace(/[^a-z0-9]/g, "");
}
function Ukt(e, t) {
  let r = FRe(e);
  return r.length > 0 && r === FRe(t);
}
function rai(e, t = s) {
  if (K3o.has(e)) return true;
  if (nwn(e, t) !== null) return false;
  let r = o(e);
  return i.has(r) || E.some((_) => r.startsWith(_));
}
export {
  $kt,
  Drt,
  FRe,
  Fkt,
  G3o,
  Hrt,
  Id,
  Jor,
  K3o,
  LVt,
  Mrt,
  NVt,
  Pqe,
  QSn,
  Qor,
  TNe,
  Ukt,
  W3o,
  Xor,
  ZSn,
  eai,
  ewn,
  gbe,
  hbe,
  l5r,
  nai,
  nwn,
  oB,
  rai,
  tai,
  twn,
  xqe,
  z3o,
  z5,
  zo
};

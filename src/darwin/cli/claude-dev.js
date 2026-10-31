// darwin/cli/claude-dev.js — Claude Code 2.1.310（darwin）模块 chunk-z5s1t7e4.js
import { V } from "../context/not-admin-owned.js";
import { rn } from "../auth/oauth-2025-04-20.js";
import { pzs } from "../tools/tool-result-persisted.js";
import { ndn } from "../context/team-memory-sync.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { Or } from "../shared/chunk-d2c47492.js";
import { st } from "../git/utf8-keep-bom.js";
import { Mt } from "../terminal/chunk-3ca478a4.js";
import { Wc } from "../fs/utf-8.aa9a.js";
import { _E } from "../settings/global-config-and-gates.js";
import { Js } from "../ide/opener-missing.js";
import { oy } from "../mcp/allowed-warning.js";
import { Ae } from "../vendor/react/chunk-0b0bf45d.js";
var k = Ae(oy(), 1);
var Ibr = "1.1.9669";
function v() {
  let e = [process.argv[1] || "", process.execPath || ""].map((o) => o.replaceAll("\\", "/")), n = ["/build-ant/", "/build-ant-native/", "/build-external/", "/build-external-native/"];
  return e.some((o) => n.some((r) => o.includes(r)));
}
function a(e, n, o = {}) {
  let r = new URL(`${e}://${n}`);
  for (let [s, i] of Object.entries(o)) r.searchParams.set(s, i);
  return r.toString();
}
function y(e, n) {
  switch (e.kind) {
    case "resume":
      return a(n, "resume", { session: e.sessionId });
    case "new-session":
      return `${a(n, "code/new")}?folder=${encodeURIComponent(e.folder)}`;
  }
}
var p = { appPath: "/Applications/Claude.app", openByPath: false };
async function l() {
  return p;
}
async function m(e) {
  let { code: n, stdout: o } = await st("defaults", ["read", `${e.appPath}/Contents/Info.plist`, "CFBundleShortVersionString"]);
  if (n !== 0) return null;
  let r = o.trim();
  return r.length > 0 ? r : null;
}
function h(e) {
  let n = k.coerce(e);
  return n !== null && _E(n.version, Ibr);
}
async function C() {
  let e = await l(), n = await m(e);
  if (!e.openByPath || n !== null && h(n)) return { app: e, version: n };
  let o = await m(p);
  return o === null ? null : { app: { appPath: p.appPath, openByPath: true }, version: o };
}
async function x(e) {
  return false;
}
var g = 'application id "com.github.Electron"';
async function u() {
  if (v()) {
    if ((await st("osascript", ["-e", `${g} is running`], { timeout: 5e3 })).stdout.trim() === "true") return "claude-dev";
  }
  return await O() ? "claude" : null;
}
async function lws() {
  return await u() !== null;
}
async function O() {
  {
    let e = await l();
    return e.openByPath || Wc(e.appPath);
  }
  return x("claude");
}
async function iuo() {
  let e = await u();
  if (e === null) return { status: "not-installed" };
  if (e === "claude-dev") return { status: "ready", version: "unknown", scheme: e };
  let n, o;
  try {
    {
      let r = await C();
      if (!r) return { status: "not-installed" };
      ({ app: o, version: n } = r);
    }
  } catch {
    return { status: "ready", version: "unknown", scheme: e };
  }
  if (!n) return { status: "ready", version: "unknown", scheme: e, macApp: o };
  if (!h(n)) return { status: "version-too-old", version: n };
  return { status: "ready", version: n, scheme: e, macApp: o };
}
var S = 200;
function D(e, n) {
  let { code: o, exitCode: r, stderr: s, error: i, timedOut: A, maxBufferExceeded: P } = n;
  if (o === 0) return { opened: true };
  let c = s || i;
  if (t(`Deep link opener ${e} failed: code ${o}, exitCode ${r ?? "undefined"}${c ? `: ${c}` : ""}`), A) return { opened: false, detail: `\`${e}\` timed out` };
  if (P) return { opened: false, detail: `\`${e}\` printed too much output` };
  let d = r === void 0 ? `\`${e}\` failed` : `\`${e}\` exited ${r}`, f = Mt(Or(s.trim()) || (r === void 0 ? i : "") || "", S).replace(/\.+$/, "");
  return { opened: false, detail: f.length === 0 ? d : `${d}: ${f}` };
}
async function w(e, n) {
  t(`Opening deep link: ${e}`);
  {
    if (e.startsWith("claude-dev:")) return D("osascript", await st("osascript", ["-e", "on run argv", "-e", `tell ${g} to open location (item 1 of argv)`, "-e", "end run", e]));
    let r = n ?? await l();
    return D("open", await st("open", r.openByPath ? ["-a", r.appPath, e] : [e]));
  }
  return { opened: false, detail: "no deep link opener for darwin" };
}
function mOt(e) {
  let n = rn().CLAUDE_AI_ORIGIN;
  if (!ndn(e)) return t("[desktop-deep-link] invalid claude.ai path; origin only", { level: "warn" }), n;
  return `${n}${e}`;
}
async function dws({ webPath: e, desktopPath: n }) {
  if (!ndn(e) || !ndn(n)) return "none";
  if (rn().CLAUDE_AI_ORIGIN === pzs) {
    let o = await u();
    if (o !== null && (await w(a(o, `claude.ai${n}`))).opened) return "desktop";
  }
  return await Js(mOt(e)) ? "browser" : "none";
}
async function auo(e) {
  let n = await iuo();
  if (n.status === "not-installed") return { success: false, reason: "not_installed", error: "Claude Desktop is not installed. Install it from https://claude.ai/download" };
  if (n.status === "version-too-old") return { success: false, reason: "outdated", error: `Claude Desktop ${n.version} is too old. Update to ${Ibr} or later.` };
  let o = y(e, n.scheme), r = await w(o, n.macApp);
  if (!r.opened) return { success: false, reason: "open_failed", error: `Couldn't open Claude Desktop (${r.detail}). Open Claude Desktop and try again.`, deepLinkUrl: o };
  return { success: true, deepLinkUrl: o };
}
async function cws() {
  return auo({ kind: "resume", sessionId: V() });
}
export {
  Ibr,
  auo,
  cws,
  dws,
  iuo,
  lws,
  mOt
};

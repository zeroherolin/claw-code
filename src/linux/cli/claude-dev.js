// linux/cli/claude-dev.js — Claude Code 2.1.310（linux）模块 chunk-w4jqphxm.js
import { q } from "../context/not-admin-owned.js";
import { rn } from "../auth/oauth-2025-04-20.js";
import { Czs } from "../tools/tool-result-persisted.js";
import { idn } from "../context/team-memory-sync.js";
import { t } from "../fs/gitlab-runner-authentication-token.js";
import { Or } from "../shared/chunk-d2c47492.js";
import { it } from "../git/utf8-keep-bom.js";
import { Mt } from "../terminal/chunk-3ca478a4.js";
import { yv } from "../settings/global-config-and-gates.js";
import { Js } from "../ide/opener-missing.js";
import { oy } from "../mcp/allowed-warning.js";
import { Ce } from "../vendor/react/chunk-0b0bf45d.js";
var m = Ce(oy(), 1);
var gSr = "1.1.9669";
function h() {
  let e = [process.argv[1] || "", process.execPath || ""].map((o) => o.replaceAll("\\", "/")), n = ["/build-ant/", "/build-ant-native/", "/build-external/", "/build-external-native/"];
  return e.some((o) => n.some((r) => o.includes(r)));
}
function p(e, n, o = {}) {
  let r = new URL(`${e}://${n}`);
  for (let [a, s] of Object.entries(o)) r.searchParams.set(a, s);
  return r.toString();
}
function g(e, n) {
  switch (e.kind) {
    case "resume":
      return p(n, "resume", { session: e.sessionId });
    case "new-session":
      return `${p(n, "code/new")}?folder=${encodeURIComponent(e.folder)}`;
  }
}
function A(e) {
  let n = m.coerce(e);
  return n !== null && yv(n.version, gSr);
}
async function D(e) {
  {
    let { code: o, stdout: r } = await it("xdg-mime", ["query", "default", `x-scheme-handler/${e}`]);
    return o === 0 && r.trim().length > 0;
  }
  return false;
}
async function l() {
  if (h()) {
    if (await D("claude-dev")) return "claude-dev";
  }
  return await w() ? "claude" : null;
}
async function MSs() {
  return await l() !== null;
}
async function w() {
  return D("claude");
}
async function v() {
  return null;
}
async function Lco() {
  let e = await l();
  if (e === null) return { status: "not-installed" };
  if (e === "claude-dev") return { status: "ready", version: "unknown", scheme: e };
  let n, o;
  try {
    n = await v();
  } catch {
    return { status: "ready", version: "unknown", scheme: e };
  }
  if (!n) return { status: "ready", version: "unknown", scheme: e, macApp: o };
  if (!A(n)) return { status: "version-too-old", version: n };
  return { status: "ready", version: n, scheme: e, macApp: o };
}
var P = 200;
function y(e, n) {
  let { code: o, exitCode: r, stderr: a, error: s, timedOut: u, maxBufferExceeded: c } = n;
  if (o === 0) return { opened: true };
  let i = a || s;
  if (t(`Deep link opener ${e} failed: code ${o}, exitCode ${r ?? "undefined"}${i ? `: ${i}` : ""}`), u) return { opened: false, detail: `\`${e}\` timed out` };
  if (c) return { opened: false, detail: `\`${e}\` printed too much output` };
  let d = r === void 0 ? `\`${e}\` failed` : `\`${e}\` exited ${r}`, f = Mt(Or(a.trim()) || (r === void 0 ? s : "") || "", P).replace(/\.+$/, "");
  return { opened: false, detail: f.length === 0 ? d : `${d}: ${f}` };
}
async function k(e, n) {
  return t(`Opening deep link: ${e}`), y("xdg-open", await it("xdg-open", [e], { useCwd: true, useToolMemoryCgroup: false }));
  return { opened: false, detail: "no deep link opener for linux" };
}
function aOt(e) {
  let n = rn().CLAUDE_AI_ORIGIN;
  if (!idn(e)) return t("[desktop-deep-link] invalid claude.ai path; origin only", { level: "warn" }), n;
  return `${n}${e}`;
}
async function DSs({ webPath: e, desktopPath: n }) {
  if (!idn(e) || !idn(n)) return "none";
  if (rn().CLAUDE_AI_ORIGIN === Czs) {
    let o = await l();
    if (o !== null && (await k(p(o, `claude.ai${n}`))).opened) return "desktop";
  }
  return await Js(aOt(e)) ? "browser" : "none";
}
async function Nco(e) {
  let n = await Lco();
  if (n.status === "not-installed") return { success: false, reason: "not_installed", error: "Claude Desktop is not installed. Install it from https://claude.ai/download" };
  if (n.status === "version-too-old") return { success: false, reason: "outdated", error: `Claude Desktop ${n.version} is too old. Update to ${gSr} or later.` };
  let o = g(e, n.scheme), r = await k(o, n.macApp);
  if (!r.opened) return { success: false, reason: "open_failed", error: `Couldn't open Claude Desktop (${r.detail}). Open Claude Desktop and try again.`, deepLinkUrl: o };
  return { success: true, deepLinkUrl: o };
}
async function HSs() {
  return Nco({ kind: "resume", sessionId: q() });
}
export {
  DSs,
  HSs,
  Lco,
  MSs,
  Nco,
  aOt,
  gSr
};

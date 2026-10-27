// chrome/chrome-open-url.r2dv.js — Claude Code 2.1.310 模块 chunk-r2dv3pwx.js
import { S, c } from "../agents/third-party.ydpb.js";
import { Kt } from "../telemetry/anthropic-workspace-id.36ys.js";
import { g, m } from "../telemetry/chunk-wn8xtaqg.js";
import { t } from "../fs/gitlab-runner-authentication-token.d7b0.js";
import { hc, i } from "../shared/environment.9a41.js";
import { O } from "../fs/chunk-dz0rx1wn.js";
import { st, ct } from "../git/utf8-keep-bom.c49x.js";
import { zi } from "../remote/chunk-bqkq3e7y.js";
import { V2, Jqs, Qqs } from "../shell/chunk-cqjev9vb.js";
import { Va } from "./browser-batch.ny0f.js";
import { readdir as M, stat as w } from "fs/promises";
import { homedir as b, platform as v, userInfo as x } from "os";
import { join as u } from "path";
var V0 = `mcp__${Va}__`, W2 = "ClaudeInChromeDomain", l = { chrome: { name: "Google Chrome", macos: { appName: "Google Chrome", nativeMessagingPath: ["Library", "Application Support", "Google", "Chrome", "NativeMessagingHosts"] }, linux: { binaries: ["google-chrome", "google-chrome-stable"], nativeMessagingPath: [".config", "google-chrome", "NativeMessagingHosts"] }, windows: { dataPath: ["Google", "Chrome", "User Data"], registryKey: "HKCU\\Software\\Google\\Chrome\\NativeMessagingHosts", appPathsExe: "chrome.exe" } }, brave: { name: "Brave", macos: { appName: "Brave Browser", nativeMessagingPath: ["Library", "Application Support", "BraveSoftware", "Brave-Browser", "NativeMessagingHosts"] }, linux: { binaries: ["brave-browser", "brave"], nativeMessagingPath: [".config", "BraveSoftware", "Brave-Browser", "NativeMessagingHosts"] }, windows: { dataPath: ["BraveSoftware", "Brave-Browser", "User Data"], registryKey: "HKCU\\Software\\BraveSoftware\\Brave-Browser\\NativeMessagingHosts", appPathsExe: "brave.exe" } }, arc: { name: "Arc", macos: { appName: "Arc", nativeMessagingPath: ["Library", "Application Support", "Arc", "User Data", "NativeMessagingHosts"] }, linux: { binaries: [], nativeMessagingPath: [] }, windows: { dataPath: ["Arc", "User Data"], registryKey: "HKCU\\Software\\ArcBrowser\\Arc\\NativeMessagingHosts" } }, chromium: { name: "Chromium", macos: { appName: "Chromium", nativeMessagingPath: ["Library", "Application Support", "Chromium", "NativeMessagingHosts"] }, linux: { binaries: ["chromium", "chromium-browser"], nativeMessagingPath: [".config", "chromium", "NativeMessagingHosts"] }, windows: { dataPath: ["Chromium", "User Data"], registryKey: "HKCU\\Software\\Chromium\\NativeMessagingHosts" } }, edge: { name: "Microsoft Edge", macos: { appName: "Microsoft Edge", nativeMessagingPath: ["Library", "Application Support", "Microsoft Edge", "NativeMessagingHosts"] }, linux: { binaries: ["microsoft-edge", "microsoft-edge-stable"], nativeMessagingPath: [".config", "microsoft-edge", "NativeMessagingHosts"] }, windows: { dataPath: ["Microsoft", "Edge", "User Data"], registryKey: "HKCU\\Software\\Microsoft\\Edge\\NativeMessagingHosts", appPathsExe: "msedge.exe" } }, vivaldi: { name: "Vivaldi", macos: { appName: "Vivaldi", nativeMessagingPath: ["Library", "Application Support", "Vivaldi", "NativeMessagingHosts"] }, linux: { binaries: ["vivaldi", "vivaldi-stable"], nativeMessagingPath: [".config", "vivaldi", "NativeMessagingHosts"] }, windows: { dataPath: ["Vivaldi", "User Data"], registryKey: "HKCU\\Software\\Vivaldi\\NativeMessagingHosts", appPathsExe: "vivaldi.exe" } }, opera: { name: "Opera", macos: { appName: "Opera", nativeMessagingPath: ["Library", "Application Support", "com.operasoftware.Opera", "NativeMessagingHosts"] }, linux: { binaries: ["opera"], nativeMessagingPath: [".config", "opera", "NativeMessagingHosts"] }, windows: { dataPath: ["Opera Software", "Opera Stable"], registryKey: "HKCU\\Software\\Opera Software\\Opera Stable\\NativeMessagingHosts", useRoaming: true, appPathsExe: "opera.exe" } } }, h = ["chrome", "brave", "arc", "edge", "chromium", "vivaldi", "opera"];
function AFo() {
  let e = O(), o = b(), r = [];
  for (let s of h) {
    let a = l[s];
    switch (e) {
      case "macos":
        if (a.macos.nativeMessagingPath.length > 0) r.push({ browser: s, path: u(o, ...a.macos.nativeMessagingPath) });
        break;
      case "linux":
      case "wsl":
        if (a.linux.nativeMessagingPath.length > 0) r.push({ browser: s, path: u(o, ...a.linux.nativeMessagingPath) });
        break;
      case "windows":
        break;
    }
  }
  return r;
}
function RFo() {
  let e = [];
  for (let o of h) {
    let r = l[o];
    if (r.windows.registryKey) e.push({ browser: o, key: r.windows.registryKey });
  }
  return e;
}
async function hUr() {
  let e = O();
  for (let o of h) {
    let r = l[o];
    switch (e) {
      case "macos": {
        let s = `/Applications/${r.macos.appName}.app`;
        try {
          if ((await w(s)).isDirectory()) return t(`[Claude in Chrome] Detected browser: ${r.name}`), o;
        } catch (a) {
          if (!Kt(a)) throw a;
        }
        break;
      }
      case "wsl":
      case "linux": {
        for (let s of r.linux.binaries) if (await hc(s).catch(() => null)) return t(`[Claude in Chrome] Detected browser: ${r.name}`), o;
        break;
      }
      case "windows": {
        let s = b();
        if (r.windows.dataPath.length > 0) {
          let a = r.windows.useRoaming ? u(s, "AppData", "Roaming") : u(s, "AppData", "Local"), p = u(a, ...r.windows.dataPath);
          try {
            if ((await w(p)).isDirectory()) return t(`[Claude in Chrome] Detected browser: ${r.name}`), o;
          } catch (n) {
            if (!Kt(n)) throw n;
          }
        }
        break;
      }
    }
  }
  return null;
}
var P = 200;
function xFo(e) {
  let o = zi().trackedTabIds;
  if (o.size >= P && !o.has(e)) o.clear();
  o.add(e);
}
function PFo(e) {
  return zi().trackedTabIds.has(e);
}
function d(e) {
  return { exec_exit_code: e.code, exec_failure_kind: e.exitCode !== void 0 ? S("nonzero_exit") : e.code === 127 ? S("not_found") : S("spawn_failed_or_killed") };
}
async function LGe(e) {
  if (!/^https?:\/\//i.test(e)) return m("chrome_open_url", "invalid_url"), false;
  let o = O(), r = await hUr();
  if (!r) return t("[Claude in Chrome] No compatible browser found"), m("chrome_open_url", "no_browser"), false;
  let s = l[r];
  switch (o) {
    case "macos": {
      let a = await st("open", ["-a", s.macos.appName, e]);
      if (a.code === 0) return g("chrome_open_url"), true;
      return m("chrome_open_url", "exec_failed", d(a)), false;
    }
    case "windows": {
      let a = s.windows.appPathsExe, p = false;
      if (a) {
        let f = await Jqs(a);
        if (f) {
          if (await Qqs(f, [e])) return g("chrome_open_url", { open_method: S("app_paths"), browser: c(r) }), true;
          p = true;
        }
      }
      let n = await ct("rundll32", ["url,OpenURL", e], { cwd: V2() });
      if (n.code === 0) return g("chrome_open_url", { open_method: p ? S("rundll32_after_spawn_fail") : a ? S("rundll32") : S("rundll32_no_app_paths_support"), browser: c(r) }), true;
      return m("chrome_open_url", "exec_failed", { ...d(n), ...p && { app_paths_spawn_failed: true }, browser: c(r) }), false;
    }
    case "wsl":
    case "linux": {
      let a;
      for (let p of s.linux.binaries) {
        let n = await st(p, [e], { useCwd: true, useToolMemoryCgroup: false });
        if (n.code === 0) return g("chrome_open_url"), true;
        if (a?.exitCode === void 0 || n.exitCode !== void 0) a = n;
      }
      return m("chrome_open_url", "exec_failed", a ? d(a) : void 0), false;
    }
    default:
      return m("chrome_open_url", "exec_failed"), false;
  }
}
function Gun() {
  return `/tmp/claude-mcp-browser-bridge-${C()}`;
}
function zun() {
  if (v() === "win32") return `\\\\.\\pipe\\${_()}`;
  return u(Gun(), `${process.pid}.sock`);
}
async function IFo() {
  if (v() === "win32") return [`\\\\.\\pipe\\${_()}`];
  let e = [], o = Gun();
  try {
    let r = await M(o);
    for (let s of r) if (s.endsWith(".sock")) e.push(u(o, s));
  } catch {
  }
  return e;
}
function _() {
  return `claude-mcp-browser-bridge-${C()}`;
}
function C() {
  try {
    return x().username || "default";
  } catch {
    return i.USER || i.USERNAME || "default";
  }
}
export {
  AFo,
  Gun,
  IFo,
  LGe,
  PFo,
  RFo,
  V0,
  W2,
  hUr,
  xFo,
  zun
};
